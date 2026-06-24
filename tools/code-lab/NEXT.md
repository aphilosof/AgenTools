# NEXT — current state and what to build next

---

## What is built and working

### Engine
- Single-file build: `npm run build` → `dist/course.html` (or `--out=name.html` for versioned builds)
- Lesson navigation: prev/next buttons, progress dots, click-to-jump — all wired
- Content[] renderer: text → example → exercise blocks interleaved in author order
- Exercises: run, check, hint ladder, model solution reveal
- Predict exercises (rung 1): read-only starter + prediction textarea
- Runtimes: Pyodide (Python in WebAssembly), JS fallback
- Three themes: Magazine (light default), C64 (dark default), Terminal (locked)
- Codex, Knowledge Map, Sandbox surfaces (basic, no content yet)
- Persistent progress via localStorage

### Content
Chapter 1, Lesson 1 — four sections authored and tested:

| ID | Title | Rungs used |
|----|-------|------------|
| c1s1 | Output and print | 1, 3, 4, 6 |
| c1s2 | Combining text | 3, 4, 6 |
| c1s3 | Comments | 1, 3, 4 |
| c1s4 | Shaping output: sep and end | 3, 5, 6 |

All 10 harness checks pass. Working build: `dist/course-v2.html`.

---

## What to build next

### Phase A — Finish Chapter 1 content (all remaining lessons)

Author each lesson's sections in `lessons/c1.js` using the `content[]` format
documented in `lessons/schema.md`. Run `npm test` after each lesson. Commit when
the lesson's sections all pass.

Per `CURRICULUM.md`, Chapter 1 has 7 lessons:

| Lesson | Sections to author | Status |
|--------|-------------------|--------|
| 1.1 Print and Output | c1s1–c1s4 | ✅ done |
| 1.2 Values and Types | `int`/`float`/`str`, `type()`, conversion | to do |
| 1.3 Variables | assignment, reassignment, stepper | to do |
| 1.4 Expressions & Math | operators, order, brackets | to do |
| 1.5 Working with Strings | concat, type mixing → name mashup | to do |
| 1.6 Input | `input()`, conversion → age calculator | to do |
| 1.7 First Drawing & Sound | turtle square + 3-note motif | to do |

Each lesson = 3–5 sections. Each section = 2–4 text blocks + 2–3 examples + 2–4 exercises.

### Phase B — Chapter 0 (pre-syntax hook)
Author Chapter 0 sections: First Sound, Algorithms Are Exact, Guide the Robot,
Repeat and Decide, The Sandwich Bug. These come before Chapter 1 in the nav.

### Phase C — Chapters 2–12 (curriculum build-out)
Work chapter by chapter per CURRICULUM.md. One chapter per session.

### Phase D — Engine features (build alongside content as needed)
- Lesson-level warmup recall beat (one retrieval question at section 1 of each lesson)
- Section recap summary block
- Rung 2 Parsons exercise type
- Chapter quiz gate
- Chapter challenge exercises
- Arena unlock
- Exercise label variety ("Your turn" → varied framing based on rung)

---

## Authoring a new lesson — the process

1. Read the lesson row in `CURRICULUM.md` for the concept, strand, and target rung.
2. Plan 3–5 sections. Each section = one tight concept, one `id`, 15 min budget.
3. Write sections in `lessons/c1.js` (or the relevant chapter file) using `content[]` blocks:
   - Open with a `text` block that explains the concept clearly (grade ≤ 9, line-height tight)
   - Alternate `example` blocks with short `text` blocks as the idea deepens
   - Close with 2–4 `exercise` blocks climbing in rung difficulty
4. Run `npm test`. Fix any failures before moving to the next section.
5. Build with `node build/build.js --out=course-v2.html` and visually check in the browser.
6. Commit when the lesson's sections are clean.

---

## Known deferred items

- Exercise label framing: "Your turn:" repeated for successive exercises looks flat.
  Will be addressed with rung-specific labels (Predict / Modify / Fix / Challenge / Write).
- `dist/course.html` is the original untouched reference. `dist/course-v2.html` is the live build.
- Terminal theme is locked (intentional — unlocks after Real Tools I).
