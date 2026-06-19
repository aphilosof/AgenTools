# Deep Review (round 2) — Chapter 2 (Decisions and Loops)
**Verdict:** Clean
**Python verified on:** 3.14.5 (darwin)

---

## Round-1 fixes audit

- **Finding 1 [BLOCKER] — `else if` two-words does NOT raise SyntaxError:** CONFIRMED-FIXED.
  L2.3 ex.1 (lines 218–225) now has the student write `else:` / `    if ...:` and
  *observe the structural difference* (extra nesting level + silent failure from a
  missing inner `else`), then rewrite using `elif`. The Error-classes note (lines
  240–242) explicitly states `else:` + indented `if` is "NOT a SyntaxError — it is a
  legal nested `if` inside `else`." Verified:
  ```python
  x = 5
  if x > 10: print("big")
  else:
      if x > 3: print("medium")   # → prints "medium", no error
  ```
  (For contrast, single-line `else if x>3:` *does* raise `SyntaxError: expected ':'`,
  consistent with the round-1 note.)

- **Finding 2 [BLOCKER] — `sentence.split()` used before taught:** CONFIRMED-FIXED.
  Challenge #5 (lines 492–497) now labels `str.split()` as "a **recalled** concept
  from Ch.1 (owned by Ch.1 Strings lesson — used here without re-teaching)."
  Cross-checked ownership: `ch-1-first-words.md` line 43/271 owns `.split()`, and
  `CURRICULUM-STRUCTURE.md` §D line 97 homes `split`/`join` in Ch.1. The boundary is
  honoured. `"a b c".split()` → `['a','b','c']` verified.

- **Finding 3 [BLOCKER] — wrong loop-variable scope language:** CONFIRMED-FIXED.
  L2.6 WE3 (lines 374–379) now says Python `for` loops have "**no block scope**," the
  variable "was never bound," and explicitly rejects the bad framing: "hence
  `NameError: name 'i' is not defined`, **not** 'in scope but unassigned.'" Verified:
  ```python
  for i in range(0): pass
  print(i)   # NameError: name 'i' is not defined
  for j in range(3): pass
  print(j)   # 2  (defined after non-empty loop — no block scope)
  ```

- **Finding 4 [MAJOR] — incoherent nested-`break` framing:** CONFIRMED-FIXED.
  L2.5 WE3 (lines 316–323) now reads: add `if row == 2: break` inside the **inner**
  loop; row 2's columns are skipped but the **outer** loop continues and row 3 still
  prints. Verified output: `(1,1)(1,2)(1,3)` / blank / `(3,1)(3,2)(3,3)`. Phrasing is
  now correct and the "exit outer loop needs a flag or `return` (Ch.3)" note is right.

- **Finding 5 [MAJOR] — `not` conflated with `and`/`or`:** CONFIRMED-FIXED.
  L2.1 misconception (lines 143–144) and chapter-wide list (lines 546–547) both now
  carry the explicit clarifier: "`not` is different: it always returns a `bool`, not
  an operand." Verified: `not "hello"` → `False`, `not ""` → `True`, `not 0` → `True`
  (all `bool`); while `0 and 42`→`0`, `1 or 2`→`1` (operands).

- **Finding 6 [MAJOR] — `continue` in `while` infinite-loop trap (Challenge #2):**
  CONFIRMED-FIXED. Challenge #2 (lines 477–481) now uses a `for`/`range(20,0,-1)` loop
  and adds an explicit parenthetical: a `while` countdown with `continue` "creates an
  accidental infinite loop … the exercise tests `continue`, not trap-spotting." The
  `range` form sidesteps the trap. Verified: `for n in range(20,0,-1): if n%2: continue;
  print(n)` → `20 18 16 14 12 10 8 6 4 2 Done` (no hang).

- **Finding 7 [MAJOR] — no Hook lesson:** CONFIRMED-FIXED.
  L2.1 is now tagged `*(hook · numbers strand · rungs 1–2)*` (line 105) with an
  Arc-role opening: "Run a short two-branch program live and modify its condition;
  students see branching behaviour before any syntax is explained" (lines 107–109).
  This matches §C item 1 ("run / modify something real; motivates and lands one idea").

- **Finding 8 [MINOR] — "tab hangs" wording vs. worker architecture:** CONFIRMED-FIXED.
  L2.4 ex.2 (lines 275–278) and L2.6 WE2 (lines 369–371) now say the engine's Stop
  button "interrupts the worker; the browser remains responsive" / "the tab stays
  responsive." The chapter-wide misconception list (lines 564–565) adds "An infinite
  loop hangs the tab — the engine provides a Stop button." Aligned with CLAUDE.md
  product constraint. (One legacy "no Python error — hangs" appears in the L2.4
  Error-classes field line 291 and table line 580; harmless shorthand, see Minor below.)

- **Finding 9 [MINOR] — thin `elif`-order entry in chapter-wide table:** CONFIRMED-FIXED.
  Line 549 now reads "The order of `elif` conditions does not matter — it does; first
  match wins," matching the richer L2.3 lesson-level description.

- **Finding 10 [MINOR] — `play()`/`sleep()` from Ch.0 not boundary-checkable:** still
  out of this chapter's control (Ch.0 review owns it). Plan correctly attributes the
  API to "Ch.0 L0.1" (line 444). No action needed in Ch.2.

- **Finding 11 [MINOR] — `_` convention not in concept inventory:** CONFIRMED-FIXED.
  "Concepts owned" now lists `_` (line 52): "`_` (throwaway variable convention) —
  idiomatic … (style, not a language rule; introduced in L2.7)."

---

## New / remaining findings

1. **[MINOR] L2.4 Error-classes field (line 291) and chapter-wide table (line 580)**
   still describe the infinite loop as "(no Python error — hangs)" / "No error raised;
   recovery = click Stop button." The "hangs" half is slightly stale relative to the
   now-corrected Finding-8 wording elsewhere (the tab does *not* hang; the worker is
   interrupted). It is technically accurate that no Python *error class* is raised, so
   this is cosmetic, but for consistency with lines 277–278 and 564–565 consider
   "(no Python error — runs until Stop is pressed)." Not blocking.

2. **[MINOR] L2.5 misconception "`range()` returns a list — it returns a lazy iterable;
   `list(range(5))` is needed to see the values" (lines 338–339).** Correct, but the
   word "iterable" is slightly loose for a strong 11-year-old: `range` is a lazy
   *sequence* (supports indexing/`len`), not merely an iterator. The teaching point
   (you must wrap in `list()` to *see* the values) is sound and verified
   (`list(range(5))` → `[0,1,2,3,4]`). Optional precision tweak only.

3. **[MINOR] L2.5 WE1 (line 308) uses `n` in the f-string (`f"{n} × {i} = {n * i}"`)
   without showing `n` being assigned in the snippet.** It is clearly meant as a
   times-table for a fixed `n`; just ensure the authored lesson assigns `n` before the
   loop so the example runs standalone. Verified with `n = 7`: prints `7 × 1 = 7 …`.
   Authoring nit, not a plan error.

No BLOCKER or MAJOR issues remain.

---

## Verified-correct (ran and confirmed)

```python
# Short-circuit operand returns (L2.1)
0 and 42  -> 0 ; 1 and 42 -> 42 ; 0 or 42 -> 42 ; 1 or 42 -> 1
not "hello" -> False ; not "" -> True ; not 0 -> True   # all bool
# Truthiness (L2.1)
bool(0),bool(""),bool([]),bool(None),bool(42) -> False False False False True
"7" == 7 -> False                                   # ex.1 type-matters
# Compound condition (L2.1 WE2): age>=13 and age<18
age=12 -> False ; age=15 -> True
# range bounds (L2.5 / quiz)
list(range(5)) -> [0,1,2,3,4]      ; list(range(2,8,2)) -> [2,4,6]
list(range(10,0,-1)) -> [10..1]    ; list(range(1,17)) -> [1..16]
range(0,10,0) -> ValueError: range() arg 3 must not be zero
list(range(3.0)) / range("5") -> TypeError: ... cannot be interpreted as an integer
# break/continue (L2.5)
break at i==5 -> 0 1 2 3 4 ; continue on even -> 1 3 5 7 9
# nested break innermost-only (L2.5 WE3) -> (1,1)(1,2)(1,3) / [blank] / (3,1)(3,2)(3,3)
# Collatz from 6 (L2.4 WE3) -> 3 10 5 16 8 4 2 1
# if/elif/else x=7 (quiz Q1) -> B ; while i=3 (quiz Q2) -> 3 2 1
# if x = 5 -> SyntaxError: invalid syntax. Maybe you meant '==' ... (L2.1 ex.3)
# prime checker 2..20 nested loop (L2.5 ex.3) -> 2 3 5 7 11 13 17 19
# for i in range(0): pass; print(i) -> NameError (L2.6 WE3)
# for j in range(3): pass; print(j) -> 2  (no block scope)
# hexagon: 6 * 60 = 360 (closes) (L2.7 ex.2)
```
Boundary/ownership cross-checks: `.split()` and `len()` owned by Ch.1
(`ch-1-first-words.md` 43/271; `CURRICULUM-STRUCTURE.md` §D L97); comprehensions
deferred to Ch.8; no `global`; Hook role present (L2.1). All honoured.

---

## Verdict notes

All three round-1 BLOCKERs, all four MAJORs, and all four actionable MINORs are
confirmed fixed with running evidence — and the revision introduced no new
correctness regressions. The dependency graph still holds (comparisons → if/else →
elif → while → for/range → debug consolidation → strand app), difficulty is
monotonic, spiral-weaving is real, and every example/exercise is solvable with
concepts taught so far. Remaining items are three cosmetic MINORs (stale "hangs"
shorthand in two metadata fields, loose "iterable" wording, and an authoring nit to
assign `n` in WE1). None block authoring. **Clean.**
