# Panel Review — Ch.1 First Words — David Malan (CS50)
**Verdict:** Solid plan, substantial implementation gap

---

## Findings (from my lens)

### 1. [BLOCKER] c1.js vs. plan — f-strings, indexing/slicing, join(), round(), :.2f are all absent from the written lessons

The chapter plan is explicit and correct: Lesson 1.5 owns f-strings (including `:.2f`), string indexing (`s[0]`, `s[-1]`), slicing (`s[1:3]`), `.join()`, and `round()`. These are all genuine Ch.1 concepts with clear prerequisite chains that make them teachable at this stage.

The written c1.js teaches none of them. The entire f-string construct — which the plan correctly identifies as cleaner than concatenation + `str()` and which the 1.6 mini-project should use — is absent. The c1.js age-greeter solution uses `str(age + 1) + ...` string building with `+`, which is the very pattern f-strings exist to replace. The plan's payoff never arrives.

This is a production defect, not a plan defect. The plan is right. The lessons are incomplete.

**Fix:** c1.js Lesson 1.5 needs a second pass adding: (a) indexing/slicing subsection with the zero-indexed mental model and the off-by-one note on stop-exclusivity; (b) `.join()` as the reverse of `.split()`; (c) f-strings with a dedicated subsection and at least one `:.2f` worked example; (d) `round()` alongside `len()`. The 1.6 mini-project solution should be rewritten to use f-strings, since that is the payoff the chapter builds toward.

---

### 2. [BLOCKER] c1.js vs. plan — Lesson 1.7 does not use a variable to drive the square or the motif

The plan's stated pedagogical purpose for Lesson 1.7 is explicit: "one turtle square driven by one variable; one 3-note motif controlled by one variable." The point is not to draw a square — students drew one in the preceding example. The point is that changing a single `side = 100` to `side = 150` resizes every call that uses it, making the connection between variables (1.3) and creative output vivid before loops exist. This is a strong, memorable moment: one change, one result — the same hook from Ch.0 now in Python syntax.

The written c1.js 1.7 uses hardcoded `forward(100)` values throughout. There is no `side` variable, no `root` variable. The concept payoff — "variables are the dial that controls everything" — is left on the table.

**Fix:** Rewrite the first exercise of c1s7 to introduce `side = 100` at the top and use `forward(side)` in all four calls. The modify exercise then becomes: "change `side` to 150 — notice only one number changed." Similarly, add `root = 60` driving `play(root)`, `play(root + 4)`, `play(root + 7)`. These are the simplest possible exercises, but they close the chapter's conceptual loop on variables.

---

### 3. [MAJOR] c1.js vs. plan — Truthiness, bool() conversion, and naming rules absent

Three distinct concept clusters from the plan are entirely missing from c1.js:

**Truthiness (plan 1.2):** The plan correctly owns the falsy-value set (`0`, `0.0`, `""`, `None`, `False`) in Ch.1 because Ch.2 immediately uses `while` and `if` conditions where truthiness is applied. If students reach Ch.2 without having the falsy-value set in their Codex, the first `while name:` or `if score:` condition will be confusing with no resource to look up. The existing c1s2 mentions `True` and `False` as a type but never enumerates falsy values or names the concept.

**bool() conversion (plan 1.2):** `bool(0)` and `bool(5)` are mentioned in passing in the existing c1s2 text (`bool(0)` gives `False`; `bool(5)` gives `True`) but there is no Codex entry for truthiness, no table, no worked exercise on `bool()`. The plan is correct that Ch.1 owns this.

**Naming rules (plan 1.3):** The plan specifies: starts with letter or `_`, no leading digit, no reserved words, snake_case convention. The c1.js variables lesson covers the sticky-note model and reassignment well but never mentions naming rules. A student who types `2score = 10` will get a SyntaxError with no prior warning that this is illegal. The `for = 5` case is worse — it raises `SyntaxError` for a reason the student has no framework to understand.

**Fix:** Add a truthiness text block to c1s2 with a falsy-values table and a `bool()` exercise. Add a naming-rules subsection to c1s3 (3–4 invalid examples + a fix exercise). These are short additions, not new lessons.

---

### 4. [MAJOR] c1.js vs. plan — `^` vs `**` XOR trap and `-2**2` precedence absent from Lesson 1.4

The plan's 1.4 debug exercise on `2^10` → `8` (not 1024) is one of the best-designed moments in the chapter. It teaches a CS principle CS50 hammers: **logic errors are harder to find than syntax errors** because there is no error message to guide you. A student who writes `2^10` to mean "2 to the power 10" gets `8` and silence. At this stage, they have no debugger instinct for "wrong answer with no traceback" — this exercise builds it. The plan is right to include it; c1.js does not.

Similarly, the `-2**2` example demonstrates that `**` binds tighter than unary minus — so `-2**2` is `-(2**2) = -4`, not `(-2)**2 = 4`. This surprises even adults. It is a one-line worked example that earns its place.

**Verified:** `2^10 = 8` (Python XOR, not power). `2^8 = 10` (the quiz uses this example; both are internally consistent). `-2**2 = -4`. All correct.

**Fix:** Add the `^` vs `**` worked example to c1s4 as a "debug exercise" with the explicit framing: "This code runs without error but gives the wrong answer — the hardest kind of bug." Add the `-2**2` vs `(-2)**2` worked example to the precedence subsection.

---

### 5. [MAJOR] c1.js vs. plan — `sep` and `end` absent from Lesson 1.1; comments demoted to an aside

The plan assigns `sep` and `end` to 1.1 as owned concepts with a specific exercise (print three words on one line separated by slashes). These are not exotic features — `sep` and `end` are core `print` parameters that students will encounter in real code and in their own debugging of multi-line vs. single-line output. The c1.js 1.1 lesson covers `print` well but stops after multi-arg spacing.

Comments are listed as a 1.1 subsection in the plan but appear only as a brief aside inside c1.js 1.3's text block. The plan is right to give comments their own page in 1.1 — a student who starts writing code immediately wants to know how to leave notes for themselves, and the exercises in 1.1 already use inline comments in the worked examples without explaining what `#` means.

**Fix:** Add a `sep`/`end` subsection to c1s1. Add a comments subsection to c1s1 (one page, one worked example, one exercise) rather than a buried sentence in 1.3.

---

### 6. [MINOR] Plan's rung sequencing in Lesson 1.1 is correct; c1.js execution matches the plan well

The plan specifies rungs 1 → 4 → 5 → 6 for Lesson 1.1. The c1.js delivers: rung 1 (predict), rung 4 (fix `print(Hello)`), rung 6 (write three-line greeting). No rung 5 (complete) appears, skipping straight to 6 — this is fine at this scale, but if a student finds the rung-4 → rung-6 jump steep, a complete exercise (stub with one missing print call) would bridge it. Low priority; the exercises work.

---

### 7. [MINOR] Plan's Chapter Quiz `^` question is internally consistent but uses a different example than Lesson 1.4

The plan's Lesson 1.4 debug exercise uses `2^10` (result: 8). The Chapter Quiz uses `2^8` (result: 10). Both are correct Python XOR. Using a different number in the quiz than in the lesson is intentional and good — students should generalize the principle, not recall a memorized result. No change needed. I note it here because a hasty author might flag it as an error.

---

### 8. [MINOR] Plan's warm-up for 1.5 refers to `"go" * 3` from 1.2

The warm-up for Lesson 1.5 asks: "what does `'go' * 3` give?" This is a retrieval question from 1.2, where `str * int` repetition was introduced as part of the type-dependent operators discussion. The recall is well-placed — it anchors the lesson before strings deepen. The written c1.js 1.2 does teach `"ab" * 3` explicitly, so the retrieval target exists. No issue.

---

## Continuity notes

**What c1–c3 is well-woven in the plan:** The concept map is explicit and correctly ordered. Every lesson's warm-up traces back to a specific earlier lesson. The stepper is introduced at 1.2 and used persistently through 1.3 (variable table) and 1.4 (precedence tracing). The 1.6 mini-project requires integration of everything from 1.1–1.5. Ch.2 opens with `bool` and comparison, which correctly builds on the type knowledge owned in 1.2.

**Missing from c1.js that Ch.2 depends on:**
- Truthiness (c1.js skips it; Ch.2's `if` and `while` use it immediately)
- f-strings (Ch.2's error messages and output examples in c2.js use f-strings; students have no reference if c1.js never taught them)
- `:.2f` (appears as a "known" pattern in several c2.js and c3.js examples — students have not been taught it if c1.js is their reference)

**Re-taught by accident:** None. The plan is disciplined about recall vs. re-teaching. Ch.2 correctly marks Ch.1 concepts as recalled, not re-taught.

**Concepts appearing early (low-floor encounters, not problems):** The plan's 1.5 introduces lists as a return-value of `.split()` without teaching lists — this is explicitly noted as "Ch.4 owns them fully." That is the right call. A student seeing `["hello", "chapter"]` in the output of `.split()` is primed for Ch.4, not confused, because the plan explains what they are seeing at that moment.

---

## What's strong

- **The HTTLACS ordering is correctly applied and explained.** Values before variables, operators before strings-deep, `input()` last as the payoff for type conversion — this is the right sequence, and the plan articulates the dependency chain clearly. This is the architecture decision that makes or breaks a first chapter, and it is sound.

- **The `%` operator explanation in Lesson 1.4 is the best treatment of modulus I have seen at this level.** Naming it "clock arithmetic," giving the even/odd use case and the cycling/colour-picker use case, and connecting it explicitly to upcoming loop work — that turns an operator that looks useless into the one students will remember and reach for first. This is exactly the "why does this exist?" framing that CS50 prizes.

- **The misconception tables are precise and actionable.** The plan correctly distinguishes `:.2f` (always shows trailing zeros) from `round(n, 2)` (may omit them), names the `int()` truncation vs. rounding confusion, and flags the `input()` repetition-not-multiplication trap (typing `"5" * 365` gives a string of 365 fives). Each misconception maps to a specific exercise type. This is how you build a hint ladder that actually helps.
