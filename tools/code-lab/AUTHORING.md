# AUTHORING.md — lesson-building rules (non-negotiable)

These rules exist because lesson authoring went badly wrong once: thin content,
improvised sequencing, dumbed-down or robotic prose, omitted concepts, and the
user being asked to find the gaps. None of that again. PLAN.md §3/§4/§5 and
REVIEW.md are the curriculum authority; this file is how every lesson is built.

## Process — how a chapter and its lessons get made

### Step 0 (MANDATORY): 5-reviewer curriculum audit before any prose

Every chapter — without exception — begins with a ground-up curriculum audit
before a single lesson is written. The audit must:

1. Run 5 parallel agents, each playing a named curriculum expert (Downey,
   Resnick, Severance, Guzdial, Ko). Each agent derives the chapter's concept
   inventory **from first principles** — not from the existing plan — using the
   authoritative sources below. They then compare their inventory against the
   proposed plan and report: gaps (missing concepts), removals (unnecessary
   topics), sequencing issues, and rung-ladder fit.
2. A synthesis agent adjudicates across all five reports and produces a final
   recommended lesson table with per-lesson concept inventories.
3. That table is presented to the user for approval **before any prose is
   written**. No exceptions. Writing prose before the structure is approved is
   the failure mode that produced thin, incomplete content in earlier sessions.
4. The approved lesson table is recorded in `CURRICULUM.md` and `NEXT.md`.

The audit agents must start from scratch — they must not simply "review" the
existing plan and shuffle it. They derive the chapter content independently and
then surface what the plan gets wrong or misses.

### Step 1: Author each lesson

1. **Research first, every topic.** Before writing, do the research pass defined
   in "Research: scope and sources" below. Derive the **complete** concept set
   from authoritative sources, write it down, then author against it. Never
   improvise the curriculum and never ship a subset.
2. **Completeness is the author's job, not the user's.** The user is fluent in
   Python but is not a curriculum designer. Do NOT ask him what is missing or to
   validate coverage. Enumerate the full scope yourself from the research.
3. **Apply the depth standard.** Every text block must meet the five-level
   requirement in "Depth, context, and comparison" below: comparison with
   alternatives, Python design rationale, named CS principles, anti-patterns with
   failure modes, and mental models. Thin prose that only describes syntax is not
   acceptable. The c2s8 (try/except) lesson is the reference for what "depth"
   looks like.
4. **Verify every technical claim against real Python before writing it.** The
   harness runs code; prose precision is on the author. Name a concept and its
   Python type separately (an *integer* is a whole number; its Python *type* is
   `int`). Cover the accurate full picture, not a convenient simplification
   (e.g. operators are type-dependent; mixing types has several behaviours;
   `str * int` is valid repetition).
5. **Follow PLAN.md §4 order and §3 loop.** HTTLACS ordering for fundamentals
   (values & types before variables/strings; `input()` after types).
6. **Harness-gate.** Every lesson passes `npm test` — schema, reading level,
   each solution executed and graded — before it is called done.
7. **Show finished content, not scaffolding.** No private notation (`⟦⟧`, "Page
   4/13 — concept ·", block-model headers) in anything the user reads. Clean
   lessons only.
8. **Stop and say so when stuck** — don't churn variations hoping one lands.

## Research: scope and sources (so nothing is lost)

Omissions and invented "facts" are the failure mode these rules exist to kill.
Every lesson's content is built from a recorded, sourced scope — not memory.

### Sources — ranked, and what each is for
1. **Correctness / behaviour — the ground truth.** The official Python
   documentation (`docs.python.org`: tutorial + language and library reference)
   and *running real Python*. Every technical claim is verified here **before**
   it is written. Never assert Python behaviour from memory.
2. **Canonical treatment + voice.** *Think Python* (Allen Downey,
   `greenteapress.com/thinkpython2`) and *How to Think Like a Computer
   Scientist* (`openbookproject.net/thinkcs/python`) — the tradition PLAN.md
   names. These define how a topic is taught and the prose voice.
3. **Scope cross-check — so omissions surface.** At least one further respected
   source per topic: *Python for Everybody* (Severance, `py4e.com`), *Automate
   the Boring Stuff* (Sweigart), and an age-level scope frame (CSTA K-12 CS
   standards / the common AP-CSP Python subset) to confirm nothing expected at
   this level is missing.

Rules on sources: cross-check scope across **at least two** sources; **cite the
sources** used for each lesson's scope; and if a claim is neither in a source
nor verifiable by running Python, it does not go in. No invented facts, ever.

### Scope — the completeness method
Before writing a lesson, produce and **record** a **concept inventory** for the
topic. It must list, drawn from the sources above:
- every concept and sub-concept;
- every relevant operator/behaviour, including type-dependent and edge-case
  behaviour (e.g. `str * int` repetition, `int + float` promotion, `/` vs `//`);
- the syntax/conversions involved and the *why* behind each;
- the common **misconceptions** for the concept (these key the hint ladders);
- the **error classes** the concept can raise (these feed the Codex errors tab).

Then:
- **Record it durably and cite its sources** — in the lesson data and/or
  `CURRICULUM.md` — so coverage is auditable and survives across sessions.
  Research done only in-head and forgotten is the thing we are preventing.
- **Map every inventory item to where it is taught** (this lesson or a named
  adjacent lesson), giving cross-lesson coverage and the dependency order. An
  item no lesson covers is a gap to fix, not to drop.
- Nothing at this level is "too obvious to include." If the sources teach it,
  it is in scope.
- A lesson is **not done** until every inventory item is either taught in it or
  explicitly deferred to a named lesson. The harness should enforce this once
  scope records exist (build task).

## Content block formatting rules (non-negotiable)

The `md` field in a `text` block supports **only inline markdown**. The engine renders nothing else. Violating these rules produces raw literal characters in the output.

- **Allowed:** `` `inline code` ``, `**bold**`, `[[term]]` glossary links.
- **Never use `##` or any `#`-prefix heading** inside an `md` string. Use `**Bold lead sentence.**` instead — this is how c1.js and c2.js structure every section label.
- **Never use ` ``` ` fenced code blocks** inside an `md` string. Any multi-line code example must be a separate `{ type: "example", note: "...", code: "..." }` block in the `content` array. Short 1–2 line illustrative snippets (not runnable) may stay as inline `` `code` `` within the prose.

c1.js and c2.js are the canonical reference for correct formatting. When in doubt, look there.

## Lesson data reference — formats every chapter must follow

These conventions are extracted from c1–c3 and are non-negotiable. They are not
in the schema (schema validates values, not these structural norms) so they must
be documented here.

### Lesson object schema (required fields)

Every lesson pushed to `window.CODELAB.lessons` must have all of these:

```
id:            "cNsM"        — chapter N, section M (e.g. "c4s2")
chapter:       N             — integer
strand:        "core"|"numbers"|"words"|"plot"|"sound"
lang:          "py"          — always "py" for Python chapters
timeBudgetMin: N             — integer, 12–25 minutes; complex topics trend toward 20–25
title:         "Short title" — 2–5 words, human-readable
glossary:      { ... }       — see Glossary format below
content:       [ ... ]       — see Content block types below
codex:         { ... }       — see Codex format below
```

**Strand semantics:** `"core"` = foundational concepts (control flow, functions,
types); `"numbers"` = arithmetic/numeric strand; `"words"` = string/text strand;
`"plot"` = graphics strand; `"sound"` = music strand. Every lesson belongs to
exactly one strand. Most chapter lessons are `"core"`; strand-specific lessons
follow the five-strands arc.

### Content block types

Four block types exist. Use only these; do not invent new types.

- `{ type: "text", md: "..." }` — prose explanation. md supports inline markdown
  only (see formatting rules above). Bold-lead opens every section: the pattern
  is `**Topic or question.**` flowing directly into the first sentence on the
  same paragraph — no blank line between the bold and the prose that follows.

- `{ type: "example", note: "...", code: "..." }` — runnable demonstration.
  `note` describes what to observe (1 sentence). `code` is the full runnable
  snippet. Anti-pattern examples use `note: "Anti-pattern: ..."` or
  `note: "Bug: ..."` — this label is the convention; always prefix the note
  with one of these two markers so students know it is intentionally wrong.

- `{ type: "exercise", rung: N, prompt: "...", starter: "...", check: {...},
  hints: [...], solution: "..." }` — see Rung ladder below.

- `{ type: "parsons", ... }` — drag-and-drop line arrangement; used sparingly
  (typically rung 2). Check type is `"parsons"` with `lines` (correct order)
  and `distractors` (decoy lines).

### Exercise types and difficulty

Six exercise types exist, ordered from easiest to hardest. Use them by name — never call them "rung N" anywhere in code, prose, prompts, commits, or this document.

| Type | Description | `starter` field | `rung` value (schema only) |
|------|-------------|-----------------|---------------------------|
| Predict | Read code, predict exact output before running | Full code given | 1 |
| Arrange | Parsons — drag lines into correct order | Lines provided | 2 |
| Modify | Change one or two specific things in working code | Full code given | 3 |
| Fix | Find and repair a deliberate bug (syntax, logic, type) | Broken code given | 4 |
| Complete | Fill in missing lines (`pass` or blanks) | Partial code given | 5 |
| Write | Write the full program from scratch | `starter: ""` | 6 |

The `rung:` field exists only in the lesson data schema as a sort key. It is an implementation detail — never surface it to the student, never use the word "rung" anywhere the student or author reads.

**Exercises are not a one-per-type quota.** A single example may have two Predict exercises (one simple trace, one harder), two Fix exercises (different bugs), two Complete exercises, and two Write exercises. The type names describe *what the student does*, not how many of each are allowed. Use as many exercises as the concept needs, particularly for important concepts where mastery requires varied practice.

**Exercise count must grow with chapter number.** As chapters advance, concepts are deeper and students need more practice to consolidate them. The expected minimums:
- Chapter 1 lessons: 3–5 exercises total
- Chapter 2 lessons: 4–6 exercises total
- Chapter 3 lessons: 5–7 exercises total
- Chapter 4 lessons: 6–9 exercises total
- Capstone lessons (c_s9 / c_s10): 7–12 exercises total

Exceeding these minimums is encouraged whenever a concept has multiple worth-practising facets. Falling below them is a deficiency.

**Within each example section**, exercises go from easier types to harder types (Predict or Arrange first, Write or Complete last). Across the full lesson, the difficulty arc also ascends — the first exercise in the lesson cannot be a Write if easier types haven't appeared yet.

Hints: every exercise has 2–4 hints. Each hint targets one documented misconception. Progression: hint 1 = conceptual nudge (no code); hint 2 = closer to the fix; hint 3 = near-exact guidance. Never hand over the finished line in a hint — guide the student's reasoning instead.

### Glossary format

Located at the top of the lesson object, before `content`. Flat key-value object:

```js
glossary: {
  "term": "One or two precise sentences. No code formatting. Concrete and specific.",
  "term2": "...",
},
```

Definitions are complete sentences, plain language, no markdown. They feed the
click-to-expand Codex glossary. Every `[[term]]` used in `md` strings must have
a corresponding glossary entry in the same lesson (or an earlier lesson's
glossary that already registered the term).

### Codex entry format

Located at the very end of the lesson object, after `content`. Always present.

```js
codex: {
  topic:   "short phrase",       // 2–4 words naming the concept
  pattern: "compact code...",    // key syntax shown as runnable snippet(s)
  note:    "1–2 sentences.",     // the why + the most common pitfall
},
```

The `note` is not a summary — it names one design choice Python made and the
failure mode students will hit first. Keep it to 1–2 sentences.

## The lesson standard — what every lesson is

- **Paged, numbered sections.** A lesson is a sequence of pages shown one at a
  time. **Each section is one page, numbered** ("1. Warm-up", "2. …"). One idea
  per page. `Next` advances; exercise pages unlock `Next` only when the code
  passes.
- **The full loop (PLAN §3):** warm-up retrieval (recall from earlier chapters) →
  concept pages → runnable worked examples to tinker with → predict-the-output /
  predict-the-variable-table using the stepper → practice climbing the rung
  ladder across the five strands → recap → Codex entry. Checkpoint every 4–6
  lessons.
- **Voice:** modelled on *Think Python* / HTTLACS — flowing complete sentences,
  precise definitions, concrete examples woven in, the small "why" that makes a
  term stick. Not chatty/story, not robotic/jargon, not choppy.
- **Reading level: grade 7–9.** He is a strong reader. Never dumb down; the
  reading-level check is a ceiling at his level, not a target to sink below.
- **"Your turn" = a clear prompt only.** State exactly what the program must do
  (and its expected output). Give **no template, no starter that is the answer,
  and no solution text** — the student writes it from scratch (write rung) or
  makes the stated change (fix/modify rung). Hints are a **separate, on-demand
  ladder of genuine nudges** keyed to the documented misconception for that
  exercise — they guide thinking, they never hand over the finished line.
- **Terms:** define key terms precisely; mark them for click-to-expand; they
  feed the Codex glossary.
- **Errors as curriculum:** provoke and read real errors on purpose; every error
  class met is registered for the Codex errors tab; annotation fades per §3.
- **Two feedback channels:** tolerant diagnostic correctness checks; the style
  channel from Chapter 5. Concept tags + a Codex entry on every lesson.

## Depth, context, and comparison — MANDATORY for every concept

This is the standard that must hold for every text block in every lesson. Thin prose that only describes syntax is not acceptable. Every concept must be taught at three levels:

### 1. The comparison
Every non-trivial concept has at least one alternative approach. That alternative must be named, shown, and its failure mode demonstrated — not just mentioned.

- **`try/except` vs `if` check?** Show `.isdigit()` failing on `-5` and `3.14`. Explain why the only reliable test is the attempt.
- **`elif` vs nested `if/else`?** Show the indentation explosion of nesting. State the flat-is-better rule.
- **`for` vs `while`?** State the decision rule: use `for` when count is known in advance; use `while` when the stopping condition depends on what happens at runtime.
- **`+` vs comma in `print`?** Show what each does with types — `+` requires strings, comma accepts anything.

If you are about to write a text block that explains a construct without comparing it to the obvious alternative, you have left out the most important sentence.

### 2. The why — Python's design choices
Python made deliberate decisions about syntax and behaviour. Students encounter them and wonder "why is it this way?" Those questions must be answered, not ignored.

- **Why indentation, not braces?** Because Python's designers knew code is always indented for readability — making indentation mandatory means the visual and logical structure always agree.
- **Why does `/` always give a float?** Python 2 did integer division silently; it caused constant bugs. Python 3 made the types explicit.
- **Why `True` and `False` are capitalised?** Case-sensitivity; `true` would be just another variable name.
- **Why does `input()` always return a string?** The program receives characters; interpreting them is the programmer's job, not Python's. This is a system boundary.
- **Why float imprecision?** Binary fractions: the same way 1/3 is `0.333...` in decimal, 0.1 is a repeating fraction in base 2. Not a Python bug — a hardware fact.

If you write "this is how Python works" without explaining why Python chose that design, you have left out the why.

### 3. CS principles — name them
When a lesson introduces a concept that connects to a named CS principle or best practice, name it explicitly:

- **EAFP** (Easier to Ask Forgiveness than Permission) — `try/except` over pre-checking.
- **Loop invariants** — state what is true at the start of every iteration before writing the loop.
- **Off-by-one errors** — name this as one of the most common bugs in all of programming, explain both boundary cases.
- **Immutability** — string methods return new strings; the original does not change.
- **System boundaries** — data from outside the program (keyboard, files, network) is always raw text that must be interpreted deliberately.
- **Flat is better than nested** — `elif` chains vs nesting. Named as a Python design principle.
- **Accumulator pattern** — initialise before, update inside, read after. Named and Codexed.
- **Short-circuit evaluation** — not just a speed trick; it prevents crashes (`x != 0 and 10/x > 2`).

### 4. Anti-patterns — show failure, not just success
For every construct that has a common misuse, show the wrong version and explain concretely what goes wrong:

- Bare `except:` — show that it catches bugs silently.
- Variables not initialised before a loop — show the `NameError` or stale value.
- `=` where `==` is needed — show the `SyntaxError` and explain why Python refuses.
- Forgetting to convert `input()` — show the `TypeError` and trace the type through.
- `if/if` when `if/elif` was needed — show both conditions firing.

### 5. Mental models, not just syntax rules
For every construct, build the mental model alongside the syntax:

- Variables: sticky notes attached to values, not boxes that contain values.
- Assignment: right side evaluated first, then the name is redirected.
- Loop: the variable table (stepper) changes on every iteration — tie prose to what the stepper shows.
- Exception: Python creates an object, stops the current block, and searches for a matching handler.
- Function call: the parentheses are the on-switch; the name without parentheses is just a reference.

## Exercise and example quality standards — MANDATORY FOR ALL LESSONS

These rules apply equally when writing new lessons and when auditing or editing existing ones. Violating any of them is a bug that must be fixed before the lesson is considered done.

### 1. Exercises sit immediately after their relevant example

An exercise must appear in the `content` array directly after the example it is based on. **Never group exercises at the end of a lesson.** If a lesson has three distinct examples A, B, and C with exercises for each, the structure must be:

```
example A → exercises on A → example B → exercises on B → example C → exercises on C
```

Not: `A → B → C → exercises on A, B, C`.

Reference tables and text blocks may appear between examples and their exercises only if they directly support those exercises (e.g., a chord reference table before a music exercise).

**How to audit:** Run the block-type sequence for each lesson (`node -e "...l.content.map(b=>b.type[0])..."`). Any lesson where all `X` (exercise) blocks come after all `E` (example) blocks is broken and must be restructured.

### 2. Every exercise must use exactly the code shown in the preceding example

The function names, variable names, data structures, and operations in an exercise must match what was explicitly demonstrated in the example immediately above it. A student who just read example N and then looks at exercise N+1 should immediately recognise the pattern — not encounter a new function they haven't seen.

Concretely:
- If the example shows `letter_freq(text)`, the exercises that follow are on `letter_freq` — not on a new function `word_count` that wasn't in the example.
- If the example shows `draw_spiral(steps, start, angle)`, the exercises use `draw_spiral` with those same parameters — not `draw_snowflake` or `draw_star`.
- If a Predict exercise traces code, that code must be the example or a minimal simplification of it.

**How to audit:** Read each exercise prompt and check: does this exercise use the same function and data from the example block immediately above it in `content[]`? If not, the exercise is in the wrong place or has the wrong content.

### 3. Real-world, interesting data — no toy data ever

Every example and exercise must use data that is real, named, and interesting. The goal is that a student thinks "oh, that's actually about something" — not "what is this nonsense".

**Required:**
- Music: named real songs (Twinkle Twinkle, Ode to Joy, Smoke on the Water, We Will Rock You, Bohemian Rhapsody). Use their actual MIDI intervals or lyrics.
- Text analysis: real song lyrics, famous lines, or actual English sentences long enough to produce meaningful results.
- Science: real data (planet moon counts, letter frequency in English, actual measurements).
- Numbers: data that tells a story (sports scores, population figures, dice-roll simulations that converge to expected values).

**Forbidden:**
- `"the cat sat on the mat"` or any invented repetitive text with no intrinsic meaning.
- Unnamed number arrays like `[1, 2, 3, 4, 5]` or `[10, 20, 30]` used as data.
- Placeholder strings like `"foo"`, `"bar"`, `"hello world"` as domain data.
- Fake names and fake scores (Alice=88, Bob=72) when real-world data is available and equally simple.
- Generic music notation (`play(60); play(62)`) with no named melody — always name the song.

**How to audit:** Read each example and exercise. If you cannot answer "what is this data about in the real world?", replace it.

### 4. Difficulty progression within every section

For each distinct example in a lesson, its exercises should start easier and end harder — Predict or Arrange first, Write or Complete last. Across a full lesson, the overall difficulty arc must also ascend: the first exercise in the lesson cannot be a Write if no easier exercises have appeared yet.

Every section (example + its exercises) should cover at least two difficulty levels. A section with only one Write exercise leaves the student without scaffolded practice. A section with only a Predict exercise doesn't develop the skill. Multiple exercises of the same type are fine and encouraged when a concept has more than one important facet to practise.

### 5. Every distinct example must have at least one exercise

An example with no exercise is a concept with no practice. If an example in a lesson has no exercises beneath it, either add one or merge it into an adjacent example.

The only exceptions are anti-pattern examples (`note: "Anti-pattern: ..."`) which exist to contrast good code, not to be practised directly.

### 6. Exercises must be diverse — no single-topic repetition

Within a lesson, exercises must cover different aspects of the concept, not repeat the same operation with different data. If every exercise in a lesson reduces to "count words in some text and call bar()", the student has practised one thing six times. That is not coverage — it is repetition.

Each exercise must differ from the others in at least one meaningful way:
- Different operation (predict vs. fix vs. write from scratch)
- Different angle on the concept (e.g. frequency counting → sorting → charting → edge cases)
- Different data type or domain (letters vs. words vs. numbers)
- Different failure mode being targeted (KeyError vs. sort order vs. wrong variable name)

**Anti-pattern to avoid:** A lesson with 5 Modify exercises that all change one value in the same function. This is not a progression — it is the same exercise five times.

**How to audit:** Read all the exercises in a lesson. Can you describe what makes each one distinct from the others? If the answer is only "different data passed to the same function", add exercises that approach the concept differently.

### 7. Later lessons must build on earlier chapters

From chapter 2 onwards, exercises are not isolated to the current chapter's concepts. They should require students to use skills from earlier chapters as the scaffolding for new ones. This is cumulative learning.

- **Chapter 2 exercises:** Loops are the new concept, but the loop body should use variables, expressions, and print() from chapter 1 — not just a single `play()` call.
- **Chapter 3 exercises:** Functions are the new concept, but the function body should use loops (chapter 2) and the function should be called with expressions (chapter 1).
- **Chapter 4 exercises:** Collections are the new concept, but exercises should naturally combine: list comprehensions use loops (ch2), functions operate on collections (ch3), conditionals filter data (ch2).
- **Capstone lessons (c_s9, c_s10):** These are explicitly integration lessons. Every capstone exercise must combine concepts from at least two earlier chapters. An exercise in c4s10 that only uses chapter 4 concepts and no loops, functions, or conditionals has missed the point of a capstone entirely. The capstone is where everything clicks together.

When writing a capstone exercise, explicitly ask: which earlier concepts is this student practising alongside the current chapter's ideas? If the answer is "none", the exercise is too narrow.

### 8. Complete topic coverage — exercises must cover everything taught

The lesson's text introduces concepts. The exercises must collectively test all of those concepts. A concept introduced in a text block but never exercised is a gap.

After writing or reviewing a lesson, list every distinct concept the text introduces. Map each one to at least one exercise. Any concept with no exercise is missing coverage and must have one added.

This check is also the job of the reviewer agent (Step 0 in the process). But the author must not leave obvious gaps hoping the reviewer will catch them.

### Pre-commit audit checklist

Before marking any lesson (new or edited) as done, run through this list:

- [ ] Block sequence: every exercise follows its relevant example immediately — no EEEXXX pattern.
- [ ] Each exercise: prompt references a function/pattern shown in the example directly above it.
- [ ] Each example and exercise: uses named real-world data, not toy strings or anonymous arrays.
- [ ] Difficulty arc: exercise types within each section go easier-to-harder; lesson-wide arc also ascends.
- [ ] No isolated examples: every non-anti-pattern example has at least one exercise beneath it.
- [ ] Exercise count meets chapter minimum (Ch1: 3–5, Ch2: 4–6, Ch3: 5–7, Ch4: 6–9, capstone: 7–12). The real test is coverage, not the number — but falling below minimum is a signal of under-coverage.
- [ ] Diversity: no two exercises in the lesson do the same operation on the same concept. Each one is distinct in what it asks the student to do.
- [ ] Build-up: exercises from chapter 2 onwards use concepts from earlier chapters as scaffolding. Capstone exercises combine at least two chapters' concepts explicitly.
- [ ] Coverage: every concept introduced in the lesson's text blocks has at least one exercise that tests it.
- [ ] Tests green: `npm test` passes with all solutions executing and all invariants passing.

## The bar
The reference lesson is `lessons/exemplar-w1-values-and-types.md`. New lessons
match its depth, structure, numbering, voice, and exercise style.
