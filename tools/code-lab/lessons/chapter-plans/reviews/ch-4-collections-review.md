# Review — Chapter 4 (Collections)
**Verdict:** Solid — with one repeated factual error and three minor spec inconsistencies to fix before authoring
**Reviewed against:** Python 3.14.5 (darwin), CURRICULUM-STRUCTURE.md, AUTHORING.md, ch-3-functions.md (N-1), ch-5-thinking-in-code.md (N+1)

---

## Findings

### 1. [MAJOR] Lines 20 and 521 — Wrong chapter number for comprehensions deferral

The plan states "No comprehensions (deferred to Ch.7)" in the overview (line 20) and repeats it in the closing coverage note (line 521): "list comprehensions are explicitly deferred to Ch.7 per the spine assignment."

**Confirmed:** comprehensions (list and dict) are owned by **Ch.8** (`ch-8-real-programs.md` lists them as owned keywords; Ch.7 only mentions them in a cross-reference note about a worked example that uses one). The CURRICULUM-STRUCTURE.md §D says "comprehensions (late)" without assigning a chapter number, so the plan has invented the chapter assignment wrong — and done it twice.

**Fix:** Change both occurrences from "Ch.7" to "Ch.8".

---

### 2. [MINOR] Lesson 4.2, hard exercise — "returns a new list" contradicts "loop + index assignment"

The hard exercise for lesson 4.2 reads: "write `clamp(lst, lo, hi)` that *returns a new list*… Combines slicing knowledge with loop + *index assignment* from scratch."

Verified with Python 3.14.5:
```python
def clamp_inplace(lst, lo, hi):
    for i in range(len(lst)):
        if lst[i] < lo:
            lst[i] = lo   # index assignment — mutates lst in place
        elif lst[i] > hi:
            lst[i] = hi
# returns None (no return statement) — contradicts "returns a new list"

def clamp_new(lst, lo, hi):
    result = []
    for item in lst:
        result.append(max(lo, min(hi, item)))
    return result   # returns a new list — uses append, not index assignment
```

"Returns a new list" and "loop + index assignment" are two different designs that produce different mutation semantics. A student following "index assignment" will write a void mutating function; a student following "returns a new list" will write an accumulator. Pick one and be explicit. Recommendation: "returns a new list" (accumulator with `append`) aligns better with the lesson's slicing theme and avoids confusing mutation vs. creation at this early stage.

---

### 3. [MINOR] Lesson 4.2, medium exercise — "error message" used for wrong output that raises no error

The medium exercise describes a bug: `lst[0:len(lst)]` instead of `lst[0:len(lst)//2]`.

Verified:
```python
lst = [1, 2, 3, 4, 5]
lst[0:len(lst)]    # → [1, 2, 3, 4, 5]  (whole list — silent wrong output)
lst[0:len(lst)//2] # → [1, 2]           (correct first half)
```

`lst[0:len(lst)]` produces the entire list silently — Python does not raise an error for an over-wide slice. The plan says "error message is an off-by-one discrepancy shown in a diff" which implies an error is raised; it is not. The exercise should say "wrong output shown in a diff" not "error message."

---

### 4. [MINOR] Chapter Challenge #7 (Boss) — claims "all four container types" but spec only uses two

The Boss challenge description: "a dict where each key is a song name and the value is a list `[bpm, notes_list]`." The stated operations are add a song, play a song, list all songs, delete a song.

That design uses **dict** and **list** only. Neither **tuple** nor **set** appears anywhere in the described spec. The label "Combines all four container types across strands" is inaccurate as written.

**Fix:** Either revise the spec to incorporate a tuple (e.g. store `(bpm, notes_list)` as the value to reinforce immutable records) and a set (e.g. a tag set per song, or a "played songs" membership set), or change the label to "dict + list."

---

### 5. [INFO — verified correct, no fix needed] All other Python claims

Every claim below was run against Python 3.14.5 and is correct:

```python
# Slice stop exclusive
[10,20,30,40,50][1:3]   # → [20, 30] ✓

# Mutation methods return None
[1,2,3].append(4)        # → None ✓
[3,1,2].sort()           # → None ✓
[1,2,3].reverse()        # → None ✓
import random; random.shuffle([1,2,3])  # → None ✓

# IndexError cases
[][0]        # IndexError: list index out of range ✓
[].pop()     # IndexError: pop from empty list ✓

# random.randint inclusive both ends (unlike range)
# 10,000 rolls of randint(1,6) produced all of {1,2,3,4,5,6} ✓

# Tuple immutability
(3,4)[0] = 5  # TypeError: 'tuple' object does not support item assignment ✓

# Single-element tuple
type(('x',)) is tuple    # True ✓
type(('x'))  is str      # True ✓

# Empty brace is dict, not set
type({}) is dict   # True ✓
type(set()) is set # True ✓

# Set deduplication
len({3,1,2,1,3}) == 3  # True ✓

# Set operations
{1,2,3,4} | {3,4,5,6} == {1,2,3,4,5,6}  # ✓
{1,2,3,4} & {3,4,5,6} == {3,4}            # ✓
{1,2,3,4} - {3,4,5,6} == {1,2}            # ✓

# dict .get() with default
{'a':1}.get('c', 0) == 0  # True ✓

# dict insertion order (Python 3.7+): preserved ✓

# Loop variable mutation doesn't change list
lst = [1,2,3]; [item*2 for _ in [lst] for item in lst]; lst == [1,2,3]  # ✓

# ZeroDivisionError claim: "known from Ch.1/2" — confirmed: introduced in Ch.1
# lesson 1.4 (division operators), listed in ch-1 error table ✓

# list[::-1] returns new list; list.reverse() mutates in place → None ✓

# 'in' on dict tests keys, not values
1 in {'a':1,'b':2}  # False ✓

# zip stops at shortest
list(zip([1,2,3,4],['a','b'])) == [(1,'a'),(2,'b')]  # ✓

# pop(i) returns the removed element
[1,2,3].pop(1) == 2  # True ✓
```

---

## What's strong

- **Concept ownership is precise and complete.** Every collection type gets its own stated misconceptions, and the "mutation methods return None" trap is foregrounded both lesson-by-lesson and in the chapter-wide list — exactly right for this age.
- **Teaching order is sound.** The dependency graph (list → indexing/slicing → looping → tuples/sets → dicts → strand apps) is pedagogically orthodox and matches Think Python's sequence. No concept is used before it is introduced.
- **Spiral weaving is thorough.** String indexing/slicing bridges to list indexing; Ch.2 `for` bridges to `for item in lst`; Ch.3 functions appear in every exercise. The warm-ups are specific and purposeful.
- **Error-class pedagogy is well-structured.** IndexError and KeyError are introduced where they naturally arise (4.2 and 4.5), the safe alternatives (slicing vs. `.get()`) are taught immediately alongside, and all error classes are carried through to the chapter-wide list.

---

## Coverage check

| Spine concept (Ch.4 scope) | Coverage |
|---|---|
| list — literal, `len`, `append` | Well covered (4.1) |
| index, negative index | Well covered (4.2) |
| slice `[start:stop]`, stop-exclusive | Well covered (4.2) |
| mutate via `lst[i] = value` | Covered (4.2) — see finding #2 re: clamp |
| list methods: `append`, `sort`, `reverse`, `extend`, `insert`, `pop`, `remove` | Owned in concepts section; `extend`/`insert`/`pop`/`remove`/`count`/`index` get no dedicated exercises (self-flagged in plan's closing note — acceptable for a plan, needs tracking for lesson authoring) |
| `for item in lst`, `enumerate` | Well covered (4.3) |
| tuple — literal, immutability, trailing comma, swap idiom | Well covered (4.4) |
| set — `set()` literal, deduplication, `in`, union/intersection/difference | Well covered (4.4) |
| dict — literal, key access, KeyError, `.get()`, `.keys()`/`.values()`/`.items()`, iteration, add/update, `del` | Well covered (4.5) |
| nesting — list of lists, dict of lists, `data[row][col]` | Listed in concepts owned but receives **no dedicated lesson or exercise** — only mentioned in the chapter-wide misconceptions. Thin for a spine item; needs at least one worked example and one exercise |
| `random` module — `randint`, `choice`, `shuffle` | Well covered (4.6, 4.7) |
| IndexError, KeyError | Well covered |
| Comprehensions | Correctly excluded; deferral chapter number is wrong (Ch.7 stated, Ch.8 confirmed) — see finding #1 |
