# Panel Review — Ch.6 Classes — Felienne Hermans (The Programmer's Brain)
**Verdict:** Solid

---

## Findings (from my lens)

### Cognitive load and reading-before-writing

1. [MAJOR] **6.1 hook — five new concepts land simultaneously.** The chapter concept map correctly orders: bare class, then attribute, then `__init__`, then method, then instances. But the 6.1 worked examples immediately show a full `Pet` class with `__init__`, `self`, dot-notation attribute reads, AND two independent instances — all in one hook. The author is told to acknowledge `self` but defer its explanation to 6.2. From the novice's perspective this does not reduce load; it creates five partially-explained tokens in working memory at once. Every other hook in the course (c2s1, c3s0) opens with a Rung 1 Predict exercise: student reads a short piece of code and writes down what it will print before running it. 6.1 skips Rung 1 entirely and starts at Rung 3 (Modify). Fix: open 6.1 with a bare object creation where `__init__` is hidden. Show `pet = Pet("Rex", "dog")` and `pet.name` working; defer showing the `__init__` body to the second example. Add a Rung 1 Predict exercise before any modification task — "what does `print(pet.name)` output?" is enough to orient novices.

2. [MAJOR] **Encapsulation is described but never named.** The overview says "package data and the functions that act on it into a single unit" — that sentence IS the definition of encapsulation, but the word is never used. AUTHORING.md rule 3 requires naming every relevant CS principle explicitly. Students who later encounter the term "encapsulation" in any other resource will not know they already learned it. The same gap applies to "state" as an object concept: objects have their own state, distinct from the variables in the calling script. Fix: add "The CS principle here is **encapsulation** — data and the behavior that acts on it live together" to the 6.3 or 6.4 concept text.

3. [MAJOR] **No class-vs-dict comparison anywhere in the plan.** AUTHORING.md rule 1 requires naming the obvious alternative, showing it, and demonstrating its failure mode. The obvious alternative to a class is a dict + standalone functions: `pet = {"name": "Rex", "species": "dog"}` plus `def describe(pet): ...`. This works until you have a typo, pass the wrong dict, or the function list grows out of sync with the dict structure. The plan never shows this and never explains why a class is better. For an OOP chapter this is the single most important motivating comparison — it is what earns the complexity of `class` syntax. Fix: add a short dict-and-functions version of the Pet example to 6.1 or 6.2 with its failure mode shown, then pivot to the class version.

4. [MINOR] **`name = name` anti-pattern is listed but not exercised.** In 6.2, the plan lists "forgetting `self.` before an attribute name" as a misconception: `name = name` sets a local variable, not an attribute. The debug exercise only tests a typo (`self.nme`), not this deeper mistake. The `name = name` failure is more insidious — it does not raise an error in `__init__`; it raises AttributeError later, in the first method that tries to read the attribute. That delayed-crash pattern is exactly the kind of surprise that The Programmer's Brain research shows novices find hardest to debug. Fix: add a separate debug exercise in 6.2 where `__init__` uses `name = name`, the object is created without error, and a method call then crashes with AttributeError. The student must trace back from the method to the `__init__` assignment.

5. [MINOR] **6.1 and 6.2 have no predict-the-variable-table exercises.** The stepper (live variable table) is the course's signature tool and is "core, not optional, and works on every Python exercise from Chapter 1." Classes introduce a new layer: the instance's attribute table is conceptually separate from the local variable frame. Students need at least one exercise that asks: "After this `__init__` runs, what is the state of `pet`? List each attribute and its value." Without this, the connection between `self.name = name` and the object's stored state is purely verbal — not observed. Fix: add a Rung 1 trace exercise in 6.2 that asks the student to fill out the attribute table after `__init__` completes.

6. [MINOR] **6.3 warm-up is a write task, not a recall question.** "Write one line that defines a function called `greet`..." is a Rung 5/6 task, not a recall question. CURRICULUM-STRUCTURE.md defines warm-up as "a quick recall question from an earlier lesson (spiral / retrieval)." A write task as warm-up adds cognitive work before the lesson's new concept is even introduced. Fix: change to a recall question: "When Python sees a `def` block, does it run the body immediately? What happens when Python reaches a call like `greet(name)`?"

7. [MINOR] **Dunder explanation is mentioned but underspecified.** The plan says "double underscores — why they exist ('dunder,' special to Python)" but gives no language for the author to use. AUTHORING.md requires explaining Python's design choices. The author needs: dunders signal that the interpreter calls this method automatically as part of a protocol; you never call `pet.__init__(...)` directly; the double-underscore prevents name collisions with user code. Without this specificity, the author will write "Python uses `__init__` as a special method name" which is correct but not the why. Fix: specify the author-facing explanation in the plan's misconception note.

8. [MINOR] **Challenge exercise 4 (`top_scorer`) requires `max()` which has not been formally introduced.** Ch.4 owns `sum`, `enumerate`, `zip`, `sorted`. `max()` is not on that list. The expected implementation `max(scores, key=scores.get)` uses `key=` argument which has not appeared in any lesson — `sorted()` with `key=` is also not taught. A for-loop accumulator to find the max manually is achievable with Ch.4 skills, but the plan should make that the expected approach rather than implying `max()` is available. Fix: either add `max()` to the scaffolding note for exercise 4, or specify that the expected solution uses a for loop and a running-max pattern (which also spirals the Ch.3 accumulator pattern).

---

## Continuity notes

**Well-woven:**
- The warm-up for 6.2 ("parameter vs argument") directly recalls c3s2 and primes `__init__(self, name, species)` vs `Pet('Rex', 'dog')`. This is the best warm-up in the chapter.
- The warm-up for 6.4 ("How do you append to a list? What does `append` return?") is well-targeted: `append` returning `None` directly mirrors `self.inventory.append(item)`, and knowing the return value prevents the common `self.inventory = self.inventory.append(item)` bug.
- The warm-up for 6.6 ("reassigning a list variable vs `append`") correctly links back to the class-level list trap from 6.4.
- The `Counter` class in 6.3 (count, increment, reset, value) echoes the accumulator pattern from c3s3 and c2. This will feel familiar and lower load.
- The class-level mutable list trap (6.4) is one of the most persistent Python mistakes and is taught early and well, with a working broken example and a fix.
- `AttributeError` appears in every lesson's debug exercise, which is exactly right — this is the dominant error class in OOP code, and students need repeated exposure to the traceback pattern.

**Missing or under-woven:**
- Students have used methods on strings and lists since Ch.1 (`'hello'.upper()`, `scores.append(item)`) and Ch.4. These are the student's first real encounter with the method-calling syntax. The chapter never explicitly bridges: "you have been calling methods on lists and strings since Chapter 1; now you are writing classes that have methods of their own." This connection would lower the working memory load of 6.3 substantially.
- Scope (c3s4) is closely related to `self`: the reason `self.name` is not the same as `name` is exactly the scope/frame model. 6.2 notes the local-vs-attribute distinction but does not invoke the frame mental model the student already knows. A single sentence — "inside `__init__`, `name` is a local variable in the frame; `self.name` is a slot on the object that persists after the frame is gone" — bridges the two.
- Ch.5's debugging protocol (four steps) is not explicitly recalled in the debug exercises of Ch.6. Given that `AttributeError` is the dominant error here, the protocol "read the bottom line → find the line → walk the stack → hypothesise" applies naturally. At least one debug exercise (perhaps 6.5 with the `self.ptich` typo surfacing in `play()`, not in `__init__`) should explicitly ask the student to name the four steps.

**No accidental re-teaching found:**
- The plan does not re-teach `def`, `return`, `for`, `append`, or list/dict mechanics. All prior knowledge is used as spiral recall, not repeated instruction.

---

## What's strong

- **Concept sequencing is correct.** The decision to separate `__init__` (6.2) from methods (6.3) is well-grounded in HTTLACS ch.15-16 and Think Python ch.15. Many OOP introductions conflate these and produce the "I don't know what `self` is because I saw it in three different roles before any was explained" failure mode. This plan avoids it.

- **The class-level mutable list trap (6.4) is treated seriously and correctly.** This is the most dangerous Python-specific OOP misconception and it has a full debug exercise with a shown broken example and a verified fix. Most OOP curricula for beginners omit this entirely.

- **Two strand applications (Note and Synth) genuinely test transfer.** The musical domain is well-matched to the course's audio strand and the exercises are technically correct. The name-resolution note in 6.5 — that bare `play(...)` in a method body calls the global API, not `self.play()` — is verified, correctly explained, and at the right level of detail for the target age.

---

## Technical claims verified by running Python 3.14.5

- `pet.describe(pet)` → `TypeError: Pet.describe() takes 1 positional argument but 2 were given` — confirmed.
- `self.ptich = pitch` typo → `AttributeError: 'Note' object has no attribute 'pitch'. Did you mean: 'ptich'?` — confirmed. The "Did you mean" suggestion appears in Python 3.14 as stated.
- `inventory = []` at class level → shared across all instances — confirmed.
- `play(self.pitch, self.duration)` inside a method named `play` → calls global `play()`, no recursion — confirmed.
- `name = name` in `__init__` (no `self.`) → `AttributeError: 'Pet' object has no attribute 'name'` — confirmed.
