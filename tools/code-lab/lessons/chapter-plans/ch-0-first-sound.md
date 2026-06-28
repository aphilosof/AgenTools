# Chapter 0 — First Sound, Then Think

## Overview

Chapter 0 is the course's front door. It runs before any Python syntax is taught
and before the stepper appears. Its job is threefold: (1) prove to the learner
in the first two minutes that code makes things happen — specifically, sound; (2)
introduce the four computational-thinking foundations (sequence, selection,
iteration, decomposition) as everyday ideas using unplugged analogies and Parsons
tasks, not syntax; and (3) plant debugging-as-a-mindset before debugging becomes
a technical skill.

By the end of Chapter 0 the learner can:
- Run and modify a short `play()`/`sleep()` program and hear the result.
- Explain in their own words: a sequence is a list of steps in order; a decision
  branches on a condition; a loop repeats without rewriting; a big problem can be
  broken into smaller problems.
- Recognise that a bug is a wrong instruction, not a crash, and that finding it
  means reading carefully.

The chapter's through-line is a single running metaphor: **you are writing
instructions for a very literal machine that does exactly what you say, nothing
more**. Every lesson returns to this framing.

Strands: **core** (CT ideas) and **sound** (the hook, the strand-application
lesson L0.6, and the chapter challenge).
Rungs: 1 (predict) and 2 (arrange/Parsons) only — no typing beyond trivial value
changes. Rung 3 (modify) first appears in L0.1 as a brief value-change preview
and returns in Challenge exercise 6 as the capstone stretch.

Recalls: none (this is the first chapter).

---

## Concepts owned (keywords)

- **sequence** — steps run one at a time, top to bottom, in order
- **selection** — a branch: do this *if* a condition holds, else do that
- **iteration** — repeat a block of steps (a loop)
- **decomposition** — breaking a large problem into smaller, manageable parts
- **abstraction** — *practiced unnamed* throughout Ch.0 (focusing on the steps
  that matter and ignoring irrelevant detail is implicit in every decomposition
  and Parsons task); the word itself is **not introduced here** — it is named in
  Ch.3 (functions hide detail) and deepened in Ch.5
- **algorithm** — a precise, complete, unambiguous sequence of instructions that
  solves a problem
- **bug / debugging** — a wrong instruction in an algorithm; finding and fixing it
- **precision** — every step in an algorithm must be exact enough that a very
  literal machine can follow it without guessing
- **`play()` / `sleep()`** — the two music-engine calls used in the hook lesson
  (not taught as Python syntax, treated as "words the machine knows")

---

## Concept map & dependencies

```
algorithm (L0.2)
    ├── sequence (L0.2) ──► Parsons / arrange (L0.3)
    │       └── the hook code is a sequence (L0.1 ← feeds back)
    ├── iteration (L0.4) ──► repeat block in Parsons
    └── selection (L0.4) ──► branch block in Parsons

decomposition (L0.3 + L0.5) ── cuts across all of the above

debugging-as-idea (L0.5) ── requires: algorithm + sequence + decomposition
```

Within the chapter each concept is a self-contained idea, so the dependency
order is linear: hook → algorithm/sequence → arrange → loop+decision → debug.
No Python keyword is introduced; terminology used throughout is plain English
with the CS term introduced alongside (e.g. "a loop — a set of steps you
repeat").

---

## Engine behaviour note (required for L0.1 rung-3 exercise)

The Ch.0 music editor must restrict rung-3 value changes to numeric values only
(UI constraint). If a student types a non-numeric value (e.g. `play(abc)` or
`ply(60)`), the engine must surface the raw Python error visibly — not crash
silently. Ch.0 does not teach error classes, but the first error a student sees
must be visible and legible. **Ch.1 owns the first formal error-class teaching.**

---

## Lessons

### L0.1 — Hook: First Sound *(hook · core + sound · rung 1)*

**Arc role:** open the course; prove code does something real; anchor the
chapter's literal-machine metaphor.

**Concepts:** `play()`, `sleep()`, sequence-as-a-list-of-steps (first exposure,
named but not formalised here).

**MIDI sidebar (required — appears after the first worked example):**
"Note 60 is middle C on a piano — the note right in the centre of the keyboard.
Each number up is one key higher; 64 is E, 67 is G. You do not need to know
music to use these numbers — think of them as dial positions. Higher number,
higher pitch."
A minimal keyboard graphic marks note 60. This sidebar appears once here and
is not repeated; it gives every subsequent pitch number a concrete reference
point.

**Parentheses note (required — one sentence, after the first worked example):**
"Notice the parentheses — they are how you pass a value to the command. In
Chapter 1 you will learn exactly what that pattern means and why it works."
(No further explanation here; this plants a transfer anchor without introducing
function-call vocabulary before its time.)

**Worked-example ideas (read-only, runnable):**
1. Three-line program: `play(60)`, `sleep(0.5)`, `play(64)` — student runs it
   and hears two notes. Caption: "The machine reads from top to bottom. Change a
   number, hear the difference."
2. Five notes of a melody — same two commands repeated. "Still a sequence. Still
   top to bottom."
3. Same melody with one `play(60)` changed to `play(67)` — "One change, one
   different note. Exact."

**Exercise ideas (scaffolding fade, rungs 1, 3):**
1. **(rung 1 — predict):** Four-line program shown; student predicts which note
   plays third. No typing — click the answer. Then run to check.
2. **(rung 1 — predict):** Same program with one `sleep(0.5)` changed to
   `sleep(2.0)`. "Which gap will sound longer?" Predict, then run.
3. **(rung 3 — modify, single value):** Boilerplate is the melody; student
   changes exactly one pitch number to make it higher. Hear the result.
   *(This is the only value-change exercise in the chapter; it is the first
   rung-3 preview, returned in Challenge exercise 6.)*

**Misconceptions:**
- "The computer understands what I meant." — countered by the literal-machine
  framing.
- "Changing one number changes everything." — countered by hearing only one note
  change.

**Error classes:** none taught. See Engine behaviour note above for runtime
errors if the student types a malformed value in the rung-3 exercise.

**Recalls:** none.

**Recap + Codex:**
- *One-sentence summary:* "Code is a sequence of exact instructions — change one
  value and exactly one thing changes."
- *Codex entry earned:* **sequence** — "A list of steps the computer runs one at
  a time, top to bottom, in the order they are written."

---

### L0.2 — Algorithms Are Exact *(concept · core · rung 1)*

**Arc role:** formalise "algorithm" as a word and establish that ambiguity breaks
algorithms. Bridge from hook to the Parsons lessons.

**Warm-up (recall from L0.1):** "The three-line sound program ran top to bottom.
What would happen if the computer skipped step 2?" (Multiple choice: the same
two notes / only the first note / **the two notes play one after the other with
no pause between them** / silence only.)
Correct answer: the two notes play one after the other with no pause between
them — step 2 was the `sleep()` pause, so removing it means the notes run back
to back with no gap. *(The sequential model says one call follows another; it
does not say they overlap. "Both notes at the same time" is an engine-
implementation claim that contradicts the sequential model being taught and must
not appear as an option or answer.)*

**Concepts:** algorithm, sequence, precision/unambiguity.

**Worked-example ideas:**
1. *Unplugged:* "Make a peanut-butter sandwich" written as a casual human
   instruction vs. the same steps written for a very literal robot (open bag,
   remove two slices, place on board, open jar, …). Read both aloud — the human
   version skips steps the robot cannot infer.
2. *Sound analogy:* The three-line program from L0.1 re-read as an algorithm
   ("step 1: play note 60; step 2: wait half a beat; step 3: play note 64").
   Show that removing step 2 changes the result: the robot does not add a pause
   on its own.
3. *Counter-example:* An ambiguous instruction ("play something nice") and why
   a computer cannot obey it.

**Exercise ideas:**
1. **(rung 1 — predict):** Two sandwich algorithms shown; one has a step in the
   wrong order. Which algorithm produces an edible sandwich? Tap the correct one.
2. **(rung 1 — predict):** Three-step sound algorithm shown with one step
   missing. "What will happen when the machine runs this?" Multiple choice.
3. **(rung 1 — recognition):** A four-step robot instruction contains one
   deliberately vague step ("add some bread"). Three candidate rewrites are shown:
   one still vague, one appropriately precise, one absurdly over-specified.
   Student selects the rewrite that a literal machine can follow.
   *(Replaced from free-text generation, which is rung-4+ behaviour and provides
   no feedback if the student's rewrite is still vague.)*

**Misconceptions:**
- "A computer fills in the gaps." — core misconception this lesson targets.
- "More steps = worse algorithm." — address briefly; completeness matters more
  than brevity.

**Error classes:** none (no code).

**Recalls:** `play()`, `sleep()` as an algorithm (L0.1).

**Recap + Codex:**
- *One-sentence summary:* "An algorithm is a precise, complete, unambiguous
  sequence of steps — one vague or missing step breaks the whole thing."
- *Codex entries earned:* **algorithm** — "A precise, complete, unambiguous
  list of instructions that solves a problem."; **precision** — "Every step in
  an algorithm must be exact enough that a very literal machine can follow it
  without guessing."

---

### L0.3 — Guide the Robot *(concept · core · rung 2)*

**Arc role:** first hands-on task; use Parsons (arrange) to practice sequence and
introduce decomposition without syntax.

**Warm-up (recall from L0.2):** "Which of these is a sequence: (A) a repeated
block, (B) a list of steps in order, or (C) a branch that goes one of two ways?"
Correct answer: B.

**Concepts:** sequence (applied), decomposition (introduced here as "break it
into steps"), Parsons/arrange as a task type.

**"How this works" orientation panel (required — appears before the first Parsons
task):** One screen explaining what Parsons drag-and-drop is, what the robot
domain looks like, and what "one correct answer" means. The interface, the robot
domain, and the decomposition concept must not all land simultaneously on a
student who has never seen any of them.

**Worked-example ideas:**
1. *Parsons, fully worked:* robot walks a 3-step grid path; all blocks shown in
   correct order already. Student reads and sees that order matters — drag one
   block out of position and see the robot fail. Then restore. (Interactive
   demo, not an exercise.)
2. *Decomposition demo:* "Get from school to home" broken into: leave building →
   walk to bus stop → take bus → walk home. Then each sub-step decomposed one
   level further. Diagram, not code.
3. *Sound Parsons, worked:* four `play()`/`sleep()` blocks shown in correct
   melody order; student reads the sequence against what they hear.

**Exercise ideas (all rung 2 — arrange):**
1. **(easy Parsons):** Five robot-grid instruction blocks scrambled; student drags
   into the order that gets robot from A to B without hitting a wall. One correct
   answer. No decoys.
2. **(medium Parsons — 7 blocks, no decoys):** Same grid type, seven blocks
   scrambled, one correct answer. Student builds sequencing fluency before any
   decoy-exclusion demands are introduced.
   *(Decoy blocks are introduced only in L0.5 ex.2 after basic Parsons
   sequencing is established. Moving decoys to a student's second-ever Parsons
   task overloads working memory; Denny et al. (2008) shows distractors improve
   transfer only after basic sequencing is automatized.)*
3. **(sound Parsons):** Seven `play()`/`sleep()` blocks scrambled. Student
   arranges them to recreate a short melody they heard played once before
   the task. Auto-checked by running the arranged code and comparing to the
   target.

**Misconceptions:**
- "Any order that uses all the steps works." — grid tasks make the consequence
  of wrong order immediate and visual.
- "Decomposition means more work." — address: the point is manageability, not
  volume.

**Error classes:** none.

**Recalls:** sequence (L0.2), `play()`/`sleep()` (L0.1).

**Recap + Codex:**
- *One-sentence summary:* "Arranging steps in the right order and breaking big
  problems into small sub-problems are the two tools that make algorithms
  manageable."
- *Codex entries earned:* **decomposition** — "Breaking a large problem into
  smaller, manageable sub-problems, each of which can be solved on its own."

---

### L0.4 — Repeat and Decide *(concept · core · rung 2)*

**Arc role:** introduce iteration and selection as ideas using unplugged scenarios
and Parsons blocks that include a loop block and a branch block (purely
conceptual, no Python syntax).

**Warm-up (recall from L0.3 — forced-choice retrieval, not free-text reflection):**
"A friend wants to write one instruction: 'go home.' They break it into four
sub-steps instead. Which benefit does that give them?
(A) fewer steps total
(B) each sub-step is small enough to solve on its own
(C) the algorithm runs faster
(D) decomposition is only useful for big problems"
Correct answer: B. *(Replaced from open free-text. Free-text "why is decomposing
better?" allows the student to re-read recent prose rather than retrieve — a
textbook illusion-of-competence risk. Forced choice requires actual retrieval of
the concept.)*

**Concepts:** iteration (loop), selection (branch/if-else).

**Pseudocode-barrier note (required — one sentence at the end of the lesson):**
"The `repeat` syntax above is a teaching shorthand — it is not how Python writes
loops. In Chapter 2 you will see Python's real loop syntax, which does the same
job in a slightly different way." *(Prevents the pseudocode-barrier effect:
students who expect `repeat N times:` to work in Python have harder acquisition
of real loop syntax.)*

**Worked-example ideas:**
1. *Loop analogy:* a recipe step "stir until smooth" — that is a loop. Diagram:
   [check condition → if not smooth → stir → back to check]. Compare to writing
   "stir, stir, stir, stir…" 40 times.
2. *Selection analogy:* morning routine branch — "if it is raining, take umbrella;
   otherwise, leave umbrella." Flowchart with a diamond decision node.
3. *Sound loop, conceptual:* pseudocode block `repeat 4 times: play(60), sleep(0.5)`
   shown as a block diagram; student traces through what notes play and when.

**Exercise ideas:**
1. **(rung 2 — loop Parsons):** Robot must sweep a 4-column floor. Blocks include
   one `repeat 4 times` wrapper and the inner steps. Student nests the inner
   steps inside the repeat block. One correct solution.
2. **(rung 2 — branch Parsons):** Lunchbox packing: blocks include a diamond
   "is it a school day?" and two branches. Student arranges the branch correctly.
3. **(rung 1 — trace):** Pseudocode loop `repeat 3 times: play(60), play(64),
   sleep(0.5)`. "How many notes play in total?" Answer: 6. Student types the
   number. This is the only typed answer in Ch.0 to this point, and it is
   arithmetic, not code.

**Misconceptions:**
- "A loop must count numbers." — countered by the until-smooth recipe example.
- "A branch always has two outcomes." — note that "if raining, take umbrella"
  (no else) is valid; else is optional.
- Body-count error on the loop trace: tracing `repeat 3 times: play(60), play(64)`
  and guessing 3 notes rather than 6 — the student counts iterations instead of
  multiplying iterations by body size (3 × 2 = 6). Countered by asking students
  to trace step by step and tick each body execution.
  *(This is a body-count multiplication error, not an N+1 boundary error.
  Calling it "N+1" would plant the wrong mental model.)*

**Error classes:** none.

**Recalls:** sequence (L0.2), decomposition (L0.3).

**Recap + Codex:**
- *One-sentence summary:* "A loop repeats a block of steps without rewriting
  them, and a branch runs one of two different paths depending on a condition."
- *Codex entries earned:* **iteration** — "Repeating a block of steps without
  rewriting them; a counted loop repeats a fixed number of times."; **selection**
  — "A branch: the algorithm checks a condition and follows one path if it is
  true, and optionally a different path if it is false."

---

### L0.5 — The Sandwich Bug *(concept · core · rung 1–2)*

**Arc role:** introduce debugging as a mindset — reading carefully, comparing
intent to result, locating the wrong step — before any real error messages exist.

**Warm-up (recall from L0.4 — must match L0.4's two-play-per-body structure):**
"A loop says `repeat 4 times: play(60), play(64), sleep(0.5)`.
How many notes play in total?" (Answer: 8. Single-number input, auto-checked.
The body has two `play()` calls; 4 × 2 = 8. Using the same two-play structure
as L0.4 ex.3 prevents transfer interference — a student who carried over L0.4's
solution procedure with a two-play body will reach the correct answer. A one-play
body would create a body-count switch that causes near-transfer failure.)

**Concepts:** bug, debugging (as: read → compare intent to result → locate →
fix the instruction).

**Worked-example ideas:**
1. *Sandwich algorithm with a bug:* step 3 says "spread peanut butter on the
   outside of both slices." That is a bug — it does not match what a sandwich
   should be. Walk through: (a) what did the algorithm say? (b) what did we
   expect? (c) where is the mismatch? (d) fix it.
2. *Grid robot with a wrong turn:* robot ends at B, should end at C. Worked
   trace of the algorithm step by step until the wrong step is found.
3. *Sound example (pitch-outlier bug):* a five-note melody uses pitches
   `[60, 62, 80, 62, 60]`; `play(80)` is unmistakably out of range when every
   other note sits between 60 and 67 — no music-theory judgment required, just
   noticing the number that is far from the others. Student listens, hears the
   jarring high note, finds the outlier pitch in the list.
   *(A pitch-outlier bug here keeps the bug type distinct from the duration
   bugs that follow in L0.5 ex.3, L0.6, and Challenge ex.5. Varying bug type
   across the chapter trains the read→compare→locate→fix process, not just
   one pattern of outlier recognition.)*

**Exercise ideas:**
1. **(rung 1 — spot-the-bug):** Sandwich algorithm, five steps, one step
   logically wrong. Student taps the step that contains the bug.
2. **(rung 2 — fix Parsons, with one decoy):** Four-block robot algorithm with
   one block replaced by a wrong block. Student swaps the wrong block for the
   correct one from a bank of three candidates (one correct, two plausible
   decoys). *(Decoy-exclusion Parsons introduced here, not in L0.3 ex.2, after
   basic sequencing fluency is established.)*
3. **(rung 1 — sound, spot-the-bug — duration bug at position 3, different note
   sequence from the worked example):** Melody shown as a list of notes and sleep
   values; one `sleep()` is `sleep(5.0)` instead of `sleep(0.5)`. Student
   identifies which position (1–N) has the wrong sleep value, types the position
   number.
   *(Uses a duration bug at position 3 — distinct from the pitch-outlier bug in
   the L0.5 worked example — so the exercise requires application rather than
   reproduction. Position 3 here vs. position 4 in L0.6 ex.3 ensures no two
   duration exercises share the same position.)*

**Misconceptions:**
- "A bug means the computer made a mistake." — explicitly countered: the computer
  did exactly what the algorithm said; the algorithm is wrong.
- "Debugging means rewriting everything." — countered: you change the one wrong
  step, nothing else.

**Error classes:** none (no code in this lesson; the concept of error class is
previewed verbally: "in Python, the computer will even tell you roughly where
the bug is — but you still have to understand it").

**Recalls:** algorithm (L0.2), sequence (L0.2), decomposition (L0.3).

**Recap + Codex:**
- *One-sentence summary:* "A bug is a wrong instruction in the algorithm — the
  machine did exactly what it was told; the algorithm is what needs fixing."
- *Codex entries earned:* **bug** — "A wrong instruction in an algorithm that
  causes the result to differ from what was intended."; **debugging** — "The
  process of finding and fixing a bug: read the algorithm, compare it to the
  intended result, locate the step that differs, and correct only that step."

---

### L0.6 — Sound Strand: Build a Motif *(strand-application · sound · rung 1–2)*

**Arc role:** apply the chapter's CT concepts in a low-stakes, sound-focused
context. This is the strand-application lesson; unlike the Chapter Challenge
(which assesses), this lesson lets students explore and make something they
want to hear, with no single correct answer.

**Concepts applied:** sequence, decomposition, iteration (conceptual), debugging.

**Warm-up (recall from L0.2, L0.3/L0.4, L0.5 — interleaved, three items):**
Three short-answer items drawing from the three prior concept lessons:
1. "An algorithm step says 'cook it somehow.' Which property of a good algorithm
   does this violate?" (Multiple choice: A) completeness / B) **precision** /
   C) decomposition / D) sequence. Correct: B.) — *from L0.2*
   *(Reformatted from short-answer to multiple choice so the engine can
   auto-check without maintaining a synonym keyword list.)*
2. "A loop says `repeat 3 times: play(60), play(62), sleep(0.5)`. How many notes
   play in total?" (Answer: 6.) — *from L0.3/L0.4*
3. "What is a bug?" (Multiple choice: A) a crash message / B) a wrong instruction
   in the algorithm / C) a missing step the computer adds automatically / D) a
   hardware fault. Correct: B.) — *from L0.5*
*(Thirty seconds of interleaved retrieval before the chapter's final content
lesson. Roediger and Karpicke (2006): retrieval before assessment improves both
the assessment score and long-term retention.)*

**CT synthesis (required — appears before exercises):**
"Look back at the sandwich algorithm we used earlier — it used all four ideas at
once: **sequence** (steps in order), **decomposition** (breaking into
sub-tasks), **iteration** (repeat the spreading motion until covered),
**selection** (if the jar is closed, open it first). These are not four separate
tools. They are four lenses on the same problem — and you have been using all
four in this chapter." *(Prevents students from leaving Ch.0 thinking the four
CT pillars are unrelated. Added here rather than the Recap so students can see
the synthesis before building their motif.)*

**Worked-example ideas:**
1. *Motif as decomposed sequence:* a four-note musical motif shown as a
   `play()`/`sleep()` block list with labels — "bar 1", "bar 2". The big task
   (a short tune) is broken into named sub-problems (bars). Concept callback:
   this is decomposition applied to music.
2. *Motif repeated:* the same four-note motif shown twice in a row, then wrapped
   in a `repeat 2 times` conceptual block. "Instead of writing it out again, we
   loop." Concept callback: iteration.
3. *Bug in a motif (duration bug):* a six-note sequence uses pitches
   `[60, 62, 64, 65, 64, 62]` with sleep values `[0.5, 0.5, 0.5, 0.5, 5.0, 0.5]`;
   the fifth sleep value is ten times too long, producing a jarring long pause
   near the end. The student hears the pause, traces the sleep values, and finds
   the step that is far out of range.
   *(Three bug exercises across the chapter now cover distinct types at distinct
   positions: pitch outlier at position 3 in L0.5 worked ex.3; duration bug at
   position 3 in L0.5 ex.3; duration bug at position 5 in this worked example;
   duration bug at position 4 in L0.6 ex.3. No two exercises share both bug type
   and position, preventing mechanical position-recall from substituting for reading.)*

**Exercise ideas (rung 1–2, open-ended strand work):**
1. **(rung 2 — Parsons, choose your sequence — four blocks pre-selected):**
   Four `play()`/`sleep()` blocks of varying pitches are pre-selected and
   presented; student arranges them in any order they like. Runs the arranged
   code; hears their own choice. (Multiple correct answers — checked for
   structure, not specific pitches.) An optional creative stretch step offers a
   wider bank of eight blocks and one blank pitch slot for students who want to
   go further; this stretch is clearly labeled and structurally checked only.
   *(Pre-selecting the four blocks removes the select-then-sequence dual decision
   that would otherwise split attention across two simultaneous goals, per
   Ericson et al. (2022) on Parsons working-memory demand.)*
2. **(rung 2n — nested Parsons, build a motif in two bars):** Six blocks
   provided, including a `repeat 2 times` wrapper. Student nests their four
   chosen blocks inside the repeat so the motif plays twice. Checked: two
   identical consecutive play sequences. *(Labeled rung 2n in metadata to flag
   nesting overhead; nested Parsons is harder than flat Parsons.)*
3. **(rung 1 — spot-the-bug, duration bug, fresh note sequence):** A five-note
   sequence `[60, 62, 64, 65, 62]` with sleep values `[0.5, 0.5, 0.5, 5.0, 0.5]`
   shown; the fourth sleep value is ten times too long. Student taps the block
   with the wrong sleep value. Hear the corrected version to confirm the fix.
   *(Uses a duration bug at position 4 — distinct from L0.5 ex.3 which uses
   position 3 — so the student must read the values rather than recalling a
   position. Note sequence differs from the worked example.)*

**Misconceptions:**
- "My melody has to sound like a song I know." — explicitly addressed: any
  arrangement that sounds interesting to them is valid.
- "Repeating a motif means rewriting the blocks." — countered by the repeat
  block demo.

**Error classes:** none.

**Recalls:** sequence (L0.1–L0.3), iteration conceptual (L0.4), decomposition
(L0.3), debugging (L0.5).

**Recap + Codex:**
- *One-sentence summary:* "Every piece of music is an algorithm — a precise
  sequence of notes and pauses that can be decomposed into bars, repeated with
  loops, and debugged when a pause or note sounds wrong."
- *Codex entries earned:* **motif** — "A short, memorable musical idea — a
  pattern of notes that can be repeated to give a piece its character."
  *(sound-strand Codex entry. A motif does not have to repeat; defining it as
  "a loop of notes" would conflate motif with ostinato.)*

---

### Chapter Challenge — Sound Machine *(rung 1–2, with one rung 3 stretch)*

**Arc role:** consolidate all Ch.0 concepts in the context of the sound strand.
Six exercises, easy → hard, Parsons-heavy with one value-change stretch at the
end.

**Outline (6 exercises):**

1. **(easy, rung 1 — trace):** A four-step `play()`/`sleep()` algorithm is shown.
   "What is the total of all the `sleep()` values in this algorithm?" (Unit-free
   arithmetic — the student sums the numbers, e.g. `0.5 + 0.5 + 0.5 = 1.5`.)
   *(Asks for the sum of sleep() values without specifying seconds. The engine
   defines sleep() in beats, not seconds; asking "how many seconds?" would be
   wrong by a factor of 2. Unit-free arithmetic is correct and consistent with
   treating sleep() as an opaque command in Ch.0.)*

2. **(easy, rung 2 — Parsons):** Six `play()`/`sleep()` blocks scrambled. Arrange
   them so the melody plays low-to-high. Auto-checked by running the arranged
   code.

3. **(medium, rung 2 — loop Parsons):** A `repeat 4 times` block plus inner
   `play()` and `sleep()` blocks. Student nests the inner blocks correctly to
   create a repeating motif.

4. **(medium, rung 2 — branch Parsons):** Lunchbox packing: blocks include a
   diamond "is it a school day?" and two branches (pack lunch vs. skip packing).
   Blocks given scrambled; student arranges the branch correctly. The engine
   shows the result of each branch visually ("School day: lunch packed" /
   "Not a school day: lunch skipped") — no audible feedback, since the domain
   has no sound output and a generic tone would misrepresent branch semantics.
   *(Uses the same "is it a school day?" condition from L0.4 ex.2, which the
   student has already arranged. "Tempo" was a term introduced here but never
   taught in any lesson — a summative assessment must test only what was taught.)*

5. **(hard, rung 1 — spot-the-bug):** An eight-step sound algorithm with one
   deliberate bug (a `sleep()` that is 10× too long, causing a very long pause
   mid-melody). Student identifies which step (give the step number) is the bug.

6. **(stretch, rung 3 — modify):** Working `play()`/`sleep()` program shown.
   "Change exactly two values so the melody ends on a higher note and has a
   shorter pause before the last note." Student edits two numbers. Auto-checked
   by pitch and duration comparison.

---

### Chapter Quiz *(gate for Chapter 1)*

**Must-pass concepts:**
- Can trace a short sequence and state what happens at each step.
- Knows what "algorithm" means and why precision matters.
- Can distinguish sequence, loop, and branch from one another in plain English.
- Understands "bug" as a wrong instruction, not a computer mistake.
- Has run and heard `play()`/`sleep()` code (the hook passed).

**Format:** five questions, auto-checked.
1. *Multiple choice:* "Which of these is a loop?" (four options: a single step,
   a branch, a repeated block, a list of steps in order.)
2. *Multiple choice:* "A classmate's robot-grid algorithm ends in the wrong
   place. What is most likely wrong?" (Options: the computer made a mistake / one
   instruction is incorrect / the robot is broken / there are too many steps.)
3. *Short trace:* `repeat 3 times: play(60), sleep(0.5)`. "How many times does
   note 60 play?" Answer: 3.
4. *Spot-the-difference:* two sandwich algorithms side by side, one word
   different. "Which word is the bug?"
5. *Short write (free text, not auto-graded, parent-reviewable):* "In one
   sentence, explain what an algorithm is to someone who has never heard the
   word."

Quiz passes at 4/5 auto-graded questions correct. Question 5 is presented but
does not block the gate — it surfaces in coach mode for the parent.

---

### Chapter Recap *(Codex consolidation + retrieval set)*

**Arc role:** close the chapter arc; consolidate all earned Codex entries;
lay down a retrieval set with a spirit-preserved spiral schedule; plant the
pseudocode-to-Python transfer bridge.

**Codex consolidation:** all entries earned across Ch.0 are surfaced together:
sequence, algorithm, precision, decomposition, iteration, selection, bug,
debugging, motif. The Codex panel opens to the Ch.0 entries; the student sees
everything they named this chapter in one place.

**Pseudocode-to-Python "What's Next" panel (required):**
A single side-by-side visual showing the pseudocode notation used in Ch.0 next
to the Python spelling that Ch.1/Ch.2 will introduce:

```
Ch.0 pseudocode            →  Ch.1/Ch.2 Python
─────────────────────────────────────────────
repeat 3 times:            →  for i in range(3):
    play(60)               →      play(60)
    sleep(0.5)             →      sleep(0.5)

if it is a school day:     →  if school_day:
    pack lunch             →      pack_lunch()
```

No exercises, no vocabulary — just a visual anchor. Caption: "You have been
thinking algorithmically all chapter. In the next two chapters, you will learn
to write these ideas in Python's exact spelling." *(Mayer 2004, Guzdial 2015:
without an explicit transfer anchor at the boundary, near-transfer from
pseudocode to real syntax fails.)*

**Retrieval set (5 questions — spirit-preserved spiral schedule):**
1. "What word describes a list of steps the computer runs top to bottom?"
   (Answer: *sequence.*) → **L1.1 warm-up**; re-surface **L2.1 warm-up**;
   re-surface **L4.1 warm-up**.
2. "An algorithm for making toast has a step that says 'heat the bread somehow.'
   What property of a good algorithm does this step violate?" (Answer: *precision*
   / *unambiguity.*) → **L1.2 warm-up**; re-surface **L2.2 warm-up**;
   re-surface **L4.2 warm-up**.
3. "You decompose 'make breakfast' into: boil water → make toast → pour juice.
   What does decomposition help you do?" (Answer: break a large problem into
   smaller, manageable parts.) → **L1.3 warm-up**; re-surface **L2.3 warm-up**;
   re-surface **L4.3 warm-up**.
4. "A loop says `repeat 5 times: play(60), sleep(0.5)`. What is the total of all
   the `sleep()` values?" (Answer: 2.5 — five times 0.5 — unit-free arithmetic.)
   → **L1.4 warm-up**; re-surface **L2.4 warm-up**; re-surface **L4.4 warm-up**.
   *(Asks for the sum of sleep() values without specifying seconds, consistent
   with the unit-free convention established in Challenge ex.1.)*
5. "A classmate's robot ends up facing the wrong wall. They say 'the robot made
   a mistake.' What would you say instead?" (Free text — target: the algorithm
   has a wrong step, not the robot.) → **L1.5 warm-up**; re-surface
   **L2.5 warm-up**; re-surface **L4.5 warm-up**.

*(The spiral schedule above is a spirit-preserved guide, not a hard contract:
each item is suggested for a specific Ch.1, Ch.2, and Ch.4 lesson. Chapter
authors should include warm-ups that surface these Ch.0 ideas at roughly these
positions — exact wording and phrasing may differ. Single-interval retrieval is
significantly less effective than expanding-interval re-retrieval; resurfacing at
Ch.2 and Ch.4 creates the spacing effect.)*

**Ch.1 callback debt (required):**
Ch.1 L1.7 must explicitly name `play()` and `sleep()` as examples of function
calls the student has already used: "Those two commands from Chapter 0?
`play(60)` and `sleep(0.5)` — you were writing function calls all along."
This closes the recognition moment — "what you've been doing in Ch.0 was a
function call" — which is high pedagogical value and is currently unowned by any
lesson. *(c1.js L1.7 already teaches `forward(100)` as a function call pattern;
adding `play()` and `sleep()` as familiar prior examples costs one sentence.)*

---

### Progression / difficulty ramp

| Lesson | Rung(s) | Student action |
|--------|---------|---------------|
| L0.1 Hook | 1 (predict) + one rung-3 value change | Click answer; change one number |
| L0.2 Algorithms | 1 (predict, recognition) | Click answer; select precise rewrite |
| L0.3 Guide the Robot | 2 (Parsons, no decoys) | Drag blocks; 5-block then 7-block |
| L0.4 Repeat & Decide | 2 (Parsons) + 1 (trace) | Drag blocks; type a number |
| L0.5 Sandwich Bug | 1 (spot) + 2 (fix Parsons + decoy) | Tap a step; swap a block; type a position |
| L0.6 Strand-app: Motif | 1 (spot) + 2 (Parsons, open) | Arrange blocks; nest inside repeat; spot bug |
| Chapter Challenge | 1 + 2 + 3 stretch | Full range, culminating in two-value edit |

No lesson requires typing Python. The rung-3 appearance (value change) first
occurs in L0.1 and returns in Challenge exercise 6 — intentional foreshadowing
that the next chapter will start at rung 3 and climb from there.

---

## Misconceptions & error classes (chapter-wide)

**Misconceptions:**
- The computer infers intent / fills in ambiguous steps.
- Bugs are caused by the computer, not the algorithm.
- A loop must iterate over numbers.
- Changing one thing changes many things (countered by the hook lesson's
  single-note change).
- More steps in an algorithm means it is worse.
- Decomposition is extra work rather than a tool for managing complexity.
- Body-count error on loop traces: counting iterations rather than multiplying
  iterations by body size. *(This is a body-count multiplication error, not an
  N+1 boundary error. The "N+1" label is reserved for off-by-one boundary
  errors in Ch.2 loops.)*
- Pseudocode `repeat N times:` works as Python. *(Countered by the pseudocode-
  barrier sentence in L0.4 and the What's Next panel in the Recap.)*

**Error classes:** none (no Python syntax is taught in Ch.0). The chapter
explicitly previews that Chapter 1 will introduce real error messages, and the
Codex errors tab will begin filling there. Debugging-as-idea here means the
groundwork is laid before the first SyntaxError appears. See Engine behaviour
note for runtime errors if a student types a malformed value in L0.1 rung-3.

---

## Sources

The following were consulted and cross-checked to ground this chapter plan.

1. **CS Unplugged project** — unplugged activity tradition, sequence/selection/
   iteration as ideas before code:
   <https://csunplugged.org/en/topics/kidbots/> (Kidbots unit, "Programming
   Instructions" and "Debugging" activities)

2. **Computational Thinking / CSTA K-12 CS Standards (2017)**, Grades 6–8,
   Practice 4 (Computational Thinking) and Concept 1A (Algorithms & Programming):
   <https://www.csteachers.org/page/standards>

3. **PRIMM model** (Sue Sentence et al., 2019) — Use-Modify phasing in the hook
   lesson (Predict → Run → Investigate → Modify as the rung-1/rung-3 arc of L0.1):
   Sentance, S., et al. "PRIMM: Exploring pedagogical approaches for teaching
   text-based programming in school." *SIGCSE 2019.*
   <https://dl.acm.org/doi/10.1145/3287324.3287477>

4. **Scratch / block-to-text CT research** — sequence, loop, branch as the three
   core algorithmic structures at this age level:
   Brennan, K. & Resnick, M. (2012). "New frameworks for studying and assessing
   the development of computational thinking." *AERA 2012.*
   <https://scratched.gse.harvard.edu/ct/files/AERA2012.pdf>

5. **Think Python**, Allen Downey, 2nd ed. — Chapter 1 ("The way of the program")
   for the algorithm/computation framing and the literal-machine metaphor:
   <https://greenteapress.com/thinkpython2/html/thinkpython2002.html>

6. **How to Think Like a Computer Scientist** (HTTLACS), Chapter 1 — the
   "problem-solving" framing of algorithms and the four-step process (understand →
   design → code → test) that decomposition supports:
   <http://openbookproject.net/thinkcs/python/english3e/way_of_the_program.html>

7. **Denny et al. (2008)** — distractor blocks improve transfer only after basic
   sequencing is automatized; basis for moving decoy Parsons from L0.3 ex.2 to
   L0.5 ex.2.

8. **Hermans, F. (2021)** — pseudocode-barrier effect: students who learn English
   pseudocode loops without an explicit boundary marker have harder acquisition of
   real loop syntax (basis for the pseudocode-barrier note in L0.4 and the What's
   Next panel).

9. **Mayer, R.E. (2004); Guzdial, M. (2015)** — without an explicit transfer
   anchor at the pseudocode/syntax boundary, near-transfer fails; basis for the
   What's Next panel in the Chapter Recap.

10. **Oakley, B. (2014) — "A Mind for Numbers"** — illusion of competence from
    re-reading vs. retrieval; forced-choice warm-ups required over free-text
    reflection; basis for L0.4 warm-up replacement and the spirit-preserved spiral
    schedule.

11. **Roediger, H.L. & Karpicke, J.D. (2006)** — retrieval practice before
    assessment improves both the assessment score and long-term retention; basis
    for expanding the L0.6 warm-up to three interleaved items.

12. **Ericson et al. (2022)** — standard Parsons already has high working-memory
    demand; adding a simultaneous selection decision before sequencing is resolved
    adds a second sub-goal; basis for pre-selecting blocks in L0.6 ex.1.

13. **PLAN.md §3 and §4** (this repo) — rung ladder, lesson arc, Chapter 0 scope,
    music-engine API (`play()`, `sleep()`), and the pre-syntax exception for Ch.0.

14. **CURRICULUM-STRUCTURE.md** (this repo) — subsection template, chapter arc,
    concept spine entry for "CT foundations (Ch.0)".

---

## 3-line summary

**Key decisions:** Ch.0 is rung 1–2 only (no typing beyond a single value change),
all CT concepts are taught as everyday ideas using unplugged analogies and Parsons
tasks, and `play()`/`sleep()` are treated as "words the machine knows" rather than
Python syntax — syntax starts at Ch.1. Decoy Parsons is deferred to L0.5 after
basic sequencing fluency is established. Unit-free arithmetic ("total of all
sleep() values") is used throughout to avoid committing to a seconds-vs-beats
definition that is resolved only in Ch.1 L1.7.

**Coverage note:** Abstraction is *practiced unnamed* throughout Ch.0 (every
decomposition and Parsons task requires ignoring irrelevant detail — that is
abstraction in action) but the word is deliberately withheld; it is named in
Ch.3 (functions hide detail) and deepened in Ch.5 (code design). Ch.0 does not
claim to own abstraction. The chapter challenge adds a rung-3 stretch as an
intentional bridge to Ch.1. The four CT pillars are synthesised explicitly in
L0.6 before the final exercises to prevent students from treating them as
unrelated tools.

**Ordering concern (none):** The sequence algorithm → Parsons arrange → loop +
branch → debug order is internally consistent with HTTLACS Ch.1 and CS Unplugged
Kidbots sequencing; no dependency is violated. The Ch.0/Ch.1 boundary is bridged
by three transfer anchors: a parentheses note in L0.1, a pseudocode-barrier note
in L0.4, and the What's Next panel in the Recap. The spiral retrieval schedule
is contracted with specific lesson assignments for Ch.1, Ch.2, and Ch.4.
