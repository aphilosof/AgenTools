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
- **`global` keyword (introduced to reject)** — `global x` inside a function makes Python modify the outer variable `x` instead of creating a local. First encountered in c3s4 as an explicit anti-pattern; shown with rationale, not exercised, not tested, not in the Chapter Quiz. Students who meet it in the wild can look it up in the Codex "anti-patterns" tab.
- **string iteration** (`for char in text:`) — first encounter in c3s8; full ownership transferred to Ch.5 (Strings deep). Introduced here as a readable alternative to `for i in range(len(text)):`.
- **membership test** (`value in "aeiou"`) — first encounter in c3s8 alongside string iteration; full ownership Ch.5. Students already know `in` as a loop keyword; c3s8 introduces a rung-1/rung-2 predict block distinguishing the two uses before any exercise.
- **wishful thinking / top-down design** — first named in c3s8: write the function signature and examples before the body; full design methodology Ch.5.

---

## Concept map & dependencies

```
Ch.1–2 recalled:  variables · types · arithmetic · loops · conditionals · print · input
                        ↓
3.0  Hook — The Shortcut Machine                 ← runs a function, motivates DRY
3.1  def + calling (no params, no return)        ← simplest framing: a named shortcut
     └─ flow of execution: definition ≠ running
3.2  parameters & arguments                      ← extends 3.1; recycles types + arithmetic
     └─ param/arg distinction; no LEGB acronym here (scope is 3.4)
3.3  return values (fruitful functions)          ← extends 3.2; recycles conditionals
     └─ void vs fruitful; None; calling in expressions; is_even/is_odd (not is_prime)
3.4  scope (local vs outer)                      ← extends 3.2–3.3; resolves preview from 3.2
     └─ LEGB introduced here (L + G only); global shown as anti-pattern; words strand
3.5  default args & docstrings                   ← extends 3.2; standalone concept cluster
     └─ evaluated once at definition time; docstring convention
3.6  Functions That Draw (turtle strand)         ← applies 3.1–3.5 on plot strand
     └─ decomposition demo; one open rung-6 exercise (structure-checked, not output-locked)
3.7  def bassline() — sound strand               ← applies 3.1–3.5 on sound strand
     └─ groove from function calls; tip-splitter uses three explicit floats (not list/sum)
3.8  Functions in the Wild — words strand        ← first contact: string iteration, membership
     └─ for char in text; char in "aeiou"; wishful thinking; rung-1/rung-2 predict block first
3.9  Art and Music capstone                      ← integrates Ch.1+Ch.2+Ch.3; sound+plot
     └─ missing-return bug at capstone scale; parametric art; uses f"${:.2f}" formatting
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

**Warm-up (retrieval):** `"*" * 5` — what does this print? (Answer: `*****`. Recalls string repetition from Ch.1.)

Worked-example ideas:
1. A working `print_banner(name)` that prints a decorated greeting — learner modifies the decoration.
2. A two-note `play_motif()` (sound strand) — learner changes the notes and calls it three times.

Exercise ideas:
- (predict) What prints if you call `print_banner("Sam")` twice? — no code change needed.
- (modify) Change the banner character from `*` to `=` and add a third line.
- (fix) `def print_banner name:` — spot the two syntax errors; fix them.

Misconceptions: "I have to read the def before I call it." Correct model: Python must have already **executed the `def` line** before you can call the function. Python runs your file top-to-bottom; when it reaches a `def` line it registers the function (stores the name and body), but does not run the body. If a call appears above the `def` in the file, Python hits the call before it has registered the function and raises `NameError`. The common convention of putting `def` blocks at the top and calls at the bottom ensures all `def` lines execute first — but the mechanism is simply "the `def` line must have already run," not any special two-pass rule. Error class: `SyntaxError` (missing parentheses or colon in `def` line).

Recalls: `print`, string repetition (`"*" * 20`).

---

### Concept lesson: 3.1 — Defining a Function *(arc: Concept)*

- **Role:** First contact with the full `def` syntax: name, colon, indented body. No parameters yet; the concept is "a named block you can call".
- **Concepts:** `def`, calling a function, flow of execution (definition vs. invocation), void function, `None`.
- **Rungs:** 2–4 (predict → modify → complete).
- **Strand:** numbers (printing a times table).

**Warm-up (retrieval):** After `for i in range(5): pass`, what is the last value of `i`? (Answer: `4`. Recalls `range` from Ch.2.)

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

**Warm-up (retrieval):** `int(input("Age: "))` — which function call runs first, `int` or `input`? (Answer: `input` runs first; its return value is then passed to `int`.)

Worked-example ideas:
1. `def celsius_to_fahrenheit(c):` — single param, one-line arithmetic. Call with a literal, then with a variable. Explicitly state: Python passes the **value**, not the name. The caller's local variable `x` is hidden inside the function — only the parameter `c` exists there as a local. (Note: module-level names *are* readable inside functions — that is taught fully in 3.4. Here the point is that the *caller's* local variable is hidden, not that everything outside is blocked.)
2. `def greet(name, greeting):` — two params; call with different combos; show positional order matters.
3. `def bmi(weight_kg, height_m):` — recycles arithmetic and `round()`, links to real-world use.

**Scope framing in this lesson:** Do NOT introduce "LEGB" or "scope rule" here. Scope is Lesson 3.4. The only scoping statement needed in 3.2 is: "Python gives each function its own private workspace for its locals — the caller's local variables are hidden." Full scope model (including readable outer/module names) waits until 3.4.

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

- **Role:** Distinguish fruitful functions from void; use a `return` value in an expression. The `is_even`/`is_odd` pair at rung 6 ties in conditionals and exercises one function calling another without the algorithmic complexity of `is_prime` at this early stage.
- **Concepts:** `return`, fruitful function, void function, `None` (what void returns), calling a function in an expression, early-return pattern.
- **Rungs:** 4–6 (complete → first sustained blank-editor exercises).
- **Strand:** numbers (`is_even`, `is_odd`, `largest_of_three`).

**Warm-up (retrieval):** `10 % 3` → value? `10 % 3 == 0` → value? (Answer: `1`, `False`.)

**Difficulty note:** `is_prime` was here in an earlier draft. It has been moved to the Chapter Challenge (item 4), where Ch.2 loop fluency can be assumed and the algorithmic complexity is appropriate. At Lesson 3.3 — only one prior lesson with parameters — the working-memory cost of guard clause + for loop + modulo + early return + range boundary reasoning is too high for a rung-6 blank-editor exercise.

Worked-example ideas:
1. `def square(n): return n * n` — minimal fruitful function; show `print(square(5))` vs. `result = square(5) + 1`; contrast with a void that just prints.
2. `def is_even(n): return n % 2 == 0` — boolean function; use in `if is_even(x):` — models the "name as a yes/no question" idiom from Think Python. Add one sentence after the exercise: "Python has a built-in called `max()` that does the same thing as `largest_of_three` — you'll use it in Chapter 4. Writing it yourself first is how you understand what `max` is doing inside."
3. Composition preview: `def double(n): return n * 2` and `def square(n): return n * n` — show `double(square(3))` as a brief predict exercise (inside-out evaluation). One worked example and one rung-1 predict only — not a full exercise cluster; M5's fix eases the working-memory load here.

Exercise ideas:
- (predict — rung 1) `def double(n): return n * 2` and `def square(n): return n * n` are given. Predict the value of `double(square(3))` before running. (Answer: `square(3)` evaluates first → `9`; `double(9)` → `18`. Inside-out evaluation.)
- (boilerplate) `def absolute_value(n):` — two-branch `if/else` skeleton given, fill in one missing `return`.
- (stub) `def largest_of_three(a, b, c):` — `# TODO`; write the body returning the biggest; test with `print(largest_of_three(3, 9, 5))`. After the solution, add: "Python has a built-in called `max()` that does exactly this — you'll use it in Chapter 4. Writing it yourself first is how you understand what `max` is doing inside."
- (blank) Write `def is_even(n):` returning a boolean; then write `def is_odd(n):` that calls `is_even` and negates it (`return not is_even(n)`). Two functions calling each other — decomposition preview. Test with `print(is_even(4))`, `print(is_odd(7))`. This is the rung-6 blank-editor exercise.
- (fix) A function `def add_tax(price, rate): print(price * (1 + rate))` — caller writes `total = add_tax(10, 0.1) + 5` and crashes with `TypeError: unsupported operand type(s) for +: 'NoneType' and 'int'`. Diagnose: void returns `None`. Fix: add `return`. **Hint 2 must be a guiding question, not the answer:** "What keyword sends a value back to the caller instead of printing it to the screen?"

Misconceptions:
- "A function with `print` inside returns the printed value." (No — it returns `None`.)
- "Multiple `return` statements are illegal."
- "After `return` the function keeps going." (No — execution stops there.)

Error classes: `TypeError` (operating on `None`), `NameError` (accessing a name that only existed inside a function after it has returned — scope preview; covered fully in L3.4), `SyntaxError` (`return` outside a function).

Recalls: `if/elif/else`, `for`, `range`, `%`, boolean operators, `type()`.

---

### Concept lesson: 3.4 — Scope *(arc: Concept)*

- **Role:** Give learners a working model of local scope; resolve the "my variable disappeared" confusion. Keeps it to local vs. outer. The `global` keyword is **introduced as an explicit anti-pattern** — shown with a brief demonstration and clear rationale for why not to use it; it is never exercised, never tested, and not in the Chapter Quiz. The Codex entry for `global` is filed under "anti-patterns" with the note "introduced to reject." Students encounter it in the wild; silence is worse than a clear warning.
- **Concepts:** local scope, local variable lifetime (destroyed on return), reading an outer/module-level variable from inside a function (allowed — show `TAX_RATE` example), assigning to an outer name (creates a new local, not a change to the outer — `UnboundLocalError` trap), `global` keyword (shown to refuse), stack frame mental model, LEGB rule (L + G only; E = closures, advanced; B = built-ins like `print` and `len`).
- **LEGB placement:** introduce the LEGB name once, here in 3.4 where it belongs. Add a Codex entry: "LEGB: Python looks Local first, then Global. E (Enclosing, closures) is advanced — not taught in this course. B (Built-ins) is the names like `print` and `len` that Python always knows." Do not mention LEGB in any earlier lesson.
- **Rungs:** 4–6 (complete → blank).
- **Strand:** words (string methods — `.upper()`, `.lower()`, `.strip()` — already known from Ch.1; scope is the only new cognitive load).

**Warm-up (retrieval):** Predict: `x = 5; x = x + 1; print(x)` — what prints? (Answer: `6`. Recalls reassignment from Ch.1.)

Worked-example ideas (strand: words — string methods already owned by Ch.1; scope is the only new concept):
1. Two functions both using a variable named `result` — one calls `.upper()`, one calls `.lower()`. Show they are independent; the stepper shows two separate local tables.
2. A function that reads a module-level constant (`GREETING = "Hello"`) defined outside — legal, readable, no crash. Then show that if the function assigns to `GREETING` inside, it creates a *new local* (`GREETING` outside is unchanged) — demonstrate with `print(GREETING)` after the call to confirm. This is the correct statement that was wrong in 3.2: **module-level names are readable** inside functions; only the caller's local variables are hidden.
3. Stack diagram as a concept-page visual: two frames side-by-side; variables named in each frame are their own. Introduce the LEGB label here.

Exercise ideas:
- (predict) Two functions with identically named params; a print inside each — predict what each prints without running; step through to check.
- (complete) `def make_title(text):` — body almost complete, one line uses a variable that doesn't exist in scope; identify it and fix by adding it as a parameter.
- (blank) `suffix = "!!!"` at module level; function body tries `suffix = suffix + "?"` — crashes with `UnboundLocalError`. Explain why. Restructure from scratch: write `def exclaim(text, suffix):` with no globals involved, and `def loud_exclaim(text):` that calls it with `suffix="!!!"`. No starter code; rung 6.

Misconceptions:
- "Variables I create outside a function are not available inside it" — partially wrong: module-level names **can** be read inside a function; only the caller's local variables are hidden. The correct statement: outer module-level names are readable; assigning to one creates a new local instead.
- "The parameter name matters to the caller."
- "After I call a function, its local variables are still around."

Error classes: `NameError` (local used before assignment in same scope), `UnboundLocalError` (Python sees an assignment inside function and treats the name as local even before the assignment line — classic trap; Python 3.14+ message: `cannot access local variable 'x' where it is not associated with a value`; pre-3.14 message: `local variable 'x' referenced before assignment` — Codex entry notes both phrasings).

Recalls: assignment, `print`, string methods (`.upper()`, `.lower()`, `.strip()`) from Ch.1, the stepper / variable table from Chs. 1–2.

---

### Concept lesson: 3.5 — Default Args & Docstrings *(arc: Concept)*

- **Role:** Two standalone skills grouped because they both appear at the `def` line / function header level: making arguments optional with defaults; documenting intent with a docstring. Lighter than 3.3–3.4 — a consolidation lesson before the strand applications.
- **Concepts:** default argument value, evaluated once at definition time (immutable defaults only at this level — no mutable-default trap yet, just a mention), calling with and without optional args, docstring syntax (`"""..."""` as first statement), `.__doc__` attribute, PEP 8 naming (`lowercase_with_underscores`).
- **Rungs:** 5–6 (complete → blank — full write-from-scratch).
- **Strand:** numbers (tip splitter preview; a greeting function with default language).

**Warm-up (retrieval):** List all values produced by `range(1, 10, 2)`. (Answer: 1, 3, 5, 7, 9. Recalls range with step from Ch.2.)

Worked-example ideas:
1. `def greet(name, greeting="Hello"):` — call three ways: `greet("Sam")`, `greet("Sam", "Hey")`, and briefly show `greet(greeting="Howdy", name="Sam")` as a one-line exhibit (keyword argument form; breadth only, not drilled). This delivers the promise from the plan without making keyword args a full exercise cluster.
2. `def round_to(value, places=2):` — realistic default; show `round_to(3.14159)` vs. `round_to(3.14159, 4)`.
3. A function with a one-line docstring — show `print(function.__doc__)` revealing it; also show `help(function)` as the more common REPL access path; contrast with a comment (invisible at runtime).

Exercise ideas:
- (complete) `def tip(bill, ___=0.18):` — fill in param name and default; add docstring; call with and without the optional arg.
- (blank) Write `def repeat_word(word, times=3, sep=" "):` from scratch with a docstring; it returns the word repeated `times` times with `sep` between copies. **Solution must use the clean initialise-then-accumulate pattern:** `result = word; for _ in range(times - 1): result += sep + word; return result`. Do NOT use the `if i == 0` guard inside the loop — that is un-Pythonic and must be unlearned when `str.join()` arrives in Ch.7.
- (fix) `def power(base, exp=2, base=10):` — `SyntaxError` from duplicate param name (note: this fires `SyntaxError: duplicate argument 'base' in function definition`, a *different* SyntaxError than the non-default-after-default one taught above); and `base` re-defined; restructure to `power(n, exp=2)` and write a new `def log10(n, base=10):` — two separate functions.

Misconceptions:
- "I can mix required and default args in any order." (`SyntaxError` if a required param follows a defaulted one.)
- "The default is recalculated on each call." (False for all types: the default value is created once, when the `def` line runs, and reused on every call.)
- "Docstrings slow down the program." (They don't affect speed; they're just text Python keeps so tools and `help()` can show it.)

Error classes: `SyntaxError: parameter without a default follows parameter with a default` (Python 3.12+ wording; pre-3.12 says "non-default argument follows default argument" — Codex entry notes both phrasings), `TypeError` (too many / wrong keyword args).

Recalls: `return`, `print`, string `*` repetition, f-strings, Ch.1 types.

---

### Strand lesson: 3.6 — Functions That Draw *(arc: Strand-application — plot)*

- **Role:** Apply all of Ch.3's concepts to turtle graphics; make decomposition feel natural by building a scene from reusable shape functions.
- **Concepts:** no new syntax — applies `def`, params, `return` (indirectly via composition), default args, docstrings, scope, decomposition pattern.
- **Rungs:** 5–6 (modify → blank). Full blank-editor for the final exercise.
- **Strand:** plot (turtle).

**Warm-up (retrieval):** What does `for _ in range(4):` mean? Why use `_` instead of a named variable? (Answer: run the loop body 4 times; `_` is the convention for "I don't need the loop variable." Recalls Ch.2 loops.)

**void/fruitful note:** Add one explicit sentence in the lesson text: "`draw_square()` is a void function — it acts (moves the turtle) but doesn't hand anything back. Its job is its effect, not a return value." This provides spaced retrieval of the print-vs-return distinction (M6 fix).

Worked-example ideas:
1. `def draw_square(side=50):` — minimal parameterised turtle function; call it three times at different positions to show reuse.
2. `def draw_polygon(sides, length=60):` — generalises square to any regular polygon using `360 / sides`; recycles arithmetic; call for triangle, hexagon, octagon.
3. `def draw_flower(petals, petal_size=40):` calls `draw_polygon` in a loop — function calling function, decomposition in action.

Exercise ideas:
- (modify) Change `draw_polygon` to also accept a `color` default `"blue"` — add the param and one `turtle.color()` call inside.
- (complete) `def draw_house(size):` — skeleton draws a square base; `# TODO: add a triangle roof` using `draw_polygon(3, size)` — write that one call.
- (blank — open / structure-checked) Write `def draw_scene():` from scratch. **No specific output required.** The checker verifies structure only: at least three `def` statements, at least one function body whose first statement is a docstring, and at least one function call that references another user-defined function name. The student may draw anything they choose. This is the creative-ceiling exercise — parametric design in place, no single correct output.

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

**Warm-up (retrieval):** In `for beat in range(8):`, what values does `beat` take? (Answer: 0, 1, 2, 3, 4, 5, 6, 7. Recalls Ch.2 range and loop variable naming.)

**void/fruitful note:** Add one explicit sentence in the lesson text: "`beat()` is a void function — it plays a sound; the caller uses it for its effect, not a return value." Paired with the same sentence in 3.6, this provides two-point spaced retrieval of the chapter's hardest distinction (M6 fix).

Worked-example ideas:
1. `def play_note(pitch, duration=0.25):` — thin wrapper over `music.play`; call it to build a simple riff, showing how a named function makes musical intent readable.
2. `def bassline(root, pattern=(1,1,5,5)):` — plays a four-note pattern transposed from a root note; show how changing `root` gives a different key without rewriting the logic. Tuple default is intentional: tuples are immutable, so there is no mutable-default trap; a brief note ("we use a tuple here — it works exactly like a list for reading, but can't be accidentally changed") gives a natural preview of tuples before Ch.4.
3. Tip splitter walkthrough: `def subtotal(a, b, c)`, `def tax(sub, rate=0.0875)`, `def tip_amount(sub, pct=0.18)`, `def per_person(total, n)` — four tiny functions assembled into one `split_bill` program; demonstrate how each is independently testable. **Note:** `subtotal` takes three explicit float parameters, not a list — lists and `sum()` are Ch.4. The three-explicit-arg signature stays within Ch.3 vocabulary. Use `f"${amount:.2f}"` in the final print to recall f-string money formatting from Ch.1 (m6 fix).

Exercise ideas:
- (modify) Change `bassline` to repeat the pattern twice by wrapping the play loop.
- (complete) `def verse(root):` — calls `bassline(root)` then `play_note(root + 12, 0.5)` for a closing high note; the `play_note` call is stubbed as `# TODO`.
- (blank) Write `def chorus(root, times=2):` from scratch that calls `verse(root)` a given number of times; add a docstring; test it.
- (blank — numbers) Write the full `split_bill(a, b, c, n, tax_rate=0.0875, tip_pct=0.18)` from scratch, using the four helper functions defined earlier. Takes three explicit item prices (not a list — Ch.4 vocabulary). Print the per-person amount formatted to two decimal places using `f"${amount:.2f}"` (Ch.1 recall — f-string money formatting).

Misconceptions:
- "A function can only do one thing — music OR math, not both."
- "I have to pass the result of every function to `print` explicitly."

Recalls: `for`, `range`, `round`, f-strings incl. `:.2f` money formatting (Ch.1), `input` + `int`/`float` conversion, `print`.

---

### Strand lesson: 3.8 — Functions in the Wild *(arc: Strand-application — words)*

- **Role:** Apply Ch.3 to string-processing functions. First explicit introduction of string iteration (`for char in text:`) and membership testing (`char in "aeiou"`). Introduces "wishful thinking" as a named design technique. Integrates FizzBuzz to spiral `elif` chain ordering from Ch.2.
- **Concepts:** string iteration (`for char in text:`) — first encounter here, full ownership Ch.5; membership test (`value in string`) — first encounter here, full ownership Ch.5; wishful thinking / top-down design (write signature + examples before body) — first named here, deepened Ch.5. Plus: accumulator pattern with string iteration, `while` loop digit extraction (spiral from Ch.2), `elif` ordering (specificity rule, spiral from Ch.2), function composition (`word_inspector` calls `count_vowels` and `is_palindrome`).
- **Rungs:** 1–6 (predict through blank).
- **Strand:** words.

**Warm-up (retrieval):** `"  HELLO  ".lower().strip()` — what does this return? (Answer: `"hello"`. Recalls Ch.1 string methods and method chaining.)

**Critical design note (B2 fix):** `for char in text:` and `char in "aeiou"` are **both new syntax** in this lesson and must NOT appear first at rung 6. The lesson must open with a rung-1 predict block (read `is_palindrome`, trace each character, predict `True`/`False`) and a rung-2 Parsons exercise (arrange `fizzbuzz`) before any exercise that uses these constructs from a blank editor. The rung-5 `count_vowels` exercise (complete — fill in the `if char in "aeiou"` line) is the first exercise that requires writing either new construct; rung 6 (`word_inspector`) only composes functions already defined in the starter and does not itself write the new syntax.

Worked-example ideas:
1. "Design before you code" — wishful thinking: write `is_palindrome`'s signature, docstring, and two concrete test cases before the body. Then fill in the body using the prepend-reverse accumulator pattern.
2. String iteration contrast: `for i in range(len(text)): print(text[i])` vs. `for char in text: print(char)` — same result, second is the Pythonic idiom. Explain why Python prefers the clean form.
3. Function composition: `word_inspector(word)` calls `count_vowels(word)` and `is_palindrome(word)` — each helper does one job; `word_inspector` reports. Names the separation-of-concerns principle.

Exercise ideas:
- (predict — rung 1) Read `is_palindrome("racecar")`, `is_palindrome("hello")`, `is_palindrome("level")` — predict `True`/`False` for each before running.
- (Parsons — rung 2) Arrange `fizzbuzz(n)` with correct `elif` ordering (most-specific condition first: `n % 15 == 0` before `n % 3 == 0`).
- (fix — rung 4) `digit_sum` uses `n / 10` instead of `n % 10` — wrong operator; find the bug and fix it. Add one sentence: "We use `while` here, not `for`, because we don't know in advance how many digits `n` has — the loop runs until `n` reaches 0."
- (complete — rung 5) `count_vowels(text)` — loop and accumulator given; fill in `if char in "aeiou": total += 1`. Add `.lower()` inside the function before the loop to handle uppercase input (silently fails on uppercase without it).
- (blank — rung 6) Write `word_inspector(word)` that calls `count_vowels` and `is_palindrome` (both given in starter) and prints a 3-line report. Rung 6 does not require writing the new syntax — it composes functions already defined.

Misconceptions:
- "The `in` keyword in `for char in text:` is the same operation as `in` in `char in \"aeiou\"`." (They share the keyword but differ: the loop `in` binds a variable to each element; the membership `in` returns a boolean. A rung-1 predict exercise makes both visible before either is exercised.)
- "String iteration works differently than list iteration." (Preview for Ch.4: both use the same `for x in sequence:` pattern.)

Error classes: `NameError` (misspelled variable inside loop), `TypeError` (comparing wrong types with `in`).

Recalls: accumulator pattern from Ch.2, `while` loop from Ch.2, `elif` chain ordering from Ch.2 (L2.3), string methods `.upper()`/`.lower()` from Ch.1, `for` loop + `range` from Ch.2.

---

### Strand lesson: 3.9 — Art and Music: Ch.1 + Ch.2 + Ch.3 *(arc: Strand-application — capstone)*

- **Role:** Integration capstone. Applies everything from Chs.1–3 across plot and sound strands. Reinforces the missing-return bug at capstone scale. Introduces parametric art as the culminating creative exercise.
- **Concepts:** no new syntax — spiral of `def`, params, default args, `return`, decomposition, `for` loop with computed expressions, `f"${:.2f}"` money formatting (recall from Ch.1).
- **Rungs:** 4–6. Opens with a fix exercise (missing `return`), not a predict, because the chapter is at the blank-editor milestone.
- **Strand:** sound (primary) + plot (secondary).

**Warm-up (retrieval):** If `area(w, h)` has no `return` statement, what does `p = area(3, 4)` store in `p`? (Answer: `None`. Recalls the print-not-return misconception from 3.3 — the chapter's most important concept, retrieved one final time at capstone.)

**`:.2f` recall (m6 fix):** At least one worked example or exercise in this lesson uses `f"${amount:.2f}"` in its output. No new exercise required — format the final note or bill amount in an existing example.

Worked-example ideas:
1. Missing-return bug at scale: `polygon_perimeter(sides, length)` computes `sides * length` but forgets `return` — caller prints `None`. Find it, fix it.
2. Parametric art: `draw_spiral(steps, start=10, angle=91)` — one degree of difference produces a wildly different result after enough iterations. Demonstrates DRY + decomposition + default args together.
3. Song structure: `play_verse(root)` + `song(root=60)` — transposition as a function parameter; `root+5` shifts the whole phrase without rewriting a single note. Use `f"Now playing verse at root {root}"` to recall f-strings.

Exercise ideas:
- (fix — rung 4) `polygon_perimeter` missing `return` — fix it.
- (complete — rung 5) `draw_spiral` — both `pass` lines replaced with `forward(start + i * 10)` and `right(angle)`.
- (blank — rung 6) Write `draw_snowflake(branches=6, size=60)` from scratch: for each branch, `forward(size)`, `right(180)`, `forward(size)`, `right(360 / branches)`.
- (complete — rung 5, sound) `play_scale(root, steps=5, gap=0.25)` — replace two `pass` lines.
- (blank — rung 6, sound) Write `play_verse(root)` + `song(root=60)` from scratch. Format a status print with `f"Playing verse at root {root}"` to recall f-strings.

Misconceptions:
- "A function that computes something and a function that draws something are different kinds of thing." (No — both are `def` blocks; one happens to return a value, the other acts via side effects on the turtle.)
- "Missing `return` will crash immediately." (No — it silently returns `None`; the crash, if any, comes when `None` is used in arithmetic.)

Recalls: `for`, `range`, arithmetic, f-strings (incl. `:.2f`) from Ch.1, default args from 3.5, decomposition from 3.6, `return` vs `print` from 3.3.

---

## Progression / difficulty ramp

| Lesson | Max rung | Scaffolding at hard exercise |
|--------|----------|------------------------------|
| 3.0 Hook | 3 (modify) | boilerplate given |
| 3.1 | 4 (complete) | stub + TODO comment |
| 3.2 | 5 (blank — single function) | blank editor, one function |
| 3.3 | 6 (blank — two cooperating functions) | blank editor, is_even/is_odd pair |
| 3.4 | 6 (blank) | blank editor, two-function restructure |
| 3.5 | 6 (blank) | blank editor, two functions |
| 3.6 | 6 (blank scene — structure-checked) | blank editor, open creative exercise |
| 3.7 | 6 (blank, two-strand) | blank editor, full program |
| 3.8 | 6 (blank — composition) | blank editor, composes given helpers |
| 3.9 | 6 (blank — capstone) | blank editor, full parametric program |

Write-from-scratch is the default by Lesson 3.3. The stepper remains active on every exercise; the variable table is the primary debugging tool. Error annotation fades from "full" toward "on-demand" per PLAN.md §3 — still full through this chapter.

---

## Chapter Challenge (outline)

Eight exercises, ordered easy → hard, mixing all chapter concepts and the numbers / plot / sound strands. Scaffolding fades to blank by exercise 5.

1. **(predict)** Read four function calls with mismatched argument orders and mixed default vs. required params — predict printed output without running; identify any that raise `TypeError`.
2. **(fix)** A `celsius_to_fahrenheit` function that prints instead of returning — caller crashes with `NoneType` error; fix it.
3. **(complete — numbers)** `def clamp(value, low=0, high=100):` — header and docstring given; write the body that returns `value` clamped to `[low, high]`; three test calls given to pass.
4. **(blank — numbers)** Write `def is_prime(n):` from scratch; return a boolean. Rules: `n < 2` → `False`; loop divisors from `range(2, n)`; early `return False` on a hit; fall through to `return True`. Test with 0, 1, 2, 9, 17. **Efficiency note (add to lesson text):** "For large `n`, this loop does a lot of work — you'll see a faster version in Chapter 5." (`range(2, n)` is correct and O(n); the optimisation to `range(2, n//2+1)` is deferred.) This placement (Challenge item 4) allows Ch.2 loop fluency to be assumed and gives `is_prime` its correct difficulty position in the chapter arc.
5. **(blank — numbers)** Write `def is_leap_year(year):` from scratch; return a boolean; must handle the three-rule leap-year test (divisible by 4, but not 100, unless also 400). Test with 2000, 1900, 2024.
6. **(blank — plot)** Write `def draw_grid(rows, cols, cell_size=40):` that uses a loop and `draw_square` to tile a grid. Decompose: write `draw_row` as a helper.
7. **(blank — numbers, integration)** Full tip-splitter program. Write `def subtotal(a, b, c):` (three explicit floats — no list, no `sum()`, both are Ch.4), `def tax(sub, rate=0.0875):`, `def tip_amount(sub, pct=0.18):`, `def per_person(total, n):`, and `def split_bill(a, b, c, n):` that assembles them. Format all output to two decimal places using `f"${amount:.2f}"` (Ch.1 recall — f-string money formatting).
8. **(design stretch — any strand)** No starter. Brief: "Write a program that draws or plays something interesting using at least three functions you define yourself, where at least one function calls another." **Checker specification:** validate via `ast.walk` for (a) `FunctionDef` node count ≥ 3; (b) at least one `FunctionDef` whose first body statement is `Expr(Constant(...))` (docstring present); (c) at least one `Call` node whose `func.id` matches a `FunctionDef` name defined in the same module. Use `compile()` (not `ast.parse` alone) to catch duplicate-parameter `SyntaxError`s. Not checked for specific output.

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

Must-pass concepts before Chapter 4 unlocks: `def` syntax · parameters vs. arguments · `return` vs. `print` · local scope · default arguments · decomposition (calling one function from another) · string iteration (`for char in text:`) and membership test (`char in sequence`) — introduced in c3s8.

---

## Misconceptions & error classes (chapter-wide list)

**Misconceptions:**
- A `def` statement runs the function immediately.
- The argument variable and the parameter variable must have the same name.
- A function that `print`s a value also *returns* that value. (Chapter's hardest misconception; drilled in c3s3, recalled in c3s6, c3s7, and c3s9 via explicit void/fruitful notes.)
- After `return`, the rest of the function body still executes.
- Multiple `return` statements in one function are illegal.
- Local variables inside a function are accessible outside it after the call.
- Default argument values are recalculated on every call. (False for all types: the default is created once at `def` time and reused.)
- Non-default parameters can follow default parameters in a `def` line.
- Assigning to a name inside a function changes the outer variable with the same name.
- Everything outside a function is invisible inside it. (**False.** The caller's *local* variables are hidden; module-level names are readable. See c3s2 scope framing and c3s4 for the full model. This misconception is introduced in c3s2 with the correct statement and fully resolved in c3s4.)
- The `in` keyword in `for char in text:` is the same operation as `in` in `char in "aeiou"`. (They share the keyword; the loop `in` binds a variable to each element, the membership `in` returns a boolean. Addressed in c3s8 with a rung-1 predict before any exercise.)

**Error classes introduced or drilled in this chapter:**
- `SyntaxError` — missing colon or parentheses in `def` line; non-default arg after default arg (`parameter without a default follows parameter with a default` in Python 3.12+; `non-default argument follows default argument` in earlier versions — Codex notes both); duplicate parameter name (`duplicate argument 'x' in function definition`); `return` at module level.
- `IndentationError` — function body not indented (the most common first-function mistake).
- `NameError` — calling a function before its `def`; using a parameter name outside the function.
- `UnboundLocalError` — Python sees an assignment to a name inside a function and treats it as local even before that line executes; reading it before assignment crashes.
- `TypeError: missing N required positional argument(s)` — too few args at call.
- `TypeError: takes N positional arguments but M were given` — too many args.
- `TypeError: unsupported operand type(s) for +: 'NoneType' and int` — operating on a void function's `None` return.
- `TypeError: got multiple values for argument` — positional and keyword arg for the same param.

**Harness note (m14):** The c3s5 exercise `def power(base, exp=2, base=10):` (duplicate parameter SyntaxError) must use `compile()` in the test harness checker, not `ast.parse`. Python's `ast.parse` does not raise `SyntaxError` for duplicate parameter names in some versions; `compile()` always catches it.

**try/except spiral (m16 — optional):** Ch.2 introduced `try/except` in c2s8. Ch.3 does not recall it. A natural optional spiral exercise in c3s5 or the Chapter Challenge: a fruitful function that wraps `input()` with `try/except` — "what does the function return if the user types a word instead of a number?" This is lower-priority than the mandatory fixes; include if lesson time budget allows.

**Abstraction concept card (m17):** Ch.3 is the chapter that names "abstraction" for the first time (Ch.0 modelled it, Ch.5 deepens it). The implementation mentions it inline (`[[abstraction]]` tag in c3s0). To give it a dedicated concept moment, add a brief concept card in c3s6 or c3s9: "The caller of `draw_polygon` doesn't need to know how the loop works — only what it does: name, inputs, effect. That gap between 'what it does' and 'how it works' is called **abstraction**." One concept card; no extra exercise required.

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
Key decisions: (1) `global` is introduced as an explicit anti-pattern in c3s4 — shown with rationale, not exercised, not tested, not in the Quiz; the Codex files it under "introduced to reject"; (2) `is_prime` has been moved from c3s3 rung-6 (too hard too early) to Chapter Challenge item 4, where Ch.2 loop fluency can be assumed; the c3s3 rung-6 replacement is the `is_even`/`is_odd` pair; (3) c3s8 and c3s9 are now fully specified in this plan — `for char in text:` and `char in "aeiou"` are first-encounter concepts owned here and deepened in Ch.5; the LEGB acronym is introduced exactly once in c3s4, nowhere else; the tip-splitter uses three explicit float parameters (not a list/sum — Ch.4 vocabulary); keyword argument form is shown as a one-line breadth exhibit in 3.5 but not exercised. Modules are Ch.7.
