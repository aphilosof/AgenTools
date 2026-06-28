# Panel Review — Ch.1 First Words — Luciano Ramalho (Fluent Python)
**Verdict:** Solid

---

## Findings (from my lens)

**Technical correctness first — I ran python3 on every checkable claim.**

All numeric results verified correct:
- `round(3.5)` → `4`, `round(2.5)` → `2` (banker's rounding) — plan states both correctly and pairs them
- `int(3.9)` → `3` (truncates toward zero) — correct
- `2^10` → `8` (XOR, not power) — correct
- `2^8` → `10` (quiz key) — correct
- `-2**2` → `-4` — correct
- `f"{2.5:.2f}"` → `'2.50'` vs `str(round(2.5, 2))` → `'2.5'` — plan distinguishes these correctly
- `'Python'[1:4]` → `'yth'` — correct
- `len('Code Lab')` → `8` — correct
- `int("3.5")` → `ValueError` — correct

No technical errors found in the verified claims.

---

1. **[MAJOR] Lesson 1.6 mini-project — un-Pythonic solution contradicts 1.5** — The plan teaches f-strings in Lesson 1.5 as "the clean way to build output; cleaner than concatenation + `str()`". The actual `c1s6` solution then uses `"Hi " + name + ", next year you will be " + str(age + 1) + "."` — exactly the pattern the lesson explicitly named as inferior. Once f-strings are taught in 1.5, they must be the default idiom in all subsequent exercises. A student who just learned `f"Hi {name}, next year you will be {age + 1}."` is worse off if the model solution reaches back for the old pattern. Fix: all 1.6 solutions and examples must use f-strings where a string contains any variable or expression.

2. **[MAJOR] `int()` vs `//` truncation direction gap** — Plan 1.2 correctly states "`int(3.9)` truncates (not rounds)" and plan 1.4 correctly states "`//` truncates toward negative infinity." But neither lesson draws the explicit contrast between the two rules: `int(-3.9)` gives `-3` (toward zero) while `-3.9 // 1` gives `-4.0` (toward minus infinity). These give identical results for positive numbers and different results for negative numbers — exactly the kind of silent discrepancy that produces confident wrong code. AUTHORING.md requires showing "the wrong version and explaining concretely what goes wrong." A negative example belongs in 1.4 where `//` is taught, cross-referencing the `int()` rule from 1.2. Running `python3` confirms: `int(-3.9) == -3`; `-3.9 // 1 == -4.0`. Fix: add one worked example in 1.4 showing `-7 // 2 == -4` alongside `int(-7 / 2) == int(-3.5) == -3`, naming the distinction explicitly.

3. **[MINOR] Lesson 1.3 naming — `my-name` error class is vague** — Plan labels `my-name` as "invalid → errors or ambiguity." Running `python3`: `my-name = 5` raises `SyntaxError: cannot assign to expression here` (Python reads it as `my` minus `name`). The plan's vague "ambiguity" undersells the lesson. The real teaching point is that Python parses `-` as the subtraction operator before it even considers whether you meant it as a separator — so `my-name` is not just "not a name"; it is a subtraction expression, and `SyntaxError` fires because you cannot assign to an expression. That is a more useful mental model for the student. Fix: in the naming subsection, replace "ambiguity" with the actual error and explain why Python misreads the dash.

4. **[MINOR] Truthiness ownership creates a re-teach risk with c2s1** — Plan 1.2 owns truthiness as a Ch.1 concept, which is correct per the concept spine. But `c2s1` (already written) teaches truthiness from scratch with full `bool()` examples: `bool(0)`, `bool("")`, `bool(None)`, etc. If Ch.1 1.2 is written to the plan's spec, `c2s1` must be revised to a one-line recall ("You learned in Chapter 1 that non-zero, non-empty values are truthy") rather than a fresh introduction. The plan is right on ownership; the flag is that authoring 1.2 without simultaneously revising `c2s1` will leave a duplication. The plan itself doesn't flag this dependency.

5. **[MINOR] `sep` and `end` demoted from 1.1 but not clearly deferred** — The current `c1.js` c1s1 does not include `sep`/`end` (the file's own comment says they were "moved to Chapter 2 when authored"). The plan reinstates them in 1.1. That decision is defensible — `sep` and `end` are straightforward — but the plan should note explicitly that the existing `c1s1` will need them added. More importantly, `sep` and `end` are keyword arguments, a concept not formally introduced until Ch.3's defaults/keyword-args lesson. The plan should briefly acknowledge this: students will use them as a named pattern without yet knowing the general term "keyword argument."

6. **[MINOR] Lesson 1.5 — method chaining shown in quiz but not explicitly named in lesson subsections** — The Chapter Quiz asks students to predict `"  Hi  ".strip().lower()`, which requires chaining two method calls. The existing `c1s5` shows `sentence.strip().split()` in a worked example, so chaining is demonstrated. But the plan's 1.5 subsections do not explicitly name method chaining as a pattern or explain what makes it work (each method returns a new string, which the next method receives). For an 11-year-old, seeing `a.b().c()` without a sentence explaining "the result of `.strip()` is itself a string, so you can call `.lower()` on it immediately" is a readability gap that AUTHORING.md's mental-model requirement would catch. Fix: add one sentence in the `.lower()`/`.upper()`/`.strip()` subsection explaining the chain.

7. **[MINOR] Lesson 1.7 plan is an upgrade from `c1s7`, not documented as such** — The plan's 1.7 calls for one variable controlling all sides of the square and all notes in the motif (`side = 100`, `root = 60`), which is a meaningful pedagogical improvement over the current `c1s7` that hardcodes `forward(100)` four times and `play(60)`, `play(64)`, `play(67)` directly. The plan is right — the variable-driven version teaches the "change one thing, change everything" idea that foreshadows functions. But the current `c1s7` will need to be rewritten. The plan should mark this explicitly so the implementer doesn't accidentally keep the hardcoded version.

---

## Continuity notes

**Well-woven:**
- Plan 1.2 correctly recalls `print` from 1.1 in its warm-up
- Plan 1.3 warm-up retrieves `type(3.14)` from 1.2 — good spaced recall
- Plan 1.4 warm-up uses `int(7 / 2)` — correctly cross-links `int()` (1.2) and `/` (the new operator being introduced); `int(7/2) == 3` verified
- Plan 1.5 warm-up uses `"go" * 3` — correctly retrieves `str * int` from 1.2; `"go" * 3 == "gogogo"` verified
- Plan 1.6 warm-up uses three `int()` conversion cases — tight retrieval of 1.2's type-conversion section before the lesson that pays it off

**Missing / re-teach risks:**
- `c2s1` teaches truthiness from scratch. Once 1.2 owns it (per this plan), `c2s1` needs revision to recall-not-reteach. This is not flagged in the plan.
- The plan's 1.6 exercises should use f-strings (taught in 1.5) but the existing `c1s6` uses string concatenation + `str()`. The plan does not flag that `c1s6` needs revision.
- Comments are introduced in the plan's 1.1 subsection list but are fully handled in `c1s3` (the existing written lesson folds them in there). The plan now re-introduces them in 1.1 where they originally belong — this is a correct realignment, but the existing `c1s3` text that introduces comments ("A quick note on comments...") will become a redundant re-mention, not a spiral recall.

**Concepts appearing early (low-floor encounters — appropriate):**
- `split()` returns a list (plan explicitly notes "Lists are introduced only as a return-value here — Ch.4 owns them fully") — correct handling
- `sep` and `end` are keyword arguments before keyword arguments are named — acceptable if the plan notes the deferred naming (currently it doesn't)
- `round()` with banker's rounding: plan correctly pairs `round(3.5)→4` with `round(2.5)→2` and labels it an "optional aside." This is the right approach — name the rule without requiring the student to prove it.

---

## What's strong

- **Technical precision throughout.** Every edge case I checked — `int()` vs `//` truncation, `^` as XOR, `-2**2`, `:.2f` vs `round()`, banker's rounding — is stated correctly and most are paired with a contrasting example. The XOR trap in 1.4 (no traceback, silent wrong answer) is exactly the right lesson to give at this stage: logic errors without exceptions are harder to catch than exceptions.

- **Concept spine ownership is clear and well-sequenced.** Truthiness belongs in 1.2 (not 2.1), `input()` last (pays off type conversion directly), f-strings after indexing/slicing (you understand strings as sequences before you format them). The HTTLACS ordering is followed faithfully.

- **The plan explicitly calls out anti-patterns with error classes.** The misconceptions table is complete and correctly matched to lessons. Noting that `:.2f` and `round(n, 2)` are not identical (trailing zeros) and showing both is the kind of precision that prevents real confusion later. The `my-name` naming example and the `if x == 1 or 2:` trap (from `c2s1`, which the plan echoes with `"Score: " + 5`) show a curriculum that catches the non-obvious bugs.
