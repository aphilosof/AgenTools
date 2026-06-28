# Panel Review — Ch.3 Functions — Allen Downey (Think Python)
**Verdict:** Solid

---

## Findings (from my lens)

### Conceptual sequencing and mental models

1. [MINOR] **3.0 Hook, line 84 — "def main" flow-of-execution framing is slightly imprecise.**
   The plan says: "The common pattern of `def main` at the top and a call at the bottom works because both `def` lines run before either call does." This is only correct in the specific case where two `def` blocks precede a single call at the bottom. The actual mechanism — and the one that matters for the mental model — is simpler: Python runs the file top-to-bottom; a `def` line stores the function body as a recipe but does not execute it; the stored recipe is available from that point onward. A student who internalises "both defs run before either call" will be confused the first time they encounter a single-def file. Fix: state the general rule — "Python must have already executed the `def` line before you can call the function" — and then note that the common style puts all `def`s near the top precisely to guarantee this.

2. [MINOR] **3.2 — The "LEGB scope rule" appears in the actual implementation (c3s4) but is not in this plan.**
   The plan correctly says "local vs outer" and deliberately excludes the Enclosing (closure) tier. Good. But the implementation (c3s4, line 258 in c3.js) uses the term "LEGB scope rule" — introducing the full four-letter acronym — then immediately says "today we cover L and G." That is a pedagogical anti-pattern from Think Python's perspective: naming a framework you are not yet teaching creates a loose thread that confuses more than it helps. A learner encountering LEGB for the first time will ask "what is E?" and there is no answer yet. The plan's more conservative "local vs outer" is correct. This is a plan-vs-implementation gap; the plan itself is right.

3. [MAJOR] **3.4 — The `global` keyword: plan says "struck from the curriculum," implementation teaches it.**
   The plan (line 176) explicitly excludes `global`: "the `global` keyword is struck from the curriculum — not taught here or elsewhere." This is a stated curriculum decision in CURRICULUM-STRUCTURE.md §D. But the actual c3s4 lesson (line 484 of c3.js) has a full text block headed "The `global` keyword — and why not to use it." This is a direct conflict between the plan and the implementation. The resolution matters for the review: the plan needs to decide which position it holds and state it consistently. My view, as a Think Python author: showing `global` with explicit "do not use this" framing is pedagogically superior to pretending it does not exist, because students will encounter it in the wild and need a name for it. The plan should be updated to say: "Shown briefly as an anti-pattern with explicit warning; not exercised or tested." The current silence creates ambiguity for anyone writing the chapter.

4. [MAJOR] **Words strand is entirely absent from the plan; implementation adds it correctly.**
   The plan covers strands: numbers (four concept lessons), plot (3.6), sound (3.7). The words strand — one of the five named strands in the curriculum spine — is nowhere in the plan. The actual implementation solved this by adding c3s8 ("Functions in the Wild" — palindrome, FizzBuzz, count_vowels, word_inspector). That is exactly the right fix. The plan must be updated to include the words strand lesson as a named lesson in the arc. As written, a future author following the plan would produce a chapter with no words work at all, contradicting the five-strand commitment in CURRICULUM-STRUCTURE.md §C.

5. [MINOR] **3.3 — `is_prime` uses `range(2, n)`, which is O(n) rather than O(√n).**
   This is intentional and correct for the level. The plan does not claim efficiency; it claims correctness. All edge cases check out (`is_prime(0)→False`, `is_prime(1)→False`, `is_prime(2)→True`, `is_prime(9)→False`; negatives handled by the `n < 2` guard). No fix needed; noting this explicitly so a reviewer does not flag it as a bug.

6. [MINOR] **3.5 — Keyword argument form promised in plan but omitted in implementation.**
   The plan (line 210) says: "`greet(greeting=\"Howdy\", name=\"Sam\")` (keyword argument form shown briefly but not drilled — breadth only)." The actual c3s5 lesson does not show keyword argument form at all. This is a plan-vs-implementation gap that is harmless in practice — keyword args at this level is genuinely a breadth touch — but the plan should note that the implementation chose to defer it, or the plan should soften the promise to "may be shown briefly."

7. [MINOR] **Challenge item 7 — `subtotal(items)` uses a list before lists are taught.**
   The Challenge (line 308) says `items = [10.00, 15.50, 8.75]` as a constant and requires `subtotal(items)`. Lists are Ch.4 (not yet taught). Using a list literal as a given constant is fine — Ch.3 exercises use string methods before strings are formally deep-dived. But `subtotal` must sum the list somehow. The plan does not specify how. Using `sum(items)` would require `sum()`, which is Ch.4-owned. Using a `for` loop over the list is Ch.2-owned and works, but the plan does not say this, leaving implementors without guidance. Fix: add a note that `subtotal` uses a `for` loop accumulator — `total = 0; for price in items: total += price` — which is pure Ch.1-3 vocabulary.

8. [MINOR] **3.7 — Tuple default `pattern=(1,1,5,5)` promised in plan; actual implementation takes a different (superior) approach.**
   The plan's 3.7 design (bassline with tuple default) and the actual c3s7 (beat/verse/song hierarchy) are structurally different. The actual is better — the song hierarchy demonstrates decomposition more clearly than the bassline-pattern approach. The plan should be updated to match what was built, including noting that the tuple-default illustration was folded into a brief mention rather than a worked exercise.

---

## Continuity notes

**Well-woven from Ch.1-2:**
- `print`, string methods (`.upper()`, `.lower()`, `.strip()` in c3s4 scope lesson), f-strings including `:.2f` in the tip-splitter, `int()`/`float()` conversion — all recalled naturally without re-teaching.
- `for`, `range`, `%` (modulo) in `is_prime` and `groove()` — correct recalls, not re-explanations.
- The accumulator pattern from Ch.2 is explicitly named and built on in 3.3 (`sum_to` with `return`). This is exactly right: a pattern introduced in Ch.2 gets extended, not repeated.
- `IndentationError` from Ch.1/Ch.2 is a natural recall in 3.1 without re-teaching the Python-block concept from scratch.

**Missing recall that should be woven in:**
- The words strand exercises in c3s8 use `.upper()`, `.lower()`, `.strip()`, string iteration (`for char in text:`), and membership test (`char in "aeiou"`). String iteration over characters is not explicitly recalled in the plan's lesson notes for 3.7 or the words application — it appears to be taught in c3s8 as a new concept. The plan should explicitly note that `for char in text:` is a first-time introduction (not a recall), and place it in the words strand lesson with appropriate scaffolding. As it stands the plan is silent on this, creating ambiguity.
- `round()` appears in 3.2 (`bmi`) and 3.5 tip-splitter. Ch.1 introduced `round()` (CURRICULUM-STRUCTURE.md §D: "len, round (Ch.1)"). The recalls are correct.

**Re-taught by accident:** None found. The plan is careful about this.

**Boundary with Ch.4:**
- The plan correctly defers `sum()`, `enumerate()`, `zip()`, list methods, and comprehensions to Ch.4.
- The `items = [...]` list literal in Challenge 7 is the one fuzzy boundary; see Finding 7.

---

## What's strong

- **The fruitful vs. void distinction is the best thing in this plan.** The `print`-not-`return` bug is the single most disorienting mistake beginners make when they first encounter functions, and the plan names it, shows the `NoneType` crash concretely, and exercises it as a fix rung. The actual c3s3 implementation follows through perfectly — the `add_wrong`/`add_right` contrast is exactly what Think Python does, and it works.

- **Scope pedagogy is disciplined.** Excluding `global` from exercises, using the parameter-passing fix as the correct pattern, and introducing `UnboundLocalError` by name with a concrete crash-and-fix exercise — this is the right sequence. The stack-frame mental model (private whiteboard per call) gives students a concrete spatial image that will serve them through Ch.6 (classes) and beyond.

- **The decomposition through-line is architecturally sound.** The chapter earns decomposition rather than asserting it: students build one-function programs in 3.1, generalise with parameters in 3.2, chain return values in 3.3, then compose multiple functions in 3.6 and 3.7. By the time they write `draw_scene()` in 3.6 calling three named helpers, the pattern is earned. This is the Think Python approach — abstraction through practice, not lecture.

---

## Summary (3 lines)

**Verdict: Solid.** The conceptual spine, sequencing, and mental-model framing are correct and well-sourced.

**Top issue 1:** The words strand is absent from the plan entirely (the implementation correctly added it as c3s8) — the plan must be updated to include it as a named lesson.

**Top issue 2:** The `global` keyword contradiction — the plan says it is excluded from the curriculum but the implementation teaches it (appropriately) as a named anti-pattern; the plan needs to resolve this explicitly rather than leaving silence.
