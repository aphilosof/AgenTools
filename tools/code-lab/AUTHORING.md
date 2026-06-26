# AUTHORING.md — lesson-building rules (non-negotiable)

These rules exist because lesson authoring went badly wrong once: thin content,
improvised sequencing, dumbed-down or robotic prose, omitted concepts, and the
user being asked to find the gaps. None of that again. PLAN.md §3/§4/§5 and
REVIEW.md are the curriculum authority; this file is how every lesson is built.

## Process — how a lesson gets made

1. **Research first, every topic.** Before writing, do the research pass defined
   in "Research: scope and sources" below. Derive the **complete** concept set
   from authoritative sources, write it down, then author against it. Never
   improvise the curriculum and never ship a subset.
2. **Completeness is the author's job, not the user's.** The user is fluent in
   Python but is not a curriculum designer. Do NOT ask him what is missing or to
   validate coverage. Enumerate the full scope yourself from the research.
3. **Verify every technical claim against real Python before writing it.** The
   harness runs code; prose precision is on the author. Name a concept and its
   Python type separately (an *integer* is a whole number; its Python *type* is
   `int`). Cover the accurate full picture, not a convenient simplification
   (e.g. operators are type-dependent; mixing types has several behaviours;
   `str * int` is valid repetition).
4. **Follow PLAN.md §4 order and §3 loop.** HTTLACS ordering for fundamentals
   (values & types before variables/strings; `input()` after types).
5. **Harness-gate.** Every lesson passes `npm test` — schema, reading level,
   each solution executed and graded — before it is called done.
6. **Show finished content, not scaffolding.** No private notation (`⟦⟧`, "Page
   4/13 — concept ·", block-model headers) in anything the user reads. Clean
   lessons only.
7. **Stop and say so when stuck** — don't churn variations hoping one lands.

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

## The bar
The reference lesson is `lessons/exemplar-w1-values-and-types.md`. New lessons
match its depth, structure, numbering, voice, and exercise style.
