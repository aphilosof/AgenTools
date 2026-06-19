# Review — Chapter 7 (Modules, Packages & Real Data)
**Verdict:** Needs fixes
**Reviewed against:** Python 3.14.5, ch-4-collections.md, ch-6-classes.md, ch-8-real-programs.md

---

## Findings

### 1. [BLOCKER] 7.6 — List comprehension used before it is taught

Lesson 7.6 worked example 3 says "filter by artist using a list comprehension (Ch.4 recall)". This is wrong on two counts:

- Ch.4 explicitly says: *"No comprehensions (deferred to Ch.7)"* (ch-4-collections.md line 20).
- Ch.8 explicitly owns list comprehensions as a new concept in its "Concepts owned" section.

There is no chapter where a student legitimately has a list comprehension in their toolkit when they reach 7.6. Using one here violates the monotonic-difficulty / no-concept-before-taught rule.

**Fix:** Replace the list comprehension filter with a plain `for` loop + `if` (Ch.2/4 recall). Either drop comprehensions from Ch.7 entirely, or decide Ch.7 introduces them (and remove them from Ch.8's ownership list) — but pick one consistently.

---

### 2. [MAJOR] 7.6 — Tuple serialization claim is wrong

The misconception section states: *"Any Python object can be serialized to JSON — sets, tuples (become arrays), custom objects cannot without extra work."*

The parenthetical lumps tuples with sets and custom objects as things that cannot be serialized. This is false: tuples serialize to JSON arrays without extra work.

```python
import json
json.dumps((1, 2, 3))          # '[1, 2, 3]'  — no error
json.loads(json.dumps((1, 2, 3)))  # [1, 2, 3], type <class 'list'>
```

The real (and pedagogically valuable) issue is that tuples do not survive a round-trip: they come back as lists. The misconception as written teaches the wrong lesson.

**Fix:** Rewrite as two separate misconceptions: (a) "Sets and custom objects cannot be serialized to JSON" — true; (b) "A tuple stored in a dict survives JSON round-trip as a tuple — it comes back as a list." Verified: Python 3.14.5.

---

### 3. [MAJOR] 7.7 — Missing `commit()` trap is flagged in misconceptions but NOT in the worked examples

The misconceptions section correctly warns that without `commit()`, INSERTs are rolled back. This was verified:

```python
conn.execute("INSERT INTO t VALUES (?)", (99,))
conn.close()  # no commit
# Re-open: fetchall() returns []
```

However, none of the three worked examples explicitly show the forgetting-commit failure mode. The Fix exercise (rung 4) covers string interpolation / SQL injection but not the missing-commit trap, which is the single most common sqlite3 beginner error.

**Fix:** Make worked example 2 or 3 show what happens when `commit()` is omitted — run the INSERT, close, re-open, and see empty results — before showing the fix. This is the "debugging woven" requirement; it's listed as a misconception but never demonstrated.

---

### 4. [MAJOR] 7.4 — Rung inconsistency: lesson claims 1–3, exercise 3 is rung 4

The lesson header says `Rungs: 1–3`. Exercise 3 is labelled `(Fix, rung 4)`. These contradict each other. Additionally, the chapter-level header says the chapter spans rungs 3–6, yet 7.4 includes a rung 1 (Predict) exercise — below the stated chapter floor.

Dropping to rung 1 mid-chapter is not inherently wrong (docs-reading is a legitimate lower-intensity activity), but the rung range must be stated correctly in the lesson header, and the chapter-level rung statement needs to either include rung 1 or acknowledge the exception.

**Fix:** Update lesson 7.4 header to `Rungs: 1–4`. Optionally update the chapter header's rung range to `1–6` or add a note that 7.4 is intentionally lighter.

---

### 5. [MAJOR] Missing classic trap: `json.load` called with a string argument

The chapter documents `json.load(f)` (file object) vs `json.loads(s)` (string) correctly as concepts. But it never flags the trap: beginners routinely call `json.load(some_string)` instead of `json.loads(some_string)`. The resulting error is confusing:

```python
json.load('{"key": "value"}')
# AttributeError: 'str' object has no attribute 'read'
```

This is not an obvious error — `AttributeError` on a JSON call is surprising. The chapter's review brief explicitly calls this out as a "classic trap to flag."

**Fix:** Add to 7.6 misconceptions: *"`json.load(string)` — passing a string instead of a file object raises `AttributeError: 'str' object has no attribute 'read'`; use `json.loads(string)` for strings, `json.load(file)` for open file objects."* Consider adding a Fix exercise around this.

---

### 6. [MAJOR] Missing classic trap: relative path / CWD for `open()`

The chapter teaches `open("notes.txt", "w")` in 7.6 with no mention that the path is relative to the current working directory, not to the script's location. A student who double-clicks their script from a different directory, or runs it from the command line with a different CWD, will create/read the file in the wrong place — or get a `FileNotFoundError` on read that seems inexplicable.

The review brief explicitly calls this out as a classic trap to flag.

**Fix:** Add to 7.6 worked example 1 or a dedicated misconception: *"The path `'notes.txt'` means the current working directory, not the folder your script lives in. Run your script from the same folder as the file, or use `pathlib.Path(__file__).parent / 'notes.txt'`."* (The `pathlib` alternative can be a note, not a concept lesson.)

---

### 7. [MINOR] 7.5 — Worked example 2 leaves inner spaces unaddressed

Example 2 shows `"  Bob : 882  ".strip().split(":")` to illustrate why `strip()` matters. Correct as written. But the result is `['Bob ', ' 882']` — the parts themselves still have inner leading/trailing spaces. The worked example doesn't note this, so a student who immediately does `int(parts[1])` will see it work (Python's `int()` tolerates leading spaces) but a student who does a string comparison on `parts[0]` (`'Bob ' == 'Bob'` → `False`) will be confused.

```python
"  Bob : 882  ".strip().split(":")  # ['Bob ', ' 882']
int(" 882")  # 882  — works silently
'Bob ' == 'Bob'  # False — trap
```

**Fix:** After the split, show `.strip()` on each part, or use `split(": ")` (with the space) as example 1 does. Note that string comparisons against player names require part-level stripping.

---

### 8. [MINOR] Chapter-wide misconception — import form interchangeability note is too subtle

The chapter-wide misconceptions include: *"`from X import Y` and `import X; X.Y` are interchangeable everywhere — not when the module reassigns Y after import."* This is technically correct but requires understanding of reference semantics and module internals. It is well beyond an 11-year-old's horizon, introduces confusion without payoff, and is not covered in any lesson.

**Fix:** Remove this misconception or replace it with the practically useful version: *"If you do `from math import sqrt`, then write `sqrt = 'surprise'` later in your file, you've overwritten the function — use `math.sqrt` if you want to keep the original reachable."*

---

### 9. [MINOR] 7.7 — Context manager auto-commit behaviour needs a precision note

The chapter states the `with sqlite3.connect(…) as conn:` form "commits automatically on clean exit." This was verified:

```python
with sqlite3.connect(db_path) as conn:
    conn.execute("INSERT INTO t VALUES (?)", (42,))
# After: fetchall() returns [(42,)]  — auto-committed
```

However, the auto-commit only happens on *clean* exit (no exception). On exception, the context manager rolls back. This distinction matters for the rung-4 Fix exercise. The chapter doesn't mention the rollback-on-exception behaviour at all.

**Fix:** Add one sentence to worked example 3: "If an error happens inside the `with` block, the changes are automatically rolled back — nothing is saved." This sets up correct mental models and is not too advanced.

---

### 10. [MINOR] 7.3 — `datetime.date.today()` call chain not explained

Worked example 1 shows `import datetime; today = datetime.date.today()`. The dot chain is `module.class.classmethod` — a pattern the student hasn't seen before (two dots). A student who has only seen `math.sqrt()` (module.function) will be puzzled by `datetime.date.today()`. No misconception or explanation is flagged.

**Fix:** Add a brief note in the worked example that `datetime` is a module, `date` is a class inside it, and `today()` is a function on that class — three levels of dot notation. Or use `from datetime import date; date.today()` to reduce the chain to one dot.

---

## What's strong

- **Scope discipline in 7.7 is excellent.** The "scope note" explicitly limits SQL to `CREATE`, `INSERT`, `SELECT/WHERE` only, with no `JOIN`, `UPDATE`, or `DELETE`. The chapter capstone reference is correct.
- **Misconceptions coverage is broad and correct** for the core cases: shadowing stdlib names (`random.py`), `random.shuffle()` returns `None`, `commit()` is not optional, `fetchall()` returns tuples. These are the most commonly missed teaching points in beginner Python courses.
- **SQL injection teaching via the `?` placeholder** is the right call for this age group — the Fix exercise (rung 4) that converts f-string formatting to parameterized queries is a genuine safety lesson with lasting value.
- **Through-line cohesion.** The music library data set (song dicts) threads through 7.5, 7.6, and 7.7 naturally, reducing cognitive load and making the capstone challenge feel earned rather than contrived.

---

## Coverage check

| Spine concept | Status |
|---|---|
| `import` — three forms | Well covered (7.1) |
| module as namespace | Well covered (7.1, 7.2) |
| package — conceptual intro | Mentioned in 7.2 misconceptions; thin but scoped correctly |
| `if __name__ == "__main__"` | Well covered (7.2) |
| API / reading docs | Well covered (7.3, 7.4) |
| `str.split/join/strip/replace/find/startswith/endswith` | Well covered (7.5) |
| `open()` / `with` / file modes | Well covered (7.6) |
| `json.dump/load/dumps/loads` | Covered but tuple claim wrong; `json.load(string)` trap missing |
| `sqlite3` basics | Covered; missing-commit trap under-demonstrated; CWD trap entirely absent |
| SQL taste only (no JOIN/UPDATE/DELETE) | Correctly scoped |
