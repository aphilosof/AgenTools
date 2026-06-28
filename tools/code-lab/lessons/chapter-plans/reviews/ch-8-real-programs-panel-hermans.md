# Panel Review — Ch.8 Real Programs — Felienne Hermans (The Programmer's Brain)
**Verdict:** Solid

## Findings (from my lens)

1. [MAJOR] Lesson 8.3 — Working memory overload from partial re-teaching of already-taught material

   From a cognitive-load perspective, lesson 8.3 lists seven owned concepts, but `try`/`except` (basic), multiple `except` blocks, bare `except` danger, the `while True` + `try` + `break` input loop, and the EAFP principle were ALL fully taught in c2s8 — with worked examples, exercises, and Codex entries. The plan marks them as "owned by Ch.8," which forces the lesson author to re-introduce them even though students already have the schema. This is re-teaching, not spiral recall, and it eats the lesson's working memory budget before the genuinely new material (the `else` clause, `finally`, `raise`, and `except X as e`) even arrives.

   Fix: Strip the owned-concept list back to what is genuinely new in Ch.8: `except ExceptionType as e`, the `else` clause, `finally`, and `raise`. The input loop pattern and multiple-except idiom should appear only in exercises as recalled scaffolding, not in worked examples that re-explain the concept. This frees the lesson to go deeper on `raise` — the single concept that has the highest cognitive novelty and the most pedagogical leverage for the strand projects.

2. [MAJOR] Lesson 8.3 — The `else` clause misconception is listed but its instruction is backwards

   The plan correctly names the misconception: "the `else` clause on a `try` block runs when an exception *is* caught." But the worked-example for `else` (a dict-lookup with `scores["Alice"]`) is structurally identical to the misconception scenario — it only shows `else` firing on success. A student who holds the misconception will read that example and confirm it. Misconception research (Hermans, *The Programmer's Brain* Ch.7) consistently shows that showing only the correct case does not dislodge an incorrect mental model. You must show the contrast: run the code where `else` fires, then run the code where it does NOT fire (exception occurs), and explicitly label which branch runs in each case.

   Fix: Replace the single `else` worked example with a two-panel contrast: (a) `scores["Alice"]` exists — `else` fires; (b) `scores["Charlie"]` does not exist — `except KeyError` fires, `else` is skipped. Put both outcomes on screen at once. Then add a predict exercise where the student must identify which clauses run given specific input.

3. [MINOR] Lesson 8.2 — No warm-up / spiral recall exercise is specified

   Every lesson per CURRICULUM-STRUCTURE.md §B must open with a "quick recall question from an earlier lesson." Lesson 8.2 (planning) names "recalls: Ch.3, Ch.5 decomposition, DRY, docstrings" but lists no warm-up exercise. Chapter 5 content is a plan, not a written lesson; the only verified prior teaching on decomposition is c3.js. The warm-up should be grounded in what is actually written.

   Fix: Open 8.2 with a warm-up that shows a three-function program from Chapter 3, asks the student to identify which function does which job, and asks what would break if all the logic were in one function. This activates the Ch.3 schema before asking students to apply it at larger scale.

4. [MINOR] Lesson 8.5 — The "Fix a wrong test expectation" exercise is pedagogically risky

   Exercise 1 of 8.5 asks the student to fix an `assert` where "the expected value is wrong in the assert, not in the function." This is a legitimate and important lesson — tests can be wrong. But it is very unusual for a beginner and requires distinguishing between two sources of truth (the function's behavior and the test's expectation). Novice readers tend to trust the code they can see (the assert) and distrust the abstract claim (the function is correct). Without a careful setup of "run the function manually first, then read the assert," students will often fix the function when the test is the bug.

   Fix: Add a mandatory "run the function directly first" step before the fix exercise. Show `print(reverse("hello"))` output inline so the student has ground truth before deciding what to fix. The assertion's expected value can then be compared against a known-good result.

5. [MINOR] Chapter Challenge exercise 5 — `flatten` using `.extend()` needs a note about the cognitive gap

   The plan says write `flatten(list_of_lists)` using a `for` loop and `.extend()`, explicitly noting "nested comprehensions are out of scope." This is correct scope discipline. However, `.extend()` was taught in Chapter 4 (collections). A student encountering it in a blank-editor challenge after four intervening chapters may not retrieve it from long-term memory without a retrieval cue. The challenge page gives no hint that `.extend()` is the intended tool.

   Fix: Add a single italicized hint at the bottom of the exercise spec (not in the hint ladder): "The standard way to merge one list into another in Python is `.extend()`." This is not giving away the answer — it is providing a retrieval cue for a tool that is entirely correct to use here.

6. [MINOR] Lesson 8.4 — The `{…}` vs `[…]` misconception section is the strongest misconception teaching in the chapter but is buried in the misconceptions bullet rather than promoted into the worked example

   The plan's footnote distinguishing set comprehension (`{w for w in words}`) from dict comprehension (`{w: len(w) for w in words}`) is exactly the kind of surface-similarity/deep-difference confusion that causes persistent errors. This is a classic case of what I call "featuritis": two constructs that look almost identical produce completely different types. Students who write the set form when they wanted a dict will get no error — they get a set with wrong type silently. This misconception belongs in a worked example, not a misconceptions bullet.

   Fix: Make the set-vs-dict contrast a mandatory worked example in 8.4, not a footnote. Side-by-side: `{w for w in words}` → set, `{w: len(w) for w in words}` → dict. Run both, print `type(result)`, show the output difference. This takes one worked-example slot and eliminates a persistent source of silent bugs.

---

## Continuity notes

**Well-woven from c1–c3:**
- `ValueError` context: c2s8 already taught `try`/`except ValueError`, `ZeroDivisionError`, multiple except blocks, bare-except danger, and the `while True` + `break` input loop. The ch.8 plan's spiral recalls for 8.3 correctly cite Ch.2, but the "owned concepts" list incorrectly re-claims all of these for Ch.8.
- `while True` + `break` pattern: explicitly taught and exercised in c2s4 (sentinel loops) and c2s8. Ch.8 should recall it in exercises, not introduce it as new.
- `def`, `return`, docstrings: ch.8 correctly treats these as recalled tools from c3.js throughout.
- EAFP principle: named explicitly in c2s8 prose. Ch.8 should reference it by name without re-explaining.

**Missing spiral weave:**
- The `accumulator pattern` (named and taught in c2s4) is the conceptual predecessor of frequency-dict building (`freq[w] = freq.get(w, 0) + 1`). Lesson 8.6a should explicitly name this as "the accumulator pattern you know from Chapter 2, applied to a dict key instead of a running total." The plan does not make this link.
- The `break` inside the input loop was first taught as a sentinel in c2s4 and reinforced in c2s8. When 8.3 re-introduces the input loop, it should open with "you built this pattern in Chapter 2 — here is the extended version with named exceptions," not present it as a new concept.
- f-strings with `:.2f` were taught in Ch.1. Lesson 8.6b (Data Analyzer) would naturally use `:.2f` for mean/min/max display but the plan does not recall it. The lesson author should build it in.

**Re-taught by accident:**
- The owned-concept list for 8.3 includes "input loop / menu" as owned by Ch.8, but c2s8 already owns and teaches this. This will cause the lesson author to write a full re-introduction rather than a brief recall. This is the most consequential continuity error in the plan.

---

## What's strong

- **The misconception inventory is thorough and accurate.** Bare `except:`, the `else`-clause confusion, comprehensions with side effects, `assert` vs. `if` — these are exactly the persistent misconceptions from the research literature. Having them named per-lesson is genuinely good practice and will produce better hint ladders.

- **The `key=freq.get` idiom for top-N is the correct lambda-free pattern.** The plan's decision to introduce `sorted(freq, key=freq.get, reverse=True)[:5]` — naming the bound method rather than a lambda — is pedagogically sound for this level. Lambda is out of scope; `.get` as a first-class function reference is a natural extension of what students already know about dict methods. The note that this technique requires dict `.get()` from Ch.4 is correctly cross-referenced.

- **The strand project design (8.6) achieves genuine synthesis.** Four sub-projects that each combine file-reading patterns, error handling, comprehensions, and testing — at rung 6 with a blank editor — is the right culminating structure for a Python integration chapter. The explicit requirement that at least one sub-project uses `raise ValueError` deliberately (not just catches one) ensures students use both sides of the exception mechanism.
