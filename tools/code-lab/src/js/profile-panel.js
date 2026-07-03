/* profile-panel.js — multiple players on one copy of the app, each with their
   own saved progress.

   How isolation works: storage.js scopes its save key by the active profile id
   stored in localStorage "codelab.currentProfile" (the "default" profile keeps
   the original un-suffixed key, so pre-profiles progress is preserved). This
   panel owns the profile LIST ("codelab.profiles" = [{id,name}]) and the
   current-profile pointer, and switches by writing the pointer then reloading
   so storage.js re-reads the right save. It never touches engine.js.

   Self-contained and self-initialising on DOM ready, like reference-panel.js
   and capstone-panel.js. Globbed into the build by build.js. */

(function () {
  "use strict";

  var LIST_KEY = "codelab.profiles";      // [{ id, name }]
  var CURRENT_KEY = "codelab.currentProfile"; // active id (also read by storage.js)

  /* ---------- profile store (localStorage, resilient to disabled storage) --- */
  function lsGet(k) {
    try { return window.localStorage.getItem(k); } catch (e) { return null; }
  }
  function lsSet(k, v) {
    try { window.localStorage.setItem(k, v); } catch (e) { /* ignore */ }
  }
  function lsDel(k) {
    try { window.localStorage.removeItem(k); } catch (e) { /* ignore */ }
  }

  function loadList() {
    try {
      var arr = JSON.parse(lsGet(LIST_KEY) || "[]");
      if (Array.isArray(arr) && arr.length) return arr.filter(function (p) { return p && p.id; });
    } catch (e) { /* fall through */ }
    return null;
  }
  function saveList(list) { lsSet(LIST_KEY, JSON.stringify(list)); }
  function getCurrent() { return lsGet(CURRENT_KEY) || "default"; }

  // Unique-ish id for a new profile. Date/Math are fine in the browser.
  function newId() {
    return "p" + Date.now().toString(36) + Math.floor(Math.random() * 1e6).toString(36);
  }

  // First run: adopt any pre-profiles save as the "default" profile so the
  // player keeps their progress. After this the list always has ≥1 entry.
  function ensureList() {
    var list = loadList();
    if (!list) {
      list = [{ id: "default", name: "Player 1" }];
      saveList(list);
    }
    if (!lsGet(CURRENT_KEY)) lsSet(CURRENT_KEY, list[0].id);
    // If the pointer is stale (profile deleted out-of-band), fall back to first.
    if (!list.some(function (p) { return p.id === getCurrent(); })) {
      lsSet(CURRENT_KEY, list[0].id);
    }
    return list;
  }

  function currentName(list) {
    var id = getCurrent();
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i].name;
    return list.length ? list[0].name : "Player 1";
  }

  function switchTo(id) {
    lsSet(CURRENT_KEY, id);
    window.location.reload(); // storage.js re-reads the save for this profile
  }

  function addProfile(name) {
    var list = ensureList();
    list.push({ id: newId(), name: name });
    saveList(list);
    return list;
  }

  function renameProfile(id, name) {
    var list = ensureList();
    list.forEach(function (p) { if (p.id === id) p.name = name; });
    saveList(list);
    return list;
  }

  function deleteProfile(id) {
    var list = ensureList();
    // Never delete the active profile or the last remaining one.
    if (id === getCurrent() || list.length <= 1) return list;
    list = list.filter(function (p) { return p.id !== id; });
    saveList(list);
    // Remove that profile's saved progress too (via storage.js's key naming).
    try {
      if (window.CL && CL.storage && CL.storage.profileSaveKey) lsDel(CL.storage.profileSaveKey(id));
    } catch (e) { /* ignore */ }
    return list;
  }

  /* ---------- markup helpers ---------- */
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  /* ---------- scoped styles (theme-aware via the app's CSS custom props) ----- */
  var STYLE = [
    // pill stacked above the Reference button (bottom-right, which sits at 16px)
    "#cl-prof-btn{position:fixed;right:16px;bottom:64px;z-index:9998;max-width:60vw;",
    "  font:600 14px/1 system-ui,sans-serif;padding:10px 16px;border:none;border-radius:999px;",
    "  background:var(--panel,#243b6b);color:var(--text,#fff);cursor:pointer;",
    "  box-shadow:0 2px 10px rgba(0,0,0,.3);border:1px solid var(--muted,#0003);",
    "  overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
    "#cl-prof-btn .cl-prof-ico{opacity:.85;margin-right:6px}",
    "#cl-prof-btn:hover{filter:brightness(1.06)}",
    "#cl-prof-btn:focus-visible{outline:3px solid var(--accent,#c0392b);outline-offset:2px}",
    "#cl-prof-overlay{position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.55);",
    "  display:flex;align-items:flex-start;justify-content:center;padding:6vh 16px;overflow:auto}",
    "#cl-prof-overlay[hidden]{display:none}",
    ".cl-prof-dialog{background:var(--panel,#fff);color:var(--text,#111);",
    "  width:100%;max-width:460px;max-height:86vh;overflow:auto;border-radius:12px;",
    "  box-shadow:0 10px 40px rgba(0,0,0,.4);padding:20px 22px 24px;",
    "  font:14px/1.5 system-ui,sans-serif}",
    ".cl-prof-dialog:focus{outline:none}",
    ".cl-prof-header{display:flex;align-items:center;justify-content:space-between;gap:12px;",
    "  padding:0 0 10px;margin:0 0 12px;border-bottom:1px solid var(--muted,#ccc)}",
    ".cl-prof-h{margin:0;font-size:20px;font-weight:700}",
    ".cl-prof-close{font:600 13px/1 system-ui,sans-serif;padding:8px 14px;border-radius:8px;",
    "  border:1px solid var(--muted,#999);background:transparent;color:inherit;cursor:pointer}",
    ".cl-prof-close:hover{background:rgba(128,128,128,.15)}",
    ".cl-prof-close:focus-visible{outline:3px solid var(--accent,#c0392b);outline-offset:2px}",
    ".cl-prof-row{display:flex;align-items:center;gap:8px;padding:8px 0;",
    "  border-bottom:1px solid var(--muted,#eee)}",
    ".cl-prof-name{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:600}",
    ".cl-prof-badge{font-size:11px;font-weight:700;padding:2px 8px;border-radius:999px;",
    "  background:var(--accent,#c0392b);color:#fff}",
    ".cl-prof-act{font:600 12px/1 system-ui,sans-serif;padding:6px 10px;border-radius:7px;",
    "  border:1px solid var(--muted,#999);background:transparent;color:inherit;cursor:pointer}",
    ".cl-prof-act:hover{background:rgba(128,128,128,.15)}",
    ".cl-prof-act:focus-visible{outline:2px solid var(--accent,#c0392b);outline-offset:2px}",
    ".cl-prof-act[disabled]{opacity:.4;cursor:not-allowed}",
    ".cl-prof-act.danger{color:#c0392b;border-color:#c0392b55}",
    ".cl-prof-input{flex:1;min-width:0;font:14px/1.4 system-ui,sans-serif;padding:7px 10px;",
    "  border:1px solid var(--muted,#999);border-radius:7px;background:var(--bg,#fff);color:inherit}",
    ".cl-prof-add{display:flex;gap:8px;margin-top:16px}",
    ".cl-prof-note{margin:14px 0 0;font-size:12px;opacity:.7}",
  ].join("");

  var btn, overlay, dialog, lastFocus;

  function refreshBtn() {
    var list = ensureList();
    btn.innerHTML = '<span class="cl-prof-ico" aria-hidden="true">👤</span>' + esc(currentName(list));
    btn.setAttribute("aria-label", "Profile: " + currentName(list) + ". Switch or manage players.");
  }

  /* ---------- dialog body: the profile list + add form ---------- */
  function buildBody() {
    var body = dialog.querySelector(".cl-prof-body");
    body.innerHTML = "";
    var list = ensureList();
    var current = getCurrent();

    list.forEach(function (p) {
      var row = document.createElement("div");
      row.className = "cl-prof-row";

      var name = document.createElement("span");
      name.className = "cl-prof-name";
      name.textContent = p.name;
      row.appendChild(name);

      if (p.id === current) {
        var badge = document.createElement("span");
        badge.className = "cl-prof-badge";
        badge.textContent = "current";
        row.appendChild(badge);
      } else {
        var sw = mkAct("Switch", function () { switchTo(p.id); });
        row.appendChild(sw);
      }

      row.appendChild(mkAct("Rename", function () { startRename(row, p); }));

      var del = mkAct("Delete", function () { confirmDelete(row, p); });
      del.classList.add("danger");
      // Can't delete the active profile or the last remaining one.
      if (p.id === current || list.length <= 1) {
        del.disabled = true;
        del.title = p.id === current ? "Switch to another profile first" : "At least one profile is required";
      }
      row.appendChild(del);

      body.appendChild(row);
    });

    // add-a-profile form
    var add = document.createElement("div");
    add.className = "cl-prof-add";
    var input = document.createElement("input");
    input.className = "cl-prof-input";
    input.type = "text";
    input.maxLength = 24;
    input.placeholder = "New player name";
    input.setAttribute("aria-label", "New player name");
    var addBtn = mkAct("Add", function () { doAdd(input); });
    input.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); doAdd(input); } });
    add.appendChild(input);
    add.appendChild(addBtn);
    body.appendChild(add);

    var note = document.createElement("p");
    note.className = "cl-prof-note";
    note.textContent = "Each player has their own progress, code, and theme. Switching reloads the app.";
    body.appendChild(note);
  }

  function mkAct(label, onClick) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "cl-prof-act";
    b.textContent = label;
    b.addEventListener("click", onClick);
    return b;
  }

  function doAdd(input) {
    var name = (input.value || "").trim();
    if (!name) { input.focus(); return; }
    addProfile(name);
    buildBody();
    var fresh = dialog.querySelector(".cl-prof-input");
    if (fresh) fresh.focus();
  }

  // Inline rename: replace the row's contents with an input + Save/Cancel.
  function startRename(row, p) {
    row.innerHTML = "";
    var input = document.createElement("input");
    input.className = "cl-prof-input";
    input.type = "text";
    input.maxLength = 24;
    input.value = p.name;
    input.setAttribute("aria-label", "Rename " + p.name);
    function save() {
      var name = (input.value || "").trim();
      if (name) { renameProfile(p.id, name); if (p.id === getCurrent()) refreshBtn(); }
      buildBody();
    }
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") { e.preventDefault(); save(); }
      else if (e.key === "Escape") { e.preventDefault(); buildBody(); }
    });
    var saveBtn = mkAct("Save", save);
    var cancel = mkAct("Cancel", function () { buildBody(); });
    row.appendChild(input);
    row.appendChild(saveBtn);
    row.appendChild(cancel);
    input.focus();
    input.select();
  }

  // Inline two-step delete confirm (no native confirm dialog).
  function confirmDelete(row, p) {
    row.innerHTML = "";
    var msg = document.createElement("span");
    msg.className = "cl-prof-name";
    msg.textContent = "Delete " + p.name + " and their progress?";
    var yes = mkAct("Delete", function () { deleteProfile(p.id); buildBody(); });
    yes.classList.add("danger");
    var no = mkAct("Cancel", function () { buildBody(); });
    row.appendChild(msg);
    row.appendChild(yes);
    row.appendChild(no);
    no.focus();
  }

  /* ---------- open / close + focus trap (mirrors reference-panel.js) -------- */
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
  function open() {
    if (!overlay.hidden) return;
    lastFocus = document.activeElement;
    buildBody();
    overlay.hidden = false;
    btn.setAttribute("aria-expanded", "true");
    var closeBtn = dialog.querySelector(".cl-prof-close");
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
    if (document.getElementById("cl-prof-btn")) return; // idempotent

    var style = document.createElement("style");
    style.textContent = STYLE;
    document.head.appendChild(style);

    btn = document.createElement("button");
    btn.id = "cl-prof-btn";
    btn.type = "button";
    btn.setAttribute("aria-haspopup", "dialog");
    btn.setAttribute("aria-expanded", "false");
    btn.addEventListener("click", open);
    document.body.appendChild(btn);
    refreshBtn();

    overlay = document.createElement("div");
    overlay.id = "cl-prof-overlay";
    overlay.hidden = true;
    overlay.addEventListener("click", function (e) { if (e.target === overlay) close(); });

    dialog = document.createElement("div");
    dialog.className = "cl-prof-dialog";
    dialog.setAttribute("role", "dialog");
    dialog.setAttribute("aria-modal", "true");
    dialog.setAttribute("aria-labelledby", "cl-prof-h");
    dialog.tabIndex = -1;

    var header = document.createElement("div");
    header.className = "cl-prof-header";
    var h = document.createElement("h2");
    h.className = "cl-prof-h";
    h.id = "cl-prof-h";
    h.textContent = "Players";
    var closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.className = "cl-prof-close";
    closeBtn.textContent = "Close";
    closeBtn.setAttribute("aria-label", "Close players panel");
    closeBtn.addEventListener("click", close);
    header.appendChild(h);
    header.appendChild(closeBtn);

    var body = document.createElement("div");
    body.className = "cl-prof-body";

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
