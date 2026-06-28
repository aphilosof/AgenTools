# Panel Review — Ch.6 Classes — Mark Guzdial (Georgia Tech, computing education research)
**Verdict:** Solid

---

## Findings (from my lens)

1. [MAJOR] 6.1 hook — `self` is shown but deferred without an explicit notional machine.
   The plan correctly flags that `self` appears in the hook code before it is explained, and it provides a single-sentence deferral note: "treat it as a required word that every method starts with." That is better than nothing, but the research on novice OOP learning (Sorva 2012 on notional machines; Kölling & Rosenberger on objects-first pitfalls) shows that students who encounter `self` as a magical keyword they are told to ignore tend to solidify a wrong mental model — that `self` is a ritual incantation rather than a reference to the instance. The plan should tell the student **one concrete fact** in Lesson 6.1 that makes the deferral safe: "`self` is the object on the left side of the dot. When you write `my_pet.describe()`, Python automatically passes `my_pet` in as `self`." That one sentence prevents the magic-keyword model from forming while still reserving the full explanation for 6.3. Without it, 6.3's explanation lands on a misconception that has already hardened for a full lesson.

   Fix: In the 6.1 hook, add one sentence — not a section — that gives students the minimum viable mental model for `self`: it is the instance on the left of the dot. Mark the fuller explanation as coming in 6.3. The note to the author already gestures at this; it should be promoted to required lesson content.

2. [MAJOR] 6.2 — `__init__` initializes vs creates: the plan cites the HTTLACS distinction correctly, but the lesson plan does not include a worked example that makes the two-phase creation observable. The student is told "Python allocates the object first, then `__init__` initializes it" — a correct claim — but there is no scaffolding that makes this visible. Research on constructivist learning (Linn & Eylon 2006) shows that telling students a fact without a perceptible contrast does not produce durable understanding. The plan needs a one-line demonstration: show that you can call `object.__new__(Pet)` and get an object with no attributes, then call `pet.__init__("Rex", "dog")` manually and see the attributes appear. That is the observable contrast that makes the claim stick.

   Fix (less invasive): Show a `Point` instance immediately after `__new__` without `__init__` running, catch the `AttributeError`, then show the same after `__init__`. If that is too advanced for the lesson, at minimum show a `Pet` where `__init__` is missing and demonstrate the resulting `AttributeError` on construction — making the initialization step visible rather than invisible.

3. [MINOR] 6.4 — the class-level list trap (the Python docs §9.3.5 trap) is well-chosen and verified. The debug exercise correctly shows the broken version first. One pedagogical issue: the plan frames this only as "show the broken version, explain why, fix it" — it does not ask the student to predict what they expect before running the broken version. PRIMM demands the Predict step. Without it, the "surprise" of both inventories having the same items is lost; the student reads the explanation before encountering the confusion. Add a Predict rung before the Fix in this exercise: "What do you expect `b.inventory` to contain after this code runs? Write your prediction, then run it."

4. [MINOR] 6.5 — the `play` / `self.play()` name collision is technically correct (verified with Python 3.14) and well-explained. However, this is an advanced name-resolution detail that most OOP curricula at this level skip entirely. The plan buries it in the Misconceptions section, which is appropriate. But the worked example in 6.5 actively triggers this situation — the student writes a method named `play` that calls a global function also named `play`. That is an unusual API design that a beginner would never construct on their own. Consider renaming the method `play_self()` or `sound()` in the worked examples, reserving the naming-collision explanation for a sidebar rather than making it a load-bearing part of the main worked example. The misconception can still be flagged; it just should not require the student to navigate the ambiguity in order to complete the primary task.

5. [MINOR] Progression check — 6.3 jumps from rung 5 to rung 6 (write from scratch: the `Timer` class) in a single lesson. The jump is from "method header given, fill in one-line body" directly to "define a complete 3-method class from blank." There is no rung-5 exercise where the student writes a full method from scratch but the class header and `__init__` are pre-written. The rung-ladder rule (CURRICULUM-STRUCTURE.md §E: examples ramp within a subsection → subsections ramp within a lesson) means there should be an intermediate step. Add a medium exercise in 6.3 where the class header and `__init__` are provided and the student writes two complete methods from scratch (no hints on body structure) before hitting the fully-blank Timer exercise.

6. [MINOR] 6.6 checkpoint warm-up is misaligned. The warm-up asks about "reassigning a list variable vs calling `.append()`" — which is a Ch.4 concept that does not directly prime the checkpoint's musical duet task. The checkpoint's core cognitive challenge is instance independence under method calls, not list mutation. A better warm-up for 6.6: "Write one line that creates a `Synth` instance and one line that creates a second, independent `Synth` with different settings." That recalls 6.4 and directly primes the duet concept. The current warm-up feels like it was imported from 6.4.

---

## Continuity notes

**Well woven:**
- Ch.3 function concepts (`def`, parameters, `return`, scope) are correctly identified as the primary prerequisite and mapped explicitly onto the method concept. The 6.3 warm-up ("write a function called `greet` that takes a `name` parameter and returns a string") is exactly the right retrieval cue to prime the method parallel. This is evidence-based: making the analogy explicit before introducing the new concept reduces cognitive load.
- Ch.1 assignment is correctly invoked for `self.name = name` — "this is the same assignment operation you learned in Lesson 1.3." That specific cross-reference should appear in the lesson prose, not only in the concept map.
- Ch.4 lists appear as `self.inventory = []` in 6.4, which is appropriate and correctly introduces the class-level mutable trap. The Ch.4 recall is load-bearing here, not decorative.
- Ch.2 loops for iterating over a list of instances in 6.4 is correctly identified.

**Missing or at risk:**
- Ch.1 f-strings (taught at `:.2f` depth) are mentioned in 6.1 as a recall tool for printing attributes, but no exercise in any lesson explicitly requires the student to use an f-string inside a method to format an attribute value. This is a missed spiral opportunity: `def describe(self): return f"{self.name} is a {self.species}"` is the natural place where f-strings and methods converge. At least one worked example or exercise should require an f-string inside a method body.
- Ch.2 `while` loops do not appear in the chapter. That is fine — you cannot force spirals — but `while` would be appropriate in a `Timer.tick()` context if the chapter wanted to deepen it.
- `None` (introduced in Ch.3 as the return value of functions without `return`) does not appear in Ch.6 at all. This is a missed connection: a method without a `return` statement also returns `None`, and this should be noted explicitly somewhere in 6.3. The `birthday()` method (which mutates but returns nothing) and the `value()` method (which returns the count) are the natural contrast pair, and the plan already has both in 6.3. The prose should say: "Notice that `birthday()` has no `return` statement. Like a void function in Ch.3, it returns `None`."

**Correctly not re-taught:**
- `def`, parameters, return, scope — the plan marks these as "recalled from Ch.3" throughout. Correct.
- `append`, dicts — correctly marked as recalled from Ch.4, not re-taught.

---

## What's strong

- **The class-level mutable list trap is shown first-broken-then-fixed, which is exactly right.** Research on misconception-driven instruction (Chi et al.) shows that presenting the incorrect intuition first, making it run, and only then explaining why it fails produces more durable correction than presenting the correct version and warning about the alternative. The plan does this correctly in 6.4.

- **The debugging thread escalates in exactly the right way.** Starting from a simple typo in 6.1 (`AttributeError`), through wrong-call `TypeError` in 6.3, to the class-level list trap in 6.4, to a typo that surfaces in a different method from where the bug lives in 6.5, to a predict-and-explain instance-independence check in 6.6 — this is a well-sequenced increase in the cognitive distance between symptom and cause. The distance between where an `AttributeError` points and where the actual bug is located is the central difficulty in OOP debugging, and the plan builds to it correctly.

- **The factory metaphor is used consistently and correctly throughout.** "One class definition, many independent objects" is stated explicitly in the overview, reinforced in 6.1 (run and modify before explaining), and paid off in 6.4 (independence demonstration). This is evidence-based: Kolling's objects-first research and Think Python both use the factory/blueprint metaphor because it correctly separates the class (the template) from the instance (the thing). The plan does not drift from this metaphor or introduce competing metaphors.

---

*Technical verifications completed:*
- 6.5 name resolution: bare `play()` inside a method named `play` calls the global, not self — confirmed Python 3.14.
- 6.4 class-level list trap: both instances share the same list — confirmed Python 3.14.
- 6.3 TypeError: `pet.describe(pet)` raises `TypeError: Pet.describe() takes 1 positional argument but 2 were given` — confirmed Python 3.14.
- 6.5 AttributeError with `self.ptich` typo and `self.pitch` access: error message reads `'Note' object has no attribute 'pitch'. Did you mean: 'ptich'?` — confirmed Python 3.14.
- 6.2 `name = name` without `self.`: creates a local variable that vanishes; subsequent access to `p.name` raises `AttributeError: 'Pet' object has no attribute 'name'` — confirmed Python 3.14.
