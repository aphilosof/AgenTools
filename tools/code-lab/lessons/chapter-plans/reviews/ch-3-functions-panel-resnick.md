# Panel Review — Ch.3 Functions — Mitchel Resnick (Scratch, MIT Media Lab)
**Verdict:** Solid

---

## Findings (from my lens)

1. [MAJOR] Chapter as a whole — checker-locked rung 6 exercises suppress creative ownership → The chapter teaches decomposition superbly, but every rung 6 exercise in the actual lessons (c3s6, c3s7, c3s8, c3s9) requires a specific output or exact call sequence. The learner must satisfy the checker, not make something theirs. The draw_snowflake exercise checks a precise 24-call sequence; the song exercise checks exact MIDI notes. These are technically rich but creatively inert — the student is reproducing a specification, not expressing an idea. From a low-floor/high-ceiling standpoint, the floor is right but the ceiling is a false ceiling: it looks open but is actually a single correct answer. Fix: the final rung 6 exercise in at least one strand lesson (the obvious candidate is c3s6 draw_scene, or c3s9's capstone) should have no checker beyond structure (three named functions, one calling another). Let the kid draw whatever they want. The parametric framing is already there — the exercises just don't let students exploit it.

2. [MAJOR] Chapter Challenge item 8 — the only genuinely open exercise, but it arrives after a student has spent the entire chapter reproducing specified outputs. By the time they reach item 8 ("draw or play something interesting"), creative agency may feel like a foreign instruction. A student who has spent ten lessons matching checker output will interpret "something interesting" as "something that passes." Fix: introduce one openly expressive exercise earlier — ideally c3s6 or c3s7 — so students build the habit of asking "what do I want to make?" before the challenge. Even a brief aside ("use draw_polygon however you like — there's no single right answer here") would change the register.

3. [MINOR] c3s7 (def bassline) — the plan promised a tip-splitter embedded numbers challenge; the actual lesson dropped it in favour of pure music. The plan's three-strand design (music + numbers embedded) was the richer choice. The lesson as built is coherent but narrower: all four exercises are about music. The numbers payoff (building a multi-function program where each function has one job) migrated to the Chapter Challenge as item 7, where it hits an unresolved boundary problem: the tip-splitter requires `sum(items)` on a list literal `[10.00, 15.50, 8.75]`, but lists are Ch.4. The plan notices this and defers the `input`-loop version — but `sum()` and a list constant are still Ch.4 concepts used here. Fix: either (a) replace `subtotal(items)` with `subtotal(a, b, c)` taking three explicit floats (avoids lists entirely), or (b) drop the numbers integration from the Ch.3 challenge and trust Ch.4 to own the payoff.

4. [MINOR] c3s8 (Functions in the Wild) — `count_vowels` checks only lowercase vowels (`"aeiou"`). The exercise uses `"hello world"` and `"python"` — both already lowercase — so no test case ever reveals the bug of passing `"Hello World"`. A student will ship `count_vowels` believing it works correctly and discover the flaw later when a real word has capitals. The plan does not mention this as a known limitation. Fix: add `.lower()` inside the function body, or add a test case with uppercase input and note in the lesson text that strings must be pre-lowercased.

5. [MINOR] c3s3 (Return Values) — `is_prime` uses `range(2, n)` (iterates all the way to n-1). This is technically correct but for n=1,000,000 it is very slow. The lesson does not mention efficiency at all, not even a "this works, and in Ch.5 you'll see a faster version." For an 11-year-old this is fine — but the plan should flag it as a known deferral so it gets a spiral mention in Ch.5. As written, the student leaves Ch.3 with a function that quietly fails on large inputs.

6. [MINOR] c3s9 (Capstone) — the lesson is titled "Art and Music: Ch1 + Ch2 + Ch3" and genuinely synthesises all three chapters. But the plan does not list c3s8 or c3s9 — they are extra lessons that emerged during implementation. The chapter plan (3.0–3.7 + Challenge + Quiz) is now misaligned with the actual content (c3s0–c3s9 = 10 lessons, no explicit Challenge or Quiz lesson in the file). This is not a content problem — the actual lessons are good — but the plan document is now an unreliable description of what was built. Fix: update the plan or note that c3s8/c3s9 replace the standalone Challenge/Quiz structure.

---

## Continuity notes

**Well-woven:**
- The DRY principle recurs naturally from Ch.1/Ch.2: copy-paste vs. function named in c3s0/c3s7 with the same framing used in Ch.2's loop chapter. This is genuine spiral, not re-teaching.
- Accumulator pattern from Ch.2 is explicitly recalled in c3s3 (sum_to) and c3s8 (count_vowels, is_palindrome). The link is named: "in Chapter 2 you learned the accumulator pattern — now replace print with return." This is exactly right.
- `.upper()`, `.lower()`, `.strip()` from Ch.1 are used actively in c3s4 (make_upper/make_lower, clean/is_match) without re-teaching. Correct.
- `%` operator, `for`/`range`, `if/elif/else` from Ch.2 are fluently recycled in is_prime, fizzbuzz, digit_sum. No re-teaching detected.
- f-string `:.2f` money formatting from Ch.1 is properly flagged as a recall item in the plan (L3.7 tip-splitter). Although the tip-splitter is absent from the actual c3s7 lesson, the Chapter Challenge item 7 does invoke the recall. Connection is preserved.

**Missing or thin:**
- The plan mentions "abstraction named here for the first time" (Ch.3 owns "functions hide detail"). The actual c3s0 lesson uses `[[abstraction]]` inline, but there is no dedicated concept page that formally names and explains abstraction as a CS principle. It gets a sentence in the text block, not a page. For a concept the plan flags as chapter-owned, it deserves its own moment — a comparison (what the caller knows vs. does not know), not just a mention.
- `type()` is listed as a Ch.1 recall item in L3.3, but no exercise in Ch.3 uses it. Not a problem — it need not be drilled — but the recall annotation in the plan is misleading.
- The LEGB rule is mentioned by name in c3s2 and c3s4. Ch.1/Ch.2 never named it. Naming it here is fine (Ch.3 is appropriate), but the plan should make clear this is a first introduction of the name, not a recall.

---

## What's strong

- **Decomposition as a habit, not a lesson.** The chapter does not teach decomposition once and move on; it models it in every strand lesson (draw_house calls draw_square calls draw_polygon; song calls verse calls beat). By the capstone, students have seen the same structural habit applied to numbers, words, drawing, and music. That depth of repetition across contexts is exactly what builds a transferable mental model.

- **The `global` omission is principled and well-handled.** c3s4 explicitly shows the `global` keyword, explains why it works, then explains why professional programmers avoid it. This is the right pedagogy: not "you can't do this" but "here is the tool, here is why it's a trap, here is the better way." Students leave knowing the escape hatch exists while understanding why the door should stay closed.

- **Musical transposition as a parameter metaphor.** The verse(root) example in c3s7 is one of the best parameterisation demos I have seen at this level. "The shape is identical — only the starting point shifts" maps musical transposition directly onto the computer science concept of parameterisation. For a student who plays an instrument or thinks in music, this is a genuinely illuminating analogy, not a decoration.

---

*Three-line summary:*
**Verdict: Solid.** The chapter builds decomposition and function mechanics correctly, with strong spiral weaving and technically accurate content throughout. The top two issues are: (1) every rung 6 exercise across the lessons is checker-locked to a single correct output, leaving the student with no moment of genuine creative ownership until the last challenge item — the parametric framing is in place but the exercises do not exploit it; and (2) the Chapter Challenge tip-splitter uses list literals and `sum()` before Ch.4 introduces them, which should be restructured to use individual float arguments instead.
