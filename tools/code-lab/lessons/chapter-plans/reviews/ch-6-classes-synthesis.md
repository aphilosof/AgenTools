# Synthesis — Ch.6 Classes
**Overall verdict:** Needs fixes
**Consensus issues (flagged by 2+ reviewers):** (1) "Did you mean" claim in 6.5 is factually wrong — 5 reviewers; (2) no class-vs-dict motivating comparison — 4 reviewers; (3) `self` mental model never given its one clarifying mechanical statement — 4 reviewers; (4) `name = name` anti-pattern needs a full debug exercise, not just a misconceptions bullet — 3 reviewers; (5) encapsulation never named as a CS principle — 2 reviewers; (6) LEGB link in 6.5 is a missed spiral, not a new explanation — 2 reviewers; (7) 6.6 debug exercise is predict-only, not a fix — 2 reviewers; (8) Ch.5 debugging protocol not recalled in any Ch.6 debug exercise — 2 reviewers.

---

## Prioritised fix list

### BLOCKERS

**B1 — Remove the "Did you mean: 'ptich'?" claim from 6.5 (5/7 reviewers: Malan, Ramalho, Resnick, Hermans via implication, Downey via caveat)**

The plan states that Python 3.14 produces `'Note' object has no attribute 'pitch'. Did you mean: 'ptich'?` for the `self.ptich` typo. Verified by multiple reviewers against Python 3.14.5: this suggestion does NOT appear for dynamically set instance attributes. The "Did you mean" feature (introduced in 3.12) covers module-level and class-method lookups, not `self.x` stored at runtime. The plan's own checker note ("do not hard-match a bare message without the suggestion") is correct but built on a false premise. Teaching students to expect a suggestion that will not appear erodes trust when they encounter the real error.

Fix: Remove the parenthetical "(Python 3.14 form — the suggestion points straight at the typo)" entirely. Rewrite the exercise note to say: "Python reports the error at `play()`, the line that tries to read `self.pitch`. The bug is in `__init__`, which stored `self.ptich` instead. Python cannot tell you what you meant — it only knows the name you asked for does not exist. That is the lesson: the error site is not the bug site." Also correct Ramalho's minor note: the introduced version should be labelled "Python 3.10+ form, visible in the traceback display but not in `str(e)`" when referring to the feature in general — but for this specific exercise, remove the claim entirely.

---

### MAJORS

**M1 — Add the `self` mechanical translation in 6.2 or 6.3 (4/7 reviewers: Downey, Malan, Guzdial, Hermans)**

The plan gives three different framings of `self` across three lessons: "required word" (6.1), "the new object being set up" (6.2), "the instance calling the method" (6.3). None of them give the unifying mechanical fact: `my_pet.describe()` is Python shorthand for `Pet.describe(my_pet)`. That one equivalence resolves all three framings simultaneously, explains why you never pass `self` explicitly (giving the 6.3 TypeError its self-evident quality), and makes `self` a piece of mechanics rather than a ritual. This is the single most important explanatory addition to the chapter.

Fix: Add a one-screen worked example in 6.2 or 6.3 showing both call forms side by side with the explicit comment "Python rewrites the first form as the second." This is 3–4 lines of code plus one sentence of prose.

**M2 — Add a class-vs-dict motivating comparison in 6.1 or 6.2 (4/7 reviewers: Downey, Malan, Hermans, Ramalho implied via Pythonicity notes; Malan frames it explicitly)**

The plan never answers "why not just use a dict?" Students who learned dicts in Ch.4 have no reason to pay the complexity cost of `class` syntax unless they see what dicts fail at. The comparison is: `pet = {"name": "Rex", "species": "dog"}` plus `def describe(pet): ...` — fine for a while, until you have many such functions, typos in dict keys go undetected, and the function has no natural home next to the data. A class bundles the data and the functions that act on it. This is encapsulation in the small. Without this comparison, OOP feels like a harder way to do what dicts already do.

Fix: Add a short "before and after" block to 6.1 or 6.2: show the dict+function version of the Pet example, demonstrate its failure mode (a typo in a key, a function that forgets a field), then show the class version as the improvement. One paragraph of prose plus two code blocks.

**M3 — Name "encapsulation" as a CS principle (2/7 reviewers: Hermans [MAJOR], Malan [MINOR — but aligned with AUTHORING.md rule 3])**

The overview sentence "package data and the functions that act on it into a single unit" IS the definition of encapsulation, but the word never appears anywhere in the plan. AUTHORING.md rule 3 requires naming every relevant CS principle explicitly. Students who later encounter "encapsulation" in any other context will not know they already understand it.

Fix: Add one sentence to the 6.3 or 6.4 concept text: "The CS principle here is encapsulation — data and the behavior that acts on it live in the same object."

**M4 — Promote `__init__` two-phase creation from misconception footnote to opening concept in 6.2 (2/7 reviewers: Downey [MAJOR], Guzdial [MAJOR])**

The plan correctly cites the HTTLACS distinction "Python allocates the object first, `__init__` initializes it" — but only as a misconceptions bullet, not as the leading mental model. Both Downey and Guzdial flag that this distinction determines everything else about how students think about construction. A student whose mental model is "calling `Pet('Rex', 'dog')` runs `__init__`" will be confused by any reference to the two-step process.

Fix: Promote the two-phase creation statement to the first concept sentence of 6.2. The misconception bullet can remain as a reinforcement, not as the only place the idea appears.

**M5 — 6.1 hook must not require writing `__init__` bodies before `__init__` is taught (2/7 reviewers: Oakley [MAJOR], Malan [MAJOR])**

The plan's 6.1 medium exercise asks students to fill in a blank `__init__` body (three `self.x = x` lines) — a Rung 5 task — before `__init__` is formally taught in 6.2. The hook lesson is supposed to be run-and-modify (Rungs 3–5), not "complete the concept-lesson exercise one lesson early." This front-loads a concept that is explicitly scoped to 6.2.

Fix: Either (a) make the 6.1 exercises genuinely read-and-modify only — students add an attribute to a given Pet class and read it back, but the `__init__` header and structure are always pre-filled; or (b) if the early exposure is intentional, the author note must say so explicitly and the exercise scaffolding must give the complete `__init__` header with only the body to fill in, never a blank class. Remove the "blank `__init__` body" framing from 6.1.

**M6 — Add a runnable demo for the `name = name` anti-pattern in 6.2 (3/7 reviewers: Downey [BLOCKER-adjacent], Hermans [MINOR], Guzdial implied)**

The `name = name` mistake (no `self.`) is listed as a misconception bullet in 6.2, but the only debug exercise tests a typo (`self.nme`). The `name = name` failure is more insidious: `__init__` runs without error; the crash only comes later when a method tries to read the attribute. This delayed-crash pattern is the hardest OOP debugging scenario for novices. The plan does not include a worked example or exercise that makes the student experience this sequence.

Fix: Add a worked example in 6.2 (or convert one of the existing debug exercises) that runs `__init__` with `name = name`, creates the object without error, then crashes on attribute access. The student must trace back from the method to the `__init__` assignment.

**M7 — 6.1 warm-up should give students one concrete minimum-viable fact about `self` before deferring (2/7 reviewers: Guzdial [MAJOR], Hermans [MAJOR via cognitive load])**

The current deferral "treat `self` as a required word" leaves students with a magic-keyword model that, once formed, is hard to correct. Guzdial cites Sorva 2012 on this directly. A one-sentence concrete anchor in 6.1 prevents the misconception from hardening without spoiling the 6.2–6.3 explanations.

Fix: In the 6.1 author note (and eventually the lesson prose), add one sentence: "`self` is the object on the left side of the dot — when you write `my_pet.describe()`, Python automatically passes `my_pet` in as `self`." This is the minimum viable model, not the full explanation.

---

### MINORS

**m1 — Link the 6.5 bare-name resolution explicitly to LEGB from Ch.3 (2/7 reviewers: Downey, Resnick)**

The plan re-explains LEGB in 6.5 without naming it. This is a missed spiral, not a re-teaching error. One sentence — "remember the LEGB rule from Chapter 3 — Python searches local scope first, then module/global, never on `self`" — transforms new-rule anxiety into recognition.

**m2 — 6.6 debug exercise must be a code fix, not just a predict-and-explain (2/7 reviewers: Malan, Oakley implied)**

A predict-and-explain is valuable for metacognition but does not satisfy the CURRICULUM-STRUCTURE.md requirement for a fix exercise per lesson. Add a companion fix exercise where a `Synth` class has `volume` at class level (not in `__init__`), causing both instances to go silent when one is muted. The student moves it into `__init__`. This closes the chapter by recycling the biggest misconception (shared mutable class variable) in a new domain.

**m3 — Recall Ch.5 four-step debugging protocol in at least one Ch.6 debug exercise (2/7 reviewers: Ramalho, Hermans)**

Ch.5 ends with a formalised debugging protocol students must apply explicitly. Ch.6 debug exercises never invoke it. At minimum, the 6.5 debug exercise (typo surfacing in a different method — the highest-reasoning-distance scenario) should ask the student to apply the four-step protocol explicitly before fixing.

**m4 — 6.3 warm-up is a write task, not a recall question (1/7 reviewers: Hermans [MINOR], supported by CURRICULUM-STRUCTURE.md definition)**

"Write one line that defines a function called `greet`..." is Rung 5/6, not a recall question. CURRICULUM-STRUCTURE.md defines warm-ups as quick retrieval questions, not production tasks. Fix: change to "When Python sees a `def` block, does it run the body immediately? What happens when Python reaches a call like `greet(name)`?"

**m5 — Challenge exercise 4 (`top_scorer`) should specify the expected implementation approach (2/7 reviewers: Hermans, Ramalho)**

`max(key=...)` has not been taught; a for-loop accumulator is the in-scope approach, but the plan implies the Pythonic one-liner. Add a scaffolding note: "Use a for loop and a running-max variable — the `key=` argument to `max()` is not yet in scope."

**m6 — Bridge "you've already been calling methods" in 6.1 or 6.3 (2/7 reviewers: Hermans, Resnick)**

Students have called `'hello'.upper()` and `scores.append(item)` since Ch.1. The plan never says "you have been calling methods on strings and lists since Chapter 1 — now you are defining your own." This one sentence dramatically lowers the working memory cost of 6.3.

**m7 — Add a one-sentence `print(instance)` callout in 6.1 or 6.3 (1/7 reviewers: Ramalho; defensible without support)**

Students who type `print(my_pet)` will see `<__main__.Pet object at 0x1050c6120>`. The plan sidesteps this by always printing specific attributes, but the dodge is silent. One sentence: "If you print an object directly, Python shows a memory address — not its attributes. You will learn to fix this in a later chapter."

**m8 — 6.4 Creature preview in 6.2 creates cognitive debt (1/7 reviewer: Malan)**

The 6.2 Creature stub with `hp` and `attack` promises a future exercise the student cannot yet do anything with. Fix: either use a different class for 6.2 Worked-example 3, or make the 6.2 version identical to the 6.4 version and add an explicit author note: "You will add methods to this class in Lesson 6.4."

**m9 — 6.6 warm-up is misaligned with the checkpoint's core challenge (1/7 reviewer: Guzdial)**

The warm-up about list reassignment vs. `append` is a Ch.4 concept that primes the wrong thing. The checkpoint's core challenge is instance independence. Fix: "Write one line that creates a `Synth` instance and one line that creates a second, independent `Synth` with different settings."

**m10 — Rung 3 → Rung 6 jump in 6.3 skips an intermediate step (1/7 reviewer: Guzdial)**

There is no exercise in 6.3 where the class header and `__init__` are pre-written and the student writes two complete methods from scratch before hitting the fully-blank Timer. Add one medium exercise at this rung.

**m11 — Add at least one predict-the-variable/attribute-table exercise at the lesson level (2/7 reviewers: Hermans, Oakley)**

The stepper shows instance attribute tables. At least one lesson-level Rung 1 exercise should ask students to fill in the attribute table after `__init__` completes — making the connection between `self.name = name` and stored state observable, not just verbal. Best placed in 6.2 or 6.4.

**m12 — No f-string retrieval warm-up in any lesson (1/7 reviewer: Oakley; Guzdial identifies no exercise requiring f-string inside a method)**

After five chapters, f-string fluency needs periodic testing. Add a warm-up or require an f-string inside at least one method body (e.g., `describe()` returns an f-string using `self.name`).

---

## Cross-cutting themes

**Theme 1 — The `self` explanation is fragmented across three lessons and never unified.**
Downey, Malan, Guzdial, and Hermans all flag this independently. The fix is a single mechanical statement (the method-call translation) that resolves all three partial framings simultaneously. This is the most-cited structural gap in the chapter.

**Theme 2 — Factual error in 6.5 ("Did you mean" suggestion for instance attribute typos) — requires a corrective rewrite.**
Five of seven reviewers caught this, from different angles. Malan and Ramalho are most precise technically. The claim is wrong; the lesson it teaches (error site ≠ bug site) is right and stands without the suggestion. The fix is a deletion, not an addition.

**Theme 3 — The "why OOP over dicts?" question is never answered.**
Downey, Malan, and Hermans all raise this. Resnick raises the adjacent concern that students have no reason to care about the syntax. The class-vs-dict comparison is the standard motivating comparison for OOP in every cited source (Think Python, CS50, The Programmer's Brain). Its absence is the single biggest gap in pedagogical motivation.

**Theme 4 — Cognitive overload at the 6.1 hook.**
Hermans (5 new concepts simultaneously), Oakley (rung-6 task in the hook), Malan (three unresolved tokens at once), and Guzdial (magic-keyword model hardens) all converge on the same problem from different frameworks. The root cause is that the hook uses a fully-formed `Pet` class with `__init__`, `self`, and two instances before any of these are explained. The fix options differ (bare class first, or tighter scaffolding), but the diagnosis is unanimous.

**Theme 5 — Missing spiral recall connections to Ch.5 debugging protocol and Ch.3 LEGB.**
Ramalho and Hermans both flag the Ch.5 protocol; Downey and Resnick both flag the LEGB link. Neither is a new concept to teach — both are recalled concepts that should be named explicitly in Ch.6 exercises.

---

## Reviewer conflicts and resolutions

**Conflict 1: How to fix the 6.1 hook overload.**
- Malan advocates option (a): introduce a bare class with no `__init__` first (attributes set via dot notation post-instantiation), then layer `__init__` in 6.2.
- Ramalho advocates option (b): remove "bare class, no methods" from the concept map to match what the lessons actually do — i.e., accept the full `Pet` class in 6.1 but tighten the scaffolding.
- Hermans and Oakley advocate opening with a Rung 1 Predict exercise before any modification.
- Guzdial and Downey want a one-sentence minimum-viable `self` anchor added to 6.1.

**Resolution:** The bare-class approach (Malan's option a) is architecturally consistent with the concept map as written and with HTTLACS ch.15. It also naturally postpones `__init__` to 6.2, making that lesson's teaching target unambiguous. Adopt option (a): lesson 6.1 opens with `pet = Pet(); pet.name = "Rex"` (bare class, no `__init__`), then uses the working full-class example for motivation and modification. The concept map already lists "bare class, no methods yet" as step one — the lessons should match it. Combine with Guzdial's one-sentence `self` anchor and Hermans' Rung 1 Predict opening exercise.

**Conflict 2: Whether the `name = name` issue is a BLOCKER or a MINOR.**
- Downey rates it BLOCKER-adjacent, citing that it is the most common `__init__` mistake and needs a runnable demo.
- Hermans rates it MINOR, focusing on the delayed-crash pattern.
- Ramalho finds the 6.2 treatment "well-handled" (MINOR).

**Resolution:** Downey and Hermans agree on the fix (add a runnable demo that shows the delayed crash); they differ only on severity. The fix is unambiguously the right addition. Rate it MAJOR because it concerns the most common beginner OOP error and the plan currently has no exercise that surfaces the delayed-crash pattern. Ramalho's "well-handled" assessment is overly generous — the plan lists it as a misconception bullet only, which is not sufficient for a mistake this common.

**Conflict 3: Whether the `play()` naming collision in 6.5 should be retained or avoided.**
- Guzdial recommends renaming the method to avoid the collision, arguing it is an unusual API design that no beginner would construct independently and that the name-resolution detail should be a sidebar, not load-bearing in the main worked example.
- Downey, Ramalho, and Resnick all note the explanation is technically correct and treat it positively.
- Hermans does not flag it.

**Resolution:** Retain the collision and the explanation, but move it explicitly into the "Things to know" or misconceptions sidebar rather than letting it be a load-bearing part of the first worked example. The LEGB connection makes it a genuine spiral recall moment, not a new concept. Guzdial's concern about it being load-bearing in the primary task is valid — the fix is positioning, not deletion.

**Conflict 4: Severity of the 6.6 predict-only debug exercise.**
- Malan rates it MINOR and recommends adding a companion fix exercise.
- Oakley notes it as a watch-item for authoring.
- Other reviewers do not flag it.

**Resolution:** The CURRICULUM-STRUCTURE.md requirement is unambiguous — each lesson needs at least one fix exercise. The predict-and-explain is valuable but additional. Add Malan's companion fix (class-level `volume` attribute causing shared silencing). Rate it MINOR.
