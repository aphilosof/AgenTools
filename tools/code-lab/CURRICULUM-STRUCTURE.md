# CURRICULUM-STRUCTURE.md

The **fixed structure** every chapter, lesson, and subsection follows. This is
locked *before* any chapter/lesson content is written; the concept and topic
plan for each chapter is written **to** this structure, never around it.

Sources behind the design: PRIMM (predict→run→investigate→modify→make),
Use-Modify-Create, worked-examples + Parsons (cognitive load), notional machine,
spiral curriculum (Bruner), CSTA K-12 / Think Python / HTTLACS scope.

## Terms

**Course → Chapter → Lesson → Subsection.** ("Chapter" replaces the old "Chapter".)

- **Chapter** — a themed unit (Ch.0 … Ch.12 + Real-Tools interludes + epilogue).
- **Lesson** — one topic, 15–25 minutes.
- **Subsection** — one concept, on one screen. The progress circles navigate
  subsections; the bottom nav advances them.

---

## A. SUBSECTION — the atom (one concept, one screen)

Every subsection teaches exactly **one** concept and is built to this shape:

1. **Concept** — one idea, 2–4 sentences, `[[term]]` links + optional "more info".
2. **Worked examples — 2–3**, read-only and runnable, ordered **easy → harder**:
   the first shows the idea plainly; later ones add a wrinkle and **reuse a
   previously-learned concept**.
3. **Exercises — 2–3**, increasing difficulty via **scaffolding fade**:
   - **easy** — boilerplate pre-written (imports, a function header, variable
     setup); the learner writes only the core logic;
   - **medium** — a stub / `# TODO`;
   - **hard** — blank editor; the learner writes the whole thing from scratch.
   At least one **debugging / spot-the-error / fix-the-code** exercise appears
   wherever the concept can plausibly break.

*Metadata:* concept tag · rung(s) · misconception(s) · error class(es).

---

## B. LESSON — one topic

`Warm-up` → `Subsection × 3–6` → `Recap + Codex`

- **Warm-up** — a quick recall question from an earlier lesson (spiral / retrieval).
- **Subsections** — each teaches one concept (template A).
- **Recap + Codex** — the summary and the earned Codex entry.

Rules for a lesson:
- **Difficulty ramps**: each subsection is harder than the last, and **each
  lesson is harder than the previous lesson in the chapter**.
- **Weaving**: the teaching, examples, and exercises **reuse previously-learned
  concepts**, not just the new one.

*Metadata:* id · title · strand · rung-range · concepts taught · prerequisite
concepts · time budget.

---

## C. CHAPTER — the consistent six-part arc

Every chapter follows the same five-role arc and ends in assessment + a gate:

1. **Hook lesson** — run / modify something real; motivates and lands one idea.
2. **Concept lessons** — the chapter's concept-clusters in dependency order;
   progressively more complex, each building on the last; rungs ramp.
3. **Strand-application lesson(s)** — apply the new concepts on a real task from
   the five strands (numbers · words · data · plot · sound).
4. **Chapter Challenge** — one page of **6–10 exercises covering the whole
   chapter**, ordered easy → hard, mixing the chapter's concepts and strands,
   scaffolding fading to a blank editor.
5. **Chapter Quiz (the gate)** — a short auto-checked quiz (predict-the-output +
   a couple of short writes). **The next chapter stays locked until it passes.**
6. **Chapter recap** — Codex consolidation + a retrieval set for later spiral.

*Metadata:* id · theme · concepts owned · prerequisite concepts recalled ·
rung-range · strands · checkpoint.

---

## D. CONCEPT SPINE — comprehensive coverage

Every concept the course must teach. Each is **owned** by one chapter (first
taught there) and **spiraled** in later chapters at greater depth. This is the
checklist that guarantees nothing is dropped.

- **I/O & comments** — `print` (args, `sep`, `end`), `input` → str, comments
- **Values & types** — int, float, str, bool, None; `type()`; conversion; truthiness
- **Operators** — arithmetic (`+ - * / // % **`), precedence, comparison, boolean
  (`and/or/not`), operator-by-type
- **Variables & state** — assignment, reassignment, naming, scope (local vs outer;
  `global` is **excluded** — share state via parameters/return, then objects)
- **Control flow** — `if/elif/else`, `while`, `for`, `range`, `break`/`continue`, nesting
- **Functions** — `def`, params/args, `return`, default args, scope, docstrings; decomposition
- **Common built-ins** — `len`, `round` (Ch.1); `sum`, `enumerate`, `zip`, `sorted` (Ch.4)
- **Strings** — concat, f-strings (incl. `:.2f` money formatting), indexing, slicing,
  `split`/`join`, `.lower()`/`.upper()`/`.strip()`, immutability — all **Ch.1**;
  deeper data-wrangling methods `.replace()`/`.find()`/`.startswith()`/`.endswith()` (Ch.7)
- **Excluded** — `global`; loop-`else` (`for/while … else`); inheritance (anywhere)
- **Collections** — lists (index/slice/mutate/methods/iterate), tuples, dicts, sets,
  nesting; comprehensions (**Ch.8** — they need prior loop + list/dict fluency)
- **Errors & debugging** — reading tracebacks; classes: NameError, TypeError,
  SyntaxError, IndentationError, IndexError, KeyError, ValueError,
  ZeroDivisionError, AttributeError; the debugging protocol
- **Modules & data** — `import`, std lib, the API idea, reading docs, writing a
  module; files, JSON, one SQLite taste; `random`
- **OOP** — class, `__init__`, attributes, methods, instances, `self` (no inheritance)
- **Code design** — decomposition, naming, DRY, function length, magic numbers
- **CT foundations (Ch.0)** — sequence, selection, iteration, decomposition,
  debugging — as ideas, unplugged. (**Abstraction** is *practiced unnamed* in Ch.0,
  **named** in Ch.3 (functions hide detail), and deepened in Ch.5.)
- **JavaScript** — `let`/`const`, `===`, types, loops, functions, arrays, objects,
  classes; DOM, events, callbacks, canvas
- **TypeScript** — types, annotations, the checker
- **Real tools** — terminal, editor, venv, `pip`, Node, `npm`, git

---

## E. RULES — apply everywhere

- **Pedagogy leads; the spine is guidance, not walls.** The concept spine governs
  where a concept is *formally taught and assessed*, NOT where it may first
  *appear*. A concept may be shown working informally earlier when it builds a
  proper foundation — e.g. `print("a" + " " + "b")` joins text in Ch.1 without
  lecturing the `str` type; text-in-quotes is a string from lesson 1. Build
  foundations first and introduce by need, not by rigid boundary. Every lesson
  must be **rich enough for its time budget and a strong reader** — a thin,
  boundary-policed lesson is a defect. Validate against pedagogy, not just
  plan-adherence.
- **Spiral weaving** — every lesson reuses prior concepts in its teaching,
  examples, and exercises; every warm-up recalls an earlier lesson.
- **Monotonic difficulty** — examples ramp within a subsection → subsections ramp
  within a lesson → lessons ramp within a chapter → chapters ramp across the
  course. Nothing repeats flat.
- **Scaffolding fade** — easy exercises give boilerplate; hard ones are written
  from a blank editor.
- **Write-from-scratch milestone** — by **Chapter 3 (Functions)**, writing whole
  programs from a blank editor is the default expectation.
- **Debugging woven in** — spot-the-error / fix-the-code exercises recur from
  Chapter 2 onward; an explicit debugging-protocol lesson lands in Chapter 5;
  every error class met is registered to the Codex.
- **Rung ladder** — predict → arrange → modify → fix → complete → write, ramping
  per the above.
- **Languages** — Python → JavaScript → TypeScript. The five strands interleave.
- **Voice** — Think Python / HTTLACS register; reading level grade 7–9.
- **Verification** — every example runs clean; every solution passes its own
  check; reading level + time budget enforced by `npm test`.
- **Gating** — a subsection's exercises must pass to advance; the **Chapter Quiz**
  must pass to unlock the next chapter.

---

## Engine work this structure implies (beyond `structure-baseline`)

Flagged so it isn't lost; does not change the plan:
- multiple examples + multiple exercises per subsection;
- the Chapter Challenge page (a multi-exercise set);
- the Chapter Quiz gate (auto-checked, unlocks the next chapter);
- scaffolding-fade starter handling per exercise.

---

## Next step (not yet done)

Map the **concept spine (D)** onto the **chapter arc (C)** — assign every concept
to the chapter that owns it and the lessons within — producing the full
chapter-by-chapter scope. Only then is per-lesson content written.
