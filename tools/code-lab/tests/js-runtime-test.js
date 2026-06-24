#!/usr/bin/env node
"use strict";
/* Tests the JS runtime bridge in isolation — no browser, no Worker API.
   Extracts WORKER_SRC from runtime-js.js, runs it in a vm sandbox with
   postMessage stubbed, and verifies event format, stdout capture, and
   error handling match what the engine expects. */

const vm = require("vm");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const runtimeSrc = fs.readFileSync(path.join(ROOT, "src/js/runtime-js.js"), "utf8");

// Step 1: load the outer IIFE to capture WORKER_SRC (the Blob content).
let workerSrc = null;
const outer = {
  window: { CL: {} },
  Blob: class { constructor([s]) { workerSrc = s; } },
  URL: { createObjectURL: () => "blob:test", revokeObjectURL: () => {} },
  Worker: class { constructor() {} terminate() {} postMessage() {} },
  Promise, setTimeout: () => 0, clearTimeout: () => {},
};
vm.createContext(outer);
vm.runInContext(runtimeSrc, outer);

const pass = [], fail = [];
function assert(label, cond, detail) {
  (cond ? pass : fail).push({ label, detail: detail || "" });
}

assert("WORKER_SRC extracted from runtime-js.js", !!workerSrc);

// Step 2: syntax-check WORKER_SRC.
let syntaxErr = null;
try { new Function(workerSrc); } catch (e) { syntaxErr = e.message; }
assert("WORKER_SRC has valid syntax", !syntaxErr, syntaxErr || "");

if (!workerSrc) {
  console.log("FAIL: cannot proceed without WORKER_SRC");
  process.exit(1);
}

// Step 3: run WORKER_SRC in a vm sandbox.
// Override `Function` so `new Function(code)()` runs inside this vm context
// (in the real browser worker it runs in the worker global — same effect).
const messages = [];
let wSandbox;
wSandbox = {
  postMessage: (m) => messages.push(JSON.parse(JSON.stringify(m))),
  console: { log: () => {}, error: () => {} },
  Function: function FunctionOverride(code) {
    return function () { vm.runInContext(code, wSandbox); };
  },
  parseFloat, parseInt, String, Number, Math,
};
vm.createContext(wSandbox);
vm.runInContext(workerSrc, wSandbox);
assert("onmessage handler registered in worker sandbox", typeof wSandbox.onmessage === "function");

function send(code) {
  messages.length = 0;
  wSandbox.onmessage({ data: { type: "run", code } });
  return messages.slice();
}
function eventsFrom(msgs) { const m = msgs.find((x) => x.type === "events"); return m ? m.events : null; }
function stdoutFrom(msgs) { return msgs.filter((x) => x.type === "stdout").map((x) => x.text).join(""); }

// --- music bridge ---
const m1 = send("play(60, 0.4); sleep(1.0); play(64);");
const ev1 = eventsFrom(m1);
assert("play() records a 'play' event", Array.isArray(ev1) && ev1.length >= 1 && ev1[0][0] === "play", JSON.stringify(ev1));
assert("play(60) midi note is 60", ev1 && ev1[0][1] === 60, ev1 && String(ev1[0][1]));
assert("play(60, 0.4) duration is 0.4", ev1 && ev1[0][2] === 0.4, ev1 && String(ev1[0][2]));
assert("play() at t=0 fires at 0 seconds", ev1 && ev1[0][3] === 0, ev1 && String(ev1[0][3]));
assert("sleep(1) advances clock for next play", ev1 && ev1[1] && ev1[1][3] > 0, ev1 && JSON.stringify(ev1[1]));
assert("worker posts 'done' after run", m1.some((x) => x.type === "done"));

// --- turtle bridge ---
const m2 = send("forward(100); right(90); penup(); pendown(); pencolor('red'); home();");
const ev2 = eventsFrom(m2);
assert("forward(100) records ['t_forward', 100]", ev2 && ev2[0][0] === "t_forward" && ev2[0][1] === 100, JSON.stringify(ev2 && ev2[0]));
assert("right(90) records ['t_right', 90]", ev2 && ev2[1][0] === "t_right" && ev2[1][1] === 90);
assert("penup() records ['t_penup']", ev2 && ev2[2][0] === "t_penup");
assert("pendown() records ['t_pendown']", ev2 && ev2[3][0] === "t_pendown");
assert("pencolor('red') records ['t_color', 'red']", ev2 && ev2[4][0] === "t_color" && ev2[4][1] === "red");
assert("home() records ['t_home']", ev2 && ev2[5][0] === "t_home");

// --- plot bridge ---
const m3 = send("plot([1,2,3], [4,5,6]); bar(['a','b'], [10, 20]);");
const ev3 = eventsFrom(m3);
assert("plot() records ['plot', xs, ys]", ev3 && ev3[0][0] === "plot" && JSON.stringify(ev3[0][1]) === "[1,2,3]");
assert("bar() records ['bar', labels, values]", ev3 && ev3[1][0] === "bar" && ev3[1][1][0] === "a");

// --- stdout (console.log) ---
const m4 = send("console.log(42); console.log('hello', 'world');");
const out4 = stdoutFrom(m4);
assert("console.log(42) produces '42\\n' on stdout", out4.includes("42\n"), JSON.stringify(out4));
assert("console.log(a, b) joins with space", out4.includes("hello world\n"), JSON.stringify(out4));

// --- runtime error ---
const m5 = send("throw new Error('boom');");
assert("thrown Error sends 'error' message", m5.some((x) => x.type === "error" && x.text.includes("boom")), JSON.stringify(m5));
assert("error run still posts 'done'", m5.some((x) => x.type === "done"));

// --- syntax error ---
const m6 = send("if (");
assert("syntax error sends 'error' message", m6.some((x) => x.type === "error"), JSON.stringify(m6));

// --- clock resets between runs ---
send("sleep(10);");
const m7 = send("play(60);");
const ev7 = eventsFrom(m7);
assert("clock resets to 0 on each new run", ev7 && ev7[0][3] === 0, ev7 && String(ev7 && ev7[0] && ev7[0][3]));

// --- play_pattern ---
const m8 = send("play_pattern([60, 62, 64], 0.5);");
const ev8 = eventsFrom(m8);
assert("play_pattern records 3 play events", ev8 && ev8.length === 3 && ev8.every((e) => e[0] === "play"));
assert("play_pattern advances clock between notes", ev8 && ev8[0][3] < ev8[1][3] && ev8[1][3] < ev8[2][3]);

// --- report ---
console.log("JS runtime — bridge tests\n");
for (const r of pass) console.log(`  PASS  ${r.label}`);
for (const r of fail) console.log(`  FAIL  ${r.label}${r.detail ? "  — " + r.detail : ""}`);
console.log("");
if (fail.length === 0) {
  console.log(`All ${pass.length} assertions passed.`);
  process.exit(0);
} else {
  console.log(`${fail.length}/${pass.length + fail.length} assertions FAILED.`);
  process.exit(1);
}
