# Chapter 8 — Writing Real Programs in Python

## Overview

Chapter 8 is the Python integration chapter. After seven chapters of building individual skills — types, control flow, functions, collections, design, OOP, modules — students now write *complete, robust, non-trivial programs* from scratch. The through-line is the craft of turning a real-world spec into working code: decomposing the problem, designing functions and data structures, handling bad input gracefully, verifying that your code does what you think it does, and expressing transformations concisely. Every concept in Ch.1–7 is recalled and exercised under realistic conditions. By the end, each of the five strands has produced a self-contained program the student wrote entirely themselves.

**The learner can do by the end:**
- Read a short program spec and break it into functions + data before writing a single line
- Write interactive input loops and menus that do not crash on bad input
- Use `try`/`except` to handle `ValueError`, `KeyError`, `ZeroDivisionError`, and `IndexError`, including inspecting the exception object with `as e`
- Replace verbose `for`-`append` loops with list and dict comprehensions
- Write `assert` statements and simple test functions to verify their own code
- Use `raise` to signal an error deliberately from their own validator functions
- Produce a complete, tested, multi-function program in each strand from a blank editor

---

## Concepts owned (keywords)

### Deepened here (first taught Ch.2, c2s8):
- **`try` / `except`** — intercept a named exception; execution continues rather than crashing
- **Multiple `except` blocks** — each names a different exception class; Python runs the first match
- **Bare `except:` danger** — swallows all exceptions including bugs; always name the class
- **EAFP pattern** — "Easier to Ask Forgiveness than Permission"; the Python idiom for robust code
- **Input loop** — `while True` + `try`/`except` + `break`; the standard pattern for robust interactive programs

### New in Ch.8:
- **`except ExceptionType as e`** — name and inspect the caught exception object; `e.args[0]` gives the clean value
- **`else` clause on `try`** — runs only when no exception was raised; preferred over expanding the `try` body; contrast: does NOT run when an exception is caught
- **`finally` clause** — runs unconditionally (even if `return` or `break` is hit inside `try`, even if the exception propagates); signals cleanup intent
- **`raise`** — signal an error deliberately from your own code; taught at the point of need in 8.6
- **List comprehension** — `[expr for x in iterable if condition]`; creates a new list in one expression
- **Dict comprehension** — `{key_expr: val_expr for x in iterable}`; use for transformations (e.g. `{w: len(w) for w in words}`); does NOT accumulate — use a `for`-loop with `.get()` for counting
- **`key=` argument for `sorted()`** — `sorted(iterable, key=some_fn, reverse=True)`; the canonical lambda-free trick for sorting a dict by value is `sorted(freq, key=freq.get, reverse=True)` (passing `freq.get` without `()` — the function itself, not a call)
- **`assert`** — check a condition in your own code; crash with `AssertionError` if false; always use the message form `assert condition, "message"` — without a message, `AssertionError` tells you nothing about why the check failed
- **Simple test function** — a `def test_*()` function that calls `assert` to verify one unit of behaviour
- **Program design at scale** — starting from a spec: identify data → name functions → stub → fill in → integrate; nouns = data, verbs = functions

---

## Concept map & dependencies

```
Program design (8.2)
    ↓
Deeper try/except: as e, else, finally (8.3)   ←  recalled and deepened: Ch.2 try/except, input loop
    ↓
Comprehensions (8.4)             ←  recalled: lists, dicts, for loops from Ch.4
    ↓
assert + test functions (8.5)    ←  recalled: functions, return, bool from Ch.3/2
    ↓
Strand projects (8.6)            ←  recalled: ALL of Ch.1–7; raise introduced here
    ↓
Chapter Challenge                ←  ALL Ch.8 + recalled skills
```

Teaching order rationale: program design first so students have a mental model before adding robustness; deepened `try`/`except` immediately after because it builds on the Ch.2 foundation with the genuinely new constructs (`as e`, `else`, `finally`); comprehensions as a shorthand reward once the full pattern is in muscle memory; `assert` last because testing your own code presupposes you already have functions worth testing; `raise` at the strand-project layer where the student is writing a complete program and needs it for real; strand projects synthesise everything at max rung.

**Spiral recalls per lesson (summary):**
- 8.1 recalls: print, functions, lists, dicts, for loops, if/else, modules (Ch.1–7 all touched)
- 8.2 recalls: functions, decomposition, docstrings, DRY (Ch.3, 5)
- 8.3 recalls: while, input(), int() conversion, ValueError, the Ch.2 input loop pattern (Ch.1, 2) — directly retrieved before extending
- 8.4 recalls: list iteration, dict iteration, for + if, append (Ch.4)
- 8.5 recalls: def, return, bool, comparison operators (Ch.2, 3)
- 8.6 recalls: everything by strand — str methods (Ch.1/2/7), plot (Ch.4), music (Ch.1/4/6), OOP (Ch.6), JSON (Ch.7)

---

## Lessons

### 8.1 — Hook: A Real Program, Alive (Hook)
- **Arc role:** Hook. Run a fully working 60-line program; observe and tinker before explaining anything.
- **Concept:** A real program has a main loop, functions, error handling, and data — all parts working together.
- **Rung:** 3 Modify
- **Strand:** mixed (a playable quiz or word-guessing game)
- **Warm-up:** Before the program runs, students read the first 20 lines and write the Ch.1–7 concept next to each block (e.g., "list — Ch.4", "f-string — Ch.1", "while loop — Ch.2"). This is the Predict step: students prove to themselves they already know every piece. (Optionally: students pick whether the quiz covers animals, capitals, or films — one choice that makes the program feel like theirs.)
- **Worked-example ideas:**
  - Run the program as-is; observe the interactive loop and menu
  - Change one piece of data (e.g. the quiz questions list) and re-run; observe the effect
  - Break one function call deliberately; read the error; restore it
- **Exercise ideas:**
  - (Modify) Add one more quiz question by extending the data structure
  - (Fix) A version of the program has a `KeyError` — locate and fix it
  - (Modify) Change the score display to show percentage
- **Misconceptions:** "Real programs are just one long script" / "I can't write something like this"
- **Error classes:** `KeyError` (bad dict key), `IndexError` (off-by-one in data list) — observed, not yet explained
- **Recalls:** print, lists, dicts, for loops, if/else, functions, f-strings (Ch.1–7)

---

### 8.2 — Planning a Program (Concept)
- **Arc role:** Concept lesson 1. Introduces the design workflow before a single line is typed.
- **Concepts:** program design at scale; spec → data → function signatures → stubs → fill in → integrate; call-graph mental model; "nouns = data, verbs = functions" extraction heuristic
- **Rung:** 4 Fix, 5 Complete
- **Strand:** core
- **Warm-up:** "What is the difference between a function that uses `print` vs. one that uses `return`?" (Two sentences, from memory. Primes the core design issue: which functions produce values, which produce output.)
- **Worked-example ideas:**
  - Given a short spec ("a temperature converter that handles Celsius, Fahrenheit, Kelvin"), demonstrate the heuristic: underline nouns → data (temperature value, unit), underline verbs → functions (`convert`, `display_menu`, `get_input`); write stubs; draw the call-graph showing which function calls which and what flows between them (e.g., `main` → `get_input` → returns `(value, unit)`; `main` → `convert(value, unit)` → returns `result`; `main` → `display(result)`). The call-graph is the visual proof that the design is complete before a line of logic is written.
  - Show a "flat script" doing the same task; point out repetition, untestable logic; refactor step-by-step into functions
  - A spec with a list of records: show how to decide on a list-of-dicts data structure before writing any logic
- **Exercise ideas:**
  - (Complete) Given a spec for a "word stats tool" and pre-written stubs, fill in two of the three functions
  - (Fix) A multi-function program where functions are the right shape but `return` is missing in one — trace, diagnose, fix
  - (Write) Given a four-sentence spec, apply the nouns/verbs heuristic: produce a data structure + function name list + docstrings only (no logic yet). Then draw a call-graph showing the flow between those functions.
- **Misconceptions:** "I'll just start typing and see what happens"; ignoring return values; putting all logic in `main`
- **Error classes:** none new — reinforces reading tracebacks as a design signal
- **Recalls:** `def`, `return`, docstrings, DRY, decomposition (Ch.3, 5)

---

### 8.3 — Handling Errors: Deeper `try` / `except` (Concept)
- **Arc role:** Concept lesson 2. Deepens the Ch.2 `try`/`except` foundation with the genuinely new constructs: `as e`, `else` clause, and `finally`.
- **Concepts (new in Ch.8):** `except ExceptionType as e`; `else` clause (runs when no exception, does NOT run when one is caught); `finally` clause (runs unconditionally); LBYL-vs-EAFP decision rule for `KeyError`/`IndexError`
- **Concepts recalled and deepened from Ch.2:** `try`/`except` basic form; multiple except blocks; bare-except danger; input loop pattern
- **Rung:** 1 Predict → 4 Fix → 5 Complete
- **Strand:** core / numbers
- **Warm-up:** "Without looking back, write the bulletproof input loop from Chapter 2 from memory — the one that keeps asking until the user enters a valid integer." (Direct retrieval of the exact pattern this lesson extends. Students who cannot recall it are flagged before the new material arrives.)
- **Worked-example ideas:**

  1. **Introducing `except E as e` (rung 1 first encounter):** Before any exercise, a Predict step: show this code and ask "what does `{e}` print?" before running it.
     ```python
     try:
         scores = {"Alice": 90}
         x = scores["Bob"]
     except KeyError as e:
         print(f"Missing key: {e.args[0]}")
     ```
     Reveal: `e` is the exception object; `e.args[0]` is `'Bob'` without surrounding quotes (whereas `{e}` alone would give `'Bob'` with quotes — a surprise for 11-year-olds). Note: `f"No score for {e.args[0]}"` prints `No score for Bob`; `f"No score for {e}"` prints `No score for 'Bob'` (with quotes, because `KeyError.__str__` includes them). Use `e.args[0]` for clean output.

  2. **`else` clause — two-panel contrast (both cases shown simultaneously):**
     Panel A — key exists: `try` body runs, `else` runs, `except` skipped.
     Panel B — key missing: `except` fires, `else` is skipped.
     Explicit labels on each line. The misconception "else runs when an exception IS caught" is addressed by showing the contrast directly, not just by warning about it. Students label each panel with "what runs here" before seeing the output.

  3. **`finally` sidebar/callout:** `finally` runs unconditionally — even when `return` or `break` is hit inside `try`, even when the exception propagates uncaught. Use it to signal cleanup intent (closing a resource, printing a completion message). One runnable example: a `try`/`except ValueError`/`finally` block where `finally: print("Calculation complete.")` fires in both the success and error case.

  4. **LBYL vs EAFP decision rule for `KeyError` / `IndexError`:** Students already know `.get(key, default)` avoids `KeyError` (LBYL). When is `try`/`except KeyError` better? Rule: use `.get()` for simple defaults; use `try`/`except` when the `except` body needs to do real work — log, re-raise, or take a different action. Side-by-side:
     ```python
     # LBYL — clean for simple default
     value = scores.get("Bob", 0)

     # EAFP — better when except body does work
     try:
         value = scores["Bob"]
     except KeyError as e:
         log_missing(e.args[0])
         raise
     ```

- **Exercise ideas:**
  - (Predict / rung 1) Given the `except KeyError as e` example above, predict what prints. Then run it. (First encounter with `as e` — no writing required yet.)
  - (Fix / rung 4) A menu loop that crashes on letters — the `except ValueError` block is there but catches the wrong class; the `as e` clause is also wrong. Fix both lines; test with bad input.
  - (Complete / rung 5) A `get_positive_int(prompt)` function with a `while True` loop; the `try`/`except`/`else`/`break` skeleton is there but two lines are wrong — fix them. (`else` clause holds the `break` — a subtle but correct placement.)
  - (Complete / rung 5) A `lookup_score(scores, name)` skeleton using `try`/`except KeyError as e`; fill in the `except` branch to print `f"No score for {e.args[0]}"` and re-raise. **Note for lesson authors:** this exercise contains a bare `raise` in the provided skeleton that re-sends the exception to the caller. Students will see this keyword before it is formally introduced in 8.6. Add a one-sentence callout alongside the skeleton: "You will see `raise` here — it re-sends the exception to the caller. You will use it yourself in 8.6. For now, leave this line as-is and focus on the `except` branch around it."
  - (Complete / rung 5) Add a `finally` block to a `safe_divide(a, b)` function so it prints `"Calculation complete."` whether or not a `ZeroDivisionError` occurs. The `try`/`except` skeleton is given; add the `finally` clause.
- **Misconceptions:** catching bare `except:` hides all errors; putting too much code in the `try` body; thinking `else` on `try` runs when an exception IS caught (wrong — corrected by the two-panel contrast above); specifically for `KeyError`, `f"{e}"` in an f-string includes repr quotes around the key (because `KeyError.__str__` includes them) — use `e.args[0]` for clean key output; for `ValueError` and `ZeroDivisionError`, `str(e)` is already clean and `e.args[0]` is equivalent
- **Error classes:** `ValueError`, `ZeroDivisionError`, `KeyError`, `IndexError`
- **Note on `raise`:** `raise` is listed as an owned concept but is introduced at the point of need in 8.6 strand projects, not in 8.3. Students encounter it meaningfully when they are writing a complete validator function and need to signal their own error. The 8.3 exercise above uses `raise` (to re-raise) in a guided skeleton — students complete the surrounding code, not the `raise` itself.
- **Note on f-strings (authoring gate):** Exercises in 8.3 and 8.5 ask students to write f-strings (e.g. `f"No score for {e.args[0]}"`, `f"expected 5, got {add(2, 3)}"`). F-strings are planned for c1s5 (Ch.1, Lesson 5). Before authoring 8.3 or 8.5, verify that c1s5 has been built and contains at least one f-string worked example and one f-string exercise. If c1s5 is absent from c1.js, revise the 8.3 and 8.5 exercises to accept `print("No score for", e.args[0])` and `print("expected 5, got", add(2, 3))` as the baseline, and note f-strings as an enhancement once c1s5 is delivered.
- **Recalls:** `while True`, `break`, `input()`, `int()` conversion, `try`/`except` basic form, multiple except blocks, bare-except danger, input loop (Ch.1, 2 — retrieved in warm-up)

---

### 8.4 — Comprehensions (Concept)
- **Arc role:** Concept lesson 3. Introduces list and dict comprehensions as a cleaner form of a pattern students already know.
- **Concepts:** list comprehension `[expr for x in it]`; filter form `[expr for x in it if cond]`; dict comprehension `{k: v for x in it}`; set comprehension vs dict comprehension contrast; when *not* to use a comprehension (side effects, complex multi-step logic)
- **Rung:** 3 Modify → 5 Complete → 6 Write
- **Strand:** data / words
- **Warm-up:** "Write a `for`-loop with `append` that doubles every number in `[1, 2, 3, 4]` and stores the results in a new list." (Primes comprehension as the shorter form of this exact pattern.)
- **Worked-example ideas:**
  - Side-by-side: `for` loop with `append` → equivalent list comprehension; same output, three lines → one line. (Note: "three lines" is the accurate count for a simple `for`-loop-with-append, not five.)
  - Filter comprehension: from a list of scores, extract only the passing ones (`>= 60`); then extend with a transformation (convert to percentages)
  - Dict comprehension: from a list of words, build `{word: len(word)}` in one line; compare with the three-line loop version
  - **Mandatory worked example — set vs dict comprehension contrast (side-by-side):**
    ```python
    words = ["cat", "dog", "cat"]

    # Set comprehension — braces alone, no colon → a set (unordered, no duplicates)
    result_set = {w for w in words}
    print(type(result_set), result_set)   # <class 'set'> {'cat', 'dog'}

    # Dict comprehension — key: value colon form required → a dict
    result_dict = {w: len(w) for w in words}
    print(type(result_dict), result_dict) # <class 'dict'> {'cat': 3, 'dog': 3}

    # Edge case: {} alone is an empty dict, not an empty set
    empty_dict = {}
    empty_set = set()
    print(type(empty_dict), type(empty_set))  # <class 'dict'> <class 'set'>
    ```
    Students run both forms and observe the `type()` output. The set form produces no error — it just gives the wrong type silently. This is why the contrast must be taught, not just mentioned.
  - **`sorted(freq, key=freq.get)` — passing a function without calling it:** One explicit sentence: "Python lets you pass a function without calling it — `freq.get` without `()` is the function itself; `sorted` will call it once per word. Writing `key=freq.get()` instead tries to call `freq.get()` right now with no arguments and passes its return value — that's a `TypeError`."
- **Exercise ideas:**
  - (Modify / rung 3) A `for`-loop-with-append that squares numbers in a list — rewrite it as a list comprehension; the loop is given, the blank line is yours
  - (Complete / rung 5) A dict comprehension with the key expression wrong (wrong variable name) — spot and fix it; `type()` check included to confirm the result is a dict not a set
  - (Write / rung 6) Given a list of strings, write a single comprehension that returns only the strings that start with a vowel, uppercased
- **Misconceptions:** using a comprehension for a loop with `print` or `append` side effects; forgetting `if` goes at the end; `{…}` braces alone make a set not a dict (corrected by the mandatory worked example above); `{w for w in words}` vs `{w: len(w) for w in words}` — the set form produces no error, just a wrong type; `{}` alone is an empty dict; `key=freq.get` not `key=freq.get()`
- **Error classes:** `SyntaxError` (missing bracket/colon), `TypeError` (wrong expression type or calling `freq.get()` with parens), `NameError` (wrong loop variable)
- **Recalls:** list methods (Ch.4), dict iteration (Ch.4), `for` + `if` (Ch.2)

---

### 8.5 — Testing Your Own Code (Concept)
- **Arc role:** Concept lesson 4. Introduces `assert` and simple test functions as a first formal testing habit.
- **Concepts:** `assert condition, "message"` — crash with `AssertionError` if false; the message form is mandatory practice because bare `AssertionError` tells you nothing; `def test_*()` as a naming convention; testing edge cases (zero, empty, negative, boundary); why testing is not the same as running the program once; when the test expectation itself can be wrong (and why this is not the first thing to assume)
- **Rung:** 4 Fix → 5 Complete → 6 Write
- **Strand:** core / numbers
- **Warm-up:** "Write a `double(n)` function and call it with `double(5)`. What do you expect the output to be? How would you check, right now, that it's correct?" (Primes `assert` as a better check than reading output.)
- **Worked-example ideas:**
  - `assert` on a simple arithmetic function with the message form: `assert add(2, 3) == 5, f"expected 5, got {add(2, 3)}"`. Show the `AssertionError` with the message when it fails. Compare the informative failure message to bare `assert add(2, 3) == 5` which gives `AssertionError:` with no text at all. Fix the function.
  - A `is_palindrome(s)` function with a subtle bug; a test function with four `assert condition, message` calls finds it; fixing the bug makes all asserts pass
  - Edge-case thinking: a `safe_average(lst)` function; test with `[]` (empty list) — what should it return/raise? Write the assert first, then the function
- **Exercise ideas (ordered to establish the right reflex first):**
  - (Fix / rung 4) **Exercise 1: assert finds a real bug in a function.** A `def test_reverse()` function with `assert` calls is given. Run it — an `AssertionError` fires. Read the message. Trace back to the `reverse()` function, find the bug, fix it. The reflex is: "my function is wrong, my test found it."
  - (Fix / rung 4) **Exercise 2: add ground truth, then decide which side is wrong.** A `def test_reverse()` now has one assert that fails — but this time the expected value in the assert is wrong, not the function. First, add `print(reverse("hello"))` directly and run it to see the ground truth output. Then decide: fix the assert expectation (not the function). The explicit "run the function directly first" step is required before judging which side is wrong. This is the second reflex, not the first.
  - (Complete / rung 5) A function stub `def clamp(x, lo, hi)` (returns `lo` if `x < lo`, `hi` if `x > hi`, else `x`) — fill in the body, then complete the partially-written `def test_clamp()` with two more assert cases using the message form
  - (Write / rung 6) Write both `def celsius_to_fahrenheit(c)` and `def test_celsius_to_fahrenheit()` with at least three asserts using the message form, from scratch
- **Misconceptions:** `assert` only catches typos (misses edge cases); testing only the "happy path"; confusing `assert` with `if`; thinking tests make code run; `AssertionError` looks scary but is just a failed check; the first instinct when an assert fails should be to check the function, not the test (though tests can be wrong too — addressed in Exercise 2)
- **Error classes:** `AssertionError` (owned here), recalls `ZeroDivisionError` / `ValueError` (what a test might provoke)
- **Recalls:** `def`, `return`, `bool`, comparison operators (Ch.2, 3)

---

### 8.6 — Strand Projects: Writing Real Programs (Strand-application)
- **Arc role:** Strand-application. Four sub-sessions, one per sub-project; each is a complete program written from a blank editor. This is rung 6 at maximum scale.
- **Structure:** 8.6a–8.6d are explicitly four separate sub-sessions, not one lesson. Each has its own time budget, warm-up, and difficulty ordering: 8.6a (words — frequency/dict) → 8.6b (data/plot — analysis) → 8.6c (numbers — game/simulation) → 8.6d (sound — generative). Each sub-session also introduces or cements `raise` in context (see below).
- **Concepts:** all of Ch.8; all of Ch.1–7 recalled under realistic conditions; `raise` introduced at the point of need
- **Rung:** 6 Write (write from scratch by spec)
- **Strand:** words · data+plot · numbers · sound

**Bridge step (required for each sub-project, before the blank editor):**
After reading the worked example, students answer 1–2 structural questions before writing:
- "Name the [two/three] functions in the worked example."
- "Where does the input loop live — which function, which line?"
This is rung 2 (Investigate) and takes under two minutes. It activates the worked example's structure in working memory before transfer, rather than letting students attempt to write from scratch by reconstructing the example from memory.

**Four sub-projects:**

  **8.6a — Text Tool (words strand)**
  - **Warm-up:** "Write a dict that maps each letter of `'hello'` to `True`, using a for-loop — not a comprehension." (Primes the accumulator pattern before the project.)
  - Spec: a word-frequency counter. Reads a multi-line string (or list of sentences), counts word frequencies using a dict, reports the top-5 words, ignores punctuation and is case-insensitive. Alternative: count frequencies in any text the student chooses (same required concepts, student-selected domain).
  - Key concepts exercised: frequency dict built with the `for`-loop + `.get()` pattern (`freq[w] = freq.get(w, 0) + 1` — NOT a dict comprehension, which cannot accumulate); dict comprehension used separately for a transformation (e.g. `{w: len(w) for w in top5}`); top-5 words found with `sorted(freq, key=freq.get, reverse=True)[:5]` — no lambda, and `freq.get` passed without `()`; string methods (`.lower()`, `.strip()`, `.split()`); `try`/`except` for robustness on empty input; decomposed into at least three functions; `raise ValueError("message")` in a validator function when input is empty or None.
  - **`raise` introduction:** This is the first place `raise` is formally introduced. Before the blank editor, a short worked example shows a validator function using `raise ValueError("Input cannot be empty")`. Students must use this pattern in their own validator.
  - Note on `dict.get(w, 0)` and accumulator: if Ch.4 lessons do not yet exist and this pattern has not been verified in c4.js, it must be introduced explicitly in 8.6a rather than assumed. **Pre-flight check for 8.6a authoring (mandatory):** Before writing this sub-session, open c4.js and confirm it contains a worked example using `dict.get(key, default)` and the accumulator pattern `d[k] = d.get(k, 0) + n`. If that example is absent from c4.js, introduce the pattern explicitly here with a one-paragraph mini-introduction before the blank editor — do not treat it as recalled.
  - Worked example: a shorter "character frequency" version (1–5 characters)
  - Bridge questions: "Name the three functions in the character-frequency example." / "Which function builds the freq dict?"
  - Exercise: write from a spec; test with `assert` on the top word of a known input — use an input where the top word is unambiguous (e.g. `"the the cat sat"` where `the` appears twice and all others once — only the top position is asserted, since positions 2–3 are a stable tie in CPython by insertion order but fragile if tokenisation differs); use the message form for all asserts.

  **8.6b — Data Analyzer (data + plot strand)**
  - **Warm-up:** "What does `sum([10, 20, 30]) / len([10, 20, 30])` return? What about `min([10, 20, 30])`?" (Primes the functions used in the project.)
  - Spec: reads a list of numeric records (e.g. daily step counts), computes mean, min, and max, plots a bar chart, and flags any days below a user-set threshold with `try`/`except ValueError` on the threshold input. Alternative: analyze any daily measurement data the student cares about (steps, temperature, screen time, etc.).
  - Key concepts exercised: `sum(data) / len(data)` for mean; `min(data)` / `max(data)` for extremes (these are built-ins that already iterate the list — do not wrap them in a comprehension); a list comprehension to filter days below the threshold (e.g. `[d for d in data if d < threshold]`); `try`/`except ValueError`; `plot`/`bar`; decomposed into `load_data`, `analyze`, `display` functions. (Verified: `min(data)` and `max(data)` are the correct tools; wrapping them in a comprehension is redundant and wrong.)
  - Worked example: shorter "rainfall averages" program to read before writing
  - Bridge questions: "Name the three functions in the rainfall example." / "Where does the threshold input loop live?"
  - `raise` in this project: optional — students may add `raise ValueError("No data")` in `load_data` if the list is empty.

  **8.6c — Number Game or Simulation (numbers strand)**
  - **Warm-up:** "Write a `while True` loop that exits when the user types 'quit'. Use `try`/`except`." (Primes the input-loop pattern for the menu.)
  - Spec: a number-guessing game with a menu (Play / High Scores / Quit), persistent high-score list (plain list, no file I/O), robust input loop with `try`/`except`, tracks guesses per round.
  - Alternative spec (simulation path): a dice-roll probability simulator — roll N dice M times, tally results as a dict, display a histogram.
  - Key concepts exercised: `while True` input loop, `try`/`except`, list/dict data, functions per concern, `random` module, comprehensions for tallying; `raise ValueError("message")` in the bounds-checking function (e.g. when the user enters a number outside the valid range).
  - Worked example: shorter "coin-flip counter" program to read before writing.
  - Bridge questions: "Name the functions in the coin-flip example." / "Which function handles the menu?"

  **8.6d — Generative Music Piece (sound strand)**
  - **Warm-up:** "From Chapter 6, how do you create a `Note` instance? Write one line." (Primes OOP recall if Note is used; otherwise primes the `play_pattern` API.)
  - Spec: a generative melody built from a scale (list of pitches), random walks on that scale, assembled using a list comprehension or for loop, played with `play_pattern`; `try`/`except` wraps any user-supplied BPM or scale input.
  - Key concepts exercised: list comprehension over a scale list, `random.choice`, `try`/`except ValueError`, OOP optional (use `Note` class if built in Ch.6), structured as functions; `raise ValueError("BPM must be positive")` in the BPM validator.
  - Worked example: a shorter "random scale arpeggio" program.
  - Bridge questions: "What does the comprehension in the worked example produce?" / "Which function validates BPM?"

- **`raise` ownership:** `raise` is formally introduced in 8.6a and reinforced in 8.6c and 8.6d. At least one sub-project (8.6a required, 8.6c and 8.6d strongly encouraged) requires the student to use `raise ValueError("message")` explicitly in a validator function, cementing the owned concept.
- **Misconceptions per sub-project:** putting all logic in one function; skipping the planning step; not testing with known inputs; forgetting to call the function; using `min(data)` / `max(data)` inside a comprehension unnecessarily (addressed in 8.6b)
- **Error classes:** all previously met; `AssertionError` from their own tests; `TypeError` and `StopIteration` may appear if they accidentally misuse `next()` — registered in the Codex as errors to recognise, not as taught concepts (see chapter-wide error classes below)

---

### Chapter Challenge (8.7)
See outline below.

### Chapter Quiz (8.8)
See outline below.

### Chapter Recap (8.9)
See outline below.

---

## Progression / difficulty ramp

| Lesson | Rung range | Write-from-scratch? |
|--------|-----------|---------------------|
| 8.1 Hook | 3 Modify | No |
| 8.2 Design | 4 Fix / 5 Complete | No (stubs given for most exercises) |
| 8.3 try/except deepened | 1 Predict → 4 Fix → 5 Complete | No (skeleton given for all exercises) |
| 8.4 Comprehensions | 3 Modify → 5 Complete → 6 Write | Final exercise only |
| 8.5 Testing | 4 Fix → 5 Complete → 6 Write | Final exercise only |
| 8.6 Strand projects | 6 Write (all), bridge step first | Yes — every sub-project |
| Chapter Challenge | 4 Fix → 6 Write | Yes — final 3 exercises |

The chapter opens by reading and modifying a complete program (low threat), then teaches each new tool explicitly with scaffolded exercises, then removes all scaffolding for the strand projects. This matches the PRIMM arc (Predict→Run→Investigate→Modify→Make) at chapter scale.

---

## Chapter Challenge (outline)

Six to eight exercises ordered easy → hard, scaffolding fading to blank:

1. **(Fix / rung 4)** A `try`/`except` block that catches the wrong exception type — identify what it should catch and fix it. Input given.
2. **(Fix / rung 4)** A list comprehension with a logic error in the filter condition (`>` instead of `>=`) producing the wrong output — find and fix.
3. **(Complete / rung 5)** A `safe_int_input(prompt, lo, hi)` function stub — fill in the body using `while True`, `try`/`except`, bounds checking, and a `raise ValueError` when the value is out of range.
4. **(Complete / rung 5)** Partial `def test_word_count()` — add three `assert condition, message` calls covering empty string, single word, and repeated word. All asserts must use the message form.
5. **(Write / rung 6)** Spec for a `flatten(list_of_lists)` function that returns a single list — write the function using a `for` loop and `.extend()` (nested comprehensions are out of scope for this chapter), then write `def test_flatten()` with at least three asserts using the message form (empty input, single sublist, multiple sublists).
6. **(Write / rung 6)** Spec for a mini grade-book: a dict of `{name: [scores]}`, a comprehension to compute averages, a function to find the top student, and a `try`/`except KeyError as e` for a missing name lookup (print `f"No student named {e.args[0]}"`). Write from scratch.
7. **(Write / rung 6, mixed strand)** Spec for a "word art generator": take a word, repeat each letter N times using a list comprehension, join, and print; wrap user input in `try`/`except`; add two `assert condition, message` tests.
8. **(Write / rung 6, open)** Open-ended: given a two-sentence spec of the student's choice (teacher or self-selected), plan the functions, write the program, write the tests. Required: the program must use at least two of the chapter's owned concepts (e.g., a comprehension and an assert test with the message form). The creativity is in the domain; the owned concepts are the floor.

---

## Chapter Quiz (outline)

Must pass to unlock Chapter 9 (JavaScript). Gate concepts:

1. **Predict the output** — a `try`/`except ValueError` block given non-integer input; what prints?
2. **Predict the output** — a list comprehension with a filter; give the resulting list.
3. **Short write** — explain in one sentence what `assert result == 42, "expected 42"` does and when it fails.
4. **Spot the error** — a `try`/`except` block that swallows all exceptions (`except:`) — explain why this is a bad practice and how to fix it.
5. **Short write** — given this spec: "a program that reads a student name and a score, then prints a grade letter (A/B/C/F)", name the three functions you would define before writing any logic. (Expected: e.g., `get_input()`, `letter_grade(score)`, `display(name, grade)`. Graded as a "compare your answer" item, not auto-checked — the spec is provided so the function list is bounded but multiple valid answers exist. Labeled explicitly as "compare your answer" in the quiz UI.)
6. **Predict the output** — a dict comprehension building `{word: len(word)}` for a short list; give the dict.

---

## Chapter Recap (outline)

Required by CURRICULUM-STRUCTURE §C (item 6). Codex consolidation + retrieval set for later spiral.

**Must-stick concepts for Ch.8 (5–7 items):**
1. `except ExceptionType as e` — the exception object is inspectable; `e.args[0]` for clean output
2. `else` clause on `try` — runs when no exception, NOT when one is caught; keeps the success path clean
3. `finally` clause — runs unconditionally; signals cleanup intent
4. List/dict comprehension — `[expr for x in it if cond]`; `{k: v for x in it}`; `{}` alone is a dict; `{x for x in it}` is a set
5. `assert condition, "message"` — developer check, not user-facing robustness; always include the message
6. `def test_*()` pattern — a function that calls `assert` on one unit of behaviour; Exercise 1 reflex: assert found a bug in the function
7. Program design workflow — spec → nouns/verbs → call-graph → stubs → fill in → integrate

**Retrieval questions for Ch.9+ spiral (4–5 items):**
- "Write a comprehension that gives only the even numbers from a list." (Fires in Ch.9 when JS arrays are introduced.)
- "What is the difference between `except ValueError:` and `except ValueError as e:`?" (Fires in Ch.9 when JS error objects are introduced.)
- "Write `def test_double()` with two asserts using the message form." (Fires in Ch.10 when TypeScript type-checker is introduced as a second correctness tool.)
- "What does the `else` clause on a `try` block do? When is it skipped?" (Fires in any later error-handling context.)
- "Name the three functions you would design for a program that reads, processes, and displays data." (Fires in Real Tools chapters when file I/O and APIs are introduced.)

---

## Misconceptions & error classes (chapter-wide)

**Misconceptions:**
- `try`/`except` is only for file operations (it handles any exception)
- A bare `except:` is safe because it catches everything (it hides bugs silently)
- The `else` clause on a `try` block runs when an exception *is* caught (wrong — it runs when no exception occurs; corrected by the two-panel contrast in 8.3)
- Comprehensions are always faster and clearer (they're unreadable when logic is complex)
- `{expr for x in it}` with braces makes a dict (wrong — it makes a set; corrected by the mandatory worked example in 8.4)
- `{}` is an empty set (wrong — it's an empty dict; `set()` makes an empty set)
- `assert` in production replaces proper error handling (assertions are for developer checks, not user-facing robustness)
- Testing means running the program once and seeing if it prints the right thing
- A program should be written top-to-bottom before thinking about its structure
- When an assert fails, the test must be wrong (the first reflex should be: the function is wrong)
- `f"No score for {e}"` where `e` is a `KeyError` gives clean output (wrong — `KeyError.__str__` adds repr quotes around the key; use `e.args[0]` for clean key output; this quotes problem is specific to `KeyError` — for `ValueError` and `ZeroDivisionError`, `str(e)` is already clean and `e.args[0]` is equivalent)

**Error classes (all registered to Codex):**
- `ValueError` — wrong value for a conversion (e.g. `int("abc")`) — recalled from Ch.1; caught explicitly (recalled from Ch.2)
- `ZeroDivisionError` — division by zero — recalled from Ch.1/4; caught (recalled from Ch.2)
- `KeyError` — dict key missing — recalled from Ch.4; caught with `as e` (new in Ch.8)
- `IndexError` — list index out of range — recalled from Ch.4; caught with `as e` (new in Ch.8)
- `AssertionError` — `assert` condition was false — **owned by this chapter**; message form avoids empty tracebacks
- `TypeError` — arises from comprehension expression type mismatches, or accidentally calling `next()` on a plain list (`next([1,2,3])` → `TypeError: 'list' object is not an iterator`), or writing `key=freq.get()` with parentheses — recalled; caught context added
- `StopIteration` — can appear if a student accidentally exhausts an `iter()` object with repeated `next()` calls; registered in Codex as an error to recognise, not a taught concept (iterators/`iter()`/`next()` are not taught in Ch.1–8)
- `NameError` — wrong variable name in comprehension — recalled; context added

---

## Sources

- Python 3 Tutorial — Errors and Exceptions: [https://docs.python.org/3/tutorial/errors.html](https://docs.python.org/3/tutorial/errors.html) — syntax and semantics of `try`/`except`/`else`/`finally`/`raise`; exception hierarchy; verified all clauses and behaviour
- Python 3 Tutorial — Data Structures, List Comprehensions: [https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions) — list, dict, set comprehension syntax; filter form; nested form; common SyntaxError with tuples
- Python 3 Library Reference — Built-in Exceptions: [https://docs.python.org/3/library/exceptions.html](https://docs.python.org/3/library/exceptions.html) — verified descriptions of `ValueError`, `TypeError`, `KeyError`, `IndexError`, `ZeroDivisionError`, `FileNotFoundError`, `AssertionError`, `StopIteration`; verified `KeyError.__str__` includes quotes around the key
- *Think Python* 2nd ed. (Downey) — Ch.4 Interface Design: [https://greenteapress.com/thinkpython2/html/thinkpython2005.html](https://greenteapress.com/thinkpython2/html/thinkpython2005.html) — encapsulation, generalisation, the "write then refactor" development strategy for beginners
- *Think Python* 2nd ed. (Downey) — Appendix A Debugging: [https://greenteapress.com/thinkpython2/html/thinkpython2021.html](https://greenteapress.com/thinkpython2/html/thinkpython2021.html) — three error categories; mental-model correction via component isolation; print-trace approach as accessible entry
- *How to Think Like a Computer Scientist* (HTTLACS) — Exceptions chapter: [https://openbookproject.net/thinkcs/python/english3e/exceptions.html](https://openbookproject.net/thinkcs/python/english3e/exceptions.html) — concrete-to-abstract pedagogy for `try`/`except`; `ZeroDivisionError`/`IndexError`/`TypeError`/`ValueError` introduced from observable runtime errors; raise taught as two separate steps
- CSTA K-12 CS Standards (6–8 band) — Algorithms and Programming: standard "Systematically test and refine programs using a range of test cases" confirms testing and program refinement are expected at this level; [https://csteachers.org/k12standards/](https://csteachers.org/k12standards/)
- arXiv 2411.09463 — "Teaching Program Decomposition in CS1": confirmed that decomposition is actionable as a scaffolded strategy; framework builds on existing code-style principles; supports the design-before-code lesson arc in 8.2: [https://arxiv.org/abs/2411.09463](https://arxiv.org/abs/2411.09463)
- PRIMM pedagogy (refer CURRICULUM-STRUCTURE.md) — the Predict→Run→Investigate→Modify→Make loop shapes the hook, rung progression, and strand-project sequencing throughout this chapter
- Verified by running: `min(data)` / `max(data)` are built-ins that already iterate the list; wrapping them in a comprehension is redundant (B1 fix). The for-loop equivalent of `{w: len(w) for w in words}` is three lines (B2 fix). `f"No score for {e}"` where `e` is a `KeyError('Bob')` prints `No score for 'Bob'` with quotes; `f"No score for {e.args[0]}"` prints `No score for Bob` without (m4 fix).
