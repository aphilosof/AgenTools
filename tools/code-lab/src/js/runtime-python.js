/* runtime-python.js — Pyodide lifecycle: lazy load, stdout/stderr capture,
   execution timeouts, registering the music/turtle/plot bridge modules so
   student code can `from music import play, sleep`.

   Architecture (Stage 1A spike 1, proven in spike/runtime-spike.html): Pyodide
   runs in a Web Worker spawned from a Blob URL — direct file:// workers are
   blocked, but a Blob worker is allowed and importScripts pulls Pyodide from the
   CDN. A runaway loop is killed by terminating the worker and re-initialising;
   the page never freezes. SharedArrayBuffer interrupts are not usable on file://.

   The music/turtle/plot bridges and the stepper (sys.settrace in the worker)
   attach here in later steps. */

(function () {
  "use strict";
  var CL = (window.CL = window.CL || {});

  // Worker source as a line array (no escaping headaches); becomes a Blob.
  // The PRELUDE installs the Sonic Pi-style music bridge as builtins so student
  // code can call play/sleep/etc. without imports. The functions record timed
  // events on a virtual clock (lists/tuples, to avoid quote-nesting in dicts):
  //   _clock = [t_seconds, tempo_bpm]
  //   event  = ('play', note, durSeconds, atSeconds) | ('sample', name, atSeconds)
  // After each run the event list is handed to the main thread for Web Audio.
  var WORKER_SRC = [
    "importScripts('https://cdn.jsdelivr.net/pyodide/v0.29.4/full/pyodide.js');",
    "let pyodide = null;",
    "var PRELUDE = [",
    "  'import builtins',",
    "  '_events = []',",
    "  '_clock = [0.0, 120.0]',",
    "  'def set_tempo(bpm):',",
    "  '    _clock[1] = float(bpm)',",
    "  'def sleep(beats=1.0):',",
    "  '    _clock[0] += float(beats) * (60.0 / _clock[1])',",
    "  'def play(note, dur=0.4):',",
    "  \"    _events.append(('play', float(note), float(dur), _clock[0]))\",",
    "  'def sample(name):',",
    "  \"    _events.append(('sample', str(name), _clock[0]))\",",
    "  'def play_pattern(notes, gap=0.5):',",
    "  '    for _n in notes:',",
    "  '        play(_n)',",
    "  '        sleep(gap)',",
    "  'def forward(d):',",
    "  \"    _events.append(('t_forward', float(d)))\",",
    "  'def backward(d):',",
    "  \"    _events.append(('t_back', float(d)))\",",
    "  'def left(a):',",
    "  \"    _events.append(('t_left', float(a)))\",",
    "  'def right(a):',",
    "  \"    _events.append(('t_right', float(a)))\",",
    "  'def penup():',",
    "  \"    _events.append(('t_penup',))\",",
    "  'def pendown():',",
    "  \"    _events.append(('t_pendown',))\",",
    "  'def pencolor(c):',",
    "  \"    _events.append(('t_color', str(c)))\",",
    "  'def goto(x, y):',",
    "  \"    _events.append(('t_goto', float(x), float(y)))\",",
    "  'def home():',",
    "  \"    _events.append(('t_home',))\",",
    "  'def plot(xs, ys=None):',",
    "  \"    _events.append(('plot', list(xs), (list(ys) if ys is not None else None)))\",",
    "  'def bar(labels, values):',",
    "  \"    _events.append(('bar', [str(_l) for _l in labels], [float(_v) for _v in values]))\",",
    "  'def dotplot(xs, ys=None):',",
    "  \"    _events.append(('dotplot', list(xs), (list(ys) if ys is not None else None)))\",",
    "  'def piano_roll(notes, starts, durations):',",
    "  \"    _events.append(('piano_roll', [int(_n) for _n in notes], [float(_s) for _s in starts], [float(_d) for _d in durations]))\",",
    "  'for _f in (set_tempo, sleep, play, sample, play_pattern, forward, backward, left, right, penup, pendown, pencolor, goto, home, plot, bar, dotplot, piano_roll):',",
    "  '    setattr(builtins, _f.__name__, _f)',",
    // Mock input(): consumes from a queue pre-loaded per run so student code using
    // input() works in exercises without blocking the worker on real stdin.
    "  '_input_queue = []',",
    "  'def input(prompt=\"\"):',",
    "  '    if prompt:',",
    "  '        print(prompt, end=\"\", flush=True)',",
    "  '    if _input_queue:',",
    "  '        return str(_input_queue.pop(0))',",
    "  '    return \"\"',",
    "  'setattr(builtins, \"input\", input)',",
    // Stepper: sys.settrace records (line, locals) at each executed line of the
    // student's code (filename '<student>'), capped, for trace-then-scrub.
    "  'import sys',",
    "  'import linecache',",
    "  'import traceback as _tb',",
    "  '_steps = []',",
    "  '_err = [None]',",
    "  '_STEP_MAX = 500',",
    "  'def _snapshot(frame):',",
    "  '    loc = {}',",
    "  '    for _k, _v in list(frame.f_locals.items()):',",
    "  \"        if _k.startswith('__'):\",",
    "  '            continue',",
    "  '        try:',",
    "  '            _r = repr(_v)',",
    "  '        except Exception:',",
    "  \"            _r = '<?>'\",",
    "  '        if len(_r) > 200:',",
    "  \"            _r = _r[:200] + '...'\",",
    "  '        loc[_k] = _r',",
    "  '    return (frame.f_lineno, loc)',",
    "  'def _tracer(frame, event, arg):',",
    "  \"    if frame.f_code.co_filename != '<student>':\",",
    "  '        return _tracer',",
    "  \"    if event == 'line' and len(_steps) < _STEP_MAX:\",",
    "  '        _steps.append(_snapshot(frame))',",
    "  '    return _tracer',",
    "  'def _run_traced(src):',",
    "  \"    linecache.cache['<student>'] = (len(src), None, src.splitlines(keepends=True), '<student>')\",",
    "  '    sys.settrace(_tracer)',",
    "  '    try:',",
    "  \"        exec(compile(src, '<student>', 'exec'), {})\",",
    "  '    except BaseException as _e:',",
    "  \"        _frames = [_f for _f in _tb.extract_tb(_e.__traceback__) if _f.filename == '<student>']\",",
    "  \"        _head = ('Traceback (most recent call last):' + chr(10)) if _frames else ''\",",
    "  '        _err[0] = _head + str().join(_tb.format_list(_frames)) + str().join(_tb.format_exception_only(type(_e), _e))',",
    "  '    finally:',",
    "  '        sys.settrace(None)',",
    "].join('\\n');",
    "async function init() {",
    "  pyodide = await loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.29.4/full/' });",
    "  pyodide.setStdout({ batched: function (s) { postMessage({ type: 'stdout', text: s }); } });",
    "  pyodide.setStderr({ batched: function (s) { postMessage({ type: 'stderr', text: s }); } });",
    "  await pyodide.runPythonAsync(PRELUDE);",
    "  postMessage({ type: 'ready' });",
    "}",
    "init().catch(function (e) { postMessage({ type: 'fatal', text: String(e) }); });",
    "onmessage = async function (e) {",
    "  if (e.data.type === 'run') {",
    "    try {",
    "      await pyodide.runPythonAsync('_events.clear(); _clock[0] = 0.0; _steps.clear(); _err[0] = None; _input_queue.clear()');",
    "      if (e.data.mockInput && e.data.mockInput.length) { pyodide.globals.set('_input_queue', e.data.mockInput); }",
    "      pyodide.globals.set('_src', e.data.code);",
    "      await pyodide.runPythonAsync('_run_traced(_src)');",
    "      var erp = pyodide.globals.get('_err'); var er = erp.toJs(); erp.destroy();",
    "      if (er && er[0]) {",
    "        postMessage({ type: 'error', text: er[0] });",
    "      } else {",
    "        var evp = pyodide.globals.get('_events'); var ev = evp.toJs(); evp.destroy();",
    "        var stp = pyodide.globals.get('_steps'); var st = stp.toJs({ dict_converter: Object.fromEntries }); stp.destroy();",
    "        postMessage({ type: 'events', events: ev });",
    "        postMessage({ type: 'steps', steps: st });",
    "      }",
    "      postMessage({ type: 'done' });",
    "    } catch (err) { postMessage({ type: 'error', text: String(err && err.message ? err.message : err) }); }",
    "  }",
    "};",
  ].join("\n");

  var worker = null;
  var blobUrl = null;
  var status = "idle"; // idle | loading | ready | running | error
  var statusCbs = [];
  var readyResolvers = [];
  var readyRejectors = [];
  var loadError = null;
  var activeRun = null; // { onStdout, onStderr, resolve }

  function setStatus(s) {
    status = s;
    statusCbs.forEach(function (cb) { cb(s); });
  }

  function finishRun(result) {
    var run = activeRun;
    activeRun = null;
    if (status === "running") setStatus("ready");
    if (run && run.resolve) run.resolve(result);
  }

  function failLoad(msg) {
    loadError = msg;
    if (worker) { worker.terminate(); worker = null; }
    if (blobUrl) { URL.revokeObjectURL(blobUrl); blobUrl = null; }
    setStatus("error");
    var rj = readyRejectors.splice(0);
    readyResolvers.splice(0);
    rj.forEach(function (fn) { fn(new Error(msg)); });
  }

  function spawn() {
    if (worker) worker.terminate();
    if (blobUrl) URL.revokeObjectURL(blobUrl);
    blobUrl = URL.createObjectURL(new Blob([WORKER_SRC], { type: "application/javascript" }));
    worker = new Worker(blobUrl);
    setStatus("loading");
    var initTimeout = setTimeout(function () {
      if (status === "loading") {
        failLoad("Python timed out loading (30 s). Your browser may be blocking network requests from local files — try opening in Chrome or Firefox, or use a local server.");
      }
    }, 30000);
    worker.onmessage = function (e) {
      var m = e.data;
      if (m.type === "ready") {
        clearTimeout(initTimeout);
        setStatus("ready");
        var rs = readyResolvers.splice(0);
        readyRejectors.splice(0);
        rs.forEach(function (r) { r(); });
      } else if (m.type === "stdout") {
        if (activeRun && activeRun.onStdout) activeRun.onStdout(m.text);
      } else if (m.type === "stderr") {
        if (activeRun && activeRun.onStderr) activeRun.onStderr(m.text);
      } else if (m.type === "events") {
        if (activeRun && activeRun.onEvents) activeRun.onEvents(m.events);
      } else if (m.type === "steps") {
        if (activeRun && activeRun.onSteps) activeRun.onSteps(m.steps);
      } else if (m.type === "done") {
        finishRun({ ok: true });
      } else if (m.type === "error") {
        finishRun({ ok: false, error: m.text });
      } else if (m.type === "fatal") {
        clearTimeout(initTimeout);
        failLoad("Could not load Python: " + m.text);
      }
    };
    worker.onerror = function (ev) {
      clearTimeout(initTimeout);
      failLoad("Python worker failed to start: " + (ev.message || "unknown error") + ". Try Chrome or Firefox.");
    };
  }

  function ensureReady() {
    return new Promise(function (resolve, reject) {
      if (status === "ready") return resolve();
      if (status === "error") return reject(new Error(loadError || "Python failed to load"));
      readyResolvers.push(resolve);
      readyRejectors.push(reject);
      if (!worker) spawn();
    });
  }

  CL.runtime = CL.runtime || {};
  CL.runtime.python = {
    ensureReady: ensureReady,
    getStatus: function () { return status; },
    onStatus: function (cb) { statusCbs.push(cb); cb(status); },
    // Run student code. opts.onStdout/onStderr receive text chunks as they print.
    run: function (code, opts) {
      opts = opts || {};
      return ensureReady().then(function () {
        return new Promise(function (resolve) {
          activeRun = { onStdout: opts.onStdout, onStderr: opts.onStderr, onEvents: opts.onEvents, onSteps: opts.onSteps, resolve: resolve };
          setStatus("running");
          worker.postMessage({ type: "run", code: code, mockInput: opts.mockInput || [] });
        });
      }).catch(function (e) {
        return { ok: false, error: String(e.message || e) };
      });
    },
    // Kill a runaway loop and bring Python back to ready.
    stop: function () {
      finishRun({ ok: false, error: "stopped" });
      spawn();
      return ensureReady();
    },
  };
})();
