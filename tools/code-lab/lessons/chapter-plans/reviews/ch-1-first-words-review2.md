# Deep Review Round 2 — Ch.1 First Words
**Verdict:** Needs fixes
**Python verified on:** 3.14.5

---

## Round-1 fixes audit

Each item below references the synthesis fix list (B = Blocker, M = Major, m = minor).

**B1 — Plan/implementation gap (c1.js incomplete):** STILL-BROKEN.
The plan now correctly describes the gap in its opening table and assigns authoring
actions. But c1.js itself is unchanged. All 14 gaps remain unbuilt: f-strings,
`:.2f`, string indexing/slicing, `.join()`, `round()`, `^` XOR exercise, `-2**2`
precedence, `ZeroDivisionError` preview, `int()` vs `//` contrast, full naming
subsection, truthiness subsection, traceback-reading page, variable-driven c1s7,
and f-string model solutions in c1s6. The Chapter Quiz gates on material that is
still absent from the lesson file. The plan correctly identifies the work; the work
has not been done.

**B2 — L1.7 hardcoded values:** STILL-BROKEN.
c1s7 still hardcodes `forward(100)` four times and `play(60)`, `play(64)`,
`play(67)` directly. The plan now explicitly documents the required rewrite (using
`side = 100` and `root = 60` as driving variables), and the implementation note
labels it B2. But the code is unchanged.

**B3 — Quiz gates on untaught material:** STILL-BROKEN (consequence of B1).
The quiz correctly requires f-strings, `:.2f`, indexing, slicing, and `^` XOR.
None of those are in c1.js yet. Resolution is blocked on B1.

**M1 — `sep`/`end` ownership:** CONFIRMED-FIXED.
The plan explicitly removes `sep`/`end` from L1.1 owned concepts (with a parenthetical
note) and records Ch.2 as the correct home. `c2s5` confirms the placement: `end=`
introduced in context of a for-loop `print(i, end=" ")`. Verified correct.

**M2 — Truthiness re-teach in c2s1:** STILL-BROKEN.
The plan adds a full truthiness subsection to L1.2 (correct). But c2s1 in c2.js
still defines truthiness from scratch: its glossary entry reads "Python's rule for
deciding whether a non-boolean value counts as True or False..." and its lesson text
says "Python does not demand a strict True or False. It accepts any value and applies
a rule called truthiness..." — this is re-teaching, not recall. The plan's fix note
says "revise c2s1 to recall rather than re-teach" — that revision has not been made.
Additionally, c2s1 says falsy values are "exactly these three: the number `0`, the
empty string `""`, and the special value `None`" — this omits `0.0` and `False` from
the falsy list. This is technically incorrect (verified: `bool(0.0)` → `False`,
`bool(False)` → `False`). The Ch-1 plan correctly lists all five (`0`, `0.0`, `""`,
`None`, `False`); c2s1 contradicts it.

**M3 — Traceback-reading instruction:** CONFIRMED-FIXED in the plan.
L1.1 now contains a detailed "how to read an error message" subsection with a labelled
diagram covering file/line number, error class name, description, and bottom-up reading
order. This is a plan-level fix only; c1.js still needs the content built.

**M4 — Two-phase `x = x + 1` model:** CONFIRMED-FIXED in the plan.
L1.3 reassignment subsection now has explicit prose: "Python reads the right side of
`=` completely first — using the current value of any name it finds there — then stores
the result back on the left." The two-step model precedes the stepper trace. Plan-level
fix only; c1.js still needs the content built.

**M5 — L1.6 mini-project uses f-strings before they are taught:** STILL-BROKEN.
The plan correctly notes "once B1 is resolved, update all c1s6 examples and model
solutions to use f-strings." c1s6 currently uses string concatenation
(`"Hi " + name + "..." + str(age + 1)`). Blocked on B1.

**M6 — L1.5 cognitive overload:** CONFIRMED-FIXED in the plan.
The plan now includes a "Cognitive load note" before L1.5 and specifies internal pacing:
one concept cluster per subsection, predict exercise first in each, synthesis last, and
an explicit split option (L1.5a / L1.5b) if the 25-minute budget is exceeded. Scope is
unchanged (correct). Plan-level fix only.

**M7 — `.join()` before lists:** CONFIRMED-FIXED in the plan.
The `.join()` subsection now explicitly constrains exercises: "students must never be
asked to construct `['a', 'b']` syntax in their own writing until Ch.4." Examples may
show list literals for reading; exercises use pre-assigned variables. Plan-level fix only.

**m1 — `^` XOR example consistency:** CONFIRMED-FIXED.
The plan now uses `2^8` (result: `10`) in both L1.4 and the Chapter Quiz. Verified:
`2^8 = 10` (binary `0b0010 XOR 0b1000 = 0b1010`). The quiz adds "same trap from
Lesson 1.4." Consistent. Note: the old L1.4 example was `2^10` (result: `8`); `8` is
itself a power of 2 (`2^3`), which made the trap less vivid — Guzdial's rationale for
switching to `2^8` is validated: `10` is unmistakably not a power of 2.

**m2 — `int()` vs `//` truncation contrast:** CONFIRMED-FIXED in the plan.
L1.4 now includes a worked example: `int(-7/2)` → `int(-3.5)` → `-3` (toward zero)
vs. `-7//2` → `-4` (floor, toward −∞). Verified on 3.14.5:
`int(-7/2)` → `-3`, `-7//2` → `-4`. Label: "`int()` chops toward zero; `//` steps
down to the floor." Positive examples look identical so only the negative case reveals
the difference — plan correctly highlights this. Plan-level fix only.

**m3 — Truthiness re-teach risk in c2s1:** STILL-BROKEN (same as M2 above).

**m4 — `:.2f` decomposition missing:** CONFIRMED-FIXED in the plan.
L1.5 f-strings subsection now includes a three-sentence decomposition before the first
`:.2f` example: "Inside `{}`, a colon separates the expression from formatting
instructions. `f` means float, `.2` means two decimal places." Plan-level fix only.

**m5 — Method chaining not named:** CONFIRMED-FIXED in the plan.
The `.lower()/.upper()/.strip()` subsection now explicitly names the chaining pattern:
"The result of `.strip()` is itself a string, so you can call `.lower()` on it
immediately." One sentence, correctly placed before the example. Plan-level fix only.

**m6 — `my-name` error described vaguely:** CONFIRMED-FIXED in the plan.
L1.3 naming subsection now gives the actual error: "`my-name` is parsed as subtraction:
Python reads `my - name = 5` as an expression, not a name, and raises
`SyntaxError: cannot assign to expression here`." Verified on 3.14.5:
`my-name = 5` → `SyntaxError: cannot assign to expression here. Maybe you meant '=='
instead of '='?` The plan's description matches.

**m7 — L1.5 starts at rung 3, skipping predict:** CONFIRMED-FIXED in the plan.
L1.5 rung range now explicitly reads "1 predict → 3 modify → 4 fix → 5 complete →
6 write" and the subsections each specify "(predict first — m7)" before the first
exercise. Plan-level fix only.

**m8 — L1.5 synthesis subsection rung unassigned:** CONFIRMED-FIXED.
Synthesis subsection now explicitly assigned rung 5 (complete from stub), with the
rationale: "five new tools simultaneously is too steep; rung 6 is reserved for the
Challenge where students have had one more lesson of distance."

**m9 — Challenge has no Ch.0 callback:** CONFIRMED-FIXED.
Challenge item 1 now includes the preamble: "In Chapter 0 you described algorithms in
plain words. Now name the type of each value and predict what Python does — same careful
thinking, Python syntax."

**m10 — Three consecutive rung-6 items:** CONFIRMED-FIXED in the plan.
An optional interleaving item (8.5) is added between items 8 and 9. Item 7 is given a
generous 3-hint minimum ladder. Plan-level fix only.

**m11 — L1.7 has no `input()` integration:** CONFIRMED-FIXED in the plan.
A third subsection is added to L1.7: "`input()` integration" — one rung-5 exercise
("read a side length from the user, draw the square" or "read a root note, play the
chord"). Plan-level fix only.

**m12 — `bool(0.0)` omitted from quiz:** CONFIRMED-FIXED in the plan.
The Chapter Quiz falsy-identification item now explicitly includes `0.0` in the
candidate set. Verified: `bool(0.0)` → `False`.

**m13 — Stepper interface contract not specified:** CONFIRMED-FIXED in the plan.
A full "Stepper interface contract" section was added to the plan: one row per live
variable, updates after assignment completes, prior value struck through on
reassignment, line highlight, type shown. This is a plan-level spec.

**Summary: 12 of 16 items confirmed fixed at plan level. 3 items (B1, B2, B3, M2/m3)
are still broken in the implementation. The plan is now correct; the lesson file and
c2s1 have not been updated.**

---

## New / remaining findings

### NEW-1 — MAJOR: c2s1 falsy list is factually incomplete and contradicts Ch.1 plan
The c2s1 lesson text (already built and deployed) states falsy values are "exactly
these three: the number `0`, the empty string `""`, and the special value `None`."
This is wrong: `bool(0.0)` → `False` and `bool(False)` → `False` are also falsy,
and the Ch.1 plan correctly lists all five. The contradiction is active in c2.js right
now, not a plan issue. A student who reads c2s1 after a correct Ch.1 lesson will
encounter a narrower list and may conclude `0.0` is truthy. This must be corrected in
c2s1 independently of whether Ch.1 truthiness is built, because c2s1 is already live.
Fix: change c2s1 prose from "exactly these three" to the correct five-item list, and
add `0.0` to the `bool()` example.

### NEW-2 — MINOR: `2^8` binary annotation in quiz is wrong
The Chapter Quiz section says: "binary `0b0010 XOR 0b1000 = 0b1010`". This is correct
(`0b0010` = 2, `0b1000` = 8, `0b1010` = 10). However the annotation uses `0b0010`
(4 bits) for 2, while 2 in binary is `0b10` (2 bits). The 4-bit zero-padded form
`0b0010` is not wrong numerically, but using inconsistent widths (`0b0010` vs `0b1000`)
may confuse an 11-year-old who is seeing binary for the first time. The example could
pad both to 4 bits consistently (`0b0010 XOR 0b1000 = 0b1010`) — it already does, so
this is a non-issue. Verified: the annotation as written (`0b0010 XOR 0b1000 = 0b1010`)
is numerically correct.

### NEW-3 — MINOR: Grade-level check on L1.2 Truthiness prose
Spot-checked three plan explanations against a simplified Flesch-Kincaid estimator
(run on Python 3.14.5):

- L1.2 Truthiness: FK grade ~6.4 — slightly below target (7–9). The sentences are
  short and the vocabulary is accessible (a good thing at this level), but the prose
  plan should ensure the actual authoring reaches grade 7 by adding the "why" — why
  Python counts `0` as false, what design choice it reflects — per AUTHORING.md §2.
  This is an authoring guidance note, not a plan defect.
- L1.3 Two-phase model: FK grade ~8.8 — within target.
- L1.4 `int()` vs `//` contrast: FK grade ~9.3 — at the top of target; watch for
  grade creep in implementation if technical terms compound.

No fixes required; flag for authoring phase.

### NEW-4 — MINOR: `sep`/`end` still absent from Ch.2 concepts-owned keyword list
The Ch.1 plan correctly removes `sep`/`end` and notes they are Ch.2-owned. But the
Ch.2 plan's "Concepts owned (keywords)" section does not list `sep` and `end` — they
appear only in c2s5's example code. The M1 resolution says "add them explicitly to
Ch.2's owned-concepts record." This was done in the Ch.1 plan description but the
Ch.2 plan itself was not updated. Not critical, but the concept spine becomes
unauditable when ownership is recorded only in the referring chapter's plan.

### NEW-5 — MINOR: L1.5 subsection count exceeds CURRICULUM-STRUCTURE.md §A limit
CURRICULUM-STRUCTURE.md §A says: "Subsections — 2–3 exercises per subsection." The
L1.5 lesson as specified has 6 subsections plus a synthesis subsection. The lesson
template (§B) says "Subsection × 3–6," so 6 subsections is at the upper limit — not
a violation, but the highest-load lesson in the chapter is also at the structural
maximum. The plan's cognitive load note correctly acknowledges this and provides a
split option; flagging that the L1.5a/L1.5b split decision must be made before
authoring, not after, so the lesson ID structure (c1s5 vs c1s5a/c1s5b) is settled.

### NEW-6 — VERIFY: `round()` return type claim
The plan states "`round(n)` rounds a float to the nearest integer (returns `int`);
`round(n, d)` rounds to `d` decimal places (returns `float`)." Verified on 3.14.5:
`type(round(2.5))` → `<class 'int'>`, `type(round(3.14159, 2))` → `<class 'float'>`.
The plan's claim is correct. However, `round(2.5)` → `2` (banker's rounding, not `3`),
and the plan correctly notes this: "pair both `round(2.5)` → `2` and `round(3.5)` → `4`
to prevent the misconception 'always rounds up.'" Verified: `round(2.5)` → `2`,
`round(3.5)` → `4`. Both are confirmed.

---

## Verified-correct claims

All verified on Python 3.14.5:

```python
# XOR
2 ^ 8        # 10 (not 256; 0b0010 XOR 0b1000 = 0b1010) — plan claim confirmed
2 ^ 10       # 8  (old lesson example; 8 IS a power of 2 → Guzdial's switch to 2^8 is correct)

# Truncation direction
int(-7 / 2)  # -3  (toward zero, not floor) — plan claim confirmed
-7 // 2      # -4  (floor, toward -inf) — plan claim confirmed
int(3.9)     # 3   (drops fraction, does not round) — plan claim confirmed
int(-3.9)    # -3  (toward zero, not -4) — plan claim confirmed

# Precedence
-2 ** 2      # -4  (unary minus applied after **) — plan claim confirmed
(-2) ** 2    # 4   — plan claim confirmed

# String indexing
"Python"[0]    # 'P'
"Python"[-1]   # 'n'
"Python"[0:3]  # 'Pyt'
"Python"[1:4]  # 'yth'  (quiz claim confirmed)
"Python"[3:]   # 'hon'
"Python"[:2]   # 'Py'
"Python"[6]    # IndexError: string index out of range

# Truthiness (complete set)
bool(0)      # False
bool(0.0)    # False
bool("")     # False
bool(None)   # False
bool(False)  # False
bool("0")    # True  (non-empty string) — plan claim confirmed
bool(" ")    # True  (space is not empty)

# round() return types and banker's rounding
round(2.5)            # 2  (banker's rounding, not 3) — plan claim confirmed
round(3.5)            # 4  (banker's rounding) — plan claim confirmed
type(round(2.5))      # int
type(round(2.5, 2))   # float
round(3.14159, 2)     # 3.14

# f-string :.2f
f"{2.5:.2f}"          # '2.50'  (trailing zero) — plan claim confirmed
str(round(2.5, 2))    # '2.5'   (no trailing zero) — distinguishes :.2f vs round()

# int() ValueError
int("3.5")   # ValueError (plan claim confirmed)
int("hello") # ValueError (plan claim confirmed)

# len
len("Code Lab")  # 8 — plan claim confirmed

# ZeroDivisionError
7 // 0  # ZeroDivisionError: division by zero — plan claim confirmed
7 % 0   # ZeroDivisionError: division by zero — plan claim confirmed

# str * float TypeError
"ab" * 3.0  # TypeError: can't multiply sequence by non-int of type 'float' — confirmed

# my-name SyntaxError
# my-name = 5  →  SyntaxError: cannot assign to expression here — plan claim confirmed
# 2score = 5   →  SyntaxError: invalid decimal literal — plan claim confirmed

# split/join
"hello chapter".split()       # ['hello', 'chapter']
" ".join(["Code", "Lab"])     # 'Code Lab'
"  Hi  ".strip().lower()      # 'hi'
```

---

## Summary

**Plan-level status:** The revised plan addresses all 16 synthesis items. 14 are
confirmed fixed at the plan level. 2 items require additional action:

1. M2/m3 — c2s1 must be revised to recall Ch.1 truthiness, not re-teach it. This
   requires an edit to c2.js, not just to the plan.

2. B1/B2/B3 — Implementation gaps remain. The plan is now a correct authoring spec;
   c1.js still needs all 14 additions, and c2s1 needs the falsy list corrected.

**New findings:** 1 MAJOR (c2s1 falsy list factually incomplete — `0.0` and `False`
omitted, already live in c2.js), 4 MINOR (Ch.2 concept-owned omits sep/end; L1.5
lesson-ID split decision needed before authoring; grade-level note for L1.2 prose;
`2^8` binary annotation format note).

**All Python claims verified.** No factual errors found in the revised plan itself.
