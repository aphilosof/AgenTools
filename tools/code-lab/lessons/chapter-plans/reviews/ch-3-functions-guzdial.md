# Panel Review — Ch.3 Functions — Mark Guzdial (Georgia Tech, computing education research)
**Verdict:** Solid

---

## Findings (from my lens)

### Plan vs. Implementation gap
The review covers both the chapter plan (`ch-3-functions.md`) and the 10 lessons actually written in `c3.js`. In several places these diverge. I flag both plan issues (where the plan itself is the problem) and implementation issues (where the plan is fine but the written lesson differs).

---

1. **[MAJOR] Plan §3.7 + Challenge §7 — `:.2f` money formatting recalled as "Ch.1 recall", but Ch.1 never taught it.**
   The plan describes the tip-splitter output format as `f"${amount:.2f}"` and labels it "Ch.1 recall — f-string money formatting" in two places (Lesson 3.7 summary and Challenge exercise 7). I searched `c1.js` and `c2.js` exhaustively: neither file contains `:.2f` or any f-string format specifier. This is a forward dependency disguised as a recall. Either: (a) add `:.2f` to Chapter 1's f-string lesson before using it here, or (b) teach it fresh when it first appears in Ch.3's challenge. Presenting new syntax as if it were already known is one of the most consistent sources of learner confusion in novice CS education — they trust they should know it, assume they forgot, and don't ask.

2. **[MAJOR] c3s2 — LEGB rule named but never completed; creates a false knowledge frame.**
   Lesson 3.2 introduces "the LEGB scope rule" by name in the middle of explaining parameter scope: "This is the LEGB scope rule at work. The function body has its own local scope. It sees `n` but it cannot see `x`, apples, or anything else from the caller." LEGB (Local, Enclosing, Global, Built-in) has four letters. Only L and G are ever covered in this chapter (L in 3.2 and 3.4, G briefly in 3.4). E (enclosing/closures) and B (built-in) are not defined, not deferred to a named lesson, and not marked with a "we'll return to this." A careful 11-year-old who tries to look up LEGB will find documentation about closures and built-ins that makes no sense with what they have been taught. The fix is simple: either don't name the acronym until all four components can be addressed (Ch.5 or Ch.7 are the right homes), or introduce it as "the LG rule for now — E and B come later." Research on elaboration effect and cognitive load (Sweller et al.) is clear that introducing a framework and then withholding its components costs more than waiting.

3. **[MAJOR] c3s8 — `is_palindrome` silently fails on mixed-case input; no misconception registered.**
   The written implementation compares `reversed_word == word` directly, with no `.lower()` normalization. `is_palindrome("Racecar")` returns `False`. The lesson exercises only use lowercase examples. The plan's misconceptions list does not flag this case sensitivity issue, and there is no "this function only works with all-lowercase input" note. For a learner who tries the function on a real word from a book ("Racecar", "Level", "Madam"), it silently gives the wrong answer with no error to debug. This matters pedagogically because silent wrong answers are the most damaging learning outcome — worse than a crash. The fix: either normalize in the function (`word = word.lower()` at the top of the body) or add an explicit note + test case: "Try `is_palindrome('Racecar')` — what do you get? Why?" and turn it into a teaching moment.

4. **[MINOR] Plan §3.7 — tip-splitter described as embedded in the bassline lesson, but c3s7 (bassline) contains no tip-splitter content.**
   The plan explicitly says Lesson 3.7 has a "tip-splitter (numbers strand embedded)" and describes four helper functions in detail. The actual `c3s7` (titled "def bassline()") is purely sound strand — no tip-splitter, no numbers strand. The tip-splitter shows up instead in the Chapter Challenge (exercise 7). This is a plan-vs-implementation mismatch, not a quality problem. The numbers strand is covered in lessons 3.2, 3.3, and 3.5 already. The omission from 3.7 is harmless but the plan should be updated to reflect what was actually built, so the next session doesn't re-introduce it in 3.7 thinking it is missing.

5. **[MINOR] Plan §3.0 — hook lesson's arc says "rungs 2-3" but the actual c3s0 includes rung 1 (predict).**
   The plan says "rungs: predict → modify (rungs 2–3)" but the actual c3s0 has a rung-1 predict exercise as the very first task. This is correct pedagogically — the rung ladder should start at predict. It is the plan description that is wrong, not the implementation.

6. **[MINOR] c3s4 — `global` keyword section teaches the keyword and then says "don't use it"; the prohibition framing without a positive model may leave learners confused about why Python has the keyword at all.**
   The lesson shows `global count`, then says "don't use it," then gives the fix. This is the right approach, but the explanation of *why Python has `global` at all* is absent. Learners at this level often assume: "if it's in Python, someone uses it." A one-sentence motivation — "it exists for short utility scripts and interactive sessions; in any structured program you will never need it" — closes the gap. Without it, confident students tend to use `global` anyway because the lesson showed it works.

7. **[MINOR] c3s2 — rung-5 exercise (celsius_to_f) introduces `return` before Lesson 3.3 teaches `return`.**
   The celsius exercise in c3s2 says "Replace `pass` with a `return` statement." This is the first `return` any exercise requires a student to write. `return` is not formally taught until Lesson 3.3. The starter code has the comment `# return (c * 9 / 5) + 32` which effectively tells them the answer, so the exercise works despite the early use — but it is a low-floor encounter that relies on the comment as scaffolding rather than on understanding. This is fine under CURRICULUM-STRUCTURE.md Rule E ("a concept may be shown working informally earlier when it builds a proper foundation"), but should be flagged in the plan so lesson authors know the first `return` write is here, not in 3.3.

---

## Continuity notes

**Well-woven from Ch.1–2:**
- Accumulator pattern (Ch.2) is explicitly recalled and upgraded with `return` in c3s3. The text says "In Chapter 2 you learned the accumulator pattern… Now you can replace that `print` with a `return`." This is textbook spiral curriculum and it works.
- `for`/`range`/`%` fluency assumed in c3s3's `is_prime` exercise is fully established by Ch.2's L2.5 and L2.6 (prime checker canonical example appears in L2.5 exercise). No re-teaching needed and none occurs. Good.
- `.upper()`, `.lower()`, `.strip()` used in c3s4's scope exercises are all owned by Ch.1. Used without re-teaching. Correct.
- `range()` used freely throughout Ch.3 with no re-teaching — appropriate.
- The `_` loop variable convention (first named in Ch.2 L2.7) is used in c3s6 without re-teaching. This is correct.
- DRY principle is called out by name in c3s0 and c3s7, both correctly recalling its first introduction in Ch.1/Ch.2. Consistent.

**Missing or under-woven:**
- `:.2f` f-string formatting: appears in the plan as a "Ch.1 recall" but was never taught in Ch.1. (See finding 1 above.)
- `input()` + `int()`/`float()` conversion: used freely in the Chapter Challenge's tip-splitter (exercise 7) but Ch.3's body lessons never practice it within a function context. A student who did not fully internalize Ch.1 L1.6 will struggle at the challenge. A one-line recall in 3.7 or the Challenge intro would help.
- `str()` conversion: appears in c3s2's exercise (`str(n * n)`) without any warm-up recall. Small but worth a note in the lesson.

**Re-taught by accident:**
- None found. The chapter is notably clean on this. The DRY principle is invoked, not the syntax.

---

## What's strong

- **The print-vs-return distinction is handled with unusual clarity.** Lesson 3.3 names it "the print-not-return bug," shows the crash, and gives the mental model: "`print` sends to the screen; `return` sends to the caller." This is the single most persistent misconception in novice Python (Sorva 2013 confirm; McCracken et al. 2001 confirm). Naming it, showing it crash, and giving it a memorable name is evidence-based practice. The rung-4 fix exercise that produces the `NoneType + int` crash is exactly the right place to confront it.

- **Decomposition is modeled, not just named.** Lesson 3.6 builds a `draw_house` from `draw_polygon` → `draw_square` → `draw_roof` → `draw_house`. The student sees the dependency graph in action before being asked to build one. The rung-6 exercise (`draw_scene`) correctly requires composing three named helpers. This is context-first teaching: the motivating problem (scene with multiple shapes) precedes the abstraction (decomposition), not the reverse.

- **The `UnboundLocalError` trap is pedagogically handled correctly.** Lesson 3.4 explains Python's scanning behavior ("Python scans the entire function body before running a single line — if it sees `count =`, it treats `count` as local throughout") and provides both the broken version and the fix. The fix is always "pass it as a parameter," which is the correct professional pattern. This addresses one of the most cognitively demanding errors novices encounter, and the explanation is accurate and concrete.

---

## Technical verification results

All code samples verified with Python 3.14.5:
- `is_prime` solution: all test cases correct (0→False, 1→False, 2→True, 3→True, 9→False, 17→True, -5→False).
- `digit_sum` bug: confirmed — `n / 10` gives `137.0` for input 1234; `n % 10` gives `10`. The fix is correct.
- `celsius_to_f`: 0→32.0, 100→212.0. Correct.
- Polygon exterior angles: 3→120, 4→90, 6→60. Correct.
- `sum_to`: 5→15, 10→55. Correct.
- `is_palindrome`: "racecar"→True, "hello"→False, "level"→True. Correct for lowercase-only.
- `is_palindrome("Racecar")`: False (case-sensitive bug confirmed — no normalization).
- `repeat_word` exercises: "echo echo echo", "echo echo", "echo-echo-echo-echo". All correct.
- `UnboundLocalError` from `count = count - 10` inside a function: confirmed.
- `groove(bpm=120)`: kick on even beats, hihat on odd beats — matches the check block.
- `draw_snowflake(6, 60)`: returns to origin (0,0), heading 0. Correct.
- `:.2f`: absent from both `c1.js` and `c2.js`. Confirmed unintroduced.

---

*Three-line summary:*
**Verdict: Solid.** The chapter is technically sound, the print-vs-return distinction and UnboundLocalError trap are handled better than most introductory texts, and the decomposition arc is pedagogically coherent. **Top issue 1:** `:.2f` money formatting is presented as a Ch.1 recall in two plan locations but was never taught in Ch.1 or Ch.2 — this must be resolved before the tip-splitter challenge is used. **Top issue 2:** LEGB is named in c3s2 but only two of its four components are ever covered; an 11-year-old who looks it up will find closure and built-in documentation that does not match what they have been taught — defer the acronym or scope it explicitly.
