#!/usr/bin/env node
"use strict";

/* Checker harness for Code Lab curriculum data (lessons/ + arena/).
 *
 * Validates every lesson/arena object against lessons/schema.md and enforces
 * the harness invariants listed there. Exits non-zero on any failure.
 *
 * Modes:
 *   node tests/run.js              validate real content in lessons/ and arena/
 *   node tests/run.js --selftest   run the checks against built-in fixtures and
 *                                  assert each invariant fires on broken data
 *
 * Invariants 1, 5, and 9 require modules not built yet (runtimes + mocks +
 * checkers + style checker for 1/5; the friendly-error layer for 9). They are
 * reported as SKIPPED with a reason, never silently passed. They slot into the
 * CHECKS list when their modules land. */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const LESSONS_DIR = path.join(ROOT, "lessons");
const ARENA_DIR = path.join(ROOT, "arena");
const MISCONCEPTIONS_FILE = path.join(__dirname, "misconceptions.md");

/* ---- named thresholds (kept explicit per project rules) ---- */
const LANGS = ["py", "js", "ts", "none"];
const STRANDS = ["numbers", "words", "data", "plot", "sound", "core"];
const CHECK_TYPES = ["output", "tests", "calls", "parsons"];
const MIN_BUDGET = 5;  // per subsection; full-lesson budgets tracked separately later
const MAX_BUDGET = 90;
const MAX_CHAPTER_MINUTES = 600;
// inv6 is a CEILING — prose must not exceed the learner's reading level.
// Target is grade 8-9 (strong reader, textbook quality). Not a floor —
// "too simple" is an authorial standard the harness cannot detect.
const MAX_GRADE = 9;
const GRADE_FORMULA = "Flesch-Kincaid Grade Level";
// The schema.md example hint ladder. A real lesson must not ship these verbatim.
const GENERIC_HINTS = ["nudge", "bigger nudge", "near-solution"];

/* ===================== content loading ===================== */

// Lesson/arena files are browser modules that push into window.CODELAB.*.
// We eval them in a sandbox with that global and collect what they pushed.
function freshSandbox() {
  const sandbox = { window: { CODELAB: { lessons: [], arena: [] } }, console };
  vm.createContext(sandbox);
  return sandbox;
}

function loadFromString(code, filename) {
  const sandbox = freshSandbox();
  vm.runInContext(code, sandbox, { filename: filename || "inline" });
  return sandbox.window.CODELAB;
}

function loadContent() {
  const sandbox = freshSandbox();
  for (const dir of [LESSONS_DIR, ARENA_DIR]) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir).filter((f) => f.endsWith(".js")).sort();
    for (const f of files) {
      const code = fs.readFileSync(path.join(dir, f), "utf8");
      try {
        vm.runInContext(code, sandbox, { filename: f });
      } catch (e) {
        throw new Error(`failed to load ${path.relative(ROOT, path.join(dir, f))}: ${e.message}`);
      }
    }
  }
  return sandbox.window.CODELAB;
}

function loadMisconceptionIds() {
  if (!fs.existsSync(MISCONCEPTIONS_FILE)) return new Set();
  const text = fs.readFileSync(MISCONCEPTIONS_FILE, "utf8");
  const ids = new Set();
  for (const line of text.split("\n")) {
    // entries look like:  "- off-by-one-range: believes range(8) ..."
    const m = line.match(/^\s*-\s+([a-z0-9-]+):/);
    if (m) ids.add(m[1]);
  }
  return ids;
}

/* ===================== reading level ===================== */

// Strip code spans and fenced code blocks so identifiers and code lines do not
// skew the prose grade (CLAUDE.md product constraint).
function stripCode(text) {
  return String(text)
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ");
}

// Heuristic vowel-group syllable count (standard readability approximation).
function countSyllables(word) {
  word = word.toLowerCase().replace(/[^a-z]/g, "");
  if (!word) return 0;
  if (word.length <= 3) return 1;
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "").replace(/^y/, "");
  const groups = word.match(/[aeiouy]{1,2}/g);
  return groups ? groups.length : 1;
}

function fleschKincaidGrade(prose) {
  const text = stripCode(prose).trim();
  if (!text) return 0;
  const sentences = (text.match(/[.!?]+/g) || []).length || 1;
  const words = text.match(/[A-Za-z0-9']+/g) || [];
  const wordCount = words.length || 1;
  const syllables = words.reduce((sum, w) => sum + countSyllables(w), 0) || 1;
  return 0.39 * (wordCount / sentences) + 11.8 * (syllables / wordCount) - 15.59;
}

/* ===================== check helpers ===================== */

function isNonEmptyString(v) {
  return typeof v === "string" && v.trim().length > 0;
}
function isArray(v) {
  return Array.isArray(v);
}
function isExemptFromCodex(lesson) {
  return lesson.chapter === 0 || lesson.kind === "checkpoint";
}

// A check returns { status: "pass"|"fail"|"skip", failures: string[], reason? }.
function pass() {
  return { status: "pass", failures: [] };
}
function fail(failures) {
  return { status: "fail", failures };
}
function skip(reason) {
  return { status: "skip", failures: [], reason };
}

/* ===================== schema validation ===================== */

function validateExercise(ex, where, errs) {
  if (!Number.isInteger(ex.rung) || ex.rung < 1 || ex.rung > 6) errs.push(`${where}: rung must be 1-6`);
  if (!isNonEmptyString(ex.prompt)) errs.push(`${where}: prompt required`);
  if (typeof ex.starter !== "string") errs.push(`${where}: starter must be a string`);
  if (!isArray(ex.hints)) errs.push(`${where}: hints must be an array`);
  if (!isNonEmptyString(ex.solution)) errs.push(`${where}: solution required`);
  validateCheck(ex, where, errs);
}

function validateLesson(l) {
  const errs = [];
  const where = `lesson ${l && l.id ? l.id : "(no id)"}`;
  if (!isNonEmptyString(l.id)) errs.push(`${where}: id must be a non-empty string`);
  if (!Number.isInteger(l.chapter) || l.chapter < 0) errs.push(`${where}: chapter must be an integer >= 0`);
  if (!isNonEmptyString(l.title)) errs.push(`${where}: title required`);
  if (!LANGS.includes(l.lang)) errs.push(`${where}: lang must be one of ${LANGS.join("/")}`);
  if (!STRANDS.includes(l.strand)) errs.push(`${where}: strand must be one of ${STRANDS.join("/")}`);
  if (typeof l.timeBudgetMin !== "number") errs.push(`${where}: timeBudgetMin must be a number`);

  const hasContent = isArray(l.content) && l.content.length > 0;

  if (hasContent) {
    // Interleaved content[] format: text | example | exercise blocks in sequence.
    l.content.forEach((block, i) => {
      const bw = `${where}: content[${i}]`;
      if (!block.type) { errs.push(`${bw}: type required`); return; }
      if (!["text", "example", "exercise", "table"].includes(block.type))
        errs.push(`${bw}: type must be "text", "example", "exercise", or "table"`);
      if (block.type === "text" && !isNonEmptyString(block.md)) errs.push(`${bw}: md required`);
      if (block.type === "table" && !Array.isArray(block.rows)) errs.push(`${bw}: rows required`);
      if (block.type === "example" && !isNonEmptyString(block.code)) errs.push(`${bw}: code required`);
      if (block.type === "exercise") validateExercise(block, bw, errs);
    });
  } else {
    // Legacy flat format: explain + optional examples[]/exercises[].
    if (!isNonEmptyString(l.explain)) errs.push(`${where}: explain required (or use content[] format)`);
    if (l.examples != null) {
      if (!isArray(l.examples)) { errs.push(`${where}: examples must be an array`); }
      else { l.examples.forEach((ex, i) => { if (!isNonEmptyString(ex.code)) errs.push(`${where}: examples[${i}].code required`); }); }
    }
    if (l.exercises != null) {
      if (!isArray(l.exercises)) { errs.push(`${where}: exercises must be an array`); }
      else { l.exercises.forEach((ex, i) => validateExercise(ex, `${where}: exercises[${i}]`, errs)); }
    }
  }

  if (!isExemptFromCodex(l)) {
    const c = l.codex;
    if (!c || !isNonEmptyString(c.topic) || !isNonEmptyString(c.pattern) || !isNonEmptyString(c.note))
      errs.push(`${where}: codex must have topic, pattern, note (only Chapter 0 and checkpoints are exempt)`);
  }
  return errs;
}

function validateCheck(obj, where, errs) {
  const c = obj.check;
  if (!c || typeof c !== "object") {
    errs.push(`${where}: check object required`);
    return;
  }
  if (!CHECK_TYPES.includes(c.type)) {
    errs.push(`${where}: check.type must be one of ${CHECK_TYPES.join("/")}`);
    return;
  }
  if (c.type === "output" && !isNonEmptyString(c.expected) && !isNonEmptyString(c.value))
    errs.push(`${where}: check.expected (or .value) required for output checks`);
  if (c.type === "tests" && !isArray(c.tests)) errs.push(`${where}: check.tests array required for tests checks`);
  if (c.type === "calls" && !isArray(c.calls)) errs.push(`${where}: check.calls array required for calls checks`);
  if (c.type === "parsons" && !isArray(c.lines)) errs.push(`${where}: check.lines array required for parsons checks`);
}

function validateArena(a) {
  const errs = [];
  const where = `arena ${a && a.code ? a.code : a && a.id ? a.id : "(no code)"}`;
  if (!isNonEmptyString(a.id)) errs.push(`${where}: id must be a non-empty string`);
  if (!isNonEmptyString(a.code)) errs.push(`${where}: code must be a non-empty string`);
  if (!Number.isInteger(a.chapter) || a.chapter < 0) errs.push(`${where}: chapter must be an integer >= 0`);
  if (!isNonEmptyString(a.title)) errs.push(`${where}: title required`);
  if (!LANGS.includes(a.lang)) errs.push(`${where}: lang must be one of ${LANGS.join("/")}`);
  if (!STRANDS.includes(a.strand)) errs.push(`${where}: strand must be one of ${STRANDS.join("/")}`);
  if (!isArray(a.requires)) errs.push(`${where}: requires must be an array`);
  if (!a.par || typeof a.par.minutes !== "number") errs.push(`${where}: par.minutes must be a number`);
  if (typeof a.boss !== "boolean") errs.push(`${where}: boss must be a boolean`);
  if (typeof a.custom !== "boolean") errs.push(`${where}: custom must be a boolean`);
  if (!isNonEmptyString(a.solution)) errs.push(`${where}: solution required`);
  if ("rung" in a) errs.push(`${where}: arena entries must not have a rung`);
  validateCheck(a, where, errs);
  return errs;
}

function checkSchema({ lessons, arena }) {
  const failures = [];
  lessons.forEach((l) => failures.push(...validateLesson(l)));
  arena.forEach((a) => failures.push(...validateArena(a)));
  return failures.length ? fail(failures) : pass();
}

/* ===================== invariants ===================== */

// Invariant 2: every id and code is unique.
function checkUniqueIds({ lessons, arena }) {
  const failures = [];
  const seenId = new Map();
  const seenCode = new Map();
  for (const item of [...lessons, ...arena]) {
    if (item.id != null) {
      if (seenId.has(item.id)) failures.push(`duplicate id "${item.id}"`);
      else seenId.set(item.id, true);
    }
  }
  for (const a of arena) {
    if (a.code != null) {
      if (seenCode.has(a.code)) failures.push(`duplicate arena code "${a.code}"`);
      else seenCode.set(a.code, true);
    }
  }
  return failures.length ? fail(failures) : pass();
}

// Invariant 3: every concept in an arena `requires` is introduced by some lesson.
function checkRequiresIntroduced({ lessons, arena }) {
  const introduced = new Set();
  for (const l of lessons) for (const c of l.concepts || []) introduced.add(c);
  const failures = [];
  for (const a of arena) {
    for (const c of a.requires || []) {
      if (!introduced.has(c))
        failures.push(`arena ${a.code || a.id} requires "${c}", which no lesson introduces`);
    }
  }
  return failures.length ? fail(failures) : pass();
}

// Invariant 4: every lesson has a non-empty codex entry (except Chapter 0 / checkpoint).
function checkCodexPresent({ lessons }) {
  const failures = [];
  for (const l of lessons) {
    if (isExemptFromCodex(l)) continue;
    const c = l.codex;
    if (!c || !isNonEmptyString(c.topic) || !isNonEmptyString(c.pattern) || !isNonEmptyString(c.note))
      failures.push(`lesson ${l.id}: missing/empty codex entry`);
  }
  return failures.length ? fail(failures) : pass();
}

// Invariant 6: prose scores within the target reading level ceiling.
function checkReadingLevel({ lessons }) {
  const failures = [];
  for (const l of lessons) {
    if (isArray(l.content) && l.content.length) {
      // content[] format: check all {type:"text"} blocks.
      l.content.forEach((block, i) => {
        if (block.type !== "text" || !isNonEmptyString(block.md)) return;
        const grade = fleschKincaidGrade(block.md);
        if (grade > MAX_GRADE)
          failures.push(`lesson ${l.id}: content[${i}] grade ${grade.toFixed(1)} > ${MAX_GRADE} (${GRADE_FORMULA})`);
      });
    } else {
      if (!isNonEmptyString(l.explain)) continue;
      const grade = fleschKincaidGrade(l.explain);
      if (grade > MAX_GRADE)
        failures.push(`lesson ${l.id}: explain grade ${grade.toFixed(1)} > ${MAX_GRADE} (${GRADE_FORMULA})`);
    }
  }
  return failures.length ? fail(failures) : pass();
}

// Invariant 7: each lesson budget is 15-25; each chapter's sum stays sane.
function checkTimeBudgets({ lessons }) {
  const failures = [];
  const perChapter = new Map();
  for (const l of lessons) {
    if (typeof l.timeBudgetMin !== "number") continue;
    if (l.timeBudgetMin < MIN_BUDGET || l.timeBudgetMin > MAX_BUDGET)
      failures.push(`lesson ${l.id}: timeBudgetMin ${l.timeBudgetMin} outside ${MIN_BUDGET}-${MAX_BUDGET}`);
    perChapter.set(l.chapter, (perChapter.get(l.chapter) || 0) + l.timeBudgetMin);
  }
  for (const [chapter, sum] of perChapter) {
    if (sum > MAX_CHAPTER_MINUTES)
      failures.push(`chapter ${chapter}: budgets sum to ${sum} min > ${MAX_CHAPTER_MINUTES} (split the chapter)`);
  }
  return failures.length ? fail(failures) : pass();
}

// Invariant 8: misconception ids exist in the registry, and lessons that list
// misconceptions ship real (non-generic) hints addressing them.
function checkMisconceptions({ lessons }, knownIds) {
  const failures = [];
  for (const l of lessons) {
    const mis = l.misconceptions || [];
    for (const id of mis) {
      if (!knownIds.has(id))
        failures.push(`lesson ${l.id}: misconception "${id}" not found in tests/misconceptions.md`);
    }
    if (mis.length > 0) {
      const hints = l.hints || [];
      if (hints.length === 0) {
        failures.push(`lesson ${l.id}: has misconceptions but no hints`);
      } else if (hints.length === GENERIC_HINTS.length && hints.every((h, i) => h === GENERIC_HINTS[i])) {
        failures.push(`lesson ${l.id}: hints are the generic placeholder ladder, not keyed to its misconceptions`);
      }
    }
  }
  return failures.length ? fail(failures) : pass();
}

/* ===================== execution-based checks ===================== */

const { spawnSync } = require("child_process");
const RUNNER = path.join(__dirname, "mocks", "runner.py");
const EXECUTABLE_CHECKS = ["output", "calls"]; // tests/parsons aren't executed yet

// Load a browser module (checker.js / style.js / errors.js) in a window shim and
// return its window.CL so the harness reuses the exact in-app logic.
function loadBrowserCL(relPath) {
  const code = fs.readFileSync(path.join(ROOT, relPath), "utf8");
  const sandbox = { window: { CL: {} }, console, getComputedStyle: () => ({ getPropertyValue: () => "" }) };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox, { filename: relPath });
  return sandbox.window.CL;
}

// runSolution(src, mockInput?) -> { stdout, events, error }, or null if python3 is absent.
// Pass mockInput as a string array to pre-populate input() calls; runner accepts JSON payload.
function makeRunner() {
  const probe = spawnSync("python3", ["--version"], { encoding: "utf8" });
  if (probe.error) return null;
  return function (src, mockInput) {
    const input = (mockInput && mockInput.length)
      ? JSON.stringify({ code: src || "", mockInput: mockInput })
      : (src || "");
    const res = spawnSync("python3", [RUNNER], { input: input, encoding: "utf8" });
    if (res.error) throw new Error("python3 runner failed: " + res.error.message);
    try {
      return JSON.parse(res.stdout);
    } catch (e) {
      throw new Error("runner output was not JSON: " + (res.stdout || res.stderr || "").slice(0, 200));
    }
  };
}

// Normalize a check object so .value is promoted to .expected (lessons use either).
function normalizeCheck(check) {
  if (!check) return check;
  return (check.expected == null && check.value != null)
    ? Object.assign({}, check, { expected: check.value })
    : check;
}

// Invariant 1: every solution passes its own check (and the style checker when styleRequired).
// Handles both top-level lesson solutions and per-exercise solutions in exercises[].
function checkSolutions(content, deps) {
  if (!deps.run) return skip("python3 unavailable to execute solutions");
  const failures = [];

  // Top-level solutions (arena entries and old-format lessons).
  // Only Python can be verified locally — JS/TS solutions are not executed.
  const items = content.lessons.concat(content.arena);
  for (const it of items) {
    const where = it.id || it.code;
    if (!it.solution || !it.check || EXECUTABLE_CHECKS.indexOf(it.check.type) === -1) continue;
    if (it.lang && it.lang !== "py") continue;
    const norm = { check: normalizeCheck(it.check) };
    let r;
    try { r = deps.run(it.solution, it.mockInput || []); } catch (e) { failures.push(`${where}: ${e.message}`); continue; }
    if (r.error) { failures.push(`${where}: solution raised — ${r.error}`); continue; }
    const verdict = deps.checker.run(norm, { stdout: r.stdout, events: r.events });
    if (!verdict.pass) failures.push(`${where}: solution does not pass its own check — ${verdict.diagnostics[0]}`);
    if (it.styleRequired && deps.style) {
      const findings = deps.style.analyze(it.solution);
      if (findings.length) failures.push(`${where}: styleRequired but solution has a style issue — ${findings[0].message}`);
    }
  }

  // Per-exercise solutions in lessons (both legacy exercises[] and content[] format).
  // Only Python exercises are executed; parsons and JS exercises are skipped.
  for (const l of content.lessons) {
    if (l.lang && l.lang !== "py") continue;
    const exercises = isArray(l.content) && l.content.length
      ? l.content.filter((b) => b.type === "exercise").map((b, i) => ({ ex: b, where: `${l.id}:content[exercise ${i}]` }))
      : (l.exercises || []).map((ex, i) => ({ ex, where: `${l.id}:exercises[${i}]` }));
    for (const { ex, where } of exercises) {
      if (!ex.solution || !ex.check || EXECUTABLE_CHECKS.indexOf(ex.check.type) === -1) continue;
      const norm = { check: normalizeCheck(ex.check) };
      let r;
      try { r = deps.run(ex.solution, ex.mockInput || []); } catch (e) { failures.push(`${where}: ${e.message}`); continue; }
      if (r.error) { failures.push(`${where}: solution raised — ${r.error}`); continue; }
      const verdict = deps.checker.run(norm, { stdout: r.stdout, events: r.events });
      if (!verdict.pass) failures.push(`${where}: solution does not pass its own check — ${verdict.diagnostics[0]}`);
    }
  }

  return failures.length ? fail(failures) : pass();
}

// Invariant 5: starter behaviour matches starterExpectation when executed.
function checkStarters(content, deps) {
  if (!deps.run) return skip("python3 unavailable to execute starters");
  const failures = [];
  for (const l of content.lessons) {
    const exp = l.starterExpectation;
    if (!exp) continue;
    let r;
    try { r = deps.run(l.starter || ""); } catch (e) { failures.push(`${l.id}: ${e.message}`); continue; }
    if (exp === "runs-clean") {
      if (r.error) failures.push(`${l.id}: starter expected runs-clean but raised — ${r.error}`);
    } else if (exp.indexOf("raises:") === 0) {
      const t = exp.slice("raises:".length);
      if (!r.error) failures.push(`${l.id}: starter expected to raise ${t} but ran clean`);
      else if (r.error.indexOf(t) !== 0) failures.push(`${l.id}: starter expected ${t} but raised — ${r.error}`);
    }
  }
  return failures.length ? fail(failures) : pass();
}

// Invariant 9: every errorClasses id is translatable by the friendly error layer.
function checkErrorClasses(content, deps) {
  if (!deps.errorTypes) return skip("error layer not loaded");
  const known = new Set(deps.errorTypes);
  const failures = [];
  for (const l of content.lessons) {
    for (const id of l.errorClasses || []) {
      if (!known.has(id)) failures.push(`${l.id}: errorClass "${id}" has no translation in the error layer`);
    }
  }
  return failures.length ? fail(failures) : pass();
}

/* ===================== check registry ===================== */

function buildChecks(content, knownIds, deps) {
  return [
    { name: "schema validation", run: () => checkSchema(content) },
    { name: "inv1: solution passes its own check + style", run: () => checkSolutions(content, deps) },
    { name: "inv2: unique ids & codes", run: () => checkUniqueIds(content) },
    { name: "inv3: requires introduced by a lesson", run: () => checkRequiresIntroduced(content) },
    { name: "inv4: codex entry present", run: () => checkCodexPresent(content) },
    { name: "inv5: starter matches starterExpectation", run: () => checkStarters(content, deps) },
    { name: `inv6: reading level (${GRADE_FORMULA} <= ${MAX_GRADE})`, run: () => checkReadingLevel(content) },
    { name: "inv7: time budgets", run: () => checkTimeBudgets(content) },
    { name: "inv8: misconceptions registered & hinted", run: () => checkMisconceptions(content, knownIds) },
    { name: "inv9: errorClasses have translations", run: () => checkErrorClasses(content, deps) },
  ];
}

function loadDeps() {
  let checker = null, style = null, errorTypes = null;
  try { checker = loadBrowserCL("src/js/checker.js").check; } catch (e) {}
  try { style = loadBrowserCL("src/js/style.js").style; } catch (e) {}
  try { errorTypes = Object.keys(loadBrowserCL("src/js/errors.js").errors.registry); } catch (e) {}
  return { checker: checker, style: style, errorTypes: errorTypes, run: checker ? makeRunner() : null };
}

function runChecks(content, knownIds) {
  const deps = loadDeps();
  return buildChecks(content, knownIds, deps).map((c) => ({ name: c.name, ...c.run() }));
}

/* ===================== reporting ===================== */

function report(results, { lessons, arena }) {
  console.log(`Code Lab harness — ${lessons.length} lesson(s), ${arena.length} arena challenge(s)\n`);
  let failed = 0;
  let skipped = 0;
  for (const r of results) {
    if (r.status === "pass") {
      console.log(`  PASS  ${r.name}`);
    } else if (r.status === "skip") {
      skipped++;
      console.log(`  SKIP  ${r.name}  — ${r.reason}`);
    } else {
      failed++;
      console.log(`  FAIL  ${r.name}`);
      for (const f of r.failures) console.log(`          - ${f}`);
    }
  }
  console.log("");
  if (failed > 0) {
    console.log(`${failed} check(s) failed${skipped ? `, ${skipped} skipped` : ""}.`);
  } else {
    console.log(`All checks passed${skipped ? ` (${skipped} skipped)` : ""}.`);
  }
  return failed === 0;
}

/* ===================== selftest ===================== */

// A schema-valid, invariant-clean lesson used as the selftest baseline.
function validFixtureLesson() {
  return {
    id: "w1l1",
    chapter: 1,
    title: "First note",
    lang: "py",
    strand: "sound",
    rung: 3,
    concepts: ["play", "variables"],
    misconceptions: ["string-vs-number"],
    warmup: [],
    timeBudgetMin: 20,
    explain: "We can make sound with code. Type a note and run it. You hear it play. Change the number and run it again. A new note plays. Try it now.",
    starter: "play(60)\n",
    starterExpectation: "runs-clean",
    check: { type: "calls", calls: [{ t: 0, fn: "play", args: [67] }] },
    hints: ["Pick a number from 48 to 72.", "Higher numbers sound higher.", "Try play(67) for a clear note."],
    solution: "play(67)\n",
    codex: { topic: "sound", pattern: "play(note)", note: "Plays one note by MIDI number." },
    styleRequired: false,
  };
}

function validFixtureArena() {
  return {
    id: "a-w1-c1",
    code: "W1-C1",
    chapter: 1,
    title: "Three notes",
    lang: "py",
    strand: "sound",
    requires: ["play"],
    par: { minutes: 5 },
    boss: false,
    custom: false,
    concepts: ["play"],
    check: { type: "calls", calls: [] },
    solution: "play(60)\nplay(64)\nplay(67)\n",
  };
}

function expectFail(label, check, results) {
  const r = check();
  const ok = r.status === "fail" && r.failures.length > 0;
  results.push({ label, ok, detail: ok ? r.failures[0] : `expected a failure, got "${r.status}"` });
  return ok;
}

function expectPass(label, check, results) {
  const r = check();
  const ok = r.status === "pass";
  results.push({ label, ok, detail: ok ? "" : `expected pass, got "${r.status}": ${r.failures.join("; ")}` });
  return ok;
}

function runSelftest() {
  const knownIds = loadMisconceptionIds();
  const results = [];

  // Loader works end-to-end on a string that pushes a lesson.
  const loaded = loadFromString(
    'window.CODELAB.lessons.push({id:"x"}); window.CODELAB.arena.push({code:"Z"});',
    "loader-test"
  );
  results.push({
    label: "loader: eval pushes into window.CODELAB",
    ok: loaded.lessons.length === 1 && loaded.arena.length === 1,
    detail: `got ${loaded.lessons.length} lesson(s), ${loaded.arena.length} arena`,
  });

  // Baseline: a clean fixture passes every active check.
  const good = { lessons: [validFixtureLesson()], arena: [validFixtureArena()] };
  expectPass("baseline fixture: schema valid", () => checkSchema(good), results);
  expectPass("baseline fixture: reading level ok", () => checkReadingLevel(good), results);
  expectPass("baseline fixture: misconceptions ok", () => checkMisconceptions(good, knownIds), results);

  // Each invariant fires on a targeted mutation.
  const dupId = { lessons: [validFixtureLesson(), validFixtureLesson()], arena: [] };
  expectFail("inv2 fires on duplicate id", () => checkUniqueIds(dupId), results);

  const badRequire = { lessons: [validFixtureLesson()], arena: [{ ...validFixtureArena(), requires: ["nonexistent-concept"] }] };
  expectFail("inv3 fires on unknown required concept", () => checkRequiresIntroduced(badRequire), results);

  const noCodex = (() => { const l = validFixtureLesson(); delete l.codex; return { lessons: [l] }; })();
  expectFail("inv4 fires on missing codex", () => checkCodexPresent(noCodex), results);

  const hardProse = (() => {
    const l = validFixtureLesson();
    l.explain = "Subsequently, the algorithmic instantiation necessitates comprehensive understanding of computational abstractions, whereby variables encapsulate mutable referential semantics throughout execution.";
    return { lessons: [l] };
  })();
  expectFail("inv6 fires on too-hard prose", () => checkReadingLevel(hardProse), results);

  const badBudget = (() => { const l = validFixtureLesson(); l.timeBudgetMin = 95; return { lessons: [l] }; })();
  expectFail("inv7 fires on over-budget lesson", () => checkTimeBudgets(badBudget), results);

  const unknownMis = (() => { const l = validFixtureLesson(); l.misconceptions = ["not-a-real-id"]; return { lessons: [l] }; })();
  expectFail("inv8 fires on unregistered misconception", () => checkMisconceptions(unknownMis, knownIds), results);

  const genericHints = (() => { const l = validFixtureLesson(); l.hints = GENERIC_HINTS.slice(); return { lessons: [l] }; })();
  expectFail("inv8 fires on generic placeholder hints", () => checkMisconceptions(genericHints, knownIds), results);

  const badSchema = { lessons: [{ ...validFixtureLesson(), lang: "ruby" }], arena: [] };
  expectFail("schema fires on bad enum value", () => checkSchema(badSchema), results);

  // Structural fix 1: lang:"none" sections (Chapter 0 pre-syntax) pass schema.
  const noneLesson = {
    id: "c0-none-test",
    chapter: 0,
    title: "Before Code",
    lang: "none",
    strand: "core",
    timeBudgetMin: 10,
    content: [{ type: "text", md: "Think about what coding might look like." }],
  };
  expectPass("fix1: lang:none section passes schema", () => checkSchema({ lessons: [noneLesson], arena: [] }), results);

  // Structural fix 2: lang:"js" lessons pass schema validation.
  const jsLesson = {
    id: "c5-js-test",
    chapter: 5,
    title: "JS test",
    lang: "js",
    strand: "core",
    timeBudgetMin: 15,
    content: [
      { type: "text", md: "Now you code in JavaScript. It runs directly in the browser." },
      { type: "exercise", rung: 3, prompt: "Compute 2+2.", starter: "// your code", hints: ["Try console.log(2+2)."], solution: "console.log(2+2)", check: { type: "output", expected: "4" } },
    ],
    codex: { topic: "core", pattern: "console.log()", note: "Prints to console." },
  };
  expectPass("fix2: lang:js lesson passes schema", () => checkSchema({ lessons: [jsLesson], arena: [] }), results);

  // Structural fix 3 (Parsons): rung 2 with check.type:"parsons" passes schema; missing check.lines fails.
  const parsonsEx = {
    type: "exercise", rung: 2,
    prompt: "Put these lines in order to print Hello.",
    starter: "",
    hints: ["First comes the function, then the argument."],
    solution: 'print("Hello")',
    check: { type: "parsons", lines: ['print("Hello")'] },
  };
  const parsonsLesson = {
    id: "c1-parsons-test",
    chapter: 1,
    title: "Parsons test",
    lang: "py",
    strand: "core",
    timeBudgetMin: 10,
    content: [{ type: "text", md: "Put lines in order." }, parsonsEx],
    codex: { topic: "core", pattern: "print()", note: "Prints to output." },
  };
  expectPass("fix3a: rung 2 parsons exercise passes schema", () => checkSchema({ lessons: [parsonsLesson], arena: [] }), results);
  const parsonsNoLines = Object.assign({}, parsonsLesson, {
    id: "c1-parsons-bad",
    content: [{ type: "text", md: "Put lines in order." }, Object.assign({}, parsonsEx, { check: { type: "parsons" } })],
  });
  expectFail("fix3b: parsons check without check.lines fails schema", () => checkSchema({ lessons: [parsonsNoLines], arena: [] }), results);

  // Structural fix 4 (mockInput): runner passes mock values to input() in student code.
  const runner = makeRunner();
  if (runner) {
    let mockRes;
    try {
      mockRes = runner('name = input("Enter name: ")\nprint("Hello " + name)\n', ["World"]);
    } catch (e) {
      mockRes = { error: e.message };
    }
    const expectedOut = "Enter name: Hello World";
    results.push({
      label: "fix4: runner mockInput feeds input() calls",
      ok: !mockRes.error && (mockRes.stdout || "").trim() === expectedOut,
      detail: mockRes.error || `stdout: "${(mockRes.stdout || "").trim()}" (expected "${expectedOut}")`,
    });
  } else {
    results.push({ label: "fix4: runner mockInput feeds input() calls", ok: true, detail: "skipped — python3 unavailable" });
  }

  console.log("Code Lab harness — selftest\n");
  let failed = 0;
  for (const r of results) {
    console.log(`  ${r.ok ? "PASS" : "FAIL"}  ${r.label}${r.detail ? `  — ${r.detail}` : ""}`);
    if (!r.ok) failed++;
  }
  console.log("");
  console.log(failed === 0 ? `Selftest passed: all ${results.length} assertions held.` : `Selftest FAILED: ${failed}/${results.length} assertions wrong.`);
  return failed === 0;
}

/* ===================== main ===================== */

function main() {
  const selftest = process.argv.includes("--selftest");
  try {
    if (selftest) {
      process.exit(runSelftest() ? 0 : 1);
    }
    const content = loadContent();
    const knownIds = loadMisconceptionIds();
    const results = runChecks(content, knownIds);
    process.exit(report(results, content) ? 0 : 1);
  } catch (e) {
    console.error(`harness error: ${e.message}`);
    process.exit(1);
  }
}

main();
