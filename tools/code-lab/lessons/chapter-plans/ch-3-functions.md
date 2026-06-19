# Chapter 3 — Functions

## Overview

Chapter 3 is the write-from-scratch milestone. By the end, blank-editor authoring is the default expectation; scaffolding has fully faded. The chapter introduces the most powerful idea in the course so far: a named, reusable block of logic that takes inputs and produces outputs. The through-line is **decomposition as a design tool** — breaking a problem into small, named machines, then assembling them. Every lesson models this habit, and every strand exercise demands it. The chapter closes with a groove-builder strand lesson (sound) and a tip-splitter challenge that ties numbers, functions, and user input into one real program.

The learner will be able to:
- Define functions with `def` and call them;
- Pass arguments to parameters and understand why the names don't have to match;
- Write functions that `return` computed values (fruitful functions) vs. functions that act without returning (void);
- Explain local scope: why a variable inside a function is invisible outside it;
- Use default argument values to make a function flexible without requiring all arguments every time;
- Write a one-line docstring;
- Decompose a multi-step problem into named helper functions;
- Apply functions across the numbers, plot, and sound strands.

Rungs 5–6 apply: by Lesson 3.3 the first blank-editor exercises appear; by Lesson 3.5 all hard exercises are blank-editor only.

---

## Concepts owned (keywords)

- `def` — the keyword that introduces a function definition
- **parameter** — the variable named in the `def` line; local to the function
- **argument** — the value supplied at the call site; assigned to the parameter
- `return` — ends execution of a function and optionally produces a value
- **fruitful function** — a function that `return`s a non-`None` value
- **void function** — a function whose body has no `return`, or `return` alone; produces `None`
- **local scope** — variables created inside a function are visible only inside it; destroyed when the function returns
- **default argument** — a parameter given a fallback value in the `def` line; makes the argument optional at call time
- **docstring** — a triple- (or single-) quoted string as the first statement of a function body; readable via `.__doc__`
- **decomposition** — breaking a problem into smaller named sub-problems, each handled by its own function; the design habit the chapter is building
- **abstraction (named here)** — a function hides the details of how it works; the caller only needs to know what it does (name, inputs, output); Ch.3 is where this idea gets its name for the first time (Ch.0 modelled it silently, Ch.5 deepens it)

---

## Concept map & dependencies

```
Ch.1–2 recalled:  variables · types · arithmetic · loops · conditionals · print · input
                        ↓
3.1  def + calling (no params, no return)        ← simplest framing: a named shortcut
     └─ flow of execution: definition ≠ running
3.2  parameters & arguments                      ← extends 3.1; recycles types + arithmetic
     └─ param/arg distinction; scope preview
3.3  return values (fruitful functions)          ← extends 3.2; recycles conditionals (is_prime)
     └─ void vs fruitful; None; calling in expressions
3.4  scope (local vs outer)                      ← extends 3.2–3.3; resolves preview from 3.2
     └─ local variables destroyed on return; outer readable but not assignable
3.5  default args & docstrings                   ← extends 3.2; standalone concept cluster
     └─ evaluated once at definition time; docstring convention
3.6  Functions That Draw (turtle strand)         ← applies 3.1–3.5 on plot strand
     └─ reusable shape functions with params; decomposition demo
3.7  def bassline() — sound strand               ← applies 3.1–3.5 on sound strand
     └─ groove from function calls; tip-splitter (numbers strand embedded)
```

Recalls from Chs. 1–2 (do NOT re-teach):
- assignment, variable naming, `print`, `input`, `int()` / `float()` conversion
- arithmetic operators and precedence
- `if/elif/else`, `while`, `for`, `range`
- types (`int`, `float`, `str`, `bool`)

---

## Lessons

### Hook lesson: 3.0 — The Shortcut Machine *(arc: Hook)*

- **Role:** Run and modify something real before any syntax is taught; motivate `def` as a naming tool for repeated work.
- **Concepts:** none new — sees a complete function, modifies it, observes reuse.
- **Rungs:** predict → modify (rungs 2–3). No blank editor yet.
- **Strand:** numbers (calorie calculator) + sound (play a two-note motif).

Worked-example ideas:
1. A working `print_banner(name)` that prints a decorated greeting — learner modifies the decoration.
2. A two-note `play_motif()` (sound strand) — learner changes the notes and calls it three times.

Exercise ideas:
- (predict) What prints if you call `print_banner("Sam")` twice? — no code change needed.
- (modify) Change the banner character from `*` to `=` and add a third line.
- (fix) `def print_banner name:` — spot the two syntax errors; fix them.

Misconceptions: "I have to read the def before I call it." Correct model: Python runs your file line by line. When it reaches a `def` line, it learns the recipe but doesn't cook it yet. By the time your call runs, the `def` above it has already been processed — so calling before the `def` in the file would crash with `NameError`. The common pattern of `def main` at the top and a call at the bottom works because both `def` lines run before either call does. Error class: `SyntaxError` (missing parentheses or colon in `def` line).

Recalls: `print`, string repetition (`"*" * 20`).

---

### Concept lesson: 3.1 — Defining a Function *(arc: Concept)*

- **Role:** First contact with the full `def` syntax: name, colon, indented body. No parameters yet; the concept is "a named block you can call".
- **Concepts:** `def`, calling a function, flow of execution (definition vs. invocation), void function, `None`.
- **Rungs:** 2–4 (predict → modify → complete).
- **Strand:** numbers (printing a times table).

Worked-example ideas:
1. `def greet():` / `print("Hello!")` / `greet()` — simplest possible def. Call it once, then twice. Show that defining doesn't run it.
2. `def times_table_7():` loops `for i in range(1, 11): print(7, "×", i, "=", 7*i)` — shows a loop inside a function; call it; ask "what if we call it twice?"
3. `def separator():` prints a line of dashes — called between two blocks of output. Demonstrates reuse reducing repetition.

Exercise ideas:
- (boilerplate) Body given, header is `def ___():` — fill in a sensible name and call it.
- (stub/complete) `def farewell():` with `# TODO: print two goodbye lines` — add the body.
- (fix / debug) `def announcement():` body is un-indented by accident — spot the `IndentationError`, explain it, fix it.

Misconceptions:
- "The function runs when I define it" — common; the worked example sequence addresses it explicitly.
- "Every function must do something with `return`" — premature; void functions are fully valid.

Error classes: `SyntaxError` (bad `def` header), `IndentationError` (body not indented), `NameError` (calling a function whose `def` has not yet been reached in execution order).

Recalls: `for`, `range`, `print`.

---

### Concept lesson: 3.2 — Parameters *(arc: Concept)*

- **Role:** Generalise a function by giving it inputs; build unit-converter examples as the concrete vehicle.
- **Concepts:** parameter, argument, parameter ≠ argument (the name on the outside has nothing to do with the name on the inside), multiple parameters, positional order.
- **Rungs:** 3–5 (modify → complete → first blank-editor hard exercise).
- **Strand:** numbers (unit converters: °C→°F, km→mi, cm→inches).

Worked-example ideas:
1. `def celsius_to_fahrenheit(c):` — single param, one-line arithmetic. Call with a literal, then with a variable. Show the variable name outside needn't match `c`.
2. `def greet(name, greeting):` — two params; call with different combos; show positional order matters.
3. `def bmi(weight_kg, height_m):` — recycles arithmetic and `round()`, links to real-world use.

Exercise ideas:
- (boilerplate) `def km_to_miles(km):` header given, formula slot blank — fill it in; call for 10 km.
- (stub) `def cm_to_inches(cm):` with `FACTOR = 2.54` as a module-level constant — write the one-line body using `FACTOR`. (Default args come in L3.5; the module constant foreshadows the scope lesson in L3.4.)
- (blank) Write `def pounds_to_kg(lbs):` from scratch; test it with `print(pounds_to_kg(150))`.
- (fix) A converter uses `c` inside but the parameter is named `temp` — `NameError`; trace and fix it.

Misconceptions:
- "The argument variable and the parameter variable must have the same name."
- "Parameters are global — I can use them anywhere."

Error classes: `TypeError: missing N required positional argument(s)` (too few args), `TypeError: takes N positional arguments but M were given` (too many), `NameError` (using param name outside function).

Recalls: arithmetic operators, `round()`, `print`, variable assignment.

---

### Concept lesson: 3.3 — Return Values *(arc: Concept)*

- **Role:** Distinguish fruitful functions from void; use a `return` value in an expression. The `is_prime` example ties in conditionals and loops.
- **Concepts:** `return`, fruitful function, void function, `None` (what void returns), calling a function in an expression, early-return pattern.
- **Rungs:** 4–6 (complete → first sustained blank-editor exercises).
- **Strand:** numbers (`is_prime`, `largest_of_three`).

Worked-example ideas:
1. `def square(n): return n * n` — minimal fruitful function; show `print(square(5))` vs. `result = square(5) + 1`; contrast with a void that just prints.
2. `def is_even(n): return n % 2 == 0` — boolean function; use in `if is_even(x):` — models the "name as a yes/no question" idiom from Think Python.
3. `def is_prime(n):` — guard clause `if n < 2: return False` first (early-return pattern introduced by name here: "exit as soon as you know the answer"); then loops divisors 2..n-1, early `return False`, falls through to `return True`; deliberately reuses `for`, `range`, `%`, `if`; shows multiple-return-point pattern. Correct answers: 0→False, 1→False, 2→True, negatives→False, 3→True, 9→False.

Exercise ideas:
- (boilerplate) `def absolute_value(n):` — two-branch `if/else` skeleton given, fill in one missing `return`.
- (stub) `def largest_of_three(a, b, c):` — `# TODO`; write the body returning the biggest; test with `print(largest_of_three(3, 9, 5))`.
- (blank) Write `def is_divisible(n, d):` returning a boolean; then write `def fizz_buzz_label(n):` that uses it. Two functions calling each other — decomposition preview.
- (fix) A function `def add_tax(price, rate): print(price * (1 + rate))` — caller writes `total = add_tax(10, 0.1) + 5` and crashes with `TypeError: unsupported operand type(s) for +: 'NoneType' and 'int'`. Diagnose: void returns `None`. Fix: add `return`.

Misconceptions:
- "A function with `print` inside returns the printed value." (No — it returns `None`.)
- "Multiple `return` statements are illegal."
- "After `return` the function keeps going." (No — execution stops there.)

Error classes: `TypeError` (operating on `None`), `NameError` (accessing a name that only existed inside a function after it has returned — scope preview; covered fully in L3.4), `SyntaxError` (`return` outside a function).

Recalls: `if/elif/else`, `for`, `range`, `%`, boolean operators, `type()`.

---

### Concept lesson: 3.4 — Scope *(arc: Concept)*

- **Role:** Give learners a working model of local scope; resolve the "my variable disappeared" confusion. Keeps it to local vs. outer (the `global` keyword is struck from the curriculum — not taught here or elsewhere; outer variables are readable but should be passed as parameters instead of assigned to).
- **Concepts:** local scope, local variable lifetime (destroyed on return), reading an outer variable from inside a function (allowed), assigning to an outer name (creates a new local, not a change to the outer — the fix is always to pass it as a parameter), stack frame mental model.
- **Rungs:** 4–5 (complete → blank).
- **Strand:** numbers (tax calculator with shared constants).

Worked-example ideas:
1. Two functions both using a variable named `result` — show they are independent; modify one, the other is unaffected. Use the stepper to show the local table.
2. A function that reads a global constant (`TAX_RATE = 0.08`) defined outside — legal, readable. Then show that if the function assigns to `TAX_RATE` inside, it creates a *new local*, not a change to the outer — demonstrate with `print(TAX_RATE)` after the call.
3. Stack diagram as a concept-page visual: two frames side-by-side; variables named in each frame are their own.

Exercise ideas:
- (predict) Two functions with identically named params; a print inside each — predict what each prints without running; step through to check.
- (complete) `def apply_discount(price):` — body almost complete, one line uses a variable that doesn't exist in scope; identify it and fix by adding it as a parameter.
- (blank) `discount = 0.1` at module level; function body tries `discount = discount - 0.01` — crashes with `UnboundLocalError`. Explain why (Python sees the assignment and treats `discount` as local throughout the function, so reading it before assignment fails). Restructure from scratch: write `def apply_discount(price, discount):` with no globals involved, and `def loyalty_discount(price):` that calls it with `discount=0.05`. No starter code; rung 6.

Misconceptions:
- "Variables I create outside a function are available everywhere inside it" — true for reading, false for assigning (creates a new local; the fix is to pass the value as a parameter).
- "The parameter name matters to the caller."
- "After I call a function, its local variables are still around."

Error classes: `NameError` (local used before assignment in same scope), `UnboundLocalError` (Python sees an assignment inside function and treats the name as local even before the assignment line — classic trap).

Recalls: assignment, `print`, types, the stepper / variable table from Chs. 1–2.

---

### Concept lesson: 3.5 — Default Args & Docstrings *(arc: Concept)*

- **Role:** Two standalone skills grouped because they both appear at the `def` line / function header level: making arguments optional with defaults; documenting intent with a docstring. Lighter than 3.3–3.4 — a consolidation lesson before the strand applications.
- **Concepts:** default argument value, evaluated once at definition time (immutable defaults only at this level — no mutable-default trap yet, just a mention), calling with and without optional args, docstring syntax (`"""..."""` as first statement), `.__doc__` attribute, PEP 8 naming (`lowercase_with_underscores`).
- **Rungs:** 5–6 (complete → blank — full write-from-scratch).
- **Strand:** numbers (tip splitter preview; a greeting function with default language).

Worked-example ideas:
1. `def greet(name, greeting="Hello"):` — call three ways: `greet("Sam")`, `greet("Sam", "Hey")`, `greet(greeting="Howdy", name="Sam")` (keyword argument form shown briefly but not drilled — breadth only).
2. `def round_to(value, places=2):` — realistic default; show `round_to(3.14159)` vs. `round_to(3.14159, 4)`.
3. A function with a one-line docstring — show `print(function.__doc__)` revealing it; also show `help(function)` as the more common REPL access path; contrast with a comment (invisible at runtime).

Exercise ideas:
- (complete) `def tip(bill, ___=0.18):` — fill in param name and default; add docstring; call with and without the optional arg.
- (blank) Write `def repeat_word(word, times=3):` from scratch with a docstring; it returns the word repeated `times` times; test it.
- (fix) `def power(base, exp=2, base=10):` — `SyntaxError` from duplicate param name (note: this fires `SyntaxError: duplicate argument 'base' in function definition`, a *different* SyntaxError than the non-default-after-default one taught above); and `base` re-defined; restructure to `power(n, exp=2)` and write a new `def log10(n, base=10):` — two separate functions.

Misconceptions:
- "I can mix required and default args in any order." (`SyntaxError` if a required param follows a defaulted one.)
- "The default is recalculated on each call." (False for all types: the default value is created once, when the `def` line runs, and reused on every call.)
- "Docstrings slow down the program." (They don't affect speed; they're just text Python keeps so tools and `help()` can show it.)

Error classes: `SyntaxError: a required parameter cannot follow a parameter that has a default value` (message varies by Python version — Python 3.12+ says "parameter without a default follows parameter with a default"; Codex entry should note both), `TypeError` (too many / wrong keyword args).

Recalls: `return`, `print`, string `*` repetition, f-strings, Ch.1 types.

---

### Strand lesson: 3.6 — Functions That Draw *(arc: Strand-application — plot)*

- **Role:** Apply all of Ch.3's concepts to turtle graphics; make decomposition feel natural by building a scene from reusable shape functions.
- **Concepts:** no new syntax — applies `def`, params, `return` (indirectly via composition), default args, docstrings, scope, decomposition pattern.
- **Rungs:** 5–6 (modify → blank). Full blank-editor for the final exercise.
- **Strand:** plot (turtle).

Worked-example ideas:
1. `def draw_square(side=50):` — minimal parameterised turtle function; call it three times at different positions to show reuse.
2. `def draw_polygon(sides, length=60):` — generalises square to any regular polygon using `360 / sides`; recycles arithmetic; call for triangle, hexagon, octagon.
3. `def draw_flower(petals, petal_size=40):` calls `draw_polygon` in a loop — function calling function, decomposition in action.

Exercise ideas:
- (modify) Change `draw_polygon` to also accept a `color` default `"blue"` — add the param and one `turtle.color()` call inside.
- (complete) `def draw_house(size):` — skeleton draws a square base; `# TODO: add a triangle roof` using `draw_polygon(3, size)` — write that one call.
- (blank) Write `def draw_scene():` from scratch: calls `draw_house`, `draw_polygon` for a tree trunk, etc. Scene must use at least three named helper functions. Docstring required.

Misconceptions:
- "I have to re-write the loop every time I want a different shape."
- "Default args don't work with turtle."

Recalls: turtle basics (Ch.1 L1.7), `for`, `range`, arithmetic, `def`, params.

---

### Strand lesson: 3.7 — `def bassline()`: A Groove from Function Calls *(arc: Strand-application — sound)*

- **Role:** Apply Ch.3 to the sound strand: build a four-bar groove by composing small, named musical functions. Embedded numbers challenge: a tip-splitter that uses functions to isolate each calculation step.
- **Concepts:** no new syntax — applies `def`, params, default args, `return`, decomposition, docstrings across two strands.
- **Rungs:** 5–6. Final exercises are blank-editor.
- **Strand:** sound (primary) + numbers (tip-splitter embedded challenge).

Worked-example ideas:
1. `def play_note(pitch, duration=0.25):` — thin wrapper over `music.play`; call it to build a simple riff, showing how a named function makes musical intent readable.
2. `def bassline(root, pattern=(1,1,5,5)):` — plays a four-note pattern transposed from a root note; show how changing `root` gives a different key without rewriting the logic. Tuple default is intentional: tuples are immutable, so there is no mutable-default trap; a brief note ("we use a tuple here — it works exactly like a list for reading, but can't be accidentally changed") gives a natural preview of tuples before Ch.4.
3. Tip splitter walkthrough: `def subtotal(items)`, `def tax(subtotal, rate=0.0875)`, `def tip_amount(subtotal, pct=0.18)`, `def per_person(total, n)` — four tiny functions assembled into one `split_bill` program; demonstrate how each is independently testable.

Exercise ideas:
- (modify) Change `bassline` to repeat the pattern twice by wrapping the play loop.
- (complete) `def verse(root):` — calls `bassline(root)` then `play_note(root + 12, 0.5)` for a closing high note; the `play_note` call is stubbed as `# TODO`.
- (blank) Write `def chorus(root, times=2):` from scratch that calls `verse(root)` a given number of times; add a docstring; test it.
- (blank — numbers) Write the full `split_bill(items, n, tax_rate=0.0875, tip_pct=0.18)` from scratch, using the four helper functions defined earlier. Print the per-person amount formatted to two decimal places using `f"${amount:.2f}"` (Ch.1 recall — f-string money formatting).

Misconceptions:
- "A function can only do one thing — music OR math, not both."
- "I have to pass the result of every function to `print` explicitly."

Recalls: `for`, `range`, `round`, f-strings incl. `:.2f` money formatting (Ch.1), `input` + `int`/`float` conversion, `print`.

---

## Progression / difficulty ramp

| Lesson | Max rung | Scaffolding at hard exercise |
|--------|----------|------------------------------|
| 3.0 Hook | 3 (modify) | boilerplate given |
| 3.1 | 4 (complete) | stub + TODO comment |
| 3.2 | 5 (blank — single function) | blank editor, one function |
| 3.3 | 6 (blank — two cooperating functions) | blank editor, no starter |
| 3.4 | 6 (blank) | blank editor, two-function restructure |
| 3.5 | 6 (blank) | blank editor, two functions |
| 3.6 | 6 (blank scene) | blank editor, compose ≥3 functions |
| 3.7 | 6 (blank, two-strand) | blank editor, full program |

Write-from-scratch is the default by Lesson 3.3. The stepper remains active on every exercise; the variable table is the primary debugging tool. Error annotation fades from "full" toward "on-demand" per PLAN.md §3 — still full through this chapter.

---

## Chapter Challenge (outline)

Six to eight exercises, ordered easy → hard, mixing all chapter concepts and the numbers / plot / sound strands. Scaffolding fades to blank by exercise 5.

1. **(predict)** Read four function calls with mismatched argument orders and mixed default vs. required params — predict printed output without running; identify any that raise `TypeError`.
2. **(fix)** A `celsius_to_fahrenheit` function that prints instead of returning — caller crashes with `NoneType` error; fix it.
3. **(complete — numbers)** `def clamp(value, low=0, high=100):` — header and docstring given; write the body that returns `value` clamped to `[low, high]`; three test calls given to pass.
4. **(blank — numbers)** Write `def is_leap_year(year):` from scratch; return a boolean; must handle the three-rule leap-year test (divisible by 4, but not 100, unless also 400). Test with 2000, 1900, 2024.
5. **(blank — plot)** Write `def draw_grid(rows, cols, cell_size=40):` that uses a loop and `draw_square` to tile a grid. Decompose: write `draw_row` as a helper.
6. **(blank — sound)** Write `def arpeggio(root, steps, duration=0.15):` that plays each note in a given list of semitone steps above `root`; then write `def rising_arpeggio(root):` using it with `[0, 4, 7, 12]`.
7. **(blank — numbers, integration)** Full tip-splitter program. Given `items = [10.00, 15.50, 8.75]` as a constant (no `input` loop — list accumulation is Ch.4), write `subtotal(items)`, `tax(subtotal, rate=0.0875)`, `tip_amount(subtotal, pct=0.18)`, `per_person(total, n)`, and a `split_bill(items, n)` that assembles them. Format all output to two decimal places using `f"${amount:.2f}"` (Ch.1 recall — f-string money formatting). (The `input`-loop version moves to Ch.4 where `list.append` is in scope.)
8. **(design stretch — any strand)** No starter. Brief: "Write a program that draws or plays something interesting using at least three functions you define yourself, where at least one function calls another." Checked only for structure (three `def`s, one calling another, docstrings present), not for specific output.

---

## Chapter Quiz (outline)

Gates the next chapter. Auto-checked. Must pass all three sections.

**Section A — Predict the output (4 items):**
- A void function called inside `print(...)` — answer is `None`.
- A function with a default arg called both with and without it.
- Two functions with identically named local variables — confirm independence.
- A function that returns a value used in arithmetic — predict the computed result.

**Section B — Spot the bug (2 items):**
- A function body accidentally un-indented — name the error class (`IndentationError`).
- A function that assigns to a name that's also in the outer scope — name what happens (`UnboundLocalError` or "creates a new local").

**Section C — Write a function (1 item, blank editor):**
- Write `def fizz_buzz(n):` returning `"Fizz"`, `"Buzz"`, `"FizzBuzz"`, or the number as a string. Checked against a suite of test calls. Must include a docstring.

Must-pass concepts before Chapter 4 unlocks: `def` syntax · parameters vs. arguments · `return` vs. `print` · local scope · default arguments · decomposition (calling one function from another).

---

## Misconceptions & error classes (chapter-wide list)

**Misconceptions:**
- A `def` statement runs the function immediately.
- The argument variable and the parameter variable must have the same name.
- A function that `print`s a value also *returns* that value.
- After `return`, the rest of the function body still executes.
- Multiple `return` statements in one function are illegal.
- Local variables inside a function are accessible outside it after the call.
- Default argument values are recalculated on every call. (False for all types: the default is created once at `def` time and reused.)
- Non-default parameters can follow default parameters in a `def` line.
- Assigning to a name inside a function changes the outer variable with the same name.

**Error classes introduced or drilled in this chapter:**
- `SyntaxError` — missing colon or parentheses in `def` line; non-default arg after default arg; `return` at module level.
- `IndentationError` — function body not indented (the most common first-function mistake).
- `NameError` — calling a function before its `def`; using a parameter name outside the function.
- `UnboundLocalError` — Python sees an assignment to a name inside a function and treats it as local even before that line executes; reading it before assignment crashes.
- `TypeError: missing N required positional argument(s)` — too few args at call.
- `TypeError: takes N positional arguments but M were given` — too many args.
- `TypeError: unsupported operand type(s) for +: 'NoneType' and int` — operating on a void function's `None` return.
- `TypeError: got multiple values for argument` — positional and keyword arg for the same param.

---

## Sources

- **Python official tutorial §4.8–4.9** — `def`, parameters, return, default args, keyword args, docstrings, scope/symbol tables:
  [https://docs.python.org/3/tutorial/controlflow.html#defining-functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)
- **Think Python 2e, Chapter 3** (Downey) — pedagogical sequence (function calls → math module → composition → def → flow of execution → parameters → scope → stack diagrams → fruitful vs void):
  [https://greenteapress.com/thinkpython2/html/thinkpython2004.html](https://greenteapress.com/thinkpython2/html/thinkpython2004.html)
- **Think Python 2e, Chapter 6** (Downey) — fruitful functions, incremental development, boolean functions, composition, debugging strategy:
  [https://greenteapress.com/thinkpython2/html/thinkpython2007.html](https://greenteapress.com/thinkpython2/html/thinkpython2007.html)
- **HTTLACS Python 3 Edition, Chapter 6** (Elkner et al.) — functions: def, parameters, scope/lifetime, void vs fruitful, docstrings, turtle examples, misconceptions about parameter names:
  [http://openbookproject.net/thinkcs/python/english3e/functions.html](http://openbookproject.net/thinkcs/python/english3e/functions.html)
- **CSTA K-12 CS Standards Revised 2017, Level 2 (grades 6–8), Algorithms & Programming strand** — AP-CSP-aligned scope: procedures/functions with parameters, decomposition, abstraction (procedures as single callable units):
  [https://csteachers.org/k12standards/interactive/](https://csteachers.org/k12standards/interactive/)

---

*Three-line summary:*
Key decisions: (1) `global` is struck from the curriculum entirely — local-vs-outer (read only) is enough at this level; the fix for outer-variable mutation is always "pass it as a parameter"; (2) mutable default argument trap (`L=[]`) is deferred — the worked example uses a tuple default (`pattern=(1,1,5,5)`) with a brief immutability note; full trap drill belongs in Ch.4 (Collections); (3) keyword argument syntax is shown in one worked example in 3.5 but not exercised — it is a Ch.5 (Strings deep) spiral touch. Abstraction is **named** here for the first time (Ch.3 owns "functions hide detail" — Ch.0 modelled it without naming it, Ch.5 deepens it). Coverage/ordering concern: the `is_prime` exercise in Lesson 3.3 demands `for` + `range` + `%` fluency from Ch.2; if Ch.2 is light on `for`-loop practice, the warm-up in 3.3 should reinforce it before the lesson proper. Modules are Ch.7 (not Ch.6).
