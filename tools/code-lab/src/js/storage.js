/* storage.js — localStorage persistence: progress, stars, codex entries,
   theme choice, coach-mode data. Export/import save codes. Versioned schema.

   Phase 1 step 2 scope: the versioned namespace and theme get/set. Progress,
   stars, and codex collections attach to the same state object in later steps. */

(function () {
  "use strict";
  var CL = (window.CL = window.CL || {});

  var KEY = "codelab.save.v2"; // bump the suffix on a breaking schema change
  // code: { lessonId: lastEditedSource }, solved: { lessonId: true }
  var DEFAULTS = { theme: "magazine", lessonIdx: 0, code: {}, solved: {} };

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
    getLessonIdx: function () {
      return state.lessonIdx || 0;
    },
    setLessonIdx: function (idx) {
      state.lessonIdx = idx;
      write(state);
    },
    getCode: function (lessonId) {
      return (state.code && state.code[lessonId]) || null;
    },
    setCode: function (lessonId, code) {
      if (!state.code) state.code = {};
      state.code[lessonId] = code;
      write(state);
    },
    isSolved: function (lessonId) {
      return !!(state.solved && state.solved[lessonId]);
    },
    markSolved: function (lessonId) {
      if (!state.solved) state.solved = {};
      state.solved[lessonId] = true;
      write(state);
    },
    // Escape hatch for later steps and debugging; returns a copy.
    snapshot: function () {
      return Object.assign({}, state);
    },
  };
})();
