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

## Lessons

### L0.1 — Hook: First Sound *(hook · core + sound · rung 1)*

**Arc role:** open the course; prove code does something real; anchor the
chapter's literal-machine metaphor.

**Concepts:** `play()`, `sleep()`, sequence-as-a-list-of-steps (first exposure,
named but not formalised here).

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

**Error classes (none in this lesson — no syntax taught yet).**

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
two notes / only the first note / both notes at the same time / silence only.)
Correct answer: both notes at the same time — step 2 was the `sleep()` pause.

**Concepts:** algorithm, sequence, precision/unambiguity.

**Worked-example ideas:**
1. *Unplugged:* "Make a peanut-butter sandwich" written as a casual human
   instruction vs. the same steps written for a very literal robot (open bag,
   remove two slices, place on board, open jar, …). Read both aloud — the human
   version skips steps the robot cannot infer.
2. *Sound analogy:* The three-note program from L0.1 re-read as an algorithm
   ("step 1: play note 60; step 2: wait half a second; step 3: play note 64").
   Show that removing step 2 changes the result: the robot does not add a pause
   on its own.
3. *Counter-example:* An ambiguous instruction ("play something nice") and why
   a computer cannot obey it.

**Exercise ideas:**
1. **(rung 1 — predict):** Two sandwich algorithms shown; one has a step in the
   wrong order. Which algorithm produces an edible sandwich? Tap the correct one.
2. **(rung 1 — predict):** Three-step sound algorithm shown with one step
   missing. "What will happen when the machine runs this?" Multiple choice.
3. **(rung 1 — spot-the-gap):** Four-step robot instruction with one deliberately
   vague step ("add some bread"). Identify which step is not exact enough and
   rewrite it in one sentence (free text, not auto-checked — reflection exercise).

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
   answer.
2. **(medium Parsons):** Same grid, six blocks, two decoy blocks that lead the
   robot off the edge. Student must identify and exclude the decoys.
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

**Warm-up (recall from L0.3):** "You decomposed 'get home from school' into four
sub-steps. Why is that better than writing one instruction: 'go home'?"
(Free-text reflection, not auto-checked — used to prime the lesson's theme of
managing complexity.)

**Concepts:** iteration (loop), selection (branch/if-else).

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
   number. This is the only typed answer in Ch.0, and it is arithmetic, not code.

**Misconceptions:**
- "A loop must count numbers." — countered by the until-smooth recipe example.
- "A branch always has two outcomes." — note that "if raining, take umbrella"
  (no else) is valid; else is optional.
- Off-by-one on the loop body count: tracing `repeat 3 times: play(60), play(64)`
  and guessing 4 notes rather than 6 (the N+1 error). Countered by asking
  students to trace the pseudocode step by step and tick each body execution.

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

**Warm-up (recall from L0.4):** "A loop says `repeat 4 times: play(60), sleep(0.5)`.
How many notes play in total?" (Answer: 4. Single-number input, auto-checked.
Reinforces counted-loop tracing before the lesson asks students to trace an
algorithm looking for a wrong step.)

**Concepts:** bug, debugging (as: read → compare intent to result → locate →
fix the instruction).

**Worked-example ideas:**
1. *Sandwich algorithm with a bug:* step 3 says "spread peanut butter on the
   outside of both slices." That is a bug — it does not match what a sandwich
   should be. Walk through: (a) what did the algorithm say? (b) what did we
   expect? (c) where is the mismatch? (d) fix it.
2. *Grid robot with a wrong turn:* robot ends at B, should end at C. Worked
   trace of the algorithm step by step until the wrong step is found.
3. *Sound example:* a five-note melody uses pitches `[60, 62, 64, 62, 60]`
   (middle-C scale tones); one line has been changed to `play(84)` — two octaves
   higher and unmistakably out of range. Student listens, compares the played
   sequence to the intended note list, finds the line that is much too high.

**Exercise ideas:**
1. **(rung 1 — spot-the-bug):** Sandwich algorithm, five steps, one step
   logically wrong. Student taps the step that contains the bug.
2. **(rung 2 — fix Parsons):** Four-block robot algorithm with one block replaced
   by a wrong block. Student swaps the wrong block for the correct one from a
   bank of three candidates.
3. **(rung 1 — sound, spot-the-bug):** Melody shown as six note numbers; the
   same melody plays with one wrong note. Student identifies which position
   (1–6) has the wrong note, types the position number.

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

**Warm-up (recall from L0.5):** "Quick check: what is a bug?" (Multiple choice:
A) a crash message / B) a wrong instruction in the algorithm / C) a missing
step the computer adds automatically / D) a computer hardware fault. Correct: B.)

**Worked-example ideas:**
1. *Motif as decomposed sequence:* a four-note musical motif shown as a
   `play()`/`sleep()` block list with labels — "bar 1", "bar 2". The big task
   (a short tune) is broken into named sub-problems (bars). Concept callback:
   this is decomposition applied to music.
2. *Motif repeated:* the same four-note motif shown twice in a row, then wrapped
   in a `repeat 2 times` conceptual block. "Instead of writing it out again, we
   loop." Concept callback: iteration.
3. *Bug in a motif:* a six-note sequence uses pitches `[60, 62, 64, 65, 64, 62]`
   (all within one octave); one line has been changed to `play(84)` — two octaves
   above the surrounding notes, unmistakably much too high. The student hears a
   jarring high note, traces the note list, and finds the line that is far out of
   range.

**Exercise ideas (rung 1–2, open-ended strand work):**
1. **(rung 2 — Parsons, choose your melody):** Eight `play()`/`sleep()` blocks
   of varying pitches given; student arranges any four of them into a sequence
   they like. Runs the arranged code; hears their own choice. (Multiple correct
   answers — checked for structure, not specific pitches.)
2. **(rung 2 — Parsons, build a motif in two bars):** Six blocks provided,
   including a `repeat 2 times` wrapper. Student nests their four chosen blocks
   inside the repeat so the motif plays twice. Checked: two identical consecutive
   play sequences.
3. **(rung 1 — spot-the-bug in a motif):** Five-note sequence
   `[60, 62, 64, 84, 62]` shown; the fourth block (`play(84)`) is two octaves
   above the surrounding notes — described as "much too high, far above the
   rest." Student taps that block. Hear the corrected version (`play(64)`) to
   confirm the fix.

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
  loops, and debugged when a note sounds wrong."
- *Codex entries earned:* **motif** — "A short, repeating musical idea — a
  loop of notes that gives a piece its character." *(sound-strand Codex entry.)*

---

### Chapter Challenge — Sound Machine *(rung 1–2, with one rung 3 stretch)*

**Arc role:** consolidate all Ch.0 concepts in the context of the sound strand.
Six exercises, easy → hard, Parsons-heavy with one value-change stretch at the
end.

**Outline (6 exercises):**

1. **(easy, rung 1 — trace):** A four-step `play()`/`sleep()` algorithm is shown.
   "How many seconds of silence does this algorithm produce in total?" (Arithmetic
   from the `sleep()` values.)

2. **(easy, rung 2 — Parsons):** Six `play()`/`sleep()` blocks scrambled. Arrange
   them so the melody plays low-to-high. Auto-checked by running the arranged
   code.

3. **(medium, rung 2 — loop Parsons):** A `repeat 4 times` block plus inner
   `play()` and `sleep()` blocks. Student nests the inner blocks correctly to
   create a repeating motif.

4. **(medium, rung 2 — branch Parsons):** Pseudocode flowchart — "if tempo is
   fast, use `sleep(0.25)`; otherwise use `sleep(0.5)`" — shown as a diagram.
   Blocks given scrambled; student arranges the branch correctly.

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

**Arc role:** close the chapter arc; consolidate all earned Codex entries and
lay down a retrieval set that later spirals will draw from.

**Codex consolidation:** all entries earned across Ch.0 are surfaced together:
sequence, algorithm, precision, decomposition, iteration, selection, bug,
debugging, motif. The Codex panel opens to the Ch.0 entries; the student sees
everything they named this chapter in one place.

**Retrieval set (5 questions — used as warm-ups in Ch.1 and beyond):**
1. "What word describes a list of steps the computer runs top to bottom?"
   (Answer: *sequence*.)
2. "An algorithm for making toast has a step that says 'heat the bread somehow.'
   What property of a good algorithm does this step violate?" (Answer: *precision*
   / *unambiguity*.)
3. "You decompose 'make breakfast' into: boil water → make toast → pour juice.
   What does decomposition help you do?" (Answer: break a large problem into
   smaller, manageable parts.)
4. "A loop says `repeat 5 times: play(60), sleep(0.5)`. How many seconds of
   silence does it produce in total?" (Answer: 2.5 seconds — 5 × 0.5.)
5. "A classmate's robot ends up facing the wrong wall. They say 'the robot made
   a mistake.' What would you say instead?" (Free text — target: the algorithm
   has a wrong step, not the robot.)

These five questions are stored as retrieval-practice items and will appear as
warm-ups in Ch.1 lessons (one per lesson, rotating).

---

## Progression / difficulty ramp

| Lesson | Rung(s) | Student action |
|--------|---------|---------------|
| L0.1 Hook | 1 (predict) + one rung-3 value change | Click answer; change one number |
| L0.2 Algorithms | 1 (predict, spot) | Click answer; free-text reflection |
| L0.3 Guide the Robot | 2 (Parsons) | Drag blocks; identify decoys |
| L0.4 Repeat & Decide | 2 (Parsons) + 1 (trace) | Drag blocks; type a number |
| L0.5 Sandwich Bug | 1 (spot) + 2 (fix Parsons) | Tap a step; swap a block; type a position |
| L0.6 Strand-app: Motif | 1 (spot) + 2 (Parsons, open) | Choose blocks; nest inside repeat; spot bug |
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

**Error classes:** none (no Python syntax is taught in Ch.0). The chapter
explicitly previews that Chapter 1 will introduce real error messages, and the
Codex errors tab will begin filling there. Debugging-as-idea here means the
groundwork is laid before the first SyntaxError appears.

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

7. **PLAN.md §3 and §4** (this repo) — rung ladder, lesson arc, World 0 scope,
   music-engine API (`play()`, `sleep()`), and the pre-syntax exception for Ch.0.

8. **CURRICULUM-STRUCTURE.md** (this repo) — subsection template, chapter arc,
   concept spine entry for "CT foundations (Ch.0)".

---

## 3-line summary

**Key decisions:** Ch.0 is rung 1–2 only (no typing beyond a single value change),
all CT concepts are taught as everyday ideas using unplugged analogies and Parsons
tasks, and `play()`/`sleep()` are treated as "words the machine knows" rather than
Python syntax — syntax starts at Ch.1.

**Coverage note:** Abstraction is *practiced unnamed* throughout Ch.0 (every
decomposition and Parsons task requires ignoring irrelevant detail — that is
abstraction in action) but the word is deliberately withheld; it is named in
Ch.3 (functions hide detail) and deepened in Ch.5 (code design). Ch.0 does not
claim to own abstraction. The chapter challenge adds a rung-3 stretch as an
intentional bridge to Ch.1.

**Ordering concern (none):** The sequence algorithm → Parsons arrange → loop +
branch → debug order is internally consistent with HTTLACS Ch.1 and CS Unplugged
Kidbots sequencing; no dependency is violated.
