# Deep Review (round 2) — Chapter 0 (First Sound, Then Think)
**Verdict:** Needs fixes (minor only — no blockers; the round-1 majors all landed)
**Python verified on:** 3.14.5

---

## Round-1 fixes audit

- **Finding 1 (MAJOR — strand-app lesson + chapter recap missing): CONFIRMED-FIXED.**
  A dedicated strand-application lesson **L0.6 — Sound Strand: Build a Motif** now
  exists, correctly tagged `strand-application · sound`, and its arc role explicitly
  distinguishes it from the assessing Chapter Challenge ("lets students explore…
  with no single correct answer"). A **Chapter Recap** section now follows the quiz
  with Codex consolidation (all nine entries surfaced) plus a five-item retrieval set
  flagged for reuse as Ch.1 warm-ups. This is exactly the §C arc shape
  (Hook → Concepts → Strand-app → Challenge → Quiz → Recap). Fixed properly.

- **Finding 2 (MAJOR — abstraction ownership contradiction): CONFIRMED-FIXED.**
  The plan no longer "owns" abstraction. `Concepts owned` now says abstraction is
  *practiced unnamed* and "**not introduced here** — it is named in Ch.3… and deepened
  in Ch.5." The spine was also updated to match: `CURRICULUM-STRUCTURE.md` line 108–110
  now reads "sequence, selection, iteration, decomposition, debugging — as ideas,
  unplugged. (**Abstraction** is *practiced unnamed* in Ch.0, **named** in Ch.3…,
  and deepened in Ch.5.)" Plan and spine are now consistent; the contradiction is gone.

- **Finding 3 (MAJOR — warm-ups + lesson-level Recap+Codex missing): CONFIRMED-FIXED,
  with one residual gap (see new finding 1).** L0.2–L0.6 each now carry a Warm-up beat
  (mostly genuine retrieval questions recalling the prior lesson) and a Recap + Codex
  beat with a one-sentence summary and earned entries. The template §B
  (`Warm-up → Subsection × 3–6 → Recap + Codex`) is now honoured for L0.2 onward.
  Residual: **L0.1 (the hook) still has no Recap+Codex labelled as such** — it does have
  a "Recap + Codex" block, so this is actually fine; the only true gap is that L0.1 has
  no warm-up, which is correct (it is the first lesson, nothing to recall).

- **Finding 4 (MINOR — L0.1 ex.3 rung mislabeled "rung 1" should be "rung 3"):
  CONFIRMED-FIXED.** Exercise 3 now reads `(rung 3 — modify, single value)` and the
  subsection header lists `rungs 1, 3`. Matches the rung ladder and the progression table.

- **Finding 5 (MINOR — Overview self-contradiction on where rung 3 first appears):
  CONFIRMED-FIXED.** Overview now reads verbatim the suggested fix: "Rung 3 (modify)
  first appears in L0.1 as a brief value-change preview and returns in Challenge
  exercise 6 as the capstone stretch." Consistent with the progression table.

- **Finding 6 (MINOR — L0.4 while-loop-specific misconception inappropriate for
  counted loops): CONFIRMED-FIXED.** The condition-check-vs-body-run misconception is
  gone. It is replaced by exactly the suggested N+1 misconception: "Off-by-one on the
  loop body count: tracing `repeat 3 times: play(60), play(64)` and guessing 4 notes
  rather than 6 (the N+1 error)." Correct and age-appropriate.

All six round-1 findings are fixed. No round-1 fix introduced a regression.

---

## New / remaining findings

1. **[MINOR] L0.4 Codex `iteration` entry overshoots what Ch.0 actually teaches.**
   The earned entry reads: "A counted loop runs the block a fixed number of times; a
   conditional loop runs it **until a condition stops being true**." Every *exercise* in
   Ch.0 is a counted `repeat N times` loop; the only conditional-loop content is one
   unplugged "stir until smooth" analogy in worked-example 1. Ch.2 (`ch-2-decisions-loops.md`
   line 45) owns `while` / indefinite iteration. Locking a Codex definition that names
   the conditional-loop case in Ch.0 mildly front-runs Ch.2's ownership and is broader
   than the chapter's exercises support.
   → **Fix:** Trim the Codex entry to the counted case the chapter teaches, e.g.
   "Repeating a block of steps without rewriting them; a counted loop repeats a fixed
   number of times." Keep "stir until smooth" as a *teaching* analogy for "loops needn't
   count," but don't enshrine the conditional-loop definition in the Ch.0 Codex.

2. **[MINOR] L0.4 exercise 3 vs. L0.5 warm-up — near-identical trace items risk a
   copy-the-number reflex rather than retrieval.** L0.4 ex.3 is
   `repeat 3 times: play(60), play(64), sleep(0.5)` → 6. The very next lesson's warm-up
   is `repeat 4 times: play(60), sleep(0.5)` → 4. Quiz q3 is `repeat 3 times: play(60),
   sleep(0.5)` → 3, and Recap q4 is `repeat 5 times: play(60), sleep(0.5)` → 5. Four
   structurally identical "how many notes" items. The arithmetic is correct in every
   case (verified below), but the spiral is testing one micro-skill four times rather
   than ramping. Not a blocker; consider varying at least one (e.g. ask "how many
   *seconds of sound+silence*" or "how many `play` vs. `sleep` calls execute") so the
   retrieval set isn't monotone.

3. **[MINOR] L0.6 / L0.5 "clashing note" claim is asserted, not grounded — and the
   engine pitch model isn't pinned.** Several exercises hinge on a wrong pitch that
   "clashes" (L0.5 worked-ex 3 and ex.3; L0.6 worked-ex 3 uses `play(67)` meant to be
   `play(65)`; L0.6 ex.3 "too high — it clashes"). Whether a note clashes is musical,
   not arithmetic, and depends on the surrounding notes, which aren't specified. With
   MIDI numbering (60 = middle C), 65 = F4 and 67 = G4 are both consonant scale tones;
   "67 clashes, 65 doesn't" is only true relative to an unstated key/melody. For an
   11-year-old this is fine as "it sounds wrong," but the author must ensure the *actual*
   chosen note context makes the substituted pitch audibly wrong, or replace "clash"
   with an unambiguous cue (e.g. "one note is far too high — an octave above the rest").
   → **Fix:** When these exercises are authored, pin the full note list so the wrong
   note is unmistakably wrong by pitch distance, not by music-theory consonance. Prefer
   "much higher/lower" framing over "clashes."

4. **[MINOR] Challenge ex.1 answer is unverifiable as written — `sleep()` values not
   given.** "How many seconds of silence does this algorithm produce in total?" has no
   stated `sleep()` values in the plan, so the claimed answer can't be checked at review
   time. This is a planning-doc gap, not a content error, but flag it so the authored
   exercise pins the numbers and the harness checks the sum. (All *specified* arithmetic
   in the chapter is correct — see below.)

5. **[MINOR / consistency] L0.4 selection Codex says a branch picks "one path if true,
   another if false," but the same lesson's misconception correctly teaches that `else`
   is optional ("if raining, take umbrella" with no else).** The Codex `selection` entry
   ("…follows one path if it is true, another if it is false") describes only the
   two-armed form and contradicts the lesson's own "a branch always has two outcomes →
   false" misconception.
   → **Fix:** Soften the entry to "…follows one path if the condition is true, and
   optionally a different path if it is false."

---

## Verified-correct (ran `python3` 3.14.5)

```
L0.4 ex3: repeat 3 × [play(60), play(64), sleep(0.5)] -> notes: 3*2 = 6   ✓
L0.5 warmup: repeat 4 × [play(60), sleep(0.5)]        -> notes: 4*1 = 4   ✓
Quiz q3:  repeat 3 × [play(60), sleep(0.5)] -> note 60 plays 3*1 = 3      ✓
Recap q4: repeat 5 × [play(60), sleep(0.5)] -> note 60 plays 5*1 = 5      ✓
```
All four counted-loop trace answers in the revised plan are arithmetically correct.

Boundary checks confirmed:
- **No Python syntax appears in Ch.0.** `play()`/`sleep()` are explicitly framed as
  "words the machine knows," not taught syntax. Honours §D pre-syntax scope.
- **`while` / conditional iteration is owned by Ch.2** (`ch-2-decisions-loops.md` L2.4,
  line 45/248). Ch.0 keeps loops to unplugged `repeat N times`, consistent except for
  the Codex over-reach in finding 1.
- **String indexing/slicing/`split`, comprehensions, `global`** — none appear in Ch.0
  (correct; first two are Ch.1/Ch.8, last is never).
- **Ch.1 boundary** (`ch-1-first-words.md` lines 57, 91–92, 106, 124): Ch.1 recalls
  "sequence, algorithm exactness, debugging idea" and "Debugging as an idea → now met
  as real error classes." Ch.0's hand-off (debugging-as-mindset, no error classes,
  preview of tracebacks in L0.5/chapter-wide error-classes note) matches exactly. No
  concept is used before taught or taught twice across the boundary.

---

## Verdict notes

This is a strong revision. All six round-1 findings — including the two structural
majors (missing strand-app lesson + recap; abstraction ownership contradiction) — are
genuinely fixed, not just papered over, and the spine doc was updated in lockstep so
plan and structure now agree on abstraction. CT-concept soundness is intact: the
algorithm → sequence → arrange → loop/branch → debug ordering is dependency-correct and
acyclic, the Use-Modify hook (predict → run → modify a single value) is textbook PRIMM
and genuinely motivating for an 11-year-old, and the literal-machine through-line is
well sustained. The new L0.6 strand lesson and the retrieval-set recap meaningfully
strengthen the chapter.

Remaining issues are all MINOR and authoring-level: an over-broad `iteration` Codex
entry that front-runs Ch.2's `while`, a `selection` entry that contradicts its own
"else is optional" teaching, four near-identical counted-loop trace items that should
be varied, and "clashing note" exercises whose correctness depends on note context the
plan hasn't pinned. None block proceeding; address findings 1 and 5 (Codex wording) and
pin the note lists (findings 3–4) when the lessons are authored.
