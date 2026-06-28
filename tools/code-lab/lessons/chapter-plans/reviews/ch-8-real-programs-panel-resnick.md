# Panel Review — Ch.8 Real Programs — Mitchel Resnick (Scratch, MIT Media Lab)
**Verdict:** Solid

---

## Findings (from my lens)

**My core question for any lesson:** Does the student make something that feels *theirs*? Do they express something, or just satisfy a checker? Chapter 8 is the first place in this course where the answer is genuinely yes — and that matters. By 8.6, the student writes a generative music piece, a word tool, a game. That is real creative latitude. I will flag where the chapter falls short of that promise.

1. [MINOR] **8.1 Hook — the worked program is fixed content, not student-chosen.** The quiz/word-guessing hook lesson has the student run and modify a *pre-written* program. That is fine as a threshold — low floor, read before you make. But the three exercises are all modifications of the author's artifact: add a question, fix a KeyError, change the score display. There is no moment where the student decides anything about what the program is *for*. Compare to how Scratch hook activities always let students change the *sprite* or the *backdrop* — a tiny but real ownership move. A micro-fix: one of the three exercises should invite the student to change the quiz *topic* entirely (e.g. swap in questions about something they care about). That single choice transforms the exercise from reproduction into expression.

2. [MINOR] **8.2 Planning — the final "Write" exercise is structural, not creative.** The rung-6 planning exercise asks students to produce "a data structure + function name list + docstrings only (no logic yet)" from a four-sentence spec they did not choose. That is a legitimate design skill, but the spec is handed to them. For a first full design exercise this is acceptable — you want them to practice the *process*, not discover it. The issue is that the chapter has no moment where the student chooses *what program to build* until the final open exercise (Challenge 8, which is "open-ended: given a two-sentence spec of the student's choice"). That open slot is the most important exercise in the chapter and it appears last, behind six others. If a student runs out of time or energy, they never reach the part where they own the goal. Consider promoting the open spec exercise to an earlier position — perhaps after 8.5 as a mini-project warm-up — so it is not contingent on completing everything before it.

3. [MAJOR] **8.6 Strand projects — three of four sub-projects have locked specs.** 8.6a is "a word-frequency counter." 8.6b is "a daily step-count analyzer." 8.6c is "a number-guessing game or dice simulator." These are the chapter's highest-rung exercises. Yet in all three cases the *goal* is pre-decided. The student writes the code, but the creative decision — what is this program for, what does it mean to me — was made by the chapter author. From a creative learning standpoint, this is a missed opportunity at exactly the moment the course has the most runway (Rung 6, all scaffolding removed, eight chapters of skill in hand). 8.6d (generative music) is the honourable exception: "a generative melody... assembled from a scale" has open latitude in what scale, what rhythm, what pattern — the student's musical taste shapes the output. The other three should offer at least a *parallel spec alternative* the student can substitute. For 8.6a: "or count frequencies in any text you choose." For 8.6b: "or analyze any list of daily measurements you care about." For 8.6c: the game is already open-ended (guess what secret number?). These alternatives cost nothing structurally — the required concepts are exercised either way — but they move the experience from "satisfy the spec" to "build something."

4. [MINOR] **8.5 Testing — the Assert-and-test lesson risks feeling like bureaucracy, not insight.** Writing `assert` tests for functions you just wrote can feel like paperwork — something you do *after* the real work is done, to satisfy a requirement. For an 11-year-old the insight needs to land early and viscerally: "your test caught a bug before you shipped it." The worked example with `is_palindrome` does this right — a subtle bug, four asserts, bug found. But the Fix exercise (8.5 exercise 1) is weaker: the *test* has a wrong expected value, so the student corrects the test, not the function. This is a valid testing concept (tests can be wrong too), but it teaches skepticism about tests at exactly the moment you want the student to trust them. I would reorder: lead with an exercise where a wrong function is caught by a correct test — the "aha, I found a real bug" moment — before showing that tests can also be wrong.

5. [MINOR] **Chapter Challenge exercise 8 — the open spec is a true gift, but it needs a non-negotiable constraint.** "Given a two-sentence spec of the student's choice" is the best exercise in the chapter. It is wide walls, high ceiling. My one concern: without a constraint, an 11-year-old may choose specs that are either too trivial ("print my name five times") or too ambitious ("a full role-playing game"). The instruction should require that the program uses *at least two of the chapter's owned concepts* (e.g. a comprehension AND an assert test). This gives the exercise a low floor and a ceiling without specifying the topic. The creativity is in the domain; the required concepts are the teacher's non-negotiable.

---

## Continuity notes

**Well-woven from c1–c3:**
- `while True` + `break` as the input-loop skeleton is taught thoroughly in c2.js (Lesson 2.4, "Bulletproof input," lines 999–1057). The plan correctly treats this as a recall in 8.3, not re-teaching. No issue.
- EAFP named and explained in c2.js (line 991). Ch.8 does not re-explain it — it uses it. Correct.
- `def`, `return`, docstrings, and scope from c3.js are recalled correctly throughout 8.2 and 8.5 without re-teaching.
- `input()`, type conversion, and `ValueError` introduced in c1.js and deepened in c2.js. Ch.8 treats them as known. Correct.

**Correctly deferred to Ch.8 (new concepts, not re-taught):**
- `except ExceptionType as e` — not in c2.js. Genuinely new in 8.3.
- `else` clause on `try` — not in c2.js. Genuinely new in 8.3.
- `finally` — not in c2.js. Genuinely new in 8.3.
- `raise` — not in c2.js. Genuinely new in 8.3.
- List and dict comprehensions — correctly deferred to 8.4 per CURRICULUM-STRUCTURE.md §D, and correctly not used in c2.js c3.js (c7.js plan uses a comprehension in a parenthetical teacher note but explicitly labels it out of scope for students there).
- `assert` and test functions — not in c1–c3. Genuinely new in 8.5.

**One gap that needs checking:** `KeyError` and `IndexError` are owned by Ch.4 (confirmed: ch-4-collections.md lines 48–49) and rehearsed in Ch.5 and Ch.7. They are never caught with `try`/`except` in c1–c3 because `try`/`except` only covered `ValueError` and `ZeroDivisionError` there. Ch.8.3 introduces catching `KeyError` and `IndexError` — this is the natural next step. Good. But the warm-up for Lesson 8.3 should explicitly recall "what causes a `KeyError`?" (Ch.4) before asking students to catch one. The plan does not specify this; the authoring step should.

**`sorted()` with `key=`:** The plan adopts the `key=freq.get` trick (no lambda) — confirmed working via Python 3 verification. `sorted()` itself is an owned concept of Ch.4 per CURRICULUM-STRUCTURE.md §D ("Common built-ins: `sum`, `enumerate`, `zip`, `sorted` (Ch.4)"). The `key=` argument is new in Ch.8. The plan correctly marks this as an owned concept of Ch.8. No continuity gap.

**`random.choice` in 8.6d:** `random` is introduced in Ch.7. `random.choice` is used there (ch-7 plan line 89). In 8.6d the plan says "`random.choice` over a scale list" — correct recall, no re-teaching needed.

---

## What's strong

- **The 8.6d generative music sub-project is the chapter's creative high point.** A generative melody from a random walk on a user-supplied scale is exactly the kind of expressive, personal artifact that justifies all the preceding skill-building. The student's musical taste shapes the output. This is creative learning at its best.

- **The set vs. dict comprehension disambiguation (8.4) is unusually precise and honest.** Most courses gloss over `{x for x in it}` vs. `{k: v for k, v in it}`. Calling this out explicitly — with the concrete failure mode of accidentally writing a set when you wanted a dict — saves every student at least one 30-minute debugging session. That kind of anticipatory misconception work is what separates good curriculum from adequate curriculum.

- **The `try`/`else` clause is taught here and not smuggled in.** Many Python courses skip the `else` clause on `try` because it is subtle. This plan teaches it explicitly, explains *why* it belongs outside the `try` body (keeping the `try` block minimal), and gives a concrete worked example. That respects the student's intelligence and completeness as a programmer.
