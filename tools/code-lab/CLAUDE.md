# CLAUDE.md

## Project

Code Lab (working title): a self-contained coding course for an 11-year-old, teaching Python then JavaScript then TypeScript through five practice strands (numbers, words, data, plotting, sound), converging on electronic music capstone projects. The sole deliverable is `dist/course.html`, a single HTML file built from this repo, which runs by double-clicking. Heavy runtimes (Pyodide, CodeMirror, TypeScript compiler) load from CDN; everything else is hand-written and inlined by the build.

## Authoritative documents

- `PLAN.md`: curriculum, architecture decisions, pedagogy model, build phases. The spec.
- `CURRICULUM.md`: the full lesson-by-lesson syllabus derived from PLAN §3/§4/§5.
- `AUTHORING.md`: the non-negotiable rules for building lessons (research-first, complete
  coverage, voice, paged & numbered sections, "Your turn" = prompt only). Read before
  authoring any lesson. Reference lesson: `lessons/exemplar-w1-values-and-types.md`.
- `DESIGN.md`: the three themes with full token sets, shared layout system, component inventory.
- `lessons/schema.md`: the lesson and arena challenge data formats.

Consult these by section as needed. Do not duplicate their content into code comments or this file.

## Working rules (non-negotiable)

1. **Phase by phase.** Build strictly in the phase order of PLAN.md Section 6. Never start the next phase, or the next world within a content phase, without explicit user approval.
2. **Review gates.** At each gate: stop, commit, and give the user a short checklist of what to open and test. Do not continue past a gate.
3. **Verify before presenting.** Every lesson checker, model solution, and arena challenge must pass the automated test harness (`npm test`) before being reported as done. Spot-checking is not verification. If a fix is made, re-run the full relevant test set.
4. **Correct the first time.** No quick hacks, workarounds, or "temporary" solutions. If something is broken, fix the root cause.
5. **Targeted edits.** Edit files surgically. Never rewrite a working file wholesale. Never hand-edit `dist/` (it is generated).
6. **Reporting style.** Summaries state what was built, what was tested and how, and what the user should review. No process narration, no compliance tables.

## Token and session budget

The user is on a 5x Max plan. Treat tokens and session time as constrained resources:

- **Scope sessions tightly.** One phase milestone or one world of content per session, ending at a clean commit. Do not start work that cannot reach a commit boundary.
- **Plan before coding.** Open each task with a short checklist, then execute it. Avoid broad repo exploration; the structure map in README.md is current.
- **Read narrowly.** Open only the files the task needs, and consult PLAN.md and DESIGN.md by section rather than re-reading them whole.
- **Cheap tests first.** Use the fast Node harness during development. Reserve headless-browser (Playwright) integration runs for gate validation, not inner-loop debugging.
- **Do not reprint large files** in responses. Reference paths and line ranges.
- **Leave a trail.** Keep `NEXT.md` updated with current state, the next task, and any open issues, so the following session resumes without rediscovery. If remaining work will not fit the session cleanly, stop at a commit and record where things stand.

## Architecture

- `src/template.html`: page skeleton with CDN tags and `{{SLOT}}` placeholders.
- `src/css/`: one file per concern; `themes.css` holds all three theme token sets (already populated from DESIGN.md).
- `src/js/`: one module per responsibility (engine, runtimes, music, turtle, plot, codex, arena, storage, map). Plain browser JS, no bundler, concatenated in the order listed in `build/build.js`.
- `lessons/`: one data file per world, conforming to `lessons/schema.md`.
- `arena/`: challenge bank, same schema family.
- `build/build.js`: inlines css, js, lessons, and arena data into the template and writes `dist/course.html`. Already functional; extend rather than replace.
- `tests/`: checker harness. Pure-logic Python lessons are validated with local `python3` plus the mock `music`/`turtle`/`plot` modules in `tests/mocks/`; JS lessons run in Node with the equivalent mocks; full in-browser integration (Pyodide, audio scheduling, theme rendering) runs under Playwright at phase gates.

## Product constraints

- Single-file output. No assets folder, no server requirement beyond CDN access.
- All persistent state in localStorage, with export/import save codes.
- Three themes per DESIGN.md: `magazine` (light, default light), `c64` (dark, default dark), `terminal` (locked until Real Tools I completion).
- Coach mode and the Challenge Arena per PLAN.md Section 3.
- Every lesson carries concept tags and a Codex entry; the knowledge map and Codex populate from lesson data automatically.
- The stepper (`sys.settrace` line highlight plus live variable table) is core, not optional, and works on every Python exercise from World 1.
- Student Python must not be able to freeze the tab. Decide the protection in Stage 1A spike 1 (Pyodide in a worker, or a shared-buffer keyboard interrupt) before the stepper is built, since it constrains the stepper's architecture. A student `while True` must be recoverable.
- Reading-level checks score prose only: strip code spans and code blocks before scoring, name the formula in the harness, so identifiers and short code lines do not skew the grade.
- Music/turtle/plot checks match recorded calls grouped by scheduled timestamp (see schema), never by a single order-insensitive flag.
- Errors: the real traceback always displays untouched, annotation beneath it, fading per PLAN.md Section 3 (full through World 4, on demand after World 5, off from Real Tools I, never in the Arena). Every translated error class registers in the Codex errors tab.
- Two feedback channels: tolerant diagnostic correctness checks that never produce a bare fail, and a separate style channel (naming, magic numbers, repetition, function length) active from World 5, blocking only on World 6+ checkpoints.
- Parsons (arrange) is a first-class exercise type in the engine and schema.
- Progressive interface disclosure: Lessons only at first; Map, Codex, Arena, Sandbox unlock when first meaningful.
- Content rules: grade 5 to 6 reading level, 15 to 25 minute lesson budgets, hints keyed to listed misconceptions, no inheritance anywhere in the course. The harness enforces the first three (schema invariants 6 to 9).

## Git

- Conventional commits, one commit per coherent unit (a feature, a world of content).
- Tag each completed phase: `phase-1`, `phase-2`, `phase-3`, `phase-4`.
- `dist/` and `node_modules/` are gitignored.

## Definition of done, per gate

Build passes, the full test harness is green, `dist/course.html` opens from a double-click and the gate checklist in NEXT.md is satisfied, commit and tag are in place.
