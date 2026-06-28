# Chapter 2 — Decisions and Loops

## Overview

Chapter 2 takes the learner from a chapter of sequential code (Ch.1) into a chapter
of branching and repetition — the two structural ideas that make programs
interesting. It is also the chapter where **debugging becomes a named, recurring
skill rather than an incidental fix**: every lesson has at least one fix/spot
exercise, and L2.6 is a full debugging lesson with a three-step protocol (read
the error → locate the line → understand why).

By the end of Chapter 2 the learner can:
- Evaluate any comparison or boolean expression by hand and say whether it is
  `True` or `False`.
- Write an `if`/`elif`/`else` chain that branches on a computed condition.
- Write a `while` loop with a proper stopping condition and recognise an infinite
  loop before it hangs the tab.
- Write a `for`/`range` loop for a known count, and choose which loop type fits
  a given problem.
- Use `break` and `continue` to alter loop flow.
- Write and trace simple nested loops.
- Read an `IndentationError` traceback, find the actual wrong line, and fix it.
- Handle exceptions with `try`/`except` and write bulletproof validated input.
- Apply loops to two strands: turtle spirals (plot) and a four-on-the-floor
  kick pattern (sound).

Through-line: **"The computer does exactly what you tell it — but now you get to
tell it to check, choose, and repeat."** Every lesson returns to this framing and
shows how the same idea that hangs a tab (an infinite loop) is also the engine
behind every interesting program.

Strands: numbers · words · plot · sound.
Rung range: 1–6, with rungs 1–3 dominant in L2.1–L2.2 and rungs 4–6 dominant
from L2.3 onward. Write-from-scratch (rung 6) appears first in L2.3 and is the
default by L2.5–L2.9.

**Lesson count:** 9 (L2.1–L2.9). The chapter plan was written for 7 lessons;
L2.8 (try/except) and L2.9 (Art and Music Capstone) were added during
implementation and are fully documented below.

---

## Concepts owned (keywords)

- **comparison operators** — `==`, `!=`, `<`, `>`, `<=`, `>=`; each returns a `bool`
- **boolean operators** — `and`, `or`, `not`; short-circuit evaluation; precedence;
  `and`/`or` return an operand (not always a `bool`); `not` always returns a `bool`
- **truthiness** — what Python counts as truthy or falsy; falsy: `0`, `0.0`, `""`,
  `None`, `[]`, `{}`, `()` — values that mean "empty or nothing"; everything else is
  truthy (full list expanded in Ch.4 when collections are introduced)
- **`if` / `elif` / `else`** — branching; exactly one branch executes; colon + indented block
- **indentation / block** — Python uses whitespace to delimit code blocks; `IndentationError`
- **`while`** — indefinite iteration; programmer owns: initialise, test, update
- **augmented assignment** — `+=`, `-=`, `*=`, `/=`, `//=`; shorthand for
  `x = x op value`; note `/=` yields a `float` — use `//=` when an integer is required
- **accumulator pattern** — a variable initialised before a loop, updated inside it,
  read after; the standard way to build a running total or collect results
- **`for` / `range()`** — definite iteration over a sequence; `range(stop)`, `range(start, stop)`, `range(start, stop, step)`; endpoint not included
- **`break`** — exit the innermost loop immediately
- **`continue`** — skip the rest of the current iteration, jump back to the condition check
- **nested loops** — a loop inside a loop; inner runs to completion on each outer iteration
- **infinite loop** — a `while` whose condition never becomes `False`; recovery: stop & re-run
- **IndentationError** — the error class for wrong or inconsistent block indentation
- **`_` (throwaway variable convention)** — idiomatic name for a loop variable whose value is not used in the body (style, not a language rule; introduced in L2.7)
- **`try` / `except`** — structured exception handling; `try` block attempts risky code;
  named `except` blocks handle specific exception classes; always name the class
- **EAFP vs. LBYL** — Python's "Easier to Ask Forgiveness than Permission" style
  versus "Look Before You Leap" pre-checking; EAFP keeps the happy path clean
- **`ValueError`** — raised when a function receives the right type but an invalid value
  (e.g. `int("hello")`)
- **`ZeroDivisionError`** — raised when dividing by zero

---

## Concept map & dependencies

```
Ch.1 foundations (recalled, not re-taught)
    int, float, str, bool, None  ─────────────────────────────────┐
    variables + assignment ────────────────────────────────────────┤
    print + expressions ───────────────────────────────────────────┤
    comparison values (True/False) ── first met in Ch.1 as a type ─┘
         │
         ▼
L2.1  comparison operators ── returns bool ──► truthiness (deeper)
         │                                          │
         ▼                                          ▼
L2.1  boolean ops (and/or/not) ◄──────── truthiness feeds `and`/`or`
         │          └── and/or return an operand, not always a bool
         ▼
L2.2  if / else ── block + indentation (IndentationError introduced)
         │
         ▼
L2.3  elif ── extends if/else to multi-way; reuses comparison + bool ops
         │
         ▼
L2.4  while ── indefinite iteration; augmented assignment; accumulator pattern
         │        └── infinite-loop risk + recovery; break preview (no break exercises)
         │
         ▼
L2.5  for + range() ── definite iteration; contrast with while; break/continue here
         │               └── continue-before-update infinite-loop trap named
         │               └── nested loops previewed; full treatment moves to L2.7
         ▼
L2.6  Fix the Broken Code ── explicit debugging protocol; all error classes so far
         │
         ▼
L2.7  Strand: Loops Make Art & Beats ── for + range in plot + sound contexts
         │                               nested loops introduced in real context here
         │
         ▼
L2.8  try / except ── exception handling; EAFP; ValueError; ZeroDivisionError
         │             bulletproof input pattern (while True + try/break)
         │
         ▼
L2.9  Art and Music Capstone ── applies all Ch.2 concepts in plot + sound
         │
         ▼
     Chapter Challenge + Quiz
```

Recalls from Ch.1: types (int, float, str, bool), variables and reassignment,
`print`, expressions and arithmetic, `input()` → str → convert. These are
woven into examples and exercises without re-teaching.

---

## Lessons

### L2.1 — True, False, and Comparison *(hook · numbers strand · rungs 1–2)*

**Arc role (hook):** Run a short two-branch program live and modify its
condition; students see branching behaviour before any syntax is explained.
Then deepen the bool type already met in Ch.1. Land comparison operators as
expressions that return `True` or `False`. Introduce `and`/`or`/`not` and
truthiness. Motivate the whole chapter: "A condition is just an expression —
and we can branch or repeat on any expression."

**Concepts:** comparison operators, boolean operators, truthiness.

**Warm-up (required — CURRICULUM-STRUCTURE.md §B):** One predict-the-output
question recalling Ch.1: "What does `type(True)` print?" (Answer: `<class 'bool'>`.)
This anchors that `bool` is a type before the lesson uses it as a return value.

**Worked-example ideas:**
1. *(easy)* Six comparison expressions listed; student predicts each result
   (`3 < 5` → `True`, `"a" == "b"` → `False`, etc.). Stepper shows the bool
   value. Reuses: Ch.1 types.
2. *(medium)* Compound condition: `age >= 13 and age < 18`; trace with two
   different `age` values (12 and 15). Introduce short-circuit: if `age >= 13`
   is `False`, Python never checks the right side.
3. *(harder)* Truthiness: `bool(0)`, `bool("")`, `bool(None)`, `bool(42)` — recall
   from Ch.1 that `bool()` converts any value; now establish the rule. Add a brief
   note: "At this point in the course, the falsy values you need to know are `0`,
   `""`, and `None`. In Chapter 4 you will meet others, like empty lists (`[]`).
   Everything else is truthy." Do NOT state "exactly three falsy values" — that is
   factually wrong (verified: `0.0`, `[]`, `{}`, `()` are also falsy).
4. *(harder)* `and`/`or` returning operands — two runnable lines with one sentence
   of explanation: `print(0 and "hello")` → `0`; `print("" or 42)` → `42`. "and
   and or return one of their operands — whichever one determined the result — not
   a new True or False. `not` is different: it always returns a `bool`." This must
   be a runnable example students can see fire, not just a Codex note.

**Exercise ideas (scaffolding fade):**
1. *(easy — rung 1, predict)* Six expressions, predict-the-output one at a time
   before running. Includes `"7" == 7` → `False` (type matters — recall Ch.1).
2. *(medium — rung 2, arrange Parsons)* Four boolean sub-expressions scrambled;
   student arranges them so the compound condition correctly selects numbers
   between 10 and 20 (inclusive endpoints).
3. *(medium — rung 4, fix)* Give code that uses `if x == 1 or 2:` and ask why it
   always prints "match" even when `x` is 99. Student identifies the trap (`2` is
   a standalone truthy literal, not a comparison) and fixes it to `if x == 1 or x == 2:`.
4. *(hard — rung 4, fix)* `if x = 5:` — `SyntaxError` because `=` is not `==`.
   Student reads the error message (Python 3 says "invalid syntax. Maybe you meant
   '==' or ':=' instead of '='?" — verified with python3), identifies the line,
   changes `=` to `==`. *(First `SyntaxError` from a comparison context — explicitly
   named and added to Codex. Use the actual Python 3 message, not "cannot assign
   to literal.")*

**Misconceptions:**
- `=` and `==` are interchangeable — the most-cited beginner error (Think Python
  §5.2; HTTLACS §5.1). Python 3 error message: "invalid syntax. Maybe you meant
  '==' or ':=' instead of '='?" (verified — use this exact wording).
- `if x == 1 or 2:` tests both values — it does not; `2` is a standalone truthy
  literal (HTTLACS §5.2). Now has a dedicated fix exercise.
- `and`/`or` always return `True` or `False` — they return an operand (whichever
  determined the result). `not` is the exception: it always returns a `bool`.
- There are "exactly three" falsy values — false; the full list includes `0.0`,
  `[]`, `{}`, `()` and more; students learn "empty/nothing means falsy" as the rule.
- `bool()` is new in this lesson — it was introduced in Ch.1; open with a recall,
  not a fresh explanation.

**Error classes:** `SyntaxError` (using `=` in a condition).

**Recalls:** `bool`, `type()`, type conversion (Ch.1 L1.2); variables (Ch.1 L1.3).

---

### L2.2 — if / else *(concept · core strand · rungs 2–4)*

**Arc role:** First branching lesson. Establish the `if`/`else` syntax, the
colon, and the indented block. Introduce `IndentationError` deliberately so
students meet it in a controlled setting with a clear fix.

**Concepts:** `if`/`else`, block/indentation, `IndentationError`.

**Warm-up (required — CURRICULUM-STRUCTURE.md §B):** One predict-the-output
question recalling L2.1: `x = 10; print(x > 5 and x < 20)`. Answer: `True`.
Connects the comparison work of L2.1 directly into the condition that L2.2 branches on.

**Worked-example ideas:**
1. *(easy)* FizzBuzz half: `if n % 2 == 0: print("even") else: print("odd")`.
   Step through with `n = 4` and `n = 7`. Show that exactly one branch runs.
   Reuses: `%` operator (Ch.1 L1.4).
2. *(medium)* Password length check: `if len(password) >= 8: print("OK") else:
   print("Too short")`. Recall `len()` from Ch.1 L1.5 — do NOT introduce it as
   new (it was taught there). Reuses: Ch.1 string type.
3. *(harder)* Show two common broken versions side by side: (a) missing colon
   → `SyntaxError`; (b) wrong indent on `else` → `IndentationError`. Both error
   messages displayed and annotated. "This is what Python means when it says this."

**Exercise ideas (scaffolding fade):**
1. *(easy — rung 3, modify)* Boilerplate `if/else` prints "hot" / "cold" for
   `temp`. Student changes the threshold value from 30 to 25 and adds `°C` to
   the string. Everything else written.
2. *(medium — rung 4, fix)* Three-line `if/else` with wrong indentation on the
   `print` inside the `if` block. Student reads the `IndentationError`, finds
   the line, fixes it.
3. *(hard — rung 5, complete)* Stub: `if ___:` and `else:` lines provided with
   empty bodies. Student fills in a condition and two `print` calls so the
   program prints "discount" for prices over 50 and "full price" otherwise.

**Misconceptions:**
- `else if` (two words, split across two lines) instead of `elif` — preview:
  does NOT crash; it is valid Python (a nested `if` inside `else`), but
  creates an extra indentation level and can mask bugs (Think Python §5.7).
- Missing colon after `if` or `else` → `SyntaxError` (addressed in worked example 3).
- Multiple independent `if` statements behave the same as `if/else` — they do
  not; all `if`s evaluate even if one matched.
- IndentationError points to the wrong line — warn: "Look at the line *before*
  where Python complains" (Think Python §5.12).

**Error classes:** `SyntaxError` (missing colon), `IndentationError`.

**Recalls:** comparison operators (L2.1); `print`, variables (Ch.1);
`len()` (Ch.1 L1.5 — recall only, not re-taught here).

---

### L2.3 — elif: Many Branches *(concept · words strand · rungs 4–6)*

**Arc role:** Extend binary branching to multi-way decisions. Contrast `elif`
chains with multiple independent `if` statements. Build the password-strength
checker (words strand) as the lesson's project.

**Concepts:** `elif`, multi-way branching, choosing between multiple `if` vs.
`if/elif/else`.

**Warm-up (required — CURRICULUM-STRUCTURE.md §B):** One predict-the-output
question recalling L2.2: give a three-line `if/else` and ask which branch fires
for a given input. Tests that students have chunked the "exactly one branch" rule
before the lesson extends it to multi-way chains.

**Worked-example ideas:**
1. *(easy)* Grade classifier: `if score >= 90: ... elif score >= 70: ... elif
   score >= 50: ... else: ...`. Trace with three different scores. Show that
   only the first matching branch runs — subsequent `elif`s are skipped.
2. *(medium)* Same logic rewritten with four independent `if` statements.
   Demonstrate with score = 95: both the `>= 90` and `>= 70` branches fire —
   the wrong behaviour. "This is why `elif` exists."
3. *(medium)* String method inside a condition — words strand hook: `if
   answer.lower() == "yes":` accepts "YES", "Yes", and "yes" without re-asking.
   Shows that conditions are expressions, and method calls are expressions.
   Reuses: Ch.1 `.lower()` (Ch.1 strings owned concept).
4. *(harder — required before rung-6 exercise)* Full-pattern worked example:
   `x = float(input("Enter a number: "))` then arithmetic, then `if/elif/else`
   chain. This must appear before the BMI exercise so students have seen all
   three sub-tasks (input conversion + arithmetic + elif chain) working together
   in a single program. Without this, the rung-6 BMI exercise applies three
   sub-tasks simultaneously from a blank editor — violating the "model exists
   before write-from-scratch" principle (expertise reversal effect, Kalyuga et al.).

**Exercise ideas (scaffolding fade):**
1. *(medium — rung 4, observe + rewrite)* A grade classifier is written with
   `else:` / `    if ...:` (two words, two lines) instead of `elif`. The code
   runs without error — but the indentation is one level deeper than an `elif`
   chain and a missing `else` on the inner `if` produces silent failure.
   Student runs it, observes the structural difference (stepper highlights the
   extra nesting level), then rewrites it using `elif`. Goal: `elif` is not just
   shorter — it flattens the chain and makes "exactly one branch" explicit.
2. *(medium — rung 5, complete)* Stub password-strength checker: condition
   thresholds and branch labels given, but conditions blank. Student writes the
   three `elif` conditions (`len < 6`, `len < 10`, `else`) and the print strings.
3. *(hard — rung 6, write)* Blank editor. "Write a BMI classifier: read weight
   and height from input, compute BMI, print 'underweight'/'healthy'/'overweight'/
   'obese'." Reuses: `input()`, `float()`, arithmetic (Ch.1). This exercise is
   appropriate at rung 6 only because worked example 4 above shows the complete
   pattern first.

**Misconceptions:**
- `elif` is just shorthand — students may not see why it matters until the
  multi-`if` demo makes the wrong-behaviour case concrete.
- The order of `elif` clauses matters — a `>= 50` check before `>= 90` will
  swallow all high scores.
- Forgetting `else` means no output if no condition matches — silent failure.

**Error classes:** `SyntaxError` (missing colon after `elif` or `else`).
  Note: `else:` followed by `    if ...:` (two lines) is NOT a SyntaxError —
  it is a legal nested `if` inside `else`; the exercise exploits this.

**Recalls:** `if`/`else` (L2.2); `len()` (Ch.1 L1.5); `input()`, `float()` (Ch.1 L1.6);
`.lower()` and string methods (Ch.1 strings lesson).

---

### L2.4 — while Loops *(concept · numbers strand · rungs 3–6)*

> **Density note:** This is the densest lesson in the chapter. It introduces
> augmented assignment, the three-responsibility model, infinite loops, and the
> accumulator pattern in sequence. Sequence the lesson in the order below —
> hook (countdown) first, then augmented assignment as "shorthand for what you
> just wrote", then accumulator, then sentinel as a motivating preview of `break`.
> Do NOT open with augmented assignment before the first loop — that kills the hook.

**Arc role:** Introduce indefinite iteration. Establish the three programmer
responsibilities (initialise, test, update). Introduce augmented assignment
(`n -= 1` etc.) motivated by the countdown. Introduce the accumulator pattern.
Show the infinite-loop risk and the stop-and-re-run recovery. End with a
motivating preview of `while True:`/`break` as a named concept — but assign
no exercises requiring `break` here (it is formally taught in L2.5).

**Concepts:** `while`, loop variable, stopping condition, infinite loop,
infinite-loop recovery, augmented assignment (`+=`, `-=`, `*=`, `//=`, `/=`),
accumulator pattern.

**Warm-up (required — CURRICULUM-STRUCTURE.md §B):** One predict-the-output
question recalling L2.3: give a four-branch `if/elif/else` chain and ask which
branch fires. Reinforces "first match wins" before the loop-condition concept
introduces a similar "test at the top of each cycle" model.

**Worked-example ideas:**
1. *(easy — hook, first)* Countdown: `n = 5; while n > 0: print(n); n = n - 1;
   print("Blastoff!")`. Stepper traces each iteration: value of `n` before the
   test, test result, which lines run. Mirrors Think Python §7.3's narrative
   framing exactly. Name the three responsibilities: initialise (`n = 5`), test
   (`n > 0`), update (`n = n - 1`). Then, *on the next screen*, introduce
   augmented assignment: "`n = n - 1` is so common Python gives it a shortcut:
   `n -= 1`." The shortcut is motivated by code the student has just written, not
   presented cold.
2. *(medium)* Accumulator pattern: `total = 0; while total < 20: total += 5;
   print(total)`. Name the pattern: "Initialise before the loop. Add inside. Read
   after." Reuses: augmented assignment just introduced; `if` not needed here.
   `/=` note: if a student writes `total /= 2` expecting an integer, they get a
   float — use `//=` when integer division is required.
3. *(medium)* Collatz sequence: `while n != 1: if n % 2 == 0: n = n // 2; else:
   n = 3 * n + 1; print(n)`. Motivates `while` over `for`: "we cannot know in
   advance how many steps it takes" (HTTLACS §7.5). Reuses: `if/else`, `%`, `//`.
4. *(harder — motivating preview, last)* Sentinel pattern: `while True: x =
   int(input(...)); if x == 0: break`. Introduce `break` here as a concept with
   a label: "Sometimes the cleanest exit condition is inside the loop, not at the
   top. `while True:` runs forever; `break` exits it the moment a condition inside
   is met. We will use `break` fully in the next lesson." This is a preview, not
   a taught exercise.

**Exercise ideas (scaffolding fade):**
1. *(easy — rung 3, modify)* Countdown boilerplate given (using `n = n - 1`).
   Student changes the start value from 5 to 10, the printed final message, and
   rewrites `n = n - 1` using augmented assignment (`n -= 1`).
2. *(medium — rung 4, fix)* `while` loop whose body never updates the counter:
   `n = 3; while n > 0: print(n)`. Student recognises the infinite loop (code
   runs forever — instructions say to click the Stop button in the engine UI,
   then re-read the code), then adds `n -= 1`.
   *(First deliberate infinite-loop exposure. Infinite-loop recovery protocol
   named and added to Codex. The tab does NOT hang — the engine's stop button
   interrupts the worker; the browser remains responsive.)*
3. *(hard — rung 6, write)* Blank editor. "Write a guessing game: pick a secret
   number (just assign it), loop until the user guesses it, print 'Too high',
   'Too low', or 'Correct!'." Use `while guess != secret:` as the exit condition
   — **do NOT use `break`** in the model solution; `break` is taught in L2.5.
   Reuses: `if/elif/else`, `input()`, `int()`.

**Misconceptions:**
- The loop condition is checked continuously mid-iteration — it is checked only
  at the top of each cycle (Think Python §7.3).
- Forgetting to update the loop variable → infinite loop (HTTLACS §7.4 names
  the three responsibilities explicitly).
- `while True:` is always wrong — it is a valid pattern when combined with `break`.
- `/=` keeps the result as an integer — it does not; `/=` yields a `float`. Use
  `//=` when integer division is required.

**Error classes:** `NameError` (loop variable not initialised before `while`);
`IndentationError` (body not indented); infinite loop (no Python error — runs until Stop is pressed).

**Recalls:** `if/elif/else` (L2.2–L2.3); arithmetic operators incl. `%`, `//` (Ch.1 L1.4);
`input()`, `int()` (Ch.1 L1.6).

---

### L2.5 — for & range *(concept · numbers strand · rungs 3–6)*

**Arc role:** Introduce definite iteration. Teach all three `range()` forms.
Contrast `for` with `while` (definite vs. indefinite). Teach `break` and
`continue` fully. Preview nested loops in one sentence; full nested-loop
teaching moves to L2.7 where they appear in real context (bar×beat structure).
This lesson does NOT teach nested loops — that was causing cognitive overload.

**Concepts:** `for`, `range(stop)`, `range(start, stop)`, `range(start, stop,
step)`, `break`, `continue`.
*(Nested loops: previewed in one sentence — "loops can be nested; you will see
this in context in L2.7." No nested-loop examples or exercises here.)*
*(`print(sep=, end=)` is not a loop concept — document it as a Codex/note
entry, not as part of this lesson's teaching arc.)*

**Warm-up (required — CURRICULUM-STRUCTURE.md §B):** One predict-the-output
question recalling L2.4: `n = 4; while n > 0: n -= 1; print(n)`. Answer: `3 2 1 0`.
Connects the L2.4 update model directly to why `for`/`range` is cleaner for
counted repetition.

**Worked-example ideas:**
1. *(easy)* Times-table printer: `n = 7; for i in range(1, 13): print(f"{n} × {i} =
   {n * i}")`. Show all three `range` forms in sequence with a small trace table:
   "range(5) gives 0 1 2 3 4 — never includes the stop value" (Python Tutorial
   §4.3; HTTLACS §7.19 flags this as the off-by-one trap). Include an f-string
   with `:.1f` for a calculated value — recalls Ch.1 f-string formatting (m13).
2. *(medium)* `break` and `continue` side by side: the same `for i in range(10)`
   loop with (a) `if i == 5: break` (exits at 5) and (b) `if i % 2 == 0:
   continue` (skips evens). Run both, compare output. "break exits the loop;
   continue skips the rest of this iteration and goes back to the top." (Python
   Tutorial §4.4.)
3. *(harder)* `continue`-before-update infinite-loop anti-pattern — explicit
   named demo: `n = 0; while n < 5: if n % 2 == 0: continue; n += 1`. Show
   that `continue` skips the `n += 1` update on every even number — infinite
   loop. Contrast with the fix: move `n += 1` to before the `continue` line.
   "If you use `continue` inside a `while` loop, make sure the update comes
   before the `continue` — otherwise `continue` skips the update and you have
   an infinite loop." This is a named, distinct anti-pattern from the
   "forgot the update entirely" infinite loop in L2.4.

**Exercise ideas (scaffolding fade):**
1. *(easy — rung 3, modify)* Boilerplate `for i in range(10): print(i)`. Student
   changes it to count down from 10 to 1 using `range(10, 0, -1)`.
2. *(medium — rung 4, fix)* Loop intended to skip multiples of 3 uses `break`
   instead of `continue` — exits on the first multiple instead of skipping it.
   Student spots the error, swaps `break` for `continue`.
3. *(medium — rung 5, choose + explain)* "Here are two problems. For each, decide
   whether `for` or `while` is better, and write one sentence explaining why —
   before writing any code." Problem A: print every even number from 2 to 20.
   Problem B: keep asking a user for a password until they type "quit". This
   practises loop-type selection before the harder write-from-scratch exercise
   (Guzdial: selection must be practised, not just encountered at the gate).
4. *(hard — rung 6, write)* Blank editor. "Write a prime checker for numbers
   2–20: for each number, check if anything divides it evenly; print the number
   if it is prime." Reuses: `%` operator, `if`, `break` (to stop testing once a
   factor is found). No nested loops — use a `for` loop over divisors with a
   boolean flag (`is_prime = True`, then check). Mirrors Python Tutorial §4.5.

**Misconceptions:**
- `range(5)` includes `5` — it does not (HTTLACS §7.19 flags this explicitly).
- `range()` returns a list — it returns a lazy sequence (supports indexing and
  `len`, but you must wrap in `list()` to see the values) (Python Tutorial §4.3).
- `break` inside a nested loop exits all loops — it exits only the innermost
  (nested loops are previewed here; the full lesson is in L2.7).
- `continue` exits the loop — it only skips the remainder of the current
  iteration.
- `continue` is always safe in `while` loops — if the update comes after
  `continue`, `continue` will skip the update on every matching iteration,
  creating an infinite loop. (Named anti-pattern; demonstrated in worked example 3.)

**Error classes:** `TypeError` if `range()` receives a non-integer; `ValueError`
if step is `0`; `IndentationError` (loop body).

**Recalls:** `while` + stopping condition, augmented assignment, accumulator (L2.4);
`if/elif/else` (L2.2–L2.3); `%` operator, f-strings with `:.1f` (Ch.1 L1.4–L1.5).

---

### L2.6 — Fix the Broken Code *(explicit debugging · core strand · rungs 1, 4)*

**Arc role:** First explicit debugging-protocol lesson. Name and practice the
three-step protocol: (1) read the error class and message; (2) go to the
indicated line and look at the line *before* it too; (3) understand *why* it
broke before changing anything. Cover all error classes met so far in Ch.2, plus
infinite-loop recovery. Introduce logic bugs as a third category distinct from
syntax errors and runtime errors — frame them clearly so "Python cannot detect
this" does not confuse students.

**Concepts:** debugging protocol (named), `IndentationError`, `SyntaxError`,
`TypeError`, `NameError`, logic bug (named), infinite-loop recovery, print debugging.

**Warm-up (required — CURRICULUM-STRUCTURE.md §B):** One predict-the-output
question recalling L2.5: `for n in range(2, 6, 2): print(n)`. Answer: `2 4`.
Tests `range(start, stop, step)` off-by-one intuition — exactly the kind of
value a debug-print session would expose.

**Worked-example ideas:**
1. *(demonstration, not a task)* A five-line program with an `IndentationError`.
   Walk through the three protocol steps on screen: (a) read — "IndentationError:
   unexpected indent"; (b) locate — the error points to line 4 but the real
   problem is line 3's missing indent; (c) understand — the `if` block ended
   before expected. Then fix. "Notice the error message pointed one line late."
2. *(demonstration)* A `while` loop with no update — runs forever. Show the
   recovery steps: click the Stop button (the engine interrupts the worker;
   the tab stays responsive), re-read the code, add the update. Trace the
   corrected version with the stepper.
3. *(demonstration)* Logic bug — distinct from Python-detected errors. Frame
   explicitly: "Python does not know what you intended to compute — it only
   knows what you told it to compute. A logic bug is a gap between your intention
   and your instruction. Python runs the code without any error; the wrong answer
   is the only clue." Use a `for` loop accumulator that accidentally resets the
   total inside the loop instead of before it. Show the wrong output, then the
   fix. (Do NOT use the `range(0)` NameError demo as originally planned — at
   module level, a previously-bound loop variable from an earlier snippet would
   persist, making the example unreliable unless wrapped in a function. The
   accumulator logic bug is unambiguous and requires no function wrapper.)
4. *(demonstration)* Print-debug technique: a loop with a wrong accumulator. Add
   a temporary `print(i, total)` inside the loop to reveal the state at each
   step. Show the output, find the bug, fix it, remove the debug print. "This is
   print debugging — the simplest tool that works."

**Exercise ideas (scaffolding fade):**
1. *(easy — rung 1, spot)* Three broken code snippets, each with a different
   error class. Student reads the error message and selects which error class it
   is from a menu. No fixing — identification only.
2. *(medium — rung 4, fix one)* A twelve-line program with one `IndentationError`.
   Student reads the traceback, locates the problem, fixes it, re-runs to verify.
3. *(medium — rung 4, print-debug)* A loop with a logic bug and a commented-out
   `# print(i, total)` inside the body. Student uncomments it, reads the output
   to find the bug (total is reset inside the loop instead of summed), fixes the
   bug, and comments the debug print back out. This practises print debugging as
   a skill, not just a concept.
4. *(hard — rung 4, fix three)* A program with three bugs (one `SyntaxError`,
   one `TypeError` from a non-integer in `range()`, one logic bug — `break`
   where `continue` was intended). Student fixes all three in sequence, verifying
   the program passes the checker after each fix.

**Misconceptions:**
- The error message always points to the exact wrong line — it does not, especially
  for `IndentationError` (Think Python §5.12).
- Fixing the first error shown is enough — other errors may hide behind the first.
- An infinite loop means the code is fundamentally broken — it usually means one
  line is wrong or missing.
- "Python said nothing went wrong" means the code is correct — a program can
  produce wrong answers without any error (logic bugs).

**Error classes (all consolidated and added to Codex here):**
`SyntaxError`, `IndentationError`, `TypeError`, `NameError`, `ValueError`
(from `range(step=0)`); infinite-loop (not an error class — a runtime hang);
logic bug (not a Python error — the program runs, but the output is wrong).

**Recalls:** every concept from L2.1–L2.5; error class introductions from Ch.1
(`TypeError`, `SyntaxError`).

---

### L2.7 — Loops Make Art & Beats *(strand application · plot + sound strands · rungs 5–6)*

**Arc role:** Apply `for`/`range` in two real strand contexts: turtle spirals
(plot) and a drum pattern (sound). Introduce nested loops here — in real context
(bar × beat grid structure) rather than as an abstract concept. Show that loops
are not just for numbers — they are for making things. Includes one open-ended
creative exercise where the structural checker accepts any valid drum pattern the
student designs.

**Concepts (applied):** `for`/`range`, loop variable as a parameter,
`_` (throwaway variable). **Newly taught here:** nested loops — a loop inside a
loop; inner runs to completion on each outer step; `break` exits only the
innermost. Context: the bar×beat structure of a drum pattern is a natural
two-dimensional grid that motivates nested loops without abstraction.

**Warm-up (required — CURRICULUM-STRUCTURE.md §B):** One predict-the-output
question recalling L2.6: give a snippet with a logic bug (wrong accumulator
placement) and ask what the output is — not what the programmer intended.
Reinforces "what you told it" vs. "what you meant."

**Worked-example ideas:**
1. *(plot — easy)* Square with a `for` loop: `for _ in range(4): forward(100);
   right(90)`. The `_` convention for a variable you don't use — named explicitly.
2. *(plot — medium)* Spiral: `for i in range(36): forward(i * 5); right(91)`.
   Loop variable `i` changes the step length each time. Use an f-string in the
   label: `f"Step {i}: moved {i * 5} px"` — recalls Ch.1 f-string formatting
   and `:.1f` style from c1s5 (m13). Student modifies angle and scale.
3. *(sound — medium)* Four-on-the-floor pattern: `for beat in range(4):
   sample(KICK); sleep(0.5)`. Then extend: add a hi-hat on every other beat
   using `if beat % 2 == 0`. Note: the engine API is `sample()`, not `play()`.
   Reuses: `if`, `%`; `sample()`/`sleep()` API from Ch.0.
4. *(sound — harder, nested loops)* Multi-bar drum grid:
   `for bar in range(4): for beat in range(4): ...`. Stepper traces: inner loop
   runs fully for each value of `bar`. Then add `if bar == 1: break` inside the
   **inner** `for beat` loop — bar 1's beats are skipped but `for bar` continues
   and bar 2 still plays. "`break` exits only the innermost loop it lives in. If
   you want to exit the outer loop too, you need a flag variable — that comes in
   Ch.3 with functions and `return`." (HTTLACS §7.22.)

**Exercise ideas (scaffolding fade):**
1. *(medium — rung 5, complete)* Spiral stub with `for` header given; student
   writes the body (two turtle calls) so the spiral opens outward.
2. *(hard — rung 6, write)* Blank editor. "Write a turtle program that draws a
   regular hexagon (6 sides, 60° each turn) using a `for` loop." No boilerplate.
3. *(hard — rung 6, write, open-ended — sound)* "Make an 8-beat drum pattern you
   would actually want to listen to. Use a `for` loop over 8 beats. Use `if` to
   choose which sounds play on which beats." Structural checker: verifies a loop
   is present, at least two different `sample()` calls appear, and the correct
   number of `sleep()` calls fire — does NOT check exact output. Students can
   design their own pattern. This is consistent with the checker architecture
   (structural, not output-matching).

**Misconceptions:**
- Loop variable must be used in the body — `_` convention shows it need not be.
- `range` starts at 1 — it starts at 0 unless told otherwise (relevant for
  beat numbering: `range(1, 17)` vs `range(16)`).
- `break` inside a nested loop exits all loops — it exits only the innermost.
- For drum sounds, `sample("kick")` etc. is correct; `play(60)` is the API
  for pitched MIDI notes — both are valid in the engine. Using `sample()` for
  a note number, or `play()` for a sample name, is the actual error.

**Error classes:** `IndentationError` (turtle body or nested loop body),
`TypeError` (wrong type passed to `sample()` or `forward()`).

**Recalls:** turtle `forward`/`right` (Ch.1 L1.7); `sample()`/`sleep()` (Ch.0
L0.1); `if`, `%`, `and`/`or` (L2.1–L2.3); f-strings with `:.1f` (Ch.1 L1.5).

---

---

### L2.8 — try and except *(concept · core strand · rungs 1–6)*

**Arc role:** Introduce structured exception handling. Contrast EAFP ("Easier
to Ask Forgiveness than Permission") with LBYL ("Look Before You Leap") —
Python's idiomatic preference for `try`/`except` over pre-checking. Warn against
bare `except:`. Build the bulletproof-input pattern that combines `while True:`
and `try`/`break` — the practical payoff. This lesson names and owns `ValueError`
and `ZeroDivisionError` as concepts; both were met as crash-causing conditions in
earlier lessons but are now handled rather than avoided.

**Concepts:** `try`/`except`, exception handling, `ValueError`, `ZeroDivisionError`,
EAFP vs. LBYL, bare `except:` danger, bulletproof input pattern.

**Warm-up (required — CURRICULUM-STRUCTURE.md §B):** One predict-the-output
question recalling L2.7: `for i in range(0, 8, 2): sample(HI_HAT); sleep(0.25)`.
"How many times does `sample(HI_HAT)` fire?" (Answer: 4 — range yields 0, 2, 4, 6.)
Keeps the `range` off-by-one intuition active before exception handling introduces
a new concept cluster.

**Worked-example ideas:**
1. *(easy)* Basic `try`/`except ValueError`: `int("hello")` crashes without try;
   wrap it and show the except block runs. Show that `print("continues")` after
   the try/except block always runs regardless.
2. *(medium)* Two except blocks (one `ValueError`, one `ZeroDivisionError`)
   below a single `try`. Change inputs to fire each branch. "Python checks except
   blocks in order and runs the first one that matches."
3. *(medium)* EAFP vs. LBYL contrast: show `.isdigit()` pre-check failing on
   `"-5"`, `"3.14"`, and `" 7"` — all valid integers that `int()` accepts but
   `.isdigit()` rejects. "The only reliable way to know if `int()` will work is
   to try it." This motivates `try`/`except` as the correct tool, not just an
   alternative.
4. *(harder)* Bare `except:` danger — show `except:` swallowing a `NameError`
   (a bug) silently. The error-handling message prints but the underlying bug
   is invisible. Contrast with named `except ValueError:`. "Always name the class
   you intend to handle. Bugs you did not anticipate should still crash loudly."
5. *(harder)* Bulletproof input pattern: `while True: / try: n = int(input()) /
   break / except ValueError: print("Try again.")`. Explain why `break` goes
   *after* `int(input())`: if `int()` raises, Python jumps to `except` and never
   reaches `break`; the loop restarts. Only when `int()` succeeds does `break`
   fire. "The exception itself is the signal: success means break, failure means
   loop again."

**Exercise ideas (scaffolding fade):**
1. *(easy — rung 1, predict)* `try: n = int("42"); print("success:", n); except ValueError: print("not a number")`. Which block runs? (Answer: the `try` block — `"42"` converts fine.)
2. *(easy — rung 3, modify)* Working try/except that prints "oops". Change the
   except message to "Enter a whole number." Everything else written.
3. *(medium — rung 4, fix)* Try/except that catches `ZeroDivisionError` for a
   call to `int("hello")` — wrong exception class. Student fixes the except line
   to `except ValueError:`.
4. *(medium — rung 5, complete)* Bulletproof-input stub: `while True:` and
   `try:/break` structure in place; except block body is `pass`. Student replaces
   `pass` with a `print` telling the user to try again.
5. *(hard — rung 6, write)* Blank editor. "Write a safe divider: read two numbers
   with `float(input())`, divide the first by the second, print the result. Handle
   `ValueError` ('Enter numbers only.') and `ZeroDivisionError` ('Cannot divide by
   zero.')." Reuses: `float()`, `input()` (Ch.1), `try`/`except` (this lesson).

**Misconceptions:**
- `except:` without a class name is safer because it catches everything — it is
  more dangerous, because it also catches bugs silently.
- `try`/`except` is only for beginners who can't check inputs — it is Python's
  idiomatic pattern (EAFP) recommended by the style guide.
- Multiple `except` blocks all run if the exception matches any of them — Python
  runs only the first matching block and skips the rest.
- The `break` must come after the entire `try` block — in the bulletproof input
  pattern, `break` must be inside `try`, *after* the risky line.

**Error classes introduced/owned:**
`ValueError` (first formally handled; was crash-causing in Ch.1–L2.4);
`ZeroDivisionError` (first formally handled; previewed in short-circuit example L2.1).

**Recalls:** `while True:` sentinel pattern, `break` (L2.5); `int()`, `float()`,
`input()` (Ch.1 L1.6); `if/elif` (L2.2–L2.3).

---

### L2.9 — Art and Music Capstone *(strand application · plot + sound strands · rungs 5–6)*

**Arc role:** Apply all Chapter 2 concepts in two creative strand contexts —
turtle drawing and drum music — without introducing any new syntax. Exercises
are larger than any single lesson; students combine variables, loops, conditions,
`try`/`except`, and strand APIs in programs that are genuinely satisfying to run.
This is the chapter's creative summit before the formal gate.

**Concepts (applied, not new):** All Ch.2 concepts: `for`/`range`, `while`,
`if`/`elif`/`else`, augmented assignment, accumulator, `break`/`continue`,
nested loops, `try`/`except`; strand APIs: turtle (`forward`, `right`, `left`,
`pencolor`, `pensize`), sound (`sample`, `sleep`, `set_tempo`).

**Warm-up (required — CURRICULUM-STRUCTURE.md §B):** One predict-the-output
question recalling L2.8: give a try/except block with `int("3.5")` and ask which
branch fires. (Answer: `except ValueError` — `"3.5"` has a decimal and is not a
valid integer for `int()`.)

**Worked-example ideas:**
1. *(plot)* A multi-colour spiral: `for i in range(72): pencolor(...)` using `i %
   len(colours)` to cycle through a colour list; `forward(i * 3); right(91)`.
   Uses: nested-loop thinking via index cycling; `%`; loop variable as parameter.
2. *(sound)* A 4-bar drum pattern using nested loops (`for bar in range(4): for
   beat in range(4):`) with `if`/`elif` inside to choose sounds; `set_tempo()` to
   control speed. Uses `sample("name")` for percussion (not `play(note)`, which
   is for pitched notes). The bar×beat structure makes the nested loop motivating
   and concrete.

**Reference cards (provided as read-only content blocks, not exercises):**
- Turtle commands with signatures and short descriptions.
- Drum sounds: `sample("name")` call names available in the engine.
- Melodic notes: `play(note)` where `note` is a MIDI pitch number (e.g.
  `play(60)` for middle C); `play_pattern(notes, gap)` for a sequence.
  Both `sample()` and `play()` are valid engine builtins — they serve
  different purposes and must not be confused (see Misconceptions).

**Exercise ideas (scaffolding fade):**
1. *(medium — rung 5, complete plot)* Polygon spiral stub: `for` header and
   `forward`/`right` calls given but body parameters blank. Student fills in
   the turn angle and step growth so the shape spirals outward.
2. *(hard — rung 6, write plot)* Blank editor. "Write a turtle program using
   a nested loop: draw 6 squares, each rotated 30° from the last." Reuses:
   nested loops, `for`/`range`.
3. *(hard — rung 6, write plot + input)* Blank editor. "Ask the user how many
   sides the polygon should have. Validate the input with try/except. Draw the
   polygon." Reuses: bulletproof input (L2.8), turtle, arithmetic.
4. *(hard — rung 6, write sound + input)* Blank editor. "Ask the user for a
   tempo (in BPM). Validate with try/except. Write a 16-beat drum loop that
   alternates between two patterns (A on bars 1 and 3, B on bars 2 and 4) using
   nested `for` loops and `if`." Reuses: all loop concepts, `%`, `try`/`except`,
   `sample()`, `set_tempo()`.

**Misconceptions:**
- All misconceptions from L2.7 and L2.8 apply; no new misconceptions are
  introduced.
- `sample()` and `play()` are interchangeable — they are not. `sample("kick")`
  plays a percussion sample by name; `play(60)` plays a pitched MIDI note by
  number. Using either with the wrong argument type raises `TypeError`.

**Error classes:** All Ch.2 error classes apply; none new.

**Recalls:** Every Ch.2 concept; turtle API (Ch.1 L1.7); `sample()`/`sleep()`/
`set_tempo()` (Ch.0); `try`/`except` (L2.8); nested loops (L2.7).

---

## Progression / difficulty ramp

| Lesson | Rungs active | Write-from-scratch | Notes |
|---|---|---|---|
| L2.1 True/False & Comparison | 1–2 (predict, Parsons, fix) | No | |
| L2.2 if/else | 3–4 (modify, fix) | No | |
| L2.3 elif | 4–6 (fix, complete, write) | First appearance | Full-pattern worked example required before rung 6 |
| L2.4 while | 3–6 (modify, fix, write) | Yes | **High density — slow the ramp**; sequence: hook → augmented assignment → accumulator → sentinel preview |
| L2.5 for & range | 3–6 (modify, fix, choose, write) | Yes | No nested loops here (moved to L2.7); `continue`-before-update anti-pattern named |
| L2.6 Fix the Broken Code | 1, 4 (spot, fix, print-debug) | No | Logic bug category introduced with explicit framing |
| L2.7 Strand app + nested loops | 5–6 (complete, write) | Yes (default) | Nested loops introduced here in real context; open-ended drum exercise |
| L2.8 try / except | 1–6 (predict, modify, fix, complete, write) | Yes | Bulletproof input pattern taught |
| L2.9 Art & Music Capstone | 5–6 (complete, write) | Yes (default) | No new syntax — applies all Ch.2 concepts |
| Chapter Challenge | 1–6 (full range) | Yes (hard exercises) | |
| Chapter Quiz | — | No | 7 questions; 5/7 minimum; Q6 gates advancement; Q7 tests nested loops |

The write-from-scratch expectation arrives at L2.3 and is the default from L2.5
onward — consistent with CURRICULUM-STRUCTURE.md rule that Ch.3 should treat it
as the norm.

---

## Chapter Challenge (outline)

Six exercises, easy → hard, mixing the chapter's concepts and strands.
Scaffolding fades to a blank editor.

1. *(easy — rung 1, predict)* Trace a five-line `if/elif/else` chain with a
   given input value; predict which branch fires and what it prints. No code
   to write.

2. *(easy — rung 3, modify)* Working `for`/`range` countdown. Change it: use
   `range(20, 0, -1)`, skip every odd number using `continue`, print "Done"
   at the end. (`for` is used here rather than `while` because placing
   `continue` in a `while` countdown without careful decrement ordering creates
   an accidental infinite loop — the exercise tests `continue`, not trap-spotting.)

3. *(medium — rung 4, fix)* Nested `for` loop intended to print a 3×3 grid of
   asterisks. One `IndentationError` and one off-by-one in `range()`. Student
   fixes both.

4. *(medium — rung 5, complete)* Password-strength scorer stub: thresholds and
   scoring logic partially written. Student completes the boolean conditions,
   adds an `elif` branch for "strong" (length >= 12 and contains a digit), and
   writes the final `print`.

5. *(hard — rung 6, write, words strand)* Blank editor. "Write a word-length
   histogram: ask the user for a sentence, split it into words (use
   `sentence.split()`), then for each word print the word followed by `*` ×
   its length." Reuses: `for`, `len()`, `*` repetition (Ch.1 L1.2);
   `str.split()` is a **recalled** concept from Ch.1 (owned by Ch.1 Strings
   lesson — used here without re-teaching).

6. *(hard — rung 6, write, sound strand — open-ended)* Blank editor. "Write a
   four-bar drum loop that alternates between two patterns (A on bars 1 and 3, B
   on bars 2 and 4). Design the patterns yourself — choose which sounds go where.
   A structural checker verifies: a nested `for` loop is present; at least two
   different `sample()` calls appear; the correct number of `sleep()` calls fire."
   This is a making task, not a translation task. Reuses: `for`, `if/else`, `%`,
   `sample()`/`sleep()`.

---

## Chapter Quiz (outline)

Auto-checked gate; next chapter locked until it passes (5/7 minimum, and Q6 must
be non-empty).

**Must-pass concepts:**
- Evaluate a compound boolean expression by hand.
- Read a short `if/elif/else` chain and state which branch fires for a given
  input.
- Trace a `while` loop and state what it prints (or identify that it is infinite).
- Trace a `for`/`range` loop and state the sequence of values the variable takes.
- Identify the error class from a short error message (`IndentationError` vs.
  `SyntaxError` vs. `TypeError`).
- Explain in one sentence why `while` can run forever but `for`/`range` cannot
  (gates advancement — any non-empty response accepted in coach mode, per m11).
- Trace a nested loop and list its output in order (owned concept from L2.7).

**Note on exception handling (L2.8):** Exception handling (`try`/`except`) is
a Ch.2 concept but the gate quiz currently covers the structural/control-flow
fundamentals. Add one exception-handling question (Q6 below) so the gate is
complete. If a future revision reduces the quiz count, document explicitly that
L2.8 concepts are assessed at the Ch.3 gate.

**Note on nested loops (L2.7):** Nested loops are an owned Ch.2 concept and
must be assessed at the Ch.2 gate. Q7 (below) is a nested-loop trace question.

**Seven questions:**

1. *(predict-the-output)* `x = 7; if x > 10: print("A") elif x > 5: print("B")
   else: print("C")`. What prints? (Answer: `B`.)

2. *(trace)* `i = 3; while i > 0: print(i); i -= 1`. List the output in order.
   (Answer: `3 2 1`.)

3. *(predict)* `for n in range(2, 8, 2): print(n)`. What are the values of `n`?
   (Answer: `2 4 6`.)

4. *(spot-the-error)* Three-line snippet with a missing colon after `else`.
   "What error does Python raise?" (Multiple choice: `IndentationError` /
   `SyntaxError` / `TypeError` / `NameError`.) Answer: `SyntaxError`.

5. *(spot-the-error)* `try: n = int("hello"); print(n) except ZeroDivisionError:
   print("caught")`. "What happens when this runs?" (Answer: the `ValueError`
   from `int("hello")` is not caught — it propagates and crashes the program.)
   Multiple choice: (a) prints "caught" / (b) prints the integer / (c) crashes
   with `ValueError` / (d) crashes with `ZeroDivisionError`. Answer: (c).

6. *(short write — gates advancement)* "In one sentence, explain why a `while`
   loop can run forever but a `for`/`range` loop cannot." Coach mode accepts any
   non-empty response that mentions either 'condition', 'count', 'range', or
   'finite'. This question gates advancement (per m11 — the core `while`/`for`
   distinction must be articulated, not just applied). Auto-grade: require
   non-empty; coach-mode prompt if response is under 5 words.

7. *(trace — nested loops)* `for i in range(1, 3): for j in range(1, 3): print(i, j)`.
   List every line of output in order.
   (Answer: `1 1` / `1 2` / `2 1` / `2 2` — four lines; the inner loop
   runs to completion for each value of the outer loop variable.)

---

## Misconceptions & error classes (chapter-wide list)

**Misconceptions:**

- `=` and `==` are interchangeable (L2.1; Think Python §5.2). Python 3 error message: "invalid syntax. Maybe you meant '==' or ':=' instead of '='?" — use this exact wording.
- `if x == 1 or 2:` tests both values — `2` is a standalone truthy literal
  (L2.1; HTTLACS §5.2). Has a dedicated fix exercise in L2.1.
- `and`/`or` always return `True`/`False` — they return an operand (whichever
  determined the result). `not` is the exception: it always returns a `bool`
  (L2.1; verified: `0 and "hello"` → `0`; `"" or 42` → `42`). Demonstrated
  with runnable code in L2.1.
- There are "exactly three" falsy values — false; the full list includes `0.0`,
  `[]`, `{}`, `()` etc. Teach "empty/nothing is falsy" as the principle; expand
  in Ch.4 when collections appear (L2.1).
- `bool()` is new in L2.1 — it was introduced in Ch.1; open L2.1 with a recall.
- Multiple independent `if`s behave like `if/elif/else` — they do not (L2.3).
- The order of `elif` conditions does not matter — it does; first match wins (L2.3).
- The `IndentationError` line number points to the exact problem — it often
  points one line late (L2.2, L2.6; Think Python §5.12).
- Mixing tabs and spaces looks fine — Python 3 raises `TabError` (L2.2).
- The `while` condition is checked continuously mid-iteration — it is checked
  only at the top of each cycle (L2.4; Think Python §7.3).
- Forgetting to update the loop variable is a harmless mistake — it creates an
  infinite loop (L2.4; HTTLACS §7.4).
- `while True:` is always wrong — it is valid with `break` (L2.4, L2.5).
- `/=` keeps the result as an integer — `/=` yields a `float`; use `//=` for
  integer division (L2.4).
- `range(5)` includes `5` — it does not (L2.5; HTTLACS §7.19).
- `range()` returns a list — it returns a lazy iterable (L2.5; Python Tutorial §4.3).
- `break` inside a nested loop exits all loops — innermost only (L2.7; Python
  Tutorial §4.4).
- `continue` exits the loop — it skips the rest of the current iteration only
  (L2.5; HTTLACS §7.18).
- `continue` is always safe in `while` loops — if the update comes after
  `continue`, `continue` skips it, creating an infinite loop. Update must come
  before `continue`. Named anti-pattern in L2.5.
- An infinite loop hangs the tab — the engine provides a Stop button; the tab
  stays responsive (L2.4, L2.6).
- An infinite loop means the code is wrong beyond repair — usually one missing
  update line (L2.6).
- "Python said nothing went wrong" means the code is correct — logic bugs
  produce wrong answers without any exception (L2.6).
- `except:` without a class is safer — it catches bugs silently; always name
  the exception class (L2.8).
- `sample()` and `play()` mean the same thing — they do not. `sample("kick")`
  plays a named percussion sample; `play(60)` plays a pitched MIDI note. Both
  are real engine builtins; mixing argument types raises `TypeError` (L2.7, L2.9).

**Error classes introduced in Ch.2 (all added to Codex):**

| Error class | First introduced | Cause |
|---|---|---|
| `SyntaxError` (condition) | L2.1 | `=` instead of `==` in a condition |
| `SyntaxError` (keyword) | L2.2–L2.3 | Missing colon after `if`/`elif`/`else` |
| `IndentationError` | L2.2 | Wrong or inconsistent block indentation |
| `TabError` | L2.2 (note) | Tabs and spaces mixed |
| `NameError` | L2.4 | Loop variable used before `while` but never assigned |
| `TypeError` | L2.5 | Non-integer passed to `range()` |
| `ValueError` (range) | L2.5 | `range()` called with step `0` |
| `ValueError` (conversion) | L2.8 | `int()` or `float()` given invalid string; first formally handled here |
| `ZeroDivisionError` | L2.8 | Division by zero; first formally handled here |
| Infinite loop | L2.4 | No error raised; runs until Stop button is pressed + fix code |
| Logic bug | L2.6 | No error raised; program runs but produces wrong output |

---

## Sources

The specific sources used to verify and scope this chapter, with section references:

1. **Python Tutorial — Control Flow** (official docs, ground-truth behaviour):
   <https://docs.python.org/3/tutorial/controlflow.html>
   Sections §4.1 (`if`/`elif`/`else`), §4.2 (`for`, iterating over sequences),
   §4.3 (`range()` as a lazy sequence, all three forms), §4.4 (`break`,
   `continue`), §4.5 (nested loops, prime-checker canonical example).

2. **Python Language Reference — Compound Statements** (syntax + indentation rules):
   <https://docs.python.org/3/reference/compound_stmts.html#the-if-statement>
   Suite definition; `if` grammar; block scoping rules.

3. **Python Language Reference — Expressions § 6.11** (boolean operators):
   <https://docs.python.org/3/reference/expressions.html#boolean-operations>
   Short-circuit semantics; operand-returning behaviour of `and`/`or`.

4. **Think Python 2e, Ch.5 — Conditionals and Recursion** (pedagogy + voice):
   <https://greenteapress.com/thinkpython2/html/thinkpython2006.html>
   §5.2 (comparison ops, `=` vs `==` as #1 misconception), §5.3 (boolean ops,
   truthiness warning for beginners), §5.4–5.7 (`if`/`elif`/`else`, `pass`
   as scaffolding, nested-vs-logical-and trade-off), §5.12 (`IndentationError`
   — error message points to wrong line warning).

5. **Think Python 2e, Ch.7 — Iteration** (pedagogy + Collatz motivation):
   <https://greenteapress.com/thinkpython2/html/thinkpython2008.html>
   §7.2 (`NameError` from uninitialised variable before `while`), §7.3 (`while`
   countdown narrative, the "Blastoff!" framing), §7.5 (Collatz — motivates
   `while` over `for` for indefinite iteration).

6. **HTTLACS — Conditionals chapter** (truth tables, misconceptions, De Morgan's):
   <http://openbookproject.net/thinkcs/python/english3e/conditionals.html>
   §5.1 (all six comparison ops with English translations), §5.2–5.3 (boolean
   ops, truth tables, short-circuit), §5.5–5.8 (`if`/`elif`/`else` sequencing,
   nested vs. logical-and trade-off), §5.10 (De Morgan's laws — noted but not
   taught until Ch.5).

7. **HTTLACS — Iteration chapter** (three `while` responsibilities, `break`,
   `continue`, nested loops):
   <http://openbookproject.net/thinkcs/python/english3e/iteration.html>
   §7.3 (`for` as traversal, definite iteration framing), §7.4 (three `while`
   responsibilities: initialise / test / update; infinite loop as "lather, rinse,
   repeat"), §7.5 (Collatz as indefinite-iteration motivation), §7.15–7.16
   (`break` — framing and sentinel-input motivation), §7.18 (`continue` vs.
   `break` contrast), §7.19 (`range` off-by-one — flagged as "slightly tricky"),
   §7.22 (nested loops grounded in structured data, not abstract nesting).

8. **CSTA K-12 CS Standards (2017)**, Grades 6–8, Concept 1A (Algorithms &
   Programming), Practice 4 — confirms that `if`/`elif`/`else`, `while`, `for`,
   and `break`/`continue` are squarely in-scope at this level, and that debugging
   (reading error messages, tracing) is a named grade-band expectation:
   <https://www.csteachers.org/page/standards>

9. **Python for Everybody (py4e.com), Ch.3 (Conditional Execution) and Ch.5
   (Iterations)** — scope cross-check confirming no expected concept is missing:
   <https://www.py4e.com/html3/03-conditional> and
   <https://www.py4e.com/html3/05-iterations>

---

## 3-line summary

**Key decisions:** `break`/`continue` are taught in L2.5 (alongside `for`/`range`)
rather than in a separate lesson, because the sentinel-input motivation for `break`
appears first in L2.4 as a named preview (without exercises requiring `break`) and
the full treatment fits naturally into L2.5's loop-control subsection. Nested loops
are moved to L2.7 (strand lesson) where the bar×beat drum grid makes them concrete
rather than abstract — this resolves the cognitive overload identified in L2.5.
Augmented assignment and the accumulator pattern are owned by Ch.2 (introduced in
L2.4) and recalled in Ch.3 where they are used constantly with functions.

**Debugging placement:** L2.6 is intentionally placed *after* all syntax concepts
are in hand so students have a full inventory of error classes to debug against;
this follows HTTLACS's pattern of teaching debugging as synthesis, not as a
beginner intro. Debugging exercises also appear in every preceding lesson (L2.1–L2.5),
so L2.6 is consolidation, not a first meeting. A logic-bug category is explicitly
introduced with the framing: "Python does not know what you intended — it only knows
what you told it."

**Coverage/ordering note:** Ch.2 is 9 lessons (L2.1–L2.9), not 7 — L2.8
(try/except) and L2.9 (capstone) complete the chapter. De Morgan's laws
(HTTLACS §5.10) are deferred to Ch.5 (code design); a "later in Ch.5" Codex
promise is included. Loop `else` is dropped from the curriculum entirely — no
mention, no "coming soon" promise. The sound API throughout Ch.2 is `sample()`
(not `play()`) — verified against c2.js implementation.
