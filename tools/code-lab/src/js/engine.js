/* engine.js — app root: lesson navigation, the five-rung challenge flow
   (predict/modify/fix/complete/write), hint ladder, model-solution compare,
   checkpoint handling, theme switching and unlock logic. Owns the DOM.

   Current scope: renders the DESIGN.md lesson-screen anatomy across all three
   themes, with a real editor (CodeMirror, textarea fallback) wired to the
   Pyodide worker runtime — type Python, Run, see real output; Stop kills a
   runaway loop. Only controls that work are shown. The hint ladder, model
   solution, checkers, sound/turtle/plot, the stepper, and JS arrive in later
   steps. */

(function () {
  "use strict";
  var CL = (window.CL = window.CL || {});

  var THEMES = ["magazine", "c64", "terminal"];

  // A layout-demo lesson. NOT curriculum — Phase 2 authors real lessons into
  // lessons/. Its starter is plain Python that runs today (no music bridge yet),
  // so Run produces honest output. The prose is long enough to judge c64
  // body-face readability.
  var DEMO = {
    id: "demo",
    world: 1,
    lessonNo: 1,
    total: 1,
    title: "First Sound",
    challengeCode: "W1-1",
    filename: "first_sound.py",
    lang: "py",
    promptTitle: "Make a sound",
    promptText: [
      "The play command makes a sound, and the number is the note: bigger numbers sound higher. The sleep command waits in between.",
      "The notes should go up: 60, then 64, then 67. One note is wrong. Press run to hear it, fix the wrong number, then press check. (Sound on!)",
    ],
    starterCode: "play(60)\nsleep(0.5)\nplay(64)\nsleep(0.5)\nplay(62)\n",
    check: { type: "calls", calls: [{ fn: "play", note: 60 }, { fn: "play", note: 64 }, { fn: "play", note: 67 }] },
    hints: [
      "Listen to the three notes. The last one should be the highest, but it sounds lower.",
      "Bigger numbers are higher notes. 62 is lower than 64, so the third note dips down.",
      "Change the last play(62) to play(67) so the notes rise: 60, 64, 67.",
    ],
    solution: "play(60)\nsleep(0.5)\nplay(64)\nsleep(0.5)\nplay(67)\n",
  };

  // Live UI state. code survives theme re-renders so typing is never lost.
  // state.lesson holds the currently shown lesson-like object (a real lesson or
  // the Sandbox pseudo-lesson); state.view is the active surface.
  var state = { lesson: null, code: "", lessonIdx: 0, lessonCount: 1, view: "lessons" };
  var keydownHandler = null;

  // Surfaces and their progressive-disclosure rules. A tab only appears once it
  // is meaningful (PLAN §3). Map/Codex/Arena are added as those views are built.
  var TABS = [
    { view: "lessons", label: "Lessons" },
    { view: "map", label: "Knowledge Map" },
    { view: "sandbox", label: "Sandbox" },
  ];
  function solvedCount() {
    return lessonsList().filter(function (l) { return CL.storage.isSolved(l.id); }).length;
  }
  function unlocked(view) {
    if (view === "lessons") return true;
    if (view === "map") return solvedCount() >= 1; // the map is meaningful once there's progress
    if (view === "sandbox") return solvedCount() >= 1; // free play, once they can code
    return false;
  }
  function isEditorView() {
    return state.view === "lessons" || state.view === "sandbox";
  }
  function renderAndWire(theme) {
    render(theme, state.lesson);
    if (isEditorView()) wireRuntime(theme, state.lesson);
  }
  function sandboxLesson() {
    return {
      id: "sandbox",
      world: 0,
      lessonNo: 1,
      total: 1,
      title: "Sandbox",
      filename: "sandbox.py",
      lang: "py",
      promptTitle: "",
      promptText: [],
      starterCode: "# Free play. Type any Python and press run.\n",
      check: null,
      hints: [],
      solution: "",
      isSandbox: true,
    };
  }

  function el(tag, cls, html) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (html != null) node.innerHTML = html;
    return node;
  }

  function escapeHtml(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  // Theme-specific label flavor (DESIGN.md signature text per theme).
  function editorHeader(theme, lesson) {
    var file = lesson.filename || "sandbox.py";
    if (theme === "magazine") return lesson.challengeCode ? "listing " + lesson.challengeCode.toLowerCase() + " · " + file : file;
    if (theme === "terminal") return "editor";
    return file; // c64
  }
  function outputHeader(theme) {
    return theme === "magazine" ? "printout" : "output";
  }

  // Error-annotation fading (PLAN.md §3): full through World 4, on-demand
  // World 5-7, off from Real Tools I onward, never in the Arena.
  function annotationMode(lesson) {
    if (lesson.isArena) return "off";
    if (lesson.realToolsDone) return "off";
    if (lesson.world <= 4) return "full";
    if (lesson.world <= 7) return "ondemand";
    return "off";
  }

  function renderProgress() {
    var lessons = lessonsList();
    var total = lessons.length || (state.lesson ? state.lesson.total : 1);
    var html = "";
    for (var i = 0; i < total; i++) {
      var solved = lessons.length ? CL.storage.isSolved(lessons[i].id) : false;
      var cls = solved ? "cell done" : i === state.lessonIdx ? "cell current" : "cell";
      html += '<span class="' + cls + '"></span>';
    }
    return html;
  }

  function render(theme, lesson) {
    var app = document.getElementById("app");
    app.innerHTML = "";

    var frame = el("div");
    frame.id = "frame";
    var container = el("div", "app");

    // theme-specific top chrome
    if (theme === "magazine") {
      var stripe = el("div", "rainbow-stripe");
      ["#D85A30", "#EF9F27", "#639922", "#1D9E75", "#378ADD"].forEach(function (c) {
        var s = el("span");
        s.style.background = c;
        stripe.appendChild(s);
      });
      app.appendChild(stripe);
    }
    if (theme === "c64") {
      var boot = el("div");
      boot.id = "boot-header";
      boot.appendChild(el("div", "boot-title", "**** code lab 64 ****"));
      boot.appendChild(el("div", "boot-status", "lessons free. ready."));
      container.appendChild(boot);
    }
    if (theme === "terminal") {
      var bar = el("div");
      bar.id = "status-bar";
      bar.appendChild(el("span", null, "code-lab · world " + lesson.world + " / lesson " + lesson.lessonNo));
      bar.appendChild(el("span", "lang", "PYTHON"));
      app.appendChild(bar);
    }

    // top bar — the Lessons view shows position + prev/next; other views just a title
    var topbar = el("div", "topbar");
    var titleText = state.view === "map" ? "Knowledge Map" : lesson.isSandbox ? "Sandbox" : "World " + lesson.world + " · " + lesson.title;
    topbar.appendChild(el("div", "title", titleText));
    if (state.view === "lessons") {
      var right = el("div", "right");
      var lessonPrev = el("button", "navbtn", "‹");
      lessonPrev.id = "lesson-prev";
      var lessonNext = el("button", "navbtn", "›");
      lessonNext.id = "lesson-next";
      right.appendChild(lessonPrev);
      var progress = el("span", "progress", renderProgress());
      progress.id = "progress-cells";
      right.appendChild(progress);
      right.appendChild(el("span", "counter", lesson.lessonNo + " / " + lesson.total));
      right.appendChild(lessonNext);
      topbar.appendChild(right);
    }
    container.appendChild(topbar);

    // app navigation — progressive disclosure: a tab appears only once unlocked.
    var nav = el("div", "appnav");
    TABS.forEach(function (tab) {
      if (!unlocked(tab.view)) return;
      var t = el("span", "tab" + (state.view === tab.view ? " active" : ""), tab.label);
      if (state.view !== tab.view) {
        t.addEventListener("click", function () { setView(tab.view); });
      }
      nav.appendChild(t);
    });
    container.appendChild(nav);

    // Body branches by surface. Editor views (lessons, sandbox) share the code
    // layout below; other surfaces render their own body.
    if (state.view === "map") {
      if (CL.map) CL.map.render(container, mapData());
      buildThemebar(container, theme);
      frame.appendChild(container);
      app.appendChild(frame);
      return;
    }

    // prompt block (lessons only)
    if (lesson.promptText && lesson.promptText.length) {
      var prompt = el("div", "prompt");
      if (lesson.promptTitle) prompt.appendChild(el("h2", null, escapeHtml(lesson.promptTitle)));
      lesson.promptText.forEach(function (p) {
        prompt.appendChild(el("p", null, escapeHtml(p)));
      });
      container.appendChild(prompt);
    }

    // worked example — a runnable, editable demonstration to try before the
    // challenge (PLAN §3: "run a working example and tinker with it")
    if (lesson.example) {
      var exPanel = el("div", "panel");
      exPanel.appendChild(el("div", "panel-header", "example — run it and tinker"));
      if (lesson.exampleNote) {
        var note = el("div", "example-note");
        note.textContent = lesson.exampleNote;
        exPanel.appendChild(note);
      }
      var exHost = el("div");
      exHost.id = "example-host";
      exPanel.appendChild(exHost);
      var exActions = el("div", "actions example-actions");
      var runExBtn = el("button", "btn secondary", "run example");
      runExBtn.id = "btn-run-example";
      exActions.appendChild(runExBtn);
      exPanel.appendChild(exActions);
      container.appendChild(exPanel);
    }

    // the challenge instruction (what to actually do), distinct from the teaching
    if (lesson.task) {
      var taskBox = el("div", "challenge-task");
      taskBox.appendChild(el("span", "challenge-label", "Your turn: "));
      taskBox.appendChild(document.createTextNode(lesson.task));
      container.appendChild(taskBox);
    }

    // editor panel — host element; the real editor mounts here after append
    var editorPanel = el("div", "panel");
    editorPanel.appendChild(el("div", "panel-header", escapeHtml(editorHeader(theme, lesson))));
    var host = el("div");
    host.id = "editor-host";
    editorPanel.appendChild(host);
    container.appendChild(editorPanel);

    // action row — only working controls; check/hint/solution appear when the
    // lesson actually has them (no dead buttons)
    var actions = el("div", "actions");
    var runBtn = el("button", "btn primary", "run");
    runBtn.id = "btn-run";
    actions.appendChild(runBtn);
    if (lesson.check) {
      var checkBtn = el("button", "btn secondary", "check");
      checkBtn.id = "btn-check";
      actions.appendChild(checkBtn);
    }
    if (lesson.hints && lesson.hints.length) {
      var hintBtn = el("button", "btn secondary", "hint");
      hintBtn.id = "btn-hint";
      actions.appendChild(hintBtn);
    }
    if (lesson.solution) {
      var solBtn = el("button", "btn ghost", "solution");
      solBtn.id = "btn-solution";
      actions.appendChild(solBtn);
    }
    var stopBtn = el("button", "btn secondary", "stop");
    stopBtn.id = "btn-stop";
    stopBtn.style.display = "none";
    actions.appendChild(stopBtn);
    container.appendChild(actions);

    var hintHost = el("div");
    hintHost.id = "hint-host";
    hintHost.className = "hint-host";
    container.appendChild(hintHost);

    // stepper — the notional machine; hidden until a run records steps
    var stepper = el("div", "panel");
    stepper.id = "stepper";
    stepper.style.display = "none";
    stepper.appendChild(el("div", "panel-header", "stepper"));
    var sbody = el("div", "stepper-body");
    var controls = el("div", "stepper-controls");
    var prev = el("button", "btn ghost", "◀ back");
    prev.id = "step-prev";
    var pos = el("span", "step-pos");
    pos.id = "step-pos";
    var next = el("button", "btn ghost", "step ▶");
    next.id = "step-next";
    controls.appendChild(prev);
    controls.appendChild(pos);
    controls.appendChild(next);
    sbody.appendChild(controls);
    var stepLine = el("div", "step-line");
    stepLine.id = "step-line";
    sbody.appendChild(stepLine);
    var varTable = el("table", "var-table");
    varTable.id = "step-vars";
    sbody.appendChild(varTable);
    stepper.appendChild(sbody);
    container.appendChild(stepper);

    // stage — canvas for turtle/plot output; hidden until something draws
    var stage = el("div", "panel");
    stage.id = "stage";
    stage.style.display = "none";
    stage.appendChild(el("div", "panel-header", "canvas"));
    var canvas = document.createElement("canvas");
    canvas.id = "stage-canvas";
    canvas.className = "stage-canvas";
    canvas.width = 480;
    canvas.height = 320;
    stage.appendChild(canvas);
    container.appendChild(stage);

    // output panel — filled by Run
    var outPanel = el("div", "panel");
    outPanel.appendChild(el("div", "panel-header", escapeHtml(outputHeader(theme))));
    var outBox = el("div", "output");
    outBox.id = "output-box";
    outBox.appendChild(el("div", "out-line info", "press run to execute your code."));
    outPanel.appendChild(outBox);
    container.appendChild(outPanel);

    // model-solution appears here on a pass or via the solution button
    var modelHost = el("div");
    modelHost.id = "model-host";
    container.appendChild(modelHost);

    if (theme === "terminal") {
      var keyhints = el("div", "keyhints");
      keyhints.appendChild(el("span", null, "f5 run"));
      keyhints.appendChild(el("span", null, "██░░░░"));
      container.appendChild(keyhints);
    }

    buildThemebar(container, theme);

    frame.appendChild(container);
    app.appendChild(frame);
  }

  function buildThemebar(container, theme) {
    var themebar = el("div", "themebar");
    themebar.appendChild(el("span", "label", "theme:"));
    THEMES.forEach(function (t) {
      var label = t === "terminal" ? "terminal (locked)" : t;
      var opt = el("button", "theme-opt" + (t === theme ? " active" : ""), label);
      opt.addEventListener("click", function () { setTheme(t); });
      themebar.appendChild(opt);
    });
    container.appendChild(themebar);
  }

  function mapData() {
    return {
      lessons: lessonsList(),
      currentIdx: state.lessonIdx,
      isSolved: function (id) { return CL.storage.isSolved(id); },
      open: function (idx) { setLesson(idx); },
    };
  }

  // Mount a code editor into host: CodeMirror when present (from CDN), a themed
  // textarea otherwise. Used for both the challenge editor and the worked-example
  // editor; onChange is called with the new value on every edit (may be null).
  function mountEditor(host, code, lang, onChange) {
    if (window.CodeMirror) {
      var cm = window.CodeMirror(host, {
        value: code,
        mode: lang === "js" ? "javascript" : "python",
        lineNumbers: true,
        indentUnit: 4,
        viewportMargin: Infinity, // grow to fit content instead of a fixed box
      });
      if (onChange) cm.on("change", function () { onChange(cm.getValue()); });
      var lastLine = null;
      return {
        getValue: function () { return cm.getValue(); },
        focus: function () { cm.focus(); },
        highlightLine: function (n) {
          if (lastLine != null) { cm.removeLineClass(lastLine, "background", "cm-stepline"); lastLine = null; }
          if (n != null && n >= 0) {
            cm.addLineClass(n, "background", "cm-stepline");
            lastLine = n;
            cm.scrollIntoView({ line: n, ch: 0 });
          }
        },
      };
    }
    var ta = document.createElement("textarea");
    ta.className = "editor-fallback";
    ta.value = code;
    ta.spellcheck = false;
    if (onChange) ta.addEventListener("input", function () { onChange(ta.value); });
    host.appendChild(ta);
    return { getValue: function () { return ta.value; }, focus: function () { ta.focus(); }, highlightLine: function () {} };
  }

  function wireRuntime(theme, lesson) {
    var editor = mountEditor(document.getElementById("editor-host"), state.code, lesson.lang, function (v) {
      state.code = v;
      CL.storage.setCode(state.lesson.id, v);
    });
    var exHost = document.getElementById("example-host");
    var exEditor = exHost ? mountEditor(exHost, lesson.example || "", lesson.lang, null) : null;
    var runBtn = document.getElementById("btn-run");
    var stopBtn = document.getElementById("btn-stop");
    var outBox = document.getElementById("output-box");
    var stage = document.getElementById("stage");
    var canvas = document.getElementById("stage-canvas");
    var stepperEl = document.getElementById("stepper");
    var stepPrev = document.getElementById("step-prev");
    var stepNext = document.getElementById("step-next");
    var stepPos = document.getElementById("step-pos");
    var stepLineEl = document.getElementById("step-line");
    var stepVars = document.getElementById("step-vars");
    var checkBtn = document.getElementById("btn-check");
    var hintBtn = document.getElementById("btn-hint");
    var solBtn = document.getElementById("btn-solution");
    var hintHost = document.getElementById("hint-host");
    var modelHost = document.getElementById("model-host");
    var py = CL.runtime && CL.runtime.python;

    var steps = [];
    var stepIdx = 0;
    var hintIdx = 0;

    function out(text, cls) {
      var d = el("div", "out-line" + (cls ? " " + cls : ""));
      d.textContent = text;
      outBox.appendChild(d);
    }

    // Friendly error annotation beneath the raw traceback (translate, never replace).
    function showAnnotation(ann) {
      var box = el("div", "err-annotation");
      var head = el("div", "err-ann-head");
      head.textContent = "💡 " + (ann.title || "What this means") + (ann.line ? "  (line " + ann.line + ")" : "");
      box.appendChild(head);
      var body = el("div", "err-ann-body");
      body.textContent = ann.plain;
      box.appendChild(body);
      outBox.appendChild(box);
    }
    function showErrorWithAnnotation(traceback) {
      out(traceback, "error"); // raw traceback, untouched
      var ann = CL.errors && CL.errors.translate(traceback);
      if (!ann || !ann.plain) return;
      var mode = annotationMode(lesson);
      if (mode === "full") {
        showAnnotation(ann);
      } else if (mode === "ondemand") {
        var btn = el("button", "btn ghost", "explain this error");
        btn.addEventListener("click", function () { btn.remove(); showAnnotation(ann); });
        outBox.appendChild(btn);
      }
    }

    // Style channel — advisory notes after a pass; active from World 5 (PLAN §3).
    function showStyle(findings) {
      var box = el("div", "style-channel");
      box.appendChild(el("div", "style-head", "✎ style notes (optional)"));
      findings.forEach(function (f) {
        var row = el("div", "style-item");
        row.textContent = "line " + f.line + ": " + f.message;
        box.appendChild(row);
      });
      outBox.appendChild(box);
    }

    // ----- stepper (trace-then-scrub over recorded execution steps) -----
    function renderVars(obj) {
      stepVars.innerHTML = "";
      var keys = Object.keys(obj || {});
      if (!keys.length) {
        var tr = el("tr");
        var td = el("td", "var-empty", "(no variables yet)");
        td.colSpan = 2;
        tr.appendChild(td);
        stepVars.appendChild(tr);
        return;
      }
      keys.forEach(function (k) {
        var row = el("tr");
        row.appendChild(el("td", "var-name", escapeHtml(k)));
        row.appendChild(el("td", "var-val", escapeHtml(obj[k])));
        stepVars.appendChild(row);
      });
    }
    function showStep(i) {
      if (!steps.length) return;
      stepIdx = Math.max(0, Math.min(steps.length - 1, i));
      var s = steps[stepIdx]; // [lineNo, {vars}]
      stepPos.textContent = "step " + (stepIdx + 1) + " / " + steps.length;
      stepLineEl.textContent = "about to run line " + s[0];
      renderVars(s[1]);
      editor.highlightLine(s[0] - 1);
      stepPrev.disabled = stepIdx === 0;
      stepNext.disabled = stepIdx === steps.length - 1;
    }
    function initStepper(s) {
      steps = s || [];
      if (!steps.length) { stepperEl.style.display = "none"; return; }
      stepperEl.style.display = "";
      showStep(0);
    }
    stepPrev.addEventListener("click", function () { showStep(stepIdx - 1); });
    stepNext.addEventListener("click", function () { showStep(stepIdx + 1); });

    // Route recorded events to the right renderer and tally what happened.
    function dispatchEvents(events, counts) {
      if (!events || !events.length) return;
      var music = [], turtle = [], plot = [];
      events.forEach(function (e) {
        var k = e[0];
        if (k === "play" || k === "sample") music.push(e);
        else if (k.indexOf("t_") === 0) turtle.push(e);
        else if (k === "plot" || k === "bar") plot.push(e);
      });
      counts.music += music.length;
      counts.turtle += turtle.length;
      counts.plot += plot.length;
      if (music.length && CL.music) CL.music.schedule(music);
      if ((turtle.length || plot.length) && canvas) stage.style.display = "";
      if (turtle.length && CL.turtle) CL.turtle.render(canvas, turtle);
      if (plot.length && CL.plot) CL.plot.render(canvas, plot);
    }
    function setRunning(on) {
      runBtn.disabled = on;
      if (checkBtn) checkBtn.disabled = on;
      stopBtn.style.display = on ? "" : "none";
    }

    // Verdict from the correctness checker (tolerant, always diagnostic).
    function showVerdict(verdict) {
      if (verdict.pass) {
        var line = el("div", "out-line success");
        line.appendChild(el("span", "pass-badge", "PASS"));
        line.appendChild(document.createTextNode("  " + (verdict.diagnostics[0] || "Correct!")));
        outBox.appendChild(line);
        verdict.diagnostics.slice(1).forEach(function (d) { out(d, "info"); });
      } else {
        out("not yet — here’s what to look at:", "error");
        verdict.diagnostics.forEach(function (d) { out("  " + d, "info"); });
      }
    }
    function revealSolution() {
      if (!modelHost || !lesson.solution || document.getElementById("model-sol")) return;
      var box = el("div", "panel");
      box.id = "model-sol";
      box.appendChild(el("div", "panel-header", "model solution"));
      var pre = el("pre", "model-code");
      pre.textContent = lesson.solution;
      box.appendChild(pre);
      modelHost.appendChild(box);
    }
    function showNextHint() {
      if (!hintHost || hintIdx >= lesson.hints.length) return;
      var item = el("div", "hint-item");
      item.textContent = "Hint " + (hintIdx + 1) + ": " + lesson.hints[hintIdx];
      hintHost.appendChild(item);
      hintIdx++;
      if (hintBtn && hintIdx >= lesson.hints.length) hintBtn.disabled = true;
    }

    // Run a program. source!=null means "run the worked example" (no grading,
    // no stepper highlight, which would target the challenge editor). When grade
    // is true, the challenge is checked afterward.
    function execute(grade, source) {
      if (runBtn.disabled) return;
      var isExample = source != null;
      var code = isExample ? source : editor.getValue();
      outBox.innerHTML = "";
      if (stage) stage.style.display = "none";
      stepperEl.style.display = "none";
      editor.highlightLine(null);
      if (!py) { out("runtime unavailable", "error"); return; }
      if (CL.music) CL.music.unlock(); // user gesture: allow sound later
      setRunning(true);
      if (py.getStatus() !== "ready") out("starting Python (the first run downloads it once)…", "info");
      var hadStdout = false;
      var stdoutText = "";
      var allEvents = [];
      var counts = { music: 0, turtle: 0, plot: 0 };
      var capturedSteps = null;
      py.run(code, {
        onStdout: function (s) { hadStdout = true; stdoutText += s; out(s.replace(/\n$/, "")); },
        onStderr: function (s) { hadStdout = true; out(s.replace(/\n$/, ""), "error"); },
        onEvents: function (events) { allEvents = events || []; dispatchEvents(events, counts); },
        onSteps: function (s) { capturedSteps = s; },
      }).then(function (r) {
        setRunning(false);
        if (!isExample) initStepper(capturedSteps); // stepper tracks the challenge editor
        if (!r.ok) {
          if (r.error !== "stopped") showErrorWithAnnotation(r.error || "error");
          return;
        }
        var notes = [];
        if (counts.music) notes.push("♪ played " + counts.music + " sound" + (counts.music > 1 ? "s" : ""));
        if (counts.turtle) notes.push("✏ drew with the turtle");
        if (counts.plot) notes.push("📊 drew a chart");
        if (notes.length) notes.forEach(function (n) { out(n, "success"); });
        else if (!hadStdout) out("done.", "info");
        if (!isExample && grade && lesson.check && CL.check) {
          var verdict = CL.check.run(lesson, { stdout: stdoutText, events: allEvents });
          showVerdict(verdict);
          if (verdict.pass) {
            if (lesson.id) CL.storage.markSolved(lesson.id);
            var cells = document.getElementById("progress-cells");
            if (cells) cells.innerHTML = renderProgress(); // reflect the new solve
            revealSolution(); // model-solution compare on success
          }
        }
        // Second feedback channel: style notes from World 5 onward.
        if (!isExample && CL.style && lesson.world >= 5) {
          var findings = CL.style.analyze(editor.getValue());
          if (findings.length) showStyle(findings);
        }
      });
    }
    function doStop() {
      if (!py) return;
      out("stopping…", "info");
      setRunning(false);
      py.stop().then(function () { out("stopped — Python is ready again.", "info"); });
    }

    var lessonPrev = document.getElementById("lesson-prev");
    var lessonNext = document.getElementById("lesson-next");
    if (lessonPrev) {
      lessonPrev.disabled = state.lessonIdx === 0;
      lessonPrev.addEventListener("click", function () { setLesson(state.lessonIdx - 1); });
    }
    if (lessonNext) {
      lessonNext.disabled = state.lessonIdx >= state.lessonCount - 1;
      lessonNext.addEventListener("click", function () { setLesson(state.lessonIdx + 1); });
    }

    var runExBtn = document.getElementById("btn-run-example");
    if (runExBtn && exEditor) runExBtn.addEventListener("click", function () { execute(false, exEditor.getValue()); });

    runBtn.addEventListener("click", function () { execute(false); });
    if (checkBtn) checkBtn.addEventListener("click", function () { execute(true); });
    if (hintBtn) hintBtn.addEventListener("click", showNextHint);
    if (solBtn) solBtn.addEventListener("click", revealSolution);
    stopBtn.addEventListener("click", doStop);

    // F5 runs (matches the terminal key-hint). Re-wired each render, so drop the
    // previous handler to avoid stacking.
    if (keydownHandler) document.removeEventListener("keydown", keydownHandler);
    keydownHandler = function (e) {
      if (e.key === "F5") { e.preventDefault(); execute(false); }
    };
    document.addEventListener("keydown", keydownHandler);
  }

  function lessonsList() {
    return (window.CODELAB && window.CODELAB.lessons) || [];
  }
  // Load the lesson at idx (clamped); fall back to the layout demo if there is
  // no authored curriculum yet. Updates the module's lesson index/count.
  function loadLesson(idx) {
    var lessons = lessonsList();
    if (!lessons.length) { state.lessonIdx = 0; state.lessonCount = 1; return DEMO; }
    state.lessonCount = lessons.length;
    state.lessonIdx = Math.max(0, Math.min(lessons.length - 1, idx));
    return adaptLesson(lessons[state.lessonIdx], state.lessonIdx, lessons.length);
  }

  // Map a schema lesson object onto the fields render() needs. Kept minimal;
  // the full rung handling (parsons, tests) is a later step.
  function adaptLesson(l, idx, total) {
    return {
      id: l.id,
      world: l.world,
      lessonNo: idx + 1,
      total: total,
      title: l.title,
      challengeCode: "W" + l.world + "-1",
      filename: "lesson." + (l.lang === "js" ? "js" : "py"),
      lang: l.lang === "js" ? "js" : "py",
      promptTitle: l.title,
      promptText: [l.explain],
      task: l.task || "",
      example: l.example || "",
      exampleNote: l.exampleNote || "",
      starterCode: String(l.starter || ""),
      check: l.check || null,
      hints: l.hints || [],
      solution: l.solution || "",
    };
  }

  function setTheme(theme) {
    if (THEMES.indexOf(theme) === -1) theme = "magazine";
    document.documentElement.setAttribute("data-theme", theme);
    CL.storage.setTheme(theme);
    renderAndWire(theme);
  }

  function setLesson(idx) {
    state.view = "lessons";
    state.lesson = loadLesson(idx);
    state.code = CL.storage.getCode(state.lesson.id) || state.lesson.starterCode;
    CL.storage.setLessonIdx(state.lessonIdx);
    renderAndWire(document.documentElement.getAttribute("data-theme") || CL.storage.getTheme());
  }

  // Switch surfaces (Lessons / Map / Sandbox / …). Sandbox is a pseudo-lesson so
  // it reuses the editor + run + stepper machinery; Map renders its own body.
  function setView(view) {
    state.view = unlocked(view) ? view : "lessons";
    state.lesson = state.view === "sandbox" ? sandboxLesson() : loadLesson(state.lessonIdx);
    state.code = CL.storage.getCode(state.lesson.id) || state.lesson.starterCode;
    renderAndWire(document.documentElement.getAttribute("data-theme") || CL.storage.getTheme());
  }

  function init() {
    state.lesson = loadLesson(CL.storage.getLessonIdx());
    state.code = CL.storage.getCode(state.lesson.id) || state.lesson.starterCode;
    setTheme(CL.storage.getTheme());
  }

  CL.engine = { render: render, setTheme: setTheme, setLesson: setLesson, setView: setView };

  // Script is concatenated at the end of <body>, so #app already exists.
  init();
})();
