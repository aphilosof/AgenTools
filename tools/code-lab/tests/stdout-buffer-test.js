/* stdout-buffer-test.js — regression test for browser stdout line-buffering.

   The main harness (run.js) grades via runner.py, whose StringIO preserves
   newlines exactly — so it never exercises the *browser* stdout path. That path
   had a real bug: Pyodide's setStdout({batched}) strips the trailing newline,
   and the engine does `stdout += s`, so a program printing three lines was
   graded as one concatenated line ("Python speaks.So do I.Let's begin.").

   The fix (runtime-python.js _mkStream) line-buffers the raw byte stream and
   posts each COMPLETE line WITH its newline (partials — prompts, end='' — flush
   without one), so `stdout += s` reconstructs EXACT stdout. This test extracts
   the real _mkStream from runtime-python.js and asserts that property.

   Run: node tests/stdout-buffer-test.js */

const fs = require("fs");
const path = require("path");

const file = fs.readFileSync(path.join(__dirname, "..", "src", "js", "runtime-python.js"), "utf8");
const lines = file.split("\n");
let start = -1, end = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes("var WORKER_SRC = [")) start = i;
  else if (start >= 0 && /^\s*\]\.join\("/.test(lines[i])) { end = i; break; }
}
if (start < 0 || end < 0) { console.error("FAIL: could not locate WORKER_SRC in runtime-python.js"); process.exit(1); }
const workerSrc = eval("[" + lines.slice(start + 1, end).join("\n") + "]").join("\n");
const fm = workerSrc.match(/function _mkStream\(kind\) \{[\s\S]*?\n\}/);
if (!fm) { console.error("FAIL: _mkStream not found in WORKER_SRC — did the stdout fix get removed?"); process.exit(1); }

// Instantiate the REAL _mkStream with a postMessage collector.
const makeFactory = new Function("postMessage", "TextDecoder", fm[0] + "\nreturn _mkStream;");

const enc = new TextEncoder();
// Each case: the exact stdout a program produces. We feed it as 3-byte chunks
// (deliberately splitting multi-byte UTF-8) to mimic arbitrary Pyodide writes.
const cases = [
  "Python speaks.\nSo do I.\nLet's begin.\n",   // the reported bug: 3 prints
  "Name: Welcome, Alex!\n",                      // prompt + output on one line
  "0 1 2 3 4 ",                                  // print(end=" "), no trailing newline
  "a\nb",                                        // final line without newline
  "→ ♯ ♭\nmiddle C\n",            // unicode split across byte chunks
  "",                                            // no output
];

let allOk = true;
for (const input of cases) {
  const out = [];
  const s = makeFactory(function (m) { out.push(m.text); }, TextDecoder)("stdout");
  const bytes = enc.encode(input);
  for (let p = 0; p < bytes.length; p += 3) s.write(bytes.slice(p, p + 3));
  s.flush();
  const reconstructed = out.join("");            // the engine does: stdout += s
  const ok = reconstructed === input;
  allOk = allOk && ok;
  console.log((ok ? "  PASS" : "  FAIL") + "  " + out.length + " chunk(s)  " + JSON.stringify(input.slice(0, 30)));
  if (!ok) console.log("        got: " + JSON.stringify(reconstructed));
}

if (allOk) { console.log("\nstdout-buffer: ALL PASS — emitted chunks reconstruct exact stdout"); process.exit(0); }
console.error("\nstdout-buffer: FAILED"); process.exit(1);
