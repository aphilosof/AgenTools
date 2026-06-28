# Holistic Final Review — Code Lab Python Arc (Ch.0–Ch.8)

**Reviewer:** Claude Sonnet 4.6 (holistic subagent)
**Date:** 2026-06-26
**Scope:** All nine chapter plans (ch-0 through ch-8) and the three implemented lesson files (c1.js, c2.js, c3.js).

---

## 1. Overall Arc Verdict

The arc is **pedagogically sound and structurally coherent**. The dependency ordering is correct at every chapter boundary, the spiral weaving is intentional and well-documented, and the difficulty ramp from concrete-and-unplugged (Ch.0) to write-full-programs-from-spec (Ch.8) is appropriate for a strong 11-year-old over the course of a year. The chapter plans are among the most carefully reasoned introductory CS curricula I have reviewed at this age level.

That said, there are five cross-chapter issues that need resolution before authoring begins on Ch.4 and beyond. None of them invalidates the arc; all are fixable within the existing plan structure.

---

## 2. Concept Ownership Audit

### Concepts with exactly one clear owner

| Concept | Chapter |
|---|---|
| sequence, algorithm, iteration, selection, decomposition | Ch.0 |
| print, types, type conversion, variables, arithmetic/precedence, strings, input | Ch.1 |
| comparisons, bool ops, if/elif/else, while, for/range, break/continue, try/except | Ch.2 |
| def, parameters, return, scope, default args, docstrings | Ch.3 |
| list, tuple, set, dict, indexing, slicing, enumerate, zip, sorted | Ch.4 |
| decomposition (deepened), DRY, naming, debugging protocol, preconditions/assert | Ch.5 |
| class, __init__, self, method, instance, AttributeError | Ch.6 |
| import, module, file I/O, json, sqlite3 | Ch.7 |
| comprehensions, try/except deepened (as e, else, finally), raise, test functions | Ch.8 |

No concept is claimed by two chapters in conflict. The "deepened here, introduced earlier" pattern (DRY in Ch.3 → deepened Ch.5; debugging in Ch.2 → deepened Ch.5; try/except in Ch.2 → deepened Ch.8) is explicitly documented in each plan and handled correctly.

### Concepts with justified early appearances

- **`for char in text:` and `char in "aeiou"`** — first contact in c3s8, owned fully by Ch.5. The c3s8 plan requires a rung-1 predict block before any exercise uses these constructs. Justified and flagged correctly.
- **String indexing/slicing** — the Ch.1 plan assigns ownership to Ch.1 (c1s5). The Ch.4 plan (4.2) explicitly notes "Do NOT assume Ch.1 indexing knowledge — this lesson IS the introduction." This is a direct contradiction (Issue #1 below).
- **`len()`** — used in Ch.1, Ch.2, Ch.3, Ch.4 exercises without issue; the function is introduced in c1s5 and recalled everywhere. No conflict.
- **accumulator pattern** — introduced in Ch.2 (L2.4), recalled in Ch.3 (c3s8), deepened in Ch.4. Correctly handled — Ch.4 explicitly frames it as a recall in 4.3 WE#2.
- **`random` module** — introduced in Ch.4 (4.7) with a dot-notation note, no prior ownership claim. Justified.
- **`abstraction`** — modelled unnamed in Ch.0, named in Ch.3 (c3s0 tag, concept-card note), deepened Ch.5. The three-chapter arc is intentional and well-documented.
- **`ZeroDivisionError`** — previewed Ch.1, first formally handled Ch.2 c2s8, recalled and formalised in Ch.5 5.5C. The three-touch pattern is correct.

---

## 3. Spiral Weaving

### What is woven well

Every chapter plan includes an explicit "Recalled from earlier chapters" block that lists prior concepts by chapter, lesson, and section. The following spirals are well-executed:

- **accumulator pattern**: Ch.2 → Ch.3 (explicit) → Ch.4 (framed as recall, not re-definition) → Ch.7 (game-log extractor) → Ch.8 (text tool)
- **f-strings with :.2f**: Ch.1 → Ch.2 (used in c2s5) → Ch.3 (c3s7 tip-splitter explicitly uses `f"${:.2f}"`) → Ch.5 (challenge exercise) → Ch.8 (strand projects)
- **Ch.2 try/except**: Ch.2 (c2s8) → Ch.5 (5.5C EAFP vs LBYL comparison) → Ch.7 (7.5 data-wrangling choices) → Ch.8 (deepened with `as e`, `else`, `finally`)
- **debuggng protocol**: Ch.0 (debugging as mindset) → Ch.1 (error classes) → Ch.2 (three-step, c2s6) → Ch.3 (applied in c3s3 fix exercises) → Ch.5 (four-step formalised) → Ch.6 (applied to OOP AttributeError in 6.5) → Ch.8 (applied at program scale)
- **LEGB scope**: introduced in Ch.3 c3s4 exactly once, recalled in Ch.6 c6s5 (same-named `play()` scope issue), not re-introduced anywhere else. Correct.
- **Ch.0 pseudocode-to-Python transfer**: the Ch.0 Recap's "What's Next" panel maps pseudocode `repeat N times:` to Python's `for i in range(N):`, which Ch.2 cashes in on. The Ch.0 Recap also specifies a contractual spiral schedule with exact lesson assignments in Ch.1, Ch.2, and Ch.4.

### What is woven but needs a specific authoring action

- **Ch.0 Recap contractual spiral** assigns warm-up retrieval items to Ch.1 (L1.1–L1.5), Ch.2 (L2.1–L2.5), and Ch.4 (L4.1–L4.4). This debt is noted in Ch.0 but is NOT reflected in the Ch.1, Ch.2, or Ch.4 plans' lesson-level warm-up specifications. The plans describe warm-ups that recall the prior chapter, but they do not reproduce the exact Ch.0 retrieval items. This is a loose end — either the Ch.0 contract should be explicitly relaxed (the spirit of the retrieval is preserved even if not the exact questions) or each plan's warm-up list needs an amendment.
- **Ch.0 Recap "Ch.1 callback debt"**: Ch.0 requires c1s7 to explicitly name `play()` and `sleep()` as function calls the student has already used. The c1s7 implementation in c1.js does mention both APIs but the plan notes this as a debt. This is a minor authoring action, not a structural problem.

---

## 4. Difficulty Arc

| Chapter | Peak rung | Write-from-scratch default? | Judgment |
|---|---|---|---|
| Ch.0 | Rung 2–3 (Parsons + one value change) | No | Correct — pre-syntax |
| Ch.1 | Rung 6 (by c1s6 mini-project) | Partially | Correct — escalates within chapter |
| Ch.2 | Rung 6 (from c2s3 onward) | Yes by c2s5 | Correct |
| Ch.3 | Rung 6 (write-from-scratch milestone) | Yes (default by c3s3) | Correct |
| Ch.4 | Rung 6 (all hard exercises) | Yes (default by 4.3) | Correct |
| Ch.5 | Rung 6 throughout | Yes | Correct |
| Ch.6 | Rung 6 (checkpoint at 6.6) | Yes | Correct |
| Ch.7 | Rung 3–6, with sub-strand resets | Partially | Sound pedagogy; ramp resets are justified |
| Ch.8 | Rung 6 (strand projects 8.6) | Yes | Correct |

The ramp is **smooth and correct**. The Ch.7 ramp resets (7.3 dips after 7.2, 7.7 dips for SQL) are explicitly justified in the plan as "sub-strand resets" — new formal vocabulary (SQL) requires its own climb from predict-and-read to write. This is sound pedagogy and does not break the overall chapter-to-chapter upward trajectory.

One concern: Ch.6 (classes) arrives at Ch.8's full difficulty peak without the intermediate difficulty plateau that Ch.7 provides. Students writing a `Drumkit` class from scratch (6.6 checkpoint) and then stepping back to modify `import math` code (7.1) should feel like a relief, not a regression. The plans handle this correctly — the Ch.6/Ch.7 transition is explicitly bridged by the opening paragraph: "You now know how to organise code into functions (Ch.3) and objects (Ch.6). Python itself has thousands of solved problems waiting."

---

## 5. Cross-Chapter Issues

### Issue #1 (CRITICAL): String indexing/slicing ownership conflict

**Problem:** The Ch.1 plan (c1s5) lists "string indexing & slicing" (`s[0]`, `s[-1]`, `s[1:3]`) as owned concepts, and the Ch.1 quiz gates on `"Python"[0]`, `"Python"[-1]`, `"Python"[1:4]`. However, c1.js does NOT contain any indexing or slicing content — the actual implemented c1s5 teaches concatenation, `.upper()`, `.lower()`, `.strip()`, `.split()`, and `len()` only. The Ch.4 plan (4.2) explicitly says "Do NOT assume Ch.1 indexing knowledge. This lesson IS the introduction." These two plans are contradictory and cannot both be correct.

**Consequence:** If indexing is owned by Ch.1 (as the Ch.1 plan claims), Ch.4 must treat it as a recall, not a first introduction. If indexing is owned by Ch.4 (as the Ch.4 plan implies), then the Ch.1 quiz must be revised to remove indexing questions, and the Ch.1 plan's "concepts owned" list must drop `string indexing & slicing`.

**Recommendation:** Given that c1.js does not implement indexing, the Ch.4 plan's position ("first introduction in 4.2") is the implementation truth. The Ch.1 plan must be amended to remove string indexing/slicing from its owned-concepts list and chapter quiz. The Ch.4 plan's 4.2 authoring note is correct as written. This decision must propagate to CURRICULUM-STRUCTURE.md's concept spine.

---

### Issue #2 (CRITICAL): f-strings and `:.2f` not implemented in c1.js

**Problem:** The Ch.1 plan claims f-strings (including `:.2f` money formatting) as owned concepts in c1s5. The c1.js file does NOT contain any f-string content — the actual c1s5 teaches string methods and concatenation. The Ch.2 plan's c2s5 example code includes an f-string (`print(f"i = {i}")`) in a worked example, introduced without explanation as though the student already knows f-strings. The Ch.7 plan has an explicit "Authoring dependency note (Blocker B4)" flagging that f-strings are NOT confirmed in c1.js–c3.js.

**Consequence:** Seven chapters (Ch.2–Ch.8) include f-strings in exercises, worked examples, and quiz items that rely on f-strings being prior knowledge from Ch.1. If c1s5 never formally introduced them, students encounter f-strings as unexplained syntax beginning in c2s5 and repeatedly through Ch.3 (c3s7 uses `f"${:.2f}"` as a recall, Ch.3 quiz uses `:.2f`).

The Ch.3 implementation (c3.js) uses f-strings in examples (e.g., the tip-splitter, the motif examples) as if they are known. If c1s5 has not been authored with f-strings yet, this chain is broken.

**Recommendation:** Before authoring any further lessons, the Ch.1 plan's status note at the top lists this as item B1: "f-strings (incl. `:.2f`) — Absent — Add to c1s5." This is a confirmed known gap. The authoring gate (gate rule B3) correctly blocks the Ch.1 quiz deployment until c1s5 is complete. However, this issue must be explicitly re-raised for Ch.4 onward: **authoring of Ch.4 is blocked until c1s5 with f-strings is implemented and tested.**

---

### Issue #3 (MODERATE): Truthiness falsy-list error in live c2s1

**Problem:** The Ch.1 plan header notes (item NEW-1, MAJOR): c2s1 in the live c2.js file states falsy values are "exactly these three: `0`, `""`, and `None`" — omitting `0.0` and `False`. The c2.js grep confirms this exact wording at line 56. The Ch.2 plan correctly lists the full falsy set. This is a factual error in a deployed lesson.

**Consequence:** Students who encounter `bool(0.0)` or `bool(False)` in Ch.2 exercises or the Ch.2 quiz will have a contradictory mental model. The Ch.2 plan's L2.1 misconception list explicitly says "Do NOT state 'exactly three falsy values' — that is factually wrong."

**Recommendation:** Fix c2s1 prose now, independently of any other authoring work. The fix is a one-sentence replacement: "Falsy values — the ones Python treats as false — are: `0`, `0.0`, `""`, `None`, and `False`. Every other value is truthy." No structural change required.

---

### Issue #4 (MODERATE): `sep`/`end` print parameters — ownership gap in Ch.2 plan

**Problem:** The Ch.1 plan correctly removes `sep`/`end` from c1s5 and labels them "Ch.2-owned." The c2.js implementation introduces them in c2s5 (confirmed: lines 563–572, with examples and a reference card). However, the Ch.2 plan's "Concepts owned (keywords)" section does NOT list `sep` or `end` — they appear only in implementation. The Ch.1 plan's implementation notes flag this (item NEW-4, MINOR).

**Consequence:** The concept spine in CURRICULUM-STRUCTURE.md cannot be audited correctly because the Ch.2 plan is missing an owned concept. Any future automated concept-spine audit will not find `sep`/`end` in Ch.2's owned list even though they are taught in c2s5.

**Recommendation:** Add `sep` and `end` to Ch.2 plan's "Concepts owned (keywords)" section with the note "taught in c2s5 where the felt need arises inside a loop." This is a one-line addition to the plan, not a content change.

---

### Issue #5 (MODERATE): `str.split(sep)` and `str.join()` ownership unresolved through Ch.7

**Problem:** The Ch.7 plan contains a prominent "Authoring dependency note (Blocker B4)" stating that `str.split(sep)` with a custom separator and `str.join()` are NOT confirmed as formally introduced in c1.js–c3.js. The Ch.4 challenge exercise #4 (word_count) and Ch.7 lessons 7.5 and 7.6 both rely on `str.split(sep)`. The Ch.3 plan's c3s8 (Functions in the Wild) uses `.split()` as a recall from Ch.1. Ch.1's c1s5 teaches no-arg `.split()` (confirmed in c1.js line 497: `sentence.strip().split()`), but never introduces the delimiter form `split(",")` or `.join()`.

**Consequence:** Multiple authored chapters (Ch.3 c3s8, Ch.4 challenge #4, Ch.7 7.5–7.6) rely on `str.split(sep)` and `str.join()` as prior knowledge, but no chapter has formally taught the delimiter form and `.join()` to the student. This is a gap in the concept chain, not just a documentation gap.

**Recommendation:** Assign formal ownership of `str.split(sep)` with delimiter and `str.join()` to Ch.1 c1s5 (it naturally belongs there alongside no-arg split) or to Ch.4 (where complex string operations first become necessary). The Ch.1 plan already lists `.split()` and `.join()` in its c1s5 owned concepts — the issue is that c1.js doesn't implement them. The resolution is the same as Issue #2: authoring c1s5 completely is the blocker for the entire subsequent chain.

---

## 6. Coverage — Missing or Underrepresented Concepts

For a strong 11-year-old completing this arc, the following Python concepts are commonly expected at this level and their status in the arc:

| Concept | Arc Status |
|---|---|
| `None` as return value of void functions | Owned Ch.1 (c1s2), drilled Ch.3 (c3s3, c3s6, c3s7) — well covered |
| String formatting (`:.2f` etc.) | Owned Ch.1 (plan) — not yet implemented. Gap. |
| File I/O | Owned Ch.7 — appropriate placement |
| List comprehensions | Owned Ch.8 — appropriate placement |
| Recursion | Not in the arc — appropriate. "No inheritance" is stated; recursion is similarly deferred. |
| `lambda` | Not in the arc — Ch.8 uses `key=freq.get` explicitly to avoid lambda; appropriate for age. |
| Generators / iterators | Not in the arc (beyond `range` as lazy iterable in Ch.2). Appropriate. |
| `*args` / `**kwargs` | Not in the arc. Appropriate for this level. |
| `@staticmethod` / `@classmethod` | Not in the arc. Consistent with the no-inheritance, no-dunder-beyond-init cap. |
| `with` statement | Owned Ch.7 (file I/O) — appropriate |
| `enumerate`, `zip` | Owned Ch.4 — appropriate; `zip` gets a required exercise in 4.8 (M7 resolved) |
| `sorted(key=...)` | Owned Ch.8 — appropriate; `lambda`-free trick (`key=freq.get`) well-motivated |
| `assert` | Owned Ch.5 (preconditions, c5s5) and Ch.8 (test functions) — covered at two levels |
| `raise` | Owned Ch.8 (8.6 strand projects, point-of-need introduction) — appropriate |
| SQL basics | Ch.7 — included. Unusually ambitious for the age, but the "taste of SQL" scope is minimal and well-bounded. |

One gap worth naming: **`str.format()` is nowhere in the arc**, which is fine because f-strings are the modern idiom and `:.2f` covers the key formatting use case. Students may encounter `str.format()` in older code and have no context. A one-sentence Codex note ("old Python programs sometimes use `'Price: {}'.format(price)` — f-strings do the same thing more cleanly") would bridge this without adding curriculum weight. This is optional.

---

## 7. Coherence — Through-Line Check

The arc tells a coherent story in six acts:

1. **Ch.0** — "The machine does exactly what you say." (Unplugged, no syntax)
2. **Ch.1** — "Here is the syntax for values, variables, and expressions." (Single-value programs)
3. **Ch.2** — "Now you can branch and repeat." (Control flow)
4. **Ch.3** — "Name your work. Reuse it." (Functions and decomposition)
5. **Ch.4** — "One program, many values." (Collections)
6. **Ch.5** — "Write code you and others can trust." (Design and debugging)
7. **Ch.6** — "Bundle data and behavior into objects." (OOP)
8. **Ch.7** — "Use what others have built." (Libraries and data)
9. **Ch.8** — "Write real programs from a spec." (Integration)

The through-line is clean. Each chapter's stated through-line (in its Overview section) connects to the one before it. The "literal machine" framing from Ch.0 reappears in Ch.1 ("a program is a sequence of instructions"), Ch.2 ("the computer does exactly what you tell it — but now you get to tell it to check, choose, and repeat"), and Ch.5 ("readable code is debuggable code"). The musical strand runs continuously from Ch.0 (play/sleep) through Ch.8 (generative music piece in 8.6d), providing coherent creative motivation.

One coherence concern: **the OOP chapter (Ch.6) sits between the design chapter (Ch.5) and the modules chapter (Ch.7)**. This is defensible — objects are a design tool learned before students encounter library objects — but the ordering means Ch.5's design habits (decomposition, DRY, naming) are not explicitly applied *while learning OOP*. Ch.6's lessons do recall Ch.5 (the four-step debugging protocol is applied in 6.5), but there is no lesson in Ch.6 that asks students to apply Ch.5's DRY or naming principles to their class design. A future revision might add one explicit cross-reference in 6.3 or 6.4: "Notice that `play_note()` is a good function name — it follows the Ch.5 naming convention (verb for a function that does something)."

---

## 8. c1–c3 Alignment with Ch.4+ Plans

### What c1.js actually implements (from inspection)

- c1s1: `print`, comments, strings, multi-arg print — **complete**
- c1s2: types (int, float, str, bool, None), type(), type conversion — **complete**
- c1s3: variables, assignment, naming, reassignment — **complete**
- c1s4: arithmetic operators, precedence — **complete**
- c1s5: concatenation, `*` repetition, `.upper()`, `.lower()`, `.strip()`, `.split()` (no-arg only), `len()` — **PARTIAL** (f-strings, `:.2f`, indexing, slicing, `.join()`, `round()` are all absent)
- c1s6: `input()`, convert before compute — **complete** (but uses string concatenation + `str()` in model solutions, not f-strings, because c1s5 has not implemented them)
- c1s7: turtle and sound strand application — **complete** (hardcoded values noted; variable-driven rewrite is an open B2 item in the plan)

### What c2.js actually implements (from inspection)

- c2s1: truthiness (falsy list is factually incomplete — Issue #3 above), `if/else`, `IndentationError`
- c2s2: comparisons, boolean operators
- c2s3: `elif`, multi-way branching
- c2s4: `while`, augmented assignment, accumulator
- c2s5: `for`/`range`, `break`, `continue`, `sep`/`end` (taught here, not Ch.1)
- c2s6: debugging lesson
- c2s7: loops in turtle and sound strands
- c2s8: `try`/`except`, EAFP, bulletproof input
- c2s9: capstone

### What c3.js actually implements (from inspection)

All 10 lessons from c3s0 to c3s9 are present and match the plan. f-strings appear in c3.js examples (e.g., `f"i = {i}"` in c2s5, used naturally in c3s7 tip-splitter) as if they are known, which they are not yet formally taught in c1s5.

### Alignment issues for Ch.4+ plans

The Ch.4 plan correctly adjusts for what c1.js actually implements:

- **4.2 (Indexing)** correctly says "start with strings first — this is a fresh introduction." Aligned with implementation truth. Correct.
- **4.3 (Looping)** has an "authoring dependency: do not author 4.3 until the f-string subsection is present in c1s5." This blocks correctly.
- **4.4 (Tuples/Sets)** warm-up recalls string immutability (correctly in c1s2). Aligned.
- **4.5 (Dicts)** warm-up recalls `while True`/`break` from Ch.2. Aligned — c2s4 has this.
- **4.8 (Music)** recalls "In Ch.2 Lesson 2.7 you made a four-on-the-floor kick pattern." Aligned — c2s7 is implemented.

The Ch.5 plan's recalls are all correctly aligned with what c1.js–c3.js actually implement: string methods (c1s5), `try/except` (c2s8), functions and docstrings (c3s3, c3s5), accumulator (c2s4).

The Ch.6 plan's recalls are correctly aligned: Ch.1 f-strings (gap noted — plan relies on c1s5 being complete), Ch.3 LEGB (c3s4 implemented), Ch.4 list methods (c4.js not yet written, but the plans are consistent).

The Ch.7 plan has a specific "Authoring dependency note (Blocker B4)" for `str.split(sep)`, `str.join()`, and f-strings — acknowledging they are not confirmed in the implementation. This is the most explicit acknowledgment of the c1s5 gap and correctly blocks authoring of 7.5–7.7.

---

## 9. Summary: Top 5 Cross-Chapter Issues

### #1 — String indexing/slicing ownership contradiction (CRITICAL)
**Location:** Ch.1 plan (concepts owned, quiz) vs. Ch.4 plan (4.2 authoring note) vs. c1.js (implementation).
**Problem:** Ch.1 plan claims ownership; Ch.4 plan treats 4.2 as first introduction; c1.js does not implement it. Only one of these can be correct.
**Resolution required:** Decide: is indexing in Ch.1 or Ch.4? Given c1.js does not have it, the practical answer is Ch.4. Amend the Ch.1 plan to remove string indexing/slicing from owned concepts and quiz. Update CURRICULUM-STRUCTURE.md concept spine accordingly.

### #2 — f-strings and `:.2f` not implemented in c1s5 (CRITICAL)
**Location:** c1.js (missing), Ch.2–Ch.8 plans (assume as prior knowledge).
**Problem:** Seven chapters spiral on f-strings as a Ch.1 recall. Students in c2s5, c3s7, c4s3, c5s6, c6s3, c7s6, and c8s3 encounter f-strings without having been formally taught them.
**Resolution required:** Complete c1s5 with f-strings, `:.2f`, indexing (if Ch.1 owns it), slicing, `.join()`, and `round()` before authoring any Ch.4+ content. The Ch.1 plan's authoring gate (B3) is correct — enforce it.

### #3 — Falsy list factual error in live c2s1 (URGENT, low effort)
**Location:** c2.js line 56, c2s1 prose.
**Problem:** States falsy values are "exactly these three: `0`, `""`, `None`" — omits `0.0` and `False`.
**Resolution required:** Fix c2s1 now (one-sentence replacement). Independent of any other authoring work. No structural change to the plan is needed.

### #4 — `str.split(sep)` and `str.join()` have no formal introduction anywhere (MODERATE)
**Location:** Ch.1 plan (lists `.join()` as owned but not implemented), Ch.3 c3s8 (uses `.split()` as recall), Ch.4 challenge #4, Ch.7 7.5–7.6.
**Problem:** The delimiter form of `.split(sep)` and `.join()` are used as prior knowledge in Ch.3, Ch.4, and Ch.7 but are never formally taught in any lesson that has been authored.
**Resolution required:** Add `str.split(sep)` and `str.join()` formally to c1s5 when it is authored (they belong there per the Ch.1 plan). This is resolved by fixing Issue #2 above — the two issues share the same root cause (c1s5 is incomplete).

### #5 — Ch.0 contractual spiral schedule not wired into Ch.1/Ch.2/Ch.4 plans (MINOR)
**Location:** Ch.0 Recap (contractual spiral schedule), Ch.1/Ch.2/Ch.4 lesson warm-ups.
**Problem:** The Ch.0 Recap assigns five specific retrieval items to specific lessons in Ch.1, Ch.2, and Ch.4, but those lessons' warm-up specifications describe different content. The contract is currently one-sided — Ch.0 specifies deliverables that Ch.1/2/4 have not agreed to receive.
**Resolution required:** Either (a) add the exact Ch.0 retrieval items as named warm-up items in the Ch.1, Ch.2, and Ch.4 plans at the specified lesson positions; or (b) relax the contract to "the spirit of the retrieval is preserved in each chapter's warm-up cycle" and update Ch.0's language accordingly. Option (b) is lower effort and probably sufficient — the warm-ups as written do cover the Ch.0 concepts, just with different specific questions.

---

## 10. Verdict by Criterion

| Criterion | Rating | Notes |
|---|---|---|
| Concept ownership — one owner per concept | PASS | Two corrections needed (indexing location, sep/end in Ch.2 plan) |
| Spiral weaving — prior concepts built on | PASS | Well-executed; Ch.0 contractual spiral is a loose end |
| Difficulty arc — smooth and correct | PASS | Ch.7 sub-strand resets are justified; overall arc is correct |
| Early appearances justified | PASS | All flagged; all correctly expanded in owning chapter |
| Coverage — nothing significant missing | PASS | str.format() could get a Codex note; all core concepts present |
| Coherence — through-line clear | PASS | Minor: Ch.6 could explicitly link back to Ch.5 naming principles |
| c1–c3 alignment with Ch.4+ plans | CONDITIONAL PASS | Blocked on c1s5 completion (Issues #1, #2, #4) |

**Overall: The arc is ready to author Ch.4 and beyond once Issues #1, #2, and #3 are resolved. Issues #4 and #5 are resolved as a consequence of fixing Issue #2.**
