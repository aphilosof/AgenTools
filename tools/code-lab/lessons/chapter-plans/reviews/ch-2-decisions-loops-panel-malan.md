# Panel Review — Ch.2 Decisions & Loops — David Malan (CS50)
**Verdict:** Solid

---

## Findings (from my lens)

### 1. [MAJOR] Plan is a document about 7 lessons; the actual chapter (c2.js) has 9

**Location:** Chapter overview vs. actual c2.js lesson count.

**Problem:** The chapter plan describes L2.1–L2.7. The built c2.js contains nine lessons: c2s1–c2s9, with `try/except` (c2s8) and "Art and Music Capstone" (c2s9) not appearing in the plan at all. The plan is therefore an incomplete specification of what was built. This is only a documentation gap, not a content defect — and `try/except` is richly taught in c2s8 with EAFP, bare-except dangers, and the bulletproof-input sentinel pattern. But any future reviewer or author consulting the plan will have an incorrect picture of chapter scope.

**Fix:** Add L2.8 (`try`/`except`, EAFP, bulletproof input) and L2.9 (Capstone) to the plan, or note explicitly that those lessons exist outside the plan. The concept inventory for `try/except` (`ValueError`, `ZeroDivisionError`, EAFP vs LBYL) also needs to appear in "Concepts owned."

---

### 2. [MAJOR] L2.4 — Hook is the countdown, but the hook moment is buried behind augmented assignment

**Location:** c2s4, opening structure.

**Problem:** CS50's design principle is that the hook lands *first* — you run something compelling, then you understand why it works. In the actual c2s4, the lesson opens with augmented assignment (`+=`, `-=`) before the student has seen a single `while` loop. The pedagogical impact: the first screen of content is about shorthand notation for something the student has not yet encountered. The payoff — "now that you know `+=`, here is the countdown loop" — delays the moment of surprise by one full page.

Compare to the plan's worked example 1, which opens with the countdown directly (Think Python §7.3 framing). The actual lesson departs from this: the countdown is worked example 2, not the opener. The hook moment (blastoff, the stepper showing n shrink to zero) is what makes this lesson memorable. It should be screen 1.

**Fix:** Move augmented assignment to *after* the first worked countdown. Students see `n = n - 1` in the countdown, then the next screen says "Python has a shorter form." That is the motivated introduction. Current order inverts it.

---

### 3. [MAJOR] L2.4 — Cognitive load is genuinely high; but the plan does not acknowledge it or offer pacing guidance

**Location:** c2s4 concept list and progression table.

**Problem:** c2s4 teaches: augmented assignment, loop invariants (named), off-by-one errors (named), while loop with three responsibilities, infinite loop with recovery protocol, the accumulator pattern (named), and `while True:` / `break` sentinel. Verified against the actual c2s4: all seven schema land in one 25-minute lesson. The plan's progression table shows "rungs 3–6" but gives no signal that this lesson is substantially heavier than any other.

This is the right lesson for these concepts — they are genuinely connected. But a student who stalls here has no map telling them "this is the hardest single lesson in the chapter." The absence of a difficulty signal in the plan means an author writing hints, warm-ups, or pacing notes will not know to allocate extra scaffolding here.

**Fix:** Add a "⚠ high density" note in the plan's progression table for L2.4, and split the worked examples between "initialization/test/update" (must land clearly before anything else) and "accumulator + sentinel" (the pattern extensions). The plan's existing worked-example order is good; it just needs to acknowledge the cognitive weight explicitly so downstream authors know to slow the ramp.

---

### 4. [MINOR] L2.1 — `and`/`or` return operands: mentioned as a misconception but never demonstrated

**Location:** c2s1 misconceptions list; actual c2s1 codex note.

**Problem:** The plan correctly flags the misconception: "`and`/`or` always return `True` or `False` — they return an operand." The actual c2s1 mentions this in the codex note but never shows it with a runnable example. Verified:

```python
print(0 and "hello")   # 0   (not False)
print("" or 42)        # 42  (not True)
```

The mental model a student forms from c2s1 is "and/or produce True or False." That model is reinforced by every worked example using boolean results in conditions. The correction never lands concretely. When this operand-return behaviour appears implicitly in Ch.5 (`x = name or "default"`), students will be surprised rather than recognizing a pattern they already know.

**Fix:** Two lines of runnable code in c2s1, one sentence: "`and` and `or` return one of their operands — whichever one determined the result." The plan documents this correctly; the actual lesson just needs the one runnable example to make it stick.

---

### 5. [MINOR] L2.5 — `print(sep=, end=)` arrives without a warm-up or motivation

**Location:** c2s5, `sep=`/`end=` text block.

**Problem:** The actual c2s5 introduces `sep=` and `end=` mid-lesson, in the middle of the range coverage. The motivation — "we need `end=\" \"` to print values on one line" — is genuinely needed to make the range examples readable. But `sep=` is introduced immediately afterward without a clear motivating use case. From the CS50 lens: you introduce a tool when the student feels the need for it. `end=` is motivated (the range output examples need it). `sep=` lands with a worked example but no "here is a problem this solves" moment.

**Fix:** Minor. Either cut `sep=` to a note/codex entry and reintroduce it in Ch.4 when iterating over data (where it earns its place), or add a one-line motivating scenario: "You want `a-b-c` from three variables without building a string manually." As written it is correct — just unmotivated for `sep=` specifically.

---

### 6. [MINOR] Chapter Challenge exercise 2 — the `continue`-in-`while` trap explanation is sound but buried

**Location:** Chapter Challenge, exercise 2 footnote.

**Problem:** The plan explains why `for`+`continue` is used instead of `while`+`continue`: "placing `continue` in a `while` countdown without careful decrement ordering creates an accidental infinite loop — the exercise tests `continue`, not trap-spotting." This is technically correct (verified: `continue` before the decrement in a `while` loop produces an infinite loop because the update is skipped). The explanation appears parenthetically in the exercise description.

This is a genuine and non-obvious hazard. Students who later write a `while`+`continue` pattern will hit it. It deserves surfacing earlier — either in L2.4 (when `while` is taught) or in L2.5 (when `continue` is taught) as a named anti-pattern. A one-sentence callout: "Using `continue` in a `while` loop is safe only if the update comes *before* the `continue` line — or the `continue` will skip the update and loop forever."

**Fix:** Promote to L2.5 (for+range lesson), add one anti-pattern block showing `while`+`continue` skipping the update, then show the fix and the rule. The Chapter Challenge footnote can then refer back to it.

---

### 7. [MINOR] L2.6 — The "print debugging" strategy is introduced without a corresponding exercise

**Location:** c2s6, "Print debugging — the oldest tool" text block.

**Problem:** The actual c2s6 teaches print debugging as a strategy: "add `print()` calls to see what variables hold mid-program." This is good. CS50 spends significant time on this technique precisely because it is the real working tool students use for years before they reach a debugger. But in c2s6, print debugging is a text block only — there is no exercise where the student adds a debug print, observes a mid-loop variable table, and removes it after fixing. The three exercises jump straight to finding and fixing bugs, which is correct, but the *diagnostic* step (add a print to understand what is happening) is described, not practiced.

**Fix:** Add one exercise where the starter code has a logic bug *and* a commented-out `# print(i, total)` inside the loop. Student uncomments it, runs, reads the output, spots the bug, fixes it, then comments the debug print back out. This closes the loop on a skill that will be used constantly.

---

## Continuity notes

**Well-woven from Ch.1:**
- `%` operator recalled naturally throughout (even/odd checks, beat patterns, FizzBuzz)
- `str.split()` correctly listed as a recalled concept in the Chapter Challenge (taught in c1s5)
- `str * int` repetition for the histogram (`"*" * len(word)`) is valid — confirmed in c1.js line 164: "Between a string and a whole number it **repeats** the string"
- `input()` / `float()` / `int()` conversion recalled without re-teaching in L2.3 BMI and L2.4 guessing game
- `bool` type and truthiness extend cleanly from c1s2

**Missing or thin:**
- `len()` is introduced in L2.2 worked example 2 ("briefly — full string treatment is Ch.4") but the plan does not note that `len()` was already introduced in c1s5 on strings. This is a recall, not a first introduction. The plan should say "recall from c1s5" rather than "introduce briefly."
- `f-strings` are used in c2s5's accumulator example (`print(f"i = {i}")`) as a pure recall from Ch.1. This is fine, but the plan does not list f-strings in the "Recalls" for L2.5. Minor gap.
- `str.split()` is listed as a recall in the Chapter Challenge but is not listed in the L2.5 or L2.7 "Recalls" sections even though it is used in earlier strand exercises. Harmless, just inconsistent.

**Re-taught by accident:**
- None found. The plan is disciplined about not re-teaching Ch.1 concepts.

**c2s8 (`try/except`) not in plan:**
- The actual lesson is strong: EAFP vs LBYL named and contrasted, bare `except:` anti-pattern shown, bulletproof-input sentinel pattern taught. Since `try/except` owns `ValueError` and `ZeroDivisionError` for the Codex, these error classes need to move from the Ch.2 error table (where they appear as L2.5 and L2.5 respectively) to L2.8.

---

## What's strong

- **The misconceptions inventory is outstanding.** Every lesson documents the exact wrong mental model, names its source, and keys it to a specific exercise. The `= vs ==` trap, the `if x == 1 or 2:` trap, `range(5)` including 5, `break` exiting all loops — all are caught and taught explicitly. This is the hardest part of curriculum design to get right, and the plan gets it right.

- **The difficulty ramp is well-engineered.** Write-from-scratch (rung 6) arrives at L2.3 and becomes the default at L2.5–L2.7. The plan table is explicit about this, and the actual lessons follow it. The progression from predict-only in L2.1 to blank-editor in L2.7 is neither too fast (no cliff) nor too slow (no plateau). By L2.3, a student who followed Ch.1 is genuinely ready to write a BMI classifier from scratch.

- **The through-line is a genuine pedagogical hook.** "The computer does exactly what you tell it — but now you get to tell it to check, choose, and repeat" is a concrete, memorable framing that gives students a mental stake in every lesson. The infinite loop as both danger and engine (the same construct that hangs a tab powers every interesting program) is exactly the kind of productive tension that makes a lesson linger. This is CS50-level narrative design.

---

## 3-line summary

**Verdict: Solid.** The concept inventory is complete, the misconception coverage is excellent, and the difficulty ramp is correctly calibrated for a strong 11-year-old reader.

**Top issue 1:** The plan describes 7 lessons; 9 were built — `try/except` (c2s8) and a capstone (c2s9) are missing from the plan entirely, making the plan an unreliable specification of chapter scope.

**Top issue 2:** L2.4 opens with augmented assignment before the student has seen a `while` loop, burying the hook (the blastoff countdown) behind unmotivated notation — invert the order so the loop lands first and `+=` is introduced as the shorthand for what the student just wrote.
