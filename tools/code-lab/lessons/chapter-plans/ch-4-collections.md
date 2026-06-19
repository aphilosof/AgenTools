# Chapter 4 — Collections

## Overview

Chapter 4 is the first time learners handle *many values at once*. Every earlier
chapter operates on single values; here the program gains memory — ordered
sequences, labelled mappings, and unordered pools. By the end the learner can
store a grade sheet in a list, look up a shopping item by name, count dice rolls
into a bar chart, and drive a drum machine with a row of 1s and 0s. The
chapter's through-line is **the right container for the job**: lists when order
matters and things change, tuples when the group is fixed, dicts when you need
labels, sets when duplicates are noise. The chapter introduces `random` as the
first standard-library import; uses it naturally inside real tasks, not as a
module lesson (that is Ch.7). Error classes IndexError and KeyError are
introduced here and added to the Codex.

Chapter 4 owns rungs 3–6 (modify → write from scratch) and spans strands data,
numbers, plot, and sound. It recalls loops and functions from Ch.2–3, and string
indexing/slicing from Ch.1 (lists mirror string mechanics, easing cognitive
load). No inheritance. No comprehensions (deferred to Ch.8).

---

## Concepts owned (keywords)

- **list** — ordered, mutable, zero-indexed sequence; `[]` literal
- **index** — integer address of an element; negative indices count from the end
- **slice** — `lst[start:stop]` produces a new list; `stop` is exclusive
- **mutate** — change a list element in place via `lst[i] = value`
- **list methods** — `append`, `extend`, `insert`, `pop`, `remove`, `sort`,
  `reverse`, `count`, `index`; mutation methods return `None` (key gotcha)
- **`for` over list** — `for item in lst:` pattern; `enumerate` for index+value
- **`sum` / `enumerate` / `zip` / `sorted`** — owned here: `sum(lst)` returns
  total; `enumerate(lst)` yields `(index, item)` pairs; `zip(a, b)` pairs
  two sequences (stops at the shorter); `sorted(lst)` returns a *new* sorted
  list (contrast: `lst.sort()` mutates in place and returns `None`)
- **tuple** — ordered, *immutable* sequence; `()` literal; single-element needs
  trailing comma; can be used as dict key; swap idiom `a, b = b, a`
- **set** — unordered, no duplicates; `set()` literal (not `{}`); `in` is O(1);
  union `|`, intersection `&`, difference `-`
- **dict** — key→value mapping; `{}` literal; access by key, not position;
  `keys()`, `values()`, `items()`, `.get(key, default)`; iterate with
  `for k, v in d.items()`; keys must be immutable (hashable)
- **nesting** — list of lists, dict of lists; `data[row][col]` addressing
  (outer index first, then inner); 2-D grid traversal with nested `for` loops
- **`random` module** — `import random`; `randint(a, b)` (inclusive both ends);
  `choice(seq)`; `shuffle(lst)` (in-place, returns None)
- **IndexError** — raised when an index is out of range; `pop()` on empty list
- **KeyError** — raised when a dict key does not exist; `.get()` as safe
  alternative

---

## Concept map & dependencies

```
Ch.1–3 recalls:
  str indexing/slicing → list indexing/slicing (same rules, new mutability)
  for/range (Ch.2)   → for-over-list iteration
  def/return (Ch.3)  → functions used in all strand lessons

Within-chapter dependency order:
  4.1 Lists (make, read, append)
    ↓
  4.2 Indexing & Slicing + mutate + IndexError  [deepens 4.1]
    ↓
  4.3 Looping over Lists (for-item, enumerate, sum, sorted, accumulator) [applies 4.1–4.2]
    ↓
  4.4 Tuples & Sets  [contrast with lists; new containers; no IndexError for sets]
    ↓
  4.5 Dictionaries + KeyError  [new mapping structure; keys ↔ set membership]
    ↓
  4.6 Nesting  [data[row][col]; list-of-lists; dict-of-lists; nested loops]
    ↓
  4.7 Data into Charts  [random + list + dict + plot; all prior concepts]
    ↓
  4.8 Lists as Music   [list + index + for + zip + sound; recall Ch.2 drum beat]
    ↓
  Chapter Challenge + Quiz
```

---

## Lessons

### 4.1 — Lists  *(Hook; strand: data; rungs 3–5)*

**Arc role:** Hook — run and modify something real immediately; motivates "many
values" as a solved problem. Introduces the list literal, `len`, `append`, and
the idea that order is preserved.

**Concepts:** list literal `[]`, `len()`, `append()`, `print` of a whole list,
the fact that a list is one object.

**Warm-up recall:** "How did Ch.3 let you avoid copy-pasting the same code five
times?" (functions) — sets up "how do we avoid five separate variables?"

**Worked-example ideas (easy → harder):**
1. `scores = [88, 72, 95]` — print the whole list, its length. Simple and
   concrete; shows list is a single value.
2. Build a list of three friends' names, `append` a fourth, print again.
   Reuses string knowledge; shows `append` grows the list.
3. Accumulate a list inside a `for`/`range` loop using `append` — e.g. the
   first five square numbers. Weaves Ch.2 `for` loop with Ch.4 `append`.

**Exercise ideas (scaffolding fade):**
- *easy (boilerplate)* — given `inventory = []` and three items, fill in the
  three `append` calls that add them; print the final list.
- *medium (stub)* — function `make_evens(n)` returns a list of even numbers
  from 2 to n; stub gives `def` header and empty `result = []`.
- *hard (blank)* — write a program that reads three test scores from `input()`,
  stores them in a list, and prints the list and its length. (Recall: `int()`
  conversion from Ch.1.)

**Misconceptions:** `lst = []` then `lst = lst + [item]` works but replaces the
list (not mutation); `append` returns `None`; a list of one item is still a list.

**Error classes:** none introduced here (reserved for 4.2).

**Recalls:** `print`, `for`/`range` (Ch.2), `def` (Ch.3), `int(input())` (Ch.1).

---

### 4.2 — Indexing & Slicing  *(Concept; strand: data; rungs 3–5)*

**Arc role:** Deepens 4.1 — addresses off-by-one errors and introduces
IndexError and in-place mutation.

**Concepts:** zero-based index, negative index, slice `[start:stop]` (stop
exclusive), mutate via `lst[i] = value`, IndexError.

**Warm-up recall:** "In Ch.1 you sliced a string — `word[1:3]`. What does that
give for `word = 'Python'`?" — directly bridges to list slicing.

**Worked-example ideas (easy → harder):**
1. `colours = ['red','green','blue','yellow']` — show `colours[0]`,
   `colours[-1]`, `colours[1:3]`; run each and read the output.
2. Swap the first and last element using index assignment. Demonstrates mutation
   vs strings (which would TypeError).
3. A function `middle(lst)` that returns everything except first and last
   element using a slice. Weaves Ch.3 functions.
4. Brief survey of three more list operations on `colours`:
   - `colours.index('green')` → 1 (position of first match; raises ValueError
     if not found — note, not IndexError);
   - `colours.count('red')` → 1 (how many times a value appears);
   - `del colours[0]` removes the item at index 0 in place (contrast with
     `pop(0)` which also removes but *returns* the value). Show both; show the
     list after each. These three operations are brief but give learners the
     full mental model of list surgery.

**Exercise ideas (scaffolding fade):**
- *easy (boilerplate)* — given `temps = [21, 19, 23, 18, 25]`, three
  pre-written index expressions; learner must predict each output before
  running (rung 1 inside a rung 3 exercise).
- *medium (stub)* — fix a broken function `def first_half(lst):` that returns
  `lst[0:len(lst)]` instead of `lst[0:len(lst)//2]`; the bug produces the
  *entire list* silently (no error is raised — Python clips over-wide slices);
  the wrong output is shown in a diff so learners must spot the discrepancy.
  (Debug/fix exercise.)
- *hard (blank)* — write `clamp(lst, lo, hi)` that *returns a new list* with
  every value below `lo` replaced by `lo` and every value above `hi` replaced
  by `hi`. Use an accumulator: start with `result = []`, loop over the
  original list, `append` each clamped value, return `result`. The original
  list must not be mutated. (Combines Ch.3 functions, 4.1 `append`, and 4.2
  slicing knowledge; the "no mutation" constraint is stated explicitly so
  learners do not reach for index assignment.)

**Misconceptions:** stop index is exclusive (classic off-by-one); negative
index `-1` is not an error; slicing a list returns a new list; strings are
immutable so `s[0] = 'X'` fails, but `lst[0] = 'X'` works.

**Error classes:** IndexError (index out of range; `pop()` on empty list).

**Recalls:** string slicing (Ch.1 — owned there, recalled here), `len()` (4.1).

---

### 4.3 — Looping over Lists  *(Concept; strand: numbers; rung 6)*

**Arc role:** The payoff for 4.1–4.2 — loops make collections powerful.
Culminates in a "grade averages" program written from scratch.

**Concepts:** `for item in lst`, `enumerate(lst)`, accumulator pattern (sum
and count), `sum()` built-in, computing an average, `sorted(lst)` vs
`lst.sort()` — `sorted` returns a *new* sorted list; `.sort()` mutates in
place and returns `None`.

**Warm-up recall:** "What does `for i in range(5):` do?" (Ch.2) — then: "What
if you want each *item* in a list instead of a number?"

**Worked-example ideas (easy → harder):**
1. `for name in names: print(name)` — simplest traversal; contrast with
   `for i in range(len(names))`.
2. Sum all numbers in a list with the accumulator pattern; then show `sum()`
   as a shortcut. Name the pattern explicitly.
3. `for i, score in enumerate(scores): print(i, score)` — index+value loop;
   reuses indexing from 4.2; sets up debugging (which student has a low grade?).
4. `sorted` vs `.sort()` contrast — given `scores = [72, 88, 95, 60]`, show:
   `ranked = sorted(scores)` leaves `scores` unchanged and returns a new list;
   then `scores.sort()` mutates `scores` in place and returns `None`. Run both;
   print `scores` and `ranked` after each call. Name the rule: **`sorted`
   creates; `.sort()` mutates**. (`sorted` is used in 4.4's `shared_items`
   exercise — teach it here so 4.4 can recall without re-explaining.)

**Exercise ideas (scaffolding fade):**
- *easy (boilerplate)* — given `temps` list and an accumulator shell, fill in
  one line inside the loop body to total the temperatures.
- *medium (stub)* — function `average(lst)` with stub `def` and `# TODO`;
  must handle empty list (hint ladder: what does dividing by zero give?).
- *hard (blank)* — full grade-average program: read five scores from `input()`
  into a list, compute average, print with a grade letter (recall `if/elif`
  from Ch.2). No starter code.

**Misconceptions:** modifying the loop variable `item` does not change the
list; `sum(lst)/len(lst)` crashes on empty list (ZeroDivisionError — a known
error from Ch.1/2); `enumerate` returns pairs, not single values.

**Error classes:** ZeroDivisionError (recall Ch.1), not new but provoked here.

**Recalls:** `for`/`range` (Ch.2), `if/elif` (Ch.2), `def`/`return` (Ch.3).

---

### 4.4 — Tuples & Sets  *(Concept; strand: data; rungs 3–5)*

**Arc role:** Introduces the two "other" sequence types; builds the
right-container-for-the-job mental model.

**Concepts:** tuple literal, immutability, single-element `('x',)` syntax,
swap idiom `a, b = b, a`, tuple unpacking; set literal `set()`, no duplicates,
unordered, fast `in`, union/intersection/difference operators.

**Warm-up recall:** "Can you change the second character of a string in place?"
(No — immutable.) "Tuples are the same idea but for sequences."

**Worked-example ideas (easy → harder):**
1. Define `point = (3, 4)`; show it is immutable (attempt assignment → show
   TypeError); contrast `coords = [3, 4]` (mutable). Two runnable snippets
   side by side.
2. Swap two variables the "old way" (temp variable) then with tuple unpacking
   `a, b = b, a`. Show both; discuss which is cleaner.
3. Build a set from a list of dice rolls, compare with the original list —
   show deduplication; then test `5 in rolls_set` vs `5 in rolls_list` and
   note both work, but the set is the right tool when membership is the question.

**Exercise ideas (scaffolding fade):**
- *easy (boilerplate)* — given `colours = ['red','blue','red','green','blue']`,
  one line to fill: build a set from it and print how many *unique* colours
  there are.
- *medium (stub)* — function `unique_count(lst)` returns number of unique
  elements; stub with header + `# TODO`.
- *hard (blank)* — a function `shared_items(basket_a, basket_b)` that takes
  two lists of grocery items and returns a *sorted list* of items in both
  baskets. Uses set intersection, then converts back to sorted list. Fully
  from scratch.

**Misconceptions:** `{}` creates an empty *dict*, not a set — must use
`set()`; single-element tuple needs trailing comma; tuple unpacking only works
if lengths match exactly; sets have no guaranteed order (cannot index them).

**Error classes:** TypeError (`tuple[0] = x`), already seen in Ch.1 for
strings; reinforced here.

**Recalls:** immutability of strings (Ch.1), `for` over list (4.3).

---

### 4.5 — Dictionaries  *(Concept; strand: data; rung 6)*

**Arc role:** The last new container; also introduces KeyError. Culminates in
a shopping-list manager program.

**Concepts:** dict literal `{key: value}`, access by key, `KeyError`,
`.get(key, default)`, `.keys()`, `.values()`, `.items()`, `for k, v in
d.items()`, add/update a key, delete with `del d[key]`, dict as counter
(frequency map).

**Warm-up recall:** "A list uses an integer to get an item. What if you want
to use a *word* instead?" — motivates the key→value idea.

**Worked-example ideas (easy → harder):**
1. Phone book `tel = {'Alice': '555-1234', 'Bob': '555-5678'}` — look up
   Alice; add Charlie; show `KeyError` on a missing key; fix with `.get()`.
2. Iterate `for name, number in tel.items(): print(name, number)` — show
   all entries.
3. Letter-frequency counter: loop over a string, increment `counts[ch]` — but
   first show what happens without `.get(ch, 0)` (KeyError!); fix with
   `counts[ch] = counts.get(ch, 0) + 1`. Weaves strings (Ch.1) and loops (Ch.2).

**Exercise ideas (scaffolding fade):**
- *easy (boilerplate)* — given a partial dict and three lines to fill in:
  add two items, check if a key exists with `in`, print the total count with
  `len(d)`.
- *medium (stub)* — function `item_total(prices, cart)` where `prices` is a
  dict and `cart` is a list of item names; stub with `def` header and `# TODO`;
  must handle an item in the cart not in `prices` (`.get()` needed). Debug hint
  in hint ladder.
- *hard (blank)* — shopping-list manager: user can add an item+quantity, look
  up a quantity by name (with a friendly message if missing), and print the
  whole list. Uses `while True` loop with `input()` commands (`add`, `get`,
  `show`, `quit`). Fully from scratch. Weaves Ch.2 `while`, Ch.1 `input`.

**Misconceptions:** dicts are accessed by key, not index (no `d[0]` unless 0
is a key); `in` checks keys, not values; mutation methods return None (same as
list — re-emphasise); as of Python 3.7 dicts preserve insertion order but
should not be *relied on* for order-sensitive logic.

**Error classes:** KeyError (accessing a missing key).

**Recalls:** `for`/`while` (Ch.2), `input` (Ch.1), `if/elif` (Ch.2), `def`
(Ch.3).

---

### 4.6 — Nesting  *(Concept; strand: data; rungs 4–6)*

**Arc role:** Brings all four containers together by showing they can contain
each other. Establishes `data[row][col]` addressing as a general pattern,
demonstrated with a 2-D grid and a dict-of-lists. Sets up the strand lessons
that follow (music patterns as rows in a grid; chart data as a dict of lists).

**Concepts:** list of lists (`grid[row][col]`), dict of lists
(`data[key][index]`), nested `for` loop traversal, reading outer-then-inner
left-to-right, IndexError propagating through nested access.

**Warm-up recall:** "You know `lst[2]` gives you one item. What if that item
*is itself a list*? What would `lst[2][1]` give you?" — draws on 4.2 indexing
and 4.5 dicts.

**Worked-example ideas (easy → harder):**
1. Seating chart as a list of rows:
   ```python
   seats = [['A1','A2','A3'], ['B1','B2','B3'], ['C1','C2','C3']]
   print(seats[1][2])   # → 'B3'
   ```
   Read outer index (row 1 = B row), then inner index (col 2 = third seat).
   Show the mental model: outer bracket picks the *row*, inner picks the *seat*.
2. Traverse the whole grid with a nested `for` loop:
   ```python
   for row in seats:
       for seat in row:
           print(seat, end=' ')
       print()
   ```
   Discuss: the outer loop gives each row (a list); the inner loop gives each
   item in that row.
3. Dict of lists — a simple score sheet:
   ```python
   scores = {'Alice': [88, 72, 95], 'Bob': [70, 85, 90]}
   print(scores['Alice'][1])  # → 72  (Alice's second score)
   ```
   Show accessing by key first, then by index. Weaves 4.5 dicts with 4.2
   indexing.

**Exercise ideas (scaffolding fade):**
- *easy (boilerplate)* — given:
  ```python
  grid = [[1,2,3],[4,5,6],[7,8,9]]
  ```
  Three blanks to fill: print the value in row 0 col 2, the value in row 2
  col 0, and the entire middle row. (Recall + predict.)
- *medium (stub)* — function `row_total(grid, row_index)` that sums all
  numbers in one row of a 2-D grid; stub with `def` header + `# TODO`;
  hint ladder shows `grid[row_index]` is a plain list.
- *hard (blank)* — write `transpose(grid)` that returns a new grid where
  rows and columns are swapped (element `[r][c]` moves to `[c][r]`). Input
  grid is square (same number of rows and columns). No starter code. Requires
  nested `for` loops and `append`. (IndexError hint if loops are off by one.)

**Misconceptions:** `data[row][col]` is not special syntax — it is two
separate `[]` operations chained (first `data[row]` returns an inner list,
then `[col]` indexes into that); mutating an inner list *does* change the
outer structure (aliasing — show that `inner = grid[0]; inner[0] = 99`
changes `grid[0][0]`); `IndexError` from nested access names the inner or
outer access depending on which index is out of range.

**Error classes:** IndexError (inner or outer index out of range — reinforces
4.2); KeyError (outer dict key missing — reinforces 4.5).

**Recalls:** indexing (4.2), `for` over list (4.3), dicts (4.5), `def`/
`return` (Ch.3).

---

### 4.7 — *Strand:* Data into Charts  *(Strand-application; strand: plot; rung 6)*

**Arc role:** First strand lesson — applies list + dict + `random` to a
real data task; outputs a bar chart.

**Concepts in use:** `import random`, `random.randint(1, 6)`, building a
frequency dict, `plot.bar(labels, values)` (course API); consolidates all
prior Ch.4 concepts.

**Warm-up recall:** "What does a dict use as an index?" — warm-up on 4.5.

**Worked-example ideas (easy → harder):**
1. Roll one die 10 times, collect results in a list, print the list. Show
   `import random` and `randint` signature (1–6 inclusive both ends).
2. Count how many times each face appeared using a dict (frequency map — same
   pattern as letter counter in 4.5). Print the dict.
3. Plot the frequency dict as a bar chart: build labels list `['1','2',...,'6']`
   and values list, call `plot.bar(labels, values)`. Discuss what you'd need to
   change to roll 1000 times instead of 10.

**Exercise ideas (scaffolding fade):**
- *easy (boilerplate)* — code already rolls 100 dice and builds the frequency
  dict; learner fills in the two lines that build the labels and values lists,
  then calls `plot.bar`.
- *medium (stub)* — function `roll_stats(n, sides)` returns a frequency dict;
  stub with header and `# TODO`; harness checks the dict has the right keys
  and values sum to n.
- *hard (blank)* — extend to two dice: roll two dice, sum them (2–12), build
  the chart. Expected bell curve. Fully from scratch; must choose correct range
  for the labels.

**Misconceptions:** `random.randint(1,6)` includes 6 (both ends inclusive —
unlike `range`); rolling a fresh list each time vs. accumulating; dict key must
exist before `+=` (use `.get(k, 0)` or initialise first).

**Error classes:** KeyError (if frequency dict not initialised correctly).

**Recalls:** `for`/`range` (Ch.2), `import` (brief preview; full treatment
Ch.7), dicts (4.5), lists (4.1–4.3).

---

### 4.8 — *Strand:* Lists as Music  *(Strand-application; strand: sound; rung 6)*

**Arc role:** Second strand lesson — the list drives a musical pattern;
a row of 1s and 0s becomes a drum beat; a list of note values becomes a melody.

**Concepts in use:** list as sequence of instructions, `play_pattern(notes)`,
drum pattern as `[1,0,0,0,1,0,0,0]`, looping over a pattern to trigger beats,
modifying a pattern (mutation) to hear the change.

**Warm-up recall:** "In Ch.2 Lesson 2.7 you made a four-on-the-floor kick
pattern with a `for` loop. Today you'll store the whole pattern in a list so
you can change it in one place."

**Worked-example ideas (easy → harder):**
1. `melody = [60, 62, 64, 65, 67]` (MIDI note numbers) — call
   `play_pattern(melody)` — hear the C major scale. Show that changing `melody[0]`
   to 59 shifts the first note.
2. Drum pattern: `kick = [1,0,0,0, 1,0,0,0]`; loop with `enumerate` — if
   `kick[i] == 1`, trigger the beat. Show how to change the pattern by editing
   the list.
3. Combine: melody list + drum list play in parallel. Demonstrates two lists
   being consumed simultaneously by the same loop using `zip` (brief
   introduction; named but not deep-dived).

**Exercise ideas (scaffolding fade):**
- *easy (boilerplate)* — given a partial `snare = [0,0,0,0, 0,0,0,0]`, change
  exactly two values to 1 so the snare falls on beats 3 and 7 (quarter-note
  positions in an 8-step pattern).
- *medium (stub)* — function `reverse_pattern(pattern)` returns a new list
  that is the pattern in reverse; stub with `def` + `# TODO`; must not
  mutate the original. (Hint ladder: slicing creates a new list.)
- *hard (blank)* — write a program that generates a random 16-step drum pattern
  (each step is 0 or 1 with 50% probability using `random.choice([0,1])`),
  plays it, then asks if the user wants another. Combines random (4.7), list
  (4.1), loop (4.3), `input` (Ch.1).

**Misconceptions:** `list.reverse()` mutates in place and returns None — use
slicing `[::-1]` or a loop to get a new list; `zip` stops at the shortest list
(brief note, not a full lesson).

**Error classes:** IndexError if pattern loop goes out of range.

**Recalls:** `for`/`enumerate` (4.3), mutation (4.2), `random.choice` (4.7),
`play`/`sleep` (Ch.1 Lesson 1.7), drum beat (Ch.2 Lesson 2.7).

---

## Progression / difficulty ramp

| Lesson | Max rung | From scratch? |
|--------|----------|---------------|
| 4.1    | 5 Complete | No — stub/boilerplate |
| 4.2    | 5 Complete | No — debug + complete |
| 4.3    | 6 Write    | Yes — grade-average program |
| 4.4    | 5 Complete | Partial — shared_items is fully blank |
| 4.5    | 6 Write    | Yes — shopping-list manager |
| 4.6    | 6 Write    | Yes — transpose grid (nesting) |
| 4.7    | 6 Write    | Yes — two-dice chart extension |
| 4.8    | 6 Write    | Yes — random drum machine |

Write-from-scratch is the default by 4.3, consistent with the Ch.3 milestone in
CURRICULUM-STRUCTURE.md §E. Each lesson's hard exercise is a fully blank editor.

---

## Chapter Challenge (outline)

Six to eight exercises, easy → hard, mixed containers and strands. Scaffolding
fades to nothing by exercise 6.

1. **(rung 3, data)** Given `temps = [18, 22, 15, 30, 27]`, add two lines:
   one that removes the highest temperature and one that sorts the list.
   (Uses `remove`/`sort`; misconception: `sort()` returns None.)

2. **(rung 4, numbers)** Fix a broken grade-average function: the bug is
   `scores[1:]` instead of `scores[:]` in the accumulator loop — wrong start
   index (silently drops the first score). Show the wrong output to diagnose;
   no error is raised (Python slices never throw — they just return fewer
   items).

3. **(rung 5, data)** Given two word lists, use a set to find words that
   appear in *both* lists and words that appear in *only one* list. Output
   as sorted lists.

4. **(rung 5, data)** Write `word_count(sentence)` — split the sentence into
   words, build a dict counting frequency, return the dict. (Weaves strings,
   loop, dict.)

5. **(rung 6, plot)** Roll two dice 200 times, tally sums in a dict, plot a
   bar chart. Must produce a recognisable bell curve. No starter code.

6. **(rung 6, sound)** Build a 16-step melody from a scale list — randomly
   pick notes using `random.choice` — and play it. Then play it reversed.
   No starter code. (Challenges: reverse without mutating original; random
   reproducibility — not required but a stretch hint.)

7. **(Boss, rung 6, mixed)** Mini playlist manager — a dict where each key is
   a song name and the value is a **tuple** `(bpm, notes_list)` (immutable
   record — can't accidentally mutate the bpm). A separate **set** tracks
   which songs have already been played (membership check with `in`, add with
   `.add()`). User can add a song, play a song (loop over its notes_list),
   list all songs, delete a song, and see which songs are unplayed. Error-
   handles a missing song name with `.get()`. Runs until the user quits.
   Combines all four container types (dict, list, tuple, set) across strands.

---

## Chapter Quiz (gate)

Must pass all five items before Chapter 5 unlocks.

1. **(Predict)** What does `lst = [10,20,30]; lst.append(40); print(lst[-1])`
   print? (Tests: append, negative index.)

2. **(Predict)** What does `d = {'a':1}; d['b'] = 2; print(d.get('c', 0))`
   print? (Tests: dict add, `.get` with default.)

3. **(Predict)** `s = {3, 1, 2, 1, 3}; print(len(s))` — what does it print?
   (Tests: set deduplication.)

4. **(Short write)** Write one line that makes `a = 5, b = 10` become
   `a = 10, b = 5` without a temporary variable. (Tests: tuple swap.)

5. **(Fix)** This code crashes: `scores = []; print(scores[0])`. Name the
   error class and write a version that prints `"empty"` instead of crashing.
   (Tests: IndexError + safe handling.)

---

## Misconceptions & error classes (chapter-wide list)

**Misconceptions:**
- Mutation methods (`append`, `sort`, `reverse`, `extend`) return `None` —
  assigning the return value is the classic trap: `lst = lst.sort()` loses
  the list.
- `{}` is an empty dict, not an empty set.
- Off-by-one: slice `stop` is exclusive; `len(lst)` is the index past the end.
- Strings are immutable (known from Ch.1/3) but lists are not — same indexing
  syntax, different mutability.
- `for item in lst: item = item * 2` does *not* change the list — the loop
  variable is a local copy.
- `random.randint(1,6)` is inclusive on *both* ends (unlike `range(1,6)`).
- Tuple with one element: `(x)` is just parentheses; `(x,)` is a tuple.
- Dict `in` tests keys, not values.
- `random.shuffle` returns None; it mutates the list in place.
- Nesting: `data[0][1]` is read outer-then-inner, left-to-right.

**Error classes (new in Ch.4):**
- `IndexError` — `lst[i]` where `i >= len(lst)` or `i < -len(lst)`; `pop()`
  on empty list.
- `KeyError` — `d[key]` where `key` is not in `d`.

**Error classes recalled from earlier chapters:**
- `TypeError` — tuple mutation attempt (from Ch.1 string immutability);
  `int + str`.
- `ZeroDivisionError` — average of empty list.

---

## Sources

- Python docs — tutorial §5 Data Structures:
  <https://docs.python.org/3/tutorial/datastructures.html>
  (list methods, tuple creation & immutability, set operations, dict methods
  & looping, del statement, nesting — all verified against official reference)

- Think Python 2e, Ch.10 Lists, Ch.11 Dictionaries, Ch.12 Tuples (Downey):
  <https://greenteapress.com/thinkpython2/html/thinkpython2011.html>
  <https://greenteapress.com/thinkpython2/html/thinkpython2012.html>
  <https://greenteapress.com/thinkpython2/html/thinkpython2013.html>
  (teaching sequence for lists/dicts/tuples; aliasing and reference semantics;
  accumulator pattern; memoization; void-method gotcha; swap idiom)

- HTTLACS (Wentworth et al.), Ch.11 Lists:
  <https://openbookproject.net/thinkcs/python/english3e/lists.html>
  (emphasis on reference semantics, mutability contrast with strings, visual
  state snapshots, pure-functions-vs-modifiers framing)

- Python docs — `random` module library reference:
  <https://docs.python.org/3/library/random.html>
  (`randint`, `choice`, `shuffle` signatures and return values verified)

- CSTA K-12 CS Standards, grades 6–8 (Data & Analysis, Algorithms &
  Programming): confirms lists, dicts, and iteration over collections are
  core grade-6–8 content; `random` and basic statistics (frequency/average)
  are within scope; sets and tuples are appropriate stretch concepts at this
  level.

---

*3-line summary:*
Key decisions: (1) tuples and sets share one lesson to keep the chapter at 8
slots; they are genuinely lighter than lists/dicts and the contrast is the
teaching. (2) `random` is introduced in 4.7 without a dedicated module lesson —
it is used as a tool, not taught as a topic; that lesson lives in Ch.7. (3)
`enumerate`/`zip`/`sum`/`sorted` are **owned by Ch.4** (decision #5): `sum`,
`enumerate`, and `sorted` (with the `sorted`-vs-`.sort()` contrast) are all
taught in 4.3; `zip` is introduced in 4.8 (strand); `sorted` is then recalled
in 4.4 (shared_items). (4) Nesting (`data[row][col]`) now has its own lesson
(4.6) covering list-of-lists, dict-of-lists, nested `for` loops, and aliasing.
(5) Comprehensions are deferred to **Ch.8** (not Ch.7).
Coverage resolved (rev-2): `del lst[i]`, `list.index()`, and `list.count()`
are now given a home in 4.2 worked-example #4; Challenge #2 corrected to state
"wrong output, no error" (scores[1:] is silent); `sorted` taught explicitly in
4.3 WE #4 so 4.4's recall is legitimate.
