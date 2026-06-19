# Review — Chapter 2 (Decisions and Loops)

**Verdict:** Needs fixes
**Reviewed against:** Python 3.13.1 (darwin), CURRICULUM-STRUCTURE.md, AUTHORING.md, ch-1-first-words.md, ch-3-functions.md

---

## Findings

### BLOCKERS

**1. [BLOCKER] L2.3 Exercise 1 — `else if` as two words does NOT raise `SyntaxError`**

The plan states: "`elif` written as `else if` (two words), causing a `SyntaxError`."

This is wrong. In Python, `else:\n    if ...:` is syntactically valid. It is simply a nested `if` inside an `else` block — verbose but legal. No error is raised.

```python
# Verified — no SyntaxError:
x = 5
if x > 10:
    print("big")
else:
    if x > 3:       # "else if" written as two lines — compiles and runs fine
        print("medium")
```

The misconception for an 11-year-old is that `else if` (two words on separate lines) _behaves differently_ from `elif` (it produces a deeper indentation level and can mask bugs), not that it crashes. Fix: change the exercise so the student writes `else:\n    if ...:` and observes the structural difference versus `elif`; or pick a genuinely SyntaxError-producing version (e.g. `else if condition:` on a single line, which is invalid). Either way, correct the error-class claim.

**2. [BLOCKER] Chapter Challenge #5 — `sentence.split()` used before it is taught**

Challenge 5 asks students to call `sentence.split()` to split words. `str.split()` is not in Ch.1's concept inventory (Ch.1 teaches concatenation, `str * int`, f-strings, and `len()`) and is not listed as a recalled concept anywhere in Ch.2. Its ownership falls in Ch.4 (deep strings / collections). This violates the core curriculum rule: no concept before it is taught.

Fix: either (a) remove `sentence.split()` from Challenge 5 and give the sentence pre-split as a list, or (b) teach `split()` as a quick "borrowed tool" aside in L2.3 where `len()` is extended, and add it to the recalled-concepts list for Ch.2.

**3. [BLOCKER] L2.6 Worked Example 3 — wrong language about loop variable scope**

The plan says: "NameError from a loop variable used after a `for` loop but inside an inner scope — variable is in scope but was never assigned because `range(0)` produced zero iterations."

This is wrong in two ways:
- Python `for` loops do NOT create a new block scope. There is no "inner scope" for a `for` loop body.
- "In scope but never assigned" contradicts itself: if the variable raises `NameError`, it is by definition not defined. Python's model is simply that the loop variable is bound on the first iteration; if there are zero iterations, it was never bound. Calling it "in scope" teaches the wrong mental model.

```python
# Verified:
for i in range(0):
    pass
print(i)   # NameError: name 'i' is not defined — NOT "in scope but unassigned"

for j in range(3):
    pass
print(j)   # 2 — j IS defined after a non-empty loop (no block scope)
```

Fix: rewrite to say "if the loop body never runs, the loop variable is never defined — Python does not pre-create it." Drop all "inner scope" language.

---

### MAJORS

**4. [MAJOR] L2.5 Worked Example 3 — incoherent `break` framing**

The plan says: "Then break the outer loop if `row == 2` — demonstrate that break only escapes the inner loop it sits in."

If `break` is placed inside the inner `for col` loop with condition `row == 2`, it exits the inner loop (not the outer). The outer `for row` loop continues. The phrasing "break the outer loop if `row == 2`" implies the break targets the outer loop, which contradicts the stated lesson point. The description is logically incoherent as written.

```python
# What actually happens (break inside inner loop, condition on outer variable):
for row in range(1, 4):
    for col in range(1, 4):
        if row == 2:
            break      # exits inner for col, NOT outer for row
        print(f"({row},{col})", end=" ")
    print()
# Output: (1,1) (1,2) (1,3) / [blank line for row=2] / (3,1) (3,2) (3,3)
# Outer loop is not "broken out of" — it continues.
```

Fix: rewrite the example description clearly: "Add `if row == 2: break` inside the inner loop — observe that the inner loop skips row 2's columns but the outer loop still reaches row 3. This shows `break` only exits the innermost loop."

**5. [MAJOR] L2.1 Misconception — `not` conflated with `and`/`or` in the "returns an operand" claim**

The misconception is listed as: "`and`/`or` always return `True` or `False` — they return an operand."

The lumping of `not` into this misconception via proximity is wrong. `not` always returns a `bool`:

```python
not 'hello'   # False  — bool, not operand
not ''        # True   — bool, not operand
not 0         # True   — bool, not operand
```

Only `and` and `or` return operands. The misconception text does not explicitly say `not` returns an operand, but by listing them together under "boolean operators" without distinguishing `not`, a student (or lesson author) could misconstrue. Fix: add a one-line clarification: "`not` is different — it always returns `True` or `False`."

**6. [MAJOR] Chapter Challenge #2 — `continue` in a `while` loop with implicit infinite-loop trap**

Challenge 2 asks students to "skip every odd number using `continue`" in a `while` countdown from 20. The scaffold does not specify where to place `n -= 1` relative to `continue`. If a student writes the decrement after the `continue`, the counter never advances on odd iterations — an infinite loop:

```python
n = 20
while n > 0:
    if n % 2 != 0:
        continue       # never reaches n -= 1 below → infinite hang
    print(n)
    n -= 1
```

This is the exact infinite-loop trap the chapter is supposed to teach students to avoid — but here it would be triggered by the exercise design, not by a deliberate pedagogy moment. The exercise is unsafely specified.

Fix: either (a) scaffold the decrement placement explicitly (e.g. require `n -= 1` as the last line before `continue`), or (b) use a `for`/`range` loop for this `continue` exercise (which sidesteps the trap entirely since `range` manages the counter), or (c) make the infinite-loop trap the deliberate learning goal with a "stop the tab and fix it" recovery exercise — but then say so.

**7. [MAJOR] No Hook lesson — violates CURRICULUM-STRUCTURE.md §C**

Every chapter must start with a Hook lesson (§C item 1): "run / modify something real; motivates and lands one idea." Ch.2 has no lesson labeled or structured as a Hook. L2.1 opens as a concept lesson (six comparison expressions, Parsons, SyntaxError fix) rather than a run-and-modify motivating hook.

This is a structural gap against the locked chapter arc. Fix: either add a brief Hook lesson (L2.0 or relabel L2.1 as a hook with the appropriate arc role) or document a deliberate exception with justification (Ch.2 may be able to borrow the hook role from Ch.1's last strand lesson, but that needs to be stated).

---

### MINORS

**8. [MINOR] L2.6 Worked Example 2 — tab hangs are prevented by the architecture**

The plan says: "A `while` loop with no update — tab hangs. Show the recovery steps: stop the tab, re-read the code, add the update."

Per the product constraints in CLAUDE.md: "Student Python must not be able to freeze the tab. A student `while True` must be recoverable." The in-browser Pyodide runtime (likely in a worker) is designed to interrupt infinite loops. The lesson should say "the code runs forever and must be stopped" with the actual recovery UI (an interrupt button), not "the tab hangs." Fix: align the wording with the actual UX — the engine provides a stop button; students click it, not a browser close.

**9. [MINOR] Missing misconception: off-by-one in `elif` threshold order (L2.3)**

The `elif`-order misconception is listed as "order of `elif` clauses matters — a `>= 50` check before `>= 90` will swallow all high scores." This is correct but the listed misconception in the chapter-wide table says only "The order of `elif` conditions does not matter — it does; first match wins." Both are the same misconception, but the chapter-wide table entry is thinner than the lesson-level description. Minor inconsistency, not a gap.

**10. [MINOR] L2.7 sound exercise: `play()`/`sleep()` API assumed from Ch.0, but Ch.0 is not in the boundary-checked plans**

The sound strand exercises reference `play(KICK)`, `play()`, `sleep()` as assumed from "Ch.0 L0.1." The adjacent plan available for review is Ch.1. Ch.0 is not in the boundary set I can check. If Ch.0 does not teach `play()` and `sleep()` with the exact call signatures used in L2.7, Ch.2 exercises that use these calls without re-introduction will be opaque. Flag for cross-check when Ch.0 is reviewed.

**11. [MINOR] `_` convention for unused loop variable introduced in L2.7 — not in concept inventory**

L2.7 introduces the `_` convention for a variable the loop body does not use ("The `_` convention for a variable you don't use — named explicitly"). This is a genuine Python idiom but it does not appear in Ch.2's "Concepts owned" section. It is a small concept that deserves a line in the owned-concepts list (or a note that it is a style convention, not a language rule). As written, it is taught but not tracked in the concept inventory.

---

## Verified Python claims (no issues found)

The following claims were run and are correct:

```python
# Short-circuit: and/or return operands
0 and 42    # → 0
1 and 42    # → 42
0 or 42     # → 42
# 'if x == 1 or 2' fires for all x because 2 is standalone truthy
x = 99; bool(x == 1 or 2)   # → True (2 is truthy)
# Truthiness
bool(0), bool(''), bool([]), bool(None), bool(42)  # False False False False True
# range bounds
list(range(5))        # [0,1,2,3,4] — stop not included
list(range(2,8,2))    # [2,4,6]     — quiz Q3 correct
list(range(10,0,-1))  # [10..1]     — countdown correct
# ValueError / TypeError from range
range(0,10,0)   # ValueError: range() arg 3 must not be zero
range(3.0)      # TypeError: 'float' object cannot be interpreted as an integer
# break exits only innermost loop — outer continues
# Collatz from n=6 terminates: [3,10,5,16,8,4,2,1]
# Hexagon exterior angle: 360/6 = 60° ✓
# Quiz Q1 (x=7): B ✓   Quiz Q2 (countdown 3): 3 2 1 ✓   Quiz Q3 (range(2,8,2)): 2 4 6 ✓
```

---

## What's strong

- **Concept sequencing is sound.** The dependency graph (comparisons → `if/else` → `elif` → `while` → `for`/`range` → debug consolidation → strand application) follows a logical path with no concept used before it is introduced.
- **Misconception coverage is thorough.** The chapter-wide misconception table is one of the most complete I have seen at this level: 14 listed misconceptions, each pinned to a lesson and a cited source. The `range(5)` off-by-one trap, `break` innermost-only, and `while True` validity are all named — the three most commonly omitted items at this level.
- **Debugging woven from lesson 1.** Every lesson has at least one fix/spot exercise, and L2.6's explicit three-step protocol (read → locate → understand) is correctly placed after students have the full error-class vocabulary. The placement matches HTTLACS's "debugging as synthesis" model.
- **Error class table is accurate.** All seven error classes introduced in Ch.2 (`SyntaxError`, `IndentationError`, `TabError`, `NameError`, `TypeError`, `ValueError`, and the informal "infinite-loop hang") are correctly described and correctly attributed by first-introduction lesson.

---

## Coverage check

| Spine concept | Status |
|---|---|
| Comparison operators (`==`,`!=`,`<`,`>`,`<=`,`>=`) | Well covered (L2.1) |
| Boolean operators (`and`/`or`/`not`) | Well covered (L2.1); `not` distinction from `and`/`or` needs sharpening (Finding 5) |
| Truthiness | Well covered (L2.1); `[]` and `None` explicitly listed |
| `if`/`elif`/`else` | Well covered (L2.2–L2.3) |
| Indentation/block/`IndentationError` | Well covered (L2.2, L2.6); `TabError` noted |
| `while` + loop responsibilities | Well covered (L2.4) |
| `for`/`range()` (all three forms) | Well covered (L2.5) |
| `break`/`continue` | Covered (L2.5); worked example framing incoherent (Finding 4) |
| Nested loops | Covered (L2.5); one level only — appropriate for this chapter |
| Infinite loop + recovery | Covered (L2.4); wording conflicts with runtime architecture (Finding 8) |
| `str.split()` | Used in Challenge 5 but NOT taught — gap (Finding 2) |
| Hook lesson arc role | Missing — structural gap (Finding 7) |
| `_` convention | Taught in L2.7 but absent from concept inventory (Finding 11) |
