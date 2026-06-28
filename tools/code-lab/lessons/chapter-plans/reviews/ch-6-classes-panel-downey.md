# Panel Review — Ch.6 Classes — Allen Downey (Think Python)
**Verdict:** Solid

---

## Findings (from my lens)

### Mental models and the "why"

1. [MAJOR] 6.2 (`__init__`) — The plan correctly cites the HTTLACS distinction "Python allocates the object first, `__init__` initializes it," but it buries it in a misconceptions note rather than leading with it as the first mental model. In Think Python ch.15 and HTTLACS ch.15 this distinction is the *opening* idea — it determines everything else about how students think about construction. If a student's mental model is "calling `Pet('Rex', 'dog')` runs `__init__`" (which is what the factory metaphor implies), they will be confused when they hear "allocate first, then initialize." The chapter plan should promote this to the first concept sentence in 6.2, not a footnote. Fix: open the 6.2 concept text with: Python creates the blank object first, hands it to `__init__` as `self`, and lets `__init__` fill in the attributes. Calling `Pet('Rex', 'dog')` is shorthand for that two-step process. The misconception bullet can stay — it just shouldn't be the *only* place this appears.

2. [MAJOR] Throughout — The `self` mental model is introduced piecemeal. Lesson 6.1 says "treat `self` as a required word" and defers explanation to 6.2. Lesson 6.2 says "self is the new object being set up." Lesson 6.3 says "self is the instance calling the method." These are all correct, but a student who reads them sequentially gets three different framings with no unification. In Think Python ch.17, Downey makes a single clean statement: *when you call `pet.describe()`, Python translates it to `Pet.describe(pet)` — `self` IS the object before the dot.* That one sentence resolves all three framings simultaneously. The chapter plan never states this translation. Without it, students will accept `self` as a ritual rather than understanding what it means. Fix: 6.2 or 6.3 must include the `pet.describe()` → `Pet.describe(pet)` translation, shown explicitly as an equivalence, not just as "Python handles it for you."

3. [MINOR] 6.1 (Hook) — The factory metaphor is introduced correctly and is the right anchor. But the plan has no explicit "mental model" statement to go with it — only the worked example. Think Python ch.15 uses the diagram: class → one definition → many instances, each with its own attribute namespace. The hook lesson should explicitly state: "every instance is a separate container of values; changing one container never touches another." The plan gets here in 6.4 (Many Instances) but the factory metaphor is hollow until the student knows *why* it matters. A single sentence in 6.1's hook would plant the seed correctly.

4. [MINOR] 6.5 (Note class) — The plan handles the `play()` name collision well and the technical claim is correct (verified: bare `play(self.pitch, self.duration)` inside a method calls the global API, not the method recursively). However, the plan's explanation — "Python searches local scope first, then global/module scope, never on self" — is a reference to LEGB, which was taught in c3.js lesson 3.4 under that exact name. The lesson should *say* "remember LEGB from Chapter 3 — the same rule applies here; bare names resolve through local then global, never through self." Without that explicit link, students will think this is a new rule rather than an application of something they already know. Fix: one sentence connecting this to the LEGB rule taught in 3.4.

### CS principles and comparisons

5. [MAJOR] No lesson explicitly compares a class to a function + dict as an alternative. This comparison is the most important "why OOP?" moment in any introductory course. Think Python ch.15 makes it explicitly: before classes, you would bundle a `Point`'s coordinates in a dict — `{'x': 3, 'y': 4}`. That works until you need functions that operate on it, at which point the function has no natural home and must be called as `move_point(p, dx, dy)` rather than `p.move(dx, dy)`. The class bundles data and functions that act on it — that is the design insight. The chapter plan never states this. Students learn the mechanics of classes without knowing *why Python has them.* Fix: 6.1 or 6.2 should show the dict+function alternative for one worked example, then show how a class cleans it up. This is a one-paragraph addition, not a new lesson.

6. [MINOR] 6.3 (Methods) — The plan says methods are "functions that belong to an object." This is mechanically correct but misses the deeper CS principle: the method has *privileged access to the instance's state via `self`* — it does not need the data passed as an argument because it already has a reference to the object. A regular function would need `describe(pet)` as an argument. A method gets the same data for free through `self`. This is encapsulation in the small. The plan's misconception "method ≠ regular function; students try to call `describe(pet)` instead of `pet.describe()`" notes the surface error but not the underlying reason — which is exactly this privilege distinction. Fix: one sentence in the 6.3 concept block naming encapsulation and explaining why methods have `self`.

### Sequencing

7. [MINOR] Lesson 6.4 warm-up asks "How do you append to a list? What does `append` return?" (Returns `None`.) This is a sound recall question. But the chapter plan does not draw the parallel that will immediately become relevant: `self.inventory.append(item)` returns `None` just as `my_list.append(item)` does — so storing the result of `pick_up()` when it calls `append` internally would silently give `None`. The warm-up plants the right seed but the lesson's worked example should explicitly say "notice we don't return anything from `pick_up` — it mutates `self.inventory` in place, just like `append` mutates a list." This is a two-sentence addition that prevents a category of bugs.

8. [MINOR] The chapter's concept map lists "Ch.4 iteration: looping over a list held in an attribute" as a recalled prerequisite, but no lesson specifically practices `for item in self.inventory:` inside a method body as a natural first encounter. The `show_stats()` method in 6.4's Creature class does this, which is correct. What is missing is explicit narration: "the loop runs exactly as it would over any list — `self.inventory` is just a list that happens to live on an object." One sentence of bridging prose in 6.4's worked example would close this.

### Technical accuracy (all verified with python3 3.14.5)

9. [MINOR] 6.5 error demo: the plan states the error message for `self.ptich` → `self.pitch` access includes "Did you mean: 'ptich'?" and attributes this to Python 3.14 form. Verified correct — the "Did you mean" suggestion does appear in Python 3.14 traceback output. However, `str(e)` (the exception message string) does NOT include "Did you mean" — it only appears in the formatted traceback. The plan's checker note says "do not write checker copy that hard-matches a bare message without the suggestion" — this is exactly right. The lesson prose should clarify: the "Did you mean" appears in the full traceback display, not in the raw error message string. The course's error annotation system should use `traceback.format_exc()`, not `str(e)`. Verified.

10. [BLOCKER] 6.2 misconception: "forgetting `self.` in `__init__`" — the plan says "`name = name` sets a local variable that vanishes." This is correct for the common case, but there is an important subtlety: `name = name` where `name` is also a parameter name is an assignment to a local variable (the parameter itself), which trivially "assigns" without doing anything useful. The student sees `name = name` and thinks "I assigned something" — they are confused when `self.name` does not exist. The lesson must *run* this broken code and show the `AttributeError` immediately, not just describe what happens. The plan lists it as a misconception bullet but does not specify a worked example or exercise that demonstrates it. Fix: add a worked example in 6.2 that shows `name = name` (no `self.`) and immediately accesses `pet.name`, producing the `AttributeError`. This is the single most common `__init__` mistake and it needs more than a mention.

---

## Continuity notes

**Well-woven from c1–c3:**
- The `def` / parameter / argument / `return` foundation from c3s2, c3s3 is correctly assumed throughout. Lesson 6.2's warm-up ("what is the difference between a parameter and an argument?") is precisely the right recall question and connects directly to the actual c3s2 glossary entries.
- c3s4 (scope/LEGB) is implicitly used in 6.5's name-collision discussion. This is correct but not explicitly connected — see Finding 4.
- c1s1's f-strings are correctly recalled in 6.1 (printing attributes). The plan is aware of this.
- c2.js's `for` loops are correctly recalled in 6.4 and 6.5 for iterating over lists of instances. Sound.
- c4's list `append` return-`None` behavior is correctly recalled in 6.4 warm-up. This is a nice precision catch.

**Recalled but not yet written (c4 is a plan, not written lessons):**
- The chapter assumes dicts as attribute values (`self.stats = {}`) and dict iteration (`for k, v in self.stats.items()`). Since c4 is a chapter plan and not written lessons, the reviewer cannot confirm the exact depth at which dict iteration was taught. The plan is architecturally sound — just flag that the author must verify c4's actual dict treatment before writing the `Scoreboard` class (Chapter Challenge exercise 4 uses `d.items()` iteration).

**Missing / re-taught by accident:**
- The LEGB rule is taught in c3s4 by that exact name. The chapter plan for 6.5 explains bare-name resolution without saying "LEGB." This is not a re-teaching error, but it is a missed spiral opportunity — see Finding 4.
- None of the lessons explicitly recall `None` (taught in c3s1 and c3s3) in the context of `__init__`. The 6.2 warm-up question asks about parameters/arguments; a sharper warm-up would ask "what does a function return if it has no `return` statement?" — which is exactly the question listed for 6.1, not 6.2. The 6.1 warm-up is `None`-focused correctly; the 6.2 warm-up correctly shifts to parameters. Sequencing is good.
- `self` outside a method → `NameError` is mentioned in the error classes section as "rare but worth one mention." Verified: referencing `self` at top level raises `NameError: name 'self' is not defined`. The plan notes it correctly but assigns it no exercise home. For completeness, a one-sentence mention in 6.2 or 6.3 would suffice — it doesn't need its own exercise.

---

## What's strong

- **The debug exercise thread is exceptionally well-designed.** Every lesson has a debug exercise, escalating from simple typo (6.1–6.2) to wrong-call TypeError (6.3), to the shared-mutable-list trap (6.4, the classic Python docs §9.3.5 error), to a typo surfacing in a different method from where it was introduced (6.5), to a predict-and-explain independence check (6.6). This is exactly the right progression. The class-level list trap in 6.4 is taught with the broken version shown first — the correct pedagogy.

- **The `play()` name-collision explanation in 6.5 is technically precise and important.** Most OOP introductions for beginners would silently rename the method to avoid the collision. This plan confronts it, verifies it, and explains the LEGB mechanism. That is rigorous and trusts the reader's intelligence. The caveat that `e.__str__()` does not include "Did you mean" (Finding 9) is a minor authoring note, not a flaw in the pedagogical choice.

- **The rung ladder and scaffolding fade are correctly executed.** By 6.3 the hard exercise is full write-from-scratch (a three-method Timer class). By 6.6 the checkpoint exercise is a blank-editor Drumkit class with a sound domain problem the student has never seen — a genuine test of whether the mental model transfers. This matches the CURRICULUM-STRUCTURE.md rule that write-from-scratch is the default expectation from Chapter 3 onward.
