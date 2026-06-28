# Chapter 1 — Python: First Words

## Implementation status and authoring actions

**c2s1 falsy list is factually wrong — fix before Ch.2 authoring (NEW-1, MAJOR):**
`c2.js` lesson c2s1, already live, states falsy values are "exactly these three:
the number `0`, the empty string `""`, and the special value `None`." This omits
`0.0` and `False`, which are also falsy (verified: `bool(0.0)` → `False`,
`bool(False)` → `False`). This contradicts the Ch.1 plan, which correctly lists all
five. Fix c2s1 prose to read the correct five-item list and add `0.0` to its `bool()`
example. Do this independently of Ch.1 authoring — c2s1 is already deployed.
Additionally, c2s1 must be revised to *recall* Ch.1 truthiness (one sentence + link)
rather than re-teach it from scratch. Replace "Python does not demand a strict True or
False. It accepts any value and applies a rule called truthiness..." with a recall hook
such as "In Chapter 1 you saw that Python gives every value a truth-value. The falsy
values are: `0`, `0.0`, `""`, `None`, `False` — everything else is truthy." Then
proceed to the Ch.2 application (conditionals).

**Ch.2 concept-owned record must add `sep`/`end` (NEW-4, MINOR):**
The Ch.1 plan correctly removes `sep`/`end` from L1.1 owned-concepts and labels them
Ch.2-owned. But the Ch.2 plan's "Concepts owned (keywords)" section does not list
them — they appear only in c2s5 example code. Before authoring Ch.2 or running a
concept-spine audit, add `sep` and `end` explicitly to the Ch.2 plan's
owned-concepts keyword list so ownership is auditable.

**L1.5 lesson-ID split decision is a pre-authoring gate (NEW-5, MINOR):**
L1.5 has 6 subsections — the structural maximum. The cognitive load note below allows
a split into L1.5a / L1.5b if the lesson exceeds 25 minutes. That decision must be
made *before* authoring begins, not after, because it determines the lesson ID
structure in c1.js (one entry vs two). If splitting: L1.5a owns concat/index/slice/
split-join; L1.5b owns methods/len/round/f-strings. Decide and lock the lesson ID
before writing any c1s5 content.

**Plan/implementation gap (B1, B2, B3 — 7/7 reviewers):**
The plan is correct in scope. `c1.js` is incomplete. The following concepts specified
in this plan are absent or partial in the current `c1.js`:

| Concept | Status in c1.js | Action |
|---|---|---|
| f-strings (incl. `:.2f`) | Absent | Add to c1s5 |
| String indexing / slicing | Deferred | Owned by Ch.4 (holistic review decision — c1.js lacks it and Ch.4 plan claims ownership; remove from Ch.1 quiz and owned-concepts) |
| `.join()` | Absent | Add to c1s5 |
| `round()` | Absent | Add to c1s5 |
| `sep` / `end` | Moved to Ch.2 | No action (correct placement) |
| `^` XOR debug exercise | Absent | Add to c1s4 |
| `-2**2` precedence example | Absent | Add to c1s4 |
| `ZeroDivisionError` preview | Absent | Add to c1s4 |
| Naming rules (full subsection) | Partial | Complete in c1s3 |
| Truthiness (full subsection) | Absent | Add to c1s2 |
| Traceback reading (one-page) | Absent | Add to c1s1 |
| Two-phase `x = x + 1` model | Absent | Add to c1s3 |
| Variable-driven turtle/sound | Hardcoded | Rewrite c1s7 |
| L1.6 model solutions with f-strings | Uses concat | Update after c1s5 |

**Gate rule (B3):** The Chapter Quiz must not be deployed until all concepts it tests
are present in `c1.js`. Quiz currently tests f-strings, `:.2f`, and `^` XOR.
Indexing and slicing have been removed from the quiz (now owned by Ch.4).
Deploy only after B1 is resolved.

**Do not reduce the plan's scope** unless a deliberate curriculum decision to
reassign a concept to a later chapter is made and the concept spine in
CURRICULUM-STRUCTURE.md §D is updated accordingly.

---

## Overview

Chapter 1 is the student's first real Python-writing experience. Its role in the
course is to give the learner a working notional machine — a mental model of what
Python does with values, names, and expressions — before any control flow is
introduced. The stepper (line-highlight + live variable table) is woven in from
Lesson 1.3 onward, making the internal state of a running program visible from
the start.

By the end of the chapter the learner can write short Python programs that receive
input, do arithmetic, build and format strings, and produce well-labelled output.
They can read a `NameError`, `SyntaxError`, `TypeError`, and `ValueError` and
know which mistake produced it. The through-line is: *a program is a sequence of
instructions that acts on values — every value has a type, and types decide what
you can do.*

Recall from Chapter 0: the ideas of sequence, algorithm exactness, and debugging
as a process. This chapter gives those ideas a syntax.

---

## Stepper interface contract

The stepper is the primary mental-model tool for variables and state in this chapter.
Its interface must be stable before any stepper-dependent lesson content is authored.
Specification (implements m13):

- **One row per live variable.** Each named variable gets one row in the table.
- **Updates after each assignment line completes.** The table reflects the new value
  after the right-hand side has been fully evaluated and stored. It does not update
  mid-expression.
- **Prior value struck through on reassignment.** When a variable is reassigned, the
  old value is shown struck through briefly before being replaced, making the
  overwrite visible. This is the visual cue that "the old value is gone."
- **Line highlight.** The currently-executing line is highlighted in the editor while
  the stepper is running.
- **No implicit variables.** Only explicitly assigned names appear. Temporary
  sub-expressions do not get rows.
- **Type shown.** Each row optionally shows the type tag (`int`, `str`, etc.) alongside
  the value — consistent with the lesson prose that type is always present.

If a different engine spec exists, reference it here and ensure it is consistent with
the above. This spec governs which exercises can use "trace the stepper" as their
primary instruction.

---

## Concepts owned (keywords)

- **`print()`** — output; arguments; multi-arg spacing; expressions as args
  *(Note: `sep` and `end` are Ch.2-owned — taught in c2s5 where the felt need arises inside a loop. Do not teach them in L1.1.)*
- **comments** — `#`; purpose; placement; Python ignores them
- **int** — whole numbers; unlimited precision; exact arithmetic
- **float** — decimal numbers; binary rounding (`0.1 + 0.2`); when to use
- **str** — text in quotes; single vs double; immutable row of characters
- **bool** — `True` / `False`; booleans as their own type
- **None** — the "no value" value; its type is `NoneType`; falsy
- **`type()`** — inspect any value's type at runtime
- **type conversion** — `int()`, `float()`, `str()`, `bool()`; each builds a new value
- **truthiness** — which values of each type count as true or false in a condition
- **arithmetic operators** — `+`, `-`, `*`, `/`, `//`, `%`, `**`; type-dependent meaning of `+` and `*`
- **operator precedence** — PEMDAS / `**` right-to-left; parentheses override
- **variables** — assignment as an instruction that *stores* a value; the name is not the value
- **reassignment** — updating a variable; state changes visible in the stepper
- **naming** — rules (letters, digits, `_`; no leading digit; no keywords); conventions (snake_case)
- **string concatenation** — `+` joins strings; requires both sides to be `str`
- **`.split()` / `.join()`** — `str.split()` splits on whitespace (or delimiter); `sep.join(list)` assembles; both return new values
- **`.lower()` / `.upper()` / `.strip()`** — case conversion and whitespace trimming; all return new strings; originals unchanged
- **f-strings** — `f"…{expr}…"`; expressions evaluated at runtime; embed any value
- **f-string `:.2f` format spec** — `f"{value:.2f}"` formats a float to exactly 2 decimal places (e.g. `f"{2.5:.2f}"` → `'2.50'`); the only format spec owned in Ch.1; used for money/prices
- **`len()`** — counts characters in a string (or items in a sequence later); returns `int`
- **`round()`** — rounds a float to the nearest integer (or to N decimal places); returns int or float
- **`input()`** — reads a line from the user; always returns `str`; convert before arithmetic

---

## Concept map & dependencies

Teaching order is HTTLACS-style (values & types before variables; operators before
strings-deep; `input()` last because it pays off type conversion directly):

```
Ch.0 recall: sequence, algorithm exactness, debugging idea
  │
  ▼
1.1 print + comments
  │  (student can now produce output; sets up all future examples)
  ▼
1.2 Values & Types  [stepper introduced for predict-the-output]
  │  int → float → str → bool → None; type(); "7" ≠ 7
  │  type conversion: int(), float(), str(), bool()
  │  truthiness: which values count as true/false
  ▼
1.3 Variables  [stepper shows state table updating]
  │  assignment; reassignment; naming; state model
  │  reuses: values (1.2), print (1.1)
  ▼
1.4 Expressions & Math
  │  operators; int vs float division (/  //  %  **); precedence; parens
  │  reuses: int/float (1.2), variables (1.3)
  ▼
1.5 Strings
  │  concatenation; str * int repetition; .split()/.join(); .lower()/.upper()/.strip(); f-strings (incl. :.2f); len(); round(); why mixing fails (TypeError)
  │  (indexing/slicing deferred to Ch.4)
  │  reuses: str (1.2), variables (1.3), operators (1.4)
  ▼
1.6 input()
  │  always returns str; convert to compute; EOFError note
  │  reuses: types + conversion (1.2), variables (1.3), math (1.4), f-strings (1.5)
  ▼
1.7 Strand: Turtle & Sound  (application lesson)
  │  one turtle square driven by one variable; one 3-note motif controlled by one variable
  │  reuses: all of 1.1–1.6
  ▼
Chapter Challenge → Chapter Quiz (gate)
```

Spiral from Ch.0: "sequence as an idea" → now every line of Python *is* that idea
with syntax. Debugging as an idea → now met as real error classes with real
tracebacks.

---

## Lessons

### 1.1 — Output and `print`
*Arc role:* Hook lesson — the first line of Python the student writes.
*Concepts:* `print()`, arguments, strings in quotes, comments, multi-arg spacing,
expressions as args, `NameError`, `SyntaxError`.
(`sep`/`end` are Ch.2-owned — see M1 note above. Do not introduce them here.)
*Rung(s):* 1 predict → 4 fix → 5 complete → 6 write.
*Strand:* words.

Warm-up: From Ch.0 — "what does a sequence of exact steps look like?" (retrieval,
no code).

**How to read an error message (one-page structural explanation — comes before the first error exercise):**
Before any exercise that deliberately triggers an error, show a labelled diagram of one
real traceback (e.g. the `NameError` from `print(Hello)`). Label and explain:
1. The file name and line number — where Python was when it stopped.
2. The error class name (`NameError`) — the *category* of mistake.
3. The description (`name 'Hello' is not defined`) — what specifically went wrong.
4. Reading order: start at the bottom of a long traceback; the last line is the
   direct cause.
One sentence summary: "Python always tells you where it stopped and why — your job is to read from the bottom up." This page appears once; later error exercises refer back to it.
(Implements M3.)

Subsections:
- **`print` shows output** — one argument, text needs quotes; quotes not shown.
  Examples: `print("Hello!")` → `print("Code Lab")` → `print("The answer is", 42)`
  (multi-arg). Exercises: predict `print("Code", "Lab")` output; fix
  `print(Hello)` (NameError demo — use the "how to read a traceback" diagram first);
  write two-line greeting from blank editor.
- **Comments** — `#` to end of line; Python skips them. Examples: comment on its own
  line → inline comment → commented-out code. Exercise: read code with comments and
  predict what runs.

Misconceptions: thinks quotes appear in output; thinks unquoted word is valid text
→ `NameError`; thinks `print` works without parentheses.
Error classes introduced: `NameError`, `SyntaxError`.
Recalls: Ch.0 sequence idea.

---

### 1.2 — Values & Types
*Arc role:* Core concept lesson 1 — the notional machine's atoms. The stepper is
introduced here for predict-the-output exercises.
*Concepts:* int, float, str, bool, None, `type()`, type conversion `int()`/`float()`/
`str()`/`bool()`, truthiness, `TypeError` (mixing types).
*Rung(s):* 1 predict → 4 fix → 5 complete.
*Strand:* numbers.

**Quality bar: this lesson IS the exemplar (`exemplar-w1-values-and-types.md`).
All subsections must match its depth, voice, and exercise style.**

Warm-up: `print("5")` vs `print(5)` — are they the same? (Sets up the lesson's
through-line.)

Subsections:
- **Values and types** — `int` (exact, unlimited); `float` (decimal, `0.1+0.2`
  surprise); `str` (text in quotes); `bool` (`True`/`False`); `None` (no-value
  sentinel, type `NoneType`). `type()` to inspect. Examples: `type(7)` → `type(3.14)`
  → `type("hi")` → `type(True)` → `type(None)`. Exercise: predict `type("7")`;
  fix a call that uses wrong-type arg.
- **`"7"` is not `7`** — the operator's meaning depends on types; `+` adds vs
  concatenates; `*` multiplies vs repeats (`str * int`). `int + float` promotes
  silently; `str + int` → `TypeError`. Examples: `7+7`, `"7"+"7"`, `"ab"*3`,
  `7+3.14`. Stepper: predict the output before running. Exercise: spot-the-error
  in `"Score: " + 5`.
- **Type conversion** — `int()`, `float()`, `str()`, `bool()`; each builds a new
  value; `int("3.5")` is a `ValueError`; `int(3.9)` truncates (not rounds — toward
  zero, not toward negative infinity). Examples: `int("7")`, `float("3.5")`,
  `str(42)`, `bool(0)`.
  Exercise: fix `print("Age: " + 25)`; write a program that converts a string to
  float and prints it.
- **Truthiness** — every value in Python has a truth-value even if it is not `bool`.
  Python's falsy values: `0`, `0.0`, `""`, `None`, `False` — these five count as
  false in a condition. Everything else is truthy. Demonstrate with `bool()`:
  `bool(0)` → `False`; `bool(1)` → `True`; `bool("")` → `False`; `bool("hi")` →
  `True`; `bool(None)` → `False`. Scope note for students: "For the types we've
  seen so far, those are all the falsy values — you'll use this in Chapter 2 the
  moment you write your first `if` statement." Forward reference to Ch.2 is explicit
  so the concept does not feel orphaned. Exercises: predict `bool(0.0)` (falsy);
  predict `bool("0")` (truthy — the string is non-empty); identify which of five
  given values is falsy.
  (Implements M2. Once c1s2 teaches this, c2s1 should RECALL — not re-teach —
  with a line like "You learned in Ch.1 that non-zero, non-empty values are truthy.")

Misconceptions: thinks `"7"` and `7` are equivalent; expects `str + int` to work;
forgets `int("3.5")` fails; thinks `int()` rounds (it truncates toward zero);
thinks `"0"` is falsy (it is truthy — the string contains a character).
Error classes: `TypeError`, `ValueError`.
Recalls: `print` (1.1).

---

### 1.3 — Variables
*Arc role:* Core concept lesson 2 — state and the notional machine made visible via
the stepper.
*Concepts:* assignment as a store-instruction (not equality), reassignment, naming
rules (letters/digits/`_`, no leading digit, no keyword), snake_case convention,
state table (stepper).
*Rung(s):* 1 predict (stepper: what's in the table after each line?) → 3 modify → 5
complete → 6 write.
*Strand:* numbers.

Warm-up: Retrieval — what type is `3.14`? (From 1.2.)

Subsections:
- **Assignment as an instruction** — `name = value` stores the value under the
  name; `=` is not "equals", it is a copy-and-label operation; the right side is
  evaluated first. Stepper trace is the primary worked example (show variable
  table building line by line). Examples: `x = 5` → `y = x + 1` → `x = x + 1`
  (reassignment). Exercises: predict the final state table; fix `5 = x` (SyntaxError
  demo); complete a short program using two variables.
- **Naming** — rules: starts with letter or `_`, letters/digits/`_` only, no
  reserved words; convention: `snake_case`; meaningful names make code readable.
  Examples: `first_name`, `score2`, `total_price` (valid) vs `2score` (starts with
  digit → `SyntaxError`), `for` (reserved keyword → `SyntaxError`), `my-name`
  (the `-` is parsed as subtraction: Python reads `my - name = 5` as an expression,
  not a name, and raises `SyntaxError: cannot assign to expression here`).
  Exercise: fix three invalid names. (Implements m6.)
- **Reassignment and state** — a variable holds *one* value at a time; assigning
  again replaces it; earlier value is gone (unless saved elsewhere).
  **Two-phase reading model (explicit prose before the stepper trace):** "Python
  reads the right side of `=` completely first — using the *current* value of any
  name it finds there — then stores the result back on the left. So `score = score + 5`
  is not circular: step 1, read `score + 5` using the current value of `score`
  (say, `10`), getting `15`; step 2, store `15` under `score`. Let's watch the
  stepper." This two-step model must appear as prose before the stepper trace so
  students do not try to read `score = score + 5` as an equation. The pattern
  `count = count + 1` will recur in every loop in Ch.2; a shaky model here
  compounds. (Implements M4.)
  Stepper trace showing state change. Exercise: write-from-scratch program that
  starts with a number, adds 10, then doubles, printing the value at each step.

Misconceptions: reads `=` as "equals" (comparison); thinks `x + 1` modifies `x`
without re-assigning; thinks names have to be single letters.
Error classes: `SyntaxError` (invalid name like `2score`), `NameError` (using
undefined variable).
Recalls: types (1.2), print (1.1).

---

### 1.4 — Expressions & Math
*Arc role:* Core concept lesson 3 — arithmetic and precedence.
*Concepts:* `+`, `-`, `*`, `/`, `//`, `%`, `**`; `/` always float; `//` truncates
toward negative infinity; precedence (PEMDAS; `**` right-to-left; parens override);
expressions have a value that can be stored or printed.
*Rung(s):* 1 predict → 3 modify → 5 complete → 6 write.
*Strand:* numbers.

Warm-up: Retrieval — what does `int(7 / 2)` give? (Connects to 1.2's `int()`.)

Subsections:
- **Arithmetic operators** — `+`, `-`, `*`, `/` (always float), `//` (floor, toward
  −∞), `%` (remainder follows `//`), `**` (power; right-to-left). Examples:
  `10 / 3` → `10 // 3` → `10 % 3` → `2 ** 8`. Exercises: predict
  `7 // 2` vs `7 / 2`; debug exercise: run `2^8` and observe the output is `10`
  (not 256) — explain that `^` is Python's *bitwise XOR* operator, a silent wrong
  answer with no traceback; the correct power operator is `**` (`2**8` → 256).
  Emphasise: this class of error (wrong answer, no error message) is harder to catch
  than a traceback. (Using `2^8 = 10` in both lesson and quiz per m1: `10` is
  unmistakably not a power of 2, making the trap vivid.)
  **`int()` vs `//` truncation contrast (worked example):** Both drop the fraction,
  but in opposite directions for negative numbers. `int(-7 / 2)` → `int(-3.5)` →
  `-3` (toward zero); `-7 // 2` → `-4` (floor, toward −∞). Label: "`int()` chops
  toward zero; `//` steps down to the floor." Positive numbers look identical, so
  only a negative example reveals the difference. (Implements m2.)
- **Precedence and parentheses** — PEMDAS ordering; `**` before unary minus so
  `-2**2` is `-4`; parens always override. Examples: `2 + 3 * 4` vs `(2 + 3) * 4`;
  `-2 ** 2` vs `(-2) ** 2`. Stepper: predict value before running. Exercise:
  add parens to make a given expression equal a target value.
- **Expressions as values** — an expression is evaluated to a single value; can be
  stored in a variable or passed directly to `print()`. Examples:
  `area = 3.14 * 5 ** 2`, then print it; compute a discount price in one expression.
  Exercise (write, from blank): take three numbers as variables and compute the
  average, printing the result labelled.

Misconceptions: expects `^` to mean power (it is bitwise XOR — silent wrong answer,
no traceback); expects `/` to give an int; thinks `-2**2` is `4`; forgets `**` is
right-to-left.
Error classes: `ZeroDivisionError` (for `//` or `%` by 0; preview only, not
exercised deeply here). Note: `^` does NOT raise any error — it silently
produces the wrong answer (`2^8` → `10`, not `256`), which is a more insidious
bug than a crash. This is the same pair used in the Chapter Quiz (m1 consistency).
Recalls: variables (1.3), int/float distinction (1.2), print (1.1).

---

### 1.5 — Strings
*Arc role:* Core concept lesson 4 — text as data; f-strings as the clean way to build
output; `len`/`round` as fundamental built-ins.
*(String indexing and slicing are owned by Ch.4 — do not introduce them here.)*
*Concepts:* string concatenation (`+`, both sides must be `str`); `str * int`
repetition; `.split()` / `.join()`; `.lower()` / `.upper()` / `.strip()`; f-strings
(`f"…{expr}…"`) including `:.2f` money formatting; `len()`; `round()`; why
`str + int` → `TypeError`.
*Rung(s):* **1 predict → 3 modify → 4 fix → 5 complete → 6 write** (m7: each
subsection opens with at least one predict exercise before any modify/fix exercise).
*Strand:* words.

**Cognitive load note (M6):** This lesson has high concept density. Manage it by:
(a) one concept cluster per subsection, with a predict exercise first; (b) synthesis
subsection comes last, after all tools are introduced; (c) if pacing analysis shows
the lesson exceeds 25 minutes, split into L1.5a (concat/split-join/methods) and
L1.5b (len/round/f-strings) within the same chapter slot.
**Gate (NEW-5):** The L1.5a/L1.5b split decision is a pre-authoring gate — see the
implementation status section above. Lock the lesson ID before writing any content.

Warm-up: Retrieval — what does `"go" * 3` give? (From 1.2 `*` operator on strings.)

Subsections:
- **Concatenation and repetition** — `+` joins two strings end-to-end; `str * int`
  repeats; both sides of `+` must be strings (`str(n)` first); `str * float` fails
  (TypeError). Examples: `"Hello " + "chapter"` → `"Code" + "Lab"` →
  `"-" * 20` (divider line) → `"Ha" * 3`.
  Exercises (predict first — m7): predict `"1" + "2"` vs `1 + 2` (rung 1); fix
  `"Score: " + score` where `score = 10` (rung 4); build a banner by repeating
  `"*"` (rung 6).
- **`.split()` and `.join()`** — `s.split()` splits on whitespace (returns a list of
  words); `s.split(",")` splits on a delimiter; `sep.join(words)` assembles a list of
  strings into one string using `sep` as glue. Both return new values; neither changes
  the original string. Lists are introduced only as a return-value here — Ch.4 owns
  them fully.
  **`.join()` exercise constraint (M7):** The *example* may show a list literal for
  reading comprehension (`["Code", "Lab"]`), but exercises must only ask students to
  call `.join()` on a variable already holding a list (pre-assigned in starter code).
  Students must never be asked to construct `["a", "b"]` syntax in their own writing
  until Ch.4.
  Examples (predict first — m7): predict `"hello chapter".split()` output (rung 1);
  `" ".join(["Code", "Lab"])` → `"Code Lab"`. Exercises: predict the result of
  splitting a sentence (rung 1); join a pre-built list variable with a dash (rung 5,
  list pre-assigned in starter).
- **`.lower()`, `.upper()`, `.strip()`** — case conversion and whitespace trimming;
  each returns a *new* string and leaves the original unchanged (strings are
  immutable). `.lower()` converts every letter to lowercase; `.upper()` converts
  to uppercase; `.strip()` removes leading and trailing whitespace (spaces, tabs,
  newlines). These are the three everyday toolkit methods — used whenever user
  input needs to be normalised before comparison or display.
  **Method chaining (m5):** The result of `.strip()` is itself a string, so you can
  call `.lower()` on it immediately: `"  Hi  ".strip().lower()` → `"hi"`. One
  sentence is enough to name this pattern and explain why it works.
  Examples (predict first — m7): predict `"  Hi  ".strip().lower()` (rung 1);
  `"hello".upper()` → `"HELLO"`; `"  hello chapter  ".strip()` → `"hello chapter"`.
  Exercises: predict `"Code Lab".lower()` (rung 1); write a one-liner that strips
  spaces from a variable and converts it to uppercase (rung 5); spot-the-error:
  student calls `.lower()` and prints the original variable expecting it to be
  changed (method returns a new string — must store or use the result) (rung 4).
  Misconception: thinks calling `.strip()` or `.lower()` on a variable modifies
  the variable in place → must assign the result back or use it directly.

- **`len()` and `round()`** — `len(s)` counts the characters in a string and returns
  an `int`; it works on any sequence (more uses arrive in Ch.4). `round(n)` rounds a
  float to the nearest integer (returns `int`); `round(n, d)` rounds to `d` decimal
  places (returns `float`). Note: `round(2.5)` → `2` and `round(3.5)` → `4`
  (round-half-to-even / "banker's rounding"); pair both cases to prevent the
  misconception "always rounds up."
  Examples (predict first — m7): predict `len("Code Lab")` (rung 1); `round(3.14159, 2)`
  → `3.14`; `round(7 / 2)` → `4`. Exercises: predict `len("Code Lab")` (rung 1);
  use `round()` to clean up a division result (rung 3).

- **f-strings** — prefix `f` before the opening quote; `{expr}` inside is evaluated
  and inserted; cleaner than concatenation + `str()`; any expression valid inside
  the braces at this level (variable, arithmetic, `len()`, `round()`). Ch.1 also
  owns one format spec: `:.2f` for money/prices.
  **`:.2f` decomposition (m4 — must appear before the first example):**
  "Inside `{}`, a colon separates the expression from formatting instructions. `f`
  means float, `.2` means two decimal places. So `{price:.2f}` means: show `price`
  as a float with exactly two decimal places — always, even if the last digit is
  zero." This decomposition prevents the notation from being alien syntax.
  Examples (predict first — m7): predict `f"The answer is {2 + 3}"` (rung 1);
  `f"Hello, {name}!"` → `f"Length: {len(word)}"` → `f"Price: {price:.2f}"` →
  `f"Total: {total:.2f}"`. Worked example:
  ```python
  price = 2.5
  print(f"Price: {price:.2f}")   # Price: 2.50
  tax = 9.99
  print(f"Tax: {tax:.2f}")       # Tax: 9.99
  ```
  All other format-spec options (e.g. `:<`, `:>`, `:,`) are deferred to Ch.7
  Strings Deep where they get a full concept page.
  Exercises: predict an f-string with arithmetic inside `{}` (rung 1); rewrite a
  multi-concatenation print as an f-string (rung 4); write-from-scratch a simple
  receipt that shows item name, price formatted to `:.2f`, and a "Thank you" line
  (rung 6).
- **String building** (synthesis) — combine `.split()`/`.join()`, f-strings, `len()`,
  and `round()` to build multi-part outputs; a formatted report from three variables
  (provide values as variables — actual `input()` is next lesson).
  *Rung: 5 (complete from a stub).* (m8: downgraded from rung 6 — five new tools
  simultaneously is too steep; rung 6 is reserved for the Challenge where students
  have had one more lesson of distance.) Exercise (complete): given a stub with
  variable setup and a `TODO` comment, produce a formatted report from three
  variables, using `len()` and `round()` in the output.

Misconceptions: tries `"Score: " + 5` (TypeError); uses `+` to add string-digits
arithmetically; puts the `f` after the quote; forgets curly braces; thinks `.lower()`
or `.strip()` modifies the variable in place (must store or use the returned value);
confuses `:.2f` with `round()` — both round to 2 places, but `:.2f` always shows
trailing zeros (e.g. `f"{2.5:.2f}"` → `'2.50'`), while `round(2.5, 2)` → `2.5`;
passes original string (not split list) to `.join()`.
Error classes: `TypeError` (str + int; `str * float`; passing string to `.join()`
instead of list), `NameError` (undefined var inside `{}`), `SyntaxError` (malformed
f-string).
Recalls: str type (1.2), type conversion (1.2), variables (1.3).

---

### 1.6 — `input()`
*Arc role:* Core concept lesson 5 — interactive programs; pays off type conversion.
*Concepts:* `input(prompt)` → `str` (always); trailing newline stripped; convert
with `int()` / `float()` before arithmetic; `EOFError` (brief mention); the
`age = int(input("…"))` pattern.
*Rung(s):* 4 fix → 5 complete → 6 write.
*Strand:* numbers (age-in-days calculator mini-project).

Warm-up: Retrieval — three questions from 1.2 conversion: (1) `int("42")` — what
value? (2) `int("3.5")` — value or error? (3) `int("hello")` — value or error?
The `"3.5"` case (a decimal string) is the most relevant to the mini-project, where
a user might type `"25.5"` for their birth year. Both (2) and (3) are `ValueError`;
the difference is that (2) looks like it should work, which is the trap.

Subsections:
- **`input()` always returns a string** — even when the user types digits; the
  prompt is displayed first (no newline after it); result is the user's line with
  trailing newline stripped. Examples: `name = input("Your name? ")` → print it
  back; `age_str = input("Age? ")` → `print(type(age_str))` (shows `str`).
  Exercise: spot-the-error in `years = input("Years? "); print(years * 365)` — runs
  but gives wrong output (repetition not multiplication); fix it.
- **Convert before you compute** — `int(input(…))` or `float(input(…))` as the
  standard pattern; `ValueError` if the user types non-numeric input (name it,
  demo it, don't handle it yet). Examples: `int(input("Age? "))` → compute `days`;
  `float(input("Price? "))` → compute `total`. Exercise: complete a program that
  reads two numbers and prints their sum (stub: variables named, conversion
  missing).
- **Mini-project: age-in-days calculator** — read name and birth year; compute age
  in years (use a `current_year` variable), then days; print a labelled f-string
  summary. This is a write-from-scratch exercise that integrates 1.1–1.5.
  **Model solution and all examples must use f-strings** (not string concatenation +
  `str()`) — f-strings were taught in 1.5 and are the correct pattern. Using the
  inferior concatenation form after explicitly teaching the better one sends the wrong
  signal. (Implements M5. Note: the current c1s6 solution uses concatenation because
  c1s5 has not yet been completed to include f-strings — once B1 is resolved, update
  all c1s6 examples and model solutions to use f-strings.)

Misconceptions: thinks `input()` can return int if user types digits; tries to
multiply the string result and gets repetition; forgets the prompt argument; wraps
the wrong expression in `int()`.
Error classes: `ValueError` (int("hello")), `TypeError` (arithmetic on unconverted input).
Recalls: type conversion (1.2), variables (1.3), arithmetic (1.4), f-strings (1.5).

---

### 1.7 — Strand: Turtle & Sound
*Arc role:* Strand-application lesson — apply Chapter 1 concepts on two real
creative tasks; the student sees that variables controlling art and music is the
same mechanism as everything else. **The defining payoff of this lesson: change one
variable, change everything.** This is the chapter's concluding demonstration that
variables are a creative dial, not just a storage mechanic. Without this payoff the
chapter's through-line is incomplete.
*Concepts:* No new language concepts. Application of: variables (1.3), arithmetic
(1.4), `print` / f-string labelling (1.1, 1.5), `input()` (1.6). Turtle API
(`forward`, `right`, `penup`, `pendown`); Sound API (`play`, `sleep`, `note`).
*Rung(s):* 3 modify → 5 complete → 6 write.
*Strand:* core / sound (words for the label output).

**Implementation note (B2):** Current c1s7 hardcodes `forward(100)` four times and
`play(60)`, `play(64)`, `play(67)` directly. This must be rewritten. The primary
worked example must use `side = 100` driving all four `forward(side)` calls, and
`root = 60` driving `play(root)`, `play(root + 4)`, `play(root + 7)`. The first
modify exercise is: "Change `side` to 150 — notice only one number changed."

Warm-up: Retrieval — what does `90 * 4` equal? (Sets up: four 90° turns = square.)

Subsections:
- **Turtle square from one variable** — `side = 100`; write `forward(side)`,
  `right(90)` four times explicitly (loops haven't arrived — this foreshadows Ch.2).
  The conceptual point: changing `side` once resizes the whole square — one number,
  four effects.
  Examples: side=100 → then `side = 150` (same code, one change); side=50.
  Exercises: modify `side` to draw a larger square — notice only one number changed
  (rung 3); fix a square where one turn is wrong (86 instead of 90) (rung 4); write
  a program that draws two squares of different sizes using two separate `side`
  variables, no overlap — `penup`/`pendown` provided in starter (rung 6).
- **Three-note motif from one variable** — `root = 60` (MIDI); play `root`,
  `root + 4`, `root + 7` with `sleep(0.5)` between; change `root` to transpose the
  entire chord. The conceptual point: arithmetic on `root` defines the harmony —
  the shape stays the same, only the starting pitch changes.
  Examples: root=60 → root=65 → root=48.
  Exercises: modify to play a minor chord (`+3` instead of `+4`) (rung 3); add a
  fourth note (`root + 12`) (rung 5); write-from-scratch a two-bar motif that uses
  `root` for bar 1 and `root + 5` for bar 2 (rung 6).
- **`input()` integration (m11):** Add one `input()`-driven exercise to close the
  spiral within the chapter — students just learned `input()` in 1.6 and this is the
  most motivating context to apply it. Either: "Read a side length from the user,
  draw the square" (rung 5, turtle strand) or "Read a root note, play the chord"
  (rung 5, sound strand). Pick one; scaffold with a partial starter. This ensures the
  `input()` payoff is felt inside the chapter rather than deferred entirely to
  Challenge item 9. (Implements m11.)

Misconceptions: tries to change the square mid-draw without re-running; thinks
changing `root` mid-playback affects already-scheduled notes; forgets that
`forward` takes one number argument; tries to pass a string from `input()` directly
to `forward()` without converting (TypeError).
Error classes: `TypeError` (non-numeric arg to `forward` or `play`).
Recalls: everything from 1.1–1.6.

---

### Chapter Challenge
*Arc role:* Mixed-concept review; ramps from recall to novel combinations.
*Strand mix:* numbers, words, sound.

6–10 exercises in order easy → hard, scaffolding fading to blank editor:

1. **Predict the output** (rung 1) — five expressions covering `+`/`*` on mixed
   types; student writes predictions before running. Tests types (1.2) and operators
   (1.4). Preamble: "In Chapter 0 you described algorithms in plain words. Now name
   the type of each value and predict what Python does — same careful thinking,
   Python syntax." (Implements m9: closes the Ch.0 sequence/algorithm arc.)
2. **Fix the types** (rung 4) — three-line program with two `TypeError`s and one
   `ValueError`; student repairs all three. Tests conversion (1.2) and string ops (1.5).
3. **Name the variables** (rung 4) — working program with names `x`, `y`, `z`;
   rename to meaningful snake_case. Tests naming (1.3); style channel hint.
4. **Stepper trace** (rung 1) — five-line program; student fills in the variable
   table at each step. Tests state/reassignment (1.3) and arithmetic (1.4).
5. **Complete the calculator** (rung 5) — stub with `TODO` for the conversion and
   formula; student fills in. Tests `input()` (1.6) and math (1.4).
6. **Format the report** (rung 5) — given three variables, print a multi-line
   labelled report using f-strings; one line needs a computed expression inside
   the `{}`. Tests f-strings (1.5) and arithmetic (1.4).
7. **Celsius to Fahrenheit** (rung 6, blank) — read temp from `input()`, convert,
   print formatted. Integrates 1.2, 1.3, 1.4, 1.5, 1.6.
   **Hint ladder for item 7 must be generous (m10):** three hints minimum, each one
   revealing a concrete next step (formula, conversion, f-string format). This is the
   first of three consecutive blank-editor items; a sparse hint ladder here triggers
   learned helplessness in items 8 and 9.
8. **Tip calculator** (rung 6, blank) — read bill and tip percent; print amount,
   tip, and total each on their own line with labels, formatted to `:.2f`. Integrates
   all of Ch.1 including `.2f` money formatting (1.5).
8.5. **Receipt stub** (rung 5, complete from stub) — optional interleaving item
   between 8 and 9 to break three consecutive blank-editor items. Provide a stub that
   reads a root note and plays the first two notes; student adds the remaining two.
   Alternatively, the hint for item 9 may serve as a partial stub. (Implements m10.)
9. **Transposing motif** (rung 6, blank, sound strand; requires 1.7) — read a root
   note from `input()`; play a four-note motif offset by `+0`, `+2`, `+4`, `+7`.
   Intentionally placed after 1.7: the sound API pattern (`play`, `sleep`, `note`
   with a variable offset) is introduced in 1.7 and is a prerequisite here. Integrates
   conversion (1.2), variables (1.3), arithmetic (1.4), and sound strand (1.7).
   First hint may be a partial stub (per m10).

---

### Chapter Quiz (gate)
*Must pass to unlock Chapter 2.*

Must gate on:
- **types** — given a literal or expression, name its type; identify the odd-one-out
- **truthiness** — which of five values is falsy? (Must include `0.0` in the
  candidate set per m12 — ensures students know both numeric falsy values, not just `0`.)
- **type conversion** — predict `int("42")`, `int(3.9)`, `int("3.5")` (error or value?); `int("hello")` (error or value?)
- **operator precedence** — predict the value of one expression with `**`, `*`, `+`
- **`^` vs `**`** — given `2^8`, predict the output as a number (checker key:
  expected output is `10` — binary `0b0010 XOR 0b1000 = 0b1010`; not 256, not 0).
  Note in quiz: "This is the same trap from Lesson 1.4 — just a reminder that `^` is
  bitwise XOR, not power." Auto-checked as predict-the-output fill-in (numeric
  answer); not free-text explanation — keyword matchers are too fragile for this.
  (Consistent with L1.4 worked example per m1: `10` is unmistakably not a power of 2.)
- **variables / state** — trace two lines of reassignment and name the final value
- **`.lower()` / `.upper()` / `.strip()`** — predict `"  Hi  ".strip().lower()`; explain why the original variable is unchanged
- **`len()`** — predict `len("Code Lab")`
- **f-string `:.2f`** — predict `f"{2.5:.2f}"` (answer: `'2.50'`); explain why the output differs from `str(round(2.5, 2))`
- **f-strings** — predict the output of an f-string with an arithmetic expression
  inside `{}`
- **`input()` contract** — short-write: why do you need `int()` around `input()`
  before adding a number?

Auto-checked format: predict-the-output (fill-in) for all but the last; short-write
for the final item (graded by keyword matching — must mention "string" or "str" and
"convert" or `int()`).

---

## Progression / difficulty ramp

- **1.1** — rungs 1–4; boilerplate-heavy; student writes a handful of words.
- **1.2** — rungs 1–4–5; predict exercises with the stepper; first fix exercises.
- **1.3** — rungs 1–3–5–6; stepper trace is the core vehicle; one write-from-scratch
  at the end.
- **1.4** — rungs 1–3–5–6; precedence requires genuine reasoning; final exercise
  is blank editor.
- **1.5** — rungs 1–3–4–5–6; each subsection opens with a predict exercise (rung 1);
  synthesis exercise is rung 5 (complete from stub, not blank — five new tools
  simultaneously is too steep for rung 6 on first encounter). Rung 6 is reserved for
  the Challenge where these tools have had one more lesson of distance.
- **1.6** — rungs 4–5–6; mini-project is entirely blank editor; all examples and model
  solutions use f-strings (f-strings taught in 1.5).
- **1.7** — rungs 3–5–6; variable-driven from the start (one `side` variable, one
  `root` variable); includes one `input()`-driven exercise (rung 5) to close the
  spiral within the chapter.
- **Challenge** — monotonically blank editor by item 7–9.

Write-from-scratch is the default expectation by Lesson 1.6 for concepts already
learned, matching the rung-ramp schedule (write-by-default arrives at Ch.3 globally,
but each new concept still provides a complete scaffold on first encounter).

---

## Misconceptions & error classes (chapter-wide)

### Misconceptions
| Misconception | Lesson(s) |
|---|---|
| `"7"` and `7` are the same value | 1.2, 1.5 |
| `=` means "equals" (not assignment) | 1.3 |
| `x + 1` changes `x` without re-assignment | 1.3 |
| `/` returns an integer | 1.4 |
| `^` is the Python power operator (it is bitwise XOR — `2^8` → `10`, not `256`) | 1.4 |
| `int(-3.5)` gives `-4` like `//` does (both truncate, but `int()` goes toward zero, `//` toward −∞) | 1.4 |
| `-2**2` equals `4` | 1.4 |
| `"Score: " + 5` works (str + int) | 1.2, 1.5 |
| `.lower()` / `.strip()` modifies the variable in place (must store the returned value) | 1.5 |
| `:.2f` and `round(n, 2)` are identical — `:.2f` always shows trailing zeros | 1.5 |
| `input()` can return a number | 1.6 |
| Multiplying a string reads as arithmetic | 1.6 |
| Quotes appear in `print` output | 1.1 |
| `int()` rounds (it truncates toward zero) | 1.2 |

### Error classes (all registered to Codex)
| Error | First introduced | Triggered by |
|---|---|---|
| `NameError` | 1.1 | Unquoted name as argument; undefined variable |
| `SyntaxError` | 1.1, 1.3 | Missing quotes; `2score`; bad f-string |
| `TypeError` | 1.2 | `str + int`; `str * float`; wrong-type arg to `forward()`/`play()` |
| `ValueError` | 1.2, 1.6 | `int("3.5")`; `int("hello")` |
| `IndexError` | Ch.4 | Out-of-range index — introduced when indexing is taught in Ch.4 |
| `ZeroDivisionError` | 1.4 | `// 0` or `% 0` (introduced but not drilled) |

Note: `^` (bitwise XOR) is **not** a `SyntaxError` — it produces a silent wrong
answer. `2^8` → `10` (not 256). Taught in 1.4 as an example of a logic error
with no traceback, which is harder to catch than an exception. The lesson and quiz
both use `2^8 = 10` for consistency (m1: `10` is unmistakably not a power of 2).

---

## Sources

- **Python docs — `print()`:** https://docs.python.org/3/library/functions.html#print
  (parameters, defaults, multi-arg behavior, `sep`/`end`)
- **Python docs — truth value testing:** https://docs.python.org/3/library/stdtypes.html#truth-value-testing
  (complete falsy list: `None`, `False`, `0`, `0.0`, `""`)
- **Python docs — numeric types / operator behavior:**
  https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex
  (`//` truncates toward −∞; `int()` truncates toward zero; `0.1+0.2` rounding)
- **Python docs — operator precedence:**
  https://docs.python.org/3/reference/expressions.html#operator-precedence
  (`**` right-to-left, highest among arithmetic; unary minus below `**`)
- **Python docs — f-strings:**
  https://docs.python.org/3/reference/lexical_analysis.html#f-strings
  (syntax; any expression in `{}`; `SyntaxError` on empty `{}`)
- **Python docs — `input()`:**
  https://docs.python.org/3/library/functions.html#input
  (always returns `str`; trailing newline stripped; `EOFError` on EOF)
- **Think Python (Downey), ch.1–2:**
  https://greenteapress.com/thinkpython2/html/thinkpython2002.html,
  https://greenteapress.com/thinkpython2/html/thinkpython2003.html
  (values & types, variables, expressions, string operations, PEMDAS, error taxonomy;
  teaching approach: explore deliberately, make mistakes on purpose)
- **HTTLACS (Wentworth et al.), ch.2:**
  https://openbookproject.net/thinkcs/python/english3e/variables_expressions_statements.html
  (HTTLACS ordering confirmed: values & types → variables → operators → conversion →
  string ops → `input()` → modulus; misconceptions on `=` vs `==` named explicitly)
- **Python for Everybody (Severance), ch.2:**
  https://eng.libretexts.org/Bookshelves/Computer_Science/Programming_Languages/Python_for_Everybody_(Severance)/02:_Variables_Expressions_and_Statements
  (scope cross-check: confirms variables, operators, precedence, `input()`, `%`,
  string ops at this level; f-strings and None/bool/truthiness deferred in that text
  but are standard AP-CSP scope)
- **CSTA K-12 2017 Algorithms & Programming, grade 6–8:**
  Standard 2-AP-11 (data types and variables); 2-AP-10 (algorithms);
  confirms int/str/float typing, variables, and expressions are grade 6–8 scope.
