# NEXT — current state and what to build next

---

## What is built and working

### Engine
- Single-file build: `node build/build.js` → `dist/course.html`
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

All harness checks pass. Working build: `dist/course.html`.

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
- Open `dist/course.html`, navigate to Chapter 2
- 2.1: Parsons — drag lines into the in-range check; verify reorder feedback
- 2.4: rung-6 Write — guessing game with secret=7; inputs 3,9,7 → "Too low / Too high / Correct!"
- 2.5: rung-6 Write — prime checker; output should be 2 3 5 7 11 13 17 19
- 2.7: rung-5 Complete — spiral; canvas should draw an expanding spiral
- 2.8: rung-5 Complete — bulletproof input; inputs "abc","5" → "That's not a number. Try again. / Got: 5"
- 2.9: rung-5 Complete — pencolor spiral; canvas should draw red/blue/green spiral

### Phase C — Chapter 3 (Functions) ✅ COMPLETE

All 10 lessons authored (c3s0–c3s9). All harness checks pass.

| ID | Title | Rungs |
|----|-------|-------|
| c3s0 | The Shortcut Machine | 1, 2, 3 |
| c3s1 | Defining a Function | 1, 2, 4, 5 |
| c3s2 | Parameters and Arguments | 1, 3, 4, 5 |
| c3s3 | Return Values | 1, 3, 4, 5, 6 |
| c3s4 | Scope | 1, 4, 5, 6 |
| c3s5 | Default Arguments and Docstrings | 3, 5, 6 |
| c3s6 | Functions That Draw | 1, 3, 4, 5, 6 |
| c3s7 | def bassline() | 3, 5, 6 |
| c3s8 | Functions in the Wild | 1, 2, 4, 5, 6 |
| c3s9 | Art and Music: Ch1+Ch2+Ch3 | 4, 5, 6 |

**Gate checklist (browser testing):**
- 3.0 rung-3 Modify: change cheer() body → verify all 3 calls update
- 3.3 rung-1 Predict: x = say_hi(); print(x) → "Hi!\nNone"
- 3.4 rung-4 Fix: UnboundLocalError in reset() → fix by passing count as param
- 3.6 rung-5 Complete: draw_house(80) → square + triangle on canvas
- 3.7 rung-5 Complete: verse(60) + verse(65) → 8 notes play
- 3.8 rung-6 Write: word_inspector("racecar") → "Vowels: 3 / Palindrome: True / RACECAR"
- 3.9 rung-6 Write (drawing): draw_snowflake() → 6-branch snowflake on canvas

### Phase D — Chapter 4 (Collections) ✅ COMPLETE

All 10 lessons authored (c4s1–c4s10), all harness checks pass, gate verified.

| ID | Title | Rungs |
|----|-------|-------|
| c4s1 | Lists: One Name for Many Values | 1, 4, 2, 3, 5, 6 |
| c4s2 | Indexing and Slicing | 1, 3, 1, 4, 5, 6 |
| c4s3 | Looping Over Lists | 1, 2, 3, 5, 3, 6 |
| c4s4 | Tuples and Sets | 1, 2, 3, 4, 5, 6 |
| c4s5 | Look It Up: Dictionaries | 1, 2, 4, 3, 5, 6 |
| c4s6 | Containers Inside Containers | 2, 3, 1, 5, 4, 6 |
| c4s7 | Data into Charts | 1, 2, 5, 4, 3, 6 |
| c4s8 | Lists as Music | 1, 4, 3, 5, 5, 6 |
| c4s9 | Collect, Process, Chart | 1, 2, 3, 4, 5, 6, 6 |
| c4s10 | Art and Music: Ch1+Ch2+Ch3+Ch4 | 3, 5, 5, 6, 4, 1, 5, 5, 6 |

**Pre-chapter gate: COMPLETE.** Lesson quality audit (commit `e827d76`) added
AUTHORING.md Rules 6–8 (exercise diversity, build-up, complete coverage) and
brought all 36 lessons to those standards.

**Gate checklist — verified by running each solution through
`tests/mocks/runner.py` (same mock-injecting runner `tests/run.js` inv1 already
trusts) and diffing actual stdout against the value below:**
- 4.1 `c4s1` rung-1 Predict: `bpm=[80,120,140,96]` → `80\n96\n4` ✅
- 4.3 `c4s3` rung-3 Modify: sorted BPMs with `reverse=True` → `[61, 52, 47, 43, 38]` ✅
- 4.5 `c4s5` rung-4 Fix: frequency counter bug (`total + song` key bug) → `8500` ✅
- 4.8 `c4s8` rung-1 Predict: `len(melody)/melody[2]` → `5\n64` ✅
- 4.9 `c4s9` rung-6 Write: `letter_vs_word(text)` → `10\n4`; `word_trend(text, keyword)` → `2` ✅
- 4.10 `c4s10` rung-6 Write: `song_analysis(melody, root, bpm)` → `7\n3` ✅

### Phase E — Chapter 5 (Thinking in Code) ✅ COMPLETE

**Pre-chapter gate: COMPLETE.** 5-reviewer curriculum audit run (Downey, Resnick,
Severance, Guzdial, Ko lenses), synthesized, fact-checked against actual Ch3/Ch4
lesson source, and approved. Full table recorded in CURRICULUM.md. Key findings:
- Debugging was under-scoped in the original 5-lesson plan relative to how
  central it's declared ("required in bosses hereafter") — split into two
  lessons (5.4 crime-scene/traceback, 5.5 hypothesis-driven method + silent bugs).
- Silent wrong-answer bugs (no traceback, just wrong output) were entirely
  unaddressed — now a first-class category in 5.5.
- A call-stack lesson and an aliasing/mutation lesson were considered and
  dropped after verification: c3s4/c3s9 already teach call frames, c4s6 already
  teaches aliasing — no re-teaching needed, only a recap callback in 5.4.
- DRY reframed as "Generalizing Repetition" (5.2) since basic DRY is already
  taught 5+ times since Ch3 — the new content is spotting near-duplication and
  knowing when *not* to DRY.
- Added 5.3 "Reading Someone Else's Code" as a prerequisite for the 5.6
  checkpoint's messy-song refactor (no lesson previously taught reading
  unfamiliar code cold).

All 6 lessons authored (c5s1–c5s6), all harness checks pass (`npm test` green
across 42 lessons).

| ID | Title | Rungs |
|----|-------|-------|
| c5s1 | Decomposition & Naming | 1, 2, 4, 4, 3, 4, 6 |
| c5s2 | Generalizing Repetition | 1, 5, 4, 4, 3, 6 |
| c5s3 | Reading Someone Else's Code | 1, 1, 1, 1 |
| c5s4 | Debugging: Reading the Crime Scene | 1, 4, 4, 4 |
| c5s5 | Debugging: The Scientist's Method | 4, 1, 1, 4 |
| c5s6 | Checkpoint Projects | 1, 5, 4, 5, 4, 5, 4 |

**Gate checklist — verified by running each solution through
`tests/mocks/runner.py` (the deterministic runner, same one `tests/run.js`
inv1 uses) and diffing actual output against the value below. All items are
text/calls output, no browser-only visual checks needed for this chapter:**
- c5s1 ex7 (moons capstone, Write): `describe_moons(moons)` → `Most moons: Saturn (146)\nFewest moons: Earth (1)` ✅
- c5s2 ex6 (moons capstone, Write): `count_moons_above(moons, 50)` then `count_moons_above(moons, 20)` → `2\n3` ✅
- c5s4 ex4 (IndexError misdirection, Fix): `announce_top(titles)` → `Winner: Dance Monkey` ✅
- c5s5 ex4 (silent bug, Fix): `count_dance_tracks([80,110,140,96])` with corrected `>` → `1` ✅
- c5s6 ex3 (number-guessing decomposed + fixed, Fix): → `Too low!\nToo high!\nCorrect!\nAttempts: 3` ✅
- c5s6 ex7 (messy-song refactor, unused-parameter Fix): `play_phrase([0,0,7], 65)` → play(65), play(65), play(72) ✅

Chapter 5 complete: content, engine, and docs. Next: Chapter 0 (pre-syntax
hook) or Chapters 6+ per CURRICULUM.md.

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
5. Build with `node build/build.js` and visually check in the browser (`dist/course.html`).
6. Commit when the lesson's sections are clean.

---

## Known deferred items

- Exercise label framing: "Your turn:" repeated for successive exercises looks flat.
  Will be addressed with rung-specific labels (Predict / Modify / Fix / Challenge / Write).
- `dist/course.html` is the single build output (`node build/build.js`). No other dist files.
- Terminal theme is locked (intentional — unlocks after Real Tools I).
