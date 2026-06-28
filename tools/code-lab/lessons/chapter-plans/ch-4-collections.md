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
numbers, plot, and sound. It recalls loops and functions from Ch.2–3. String
indexing/slicing is introduced fresh in 4.2 using a string example first (Ch.1
taught `.upper/.lower/.strip/.split` but not indexing), then immediately
paralleled to lists. No inheritance. No comprehensions (deferred to Ch.8).

---

## Concepts owned (keywords)

- **list** — ordered, mutable, zero-indexed sequence; `[]` literal
- **index** — integer address of an element; negative indices count from the end
- **slice** — `lst[start:stop]` produces a new list; `stop` is exclusive
- **mutate** — change a list element in place via `lst[i] = value`
- **list methods** — `append`, `extend`, `insert`, `pop`, `remove`, `sort`,
  `reverse`, `count`, `index`; most mutation methods (`append`, `extend`,
  `insert`, `sort`, `reverse`, `remove`) return `None` — the classic trap is
  `lst = lst.sort()` which silently replaces the list with `None`; `pop()` is
  the exception: it returns the removed element
- **`for` over list** — `for item in lst:` pattern; `enumerate` for index+value
- **`sum` / `enumerate` / `zip` / `sorted`** — owned here: `sum(lst)` returns
  total; `enumerate(lst)` yields `(index, item)` pairs; `zip(a, b)` pairs
  two sequences (stops at the shorter) — introduced in 4.8 worked example;
  one exercise in 4.8 requires writing `zip` (resolves the "see but don't
  write" gap); `sorted(lst)` returns a *new* sorted list and works on any
  iterable — lists, sets, strings (contrast: `lst.sort()` mutates in place
  and returns `None`)
- **tuple** — ordered, *immutable* sequence; `()` literal; single-element needs
  trailing comma; can be used as dict key; swap idiom `a, b = b, a`
- **set** — unordered, no duplicates; `set()` literal (not `{}`); `in` is O(1);
  union `|`, intersection `&`, difference `-`; `set.add(item)` adds one element
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
  str methods (Ch.1: .upper/.lower/.strip/.split/len/concatenation)
  NOTE: string *indexing/slicing* is NOT in Ch.1 — 4.2 introduces it fresh
        using strings first, then parallels to lists (see M1 resolution)
  for/range (Ch.2)   → for-over-list iteration
  while/break (Ch.2) → recalled in 4.5 shopping-list manager
  def/return (Ch.3)  → functions used in all strand lessons
  f-strings/:.2f (Ch.1) → recalled in 4.3 warm-up before floats appear

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

**Opening demo (chapter hook):** A pre-written program that rolls 1000 dice
and plots a bell curve — already runnable before any explanation. Caption:
"By the end of this chapter you will understand every line of that." This
creates immediate motivation and a concrete goal.

**Warm-up recall:** Show five separate variables: `score1 = 88; score2 = 72;
score3 = 95; score4 = 61; score5 = 84` and ask "What if we had 50 scores?"
Reveal the list as the solution. This is a sharper cognitive bridge than the
function analogy: lists solve a concrete problem the student can feel.

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

**Arc role:** Introduces zero-based indexing and slicing from scratch — Ch.1
taught string *methods* but not indexing. Uses strings as the entry point
(familiar type, new operation), then immediately shows the same syntax works
on lists. Also introduces IndexError and in-place mutation.

**Authoring note (M1):** Do NOT assume Ch.1 indexing knowledge. This lesson
IS the introduction. Start with a string example so the syntax is on familiar
ground, then show the parallel on a list. Once students have seen both, the
difference in mutability becomes the teaching point.

**Concepts:** zero-based index, negative index, slice `[start:stop]` (stop
exclusive), mutate via `lst[i] = value`, IndexError, `ValueError` from
`list.index(x)` and `list.remove(x)` when element absent.

**Warm-up recall:** "In Ch.1 you used `len(word)` and `.upper()`. Today you
will reach *inside* a string to grab one character — using its position
number. Then you will do the same thing to a list." This is a fresh
introduction, not a recall of indexing.

**Worked-example ideas (easy → harder):**
1. **String first, then list** — `word = 'Python'`: show `word[0]` → `'P'`,
   `word[-1]` → `'n'`, `word[1:4]` → `'yth'` (stop exclusive). Then
   immediately: `colours = ['red','green','blue','yellow']`; show the same
   three operations produce identical syntax, different types. Run both side
   by side. Name the rule: zero-based, negative counts from the end, stop is
   exclusive.
2. Swap the first and last element of `colours` using index assignment.
   Demonstrates mutation — then attempt the same on `word` to produce
   `TypeError: 'str' object does not support item assignment`. Strings are
   immutable (known from Ch.1); lists are not. Same syntax, different rules.
3. A function `middle(lst)` that returns everything except first and last
   element using a slice. Weaves Ch.3 functions.
4. Expanded survey of list surgery on `colours`:
   - `colours.index('green')` → 1 (raises `ValueError`, not `IndexError`, if
     element not found — show the error, name it, contrast with IndexError);
   - `colours.count('red')` → 1 (how many times a value appears);
   - `colours.remove('blue')` — removes the first occurrence of a value
     (contrast with `del colours[0]` / `pop(0)` which remove by position;
     `remove` removes by value; raises `ValueError` if not found — same
     class as `.index()`);
   - `colours.extend(['purple','orange'])` — add multiple items (contrast
     with `append` which adds exactly one);
   - `colours.insert(1, 'black')` — insert at a specific position.
   Show the list after each operation. These methods give the full mental model
   of list surgery before the exercises require them.

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

**Error classes:** IndexError (index out of range; `pop()` on empty list);
`ValueError` — `list.index(x)` when `x` is not in the list; `list.remove(x)`
when `x` is not in the list. Add a fix exercise: call `.index()` on a value
absent from the list; ask the student to name the error and handle it with an
`if x in lst:` guard.

**Recalls:** string methods / `len()` (Ch.1), `append` and list literal (4.1).

---

### 4.3 — Looping over Lists  *(Concept; strand: numbers; rung 6)*

**Arc role:** The payoff for 4.1–4.2 — loops make collections powerful.
Culminates in a "grade averages" program written from scratch.

**Cognitive load note (M6):** This lesson has five items. Split into two
clearly labelled subsections with a schema-level gate between them so
Subsection A is practised before Subsection B loads new concepts.

**Authoring dependency:** 4.3 warm-up recalls `:.2f` f-string formatting.
Do not author 4.3 until the f-string subsection is present in c1s5.

**Subsection A:** `for item in lst`, the `for-item` vs `range(len)` verdict,
the accumulator applied to lists, `sum()` built-in, computing an average.

**Subsection B:** `enumerate(lst)`, `sorted(lst)` vs `.sort()` contrast with
the None-return trap. The gate between subsections ensures students can
traverse a list and accumulate before taking on index+value and sort idioms.

**Concepts (A):** `for item in lst`; `for i in range(len(lst))` (shown and
then deprecated); accumulator pattern (recall from Ch.2 — do NOT re-define
from scratch); `sum()` built-in as shortcut; computing an average; `:.2f`
f-string formatting when printing floats.

**Concepts (B):** `enumerate(lst)` yields `(index, item)` pairs; `sorted(lst)`
returns a new sorted list and accepts any iterable — lists, sets, strings;
`.sort()` mutates in place and returns `None`; the "sorted creates; .sort()
mutates" rule.

**Warm-up recall (Subsection A):** "What does `for i in range(5):` do?"
(Ch.2) — then "What if you want each *item* in a list instead of a counter?"
Also activate: "In Ch.1 you wrote `f'Score: {s:.2f}'`. What does `{s:.2f}`
do?" — needed before this lesson's average exercises produce floats (m13).

**Worked-example ideas (Subsection A — easy → harder):**
1. `for name in names: print(name)` — simplest traversal. Then show
   `for i in range(len(names) + 1):` crashing with IndexError on the last
   step — this is the failure mode of the index-based form. Conclude with the
   verdict: **use `for item in lst:` when you only need the value; use
   `enumerate(lst)` when you need both index and value.** (m10)
2. Sum numbers in a list with the accumulator pattern — open with "You already
   used the accumulator pattern in Ch.2 with while and for loops." Apply to
   lists; do not re-state the three-step definition as if new. Then show
   `sum(lst)` as a shortcut. (m9)
3. Compute average: `sum(scores) / len(scores)`; handle empty list (recall
   ZeroDivisionError from Ch.1/2); format result with `f'{avg:.2f}'`.

**Worked-example ideas (Subsection B — easy → harder):**
4. `for i, score in enumerate(scores): print(i, score)` — index+value loop;
   reuses indexing from 4.2; framed as "which student has a low grade?"
5. `sorted` vs `.sort()` contrast — given `scores = [72, 88, 95, 60]`, show:
   `ranked = sorted(scores)` leaves `scores` unchanged and returns a new list;
   then `scores.sort()` mutates in place and returns `None`. Run both; print
   `scores` and `ranked` after each call. Add one explicit "common trap"
   callout: `sorted_scores = scores.sort()` — what is `sorted_scores`? (None.)
   Name the rule: **`sorted` creates; `.sort()` mutates**. Add: "`sorted()`
   works on any iterable — lists, sets, even strings — and always returns a
   new list." (m8) (`sorted` is used in 4.4's `shared_items` exercise — teach
   it here so 4.4 can recall without re-explaining.)

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
swap idiom `a, b = b, a`, tuple unpacking, tuple-as-record, tuple hashability
(why tuples can be dict keys and lists cannot); set literal `set()`, no
duplicates, unordered, fast `in`, union `|`, intersection `&`, difference `-`,
`set.add(item)`; tuple unpacking inside a `for` loop (bridge to 4.5).

**Warm-up recall:** "Can you change the second character of a string in place?"
(No — immutable.) "Tuples are the same idea but for sequences."

**Worked-example ideas (easy → harder):**
1. Define `point = (3, 4)`; show it is immutable (attempt assignment → show
   TypeError); contrast `coords = [3, 4]` (mutable). Two runnable snippets
   side by side. **Then add:** "Because a tuple's contents can never change,
   Python can compute a stable fingerprint for it and use it as a dictionary
   key. A list can change at any time, so Python cannot — that is why tuples
   can be dict keys and lists cannot." Show: `d = {(0,0): 'origin',
   (1,0): 'right'}`. Tuples as fixed-size records where position has meaning
   (coordinates, RGB, `(name, score)` pairs) is the primary design use case.
   (m7 — connects 4.4 directly to 4.5.)
2. Swap two variables the "old way" (temp variable) then with tuple unpacking
   `a, b = b, a`. Show both; discuss which is cleaner.
3. **Set operators worked example (m4):** `set_a = {1,2,3}; set_b = {2,3,4}`;
   show `set_a & set_b` (intersection), `set_a | set_b` (union),
   `set_a - set_b` (difference); run each, name the operation, show the
   result. This is the minimum read-before-write hook before the `shared_items`
   exercise requires intersection. Also show `set_a.add(5)` for adding one
   element at a time. (m12)
4. Build a set from a list of dice rolls — show deduplication; test
   `5 in rolls_set` vs `5 in rolls_list`; note both work but the set is the
   right tool when membership is the question.
5. **Tuple unpacking in a `for` loop (m5 — bridge to 4.5):** `for a, b in
   [(1,'x'),(2,'y')]: print(a, b)` — one example, comment: "Python unpacks
   each pair into `a` and `b` on every iteration." This is the pattern
   `for k, v in d.items()` uses in 4.5.

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
to use a *word* instead?" — motivates the key→value idea. Also: "In Ch.2 you
used `while True:` with `break` to keep reading input until the user chose to
stop. This lesson uses the same pattern to build a menu." (m17 — the sentinel
loop was last practised in Ch.2 and does not appear in Ch.3.)

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
3. **Aliasing — dedicated worked example (M2):** Run this predict-before-run:
   ```python
   grid = [[1, 2], [3, 4]]
   inner = grid[0]
   inner[0] = 99
   print(grid)   # → [[99, 2], [3, 4]]
   ```
   Ask the student to predict `grid` before running. Name the principle: "In
   Python a variable holds a *reference*, not a copy. `inner` and `grid[0]`
   point at the same list. Changing one changes both." Then show the safe copy:
   `row = grid[0][:]` and demonstrate the original is unchanged. (Connects to
   Ch.1 string immutability: strings cannot alias because they cannot mutate.)
4. Dict of lists — a simple score sheet:
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
- *medium (stub — aliasing, M2)* — given `grid = [[10, 20], [30, 40]]`:
  one line to fill that makes a safe copy of row 0 using `grid[0][:]`, then
  modify the copy's first element and confirm `grid[0][0]` is unchanged.
  Contrasts with the aliasing demo in WE#3. Verifies the copy idiom is
  actionable, not just named.
- *medium (stub)* — function `row_total(grid, row_index)` that sums all
  numbers in one row of a 2-D grid; stub with `def` header + `# TODO`;
  hint ladder shows `grid[row_index]` is a plain list.
- *hard (blank)* — write `transpose(grid)` that returns a new grid where
  rows and columns are swapped (element `[r][c]` moves to `[c][r]`). Input
  grid is square (same number of rows and columns). No starter code. Requires
  nested `for` loops and `append`.

**Misconceptions:** `data[row][col]` is not special syntax — it is two
separate `[]` operations chained (first `data[row]` returns an inner list,
then `[col]` indexes into that); mutating an inner list *does* change the
outer structure (aliasing — the worked example above demonstrates this);
both inner and outer IndexErrors produce the *same* message — `list index
out of range` — Python does not distinguish which bracket failed. To diagnose,
isolate the intermediate step: `row = grid[outer_idx]` first so that line
alone shows whether the outer index is at fault, then `row[col]` for the
inner. (M4 — the previous wording claiming Python identifies which access
failed was factually wrong; verified with Python 3.)

**Error classes:** IndexError (inner or outer index out of range — reinforces
4.2); KeyError (outer dict key missing — reinforces 4.5).

**Recalls:** indexing (4.2), `for` over list (4.3), dicts (4.5), `def`/
`return` (Ch.3).

---

### 4.7 — *Strand:* Data into Charts  *(Strand-application; strand: plot; rung 6)*

**Arc role:** First strand lesson — applies list + dict + `random` to a
real data task; outputs a bar chart.

**Concepts in use:** `import random`, `random.randint(1, 6)`,
`random.choice(seq)`, building a frequency dict, `plot.bar(labels, values)`
(course API); consolidates all prior Ch.4 concepts.

**Dot notation note (m1):** In the concept block, add: "The part before the
dot names the toolbox; the part after names the tool inside it.
`random.randint(1, 6)` means: go into the `random` toolbox and use its
`randint` tool. We write `random.randint(...)` rather than just `randint(...)`
so the name `random` stays visible — in Chapter 7 you will see why that
matters." (One to two sentences; not a full paragraph.)

**Warm-up recall:** "What does a dict use as an index?" — warm-up on 4.5.

**Worked-example ideas (easy → harder):**
1. Roll one die 10 times, collect results in a list, print the list. Show
   `import random` and `randint` signature (1–6 inclusive both ends). Add the
   dot notation sentence here (see concept block note above).
2. Count how many times each face appeared using a dict (frequency map — same
   pattern as letter counter in 4.5). Print the dict.
3. Plot the frequency dict as a bar chart: build labels list `['1','2',...,'6']`
   and values list, call `plot.bar(labels, values)`. Discuss what you'd need to
   change to roll 1000 times instead of 10. Also introduce `random.choice(lst)`:
   "You can also pick a random element from any list using `random.choice(lst)`."
   Show `random.choice(['red','blue','green'])` — one line, result shown. (m15
   — `choice` is used in 4.8's hard exercise so it must appear here first.)

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
   `beat == 1`, trigger the beat. (Using `beat` directly is cleaner than
   writing `kick[i]` — `enumerate` already handed you the value.) Show how
   to change the pattern by editing the list.
3. Combine: melody list + drum list play in parallel. Demonstrates two lists
   being consumed simultaneously by the same loop using `zip` (brief
   introduction; named but not deep-dived).

**Exercise ideas (scaffolding fade):**
- *easy (boilerplate)* — given a partial `snare = [0,0,0,0, 0,0,0,0]`, change
  exactly two values to 1 so the snare falls on beats 3 and 7 (quarter-note
  positions in an 8-step pattern).
- *medium (stub — zip practice, M7)* — function `play_melody(notes, durations)`
  where `notes = [60, 62, 64, 65]` and `durations = [1, 1, 2, 1]`; stub with
  `def` header + `# TODO`; must use `zip(notes, durations)` to pair each note
  with its duration and call `play(note)` then `sleep(duration)`. This is the
  first exercise that requires writing `zip` — resolving the "see but don't
  write" gap in M7.
- *medium (stub)* — function `reverse_pattern(pattern)` returns a new list
  that is the pattern in reverse; stub with `def` + `# TODO`; must not
  mutate the original. Hint: use `list(reversed(pattern))` or a loop
  accumulator. Do NOT hint `[::-1]` — the step-slice parameter is never
  introduced in this chapter. (m2)
- *hard (blank)* — write a program that generates a random 16-step drum pattern
  (each step is 0 or 1 with 50% probability using `random.choice([0,1])` —
  recall from 4.7), plays it, then asks if the user wants another. Combines
  `random.choice` (4.7), list (4.1), loop (4.3), `input` (Ch.1).

**Misconceptions:** `list.reverse()` mutates in place and returns None — to
get a reversed *new* list use `list(reversed(pattern))` or a loop accumulator;
do NOT introduce `[::-1]` (step-slices are not taught in this chapter — m2);
`zip` stops at the shortest list (brief note, not a full lesson).

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
| 4.4    | 6 Write    | Partial — shared_items is fully blank |
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
   one that removes the highest temperature using `remove()` and one that sorts
   the remaining list. `remove(30)` removes by value (taught in 4.2 WE#4);
   `sort()` mutates in place. Misconception: `sort()` returns None — the trap
   `temps = temps.sort()` loses the list silently.

2. **(rung 4, numbers)** Fix a broken grade-average function: the buggy
   function iterates `for s in scores[1:]: total += s` and divides by
   `len(scores[1:])` — so it averages only the scores after the first,
   giving `73.33` instead of `75.0` for `[80, 70, 90, 60]`. The wrong
   output is close enough to seem plausible, requiring careful diagnosis.
   No error is raised (Python slices never throw — they just return fewer
   items). Fix: change `scores[1:]` to `scores[:]` in both the loop and
   the denominator.

3. **(rung 5, data)** Given two word lists, use a set to find words that
   appear in *both* lists and words that appear in *only one* list. Output
   as sorted lists.

4. **(rung 5, data)** Write `word_count(sentence)` — split the sentence into
   words, build a dict counting frequency, return the dict. (Weaves strings,
   loop, dict.) Recall anchor: "`sentence.split()` returns a list of words —
   you learned this in Ch.1 Lesson 1.5." (m16)

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

4. **(Short write)** Given `a = 5` and `b = 10` already defined, write one
   line that swaps them so `a` holds 10 and `b` holds 5, without using a
   temporary variable. (Tests: tuple swap idiom `a, b = b, a`.)

5. **(Fix)** This code crashes: `scores = []; print(scores[0])`. Name the
   error class and write a version that prints `"empty"` instead of crashing.
   (Tests: IndexError + safe handling.)

---

## Misconceptions & error classes (chapter-wide list)

**Misconceptions:**
- `append`, `extend`, `insert`, `sort`, `reverse`, `remove`, and
  `random.shuffle` all return `None` — the classic trap is `lst = lst.sort()`
  which silently replaces the list with `None`. Note that `pop()` is
  different: it *returns* the removed element. (m3 — the previous blanket
  "mutation methods return None" was imprecise.)
- `{}` is an empty dict, not an empty set.
- Off-by-one: slice `stop` is exclusive; `len(lst)` is the index past the end.
- Strings are immutable (known from Ch.1) but lists are not — same indexing
  syntax, different mutability.
- `for item in lst: item = item * 2` does *not* change the list — the loop
  variable is a local copy.
- `random.randint(1,6)` is inclusive on *both* ends (unlike `range(1,6)`).
- Tuple with one element: `(x)` is just parentheses; `(x,)` is a tuple.
- Dict `in` tests keys, not values.
- Nesting: `data[0][1]` is two separate `[]` operations, outer-then-inner.
- Aliasing: `inner = grid[0]` does not copy the row — mutating `inner` changes
  `grid`. Use `inner = grid[0][:]` for a safe copy.

**Error classes (new in Ch.4):**
- `IndexError` — `lst[i]` where `i >= len(lst)` or `i < -len(lst)`; `pop()`
  on empty list; both inner and outer nested-access failures produce the
  identical message "list index out of range" (M4).
- `KeyError` — `d[key]` where `key` is not in `d`; use `.get()` as safe
  alternative.
- `ValueError` — `list.index(x)` when `x` is not in the list; `list.remove(x)`
  when `x` is not in the list. (M5 — added here and to 4.2 lesson list.)

**Error classes recalled from earlier chapters:**
- `TypeError` — tuple mutation attempt (from Ch.1 string immutability);
  `int + str`.
- `ZeroDivisionError` — average of empty list.

---

## Chapter Recap (gate element — CURRICULUM-STRUCTURE.md §C item 6)

Required per the chapter arc. Implement as one page after the Chapter Quiz
passes.

**Content outline:**
1. Right-container-for-the-job decision table:

   | Need                        | Use    |
   |-----------------------------|--------|
   | Ordered, changeable         | list   |
   | Fixed-size record / key     | tuple  |
   | Key → value lookup          | dict   |
   | Membership / no duplicates  | set    |

2. Retrieval set (five questions seeding Chapter 5 spiral):
   - What does `enumerate(lst)` give on each iteration? (Answer: an
     `(index, item)` pair — seeds 5.x comprehensions.)
   - How do you safely access a dict key that might not exist?
   - What is the difference between `sorted(lst)` and `lst.sort()`?
   - What happens when you do `inner = grid[0]` and then `inner[0] = 99`?
   - Name two methods that raise `ValueError` instead of `IndexError`.

3. Codex consolidation: every new error class (IndexError, KeyError,
   ValueError recalled) earns its Codex entry here; the container decision
   table is the Codex "concept" for this chapter.

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

*Summary (rev-4 — post round-2 review):*
Key decisions unchanged: (1) tuples and sets share one lesson; (2) `random`
is a tool in 4.7, not a topic; (3) `enumerate`/`zip`/`sum`/`sorted` are owned
by Ch.4 — `zip` now has an exercise in 4.8 (M7 resolved); (4) nesting has its
own lesson (4.6) with a dedicated aliasing worked example and exercise (M2
resolved); (5) comprehensions deferred to Ch.8.
Round-2 fixes applied (rev-4): F1 — progression table row 4.4 corrected from
rung 5 to rung 6 (shared_items is fully from scratch); F2 — 4.8 WE#2 rewritten
to use `beat` directly instead of `kick[i]` (enumerate anti-pattern removed);
F3 — Challenge #2 now specifies the exact buggy denominator (`len(scores[1:])`)
with a concrete expected output (`73.33` vs `75.0`); F4 — authoring-order
blocking dependency note added to 4.3 (do not author 4.3 until c1s5 has
f-strings/`:.2f`). F5 advisory (dict.pop also returns a value) deferred; no
student-facing impact in this chapter.
Panel fixes applied (rev-3): M1 — 4.2 introduces indexing fresh with strings
first (Ch.1 never taught indexing); M2 — aliasing gets WE + exercise in 4.6;
M3 — `extend`/`insert`/`remove` now taught in 4.2 WE#4; M4 — false claim
about IndexError inner/outer distinction corrected; M5 — ValueError added to
4.2 error list and chapter-wide list; M6 — 4.3 split into two subsections
with a gate; M7 — `zip` exercise added to 4.8; m1 — dot notation sentence in
4.7; m2 — `[::-1]` removed from 4.8 hints, replaced with `list(reversed())`;
m3 — "mutation returns None" misconception corrected to name exceptions
(`pop`); m4 — set operators runnable WE added to 4.4; m5 — `for` unpacking
demo added to 4.4; m6 — 4.1 warm-up changed to five-variable demo + opening
chapter hook; m7 — tuple-as-record + hashability added to 4.4 WE#1; m8 —
`sorted` accepts any iterable noted in 4.3; m9 — accumulator framed as
recall in 4.3 WE#2; m10 — `for item` vs `range(len)` verdict + failure-mode
demo in 4.3 WE#1; m11 — quiz item 4 reworded unambiguously; m12 — `set.add`
added to 4.4 concept list and WE; m13 — f-string/:.2f recall in 4.3 warm-up;
m14 — Chapter Recap section added; m15 — `random.choice` added to 4.7 concept
block and WE#3; m16 — `str.split()` recall anchor added to Challenge #4;
m17 — `while True`/`break` recall added to 4.5 warm-up.
