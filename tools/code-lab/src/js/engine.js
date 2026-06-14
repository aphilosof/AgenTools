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
    world: 1,
    lessonNo: 1,
    total: 6,
    title: "First Sound",
    challengeCode: "W1-1",
    filename: "first_sound.py",
    lang: "py",
    promptTitle: "Make a sound",
    promptText: [
      "This program plays three notes. The play command makes a sound, and the number is the note: bigger numbers sound higher. The sleep command waits in between.",
      "Press run and listen. Then change one of the numbers and run it again to hear a different note. Make sure your sound is on.",
    ],
    starterCode: "play(60)\nsleep(0.5)\nplay(64)\nsleep(0.5)\nplay(67)\n",
  };

  // Live UI state. code survives theme re-renders so typing is never lost.
  var state = { lesson: null, code: "" };
  var keydownHandler = null;

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
    if (theme === "magazine") return "listing " + lesson.challengeCode.toLowerCase() + " · " + lesson.filename;
    if (theme === "terminal") return "editor";
    return lesson.filename; // c64
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

  function renderProgress(lesson) {
    var html = "";
    for (var i = 1; i <= lesson.total; i++) {
      var cls = i < lesson.lessonNo ? "cell done" : i === lesson.lessonNo ? "cell current" : "cell";
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

    // top bar
    var topbar = el("div", "topbar");
    topbar.appendChild(el("div", "title", "World " + lesson.world + " · " + lesson.title));
    var right = el("div", "right");
    right.appendChild(el("span", "progress", renderProgress(lesson)));
    right.appendChild(el("span", "counter", lesson.lessonNo + " / " + lesson.total));
    topbar.appendChild(right);
    container.appendChild(topbar);

    // app navigation — progressive disclosure: only Lessons is live this early.
    // The others are shown locked (not dead buttons): clearly disabled, not fake.
    var nav = el("div", "appnav");
    nav.appendChild(el("span", "tab active", "Lessons"));
    ["Knowledge Map", "Codex", "Arena", "Sandbox"].forEach(function (name) {
      nav.appendChild(el("span", "tab locked", name));
    });
    container.appendChild(nav);

    // prompt block
    var prompt = el("div", "prompt");
    prompt.appendChild(el("h2", null, escapeHtml(lesson.promptTitle)));
    lesson.promptText.forEach(function (p) {
      prompt.appendChild(el("p", null, escapeHtml(p)));
    });
    container.appendChild(prompt);

    // editor panel — host element; the real editor mounts here after append
    var editorPanel = el("div", "panel");
    editorPanel.appendChild(el("div", "panel-header", escapeHtml(editorHeader(theme, lesson))));
    var host = el("div");
    host.id = "editor-host";
    editorPanel.appendChild(host);
    container.appendChild(editorPanel);

    // action row — only working controls
    var actions = el("div", "actions");
    var runBtn = el("button", "btn primary", "run");
    runBtn.id = "btn-run";
    var stopBtn = el("button", "btn secondary", "stop");
    stopBtn.id = "btn-stop";
    stopBtn.style.display = "none";
    actions.appendChild(runBtn);
    actions.appendChild(stopBtn);
    container.appendChild(actions);

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

    if (theme === "terminal") {
      var keyhints = el("div", "keyhints");
      keyhints.appendChild(el("span", null, "f5 run"));
      keyhints.appendChild(el("span", null, "██░░░░"));
      container.appendChild(keyhints);
    }

    // theme switcher
    var themebar = el("div", "themebar");
    themebar.appendChild(el("span", "label", "theme:"));
    THEMES.forEach(function (t) {
      var label = t === "terminal" ? "terminal (locked)" : t;
      var opt = el("button", "theme-opt" + (t === theme ? " active" : ""), label);
      opt.addEventListener("click", function () { setTheme(t); });
      themebar.appendChild(opt);
    });
    container.appendChild(themebar);

    frame.appendChild(container);
    app.appendChild(frame);
  }

  // Mount the code editor into #editor-host. CodeMirror when present (loaded
  // from CDN); a themed textarea otherwise, so typing works even if the CDN is
  // unreachable.
  function mountEditor(lesson) {
    var host = document.getElementById("editor-host");
    if (window.CodeMirror) {
      var cm = window.CodeMirror(host, {
        value: state.code,
        mode: lesson.lang === "js" ? "javascript" : "python",
        lineNumbers: true,
        indentUnit: 4,
        viewportMargin: Infinity, // grow to fit content instead of a fixed box
      });
      cm.on("change", function () { state.code = cm.getValue(); });
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
    ta.value = state.code;
    ta.spellcheck = false;
    ta.addEventListener("input", function () { state.code = ta.value; });
    host.appendChild(ta);
    return { getValue: function () { return ta.value; }, focus: function () { ta.focus(); }, highlightLine: function () {} };
  }

  function wireRuntime(theme, lesson) {
    var editor = mountEditor(lesson);
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
    var py = CL.runtime && CL.runtime.python;

    var steps = [];
    var stepIdx = 0;

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
      stopBtn.style.display = on ? "" : "none";
    }
    function doRun() {
      if (runBtn.disabled) return;
      outBox.innerHTML = "";
      if (stage) stage.style.display = "none";
      stepperEl.style.display = "none";
      editor.highlightLine(null);
      if (!py) { out("runtime unavailable", "error"); return; }
      // Unlock audio inside the click (a user gesture) so sound can play later.
      if (CL.music) CL.music.unlock();
      setRunning(true);
      if (py.getStatus() !== "ready") out("starting Python (the first run downloads it once)…", "info");
      var hadStdout = false;
      var counts = { music: 0, turtle: 0, plot: 0 };
      var capturedSteps = null;
      py.run(editor.getValue(), {
        onStdout: function (s) { hadStdout = true; out(s.replace(/\n$/, "")); },
        onStderr: function (s) { hadStdout = true; out(s.replace(/\n$/, ""), "error"); },
        onEvents: function (events) { dispatchEvents(events, counts); },
        onSteps: function (s) { capturedSteps = s; },
      }).then(function (r) {
        setRunning(false);
        initStepper(capturedSteps);
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
        // Second feedback channel: style notes from World 5 onward.
        if (CL.style && lesson.world >= 5) {
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

    runBtn.addEventListener("click", doRun);
    stopBtn.addEventListener("click", doStop);

    // F5 runs (matches the terminal key-hint). Re-wired each render, so drop the
    // previous handler to avoid stacking.
    if (keydownHandler) document.removeEventListener("keydown", keydownHandler);
    keydownHandler = function (e) {
      if (e.key === "F5") { e.preventDefault(); doRun(); }
    };
    document.addEventListener("keydown", keydownHandler);
  }

  function currentLesson() {
    // Render real curriculum once it exists; fall back to the layout demo.
    var lessons = (window.CODELAB && window.CODELAB.lessons) || [];
    return lessons.length ? adaptLesson(lessons[0]) : DEMO;
  }

  // Map a schema lesson object onto the fields render() needs. Kept minimal;
  // the full lesson flow (rungs, hints, checks) is a later step.
  function adaptLesson(l) {
    return {
      world: l.world,
      lessonNo: 1,
      total: 6,
      title: l.title,
      challengeCode: "W" + l.world + "-1",
      filename: "lesson." + (l.lang === "js" ? "js" : "py"),
      lang: l.lang === "js" ? "js" : "py",
      promptTitle: l.title,
      promptText: [l.explain],
      starterCode: String(l.starter || ""),
    };
  }

  function setTheme(theme) {
    if (THEMES.indexOf(theme) === -1) theme = "magazine";
    document.documentElement.setAttribute("data-theme", theme);
    CL.storage.setTheme(theme);
    render(theme, state.lesson);
    wireRuntime(theme, state.lesson);
  }

  function init() {
    state.lesson = currentLesson();
    state.code = state.lesson.starterCode;
    setTheme(CL.storage.getTheme());
  }

  CL.engine = { render: render, setTheme: setTheme };

  // Script is concatenated at the end of <body>, so #app already exists.
  init();
})();
