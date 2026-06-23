# HANDOFF — Code Lab

Honest handoff for whoever picks this up next.

## The one thing that matters most
The previous working sessions kept **failing by not following the documents that
already exist.** The plan, curriculum, design, authoring rules, and an agreed
example lesson are all written down and agreed. They were then repeatedly ignored
in favour of improvising, re-deciding settled questions, and asking the owner to
make calls that were already documented. **Do not do that.** Read the docs below
and execute them exactly. Do not redesign, do not re-ask what is already decided,
do not invent content. The owner is fluent in Python but is not the curriculum
designer — completeness and adherence are the builder's job.

## Authoritative documents (read before doing anything)
- `PLAN.md` — the spec: pedagogy (§3), curriculum map (§4), Real Tools (§5).
- `CURRICULUM.md` — full lesson-by-lesson syllabus derived from PLAN.
- `AUTHORING.md` — non-negotiable lesson-building rules: research-first &
  complete coverage (builder's job, not the owner's); verify every claim against
  real Python; voice = *Think Python* / HTTLACS at grade 7–9 (not dumbed down,
  not robotic); paged with **numbered sections**; "Your turn" = a clear prompt
  only (no template/answer; hints are separate nudges); research sources &
  scope rules.
- `DESIGN.md` — the lesson SCREEN anatomy and themes. The screen is decided here:
  top bar (title + progress cells + location), prompt/teaching, editor panel,
  action row (run/check/hint/solution), output panel, app nav. Build to this.
- `lessons/exemplar-w1-values-and-types.md` — the agreed EXAMPLE lesson
  (Values and Types). This is the reference for content quality, structure, and
  voice. Real lessons are encoded from content like this.
- `lessons/schema.md` — lesson/arena data formats (old single-screen format).
- `REVIEW.md` (the professional review) and `COACH.md`.

## What is built and COMMITTED (and works)
Core engine, all committed and green under `npm test`:
- Pyodide in a Blob-URL Web Worker; run + stop/recover from infinite loops
  (`runtime-python.js`). Local-file (`file://`) execution verified.
- Web Audio music engine, canvas turtle, canvas plotting (`music/turtle/plot.js`).
- Stepper (`sys.settrace` in worker → line highlight + variable table).
- Friendly error layer (clean `<student>`-only traceback + plain-language note,
  `errors.js`); style checker (`style.js`); tolerant checker (`checker.js`).
- Three themes (`themes.css` + `layout.css`); localStorage persistence
  (`storage.js`); surfaces: view router, Sandbox, Knowledge Map (`engine.js`,
  `map.js`).
- Test harness that EXECUTES every lesson solution via local `python3` + the
  bridge mock (`tests/run.js`, `tests/mocks/runner.py`) and enforces schema +
  invariants incl. reading level. This is the content gate — use it.

Build: `npm run build` → `dist/course.html` (single double-click file; CDN for
Pyodide/CodeMirror). Test: `npm test`. (`dist/`, `node_modules/`, `build/` git
rules — note `tools/code-lab/build/` is un-ignored and tracked.)

## What is UNCOMMITTED in the working tree (decide: commit or revert)
The last commit is the editor-mount fix. After it, these changes were made but
the owner rejected the commit, so they sit uncommitted:
- `lessons/w1-values-and-types.js` — the real Values & Types lesson encoded as
  paged data from the exemplar (+ a glossary for expand terms). **NEW, uncommitted.**
- `src/js/player.js` — rewritten to render a paged lesson in the DESIGN.md screen
  (top bar progress/location, editor panel, action row, output panel, [[term]]
  expand links). **MODIFIED, uncommitted.**
- `lessons/w1l1.js` — a thin throwaway "Output and print" lesson — **deleted.**
- `dist/course.html` rebuilt.
`git status` to see them; `git stash` or `git checkout -- <file>` to revert, or
commit if kept. Nothing is lost either way — full history is in git.

## What is BROKEN / not accepted
- **The lesson player's usability is not right** and was rejected by the owner:
  the hands-on examples, the "links to extended knowledge" (click-to-expand
  terms), and the overall level/polish do not match what was designed. The
  *content* is now the real exemplar content, but the *experience* is not there.
- Old vs new lesson formats were never reconciled: old single-screen lessons
  (`chapter-00.js`, `chapter-01.js`, old-format) still exist alongside the new paged
  player. Pick one and clean up. The paged player is the intended direction
  (DESIGN.md screen, per section).

## Where to start (suggested, but follow the docs over this)
1. Read PLAN/CURRICULUM/AUTHORING/DESIGN and the exemplar. Build to them.
2. Decide commit-or-revert on the uncommitted player/lesson changes above.
3. Get ONE lesson (Values and Types, content already encoded) rendering in the
   DESIGN.md screen with the hands-on exercises and expand-links actually working
   well, reviewed and accepted, before authoring more.
4. Then author the rest of the curriculum to AUTHORING.md, each harness-verified.

## Phase status
Phase 1 (engine/shell) substantially built and committed. Phase 2 (content) not
accepted — the lesson experience must be made right first.
