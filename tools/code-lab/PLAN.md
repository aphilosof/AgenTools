# Code & Sound: Self-Contained Coding Course Plan

A zero-setup programming course for an 11-year-old, delivered as a single HTML file that runs by double-clicking. Covers algorithmic thinking through code design, OOP, and modular programming in Python and JavaScript. Exercises stay hands-on across five practical strands (calculations, words and text, data and databases, plotting, and sound), all converging on the electronic music capstone projects. A structured mid-course graduation moves him onto real tools: terminal, editor, environments, and packages. The finish line is writing programs confidently from scratch.

---

## 1. Core Constraints and How to Meet Them

**Zero setup.** Everything runs in the browser. No installs, no terminals, no Node, no Python interpreter on the machine. Double-click `course.html` and start.

**Self-contained.** All lessons, challenges, and the course engine live inside the file. Since internet access is acceptable, the heavy runtimes load from CDN, which unlocks the best option for Python:

**Decision: Pyodide** (real CPython compiled to WebAssembly, loaded from CDN). The student gets genuine Python 3: the real standard library, real error messages, behavior identical to Python on any machine. Nothing he learns needs unlearning later. The browser caches the ~15 MB runtime after the first session, so later launches are fast and tolerant of a weak connection. CDN script loading works from a double-clicked `file://` page, so the zero-setup promise holds: double-click, wait a few seconds on first launch, code.

One gap to fill: Pyodide ships without the turtle module (it depends on a desktop GUI toolkit). Phase 1 therefore includes a small custom turtle module written for this course that draws to an HTML canvas and matches the standard turtle commands (forward, right, pencolor, and so on), so the early visual lessons behave exactly as they would in a regular Python class.

JavaScript needs no runtime at all. Student JS executes in a sandboxed iframe (for DOM and audio lessons) or a web worker with a timeout kill switch (for pure-logic lessons, so an infinite loop never freezes the page). The Web Audio API is built into every browser, which makes the music finale possible with zero external dependencies.

**Other architecture pieces:**

- **Editor:** CodeMirror, loaded from CDN. Syntax highlighting, auto-indent, line numbers. The editor never auto-fixes syntax: he types the colons and manages the indentation, and mistakes earn fast, comprehensible explanations rather than silent correction.
- **Stepper:** a step-through visualizer built on `sys.settrace` (real CPython under Pyodide): line highlighting and a live variable table, available on every Python exercise from Chapter 1. This is the notional machine of the course, the visible model of what the computer actually does.
- **Friendly error layer:** the real traceback always displays untouched, with a plain-language annotation beneath it that points back into the original (error type, line, likely cause). Translate, never replace. The annotation fades on a schedule (Section 3).
- **Style checker:** a small built-in linter for naming, magic numbers, repeated code, and function length, feeding the second feedback channel (Section 3).
- **Music engine:** a Sonic Pi-inspired library built on the Web Audio API and exposed identically in Python and JavaScript: `play(60)`, `sleep(0.5)`, `play_pattern(notes)`, `sample("kick")`, `set_tempo(120)`. As in Sonic Pi, `sleep` advances a virtual timeline instead of blocking, so loops and functions schedule sound precisely. These five commands carry the music exercises from Chapter 1 through the capstone, long before he learns what an oscillator is.
- **Plotting helper:** a tiny `plot()` and `bar()` API drawing to canvas, mirrored in both languages, so data exercises produce visible charts from Chapter 4 onward. Real matplotlib takes over once he reaches the Real Tools graduation.
- **Database:** Pyodide ships Python's built-in `sqlite3`, and sql.js provides the same SQLite engine for JavaScript, so genuine database exercises run entirely in the browser.
- **Progress:** saved to localStorage automatically, with an export/import button that produces a small save code. Progress survives even if the file moves between computers.
- **Lesson engine:** each lesson is a data object (explanation, starter code, expected output or test function, hints, concept tags, and its Codex entry). The whole curriculum is content plugged into one engine, which keeps the file maintainable and lets you add lessons later.

---

## 2. Language Sequencing

**Confirmed: Python first, JavaScript second, TypeScript as the final module.**

Python first follows the *How to Think Like a Computer Scientist* tradition: minimal syntax noise while the hard part (learning to think in algorithms) happens. JavaScript arrives in the second half as a translation exercise ("you already know loops, here is how JS writes them"), which doubles as a powerful lesson: languages differ, concepts transfer. JS then unlocks the browser, the canvas, and Web Audio, which is where the music lives.

TypeScript closes the course as a short capstone module: "Adding types to your code." The official TypeScript compiler runs in the browser (loaded from CDN), so he annotates his own Mini Studio code and watches the type checker catch real mistakes live, framed as the tool that makes big programs safe to grow.

---

## 3. Pedagogy Model

Every lesson follows the same loop:

1. **Warm up:** one or two 30-second recall questions drawn from earlier chapters (retrieval practice, which is what actually fights forgetting over a long arc)
2. **Read** a short explanation (target: under 150 words, grade 5 to 6 reading level, one concept only)
3. **Run** a working example and tinker with it
4. **Solve** a challenge in the editor, auto-checked with diagnostic feedback that says what failed and where, never a bare fail
5. **Hints** available as a ladder keyed to the documented misconceptions for that exercise: nudge, bigger nudge, near-solution. Using hints never blocks progress
6. **Compare:** once his solution passes, a clean model solution appears with short notes, so he sees an idiomatic version next to his own
7. **Checkpoint** every 4 to 6 lessons: a slightly larger exercise combining recent concepts

Every lesson carries a time budget of 15 to 25 minutes including the challenge; anything larger gets split. Reading level and time budgets are enforced by the test harness.

**Typing, not clicking.** From Chapter 1 every exercise is real typed code, and challenges climb a six-rung ladder that shifts the writing burden onto him as the course progresses:

1. **Predict:** read code, predict the output (or the variable table at a given line, using the stepper to check)
2. **Arrange:** Parsons problems, scrambled lines reordered into a working program
3. **Modify:** change values or lines in working code
4. **Fix:** repair broken code
5. **Complete:** finish a partial program against a spec
6. **Write:** blank editor, written from scratch

Early chapters live on rungs 1 to 4. By Chapter 5 most challenges sit on rungs 5 and 6, and from Chapter 8 onward writing from scratch is the default. Chapter 0 is the only exception, since its puzzles are pre-syntax by design.

**Five practice strands.** Exercises in every chapter draw on recurring real-world strands, so each concept gets practiced on several kinds of problems before moving on:

- **Numbers:** calculations that beat doing it by hand, unit converters, primes, dice statistics, compound allowance interest
- **Words:** name mashups, word counters, secret codes, extracting names, dates, and numbers from messy text
- **Data:** records as dictionaries, then real SQLite tables he creates and queries
- **Plotting:** charts of his own results, from dice-roll bars to function graphs
- **Sound Lab:** the Sonic Pi-style strand, where loops become drum patterns, functions become instruments, lists become melodies, classes become synths

All five strands converge in Chapter 11: the music projects parse text notation, store songs in a database, plot patterns, and compute timing, so the capstone exercises everything at once.

**Errors as curriculum.** Error messages are a subject, not a UX problem. The real traceback always displays untouched, with the plain-language annotation beneath it pointing back into the original, teaching him to read it the way interlinear translation teaches reading in a foreign language. The scaffold fades on a schedule: full annotation through Chapter 4, traceback anatomy taught explicitly in the Chapter 5 debugging-protocol lesson, annotation on demand only after Chapter 5, off by default from Real Tools I onward (the terminal and VS Code have no such layer, so the fading must complete before graduation), and never present in the Arena. Every error class he encounters writes an entry into the errors tab of the Codex, his earned field guide to Python and JavaScript error messages.

**Two feedback channels.** Correctness and style are assessed separately. Correctness checks are tolerant of cosmetic differences (normalized whitespace, order-insensitive matching where order genuinely does not matter, property checks over literal matching where possible) and always diagnose, never a bare fail. Style gets its own channel from Chapter 5 onward: after a solution passes, the style check comments on naming, magic numbers, repeated code, and function length. Style never blocks progress early, and clean style becomes required at checkpoints from Chapter 6 onward. The model-solution compare remains the primary idiom teacher, since seeing a clean version next to his own after every solve is the highest-frequency style instruction in the course.

**The Challenge Arena (parallel track).** Separate from the lesson flow, a bank of roughly 40 tougher challenges plus one boss challenge per chapter, drawn from the same five strands and tagged with required concepts, so a challenge only unlocks once he has learned what it needs. Locked challenges appear as silhouettes. Built for the parent as much as for him:

- **Coach mode:** a parent view for assigning any unlocked challenge (it appears on his home screen as a challenge from Dad) and reviewing results: solved or not, time taken, hints used, attempts. When a challenge stalls, coach mode shows his current code and error, because in this design the coach is the adaptive tutor of last resort
- **Challenge codes:** every challenge has a short code (W4-C2), so assigning one takes nothing more than telling him the code
- **Stars:** up to three per challenge: solved, solved without hints, solved under par. Stars display on the knowledge map
- **Boss challenges:** one per chapter, a mini-test combining everything in that chapter, for checking retention. The timer is a coach-mode option, default off
- **Custom challenges:** authored in coach mode by writing a prompt and the expected output, auto-checked by output matching

Arena challenges never show error annotation: out here he reads the raw traceback.

Plus, always available:

- **Sandbox tab:** a free-play editor for both languages, no objectives
- **Knowledge map:** the whole course as a navigable map of chapters and lessons. Completed lessons stay open forever in review mode, so he can re-read and re-run anything without affecting progress or badges. Every lesson carries concept tags (loops, dictionaries, functions), and the map is searchable by concept, so "where did I learn dictionaries" is one search away
- **The Codex:** a personal cheat sheet that builds itself. Completing a lesson adds its entry: the syntax pattern, a one-line explanation, and a link back to the source lesson. Entries are organized by topic, show Python and JavaScript side by side once Chapter 8 unlocks the second language, and the collection is searchable and printable. It starts empty and only ever contains what he has actually earned, so it reads as his own growing reference rather than documentation he has not met yet. Glossary terms live inside it as a second tab, and the error classes he has met live in a third

The interface itself is earned: he starts with Lessons alone, and Map, Codex, Arena, and Sandbox each unlock at the moment they first become meaningful, so day one is a single uncluttered surface.

Debugging is taught as a first-class skill, not an afterthought: lessons that present broken code and ask "make it work" appear from Chapter 2 onward.

---

## 4. Curriculum Map

Roughly 70 to 80 lessons across 12 chapters, a Real Tools interlude, and an epilogue, alongside the parallel Challenge Arena of roughly 40 assignable challenges. At 2 to 3 lessons per week this is realistically a 9 to 15 month arc. The course is deliberately structured so that stopping after Chapter 5 still leaves a complete-feeling education: real fundamentals, real projects, real confidence.

**Chapter 0 — First Sound, Then Think Like a Computer (~5 lessons)**
Lesson zero is the hook: he runs and modifies real code that makes sound within two minutes of first opening the file. The conceptual work follows, interleaved rather than front-loaded: algorithms as exact instructions, guide a robot on a grid, sort objects step by step, find the bug in a sandwich-making recipe. Sequencing, repetition, and conditions as ideas, with the promise of the course already ringing in his ears.

**Chapter 1 — Python: First Words (~6 lessons)**
print, strings, numbers, variables, simple math, input. The stepper appears here, and predict-the-variable-table exercises run from Chapter 1 onward so the mental model of execution is built from day one. Exercises: an age-in-days calculator, a name mashup generator, the first turtle drawing, and the first sounds: `play(60)` and a three-note motif transposed by changing one variable.

**Chapter 2 — Decisions and Loops (~7 lessons)**
if/elif/else, comparison, while, for, range. First "fix the broken code" lessons. Exercises: times-table printer, password strength checker, countdown timer, turtle spirals, and a for loop that becomes a four-on-the-floor kick pattern.

**Chapter 3 — Functions (~6 lessons)**
Defining, parameters, return values, scope. Theme: functions are machines you build once and use forever. Exercises: unit converters, `is_prime(n)`, a tip splitter, turtle functions that draw reusable shapes, and `def bassline():` with a full groove assembled from function calls.

**Chapter 4 — Collections (~6 lessons)**
Lists, indexing, slicing, loops over lists, dictionaries. Exercises: grade averages, a word counter, a shopping list manager, dice-roll statistics drawn with the plotting helper, melodies as lists played with `play_pattern`, and a drum pattern as a list of 1s and 0s.

**Chapter 5 — Thinking in Code (~5 lessons)**
The code-design chapter. Decomposition (big problems into small functions), naming things well, do-not-repeat-yourself, and the debugging protocol taught as an explicit procedure on real tracebacks: read the bottom line for the error type, find the line number, walk the stack upward, form a hypothesis, test it. The protocol is required in every boss challenge from here on. Checkpoint projects: a number guessing game built from clean small functions, a text-statistics tool that reports word and sentence counts for any pasted paragraph, and a refactor that turns a messy 40-line song into well-named functions without changing how it sounds.

**Chapter 6 — Classes and Objects (~6 lessons)**
Objects as things with properties and abilities. \_\_init\_\_, methods, multiple instances. Build a `Pet` class, then a game `Creature` with stats and an inventory, then a `Note` class (pitch, duration). Scope is deliberate and hard-capped: attributes, methods, instances, nothing else. No inheritance anywhere in this course. Sound Lab: a `Synth` class with its own sound settings, two instances playing a duet.

**Chapter 7 — Modules, Packages, and Real Data (~7 lessons)**
import, organizing code into modules, using a library someone else wrote, and the idea of an API: you use functions without reading their insides. Documentation reading is taught as an explicit skill here, using the course's own API docs as the object of study. Then the data payoff: extracting structured facts from messy text, saving and loading records as JSON, and one taste-of-SQL lesson with Python's built-in `sqlite3` (the full SQL module is deferred to a later, optional extension). Exercises: a stats extractor that pulls player names and scores from a game log, a personal music library with searches by artist and year, and splitting the Chapter 5 song into `drums` and `melody` modules.

**Interlude — Real Tools I (~5 lessons)**
The structured graduation from the browser to a real development setup: terminal, Python, VS Code, environments, packages. Full lesson breakdown in Section 5.

**Chapter 8 — JavaScript: Same Ideas, New Words (~8 lessons)**
Side-by-side Python and JS for everything already learned: variables, loops, functions, arrays, objects, classes. Every lesson shows both languages, and the Sound Lab exercises run in both to prove the point: the music engine answers to either one. The pacing respects interference rather than pretending it away: `===`, braces and semicolons, `let`, and the overconfidence of "zero new concepts" are treated as the real hazards they are.

**Chapter 9 — JS Owns the Page (~7 lessons)**
The DOM, buttons, and event-driven programming taught by name: code that does not run top to bottom, functions that run later, a genuine paradigm shift treated explicitly rather than absorbed by accident. Drawing on canvas. First programs with real user interfaces: a clicker game, a drawing pad, and a data dashboard that loads a small dataset and renders a sortable table with a chart.

**Chapter 10 — The Science of Sound (~6 lessons)**
This chapter opens the hood on the music engine he has used since Chapter 1. Web Audio API. Sound as vibration, frequency as pitch, why 440 Hz is A. Oscillators, gain, envelopes, waveform shapes (sine vs square vs sawtooth, heard live). Notes as math: each semitone multiplies frequency by 2^(1/12). Scales as arrays. By the end he can rebuild `play()` himself from raw oscillators.

**Chapter 11 — The Music Projects (~5 guided projects)**
1. **Drum machine:** a 16-step sequencer grid. Patterns are 2D arrays, playback is a loop, the UI is Chapter 9 skills
2. **Synth keyboard:** play notes with computer keys. A `Synth` class with waveform and envelope settings (OOP payoff)
3. **Melody generator:** algorithmic composition. Random walks constrained to a scale, plus Euclidean rhythms, which loops the course back to Chapter 0: music generated by pure algorithms
4. **Capstone, the Mini Studio:** combine all three into one instrument. It reads songs written in a text notation he designs himself (the text extraction payoff), stores them in a SQLite song library (the database payoff), and plots patterns while they play (the plotting payoff). This is his program, extended however he wants
5. **Concert page:** a shareable page that plays his saved compositions

**Chapter 12 — TypeScript (~3 lessons, plus Real Tools II)**
What types are, why big programs want them, adding annotations to the Mini Studio code and watching the checker catch real bugs. Real Tools II extends the terminal skills from the interlude: installing Node, npm basics, running JS and TS from the command line, so he leaves the course working the way professionals do.

**Epilogue — The Unscaffolded Project**
One self-chosen project with only a rubric and the coach. No lesson text, no hints, no checker, no annotation. This is the graduation exam for independence, and the course is not complete without it.

---

## 5. Real Tools Graduation

Two structured graduation points move him from the browser sandbox to working the way developers actually work. Both are taught inside the course as guided, checklist-driven lessons with separate Windows and Mac tracks, and both end with him running his own code outside the course file.

**Real Tools I (after Chapter 7, ~5 lessons):**

1. **The terminal:** what it is, navigating with cd and ls, making folders, running programs
2. **Installing Python:** a real interpreter on his machine, first commands in the REPL
3. **VS Code:** opening a project folder, the editor, the integrated terminal, running and debugging a script with breakpoints
4. **Environments and packages:** why projects get their own virtual environment, creating one, `pip install`, then re-running a course plotting exercise locally with real matplotlib
5. **Graduation exercise:** move his Chapter 5 checkpoint program onto the machine, run it from the terminal, and extend it in VS Code

From this point on, every exercise can be done in the browser or in VS Code (his choice), and selected exercises require the local setup so the skills stay warm. Error annotation also switches off by default here: the terminal and VS Code have no such layer, so the fading must be complete before graduation.

**Real Tools II (with Chapter 12, ~3 lessons):** installing Node, npm and what package.json means, running JavaScript and compiled TypeScript from the terminal, and a first look at git as save points for code.

---

## 6. Build Plan

Built section by section with review gates, in four phases:

**Phase 1 — The Shell.** Single HTML file with: lesson engine, CodeMirror editor, Pyodide integration, the custom canvas turtle module, the music engine, the plotting helper, the stepper, the friendly error layer, the style checker, Parsons (arrange) support, JS sandbox with infinite-loop protection, the knowledge map with review mode, the Codex engine including the errors tab, the Challenge Arena engine with coach mode, localStorage save/export, light and dark themes, and 6 sample lessons proving every pipeline (the hook lesson, one Python with the stepper, one Parsons, one turtle, one JS, one chart). The test harness ships in this phase and enforces reading level and time budgets alongside the checker invariants. *Review gate: you test it with your son before any curriculum is written, including whether the c64 body face reads comfortably at length.*

**Phase 2 — Python Chapters (0 through 7) and Real Tools I.** Content delivered chapter by chapter for review. Each chapter ships with its lesson challenges, its arena challenges and boss challenge, and auto-checks tested programmatically.

**Phase 3 — JS and Sound Chapters (8 through 10).** Includes the small embedded audio helper layer the projects will use.

**Phase 4 — Projects and Polish (11, 12, Real Tools II).** The guided projects, badges and unlockables including the phosphor terminal skin, a Codex completeness pass, final QA pass on every challenge checker.

The HTML file itself stays small (engine plus lesson content, under 1 MB) and opens instantly. Pyodide, CodeMirror, and the TypeScript compiler load from CDN and are cached by the browser after the first session.

---

## 7. Decisions

**All resolved.** Internet access is acceptable, so the Python runtime is Pyodide (real CPython). Language order is Python first, then JavaScript. The TypeScript module (Chapter 12) is included. English only. Exercises span five practical strands (numbers, words, data, plotting, sound) rather than music alone, all converging on the Chapter 11 projects. Challenges progress from editing existing code to writing from scratch, with no block-based interfaces. The two Real Tools graduations (Section 5) cover terminal, IDE, environments, packages, Node, and git basics.

**Visual design:** one shared layout and type system with two modes: the type-in magazine aesthetic (cream paper, rainbow stripe, printed listings, keycap buttons) as light mode and the Commodore 64 blue screen (pixel headings, terminal body face, READY-prompt output) as dark mode. The phosphor terminal aesthetic ships as a third skin that unlocks on completing Real Tools I. Full token sets live in the design spec in the handoff package.

**Core features from Phase 1:** the knowledge map (searchable, concept-tagged navigation with permanent review mode for completed lessons), the Codex (the self-building, earned-only cheat sheet with source-lesson back-links), and the Challenge Arena (the parallel track of assignable, star-scored challenges with coach mode, per-chapter boss challenges, challenge codes, and parent-authored custom challenges).

Phase 1 begins on your approval.

**Pedagogy amendments (adopted from the curriculum review):** the stepper as the course's notional machine from Chapter 1. Errors as curriculum: translate-never-replace annotation with a fading scaffold and a Codex errors tab. Two feedback channels: tolerant diagnostic correctness checks and a style channel that hardens from Chapter 6 checkpoints. Parsons problems as rung 2 of a six-rung ladder. Retrieval warm-ups at lesson start. Misconception-keyed hints, with coach mode showing current code and error on stalled challenges. The hook lesson before Chapter 0 concepts, which are interleaved rather than front-loaded. SQL trimmed to one lesson with the full module deferred. Chapter 8 expanded and Chapter 9 teaching event-driven programming by name. Boss timers default off. Progressive interface disclosure. The debugging protocol and documentation reading as explicit lessons. The unscaffolded epilogue project as the graduation exam. A realistic 9 to 15 month arc designed to feel complete at Chapter 5. No inheritance anywhere. The weekly 15-minute coach ritual, documented in COACH.md.
