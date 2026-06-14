/* checker.js — tolerant correctness checking (the first feedback channel).
   Given a lesson's check spec and a run result ({ stdout, events }), decide
   pass/fail and always return diagnostics — never a bare fail (PLAN §3).

   Implemented now: check.type "output" (whitespace-normalized line compare with
   a first-difference diagnostic) and "calls" (the recorded music/turtle/plot
   sequence, matched tolerantly with a which-step diagnostic). check.type "tests"
   and "parsons" are recognised but not graded yet (return ungraded:true) — they
   arrive with the test-runner and the Parsons UI. Pure logic, unit-testable. */

(function () {
  "use strict";
  var CL = (window.CL = window.CL || {});

  function normOut(s) {
    return String(s == null ? "" : s)
      .replace(/\r/g, "")
      .split("\n")
      .map(function (l) { return l.replace(/\s+$/, ""); })
      .join("\n")
      .replace(/^\n+/, "")
      .replace(/\n+$/, "");
  }

  function checkOutput(expected, got) {
    var e = normOut(expected), g = normOut(got);
    if (e === g) return { pass: true, diagnostics: ["Correct — your output matches what was expected."] };
    if (g === "") {
      return { pass: false, diagnostics: ["Your program didn’t print anything yet.", "It should print:", "  " + e.split("\n").join(" / ")] };
    }
    var el = e.split("\n"), gl = g.split("\n"), n = Math.max(el.length, gl.length), diags = [];
    for (var i = 0; i < n; i++) {
      if ((el[i] || "") !== (gl[i] || "")) {
        diags.push("Line " + (i + 1) + " of the output isn’t right yet:");
        diags.push("  expected:    " + (el[i] === undefined ? "(no more lines)" : JSON.stringify(el[i])));
        diags.push("  you printed: " + (gl[i] === undefined ? "(no more lines)" : JSON.stringify(gl[i])));
        break;
      }
    }
    if (!diags.length) diags.push("Your output is close but doesn’t match exactly.");
    return { pass: false, diagnostics: diags };
  }

  // Reduce a recorded event tuple to a comparable {fn, ...args} signature.
  function normCall(e) {
    var k = e[0];
    if (k === "play") return { fn: "play", note: e[1] };
    if (k === "sample") return { fn: "sample", name: e[1] };
    if (k && k.indexOf("t_") === 0) return { fn: k.slice(2), val: e[1] };
    return { fn: k };
  }

  function checkCalls(expected, events) {
    var actual = (events || []).map(normCall);
    if (actual.length < expected.length) {
      return { pass: false, diagnostics: ["So far your code did " + actual.length + " of the " + expected.length + " steps expected. Keep going."] };
    }
    for (var i = 0; i < expected.length; i++) {
      var ex = expected[i], ac = actual[i];
      if (!ac || ac.fn !== ex.fn) {
        return { pass: false, diagnostics: ["Step " + (i + 1) + ": expected a " + ex.fn + "() call here" + (ac ? ", but found " + ac.fn + "()." : ".")] };
      }
      var keys = Object.keys(ex);
      for (var j = 0; j < keys.length; j++) {
        var key = keys[j];
        if (key === "fn") continue;
        if (String(ac[key]) !== String(ex[key])) {
          return { pass: false, diagnostics: ["Step " + (i + 1) + " (" + ex.fn + "): expected " + key + " = " + ex[key] + ", but got " + ac[key] + "."] };
        }
      }
    }
    var diags = ["Correct — the steps match what was expected."];
    if (actual.length > expected.length) diags.push("(You did " + (actual.length - expected.length) + " extra step(s) after — fine if you meant to.)");
    return { pass: true, diagnostics: diags };
  }

  CL.check = {
    run: function (lesson, result) {
      var c = lesson && lesson.check;
      if (!c || !c.type) return { pass: true, diagnostics: ["(this lesson has no check)"], ungraded: true };
      result = result || {};
      if (c.type === "output") return checkOutput(c.expected, result.stdout);
      if (c.type === "calls") return checkCalls(c.calls || [], result.events);
      return { pass: true, diagnostics: ["(this check type isn’t graded yet)"], ungraded: true };
    },
  };
})();
