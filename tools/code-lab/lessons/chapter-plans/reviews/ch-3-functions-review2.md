# Deep Review Round 2 — Ch.3 Functions
**Verdict:** Needs fixes — plan is mostly clean; c3.js has 6 still-broken code items and 9 plan-fixed/code-not-updated gaps.
**Python verified on:** 3.14.5

---

## Round-1 fixes audit

Scope: "CONFIRMED-FIXED" = verified in both plan text AND c3.js code. "PLAN-FIXED / CODE-NOT-FIXED" = plan is now correct but c3.js was not updated to match. "STILL-BROKEN" = neither plan nor code fixed it.

**B1 — False technical claim in c3s2 (caller locals hidden vs everything-outside hidden)**
PLAN-FIXED / CODE-NOT-FIXED.
Plan now correctly states: "the caller's local variables are hidden" with an explicit note "module-level names *are* readable inside functions." Verified: `TAX_RATE = 0.1; def f(): return TAX_RATE` returns `0.1` with no error.
c3.js c3s2 line 258 still says: "It sees `n` but it cannot see `x`, `apples`, or anything else from the caller." The final phrase "anything else from the caller" is now technically accurate (it refers to the caller's locals), but the LEGB acronym on the same line is still premature. Code needs the LEGB sentence removed.

**B2 — String iteration and membership test at rung 6 with no prior exposure**
CONFIRMED-FIXED.
Plan specifies: rung-1 predict (is_palindrome), rung-2 Parsons (fizzbuzz), rung-4 fix (digit_sum), rung-5 complete (count_vowels — first exercise requiring writing `char in "aeiou"`), rung-6 (word_inspector — composes already-defined helpers, does not write new syntax from scratch). c3.js c3s8 implements exactly this sequence. Verified that rung-5 is the first exercise that requires *writing* either new construct.

**M1 — Warm-up retrieval absent from all ten lessons**
PLAN-FIXED / CODE-NOT-FIXED.
Plan now specifies all 10 warm-up prompts with correct answers. All 10 verified:
- c3s0: `"*" * 5` → `*****` CORRECT
- c3s1: last `i` after `for i in range(5): pass` → `4` CORRECT
- c3s3: `10 % 3` → `1`; `10 % 3 == 0` → `False` CORRECT
- c3s4: `x = 5; x = x + 1; print(x)` → `6` CORRECT
- c3s5: `list(range(1, 10, 2))` → `[1, 3, 5, 7, 9]` CORRECT
- c3s9: `area(w, h)` with no return → `p = None` CORRECT
c3.js has zero warm-up content blocks in any lesson. This is a structural violation per CURRICULUM-STRUCTURE.md §B.

**M2 — Plan incomplete: c3s8 and c3s9 not in plan**
CONFIRMED-FIXED.
Full lesson specs for c3s8 (Functions in the Wild) and c3s9 (Art and Music capstone) are now in the plan. Concepts owned section now includes `for char in text:`, `char in "aeiou"`, and wishful thinking / top-down design, with "first encounter here, full ownership Ch.5" noted for string iteration and membership test.

**M3 / m3 — Hint 2 in c3s3 gives away the answer**
STILL-BROKEN.
Plan states: "Hint 2 must be a guiding question, not the answer." The plan's own exercise spec for c3s3 now reads: "Hint 2 must be a guiding question: 'What keyword sends a value back to the caller instead of printing it to the screen?'" c3.js c3s3 rung-3 exercise (fix print-not-return add function) line 359 still reads: `"Replace print(a + b) with return a + b."` This is the complete solution, not a guiding question.

**M4 / m4 — count_vowels silently fails on uppercase**
PLAN-FIXED / CODE-NOT-FIXED.
Plan specifies: "Add `.lower()` inside the function before the loop to handle uppercase input." Verified the bug: `count_vowels("HELLO") = 0` (wrong; should be 2). The fixed version returns 2. c3.js c3s8 rung-5 exercise solution (lines 976-983) has no `.lower()` call. The bug ships.

**M5 — is_prime too hard too early at c3s3 rung 6**
STILL-BROKEN.
Plan states: "moved to Chapter Challenge item 4." Plan's c3s3 rung-6 spec is now the is_even/is_odd pair. c3.js c3s3 still has `is_prime` at rung 6 (lines 405-414). No `is_even`/`is_odd` exercises exist anywhere in c3s3. The difficulty cliff that two reviewers flagged is unresolved in the implementation.

**M6 — print-not-return gap across five middle lessons**
PLAN-FIXED / CODE-NOT-FIXED.
Plan specifies one explicit void/fruitful sentence in c3s6 and c3s7. c3s6 mentions abstraction and DRY but has no sentence naming `draw_square()` as a void function in context. c3s7 has no sentence naming `beat()` as void. The spaced-retrieval fix is in the plan; the code does not have it.

**m1 — Tip-splitter uses list/sum() before Ch.4**
PLAN-FIXED / NOT-IN-CODE.
Plan now specifies three explicit float parameters instead of a list. c3.js c3s7 has no tip-splitter at all — the numbers-strand embedded challenge from the plan is not implemented. This is a scope gap in the implementation, not a boundary violation in what is there.

**m2 — c3s4 strand listed as numbers but actual is words**
CONFIRMED-FIXED.
Plan now correctly labels c3s4 strand as "words" with string method examples.

**m5 — repeat_word solution uses if i==0 guard**
STILL-BROKEN.
Plan states: "DO NOT use the `if i == 0` guard inside the loop." c3.js c3s5 lines 572-579 still implement the old pattern with the `if i == 0` guard. The initialise-then-accumulate pattern the plan mandates is not in the code. Both patterns produce identical output (verified), but the old pattern teaches a habit that must be unlearned when `str.join()` arrives in Ch.7.

**m6 — f-string `:.2f` dormant through Ch.2-3**
PLAN-FIXED / CODE-NOT-FIXED.
Plan specifies `f"${amount:.2f}"` in at least one example in c3s7 or c3s9. c3s9 uses f-strings (`f"Now playing verse at root {root}"` variant) but never `:.2f` format. c3s7 has no tip-splitter (the primary vehicle for this recall). The format specifier has been dormant since Ch.1.

**m7 — Flow-of-execution framing imprecise**
CONFIRMED-FIXED.
Plan now correctly states the general rule: "Python must have already executed the `def` line before you can call the function." c3.js c3s1 implements this correctly at line 127 ("Python hits `greet()` before it has registered the function").

**m8 — Challenge item 8 has no checker specification**
CONFIRMED-FIXED.
Plan now specifies: check via `ast.walk` for (a) FunctionDef count ≥ 3; (b) at least one FunctionDef whose first body statement is `Expr(Constant(...))` (docstring present); (c) at least one Call whose `func.id` matches a FunctionDef name in the same module. Use `compile()` not `ast.parse`.

**m9 — is_prime efficiency deferral not signposted**
PLAN-FIXED / CODE-NOT-FIXED.
Plan adds: "For large `n`, this loop does a lot of work — you'll see a faster version in Chapter 5." c3.js is_prime exercise has no such note.

**m10 — largest_of_three does not acknowledge max()**
PLAN-FIXED / CODE-INCOMPLETE.
Plan says: add sentence after largest_of_three exercise. c3.js has no `largest_of_three` exercise in c3s3 at all (it has `sum_to` at rung 5, `is_prime` at rung 6). The `max()` acknowledgment is moot until is_prime is moved and the is_even/is_odd pair added, and if `largest_of_three` is then added, the acknowledgment needs to be there.

**m11 — Rung-6 exercises checker-locked, no creative ceiling**
STILL-BROKEN.
Plan says: "c3s6 `draw_scene` is the obvious candidate — no output checker beyond structure: three named functions, one calling another, docstrings present." c3.js c3s6 rung-6 (lines 726-748) requires an exact call sequence: `draw_square(80)`, `penup()`, `forward(150)`, `pendown()`, `draw_triangle(80)` in that order. This is fully checker-locked. The open/structure-checked design from the plan is not implemented.

**m12 — while vs for choice not explained in digit_sum**
CONFIRMED-FIXED.
c3.js c3s8 rung-4 exercise now includes the sentence in plan: "We use `while` here, not `for`, because we don't know in advance how many digits `n` has — the loop runs until `n` reaches 0." Verified in the exercise prompt.

**m13 — c3s5 SyntaxError uses old Python pre-3.12 wording**
CONFIRMED-FIXED.
Plan now notes both phrasings. Verified on Python 3.14: `SyntaxError: parameter without a default follows parameter with a default`. The pre-3.12 wording `non-default argument follows default argument` is also noted in the plan.

**m14 — ast.parse may not catch duplicate-parameter SyntaxError**
CONFIRMED-FIXED (plan note correct; verified on Python 3.14).
`ast.parse('def h(a, b=2, a=3): pass')` does NOT raise SyntaxError on 3.14 (returns successfully).
`compile('def h(a, b=2, a=3): pass', '<str>', 'exec')` DOES raise `SyntaxError: duplicate argument 'a' in function definition`. Plan note to use `compile()` is accurate.

**m15 — Keyword argument form promised but absent**
PLAN-FIXED / CODE-NOT-FIXED.
Plan specifies `greet(greeting="Howdy", name="Sam")` as a one-line breadth exhibit in c3s5. c3.js c3s5 has no keyword argument form anywhere.

**m16 — try/except not spiralled in Ch.3**
ACCEPTED-OPTIONAL.
Plan marks as optional, lower priority. Not implemented. Acceptable.

**m17 — Abstraction not given dedicated concept moment**
PLAN-FIXED / CODE-NOT-FIXED.
Plan specifies a brief concept card in c3s6 or c3s9. c3s6 mentions "abstraction" in the `draw_polygon` text inline; c3s9 text references abstraction briefly. Neither has a dedicated named concept card with the "caller doesn't need to know how it works" framing.

**M4-LEGB — LEGB acronym in c3s2 premature**
STILL-BROKEN.
Plan states: "Do NOT introduce 'LEGB' or 'scope rule' here. Scope is Lesson 3.4." c3.js c3s2 line 258 reads: "This is the **LEGB scope rule** at work. The function body has its own local scope." LEGB is still present two lessons before scope is taught.

---

## New / remaining findings

**N1 — c3s0 missing sound strand (plan says numbers + sound Hook)**
Plan specifies: "Strand: numbers (calorie calculator) + sound (play a two-note motif)." c3s0 in c3.js is numbers-only (cheer/banner examples). No `play()` or music call appears anywhere in c3s0. The Hook's motivating second example (play_motif → call it three times → notice reuse) is absent.

**N2 — c3s3 composition has no dedicated rung-1 predict exercise**
Plan states: "one worked example and one rung-1 predict only" for `double(square(3))`. c3.js c3s3 has the composition text block (lines 383-388) explaining inside-out evaluation but no discrete rung-1 predict exercise for it. The plan's resolution of the Hermans/Malan conflict ("composition can stay as a brief worked example with a single predict exercise") is not fully implemented.

**N3 — Chapter Challenge and Quiz not in c3.js**
Plan specifies 8 challenge exercises and a 3-section quiz gating Chapter 4. c3.js ends at c3s9 with no challenge or quiz blocks. This is a known structural gap (the challenge/quiz engine work is tracked in CURRICULUM-STRUCTURE.md §"Engine work this structure implies"), but it means the chapter gate does not exist in the implementation.

**N4 — c3s6 draw_scene rung-6 lock contradicts plan's open-exercise design AND the plan's own "structure-checked" spec**
(Overlaps m11 but worth stating as a standalone new finding.) The plan is internally consistent — it says structure-checked only. The code contradicts it with an exact call sequence. Beyond the creative ceiling concern, a locked exact sequence for a "draw anything" exercise is a test-design error: a student who draws three shapes in a different arrangement will fail the checker even if their program is structurally correct per the plan's criteria.

**N5 — is_prime efficiency note absent from c3s3 (plan says add it; m9 was plan-fixed/code-not-fixed, now confirmed in code)**
When is_prime is eventually moved to the Chapter Challenge, the efficiency note ("For large n, this loop does a lot of work — you'll see a faster version in Ch.5") must accompany it there. Currently neither c3s3 nor any challenge block has the note.

**N6 — Plan scope framing in c3s2 is now accurate but the code has not been updated to match**
The plan's c3s2 now correctly says "the caller's local variables are hidden" (B1 fix). c3.js says "it cannot see x, apples, or anything else from the caller" which, while narrowly true (it refers to caller's locals), is ambiguous — a student could read it as "nothing outside the function is visible," which is false. The plan's cleaner phrasing should be applied to the code.

---

## Verified-correct claims

All warm-up answers in the plan are arithmetically correct (verified above). All the following technical claims were run and confirmed accurate:

- `"*" * 5` → `*****`
- `for i in range(5): pass` → `i = 4`
- `10 % 3` → `1`; `10 % 3 == 0` → `False`
- `x = 5; x = x + 1` → `x = 6`
- `list(range(1, 10, 2))` → `[1, 3, 5, 7, 9]`
- Void function (no return) → `None`; `None + 1` → `TypeError: unsupported operand type(s) for +: 'NoneType' and 'int'`
- `UnboundLocalError` trap: Python 3.14 message is "cannot access local variable 'count' where it is not associated with a value"
- Module-level name readable inside function: confirmed (`TAX_RATE` example works)
- `compile()` catches duplicate param; `ast.parse()` does not: confirmed on Python 3.14
- `SyntaxError: parameter without a default follows parameter with a default` — Python 3.14 wording confirmed
- Tuple default immutability: same object returned on repeated calls (`r1 is r2` → `True`)
- Prepend-reverse accumulator: `"hello"` → `"olleh"` (verified loop trace)
- `digit_sum(1234)` → `10` with `%` operator (confirmed); `n / 10` bug gives `123.4` not `4` (confirmed)
- `count_vowels("HELLO")` without `.lower()` → `0` (confirmed bug); with `.lower()` → `2` (confirmed fix)
- FizzBuzz wrong order: `fizzbuzz_wrong(15)` → `"Fizz"` (confirmed); right order → `"FizzBuzz"` (confirmed)
- `draw_snowflake` geometry: `360 / 6 = 60.0`; 6 branches × 60° = 360° full rotation: confirmed
- `f"${12.5:.2f}"` → `$12.50`: confirmed
- `is_prime` correct for all test cases: `0→False, 1→False, 2→True, 9→False, 17→True`: confirmed
- `repeat_word` old pattern and new pattern produce identical output: confirmed (both patterns are functionally equivalent)
- `area(3, 4)` with no `return` → stores `None`: confirmed

---

## Summary of status

| Category | Count |
|---|---|
| CONFIRMED-FIXED (both plan and code) | 8 |
| STILL-BROKEN in c3.js | 6 |
| PLAN-FIXED / CODE-NOT-FIXED | 9 |
| ACCEPTED-OPTIONAL | 1 |
| NEW findings (Round 2) | 6 |

The plan document is in good shape. The implementation (c3.js) has diverged from the revised plan in 15 locations — 6 items that were supposed to be fixed but were not applied to the code, plus 6 new findings. The three highest-priority code fixes are: (1) move `is_prime` from c3s3 rung-6 to the Chapter Challenge and add the `is_even`/`is_odd` pair [M5]; (2) remove LEGB from c3s2 [M4-LEGB]; (3) open the c3s6 rung-6 draw_scene checker to structure-only [m11/N4].
