/* player.js — the paged lesson player. Renders a lesson built from a lesson
   plan (see lessons/plans/): an ordered list of pages shown one at a time, with
   Back / page-counter / Next, where Next gates on exercise pages until the
   challenge passes. Reuses CL.runtime.python (run), CL.check (grade), and
   CL.errors (friendly annotation). Page types: concept, example, exercise,
   errordemo, recap. See AUTHORING.md / the lesson plan for the contract. */

(function () {
  "use strict";
  var CL = (window.CL = window.CL || {});

  /* ---------- tiny markdown renderer for lesson prose ---------- */
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function inline(s) {
    return s
      .replace(/`([^`]+)`/g, function (_, c) { return "<code>" + c + "</code>"; })
      .replace(/\*\*([^*]+)\*\*/g, function (_, c) { return "<strong>" + c + "</strong>"; });
  }
  function md(text) {
    var lines = String(text || "").split("\n");
    var out = "", i = 0;
    while (i < lines.length) {
      var line = lines[i];
      if (/^```/.test(line)) {
        var code = []; i++;
        while (i < lines.length && !/^```/.test(lines[i])) { code.push(lines[i]); i++; }
        i++;
        out += '<pre class="code-block">' + esc(code.join("\n")) + "</pre>";
        continue;
      }
      if (/^\s*-\s+/.test(line)) {
        var items = [];
        while (i < lines.length && /^\s*-\s+/.test(lines[i])) { items.push(lines[i].replace(/^\s*-\s+/, "")); i++; }
        out += "<ul>" + items.map(function (it) { return "<li>" + inline(esc(it)) + "</li>"; }).join("") + "</ul>";
        continue;
      }
      if (line.trim() === "") { i++; continue; }
      var para = [line]; i++;
      while (i < lines.length && lines[i].trim() !== "" && !/^```/.test(lines[i]) && !/^\s*-\s+/.test(lines[i])) {
        para.push(lines[i]); i++;
      }
      out += "<p>" + inline(esc(para.join(" "))) + "</p>";
    }
    return out;
  }

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  function mountEditor(host, code, lang) {
    if (window.CodeMirror) {
      var cm = window.CodeMirror(host, {
        value: code || "",
        mode: lang === "js" ? "javascript" : "python",
        lineNumbers: true,
        indentUnit: 4,
        viewportMargin: Infinity,
      });
      return { get: function () { return cm.getValue(); } };
    }
    var ta = document.createElement("textarea");
    ta.className = "editor-fallback";
    ta.value = code || "";
    ta.spellcheck = false;
    host.appendChild(ta);
    return { get: function () { return ta.value; } };
  }

  // run student code; returns Promise<{ok,error}>; streams via handlers
  function runCode(code, handlers) {
    var py = CL.runtime && CL.runtime.python;
    if (!py) return Promise.resolve({ ok: false, error: "Python runtime unavailable" });
    if (CL.music) CL.music.unlock();
    return py.run(code, {
      onStdout: handlers.onOut,
      onStderr: handlers.onErr,
      onEvents: handlers.onEvents,
    });
  }

  /* ---------- player state (persists across re-renders) ---------- */
  var state = null; // { id, idx, passed:{}, code:{} }

  function ensureState(lesson) {
    if (!state || state.id !== lesson.id) {
      state = { id: lesson.id, idx: 0, passed: {}, code: {} };
    }
  }

  /* ---------- page renderers ---------- */
  function outputBox() { return el("div", "player-output"); }

  function appendLines(box, text, cls) {
    var d = el("div", "out-line" + (cls ? " " + cls : ""));
    d.textContent = text;
    box.appendChild(d);
  }

  function dispatch(events) {
    if (!events || !events.length) return;
    var music = [], turtle = [], plot = [];
    events.forEach(function (e) {
      var k = e[0];
      if (k === "play" || k === "sample") music.push(e);
      else if (k.indexOf("t_") === 0) turtle.push(e);
      else if (k === "plot" || k === "bar") plot.push(e);
    });
    if (music.length && CL.music) CL.music.schedule(music);
    // turtle/plot drawing would target a canvas; lessons that need it add one.
  }

  function renderRunnable(page, lessonLang, withCheck, onPass) {
    var wrap = el("div", "player-runnable");
    var host = el("div");
    wrap.appendChild(host);
    var actions = el("div", "actions");
    var runBtn = el("button", "btn primary", withCheck ? "run" : "run example");
    actions.appendChild(runBtn);
    var checkBtn = null, hintBtn = null;
    if (withCheck) {
      checkBtn = el("button", "btn secondary", "check");
      actions.appendChild(checkBtn);
      if (page.hints && page.hints.length) {
        hintBtn = el("button", "btn secondary", "hint");
        actions.appendChild(hintBtn);
      }
    }
    wrap.appendChild(actions);
    var hintHost = el("div", "hint-host");
    wrap.appendChild(hintHost);
    var out = outputBox();
    wrap.appendChild(out);
    var modelHost = el("div");
    wrap.appendChild(modelHost);

    var editor = mountEditor(host, state.code[state.idx] != null ? state.code[state.idx] : (page.starter != null ? page.starter : page.code || ""), lessonLang);

    function run(grade) {
      out.innerHTML = "";
      state.code[state.idx] = editor.get();
      runBtn.disabled = true;
      if (checkBtn) checkBtn.disabled = true;
      var stdout = "", events = [], hadErr = false;
      if (CL.runtime && CL.runtime.python && CL.runtime.python.getStatus() !== "ready") {
        appendLines(out, "starting Python (first run downloads it once)…", "info");
      }
      runCode(editor.get(), {
        onOut: function (s) { stdout += s; appendLines(out, s.replace(/\n$/, "")); },
        onErr: function (s) { hadErr = true; appendLines(out, s.replace(/\n$/, ""), "error"); },
        onEvents: function (ev) { events = ev || []; dispatch(ev); },
      }).then(function (r) {
        runBtn.disabled = false;
        if (checkBtn) checkBtn.disabled = false;
        if (!r.ok) {
          if (r.error !== "stopped") {
            appendLines(out, r.error || "error", "error");
            var ann = CL.errors && CL.errors.translate(r.error || "");
            if (ann && ann.plain) {
              var box = el("div", "err-annotation");
              box.appendChild(el("div", "err-ann-head", "💡 " + (ann.title || "") + (ann.line ? "  (line " + ann.line + ")" : "")));
              var body = el("div", "err-ann-body"); body.textContent = ann.plain; box.appendChild(body);
              out.appendChild(box);
            }
          }
          return;
        }
        if (grade && page.check && CL.check) {
          var verdict = CL.check.run(page, { stdout: stdout, events: events });
          if (verdict.pass) {
            var line = el("div", "out-line success");
            line.appendChild(el("span", "pass-badge", "PASS"));
            line.appendChild(document.createTextNode("  " + (verdict.diagnostics[0] || "Correct!")));
            out.appendChild(line);
            state.passed[state.idx] = true;
            if (page.solution && !document.getElementById("model-sol")) {
              var m = el("div", "panel"); m.id = "model-sol";
              m.appendChild(el("div", "panel-header", "model solution"));
              var pre = el("pre", "model-code"); pre.textContent = page.solution; m.appendChild(pre);
              modelHost.appendChild(m);
            }
            if (onPass) onPass();
          } else {
            appendLines(out, "not yet — here's what to look at:", "error");
            verdict.diagnostics.forEach(function (d) { appendLines(out, "  " + d, "info"); });
          }
        }
      });
    }

    runBtn.addEventListener("click", function () { run(false); });
    if (checkBtn) checkBtn.addEventListener("click", function () { run(true); });
    if (hintBtn) {
      var hi = 0;
      hintBtn.addEventListener("click", function () {
        if (hi >= page.hints.length) return;
        var item = el("div", "hint-item");
        item.textContent = "Hint " + (hi + 1) + ": " + page.hints[hi];
        hintHost.appendChild(item);
        hi++;
        if (hi >= page.hints.length) hintBtn.disabled = true;
      });
    }
    return wrap;
  }

  function renderPage(lesson, pageHost, updateNav) {
    pageHost.innerHTML = "";
    var page = lesson.pages[state.idx];
    var card = el("div", "lesson-page");

    if (page.title) card.appendChild(el("h2", "page-title", esc(page.title)));

    if (page.type === "concept" || page.type === "recap") {
      card.appendChild(el("div", "prose", md(page.md)));
    } else if (page.type === "example") {
      if (page.md) card.appendChild(el("div", "prose", md(page.md)));
      card.appendChild(renderRunnable(page, lesson.lang, false, null));
    } else if (page.type === "errordemo") {
      if (page.md) card.appendChild(el("div", "prose", md(page.md)));
      card.appendChild(renderRunnable(page, lesson.lang, false, null));
    } else if (page.type === "exercise") {
      if (page.prompt) card.appendChild(el("div", "prose challenge-task", md(page.prompt)));
      card.appendChild(renderRunnable(page, lesson.lang, true, updateNav));
    }
    pageHost.appendChild(card);
  }

  function canAdvance(lesson) {
    var page = lesson.pages[state.idx];
    if (page.type === "exercise") return !!state.passed[state.idx];
    return true;
  }

  CL.player = {
    render: function (container, lesson) {
      ensureState(lesson);
      var root = el("div", "lesson-player");
      var header = el("div", "topbar");
      header.appendChild(el("div", "title", esc("World " + lesson.world + " · " + lesson.title)));
      root.appendChild(header);

      var pageHost = el("div", "page-host");
      root.appendChild(pageHost);

      var nav = el("div", "player-nav");
      var back = el("button", "btn ghost", "‹ back");
      var counter = el("span", "page-counter");
      var next = el("button", "btn primary", "next ›");
      nav.appendChild(back);
      nav.appendChild(counter);
      nav.appendChild(next);
      root.appendChild(nav);
      container.appendChild(root);

      function refreshNav() {
        counter.textContent = (state.idx + 1) + " / " + lesson.pages.length;
        back.disabled = state.idx === 0;
        var last = state.idx === lesson.pages.length - 1;
        next.disabled = (!canAdvance(lesson)) || last;
        next.textContent = last ? "finish" : "next ›";
        if (last && canAdvance(lesson)) { next.disabled = true; }
      }
      function go(delta) {
        var n = state.idx + delta;
        if (n < 0 || n >= lesson.pages.length) return;
        state.idx = n;
        renderPage(lesson, pageHost, refreshNav);
        refreshNav();
        root.scrollIntoView ? root.scrollIntoView({ block: "start" }) : null;
      }
      back.addEventListener("click", function () { go(-1); });
      next.addEventListener("click", function () { if (canAdvance(lesson)) go(1); });

      renderPage(lesson, pageHost, refreshNav);
      refreshNav();
    },
  };
})();
