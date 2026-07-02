/* runtime-js.js — student JavaScript execution in a Blob Worker.
   Interface matches CL.runtime.python exactly so engine.js richRun() treats
   both runtimes identically.

   Infinite-loop protection: main thread sets an 8-second timeout; if the
   worker hasn't posted 'done' by then we terminate and respawn it. The worker
   never freezes the page.

   Bridge functions (play/sleep/turtle/plot) are globals in the worker and
   record the same event array format as the Python bridge:
     ['play', midiNote, durSeconds, atSeconds]
     ['t_forward', dist] etc.
   After each run the event list is sent to the main thread. CL.music,
   CL.turtle, and CL.plot then render from those events — exactly as they do
   for Python runs. */

(function () {
  "use strict";
  var CL = (window.CL = window.CL || {});

  var WORKER_SRC = [
    // Virtual-clock bridge — identical surface to Python bridge.
    "var _events = [], _clock = [0.0, 120.0];",
    "function set_tempo(bpm) { _clock[1] = parseFloat(bpm); }",
    "function sleep(beats) { _clock[0] += (beats === undefined ? 1.0 : parseFloat(beats)) * (60.0 / _clock[1]); }",
    "function play(note, dur) { _events.push(['play', parseFloat(note), parseFloat(dur === undefined ? 0.4 : dur), _clock[0]]); }",
    "function sample(name) { _events.push(['sample', String(name), _clock[0]]); }",
    "function play_pattern(notes, gap) { gap = gap === undefined ? 0.5 : parseFloat(gap); for (var _i = 0; _i < notes.length; _i++) { play(notes[_i]); sleep(gap); } }",
    "function forward(d) { _events.push(['t_forward', parseFloat(d)]); }",
    "function backward(d) { _events.push(['t_back', parseFloat(d)]); }",
    "function left(a) { _events.push(['t_left', parseFloat(a)]); }",
    "function right(a) { _events.push(['t_right', parseFloat(a)]); }",
    "function penup() { _events.push(['t_penup']); }",
    "function pendown() { _events.push(['t_pendown']); }",
    "function pencolor(c) { _events.push(['t_color', String(c)]); }",
    "function goto_(x, y) { _events.push(['t_goto', parseFloat(x), parseFloat(y)]); }",
    "function home() { _events.push(['t_home']); }",
    "function plot(xs, ys) { _events.push(['plot', Array.from(xs).map(Number), ys ? Array.from(ys).map(Number) : null]); }",
    "function bar(labels, values) { _events.push(['bar', Array.from(labels).map(String), Array.from(values).map(Number)]); }",
    "function dotplot(xs, ys) { _events.push(['dotplot', Array.from(xs).map(Number), ys ? Array.from(ys).map(Number) : null]); }",
    "function piano_roll(notes, starts, durations) { _events.push(['piano_roll', Array.from(notes).map(Number), Array.from(starts).map(Number), Array.from(durations).map(Number)]); }",
    // Capture console.log → stdout, console.error → stderr.
    "var _log = console.log, _err = console.error;",
    "console.log = function() { postMessage({ type: 'stdout', text: Array.prototype.slice.call(arguments).map(String).join(' ') + '\\n' }); };",
    "console.error = function() { postMessage({ type: 'stderr', text: Array.prototype.slice.call(arguments).map(String).join(' ') + '\\n' }); };",
    // Run handler: reset state, execute, report.
    "onmessage = function(e) {",
    "  if (e.data.type !== 'run') return;",
    "  _events = []; _clock = [0.0, 120.0];",
    "  var runErr = null;",
    "  try { (new Function(e.data.code))(); }",
    "  catch(ex) { runErr = String(ex); }",
    "  if (runErr) { postMessage({ type: 'error', text: runErr }); }",
    "  else { postMessage({ type: 'events', events: _events }); }",
    "  postMessage({ type: 'done' });",
    "};",
  ].join("\n");

  var worker = null;
  var blobUrl = null;
  var activeRun = null;
  var runTimeout = null;
  var RUN_TIMEOUT_MS = 8000;

  function clearRunTimeout() {
    if (runTimeout !== null) { clearTimeout(runTimeout); runTimeout = null; }
  }

  function finishRun(result) {
    clearRunTimeout();
    var run = activeRun;
    activeRun = null;
    if (run && run.resolve) run.resolve(result);
  }

  function spawn() {
    if (worker) worker.terminate();
    if (blobUrl) URL.revokeObjectURL(blobUrl);
    blobUrl = URL.createObjectURL(new Blob([WORKER_SRC], { type: "application/javascript" }));
    worker = new Worker(blobUrl);
    worker.onmessage = function (e) {
      var m = e.data;
      if (m.type === "stdout") {
        if (activeRun && activeRun.onStdout) activeRun.onStdout(m.text);
      } else if (m.type === "stderr") {
        if (activeRun && activeRun.onStderr) activeRun.onStderr(m.text);
      } else if (m.type === "events") {
        if (activeRun && activeRun.onEvents) activeRun.onEvents(m.events);
      } else if (m.type === "done") {
        finishRun({ ok: true });
      } else if (m.type === "error") {
        finishRun({ ok: false, error: m.text });
      }
    };
    worker.onerror = function (ev) {
      finishRun({ ok: false, error: "Worker error: " + (ev.message || "") });
    };
  }

  // Pre-create so the first run doesn't pay the Blob-URL setup cost.
  spawn();

  CL.runtime = CL.runtime || {};
  CL.runtime.js = {
    run: function (code, opts) {
      opts = opts || {};
      if (!worker) spawn();
      return new Promise(function (resolve) {
        activeRun = {
          onStdout: opts.onStdout,
          onStderr: opts.onStderr,
          onEvents: opts.onEvents,
          resolve: resolve,
        };
        runTimeout = setTimeout(function () {
          finishRun({ ok: false, error: "Timed out — is there an infinite loop?" });
          spawn();
        }, RUN_TIMEOUT_MS);
        worker.postMessage({ type: "run", code: code });
      });
    },
    stop: function () {
      finishRun({ ok: false, error: "stopped" });
      spawn();
      return Promise.resolve();
    },
  };
})();
