# Deep Review (round 2) — Chapter 4 (Collections)
**Verdict:** Needs fixes (2 MINOR consistency bugs; all technical/Python claims correct)
**Python verified on:** Python 3.14.5 (darwin)

## Round-1 fixes audit

- **Finding 1 [MAJOR] — comprehensions deferral chapter (Ch.7 → Ch.8):**
  CONFIRMED-FIXED. Overview line 20 now reads "No comprehensions (deferred to
  Ch.8)"; closing note line 609 reads "deferred to **Ch.8** (not Ch.7)." The
  remaining "Ch.7" references in the file (lines 14, 407, 603) all refer to the
  `random`/`import` *module lesson*, not comprehensions — correct.

- **Finding 2 [MINOR] — 4.2 hard `clamp` "new list" vs "index assignment"
  contradiction:** CONFIRMED-FIXED. The rewritten 4.2 hard exercise (lines
  152–158) now specifies the accumulator design explicitly: "start with
  `result = []`, loop over the original list, `append` each clamped value,
  return `result`. The original list must not be mutated." It also states the
  "no mutation" constraint so learners don't reach for index assignment. The
  design is self-consistent and solvable. Verified:
  ```
  clamp([5,-2,8,3,12], 0, 10) → [5, 0, 8, 3, 10]   orig unchanged: [5,-2,8,3,12]
  ```

- **Finding 3 [MINOR] — 4.2 medium "error message" for a silent over-wide
  slice:** CONFIRMED-FIXED. Lines 148–150 now read: "the bug produces the
  *entire list* silently (no error is raised — Python clips over-wide slices);
  the wrong output is shown in a diff." Verified `lst[0:len(lst)]` → whole list,
  no error.

- **Finding 4 [MINOR] — Boss challenge claimed "all four containers" but used
  two:** CONFIRMED-FIXED. Boss spec (lines 505–512) now stores each value as a
  **tuple** `(bpm, notes_list)` ("immutable record") and adds a **set** tracking
  played songs (membership `in`, `.add()`). All four containers genuinely
  present. Verified the tuple value is immutable and the set membership works.

- **Coverage gap (nesting had no lesson) — flagged in round-1 coverage table:**
  CONFIRMED-FIXED. Nesting is now a full lesson **4.6** with three worked
  examples, three faded exercises, and an aliasing misconception. (See below —
  the lesson itself is correct; only two *cross-references to it/around it* are
  inconsistent.)

## New / remaining findings

1. **[MINOR] Chapter Challenge #2 (line 487) — "Show the wrong output *and the
   error* to diagnose" implies an error that is not raised.** The bug is
   `scores[1:]` instead of `scores[:]` in the accumulator. For any non-empty
   grade list this silently drops the first score and returns a wrong average —
   no exception. This is the *exact same* "silent wrong output ≠ raised error"
   conflation that round-1 finding #3 fixed in the 4.2 medium exercise; it
   survives here. Evidence:
   ```python
   def average(scores):
       total = 0
       for s in scores[1:]:
           total += s
       return total / len(scores[1:])
   average([80, 90, 100])   # → 95.0  (true average 90.0) — NO error raised
   ```
   (It only raises `ZeroDivisionError` in the degenerate single-element case.)
   → **Fix:** change "the error to diagnose" to "the wrong output to diagnose"
   (or, if an error is wanted, change the bug to one that actually raises). Also
   note the label "off-by-one" is loose — it's a wrong-start-index bug, not a
   boundary off-by-one in the slicing sense.

2. **[MINOR] `sorted` ownership is internally inconsistent — claimed taught in
   4.3, but 4.3's body never mentions it.** The dependency graph annotates 4.3
   as "(for-item, enumerate, sum, **sorted**, accumulator)" (line 67) and the
   closing note states `sorted` is "used in 4.4 (shared_items) and **4.3
   (explicitly named here)**" (line 606). But lesson 4.3's Concepts line (175),
   all three worked examples, and all three exercises (lines 170–205) contain
   **no mention of `sorted` or `.sort()` at all** — verified by grep over the
   4.3 body (zero hits). `sorted` first genuinely appears in 4.4's `shared_items`
   hard exercise and in Challenge #3. So the claim "explicitly named in 4.3" is
   false, and the graph annotation lists a concept the lesson doesn't teach.
   → **Fix:** either (a) add a `sorted` beat to 4.3 (natural: after computing an
   average, sort the scores — pairs perfectly with the `.sort()`-returns-None
   contrast already in concepts-owned), or (b) drop `sorted` from the 4.3 graph
   annotation and correct the closing note to say `sorted` is first used in 4.4.
   Option (a) is preferable since 4.3 is where the `sorted` vs `.sort()` mutation
   contrast is most teachable.

## Verified-correct (so we know it was actually checked)

NEW lesson 4.6 (Nesting) — every concrete claim runs as stated:
```
seats[1][2]                        → 'B3'                     (WE1, line 318)
scores['Alice'][1]                 → 72                       (WE3, line 336)
transpose([[1,2,3],[4,5,6],[7,8,9]]) → [[1,4,7],[2,5,8],[3,6,9]]  (hard, solvable)
inner = grid[0]; inner[0] = 99     → grid[0][0] == 99         (aliasing, line 357)
seats[5][0]  → IndexError (outer);  seats[0][9] → IndexError (inner)  (line 359)
scores['Zoe'][0]                   → KeyError: 'Zoe'          (line 362)
row_total([[1,2,3],[4,5,6]], 1)    → 15                       (medium, line 346)
```

Renumbering is consistent: lessons run 4.1…4.8 with no gaps/dupes; 4.6 Nesting /
4.7 Data into Charts / 4.8 Lists as Music match the dependency graph (lines
73–77), the progression table (lines 466–469), and all in-text cross-references.

Built-in semantics (lines 33–36) all exact:
```
sorted([3,1,2]) → [1,2,3]   original [3,1,2] UNCHANGED   (returns NEW list)
[3,1,2].sort()  → None        list becomes [1,2,3]        (mutates in place)
sum([88,72,95]) → 255
list(enumerate(['a','b'])) → [(0,'a'),(1,'b')]
list(zip([1,2,3],['x','y'])) → [(1,'x'),(2,'y')]          (stops at shorter)
```

Error-class claims exact: `IndexError` on out-of-range positive AND negative
index and on `[].pop()` ("pop from empty list"); `KeyError` on missing dict key;
`set()` vs `{}` (set vs dict); set is not subscriptable (TypeError); tuple item
assignment raises TypeError; `random.randint(1,6)` inclusive of both 1 and 6
(5000 rolls hit all of 1–6); `random.choice([0,1])` yields {0,1}; `p[::-1]`
returns a new reversed list while `p.reverse()` returns None and mutates.

Quiz answers all correct: Q1 → 40, Q2 → 0, Q3 → 3, Q4 → a=10 b=5, Q5 → IndexError.
Challenge spot-checks correct: #1 → [15,18,22,27]; #4 word_count('the cat the
dog the cat') → {'the':3,'cat':2,'dog':1}; #5 two-dice sums span keys 2–12.

## Verdict notes

The revision is strong: all four round-1 findings and the nesting coverage gap
are genuinely fixed, the new 4.6 lesson is technically correct and solvable, the
renumbering is clean, and every Python/error/built-in claim verifies on 3.14.5.
Two MINOR consistency bugs remain, both cheap to fix: (1) Challenge #2 repeats
the "silent wrong output described as an error" mistake that was fixed elsewhere
in round 1, and (2) `sorted` is advertised as taught in 4.3 but appears nowhere
in 4.3's body (first real use is 4.4). Neither blocks authoring, but both should
be corrected so the lesson bodies match their own cross-references before the
checker harness enforces concept-coverage.
