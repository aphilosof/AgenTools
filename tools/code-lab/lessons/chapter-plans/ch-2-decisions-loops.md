# Chapter 2 — Decisions and Loops

## Overview

Chapter 2 takes the learner from a world of sequential code (Ch.1) into a world
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
- Apply loops to two strands: turtle spirals (plot) and a four-on-the-floor
  kick pattern (sound).

Through-line: **"The computer does exactly what you tell it — but now you get to
tell it to check, choose, and repeat."** Every lesson returns to this framing and
shows how the same idea that hangs a tab (an infinite loop) is also the engine
behind every interesting program.

Strands: numbers · words · plot · sound.
Rung range: 1–6, with rungs 1–3 dominant in L2.1–L2.2 and rungs 4–6 dominant
from L2.3 onward. Write-from-scratch (rung 6) appears first in L2.3 and is the
default by L2.5–L2.7.

---

## Concepts owned (keywords)

- **comparison operators** — `==`, `!=`, `<`, `>`, `<=`, `>=`; each returns a `bool`
- **boolean operators** — `and`, `or`, `not`; short-circuit evaluation; precedence
- **truthiness** — what Python counts as truthy or falsy (0, `""`, `None`, `[]` etc.)
- **`if` / `elif` / `else`** — branching; exactly one branch executes; colon + indented block
- **indentation / block** — Python uses whitespace to delimit code blocks; `IndentationError`
- **`while`** — indefinite iteration; programmer owns: initialise, test, update
- **`for` / `range()`** — definite iteration over a sequence; `range(stop)`, `range(start, stop)`, `range(start, stop, step)`; endpoint not included
- **`break`** — exit the innermost loop immediately
- **`continue`** — skip the rest of the current iteration, jump back to the condition check
- **nested loops** — a loop inside a loop; inner runs to completion on each outer iteration
- **infinite loop** — a `while` whose condition never becomes `False`; recovery: stop & re-run
- **IndentationError** — the error class for wrong or inconsistent block indentation
- **`_` (throwaway variable convention)** — idiomatic name for a loop variable whose value is not used in the body (style, not a language rule; introduced in L2.7)

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
         │
         ▼
L2.2  if / else ── block + indentation (IndentationError introduced)
         │
         ▼
L2.3  elif ── extends if/else to multi-way; reuses comparison + bool ops
         │
         ▼
L2.4  while ── indefinite iteration; requires: bool condition + variable mutation
         │        └── infinite-loop risk + recovery here
         │
         ▼
L2.5  for + range() ── definite iteration; contrast with while; break/continue here
         │
         ▼
L2.5  nested loops ── requires: for + range (or while)
         │
         ▼
L2.6  Fix the Broken Code ── explicit debugging protocol; all error classes so far
         │
         ▼
L2.7  Strand: Loops Make Art & Beats ── for + range in plot + sound contexts
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

**Worked-example ideas:**
1. *(easy)* Six comparison expressions listed; student predicts each result
   (`3 < 5` → `True`, `"a" == "b"` → `False`, etc.). Stepper shows the bool
   value. Reuses: Ch.1 types.
2. *(medium)* Compound condition: `age >= 13 and age < 18`; trace with two
   different `age` values (12 and 15). Introduce short-circuit: if `age >= 13`
   is `False`, Python never checks the right side.
3. *(harder)* Truthiness: `bool(0)`, `bool("")`, `bool([])`, `bool(42)` — show
   that Python's `if` does not need a comparison; any expression will do. Reuses:
   Ch.1 `bool()` conversion.

**Exercise ideas (scaffolding fade):**
1. *(easy — rung 1, predict)* Six expressions, predict-the-output one at a time
   before running. Includes `"7" == 7` → `False` (type matters — recall Ch.1).
2. *(medium — rung 2, arrange Parsons)* Four boolean sub-expressions scrambled;
   student arranges them so the compound condition correctly selects numbers
   between 10 and 20 (exclusive).
3. *(hard — rung 4, fix)* `if x = 5:` — SyntaxError because `=` is not `==`.
   Student reads the error message, identifies the line, changes `=` to `==`.
   *(First `SyntaxError` from a comparison context — explicitly named and added
   to Codex.)*

**Misconceptions:**
- `=` and `==` are interchangeable — the most-cited beginner error (Think Python
  §5.2; HTTLACS §5.1).
- `if x == 1 or 2:` tests both values — it does not; `2` is a standalone truthy
  literal (HTTLACS §5.2).
- `and`/`or` always return `True` or `False` — they return an operand.
  (`not` is different: it always returns a `bool`, not an operand.)

**Error classes:** `SyntaxError` (using `=` in a condition).

**Recalls:** `bool`, `type()`, type conversion (Ch.1 L1.2); variables (Ch.1 L1.3).

---

### L2.2 — if / else *(concept · core strand · rungs 2–4)*

**Arc role:** First branching lesson. Establish the `if`/`else` syntax, the
colon, and the indented block. Introduce `IndentationError` deliberately so
students meet it in a controlled setting with a clear fix.

**Concepts:** `if`/`else`, block/indentation, `IndentationError`.

**Worked-example ideas:**
1. *(easy)* FizzBuzz half: `if n % 2 == 0: print("even") else: print("odd")`.
   Step through with `n = 4` and `n = 7`. Show that exactly one branch runs.
   Reuses: `%` operator (Ch.1 L1.4).
2. *(medium)* Password length check: `if len(password) >= 8: print("OK") else:
   print("Too short")`. Introduce `len()` briefly (full string treatment is Ch.4).
   Reuses: Ch.1 string type.
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

**Recalls:** comparison operators (L2.1); `print`, variables (Ch.1).

---

### L2.3 — elif: Many Branches *(concept · words strand · rungs 4–6)*

**Arc role:** Extend binary branching to multi-way decisions. Contrast `elif`
chains with multiple independent `if` statements. Build the password-strength
checker (words strand) as the lesson's project.

**Concepts:** `elif`, multi-way branching, choosing between multiple `if` vs.
`if/elif/else`.

**Worked-example ideas:**
1. *(easy)* Grade classifier: `if score >= 90: ... elif score >= 70: ... elif
   score >= 50: ... else: ...`. Trace with three different scores. Show that
   only the first matching branch runs — subsequent `elif`s are skipped.
2. *(medium)* Same logic rewritten with four independent `if` statements.
   Demonstrate with score = 95: both the `>= 90` and `>= 70` branches fire —
   the wrong behaviour. "This is why `elif` exists."
3. *(harder)* Nested `if` inside `elif` — a brief taste. Weather chooser:
   `if hot: if sunny: "beach" else: "pool" elif cold: "stay in"`. Show the
   indentation levels. One level of nesting only; deeper nesting belongs to L2.5.

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
   'obese'." Reuses: `input()`, `float()`, arithmetic (Ch.1).

**Misconceptions:**
- `elif` is just shorthand — students may not see why it matters until the
  multi-`if` demo makes the wrong-behaviour case concrete.
- The order of `elif` clauses matters — a `>= 50` check before `>= 90` will
  swallow all high scores.
- Forgetting `else` means no output if no condition matches — silent failure.

**Error classes:** `SyntaxError` (missing colon after `elif` or `else`).
  Note: `else:` followed by `    if ...:` (two lines) is NOT a SyntaxError —
  it is a legal nested `if` inside `else`; the exercise exploits this.

**Recalls:** `if`/`else` (L2.2); `len()` (L2.2); `input()`, `float()` (Ch.1 L1.6).

---

### L2.4 — while Loops *(concept · numbers strand · rungs 4–6)*

**Arc role:** Introduce indefinite iteration. Establish the three programmer
responsibilities (initialise, test, update). Introduce the infinite-loop risk and
the stop-and-re-run recovery. Build the countdown timer.

**Concepts:** `while`, loop variable, stopping condition, infinite loop,
infinite-loop recovery.

**Worked-example ideas:**
1. *(easy)* Countdown: `n = 5; while n > 0: print(n); n -= 1; print("Blastoff!")`.
   Stepper traces each iteration: value of `n` before the test, test result,
   which lines run. Mirrors Think Python §7.3's narrative framing exactly.
2. *(medium)* Read numbers until 0 is entered (sentinel pattern): `while True:
   x = int(input(...)); if x == 0: break`. Introduces `break` in a motivating
   context — "without break, there is no clean way to end a user-input loop"
   (HTTLACS §7.16). *(break is covered fully in L2.5; this is a preview.)*
3. *(harder)* Collatz sequence: `while n != 1: if n % 2 == 0: n = n // 2; else:
   n = 3 * n + 1; print(n)`. Motivates `while` over `for`: "we cannot know in
   advance how many steps it takes" (HTTLACS §7.5). Reuses: `if/else`, `%`, `//`.

**Exercise ideas (scaffolding fade):**
1. *(easy — rung 3, modify)* Countdown boilerplate given. Student changes the
   start value from 5 to 10 and the printed final message.
2. *(medium — rung 4, fix)* `while` loop whose body never updates the counter:
   `n = 3; while n > 0: print(n)`. Student recognises the infinite loop (code
   runs forever — instructions say to click the Stop button in the engine UI,
   then re-read the code), then adds `n -= 1`.
   *(First deliberate infinite-loop exposure. Infinite-loop recovery protocol
   named and added to Codex. The tab does NOT hang — the engine's stop button
   interrupts the worker; the browser remains responsive.)*
3. *(hard — rung 6, write)* Blank editor. "Write a guessing game: pick a secret
   number (just assign it), loop until the user guesses it, print 'Too high',
   'Too low', or 'Correct!'." Reuses: `if/elif/else`, `input()`, `int()`.

**Misconceptions:**
- The loop condition is checked continuously mid-iteration — it is checked only
  at the top of each cycle (Think Python §7.3).
- Forgetting to update the loop variable → infinite loop (HTTLACS §7.4 names
  the three responsibilities explicitly).
- `while True:` is always wrong — it is a valid pattern when combined with `break`.

**Error classes:** `NameError` (loop variable not initialised before `while`);
`IndentationError` (body not indented); infinite loop (no Python error — runs until Stop is pressed).

**Recalls:** `if/elif/else` (L2.2–L2.3); arithmetic operators (Ch.1 L1.4);
`input()`, `int()` (Ch.1 L1.6).

---

### L2.5 — for & range *(concept · numbers strand · rungs 4–6)*

**Arc role:** Introduce definite iteration. Teach all three `range()` forms.
Contrast `for` with `while` (definite vs. indefinite). Teach `break` and
`continue` fully. Introduce nested loops.

**Concepts:** `for`, `range(stop)`, `range(start, stop)`, `range(start, stop,
step)`, `break`, `continue`, nested loops.

**Worked-example ideas:**
1. *(easy)* Times-table printer: `n = 7; for i in range(1, 13): print(f"{n} × {i} =
   {n * i}")`. Show all three `range` forms in sequence with a small trace table:
   "range(5) gives 0 1 2 3 4 — never includes the stop value" (Python Tutorial
   §4.3; HTTLACS §7.19 flags this as the off-by-one trap).
2. *(medium)* `break` and `continue` side by side: the same `for i in range(10)`
   loop with (a) `if i == 5: break` (exits at 5) and (b) `if i % 2 == 0:
   continue` (skips evens). Run both, compare output. "break exits; continue
   skips." (Python Tutorial §4.4.)
3. *(harder)* Nested loop: multiplication table grid.
   `for row in range(1, 4): for col in range(1, 4): print(row * col, end="\t")`.
   Stepper traces: inner loop runs fully for each value of `row`. Then add
   `if row == 2: break` inside the **inner** `for col` loop. Observe that
   row 2's columns are skipped but the **outer** `for row` loop continues and
   row 3 still prints — `break` exits only the innermost loop it lives in.
   "If you want to exit the outer loop too, you need a flag variable or a
   function with `return` — that comes in Ch.3." (HTTLACS §7.22.)

**Exercise ideas (scaffolding fade):**
1. *(easy — rung 3, modify)* Boilerplate `for i in range(10): print(i)`. Student
   changes it to count down from 10 to 1 using `range(10, 0, -1)`.
2. *(medium — rung 4, fix)* Loop intended to skip multiples of 3 uses `break`
   instead of `continue` — exits on the first multiple instead of skipping it.
   Student spots the error, swaps `break` for `continue`.
3. *(hard — rung 6, write)* Blank editor. "Write a prime checker for numbers
   1–20: for each number, use a nested loop to test divisibility; print the
   number if it is prime." Reuses: `%` operator, `if`, `break`. Mirrors Python
   Tutorial §4.5 canonical example.

**Misconceptions:**
- `range(5)` includes `5` — it does not (HTTLACS §7.19 flags this explicitly).
- `range()` returns a list — it returns a lazy sequence (supports indexing and
  `len`, but you must wrap in `list()` to see the values) (Python Tutorial §4.3).
- `break` inside a nested loop exits all loops — it exits only the innermost.
- `continue` exits the loop — it only skips the remainder of the current
  iteration.

**Error classes:** `TypeError` if `range()` receives a non-integer; `ValueError`
if step is `0`; `IndentationError` (inner loop body).

**Recalls:** `while` + stopping condition (L2.4); `if/elif/else` (L2.2–L2.3);
`%` operator, f-strings (Ch.1 L1.4–L1.5).

---

### L2.6 — Fix the Broken Code *(explicit debugging · core strand · rungs 1, 4)*

**Arc role:** First explicit debugging-protocol lesson. Name and practice the
three-step protocol: (1) read the error class and message; (2) go to the
indicated line and look at the line *before* it too; (3) understand *why* it
broke before changing anything. Cover all error classes met so far in Ch.2, plus
infinite-loop recovery.

**Concepts:** debugging protocol (named), `IndentationError`, `SyntaxError`,
`TypeError`, `NameError`, infinite-loop recovery.

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
3. *(demonstration)* `NameError` from a loop variable used after a `for` loop
   when `range(0)` produced zero iterations — the loop body never ran, so the
   variable was never bound. Key teaching point: Python `for` loops have **no
   block scope**; the loop variable would be accessible after a non-empty loop.
   But if the loop body never executes (empty range), the variable is never
   defined at all — hence `NameError: name 'i' is not defined`, not "in scope
   but unassigned." Shows that errors can come from logic, not just typos.

**Exercise ideas (scaffolding fade):**
1. *(easy — rung 1, spot)* Three broken code snippets, each with a different
   error class. Student reads the error message and selects which error class it
   is from a menu. No fixing — identification only.
2. *(medium — rung 4, fix one)* A twelve-line program with one `IndentationError`.
   Student reads the traceback, locates the problem, fixes it, re-runs to verify.
3. *(hard — rung 4, fix three)* A program with three bugs (one `SyntaxError`,
   one `TypeError` from a non-integer in `range()`, one logic bug — `break`
   where `continue` was intended). Student fixes all three in sequence, verifying
   the program passes the checker after each fix.

**Misconceptions:**
- The error message always points to the exact wrong line — it does not, especially
  for `IndentationError` (Think Python §5.12).
- Fixing the first error shown is enough — other errors may hide behind the first.
- An infinite loop means the code is fundamentally broken — it usually means one
  line is wrong or missing.

**Error classes (all consolidated and added to Codex here):**
`SyntaxError`, `IndentationError`, `TypeError`, `NameError`, `ValueError`
(from `range(step=0)`); infinite-loop (not an error class — a runtime hang).

**Recalls:** every concept from L2.1–L2.5; error class introductions from Ch.1
(`TypeError`, `SyntaxError`).

---

### L2.7 — Loops Make Art & Beats *(strand application · plot + sound strands · rungs 5–6)*

**Arc role:** Apply `for`/`range` in two real strand contexts: turtle spirals
(plot) and a four-on-the-floor kick pattern (sound). Show that loops are not
just for numbers — they are for making things.

**Concepts (applied, not new):** `for`/`range`, loop variable as a parameter,
nested loops (plot); `for`/`range` with `sleep()` and `play()` (sound).

**Worked-example ideas:**
1. *(plot — easy)* Square with a `for` loop: `for _ in range(4): forward(100);
   right(90)`. The `_` convention for a variable you don't use — named explicitly.
2. *(plot — medium)* Spiral: `for i in range(36): forward(i * 5); right(91)`.
   Loop variable `i` changes the step length each time — the loop variable does
   work inside the body. Student modifies angle and scale.
3. *(sound — harder)* Four-on-the-floor pattern: `for beat in range(4): play(KICK);
   sleep(0.5)`. Then extend: add a hi-hat on every other beat using `if beat % 2
   == 0`. Reuses: `if`, `%`; the `play()`/`sleep()` API from Ch.0.

**Exercise ideas (scaffolding fade):**
1. *(medium — rung 5, complete)* Spiral stub with `for` header given; student
   writes the body (two turtle calls) so the spiral opens outward.
2. *(hard — rung 6, write)* Blank editor. "Write a turtle program that draws a
   regular hexagon (6 sides, 60° each turn) using a `for` loop." No boilerplate.
3. *(hard — rung 6, write, sound)* Blank editor. "Write a 16-beat drum loop:
   kick on beats 1, 5, 9, 13; snare on beats 5 and 13; hi-hat every beat."
   Use `range(1, 17)` and `if`. Reuses: `if/elif`, `%`, `and`/`or`.

**Misconceptions:**
- Loop variable must be used in the body — `_` convention shows it need not be.
- `range` starts at 1 — it starts at 0 unless told otherwise (relevant for
  beat numbering: `range(1, 17)` vs `range(16)`).

**Error classes:** `IndentationError` (turtle body), `TypeError` (wrong type
passed to `play()` or `forward()`).

**Recalls:** turtle `forward`/`right` (Ch.1 L1.7); `play()`/`sleep()` (Ch.0
L0.1); `if`, `%`, `and`/`or` (L2.1–L2.3).

---

## Progression / difficulty ramp

| Lesson | Rungs active | Write-from-scratch |
|---|---|---|
| L2.1 True/False & Comparison | 1–2 (predict, Parsons) | No |
| L2.2 if/else | 3–4 (modify, fix) | No |
| L2.3 elif | 4–6 (fix, complete, write) | First appearance (L2.3 ex. 3) |
| L2.4 while | 3–6 (modify, fix, write) | Yes |
| L2.5 for & range | 3–6 (modify, fix, write) | Yes |
| L2.6 Fix the Broken Code | 1, 4 (spot, fix) | No (debugging, not generation) |
| L2.7 Strand app | 5–6 (complete, write) | Yes (default) |
| Chapter Challenge | 1–6 (full range) | Yes (hard exercises) |

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

6. *(hard — rung 6, write, sound strand)* Blank editor. "Write a four-bar drum
   loop that alternates between two patterns (A on bars 1 and 3, B on bars 2
   and 4). Use a `for` loop over bars and an `if` inside." Reuses: `for`,
   `if/else`, `%`, `play()`/`sleep()`.

---

## Chapter Quiz (outline)

Auto-checked gate; next chapter locked until it passes (4/5 minimum).

**Must-pass concepts:**
- Evaluate a compound boolean expression by hand.
- Read a short `if/elif/else` chain and state which branch fires for a given
  input.
- Trace a `while` loop and state what it prints (or identify that it is infinite).
- Trace a `for`/`range` loop and state the sequence of values the variable takes.
- Identify the error class from a short error message (`IndentationError` vs.
  `SyntaxError` vs. `TypeError`).

**Five questions:**

1. *(predict-the-output)* `x = 7; if x > 10: print("A") elif x > 5: print("B")
   else: print("C")`. What prints? (Answer: `B`.)

2. *(trace)* `i = 3; while i > 0: print(i); i -= 1`. List the output in order.
   (Answer: `3 2 1`.)

3. *(predict)* `for n in range(2, 8, 2): print(n)`. What are the values of `n`?
   (Answer: `2 4 6`.)

4. *(spot-the-error)* Three-line snippet with a missing colon after `else`.
   "What error does Python raise?" (Multiple choice: `IndentationError` /
   `SyntaxError` / `TypeError` / `NameError`.) Answer: `SyntaxError`.

5. *(short write, not auto-graded)* "In one sentence, explain why a `while` loop
   can run forever but a `for`/`range` loop cannot." Surfaces in coach mode.

---

## Misconceptions & error classes (chapter-wide list)

**Misconceptions:**

- `=` and `==` are interchangeable (L2.1; Think Python §5.2).
- `if x == 1 or 2:` tests both values — `2` is a standalone truthy literal
  (L2.1; HTTLACS §5.2).
- `and`/`or` always return `True`/`False` — they return an operand (L2.1).
  `not` is different: it always returns a `bool`, not an operand.
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
- `range(5)` includes `5` — it does not (L2.5; HTTLACS §7.19).
- `range()` returns a list — it returns a lazy iterable (L2.5; Python Tutorial §4.3).
- `break` inside a nested loop exits all loops — innermost only (L2.5; Python
  Tutorial §4.4).
- `continue` exits the loop — it skips the rest of the current iteration only
  (L2.5; HTTLACS §7.18).
- An infinite loop hangs the tab — the engine provides a Stop button; the tab
  stays responsive (L2.4, L2.6).
- An infinite loop means the code is wrong beyond repair — usually one missing
  update line (L2.6).

**Error classes introduced in Ch.2 (all added to Codex):**

| Error class | First introduced | Cause |
|---|---|---|
| `SyntaxError` (condition) | L2.1 | `=` instead of `==` in a condition |
| `SyntaxError` (keyword) | L2.2–L2.3 | Missing colon after `if`/`elif`/`else` |
| `IndentationError` | L2.2 | Wrong or inconsistent block indentation |
| `TabError` | L2.2 (note) | Tabs and spaces mixed |
| `NameError` | L2.4 | Loop variable used before `while` but never assigned |
| `TypeError` | L2.5 | Non-integer passed to `range()` |
| `ValueError` | L2.5 | `range()` called with step `0` |
| Infinite loop | L2.4 | No error raised; runs until Stop button is pressed + fix code |

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
appears first in L2.4 as a preview and the full treatment fits naturally into L2.5's
loop-control subsection. Nested loops are introduced in L2.5 and practised in the
Chapter Challenge, not given their own lesson — the depth warranted by this chapter
is one level of nesting only.

**Debugging placement:** L2.6 is intentionally placed *after* all syntax concepts
are in hand so students have a full inventory of error classes to debug against;
this follows HTTLACS's pattern of teaching debugging as synthesis, not as a
beginner intro. Debugging exercises also appear in every preceding lesson (L2.1–L2.5),
so L2.6 is consolidation, not a first meeting.

**Coverage/ordering note:** De Morgan's laws (HTTLACS §5.10) are a
sources-verified concept at this level but are deferred to Ch.5 (code design);
a "later in Ch.5" Codex promise is included. Loop `else` is dropped from the
curriculum entirely — no mention, no "coming soon" promise.
