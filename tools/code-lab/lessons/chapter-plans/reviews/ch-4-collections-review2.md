# Deep Review Round 2 — Ch.4 Collections

**Verdict:** Needs fixes (minor — no structural changes required)
**Python verified on:** 3.14.5

---

## Round-1 fixes audit

Every fix listed in `ch-4-collections-synthesis.md` was checked against the current plan text.

| ID | Synthesis description | Status |
|---|---|---|
| M1 | 4.2 introduces indexing fresh with string-first approach, not as a Ch.1 recall | CONFIRMED-FIXED — plan explicitly says "Do NOT assume Ch.1 indexing knowledge. This lesson IS the introduction." WE#1 shows string first then list in parallel. |
| M2 | Aliasing gets dedicated WE + exercise in 4.6 | CONFIRMED-FIXED — WE#3 is a full predict-before-run aliasing demo; medium stub exercise makes students use `grid[0][:]` and verify original unchanged. |
| M3 | `remove`, `extend`, `insert` added to 4.2 WE#4; `reverse` taught alongside sort | CONFIRMED-FIXED — 4.2 WE#4 covers `index`, `count`, `remove`, `extend`, `insert` with contrast notes. `reverse()` appears in 4.8 misconceptions with correct None-return warning. |
| M4 | False claim about IndexError inner/outer distinction corrected | CONFIRMED-FIXED — 4.6 misconceptions now correctly state both inner and outer access produce the identical message "list index out of range". Python 3.14.5 verified: `grid[5][0]` and `grid[0][10]` both produce `IndexError: list index out of range`. |
| M5 | ValueError added to 4.2 error-class list and chapter-wide list; fix exercise added | CONFIRMED-FIXED — ValueError appears in 4.2 error-class section (triggered by `list.index(x)` and `list.remove(x)`) and in chapter-wide error-classes section. A fix exercise is present in 4.2 (use `if x in lst:` guard). |
| M6 | 4.3 split into two subsections with schema-level gate | CONFIRMED-FIXED — Subsection A (traversal, accumulator, sum, average) and Subsection B (enumerate, sorted vs sort) are clearly labelled with a stated gate between them. |
| M7 | zip gets a write exercise in 4.8 | CONFIRMED-FIXED — 4.8 has a dedicated medium exercise: `play_melody(notes, durations)` requires writing `zip(notes, durations)`. Explicitly noted as resolving the "see but don't write" gap. |
| m1 | Dot notation sentence added to 4.7 concept block | CONFIRMED-FIXED — 4.7 includes the exact two-sentence explanation: "the part before the dot names the toolbox; the part after names the tool inside it." |
| m2 | `[::-1]` removed from 4.8, replaced with `list(reversed())` | CONFIRMED-FIXED — 4.8 reverse_pattern exercise says "Do NOT hint `[::-1]` — the step-slice parameter is never introduced in this chapter." Verified: `list(reversed(pattern))` produces a new list; original unchanged. |
| m3 | Misconception rewritten to name exceptions (`pop` returns value) | CONFIRMED-FIXED — chapter-wide misconception now names all None-returning methods explicitly and states "Note that `pop()` is different: it returns the removed element." Python verified: `lst.pop()` returns the removed element. |
| m4 | Set operators `|`, `&`, `-` added as runnable worked example in 4.4 | CONFIRMED-FIXED — 4.4 WE#3 shows `set_a & set_b`, `set_a | set_b`, `set_a - set_b` with results shown. Also adds `set.add()`. |
| m5 | Tuple unpacking in `for` loop demo added to 4.4 | CONFIRMED-FIXED — 4.4 WE#5 shows `for a, b in [(1,'x'),(2,'y')]: print(a, b)` with comment explaining the bridge to 4.5's `.items()`. |
| m6 | 4.1 warm-up changed to five-variable demo; opening chapter hook added | CONFIRMED-FIXED — warm-up shows five `score` variables explicitly; chapter hook is a pre-written 1000-dice bell-curve program. |
| m7 | Tuple-as-record + hashability added to 4.4 WE#1 | CONFIRMED-FIXED — WE#1 includes: "Because a tuple's contents can never change, Python can compute a stable fingerprint for it and use it as a dictionary key." Dict with tuple keys shown. Python verified: `{(0,0): 'origin'}` works; `{[1,2]: 'value'}` raises `TypeError: cannot use 'list' as a dict key`. |
| m8 | `sorted()` accepts any iterable added to 4.3 | CONFIRMED-FIXED — 4.3 WE#4 states "`sorted()` works on any iterable — lists, sets, even strings — and always returns a new list." Python verified: `sorted({3,1,2})` returns `[1,2,3]`. |
| m9 | Accumulator pattern framed as recall in 4.3 | CONFIRMED-FIXED — 4.3 WE#2 says "open with 'You already used the accumulator pattern in Ch.2 with while and for loops.'" and "do not re-state the three-step definition as if new." |
| m10 | `for item` vs `range(len)` contrast with verdict and failure-mode demo | CONFIRMED-FIXED — 4.3 WE#1 shows `for i in range(len(names) + 1):` crashing with IndexError; states the verdict: use `for item in lst:` for values, `enumerate(lst)` for both. Python verified: crash confirmed. |
| m11 | Quiz item 4 reworded unambiguously | CONFIRMED-FIXED — Now reads "Given `a = 5` and `b = 10` already defined, write one line that swaps them so `a` holds 10 and `b` holds 5, without using a temporary variable." |
| m12 | `set.add(item)` added to 4.4 concept list and worked example | CONFIRMED-FIXED — `set.add(item)` is in 4.4 concepts; WE#3 shows `my_set.add(new_item)`. Python verified. |
| m13 | f-string/`:.2f` recall added to 4.3 warm-up | CONFIRMED-FIXED at plan level. See F4 under new findings for the authoring-risk note. |
| m14 | Chapter Recap section added | CONFIRMED-FIXED — Full Chapter Recap section with decision table, five-question retrieval set, and Codex consolidation note. |
| m15 | `random.choice` added to 4.7 concept block and WE#3 | CONFIRMED-FIXED — 4.7 WE#3 introduces `random.choice(lst)` with an example; 4.8's hard exercise that uses it now has a prior teaching moment. |
| m16 | `str.split()` recall anchor added to Challenge #4 | CONFIRMED-FIXED — Challenge #4 says "Recall anchor: `sentence.split()` returns a list of words — you learned this in Ch.1 Lesson 1.5." |
| m17 | `while True`/`break` recall added to 4.5 warm-up | CONFIRMED-FIXED — 4.5 warm-up references Ch.2 `while True:` with `break` pattern and names Lesson c2s4. |

**Round-1 audit result: 23/23 fixes confirmed. Zero still-broken items from the synthesis.**

---

## New / remaining findings

### F1 — MAJOR: Progression table misclassifies 4.4 as rung 5, creating a false monotonicity break

The progression table lists 4.4 as "5 Complete / No — stub/boilerplate." But 4.4's hard exercise (`shared_items`) is described in the lesson body as "Fully from scratch" — that is rung 6 (Write). The plan itself states: "Write-from-scratch is the default by 4.3, consistent with the Ch.3 milestone in CURRICULUM-STRUCTURE.md §E."

This creates a false monotonicity regression in the table: 4.3 peaks at rung 6, then 4.4 appears to drop to rung 5. The lesson content is correct; only the table entry is wrong.

**Fix:** Change 4.4 row to "6 Write / Partial — shared_items is fully blank". One-line table correction only.

---

### F2 — MINOR: 4.8 WE#2 teaches an enumerate anti-pattern

4.8 WE#2 describes: "loop with `enumerate` — if `kick[i] == 1`, trigger the beat." This re-indexes the list using the index that `enumerate` already yielded as its value variable. The idiomatic form after `for i, beat in enumerate(kick):` is `if beat == 1:` — not `kick[i]`. Both produce identical output but the latter teaches students that the point of `enumerate` is to get an index so they can re-subscript, rather than that `enumerate` yields the value directly.

Python verified: both forms work; the re-indexing form is the anti-pattern.

**Fix:** Change WE#2 description to: "loop with `enumerate` — if `beat == 1`, trigger the beat" and add one line of explanation: "Using `beat` directly is cleaner than writing `kick[i]` — enumerate already handed you the value."

---

### F3 — MINOR: Challenge Exercise 2 underspecifies the denominator of the buggy function

Challenge #2 says the bug is "scores[1:] instead of scores[:] in the accumulator loop." The description does not state what the denominator is in the buggy function, leaving ambiguity for the author:

- If denominator is `len(scores[1:])`: result is `73.33` vs correct `75.0` — subtle enough to require diagnosis.
- If denominator is `len(scores)`: result is `55.0` vs correct `75.0` — obvious at a glance.

The first version is more pedagogically interesting (silent wrong output that is close enough to seem plausible). The second version is too obvious. Python verified:
- `sum([70,90,60]) / 3 = 73.33`, `sum([70,90,60]) / 4 = 55.0`, correct avg = `75.0`.

**Fix:** Add to Challenge #2: "The buggy function iterates `for s in scores[1:]: total += s` and divides by `len(scores[1:])` — so it averages only the scores after the first, giving 73.33 instead of 75.0 for `[80, 70, 90, 60]`."

---

### F4 — MINOR: `:.2f` recall dependency is unresolved at the implementation layer (authoring risk)

The plan correctly marks f-string `:.2f` as a Ch.1 concept recalled in 4.3. The Ch.1 plan (`ch-1-first-words.md`) explicitly lists f-strings and `:.2f` as absent from `c1.js` and required additions to c1s5. Confirmed by reading all of `c1.js`: no f-strings, no `:.2f`, no string indexing or slicing are present.

The Ch.4 plan is correct in its cross-chapter dependency. The risk is authoring-order: Ch.4 lesson 4.3 cannot be written until c1s5 has f-strings. The plan does not flag this blocking dependency.

**Fix:** Add one sentence to the Ch.4 overview or to the 4.3 authoring note: "4.3 warm-up recalls `:.2f` f-string formatting. Do not author 4.3 until the f-string subsection is present in c1s5."

---

### F5 — ADVISORY: `dict.pop()` also returns a value; the m3 fix scope is narrower than the chapter content

The m3 fix correctly updates the misconception bullet to name `list.pop()` as the exception that returns a value. The Boss challenge in the Chapter Challenge uses a dict extensively. `dict.pop(key)` also returns the removed value. The revised misconception bullet says "pop() is different: it returns the removed element" without specifying this applies to both list and dict pop.

Python verified: `d.pop('a')` returns `1`; `d.pop('z', None)` returns `None` with default — both non-None in the case of a found key.

The Boss challenge never explicitly calls `dict.pop()`, so no student will be surprised in practice. This is an advisory for a future pass.

**Advisory (no required change):** Consider expanding to "list and dict `pop()` methods both return the removed element."

---

## Verified-correct claims

All of the following were executed against Python 3.14.5 and confirmed:

- `list.sort()` returns `None`; `sorted()` returns a new sorted list; original unchanged.
- `list.append()`, `extend()`, `insert()`, `remove()`, `reverse()` all return `None`.
- `random.shuffle()` returns `None`.
- `list.pop()` returns the removed element. `[].pop()` raises `IndexError: pop from empty list`.
- `list.index(x)` raises `ValueError: list.index(x): x not in list` — not `IndexError`.
- `list.remove(x)` raises `ValueError: list.remove(x): x not in list` — not `IndexError`.
- Both `grid[5][0]` and `grid[0][10]` produce `IndexError: list index out of range` with identical messages.
- `{}` is `dict`; `set()` is the correct empty-set literal. `{3,1,2,1,3}` has length 3.
- Set operators: `{1,2,3} & {2,3,4}` → `{2,3}`; `|` → `{1,2,3,4}`; `-` → `{1}`.
- `(5)` is `int`; `(5,)` is `tuple`.
- Tuple mutation: `TypeError: 'tuple' object does not support item assignment`.
- String mutation: `TypeError: 'str' object does not support item assignment`.
- Dict key with list: `{[1,2]: 'v'}` raises `TypeError: cannot use 'list' as a dict key`.
- Dict key with tuple: `{(0,0): 'origin'}` works.
- Aliasing: `inner = grid[0]; inner[0] = 99` mutates `grid`. `row = grid[0][:]` produces a safe copy, original unchanged.
- `seats[1][2]` on the plan's seating chart → `'B3'`.
- `scores = {'Alice': [88,72,95]}; scores['Alice'][1]` → `72`.
- `sorted()` on a set, list, or string always returns a new sorted list.
- `zip(notes, durations)` where both have 4 items → 4 pairs; `zip` stops at the shorter sequence.
- `list(reversed(pattern))` produces a new reversed list without mutating the original.
- Quiz: Q1 → `40`, Q2 → `0`, Q3 → `3`, Q4 → `a=10, b=5`, Q5 → `IndexError`. All correct.
- `random.randint(1,6)` includes both 1 and 6 (all six values appeared in 1000-sample run).
- `random.choice([0,1])` produces mix of 0 and 1.
- `temps = [18,22,15,30,27]; temps.remove(30)` → `[18,22,15,27]`; `.sort()` → `[15,18,22,27]`.
- `word[0]` → `'P'`; `word[-1]` → `'n'`; `word[1:4]` → `'yth'` (stop exclusive). Verified on `'Python'`.
- `sum([]) / len([])` raises `ZeroDivisionError: division by zero`.
- `for a, b in [(1,'x'),(2,'y')]:` unpacks each pair correctly.
- Dict insertion order preserved in Python 3.7+ (confirmed on 3.14.5).
- `del d['missing_key']` raises `KeyError`.
- `in` on a dict tests keys, not values: `'555-1234' in {'Alice': '555-1234'}` → `False`.
