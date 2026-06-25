# NEXT — current state and what to build next

---

## What is built and working

### Engine
- Single-file build: `npm run build` → `dist/course-v2.html`
- Lesson navigation: prev/next buttons, progress dots, click-to-jump — all wired
- Content[] renderer: text → example → exercise blocks interleaved in author order
- Exercises: run, check, hint ladder, model solution reveal
- Rung 1 Predict: read-only starter + prediction textarea
- Rung 2 Parsons: drag-to-reorder scrambled lines, accent highlight on drop target, order check
- Rungs 3–6: standard editor (modify / fix / complete / write from scratch)
- Python runtime: Pyodide in Web Worker, stepper (sys.settrace), mockInput for input() exercises
- JS runtime: Blob Worker, full play/turtle/plot bridge, console.log→stdout, 8s timeout kill
- Music: play/sleep/sample/play_pattern/set_tempo → Web Audio
- Turtle: forward/backward/left/right/penup/pendown/pencolor/goto/home → canvas
- Plot: plot()/bar() → canvas, themed
- Three themes: Magazine (light default), C64 (dark default), Terminal (locked)
- Codex, Knowledge Map, Sandbox surfaces (basic, no content yet)
- Persistent progress via localStorage

### Content
Chapter 1 — all 7 lessons authored and tested:

| ID | Title | Rungs used |
|----|-------|------------|
| c1s1 | Output and print | 1, 3, 4, 6 |
| c1s2 | Values and types | 1, 4, 6 |
| c1s3 | Variables and assignment | 1, 3, 4, 6 |
| c1s4 | Expressions and math | 1, 3, 4 |
| c1s5 | Working with strings | 3, 4, 5, 6 |
| c1s6 | Input | 3, 5, 6 |
| c1s7 | First Drawing and Sound | 3, 3 |

All harness checks pass. Working build: `dist/course-v2.html`.

---

## What to build next

### Phase A — Chapter 1 content ✅ COMPLETE

All 7 lessons authored, all harness checks green.

| ID | Lesson | Status |
|----|--------|--------|
| c1s1 | Output and print | ✅ done |
| c1s2 | Values and types | ✅ done |
| c1s3 | Variables and assignment | ✅ done |
| c1s4 | Expressions and math | ✅ done |
| c1s5 | Working with strings | ✅ done |
| c1s6 | Input | ✅ done |
| c1s7 | First Drawing and Sound | ✅ done |

**Important structural decisions made (from 5-reviewer curriculum audit):**
- Comments folded into Lesson 1.3 as a half-page digression (not a standalone lesson)
- sep/end deferred to Chapter 2 (before loops, it has no motivational context)
- String methods (len, upper, lower, split, strip) added to Lesson 1.5
- Lesson 1.7 is rung 3 Modify only (first encounter with two new APIs must not be rung 6)
- MIDI numbers named in Lesson 1.7 (60 = middle C) — nine chapters of play(60) as magic numbers would be wrong

### Phase B — Chapter 2 (Decisions and Loops) ✅ COMPLETE

All 9 lessons authored, all 16 lesson harness checks green (commit `edd9aae`).

| ID | Title | Rungs |
|----|-------|-------|
| c2s1 | True, False, and Comparison | 1, 2, 4 |
| c2s2 | if and else | 1, 3, 4, 5 |
| c2s3 | elif | 4, 5, 6 |
| c2s4 | while Loops | 1, 3, 4, 5, 6 |
| c2s5 | for and range | 1, 3, 4, 5, 6 |
| c2s6 | Fix the Broken Code | 1, 4 |
| c2s7 | Loops Make Art and Beats | 4, 5, 6 |
| c2s8 | try and except | 1, 3, 4, 5, 6 |
| c2s9 | Art and Music Capstone | 4, 5, 6 |

**Gate checklist for browser testing:**
- Open `dist/course-v2.html`, navigate to Chapter 2
- 2.1: Parsons — drag lines into the in-range check; verify reorder feedback
- 2.4: rung-6 Write — guessing game with secret=7; inputs 3,9,7 → "Too low / Too high / Correct!"
- 2.5: rung-6 Write — prime checker; output should be 2 3 5 7 11 13 17 19
- 2.7: rung-5 Complete — spiral; canvas should draw an expanding spiral
- 2.8: rung-5 Complete — bulletproof input; inputs "abc","5" → "That's not a number. Try again. / Got: 5"
- 2.9: rung-5 Complete — pencolor spiral; canvas should draw red/blue/green spiral

### Phase C — Chapter 3 (Functions) ← NEXT

Work chapter by chapter per CURRICULUM.md. Requires explicit user approval to begin.

### Phase D — Chapter 0 (pre-syntax hook)
Author Chapter 0 sections: First Sound, Algorithms Are Exact, Guide the Robot,
Repeat and Decide, The Sandwich Bug. These come before Chapter 1 in the nav.

### Phase C — Chapters 2–12 (curriculum build-out)
Work chapter by chapter per CURRICULUM.md. One chapter per session.

### Phase D — Engine features (build alongside content as needed)
- Lesson-level warmup recall beat (one retrieval question at section 1 of each lesson)
- Section recap summary block
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
5. Build with `npm run build` and visually check in the browser (`dist/course-v2.html`).
6. Commit when the lesson's sections are clean.

---

## Known deferred items

- Exercise label framing: "Your turn:" repeated for successive exercises looks flat.
  Will be addressed with rung-specific labels (Predict / Modify / Fix / Challenge / Write).
- `dist/course-v2.html` is the live build. `dist/course.html` is an old snapshot — ignore it.
- Terminal theme is locked (intentional — unlocks after Real Tools I).
