# Panel Review — Ch.6 Classes — Barbara Oakley (Learning How to Learn)
**Verdict:** Solid

---

## Findings (from my lens)

### Cognitive Load and Chunking

1. [MAJOR] **6.1 introduces `__init__` and `self` simultaneously before either is explained** — The hook lesson is supposed to run-and-modify before syntax is explained. That is correct pedagogy. But the plan asks the student to absorb `self` in lesson 6.1, `__init__` in lesson 6.2, and methods in lesson 6.3 as three separate chunks. The problem: lesson 6.1 already *uses* all three in the Pet class worked example — the student sees `__init__`, `self.name`, `self.species` on day one. The plan acknowledges this with a parenthetical to "treat `self` as a required word" until 6.2. That deferral is fine as an exposure strategy, but the lesson-to-lesson boundary needs to be written with care. The rung 2 exercise in 6.1 (blank `__init__` body to fill in three attributes) requires understanding exactly what `__init__` does before it is formally taught. This is a rung 5 exercise masquerading as lesson 6.1 content. **Fix:** either keep 6.1 genuinely read-and-modify (no writing of `__init__` bodies), or acknowledge the deliberate early exposure explicitly in the author note so the prose treats it as scaffolded encounter, not formal teaching. The current plan conflates the two.

2. [MINOR] **6.3's rung-6 Timer exercise is the first time the student writes a complete 3-method class from scratch** — At rung 6 by lesson 3 of 6, this is appropriate given the monotonic-difficulty rule and the fact that c3 already established blank-editor as default by Chapter 3. No issue with the placement. The concern is cognitive load *within* the exercise: `__init__`, `tick()`, and `is_done()` must all be written together. That is genuinely three interacting parts. The plan should include a hint that scaffolds the three pieces in order (init first, then each method), not just "write from scratch." **Fix:** ensure the hint ladder for the Timer exercise names the three parts explicitly and suggests writing them in dependency order.

3. [MINOR] **6.5 hard exercise (Melody class) requires returning a new object from a method** — this is a sophisticated concept (factory method, immutable-style mutation) introduced at rung 6 with no worked-example precedent of returning a new instance from within an instance method. The `transpose(self, semitones)` worked example in 6.5 does show this, but it is a worked example in the same lesson, not an earlier lesson. This is acceptable under the "concepts can appear early if properly expanded" rule — the worked example scaffolds the exercise. No fix needed, but the author must make the worked example explicit: "Notice that `transpose` does not change `self.pitch`. It creates and returns a brand-new `Note` object."

### Spaced Retrieval

4. [MAJOR] **The warm-up in 6.4 recalls `list.append()` but does not force retrieval — it asks a comprehension question** — "How do you append an item to a list? What does `append` return?" is a retrieval question, which is correct. But the plan lists it as the warm-up *and* immediately provides the answer in the concept paragraph below ("sets up `self.inventory.append(item)` in worked examples"). The whole point of a retrieval warm-up is that the student reconstructs the answer from memory before the lesson provides it. If the lesson text immediately shows the answer, the retrieval effect is lost. **Fix:** in authoring, the warm-up answer must not be revealed until after the student has had time to respond. This is a sequencing rule for the warm-up, not a content issue with the plan itself — but the author note should flag it.

5. [MINOR] **f-strings from Ch.1 are used heavily in 6.1–6.3 but are never named as a recall item** — the worked examples use f-strings (`f"My pet is a {self.species}"` type constructions implied throughout). The spiral-weaving section in the chapter plan names Ch.1 variables and f-strings under "Spiral weaving — recalled from earlier chapters," which is good. But none of the six warm-ups for lessons 6.1–6.6 include an f-string retrieval question. After five chapters, f-string fluency should be tested periodically. **Fix:** one of the mid-chapter warm-ups (6.3 or 6.4) should include a quick retrieval question like "Write one f-string that inserts `name` and `score` into the sentence: 'Alex scored 95.'" This costs nothing and maintains the spiral.

6. [MINOR] **The accumulator pattern (named and codexed in Ch.2) does not appear in the Ch.6 warm-ups or exercises** — Chapter 6 uses lists (`self.inventory`), loops over lists, and attribute mutation, but never makes a student use the accumulator pattern on an instance attribute. A `Scoreboard.add_score()` in the Chapter Challenge exercise 4 does iterate over a dict, which is adjacent. Adding one exercise where a method accumulates into `self.total` (e.g., `deposit` in a `BankAccount`) would spiral this pattern cleanly. The BankAccount class in the Chapter Challenge fix exercise (exercise 3) is actually a perfect opportunity: instead of just fixing the typo, give the student a broken `deposit` method and have them both fix the typo and complete the accumulation. **Fix:** minor restructure of Chapter Challenge exercise 3 to add an accumulation step.

### Interleaving

7. [MINOR] **Lessons 6.5 and 6.6 are both sound-strand lessons back to back** — from an interleaving standpoint, two consecutive sound lessons reduce the benefit of the strand interleaving that has been a strength of earlier chapters. In Chapter 3, strand application was spread across drawing (3.6), sound (3.7), and "in the wild" (3.8). Chapter 6 collapses the two strand applications into the last two lessons. This is not a major problem — the two lessons address genuinely different things (modeling a domain object vs. demonstrating instance independence) — but the Chapter Challenge could compensate by mixing strands more aggressively. The challenge does include core, sound, and core/data exercises, which partially mitigates this. No fix required, but note it for authoring.

### Scaffolding and Rung Ladder

8. [MAJOR] **The chapter hits rung 6 (write from scratch) in lesson 6.3 and stays there through 6.6** — by CURRICULUM-STRUCTURE.md rule, blank-editor is the default by Chapter 3. Chapter 6 is well past that milestone, so rung 6 from lesson 6.3 onward is correct. The concern is different: the scaffolding *within* rung-6 exercises must be honest about what "from scratch" means for OOP. Writing a Timer class from scratch (6.3) means: invent the class structure, `__init__` body, two methods, return logic, and a calling script. That is 4–5 interdependent decisions in one blank editor. This is not excessive — it matches what the student can do after three functions chapters — but the exercise prompt must be unusually specific. The plan's prompt for the Timer ("define a `Timer` class with `__init__(self, seconds)`, a `tick()` method (subtract 1), and `is_done()` returning whether seconds ≤ 0") is specific enough. The Drumkit checkpoint in 6.6 is also well-specified. This finding is a watch-item for authoring, not a plan-level error.

### Avoiding Illusions of Competence

9. [MINOR] **The chapter has no "predict the variable table" exercise for instance state** — the stepper is described as core in CLAUDE.md, and in Chapters 1–3 the predict-the-variable-table rung 1 exercises are consistently used. Chapter 6 has predict-the-output exercises in the Chapter Challenge (exercise 1) and the quiz, but none at the lesson level. For OOP, the variable table becomes the *instance table* — `cat.name = 'Whiskers', dog.name = 'Rex'`. Showing students that the stepper tracks both instances simultaneously, and having them predict the table after each method call, would directly address the "instances share state" misconception. The rung 1 predict exercises in 6.1 and 6.4 should include variable-table predictions. **Fix:** add explicit stepper-based predictions to at least one worked example in 6.1 ("After this code runs, what does the variable table show for each instance?") and one in 6.4.

---

## Continuity notes

**Well-woven from c1–c3:**
- Ch.1 variables and assignment: used correctly in every lesson via `self.x = x`. The plan explicitly recalls this and the parallel is pedagogically sound.
- Ch.1 f-strings: appear naturally in worked examples throughout.
- Ch.3 `def`, parameters/arguments, `return`: lessons 6.2 and 6.3 warm-ups recall these precisely and usefully — the warm-up in 6.2 ("parameter vs argument") is textbook spaced retrieval, surfacing the exact Ch.3 concept that methods will extend.
- Ch.2 `for` loops: used in 6.4 (loop over list of instances) and 6.5 (melody loop). Both are genuine recall rather than re-teaching.
- Ch.4 lists/`append`: the class-level mutable trap in 6.4 is an excellent spiral — it takes the Ch.4 fact that lists are mutable and reveals its consequences at the class level. This is the kind of deepening that a spiral curriculum should do.

**Missing or under-woven:**
- **Accumulator pattern** (named in c2.js, codexed): not explicitly recalled in any Ch.6 exercise or warm-up. An instance attribute that accumulates across method calls is the natural OOP form of this pattern.
- **`str` methods** (c1.js lesson 1.5): none of the Ch.6 examples use string attributes that call `.upper()` or similar. A `name` attribute that gets formatted with `.capitalize()` in a `describe()` method would weave Ch.1 strings into the OOP context naturally. This is a low-cost addition.
- **`return None` trap** (c3s1.js and c3s3.js): the plan mentions the "print-not-return" misconception is important in Ch.3. In Ch.6, method exercise bodies could silently use `print` instead of `return`, producing `None` when the caller tries to use the result. This is one of the most persistent OOP misconceptions at this level. The plan acknowledges it via misconceptions ("returning a new object from a method — students may try to mutate in place instead") but does not have a dedicated debug/fix exercise for the print-not-return bug in a method context. Given how much time was spent on this in Ch.3, a brief 6.3 or 6.5 exercise that provokes it would cement the lesson.

**Re-taught by accident:**
- None found. The plan is careful not to re-explain `for` loops or f-strings — it uses them and moves on. This is correct.

---

## What's strong

- **Concept sequencing is textbook.** Class keyword → attribute → `__init__` → method → multiple instances is the correct dependency order, sourced accurately from Downey/HTTLACS, and the plan follows it faithfully. This matches the chunking principle precisely: each new concept has only one new moving part.

- **The class-level mutable trap in 6.4 is a genuine learning moment.** The plan correctly shows the broken version before the fixed version, names the misconception, and makes students run the broken code. This is exactly how anti-pattern teaching should work — not just "don't do this," but "here is what happens when you do."

- **Error thread is excellent.** Every lesson has a debug exercise, the error classes escalate appropriately (`AttributeError` → `TypeError` → shared-list trap → predict-and-explain), and the errors are all technically verified. The plan's discipline here exceeds most textbooks at this level.

---

*Review by Barbara Oakley persona — Learning How to Learn / A Mind for Numbers lens.*
*Technical claims verified with Python 3.14.5 (Darwin).*
