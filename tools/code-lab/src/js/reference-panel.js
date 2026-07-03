/* reference-panel.js — always-available reference chart panel (report Part 5).

   Self-contained: injects a fixed "Reference" button + an accessible modal
   dialog that renders window.CODELAB.reference (the 8 tables from
   reference.js). Self-initialises on DOM ready; does not depend on engine.js
   calling it.

   engine.js's buildRefTable() is PRIVATE to that module (only CL.engine is
   exposed), and per instructions we do not edit engine.js to export it — so
   the { title, head, rows } shape is rendered locally below. Globbed into the
   build by build.js like every other src/js file (no build-config change). */

(function () {
  "use strict";

  /* ---- minimal inline markup: escape, then `code` and **bold** (the only
     markup the reference cells use; there are no [[term]] links) ---- */
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function inline(s) {
    return esc(s)
      .replace(/`([^`]+)`/g, function (_, c) { return "<code>" + c + "</code>"; })
      .replace(/\*\*([^*]+)\*\*/g, function (_, c) { return "<strong>" + c + "</strong>"; });
  }

  /* ---- render one { title, head, rows } table locally ---- */
  function renderTable(t) {
    var wrap = document.createElement("div");
    wrap.className = "cl-ref-table-wrap";
    if (t.title) {
      var cap = document.createElement("div");
      cap.className = "cl-ref-title";
      cap.innerHTML = inline(t.title);
      wrap.appendChild(cap);
    }
    var tbl = document.createElement("table");
    tbl.className = "cl-ref-table";
    if (t.head) {
      var thead = document.createElement("thead");
      var htr = document.createElement("tr");
      t.head.forEach(function (h) {
        var th = document.createElement("th");
        th.innerHTML = inline(h);
        htr.appendChild(th);
      });
      thead.appendChild(htr);
      tbl.appendChild(thead);
    }
    var tbody = document.createElement("tbody");
    (t.rows || []).forEach(function (row) {
      var tr = document.createElement("tr");
      row.forEach(function (cell) {
        var td = document.createElement("td");
        td.innerHTML = inline(cell);
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    tbl.appendChild(tbody);
    wrap.appendChild(tbl);
    return wrap;
  }

  /* ---- scoped styles (theme-aware via the app's CSS custom properties) ---- */
  var STYLE = [
    "#cl-ref-btn{position:fixed;right:16px;bottom:16px;z-index:9998;",
    "  font:600 14px/1 system-ui,sans-serif;padding:10px 16px;border:none;border-radius:999px;",
    "  background:var(--accent,#c0392b);color:#fff;cursor:pointer;",
    "  box-shadow:0 2px 10px rgba(0,0,0,.3)}",
    "#cl-ref-btn:hover{filter:brightness(1.08)}",
    "#cl-ref-btn:focus-visible{outline:3px solid var(--text,#000);outline-offset:2px}",
    "#cl-ref-overlay{position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.55);",
    "  display:flex;align-items:flex-start;justify-content:center;padding:5vh 16px;overflow:auto}",
    "#cl-ref-overlay[hidden]{display:none}",
    ".cl-ref-dialog{background:var(--panel,#fff);color:var(--text,#111);",
    "  width:100%;max-width:900px;max-height:88vh;overflow:auto;border-radius:12px;",
    "  box-shadow:0 10px 40px rgba(0,0,0,.4);padding:20px 22px 26px;",
    "  font:14px/1.5 system-ui,sans-serif}",
    ".cl-ref-dialog:focus{outline:none}",
    ".cl-ref-header{position:sticky;top:-20px;background:var(--panel,#fff);",
    "  display:flex;align-items:center;justify-content:space-between;gap:12px;",
    "  padding:2px 0 10px;margin:-2px 0 8px;border-bottom:1px solid var(--muted,#ccc)}",
    ".cl-ref-h{margin:0;font-size:20px;font-weight:700}",
    ".cl-ref-close{font:600 13px/1 system-ui,sans-serif;padding:8px 14px;border-radius:8px;",
    "  border:1px solid var(--muted,#999);background:transparent;color:inherit;cursor:pointer}",
    ".cl-ref-close:hover{background:rgba(128,128,128,.15)}",
    ".cl-ref-close:focus-visible{outline:3px solid var(--accent,#c0392b);outline-offset:2px}",
    ".cl-ref-table-wrap{margin:0 0 20px;overflow-x:auto}",
    ".cl-ref-title{font-weight:600;font-size:13px;margin:0 0 6px;color:var(--text,#111);opacity:.85}",
    ".cl-ref-table{border-collapse:collapse;width:100%;font-size:13px}",
    ".cl-ref-table th,.cl-ref-table td{text-align:left;padding:6px 12px 6px 0;",
    "  border-bottom:1px solid var(--muted,#e2e2e2);vertical-align:top}",
    ".cl-ref-table th{font-weight:700;white-space:nowrap}",
    ".cl-ref-table code{font-family:ui-monospace,Menlo,Consolas,monospace;",
    "  color:var(--accent,#c0392b);font-size:.92em}",
  ].join("");

  var btn, overlay, dialog, lastFocus;

  function focusable() {
    return Array.prototype.slice
      .call(dialog.querySelectorAll("button,[href],input,[tabindex]:not([tabindex='-1'])"))
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

  function buildBody() {
    var body = dialog.querySelector(".cl-ref-body");
    body.innerHTML = "";
    var data = (window.CODELAB && window.CODELAB.reference) || [];
    if (!data.length) {
      var p = document.createElement("p");
      p.textContent = "Reference chart not loaded.";
      body.appendChild(p);
      return;
    }
    data.forEach(function (t) { body.appendChild(renderTable(t)); });
  }

  function open() {
    if (!overlay.hidden) return;
    lastFocus = document.activeElement;
    buildBody();
    overlay.hidden = false;
    btn.setAttribute("aria-expanded", "true");
    var closeBtn = dialog.querySelector(".cl-ref-close");
    (closeBtn || dialog).focus();
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
    if (document.getElementById("cl-ref-btn")) return; // idempotent

    var style = document.createElement("style");
    style.textContent = STYLE;
    document.head.appendChild(style);

    btn = document.createElement("button");
    btn.id = "cl-ref-btn";
    btn.type = "button";
    btn.textContent = "Reference";
    btn.setAttribute("aria-haspopup", "dialog");
    btn.setAttribute("aria-expanded", "false");
    btn.addEventListener("click", open); // Enter/Space fire click natively
    document.body.appendChild(btn);

    overlay = document.createElement("div");
    overlay.id = "cl-ref-overlay";
    overlay.hidden = true;
    overlay.addEventListener("click", function (e) { if (e.target === overlay) close(); });

    dialog = document.createElement("div");
    dialog.className = "cl-ref-dialog";
    dialog.setAttribute("role", "dialog");
    dialog.setAttribute("aria-modal", "true");
    dialog.setAttribute("aria-labelledby", "cl-ref-h");
    dialog.tabIndex = -1;

    var header = document.createElement("div");
    header.className = "cl-ref-header";
    var h = document.createElement("h2");
    h.className = "cl-ref-h";
    h.id = "cl-ref-h";
    h.textContent = "Reference";
    var closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.className = "cl-ref-close";
    closeBtn.textContent = "Close";
    closeBtn.setAttribute("aria-label", "Close reference chart");
    closeBtn.addEventListener("click", close);
    header.appendChild(h);
    header.appendChild(closeBtn);

    var body = document.createElement("div");
    body.className = "cl-ref-body";

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
