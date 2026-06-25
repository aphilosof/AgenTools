# Code Lab — Curriculum

The full lesson-by-lesson syllabus, derived from PLAN.md §3 (pedagogy), §4
(curriculum map), and §5 (Real Tools). ~70–80 lessons across 12 chapters + two
Real Tools interludes + an epilogue, plus the parallel Challenge Arena. This is
the structure to review and approve **before** any lesson prose is written.

Audience: a strong grade 6–7 reader. Reading level target grade 6–7 with real
theory and background, in the *How to Think Like a Computer Scientist*
tradition — teach the idea, not just the syntax.

**Every lesson follows the loop (§3):** warm-up recall → read the explanation →
run & tinker with a worked example → solve the challenge → hint ladder → compare
to the model solution. Checkpoint every 4–6 lessons.

**Rung ladder (§3):** 1 Predict · 2 Arrange (Parsons) · 3 Modify · 4 Fix ·
5 Complete · 6 Write. Early chapters live on 1–4; Chapter 5+ on 5–6; Chapter 8+ writes
from scratch by default. Chapter 0 is pre-syntax.

**Strands:** numbers · words · data · plot · sound · core.

---

## Chapter 0 — First Sound, Then Think Like a Computer (~5)
*Goal: hook him with real sound in two minutes, then build the ideas behind code — sequence, repetition, condition — before any syntax. Pre-syntax puzzles.*

| # | Lesson | Idea / objective | Strand | Rung |
|---|---|---|---|---|
| 0.1 | First Sound | Run and change real code that makes sound; you are already programming | sound | 3 Modify |
| 0.2 | Algorithms Are Exact | An algorithm is a precise, ordered list of steps a machine follows literally | core | 1 Predict |
| 0.3 | Guide the Robot | Sequencing: order commands to walk a robot across a grid to its goal | core | 2 Arrange |
| 0.4 | Repeat and Decide | Repetition and conditions as ideas (loops & ifs, unplugged) | core | 2 Arrange |
| 0.5 | The Sandwich Bug | Debugging as an idea: find the wrong/missing step in a recipe | core | 4 Fix |

## Chapter 1 — Python: First Words (~7)
*Goal: the foundations of values, names, and expressions; the stepper and predict-the-variable-table appear here.*

| # | Lesson | Idea / objective | Strand | Rung |
|---|---|---|---|---|
| 1.1 | Output and print | `print` as output; arguments; text needs quotes; NameError from missing quotes | words | 1,3,4,6 ✅ |
| 1.2 | Values and Types | `int`/`float`/`str`/`bool`; `type()`; `"7"` ≠ `7`; operators are type-dependent; `int()`/`float()`/`str()` conversion; None preview | numbers | 1,4,6 ✅ |
| 1.3 | Variables and Assignment | `=` as instruction not equality; name binds to value; reassignment; stepper predict exercise; comments (inline) | core | 1,3,4,6 ✅ |
| 1.4 | Expressions and Math | `+` `-` `*` `/` `//` `%` `**`; order of operations; parentheses; expressions produce values | numbers | 1,3,4 ✅ |
| 1.5 | Working with Strings | Concatenation with `+`; repetition with `*`; comma vs `+`; `len()`; `upper()`/`lower()`/`strip()`/`split()` | words | 3,4,5,6 ✅ |
| 1.6 | Input | `input()` always returns `str`; `int(input())`; age greeter | core | 3,5,6 ✅ |
| 1.7 | First Drawing and Sound | MIDI numbers (60=middle C); turtle square; 3-note motif; rung 3 Modify only (not Write) | sound | 3,3 ✅ |

**Sequencing notes (Chapter 1):**
- Comments are a half-page digression in Lesson 1.3, not a standalone lesson
- `sep`/`end` for `print` moved to Chapter 2 (after loops, where output formatting is motivated)
- String methods (`len`, `upper`, `lower`, `split`, `strip`) added to Lesson 1.5
- Lesson 1.7 is rung 3 Modify only — first encounter with two new APIs should not be rung 6 Write

## Chapter 2 — Decisions and Loops (7 lessons)
*Goal: branching and repetition; debugging becomes a first-class, recurring skill.*

**Approved after 5-reviewer ground-up curriculum audit. Concept inventories below are authoritative — authors must cover every item or defer explicitly to a named lesson.**

| # | Title | Strand | Rungs |
|---|-------|--------|-------|
| 2.1 | True, False, and Comparison | numbers | 1 · 2 · 4 |
| 2.2 | if and else | core | 1 · 3 · 4 · 5 |
| 2.3 | elif: Many Branches | words | 4 · 5 · 6 |
| 2.4 | while Loops | numbers | 1 · 3 · 4 · 5 · 6 |
| 2.5 | for and range | numbers | 1 · 3 · 4 · 5 · 6 |
| 2.6 | Fix the Broken Code | core | 1 · 4 |
| 2.7 | Loops Make Art and Beats | plot / sound | 4 · 5 · 6 |

### 2.1 — True, False, and Comparison

**Arc role:** hook — open by running a live two-branch program and modifying its condition before any syntax is explained.

**Concept inventory** (subsection order is required: comparisons → truthiness → boolean operators):
- Comparison operators `==`, `!=`, `<`, `>`, `<=`, `>=` — each returns a bool value; a comparison is just an expression
- `=` vs `==` distinction: using `=` in a condition is a SyntaxError — the single most common beginner error (Think Python §5.2); named, provoked in a Fix exercise, not just mentioned; SyntaxError added to Codex errors tab
- Truthiness: what Python counts as truthy and falsy — `0`, `''`, `None` are falsy; non-zero, non-empty are truthy; `bool()` conversion review; `if x:` vs `if x != 0:` are not always equivalent; must precede boolean operators so `if x and y:` is intelligible
- Boolean operators `and`, `or`, `not` — logical meaning; truth tables; compound conditions; operator precedence: `not` > `and` > `or`, positioned below arithmetic
- Short-circuit evaluation of `and`/`or`: Python stops as soon as the result is determined; one named subsection, one worked example (`if age >= 0 and 100 / age > 2`); Codex entry; NOT the focus of an exercise
- Misconception: `if x == 1 or 2:` — `2` is a standalone truthy literal; always True regardless of `x`; must be run and shown producing wrong output, not just described
- `and`/`or` return an operand, not necessarily bool; `not` always returns bool — Codex only, not a primary exercise topic

**Exercises:** rung-1 Predict (six expressions including `"7" == 7`); rung-2 Parsons (arrange compound condition); rung-4 Fix (`if x = 5:` → read SyntaxError, change `=` to `==`); mini-predict in the truthiness subsection (`if 0:` and `if "hello":`)

**Misconceptions addressed:** `= vs ==`; `if x == 1 or 2:`; truthiness surprises with `0` and `""`

**Error classes introduced:** SyntaxError (assignment in condition)

---

### 2.2 — if and else

**Concept inventory:**
- `if`/`else` syntax: header line ending with colon, indented body; exactly one branch executes
- Colon after `if` and `else` is required — omission is the most common Ch.2 SyntaxError (Altadmri & Brown 2015 top-10); named, provoked
- Indentation defines the block — Python uses whitespace, not braces; the "indented block = belonging" mental model is foundational for every subsequent control structure
- IndentationError: what it means; the error message often points to the **line after** the actual problem (Think Python §5.12); named explicitly, not just noted; Codex entry
- TabError: mixing tabs and spaces raises TabError in Python 3; named for diagnosis
- **"Code after the if/else block always runs"** — named concept with a worked counterexample and stepper demonstration; not implied or left to students to notice; Qian & Lehman (2017) most persistent conditional misconception; direct prerequisite for Ch.3 return-value logic
- Multiple independent `if` statements vs `if`/`else`: all ifs evaluate independently; demonstrated with a case where both conditions can be true to produce visibly wrong output
- Rung-1 Predict exercise at lesson open: complete `if`/`else` given, two input values, student predicts which branch fires for each; stepper confirms (Lister et al. 2004: students must trace before they write)
- Preview: "else if on two words is not a SyntaxError — we'll see why in 2.3"

**Exercises:** rung-1 Predict (trace if/else for two input values); rung-3 Modify (temperature classifier, change threshold); rung-4 Fix (IndentationError in a 4-line if/else, traceback points one line late); rung-5 Complete (discount-checker stub with empty bodies)

**Misconceptions addressed:** "code after if/else is inside it"; IndentationError points to the wrong line; missing colon

**Error classes introduced:** IndentationError, TabError

---

### 2.3 — elif: Many Branches

**Concept inventory:**
- `elif` syntax: multi-way decision chain; colon required; extends `if`/`else`
- Mutual exclusivity: exactly one branch executes — Python stops at the first True branch and skips all remaining `elif`/`else`; demonstrated with stepper
- `elif` order matters: first-match-wins means a too-early condition swallows later ones; demonstrated with grade classifier where `>= 50` before `>= 90` assigns "average" to high scores — visible wrong output, not just described
- Multiple independent `if` statements vs `if`/`elif`/`else`: concrete wrong-behavior example where two conditions are both True and two branches fire — the behavior students get if they forget `elif`
- `else if` on two words (`else:` / `    if ...:` on separate lines) is NOT a SyntaxError — legal Python, adds indentation depth, enables silent bugs when inner `else` is absent; student sees it run and then sees why `elif` is cleaner
- Forgetting `else`: silent no-output when no condition matches — named as a design decision with consequences, not a SyntaxError
- Rung-6 Write debuts here (first write-from-scratch in Ch.2)

**Exercises:** rung-4 Fix (elif order bug — `>= 50` before `>= 90`); rung-5 Complete (password-strength checker stub); rung-6 Write (BMI classifier: read weight and height, compute, print four-category result)

**Worked examples:** grade classifier with stepper trace; same logic with four independent `if`s producing double-fire; `else if` on two lines observed and rewritten

**Misconceptions addressed:** expecting multiple `if`s to behave like `elif`; `elif` order; "else if" as two words; forgetting `else`

---

### 2.4 — while Loops

**Concept inventory (subsection order is required: `+=` first, then while structure):**
- **`+=` and `-=` augmented assignment: explicit first introduction** — side-by-side with long form (`n -= 1` means the same as `n = n - 1`); also `*=` and `//=` named briefly; Codex entry; appears as the FIRST subsection before any while example uses it
- `while` loop structure: condition check at the TOP of each iteration, not continuously — the condition is tested once per loop cycle; a change inside the body does not cause immediate exit (Sorva 2012 most persistent while misconception)
- Three programmer responsibilities (HTTLACS §7.4): initialize the loop variable before the `while`, test it in the condition, update it inside the body — named as a triple; students who cannot articulate all three produce infinite loops or NameErrors
- Rung-1 Predict exercise at lesson open: show a countdown while loop; student fills in the variable table row by row (value of `n`, condition result, output) before running; stepper confirms (Lister et al. 2004)
- Infinite loop: what causes it (missing update step), how to recognize it, how to stop it (Stop button interrupts the worker; the tab does not freeze); controlled first exposure with a deliberate rung-4 Fix exercise; added to Codex
- NameError from loop variable not initialized before `while` — deliberate fix exercise; connects to "initialize" responsibility
- **Accumulator pattern: named explicitly** — `total = 0` before the loop; `total += x` inside the loop; read `total` after; own Codex entry with the name "accumulator"; practiced in a standalone rung-5 Complete exercise
- **Print inside vs outside the loop: named misconception** — students who print inside the accumulator loop get partial results instead of the final answer; must be a rung-4 Fix exercise (Severance: most persistent mistake in 15 years of py4e teaching)
- `while True:` + `break` as a valid sentinel pattern — previewed with one worked example to give `break` a motivating context before full treatment in L2.5
- SyntaxError from missing colon on `while` line
- Collatz sequence: demoted to Chapter Challenge / Arena (cognitive load: requires 4 simultaneous new concepts for a first while encounter)

**Exercises:** rung-1 Predict (trace 5-iteration while loop, fill variable table); rung-3 Modify (change countdown start, add message); rung-4 Fix (no update → infinite loop → click Stop → add update); rung-4 Fix (print inside accumulator → move outside); rung-5 Complete (accumulator stub with total=0 and while condition given); rung-6 Write (number-guessing game — uses if/elif/else from L2.3; guessing game is the WRITE exercise at the end, not the primary example)

**Misconceptions addressed:** condition not checked continuously; print inside vs outside loop; infinite loop from missing update; uninitialized loop variable

**Error classes introduced:** NameError (uninitialized while variable), infinite loop (runtime hang, not an error class)

---

### 2.5 — for and range

**Concept inventory (subsection order required: range forms → off-by-one → lazy sequence → break/continue → for vs while rule → sep=/end=):**
- `for` loop: definite iteration; loop variable bound to each value in sequence in turn; Python manages the counter
- `range(stop)`: starts at 0, ends at stop−1; `range(5)` gives 0,1,2,3,4 — stop is NOT included; named as the off-by-one trap (HTTLACS §7.19); memory hook: "range(5) gives you 5 numbers; stop is the fence post, not the last step"
- `range(start, stop)`: two-argument form
- `range(start, stop, step)`: three-argument form including negative step — `range(10, 0, -1)` for countdown; `range(0, 20, 2)` for every other
- `range()` shows `range(0, 5)` when printed — not the individual numbers; behavioral fact taught without `list()` (Ch.4 concept); Codex note; one predict-the-output exercise proactively addresses this
- `for` loop variable scope: exists and holds its last value after the loop ends; if range produces zero iterations the variable is never bound — NameError; both behaviors named
- Rung-1 Predict at lesson open: "What values does `range(2, 10, 2)` produce?" — student predicts sequence before running; stepper confirms
- `break`: exit the innermost loop immediately; full treatment here after preview in L2.4; valid and useful
- `continue`: skip the rest of the current iteration; common misconception — `continue` exits the loop (it does not); demonstrated side-by-side with `break` on the same loop body
- `break` exits only the innermost loop — flag variable or function return for outer-loop exit; preview of Ch.3
- Nested loops: inner loop runs to completion on each outer iteration; one level only; traced with stepper to show outer variable holding steady while inner cycles
- **`for` vs `while` decision rule — explicit named rule**: "use `for` when you know how many iterations (or you have a sequence to traverse); use `while` when the count depends on what happens at runtime"; half-page section with two contrasting examples
- **`print()` `sep=` and `end=` as named, taught concepts** — placed as a named subsection BEFORE the times-table exercise uses them; CURRICULUM.md explicitly deferred these from Ch.1 for exactly this context
- f-strings recalled from Ch.1 L1.5 and applied in loop context — one rung-1 Predict showing that f-string expressions are evaluated fresh each iteration; recall-and-apply, not re-teaching
- Accumulator inside a `for` loop — recalled from L2.4 and applied in a rung-5 Complete exercise
- TypeError from non-integer in `range()` — `range(n/2)`; fix: use `//`
- ValueError from `range(start, stop, step=0)` — zero step caught at construction

**Exercises:** rung-1 Predict (what does `range(2,10,2)` produce?); rung-1 Predict (f-string evaluated each iteration); rung-3 Modify (change countdown to `range(10, 0, -1)`); rung-4 Fix (`break` where `continue` was intended); rung-5 Complete (accumulator inside for loop stub); rung-6 Write (prime checker for 1–20 using nested loop and `%`)

**Misconceptions addressed:** `range(10)` goes 1–10 (it goes 0–9); `continue` exits the loop; print(range(5)) shows numbers; break exits all loops

**Error classes introduced:** TypeError (`range()` non-integer), ValueError (`range()` step=0)

---

### 2.6 — Fix the Broken Code

**Placement:** after both `while` and `for` are taught — required by all 5 reviewers; only then does the student have the full error-class vocabulary. This lesson is consolidation, not first meeting with any concept.

**Concept inventory:**
- Debugging protocol: three named steps — (1) read the error class and message; (2) go to the indicated line and look at the line before it too (IndentationError often points one line late); (3) understand why it broke before changing anything; protocol added to Codex as a named procedure
- Three error categories (named vocabulary): syntax error (Python refuses to run), runtime error (Python crashes mid-run), logic bug (Python runs but does the wrong thing) — prerequisite vocabulary for Ch.5's full debugging protocol
- IndentationError pointing one line late — named explicitly with a concrete demonstration, not just warned about
- Multiple errors hiding behind the first — fixing the first error may reveal more; students must re-run after each fix
- Infinite loop recognition and recovery — Stop button UX; tab stays responsive
- Consolidation of all Ch.2 error classes: SyntaxError (= in condition; missing colon), IndentationError, TabError, NameError (uninitialized while variable; empty range), TypeError (non-integer in range), ValueError (range step=0)
- NameError from for loop variable when range produces zero iterations

**Exercises:** rung-1 Spot (three broken snippets, identify error class from menu — identification only); rung-4 Fix (12-line program with IndentationError, look one line earlier); rung-4 Fix (3 bugs in sequence: SyntaxError + TypeError + logic bug)

**No new syntax concepts introduced** — every exercise uses concepts from L2.1–L2.5.

---

### 2.7 — Loops Make Art and Beats

**Concept inventory:**
- `for`/`range` applied in non-numeric context — the loop drives any repeatable action, not just counting
- **Loop variable as a parameter that changes each iteration** — `forward(i * 5)` produces a different step each time; this is what makes the spiral open outward; named explicitly as the key shift from "repeat the same thing" to "repeat with variation"
- `_` (throwaway variable) convention for unused loop variable — `for _ in range(4)` is idiomatic; named explicitly because students see it in the square and are confused by the underscore if it is not named
- Nested loops in strand context: for loop over bars containing for loop over beats; indentation depth tracks which level
- `if` inside a `for` loop — conditional beat selection; `%` operator from Ch.1 L1.4 used for divisibility patterns
- `and`/`or` inside a loop body — combined conditions for multi-instrument patterns
- **Rung-4 Fix and rung-5 Complete before rung-6 Write** — required to close the rung gap from Ch.1 L1.7 (rung-3 Modify only); the jump to rung-6 Write in a strand context without intermediate rungs was flagged by Downey as the most serious rung problem

**Exercises:** rung-4 Fix (broken spiral — wrong step multiplier); rung-5 Complete (spiral stub, for header given, student writes two turtle calls); rung-6 Write plot (hexagon: 6 sides, 60° turn); rung-5 Complete sound (16-beat drum loop with beat positions given as comments, student writes if/elif logic); rung-6 Write sound (4-bar pattern alternating two rhythms on odd vs even bars)

**Worked examples:** square with `for _ in range(4)` (`_` named); spiral with `i * 5` (loop variable as parameter); kick pattern with if/`%`; nested 4-bar drum pattern

**Sequencing notes (Chapter 2):**
- `+=` introduced as the first subsection of L2.4 — before any while example uses it
- Accumulator pattern named in L2.4, recalled and applied in L2.5
- "Code after if/else always runs" is a named concept in L2.2, not implied
- `for` vs `while` decision rule is a named section in L2.5
- Rung-1 Predict exercises at the open of L2.2, L2.4, and L2.5 — not just L2.1
- `print()` `sep=`/`end=` taught as a named subsection in L2.5 before the exercise that uses them
- Debugging lesson (L2.6) stays after both loop types — all 5 reviewers required this
- Number-guessing game is the rung-6 Write at the end of L2.4, not the primary example
- Collatz sequence is in the Chapter Challenge / Arena, not in lesson prose

## Chapter 3 — Functions (~6)
*Goal: functions are machines you build once and reuse forever.*

| # | Lesson | Idea / objective | Strand | Rung |
|---|---|---|---|---|
| 3.1 | Defining a Function | `def`, calling, why functions exist | core | 5 Complete |
| 3.2 | Parameters | Passing values in → *unit converters* | numbers | 6 Write |
| 3.3 | Return Values | Getting a value back out → `is_prime(n)` | numbers | 6 Write |
| 3.4 | Scope | Local vs outer names; what a call can and can't see | core | 4 Fix |
| 3.5 | Functions That Draw | Turtle functions for reusable shapes | core | 6 Write |
| 3.6 | def bassline() | Build a groove from function calls; *tip splitter* | sound | 6 Write |

## Chapter 4 — Collections (~6)
*Goal: storing many values; lists and dictionaries.*

| # | Lesson | Idea / objective | Strand | Rung |
|---|---|---|---|---|
| 4.1 | Lists | Ordered collections; making and reading them | data | 5 Complete |
| 4.2 | Indexing & Slicing | Index from 0; slices; off-by-one | data | 3 Modify |
| 4.3 | Looping over Lists | `for item in list` → *grade averages* | numbers | 6 Write |
| 4.4 | Dictionaries | Key → value lookups → *shopping-list manager* | data | 6 Write |
| 4.5 | Data into Charts | `plot`/`bar` → *dice-roll statistics* | plot | 6 Write |
| 4.6 | Lists as Music | `play_pattern` melodies; a drum pattern as a list of 1s and 0s | sound | 6 Write |

## Chapter 5 — Thinking in Code (~5) · *stop-point: feels complete here*
*Goal: code design and debugging as explicit skills. Style channel turns on.*

| # | Lesson | Idea / objective | Strand | Rung |
|---|---|---|---|---|
| 5.1 | Decomposition | Break a big problem into small functions | core | 6 Write |
| 5.2 | Naming Things Well | Readable names; the style channel begins | core | 4 Fix |
| 5.3 | Don't Repeat Yourself | Spot and remove repetition | core | 4 Fix |
| 5.4 | The Debugging Protocol | Read bottom line → find line → walk the stack → hypothesis → test (required in bosses hereafter) | core | 4 Fix |
| 5.5 | Checkpoint Projects | Number-guessing game; text-statistics tool; refactor a messy 40-line song | mixed | 6 Write · checkpoint |

## Chapter 6 — Classes and Objects (~6)
*Goal: objects as things with properties and abilities. Hard cap: attributes, methods, instances. No inheritance anywhere.*

| # | Lesson | Idea / objective | Strand | Rung |
|---|---|---|---|---|
| 6.1 | Objects Have Properties | A `Pet` class; attributes hold state | core | 5 Complete |
| 6.2 | `__init__` | Build an instance with starting values | core | 5 Complete |
| 6.3 | Methods | Abilities that act on the object's own data | core | 6 Write |
| 6.4 | Many Instances | Many objects from one class → game `Creature` with stats + inventory | core | 6 Write |
| 6.5 | A `Note` Class | Model pitch + duration | sound | 6 Write |
| 6.6 | A `Synth` Class | Sound settings; two instances play a duet | sound | 6 Write · checkpoint |

## Chapter 7 — Modules, Packages, and Real Data (~7)
*Goal: using code you didn't write, and handling real data.*

| # | Lesson | Idea / objective | Strand | Rung |
|---|---|---|---|---|
| 7.1 | import | Pull in the standard library | core | 5 Complete |
| 7.2 | Writing a Module | Organize your own code across files | core | 6 Write |
| 7.3 | Using a Library (an API) | Call functions without reading their insides | core | 3 Modify |
| 7.4 | Reading Documentation | A taught skill, using the course's own API docs | core | 1 Predict |
| 7.5 | Facts from Messy Text | *stats extractor* — pull player names and scores from a game log | words | 6 Write |
| 7.6 | Saving & Loading (JSON) | *personal music library* — search by artist and year | data | 6 Write |
| 7.7 | A Taste of SQL | One `sqlite3` lesson; create and query a table | data | 5 Complete |

## Interlude — Real Tools I (~5) · *after Chapter 7; error annotation off by default after here*
*Goal: graduate from the browser to a real dev setup. Separate Windows & Mac tracks, checklist-driven.*

| # | Lesson | Idea / objective |
|---|---|---|
| RT1.1 | The Terminal | `cd`, `ls`, making folders, running programs |
| RT1.2 | Installing Python | A real interpreter; first commands in the REPL |
| RT1.3 | VS Code | Open a project, integrated terminal, debug with breakpoints |
| RT1.4 | Environments & Packages | Virtual env, `pip install`, re-run a plotting exercise with real matplotlib |
| RT1.5 | Graduation Exercise | Move the Chapter 5 program to the machine; run it from the terminal; extend it in VS Code |

## Chapter 8 — JavaScript: Same Ideas, New Words (~8) · *every lesson side-by-side Python/JS*
*Goal: transfer everything to a second language, respecting interference (`===`, braces, `let`).*

| # | Lesson | Idea / objective | Strand | Rung |
|---|---|---|---|---|
| 8.1 | Variables & Types in JS | `let`/`const`; `===` vs `==` | numbers | 3 Modify |
| 8.2 | Loops in JS | `for`/`while`, braces and semicolons | numbers | 6 Write |
| 8.3 | Functions in JS | `function`, parameters, `return` | core | 6 Write |
| 8.4 | Arrays | JS's lists; methods | data | 6 Write |
| 8.5 | Objects | Key→value, the JS object | data | 6 Write |
| 8.6 | Classes | `class`, `constructor`, methods | core | 6 Write |
| 8.7 | Sound Lab in Both | The same music engine answers to either language | sound | 6 Write |
| 8.8 | Interference Drills | The real hazards of "zero new concepts" | core | 4 Fix · checkpoint |

## Chapter 9 — JS Owns the Page (~7)
*Goal: the browser, the DOM, and event-driven programming named explicitly.*

| # | Lesson | Idea / objective | Strand | Rung |
|---|---|---|---|---|
| 9.1 | The DOM | The page as objects JS can read and change | core | 5 Complete |
| 9.2 | Buttons & Events | Code that runs in response to the user | core | 6 Write |
| 9.3 | Code That Runs Later | Callbacks; not top-to-bottom — a paradigm shift, named | core | 1 Predict |
| 9.4 | Drawing on Canvas | Pixels, shapes, animation frames | plot | 6 Write |
| 9.5 | Clicker Game | A first real interface | core | 6 Write |
| 9.6 | Drawing Pad | Mouse events → canvas | plot | 6 Write |
| 9.7 | Data Dashboard | Load a dataset → sortable table + chart | data | 6 Write · checkpoint |

## Chapter 10 — The Science of Sound (~6)
*Goal: open the hood on the music engine he's used since Chapter 1.*

| # | Lesson | Idea / objective | Strand | Rung |
|---|---|---|---|---|
| 10.1 | Sound Is Vibration | Frequency = pitch; why 440 Hz is A | sound | 1 Predict |
| 10.2 | Oscillators & Waveforms | Sine vs square vs sawtooth, heard live | sound | 3 Modify |
| 10.3 | Gain & Envelopes | Loudness over time; attack/release | sound | 6 Write |
| 10.4 | Notes as Math | Each semitone × 2^(1/12) | numbers | 6 Write |
| 10.5 | Scales as Arrays | Build scales from intervals | sound | 6 Write |
| 10.6 | Rebuild play() | Reconstruct `play()` from raw oscillators | sound | 6 Write · checkpoint |

## Chapter 11 — The Music Projects (~5 guided projects)
*Goal: all five strands converge.*

| # | Project | Idea / objective | Pulls together |
|---|---|---|---|
| 11.1 | Drum Machine | 16-step sequencer; patterns are 2D arrays | loops, arrays, Chapter 9 UI |
| 11.2 | Synth Keyboard | Play notes with keys; a `Synth` class | OOP, events, sound |
| 11.3 | Melody Generator | Random walks on a scale; Euclidean rhythms | algorithms (back to Chapter 0) |
| 11.4 | Capstone: Mini Studio | Reads his own text notation; SQLite song library; plots patterns while playing | text, data, plot, sound |
| 11.5 | Concert Page | A shareable page that plays his saved compositions | everything |

## Chapter 12 — TypeScript (~3) + Real Tools II (~3)
*Goal: types for big programs, and leaving the course working like a professional.*

| # | Lesson | Idea / objective |
|---|---|---|
| 12.1 | What Types Are, and Why | Why big programs want type checking |
| 12.2 | Annotating the Mini Studio | Add types to his own capstone code |
| 12.3 | The Checker Catches Bugs | Watch the type checker find real mistakes live |
| RT2.1 | Node & npm | Install Node; what `package.json` means |
| RT2.2 | Running JS/TS from the Terminal | Compile and run outside the browser |
| RT2.3 | git as Save Points | A first look at version control |

## Epilogue — The Unscaffolded Project (1)
One self-chosen project: rubric and coach only. No lesson text, no hints, no
checker, no annotation. The graduation exam for independence.

---

## Challenge Arena (parallel track)
Not in the lesson flow: ~40 tougher challenges + **one boss challenge per
chapter**, drawn from the five strands and tagged with required concepts (a
challenge unlocks only once its concepts are learned; locked ones show as
silhouettes). Short codes (e.g. `W4-C2`) for coach assignment; up to three stars
(solved / no hints / under par); boss timer is a coach option, default off;
coach-authored custom challenges checked by output matching. No error annotation
in the Arena.

---

## Notes on sequencing decisions (all traceable to the plan)
- **Values & Types before variables/strings** — HTTLACS order; concatenation and `input()` depend on understanding types (PLAN §2 inspiration).
- **`input()` placed after types** — `input()` returns a `str`, so it pays off the conversion idea directly.
- **Debugging recurs from Chapter 2**, taught as a protocol in Chapter 5 (§3 "errors as curriculum").
- **Rungs ramp** per §3: Chapter 0 pre-syntax; Chapters 1–4 lean on 1–4; Chapter 5+ on 5–6; Chapter 8+ write-by-default.
- **Engine features still required** for some lesson types: Parsons (rung 2, Chapter 0), predict-the-variable-table (rung 1), `input()` stdin in the worker, JS runtime (Chapter 8+), sql.js (Chapter 7), the TypeScript compiler (Chapter 12). These are build tasks, flagged where they gate a lesson.
