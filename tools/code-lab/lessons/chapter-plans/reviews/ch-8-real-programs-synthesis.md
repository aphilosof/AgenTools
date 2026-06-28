# Synthesis — Ch.8 Real Programs

**Overall verdict:** Needs fixes

**Consensus issues (flagged by 2+ reviewers):**
- Lesson 8.3 cognitive-load overload (Guzdial, Hermans, Oakley) — too many new constructs in one lesson
- Ownership list incorrectly claims `try`/`except` for Ch.8 when it was fully taught in c2s8 (Hermans, Oakley, Ramalho)
- `else` clause misconception addressed only by showing success case, not the contrast (Hermans, Downey)
- Set-vs-dict comprehension contrast belongs in a worked example, not a misconceptions bullet (Guzdial, Hermans, Ramalho)
- Warm-up / spiral retrieval questions absent from every lesson (Oakley, Hermans, and implicitly all others)
- 8.5 "fix the test, not the function" exercise ordered incorrectly — teaches wrong default reflex first (Malan, Resnick, Guzdial, Oakley, Downey — five of seven)
- `finally` owned as a concept but has no exercise that requires it (Malan)
- `except ExceptionType as e` introduced without prior scaffolding (Downey, Guzdial)
- Call-graph / notional-machine mental model missing from 8.2 design lesson (Downey, Malan)
- 8.6 strand projects missing a bridge step between worked example and blank editor (Guzdial, Malan)
- 8.6b spec incorrectly says "computes mean/min/max using list comprehensions" (Ramalho — factual error)
- 8.4 worked example claims "for-loop took five lines" — actual count is three (Ramalho — factual error)
- f-strings used in exercises without confirmed prior teaching (Malan, Oakley)

---

## Prioritised fix list

### BLOCKERS

**B1. Factual error in 8.6b spec: remove "using list comprehensions" for min/max**
(Ramalho, high confidence — verified against Python 3)
The spec says "computes mean/min/max using list comprehensions." `min(data)` and `max(data)` are built-ins that already iterate the list; wrapping them in a comprehension is redundant and teaches the wrong tool. The correct framing: use `sum(data) / len(data)` for mean; `min(data)` / `max(data)` for extremes; a list comprehension for filtering days below threshold. Fix: rewrite 8.6b spec to "uses a list comprehension to filter days below the threshold; finds min, max, and mean with `min()`, `max()`, `sum()`, and `len()`."

**B2. Factual error in 8.4 worked example: "five lines" → three lines**
(Ramalho, verified)
The for-loop equivalent of `{w: len(w) for w in words}` is three lines, not five. Overstating the saving trains students to pad loops. Fix: say "three lines" or drop the line count and focus on structural clarity instead.

**B3. `except ExceptionType as e` introduced at write-rung without prior scaffolded encounter**
(Downey, confirmed by Resnick continuity check)
Exercise 4 of 8.3 asks students to write `except KeyError as e` and use `e` in an f-string — but `as e` has never appeared in any prior lesson. The mental model shift (exception as inspectable object) is non-trivial. Fix: teach `except ExceptionType as e` as an explicit step in 8.3 with its own worked example showing what `str(e)` or `{e}` produces, before any exercise requires the student to write it. First encounter should be rung 1 (Predict what prints) not rung 5 (Complete the code).

**B4. 8.3 Concepts-Owned list claims ownership of `try`/`except` — already owned by c2s8**
(Hermans, Oakley, Ramalho — confirmed against c2.js)
The owned-concepts list for 8.3 includes `try`/`except`, multiple `except` blocks, bare-except danger, EAFP, and the `while True` + `try` + `break` input loop. All five were fully taught in c2s8 with worked examples and exercises to rung 5. Claiming ownership here forces lesson authors to re-introduce them as if new, wasting the lesson's working-memory budget before the genuinely new material arrives. Fix: split the Concepts Owned list into two explicit groups — "deepened here (first taught Ch.2): `try`/`except`, multiple except, bare-except, input-loop pattern" and "new in Ch.8: `except E as e`, `else` clause, `finally`, `raise`."

---

### MAJORS

**M1. 8.3 cognitive overload: too many genuinely new constructs in one lesson**
(Guzdial, Hermans, Oakley — independent convergence)
`except E as e`, `else` clause, `finally`, `raise`, and the `KeyError`/`IndexError` catching-not-avoiding distinction are all introduced in a single 15–25 minute lesson. The `else` clause on `try` is consistently rated one of the hardest Python constructs for novices (conflicts with `if/else` schema); correcting that misconception while simultaneously introducing `finally` and `raise` means three "this works differently than expected" moments back-to-back. Guzdial and Oakley both recommend a split; Hermans recommends demoting `finally` to a sidebar/callout. Recommended resolution: move `finally` to a sidebar callout (it has no exercise home anyway — see B3 fix below, or give it one); defer `raise` to be introduced at the strand-project layer (8.6a/8.6c) as a "now you need it" moment, keeping the 8.3 core to `except E as e`, `else`, and the bridge worked example for `KeyError`/`IndexError` catching vs. `.get()`.

**M2. `else` clause worked example only shows success path — misconception is confirmed, not corrected**
(Hermans, Downey)
The plan lists "else runs when exception *is* caught" as a chapter-wide misconception. But the worked example for `else` only shows the case where it fires (no exception). A student who holds the misconception will read that example and have their incorrect model confirmed. Research on misconception correction (Hermans, *The Programmer's Brain* Ch.7) requires showing the contrast: what happens when the exception occurs (else skipped) alongside what happens when it does not (else runs). Fix: replace the single-case `else` worked example with a two-panel contrast — (a) key exists: try body runs, else runs; (b) key missing: except fires, else skipped — displayed simultaneously with explicit labels. Add a Predict exercise requiring the student to identify which clauses run given specific input.

**M3. 8.2 Design lesson missing the call-graph mental model**
(Downey, Malan — independently)
8.2 teaches spec → stubs → fill in → integrate. Both Downey (Think Python perspective) and Malan (CS50 perspective) flag that without a visual or traced call-graph ("which function calls which, what each receives, what each returns"), "decompose into functions" remains advice rather than actionable technique. The noun/verb extraction heuristic (Malan: "underline nouns → data; underline verbs → functions") is also absent. These two additions — a call-graph diagram for the temperature converter example, and a one-paragraph noun/verb extraction model — are what bridge 8.2 from "showing design" to "teaching how to design." Fix: (a) add a call-graph diagram for the temperature converter worked example showing which function calls which and what flows between them; (b) immediately before the final Write exercise, add a one-paragraph "nouns = data, verbs = functions" extraction model applied to a sample spec, then let students apply it.

**M4. 8.1 Hook skips the Predict step — the aha-moment is planned but not designed**
(Malan, Resnick)
The hook runs a 60-line program and invites modification. The emotional target — "I can read this entire program using only what I already know" — is named in the misconceptions list but never engineered into an exercise. Both Malan and Resnick flag that showing code and saying "thinker" is not the same as making the student prove to themselves they recognise every piece. Fix: add an explicit annotation step before the first run: "Read the first 20 lines and write the Ch.1–7 concept next to each block." This is the Predict step that makes the hook actually work. (Resnick's additional point — give students one choice about the program's topic — is a worthwhile secondary enhancement.)

**M5. Warm-up / retrieval questions absent from every lesson**
(Oakley — primary; implicit in Hermans and Guzdial curriculum-structure checks)
CURRICULUM-STRUCTURE.md §B mandates a spiral retrieval warm-up at the start of every lesson. Zero lessons in Ch.8 specify one. This is the integration chapter — the highest-value place in the entire course for deliberate retrieval of Ch.1–7 material. Without forced retrieval, material that is "recalled" in lesson narrative will not actually be active in the student's working memory when they need it for the exercises. Fix: specify a warm-up for each lesson. Suggested prompts (Oakley's list is the right starting point): 8.1 — write a function returning a list sum (primes Ch.3/4); 8.2 — "what is the difference between a function with `return` vs. `print`?" (primes the design lesson's core issue); 8.3 — write the bulletproof input loop from Ch.2 from memory (direct retrieval of the pattern being extended); 8.4 — write a for-loop + append that doubles a list (primes comprehension as shorter form); 8.5 — write `double(n)` and call it, compare result manually (primes assert as a better check than reading output); 8.6 — strand-specific retrieval from Ch.4/Ch.6/Ch.7.

**M6. `KeyError` / `IndexError` catching introduced without EAFP-vs-LBYL decision rule**
(Guzdial)
Students have seen `KeyError` and `IndexError` in tracebacks and have been taught to *avoid* them (LBYL: guard with `.get()`, check length). Catching them in `try`/`except` is a different cognitive move: deliberately planning for the error rather than preventing it. The plan exercises `except KeyError as e` but no worked example explains *why* you would catch `KeyError` instead of guarding with `.get()`, or when each idiom is appropriate. Fix: add one worked example in 8.3 contrasting `try`/`except KeyError` vs. `dict.get(key, default)`, naming when each is appropriate: ".get() for simple defaults; try/except when the except body needs to do real work, log, or re-raise."

---

### MINORS

**m1. `finally` has no exercise — concept without practice**
(Malan)
`finally` is listed as an owned concept with a worked example but no exercise requires a student to write or complete a `finally` block. Fix: convert the `safe_divide` Write exercise (currently just `try`/`except`) to `try`/`except`/`finally` where `finally` prints "Calculation complete." regardless of outcome. This is three extra lines and closes the ownership gap.

**m2. 8.5 Exercise order teaches wrong default reflex**
(Malan, Resnick, Guzdial, Oakley, Downey — five reviewers)
Exercise 1 of 8.5 asks students to fix a wrong *test expectation* rather than a wrong *function*. Five reviewers flag this as the wrong first lesson for testing: it pre-loads the excuse ("maybe my test is wrong") before the reflex ("my function is wrong") is established. Fix: swap exercise order. Exercise 1: broken function, correct test catches it — the "assert found a real bug" moment. Exercise 2 or 3 (after the primary reflex is established): the case where the test expectation itself is wrong. The existing exercise is valuable — just reordered.

**m3. Set-vs-dict comprehension contrast must be a worked example, not a misconceptions bullet**
(Guzdial, Hermans, Ramalho — three reviewers; Downey endorses)
All three flag that showing the distinction only in a misconceptions note is insufficient. Students who read the bullet and then write code under pressure will still default to the wrong form — because the set form `{w for w in words}` produces no error, just a wrong type. Fix: promote to a mandatory worked example in 8.4: side-by-side `{w for w in words}` → set vs. `{w: len(w) for w in words}` → dict, with `type(result)` calls so students can run both and see the difference. Add Ramalho's specific edge case: `{}` alone is an empty dict; an empty set requires `set()`.

**m4. `f"No score for {e}"` output contains nested quotes — surprising for an 11-year-old**
(Ramalho — verified against Python 3)
`str(KeyError('Bob'))` is `"'Bob'"`, so `f"No score for {e}"` prints `No score for 'Bob'` with quotes inside. Fix: use `f"No score for {e.args[0]}"` to produce `No score for Bob`, or explicitly call out that `{e}` includes quotes and explain why `KeyError.__str__()` behaves that way.

**m5. `assert` without a message produces empty `AssertionError` — lesson should enforce the message form**
(Ramalho, Oakley)
`assert False` raises `AssertionError:` with no text. Students who write bare `assert result == expected` in exercises will get nearly unreadable failures. The lesson owns `assert condition, message` but does not stress that the message form is the standard practice. Fix: make the worked examples always use the message form, and add one explicit note: "Without a message, `AssertionError` tells you nothing about *why* the check failed — always include one."

**m6. 8.6 strand projects need a bridge step between worked example and blank editor**
(Guzdial, Malan)
The plan says "each has a worked example to read first, then blank editor." But without a structured bridge — even two questions asking the student to map the worked example's structure — most students will try to write from memory rather than from transfer. Fix: add 1–2 structural questions between the worked example and the blank editor for each sub-project: e.g., "name the three functions in the worked example" and "where does the input loop live?" (Rung 2 level, takes under two minutes.)

**m7. f-strings used in exercises without confirmed prior teaching**
(Malan — primary, Oakley corroborates)
Malan searched c1.js, c2.js, c3.js for f-strings and found zero taught instances (one incidental use in c2.js not as a concept). Exercise 4 of 8.3 specifies `f"No score for {e}"` as the required output syntax. If f-strings were not formally taught in Ch.1–7, Ch.8 cannot assume them. Fix: either (a) confirm f-strings appear in a worked example and exercise in a specific lesson between Ch.1 and Ch.8 and add a spiral-recall note; or (b) rewrite the 8.3 exercise to accept `print("No score for", e)` as the baseline and treat f-strings as an optional enhancement. Do not let Ch.8 be the place f-strings are silently required for the first time.

**m8. `sorted(freq, key=freq.get)` — passing a function as a value needs one explicit sentence**
(Ramalho, Oakley)
This is the first time a method reference is passed without calling it (`freq.get` not `freq.get()`). Students who try `key=freq.get()` will get a `TypeError`. Fix: add one sentence in the worked example: "Python lets you pass a function without calling it — `freq.get` without `()` is the function itself; `sorted` will call it once per word."

**m9. 8.6 strand projects: three of four have no student choice over the program's purpose**
(Resnick)
8.6a, 8.6b, and 8.6c have locked specs. Only 8.6d (generative music) has genuine latitude. Fix: add an opt-in alternative to each locked sub-project: "or count frequencies in any text you choose" (8.6a); "or analyze any daily measurement data you care about" (8.6b). The required concepts are identical; the creative ownership changes the experience. This costs nothing structurally.

**m10. Downey `else`/`finally` depth: the *why* of each clause needs one more sentence**
(Downey)
"else: runs only when no exception was raised" states the rule without the insight. "anything you put inside `try` beyond the risky line is code you are implicitly claiming you can handle — move it to `else`" is the insight. Similarly, "finally: signals cleanup intent" omits that it runs even when `return` or `break` is hit inside `try` and even when the exception propagates uncaught. Fix: add one sentence each clarifying the *motivation* for `else` and `finally`, not just the mechanics.

**m11. Chapter Quiz question 5 is unautogradeable as specified**
(Downey)
"Given a two-line spec, name the functions you would define" cannot be auto-checked because `main()` and `do_stuff()` technically satisfy it. Fix: either provide the specific spec so the expected function list is deterministic, or explicitly label Q5 as a "compare your answer" item, not an auto-gate.

**m12. Chapter Recap section is absent**
(Oakley)
CURRICULUM-STRUCTURE §C requires a sixth arc item: "Chapter recap — Codex consolidation + a retrieval set for later spiral." Ch.8 has no consolidation section and no list of retrieval targets for Ch.9+. Fix: add a Chapter Recap naming the 5–7 must-stick concepts and 4–5 retrieval questions for use in later chapters (Oakley's list is a good starting point: comprehension syntax, `assert`/test function shape, `try`/`except`/`else`/`raise` pattern, program-design workflow).

**m13. 8.5 assert exercises need ground truth before the fix step**
(Hermans)
For the "fix a wrong test expectation" exercise, students need to see the function's output directly before they can judge which side is wrong. Fix: add a mandatory "run the function directly first" step — show `print(reverse("hello"))` inline — so the student has ground truth before deciding what to fix.

**m14. Challenge exercise 8 (open spec) needs a concept constraint**
(Resnick)
The open "two-sentence spec of your choice" exercise has no floor or ceiling guard. An 11-year-old may write "print my name" or "a full RPG." Fix: require the program to use at least two of the chapter's owned concepts (e.g., a comprehension and an assert test). The creativity is in the domain; the concepts are the non-negotiable.

**m15. 8.6 sub-projects listed as a single lesson at unrealistic time scale**
(Oakley)
Four write-from-scratch programs at rung 6 cannot fit one 15–25 minute lesson. Fix: explicitly label 8.6a–8.6d as four separate sub-sessions and specify difficulty ordering and per-session warm-up.

**m16. `dict.get(key, default)` and accumulator pattern labeled "recalled from Ch.4" but Ch.4 lessons not yet written**
(Oakley)
Before authoring 8.6a, verify `freq.get(w, 0)` appears in an actual c4.js worked example. If not, it must be introduced explicitly in 8.2 or 8.3 rather than assumed.

---

## Cross-cutting themes

**1. Cognitive-load discipline in 8.3.** Four reviewers (Guzdial, Hermans, Oakley, Downey) independently flag lesson 8.3 as overloaded. The root cause is that the Concepts-Owned list (B4 above) is wrong — it claims material already taught — which makes the lesson feel like it must cover far more than it actually does. Fixing B4 directly resolves most of the overload.

**2. Misconception instruction that confirms rather than corrects.** Both Hermans and Downey flag that the `else` clause instruction shows only the success case, which confirms the most common misconception rather than correcting it. This reflects a general principle: listing a misconception in a bullet is not the same as designing instruction to defeat it. Every misconception in Ch.8's list should be paired with a contrast exercise, not just a warning sentence.

**3. Write-rung exercises appearing before their cognitive prerequisite.** Three separate issues fit this pattern: `as e` used before it is taught (B3); "fix the test, not the function" appearing before "assert finds bugs in functions" is established (m2); the final Write exercise in 8.2 appearing before the noun/verb extraction model is shown (M3). In each case, the plan correctly identifies the skill but places an exercise requiring it before the prerequisite concept is in place.

**4. Factual precision.** Two factual errors (B1, B2) were caught by Ramalho through code execution. The chapter plan should not contain unverified numerical claims ("five lines") or incorrect tool guidance ("min/max using comprehensions"). Future plans should include a "verified by running" note next to any code snippet or quantitative claim.

**5. Retrieval architecture is missing.** Warm-up questions (Oakley, Hermans) and the chapter recap (Oakley) are both mandated by CURRICULUM-STRUCTURE but absent from Ch.8. For an integration chapter, this is the highest-cost omission: deliberate retrieval is the mechanism that makes prior knowledge actually available when students need it in the strand projects.

**6. Creative ownership below the level the chapter's rung warrants.** Resnick flags that three of four strand-project specs are locked (author-chosen goals), and that the open-choice exercise appears last where many students will never reach it. At Rung 6 with eight chapters of skill, the student has earned the right to choose what they build. Giving them alternative specs costs nothing in concept coverage.

---

## Reviewer conflicts & resolutions

**Conflict 1: When to teach `raise`**
- Guzdial: defer `raise` to 8.6 strand projects as a "now you need it" moment.
- Downey: keep `raise` in 8.3 but use worked examples before exercises.
- Oakley: split 8.3 into two lessons, keeping `raise` in the first.
- Resolution: defer `raise` to the strand-project layer (8.6a/8.6c requirement), as Guzdial recommends. This reduces 8.3's load (addressing M1), and `raise` is better motivated when the student is writing a complete program and needs it for real. The "Concepts Owned" entry for `raise` remains correct — just the teaching moment moves from 8.3 to 8.6.

**Conflict 2: Whether to split 8.3 into two lessons**
- Oakley: split into two lessons.
- Guzdial: restructure within one lesson (move `finally` to sidebar, defer `raise`).
- Hermans: demote `finally` to a callout, strip the re-taught material, keep as one lesson.
- Downey: keep as one lesson with deeper treatment of `else`/`finally`.
- Resolution: do not split the lesson — splitting adds a structural change that ripples through the numbering. Instead: (a) fix the Concepts-Owned list (B4 — removing the re-taught material immediately reduces apparent load); (b) demote `finally` to a sidebar callout and give it one exercise slot (m1); (c) defer `raise` to 8.6 (Conflict 1 resolution). What remains in 8.3's core is `except E as e`, `else` clause, `KeyError`/`IndexError` catching decision (M6), and the `finally` sidebar. That is manageable in one lesson.

**Conflict 3: Should 8.5 Exercise 1 teach "the test can be wrong"?**
- Malan: wrong lesson to lead with — teaches wrong default reflex.
- Resnick: agrees with Malan, reorder.
- Guzdial, Oakley, Downey: all flag the exercise but with milder wording (add framing, add setup, add ground truth display).
- Resolution: Malan and Resnick are correct on the ordering. Fix: Exercise 1 should be "correct test catches broken function." The "test itself can be wrong" exercise moves to Exercise 2 or 3, with the ground-truth pre-step (Hermans) and the explicit concept note (Downey/Guzdial) added. The exercise stays in the lesson — just not first.

**Conflict 4: Overall verdict**
- All 7 reviewers gave "Solid."
- However, two factual errors (B1, B2), one unscaffolded concept at write-rung (B3), one misleading ownership label (B4), and five MAJORs together mean the plan cannot go to authoring as-is without corrections.
- Resolution: verdict is "Needs fixes" — the chapter architecture is sound (all reviewers agree on this) but specific errors and structural omissions must be resolved before lesson authoring begins.
