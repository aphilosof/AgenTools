# NEXT

State: Phase 1 in progress. Steps 1 (harness) and 2 (static lesson screen) done. Runtime spike 1 PASSED — execution architecture locked. Plan includes the adopted curriculum-review amendments (see PLAN.md Section 7 and REVIEW.md for rationale).

RUNTIME ARCHITECTURE DECISION (Stage 1A spike 1 — spike/runtime-spike.html, verified in Arc/Chrome from a double-clicked file://):
- Pyodide runs in a Web Worker spawned from a Blob URL (direct file:// workers are
  blocked; a Blob worker is allowed, and importScripts pulls Pyodide from CDN
  cross-origin). Proven: real Python 3.12.7 runs, stdout captured.
- Infinite-loop protection = terminate the worker and re-init Pyodide. NOT a
  SharedArrayBuffer interrupt buffer (needs COOP/COEP cross-origin isolation,
  impossible on file://). Proven: while-True did not freeze the page (main-thread
  clock kept ticking), Stop&recover re-initialised, Python ran again.
- CONSEQUENCE for the stepper (step 4): sys.settrace runs INSIDE the worker;
  line highlight + variable table stream to the page via postMessage. The page
  cannot introspect the worker's Python directly. This constrains step 4's design.
- Cost note (not yet optimised): each loop-recovery reloads Pyodide (~seconds even
  when cached). Acceptable for now; a pre-warmed spare worker is a later option.

Step 2 status (engine/storage/themes):
- DONE: src/css/layout.css (shared layout + per-theme signature elements),
  src/js/storage.js (versioned localStorage namespace `codelab.save.v1`, theme
  get/set), src/js/engine.js (renders the DESIGN.md lesson-screen anatomy from a
  built-in DEMO lesson; working, persisted theme switch across all 3 themes).
- The demo lesson is layout scaffolding, NOT curriculum; engine.adaptLesson()
  already prefers window.CODELAB.lessons[0] when real lessons exist.
- NOT YET (later steps): CodeMirror, runtimes, real run/hint/solution behavior,
  real Map/Codex/Arena views, enforced theme-unlock (terminal selectable for now).
- Verified by a Node DOM-shim smoke test (renders across all themes, no runtime
  error, persists theme) + bundle parse + npm test green. Visual/CSS confirmation
  is the user opening dist/course.html; full Playwright pass is at the gate.

Harness status (tests/run.js):
- DONE: data loader (vm-eval of lessons/ + arena/ into window.CODELAB), schema
  validation, invariants 2,3,4,6,7,8. Flesch-Kincaid reading-level check (code
  stripped before scoring, MAX_GRADE=6). `--selftest` mode asserts each invariant
  fires on broken fixtures (12 assertions). `npm test` green on empty content.
- DEFERRED (reported SKIP, not silently passed): inv1 (solution passes check +
  style) and inv5 (starter matches starterExpectation) need runtimes+mocks+checkers+
  style checker; inv9 (errorClasses translated) needs the friendly-error layer.
  These slot into the CHECKS list in tests/run.js when their modules land.

Next task: Phase 1 per PLAN.md Section 6.
Suggested order inside Phase 1:
1. [DONE] tests/run.js harness skeleton: schema validation, reading-level check, time budgets, invariants
2. [DONE] engine + storage + themes rendering a static lesson screen (all 3 themes)
3. [SPIKE DONE; real modules next] runtime-js (worker + iframe), then runtime-python (Pyodide + bridges) — build on the proven Blob-worker + terminate-to-recover pattern
4. stepper (sys.settrace line highlight + variable table)
5. friendly error layer (translate-never-replace, fading by world / Real Tools status)
6. music, turtle, plot engines with call recording; tolerant diagnostic checkers; Parsons support
7. style checker (naming, magic numbers, repetition, function length)
8. knowledge map, codex (skills + glossary + errors tabs), arena + coach mode, progressive disclosure
9. 6 sample lessons (hook, Python-with-stepper, Parsons, turtle, JS, chart), all checks green
Gate: build, full test pass, user tests dist/course.html with his son (including c64 body-face readability).
