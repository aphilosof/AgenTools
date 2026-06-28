# Chapter 5 — Thinking in Code

## Overview

Chapter 5 is the "course feels complete" stop-point. By the end the learner can break any problem into named, single-purpose functions (decomposition), write code that another person — or future self — can read without explanation (naming, DRY, magic numbers), and attack a broken program with a four-step protocol instead of random edits. These are not syntax skills; they are thinking habits. The through-line is: *readable code is debuggable code, and debuggable code is code you trust.* The style channel opens here, adding a second feedback layer (style) alongside the existing correctness checker. The Chapter Challenge applies all five skills to three real programs, and the Quiz gates the next chapter on the debugging protocol specifically. Abstraction — named in Ch.3 (functions hide detail) — is deepened here: students now apply it deliberately across decomposition, naming, and DRY.

All five strands appear (numbers, words, data, plot, sound). Rung range is 3–6 with blank-editor expected as default by 5.6. Chapter recalls everything from Ch.1–4; decomposition was named in Ch.3 but is now deepened; debugging has recurred since Ch.2 and is now formalised.

---

## Concepts owned (keywords)

- **decomposition** — breaking a problem into named subproblems, each solved by one function
- **top-down design** — starting from the big task and subdividing before writing code
- **naming** — identifiers that reveal intent; name-as-contract with the reader
- **style channel** — the second feedback layer (naming, magic numbers, repetition, function length)
- **DRY (Don't Repeat Yourself)** — every piece of knowledge appears once; duplication is a maintenance trap
- **magic number** — a bare literal whose meaning is not self-evident; replaced by a named constant
- **function length** — a function that does one thing fits in one screen; length is a symptom, not the disease
- **debugging protocol** — the four-step procedure: (1) read the bottom line, (2) find the line, (3) walk the stack, (4) hypothesise and test
- **traceback** — Python's error report; structured, readable once you know the anatomy
- **precondition / postcondition** — caller's responsibility vs. function's responsibility; locates where the bug is

---

## Concept map & dependencies

```
Ch.1–4 (all recalled):
  variables, expressions, input/output       ← warm-up retrieval every lesson
  functions (def, params, return, scope)     ← 5.1 deepens; 5.3 refactors
  lists, dicts, sets, loops                  ← used in strand applications
  errors met (NameError, TypeError, etc.)   ← 5.4 formalises reading them
  DRY (c3s0, c3s1, c3s2, c3s5)             ← 5.3 deepens to data/constants
  top-down design / wishful thinking (c3s8) ← 5.1B names and formalises
  three-step debugging (c2s6)               ← 5.4 upgrades to four steps
  try/except, ZeroDivisionError (c2s8)      ← 5.4C bridges to preconditions
  docstrings (c3s5)                         ← 5.5C places next to pre/postconditions

Within chapter:
  5.1 Decomposition
      └─ 5.2 Naming (names make decomposition legible)
            └─ 5.3 DRY + magic numbers (repetition is a naming+structure failure)
                  └─ 5.4 Debugging Protocol — traceback anatomy + steps 1–2
                        └─ 5.5 Debugging Protocol — steps 3–4 + print-tracing
                                                   + preconditions
                              └─ 5.6 Checkpoint Projects (apply all skills to real programs)
```

Teaching order is strictly linear; each lesson presupposes the previous. The style channel opens mid-5.2 and accumulates: naming rules engage from 5.2, DRY and magic-number rules engage from 5.3, function-length flag from 5.3 onward. Chapter now has six lessons (5.1–5.6); the split at 5.4/5.5 follows from the cognitive load analysis in the panel review.

---

## Lessons

### 5.1 — Decomposition
*Arc role: Hook + first concept lesson. Motivates the chapter's core claim.*
*Rung: 5–6. Strand: core / numbers / words.*

**Concepts:** decomposition, top-down design, single-responsibility functions, calling functions from functions.

**Warm-up recall:** "What does a function's `return` statement do? What happens if you forget it?" (recalls Ch.3.3)

**Subsection A — What decomposition means**

*Hook first — experience before definition.*

Begin with a runnable 35-line monolith: a BMI calculator that does input, validation, calculation, and output all in one block. First task (before any concept is named): "Run this. Now: if I change the weight unit from kg to lb, how many lines do you edit? Highlight them all." Students trace the change through the unsorted mass of code and feel the difficulty — multiple spots, easy to miss one.

Only after that experience does the concept name appear:

- Concept: a complex task is broken into subproblems, each solved by one function. The top-level function reads like a plan; the sub-functions handle the details. (Think Python §3.11 "fruitful functions and void functions"; §4.8 "a development plan")
- Worked example 1: the same BMI logic as `get_weight()` / `get_height()` / `compute_bmi()` / `print_result()` — now the top-level function is four readable lines. Changing the weight unit means changing exactly one function.
- Worked example 2 (harder): `make_greeting_card()` that calls `draw_border()`, `write_name()`, `add_signature()` — each sub-function reuses a loop from Ch.2.
- Exercise 1 (boilerplate): given a working but monolithic temperature-converter, identify the three sub-tasks and fill in the three `def` stubs.
- Exercise 2 (stub): write `total_cost()`, `apply_discount()`, `print_receipt()` for a shopping bill; the top-level call is given.
- Exercise 3 (blank): write a two-function word-count program from scratch: one that gets text from `input()`, one that counts words with `.split()` *(recall Ch.1 — Strings)*.
- *Misconceptions:* "one big function is simpler" (it is shorter to type, not simpler to read or fix); "decomposition means more typing" (it means less later).
- *Error classes:* none new; NameError if a function is called at the top level before its `def` has executed — not from helper definition order (Python resolves names at call time, so `def a(): return b()` defined before `def b()` works fine as long as `a()` is not called until after both defs run).
- *Recalls:* Ch.3 — `def`, params, return; Ch.1 — `input`, `.split`.

**Subsection B — Top-down design**

- Concept: "In Ch.3 Functions in the Wild (c3s8) you wrote a signature and `pass` before the body — we called it wishful thinking. Now we name that technique: **top-down design**. Write the top-level outline first as stub functions that just `pass` or print a placeholder, then fill each in. Think Python §4.8 'development plan.'"
- Side-by-side worked example (before the exercise — required by M4):

  **Case 1 — top-level call before `def` → NameError:**
  ```python
  greet()          # NameError: name 'greet' is not defined

  def greet():
      print("Hello!")
  ```
  Python has not yet processed the `def` when it reaches the call at the top level, so `greet` does not exist yet.

  **Case 2 — helper-to-helper order does not matter:**
  ```python
  def a():
      return b()   # calls b — fine as long as a() isn't called yet

  def b():
      return 42

  print(a())       # works: both defs have run by the time a() is called
  ```
  Python resolves names at *call time*, not at *definition time*. Helpers can reference each other freely; only a top-level call placed above its `def` raises NameError.

- Worked example: a stub-first number-guessing game skeleton — top level is 5 lines, all calls; stubs fill in one at a time.

  *(Note: the number-guessing game appears here as a stub-first demo only; the 5.6 checkpoint project uses a fresh domain to preserve novelty.)*

- Exercise (fix): given stubs with a wrong call order that crashes with a NameError (top-level call placed before `def`), reorder so it runs.
- *Misconceptions:* "you have to define functions in the order they will be called" (Python resolves names at call time — only a top-level call placed above its `def` raises NameError; helper definition order among functions does not matter).

---

### 5.2 — Naming Things Well
*Arc role: Concept lesson. Style channel opens.*
*Rung: 3–6. Strand: core / words / data.*

**Concepts:** intent-revealing names, naming conventions (`snake_case`, all-caps constants), the style channel (first appearance), name-as-contract.

**Warm-up recall:** "Look at this function: `def f(d, t, r): ...`. A developer calls it as `f(rate, days, principal)` — arguments in the wrong order. Why does the wrong-order bug happen, and what does a better signature look like?" (motivates naming as a contract before a line is written; shows naming *cost* not just benefit — recall Ch.3 — params/args)

**Subsection A — Names are for readers**
- Concept: a name is a promise to the reader about what the variable or function contains or does. Short cryptic names ("d", "tmp", "f") force the reader to reverse-engineer the intent. (CSTA 2-AP-11: "clearly named variables"; Think Python §3.11 point 1: "name a group of statements, which makes your program easier to read and debug")
- Worked example 1: the same grade-average calculation with names `a, b, c, x` vs. `score_1, score_2, score_3, average` — no other change.
- Worked example 2: function `p(n, r, t)` vs. `compute_interest(principal, rate, years)` — calls become self-documenting.
- **Exercise 1 (rung 3 / modify — style-channel introduction):** a working program with two style violations is given (one single-letter variable, one `camelCase` function name). The style checker is live for the first time. Students rename both variables until the style channel reports no violations. Low cognitive load: no logic to write, just renaming. This is the student's first interaction with the style channel.
- Exercise 2 (rung 5 / stub): write a function with a name and parameter names that make its purpose obvious, given a prose description ("a function that checks whether a password is long enough").
- Exercise 3 (rung 5 / fix / debug): a function named `do_thing(x)` that has a logic bug — it computes `x * 2` when it should compute `x ** 2`. Because its name hid the intent, the bug was invisible for longer. Rename and spot the error.
- Exercise 4 (rung 6 / blank — open domain): given a plain-English description of a small data-summary program (three inputs, two calculations, one output), write the complete program from scratch using only well-named variables and functions; the style channel must report no naming violations.
- *Style channel items activated (from this lesson on):* single-letter names (warns); `camelCase` for variables (warns); vague verb (`do_`, `process_`, `handle_`) without qualifier (warns). The style channel catches exact violations; near-miss detection (e.g. semantically vague but syntactically valid names) requires human review — the student is the detector for subtler cases.
- *Misconceptions:* "short names save time" (they cost time later); "I know what it means right now" (future-you does not); confusing snake_case (variables/functions) with ALL_CAPS_UNDERSCORES (constants).
- *Error classes:* NameError from typos in renamed variables.
- *Recalls:* Ch.1 variables; Ch.3 `def`/params.

**Subsection B — Function names are verbs; variable names are nouns**
- Concept: functions *do* things → verb phrases (`calculate_area`, `is_prime`, `get_score`). Variables *hold* things → noun phrases (`student_name`, `total_count`). Boolean names use `is_`, `has_`, `can_`. This mirrors Python's own library — `str.isdigit()` and `str.isupper()` follow the same pattern, which is why it will feel familiar when you encounter it.
- Worked example: refactor `data()` and `check(x)` to `load_scores()` and `is_passing(grade)`.
- Exercise (arrange / Parsons): given scrambled name choices, pick the most readable name for each role.
- *Misconceptions:* naming a function with a noun (`"scores"`) when it does computation.

---

### 5.3 — Don't Repeat Yourself
*Arc role: Concept lesson. DRY + magic numbers + function length added to style channel.*
*Rung: 4–6. Strand: numbers / words / sound.*

**Concepts:** DRY deepened to data (named constants), magic numbers, `ALL_CAPS` constants, function length as a symptom.

**Warm-up recall:** "If you copy-paste a block of code three times and then find a bug in it, how many places do you fix?" (intuition pump; also explicitly retrieves Ch.3 DRY)

**Subsection A — Spot and remove duplication**
- Concept: "In Ch.3 you replaced copy-pasted code with a function — that is DRY applied to code. You already own this principle. Here you apply the same instinct to *data*: a magic number appearing in three places is a DRY violation too. And extracting a duplicated block into a function does two things at once: it *names* the piece of knowledge (5.2) and it puts that knowledge in *one place* (5.3). DRY and naming are the same instinct."
- Worked example 1 (easy): a sound program that plays the same note in three places by calling `play(440, 0.5)` three times, each block slightly different → refactored to `play_note(frequency, duration)` called once per need.
- Worked example 2 (harder): a 20-line program that calculates tax twice with two slightly different formulas — classic copy-paste drift. Identify the single correct version and extract a function.
- Counter-example — over-applying DRY: a `process_data(data, mode)` function that branches on a `mode` flag to do completely different things ("sort" vs. "filter"). It *looks* like DRY (one function instead of two) but cannot be named well, cannot be tested cleanly, and is harder to change than two separate functions would be. DRY applies to the *same piece of knowledge*, not to code that merely looks similar. This is the flag-parameter anti-pattern.
- Exercise 1 (rung 5 / stub): given a duplicated block, extract it into a named function and replace each copy with a call. *(Rung starts at 5, not 4, to honour Ch.3 coverage — the concept is extension, not introduction.)*
- Exercise 2 (fix): given a copy-paste drift where the two copies compute differently, identify which is right, extract, and replace both.
- Exercise 3 (blank): write a text-stats function `count_long_words(text, min_length)` that replaces three inline repetitions in a given top-level program.
- *Style channel items activated:* exact duplicate literal block (flags); the style channel catches exact duplicate blocks — for near-duplicates, you are the detector.
- *Misconceptions:* "it's fine as long as they're the same right now" (they won't be); over-applying DRY and creating a single function that does unrelated things (the flag-parameter anti-pattern — a function cannot be named well if it does two things; it is harder to test and harder to change).
- *Error classes:* no new classes; reinforces that silent wrong output (copy-drift) is harder to find than a crash.

**Subsection B — Magic numbers**
- Concept: a bare literal whose meaning is not obvious from context is a magic number. It violates DRY (if it appears twice, both must change together) and readability (the reader must know the domain to decode it). Replace with an `ALL_CAPS` constant. (Think Python §4.5 "Generalization"; Pluralsight "Avoiding Magic Numbers")
- Worked example 1: `if score >= 60:` → `PASSING_SCORE = 60; if score >= PASSING_SCORE:` — explain: what is 60? A test score? A timer? The name says.
- Worked example 2: a sound program with `play(440, 0.5)` repeated — extract `A4_FREQ = 440; BEAT = 0.5`.
- Exercise 1 (rung 4 / modify): given a program with four magic numbers, name each one at the top of the file. *(Rung 4 is appropriate here because ALL_CAPS constants are genuinely new content.)*
- Exercise 2 (fix): a program where the same magic number `7` appears with two different meanings (days in a week, maximum tries) — the bug from conflating them; split into `DAYS_PER_WEEK` and `MAX_TRIES`.
- *Style channel:* bare numeric literal in `if` condition or function argument that is not 0, 1, or -1 → style warning; suggest naming it.
- *Misconceptions:* "0 and 1 are fine" (usually yes — but `MAX_RETRIES = 1` still makes intent clear when needed); ALL_CAPS means constant, not "important variable."

**Subsection C — Function length as a symptom**
- Concept: a function longer than ~15 lines is doing more than one thing. Length is a *symptom* — the disease is mixed responsibility. The fix is to extract sub-functions, not to split arbitrarily. (Think Python §3.11; CSTA 2-AP-14)
- Worked example: a 30-line `run_quiz()` that reads questions, checks answers, and prints a score — decompose into `load_questions()`, `ask_question()`, `show_score()`.
- Exercise (stub): given a 25-line monolith with obvious sub-tasks, extract two named functions (stubs provided, bodies blank).
- *Style channel:* function body ≥ 20 lines → "This function might be doing more than one thing. Could you name two jobs it's doing?"

---

### 5.4 — The Debugging Protocol: Reading the Traceback
*Arc role: Concept lesson. Traceback anatomy + protocol steps 1–2.*
*Rung: 2–6. Strand: core (all strands provide the broken programs).*

**Concepts:** traceback anatomy, reading direction (bottom-up), the debugging protocol steps 1 and 2, hypothesis-driven debugging (steps 1–2 only).

**Warm-up recall:** "In Ch.3 you saw Python stack frames when functions call each other. Draw the stack for this two-function program: `def a(): return b()` / `def b(): return 1 / 0` / `a()`. Then: a Python traceback is exactly that stack printed on screen, most recent frame last." (activates the frame-stack schema that makes traceback reading meaningful — recall c3s4 scope/stack)

**Subsection A — Anatomy of a traceback**
- Concept: a traceback is a chain of function calls, most recent last. The *bottom line* names the exception type and message; the *line just above it* is where Python was when the error happened. Reading bottom-to-top surfaces the cause before the symptom. (Software Carpentry "Errors and Exceptions"; BYU CS111 Debugging Guide; Think Python Appendix A)
- Worked example 1 (predict): show a full traceback — three frames — with annotations naming each part: file, line number, source text, exception class, message. Walk the chain aloud.
- Worked example 2 (harder): a traceback where the error is a `KeyError` in a helper function called from a helper function — demonstrate that the *top* frame is not the site of the bug.
- Exercise 1 — counter-intuitive override drill (rung 2 / predict): show one traceback where the top frame is `main` and the error is in a helper three calls deep. Require the student to write *both* answers: (a) "Where does the top frame point?" and (b) "Where does the bottom frame point?" Then: "Which is the error site, and why?" This forces the cognitive override of the top-down reading reflex explicitly.
- Exercise 2 (rung 3 / predict): given three additional tracebacks, identify (a) the exception class, (b) the line number, (c) which function the error is in — write the answers before running anything.
- Exercise 3 (rung 5 / fix): a deliberately broken program with a multi-frame traceback; apply steps 1–2 of the protocol (read the bottom line, find the line) and fix.
- *Misconceptions:* "the error is at the top of the traceback" (it is at the bottom); "the error is in someone else's library code" (usually the frame just above the library call is yours).
- *Error classes:* reviews all error classes met by Ch.5 (NameError, TypeError, SyntaxError, IndentationError, IndexError, KeyError, ValueError — ZeroDivisionError introduced in Ch.2 c2s8; recalled in Ch.4; formalised here — AttributeError introduced in 5.5B below).

**Subsection B — Protocol steps 1 and 2**
- Concept: "In Ch.2 (c2s6) you learned a three-step process for debugging — read the error, go to the line, understand before changing. It worked because your programs were flat. Now that functions call functions, you need the upgraded four-step protocol. This lesson covers steps 1 and 2; the next lesson adds steps 3 and 4."

  The first two steps: (1) read the bottom line — get the exception type and message; (2) find the line — go to the file and line number.

- Worked example — hypothesis modelled as code comments:

  Scenario: `counter` is an `int`; the developer writes `counter + input("Add: ")` — `int + str` — which raises `TypeError: unsupported operand type(s) for +: 'int' and 'str'`.

  Show the four-step skeleton as actual Python comments in the file, with steps 1 and 2 filled in:
  ```python
  # Step 1: TypeError — unsupported operand type(s) for +: 'int' and 'str'
  # Step 2: line 8 — the expression counter + input("Add: ")
  # Step 3: (next lesson)
  # Step 4: (next lesson)
  ```
  Explain: steps 3 and 4 are left blank intentionally — you will fill them in after the next lesson.

- Exercise 1 (rung 4 / fix): a program with a `ValueError` from `int("3.5")` — apply steps 1 and 2 explicitly; the exercise provides the four-comment skeleton with steps 1 and 2 blank to fill in. *(Intentionally the same broken program as 5.5A Exercise 1 — students apply steps 1–2 here and all four steps in the next lesson.)*
- Exercise 2 (rung 5 / fix): a program with a `TypeError` in a two-function call chain — apply steps 1 and 2, write them as comments, then fix.
- *Misconceptions:* "just change something and see" (random edits waste time and introduce new bugs); "the hypothesis has to be right first try" (it doesn't — the protocol is iterative).
- *Recalls:* Ch.2 three-step debugging (c2s6); Ch.1 types/conversion; Ch.3 scope (stack frames are scope boundaries, c3s4).

---

### 5.5 — The Debugging Protocol: Walking the Stack and Print-Tracing
*Arc role: Concept lesson. Protocol steps 3–4 + print-tracing + precondition / postcondition.*
*Rung: 4–6. Strand: core (all strands provide the broken programs).*

**Concepts:** debugging protocol steps 3 and 4, print-tracing strategy, precondition / postcondition, `assert` as executable precondition.

**Warm-up recall:** "State steps 1 and 2 of the debugging protocol from memory. Now: what information do you have after step 2 that you didn't have before?" (retrieves 5.4B; motivates why steps 3 and 4 are needed)

**Subsection A — Protocol steps 3 and 4**
- Concept: steps 3 and 4 complete the four-step protocol: (3) walk the stack — trace back one frame at a time until you reach code you wrote; (4) hypothesise and test — state in one sentence what you think is wrong, change *one thing*, and re-run. (BYU CS111; Kurniawan et al. 2025; Think Python Appendix A)

  Step 3 is what functions make possible — in Ch.2 your programs were flat and had no stack to walk. Now you follow the call chain backward.

- Worked example: complete the four-step protocol on the `counter + input("Add: ")` TypeError from 5.4B — now filling in steps 3 and 4 as comments:
  ```python
  # Step 1: TypeError — unsupported operand type(s) for +: 'int' and 'str'
  # Step 2: line 8 — the expression counter + input("Add: ")
  # Step 3: called from main(); input came from input() — returns a string
  # Step 4: Hypothesis — forgot int() around input(). Fix: counter + int(input("Add: "))
  n = counter + int(input("Add: "))
  ```

- Exercise 1 (rung 4 / fix): a program with a `ValueError` from `int("3.5")` — apply all four steps; the starter code provides the four-comment skeleton blank. *(Intentionally the same broken program as 5.4B Exercise 1 — students now complete the protocol they started there.)*
- Exercise 2 (rung 5 / fix): a program with a silent wrong-answer bug (semantic, no crash) — show the protocol still applies: "step 1 is 'wrong output'; step 2 is the line that produces it."
- Exercise 3 (rung 6 / blank): given a two-function program that crashes, apply the full four-step protocol and fix it — write each step as a comment: (1) exception + message, (2) line found, (3) stack traced to, (4) hypothesis and fix.
- *Misconceptions:* "just change something and see"; "the hypothesis has to be right first try"; "semantic bugs don't need the protocol" (they need it most).
- *Error classes:* `AttributeError` (calling a method on `None`; e.g. a function body that forgets `return` — verified: `def f(): x = 1` then `f().upper()` raises `AttributeError: 'NoneType' object has no attribute 'upper'`).
- *Recalls:* Ch.2 debugging (c2s6); Ch.1 types/conversion; Ch.3 scope (c3s4).

**Subsection B — `print`-tracing**
- Concept: when the traceback points to correct-looking code — or when the bug is semantic (wrong output, no crash) — the next tool is labelled `print` statements. Pattern: add `print(f"[DEBUG] variable_name = {variable_name}")` at key points (entry to a function, exit, loop body). Read the labels first, then the values; remove the prints once the bug is found. (BYU CS111 Debugging Guide; Think Python Appendix A §A.3)
  - Rule of thumb: one `print` at the start of each function call chain you suspect; narrow inward. Never scatter prints randomly.
  - Worked example: a function `average(nums)` returns the wrong value — a `print` at the accumulator loop reveals the total is initialised wrong. Step through: add print, re-run, read, fix, remove print.
  - Exercise (rung 5 / fix): a two-function word-counter gives the wrong count for text with multiple spaces between words — the function uses `.split(' ')` (with an explicit space argument) instead of no-arg `.split()`, which leaves empty strings in the list and inflates the count. Add labelled `print` statements to the list produced by the split call, observe the empty strings, identify the line, change `.split(' ')` to `.split()`, verify the count is now correct, remove the prints. (Verified: `'the  quick   fox'.split(' ')` → 6 elements including empty strings; `.split()` → 3 elements.)
- *Misconceptions:* "print statements are a last resort" (they are a routine tool alongside the protocol).
- *Recalls:* Ch.1 `print`, f-strings (c1s5); Ch.3 `return` (c3s3).

**Subsection C — Precondition / postcondition**
- Concept: a *precondition* is what the caller must guarantee before calling a function (e.g. "the list must be non-empty"). A *postcondition* is what the function guarantees on return (e.g. "returns a float"). Writing these as one-line comments above a function answers the question "whose bug is it?" — if the precondition was violated, the caller is at fault; if the precondition held and the return is wrong, the function is at fault. (Think Python §6.9; CSTA 2-AP-19)

  **Important:** preconditions are not only a debugging tool — professional programmers write them when they *design* a function, before writing the body, to clarify exactly what the function requires. Writing this down first prevents an entire class of bugs. Precondition and postcondition comments sit just inside the function, next to or inside the docstring you learned in Ch.3 (recall c3s5).

  **The `assert` statement turns a precondition comment into a runtime check:**
  ```python
  def average(scores):
      """Return the arithmetic mean of scores."""
      # Precondition: len(scores) > 0
      # Postcondition: returns a float
      assert len(scores) > 0, "average() requires a non-empty list"
      return sum(scores) / len(scores)
  ```
  If the caller violates the precondition, `assert` raises `AssertionError` with your message — immediately pointing to the caller as the bug site.

  **LBYL vs EAFP:** if the precondition is that `len(scores) > 0`, the caller can enforce it with `assert` (precondition contract) or the function can defend with `try/except ZeroDivisionError` (EAFP from Ch.2 c2s8). Both are valid — preconditions are the right choice for internal library functions where callers are known; `try/except` is the right choice for user-facing code where input is unpredictable.

  - Worked example: `average(scores)` with precondition `# len(scores) > 0` — the empty-list `ZeroDivisionError` (introduced c2s8, recalled here) is a caller bug, not a function bug. The `assert` catches it immediately with a clear message.
  - Exercise (rung 5 / stub): given three function stubs, write the precondition and postcondition as comments for each; then write an `assert` for the most important precondition of each; then identify which function is responsible when a sample buggy run violates one of them.
- *Misconceptions:* "preconditions are documentation, not debugging" (they are exactly how you locate bug ownership, and `assert` makes them executable); "print statements are a last resort" (they are a routine tool alongside the protocol).
- *Error classes:* `ZeroDivisionError` (introduced c2s8; recalled in Ch.4; formalised here as a canonical precondition-violation example).
- *Recalls:* Ch.3 — function definitions, `return`, docstrings (c3s3, c3s5); Ch.2 — `try/except`, EAFP (c2s8); Ch.1 — `print`.

---

### 5.6 — Checkpoint Projects
*Arc role: Strand-application lesson + checkpoint. All five skills tested on real programs.*
*Rung: 6 (write from scratch throughout). Strand: numbers / words / sound.*

**Concepts:** all of Ch.5; also applies Ch.1–4 recall across three projects.

**Warm-up recall:** "State the four steps of the debugging protocol from memory." (gates on 5.4–5.5)

**Project A — Buggy calculator** *(strand: numbers)*
- Given: a working but badly written 35-line monolith — magic numbers, single-letter names, no functions, duplicated `print` strings, plus a seeded `ValueError` on bad integer input.
- Tasks: (1) apply the four-step protocol (write hypothesis as a comment) to the `ValueError`; (2) decompose into at least four named functions; (3) extract two magic numbers as constants; (4) handle bad input with the bulletproof-input sentinel pattern from c2s8 (`while True` / `break`); (5) ensure the style channel is silent.
- Check: correctness checker + style checker (naming, magic numbers, no functions > 15 lines).
- *Recalls:* `while True / break` sentinel (c2s4, c2s8); `int()` conversion (c1); `ValueError` (c2s8, 5.5A).

**Project B — Text-statistics tool** *(strand: words)*
- Given: a specification only (no starter code).
- Build from scratch: `load_text()`, `count_words()`, `count_unique()`, `find_longest()`, `print_report()`.
- Use `.split()`, `len()`, a `set` *(recall Ch.4, c4s4)*, a loop — all recalled from Ch.1–4.
- Style channel active; correctness checks each function independently.
- Final exercise: deliberately introduce an `IndexError` bug into the working `find_longest()` function (e.g. calling `words[0]` on an empty list), then apply the four-step protocol in writing (hypothesis as comment) before fixing it. *(IndexError is more natural for this text-stats domain than KeyError, since the data structure is a list, not a dict.)*

**Project C — Refactor and extend a messy song** *(strand: sound)*
- Given: a 40-line sound program with copy-pasted note sequences, bare `440`/`0.5` literals, and a 28-line `main()` function.
- Tasks: (1) identify and name all magic numbers as constants; (2) extract the repeated note pattern into a parameterised function; (3) shorten `main()` to ≤ 10 lines; (4) run the style checker to silence.
- Final step: now that your functions are named and short, write a 4-bar variation by changing the constants and the pattern. The code should stay under 10 lines of `main()`. The student refactors *in order to do something new*, not for cleanliness as an end in itself.

*Error classes to provoke and fix across the three projects:* `ValueError`, `TypeError`, `IndexError`, at least one silent wrong-answer bug.
*Recalls:* everything Ch.1–4: types, conversion (c1s4), `input` (c1s2), loops, `if`, functions (c3), lists, dicts, sets (c4s4), `.split()` (c1s5), `play()`, `while True / break` (c2s4, c2s8), `try/except` (c2s8), f-string `:.2f` (c1s5).

---

## Progression / difficulty ramp

- **5.1** — rung 5–6; timeBudgetMin: 20. Students write helpers from scratch but the top-level structure is usually given or outlined.
- **5.2** — rung 3–6; timeBudgetMin: 20. Ramp starts at rung 3 (rename exercise, style-channel introduction at low cognitive load), escalates to rung 6 (blank-editor naming exercise); the style channel provides automatic feedback throughout.
- **5.3** — rung 4–6; timeBudgetMin: 20. DRY extraction starts at rung 5 (Ch.3 coverage means it is extension, not introduction); named constants start at rung 4 (genuinely new content); blank-editor end keeps the ceiling at 6.
- **5.4** — rung 2–6; timeBudgetMin: 20. Predict exercises (rung 2–3) build traceback-reading schema; fix exercises (rung 4–5) apply steps 1–2; traceback direction drill forces explicit cognitive override.
- **5.5** — rung 4–6; timeBudgetMin: 20. The rung-6 blank exercise (5.5A Exercise 3) requires applying all four steps from memory in comments; 5.5B adds rung-5 print-tracing; 5.5C adds rung-5 precondition exercises with `assert`.
- **5.6** — rung 6 throughout; timeBudgetMin: 25 (flag for potential two-session delivery if needed). No starter code for Project B (specification only); Projects A and C start from provided (broken/messy) code — Project C requires the messy starter by definition and ends with a generative composition task.

No lesson is easier than the one before it. Style channel pressure increases monotonically from 5.2 onward — it is additive, not reset.

---

## Chapter Challenge (outline)

Six exercises, easy → hard, covering all five concepts, mixing strands. Scaffolding fades to blank.

1. **(rung 3 / modify)** A working word-count function is given. Add a `MIN_LENGTH` constant for "long word" (currently `4` is a magic number); rename two poorly named parameters; run the style checker to silence. *(words strand)*
2. **(rung 4 / fix)** A four-function number-stats program crashes with a `ZeroDivisionError` (introduced c2s8; provoked here when the input list is empty). Apply the four-step protocol (write the hypothesis as a comment) and fix. *(numbers strand)*
3. **(rung 4 / fix)** A 30-line data-loading function has a copy-paste drift: two versions of the same "clean a string" block, one with `.strip()` *(recall Ch.1 — Strings)* and one without. Identify, extract, and fix. *(data strand)*
4. **(rung 5 / complete)** A stub of a plot program (`plot_temperatures`) has four sub-function stubs. Fill in each body; name all constants; ensure function length ≤ 15 lines each. *(plot strand)*
5. **(rung 6 / write)** Write a three-function beat-builder from scratch: `load_pattern()` reads a comma-separated string into a list, `play_pattern()` plays each step, `loop_pattern(n)` repeats it. The style checker must pass. *(sound strand)*
6. **(rung 6 / write — boss)** Given a plain-English description of a shopping-receipt program (five requirements), design the functions top-down (write stubs first), fill them in, handle bad input with the debugging protocol applied in advance (write preconditions as comments, add `assert` for the key ones), and make the style channel silent. Use `:.2f` formatting for currency (recall c1s5). No starter code, no hints. *(numbers / words strand)*

---

## Chapter Quiz (outline)

The gate before Ch.6. Auto-checked. Must pass all four to unlock.

1. **Predict-the-traceback (2 questions):** given a short program, state the exception class, the line number, and the function name where the error occurs. Tests traceback anatomy (5.4).
2. **Spot the style violation (2 questions):** given a snippet, identify the specific problem (magic number, duplicated block, or misleading name) and write the corrected version. Tests 5.2–5.3.
3. **Protocol recall (1 question — short write):** list the four steps of the debugging protocol in order. Exact names not required; concepts are auto-graded on keywords.
4. **Decompose and name (1 question):** given a monolithic 10-line `main()`, split it into two well-named function stubs (signatures only) with a one-sentence docstring each. Tests 5.1 + 5.2.

*Must-pass:* all four sections. Partial credit does not unlock Ch.6.

---

## Misconceptions & error classes (chapter-wide list)

**Misconceptions:**
- "One big function is simpler" — shorter to type, not simpler to understand or fix (5.1)
- "You have to write functions in the order they will be called" — Python only cares definitions precede the runtime call; helper-to-helper ordering does not matter (5.1)
- "Short names save time" — they cost time when reading later (5.2)
- "I know what it means right now" — future-you and collaborators do not (5.2)
- "It's fine as long as the copies are the same now" — copy-paste code drifts (5.3)
- "DRY means never repeat code" — it means every *piece of knowledge* has one home; sometimes similar-looking code is genuinely independent (5.3)
- "DRY can be over-applied into a flag-parameter anti-pattern" — one function with a `mode` parameter that does completely different things violates DRY's spirit; DRY applies to the *same piece of knowledge*, not to code that merely looks similar (5.3)
- "0 and 1 are always fine as literals" — usually, but `MAX_TRIES = 1` communicates more than `1` alone (5.3)
- "The error is at the top of the traceback" — the exception is at the bottom; the top is the entry point (5.4)
- "Just change something and see" — random edits waste time and mask root causes (5.4)
- "The hypothesis must be right first time" — it is an educated guess; the protocol is iterative (5.5)
- "Semantic bugs don't need the protocol" — they need it most, because there is no crash to guide you (5.5)
- "Preconditions are documentation, not debugging" — they locate bug ownership and `assert` makes them executable (5.5)
- "Print statements are a last resort" — they are a routine tool alongside the protocol (5.5)

**Error classes (all previously introduced; formalised in 5.4–5.5):**
- `NameError` — undefined name; often a typo in a renamed variable (5.2) or a top-level call placed before its `def` has executed (5.1) — helper definition order among functions does not matter
- `TypeError` — wrong type; scenario: `counter + input("Add: ")` (`int + str`) raises `unsupported operand type(s) for +: 'int' and 'str'` (5.4B); common in 5.6 when `input()` result is not wrapped in `int()`
- `SyntaxError` / `IndentationError` — structure errors; surface when extracting functions if indentation is wrong
- `IndexError` — off-by-one in list operations; deliberately provoked in Project B
- `KeyError` — missing dict key; appears in data exercises
- `ValueError` — `int()` on a non-integer string; the seeded bug in Project A
- `ZeroDivisionError` — introduced in Ch.2 (c2s8, `try/except`); recalled in Ch.4; formalised in Ch.5 (5.5C as a canonical precondition-violation example; Chapter Challenge exercise 2)
- `AttributeError` — calling a method on `None`; first taught in 5.5A as the result of a function that forgets `return`; verified: `def f(): x = 1` → `f().upper()` raises `AttributeError: 'NoneType' object has no attribute 'upper'`
- `AssertionError` — raised by a failed `assert`; signals a precondition violation; first taught in 5.5C

---

## Engine pre-authoring notes

*(Moved from lesson prose — these are implementation TODOs, not lesson content.)*

- **AST clone detection** (for DRY style flag on near-duplicate blocks) — not yet built. Proxy at ship time: exact-duplicate block detection. Lesson prose should say: "The style channel catches exact duplicate blocks — for near-duplicates, you are the detector."
- **String-similarity check** (for near-identical `print` strings) — not yet built. Proxy: exact-duplicate string detection.
- Both items should be tracked in NEXT.md under "engine pre-authoring blockers" and resolved before 5.3 is authored.

---

## Sources

1. Think Python (2nd ed.), Allen Downey — §3.11 "Why functions?", §3.12 Debugging, §4.4–4.10 (encapsulation, generalization, interface design, refactoring, docstrings, debugging), §4.7 (flag-parameter anti-pattern), §6.1–6.2 (return values, incremental development), §6.9 Debugging, Appendix A (syntax/runtime/semantic errors; concrete debugging protocols)
   https://greenteapress.com/thinkpython2/html/thinkpython2004.html (Ch.3)
   https://greenteapress.com/thinkpython2/html/thinkpython2005.html (Ch.4)
   https://greenteapress.com/thinkpython2/html/thinkpython2007.html (Ch.6)
   https://greenteapress.com/thinkpython2/html/thinkpython2021.html (Appendix A)

2. How to Think Like a Computer Scientist (3rd ed., Python 3), Wentworth et al. — Ch.4 (functions, decomposition motivation, single-stepping advice), Ch.6 (fruitful functions, dead code, incremental development, "chatterbox functions")
   http://openbookproject.net/thinkcs/python/english3e/functions.html
   http://openbookproject.net/thinkcs/python/english3e/fruitful_functions.html

3. CSTA K-12 Computer Science Standards, Revised 2017 — Level 2 (grades 6–8), Algorithms & Programming: 2-AP-11 (clearly named variables), 2-AP-13 (decompose problems), 2-AP-14 (procedures with parameters for reuse), 2-AP-17 (systematically test and refine), 2-AP-19 (document for debuggability)
   https://csteachers.org/wp-content/uploads/2025/03/csta-k-12-computer-science-standards-revised.pdf

4. Software Carpentry — "Errors and Exceptions" (Python Novice Inflammation, lesson 9) — bottom-most frame is the error site; taxonomy of SyntaxError, NameError, IndexError
   https://swcarpentry.github.io/python-novice-inflammation/09-errors.html

5. BYU CS 111 Debugging Guide — step-by-step novice debugging protocol (run tests → identify error type → add labelled print statements → inspect at call sites and loop ends)
   https://cs111.byu.edu/articles/debugging/

6. Kurniawan et al., "Designing for Novice Debuggers," Koli Calling 2025 (arXiv 2509.21067) — characterises novice failure modes (random edits, failure to form hypotheses, poor error-message reading); confirms systematic hypothesis-driven approach is the teachable alternative
   https://arxiv.org/pdf/2509.21067

7. Pluralsight — "Avoiding Magic Numbers" — definition, the maintenance-trap argument, exception for 0/1/None, Pokémon counterexample
   https://www.pluralsight.com/resources/blog/software-development/avoiding-magic-numbers
