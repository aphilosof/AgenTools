/* capstone-panel.js — always-available Capstone hub (read-only guides).

   Self-contained: injects a fixed "Capstone" button + an accessible modal that
   lists the four guides from window.CODELAB.capstone (setup first as "Start
   here", then the three projects) and renders each as formatted Markdown.
   Self-initialises on DOM ready; does not depend on engine.js.

   engine.js's Markdown renderer (inlineProse) is PRIVATE and inline-only (no
   headers/lists/fences/tables), so per instructions we do NOT edit engine.js to
   export it — a small Markdown subset is rendered locally below. Globbed into
   the build by build.js like every other src/js file. */

(function () {
  "use strict";

  var BT = String.fromCharCode(96); // backtick, kept out of source template literals

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  /* ---- inline markup: escape, then `code`, [text](url), **bold** ---- */
  function inline(t) {
    return esc(t)
      .replace(new RegExp(BT + "([^" + BT + "]+)" + BT, "g"), function (_, c) { return "<code>" + c + "</code>"; })
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, function (_, txt, url) {
        return '<a href="' + esc(url) + '" target="_blank" rel="noopener noreferrer">' + txt + "</a>";
      })
      .replace(/\*\*([^*]+)\*\*/g, function (_, c) { return "<strong>" + c + "</strong>"; })
      .replace(/\*([^*\n]+)\*/g, function (_, c) { return "<em>" + c + "</em>"; });
  }

  function splitRow(l) {
    return l.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map(function (c) { return c.trim(); });
  }

  /* ---- local Markdown subset: headers, bold, inline code, fenced code,
     unordered/ordered lists, tables, links, paragraphs ---- */
  function mdToHtml(src) {
    var lines = String(src == null ? "" : src).replace(/\r\n?/g, "\n").split("\n");
    var out = [];
    var i = 0;
    var fenceRe = new RegExp("^" + BT + BT + BT + "(\\w*)\\s*$");
    var fenceEndRe = new RegExp("^" + BT + BT + BT + "\\s*$");

    function isBlockStart(l) {
      return fenceRe.test(l) || /^#{1,6}\s/.test(l) || /^\s*[-*]\s+/.test(l) ||
        /^\s*\d+\.\s+/.test(l) || /^\s*\|.*\|\s*$/.test(l) || /^\s*$/.test(l) ||
        /^\s*(-{3,}|\*{3,}|_{3,})\s*$/.test(l);
    }

    while (i < lines.length) {
      var line = lines[i];

      var fence = line.match(fenceRe);
      if (fence) {
        var buf = [];
        i++;
        while (i < lines.length && !fenceEndRe.test(lines[i])) { buf.push(lines[i]); i++; }
        i++; // closing fence
        out.push('<pre class="cl-cap-pre"><code>' + esc(buf.join("\n")) + "</code></pre>");
        continue;
      }

      var h = line.match(/^(#{1,6})\s+(.*)$/);
      if (h) {
        var lvl = h[1].length;
        out.push("<h" + lvl + ">" + inline(h[2].trim()) + "</h" + lvl + ">");
        i++;
        continue;
      }

      if (/^\s*(-{3,}|\*{3,}|_{3,})\s*$/.test(line)) { out.push("<hr>"); i++; continue; }

      if (/^\s*\|.*\|\s*$/.test(line) && i + 1 < lines.length && /^\s*\|[\s:|-]+\|\s*$/.test(lines[i + 1])) {
        var head = splitRow(line);
        i += 2;
        var rows = [];
        while (i < lines.length && /^\s*\|.*\|\s*$/.test(lines[i])) { rows.push(splitRow(lines[i])); i++; }
        var t = '<table class="cl-cap-table"><thead><tr>' +
          head.map(function (c) { return "<th>" + inline(c) + "</th>"; }).join("") + "</tr></thead><tbody>" +
          rows.map(function (r) {
            return "<tr>" + r.map(function (c) { return "<td>" + inline(c) + "</td>"; }).join("") + "</tr>";
          }).join("") + "</tbody></table>";
        out.push(t);
        continue;
      }

      if (/^\s*[-*]\s+/.test(line)) {
        var ul = [];
        while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) {
          ul.push("<li>" + inline(lines[i].replace(/^\s*[-*]\s+/, "")) + "</li>");
          i++;
        }
        out.push("<ul>" + ul.join("") + "</ul>");
        continue;
      }

      if (/^\s*\d+\.\s+/.test(line)) {
        var ol = [];
        while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) {
          ol.push("<li>" + inline(lines[i].replace(/^\s*\d+\.\s+/, "")) + "</li>");
          i++;
        }
        out.push("<ol>" + ol.join("") + "</ol>");
        continue;
      }

      if (/^\s*$/.test(line)) { i++; continue; }

      var para = [];
      while (i < lines.length && !isBlockStart(lines[i])) { para.push(lines[i]); i++; }
      out.push("<p>" + inline(para.join(" ")) + "</p>");
    }
    return out.join("\n");
  }

  /* ---- scoped styles (theme-aware via the app's CSS custom properties) ---- */
  var STYLE = [
    "#cl-cap-btn{position:fixed;left:16px;bottom:16px;z-index:9998;",
    "  font:600 14px/1 system-ui,sans-serif;padding:9px 16px;border-radius:999px;",
    "  background:var(--panel,#fff);color:var(--accent,#c0392b);",
    "  border:2px solid var(--accent,#c0392b);cursor:pointer;",
    "  box-shadow:0 2px 10px rgba(0,0,0,.25)}",
    "#cl-cap-btn:hover{background:var(--accent,#c0392b);color:#fff}",
    "#cl-cap-btn:focus-visible{outline:3px solid var(--text,#000);outline-offset:2px}",
    "#cl-cap-overlay{position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.55);",
    "  display:flex;align-items:flex-start;justify-content:center;padding:5vh 16px;overflow:auto}",
    "#cl-cap-overlay[hidden]{display:none}",
    ".cl-cap-dialog{background:var(--panel,#fff);color:var(--text,#111);",
    "  width:100%;max-width:760px;max-height:88vh;overflow:auto;border-radius:12px;",
    "  box-shadow:0 10px 40px rgba(0,0,0,.4);padding:20px 24px 28px;",
    "  font:15px/1.6 system-ui,sans-serif}",
    ".cl-cap-dialog:focus{outline:none}",
    ".cl-cap-header{position:sticky;top:-20px;background:var(--panel,#fff);z-index:1;",
    "  display:flex;align-items:center;justify-content:space-between;gap:12px;",
    "  padding:2px 0 10px;margin:-2px 0 10px;border-bottom:1px solid var(--muted,#ccc)}",
    ".cl-cap-h{margin:0;font-size:20px;font-weight:700}",
    ".cl-cap-btn2{font:600 13px/1 system-ui,sans-serif;padding:8px 14px;border-radius:8px;",
    "  border:1px solid var(--muted,#999);background:transparent;color:inherit;cursor:pointer}",
    ".cl-cap-btn2:hover{background:rgba(128,128,128,.15)}",
    ".cl-cap-btn2:focus-visible{outline:3px solid var(--accent,#c0392b);outline-offset:2px}",
    ".cl-cap-lead{margin:0 0 14px;opacity:.85}",
    ".cl-cap-sec{font-size:12px;letter-spacing:.06em;text-transform:uppercase;opacity:.7;",
    "  margin:16px 0 8px}",
    ".cl-cap-item{display:block;width:100%;text-align:left;margin:0 0 8px;",
    "  padding:12px 14px;border-radius:10px;border:1px solid var(--muted,#ddd);",
    "  background:transparent;color:inherit;cursor:pointer;font:inherit}",
    ".cl-cap-item:hover{background:rgba(128,128,128,.1)}",
    ".cl-cap-item:focus-visible{outline:3px solid var(--accent,#c0392b);outline-offset:2px}",
    ".cl-cap-item b{display:block;font-size:16px;margin-bottom:2px}",
    ".cl-cap-item span{opacity:.7;font-size:13px}",
    ".cl-cap-doc h1{font-size:24px;margin:.2em 0 .5em}",
    ".cl-cap-doc h2{font-size:19px;margin:1.2em 0 .4em;border-bottom:1px solid var(--muted,#eee);padding-bottom:.2em}",
    ".cl-cap-doc h3{font-size:16px;margin:1em 0 .3em}",
    ".cl-cap-doc p{margin:.6em 0}",
    ".cl-cap-doc ul,.cl-cap-doc ol{margin:.5em 0 .5em 1.4em;padding:0}",
    ".cl-cap-doc li{margin:.3em 0}",
    ".cl-cap-doc a{color:var(--accent,#c0392b)}",
    ".cl-cap-doc hr{border:none;border-top:1px solid var(--muted,#ddd);margin:1.4em 0}",
    ".cl-cap-doc em{font-style:italic}",
    ".cl-cap-doc code{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:.9em;",
    "  color:var(--accent,#c0392b)}",
    ".cl-cap-pre{background:rgba(128,128,128,.12);border-radius:8px;padding:12px 14px;",
    "  overflow-x:auto;margin:.8em 0}",
    ".cl-cap-pre code{color:inherit;font-size:13px;line-height:1.5;white-space:pre}",
    ".cl-cap-table{border-collapse:collapse;width:100%;margin:.8em 0;font-size:14px}",
    ".cl-cap-table th,.cl-cap-table td{border:1px solid var(--muted,#ddd);padding:6px 10px;text-align:left}",
  ].join("");

  var btn, overlay, dialog, header, hTitle, backBtn, closeBtn, body, lastFocus;

  function focusable() {
    return Array.prototype.slice
      .call(dialog.querySelectorAll("a[href],button,input,[tabindex]:not([tabindex='-1'])"))
      .filter(function (e) { return !e.disabled && e.offsetParent !== null; });
  }

  function onKey(e) {
    if (e.key === "Escape") { e.preventDefault(); close(); return; }
    if (e.key === "Tab") {
      var f = focusable();
      if (!f.length) { e.preventDefault(); dialog.focus(); return; }
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }

  function guides() {
    var g = (window.CODELAB && window.CODELAB.capstone) || [];
    return g.slice().sort(function (a, b) { return (a.order || 0) - (b.order || 0); });
  }

  function showList() {
    hTitle.textContent = "Capstone projects";
    backBtn.hidden = true;
    var all = guides();
    var html = '<p class="cl-cap-lead">Finished the course? These guides take you off the training wheels — write real Python on your own Mac. They’re read-only here; you build them in a real editor.</p>';
    var setup = all.filter(function (x) { return x.order === 0; });
    var projects = all.filter(function (x) { return x.order !== 0; });
    if (setup.length) {
      html += '<div class="cl-cap-sec">Start here</div>';
      html += setup.map(itemBtn).join("");
    }
    if (projects.length) {
      html += '<div class="cl-cap-sec">Projects</div>';
      html += projects.map(itemBtn).join("");
    }
    if (!all.length) html += "<p>Capstone guides not loaded.</p>";
    body.innerHTML = html;
    Array.prototype.forEach.call(body.querySelectorAll(".cl-cap-item"), function (el) {
      el.addEventListener("click", function () { showGuide(el.getAttribute("data-id")); });
    });
  }

  function itemBtn(g) {
    var sub = g.order === 0 ? "Set up your Mac and leave the sandbox" : "A project to build on your own";
    return '<button type="button" class="cl-cap-item" data-id="' + esc(g.id) + '">' +
      "<b>" + esc(g.title) + "</b><span>" + sub + "</span></button>";
  }

  function showGuide(id) {
    var g = guides().filter(function (x) { return x.id === id; })[0];
    if (!g) { showList(); return; }
    hTitle.textContent = g.title;
    backBtn.hidden = false;
    body.innerHTML = '<div class="cl-cap-doc">' + mdToHtml(g.body) + "</div>";
    body.scrollTop = 0;
    dialog.scrollTop = 0;
    backBtn.setAttribute("data-return", id);
    backBtn.focus();
  }

  function open() {
    if (!overlay.hidden) return;
    lastFocus = document.activeElement;
    showList();
    overlay.hidden = false;
    btn.setAttribute("aria-expanded", "true");
    closeBtn.focus();
    document.addEventListener("keydown", onKey, true);
  }

  function close() {
    if (overlay.hidden) return;
    overlay.hidden = true;
    btn.setAttribute("aria-expanded", "false");
    document.removeEventListener("keydown", onKey, true);
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
    else btn.focus();
  }

  function init() {
    if (document.getElementById("cl-cap-btn")) return; // idempotent

    var style = document.createElement("style");
    style.textContent = STYLE;
    document.head.appendChild(style);

    btn = document.createElement("button");
    btn.id = "cl-cap-btn";
    btn.type = "button";
    btn.textContent = "Capstone";
    btn.setAttribute("aria-haspopup", "dialog");
    btn.setAttribute("aria-expanded", "false");
    btn.addEventListener("click", open); // Enter/Space fire click natively
    document.body.appendChild(btn);

    overlay = document.createElement("div");
    overlay.id = "cl-cap-overlay";
    overlay.hidden = true;
    overlay.addEventListener("click", function (e) { if (e.target === overlay) close(); });

    dialog = document.createElement("div");
    dialog.className = "cl-cap-dialog";
    dialog.setAttribute("role", "dialog");
    dialog.setAttribute("aria-modal", "true");
    dialog.setAttribute("aria-labelledby", "cl-cap-h");
    dialog.tabIndex = -1;

    header = document.createElement("div");
    header.className = "cl-cap-header";

    var left = document.createElement("div");
    left.style.display = "flex";
    left.style.alignItems = "center";
    left.style.gap = "10px";
    backBtn = document.createElement("button");
    backBtn.type = "button";
    backBtn.className = "cl-cap-btn2";
    backBtn.textContent = "← All projects";
    backBtn.hidden = true;
    backBtn.addEventListener("click", showList);
    hTitle = document.createElement("h2");
    hTitle.className = "cl-cap-h";
    hTitle.id = "cl-cap-h";
    hTitle.textContent = "Capstone projects";
    left.appendChild(backBtn);
    left.appendChild(hTitle);

    closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.className = "cl-cap-btn2";
    closeBtn.textContent = "Close";
    closeBtn.setAttribute("aria-label", "Close capstone");
    closeBtn.addEventListener("click", close);

    header.appendChild(left);
    header.appendChild(closeBtn);

    body = document.createElement("div");
    body.className = "cl-cap-body";

    dialog.appendChild(header);
    dialog.appendChild(body);
    overlay.appendChild(dialog);
    document.body.appendChild(overlay);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
