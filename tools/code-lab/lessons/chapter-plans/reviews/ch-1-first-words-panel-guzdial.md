# Panel Review — Ch.1 First Words — Mark Guzdial (Georgia Tech, computing education research)
**Verdict:** Solid

---

## Findings (from my lens)

**My lens:** Does this plan reflect what the research shows works for novices? Is the concept sequence learnable in this order, not just logically ordered? Are motivating contexts given before abstractions? Is scaffolding evidence-based? Where does the plan diverge from the actual written lessons — and does that divergence matter?

---

1. [MAJOR] **Plan vs implementation gap — large portions of the Ch.1 plan describe lessons that were never written into c1.js.**

   The plan claims Ch.1 "owns" string indexing/slicing, `.join()`, f-strings (including `:.2f`), `round()`, `None` as falsy, and the full truthiness table. None of these appear in the actual written lessons in c1.js. The chapter as implemented teaches: `print`, basic types (int/float/str/bool) with minimal `None`, `type()`, type conversion (`int()`/`float()`/`str()`/`bool()`), variables/assignment, arithmetic operators and precedence, string concat/repetition/`.upper()`/`.lower()`/`.strip()`/`.split()`/`len()`, `input()`, and the turtle/sound strand. That is a legitimate and well-sequenced Ch.1. But the plan describes a substantially more ambitious chapter with ~40% more content that was not built.

   The risk: the plan is used as the authority for what Ch.2 can assume students know. If c2.js already uses f-strings (it does — in the for/range lesson at line 617), but c1.js never taught them, a student arriving at c2.js lesson 5 will encounter f-strings cold. I verified this directly: zero f-string occurrences in c1.js.

   Fix: reconcile the plan with what was actually built. Either (a) update the plan's "concepts owned" list to match c1.js, and assign the deferred concepts (f-strings, indexing/slicing, `:.2f`, `round()`, `.join()`) to their actual owning chapter, or (b) add the missing lessons to Ch.1 before the chapter is considered done. Do not leave the plan describing Ch.1 as teaching things c1.js does not teach.

2. [MAJOR] **`sep=` and `end=` claimed as Ch.1 owned, but taught in c2.js.**

   The plan states lesson 1.1 owns `sep` and `end`. The actual c1.js lesson 1.1 never mentions either. c2.js teaches both as new material in the for/range lesson (lines 567-572), including the full explanation ("print() normally ends each call with a newline"). This is not a minor omission — c2.js explicitly introduces `end=` mid-lesson as if the student has never seen it. One of two things is true: c2.js is re-teaching something the student should already know (a spiral miss), or the Ch.1 plan was written aspirationally and `sep`/`end` were always intended to land in Ch.2. The second interpretation is consistent with the implemented lessons. Fix: update the Ch.1 plan's ownership entry to remove `sep` and `end`, and add them to Ch.2's owned concepts.

3. [MAJOR] **Truthiness: claimed as Ch.1 owned, absent from c1.js, re-taught from scratch in c2.js.**

   The Ch.1 plan assigns truthiness a full subsection in lesson 1.2. c1.js teaches `bool` (True/False as values, `bool(0)` gives False) but contains zero mentions of "falsy," "truthy," or the truthiness concept. c2.js lesson 2.1 then introduces truthiness as new material with a complete explanation: "Falsy values — ones Python treats as false — are exactly these three: the number 0, the empty string '', and the special value None." This is full first-teaching, not recall. The research is clear on why this matters: unplanned re-teaching signals a coverage gap, wastes lesson time that should be spent on new material, and confuses students who encounter it twice with no callback ("wait, did we already learn this?"). Fix: either add truthiness to c1.js as the plan specifies, or move the ownership entry to Ch.2 and mark it properly there.

4. [MINOR] **1.4 — `^` XOR silent-error exercise: inconsistent values between exercise and quiz.**

   In lesson 1.4, the plan's debug exercise uses `2^10` and states the output is `8` (verified: `2^10 = 8` in Python — correct). The Chapter Quiz item uses `2^8` and states the expected output is `10` (verified: `2^8 = 10` in Python — also correct). Both values are technically accurate but using different inputs for the same concept across the lesson and the quiz is a continuity error that will confuse students. The quiz asks them to predict `2^8` but the only worked example in 1.4 used `2^10`. Fix: use the same base case throughout (either both `2^10 = 8` or both `2^8 = 10`). Using `2^8 = 10` in both places is better pedagogically because `10` is unmistakably not a power of 2, which makes the "silent wrong answer" point more vivid than `8` (which could be mistaken for `2^3`).

5. [MINOR] **1.4 — `//` described as "truncates toward negative infinity" in the plan; c1.js says "divide and drop the remainder."**

   The plan correctly names floor division ("truncates toward −∞"). The actual c1.js lesson 1.4 explains `//` as "divide and drop the remainder" which is inaccurate for negative operands (`-7 // 2 = -4`, not `-3`). Verified: `-7 // 2 = -4`. For an 11-year-old who has not yet encountered negative numbers in division, "drop the remainder" works as a first approximation, but the plan's phrasing "toward negative infinity" is available and accurate. This is a Ch.1 issue in the implementation, not the plan, but the plan should note that this nuance is confirmed by actually running the case before writing it into the lesson.

6. [MINOR] **1.5 — `.split()` returns a list, but lists are not taught until Ch.4.**

   The plan handles this correctly: "Lists are introduced only as a return-value here — Ch.4 owns them fully." The plan explicitly limits use to the return value — print the result, split a sentence. This is an appropriate low-floor encounter. What is missing from the plan is the explicit instruction to show students the `['hello', 'chapter']` bracket notation and say "this is a list — you can see and use it but we will not dig into it until Chapter 4." Without that sentence, students will either be confused by the brackets or ask questions the lesson is not equipped to answer. The same applies to `.join()` taking a "list of strings" — the student needs enough mental model to pass the list in, even without owning the concept.

7. [MINOR] **Context-first ordering: lesson 1.2 introduces types before the student has a motivating need to know about types.**

   The evidence base for novice CS education strongly favors context-before-concept. The hook (1.1) gives print, which creates output but does not create a felt need to distinguish `"7"` from `7`. The warm-up "print('5') vs print(5) — are they the same?" is a reasonable bridge. But the lesson plan's primary motivating context for types is the `TypeError` from `"Score: " + 5`. This is purely error-driven motivation — students learn the concept to avoid a crash, not to do something they want to do. Compare to HTTLACS, which motivates types through arithmetic: "why does Python refuse to add this?" is a weaker hook than "here is a thing you want to build that requires knowing the type." The strand application in 1.5 (string building) and 1.6 (calculator) are strong motivators. The plan could strengthen 1.2 by opening with a motivating mini-task — "let's build a name badge that shows 'Hi Alex, you are 11 years old'" — and then run into the `TypeError`, so students encounter types as the solution to a problem rather than as knowledge to avoid errors.

8. [MINOR] **1.7 strand lesson — no `input()` integration despite 1.6 teaching it immediately before.**

   The plan notes: "No new language concepts. Application of: variables (1.3), arithmetic (1.4), print / f-string labelling (1.1, 1.5)." But lesson 1.6 is the lesson directly before 1.7. The strand lesson is the natural place to integrate `input()` — "read a root note from the user, play the chord based on it." Instead, `input()` integration is deferred to Challenge exercise 9. For a novice learner, the strand lesson is the most motivating context for applying new skills. Missing the freshly-learned `input()` in the strand lesson is a missed spiral opportunity. Fix: add one `input()`-driven exercise to 1.7 (e.g., "read a side length from the user, draw the square" or "read a root note, play the chord").

---

## Continuity notes

**Well-woven:**
- The plan correctly sequences values before variables before operators — the HTTLACS ordering that research supports for novices. The concept map dependency arrows in the plan are accurate and match what c1.js actually builds.
- Ch.0 recall is properly scoped: the plan draws on sequence, algorithm exactness, and debugging-as-idea from Ch.0 without re-teaching them. The 1.1 warm-up ("what does a sequence of exact steps look like?") is a genuine recall prompt, not a re-teach.
- The plan's treatment of `bool` as introduced in Ch.1 (True/False as values, `bool()` for conversion) and truthiness as applied in Ch.2 (conditions) is a valid split, but the implementation must honour that split consistently — currently c1.js does not teach truthiness at all, which makes c2.js's full first-teaching of it inconsistent with the plan's claim.

**Missing / inconsistency with what was built:**
- f-strings (owned by Ch.1 plan, absent from c1.js, used in c2.js without prior teaching)
- String indexing and slicing (owned by Ch.1 plan, absent from c1.js)
- `.join()` (owned by Ch.1 plan, absent from c1.js)
- `round()` (owned by Ch.1 plan, absent from c1.js)
- `:.2f` format spec (owned by Ch.1 plan, absent from c1.js)
- `sep=` / `end=` (owned by Ch.1 plan, absent from c1.js, taught in c2.js)
- Full truthiness table (owned by Ch.1 plan, absent from c1.js, re-taught in c2.js)

**Accidental re-teaching risk:**
- Truthiness (c2.js re-teaches from scratch because c1.js never built it).
- `sep=` / `end=` (c2.js introduces as new, contradicting the Ch.1 plan's ownership claim).

---

## What's strong

- **The concept spine is pedagogically sound for the implemented content.** The decision to teach values and types before variables, and operators before strings-deep, is backed by decades of novice CS education research (HTTLACS, Think Python, Downey's sequence). The notional machine (stepper) introduced at 1.2 and carried through is excellent — making program state visible is one of the highest-impact tools for reducing novice misconceptions about variables.

- **The misconception table is unusually thorough and directly tied to exercises.** Each misconception is named, located by lesson, and has a corresponding exercise that provokes it. The `^` vs `**` silent-error exercise (1.4) is exactly right: teaching a class of error that produces a wrong answer with no traceback is more valuable than another TypeError, because students only encounter those with live debugging. The `:.2f` vs `round()` distinction in the misconceptions table is a fine-grained accuracy catch.

- **The `input()` lesson (1.6) correctly names the system boundary principle** and uses it to explain why `input()` always returns a string. This is the kind of principled explanation that builds transferable mental models rather than rules to memorise. The warm-up reconnects to 1.2's `ValueError` cases with the "decimal string" trap (`int("3.5")`) highlighted as the most likely mistake — that is research-informed sequencing.
