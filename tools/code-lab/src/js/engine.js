/* engine.js — app root: lesson navigation, the five-rung challenge flow
   (predict/modify/fix/complete/write), hint ladder, model-solution compare,
   checkpoint handling, theme switching and unlock logic. Owns the DOM.

   Phase 1 step 2 scope: render the static lesson-screen anatomy (DESIGN.md
   "Page anatomy") from a demo lesson across all three themes, with a working,
   persisted theme switch. CodeMirror, the runtimes, and real run/hint/solution
   behavior arrive in later steps; the buttons here are inert. */

(function () {
  "use strict";
  var CL = (window.CL = window.CL || {});

  var THEMES = ["magazine", "c64", "terminal"];

  // A layout-demo lesson. NOT curriculum — Phase 2 authors real lessons into
  // lessons/. This exists only to give the screen realistic content to render,
  // including a paragraph long enough to judge c64 body-face readability.
  var DEMO = {
    world: 1,
    lessonNo: 1,
    total: 6,
    title: "First Note",
    code: "W1-1",
    filename: "first_note.py",
    promptTitle: "Play a note",
    promptText: [
      "The play command makes a sound. The number is the note: bigger numbers sound higher, smaller numbers sound lower.",
      "Run the code below and listen. Then change one number and run it again. Can you make the two notes swap, so the high one plays first?",
    ],
    starter: ["play(60)", "sleep(0.5)", "play(67)"],
    output: [
      { state: "info", text: "running first_note.py" },
      { state: "success", text: "played 2 notes — nice." },
    ],
  };

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
    if (theme === "magazine") return "listing " + lesson.code.toLowerCase() + " · " + lesson.filename;
    if (theme === "terminal") return "editor";
    return lesson.filename; // c64
  }
  function outputHeader(theme) {
    if (theme === "magazine") return "printout";
    if (theme === "terminal") return "output";
    return "output"; // c64
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

    // app navigation — progressive disclosure: only Lessons is live this early
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

    // editor panel (static line-numbered listing)
    var editorPanel = el("div", "panel");
    editorPanel.appendChild(el("div", "panel-header", escapeHtml(editorHeader(theme, lesson))));
    var editor = el("div", "editor");
    lesson.starter.forEach(function (line, i) {
      var row = el("div", "code-line");
      row.appendChild(el("span", "lineno", String(i + 1)));
      row.appendChild(el("span", "code-text", escapeHtml(line)));
      editor.appendChild(row);
    });
    editorPanel.appendChild(editor);
    container.appendChild(editorPanel);

    // action row (inert this step)
    var actions = el("div", "actions");
    actions.appendChild(el("button", "btn primary", "run"));
    actions.appendChild(el("button", "btn secondary", "hint"));
    actions.appendChild(el("button", "btn ghost", "solution"));
    container.appendChild(actions);

    // output panel
    var outPanel = el("div", "panel");
    outPanel.appendChild(el("div", "panel-header", escapeHtml(outputHeader(theme))));
    var output = el("div", "output");
    if (theme === "terminal") output.appendChild(el("div", "out-line cmd", "$ python " + lesson.filename));
    lesson.output.forEach(function (line) {
      if (line.state === "success" && theme !== "c64") {
        var wrap = el("div", "out-line success");
        wrap.appendChild(el("span", "pass-badge", "PASS"));
        wrap.appendChild(document.createTextNode("  " + line.text));
        output.appendChild(wrap);
      } else {
        output.appendChild(el("div", "out-line " + line.state, escapeHtml(line.text)));
      }
    });
    if (theme === "c64") output.appendChild(el("div", "out-line ready", "ready. █"));
    outPanel.appendChild(output);
    container.appendChild(outPanel);

    // terminal footer key hints
    if (theme === "terminal") {
      var keyhints = el("div", "keyhints");
      keyhints.appendChild(el("span", null, "f5 run · f1 hint · f8 solution"));
      keyhints.appendChild(el("span", null, "██░░░░"));
      container.appendChild(keyhints);
    }

    // theme switcher
    var themebar = el("div", "themebar");
    themebar.appendChild(el("span", "label", "theme:"));
    THEMES.forEach(function (t) {
      var label = t === "terminal" ? "terminal (locked)" : t;
      var opt = el("button", "theme-opt" + (t === theme ? " active" : ""), label);
      opt.addEventListener("click", function () {
        setTheme(t);
      });
      themebar.appendChild(opt);
    });
    container.appendChild(themebar);

    frame.appendChild(container);
    app.appendChild(frame);
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
      code: "W" + l.world + "-1",
      filename: "lesson." + (l.lang === "js" ? "js" : "py"),
      promptTitle: l.title,
      promptText: [l.explain],
      starter: String(l.starter || "").split("\n").filter(function (s) { return s.length; }),
      output: [{ state: "info", text: "ready" }],
    };
  }

  function setTheme(theme) {
    if (THEMES.indexOf(theme) === -1) theme = "magazine";
    document.documentElement.setAttribute("data-theme", theme);
    CL.storage.setTheme(theme);
    render(theme, currentLesson());
  }

  function init() {
    var theme = CL.storage.getTheme();
    setTheme(theme);
  }

  CL.engine = { render: render, setTheme: setTheme };

  // Script is concatenated at the end of <body>, so #app already exists.
  init();
})();
