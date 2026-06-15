# Code Lab — Curriculum

The full lesson-by-lesson syllabus, derived from PLAN.md §3 (pedagogy), §4
(curriculum map), and §5 (Real Tools). ~70–80 lessons across 12 worlds + two
Real Tools interludes + an epilogue, plus the parallel Challenge Arena. This is
the structure to review and approve **before** any lesson prose is written.

Audience: a strong grade 6–7 reader. Reading level target grade 6–7 with real
theory and background, in the *How to Think Like a Computer Scientist*
tradition — teach the idea, not just the syntax.

**Every lesson follows the loop (§3):** warm-up recall → read the explanation →
run & tinker with a worked example → solve the challenge → hint ladder → compare
to the model solution. Checkpoint every 4–6 lessons.

**Rung ladder (§3):** 1 Predict · 2 Arrange (Parsons) · 3 Modify · 4 Fix ·
5 Complete · 6 Write. Early worlds live on 1–4; World 5+ on 5–6; World 8+ writes
from scratch by default. World 0 is pre-syntax.

**Strands:** numbers · words · data · plot · sound · core.

---

## World 0 — First Sound, Then Think Like a Computer (~5)
*Goal: hook him with real sound in two minutes, then build the ideas behind code — sequence, repetition, condition — before any syntax. Pre-syntax puzzles.*

| # | Lesson | Idea / objective | Strand | Rung |
|---|---|---|---|---|
| 0.1 | First Sound | Run and change real code that makes sound; you are already programming | sound | 3 Modify |
| 0.2 | Algorithms Are Exact | An algorithm is a precise, ordered list of steps a machine follows literally | core | 1 Predict |
| 0.3 | Guide the Robot | Sequencing: order commands to walk a robot across a grid to its goal | core | 2 Arrange |
| 0.4 | Repeat and Decide | Repetition and conditions as ideas (loops & ifs, unplugged) | core | 2 Arrange |
| 0.5 | The Sandwich Bug | Debugging as an idea: find the wrong/missing step in a recipe | core | 4 Fix |

## World 1 — Python: First Words (~7)
*Goal: the foundations of values, names, and expressions; the stepper and predict-the-variable-table appear here.*

| # | Lesson | Idea / objective | Strand | Rung |
|---|---|---|---|---|
| 1.1 | Telling the Computer to Speak | `print` as output; arguments; text needs quotes | words | 5 Complete |
| 1.2 | Values and Types | `int`/`float`/`str`; `type()`; `"7"` ≠ `7`; convert with `int()`/`str()` | numbers | 5 Complete |
| 1.3 | Storing Values in Variables | Assignment as an instruction (not equality); reassignment; program state via the stepper | numbers | 5 Complete |
| 1.4 | Expressions & Simple Math | Operators, order of operations, brackets; an expression has a value | numbers | 5 Complete |
| 1.5 | Working with Strings | Concatenation; mixing types fails → *name mashup generator* | words | 6 Write |
| 1.6 | Input | `input()` returns a `str`; convert to compute → *age-in-days calculator* | numbers | 5 Complete |
| 1.7 | First Drawing & First Sound | Turtle `forward`/`right` (a square); `play`/`sleep` three-note motif transposed by one variable | core / sound | 6 Write |

## World 2 — Decisions and Loops (~7)
*Goal: branching and repetition; debugging becomes a first-class, recurring skill.*

| # | Lesson | Idea / objective | Strand | Rung |
|---|---|---|---|---|
| 2.1 | True, False, and Comparison | Booleans; `==` `!=` `<` `>` `<=` `>=`; a comparison is an expression with a True/False value | numbers | 1 Predict |
| 2.2 | if / else | Branching on a condition; indentation defines the block | core | 5 Complete |
| 2.3 | elif: Many Branches | Multi-way decisions → *password-strength checker* | words | 6 Write |
| 2.4 | while Loops | Repeat while a condition holds; loop variable & stopping → *countdown timer* | numbers | 6 Write |
| 2.5 | for and range | Counted loops; `range` → *times-table printer* | numbers | 6 Write |
| 2.6 | Fix the Broken Code | First explicit debugging lessons: read the error, find the line, repair | core | 4 Fix |
| 2.7 | Loops Make Art & Beats | `for` → turtle spirals, and a four-on-the-floor kick pattern | plot / sound | 6 Write |

## World 3 — Functions (~6)
*Goal: functions are machines you build once and reuse forever.*

| # | Lesson | Idea / objective | Strand | Rung |
|---|---|---|---|---|
| 3.1 | Defining a Function | `def`, calling, why functions exist | core | 5 Complete |
| 3.2 | Parameters | Passing values in → *unit converters* | numbers | 6 Write |
| 3.3 | Return Values | Getting a value back out → `is_prime(n)` | numbers | 6 Write |
| 3.4 | Scope | Local vs outer names; what a call can and can't see | core | 4 Fix |
| 3.5 | Functions That Draw | Turtle functions for reusable shapes | core | 6 Write |
| 3.6 | def bassline() | Build a groove from function calls; *tip splitter* | sound | 6 Write |

## World 4 — Collections (~6)
*Goal: storing many values; lists and dictionaries.*

| # | Lesson | Idea / objective | Strand | Rung |
|---|---|---|---|---|
| 4.1 | Lists | Ordered collections; making and reading them | data | 5 Complete |
| 4.2 | Indexing & Slicing | Index from 0; slices; off-by-one | data | 3 Modify |
| 4.3 | Looping over Lists | `for item in list` → *grade averages* | numbers | 6 Write |
| 4.4 | Dictionaries | Key → value lookups → *shopping-list manager* | data | 6 Write |
| 4.5 | Data into Charts | `plot`/`bar` → *dice-roll statistics* | plot | 6 Write |
| 4.6 | Lists as Music | `play_pattern` melodies; a drum pattern as a list of 1s and 0s | sound | 6 Write |

## World 5 — Thinking in Code (~5) · *stop-point: feels complete here*
*Goal: code design and debugging as explicit skills. Style channel turns on.*

| # | Lesson | Idea / objective | Strand | Rung |
|---|---|---|---|---|
| 5.1 | Decomposition | Break a big problem into small functions | core | 6 Write |
| 5.2 | Naming Things Well | Readable names; the style channel begins | core | 4 Fix |
| 5.3 | Don't Repeat Yourself | Spot and remove repetition | core | 4 Fix |
| 5.4 | The Debugging Protocol | Read bottom line → find line → walk the stack → hypothesis → test (required in bosses hereafter) | core | 4 Fix |
| 5.5 | Checkpoint Projects | Number-guessing game; text-statistics tool; refactor a messy 40-line song | mixed | 6 Write · checkpoint |

## World 6 — Classes and Objects (~6)
*Goal: objects as things with properties and abilities. Hard cap: attributes, methods, instances. No inheritance anywhere.*

| # | Lesson | Idea / objective | Strand | Rung |
|---|---|---|---|---|
| 6.1 | Objects Have Properties | A `Pet` class; attributes hold state | core | 5 Complete |
| 6.2 | `__init__` | Build an instance with starting values | core | 5 Complete |
| 6.3 | Methods | Abilities that act on the object's own data | core | 6 Write |
| 6.4 | Many Instances | Many objects from one class → game `Creature` with stats + inventory | core | 6 Write |
| 6.5 | A `Note` Class | Model pitch + duration | sound | 6 Write |
| 6.6 | A `Synth` Class | Sound settings; two instances play a duet | sound | 6 Write · checkpoint |

## World 7 — Modules, Packages, and Real Data (~7)
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

## Interlude — Real Tools I (~5) · *after World 7; error annotation off by default after here*
*Goal: graduate from the browser to a real dev setup. Separate Windows & Mac tracks, checklist-driven.*

| # | Lesson | Idea / objective |
|---|---|---|
| RT1.1 | The Terminal | `cd`, `ls`, making folders, running programs |
| RT1.2 | Installing Python | A real interpreter; first commands in the REPL |
| RT1.3 | VS Code | Open a project, integrated terminal, debug with breakpoints |
| RT1.4 | Environments & Packages | Virtual env, `pip install`, re-run a plotting exercise with real matplotlib |
| RT1.5 | Graduation Exercise | Move the World 5 program to the machine; run it from the terminal; extend it in VS Code |

## World 8 — JavaScript: Same Ideas, New Words (~8) · *every lesson side-by-side Python/JS*
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

## World 9 — JS Owns the Page (~7)
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

## World 10 — The Science of Sound (~6)
*Goal: open the hood on the music engine he's used since World 1.*

| # | Lesson | Idea / objective | Strand | Rung |
|---|---|---|---|---|
| 10.1 | Sound Is Vibration | Frequency = pitch; why 440 Hz is A | sound | 1 Predict |
| 10.2 | Oscillators & Waveforms | Sine vs square vs sawtooth, heard live | sound | 3 Modify |
| 10.3 | Gain & Envelopes | Loudness over time; attack/release | sound | 6 Write |
| 10.4 | Notes as Math | Each semitone × 2^(1/12) | numbers | 6 Write |
| 10.5 | Scales as Arrays | Build scales from intervals | sound | 6 Write |
| 10.6 | Rebuild play() | Reconstruct `play()` from raw oscillators | sound | 6 Write · checkpoint |

## World 11 — The Music Projects (~5 guided projects)
*Goal: all five strands converge.*

| # | Project | Idea / objective | Pulls together |
|---|---|---|---|
| 11.1 | Drum Machine | 16-step sequencer; patterns are 2D arrays | loops, arrays, World 9 UI |
| 11.2 | Synth Keyboard | Play notes with keys; a `Synth` class | OOP, events, sound |
| 11.3 | Melody Generator | Random walks on a scale; Euclidean rhythms | algorithms (back to World 0) |
| 11.4 | Capstone: Mini Studio | Reads his own text notation; SQLite song library; plots patterns while playing | text, data, plot, sound |
| 11.5 | Concert Page | A shareable page that plays his saved compositions | everything |

## World 12 — TypeScript (~3) + Real Tools II (~3)
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
world**, drawn from the five strands and tagged with required concepts (a
challenge unlocks only once its concepts are learned; locked ones show as
silhouettes). Short codes (e.g. `W4-C2`) for coach assignment; up to three stars
(solved / no hints / under par); boss timer is a coach option, default off;
coach-authored custom challenges checked by output matching. No error annotation
in the Arena.

---

## Notes on sequencing decisions (all traceable to the plan)
- **Values & Types before variables/strings** — HTTLACS order; concatenation and `input()` depend on understanding types (PLAN §2 inspiration).
- **`input()` placed after types** — `input()` returns a `str`, so it pays off the conversion idea directly.
- **Debugging recurs from World 2**, taught as a protocol in World 5 (§3 "errors as curriculum").
- **Rungs ramp** per §3: World 0 pre-syntax; Worlds 1–4 lean on 1–4; World 5+ on 5–6; World 8+ write-by-default.
- **Engine features still required** for some lesson types: Parsons (rung 2, World 0), predict-the-variable-table (rung 1), `input()` stdin in the worker, JS runtime (World 8+), sql.js (World 7), the TypeScript compiler (World 12). These are build tasks, flagged where they gate a lesson.
