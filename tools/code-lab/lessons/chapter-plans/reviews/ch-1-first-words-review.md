# Review — Chapter 1 (Python: First Words)
**Verdict:** Needs fixes
**Reviewed against:** Python 3.14.5, CURRICULUM-STRUCTURE.md, AUTHORING.md, exemplar-w1-values-and-types.md, ch-0 and ch-2 boundary chapters

---

## Findings

### 1. [BLOCKER] Lesson 1.4 — `^` operator mislabelled as `SyntaxError`

The plan states:
> "fix a program that tries to use `^` for power (`SyntaxError` → explain `**`)"

**Verified:**
```python
>>> 2 ^ 3
1          # bitwise XOR — no error at all
>>> 2 ^ 10
8          # not 1024; Python silently gives the wrong answer
```

`^` is a valid Python operator (bitwise XOR). Using it instead of `**` produces a **silent wrong answer**, not a `SyntaxError`. A student who writes `2^10` expecting 1024 gets 8 and no error message — which is substantially harder to debug than an error. The misconception table correctly names this (`^` expected as power), but the error-class column is wrong and the exercise design is wrong: there is no `SyntaxError` to read.

**Fix:** Change the exercise to: run `2^10`, observe the output is 8 (not 1024), explain that `^` is bitwise XOR, introduce `**` as the correct operator. The error introduced is *wrong answer*, not a traceback. Remove `SyntaxError` from the error-class entry for this case in both the lesson and the chapter-wide error table.

---

### 2. [MAJOR] Lesson 1.2 / chapter-wide error table — `SyntaxError` attributed to `^`

The chapter-wide error table (bottom of file) lists:
> `SyntaxError` | 1.1, 1.3 | "Missing quotes; `2score`; `^` instead of `**`; bad f-string"

The `^` item inherits the same error from Finding 1. Since `^` never raises a `SyntaxError`, this entry is factually wrong and will confuse students who run the code and see a number instead of a traceback.

**Fix:** Remove "`^` instead of `**`" from the `SyntaxError` row. If the `^` case is to appear in the error table at all, it belongs in a note about silent wrong answers, not an error class.

---

### 3. [MAJOR] Lesson 1.5 — f-string format spec `:.2f` introduced before it is scaffolded

In the f-strings subsection:
> `f"{price * 1.1:.2f}"` (one formatted example, format spec introduced but not drilled)

This is lesson 1.5 — the student has seen only `int`, `float`, `str`, `bool`, and basic operators. The `:` format-spec syntax (`:.2f`) looks like an expression to a student who has not met it, and it will not be explained elsewhere in Ch.1. "Introduced but not drilled" is fine for a *concept*; it is not safe for *syntax* the student will try to imitate and may malform (producing a `SyntaxError` with no obvious cause).

The exemplar (exemplar-w1-values-and-types.md) does not introduce format specs at all — the exemplar presents `str()`, `bool()`, and conversion; format specs are absent.

**Fix:** Drop `:.2f` from the worked example in 1.5. A plain `f"{price * 1.1}"` demonstrates the concept without introducing an unexplained mini-language. If format specs are wanted, add them as a named subsection with a concept page. If they belong in a later chapter (Strings Deep), note the deferral explicitly.

---

### 4. [MINOR] Lesson 1.2 — truthiness list incomplete for Ch.1 scope; but silently truncated

The plan lists falsy values as: `0`, `0.0`, `""`, `None`, `False`. This is correct for the types taught in Ch.1. However, the plan does not say *why* the list stops there — a student seeing the Python docs will also find `[]`, `{}`, `0j`, etc. and may wonder if the list is a lie.

The exemplar does not raise this at all (it stops at `bool(0)` and `bool(5)`).

**Fix (minor):** Add one sentence scoping the list: "For the types we've seen so far, those are all the falsy values. Collections like lists will add a few more later." This is a low-effort guard against confusion.

---

### 5. [MINOR] Lesson 1.6 — warm-up says `int("3.14")` is a `ValueError`; plan says `int("3.5")`

The warm-up for 1.4 references `int(7 / 2)`. The warm-up for 1.6 asks:
> "`int("42")` gives what? What about `int("hello")`?"

But the 1.2 type-conversion subsection teaches that `int("3.5")` is a `ValueError` (not `int("hello")`). The warm-up for 1.6 jumps to `int("hello")` without recalling `int("3.5")`, missing the more nuanced misconception that students need for the mini-project (the user might type `"25.5"` for an age).

**Verified:**
```python
>>> int("3.5")
ValueError: invalid literal for int() with base 10: '3.5'
>>> int("hello")
ValueError: invalid literal for int() with base 10: 'hello'
```

Both are `ValueError`, but the `"3.5"` case is the one most likely in the mini-project context.

**Fix:** Change the 1.6 warm-up to: "`int("42")` — what value? `int("3.5")` — value or error? `int("hello")` — value or error?" This better primes the mini-project where birth-year input could be decimal.

---

### 6. [MINOR] Lesson 1.7 — "loops haven't arrived" note is good but chapter challenge exercise 9 crosses into 1.6 implicitly

Challenge exercise 9 (transposing motif, rung 6):
> "read a root note from `input()`; play a four-note motif offset by `+0`, `+2`, `+4`, `+7`"

This is fine — `input()` is in 1.6. However, this exercise implicitly requires the student to know how to build a MIDI note from a variable (`root`, `root+4`, etc.) which was only demonstrated in 1.7. Since 1.7 is the strand lesson that introduces the sound API pattern, and the challenge comes after 1.7, the dependency order is correct. Worth a brief note in the plan that this is intentional (the challenge is post-1.7, so the sound pattern is known) to prevent a future author from moving it.

**Fix (documentation only):** Add "(requires: 1.7 sound strand)" to the exercise note in the challenge.

---

## Verified Python claims (correct)

All the following were run and confirmed correct:

```python
# type() output format
type(7)       # <class 'int'>
type(3.14)    # <class 'float'>
type("hi")    # <class 'str'>
type(True)    # <class 'bool'>
type(None)    # <class 'NoneType'>
type("7")     # <class 'str'>

# Operator behavior by type
7 + 7         # 14
"7" + "7"     # "77"
"ab" * 3      # "ababab"
7 + 3.14      # 10.14
7 + "7"       # TypeError (correct)

# Type conversions
int("7")      # 7
int(3.9)      # 3 (truncates toward zero)
int(-3.9)     # -3 (toward zero, NOT -4)
int("3.5")    # ValueError (correct)
float("3.5")  # 3.5
str(42)       # "42"
bool(0)       # False; bool(5) → True

# Floor division behavior
-7 // 2       # -4 (toward -inf, DIFFERENT from int())
10 // 3       # 3

# ** precedence
-2 ** 2       # -4 (** binds tighter than unary -)
2 ** 3 ** 2   # 512 (right-to-left: 2**(3**2))

# str * float raises TypeError (1.5 claim)
"ab" * 3.0    # TypeError (correct)

# input() string repetition bug (1.6)
"5" * 365     # "555...5" (365 fives) -- repetition, not multiplication (correct)

# EOFError on input() at EOF (confirmed)
# ZeroDivisionError for // 0 and % 0 (confirmed)
```

---

## What's strong

- **Teaching order is sound.** The HTTLACS ordering (values & types → variables → operators → strings → input) is respected and the dependency map is explicit and correct. No concept is used before it is taught within Ch.1.
- **Misconceptions table is thorough and accurate** (minus the `^`/SyntaxError entry). The `int()` truncates vs. rounds entry, the `input()` returns str entry, and the subtle repetition-not-multiplication bug in 1.6 are all correctly identified and well-placed.
- **`//` and `int()` distinction is correctly articulated.** The plan correctly distinguishes `//` (floor, toward −∞) from `int()` (truncates toward zero). This is a genuine nuance many curricula get wrong.
- **Progression and ramp are well-designed.** Each lesson's rung range increases, write-from-scratch appears first at 1.3 and becomes the default by 1.6, and the chapter challenge items 7–9 are genuinely blank-editor integrations. The mini-project in 1.6 and the sound strand in 1.7 both pay off the whole chapter.

---

## Coverage check

Spine items owned by Ch.1 per CURRICULUM-STRUCTURE.md §D:

| Spine item | Status |
|---|---|
| `print` (args, `sep`, `end`) | Well covered — 1.1 |
| `input` → str | Well covered — 1.6 |
| Comments | Well covered — 1.1 |
| int, float, str, bool, None | Well covered — 1.2 |
| `type()` | Well covered — 1.2 |
| Type conversion | Well covered — 1.2 |
| Truthiness | Covered — 1.2; slightly thin (no scope note) |
| Arithmetic operators (`+ - * / // % **`) | Well covered — 1.4 |
| Precedence | Well covered — 1.4 |
| Operator-by-type | Well covered — 1.2, 1.5 |
| Variables & assignment | Well covered — 1.3 |
| Naming / snake_case | Well covered — 1.3 |
| Reassignment / state | Well covered — 1.3 |
| String concatenation | Well covered — 1.5 |
| f-strings | Covered — 1.5; format-spec overstep (Finding 3) |
| NameError, SyntaxError, TypeError, ValueError, ZeroDivisionError | Covered; `^`/SyntaxError entry is wrong (Findings 1–2) |

Nothing in the spine is **missing** from Ch.1. The gaps are accuracy issues (Findings 1–3), not omissions.

Ch.2 boundary check: Ch.2 opens with comparison operators and `bool` in expressions — both rely on `bool` as a type and truthiness, which Ch.1 correctly owns. Ch.1 does not introduce `if`, `while`, `for`, comparison operators, or `and`/`or` — the boundary is clean.

Ch.0 boundary check: Ch.0 teaches `play()`/`sleep()` as opaque calls and the four CT ideas unplugged. Ch.1 picks up the sequence idea from Ch.0 in the overview and gives it Python syntax — the boundary is clean and the spiral recall is explicit.
