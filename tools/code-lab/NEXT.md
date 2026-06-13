# NEXT

State: repo skeleton only. No phase started. Plan includes the adopted curriculum-review amendments (see PLAN.md Section 7 and REVIEW.md for rationale).

Next task: Phase 1 per PLAN.md Section 6.
Suggested order inside Phase 1:
1. tests/run.js harness skeleton: schema validation, reading-level check, time budgets, invariants
2. engine + storage + themes rendering a static lesson screen (all 3 themes)
3. runtime-js (worker + iframe), then runtime-python (Pyodide + bridges)
4. stepper (sys.settrace line highlight + variable table)
5. friendly error layer (translate-never-replace, fading by world / Real Tools status)
6. music, turtle, plot engines with call recording; tolerant diagnostic checkers; Parsons support
7. style checker (naming, magic numbers, repetition, function length)
8. knowledge map, codex (skills + glossary + errors tabs), arena + coach mode, progressive disclosure
9. 6 sample lessons (hook, Python-with-stepper, Parsons, turtle, JS, chart), all checks green
Gate: build, full test pass, user tests dist/course.html with his son (including c64 body-face readability).
