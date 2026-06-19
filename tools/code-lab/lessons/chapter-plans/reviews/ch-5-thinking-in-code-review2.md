# Deep Review (round 2) — Chapter 5 (Thinking in Code)
**Verdict:** Needs fixes (minor only — no blockers; round-1 issues all resolved)
**Python verified on:** Python 3.14.5 (darwin)

## Round-1 fixes audit

- **Finding 1 [BLOCKER] step-count inconsistency (four vs. five):** CONFIRMED-FIXED.
  The protocol is now genuinely four steps everywhere. The enumeration folds the old
  steps 4+5 into one "(4) hypothesise and test." Every reference is now "four":
  overview (L5), concept keyword (L20), 5.4 concept list (L146), 5.4B heading (L159),
  5.4B concept body (L160), worked example (L161), exercises (L162, L164), the 5.5
  warm-up "State the four steps … from memory" (L188), Chapter Challenge ex.2 (L229),
  **and the Quiz Q3 "list the four steps … in order" (L243)**. `grep` for
  `five[- ]step` returns zero hits. The quiz now matches the lesson. This was the
  specific item the brief asked to confirm — it is consistent including the quiz.

- **Finding 2 [MAJOR] "seven" error classes / ZeroDivisionError hedge:** CONFIRMED-FIXED.
  5.4A (L157) now reads "reviews all **eight** met by Ch.5 (NameError, TypeError,
  SyntaxError, IndentationError, IndexError, KeyError, ValueError, ZeroDivisionError —
  the last was introduced in Ch.4.3 and the Ch.4 Challenge)." The "if not yet met"
  hedge is gone. The eight-class list correctly counts SyntaxError and IndentationError
  separately and excludes AttributeError (which is new in 5.4B, not "met by Ch.5"), so
  the count is right. Verified `1/0` → `ZeroDivisionError: division by zero`.

- **Finding 3 [MAJOR] print-tracing has no subsection:** CONFIRMED-FIXED. New
  **Subsection C** (L169-178) teaches print-tracing as a first-class technique:
  concept (L170), the `print(f"[DEBUG] variable_name = {variable_name}")` pattern,
  rule-of-thumb (L171), a worked example (L172, the mis-initialised accumulator), and
  a rung-5 fix exercise (L173). The DEBUG f-string pattern runs:
  `print(f'[DEBUG] total = {total}')` → `[DEBUG] total = 5`.

- **Finding 4 [MAJOR] precondition/postcondition never taught:** CONFIRMED-FIXED.
  Subsection C (L174-176) now teaches it: definition (caller-guarantee vs.
  function-guarantee), the "whose bug is it?" framing, a `divide(a, b)` worked example
  with `# b != 0` / `# returns float` comments, and a rung-5 stub exercise. The
  Chapter Challenge boss (ex.6, L233) "write preconditions as comments" now rests on
  taught material. Verified `divide(10, 2)` → `5.0`, `type` is `float`.

- **Finding 5 [MAJOR] monotonicity (5.2 easier than 5.1):** CONFIRMED-FIXED. Rung
  ranges are now 5.1: 5–6, 5.2: 5–6, 5.3: 4–6, 5.4: 4–6, 5.5: 6. 5.2 is no longer
  below 5.1. The ramp prose (L215) adds an explicit note that 5.2 stays at 5–6 because
  the blank-editor Exercise 4 plus style-channel pressure maintain load. See remaining
  finding 1 below — the defense is reasonable but the ceiling is equal, not strictly
  higher; worth one explicit caveat. This is the "monotonic rung restored" item the
  brief asked to confirm: restored.

- **Finding 6 [MINOR] Project C starter-code contradiction:** CONFIRMED-FIXED. L218
  now reads "no starter code for **Project B** (specification only); Projects A and C
  both start from provided (broken/messy) code — Project C is a pure refactoring
  exercise … and requires the messy starter." Consistent with Project C's own
  description (L202-203).

- **Finding 7 [MINOR/ENGINE] duplicate-block & near-identical-string checks:**
  CONFIRMED-FIXED (as documentation). L121 now carries the engine flags:
  `[ENGINE: requires AST clone detection — not yet built; use exact-string duplicate
  as proxy until implemented]` and `[ENGINE: requires string-similarity (Levenshtein)
  check — not yet built; use exact-duplicate as proxy]`. Per the brief these are noted,
  not treated as plan errors.

**Abstraction-deepened note (brief item):** PRESENT. Overview L5 ends: "Abstraction —
named in Ch.3 (functions hide detail) — is deepened here: students now apply it
deliberately across decomposition, naming, and DRY." Also stated in L7. Honours the
§D ownership decision that abstraction is named in Ch.3 and deepened, not re-introduced.

## New / remaining findings

1. **[MINOR] 5.3C print-tracing word-counter exercise (L173) — the "extra spaces"
   premise contradicts "the `.split()` call is correct."** The exercise: "a two-function
   word-counter gives the wrong count for text with extra spaces … fix it (the
   `.split()` call is correct — the bug is elsewhere)." But `str.split()` with no
   argument *already collapses* runs of whitespace, so extra spaces cannot themselves
   cause a wrong count when `.split()` is used correctly. The single most natural bug
   that makes extra spaces matter is exactly the one the exercise rules out
   (`.split(' ')` instead of `.split()`), which yields empty-string elements:
   ```
   >>> 'the  quick   fox'.split()      # correct, no-arg
   ['the', 'quick', 'fox']             # len 3
   >>> 'the  quick   fox'.split(' ')   # the bug — argument given
   ['the', '', '', 'quick', '', '', 'fox']  # len 7 (wrong)
   ```
   So "extra spaces" is a red herring that, given the stated constraint, has no effect
   on the count — an 11-year-old who correctly reasons "but `.split()` handles extra
   spaces" will be confused about where the bug could be. **Fix:** either (a) make the
   bug genuinely `.split(' ')` and drop the "the `.split()` call is correct" clause —
   the cleanest version, since extra spaces then actually drive the failure — or
   (b) keep `.split()` correct but change the symptom to one unrelated to spaces (e.g.
   the accumulator/counter is initialised or incremented wrong), and drop "extra
   spaces" from the description.

2. **[MINOR] 5.1 NameError claim is true only for top-level call-before-def, not
   "any call before definition."** L67 ("NameError if a helper is called before it is
   defined") and the L66 chapter-wide bullet ("calling a function before defining it")
   are loose. Python resolves names at *call time*, so a helper defined *after* a
   caller is fine as long as the caller is not *executed* before the def runs:
   ```
   >>> def a(): return b()
   ... def b(): return 41
   ... print(a())          # 41 — works; def order among helpers is irrelevant
   >>> greet()             # top-level call placed ABOVE its def
   ... def greet(): print('hello')
   NameError: name 'greet' is not defined
   ```
   The 5.1B exercise (L72, "wrong call order that crashes with a NameError, reorder the
   definitions and calls") is correct *only* if it places a **top-level call above the
   def** (verified to raise NameError). The 5.1B misconception (L73) states the right
   rule ("Python only cares that definitions come before the call that runs them"), so
   the body is fine — but the L66/L67 phrasings overstate it and could teach the wrong
   mental model that helper definition *order* matters. **Fix:** reword to "calling a
   function at the top level before its `def` has executed" (and ensure the 5.1B broken
   program is a top-level call above the def, not merely a helper defined later).

3. **[MINOR] 5.2 rung ceiling equals 5.1's (6 = 6) rather than exceeding it.** Round-1
   finding 5 is resolved (5.2 is no longer *below* 5.1), and the composite-load
   argument (blank-editor + style channel) is reasonable and now stated. But §B's rule
   is "each lesson is harder than the previous" — equal max rung with a load argument is
   a defensible reading, not a strict one. Not a blocker; flagging so the author is
   aware the monotonicity rests on the style-channel-pressure argument, which only holds
   if the engine actually fires the 5.2 naming checks at authoring time. No change
   required if the author is comfortable with the composite-load justification.

## Verified-correct (so we know it was actually checked)

```
# Step count is now four everywhere; enumeration genuinely has 4 items:
#   (1) read bottom line (2) find line (3) walk stack (4) hypothesise and test
# grep five[- ]step  -> 0 hits ; quiz Q3 says "four steps"

# Multi-frame traceback: error site is the BOTTOM frame (KeyError in inner()),
# entry point outer() is at the TOP — confirms 5.4A claim:
Traceback (most recent call last):
  File "<string>", line 4, in <module>    outer({})
  File "<string>", line 3, in outer       return inner(d)
  File "<string>", line 2, in inner       return d['missing']
KeyError: 'missing'

# 5.4 worked example chain — all messages exact as written:
int('3.5')  -> ValueError: invalid literal for int() with base 10: '3.5'
5 + '5'     -> TypeError: unsupported operand type(s) for +: 'int' and 'str'
def f(): x=1 ; f().upper() -> AttributeError: 'NoneType' object has no attribute 'upper'
average([]) -> ZeroDivisionError: division by zero   (Ch.Challenge ex.2 empty-input)
1/0         -> ZeroDivisionError: division by zero

# Eight prior error classes count: list in 5.4A L157 = exactly 8 distinct,
# AttributeError correctly excluded as the one new class (taught 5.4B).

# Subsection C homes: print-tracing AND precondition/postcondition both have
# concept + worked example + exercise + misconceptions (L169-178). divide(10,2)->5.0 float.
```

## Verdict notes

The five round-1 MAJOR/BLOCKER items and both MINOR items are genuinely fixed, not
just claimed: step count is four everywhere including the quiz; the error-class count
is a correct eight (prior-met) with AttributeError properly separated as the new class;
print-tracing and precondition/postcondition now have a real teaching home in the new
5.4C; the monotonic rung is restored (5.2 at 5–6, no longer below 5.1); the
abstraction-deepened note is present and honours the Ch.3 ownership decision; the
Project C starter contradiction and the two engine-dependent style checks are corrected/
flagged. The `[ENGINE]` items at L121 are noted, not counted as plan errors.

Only two small content-accuracy issues remain — the 5.3C "extra spaces vs. `.split()`
is correct" contradiction (finding 1) and the overstated 5.1 NameError phrasing
(finding 2) — plus one caveat on the 5.2 equal-ceiling monotonicity argument
(finding 3). None block authoring; all are quick rewords. Chapter is otherwise sound,
technically accurate, and pedagogically well-sequenced.
