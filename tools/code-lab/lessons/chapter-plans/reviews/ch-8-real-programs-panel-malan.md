# Panel Review — Ch.8 Real Programs — David Malan (CS50)
**Verdict:** Solid

---

## Findings (from my lens)

### 1. [MAJOR] 8.1 Hook — the hook's aha-moment is named but not designed

The hook lesson runs a 60-line program and lets students modify and break it. That is the right instinct — CS50's Problem Set 0 does the same thing with Scratch. But the misconception being targeted — "Real programs are just one long script" / "I can't write something like this" — is the emotional core of the lesson, and the plan never designs the moment that defeats it.

In CS50 we engineer the aha explicitly. Before students run the program, we show them the 60 lines and say: "This looks like a lot. But it is only six things you already know." Then we point to each piece with a label. The student looks at 60 lines, recognises every single construct, and the fear collapses.

The plan says "run a fully working 60-line program; observe and tinker." That is Rung 3 (Modify) pedagogy but it skips the Predict step (Rung 1). Before the first run, there should be a deliberate Predict exercise: label every major block in the code with the concept from Ch.1–7 that it uses. That exercise does the demolition of "I can't write something like this" — the student does it themselves by naming all the pieces.

**Fix:** Add an explicit annotation step before the first run in 8.1. Something like: "Before running this, read the first 20 lines and write the Ch.1–7 concept next to each block." That is the hook doing its job.

---

### 2. [MAJOR] 8.2 Design lesson — the cliff between "stubs given" and "design from spec" is invisible

The rung arc goes: Fix / Complete in 8.2 (stubs given), then Write in 8.3–8.5 (one exercise each), then Write from scratch for every sub-project in 8.6. That is a large jump. Between "I was given the stubs" and "I design from a blank editor", there is a missing intermediate step that CS50 calls "tracing the design backwards."

In CS50, when we ask students to design their own program, we first model the thinking explicitly — not just show them a worked example of code, but show the design *process* out loud: "Step 1: I read the spec and underline every noun (that is data) and every verb (that is a function)." The plan's 8.2 has a worked-example of a temperature converter going from spec to stubs, which is correct. But the design exercises ask students to "produce a data structure + function name list" without first modeling how to extract data/functions from prose.

The fix is structural, not a blocker for this plan, but it needs a flag: the 8.2 "Write" exercise (produce function names from a four-sentence spec) is the hardest exercise in 8.2 and should not be the last one in a quiet corner. It should have a model-think-aloud moment immediately before it — a mini worked example showing *how to read a spec for nouns and verbs* — then the student does it immediately after.

**Fix:** Add a brief explicit model of "underline nouns → data; underline verbs → functions" before the final Write exercise in 8.2. One paragraph and one annotated spec example. This is the micro-skill the strand projects in 8.6 depend on.

---

### 3. [MINOR] 8.5 Testing — one exercise teaches the wrong lesson

Exercise 1 of 8.5 (Fix / Rung 4) states: "A `def test_reverse()` function has one `assert` that passes and one that fails because **the expected value is wrong in the assert, not in the function** — read the `AssertionError`, correct the test expectation, not the function."

This exercise teaches students that test code can be wrong. That is a real and valid idea — but it is the wrong lesson to start with when testing is being introduced for the first time. The first skill students need with `assert` is: "my function is wrong and the assert found it." Teaching "the assert itself can be wrong" in exercise 1 muddies the water. When a student sees a failing assert in real life, their first reflex should be "my function is wrong" — not "maybe my test is wrong." You are pre-loading the excuse they will use to dismiss failing tests.

In CS50 we deliberate carefully about which lesson we want the first exercise to teach. This one teaches the wrong default reflex.

**Fix:** Swap the order. Exercise 1 should have a broken function that the assert catches correctly. Exercise 2 or 3 (after the student has the "assert finds function bugs" reflex established) can introduce the "sometimes the expected value is wrong" case.

---

### 4. [MINOR] 8.6 Strand projects — no explicit reminder of the design step

The 8.6 sub-projects are Rung 6 (Write from scratch). The misconception list correctly names "putting all logic in one function; skipping the planning step." But the structure of the sub-project gives a spec and jumps to the blank editor. Between those two, there is no scaffolded checkpoint that forces the student to do the 8.2 design step before writing code.

In CS50 Problem Sets, the "Getting Started" section always includes a planning checklist before students write a single line. Something like: "Before coding, write down: (1) the data structures you will use; (2) the functions you will write; (3) what each function returns." It takes three minutes and it halves the number of students who write one long function.

**Fix:** Add a required pre-coding checkpoint to each 8.6 sub-project: "Before writing any code, state your functions and your data structure in a comment block. Your program must have at least three functions." This is not scaffolding that takes away difficulty — it is the design habit the chapter exists to teach.

---

### 5. [MINOR] 8.3 `except ... as e` exercise — f-string used without being taught

The 8.3 exercise asks the student to "fill in the except branch to print `f\"No score for {e}\"`." This is the first time an f-string appears as a required *output* (not as a worked example) in any lesson, yet f-strings are listed in CURRICULUM-STRUCTURE §D as owned by Ch.1 and the written lessons (c1.js, c2.js, c3.js) do not contain a single f-string lesson. There is one throwaway f-string example in c2s5 (Lesson 2.5, for-loop section) but it is incidental — the concept is never taught, explained, or exercised.

This is not a blocker for the exercise — the student can use `print("No score for", e)` instead — but the exercise should not specify `f"..."` syntax as the required solution if f-strings have not been taught. Either (a) change the exercise to use `print("No score for", e)` or (b) note that f-strings were introduced as a micro-concept somewhere earlier and point to where.

**Verification:** Searched c1.js, c2.js, c3.js for f-string patterns. c1.js and c3.js contain zero f-string instances. c2.js contains one instance (line 617) used as a comment label in a worked example, not as a taught concept.

---

### 6. [MINOR] 8.3 — `finally` gets introduced but no exercise uses it

`finally` is listed as an owned concept and appears in the worked-example ideas. But scanning all six exercises in 8.3, none requires the student to write or complete a `finally` block. It is taught but not practiced. A concept without an exercise is a concept students will not consolidate.

This is particularly visible through the CS50 lens: we always ask "what can the student do after this lesson that they could not do before?" For `finally`, after 8.3 the answer is "nothing they were asked to demonstrate." The lesson owns the concept but the exercises do not land it.

**Fix:** One of the 8.3 exercises should require a `finally` block — even a simple one. The simplest slot: convert the "safe divider" Write exercise (currently just `try`/`except`) into a `try`/`except`/`finally` where `finally` prints "Calculation complete." regardless of outcome. That is three lines of change and it gives `finally` a real exercise home.

---

## Continuity notes

**Well-woven from c1–c3:**

- `while True` + `break` input loop in 8.3 directly recalls c2s4 (Lesson 2.4) and c2s8 (try/except), where the pattern is fully established. This is the cleanest spiral in the chapter — the student has seen it before and the plan correctly marks it as "recalled, not re-taught."
- `try`/`except ValueError` is taught in c2s8 at production depth (EAFP, bare-except danger, bulletproof-input pattern, multiple except blocks). Chapter 8 correctly extends this rather than repeating it — adding `else`, `finally`, `raise`, `except ... as e`. The spiral is tight.
- `def`, `return`, docstrings recalled in 8.2 are all genuinely taught in c3s0–c3s5 at depth. The accumulator pattern, scope, and composition are all live.
- String methods (`.lower()`, `.strip()`, `.split()`) recalled in 8.6a are taught in c1s5 and used in c2s8 and c3. They are correctly marked "recalled from Ch.1."

**Gap — f-strings:**

The plan assumes f-strings as a usable tool (8.3 exercise, 8.6 strand projects). CURRICULUM-STRUCTURE §D lists them as "Ch.1." But the written c1.js does not teach them. If f-strings remain in the 8.3 exercise without being taught earlier, this needs either a teaching moment in an intervening chapter (Ch.4 or Ch.5 are the natural homes — both have worked-example code that would benefit from them) or the 8.3 exercise should use string concatenation or `print(a, b)` syntax instead.

**Not re-taught (correctly):**

- `for` loops, `if/else`, dict iteration — recalled and applied, not explained again.
- `def` / `return` — 8.2 uses functions throughout without re-teaching the syntax.
- `.get()` for dict accumulation in 8.6a — recalls Ch.4 without re-teaching.

---

## What's strong

- **The teaching order at chapter scale is correct.** Design → robustness → shorthand → testing → projects is the PRIMM arc (Predict→Run→Investigate→Modify→Make) applied to the whole chapter. A student who comes to 8.6 having done 8.1–8.5 has every tool they need. I have never seen a self-paced course for this age group get that architecture right; most jump straight to projects and wonder why students flounder.

- **The `try/except` coverage is genuinely thorough.** All four clauses — `except`, `else`, `finally`, `raise` — are owned and exercised. The `while True` + `try` + `break` pattern for bulletproof input is correctly identified as the canonical Python idiom and given its own worked example. The misconception catalog (bare `except:`, too much code in `try`, `else` runs when exception *is* caught) is exactly right. This is better exception-handling pedagogy than most intro courses aimed at adults.

- **The strand projects are properly from-scratch.** Each 8.6 sub-project gives a different, shorter worked example to read first (character frequency ≠ word frequency; rainfall ≠ step counts), then a blank editor. That is the right boundary — inspiration without a template. Students who use the worked example as a starting point will fail the spec. Students who design fresh will succeed. That is a well-set challenge.
