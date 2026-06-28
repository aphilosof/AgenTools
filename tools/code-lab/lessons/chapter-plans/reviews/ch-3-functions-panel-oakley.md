# Panel Review — Ch.3 Functions — Barbara Oakley (Learning How to Learn)
**Verdict:** Solid

---

## Findings (from my lens)

### Spaced Retrieval

1. [MAJOR] Warm-up retrieval items are absent from every lesson. CURRICULUM-STRUCTURE.md §B mandates "a quick recall question from an earlier lesson (spiral / retrieval)" as the first element of every lesson. None of the ten written lessons (c3s0–c3s9) include a warm-up item. The chapter plan mentions "recalls from Chs. 1–2" in the concept map but never specifies retrieval prompts, and the written content omits them entirely. This is the same structural gap flagged in the Ch.2 review — it still has not been addressed. Without a low-stakes retrieval moment at the top of each lesson, students get no practice pulling prior knowledge before new knowledge loads on top of it. The forgetting curve is sharpest between sessions; warm-ups are the cheapest intervention.

   Fixes needed per lesson:
   - c3s0: "What does `"*" * 5` produce?" (Ch.1 string repetition — used in the banner example)
   - c3s1: "What is the last value of `i` after `for i in range(5): pass`?" (Ch.2 for/range)
   - c3s2: "Write `int(input(\"Age: \"))` — which call runs first?" (Ch.1 input + type conversion)
   - c3s3: "What does `10 % 3` return? What is 10 % 3 == 0?" (Ch.1 % operator — used in is_prime)
   - c3s4: "Predict: `x = 5; x = x + 1; print(x)`" (Ch.1 reassignment — primes the scope mental model)
   - c3s5: "Call `range(1, 10, 2)` — list the values it produces." (Ch.2 range with step)
   - c3s6: "What does `for _ in range(4):` mean? Why `_`?" (Ch.2 throwaway variable)
   - c3s7: "Write `for beat in range(8): ...` — what values does `beat` take?" (Ch.2 for/range)
   - c3s8: "What does `text.lower().strip()` return on `\"  HELLO  \"`?" (Ch.1 string methods)
   - c3s9: "If `area(w, h)` has no `return`, what does `p = area(3, 4)` put in `p`?" (Ch.3 None — capstone warm-up on the chapter's hardest misconception)

2. [MAJOR] The chapter's central misconception — "print and return do the same thing" — is drilled in c3s3 and the capstone (c3s9 has a dedicated `None`-return bug exercise), but is absent from the middle lessons (c3s4–c3s8). Given the spacing effect, a misconception this persistent needs distributed practice across the chapter, not one concentrated dose in lesson 3 followed by a gap. In c3s4's rung-5 exercise, `shout` and `whisper` both use `return`, but there is no moment that asks "what would happen if you used `print` here instead?" That contrast is the exact retrieval cue the student needs to consolidate the distinction. In c3s7 (sound strand), `beat()` is intentionally a void function — that is a natural moment to name the distinction explicitly: "beat() is void — it acts, it doesn't hand anything back. That is right for a function whose job is playing a sound."

   → Fix: Add one explicit void-vs-fruitful contrast per strand lesson (c3s6, c3s7) — either a predict exercise ("if `draw_square` returned the side length, how would the caller use it?") or a single sentence naming the distinction as it applies in context. Cost: one sentence per lesson.

### Cognitive Load

3. [MINOR] Lesson c3s8 ("Functions in the Wild") introduces three independent concepts on one screen: top-down design ("wishful thinking"), string iteration (`for char in text:`), and the prepend-reverse trick. Each is substantive. The lesson also teaches FizzBuzz ordering (elif specificity rule) and function composition (`word_inspector`). That is five distinct concepts in one 25-minute lesson, and four of the five are genuinely new to the student at this level of precision — string iteration was mentioned in Ch.1 but never made the subject of a lesson, and the prepend-reverse trick is a novel algorithmic pattern. The rung-6 exercise (write `word_inspector`) is appropriately ambitious, but the student has to hold five new ideas simultaneously to complete it.

   The issue is not quality — the individual concept explanations are excellent — it is load sequencing. String iteration (`for char in text:`) and the membership test (`char in "aeiou"`) are genuinely new mechanics that deserve their own warm-up and a predict exercise before being combined with the accumulator pattern.

   → Fix: Move string iteration and the membership test to a dedicated first section with a rung-1 predict exercise before the prepend-reverse trick is introduced. The "Design Before You Code" section (top-down design) can stay at the top as motivation. Sequence: motivation → string iteration + membership test (rung 1–2) → prepend-reverse (rung 3–4) → FizzBuzz ordering (rung 2 Parsons) → composition (rung 5–6). The lesson already has all the pieces; the ordering can be tightened within the existing structure.

4. [MINOR] Lesson c3s4 (Scope) introduces the LEGB acronym midway through a text block: "The rule for which variables a name refers to is called the LEGB rule: Python looks Local first, then Global. Today we cover L and G." This is a named concept introduced in passing, then immediately dropped. LEGB is not in the glossary, not in the codex, and not exercised. For a student reading at grade 7–9 level, an acronym introduced once mid-sentence and then never used again is more likely to produce false familiarity than genuine learning. Either teach LEGB fully (all four letters with examples for each) or do not name it — use plain language ("Python looks in your function first, then in the module" is clearer and requires no memorisation).

   → Fix: Either add LEGB as a Codex entry with all four letters explained, or replace "the LEGB rule: Python looks Local first, then Global" with "Python looks inside your function first. If the name isn't there, it looks in the module (the outer file)." The second phrasing is accurate at this level and requires nothing the student does not already understand.

5. [MINOR] Lesson c3s2 introduces `return` in the rung-5 exercise (`celsius_to_f`) before the concept of `return` is owned by the chapter (that is c3s3's job). This is flagged in the chapter plan ("Coverage/ordering concern") and is handled correctly — the rung-5 exercise gives `pass  # return (c * 9 / 5) + 32` as the comment, making the syntax visible without teaching it. However, from a load perspective, the student is writing a `return` statement without any explanation of what `return` does, which could generate confusion. The current design relies entirely on the comment to scaffold this.

   This is a low-floor encounter done correctly per the curriculum rules (E), but it would benefit from one sentence after the exercise: "You just used `return` for the first time — it sends the result back to the caller. Lesson 3.3 shows you exactly how it works." That single sentence prevents the student from either ignoring the pattern or building an incorrect mental model in the gap before c3s3.

   → Fix: Add a one-sentence bridge at the end of c3s2's `celsius_to_f` exercise pointing to c3s3.

### Illusions of Competence

6. [MINOR] In c3s3, the rung-3 exercise ("change one line inside `add` so that `result` holds 7") gives away the solution in the hints: Hint 2 says "Replace `print(a + b)` with `return a + b`." This is the entire fix. A student who reads Hint 2 before attempting the exercise has not retrieved anything — they have read the answer. Hints should be a ladder, not a trapdoor. Hint 1 ("The fix is inside the add function, not outside it") is appropriately directional. Hint 2 should be "What keyword sends a value back to the caller?" — not the line itself.

   → Fix: Rewrite Hint 2 to: "What keyword sends a value back to the caller instead of to the screen?" The answer stays in the student's hands, not in the hint.

7. [MINOR] Lesson c3s9 (capstone) contains the sentence "Every time a function computes something you plan to use, ask: does it `return` it?" This is the most important self-check habit in the chapter and deserves to be a named, retrievable heuristic — not prose that a student skims and forgets. It is currently buried in a text block between two examples.

   → Fix: Box this heuristic visually (as the design system presumably supports for callout/key-rule text), or put it in the codex note, or make it the explicit prompt for the rung-4 fix exercise in c3s9. The current codex note for c3s9 already says "Missing return gives None — always the first thing to check" — that is the right instinct; just make it more prominent in the lesson prose too.

### Spacing Effect

8. [MINOR] f-strings with `:.2f` (owned by Ch.1, not recalled in Ch.2 per my Ch.2 review) still have not been recalled in any Chapter 3 exercise. The chapter plan correctly notes `:.2f` money formatting as a Ch.1 recall in the tip-splitter sections of c3s7 and the Chapter Challenge, but the written c3s7 lesson does not include the tip-splitter — it ends with the `groove()` exercise. So the first in-context recall of `f"${amount:.2f}"` formatting does not occur in any written lesson in Chapter 3 at all. This means the format will have been dormant from Lesson 1.5 through all of Chapters 2 and 3, approximately 17 lessons, before it reappears in Chapter 4's data strand.

   → Fix: In c3s7 or c3s9, use `:.2f` in at least one worked example or exercise output — e.g., the `play_scale` function in c3s9 prints a "Playing note 60" message. Replace that with `f"Playing note {root + i} at {gap:.2f}s"` in the example code. No new exercise needed — just a format choice that reactivates the pattern.

9. [MINOR] The `while` loop (Ch.2) is used once in c3s8 (`digit_sum` uses `while n > 0`) but never explained as a deliberate choice. From a learning standpoint, this is an opportunity for an interleaving moment: "We're using `while` here, not `for`, because we don't know in advance how many digits `n` has — the loop runs until `n` is 0." One sentence. The concept is Ch.2-owned and doesn't need re-teaching, but calling out why it appears here reinforces the for-vs-while decision rule from Ch.2 without restating it.

   → Fix: Add one sentence to the `digit_sum` exercise prompt or hints: "Notice that `while n > 0` is used here, not `for`. Why?"

---

## Continuity notes

**Well-woven from Ch.1:** String methods (`.upper()`, `.lower()`, `.strip()` chained in c3s4's `is_match` functions), string repetition (`"*" * n` in c3s0), `type()` and `None` as NoneType (c3s1 and c3s3 both handle this correctly), f-strings (used in examples but not the `:.2f` form — see Finding 8), `input()` + conversion (present in strand exercises). These are treated as recalls without re-teaching. Correct throughout.

**Well-woven from Ch.2:** `for`/`range` appear naturally in every lesson from c3s1 onward. The accumulator pattern is named by label in c3s3 ("Accumulator pattern + return") and correctly tied to Ch.2 — this is exactly the right handling. Conditionals are woven into `is_prime`, `fizzbuzz`, and `groove()` without comment, as prior knowledge should be. `%` operator is used in multiple exercises without re-explanation.

**Accidentally re-taught:** None detected. The chapter is clean about using Ch.1–2 concepts as tools rather than explaining them again.

**Not yet recalled but should be:** `f-strings with :.2f` (see Finding 8). Also `input()` with `float()` conversion: the chapter plan mentions a tip-splitter but the written c3s7 does not include it, so the `input()` → `float()` → arithmetic pipeline from Ch.1 has no recall in Chapter 3.

**What c3.js teaches that affects Chapter 4:** Chapter 3's `is_prime` in c3s3 uses `range(2, n)` rather than `range(2, int(n**0.5) + 1)`. This is pedagogically correct (clarity over efficiency at this level) but means students enter Ch.4 with no exposure to the idea that loop range affects performance. That is fine — it belongs in a later chapter — but Ch.4 should not assume this awareness when introducing `sum()` and `sorted()`.

**Chapter plan vs. written lessons — structural drift:** The chapter plan specifies 7 lessons (3.0–3.7). The written file contains 10 lessons (c3s0–c3s9). Lessons c3s8 ("Functions in the Wild") and c3s9 ("Art and Music: Ch1 + Ch2 + Ch3") are added beyond the plan. Both are well-constructed, but their addition means the rung-6 "blank-editor capstone" milestone claimed at Lesson 3.3 in the plan is accurate — write-from-scratch is the default by c3s3. The plan's progression table (rung 3 at Lesson 3.2, rung 6 by Lesson 3.3) holds in the written lessons. The addition of c3s8 and c3s9 is an improvement, not a problem, but the chapter plan should be updated to reflect the actual lesson count.

**Boundary with Chapter 4:** Chapter 3 correctly defers list-as-container to Chapter 4. The tuple default in the plan's `bassline(root, pattern=(1,1,5,5))` example is noted as an intentional preview — the written c3s7 does not include this function, so the tuple preview does not occur. The Ch.4 plan expects students to arrive knowing how to write functions; it assumes `def/params/return` fluency from the first lesson. That assumption is justified by what c3s0–c3s9 build.

---

## What's strong

- **The void-vs-fruitful distinction is handled with genuine depth.** C3s3 attacks the print-not-return bug from three angles: a direct contrast ("these two lines look similar but do very different things"), a concrete crash (`NoneType + int`), and the accumulator-plus-return payoff showing why return unlocks reuse. The named term "print-not-return bug" gives students a label to use when they encounter it, which is a real help. The c3s9 capstone revisits it one more time with a new context (perimeter function). That is appropriate distributed practice — though the gap between c3s3 and c3s9 crosses several lessons where the distinction is not explicitly revisited (see Finding 2).

- **Scope is taught via a working mental model, not just rules.** The "private whiteboard erased on return" framing in c3s4 is more durable than a rule-list. The `UnboundLocalError` trap is demonstrated live, explained causally ("Python scans the entire function body before running a single line"), and fixed via a concrete alternative ("pass it as a parameter"). The global keyword is introduced and then explicitly discouraged, with a reason — not just "don't use it." That is the right pedagogical sequence: show the tool exists, explain its failure mode, teach the correct alternative.

- **Decomposition is demonstrated progressively across the chapter.** C3s6 (`draw_house` calling `draw_square` calling `draw_polygon`) and c3s8 (`word_inspector` calling `count_vowels` and `is_palindrome`) both model the habit of assembling small, named functions rather than teaching it abstractly. By the time students reach the capstone, the habit has been demonstrated in three different strand contexts (numbers in c3s3, plot in c3s6, words in c3s8). The abstraction concept is named in c3s6 ("hide the repeated pattern behind a single name") as the chapter plan requires. This is among the best sequencing in the course so far.

---

## Technical verification notes (python3, Python 3.14.5)

All claims verified correct:
- `is_prime` with `range(2, n)`: correct results for 0, 1, 2, 3, 4, 9, 17.
- `digit_sum` bug: `n / 10` gives 137.0 for 1234; `n % 10` gives 10 — confirms the exercise is technically sound.
- `UnboundLocalError` fires as described in c3s4 ("cannot access local variable 'count' where it is not associated with a value").
- `repeat_word("echo")` → `"echo echo echo"`, `repeat_word("echo", 4, "-")` → `"echo-echo-echo-echo"` — both correct.
- `SyntaxError` message on current Python 3.14: "parameter without a default follows parameter with a default" — the chapter plan notes this version difference for 3.12+ vs. older Python. Verified. The codex note should cite both messages.
- `fizzbuzz(15)` → `"FizzBuzz"` with the correct ordering (% 15 first). Verified.

One error to note: the chapter plan's lesson 3.5 fix exercise includes `def power(base, exp=2, base=10):` as a `SyntaxError` from a duplicate parameter name, and separately mentions the non-default-after-default error. In Python 3.14, a function with a duplicate parameter raises `SyntaxError: duplicate argument 'base' in function definition` — this is correct as stated. The plan is accurate.

---

## 3-line summary

**Verdict: Solid.** The chapter builds the function mental model with genuine depth — the print-vs-return distinction, scope-as-private-whiteboard, and decomposition-as-design-habit are all handled better than the average introductory course. The two priority fixes: (1) warm-up retrieval items are absent from all ten lessons, violating CURRICULUM-STRUCTURE.md §B for the second chapter running — this is the single most evidence-backed retention tool in the design and it has been omitted entirely; (2) the print-not-return misconception is drilled in c3s3 and c3s9 but disappears across the five lessons in between — distributed retrieval of the chapter's hardest misconception needs at least one contrast prompt in the strand lessons (c3s6, c3s7) where void functions appear naturally.
