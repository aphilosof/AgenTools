# Panel Review — Ch.8 Real Programs — Mark Guzdial (Georgia Tech, computing education research)
**Verdict:** Solid

---

## Findings (from my lens)

**1. [MAJOR] 8.3 — `else` and `finally` clauses introduced without prior encounter; cognitive load spike at the wrong moment.**

The plan teaches `try`/`except`/`else`/`finally`/`raise` and `except ExceptionType as e` all in lesson 8.3. That is five new constructs in a single lesson that already carries the input-loop pattern. The actual c2.js lesson (2.8) is thorough on `try`/`except`, EAFP, bare-`except` dangers, and the bulletproof-input loop — but it teaches *none* of the advanced clauses. So the learner arrives at 8.3 with solid `try`/`except` fluency but zero prior exposure to `else`, `finally`, `raise`, or named exception variables.

The `else` clause on a `try` is consistently ranked by CS education researchers as one of the hardest Python constructs for novices — not because the syntax is complex, but because the mental model conflicts with their existing `if`/`else` schema. They expect `else` to mean "when it fails." The plan correctly calls out this misconception, but puts `else`, `finally`, and `raise` in the same lesson as `except ... as e`, giving no room for the misconception to surface and be resolved before the next construct arrives.

Fix: move `finally` to a standalone sidebar/callout (not a full concept), and defer `raise` to a second dedicated lesson or make it the final exercise of 8.3 at rung 6 only — not a concept cluster. Keep `except ... as e` and the `else` clause in 8.3 but give them the full lesson arc (worked examples + misconception contrast + exercises). `raise` is well-motivated in 8.6a/8.6c strand projects — teach it there as a "now you need it" moment rather than front-loading it in the concept lesson.

**2. [MAJOR] 8.3 — `KeyError` and `IndexError` introduced as *caught* exceptions without being re-introduced as concepts.**

The plan lists `KeyError` (recalled from Ch.4) and `IndexError` (recalled from Ch.4) as exceptions to catch in 8.3. But the ch-4 plan owns these as *raised* errors — the learner has seen them appear in tracebacks and knows to avoid them. Catching them in a `try`/`except` is a genuinely different cognitive move: instead of "fix your code so this doesn't happen," the message becomes "expect this, plan for it." That shift needs to be named explicitly. The 8.3 lesson plan mentions `except KeyError as e` in an exercise but the concept-section text does not explain *why* you would intentionally catch a `KeyError` rather than guard with `.get()`. The comparison — `try`/`except KeyError` vs. `dict.get(key, default)` — is missing and is exactly the kind of EAFP vs. LBYL contrast that AUTHORING.md mandates. Without it, students learn a syntax without a decision rule.

Fix: add one worked-example slot in 8.3 that explicitly contrasts `try`/`except KeyError` vs. `.get()`, names when each is appropriate (`.get()` for simple defaults; `try`/`except` when the `except` body needs to do real work or re-raise), and places it in the context students already know from Ch.4.

**3. [MINOR] 8.2 — The "spec → stubs → fill in" workflow is taught without connecting to the debugging protocol from Ch.5.**

Lesson 8.2 teaches program design at scale and the "stub + fill in + integrate" workflow. Ch.5 owns the formal debugging protocol (read bottom line, find line, walk stack, hypothesise, test) and preconditions/postconditions. The plan does not mention Ch.5 at all in its spiral recalls for 8.2. A stub *is* a precondition claim — it says "when I call this function with valid inputs, I will get back a result of this type." Connecting the two makes the design workflow feel like a continuation of something the learner already owns, not a new idea. This is a missed spiral-recall opportunity.

Fix: in the 8.2 concept section, explicitly tie stubs to preconditions (Ch.5 recall) and tie the "run after filling in each function" workflow to the debugging protocol (run → observe → isolate). One sentence is enough; the concept is already in the learner's head.

**4. [MINOR] 8.4 — Set comprehension vs. dict comprehension contrast is present but placed as a misconception note, not a worked example.**

The plan correctly flags `{w for w in words}` (set) vs. `{w: len(w) for w in words}` (dict) as a common confusion. This is a real and serious error pattern — I have seen it in undergraduate CS1 students as well as adult learners. However, the plan addresses it only in the misconceptions list. The AUTHORING.md depth standard requires the wrong version to be *shown and demonstrated*, not just mentioned. A student who reads about the distinction in a misconceptions note and then writes code under time pressure will still default to the wrong form.

Fix: add a two-line side-by-side worked example showing `{w for w in words}` (result: set, unordered, no duplicates, no values) vs. `{w: len(w) for w in words}` (result: dict) with explicit `type()` calls so the learner can run it and see the difference in output. This is a rung-1 Predict exercise waiting to be written.

**5. [MINOR] 8.5 — The "fix the failing assert" exercise conflates two distinct skills.**

Exercise idea in 8.5: "A `def test_reverse()` has one assert that passes and one that fails (the expected value is wrong in the assert, not in the function) — read the AssertionError, correct the test expectation, not the function." This is a legitimate and valuable exercise — it teaches students to read their own test expectations critically, not just the code under test. However, the plan does not indicate anywhere in 8.5 that the lesson will teach students to distinguish between "my test is wrong" and "my code is wrong" as two different diagnostic branches. This distinction is non-obvious for novices: when an assert fails, they overwhelmingly assume the code is wrong. The exercise is good; the concept block needs to name this distinction explicitly before the exercise appears.

Fix: add one sentence to the 8.5 concept section: "When an `AssertionError` fires, there are two possible causes — the function has a bug, or the expected value in the assert is wrong. Part of writing tests is learning to read the failure before deciding which one it is."

**6. [MINOR] 8.6 — Strand projects jump to rung 6 (all four sub-projects) with no worked example to read first before writing.**

The plan says "each has a worked example to read first, then blank editor." That is stated in the arc description. But each sub-project is already a write-from-scratch program at maximum scale — the worked example is described as "shorter" (e.g. a "character frequency" version for 8.6a). Research on worked examples for novices (Sweller, Paas) consistently shows that a shorter-but-structurally-parallel worked example reduces germane load on the write task. The plan correctly includes this. However, the connection between worked example and student task needs to be made explicit in the lesson design: the student should be asked to identify the structural parallels (where are the functions? where is the accumulator? where is the input loop?) before opening the blank editor. Without that bridge step, many learners will try to write from memory rather than from transfer.

Fix: add a brief "map the structure" task between the worked example and the blank editor for each sub-project — e.g., "name the three functions in the worked example" or "where does the input loop live?" One to two questions, rung-2 level. This is low cost and significantly improves transfer from read to write.

---

## Continuity notes

**Well-woven:**
- The `while True` + `try`/`except` + `break` input loop is directly recalled from c2.js lesson 2.8, where it was taught explicitly with a worked example and a rung-5 exercise. The plan builds on it rather than re-teaching it — correct.
- EAFP is named and explained in c2.js 2.8. The plan recalls it in 8.3 at greater depth, which is appropriate spiral deepening.
- The `for`-loop accumulator pattern (`freq[w] = freq.get(w, 0) + 1`) is correctly attributed as a Ch.4 recall and the plan explicitly warns that dict comprehensions cannot replicate it. Technical claim verified: `{w: 1 for w in words}` (last-write-wins) is not an accumulator — correct.
- `sorted(freq, key=freq.get, reverse=True)` is technically verified and works correctly.
- Bare `except:` dangers were taught in c2.js 2.8 with the specific point about silently swallowing bugs. The plan recalls and deepens this — no re-teaching needed.

**Missing / weakened:**
- `except ValueError` and `except ZeroDivisionError` are taught in c2.js. `except KeyError` and `except IndexError` as *caught* exceptions are new in 8.3 — the plan lists them as "recalled" but catching them deliberately (EAFP style) is a new application requiring explicit bridge. See finding 2.
- The plan says `assert` was "encountered in tracebacks" (Ch.3 spiral recall in 8.5). I could not confirm `assert` appears in any c1.js or c2.js lesson. The c3.js sample I read does not show it either. If `assert` is genuinely new in 8.5, the recall annotation in the concept map is wrong and should read "new concept" not "recalled." This should be verified against the full c3.js and c4.js–c7.js files before writing 8.5.
- Ch.5's debugging protocol is not woven into 8.2 or 8.5. Both lessons would benefit from explicit spiral recall of the four-step protocol when discussing stubs and test failures. See finding 3.

**Accidentally re-taught:**
- Nothing is clearly re-taught from scratch. The plan is careful to say "recalled" vs. "owned." The risk is in the `KeyError`/`IndexError` catching (finding 2) where the "new application" looks like re-teaching without the lesson plan making the distinction clear.

---

## What's strong

- **The frequency-counter anti-example is technically correct and pedagogically honest.** The plan explicitly warns that dict comprehensions cannot accumulate (they are transformations, not counters), provides the correct `for`-loop + `.get()` pattern, and explains why. This distinction confuses adult learners in CS1 at Georgia Tech — getting it right here is not a given.

- **The rung progression across the full chapter is well-calibrated.** Opening with rung-3 Modify on a 60-line working program (8.1 Hook) before teaching any new syntax is exactly the PRIMM research recommendation — it establishes the context and motivates the concepts before introducing them. The chapter then climbs to rung-6 write-from-scratch at 8.6. The progression is not compressed.

- **Misconception coverage is unusually thorough.** The chapter-wide misconception list covers `try`/`except` for files only, `assert` in production, testing means running once, and the `else` clause meaning. These are the specific misconceptions my own research group has documented in novice Python learners. The plan does not merely list them — it ties each to the lesson where it is most likely to surface.
