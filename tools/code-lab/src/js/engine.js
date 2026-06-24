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
    chapter: 1,
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
    { view: "codex", label: "Codex" },
    { view: "sandbox", label: "Sandbox" },
  ];
  function solvedCount() {
    return lessonsList().filter(function (l) { return CL.storage.isSolved(l.id); }).length;
  }
  function unlocked(view) {
    if (view === "lessons") return true;
    // Candidate D: surfaces shown so the cheat-sheet / knowledge-trove links are
    // visible for assessment (real disclosure rules return in the integration).
    if (view === "map" || view === "codex" || view === "sandbox") return true;
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
      chapter: 0,
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

  // Teaching prose: escape, then render `code`, **bold**, and [[term]] links.
  // A term carries its definition as a hover popover (pure CSS, from glossary).
  function inlineProse(s, glossary) {
    return escapeHtml(s)
      .replace(/`([^`]+)`/g, function (_, c) { return "<code>" + c + "</code>"; })
      .replace(/\*\*([^*]+)\*\*/g, function (_, c) { return "<strong>" + c + "</strong>"; })
      .replace(/\[\[([^\]]+)\]\]/g, function (_, t) {
        var def = glossary && glossary[t] ? glossary[t] : "";
        var pop = def ? '<span class="term-pop">' + escapeHtml(def) + "</span>" : "";
        return '<span class="term-wrap"><a class="term">' + t + "</a>" + pop + "</span>";
      });
  }

  // Theme-specific label flavor (DESIGN.md signature text per theme).
  function editorHeader(theme, lesson) {
    // name the Your-turn code block by its exercise number + title
    if (lesson.id !== "sandbox" && lesson.chapter != null && lesson.lessonNo && lesson.title) {
      return "Exercise " + lesson.chapter + "." + lesson.lessonNo + " · " + lesson.title;
    }
    if (theme === "terminal") return "editor";
    return lesson.filename || "sandbox.py"; // sandbox / fallback
  }
  function outputHeader(theme) {
    return theme === "magazine" ? "printout" : "output";
  }

  // Error-annotation fading (PLAN.md §3): full through Chapter 4, on-demand
  // Chapter 5-7, off from Real Tools I onward, never in the Arena.
  function annotationMode(lesson) {
    if (lesson.isArena) return "off";
    if (lesson.realToolsDone) return "off";
    if (lesson.chapter <= 4) return "full";
    if (lesson.chapter <= 7) return "ondemand";
    return "off";
  }

  function renderProgress() {
    var lessons = lessonsList();
    if (!lessons.length) return '<span class="cell current" data-i="0"></span>';
    // Group sections by chapter; render one cluster of dots per chapter separated
    // by a thin gap so the nav stays readable even with 70+ sections.
    var byChapter = [];
    lessons.forEach(function (l, i) {
      var ch = l.chapter != null ? l.chapter : 0;
      if (!byChapter[ch]) byChapter[ch] = [];
      byChapter[ch].push({ idx: i, id: l.id });
    });
    var html = "";
    byChapter.forEach(function (group) {
      if (!group) return;
      if (html) html += '<span class="progress-gap"></span>';
      group.forEach(function (s) {
        var solved = CL.storage.isSolved(s.id);
        var cls = solved ? "cell done" : s.idx === state.lessonIdx ? "cell current" : "cell";
        html += '<span class="' + cls + '" data-i="' + s.idx + '" style="cursor:pointer"></span>';
      });
    });
    return html;
  }

  // ---- Rich sections: several worked examples + several exercises per subsection
  // (the locked Ch.1 lesson standard). Each block is self-contained — it owns its
  // editor, buttons, and output — and reuses the SAME runtime (CL.runtime.python),
  // checker (CL.check), and error layer (CL.errors) as the single-exercise path,
  // rendered with the same component CSS. The single-exercise path is untouched;
  // these run only for lessons that carry examples[]/exercises[] arrays.
  function richRun(code, outBox, lesson, mockInput) {
    var isJs = lesson && lesson.lang === "js";
    var py = isJs ? (CL.runtime && CL.runtime.js) : (CL.runtime && CL.runtime.python);
    outBox.innerHTML = "";
    function line(s, cls) { var d = el("div", "out-line" + (cls ? " " + cls : "")); d.textContent = s; outBox.appendChild(d); }
    if (!py) { line(isJs ? "JavaScript runtime not yet available." : "Python runtime unavailable.", "error"); return Promise.resolve({ ok: false, stdout: "", events: [] }); }
    if (CL.music) CL.music.unlock();
    if (py.getStatus && py.getStatus() !== "ready") line("starting Python (the first run downloads it once)…", "info");
    var stdout = "", events = [];
    return py.run(code, {
      onStdout: function (s) { stdout += s; line(s.replace(/\n$/, "")); },
      onStderr: function (s) { line(s.replace(/\n$/, ""), "error"); },
      onEvents: function (ev) {
        events = ev || [];
        if (CL.music) CL.music.schedule(events.filter(function (x) { return x[0] === "play" || x[0] === "sample"; }));
        var turtleEvs = events.filter(function (x) { return x[0] && String(x[0]).indexOf("t_") === 0; });
        var plotEvs = events.filter(function (x) { return x[0] === "plot" || x[0] === "bar"; });
        var stEl = document.getElementById("stage"), cvEl = document.getElementById("stage-canvas");
        if ((turtleEvs.length || plotEvs.length) && stEl) stEl.style.display = "";
        if (turtleEvs.length && CL.turtle && cvEl) CL.turtle.render(cvEl, turtleEvs);
        if (plotEvs.length && CL.plot && cvEl) CL.plot.render(cvEl, plotEvs);
      },
      mockInput: mockInput || [],
    }).then(function (r) {
      if (!r.ok && r.error && r.error !== "stopped") {
        line(r.error, "error");
        var ann = CL.errors && CL.errors.translate(r.error);
        if (ann && ann.plain && annotationMode(lesson) !== "off") {
          var box = el("div", "err-annotation");
          var head = el("div", "err-ann-head"); head.textContent = "💡 " + (ann.title || "What this means") + (ann.line ? "  (line " + ann.line + ")" : ""); box.appendChild(head);
          var body = el("div", "err-ann-body"); body.textContent = ann.plain; box.appendChild(body);
          outBox.appendChild(box);
        }
      } else if (r.ok && !stdout && (!events || !events.length)) { line("done.", "info"); }
      return { ok: r.ok, stdout: stdout, events: events };
    });
  }

  function buildExampleBlock(lesson, ex, theme) {
    var wrap = el("div", "example-wrap");
    if (ex.note) {
      var note = el("p", "example-intro");
      note.innerHTML = inlineProse(ex.note, lesson.glossary);
      wrap.appendChild(note);
    }
    // lang:none sections have no runnable code — show code as a read-only listing only
    if (lesson.lang === "none") {
      if (ex.code) {
        var pre = el("pre", "model-code"); pre.textContent = ex.code; wrap.appendChild(pre);
      }
      return wrap;
    }
    var panel = el("div", "panel example-panel");
    panel.appendChild(el("div", "panel-header", "example"));
    var host = el("div"); panel.appendChild(host);
    var edv = mountEditor(host, ex.code || "", lesson.lang, null, true);
    var actions = el("div", "actions example-actions");
    var btn = el("button", "btn secondary", "run"); actions.appendChild(btn);
    panel.appendChild(actions);
    var outBox = el("div", "output inpanel-output");
    outBox.appendChild(el("div", "out-line info", "press run to see the output."));
    panel.appendChild(outBox);
    wrap.appendChild(panel);
    btn.addEventListener("click", function () {
      btn.disabled = true;
      richRun(edv.getValue(), outBox, lesson).then(function () { btn.disabled = false; });
    });
    return wrap;
  }

  function buildExerciseBlock(lesson, ex, idx) {
    var wrap = el("div", "exercise-block");
    // lang:none: no code — just show prompt as a text instruction (pre-syntax puzzles)
    if (lesson.lang === "none") {
      var task = el("div", "challenge-task");
      task.appendChild(el("span", "challenge-label", "Your turn: "));
      var pt = el("span"); pt.innerHTML = inlineProse(ex.prompt || "", lesson.glossary); task.appendChild(pt);
      wrap.appendChild(task);
      return wrap;
    }
    // Rung 2: Parsons — drag-to-reorder scrambled lines
    if (ex.rung === 2 && ex.check && ex.check.type === "parsons") {
      var ptask = el("div", "challenge-task");
      ptask.appendChild(el("span", "challenge-label", "Arrange: "));
      var ppt = el("span"); ppt.innerHTML = inlineProse(ex.prompt || "", lesson.glossary); ptask.appendChild(ppt);
      wrap.appendChild(ptask);
      var lines = (ex.check.lines || []).concat(ex.check.distractors || []);
      for (var si = lines.length - 1; si > 0; si--) {
        var sj = Math.floor(Math.random() * (si + 1));
        var tmp = lines[si]; lines[si] = lines[sj]; lines[sj] = tmp;
      }
      var plist = el("div", "parsons-list"); wrap.appendChild(plist);
      lines.forEach(function (ln) {
        var item = el("div", "parsons-item"); item.textContent = ln;
        item.draggable = true;
        item.addEventListener("dragstart", function (e) { e.dataTransfer.setData("text/plain", ln); plist.setAttribute("data-drag", ln); });
        item.addEventListener("dragover", function (e) { e.preventDefault(); });
        item.addEventListener("dragenter", function () { item.classList.add("over"); });
        item.addEventListener("dragleave", function () { item.classList.remove("over"); });
        item.addEventListener("drop", function (e) {
          e.preventDefault();
          item.classList.remove("over");
          var from = plist.getAttribute("data-drag");
          var items = Array.from(plist.children);
          var fromEl = items.find(function (x) { return x.textContent === from; });
          if (fromEl && fromEl !== item) plist.insertBefore(fromEl, item);
        });
        plist.appendChild(item);
      });
      var pact = el("div", "actions"); wrap.appendChild(pact);
      var pchk = el("button", "btn primary", "check order"); pact.appendChild(pchk);
      var pout = el("div", "output inpanel-output"); wrap.appendChild(pout);
      pchk.addEventListener("click", function () {
        var order = Array.from(plist.children).map(function (x) { return x.textContent; });
        var correct = (ex.check.lines || []);
        var pass = order.slice(0, correct.length).every(function (l, i) { return l === correct[i]; });
        pout.innerHTML = "";
        var msg = el("div", pass ? "out-line success" : "out-line error");
        msg.textContent = pass ? "Correct order!" : "Not quite — keep rearranging.";
        pout.appendChild(msg);
        if (pass && lesson.id) CL.storage.markSolved(lesson.id);
      });
      return wrap;
    }

    var predict = ex.rung === 1 || (ex.starter && ex.solution && String(ex.starter).trim() === String(ex.solution).trim());

    // Prompt line
    var task = el("div", "challenge-task");
    task.appendChild(el("span", "challenge-label", predict ? "Predict: " : "Your turn: "));
    var ptext = el("span"); ptext.innerHTML = inlineProse(ex.prompt || "", lesson.glossary); task.appendChild(ptext);
    wrap.appendChild(task);

    // Code + actions + output all in one panel
    var ep = el("div", "panel exercise-panel");
    ep.appendChild(el("div", "panel-header", predict ? "read this — what will it print?" : "your code"));
    var host = el("div"); ep.appendChild(host);
    var key = lesson.id + ":ex" + idx;
    var seed = predict ? (ex.starter || "") : (CL.storage.getCode(key) || effectiveStarter(ex.starter));
    var edv = mountEditor(host, seed, lesson.lang, predict ? null : function (v) { CL.storage.setCode(key, v); }, predict, "# write your code here");

    // For predict exercises: a box to write the guess before running
    var predBox = null;
    if (predict) {
      var predWrap = el("div", "predict-wrap");
      predWrap.appendChild(el("div", "predict-label", "What do you think it will print?"));
      predBox = el("textarea", "predict-input");
      predBox.placeholder = "Write your prediction here, then click Run to check.";
      predBox.rows = 3;
      predWrap.appendChild(predBox);
      ep.appendChild(predWrap);
    }

    var actions = el("div", "actions");
    var runB = el("button", "btn primary", predict ? "run to check your guess" : "run"); actions.appendChild(runB);
    var checkB = (ex.check && !predict) ? el("button", "btn secondary", "check") : null; if (checkB) actions.appendChild(checkB);
    var hintB = (ex.hints && ex.hints.length && !predict) ? el("button", "btn secondary", "hint") : null; if (hintB) actions.appendChild(hintB);
    var solB = (ex.solution && !predict) ? el("button", "btn ghost", "solution") : null; if (solB) actions.appendChild(solB);
    ep.appendChild(actions);

    var outBox = el("div", "output inpanel-output");
    outBox.appendChild(el("div", "out-line info", "press run to execute your code."));
    ep.appendChild(outBox);
    wrap.appendChild(ep);

    // Hints and model solution sit below the panel
    var hintHost = el("div", "hint-host"); wrap.appendChild(hintHost);
    var modelHost = el("div"); wrap.appendChild(modelHost);

    var hintIdx = 0;
    function showModel() {
      if (modelHost.firstChild || !ex.solution) return;
      var m = el("div", "panel"); m.appendChild(el("div", "panel-header", "model solution"));
      var pre = el("pre", "model-code"); pre.textContent = ex.solution; m.appendChild(pre);
      modelHost.appendChild(m);
    }
    function go(grade) {
      runB.disabled = true; if (checkB) checkB.disabled = true;
      richRun(edv.getValue(), outBox, lesson, ex.mockInput || []).then(function (res) {
        runB.disabled = false; if (checkB) checkB.disabled = false;
        if (grade && res.ok && ex.check && CL.check) {
          var verdict = CL.check.run({ check: ex.check }, { stdout: res.stdout, events: res.events });
          if (verdict.pass) {
            var ln = el("div", "out-line success"); ln.appendChild(el("span", "pass-badge", "PASS")); ln.appendChild(document.createTextNode("  " + (verdict.diagnostics[0] || "Correct!"))); outBox.appendChild(ln);
            showModel(); if (lesson.id) CL.storage.markSolved(lesson.id);
          } else {
            var e1 = el("div", "out-line error"); e1.textContent = "not yet — here’s what to look at:"; outBox.appendChild(e1);
            verdict.diagnostics.forEach(function (d) { var di = el("div", "out-line info"); di.textContent = "  " + d; outBox.appendChild(di); });
          }
        }
      });
    }
    runB.addEventListener("click", function () { go(false); });
    if (checkB) checkB.addEventListener("click", function () { go(true); });
    if (hintB) hintB.addEventListener("click", function () {
      if (hintIdx >= ex.hints.length) return;
      var it = el("div", "hint-item"); it.textContent = "Hint " + (hintIdx + 1) + ": " + ex.hints[hintIdx];
      hintHost.appendChild(it); hintIdx++;
      if (hintIdx >= ex.hints.length) hintB.disabled = true;
    });
    if (solB) solB.addEventListener("click", showModel);
    return wrap;
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
      bar.appendChild(el("span", null, "code-lab · chapter " + lesson.chapter + " / lesson " + lesson.lessonNo));
      bar.appendChild(el("span", "lang", "PYTHON"));
      app.appendChild(bar);
    }

    // top bar — the Lessons view shows position + prev/next; other views just a title
    var topbar = el("div", "topbar");
    var titleText = state.view === "map" ? "Knowledge Map" : state.view === "codex" ? "Codex" : lesson.isSandbox ? "Sandbox" : "Chapter " + lesson.chapter + " · " + lesson.title;
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

    if (state.view === "codex") {
      if (CL.codex) CL.codex.render(container, codexData());
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
        prompt.appendChild(el("p", null, inlineProse(p, lesson.glossary)));
      });
      if (lesson.moreInfo && lesson.moreInfo.length) {
        lesson.moreInfo.forEach(function (mi) {
          var box = el("div", "more-info");
          var head = el("button", "more-toggle", "ⓘ " + mi.label);
          var body = el("div", "more-body"); body.style.display = "none"; body.innerHTML = inlineProse(mi.body);
          head.addEventListener("click", function () { body.style.display = body.style.display === "none" ? "block" : "none"; });
          box.appendChild(head); box.appendChild(body); prompt.appendChild(box);
        });
      }
      container.appendChild(prompt);
    }

    // Interleaved content[] format — text, example, and exercise blocks in the
    // order the author wrote them. This is the standard for new lessons.
    if (state.view === "lessons" && lesson.content) {
      var exIdx = 0;
      lesson.content.forEach(function (block) {
        if (block.type === "text") {
          (block.md || "").split(/\n\n+/).forEach(function (para) {
            if (!para.trim()) return;
            var p = el("p", "content-text");
            p.innerHTML = inlineProse(para.trim(), lesson.glossary);
            container.appendChild(p);
          });
        } else if (block.type === "example") {
          container.appendChild(buildExampleBlock(lesson, block, theme));
        } else if (block.type === "exercise") {
          container.appendChild(buildExerciseBlock(lesson, block, exIdx++));
        }
      });
      var cfoot = el("div", "lesson-footnav");
      var cp = el("button", "btn ghost", "‹ back"); cp.id = "lesson-prev-b"; cp.disabled = state.lessonIdx === 0;
      var cn = el("button", "btn primary", "next section ›"); cn.id = "lesson-next-b"; cn.disabled = state.lessonIdx >= state.lessonCount - 1;
      cfoot.appendChild(cp); cfoot.appendChild(cn); container.appendChild(cfoot);
      buildThemebar(container, theme);
      frame.appendChild(container); app.appendChild(frame);
      return;
    }

    // Legacy rich section: flat examples[] + exercises[] arrays.
    if (state.view === "lessons" && (lesson.examples || lesson.exercises)) {
      if (lesson.examples && lesson.examples.length) {
        container.appendChild(el("div", "section-label", "Examples"));
        lesson.examples.forEach(function (ex) { container.appendChild(buildExampleBlock(lesson, ex, theme)); });
      }
      if (lesson.exercises && lesson.exercises.length) {
        container.appendChild(el("div", "section-label", "Your turn"));
        lesson.exercises.forEach(function (ex, i) { container.appendChild(buildExerciseBlock(lesson, ex, i)); });
      }
      var rfoot = el("div", "lesson-footnav");
      var rp = el("button", "btn ghost", "‹ back"); rp.id = "lesson-prev-b"; rp.disabled = state.lessonIdx === 0;
      var rn = el("button", "btn primary", "next section ›"); rn.id = "lesson-next-b"; rn.disabled = state.lessonIdx >= state.lessonCount - 1;
      rfoot.appendChild(rp); rfoot.appendChild(rn); container.appendChild(rfoot);
      buildThemebar(container, theme);
      frame.appendChild(container); app.appendChild(frame);
      return;
    }

    // worked example — a runnable, editable demonstration to try before the
    // challenge (PLAN §3: "run a working example and tinker with it")
    if (lesson.example) {
      var exPanel = el("div", "panel");
      exPanel.appendChild(el("div", "panel-header", "example — run it"));
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

      // the example's own printout (separate from the Your-turn printout)
      var exOut = el("div", "panel");
      exOut.appendChild(el("div", "panel-header", "example " + escapeHtml(outputHeader(theme))));
      var exOutBox = el("div", "output");
      exOutBox.id = "example-output-box";
      exOutBox.appendChild(el("div", "out-line info", "press run to see the output."));
      exOut.appendChild(exOutBox);
      container.appendChild(exOut);
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

    // output panel — filled by Run; sits right under the editor, above the stepper
    var outPanel = el("div", "panel");
    outPanel.appendChild(el("div", "panel-header", escapeHtml(outputHeader(theme))));
    var outBox = el("div", "output");
    outBox.id = "output-box";
    outBox.appendChild(el("div", "out-line info", "press run to execute your code."));
    outPanel.appendChild(outBox);
    container.appendChild(outPanel);

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

    // model-solution appears here on a pass or via the solution button
    var modelHost = el("div");
    modelHost.id = "model-host";
    container.appendChild(modelHost);

    // bottom section nav — back / next through the lesson's subsections
    var footnav = el("div", "lesson-footnav");
    var fbPrev = el("button", "btn ghost", "‹ back");
    fbPrev.id = "lesson-prev-b"; fbPrev.disabled = state.lessonIdx === 0;
    var fbNext = el("button", "btn primary", "next section ›");
    fbNext.id = "lesson-next-b"; fbNext.disabled = state.lessonIdx >= state.lessonCount - 1;
    footnav.appendChild(fbPrev); footnav.appendChild(fbNext);
    container.appendChild(footnav);

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
    var restart = el("button", "restart-btn", "restart course");
    restart.title = "Clear all saved progress and edited code, and start over";
    restart.addEventListener("click", function () {
      if (window.confirm("Restart the course? This clears all saved progress and your typed code.")) {
        CL.storage.reset();
        window.location.reload();
      }
    });
    themebar.appendChild(restart);
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

  function codexData() {
    return {
      lessons: lessonsList(),
      isSolved: function (id) { return CL.storage.isSolved(id); },
      open: function (idx) { setLesson(idx); },
    };
  }

  // Mount a code editor into host: CodeMirror when present (from CDN), a themed
  // textarea otherwise. Used for both the challenge editor and the worked-example
  // editor; onChange is called with the new value on every edit (may be null).
  function mountEditor(host, code, lang, onChange, readOnly, placeholder) {
    if (window.CodeMirror) {
      var cm = window.CodeMirror(host, {
        value: code,
        mode: lang === "js" ? "javascript" : "python",
        lineNumbers: true,
        indentUnit: 4,
        readOnly: !!readOnly,
        placeholder: placeholder || "",
        viewportMargin: Infinity, // grow to fit content instead of a fixed box
      });
      if (onChange) cm.on("change", function () { onChange(cm.getValue()); });
      // Refresh after the node is in the DOM (rich-section editors mount during
      // render, before insertion) so the code shows instead of a blank box.
      setTimeout(function () { try { cm.refresh(); } catch (e) {} }, 0);
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
    ta.readOnly = !!readOnly;
    if (placeholder) ta.placeholder = placeholder;
    if (onChange) ta.addEventListener("input", function () { onChange(ta.value); });
    host.appendChild(ta);
    return { getValue: function () { return ta.value; }, focus: function () { ta.focus(); }, highlightLine: function () {} };
  }

  // Lesson/section navigation: top prev/next, clickable progress circles, and the
  // bottom back/next-section buttons. Shared by the single-exercise and rich paths.
  function wireNav() {
    var lessonPrev = document.getElementById("lesson-prev");
    var lessonNext = document.getElementById("lesson-next");
    if (lessonPrev) { lessonPrev.disabled = state.lessonIdx === 0; lessonPrev.addEventListener("click", function () { setLesson(state.lessonIdx - 1); }); }
    if (lessonNext) { lessonNext.disabled = state.lessonIdx >= state.lessonCount - 1; lessonNext.addEventListener("click", function () { setLesson(state.lessonIdx + 1); }); }
    var cellsEl = document.getElementById("progress-cells");
    if (cellsEl) cellsEl.addEventListener("click", function (e) { var t = e.target.getAttribute && e.target.getAttribute("data-i"); if (t != null) setLesson(parseInt(t, 10)); });
    var fbPrevEl = document.getElementById("lesson-prev-b");
    if (fbPrevEl) fbPrevEl.addEventListener("click", function () { setLesson(state.lessonIdx - 1); });
    var fbNextEl = document.getElementById("lesson-next-b");
    if (fbNextEl) fbNextEl.addEventListener("click", function () { setLesson(state.lessonIdx + 1); });
  }

  function wireRuntime(theme, lesson) {
    // content[] and rich-section lessons self-wire their blocks in render(); only nav needs wiring.
    if (lesson.content || lesson.examples || lesson.exercises) { wireNav(); return; }
    var editor = mountEditor(document.getElementById("editor-host"), state.code, lesson.lang, function (v) {
      state.code = v;
      CL.storage.setCode(state.lesson.id, v);
    }, false, "type your code here…");
    var exHost = document.getElementById("example-host");
    var exEditor = exHost ? mountEditor(exHost, lesson.example || "", lesson.lang, null, true) : null;
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

    var currentOut = outBox; // the example run targets its own printout
    function out(text, cls) {
      var d = el("div", "out-line" + (cls ? " " + cls : ""));
      d.textContent = text;
      currentOut.appendChild(d);
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

    // Style channel — advisory notes after a pass; active from Chapter 5 (PLAN §3).
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
      var exOutBox = document.getElementById("example-output-box");
      currentOut = isExample && exOutBox ? exOutBox : outBox;
      currentOut.innerHTML = "";
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
        // Second feedback channel: style notes from Chapter 5 onward.
        if (!isExample && CL.style && lesson.chapter >= 5) {
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

    wireNav();

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

  // A starter that is only comments/whitespace is instruction text, not
  // scaffolding — treat it as empty so the editor shows the "type your code
  // here…" placeholder. Real code-to-fix/modify starters are kept as-is.
  function effectiveStarter(s) {
    var t = String(s || "");
    var hasCode = t.split("\n").some(function (ln) {
      var x = ln.trim();
      return x.length && x.charAt(0) !== "#";
    });
    return hasCode ? t : "";
  }

  // Map a schema lesson object onto the fields render() needs. Kept minimal;
  // the full rung handling (parsons, tests) is a later step.
  function adaptLesson(l, idx, total) {
    return {
      id: l.id,
      chapter: l.chapter,
      lessonNo: idx + 1,
      total: total,
      title: l.title,
      challengeCode: "C" + l.chapter + "-1",
      filename: "lesson." + (l.lang === "js" ? "js" : "py"),
      lang: l.lang === "js" ? "js" : l.lang === "none" ? "none" : "py",
      promptTitle: l.title,
      promptText: String(l.explain || "").split(/\n\n+/).filter(function(p) { return p.trim(); }),
      content: l.content || null,
      glossary: l.glossary || null,
      moreInfo: l.moreInfo || null,
      task: l.task || "",
      example: l.example || "",
      exampleNote: l.exampleNote || "",
      examples: l.examples || null,
      exercises: l.exercises || null,
      starterCode: effectiveStarter(l.starter),
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
