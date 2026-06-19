# Chapter 8 — Writing Real Programs in Python

## Overview

Chapter 8 is the Python integration chapter. After seven chapters of building individual skills — types, control flow, functions, collections, design, OOP, modules — students now write *complete, robust, non-trivial programs* from scratch. The through-line is the craft of turning a real-world spec into working code: decomposing the problem, designing functions and data structures, handling bad input gracefully, verifying that your code does what you think it does, and expressing transformations concisely. Every concept in Ch.1–7 is recalled and exercised under realistic conditions. By the end, each of the five strands has produced a self-contained program the student wrote entirely themselves.

**The learner can do by the end:**
- Read a short program spec and break it into functions + data before writing a single line
- Write interactive input loops and menus that do not crash on bad input
- Use `try`/`except` to handle `ValueError`, `KeyError`, `ZeroDivisionError`, and `IndexError`
- Replace verbose `for`-`append` loops with list and dict comprehensions
- Write `assert` statements and simple test functions to verify their own code
- Produce a complete, tested, multi-function program in each strand from a blank editor

---

## Concepts owned (keywords)

- **`try` / `except`** — intercept a named exception; execution continues rather than crashing
- **`except ExceptionType as e`** — name and inspect the caught exception object
- **`else` clause on `try`** — runs only when no exception was raised; preferred over expanding the `try` body
- **`finally` clause** — runs unconditionally; signals cleanup intent
- **`raise`** — signal an error deliberately from your own code
- **List comprehension** — `[expr for x in iterable if condition]`; creates a new list in one expression
- **Dict comprehension** — `{key_expr: val_expr for x in iterable}`; use for transformations (e.g. `{w: len(w) for w in words}`); does NOT accumulate — use a `for`-loop with `.get()` for counting
- **`key=` argument for `sorted()`** — `sorted(iterable, key=some_fn, reverse=True)`; the canonical lambda-free trick for sorting a dict by value is `sorted(freq, key=freq.get, reverse=True)` (requires dict `.get()` from Ch.4)
- **`assert`** — check a condition in your own code; crash with `AssertionError` if false
- **Simple test function** — a `def test_*()` function that calls `assert` to verify one unit of behaviour
- **Input loop / menu** — `while True` + `try`/`except` + `break`; the standard pattern for robust interactive programs
- **Program design at scale** — starting from a spec: identify data → name functions → stub → fill in → integrate

---

## Concept map & dependencies

```
Program design (8.2)
    ↓
Input loops + try/except (8.3)   ←  recalled: while, input(), ValueError from Ch.1/2/3
    ↓
Comprehensions (8.4)             ←  recalled: lists, dicts, for loops from Ch.4
    ↓
assert + test functions (8.5)    ←  recalled: functions, return, bool from Ch.3/2
    ↓
Strand projects (8.6)            ←  recalled: ALL of Ch.1–7
    ↓
Chapter Challenge                ←  ALL Ch.8 + recalled skills
```

Teaching order rationale: program design first so students have a mental model before adding robustness; `try`/`except` immediately after because every interactive program needs it; comprehensions as a shorthand reward once the full pattern is in muscle memory; `assert` last because testing your own code presupposes you already have functions worth testing; strand projects synthesise everything at max rung.

**Spiral recalls per lesson (summary):**
- 8.1 recalls: print, functions, lists, dicts, for loops, if/else, modules (Ch.1–7 all touched)
- 8.2 recalls: functions, decomposition, docstrings, DRY (Ch.3, 5)
- 8.3 recalls: while, input(), int() conversion, ValueError (Ch.1, 2)
- 8.4 recalls: list iteration, dict iteration, for + if, append (Ch.4)
- 8.5 recalls: def, return, bool, assert as a keyword encountered in tracebacks (Ch.3)
- 8.6 recalls: everything by strand — str methods (Ch.1/2/7), plot (Ch.4), music (Ch.1/4/6), OOP (Ch.6), JSON (Ch.7)

---

## Lessons

### 8.1 — Hook: A Real Program, Alive (Hook)
- **Arc role:** Hook. Run a fully working 60-line program; observe and tinker before explaining anything.
- **Concept:** A real program has a main loop, functions, error handling, and data — all parts working together.
- **Rung:** 3 Modify
- **Strand:** mixed (a playable quiz or word-guessing game)
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
- **Concepts:** program design at scale; spec → data → function signatures → stubs → fill in → integrate
- **Rung:** 4 Fix, 5 Complete
- **Strand:** core
- **Worked-example ideas:**
  - Given a short spec ("a temperature converter that handles Celsius, Fahrenheit, Kelvin"), walk through: identify the data (temperature value + unit), name the functions (`convert`, `display_menu`, `get_input`), write stubs
  - Show a "flat script" doing the same task; point out repetition, untestable logic; refactor step-by-step into functions
  - A spec with a list of records: show how to decide on a list-of-dicts data structure before writing any logic
- **Exercise ideas:**
  - (Complete) Given a spec for a "word stats tool" and pre-written stubs, fill in two of the three functions
  - (Fix) A multi-function program where functions are the right shape but `return` is missing in one — trace, diagnose, fix
  - (Write) Given a four-sentence spec, produce a data structure + function name list + docstrings only (no logic yet)
- **Misconceptions:** "I'll just start typing and see what happens"; ignoring return values; putting all logic in `main`
- **Error classes:** none new — reinforces reading tracebacks as a design signal
- **Recalls:** `def`, `return`, docstrings, DRY, decomposition (Ch.3, 5)

---

### 8.3 — Handling Errors: `try` / `except` (Concept)
- **Arc role:** Concept lesson 2. Introduces robust interactive programs.
- **Concepts:** `try`/`except`; `except ExceptionType as e`; `else` clause; `finally`; `raise`; the input-loop pattern (`while True` + `try` + `break`)
- **Rung:** 4 Fix → 5 Complete → 6 Write
- **Strand:** core / numbers
- **Worked-example ideas:**
  - Bare input loop without `try`/`except`: crash on non-integer; then add `except ValueError` and watch it survive
  - Multi-exception handler: a function that divides and looks up a dict key; catches `ZeroDivisionError` and `KeyError` separately with a message for each
  - `else` clause: a dict-lookup pattern (`scores["Alice"]`) simulated with a small dict; `else` runs only on success; illustrate why the `else` body belongs there rather than inside `try`
- **Exercise ideas:**
  - (Fix) A menu loop that crashes on letters — add `try`/`except ValueError` and test with bad input; spot the missing `break`
  - (Complete) A `get_positive_int(prompt)` function with a `while True` loop; the `try`/`except`/`else`/`break` skeleton is there but two lines are wrong — fix them
  - (Write) Write a `safe_divide(a, b)` function that returns the result or prints a clear message and returns `None`; write it from scratch
  - (Complete) A `lookup_score(scores, name)` function skeleton using `try`/`except KeyError as e`; the body is stubbed — fill in the `except` branch to print `f"No score for {e}"` and call `raise` to re-raise; verify that calling it with a missing name shows the message and still propagates the `KeyError`
- **Misconceptions:** catching bare `except:` (hides all errors); putting too much code in the `try` body; thinking `try/except` is just for files; forgetting that `else` on `try` exists
- **Error classes:** `ValueError`, `ZeroDivisionError`, `KeyError`, `AssertionError` (preview)
- **Recalls:** `while True`, `break`, `input()`, `int()` conversion (Ch.1, 2)

---

### 8.4 — Comprehensions (Concept)
- **Arc role:** Concept lesson 3. Introduces list and dict comprehensions as a cleaner form of a pattern students already know.
- **Concepts:** list comprehension `[expr for x in it]`; filter form `[expr for x in it if cond]`; dict comprehension `{k: v for x in it}`; when *not* to use a comprehension (side effects, complex multi-step logic)
- **Rung:** 3 Modify → 5 Complete → 6 Write
- **Strand:** data / words
- **Worked-example ideas:**
  - Side-by-side: `for` loop with `append` → equivalent list comprehension; same output, count the lines saved
  - Filter comprehension: from a list of scores, extract only the passing ones (`>= 60`); then extend with a transformation (convert to percentages)
  - Dict comprehension: from a list of words, build `{word: len(word)}` in one line; note that the `for`-loop version took five lines
- **Exercise ideas:**
  - (Modify) A `for`-loop-with-append that squares numbers in a list — rewrite it as a list comprehension; the loop is given, the blank line is yours
  - (Complete) A dict comprehension with the key expression wrong (off-by-one index, or wrong variable name) — spot and fix it
  - (Write) Given a list of strings, write a single comprehension that returns only the strings that start with a vowel, uppercased
- **Misconceptions:** using a comprehension for a loop with `print` or `append` side effects; forgetting `if` goes at the end; nested comprehensions before single-level is solid; two separate brace confusions to address explicitly:
  - `{…}` vs. `[…]`: `[x for x in it]` is a list; `{x for x in it}` is a **set** (unordered, no duplicates) — braces alone do not make a dict
  - set comprehension vs. dict comprehension: `{w for w in words}` → set; `{w: len(w) for w in words}` → dict (requires the `key: value` colon form); accidentally writing the set form when a dict is needed is a common error — side-by-side contrast in worked example
- **Error classes:** `SyntaxError` (missing bracket/colon), `TypeError` (wrong expression type), `NameError` (wrong loop variable)
- **Recalls:** list methods (Ch.4), dict iteration (Ch.4), `for` + `if` (Ch.2)

---

### 8.5 — Testing Your Own Code (Concept)
- **Arc role:** Concept lesson 4. Introduces `assert` and simple test functions as a first formal testing habit.
- **Concepts:** `assert condition` — crash with `AssertionError` if false; `assert condition, message` — include a message; `def test_*()` as a naming convention; testing edge cases (zero, empty, negative, boundary); why testing is not the same as running the program once
- **Rung:** 4 Fix → 5 Complete → 6 Write
- **Strand:** core / numbers
- **Worked-example ideas:**
  - `assert` on a simple arithmetic function: `assert add(2, 3) == 5`; show the `AssertionError` when it fails; fix the function
  - A `is_palindrome(s)` function with a subtle bug; a test function with four `assert` calls finds it; fixing the bug makes all asserts pass
  - Edge-case thinking: a `safe_average(lst)` function; test with `[]` (empty list) — what should it return/raise? Write the assert first, then the function
- **Exercise ideas:**
  - (Fix) A `def test_reverse()` function has one `assert` that passes and one that fails (the expected value is wrong in the assert, not in the function) — read the `AssertionError`, correct the test expectation, not the function
  - (Complete) A function stub `def clamp(x, lo, hi)` (returns `lo` if `x < lo`, `hi` if `x > hi`, else `x`) — fill in the body, then complete the partially-written `def test_clamp()` with two more assert cases
  - (Write) Write both `def celsius_to_fahrenheit(c)` and `def test_celsius_to_fahrenheit()` with at least three asserts, from scratch
- **Misconceptions:** `assert` only catches typos (misses edge cases); testing only the "happy path"; confusing `assert` with `if`; thinking tests make code run; `AssertionError` looks scary but is just a failed check
- **Error classes:** `AssertionError` (owned here), recalls `ZeroDivisionError` / `ValueError` (what a test might provoke)
- **Recalls:** `def`, `return`, `bool`, comparison operators (Ch.2, 3)

---

### 8.6 — Strand Projects: Writing Real Programs (Strand-application)
- **Arc role:** Strand-application. Four sub-projects, one per sub-session; each is a complete program written from a blank editor. This is rung 6 at maximum scale.
- **Concepts:** all of Ch.8; all of Ch.1–7 recalled under realistic conditions
- **Rung:** 6 Write (write from scratch by spec)
- **Strand:** words · data+plot · numbers · sound
- **Four sub-projects (each has its own spec, worked example to read first, then blank editor):**

  **8.6a — Text Tool (words strand)**
  - Spec: a word-frequency counter. Reads a multi-line string (or list of sentences), counts word frequencies using a dict, reports the top-5 words, ignores punctuation and is case-insensitive.
  - Key concepts exercised: frequency dict built with the `for`-loop + `.get()` pattern (`freq[w] = freq.get(w, 0) + 1`, recalled from Ch.4 — NOT a dict comprehension, which cannot accumulate); dict comprehension used separately for a transformation (e.g. `{w: len(w) for w in top5}`); top-5 words found with `sorted(freq, key=freq.get, reverse=True)[:5]` — no lambda; string methods (`.lower()` recalled from Ch.1, `.strip()` recalled from Ch.1, `.split()`); `try`/`except` for robustness on empty input; decomposed into at least three functions.
  - Worked example idea to read first: a shorter "character frequency" version (1–5 characters)
  - Exercise: write from a spec; test with `assert` on the top word of a known input — use a tie-free input (e.g. `"the the cat sat"`) so the expected top word is unambiguous

  **8.6b — Data Analyzer (data + plot strand)**
  - Spec: reads a list of numeric records (e.g. daily step counts), computes mean/min/max using list comprehensions, plots a bar chart, and flags any days below a user-set threshold with `try`/`except ValueError` on the threshold input.
  - Key concepts exercised: list comprehensions with filter, `try`/`except`, `plot`/`bar`, decomposed into `load_data`, `analyze`, `display` functions.
  - Worked example idea: shorter "rainfall averages" program to read before writing

  **8.6c — Number Game or Simulation (numbers strand)**
  - Spec: a number-guessing game with a menu (Play / High Scores / Quit), persistent high-score list (plain list, no file I/O), robust input loop with `try`/`except`, tracks guesses per round.
  - Alternative spec (simulation path): a dice-roll probability simulator — roll N dice M times, tally results as a dict, display a histogram.
  - Key concepts exercised: `while True` input loop, `try`/`except`, list/dict data, functions per concern, `random` module, comprehensions for tallying.

  **8.6d — Generative Music Piece (sound strand)**
  - Spec: a generative melody built from a scale (list of pitches), random walks on that scale, assembled using a list comprehension or for loop, played with `play_pattern`; `try`/`except` wraps any user-supplied BPM or scale input.
  - Key concepts exercised: list comprehension over a scale list, `random.choice`, `try`/`except ValueError`, OOP optional (use `Note` class if built in Ch.6), structured as functions.

- **`raise` in strand projects:** at least one sub-project (recommended: 8.6a or 8.6c) requires the student to use `raise ValueError("message")` explicitly — e.g. raising in a validator function when input is empty or out of range — cementing the owned concept from 8.3.
- **Misconceptions per sub-project:** putting all logic in one function; skipping the planning step; not testing with known inputs; forgetting to call the function
- **Error classes:** all previously met; `AssertionError` from their own tests; `TypeError` and `StopIteration` may appear if they accidentally misuse `next()` — registered in the Codex as errors to recognise, not as taught concepts (see chapter-wide error classes below)

---

### Chapter Challenge (8.7)
See outline below.

### Chapter Quiz (8.8)
See outline below.

---

## Progression / difficulty ramp

| Lesson | Rung range | Write-from-scratch? |
|--------|-----------|---------------------|
| 8.1 Hook | 3 Modify | No |
| 8.2 Design | 4 Fix / 5 Complete | No (stubs given for most exercises) |
| 8.3 try/except | 4 Fix → 5 Complete → 6 Write | Final exercise only |
| 8.4 Comprehensions | 3 Modify → 5 Complete → 6 Write | Final exercise only |
| 8.5 Testing | 4 Fix → 5 Complete → 6 Write | Final exercise only |
| 8.6 Strand projects | 6 Write (all) | Yes — every sub-project |
| Chapter Challenge | 4 Fix → 6 Write | Yes — final 3 exercises |

The chapter opens by reading and modifying a complete program (low threat), then teaches each new tool explicitly with scaffolded exercises, then removes all scaffolding for the strand projects. This matches the PRIMM arc (Predict→Run→Investigate→Modify→Make) at chapter scale.

---

## Chapter Challenge (outline)

Six to eight exercises ordered easy → hard, scaffolding fading to blank:

1. **(Fix / rung 4)** A `try`/`except` block that catches the wrong exception type — identify what it should catch and fix it. Input given.
2. **(Fix / rung 4)** A list comprehension with a logic error in the filter condition (`>` instead of `>=`) producing the wrong output — find and fix.
3. **(Complete / rung 5)** A `safe_int_input(prompt, lo, hi)` function stub — fill in the body using `while True`, `try`/`except`, bounds checking.
4. **(Complete / rung 5)** Partial `def test_word_count()` — add three `assert` calls covering empty string, single word, and repeated word.
5. **(Write / rung 6)** Spec for a `flatten(list_of_lists)` function that returns a single list — write the function using a `for` loop and `.extend()` (nested comprehensions are out of scope for this chapter), then write `def test_flatten()` with at least three asserts (empty input, single sublist, multiple sublists).
6. **(Write / rung 6)** Spec for a mini grade-book: a dict of `{name: [scores]}`, a comprehension to compute averages, a function to find the top student, and a `try`/`except` for a missing name lookup. Write from scratch.
7. **(Write / rung 6, mixed strand)** Spec for a "word art generator": take a word, repeat each letter N times using a list comprehension, join, and print; wrap user input in `try`/`except`; add two `assert` tests.
8. **(Write / rung 6, open)** Open-ended: given a two-sentence spec of the student's choice (teacher or self-selected), plan the functions, write the program, write the tests.

---

## Chapter Quiz (outline)

Must pass to unlock Chapter 9 (JavaScript). Gate concepts:

1. **Predict the output** — a `try`/`except ValueError` block given non-integer input; what prints?
2. **Predict the output** — a list comprehension with a filter; give the resulting list.
3. **Short write** — explain in one sentence what `assert result == 42` does and when it fails.
4. **Spot the error** — a `try`/`except` block that swallows all exceptions (`except:`) — explain why this is a bad practice and how to fix it.
5. **Short write** — given a two-line spec, name the functions you would define before writing any logic (tests design thinking, not syntax).
6. **Predict the output** — a dict comprehension building `{word: len(word)}` for a short list; give the dict.

---

## Misconceptions & error classes (chapter-wide)

**Misconceptions:**
- `try`/`except` is only for file operations (it handles any exception)
- A bare `except:` is safe because it catches everything (it hides bugs silently)
- Comprehensions are always faster and clearer (they're unreadable when logic is complex)
- `assert` in production replaces proper error handling (assertions are for developer checks, not user-facing robustness)
- Testing means running the program once and seeing if it prints the right thing
- A program should be written top-to-bottom before thinking about its structure
- The `else` clause on a `try` block runs when an exception *is* caught (wrong — it runs when no exception occurs)

**Error classes (all registered to Codex):**
- `ValueError` — wrong value for a conversion (e.g. `int("abc")`) — recalled from Ch.1; now *caught* explicitly
- `ZeroDivisionError` — division by zero — recalled from Ch.1/4; now caught
- `KeyError` — dict key missing — recalled from Ch.4; now caught
- `IndexError` — list index out of range — recalled from Ch.4; now caught
- `AssertionError` — `assert` condition was false — **owned by this chapter**
- `TypeError` — arises from comprehension expression type mismatches, or accidentally calling `next()` on a plain list (`next([1,2,3])` → `TypeError: 'list' object is not an iterator`) — recalled; caught context added
- `StopIteration` — can appear if a student accidentally exhausts an `iter()` object with repeated `next()` calls; registered in Codex as an error to recognise, not a taught concept (iterators/`iter()`/`next()` are not taught in Ch.1–8)
- `NameError` — wrong variable name in comprehension — recalled; context added

---

## Sources

- Python 3 Tutorial — Errors and Exceptions: [https://docs.python.org/3/tutorial/errors.html](https://docs.python.org/3/tutorial/errors.html) — syntax and semantics of `try`/`except`/`else`/`finally`/`raise`; exception hierarchy; verified all clauses and behaviour
- Python 3 Tutorial — Data Structures, List Comprehensions: [https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions) — list, dict, set comprehension syntax; filter form; nested form; common SyntaxError with tuples
- Python 3 Library Reference — Built-in Exceptions: [https://docs.python.org/3/library/exceptions.html](https://docs.python.org/3/library/exceptions.html) — verified descriptions of `ValueError`, `TypeError`, `KeyError`, `IndexError`, `ZeroDivisionError`, `FileNotFoundError`, `AssertionError`, `StopIteration`
- *Think Python* 2nd ed. (Downey) — Ch.4 Interface Design: [https://greenteapress.com/thinkpython2/html/thinkpython2005.html](https://greenteapress.com/thinkpython2/html/thinkpython2005.html) — encapsulation, generalisation, the "write then refactor" development strategy for beginners
- *Think Python* 2nd ed. (Downey) — Appendix A Debugging: [https://greenteapress.com/thinkpython2/html/thinkpython2021.html](https://greenteapress.com/thinkpython2/html/thinkpython2021.html) — three error categories; mental-model correction via component isolation; print-trace approach as accessible entry
- *How to Think Like a Computer Scientist* (HTTLACS) — Exceptions chapter: [https://openbookproject.net/thinkcs/python/english3e/exceptions.html](https://openbookproject.net/thinkcs/python/english3e/exceptions.html) — concrete-to-abstract pedagogy for `try`/`except`; `ZeroDivisionError`/`IndexError`/`TypeError`/`ValueError` introduced from observable runtime errors; raise taught as two separate steps
- CSTA K-12 CS Standards (6–8 band) — Algorithms and Programming: standard "Systematically test and refine programs using a range of test cases" confirms testing and program refinement are expected at this level; [https://csteachers.org/k12standards/](https://csteachers.org/k12standards/)
- arXiv 2411.09463 — "Teaching Program Decomposition in CS1": confirmed that decomposition is actionable as a scaffolded strategy; framework builds on existing code-style principles; supports the design-before-code lesson arc in 8.2: [https://arxiv.org/abs/2411.09463](https://arxiv.org/abs/2411.09463)
- PRIMM pedagogy (refer CURRICULUM-STRUCTURE.md) — the Predict→Run→Investigate→Modify→Make loop shapes the hook, rung progression, and strand-project sequencing throughout this chapter
