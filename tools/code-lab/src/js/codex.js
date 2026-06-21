/* codex.js — the self-building cheat sheet. Earned-only: it shows entries from
   SOLVED lessons only. Three tabs:
     Skills   — each solved lesson's codex entry (pattern + note), grouped by
                topic, with a back-link to the source lesson.
     Glossary — terms (and definitions) from solved lessons' `glossary`.
     Errors   — error classes met (solved lessons' `errorClasses`), each with the
                plain-language note from the friendly-error layer (CL.errors).
   CL.codex.render(container, data) where data = {
     lessons: [schema lessons], isSolved(id), open(idx)
   }. */

(function () {
  "use strict";
  var CL = (window.CL = window.CL || {});

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  CL.codex = {
    render: function (container, data) {
      var lessons = data.lessons || [];
      var idxOf = {};
      lessons.forEach(function (l, i) { idxOf[l.id] = i; });
      var solved = lessons.filter(function (l) { return data.isSolved(l.id); });

      var panel = el("div", "panel");
      panel.appendChild(el("div", "panel-header", "codex — your earned cheat sheet"));
      var body = el("div", "codex-body");

      var tabsBar = el("div", "codex-tabs");
      var content = el("div", "codex-content");
      var TABS = ["Skills", "Glossary", "Errors"];

      function drawSkills() {
        var byTopic = {};
        solved.forEach(function (l) {
          if (!l.codex || !l.codex.pattern) return;
          var t = l.codex.topic || "general";
          (byTopic[t] = byTopic[t] || []).push(l);
        });
        var topics = Object.keys(byTopic).sort();
        if (!topics.length) {
          content.appendChild(el("div", "codex-empty", "Solve lessons to earn skill entries — each adds its syntax pattern here."));
          return;
        }
        topics.forEach(function (t) {
          content.appendChild(el("div", "codex-topic", t));
          byTopic[t].forEach(function (l) {
            var entry = el("div", "codex-entry");
            entry.appendChild(el("pre", "codex-pattern", l.codex.pattern));
            if (l.codex.note) entry.appendChild(el("div", "codex-note", l.codex.note));
            var link = el("a", "codex-link", "from: " + l.title);
            link.addEventListener("click", function () { data.open(idxOf[l.id]); });
            entry.appendChild(link);
            content.appendChild(entry);
          });
        });
      }

      function drawGlossary() {
        var terms = {};
        solved.forEach(function (l) {
          if (!l.glossary) return;
          Object.keys(l.glossary).forEach(function (k) { terms[k] = l.glossary[k]; });
        });
        var keys = Object.keys(terms).sort();
        if (!keys.length) {
          content.appendChild(el("div", "codex-empty", "Terms you meet will collect here as you complete lessons."));
          return;
        }
        keys.forEach(function (k) {
          var row = el("div", "codex-term-row");
          row.appendChild(el("span", "codex-term", k));
          row.appendChild(el("span", "codex-def", terms[k]));
          content.appendChild(row);
        });
      }

      function drawErrors() {
        var reg = (CL.errors && CL.errors.registry) || {};
        var seen = {};
        solved.forEach(function (l) { (l.errorClasses || []).forEach(function (e) { seen[e] = true; }); });
        var classes = Object.keys(seen).sort();
        if (!classes.length) {
          content.appendChild(el("div", "codex-empty", "Errors you meet are explained and collected here."));
          return;
        }
        classes.forEach(function (name) {
          var info = reg[name];
          var entry = el("div", "codex-entry");
          entry.appendChild(el("span", "codex-term", name + (info ? " — " + info.title : "")));
          if (info) entry.appendChild(el("div", "codex-note", info.plain("")));
          content.appendChild(entry);
        });
      }

      function draw(which) {
        content.innerHTML = "";
        if (which === "Glossary") drawGlossary();
        else if (which === "Errors") drawErrors();
        else drawSkills();
      }

      TABS.forEach(function (v, i) {
        var b = el("button", "codex-tab" + (i === 0 ? " active" : ""), v);
        b.addEventListener("click", function () {
          Array.prototype.forEach.call(tabsBar.children, function (c) { c.classList.remove("active"); });
          b.classList.add("active");
          draw(v);
        });
        tabsBar.appendChild(b);
      });

      body.appendChild(tabsBar);
      body.appendChild(content);
      panel.appendChild(body);
      container.appendChild(panel);
      draw("Skills");
    },
  };
})();
