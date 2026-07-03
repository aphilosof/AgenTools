# HANDOFF — Code Lab (status & resume guide)

**Status: SHIPPED.** Live at **https://aphilosof.github.io/AgenTools/** (installable
on iPhone/iPad via Safari → Add to Home Screen). Last updated 2026-07-03.

This file is the "pick it back up" doc. Read it top-to-bottom once and you'll know
what exists, how to change it, and where the sharp edges are.

---

## 1. What it is

A self-contained coding course for a ~12-year-old: Python → (later) JavaScript →
TypeScript, taught through five practice strands (numbers, words, data, drawing,
sound) building toward electronic-music capstones. The **entire product is one
file, `dist/course.html`** (~540 KB), built from this repo. It runs by
double-clicking (no server); heavy runtimes (Pyodide, CodeMirror) load from CDN.

---

## 2. Current status

- **Content:** all 8 chapters authored — **69 lessons** — every checker, model
  solution, and exercise passes the harness.
- **Engine:** run/stop Python (Pyodide in a Web Worker, recovers from infinite
  loops), stepper (line highlight + variable table), music/turtle/plot strands,
  three themes, friendly errors, tolerant + style checkers, Codex, Map, Sandbox,
  Arena, reference chart, capstone hub, **player profiles**.
- **Tests:** `node tests/run.js` → **all green**; plus two browser-path
  regression tests (see §6).
- **Deployed:** live on GitHub Pages, installable as an iOS PWA.

> **Branch note:** all of this lives on branch **`lesson-experience-d`** (the
> working branch), *not yet merged to `main`*. The live site is served from the
> **`gh-pages`** branch (built artifact only). If you want `main` to reflect
> shipped state, merge `lesson-experience-d` → `main`.

---

## 3. The change loop (do this for any fix)

```bash
cd tools/code-lab

# 1. edit source in src/js/, src/css/, lessons/, or arena/  (NEVER edit dist/)
# 2. build the single file
node build/build.js                 # → dist/course.html

# 3. test
node tests/run.js                   # content gate: schema + invariants + every solution
node tests/stdout-buffer-test.js    # browser stdout line-buffering
node tests/profile-isolation-test.js# per-profile save isolation

# 4. eyeball it
open dist/course.html

# 5. commit (conventional commits; no Claude attribution — house rule)

# 6. deploy the live app (see DEPLOY.md for the full block)
node build/publish-docs.js && <gh-pages plumbing push>
```

Full deploy + iOS install instructions: **DEPLOY.md**.

---

## 4. Architecture map

**Build:** `build/build.js` inlines all `src/css/*.css` and `src/js/*.js` (ordered
by an internal `JS_ORDER` list; unlisted files are appended) plus `lessons/*.js`
and `arena/*.js` into `src/template.html` → `dist/course.html`. `dist/` is
gitignored (it's generated — never hand-edit it).

**`src/js/` modules (one responsibility each):**

| File | Responsibility |
| --- | --- |
| `engine.js` | View router, lesson render, exercise run/check/hint/solution, top bar & nav. **The core.** |
| `runtime-python.js` | Pyodide in a Blob Web Worker: run, stop, stepper, stdout/stderr capture, `input()` queue, media event recording. |
| `runtime-js.js` | The JS runtime equivalent (later chapters). |
| `checker.js` | Grades a run: `output` (whitespace-normalized line compare), `calls` (media event prefix match), `parsons`, `tests`. |
| `storage.js` | localStorage persistence, **now profile-scoped** (see §5). |
| `music.js` / `turtle.js` / `plot.js` | Web Audio, canvas turtle, canvas charts (incl. `bar`/`dotplot`/`piano_roll`). |
| `errors.js` | Friendly traceback layer + per-error-class Codex notes. |
| `style.js` | Style channel (naming, magic numbers, repetition) — active Ch5+. |
| `codex.js` / `map.js` / `arena.js` | Codex, Knowledge Map, Challenge Arena surfaces. |
| `reference.js` + `reference-panel.js` | Reference-chart data + standalone always-on panel (bottom-right "Reference"). |
| `capstone.js` + `capstone-panel.js` | Capstone guides (generated from `src/capstone/*.md`) + standalone panel (bottom-left "Capstone"). |
| `profile-panel.js` | **NEW.** Standalone player switcher (bottom-right 👤 pill). |

**Standalone-panel pattern:** `reference-panel.js`, `capstone-panel.js`, and
`profile-panel.js` are all self-initializing IIFEs that inject scoped styles, add
a fixed button + an accessible modal, and **do not touch `engine.js`.** Copy this
pattern for any new always-available UI. Corners in use: Reference bottom-right
(16px), Profile bottom-right (64px, stacked above it), Capstone bottom-left.

**Lessons:** `lessons/cN.js` pushes lesson objects onto `window.CODELAB.lessons`.
Schema in `lessons/schema.md`. Exercise types: Predict / Arrange(parsons) /
Modify / Fix / Complete / Write. Each exercise has exactly one check type.

---

## 5. What shipped in the most recent session (and why)

1. **Browser stdout grading fix** (`runtime-python.js`, commit `7ff7a75`).
   Pyodide's `setStdout({batched})` strips each line's trailing `\n`; the engine
   accumulates `stdout += s`, so a multi-line program was graded as **one
   concatenated line** (`"Python speaks.So do I.Let's begin."`) even though the
   display looked right. Fix: `_mkStream` line-buffers the raw byte stream and
   posts each complete line **with** its newline (partials — prompts, `end=''` —
   flush without one), so `stdout += s` reconstructs exact stdout. **This affected
   every multi-line-output exercise in the real app.** Guarded by
   `tests/stdout-buffer-test.js`.

2. **Checker audit** (no code change beyond #1). Verified every channel where the
   browser could hand the grader something different from the correct answer:
   output comparison normalizes both sides identically; `input()` is byte-identical
   to the harness (prints prompt with `end=''`, no echo, same queue); media events
   record and marshal (`toJs()`) identically. **The stdout bug was the only
   divergence.**

3. **Player profiles** (`storage.js` + `profile-panel.js`, commit `ad60cd3`).
   Multiple people share one installed copy, each with isolated progress/code/theme.
   `storage.js` scopes its save key by a top-level `codelab.currentProfile` pointer;
   the `"default"` profile keeps the **original un-suffixed key**, so pre-existing
   progress auto-migrates as the first player. Switching writes the pointer and
   reloads. Guarded by `tests/profile-isolation-test.js`.

4. **Deploy tooling & docs.** `build/publish-docs.js` stages the build into `docs/`;
   `DEPLOY.md` documents build → GitHub Pages → iOS install. The live site is the
   `gh-pages` branch; deploying uses git plumbing (see DEPLOY.md §2) so it never
   disturbs your working branch.

Earlier in the arc: reference chart (data + panel), capstone hub, iOS PWA
packaging, and the `piano_roll` chart function.

---

## 6. The test harness — and its ONE blind spot (read this)

`node tests/run.js` grades every lesson by executing its solution through
**`tests/mocks/runner.py`** (local `python3` + mocked `music`/`turtle`/`plot`).
It enforces schema + invariants (reading level, time budget, codex, chapter strand
diversity, etc.). **This is the content gate — trust it for content.**

**Blind spot:** the harness runs `runner.py`, *not the browser*. It cannot see
bugs that live only in the browser runtime (`runtime-python.js`) — which is exactly
how the stdout newline bug shipped green. `runner.py` and `runtime-python.js` must
stay behaviorally identical (input handling, event tuple shapes, stdout). When you
change one, change the other and re-diff. The two browser-path tests
(`stdout-buffer-test.js`, `profile-isolation-test.js`) exist to cover this gap by
exercising the real browser-path source in Node — add to them when you touch that
path.

---

## 7. Known issues / gotchas / watch-outs

- **`engine.js` has an uncommitted 2-line edit** in the working tree (owner's
  dotplot filter tweak, ~lines 206 & 938). It predates this session's work and was
  intentionally left alone. `git status` will show it dirty. Don't blow it away;
  don't accidentally commit it inside an unrelated change.
- **Never hand-edit `dist/`** — it's generated. Edit `src/` and rebuild.
- **Glossary `[[term]]` links are first-appearance-only, course-wide.** Each of 71
  terms is linked exactly once (its first appearance across all chapters). If you
  add/move content, don't create a second link for an already-claimed term.
- **`[[term]]` has no pipe syntax** (`[[a|b]]` renders literally) and an unmatched
  term is a dead link. Reading-level scoring (inv6) strips code spans but **counts
  linked terms** as prose — linking code identifiers can push a lesson over grade 9.
- **Reading level / time budget are enforced** (inv6/inv7). New prose must land
  ≤ grade 9; time budget uses a fixed formula (see AUTHORING.md / session notes).
- **`inv11`** hard-fails any chapter ≥ 6 that lacks real sound *and* drawing calls,
  and requires charts once bars appear — strands must be real calls, not flavor data.
- **Profiles are per-device** (per browser localStorage). They don't sync across
  devices or between Safari and the installed app.
- **iOS updates:** no service worker, so fully close and relaunch the installed app
  to fetch a new deploy.

---

## 8. Content state

| Chapter | Theme | Lessons | Status |
| --- | --- | --- | --- |
| 1 | Getting started (print, values, variables, strings, input, first draw/sound) | 7 | ✅ |
| 2 | Decisions & loops (if/elif, while, for, try/except) | 9 | ✅ |
| 3 | Functions (params, return, scope, defaults, drawing/music fns) | 10 | ✅ |
| 4 | Collections (lists, indexing, tuples/sets, dicts, nesting, charts) | 10 | ✅ |
| 5 | Thinking in code (decomposition, DRY, reading code, debugging) | 7 | ✅ |
| 6 | Classes & objects (`__init__`, methods/`self`, instances, Note/Synth) | 8 | ✅ |
| 7 | Modules & real data (import, JSON, files, APIs) | 8 | ✅ |
| 8 | Writing real programs (comprehensions, assert/raise, finally) | 7 | ✅ |

Per-chapter authoring history, audit findings, and browser gate checklists are in
**NEXT.md** (the detailed content log). This HANDOFF is the top-level index; NEXT.md
is the chapter-by-chapter record.

---

## 9. "I need to fix X" → where to look

| If you need to… | Go to |
| --- | --- |
| Fix how a lesson grades an answer | `src/js/checker.js` (+ confirm `runner.py`/`runtime-python.js` parity, §6) |
| Change what runs in the browser (stdout, input, events, stepper) | `src/js/runtime-python.js` — **and** mirror in `tests/mocks/runner.py` |
| Fix/add a lesson's content or exercises | `lessons/cN.js` (schema: `lessons/schema.md`), then `node tests/run.js` |
| Add an always-available UI panel | Copy `src/js/profile-panel.js` (standalone pattern; no `engine.js` edit) |
| Change persistence / profiles | `src/js/storage.js` + `src/js/profile-panel.js` |
| Change a chart type | `src/js/plot.js` + the recorder in **both** `runtime-python.js` and `runner.py` |
| Change build/inlining | `build/build.js` |
| Deploy an update | `DEPLOY.md` §2 |
| Understand a curriculum/pedagogy decision | `PLAN.md`, `CURRICULUM.md`, `AUTHORING.md` |

---

## 10. Authoritative docs

- **PLAN.md** — the spec (pedagogy §3, curriculum map §4, Real Tools §5).
- **CURRICULUM.md** — full lesson-by-lesson syllabus.
- **AUTHORING.md** — non-negotiable lesson-building rules; reference lesson
  `lessons/exemplar-w1-values-and-types.md`.
- **DESIGN.md** — themes, tokens, layout, component inventory.
- **lessons/schema.md** — lesson & arena data formats.
- **DEPLOY.md** — build, deploy, iOS install.
- **NEXT.md** — chapter-by-chapter content history and gate checklists.
- **CLAUDE.md** — working rules for this repo.
