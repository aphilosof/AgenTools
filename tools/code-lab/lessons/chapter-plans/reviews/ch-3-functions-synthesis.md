# Synthesis — Ch.3 Functions

**Overall verdict:** Needs fixes
**Consensus issues (flagged by 2+ reviewers):** Warm-up retrieval absent from all lessons (Oakley + Malan); LEGB acronym introduced prematurely in c3s2 (Hermans + Ramalho + Oakley); `global` keyword plan/implementation contradiction (Downey + Malan + Hermans); plan incomplete — c3s8/c3s9 unspecified (all six reviewers); `is_prime` too hard too early at lesson 3.3 rung 6 (Hermans + Malan); tip-splitter list/`sum()` boundary problem (Downey + Resnick + Malan); false visibility claim in c3s2 (Ramalho — factual, confirmed).

Note: the task brief specified 7 panel reviews; only 6 files were present in the directory. This synthesis covers all 6.

---

## Prioritised fix list

### BLOCKERS

**B1. c3s2 — False technical claim about variable visibility** *(Ramalho: MAJOR; Hermans: context)*
The lesson states "Inside `double`, only `n` exists — `x` is invisible there." This is factually wrong. Module-level names are readable inside any function. The correct statement: "Inside `double`, only `n` exists as a local — the caller's local variable `x` is hidden, but module-level names can still be read." This false claim directly contradicts the c3s4 scope lesson (which correctly shows `TAX_RATE` being read from inside a function), creating a continuity collision two lessons later that the scope lesson then has to silently undo.
Fix: change the prose in c3s2 to "the caller's local variables are hidden." One sentence.

**B2. String iteration (`for char in text`) and membership test (`char in "aeiou"`) introduced at rung 6 with no prior exposure** *(Hermans: BLOCKER)*
Both constructs appear for the first time in c3s8, which is a rung-6 lesson. `in` as a membership predicate is syntactically identical to `in` as the loop-binding keyword but semantically different — novices do not automatically generalise. A learner who has only seen `for x in range(...)` will misread `char in "aeiou"` as loop syntax. The rung-6 exercise asks students to write `is_palindrome` from a blank editor while simultaneously processing two new syntactic forms.
Fix (options, in order of preference): (a) add a rung-1/rung-2 predict section at the top of c3s8 that introduces `for char in text:` and `char in "aeiou"` before any exercise; (b) cap c3s8 at rung 5; (c) move string iteration to Ch.4 (Collections) where iteration over sequences is the chapter theme.

---

### MAJORS

**M1. Warm-up retrieval items absent from all ten lessons — structural violation** *(Oakley: MAJOR; Malan: BLOCKER)*
CURRICULUM-STRUCTURE.md §B mandates "a quick recall question from an earlier lesson (spiral / retrieval)" as the first element of every lesson. None of c3s0–c3s9 include one. The chapter plan lists "Recalls" metadata but never specifies a retrieval prompt. This is the same omission flagged in the Ch.2 review and not yet addressed.
Fix: add one warm-up predict/short-answer per lesson at the top of each content array. Specific prompts per lesson:
- c3s0: `"*" * 5` → what prints?
- c3s1: last value of `i` after `for i in range(5): pass`?
- c3s2: `int(input("Age: "))` — which call runs first?
- c3s3: `10 % 3` → value? `10 % 3 == 0` → value?
- c3s4: predict `x = 5; x = x + 1; print(x)`
- c3s5: list all values from `range(1, 10, 2)`
- c3s6: what does `for _ in range(4):` mean?
- c3s7: what values does `beat` take in `for beat in range(8):`?
- c3s8: what does `"  HELLO  ".lower().strip()` return?
- c3s9: if `area(w, h)` has no `return`, what does `p = area(3, 4)` store in `p`?

**M2. Plan incomplete: c3s8 and c3s9 not in ch-3-functions.md** *(All six reviewers)*
The chapter plan ends at lesson 3.7. The actual c3.js contains 10 lessons (c3s0–c3s9). Lessons c3s8 ("Functions in the Wild") and c3s9 ("Art and Music" capstone) are entirely absent from the plan. Concepts introduced in c3s8 — string iteration, membership test (`in`), top-down design ("wishful thinking") — are not in the plan's "Concepts owned" section and will not be tracked for spiral coverage in Ch.4+.
Fix: add lesson entries for 3.8 and 3.9 to ch-3-functions.md. Add `for char in text`, `in` as membership test, and "wishful thinking / top-down design" to the concepts-owned section, or explicitly mark them as "first encounter here, owned by Ch.4/Ch.5."

**M3. `global` keyword: plan/implementation contradiction** *(Downey: MAJOR; Malan: MINOR; Hermans: MINOR)*
The plan (line 176) says "`global` is struck from the curriculum — not taught here or elsewhere." The actual c3s4 implementation teaches it with a full "here's why not to use it" block. Three independent reviewers flag this as the right pedagogical move (showing a tool to refuse it is superior to silence, because students encounter it in the wild). The plan's wording creates ambiguity for any future author who reads it.
Fix: update the plan to say: "`global` is introduced as an anti-pattern — shown briefly with explicit warning and technical rationale; not exercised, not tested, not in the Chapter Quiz." Additionally, annotate the c3s4 glossary entry for "global variable" to mark it as "introduced to reject" not as a taught concept.

**M4. LEGB acronym introduced prematurely in c3s2, before scope is taught** *(Hermans: MAJOR; Ramalho: MAJOR; Oakley: MINOR)*
c3s2 invokes "the LEGB scope rule" to explain parameter scoping. The scope lesson is c3s4, two lessons later. LEGB names four levels — Local, Enclosing, Global, Built-in — of which Enclosing (closures) and Built-in are not taught anywhere in this course. Naming a four-letter framework while explaining only one letter creates forward references novices will misread or try to complete.
Fix: remove "LEGB" from c3s2 entirely. Replace with "Python gives each function its own private workspace for its locals — the caller's local variables are hidden." Introduce the LEGB name once, in c3s4 where it belongs. If the four-letter acronym is retained in c3s4 at all, add a Codex entry that clearly limits it to "today we cover L and G; E (closures) is advanced; B (built-ins) is the names like `print` and `len` Python always knows."

**M5. `is_prime` at rung 6 in lesson 3.3 is the hardest exercise in the chapter and appears at lesson 3 of 10** *(Hermans: MAJOR; Malan: MAJOR)*
`is_prime` demands: guard clause, for loop, modulo, early return, range boundary reasoning, and multiple return points — all from a blank editor in the third concept lesson. The working-memory cost at this point in the chapter (only one prior lesson with parameters, no decomposition built yet) is high. Both reviewers flag this as a difficulty cliff.
Fix: replace the c3s3 rung-6 exercise with the simpler `is_even(n)` + `is_odd(n)` boolean pair (blank editor, one function calling the other — still exercises return + boolean return, but with far less algorithmic complexity). Move `is_prime` to the Chapter Challenge (item 4), where Ch.2 loop fluency can be assumed and the difficulty is appropriate.

**M6. `print`-not-`return` misconception has a gap across five middle lessons** *(Oakley: MAJOR)*
The chapter's hardest misconception is drilled in c3s3 and revisited in c3s9, but disappears entirely across c3s4–c3s8. This means the print-vs-return distinction has a gap of approximately five lessons between its primary teaching and its only retrieval. The strand lessons (c3s6, c3s7) naturally contain void functions but do not prompt any explicit contrast.
Fix: add one sentence per strand lesson (c3s6 and c3s7) that names the void/fruitful distinction in context — e.g. in c3s6: "draw_square() is a void function — it acts (moves the turtle), it doesn't hand anything back"; in c3s7: "beat() is void — it plays a sound; the caller uses it for its effect, not a return value." Cost is one sentence per lesson; benefit is spaced retrieval of the chapter's central concept.

---

### MINORS

**m1. Challenge item 7: tip-splitter uses list literal and implicitly `sum()` before Ch.4** *(Downey: MINOR; Malan: MINOR; Resnick: MINOR)*
`items = [10.00, 15.50, 8.75]` as a constant and `subtotal(items)` using a list both appear before lists/`sum()` are taught. The plan notes the `input`-loop deferral correctly, but `sum()` over a list literal is still Ch.4 vocabulary.
Resolution: replace `subtotal(items)` with `subtotal(a, b, c)` taking three explicit floats — avoids lists entirely and stays within Ch.3 vocabulary. Alternatively, give `subtotal` a `for` loop accumulator (Ch.2-owned: `total = 0; for price in items: total += price`) with an explicit note that `items` is given as a constant and `for`-over-a-list is a preview of Ch.4. Resnick's option (a) is cleaner.

**m2. c3s4 plan strand listed as "numbers" but actual lesson uses "words"** *(Malan: MINOR; Hermans: MINOR)*
The plan specifies c3s4 strand as `numbers (tax calculator)`. The actual c3s4 uses strand `words` with string method examples. The actual is pedagogically superior (string methods are already known, so scope is the only new cognitive load). The plan is simply wrong.
Fix: update the plan to reflect the actual strand and worked examples.

**m3. Hint 2 in c3s3 gives away the answer** *(Oakley: MINOR)*
In c3s3's rung-3 fix exercise, Hint 2 says "Replace `print(a + b)` with `return a + b`" — the complete solution. This eliminates retrieval practice entirely.
Fix: rewrite Hint 2 to: "What keyword sends a value back to the caller instead of printing it to the screen?"

**m4. `count_vowels` in c3s8 silently fails on uppercase input** *(Resnick: MINOR)*
`count_vowels` checks `char in "aeiou"` but all test cases use lowercase strings. A student will believe the function works universally and discover the case-sensitivity bug only later.
Fix: either add `.lower()` inside the function body, or add one test case with uppercase input and a note in the lesson text.

**m5. `repeat_word` solution uses `if i == 0` guard — un-Pythonic accumulator pattern** *(Ramalho: MINOR)*
The c3s5 exercise solution uses `if i == 0: result = word` inside a loop, teaching the "check first iteration" guard as a normal pattern. This is not standard Python and will need to be unlearned when students see `str.join()` in Ch.7.
Fix: replace with the cleaner initialise-then-append pattern: `result = word; for _ in range(times - 1): result += sep + word; return result`. No structural change to the exercise.

**m6. `f-string :.2f` dormant from Ch.1 through all of Chs.2–3** *(Oakley: MINOR)*
The `:.2f` format specifier is owned by Ch.1 but recalled nowhere in Ch.2 or Ch.3. The tip-splitter was supposed to recall it in c3s7 but the tip-splitter was not implemented there. The format will be dormant for ~17 lessons before Ch.4.
Fix: in c3s7 or c3s9, use `f"${amount:.2f}"` in at least one worked example or exercise output. No new exercise needed — a format choice in existing example code suffices.

**m7. 3.0 Hook flow-of-execution framing slightly imprecise** *(Downey: MINOR)*
"Both defs run before either call does" is true only in a specific two-def case. The general rule ("Python must have already executed the `def` line before you can call the function") is clearer and handles all cases.
Fix: rewrite the flow-of-execution explanation to the general rule; use the two-def case as an illustration of why putting `def`s near the top is the convention, not as the mechanism itself.

**m8. Chapter Challenge item 8 has no checker specification** *(Malan: MINOR)*
Item 8 ("design stretch") says "checked only for structure" but does not specify how. Without a concrete harness description, implementation will be guessed.
Fix: add to the plan: "Check via `ast.walk` for FunctionDef count ≥ 3, at least one body whose first statement is `Expr(Constant(...))` (docstring present), at least one Call referencing a name that is also a FunctionDef in the module."

**m9. `is_prime` efficiency deferral not signposted** *(Ramalho: MINOR; Resnick: MINOR)*
`range(2, n)` is correct but O(n). Neither the lesson nor the plan notes the efficiency deferral, leaving curious students wondering why the loop stops at `n` rather than `n//2`.
Fix: add one sentence: "For large `n`, this loop does a lot of work — you'll see a faster version in Chapter 5."

**m10. `largest_of_three` exercise does not acknowledge `max()` built-in** *(Ramalho: MINOR)*
Students writing `largest_of_three` manually will discover `max(a, b, c)` eventually and feel the exercise was a trick.
Fix: add one sentence after the exercise: "Python has a built-in called `max()` that does exactly this — you'll use it in Chapter 4. Writing it yourself first is how you understand what `max` is doing inside."

**m11. Rung-6 exercises are all checker-locked to single correct output — no creative ceiling** *(Resnick: MAJOR)*
Every rung-6 exercise in the strand lessons checks a specific output or call sequence. The parametric design is in place (students could draw anything with `draw_polygon`), but the exercises require one exact answer, making the ceiling a false ceiling.
Fix: at least one strand rung-6 exercise (c3s6 `draw_scene` is the obvious candidate) should have no output checker beyond structure: three named functions, one calling another, docstrings present. Let the student draw or play whatever they choose.

**m12. `while` loop from Ch.2 appears in c3s8 without calling out the for-vs-while choice** *(Malan: MINOR; Oakley: MINOR)*
`digit_sum` uses `while n > 0` but the choice is not explained. This is a natural interleaving opportunity.
Fix: add one sentence: "We use `while` here, not `for`, because we don't know in advance how many digits `n` has — the loop runs until `n` reaches 0."

**m13. c3s5 SyntaxError message in Codex uses old Python pre-3.12 wording** *(Ramalho: MINOR; Malan: MINOR)*
The Codex entry quotes the pre-3.12 message. Python 3.12+ says "parameter without a default follows parameter with a default."
Fix: update to the current wording and add a version note citing both phrasings (as the plan itself already recommends for 3.12+).

**m14. `ast.parse` does not catch the duplicate-parameter SyntaxError** *(Ramalho: MINOR)*
The c3s5 `def power(base, exp=2, base=10):` fix exercise may silently pass in the test harness if the checker uses `ast.parse` instead of `compile()`.
Fix: verify the harness uses `compile()` for this exercise's checker, not `ast.parse`.

**m15. Keyword argument form promised in plan but absent from c3s5 implementation** *(Downey: MINOR)*
The plan promises `greet(greeting="Howdy", name="Sam")` as a breadth-only worked example. The implementation omits it.
Fix: either add it as a one-line exhibit in c3s5's worked examples section, or soften the plan wording to "may be shown briefly (optional)."

**m16. `try/except` not spiralled in Ch.3** *(Malan: MINOR)*
Ch.2 introduced `try/except` (c2s8) but Ch.3 never recalls it. A natural spiral would be: "what happens if `int(input(...))` raises a `ValueError` inside a function?" Could appear in 3.5 or as one exercise in the Chapter Challenge.
Fix (optional, lower priority): add one exercise in c3s5 or the Chapter Challenge showing a fruitful function that wraps `input()` with `try/except` — "what does the function return if the user types a word instead of a number?"

**m17. Abstraction named but not given a dedicated concept moment** *(Resnick: MINOR)*
The plan flags Ch.3 as the chapter that names "abstraction" for the first time. The actual lessons mention it inline (`[[abstraction]]` tag in c3s0) but give it no dedicated concept page or comparison (what the caller knows vs. does not know).
Fix: add a brief concept card in c3s6 or c3s9 that names abstraction explicitly: "The caller of `draw_polygon` doesn't need to know how the loop works — only what it does (name, inputs, effect). That gap between 'what it does' and 'how it works' is called abstraction."

---

## Cross-cutting themes

**1. Plan–implementation drift.** Every reviewer independently noted that the chapter plan ends at 3.7 while the implementation has 10 lessons (c3s0–c3s9). The plan is the authoritative spec; it is now wrong. Two entire lessons (c3s8, c3s9) introduce concepts — string iteration, membership test, top-down design — that are not tracked in any plan document. This drift will cause coverage gaps in Ch.4 and beyond unless fixed.

**2. Missing warm-ups / retrieval practice.** Oakley and Malan both flag this as a structural violation; it was flagged in the Ch.2 review and not fixed. The forgetting curve is steepest between sessions. Warm-ups are the lowest-cost intervention in the design and the most evidence-backed. The continued omission across two chapters suggests a systemic build process issue, not a chapter-specific one.

**3. The `print`-not-`return` misconception is the chapter's most important teaching and its most inconsistently distributed.** Four reviewers (Downey, Hermans, Oakley, Ramalho) all cite the c3s3 print-vs-return treatment as the chapter's strongest single lesson. Oakley alone flags that after this strength in c3s3, the concept vanishes for five lessons. Both findings are correct. The chapter needs distributed practice of its own best idea.

**4. LEGB and scope framing are inconsistent across the chapter.** Three reviewers (Hermans, Ramalho, Oakley) flag the LEGB acronym appearing in c3s2 before scope is taught, and its incomplete definition (only L and G, not E or B). The fix is consistent: use plain language in c3s2, introduce LEGB properly once in c3s4 with a scoped Codex entry, and remove all forward references.

**5. Creative ownership is suppressed by checker-locked rung-6 exercises.** Resnick raises this; it connects to a design principle that cuts across strand lessons: the parametric infrastructure is in place to let students make genuinely original work, but every rung-6 exercise specifies a single correct output. One structurally-checked open exercise per strand application lesson would preserve the learning intent while raising the creative ceiling.

---

## Reviewer conflicts & resolutions

**Conflict 1: `global` keyword — exclude or show-to-refuse?**
- Downey: plan says excluded, implementation teaches it as anti-pattern, plan needs to resolve this. Recommendation: show-to-refuse is pedagogically superior.
- Malan: implementation is correct; plan wording "struck from curriculum" should be clarified to "shown in order to be refused."
- Hermans: showing it is fine, but the glossary should annotate it as "introduced to reject."
- Ramalho: explicit endorsement — "the decision to exclude `global` from the curriculum is correct" (meaning: exclude from *exercises/testing*, not from the lesson text).
- **Resolution:** No real conflict — all reviewers endorse the implementation. The plan's wording is the problem. Fix the plan to say "`global` is introduced as an anti-pattern: shown with explanation, not exercised, not tested, not in the Quiz." All four reviewers are satisfied by this.

**Conflict 2: `is_prime` difficulty — move or keep?**
- Hermans: move to the Chapter Challenge; replace with `largest_of_three` at rung 6 in c3s3.
- Malan: move to the Chapter Challenge; replace with simpler `is_even`/`is_odd` pair.
- Downey: `is_prime` logic is correct; no difficulty concern raised (notes it as a minor efficiency non-issue).
- Ramalho: mentions efficiency deferral but not rung placement.
- **Resolution:** Hermans and Malan have the stronger pedagogical case. Moving `is_prime` to the Chapter Challenge reduces a documented difficulty cliff at lesson 3. The Chapter Challenge already has `is_leap_year` (same structure, appropriate location). Replace the c3s3 rung-6 with `is_even`/`is_odd` (Malan's suggestion is the simpler fix). `is_prime` stays in the chapter — just at the right point in the arc.

**Conflict 3: c3s3 function composition (`double(square(3))`) — include or move?**
- Hermans (MAJOR): composition is grafted on; working-memory cost at lesson 3 is too high; move to c3s5 or c3s6.
- Malan: not flagged as a problem (notes the lesson is "well-written").
- **Resolution:** If `is_prime` moves to the Challenge (resolving M5), the working-memory pressure in c3s3 eases considerably. Composition can stay as a brief worked example with a single predict exercise, as Hermans recommends. This is a lower-priority fix than M5 but aligned with it.

**Conflict 4: `:.2f` recall — is its absence a blocker?**
- Oakley: flags as a spacing/forgetting issue — the format has been dormant ~17 lessons by Ch.4.
- Other reviewers: do not flag it.
- **Resolution:** Oakley is right on the evidence (spaced retrieval), but the fix is trivial — use `:.2f` in one existing example in c3s7 or c3s9. No exercise rewrite needed. Minor.

**Conflict 5: Resnick's "creative ceiling" concern vs. the chapter's structural checker design**
- Resnick: every rung-6 exercise is checker-locked, suppressing creative ownership.
- Other reviewers: do not raise this concern; several explicitly praise the checker-locked exercises (Hermans calls the c3s7 song hierarchy "the best concrete example of decomposition in the chapter").
- **Resolution:** Resnick is identifying a real design tension, not an error. The resolution is targeted: add *one* open exercise per strand application lesson (c3s6 draw_scene, c3s7 custom groove) with only structural checking, while keeping all other checker-locked exercises as-is. This does not undermine the other reviewers' praise and directly addresses Resnick's concern.
