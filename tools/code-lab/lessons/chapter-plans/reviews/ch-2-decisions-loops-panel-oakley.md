# Panel Review — Ch.2 Decisions & Loops — Barbara Oakley (Learning How to Learn)
**Verdict:** Solid

---

## Findings (from my lens)

### Spaced Repetition and Retrieval Practice

1. [MAJOR] No warm-up retrieval questions in any lesson. CURRICULUM-STRUCTURE.md §B mandates "a quick recall question from an earlier lesson (spiral / retrieval)" as the first item in every lesson. None of the seven written lessons (c2s1–c2s7, plus c2s8–c2s9) contain a warm-up subsection. The plan describes what each lesson teaches but never specifies a warm-up recall prompt. This is a structural gap: retrieval practice is not the same as incidental re-use. You need a deliberate, low-stakes recall moment at the start of each lesson before new content loads — e.g., "What does `int(\"5\")` return? What error does `int(\"hello\")` raise?" at the start of c2s4. Without warm-ups, the chapter misses the most evidence-backed retrieval mechanism in the design.
   → Fix: Add a named warm-up item to each lesson's content array. It can be a single predict-the-output or a one-question free-recall targeting the previous lesson's key concept. This is one line of planning per lesson and should be in the plan as a required section, not left to the author to improvise.

2. [MINOR] L2.6 (Fix the Broken Code) is the right placement for debugging consolidation, but it arrives immediately after the last new-concept lesson (L2.5) with no spacing. All five error classes are re-encountered within a single session, which means they are being practiced simultaneously, not spaced. The plan does say "debugging exercises also appear in every preceding lesson," which is correct — but the worked examples in L2.6 lean on brand-new combinations (e.g., the `NameError` from `range(0)` empty-body scenario) rather than revisiting errors the student has already seen. These new-to-the-student cases are teaching, not retrieval.
   → Fix: In L2.6, open with one or two worked examples that replay already-seen errors (the `=` vs `==` from c2s1, the missing colon from c2s2) explicitly labeled as "you've seen this before — now name it systematically." Save the novel `range(0) NameError` scenario as the harder exercise, not the introductory worked example.

### Cognitive Load

3. [MAJOR] L2.5 is the most overloaded lesson in the chapter. It teaches: `for`, all three `range()` forms, the lazy-sequence property of `range`, the `for` vs `while` decision rule, `break`, `continue`, nested loops, `print(sep=, end=)`, and the accumulator pattern in a `for` context. In the written lesson (c2s5), this is 14 discrete items. That is too many for a 25-minute budget for an 11-year-old, even a strong reader. The plan's own progression table acknowledges this lesson runs rungs 3–6 — but the rung range is not the problem; the concept breadth is. `print(end=, sep=)` in particular is a Ch.1-adjacent topic that appears here solely as a side note to the `range` example output, creating an unplanned concept detour mid-lesson.
   → Fix: Split `break`/`continue`/nested loops into a short dedicated lesson (L2.5b or integrate into L2.6 as a debugging+control-flow capstone). Move `print(sep=, end=)` to a parenthetical note in L1.1's codex or introduce it earlier where multi-item output first matters. If the lesson count cannot grow, at minimum remove `print(sep=, end=)` from c2s5 — it is not a loop concept.

4. [MINOR] The accumulator pattern is introduced in L2.4 (while loop context) and then reintroduced in L2.5 as "recall from the last lesson" — which is correct. But the written c2s5 lesson reintroduces the name without a retrieval prompt: it shows a code example labeled "Recall from the last lesson" without first asking the student to produce the pattern from memory. Showing is not retrieving. A single rung-1 exercise ("before I show you: write the three lines that make an accumulator") before the example would cost nothing and significantly improve retention.
   → Fix: In c2s5, add a rung-1 predict-the-output or recall question before the accumulator re-demonstration.

### Illusions of Competence

5. [MINOR] L2.1 exercise 1 (rung-1, predict-the-output) provides the answers directly in the hints: Hint 1 says "5 > 3: three is less than five, so 5 is greater than 3 — True." This gives away the answer before the student has to struggle with it, which creates an illusion of competence — the student reads the hint, thinks "yes, of course," and checks the box without actually retrieving the answer. Hints should guide thinking, not hand over the result.
   → Fix: Rewrite hint 1 as: "Which is larger — 5 or 3?" rather than stating the answer. The AUTHORING.md rules already say hints "guide thinking, never hand over the finished line" — this exercise's hints violate that rule directly.

6. [MINOR] The Chapter Quiz Q5 is non-auto-graded: "In one sentence, explain why a `while` loop can run forever but a `for`/`range` loop cannot." This is the most important conceptual question in the chapter and the only free-recall item. But it "surfaces in coach mode" — meaning it is optional and does not block chapter advancement. Given that this question probes the deepest transfer of the chapter's central distinction, it should be the one question that requires engagement, even if grading is lenient. A student who cannot answer it in any form has not chunked the concept, just memorized the syntax.
   → Fix: Either make Q5 required (coach mode accepts any non-empty answer) or replace one of the easier predict-the-output questions with this conceptual one and make it gate the quiz.

### Spacing Effect

7. [MINOR] The chapter plan's concept map correctly identifies recalls from Ch.1 (types, `input()`, `%`, f-strings), and these do appear in the written lessons. However, `f-strings` and `:.2f` formatting from c1s5 are never recalled in any Ch.2 exercise or example. They will have gone untouched from L1.5 through all of Chapter 2. Given the spacing-effect principle, a concept that is not recalled between its first teaching and Chapter 4 (where it will be used heavily in data strand work) is at risk of evaporating. The strand application lessons (c2s7, c2s9) are natural places to use f-strings for output without making them the focus.
   → Fix: In c2s7 (strand application) or c2s9 (capstone), use an f-string in at least one worked example — e.g., print the beat number as `f"Beat {beat+1}"`. Not a new exercise, just a format choice in an existing example.

---

## Continuity notes

**Well-woven from Ch.1:** The `%` operator (used from L2.2 onward), `int()`/`float()` for input conversion, `type()` and bool as a type, variable assignment and reassignment, `len()` introduced in L2.2 and used in L2.3, `**` for BMI calculation in L2.3's rung-6 exercise. These are all handled as recalls without re-teaching — correct.

**Accidentally re-taught:** The `bool` type is introduced in Ch.1 (c1s2), and L2.1 (c2s1) opens with a full `bool()` conversion example and a text block explaining that `True` and `False` are capitalised. The capitalisation explanation ("why `True` and `False` are capitalised") is new depth on an existing concept — that is appropriate. But `bool(42)` returning `True` and `bool("")` returning `False` was previewed in Ch.1's types lesson. The c2s1 lesson re-explains this as if new. The plan calls this "recalling" but the written content re-teaches it from scratch. This is a minor duplication.

**Not yet recalled but should be:** `str.split()` appears correctly in the Chapter Challenge as a "recalled concept from Ch.1" — this is handled well. `f-strings with :.2f` are never recalled (see Finding 7 above). `input()` is recalled correctly throughout.

**What c3.js reveals about c2:** Chapter 3 (functions) treats write-from-scratch as the default, which is correct per the plan's own ramp table. It also immediately uses `if/elif/else` inside function bodies (from the hook lesson onward) without comment — appropriate given Ch.2 ownership. The accumulator and loop patterns from Ch.2 are woven into Ch.3 exercises naturally. Continuity across the boundary is good.

**Missing from c2 that c3 needs:** Chapter 3 introduces scope, which requires a clear mental model of "code runs line by line, and assignment creates a name in the current scope." This mental model is built in Ch.1 and Ch.2, but Ch.2 never names "sequential execution" or "the frame" explicitly. The plan does not need to add this, but the written lessons should reinforce the "Python reads top to bottom" model clearly at least once in c2s4 or c2s5, since functions will immediately challenge that model in Ch.3.

---

## What's strong

- **Deliberate misconception targeting.** Every lesson in the chapter pre-empts a documented beginner misconception with a concrete demonstration — the `=` vs `==` SyntaxError, the `elif` order trap, the infinite loop, `break` vs `continue` confusion, and `range` stop exclusion are all shown failing before success. This is exemplary for an introductory course.

- **The three-category error taxonomy in L2.6.** Dividing errors into syntax / runtime / logic and naming the three-step debugging protocol is clean chunking: it gives the student a mental scaffold to hang all future debugging on. The worked examples in c2s6 are technically accurate (verified: `IndentationError` does point to the line after the real problem; `range(limit / 2)` does raise `TypeError` because `/` returns float). This is one of the best-structured lessons in the chapter.

- **Authentic strand payoff in L2.7 and L2.9.** Using the loop variable as a scaling parameter (`forward(i * 10)`, `60 + i` for rising pitch) transforms abstract loop syntax into visible, audible behavior the student causes and can vary. The `_ ` convention introduction is placed correctly here — it makes sense when the counter genuinely is not needed, which is first true in the hexagon example.

---

## Technical verification notes (python3)

All of the following claims were verified and are correct:
- `and`/`or` return an operand, not a bool; `not` returns a bool
- `bool(0)`, `bool("")`, `bool(None)`, `bool([])` are all `False`
- `range(0)` produces zero iterations; `i` after such a loop is a `NameError`
- `for i in range(3): pass` — `i` is accessible after the loop as `2` (no block scope)
- `range(limit / 2)` raises `TypeError: 'float' object cannot be interpreted as an integer`
- `range(1, 10, 0)` raises `ValueError: range() arg 3 must not be zero`
- `TabError` is a subclass of `IndentationError` (correct as stated)
- `continue` before the decrement in a `while` countdown creates an infinite loop when the loop variable is odd (Chapter Challenge ex.2 rationale confirmed correct)
- The `for` loop `break` exits only the inner loop; outer loop continues (verified)

One claim to note: the plan states `and`/`or` "return an operand, not True/False." This is correct and is stated in c2s1's misconception section. However, the written lesson's text block says "Python never evaluates the right side" but does not explicitly state the return-value implication. A student reading c2s1 would know about short-circuit evaluation but might still believe `and`/`or` return booleans. The misconception is listed but not demonstrated with a concrete example like `print(5 and 3)` showing `3`. Consider adding a one-line example to make the operand-return behavior visible, not just stated.

---

## 3-line summary

**Verdict: Solid.** The chapter is technically accurate, well-sequenced, and does genuine work on misconceptions. The two priority fixes are: (1) warm-up retrieval questions are completely absent from all lessons, violating the CURRICULUM-STRUCTURE.md §B requirement and leaving the most evidence-backed retention mechanism unused; (2) L2.5 packs too many concepts into one lesson (for, all three range forms, lazy evaluation, break, continue, nested loops, sep/end, accumulator recall) — the cognitive load exceeds what a 25-minute lesson can consolidate, and the unrelated `print(sep=, end=)` detour belongs in Chapter 1 or a note, not mid-loop-lesson.
