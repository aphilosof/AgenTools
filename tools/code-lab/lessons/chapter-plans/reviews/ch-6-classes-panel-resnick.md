# Panel Review — Ch.6 Classes — Mitchel Resnick (Scratch, MIT Media Lab)
**Verdict:** Solid

---

## Findings (from my lens)

### Does this chapter give students something to MAKE that feels theirs?

1. [MAJOR] 6.1–6.4 (Hook and concept lessons) — The worked examples all use generic containers: `Pet`, `Point`, `Book`, `Creature`, `Counter`, `Timer`. These are reasonable concept vehicles but they do not invite personal expression. A `Pet` class with `name` and `species` is a data container. A `Timer` class is a mechanism. Neither gives the student a reason to care about what they built. In the Scratch tradition, the hook is not just "run this and see what happens" — it is "run this and immediately want to change it because it feels like yours." The chapter is entirely front-loaded with three mandatory concept lessons (6.1, 6.2, 6.3) before the student touches music. For a course with a music capstone, the hook in 6.1 should already have music or personal meaning. Fix: consider whether the `Pet` can be replaced with something the student actually cares about — for instance a `Song` class with `title`, `artist`, and a `play()` method from the very first worked example. This would not change the syntax taught at all, but it would answer "why am I learning to build objects?" before the student even has to ask.

2. [MAJOR] 6.3 (Methods), 6.4 (Many Instances) hard exercises — The `Timer` class (6.3 hard) and `Player` class (6.4 hard) are competence exercises: correct or wrong, no room for personal variation. The rung-6 ("write from scratch") milestone should include at least one exercise where there is more than one correct answer — where the student makes a design choice. For example: "Design a class to represent something in your own life — a playlist, a recipe, a sports score. Choose the attributes. Write two methods." That is the difference between practicing a pattern and making something. The current rung-6 exercises are technically strong but creatively closed.

3. [MINOR] 6.5 (Note class) and 6.6 (Synth class) — These are the creative payoff lessons and they are correctly placed at the end of the chapter. The `Melody` class (6.5 hard) and `Drumkit` class (6.6 checkpoint) are genuinely expressive — a student building a `Drumkit` with their own pattern is making music, not just passing a test. This is the strongest part of the chapter from my perspective. The only concern: these are exercises 3 and 4 in the hard tier. Most students who struggle with 6.1–6.3 may never reach 6.5–6.6. The chapter architecture ensures that every student must complete all three concept lessons before touching music. Consider whether 6.1 can include a music-domain anchor even in the simplest worked examples — so the thread from syntax to expression is visible from the beginning, not just the end.

### Creative latitude and intrinsic motivation

4. [MINOR] The Chapter Challenge exercise 8 (stretch, vending machine) is the single best exercise in the chapter — it gives only a narrative description and asks the student to design the class from scratch, choosing their own attributes. This is creative latitude. But it is a stretch exercise, meaning most students will never reach it. The equivalent open-ended design question should appear earlier — by 6.4 or 6.5 at the latest — as a regular (not stretch) exercise option. The current sequence earns creative freedom only as a reward for completing all the mechanics, rather than weaving it throughout.

5. [MINOR] The warm-up questions in 6.1–6.4 are all factual recall questions from prior chapters ("what does a function return if it has no return statement?", "what is the difference between a parameter and an argument?"). These are correct for spiral recall. But missing is any warm-up that asks the student to *imagine* or *design* — for example: "If you were designing a class to represent a playlist, what attributes would it have?" Asked before any syntax instruction, this question does no harm and plants the right creative stance. It costs nothing to add. Consider one imagination-style warm-up per two lessons.

### The music strand integration

6. [MAJOR] The `Note` class (6.5) has a `transpose()` method that returns a *new* `Note` with `self.pitch + semitones`. This is musically correct and the worked example is clean. However, the chapter plan never asks the student to actually compose anything — to choose pitches, decide on a melody, hear the result, and change it. The 6.5 hard exercise ("Build a Melody class from scratch") and the 6.6 checkpoint ("Build a Drumkit class from scratch") are the right direction, but they are specified with enough constraints (given methods, given structure) that the student is assembling a machine, not writing music. The "Your turn" should include one unstructured prompt: "Build a Note sequence that plays a short melody you recognise or invent. Use at least one transpose call." No required output, no checker — just the invitation to make something. This is the one place in the chapter where the harness's output checker should step back and let the student play.

### Technical accuracy (verified with Python 3.14.5)

7. [MINOR] 6.5 — The plan claims the Python 3.14 AttributeError for `self.ptich` accessing `self.pitch` includes "Did you mean: 'ptich'?" Verified: this suggestion does NOT appear in Python 3.14.5 for this exact case (`self.ptich` stored, `self.pitch` accessed — edit distance 1 transposition). The message is simply `'Note' object has no attribute 'pitch'`. The "Did you mean" feature in Python 3.12+ applies primarily to module attribute lookups (e.g. `math.Sqrt`), not to instance attribute lookups. The plan's checker note "do not hard-match a bare message without the suggestion" is good practice, but the prose claim about what the error message says is incorrect and should not be taught to students. Fix: remove the parenthetical "(Python 3.14 form — the suggestion points straight at the typo)" from the 6.5 debug exercise description. The error is still valuable to demonstrate — just describe it accurately.

---

## Continuity notes

**Well-woven from c1–c3:**

- `def`, params/args, `return` from c3 (6.2 warm-up, 6.3 warm-up) — correctly recalled, not re-taught. The 6.2 warm-up "what is the difference between a parameter and an argument?" is precise and maps directly to the c3s2 glossary.
- c3s4 LEGB scope rule is implicitly invoked in 6.5's name-collision explanation (bare `play(self.pitch, duration)` resolves globally, not on `self`). This is technically correct. As Downey's review also notes, the LEGB link should be made explicit — one sentence connecting "remember from Chapter 3, Python looks up bare names local-then-global, never on self." Currently the plan re-explains LEGB without naming it. That is a missed spiral, not a re-teaching error.
- c1s5 f-strings used naturally in 6.1 print-attribute examples — correct.
- c2 `for` loops recalled in 6.4/6.5 for iterating over lists of instances — correct and well-placed.
- Ch.4 list `append` and dict patterns recalled in 6.4 — architecturally correct, but since c4 is a plan not written lessons, the author must verify the actual dict iteration depth taught in c4 before writing the `Scoreboard` exercise (Challenge Q4 uses `d.items()`).
- `None` — correctly recalled in the warm-up for 6.1 ("what does a function return if it has no return statement?"). This is a sharp choice: it immediately distinguishes methods that return values from those that just mutate state.

**Not re-taught (good):**

- `str.split()`, `len()`, f-strings: used freely without re-explanation, as they should be.
- The accumulator pattern from c2s4 / c3s3 is not re-taught — it is assumed in `self.inventory = []` / `self.inventory.append(item)` usage, which is correct.

**Missing that should be woven in:**

- The connection between OOP and the student's prior experience of *using* objects before defining them: in c1s5 and throughout, students have been calling `string.upper()`, `string.strip()`, `string.split()`. Those are method calls on string objects. The chapter plan does not make this connection explicit: "you have been calling methods on strings since Chapter 1 — now you will define your own objects and methods." This is a concrete, motivating bridge that requires no new content. It belongs in the 6.1 hook or the 6.3 concept block.

---

## What's strong

- **The debug thread is genuinely well-designed.** Every lesson has a debug exercise in escalating complexity: AttributeError typo (6.1–6.2), wrong-call TypeError (6.3), shared-mutable-list trap (6.4), typo surfacing in a different method (6.5), predict-and-explain instance independence (6.6). This is exactly how debugging exercises should build — each one requires a slightly different kind of reasoning.

- **The sound strand exercises at 6.5 and 6.6 are the strongest exercises in the chapter.** A student who builds a `Drumkit` class from scratch and hears it play has genuinely made something. The chapter earns this payoff. The concern is only that the path to this payoff is too long and too concept-heavy before the student touches anything musical.

- **Scope boundary is correctly drawn.** No inheritance, no class methods, no `@property`, no `__str__`. Staying strictly within attributes / methods / instances is the right call at this level. The concepts owned are exactly what an 11-year-old needs to make meaningful music objects without getting lost in Python's object hierarchy.
