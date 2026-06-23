/* errors.js — the friendly error layer. Translate, never replace: given a real
   Python traceback, produce a plain-language annotation (grade 5-6) keyed to the
   error class and the likely line, while the raw traceback is still shown intact.

   The engine decides whether to display the annotation (full through Chapter 4,
   on-demand Chapter 5-7, off from Real Tools I, never in the Arena). Each entry
   carries a codex id so the Codex errors tab can register what's been met. */

(function () {
  "use strict";
  var CL = (window.CL = window.CL || {});

  function grab(msg, re, fallback) {
    var m = String(msg).match(re);
    return m ? m[1] : fallback;
  }

  // The 13 error classes a beginner hits most. plain() takes the final
  // traceback line so messages can name the offending value when useful.
  var TABLE = {
    NameError: {
      codex: "err-name", title: "Unknown name",
      plain: function (m) {
        var n = grab(m, /name '([^']+)'/, null);
        return n
          ? 'Python doesn’t know the name "' + n + '". You used it before creating it, or spelled it differently. Check the spelling, or give it a value first.'
          : "Python met a name it doesn’t know. You may have used it before creating it, or misspelled it.";
      },
    },
    SyntaxError: {
      codex: "err-syntax", title: "Can’t read the code",
      plain: function () { return "Python couldn’t understand this line. Look for a missing colon (:), bracket, or quote, or a typo right around the spot it points to."; },
    },
    IndentationError: {
      codex: "err-indent", title: "Spacing problem",
      plain: function () { return "The spaces at the start of the line are off. Lines inside a loop, if, or function must all be indented by the same amount — use 4 spaces."; },
    },
    TabError: {
      codex: "err-indent", title: "Spacing problem",
      plain: function () { return "You mixed tabs and spaces for indentation. Use spaces only — 4 per level."; },
    },
    TypeError: {
      codex: "err-type", title: "Wrong kind of value",
      plain: function () { return "You used a value in a way its type doesn’t allow — for example adding a number to text. You may need int(), str(), or float() to convert it first."; },
    },
    ValueError: {
      codex: "err-value", title: "Wrong value",
      plain: function () { return "The value wasn’t the right kind for that step — like int(\"hello\"), which isn’t a number."; },
    },
    ZeroDivisionError: {
      codex: "err-zerodiv", title: "Divide by zero",
      plain: function () { return "You divided by zero. Nothing can be divided by 0 — check the number you’re dividing by."; },
    },
    IndexError: {
      codex: "err-index", title: "Past the end",
      plain: function () { return "You asked for an item past the end of a list or string. The first item is index 0, so the last one is the length minus 1."; },
    },
    KeyError: {
      codex: "err-key", title: "Missing key",
      plain: function (m) {
        var k = grab(m, /KeyError:\s*(.+)$/, null);
        return "You asked a dictionary for a key" + (k ? " (" + k + ")" : "") + " it doesn’t have. Check the spelling, or add it first.";
      },
    },
    AttributeError: {
      codex: "err-attr", title: "No such thing",
      plain: function () { return "That value doesn’t have the thing you asked for after the dot. Check the spelling, or that the value is the type you think it is."; },
    },
    ModuleNotFoundError: {
      codex: "err-module", title: "Module not found",
      plain: function (m) {
        var n = grab(m, /named '([^']+)'/, null);
        return "Python couldn’t find a module" + (n ? ' called "' + n + '"' : "") + " to import. Check the name.";
      },
    },
    UnboundLocalError: {
      codex: "err-unbound", title: "Used too early",
      plain: function () { return "Inside a function you used a variable before giving it a value."; },
    },
    RecursionError: {
      codex: "err-recursion", title: "Too deep",
      plain: function () { return "A function kept calling itself with no stopping point, so Python gave up. Make sure there’s a case that stops the calls."; },
    },
  };

  CL.errors = {
    registry: TABLE,
    // The codex ids this layer can translate (for the Codex errors tab / harness).
    codexIds: function () {
      var ids = {};
      Object.keys(TABLE).forEach(function (k) { ids[TABLE[k].codex] = true; });
      return Object.keys(ids);
    },
    // Parse a Python traceback into { type, line, title, codex, plain }.
    // Returns plain:null for an unrecognised error class (still shows the raw
    // traceback; we just don't invent an explanation).
    translate: function (traceback) {
      if (!traceback) return null;
      var text = String(traceback);
      var lines = text.split("\n").filter(function (l) { return l.trim().length; });
      var last = lines.length ? lines[lines.length - 1] : "";
      var tm = last.match(/^([A-Za-z_][A-Za-z0-9_]*)(?::\s*(.*))?$/);
      var type = tm ? tm[1] : null;
      var line = null, lm, re = /File "<student>", line (\d+)/g;
      while ((lm = re.exec(text)) !== null) line = parseInt(lm[1], 10);
      var entry = type && TABLE[type];
      if (!entry) return { type: type, line: line, codex: null, title: null, plain: null };
      return { type: type, line: line, codex: entry.codex, title: entry.title, plain: entry.plain(last) };
    },
  };
})();
