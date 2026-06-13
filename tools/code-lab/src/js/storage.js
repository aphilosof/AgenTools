/* storage.js — localStorage persistence: progress, stars, codex entries,
   theme choice, coach-mode data. Export/import save codes. Versioned schema.

   Phase 1 step 2 scope: the versioned namespace and theme get/set. Progress,
   stars, and codex collections attach to the same state object in later steps. */

(function () {
  "use strict";
  var CL = (window.CL = window.CL || {});

  var KEY = "codelab.save.v1"; // bump the suffix on a breaking schema change
  var DEFAULTS = { theme: "magazine" };

  function read() {
    try {
      var raw = window.localStorage.getItem(KEY);
      if (!raw) return Object.assign({}, DEFAULTS);
      var parsed = JSON.parse(raw);
      return Object.assign({}, DEFAULTS, parsed);
    } catch (e) {
      // Corrupt or unavailable storage must never break the app.
      return Object.assign({}, DEFAULTS);
    }
  }

  function write(state) {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {
      /* storage full or disabled: stay in-memory for the session */
    }
  }

  var state = read();

  CL.storage = {
    getTheme: function () {
      return state.theme;
    },
    setTheme: function (theme) {
      state.theme = theme;
      write(state);
    },
    // Escape hatch for later steps and debugging; returns a copy.
    snapshot: function () {
      return Object.assign({}, state);
    },
  };
})();
