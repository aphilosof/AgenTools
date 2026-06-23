# Deep Review (round 2) — Chapter 1 (Python: First Words)
**Verdict:** Clean
**Python verified on:** 3.14.5

## Round-1 fixes audit

- **Finding 1 [BLOCKER] — `^` mislabelled as `SyntaxError` (1.4):** CONFIRMED-FIXED.
  The 1.4 subsection now reads "run `2^10` and observe the output is `8` (not 1024) —
  explain that `^` is Python's *bitwise XOR* operator, a silent wrong answer with no
  traceback; the correct power operator is `**`." The misconception table row and the
  error-class note both now describe a silent wrong answer, not a `SyntaxError`.
  Verified:
  ```
  >>> 2 ^ 10      # 8  (no error, valid operator)
  >>> 2 ^ 3       # 1
  ```
  The Error-class section of 1.4 explicitly adds: "Note: `^` does NOT raise
  `SyntaxError` — it silently produces the wrong answer." Correct.

- **Finding 2 [MAJOR] — chapter-wide error table attributed `SyntaxError` to `^`:**
  CONFIRMED-FIXED. The `SyntaxError` row (line 475) now lists only "Missing quotes;
  `2score`; bad f-string" — the `^` item is gone. A standalone note beneath the table
  (lines 482–484) reclassifies `^` as a silent wrong answer (`2^10` → `8`), not an
  error class. Correct.

- **Finding 3 [MAJOR] — f-string format spec `:.2f` introduced before scaffolded
  (1.5):** CONFIRMED-FIXED. The f-strings subsection now uses
  `f"Price: {round(price * 1.1, 2)}"` instead of `:.2f`, and adds an explicit deferral:
  "No format-spec mini-language in this chapter; `:.2f` is deferred to Ch.7 Strings
  Deep where it gets a full concept page." `round(price*1.1, 2)` is solvable with only
  Ch.1 concepts (`round` is now owned in 1.5). Verified:
  ```
  >>> f"Price: {round(10.0 * 1.1, 2)}"   # 'Price: 11.0'
  ```
  Correct.

- **Finding 4 [MINOR] — truthiness list silently truncated (1.2):** CONFIRMED-FIXED.
  1.2 now carries the scope note: "For the types we've seen so far, those are all the
  falsy values — collections like lists will add a few more in a later chapter."
  Falsy list (`0`, `0.0`, `""`, `None`, `False`) verified complete for Ch.1 types:
  ```
  >>> bool(0), bool(0.0), bool(""), bool(None), bool(False)  # all False
  >>> bool(5), bool("x")                                     # both True
  ```

- **Finding 5 [MINOR] — 1.6 warm-up jumped to `int("hello")`, skipping `int("3.5")`:**
  CONFIRMED-FIXED. The 1.6 warm-up now asks all three: `int("42")` (value),
  `int("3.5")` (value or error?), `int("hello")` (value or error?), and names the
  `"3.5"` decimal-string case as the mini-project trap. Verified both raise:
  ```
  >>> int("3.5")    # ValueError: invalid literal for int() with base 10: '3.5'
  >>> int("hello")  # ValueError: invalid literal for int() with base 10: 'hello'
  ```

- **Finding 6 [MINOR, doc-only] — challenge ex.9 dependency on 1.7 not noted:**
  CONFIRMED-FIXED. Challenge ex.9 now reads "(rung 6, blank, sound strand; requires
  1.7)" with a sentence stating the placement after 1.7 is intentional because the
  sound API pattern is a prerequisite.

## New / remaining findings

None at BLOCKER or MAJOR level. Two MINOR observations, neither requiring a fix:

1. [MINOR — verify-only, no fix needed] 1.5 "banker's rounding (optional aside)" —
   the plan says `round(3.5)` → 4 and flags banker's rounding for halfway cases. Both
   true, but note the example happens to round *up*; the rule is round-half-to-even.
   Verified:
   ```
   >>> round(3.5), round(2.5), round(0.5), round(1.5)   # (4, 2, 0, 2)
   ```
   `round(3.5)`→4 (even=4) and `round(2.5)`→2 (even=2) demonstrate the rule. The plan
   correctly labels this "optional aside," so it is appropriately scoped for an
   11-year-old; flagging only so the author keeps `round(3.5)` paired with a halfway
   case that rounds *down* (e.g. `round(2.5)` → 2) if the aside is ever expanded, to
   avoid implying "always rounds up."

2. [MINOR — verify-only, no fix needed] Quiz item "`^` vs `**` — given `2^8`, predict
   the output and explain why it is not 256." The expected output is `10`, not the
   intuitive `0`/`256`. Verified:
   ```
   >>> 2 ^ 8    # 10   (binary 010 XOR 1000 = 1010)
   ```
   The item is answerable from 1.4 content (student is told `^` is XOR and gives a
   silent wrong answer); the auto-checker just needs the correct expected value `10`
   recorded. No plan change required — flagging so the checker key is not set to a
   guessed value.

## Verified-correct (so we know it was actually checked)

```
# 1.5 NEW string content — all run on 3.14.5
"Python"[0], "Python"[-1], "Python"[0:3], "Python"[3:], "Python"[:2]
                                  # 'P' 'n' 'Pyt' 'hon' 'Py'
"Python"[1:4]                     # 'yth'  (stop exclusive)
"Python"[6]                       # IndexError: string index out of range
"hello chapter".split()             # ['hello', 'chapter']
"a,b,c".split(",")                # ['a', 'b', 'c']
" ".join(["Code", "Lab"])         # 'Code Lab'
type("a b".split())               # <class 'list'>
len("Python"), len("Code Lab")    # 6, 8
round(3.14159, 2), round(7/2)     # 3.14, 4
type(round(3.7)), type(round(3.14159,2))  # <class 'int'>, <class 'float'>
"5"*365                           # repetition → 365-char string (not 1825)
"-"*20                            # 20-dash divider
"ab" * 3.0                        # TypeError: can't multiply sequence by non-int of type 'float'
f"Length: {len('Python')}"        # 'Length: 6'
f"Price: {round(10.0*1.1,2)}"     # 'Price: 11.0'
f"{}"                             # SyntaxError (empty braces)
f"{undef}"                        # NameError (undefined var in braces)

# Slicing is non-mutating (immutability)
w="Python"; w[1:3]; w             # w unchanged → 'Python'

# Conversions / operator-by-type / precedence (re-verified)
int("3.14"), int("3.5"), int("hello")   # all ValueError
int(3.9), int(-3.9)               # 3, -3  (truncate toward zero)
-2**2, (-2)**2, 2**3**2           # -4, 4, 512
-7//2, 10//3                      # -4, 3  (floor toward -inf; ≠ int())
"Score: " + 5                     # TypeError
2^10                              # 8  (silent wrong answer, NOT SyntaxError)
```

## Verdict notes

All six round-1 findings are genuinely fixed in the source, not merely claimed — each
fix was located in the current file text and the underlying Python re-verified on
3.14.5.

Decision #1 (`^` is a silent wrong answer / bitwise XOR, not a `SyntaxError`) landed
correctly in three places: the 1.4 subsection, the 1.4 error-class note, the
chapter-wide misconception table, and the chapter-wide error table + standalone note.

Decision #5 (1.5 owns string indexing, slicing, `split`/`join`, `len`, `round`, and the
f-string format-spec deferral) landed correctly and matches CURRICULUM-STRUCTURE.md §D
("Strings — … indexing, slicing, `split`/`join`, immutability (Ch.1)"; "Common
built-ins — `len`, `round` (Ch.1)"; "comprehensions (Ch.8)").

No use-before-taught in the new 1.5 content:
- Indexing/slicing/`split`/`join`/`len`/`round` reuse only str (1.2), variables (1.3),
  operators (1.4) — all prior.
- f-string examples use only `len()` and `round()`, both introduced earlier in the same
  1.5 lesson (their subsection precedes f-strings). Order is correct.
- Lists appear only as `split`/`join` return values with an explicit "Ch.4 owns them
  fully" note — consistent with §D and with ch-4's stated reuse of Ch.1 string
  indexing/slicing. No list operations (indexing, mutation, iteration) are used.
- IndexError is correctly homed to 1.5 (out-of-range string index) and registered to
  the chapter error table.

Boundary checks: Ch.2 recalls Ch.1 types/bool/truthiness (correctly Ch.1-owned) and
introduces comparison/boolean operators itself — no backward leak. Ch.4 explicitly
builds on Ch.1 string indexing/slicing and owns lists — no overlap. No `global`, no
comprehensions, no inheritance anywhere in Ch.1. Difficulty ramp remains monotonic and
spiral-weaving (warm-up retrieval + recalls per lesson) is intact through the added 1.5
material.
