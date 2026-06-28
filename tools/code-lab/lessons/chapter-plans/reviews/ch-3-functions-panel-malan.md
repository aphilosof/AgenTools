# Panel Review — Ch.3 Functions — David Malan (CS50)
**Verdict:** Solid

---

## Findings (from my lens)

### 1. [MINOR] ch-3-functions.md (plan) vs c3.js (actual) — plan is superseded in several places

The plan is the document under review, but the actual lessons in c3.js diverge from it significantly and are largely better. The plan describes c3.6 and c3.7 as turtle/sound strand applications. The actual code adds c3.8 ("Functions in the Wild" — string iteration, palindrome, FizzBuzz) and c3.9 ("Art and Music" capstone), neither of which appears in the plan at all. The plan's concept map ends at 3.7; the actual chapter has 10 lessons (c3s0–c3s9). This review covers both, noting where the plan falls short of the implementation.

---

### 2. [MAJOR] Plan 3.3 — `is_prime` exercise at rung 6 is the steepest jump in the chapter

The plan places `is_prime` at rung 6 (blank editor, no starter) in Lesson 3.3. This is the third concept lesson. By that point the student has only seen parameterised functions with arithmetic (3.2) and the fruitful/void distinction (3.3 worked examples). The `is_prime` exercise demands: guard clause, for loop, modulo operator, early return, range boundary reasoning, and the Boolean return pattern — all composed from scratch.

The actual c3.js implementation (line 406) improves on this: it gives a starter with the function signature and five print test calls, reducing cognitive load. But even so, this exercise is the hardest rung 6 in the chapter and it appears at lesson 3 of 10. In CS50, we never put the hardest problem set question inside week 2 — the capstone belongs at the end. **Recommendation:** move `is_prime` to the Chapter Challenge (item 4 in the plan already lists `is_leap_year`, which has the same structure). Replace the 3.3 rung 6 with a simpler blank-editor exercise such as `is_even(n)` + `is_odd(n)` returning booleans. The `is_prime` payoff is real; the difficulty cliff at lesson 3 is the problem.

**Verified:** `is_prime` logic is correct in the implementation. `range(2, 2)` is empty so `is_prime(2)` correctly returns `True`. All five test cases in the plan check out.

---

### 3. [MAJOR] Plan 3.0 Hook — the hook has no "aha" moment for functions specifically

The plan's Hook lesson motivates `def` correctly through the DRY principle (copy-paste trap). The actual c3s0 implementation is faithful and good. However, the plan describes the sound strand example (`play_motif()`) as an option but the actual lesson drops it entirely. More importantly, neither the plan nor the actual hook presents a moment where the student viscerally *feels* the power of calling a function to make something happen — there is no immediate payoff beyond output manipulation.

In CS50 Week 1 we run a working program first, before any syntax lecture. The student at this age needs to see something delightful happen by calling a function before reading about how functions work. The plan's "calorie calculator" and "two-note motif" ideas in the Hook are good but they are listed as "worked-example ideas," not as a delivered hook experience. The actual hook exercise sequence (predict → parsons → modify) is correct, but the hook's content is administrative (cheers and banners) rather than motivating. **Recommendation:** the hook should open with a visual or musical result — `draw_snowflake()` or `play_bassline()` already defined — where the student calls it three times with different arguments and sees/hears three different results. The payoff of parameterisation is the hook. DRY is the explanation, not the experience.

---

### 4. [MINOR] Plan 3.4 — scope lesson strand is "words" but this is invisible in the plan

The plan lists strand as "numbers (tax calculator)" but c3s4 (actual) is strand "words" (`make_upper`, `make_lower`, `is_match`, `clean`). The actual choice is pedagogically superior: string methods (`.upper()`, `.lower()`, `.strip()`) are already known from Ch.1 and have no arithmetic complexity, so scope can be the only new cognitive load. The plan's tax-rate example introduces a real number constant (`TAX_RATE = 0.08`) and discount logic simultaneously with scope, which is a higher working-memory cost. The actual implementation is the right call.

---

### 5. [MINOR] Plan 3.4 — `global` keyword gets a full explanation; this is correct but the placement in the plan is ambiguous

The plan says "`global` is struck from the curriculum entirely — local-vs-outer (read only) is enough." Yet the actual c3s4 lesson (line 484) has a full text block explaining `global` — what it does, and exactly why professionals never use it. This is the right move: you cannot teach "don't do X" without showing X. The plan's wording ("struck from the curriculum") could be misread as "don't mention it." The plan should clarify: "`global` is shown in order to be refused, not taught as a tool." The implementation already does this correctly.

---

### 6. [MINOR] Plan 3.7 — tip-splitter exercise uses a list literal before lists are taught

The plan (line 308, Chapter Challenge item 7) specifies `items = [10.00, 15.50, 8.75]` and notes "no `input` loop — list accumulation is Ch.4." This is a correct deferral decision. The actual c3s7 (bassline lesson) does not include the tip-splitter as an embedded exercise — it is described in the plan but does not appear in the implemented lesson. The Chapter Challenge (not yet implemented in c3.js) carries this exercise. As long as the list literal `[10.00, 15.50, 8.75]` is provided to the student as a given constant with a clear note "we'll learn how to build lists like this in Chapter 4," the early use is appropriate (low-floor encounter, not a gap). Flag for implementation: add that note explicitly in the exercise prompt.

---

### 7. [MINOR] Plan 3.5 — "evaluated once at definition time" claim is accurate but incomplete for the course's own mutable-default deferral

The plan notes the mutable-default trap is deferred to Ch.4 and demonstrates it with a tuple default `pattern=(1,1,5,5)` in 3.7, calling it safe because tuples are immutable. **Verified:** the tuple default is the same object on every call (`b1 is b2` is `True`). The plan correctly explains the safety. However, the plan's Lesson 3.5 exercises do not include any worked example or exercise that provokes the student's intuition that defaults might change between calls. Without that moment of "wait, does it reset?", the rule "evaluated once" is abstract. **Recommendation:** add one predict exercise: `def counter(n, seen=[]):` — show that this is the anti-pattern, explain why tuples are used instead, and connect it to the Ch.4 deferral. This takes two sentences and one example; it does not require full teaching of the trap.

---

### 8. [BLOCKER] Plan — no warm-up section is specified for any lesson

CURRICULUM-STRUCTURE.md §B mandates: "Warm-up — a quick recall question from an earlier lesson (spiral / retrieval)" as the first element of every lesson. The chapter plan specifies "Recalls" metadata per lesson but does not describe a warm-up exercise structure for any lesson. The actual c3.js implementation also lacks explicit warm-up subsections (the lesson content arrays start directly with concept text). This is a structural omission against the locked spec.

This is a plan-level gap: every lesson plan should describe a specific warm-up — the exact prior concept recalled and one predict/short-answer question — before the concept pages. The implementation needs the same fix. Example for 3.3: "Warm-up: call `double(n)` from Lesson 3.2 with three values and predict the output before running." The spiral retrieval requirement is non-negotiable per the locked structure.

---

### 9. [MINOR] c3s8 "Functions in the Wild" — string iteration appears here without a warm-up recall of Ch.1 string indexing/slicing

c3s8 (actual, not in the plan) introduces `for char in text:` and `char in "aeiou"` (membership test). Ch.1 c1s5 taught string indexing, slicing, `.lower()`, `.upper()`, `.strip()`, `split`, `join`. String iteration as `for char in text:` was not in the Ch.2 for-loop lesson (c2s5 covers `for i in range(n):`). The first time a student iterates over a string by character is here in 3.8. The actual lesson handles this well — it explicitly explains "strings are sequences too" and compares `for char in text:` against `for i in range(len(text)): text[i]`. No blocker; the scaffolding is correct. But the plan doesn't document this lesson at all, which means the plan is incomplete relative to the implementation.

---

### 10. [MINOR] Plan — Chapter Challenge item 8 ("design stretch") has no checker description

Item 8 in the Chapter Challenge is "checked only for structure (three `def`s, one calling another, docstrings present), not for specific output." This requires a structural AST checker, not an output checker. The plan does not describe how this would be implemented in the harness. This needs a note in the plan: "check via `ast.walk` for FunctionDef count ≥ 3, at least one body whose first node is an Expr(Constant(...)), at least one Call referencing a name that is also a FunctionDef in the module." Without specifying this, the implementation will be guessed.

---

## Continuity notes

**Well-woven (recall correctly handled):**
- `for`, `range`, `%`, `if/elif/else` from Ch.2 are used heavily throughout Ch.3 without re-teaching. `is_prime` in 3.3 correctly recalls all three. The accumulator pattern (`total = 0; total += i`) is recalled explicitly in 3.3 with a bridge sentence ("In Chapter 2 you learned the accumulator pattern"). This is the right technique.
- String methods from Ch.1 (`.upper()`, `.lower()`, `.strip()`) appear naturally in 3.4 (`make_upper`, `make_lower`) and 3.8 (`clean`). The Ch.1 recall is correct — these are used, not re-taught.
- f-strings with `:.2f` from Ch.1 appear in 3.7's tip-splitter. Recall is flagged explicitly in the plan.
- DRY (introduced informally in Ch.1's print-repetition discussion) is named here as a CS principle and given its formal name for the first time. Good spiral ownership.

**Missing recall:**
- `while` loops (Ch.2 c2s4) are not recalled anywhere in Ch.3. The `digit_sum` exercise in c3s8 uses a `while n > 0:` loop — the only `while` in the chapter — but it appears without a warm-up that fires the while-loop mental model. A predict-the-output warm-up using `while` would reinforce the Ch.2 concept before students encounter it inside a function body.
- `try/except` from Ch.2 c2s8 is completely absent from Ch.3. Given that Ch.3 introduces fruitful functions, a natural spiral would be: "what happens if `int(input(...))` raises a `ValueError` inside a function — does `except` catch it?" This could appear in 3.5 (default args, which often wrap `input`) or as one exercise in the Chapter Challenge. Currently the two concepts exist in isolation.

**Re-taught by accident:**
- None found. The plan is clean on re-teaching. The c3s1 lesson references DRY but attributes it to Ch.1 correctly and extends rather than re-explains.

---

## What's strong

- **The `print` vs `return` distinction is the best single-lesson teaching in the chapter.** c3s3 opens with a side-by-side comparison, names the failure mode ("the print-not-return bug"), shows the exact `TypeError: unsupported operand type(s) for +: 'NoneType' and 'int'` error, and drills it with a fix exercise before moving on. This is exactly how CS50 handles the most common beginner mistake — name it, show the failure, fix it, move on. Students who see this once almost never make it again.

- **The scope lesson's `global` refusal is pedagogically courageous and correct.** Rather than simply not mentioning `global`, c3s4 shows it working and then explains in plain language why professionals never use it. This is the right move: students who don't see the anti-pattern will discover it themselves, use it, and build bad habits. Showing it in order to refuse it inoculates.

- **The song hierarchy framing in 3.7 (`beat → verse → song`) is the best concrete example of decomposition in the chapter.** It makes the CS principle of "each function has one job" tangible through a domain students find engaging. The parameterisation-as-transposition analogy ("`verse(60)` and `verse(65)` play the same shape in different keys") is a genuine "aha" moment: mathematical and musical insight at once. This is what CS50's pset themes are designed to do — meet students in a domain they care about.
