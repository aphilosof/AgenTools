/* style.js — the second feedback channel (separate from correctness). A small
   built-in linter for naming, magic numbers, repeated code, and function length.
   Active from World 5; advisory (never blocks) until World 6+ checkpoints.

   Deliberately conservative — like the correctness checker, it must feel fair,
   so each rule is tuned against false positives in this course's code (note
   numbers, turtle distances, and angles are legitimate one-off literals, so the
   magic-number rule only fires on a literal repeated several times). Pure
   logic, analysed on stripped source (strings and comments removed first).
   Returns [{ rule, line, message }]. */

(function () {
  "use strict";
  var CL = (window.CL = window.CL || {});

  var MAX_FUNC_LINES = 15; // a def body longer than this is worth splitting
  var REPEAT_MIN = 3; // a line / literal repeated this many times is worth naming
  // single-letter names that are conventional and fine (loops, math, coords)
  var OK_SHORT = { i: 1, j: 1, k: 1, n: 1, x: 1, y: 1, t: 1 };

  // Replace string contents and comments with blanks so they don't trip rules,
  // keeping line numbers intact.
  function stripped(src) {
    var noTriple = src.replace(/'''[\s\S]*?'''|"""[\s\S]*?"""/g, function (m) {
      return m.replace(/[^\n]/g, " ");
    });
    return noTriple
      .split("\n")
      .map(function (line) {
        var out = line.replace(/'[^']*'|"[^"]*"/g, function (m) { return " ".repeat(m.length); });
        var hash = out.indexOf("#");
        if (hash !== -1) out = out.slice(0, hash);
        return out;
      })
      .join("\n");
  }

  function indentOf(line) {
    var m = line.match(/^(\s*)/);
    return m ? m[1].length : 0;
  }

  function checkFunctionLength(lines, findings) {
    for (var i = 0; i < lines.length; i++) {
      if (!/^\s*def\s+\w+\s*\(/.test(lines[i])) continue;
      var base = indentOf(lines[i]);
      var body = 0;
      for (var j = i + 1; j < lines.length; j++) {
        if (lines[j].trim() === "") continue;
        if (indentOf(lines[j]) <= base) break;
        body++;
      }
      if (body > MAX_FUNC_LINES) {
        findings.push({ rule: "function-length", line: i + 1, message: "this function is " + body + " lines — try breaking it into smaller named functions." });
      }
    }
  }

  function checkRepeatedLines(lines, findings) {
    var counts = {};
    lines.forEach(function (line) {
      var t = line.trim();
      if (t.length < 6) return; // skip trivial lines like "else:"
      counts[t] = (counts[t] || 0) + 1;
    });
    Object.keys(counts).forEach(function (t) {
      if (counts[t] >= REPEAT_MIN) {
        var first = 0;
        for (var i = 0; i < lines.length; i++) { if (lines[i].trim() === t) { first = i + 1; break; } }
        findings.push({ rule: "repeated-code", line: first, message: "this line appears " + counts[t] + " times — a loop or a function could remove the repetition." });
      }
    });
  }

  function checkMagicNumbers(text, lines, findings) {
    var counts = {};
    var re = /\b\d+(?:\.\d+)?\b/g, m;
    while ((m = re.exec(text)) !== null) {
      var v = m[0];
      if (v === "0" || v === "1") continue;
      counts[v] = (counts[v] || 0) + 1;
    }
    Object.keys(counts).forEach(function (v) {
      if (counts[v] >= REPEAT_MIN) {
        var first = 0;
        for (var i = 0; i < lines.length; i++) { if (new RegExp("\\b" + v.replace(".", "\\.") + "\\b").test(lines[i])) { first = i + 1; break; } }
        findings.push({ rule: "magic-number", line: first, message: "the number " + v + " appears " + counts[v] + " times — giving it a name (like a variable) makes the code clearer." });
      }
    });
  }

  function checkNaming(lines, findings) {
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      // assignment target (skip ==, <=, >=, != and augmented ops handled by the simple form)
      var am = line.match(/^\s*([A-Za-z_]\w*)\s*=\s*[^=]/);
      var name = am ? am[1] : null;
      if (!name) {
        var fm = line.match(/^\s*for\s+([A-Za-z_]\w*)\s+in\b/);
        name = fm ? fm[1] : null;
        if (fm && (name.length === 1)) continue; // loop counters may be short
      }
      if (!name) continue;
      if (/^[A-Z0-9_]+$/.test(name)) continue; // ALL_CAPS constant is fine
      if (name.length === 1 && !OK_SHORT[name]) {
        findings.push({ rule: "naming", line: i + 1, message: 'the name "' + name + '" is very short — a descriptive name says what it holds.' });
      } else if (/[A-Z]/.test(name)) {
        findings.push({ rule: "naming", line: i + 1, message: 'use lowercase_with_underscores for "' + name + '" (Python style).' });
      }
    }
  }

  CL.style = {
    analyze: function (src) {
      var findings = [];
      if (!src) return findings;
      var text = stripped(src);
      var lines = text.split("\n");
      checkFunctionLength(lines, findings);
      checkRepeatedLines(lines, findings);
      checkMagicNumbers(text, lines, findings);
      checkNaming(lines, findings);
      findings.sort(function (a, b) { return a.line - b.line; });
      return findings;
    },
  };
})();
