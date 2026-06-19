# Review — Chapter 5 (Thinking in Code)
**Verdict:** Needs fixes
**Reviewed against:** Python 3.13 (darwin), CURRICULUM-STRUCTURE.md, AUTHORING.md, ch-4-collections.md, ch-6-classes.md

---

## Findings

### 1. [BLOCKER] 5.4B + every chapter reference to "four-step protocol" — five steps are listed, four are named

The chapter's title, overview, 5.4 concept list, 5.4B section heading, 5.4B exercise 3, and Quiz Q3 all call it the "four-step debugging protocol." The actual enumeration in 5.4B has five numbered items:

```
(1) read the bottom line
(2) find the line
(3) walk the stack
(4) form a hypothesis
(5) test
```

Quiz Q3 asks students to "list the four steps of the debugging protocol in order." A student who memorises the five-step list will fail an auto-grader keyed to four steps, or vice versa. Author must either merge two steps (the natural merge is to fold "walk the stack" into "find the line" or to fold "form a hypothesis" and "test" into one "hypothesise-and-test" step) and use that count everywhere, or rename to "five-step" everywhere including the quiz. Fix must be consistent across the overview, 5.4 concept list, 5.4B, the Chapter Challenge, and the quiz question.

### 2. [MAJOR] 5.4A — "reviews all seven met so far" is wrong; ZeroDivisionError is always met before Ch.5

The chapter says 5.4 "reviews all seven [error classes] met so far" and separately says it "introduces `ZeroDivisionError` if not yet met." But Ch.4.3 explicitly lists `ZeroDivisionError` as recalled from Ch.1/2 ("ZeroDivisionError — recall Ch.1/2, not new but provoked here"), and Ch.4 Challenge exercise 2 deliberately provokes it. By the time any student reaches Ch.5 they have seen `ZeroDivisionError` in both Ch.4.3 and the Ch.4 Challenge. The error count entering Ch.5 is eight, not seven, and "if not yet met" is always false.

```
# Verified: ZeroDivisionError is trivially provoked
>>> 1/0
ZeroDivisionError: division by zero
```

Fix: replace "seven" with "eight" throughout Ch.5. Remove the "if not yet met" hedge for `ZeroDivisionError`; it is always met.

### 3. [MAJOR] 5.4 Concepts list vs. subsection structure — print-tracing has no subsection

Lesson 5.4 lists three concepts: traceback anatomy, the debugging protocol, and `print`-tracing strategy. Only two subsections exist (A — traceback anatomy; B — the four/five-step protocol). `print`-tracing strategy is listed in the concept inventory and cited in the BYU CS111 source but has no subsection, no worked example, and no exercises. The BYU source cited describes `print`-tracing as a first-class novice technique alongside reading tracebacks. Either add Subsection C (print-tracing: when to use it, how to label output, how to interpret it) or move print-tracing to a parenthetical note inside 5.4B and remove it from the owned-concepts list. Leaving it in the concepts list without a subsection is an authoring gap.

### 4. [MAJOR] Chapter owned concepts — precondition/postcondition has no instruction

`precondition / postcondition` appears in the chapter-level "Concepts owned" list with the definition "caller's responsibility vs. function's responsibility; locates where the bug is." It is never taught in any subsection. The only appearances after the concept list are: (a) one mention in 5.4's concept bullet ("Error classes: …AttributeError") and (b) the Chapter Challenge exercise 6 asking students to "write preconditions as comments." Students are asked to apply a concept in a challenge exercise that was never taught. Either add a subsection in 5.4 that teaches the pre/postcondition idea with a worked example, or remove it from the owned-concepts list and drop the Ch.Challenge 6 precondition task.

### 5. [MAJOR] Lesson difficulty ramp violates CURRICULUM-STRUCTURE §E monotonicity rule

CURRICULUM-STRUCTURE §E requires "each lesson is harder than the previous lesson in the chapter." The rung ranges are:

| Lesson | Rung range |
|--------|------------|
| 5.1    | 5–6        |
| 5.2    | 4–5        |
| 5.3    | 4–6        |
| 5.4    | 4–5        |
| 5.5    | 6          |

5.2 (rung 4–5) is easier than 5.1 (rung 5–6); the maximum rung drops from 6 to 5 between the first and second lessons. The Progression/difficulty ramp section at the end of the chapter acknowledges this implicitly but does not flag the violation. The stated rationale — that the style channel provides automatic feedback and bounds difficulty — is a plausible mitigation but is not the same as the rung being harder. Options: (a) raise 5.2's hard exercise to rung 6 (a blank-editor naming refactor of a small program), or (b) add a difficulty column to the rung table that aggregates cognitive load (rung + style-channel pressure) and argue the composite is monotone.

### 6. [MINOR] 5.5 Progression summary — internal contradiction on Project C starter code

The Progression/difficulty ramp section says "no starter code for Projects B and C." Project C's own description opens with "Given: a 40-line sound program with copy-pasted note sequences…" — that is explicitly provided starter code. Project B correctly has no starter ("Given: a specification only"). Fix: change the progression summary to read "no starter code for Project B" (or document Project C as a refactoring task that requires starter code by definition).

### 7. [MINOR, ENGINE DEPENDENCY] 5.3 style channel — duplicate-block and near-identical-string checks require non-trivial AST work

Two style-channel items activated in 5.3 are described without any engine-dependency flag:

- "duplicate literal block (flags)" — detecting semantic code clones requires either string diff over AST subtrees or a hash-based clone detector. This is substantially harder than the other style checks (identifier length, camelCase regex, literal-in-condition AST walk).
- "three or more calls to `print` with near-identical strings (suggests function)" — requires Levenshtein distance or similar string similarity.

The chapter presents both as if they are as straightforward as "function body ≥ 20 lines." They are not. If the engine does not already implement them, these checks will silently not fire when exercises claim the style checker will detect the violation. Fix: add a parenthetical `[ENGINE: clone detection; not yet built]` next to each item, so the authoring pass knows to write around it until the engine ships the feature, or to use exact-duplicate detection (same literal string) as a proxy.

---

## Verified Python claims

All core technical claims check out:

```python
# int() on a float-string raises ValueError (not TypeError)
>>> int('3.5')
ValueError: invalid literal for int() with base 10: '3.5'

# AttributeError on None from forgotten return — confirmed
>>> def f(): x = 1  # no return
>>> f().upper()
AttributeError: 'NoneType' object has no attribute 'upper'

# Traceback direction: bottom = error site, top = entry point — confirmed
# (multi-frame KeyError traceback shows helper_func at bottom, top_func at top)

# TypeError message for int + str — confirmed
>>> 5 + '5'
TypeError: unsupported operand type(s) for +: 'int' and 'str'

# Forward-reference claim in 5.1B — confirmed
# def a(): return b()  [b not yet defined]
# def b(): return 42
# a()  -> 42  [works fine; Python resolves b at call time, not at def time]
```

The debugging-protocol walkthrough (TypeError from `input()` + forgotten `int()`) is technically accurate and pedagogically well-chosen.

---

## What's strong

- **Concept-dependency chain is sound.** The 5.1 → 5.2 → 5.3 → 5.4 → 5.5 dependency map (decomposition → naming → DRY → debugging → application) is logically tight and well-motivated by the chapter's through-line ("readable code is debuggable code").
- **Misconception coverage for the debugging protocol is excellent.** The three most harmful novice debugging behaviors (random edits, expecting the hypothesis to be right first time, ignoring semantic bugs) are all listed with accurate teaching responses keyed to the Kurniawan et al. research cited.
- **Worked-example quality in 5.3 and 5.4.** The copy-paste drift example (two slightly-different tax formulas) and the `TypeError` walkthrough (step-by-step narrated hypothesis) are well-calibrated: concrete, realistic, and at the right level of detail for an 11-year-old.
- **Style channel activation is additive and monotone.** The design of accumulating style checks (naming from 5.2, DRY from 5.3, function-length from 5.3 onward) without resetting is correct and well-described.

---

## Coverage check

| Owned concept | Status |
|---|---|
| decomposition | Well covered (5.1A, 5.5 A/C) |
| top-down design | Adequately covered (5.1B) |
| naming | Well covered (5.2A/B) |
| style channel | Covered architecturally; two style checks have engine-dependency risk (see finding 7) |
| DRY | Well covered (5.3A) |
| magic number | Well covered (5.3B) |
| function length | Adequately covered (5.3C) |
| debugging protocol | Covered but step-count is inconsistent — BLOCKER (finding 1) |
| traceback | Well covered (5.4A) |
| print-tracing strategy | Listed as concept, **not taught** — MAJOR (finding 3) |
| precondition / postcondition | Listed as owned concept, **not taught** — MAJOR (finding 4) |
