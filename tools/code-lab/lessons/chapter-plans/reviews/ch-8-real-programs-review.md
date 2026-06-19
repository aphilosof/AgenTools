# Review — Chapter 8 (Writing Real Programs in Python)
**Verdict:** Needs fixes
**Reviewed against:** Python 3.14.5, CURRICULUM-STRUCTURE.md, AUTHORING.md

---

## Findings

### 1. [BLOCKER] §8.6a (Strand projects) — `sorted()` with `key=` requires `lambda`, which is never taught

The text-tool sub-project says the student should produce "the top-5 words" using
`sorted()` with `key=`. The natural and expected implementation is
`sorted(freq.items(), key=lambda x: x[1], reverse=True)`. But `lambda` does not
appear in the concept spine, is not listed as an owned concept anywhere in Ch.1–7,
and zero occurrences of "lambda" or "key=" appear in the plans for Ch.1–7 (grep
confirmed). Telling a student to use `sorted() with key=` without teaching lambda
or an equivalent first is an undeclared dependency.

**Concrete fix (two options):**
- **Preferred**: teach `sorted()` + `key=` with `dict.get` as the canonical
  trick for sorting by dict value — `sorted(freq, key=freq.get, reverse=True)`.
  This only requires dict `.get()` which IS taught in Ch.4. Add `key=` as an
  owned micro-concept in 8.4 or in the 8.6a worked example.
- **Alternative**: explicitly introduce lambda as a one-line concept note in
  8.4 or 8.6, note it recalls `def` (Ch.3), and add it to the concept list.

Verified: `sorted(freq, key=freq.get, reverse=True)` works without lambda:
```python
freq = {"the": 3, "cat": 2, "sat": 1}
print(sorted(freq, key=freq.get, reverse=True))
# ['the', 'cat', 'sat']
```

---

### 2. [MAJOR] §8.4 misconception vs. §Challenge exercise 5 — warns against nested
   comprehensions, then assigns one

8.4 explicitly lists as a misconception: *"nested comprehensions before
single-level is solid"* — signalling that nested comprehensions are out of scope
for this chapter. Yet Challenge exercise 5 asks students to write `flatten` using
"a comprehension":

> "Spec for a `flatten(list_of_lists)` function that returns a single list —
> write the function using a comprehension, then write `def test_flatten()`."

The natural comprehension solution is the doubly-nested form:
`[item for sublist in list_of_lists for item in sublist]`

This is exactly the nested pattern the misconception block warns against.

**Concrete fix**: change the exercise to require a `for` loop + `.extend()` —
which is both cleaner pedagogy and avoids contradicting 8.4's own guidance. Or
remove the "using a comprehension" constraint. Either way, do not ask for nested
comprehension after just warning against it.

Verified:
```python
# Nested comprehension works but conflicts with 8.4 scope:
[item for sublist in [[1,2],[3,4],[5]] for item in sublist]  # [1, 2, 3, 4, 5]

# Loop+extend is the idiomatic alternative:
result = []
for sub in [[1,2],[3,4],[5]]: result.extend(sub)  # [1, 2, 3, 4, 5]
```

---

### 3. [MAJOR] §8.6 error classes — `StopIteration` claim is imprecise

The strand-project section lists: *"StopIteration if they misuse `next()` on a
list."* This is technically wrong: calling `next()` directly on a plain list
raises `TypeError`, not `StopIteration`. `StopIteration` is raised only when
`next()` is called on an exhausted *iterator* (i.e., `iter(lst)` has been
consumed). A student who "misuses `next()` on a list" will see `TypeError:
'list' object is not an iterator`, not `StopIteration`.

**Concrete fix**: change to: *"`TypeError` if they call `next()` directly on a
list (not an iterator); `StopIteration` if they exhaust an explicit `iter()`
object."* Register `TypeError` (wrong use of `next()`) in the Codex note.

Verified:
```python
next([1, 2, 3])          # TypeError: 'list' object is not an iterator
it = iter([1]); next(it); next(it)  # StopIteration (exhausted)
```

---

### 4. [MINOR] §8.4 misconception §"{…} (set/dict) with […] (list)" — imprecise

The misconception says students confuse `{…}` (set/dict) with `[…]` (list). But
`{x for x in ...}` is a **set** comprehension and `{k: v for x in ...}` is a
**dict** comprehension — both use braces, but they behave differently. The
description conflates the two. This is the exact misconception to guard against
(writing `{word: len(word) for word in words}` correctly vs. accidentally writing
`{word for word in words}` which gives a set). The current one-line warning does
not distinguish them clearly enough.

**Concrete fix**: expand to two bullets — one for the set/dict brace ambiguity
(need the `key: value` form) and one for the `{…}` vs. `[…]` confusion. A
worked example side-by-side (set comp vs. dict comp) in 8.4 would close this.

Verified:
```python
{w for w in ["cat", "bat"]}          # set: {'cat', 'bat'}
{w: len(w) for w in ["cat", "bat"]}  # dict: {'cat': 3, 'bat': 3}
```

---

### 5. [MINOR] §8.3 / §8.6 — `FileNotFoundError` introduced without any file I/O

`FileNotFoundError` is listed in the error classes of 8.3 ("introduced
contextually") and again in the chapter-wide list. But Ch.8 has no exercise or
example that opens a file — file I/O is owned by Ch.7 (7.6). The plan says this
is "simulated with a dict" in 8.3. Introducing an exception for an operation not
exercised in the chapter is dead weight: students cannot reason about when it
would fire, and the Codex entry will have no context anchor.

**Concrete fix**: either (a) drop `FileNotFoundError` from Ch.8 error classes
(it is already owned by Ch.7 with full context) and leave a "you saw this in Ch.7"
note, or (b) add a minimal `open()`-with-`try` example in 8.3 that recalls 7.6
and shows the exception in context.

---

### 6. [MINOR] §8.4 — "dict comprehension" for word frequency (8.6a) needs care

The plan lists "dict comprehension" as a key concept for 8.6a (word frequency).
A true single-pass dict comprehension cannot accumulate counts — it would
overwrite each key's value. The workaround `{w: words.count(w) for w in set(words)}`
is O(n²) and requires knowing `set()`. This is valid Python but is arguably not
the right teaching moment for dict comprehensions. The *for-loop-with-.get()*
pattern (`freq[w] = freq.get(w, 0) + 1`) is the standard approach and was
covered in Ch.4 spiral.

**Concrete fix**: in 8.6a, state explicitly that the dict building uses the
`for`-loop pattern (Ch.4 recall), not a dict comprehension; reserve the dict
comprehension for transformations (e.g., `{w: len(w) for w in words}`). This
avoids implying dict comprehension can do accumulation.

---

## What's strong

- **Teaching order is sound.** Design before robustness before shorthand before
  testing before projects is the right PRIMM-at-chapter-scale sequence.
  Dependencies within the chapter are correctly identified.

- **`try/except` coverage is thorough.** All four clauses (`except`, `else`,
  `finally`, `raise`) are owned and exercised with concrete examples. The
  `while True` + `try`/`except` + `break` input-loop idiom is correctly presented
  and technically accurate. All verified error classes (`ValueError`,
  `ZeroDivisionError`, `KeyError`, `IndexError`) behave as described.

- **Comprehension owned correctly at Ch.8.** The plan requires Ch.4 (list/dict
  iteration, `for`+`if`) and Ch.2 (`for`/`if`) as prerequisites, which are all
  genuinely in place by the time students reach Ch.8. The filter form (`[expr for
  x in it if cond]`) and the "when NOT to use" guidance are pedagogically correct.

- **Assert and test functions are well scoped.** The `assert condition` and
  `assert condition, message` syntax, `AssertionError` ownership, edge-case
  thinking, and the `def test_*()` convention are cleanly introduced and the
  exercises appropriately ramp from Fix → Complete → Write. The `python3 -O`
  optimization caveat (which disables asserts) is correctly omitted for this
  audience.

---

## Coverage check

**Well covered:**
- `try`/`except`/`else`/`finally`/`raise` — all clauses, several error classes, input-loop pattern
- List comprehension (basic and filter form)
- Dict comprehension (transformation use case)
- `assert` + `AssertionError` + simple test functions
- Program design at scale (owned concept, unique to Ch.8, well sequenced)

**Thin:**
- `except ExceptionType as e` — mentioned in concepts list but only lightly
  exercised; no exercise requires a student to *use* the `e` variable (inspect,
  print, or re-raise it). Add at least one Complete exercise that prints
  `f"Error: {e}"`.
- `raise` — owned concept, one Fix exercise in 8.3, but no strand project uses it.
  The custom-error idiom (`raise ValueError("message")`) should appear in at
  least one strand project to cement it.

**Missing from owned spine:**
- `key=` for `sorted()` — used in 8.6a but not listed as an owned concept
  anywhere in Ch.1–8. Either own it here or provide a lambda-free path (see
  finding #1).
