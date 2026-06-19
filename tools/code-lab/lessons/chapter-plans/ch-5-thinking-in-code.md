# Chapter 5 — Thinking in Code

## Overview

Chapter 5 is the "course feels complete" stop-point. By the end the learner can break any problem into named, single-purpose functions (decomposition), write code that another person — or future self — can read without explanation (naming, DRY, magic numbers), and attack a broken program with a four-step protocol instead of random edits. These are not syntax skills; they are thinking habits. The through-line is: *readable code is debuggable code, and debuggable code is code you trust.* The style channel opens here, adding a second feedback layer (style) alongside the existing correctness checker. The Chapter Challenge applies all five skills to three real programs, and the Quiz gates the next chapter on the debugging protocol specifically. Abstraction — named in Ch.3 (functions hide detail) — is deepened here: students now apply it deliberately across decomposition, naming, and DRY.

All five strands appear (numbers, words, data, plot, sound). Rung range is 4–6 with blank-editor expected as default by 5.5. Chapter recalls everything from Ch.1–4; decomposition was named in Ch.3 but is now deepened; debugging has recurred since Ch.2 and is now formalised.

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
  lists, dicts, loops                        ← used in strand applications
  errors met (NameError, TypeError, etc.)   ← 5.4 formalises reading them

Within chapter:
  5.1 Decomposition
      └─ 5.2 Naming (names make decomposition legible)
            └─ 5.3 DRY + magic numbers (repetition is a naming+structure failure)
                  └─ 5.4 Debugging Protocol (readable code is the prerequisite
                         for tracing; protocol requires walking named functions)
                        └─ 5.5 Checkpoint Projects (apply all four on real programs)
```

Teaching order is strictly linear; each lesson presupposes the previous. The style channel opens mid-5.2 and accumulates: naming rules engage from 5.2, DRY and magic-number rules engage from 5.3, function-length flag from 5.3 onward.

---

## Lessons

### 5.1 — Decomposition
*Arc role: Hook + first concept lesson. Motivates the chapter's core claim.*
*Rung: 5–6. Strand: core / numbers / words.*

**Concepts:** decomposition, top-down design, single-responsibility functions, calling functions from functions.

**Warm-up recall:** "What does a function's `return` statement do? What happens if you forget it?" (recalls Ch.3.3)

**Subsection A — What decomposition means**
- Concept: a complex task is broken into subproblems, each solved by one function. The top-level function reads like a plan; the sub-functions handle the details. (Think Python §3.11 "fruitful functions and void functions"; §4.8 "a development plan")
- Worked example 1 (easy): a monolithic 15-line BMI calculator, then the same logic as `get_weight()` / `get_height()` / `compute_bmi()` / `print_result()` — show that the top-level function is now a readable outline.
- Worked example 2 (harder): `make_greeting_card()` that calls `draw_border()`, `write_name()`, `add_signature()` — each sub-function reuses a loop from Ch.2.
- Exercise 1 (boilerplate): given a working but monolithic temperature-converter, identify the three sub-tasks and fill in the three `def` stubs.
- Exercise 2 (stub): write `total_cost()`, `apply_discount()`, `print_receipt()` for a shopping bill; the top-level call is given.
- Exercise 3 (blank): write a two-function word-count program from scratch: one that gets text from `input()`, one that counts words with `.split()` *(recall Ch.1 — Strings)*.
- *Misconceptions:* "one big function is simpler" (it is shorter to type, not simpler to read or fix); "decomposition means more typing" (it means less later).
- *Error classes:* none new; NameError if a function is called at the top level before its `def` has executed — not from helper definition order (Python resolves names at call time, so `def a(): return b()` defined before `def b()` works fine as long as `a()` is not called until after both defs run).
- *Recalls:* Ch.3 — `def`, params, return; Ch.1 — `input`, `.split`.

**Subsection B — Top-down design**
- Concept: write the top-level outline first (as stub functions that just `pass` or `print` a placeholder), then fill each in. Think Python §4.8 "development plan."
- Worked example: a stub-first number-guessing game skeleton — top level is 5 lines, all calls; stubs fill in one at a time.
- Exercise (fix): given stubs with a wrong call order that crashes with a NameError, reorder the definitions and calls so it runs.
- *Misconceptions:* "you have to define functions in the order they will be called" (Python resolves names at call time — helper definition order among functions does not matter; only a top-level call placed above its `def` raises NameError).

---

### 5.2 — Naming Things Well
*Arc role: Concept lesson. Style channel opens.*
*Rung: 5–6. Strand: core / words / data.*

**Concepts:** intent-revealing names, naming conventions (`snake_case`, all-caps constants), the style channel (first appearance), name-as-contract.

**Warm-up recall:** "Look at this variable: `x = 0.21`. What does it hold? Now look at `tax_rate = 0.21`. What changed?" (motivates the lesson before a line is written)

**Subsection A — Names are for readers**
- Concept: a name is a promise to the reader about what the variable or function contains or does. Short cryptic names ("d", "tmp", "f") force the reader to reverse-engineer the intent. (CSTA 2-AP-11: "clearly named variables"; Think Python §3.11 point 1: "name a group of statements, which makes your program easier to read and debug")
- Worked example 1: the same grade-average calculation with names `a, b, c, x` vs. `score_1, score_2, score_3, average` — no other change.
- Worked example 2: function `p(n, r, t)` vs. `compute_interest(principal, rate, years)` — calls become self-documenting.
- Exercise 1 (boilerplate): rename six badly named variables in a provided snippet; the style checker reports which ones.
- Exercise 2 (stub): write a function with a name and parameter names that make its purpose obvious, given a prose description ("a function that checks whether a password is long enough").
- Exercise 3 (fix / debug): a function named `do_thing` that has a logic bug — because its name hid the intent, the bug was invisible for longer. Rename and spot the error.
- Exercise 4 (blank / rung 6): given a plain-English description of a small data-summary program (three inputs, two calculations, one output), write the complete program from scratch using only well-named variables and functions; the style channel must report no naming violations.
- *Style channel items activated:* single-letter names (warns); `camelCase` for variables (warns); vague verb (`do_`, `process_`, `handle_`) without qualifier (warns).
- *Misconceptions:* "short names save time" (they cost time later); "I know what it means right now" (future-you does not); confusing snake_case (variables/functions) with ALL_CAPS_UNDERSCORES (constants).
- *Error classes:* NameError from typos in renamed variables.
- *Recalls:* Ch.1 variables; Ch.3 `def`/params.

**Subsection B — Function names are verbs; variable names are nouns**
- Concept: functions *do* things → verb phrases (`calculate_area`, `is_prime`, `get_score`). Variables *hold* things → noun phrases (`student_name`, `total_count`). Boolean names use `is_`, `has_`, `can_`.
- Worked example: refactor `data()` and `check(x)` to `load_scores()` and `is_passing(grade)`.
- Exercise (arrange / Parsons): given scrambled name choices, pick the most readable name for each role.
- *Misconceptions:* naming a function with a noun (`"scores"`) when it does computation.

---

### 5.3 — Don't Repeat Yourself
*Arc role: Concept lesson. DRY + magic numbers + function length added to style channel.*
*Rung: 4–6. Strand: numbers / words / sound.*

**Concepts:** DRY, code duplication as a maintenance trap, magic numbers, named constants (`ALL_CAPS`), function length as a symptom of doing too many things.

**Warm-up recall:** "If you copy-paste a block of code three times and then find a bug in it, how many places do you fix?" (intuition pump before definitions)

**Subsection A — Spot and remove duplication**
- Concept: every piece of knowledge in a program should have one authoritative home. If you change it, you change it in one place. (Think Python §3.11 pt.2: "if you make a change, you only have to make it in one place") Duplication is not a style problem; it is a correctness problem — the copies drift.
- Worked example 1 (easy): a sound program that plays the same note in three places by calling `play(440, 0.5)` three times, each block slightly different → refactored to `play_note(frequency, duration)` called once per need.
- Worked example 2 (harder): a 20-line program that calculates tax twice with two slightly different formulas — classic copy-paste drift. Identify the single correct version and extract a function.
- Exercise 1 (boilerplate): given a duplicated block, extract it into a named function and replace each copy with a call.
- Exercise 2 (fix): given a copy-paste drift where the two copies compute differently, identify which is right, extract, and replace both.
- Exercise 3 (blank): write a text-stats function `count_long_words(text, min_length)` that replaces three inline repetitions in a given top-level program.
- *Style channel items activated:* duplicate literal block (flags) **[ENGINE: requires AST clone detection — not yet built; use exact-string duplicate as proxy until implemented]**; three or more calls to `print` with near-identical strings (suggests function) **[ENGINE: requires string-similarity (Levenshtein) check — not yet built; use exact-duplicate as proxy]**.
- *Misconceptions:* "it's fine as long as they're the same right now" (they won't be); over-applying DRY and creating a single function that does unrelated things.
- *Error classes:* no new classes; reinforces that silent wrong output (copy-drift) is harder to find than a crash.

**Subsection B — Magic numbers**
- Concept: a bare literal whose meaning is not obvious from context is a magic number. It violates DRY (if it appears twice, both must change together) and readability (the reader must know the domain to decode it). Replace with an `ALL_CAPS` constant. (Think Python §4.5 "Generalization"; Pluralsight "Avoiding Magic Numbers")
- Worked example 1: `if score >= 60:` → `PASSING_SCORE = 60; if score >= PASSING_SCORE:` — explain: what is 60? A test score? A timer? The name says.
- Worked example 2: a sound program with `play(440, 0.5)` repeated — extract `A4_FREQ = 440; BEAT = 0.5`.
- Exercise 1 (modify): given a program with four magic numbers, name each one at the top of the file.
- Exercise 2 (fix): a program where the same magic number `7` appears with two different meanings (days in a week, maximum tries) — the bug from conflating them; split into `DAYS_PER_WEEK` and `MAX_TRIES`.
- *Style channel:* bare numeric literal in `if` condition or function argument that is not 0, 1, or -1 → style warning; suggest naming it.
- *Misconceptions:* "0 and 1 are fine" (usually yes — but `MAX_RETRIES = 1` still makes intent clear when needed); ALL_CAPS means constant, not "important variable."

**Subsection C — Function length as a symptom**
- Concept: a function longer than ~15 lines is doing more than one thing. Length is a *symptom* — the disease is mixed responsibility. The fix is to extract sub-functions, not to split arbitrarily. (Think Python §3.11; CSTA 2-AP-14)
- Worked example: a 30-line `run_quiz()` that reads questions, checks answers, and prints a score — decompose into `load_questions()`, `ask_question()`, `show_score()`.
- Exercise (stub): given a 25-line monolith with obvious sub-tasks, extract two named functions (stubs provided, bodies blank).
- *Style channel:* function body ≥ 20 lines → "This function might be doing more than one thing. Could you name two jobs it's doing?"

---

### 5.4 — The Debugging Protocol
*Arc role: Concept lesson. The protocol is required from here on.*
*Rung: 4–6. Strand: core (all strands provide the broken programs).*

**Concepts:** the four-step debugging protocol, traceback anatomy, hypothesis-driven debugging, `print`-tracing strategy, precondition / postcondition.

**Warm-up recall:** "In Ch.2 you met `NameError` and `IndexError`. Without looking: what causes each one?"

**Subsection A — Anatomy of a traceback**
- Concept: a traceback is a chain of function calls, most recent last. The *bottom line* names the exception type and message; the *line just above it* is where Python was when the error happened. Reading bottom-to-top surfaces the cause before the symptom. (Software Carpentry "Errors and Exceptions"; BYU CS111 Debugging Guide; Think Python Appendix A)
- Worked example 1 (predict): show a full traceback — three frames — with annotations naming each part: file, line number, source text, exception class, message. Walk the chain aloud.
- Worked example 2 (harder): a traceback where the error is a `KeyError` in a helper function called from a helper function — demonstrate that the *top* frame is not the site of the bug.
- Exercise 1 (predict/rung 1): given three tracebacks, identify (a) the exception class, (b) the line number, (c) which function the error is in — write the answers before running anything.
- Exercise 2 (fix): a deliberately broken program with a multi-frame traceback; apply steps 1–2 of the protocol and fix.
- *Misconceptions:* "the error is at the top of the traceback" (it is at the bottom); "the error is in someone else's library code" (usually the frame just above the library call is yours).
- *Error classes:* reviews all eight met by Ch.5 (NameError, TypeError, SyntaxError, IndentationError, IndexError, KeyError, ValueError, ZeroDivisionError — the last was introduced in Ch.4.3 and the Ch.4 Challenge).

**Subsection B — The four-step protocol**
- Concept: systematic debugging outperforms random edits. The four steps: (1) read the bottom line — get the exception type and message; (2) find the line — go to the file and line number; (3) walk the stack — trace back one frame at a time until you reach code you wrote; (4) hypothesise and test — state in one sentence what you think is wrong, change *one thing*, and re-run. (BYU CS111; Kurniawan et al. 2025; Think Python Appendix A)
- Worked example: walk a `TypeError: unsupported operand type(s) for +: 'int' and 'str'` through all four steps explicitly, narrated — "Step 1: TypeError, adding incompatible types. Step 2: line 14. Step 3: called from main(), the inputs came from `input()`. Step 4: hypothesis — `input()` returns a string; forgot `int()`. Fix: add `int()`, re-run."
- Exercise 1 (fix / rung 4): a program with a `ValueError` from `int("3.5")` — apply all four steps explicitly; the exercise requires writing the hypothesis as a comment before the fix.
- Exercise 2 (fix): a program with a silent wrong-answer bug (semantic, no crash) — show the protocol still applies: "step 1 is 'wrong output'; step 2 is the line that produces it."
- Exercise 3 (blank / rung 6): given a two-function program that crashes, apply the full four-step protocol and fix it — write each step as a comment in the order (1) exception + message, (2) line found, (3) stack traced to, (4) hypothesis and fix.
- *Misconceptions:* "just change something and see" (random edits waste time and introduce new bugs); "the hypothesis has to be right first try" (it doesn't — the protocol is iterative); "semantic bugs don't need the protocol" (they need it most).
- *Error classes:* `AttributeError` (calling a method on `None`; e.g. a function body that forgets `return` — verified: `def f(): x = 1` then `f().upper()` raises `AttributeError: 'NoneType' object has no attribute 'upper'`).
- *Recalls:* Ch.2 debugging lessons; Ch.1 types/conversion; Ch.3 scope (stack frames are scope boundaries).

**Subsection C — `print`-tracing and precondition / postcondition**
- Concept (`print`-tracing): when the traceback points to correct-looking code — or when the bug is semantic (wrong output, no crash) — the next tool is labelled `print` statements. Pattern: add `print(f"[DEBUG] variable_name = {variable_name}")` at key points (entry to a function, exit, loop body). Read the labels first, then the values; remove the prints once the bug is found. (BYU CS111 Debugging Guide; Think Python Appendix A §A.3)
  - Rule of thumb: one `print` at the start of each function call chain you suspect; narrow inward. Never scatter prints randomly.
  - Worked example: a function `average(nums)` returns the wrong value — a `print` at the accumulator loop reveals the total is initialised wrong. Step through: add print, re-run, read, fix, remove print.
  - Exercise (fix / rung 5): a two-function word-counter gives the wrong count for text with multiple spaces between words — the function uses `.split(' ')` (with an explicit space argument) instead of no-arg `.split()`, which leaves empty strings in the list and inflates the count. Add labelled `print` statements to the list produced by the split call, observe the empty strings, identify the line, change `.split(' ')` to `.split()`, verify the count is now correct, remove the prints. (Verified: `'the  quick   fox'.split(' ')` → 6 elements; `.split()` → 3.)
- Concept (precondition / postcondition): a *precondition* is what the caller must guarantee before calling a function (e.g. "the list must be non-empty"). A *postcondition* is what the function guarantees on return (e.g. "returns a float between 0.0 and 1.0"). Writing these as one-line comments above a function answers the question "whose bug is it?" — if the precondition was violated, the caller is at fault; if the precondition held and the return is wrong, the function is at fault. (Think Python §6.9; CSTA 2-AP-19)
  - Worked example: a `divide(a, b)` function — precondition `# b != 0`, postcondition `# returns float`. Show: if `b` is 0 and we said so in the precondition, the calling code is the bug site.
  - Exercise (stub / rung 5): given three function stubs, write the precondition and postcondition as comments for each; then identify which function is responsible when a sample buggy run violates one of them.
- *Misconceptions:* "print statements are a last resort" (they are a routine tool alongside the protocol); "preconditions are documentation, not debugging" (they are exactly how you locate bug ownership).
- *Recalls:* Ch.3 — function definitions, `return`; Ch.1 — `print`.

---

### 5.5 — Checkpoint Projects
*Arc role: Strand-application lesson + checkpoint. All five skills tested on real programs.*
*Rung: 6 (write from scratch throughout). Strand: numbers / words / sound.*

**Concepts:** all of Ch.5; also applies Ch.1–4 recall across three projects.

**Warm-up recall:** "State the four steps of the debugging protocol from memory." (gates on 5.4)

**Project A — Number-guessing game** *(strand: numbers)*
- Given: a working but badly written 35-line monolith — magic numbers, single-letter names, no functions, duplicated `print` strings.
- Tasks: (1) apply the protocol to a seeded bug (a `ValueError` on bad input); (2) decompose into at least four named functions; (3) extract two magic numbers as constants; (4) ensure the style channel is silent.
- Check: correctness checker + style checker (naming, magic numbers, no functions > 15 lines).

**Project B — Text-statistics tool** *(strand: words)*
- Given: a specification only (no starter code).
- Build from scratch: `load_text()`, `count_words()`, `count_unique()`, `find_longest()`, `print_report()`.
- Use `.split()`, `len()`, a set, a loop — all recalled from Ch.1–4.
- Style channel active; correctness checks each function independently.
- Final exercise: deliberately introduce a `KeyError` bug into the working program, then apply the protocol in writing (hypothesis as comment) before fixing it.

**Project C — Refactor a messy song** *(strand: sound)*
- Given: a 40-line sound program with copy-pasted note sequences, bare `440`/`0.5` literals, and a 28-line `main()` function.
- Tasks: (1) identify and name all magic numbers as constants; (2) extract the repeated note pattern into a parameterised function; (3) shorten `main()` to ≤ 10 lines; (4) run the style checker to silence.
- No new music functionality — this is a pure refactoring exercise.

*Error classes to provoke and fix across the three projects:* `ValueError`, `TypeError`, `IndexError`, at least one silent wrong-answer bug.
*Recalls:* everything Ch.1–4: types, conversion, `input`, loops, `if`, functions, lists, dicts, `.split()`, `play()`.

---

## Progression / difficulty ramp

- **5.1** — rung 5–6; students write helpers from scratch but the top-level structure is usually given or outlined.
- **5.2** — rung 5–6; exercises escalate from fix/rename (rung 5) to a blank-editor naming exercise (rung 6, Exercise 4); the style channel provides automatic feedback. Note: rung stays at 5–6 (not lower than 5.1) because the blank-editor exercise and style-channel pressure together maintain cognitive load.
- **5.3** — rung 4–6; subsections escalate: first exercise extracts a function (rung 5), last is blank (rung 6). Rung starts at 4 because the concept is new; the blank-editor end keeps the ceiling at 6.
- **5.4** — rung 4–6; the rung-6 blank exercise (5.4B Exercise 3) requires applying all four steps from memory in comments; Subsection C adds rung-5 print-tracing and precondition exercises; written reasoning throughout is cognitively harder than syntax alone.
- **5.5** — rung 6 throughout; no starter code for Project B (specification only); Projects A and C both start from provided (broken/messy) code — Project C is a pure refactoring exercise by definition and requires the messy starter. Writing from scratch is the default expectation for Project B, consistent with the Ch.3 milestone in CURRICULUM-STRUCTURE.md.

No lesson is easier than the one before it. Style channel pressure increases monotonically from 5.2 onward — it is additive, not reset.

---

## Chapter Challenge (outline)

Six exercises, easy → hard, covering all five concepts, mixing strands. Scaffolding fades to blank.

1. **(rung 3 / modify)** A working word-count function is given. Add a `MIN_LENGTH` constant for "long word" (currently `4` is a magic number); rename two poorly named parameters; run the style checker to silence. *(words strand)*
2. **(rung 4 / fix)** A four-function number-stats program crashes with a `ZeroDivisionError`. Apply the four-step protocol (write the hypothesis as a comment) and fix. *(numbers strand)*
3. **(rung 4 / fix)** A 30-line data-loading function has a copy-paste drift: two versions of the same "clean a string" block, one with `.strip()` *(recall Ch.1 — Strings)* and one without. Identify, extract, and fix. *(data strand)*
4. **(rung 5 / complete)** A stub of a plot program (`plot_temperatures`) has four sub-function stubs. Fill in each body; name all constants; ensure function length ≤ 15 lines each. *(plot strand)*
5. **(rung 6 / write)** Write a three-function beat-builder from scratch: `load_pattern()` reads a comma-separated string into a list, `play_pattern()` plays each step, `loop_pattern(n)` repeats it. The style checker must pass. *(sound strand)*
6. **(rung 6 / write — boss)** Given a plain-English description of a shopping-receipt program (five requirements), design the functions top-down (write stubs first), fill them in, handle bad input with the debugging protocol applied in advance (write preconditions as comments), and make the style channel silent. No starter code, no hints. *(numbers / words strand)*

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
- "You have to write functions in the order they will be called" — Python only cares definitions precede the runtime call (5.1)
- "Short names save time" — they cost time when reading later (5.2)
- "I know what it means right now" — future-you and collaborators do not (5.2)
- "It's fine as long as the copies are the same now" — copy-paste code drifts (5.3)
- "DRY means never repeat code" — it means every *piece of knowledge* has one home; sometimes similar-looking code is genuinely independent (5.3)
- "0 and 1 are always fine as literals" — usually, but `MAX_TRIES = 1` communicates more than `1` alone (5.3)
- "The error is at the top of the traceback" — the exception is at the bottom; the top is the entry point (5.4)
- "Just change something and see" — random edits waste time and mask root causes (5.4)
- "The hypothesis must be right first time" — it is an educated guess; the protocol is iterative (5.4)
- "Semantic bugs don't need the protocol" — they need it most, because there is no crash to guide you (5.4)

**Error classes (all previously introduced; formalised in 5.4):**
- `NameError` — undefined name; often a typo in a renamed variable (5.2) or a top-level call placed before its `def` has executed (5.1) — helper definition order among functions does not matter
- `TypeError` — wrong type; common in 5.5 when `input()` is forgotten in the number-guessing game
- `SyntaxError` / `IndentationError` — structure errors; surface when extracting functions if indentation is wrong
- `IndexError` — off-by-one in list operations in Project B
- `KeyError` — missing dict key; deliberately provoked in Project B
- `ValueError` — `int()` on a non-integer string; the first bug in Project A
- `ZeroDivisionError` — recalled from Ch.4 (introduced in Ch.4.3 and Ch.4 Challenge); provoked in Chapter Challenge exercise 2 (text-stats average when input is empty)
- `AttributeError` — calling a method on `None`; first taught in 5.4B as the result of a function that forgets `return`; verified: `def f(): x = 1` → `f().upper()` raises `AttributeError: 'NoneType' object has no attribute 'upper'`

---

## Sources

1. Think Python (2nd ed.), Allen Downey — §3.11 "Why functions?", §3.12 Debugging, §4.4–4.10 (encapsulation, generalization, interface design, refactoring, docstrings, debugging), §6.1–6.2 (return values, incremental development), §6.9 Debugging, Appendix A (syntax/runtime/semantic errors; concrete debugging protocols)
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
