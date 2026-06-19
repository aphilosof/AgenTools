# Deep Review (round 2) — Chapter 8 (Writing Real Programs in Python)
**Verdict:** Clean
**Python verified on:** 3.14.5

---

## Round-1 fixes audit

- **Finding 1 [BLOCKER] — `sorted(key=)` required lambda, never taught:** CONFIRMED-FIXED.
  The plan now uses the lambda-free idiom `sorted(freq, key=freq.get, reverse=True)[:5]`
  (8.6a, line 171) and adds `key=` for `sorted()` as an owned micro-concept in the
  "Concepts owned" list (line 26), explicitly noting it "requires dict `.get()` from Ch.4."
  `.get()` is genuinely taught in Ch.4 (verified: ch-4 lines 42, 49, 271–272). No `lambda`
  appears anywhere in Ch.1–8 (grep confirmed clean). Verified the idiom:
  ```python
  freq = {"the": 3, "cat": 2, "sat": 1, "dog": 3}
  sorted(freq, key=freq.get, reverse=True)        # ['the', 'dog', 'cat', 'sat']
  sorted(freq, key=freq.get, reverse=True)[:5]    # ['the', 'dog', 'cat', 'sat']
  ```

- **Finding 2 [MAJOR] — Challenge ex.5 assigned a nested comprehension after warning against it:**
  CONFIRMED-FIXED. Challenge exercise 5 (line 227) now reads "write the function using a
  `for` loop and `.extend()` (nested comprehensions are out of scope for this chapter)."
  This matches the 8.4 misconception (line 135) that defers nested comprehensions. No
  contradiction remains. Verified loop+extend produces `[1,2,3,4,5]` from `[[1,2],[3,4],[5]]`
  and `[]` from `[]`.

- **Finding 3 [MAJOR] — `StopIteration` claim was imprecise (`next()` on a list):**
  CONFIRMED-FIXED. Lines 191 and 264–265 now correctly distinguish: `TypeError` for
  `next([1,2,3])` ("'list' object is not an iterator") and `StopIteration` only for an
  exhausted explicit `iter()` object. The exact message string in the plan matches Python.
  Verified:
  ```python
  next([1,2,3])                       # TypeError: 'list' object is not an iterator
  it = iter([1]); next(it); next(it)  # StopIteration()
  ```

- **Finding 4 [MINOR] — set-vs-dict brace ambiguity under-described:** CONFIRMED-FIXED.
  Line 135–137 now splits the warning into two explicit bullets: (a) `{…}` vs `[…]`
  (braces give a *set*, not a dict) and (b) set comprehension vs dict comprehension
  (the `key: value` colon form is required for a dict), with a side-by-side worked
  example called out. Verified `{w for w in ["cat","bat"]}` → `{'bat','cat'}` (set)
  vs `{w: len(w) for w in ["cat","bat"]}` → `{'cat':3,'bat':3}` (dict).

- **Finding 5 [MINOR] — `FileNotFoundError` introduced without file I/O:** CONFIRMED-FIXED.
  `FileNotFoundError` no longer appears in any Ch.8 error-class list (8.3, 8.6, or the
  chapter-wide list). Its only remaining mention is inside a Sources citation describing
  what the Python docs page covers (line 274), which is harmless. Dead-weight exception removed.

- **Finding 6 [MINOR] — dict comprehension implied to accumulate counts in 8.6a:**
  CONFIRMED-FIXED. The "Concepts owned" entry (line 25) now states the dict comprehension
  "does NOT accumulate — use a `for`-loop with `.get()` for counting," and 8.6a (line 171)
  explicitly builds the frequency dict with `freq[w] = freq.get(w, 0) + 1` ("NOT a dict
  comprehension, which cannot accumulate"), reserving the dict comprehension for a
  transformation (`{w: len(w) for w in top5}`). Pedagogically correct now.

- **Round-1 "thin" items:** Both addressed. `except ... as e` now has a Complete exercise
  in 8.3 (line 115) that prints `f"No score for {e}"` and re-raises — verified this pattern
  prints the message *and* propagates the `KeyError`. `raise` now has a dedicated strand-project
  requirement (line 189: "at least one sub-project … requires `raise ValueError(\"message\")`").

---

## New / remaining findings

1. **[MINOR] §8.6a — `assert` on "the top word of a known input" needs a tie-free test input
   to be deterministic.** `sorted(freq, key=freq.get, reverse=True)` is *stable*, so ties
   resolve by first-seen (insertion) order, which is well-defined but non-obvious to an
   11-year-old. If a student's known test input has two words tied for the top count, the
   asserted "top word" depends on word order, not frequency, and could confuse them.
   ```python
   # 'a' and 'b' both appear once -> top is 'a' purely by insertion order
   top_word("a b")  # 'a'   (tie broken by order, not count)
   ```
   → Authoring note: the worked example / spec should steer students to pick a test input
   with an unambiguous winner (e.g. `"the the cat"`), so the `assert` is robust. Not a
   plan error, just a trap worth one sentence in the lesson copy.

2. **[MINOR] §8.6 error classes — `StopIteration`/`iter()`/`next()` are surfaced as Codex
   error classes but iterators are never a taught concept anywhere in Ch.1–8.** The
   distinction is now *correct* (finding 3 fixed), but a student has no model of what an
   "iterator" or `iter()`/`next()` is — these appear only as error-class trivia (line 191,
   265). This is low-risk because it is framed as "if they misuse…", i.e. an observed
   accident rather than required material, and it is registered as a Codex reference, not a
   taught skill. → Acceptable as-is; optionally add a half-sentence in 8.6 clarifying these
   are "errors you may stumble into, not something you need to write." No fix required.

Neither finding is a blocker or a correctness defect; the chapter is technically sound.

---

## Verified-correct (ran and confirmed)

- **Lambda-free dict-by-value sort** works and is the canonical idiom; slicing `[:5]` for
  top-N is correct. (evidence above)
- **`flatten` via `for`+`.extend()`** yields `[1,2,3,4,5]` and handles empty input → `[]`.
- **`try`/`except KeyError as e` + bare `raise`** prints `No score for 'Bob'` *and*
  re-propagates the `KeyError` — the 8.3 exercise (line 115) is accurate.
- **`else`/`finally` on `try`**: `else` runs only when no exception is raised, `finally`
  runs unconditionally — both confirmed; the misconception "`else` runs when an exception
  *is* caught" (line 256) is correctly identified as wrong.
- **`assert`/`AssertionError`**: `assert add(2,3)==5` raises `AssertionError` on a wrong
  function; `assert cond, "msg"` carries the message — both match the 8.5 copy.
- **set vs dict comprehension**, **`next()` TypeError vs StopIteration**, **`clamp`**,
  **`word_art` (`"".join([c*n for c in word])`)**, **`safe_average([])` → None** all run
  as the plan describes.
- **Ownership boundaries honoured:** comprehensions are explicitly deferred to Ch.8 by both
  Ch.4 (line 20) and Ch.7 (lines 238, 300) and assigned to Ch.8 in CURRICULUM-STRUCTURE §D
  (line 100); `sorted` is homed in Ch.4 (§D line 96); `.get()` is in Ch.4; `random` is owned
  by Ch.4/5/7 before the 8.6c/8.6d uses; no `global`, no inheritance, no `lambda` anywhere.

## Strand-projects from-scratch check

Confirmed genuinely from-scratch (rung 6, blank editor): each 8.6 sub-project gives a spec
plus a *shorter, different* worked example to read first (8.6a char-frequency before
word-frequency; 8.6b rainfall before step-counts; 8.6c/8.6d full specs), then the student
writes the program themselves. The progression table (line 212) correctly marks all four as
"Write-from-scratch? Yes." Each requires synthesis across Ch.1–7 (str methods, dict `.get()`,
`plot`/`bar`, `random`, OOP `Note`, `while True` loops) plus Ch.8's `try`/`except`,
comprehensions, and `assert` — not re-skinned worked examples.

## Verdict notes

All six round-1 findings and both round-1 "thin" gaps are genuinely fixed in code-level
detail, verified against Python 3.14.5 — not merely claimed. The two remaining items are
authoring-copy nuances (deterministic test inputs; iterator framing), neither a correctness
or scope defect. Comprehensions are correctly owned here and require Ch.1–7. The chapter is
**Clean** and ready.
