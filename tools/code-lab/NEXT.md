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

LESSON LOOP (done this session): checker.js does tolerant correctness checks — type
"output" (whitespace-normalized line compare, first-difference diagnostic) and "calls"
(recorded music/turtle/plot sequence, which-step diagnostic), never a bare fail. engine
adds run vs check, a verdict display, the hint ladder (reveal one at a time), and
model-solution reveal (auto on pass = the compare step, or via the solution button).
Buttons only appear when the lesson has them. Verified: 7 checker unit tests in node,
full loop driven in Arc (fail diagnostic -> hint -> fix -> PASS -> solution).
STILL TODO in the loop: check.type "tests" (needs a worker test-runner calling named
functions) and "parsons" (needs the arrange UI); lesson-to-lesson navigation (engine
currently shows one lesson — CODELAB.lessons[0] or the DEMO).

PROGRESS PERSISTENCE (done): storage now keeps per-lesson edited code and a solved set
(plus theme + lessonIdx) under codelab.save.v1. Engine restores code on load, marks a
lesson solved on a passing check, and progress cells show solved lessons as done. Reload
restores last lesson + code + completion (verified by a two-load Node test sharing
localStorage). Multi-lesson nav (prev/next) reads window.CODELAB.lessons; 2 real World 0
sample lessons authored (sound hook + print), harness-validated on real content.
NOTE: export/import save codes (PLAN: move file between machines) still TODO.

SURFACES (in progress). Slice 1 DONE: view router + progressive disclosure + Sandbox.
- engine has state.view + a TABS list with unlocked() rules; nav shows a tab only once
  unlocked (Lessons always; Sandbox after >=1 solve). Tabs are clickable -> setView().
- Sandbox is a pseudo-lesson (id "sandbox") so it reuses the editor/run/stepper machinery;
  its view skips the prompt, lesson-nav, and check/hint/solution. Code persists under "sandbox".
- Verified in node: disclosure (Lessons -> +Sandbox after a solve), Lessons<->Sandbox switch,
  sandbox has editor+run but no check/prompt/lesson-nav. (Caught+fixed: editorHeader crashed on
  the sandbox lesson — guarded missing challengeCode.)
Slice 2 DONE: Knowledge Map. map.js renders worlds->lessons with ✓/○ completion, concept
tags, concept/title search, and click-to-open (jumps into the lesson). render() branches the
body by view (editor views vs map) via an early-return + buildThemebar()/mapData() helpers;
renderAndWire() only wires the runtime for editor views; topbar is view-aware. Map unlocks
after >=1 solve. Verified in node (render, search filter, open-jumps, topbar).
- SLICES REMAINING: 3) Codex (skills/glossary/errors tabs, earned-only), 4) Arena + coach mode.
  Add each view to TABS + unlocked() + a render branch as it's built.

CONTENT-VERIFICATION HARNESS (done): inv1/inv5/inv9 are now LIVE (were stubbed).
- tests/mocks/runner.py runs a program through local python3 with the music/turtle/plot
  bridge mocked (same event tuples as the worker), returning {stdout, events, error}.
- The harness loads checker.js/style.js/errors.js (window shim) and: inv1 runs each
  solution, requires it to pass its own check (+ style when styleRequired); inv5 runs each
  starter and checks it matches starterExpectation; inv9 checks errorClasses are translatable.
- Proven to CATCH a broken solution (tampered w0l2 -> harness failed). So authored content is
  machine-verified by `npm test`; no hand-testing lessons.
- Needs local python3 (present). If absent, inv1/inv5 SKIP with a reason.

NOW BUILDING: real curriculum content (Phase 2). Each lesson conforms to schema.md and must
pass npm test. Parsons-based World 0 puzzle lessons need the Parsons rung (not built yet);
code-based lessons (py, output/calls checks) work today.

Next task: Phase 1 per PLAN.md Section 6.
Suggested order inside Phase 1:
1. [DONE] tests/run.js harness skeleton: schema validation, reading-level check, time budgets, invariants
2. [DONE] engine + storage + themes rendering a static lesson screen (all 3 themes)
3. [PYTHON DONE] runtime-python (Blob worker, run/stop/recover, stdout/stderr) wired
   into engine with a real CodeMirror editor (textarea fallback) + run/stop; demo runs
   real Python in-browser, verified in Arc. STILL TODO in step 3: runtime-js (worker +
   iframe) and the music/turtle/plot bridges into Pyodide.
4. [DONE] stepper (sys.settrace in worker, trace-then-scrub): records (line, locals repr) per
   executed line of '<student>' code, capped at 500, posts as 'steps'; engine shows a stepper
   panel with back/step controls, CodeMirror line highlight, and a live variable table.
   Verified: tracer runs in python3 (vars evolve correctly), stepped through in Arc.
   Run model is whole-program/isolated (exec in fresh globals) — settled with user.
5. [DONE] friendly error layer. errors.js translates 13 common Python error classes to
   plain-language notes (grade 5-6) keyed to the error class + line, each with a codex id.
   The worker now formats a CLEAN traceback (only '<student>' frames via linecache + the
   traceback module — no Pyodide/_run_traced internals), matching real `python file.py`.
   engine shows the raw traceback untouched + the annotation, faded by world
   (full <=4, on-demand 5-7, off after Real Tools, never in Arena via annotationMode()).
   Verified: translate() unit-tested on 5 tracebacks (node), clean _err verified in python3,
   confirmed in Arc. NOTE: Codex errors-tab registration is exposed (CL.errors.codexIds) but
   the Codex UI is the step-8 build; harness inv9 still SKIP until lessons declare errorClasses.
6. [MUSIC+TURTLE+PLOT DONE] music (Web Audio), turtle (canvas), plot (line+bar canvas) all
   built on one recorded-event stream in the worker (tuples in _events, first element is the
   kind); engine dispatches play/sample->music, t_*->turtle, plot/bar->plot, drawing on a
   shared #stage canvas (revealed on demand). Verified: prelude runs in python3 recording
   correct event kinds; bar chart renders in Arc. NOTE: turtle+plot share one canvas (last
   draw wins) — fine for single-topic lessons. tolerant diagnostic checkers + Parsons: TODO.
7. [DONE] style checker. style.js (the second feedback channel): naming, magic numbers,
   repeated code, function length — analysed on stripped source (strings/comments removed),
   tuned conservative (magic-number only fires on a literal repeated 3+ times, so one-off note
   numbers/angles don't trip it). Wired into engine: advisory notes after a pass, active from
   World 5 (dormant on the W1 demo). Verified by node unit tests (clean=silent; messy fires all
   four rules; strings ignored). NOT YET: styleRequired blocking at W6+ checkpoints (lesson-flow).
8. knowledge map, codex (skills + glossary + errors tabs), arena + coach mode, progressive disclosure
9. 6 sample lessons (hook, Python-with-stepper, Parsons, turtle, JS, chart), all checks green
Gate: build, full test pass, user tests dist/course.html with his son (including c64 body-face readability).
