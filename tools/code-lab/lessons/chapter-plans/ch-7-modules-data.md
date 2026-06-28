# Chapter 7 — Modules, Packages & Real Data

## Overview

Chapter 7 is the "unlock the chapter" chapter. Up to here the learner has written
self-contained programs; now they learn that most real Python code is built from
pieces written by other people, loaded with `import`. The chapter's through-line
is a single idea stated plainly in the hook: *you don't have to build everything
from scratch*. By the end the learner can import standard-library modules, write
and import their own module, read a documentation page independently, extract
structured facts from raw text, persist data as JSON files, and run basic SQL
queries — giving them the toolkit for the capstone projects in Ch.11.

**Ch.6-to-Ch.7 transition.** After OOP, a student might expect more objects. This
chapter pivots to `import math` without a bridge — which risks confusion. Open
the chapter with one paragraph: "You now know how to organise code into functions
(Ch.3) and objects (Ch.6). Python itself has thousands of solved problems waiting.
This chapter is where you learn to use what others have already built."

Rungs 1–6 (Predict → Modify → Fix → Complete → Write). Strands: core, words, data.
Sits between Ch.6 (OOP) and Real Tools I.

**What the learner can DO by the end:**
- Write `import math` / `from random import choice` / `import json as j` and
  explain the difference.
- Put functions in a separate `.py` file and `import` it.
- Read a Python docs page and extract a function's signature, parameters, and
  return value.
- Extract structured records from messy text using `str.replace()`, `str.find()`, `str.startswith()` / `str.endswith()` (new), `str.strip()` (recalled from Ch.1), and `str.split()` (recalled from Ch.1).
- Read and write plain text files and JSON files using the `with` statement.
- Store and query records in an SQLite table with `sqlite3`.

---

## Concepts owned (keywords)

- `import` — three forms (`import X`, `from X import Y`, `import X as Z`)
- module — a `.py` file treated as a named namespace
- package — a folder of modules (introduced conceptually only)
- `if __name__ == "__main__"` — guards a module against running on import
- API — using a function without reading its source
- reading documentation — signature, parameters, return value, examples
- `str.replace()` / `str.find()` / `str.startswith()` / `str.endswith()` —
  deeper data-wrangling string methods owned here. (`str.strip()`,
  `str.lower()`, `str.upper()`, `str.split()`, and `str.join()` are owned
  by Ch.1; Ch.7 recalls and applies them.)
- `open()` / `with` statement / file modes (`'r'`, `'w'`, `'a'`)
- `json.dump()` / `json.load()` / `json.dumps()` / `json.loads()`
- `sqlite3` — `connect`, `cursor`, `execute`, `fetchall`, `commit`, `close`
- SQL keywords: `CREATE TABLE`, `INSERT INTO`, `SELECT … WHERE`

---

## Concept map & dependencies

```
7.1 import (std lib: math, random, os)
  │
  ├─► 7.2 Writing a module (split own code; __name__ guard)
  │         │
  │         └─► 7.3 Using a library/API (call without reading source)
  │                   │
  │                   └─► 7.4 Reading documentation (extract from docs page)
  │
  └─► 7.5 Facts from messy text (deeper str methods: replace/find/startswith/endswith; strip/split/join recalled from Ch.1)
              │
              └─► 7.6 Saving & Loading (open/with, json.dump/load, personal music lib)
                        │
                        └─► 7.7 A taste of SQL (sqlite3: create/insert/select)
```

**Recalled from earlier chapters (spiral weaving — do not re-teach):**

> **Authoring dependency note (Blocker B4):** `str.split(sep)` with a custom
> separator, `str.join()`, and f-strings are NOT confirmed as taught in c1.js–c3.js
> (c1.js teaches no-arg `split()` only; `join` appears as a Codex note without an
> exercise; f-strings appear once as a code comment in c2.js without formal
> introduction). Authoring of 7.5, 7.6, and 7.7 is blocked until one of these
> resolutions is confirmed by the chapter-chain author:
> (a) `str.split(sep)`, `str.join()`, and f-strings are formally introduced and
> exercised in Ch.2, Ch.4, or Ch.5 (not yet written) — update the "Recalled from"
> attribution to name the correct chapter; or
> (b) introduce them formally in the first chapter that needs them (Ch.4 or Ch.5),
> and mark Ch.7 as recalling them from that chapter.
> Until resolved, exercises in 7.5–7.7 must avoid relying on `str.join()` and
> f-strings as prior knowledge, and `str.split(sep)` must be explicitly shown (not
> merely assumed) in each worked example that first uses it.

- Ch.1: strings (including no-arg `str.split()`, indexing, slicing, `str.strip()`,
  `str.lower()`, `str.upper()`), `print`, variables, `input()`, type conversions,
  immutability. (**`str.split(sep)` with a custom separator and `str.join()` are
  NOT confirmed in c1.js — see authoring dependency note above.**)
- Ch.2: `for` loops, `if/elif/else`, `while`, `try/except` (Ch.2 owns this);
  f-strings used in one worked example but not formally introduced — see note above
- Ch.3: `def`, parameters, `return`, docstrings, scope, default arguments
- Ch.4: lists, dicts, indexing, `.append()`, looping over collections
- Ch.5: decomposition, naming, DRY, debugging protocol (apply when
  `ModuleNotFoundError` appears — it is a structural, diagnosable error)
- Ch.6: classes, instances, `AttributeError`; the `datetime.date` object in 7.3
  is an object like the `Pet` class from Ch.6 (name this explicitly as a spiral
  connection)

---

## Lessons

### 7.1 — `import` (Hook)
**Arc role:** Hook — run real code that uses the standard library; motivates the
whole chapter. **Strand:** core. **Rungs:** 3–5.

**Warm-up:** "Write the call that runs `print` with two arguments: the string
`"Score:"` and the number `42`." (Recalls Ch.1 print + Ch.3 function calls.)

**Namespace mental model (teach before any worked examples):** A module is like a
separate room full of names. `import math` puts a key called `math` in your room,
pointing at that room — so `math.sqrt` means "go to the math room, grab `sqrt`."
`from math import sqrt` carries one name out of that room into your own room
directly. The difference matters: after `from math import sqrt`, if you later write
`sqrt = "surprise"` in your file, you have overwritten the function. `math.sqrt`
still works because the room is unchanged; only your local binding changed.

**Concepts:** `import math`, `from math import sqrt`, `import random as r`;
the module as a namespace (dot notation); `dir(math)` to peek inside; `help()`.

**Worked-example ideas (easy → harder):**
1. `import math; print(math.pi, math.sqrt(144))` — see a result immediately; dot
   notation explained as "name in the math room." (Note: `math.sqrt(144)`
   returns `12.0`, a float — `math.sqrt` always returns float even when the
   answer is a whole number. A good moment to recall Ch.1 type lesson: every
   function returns a specific type.)
2. `from random import randint, choice; print(choice(["rock","paper","scissors"]))`
   — picks one item; reuses Ch.4 lists.
3. `import os; print(os.getcwd())` — a module that isn't math; shows the std lib
   is vast; reuses the idea that functions return values (Ch.3).

**Note on `dir(math)`:** `dir(math)` floods output with dunder names before
any user-facing names appear. Show the filtered form instead:
`[name for name in dir(math) if not name.startswith("_")]` — give this as a
read-only one-liner with the note: "Don't worry how this filter works yet — you'll
learn it in Ch.8." Alternatively, use a curated list of five useful names.

**Exercise ideas:**
- (Modify, rung 3) Change `math.sqrt` to `math.ceil` and predict the new output.
- (Complete, rung 5) Given a stub that imports `random`, complete a "roll two
  dice and print their sum" program.
- (Fix, rung 4) `from math import Sqrt` → `ImportError: cannot import name 'Sqrt' from 'math'`; spot the casing mistake.
- (Complete, rung 5) Call `help(math.gcd)` to find what it does, then use it to
  find the GCD of 48 and 18. (Bridges 7.1 to 7.4 organically.)

**Misconceptions:** "import gives me all of Python" — no, you choose what to
bring in. "`from X import Y` copies the code into my file" — it binds a name.
"I can use `sqrt` without `import math`" — `NameError`. "Python re-runs the
module file every time I import it" — Python caches after the first load; repeated
imports return the cached module.

**Error classes:** `ModuleNotFoundError`, `ImportError` (wrong name or casing),
`AttributeError` (e.g. `math.Sqrt`).

**Recalls:** Ch.3 functions (you're calling functions from another file), Ch.4
lists (`choice` on a list).

---

### 7.2 — Writing a Module
**Arc role:** Concept lesson 1. **Strand:** core. **Rungs:** 5–6.

**Warm-up:** "What does `return` give back from a function?" (Recalls Ch.3.)

**Concepts:** a `.py` file *is* a module; `import mymodule`; dot access to its
functions; `if __name__ == "__main__"` guard and why it matters; naming
collision (don't call your file `math.py`).

**Dual-role mental model for `__name__` (teach before the guard):** Python runs
every top-level statement in a `.py` file on import — including `def` statements
(which create function objects but do not call them). The variable `__name__` is
a string Python sets to `"__main__"` when a file is run directly, and to the
module's name (e.g. `"greetings"`) when it is imported. Show this with a
`print(__name__)` call inside the module file: run it directly → `__main__`; import
it from another script → `greetings`. Once the student has seen that, the guard
`if __name__ == "__main__":` becomes a logical consequence ("only run the test code
when I'm the main program"), not a ritual.

Even `def hello():` at module level is a top-level statement Python runs on
import — it just creates the function without calling it. That is why only the
test code (which calls the function) needs the guard; the definitions are safe.

**Worked-example ideas:**
1. Two files: `greetings.py` (defines `hello(name)` with a docstring, per Ch.3
   discipline) and a main script that does `import greetings; greetings.hello("Ada")`.
   Run both. All functions in the module should carry docstrings — this reinforces
   Ch.3 without extra explanation. Anchor a Ch.6 spiral here: optionally the
   module exports a `Playlist` class (mirroring Ch.6's `Pet`) so students see that
   modules can hold classes too.
2. Add `print(__name__)` at the module's top level; run the module directly
   (`__main__`), then import it from another file (`greetings`). Let the student
   observe the difference. Then add `if __name__ == "__main__":` as the natural
   fix for keeping test code out of import context.
3. `from greetings import hello` — import one name directly; compare behaviour
   when the module has two functions and you only want one.

**Exercise ideas:**
- (Complete, rung 5) A `converter.py` stub with `def celsius_to_fahrenheit(c):`
  (include a docstring slot to fill in) has a missing formula; complete it and
  import it in a test script.
- (Write, rung 6) Write a `stats.py` module from scratch with `mean(nums)` and
  `maximum(nums)` (each with a docstring); import and call both from a main script.
- (Fix, rung 4) A module named `random.py` shadows the standard library;
  diagnose the `ImportError` / unexpected behaviour and rename the file. (Apply
  the Ch.5 debugging protocol: read the traceback, identify the module path,
  rename.)

**Misconceptions:** "The module runs when I import it" — the `__name__` guard
prevents test code from running, but `def` statements still execute (they just
create functions without calling them). "I need `__init__` to make a module" —
that's for packages, not single files. Shadowing a built-in name (the `random.py`
trap). "Python re-runs the module every import" — it doesn't; cached after first.

**Error classes:** `ModuleNotFoundError` (wrong path or name), `ImportError`,
`AttributeError` (called before import or wrong dot access).

**Recalls:** Ch.3 `def`, `return`, and docstrings; Ch.3 scope (module has its own
namespace); Ch.5 debugging protocol; Ch.6 classes (a module can export a class).

---

### 7.3 — Using a Library (an API)
**Arc role:** Concept lesson 2 (entry point for the api/library sub-strand).
**Strand:** core. **Rungs:** 3–5.

**Ramp note:** 7.3 (rungs 3–5) follows 7.2 (rungs 5–6). This dip is intentional
and sound pedagogy: the student uses a library (rung 3–5) before being asked to
read its documentation (rung 1–4 in 7.4) or write their own strand code (rungs
5–6 in 7.5–7.6). 7.3 resets the ramp for the api/library sub-strand.

**Warm-up:** "What does a function return if it has no return statement?"
(Recalls Ch.3 return values before the lesson pivots to calling library
functions whose return values are part of the API contract.)

**Concepts:** API as a contract — what goes in, what comes out, what happens
inside is irrelevant; the `datetime` module as a concrete example; `math` and
`random` re-visited through an API lens; composing library calls.

**Worked-example ideas:**
1. `from datetime import date; today = date.today(); print(today.year, today.month, today.day)` — using an object from a library without knowing how it works. (Note: `datetime` is a module; `date` is a class inside it; `today()` is a method on that class. Using `from datetime import date` keeps the call to one dot and avoids the confusing `datetime.date.today()` three-level chain.) **Spiral connection:** "Notice `today` is an object — just like the `Pet` you built in Ch.6. The difference is that the `date` class was written by someone else and lives in Python's standard library."
2. Use `random.shuffle(lst)` (in-place, returns `None`) vs. `list.sort()` (also
   in-place, returns `None`) vs. `sorted(lst)` (returns a new list, does not
   touch the original) — this is the correct three-way contrast. **Python design
   rationale:** in-place operations (`shuffle`, `sort`) avoid copying the entire
   list in memory, which matters for large datasets; `sorted()` is the
   complementary function for when you need a non-destructive copy. Reuses Ch.4
   lists.
3. Compose `math.floor(math.sqrt(n))` — chain library calls with familiar
   arithmetic (not `log2`, which is not 11-year-old math); reuses Ch.3 function
   composition idea.

**Exercise ideas:**
- (Modify, rung 3) Given working `date.today()` code, change it to print how many
  days until the learner's next birthday.
- (Complete, rung 5) A stub that shuffles a playlist list (from Ch.4); complete
  the shuffle + print step.
- (Fix, rung 4) `result = random.shuffle(["a","b","c"]); print(result)` prints
  `None` — explain and fix by printing the list directly.

**Misconceptions:** "I need to read the source to use a library" — the API
contract is enough. "`random.shuffle()` returns the shuffled list" — it returns
`None` and mutates in place. "`sorted()` mutates the original list" — it
returns a new list; the original is untouched.

**Error classes:** `TypeError` (wrong arg type), `AttributeError` (misspelled
method name).

**Recalls:** Ch.3 return values and function composition; Ch.4 lists and in-place
mutation; Ch.6 objects (spiral connection to `datetime.date`).

---

### 7.4 — Reading Documentation
**Arc role:** Concept lesson 3. **Strand:** core. **Rungs:** 1–4.
(Reading-comprehension rungs, not coding rungs — this lesson's rung scale measures
reading skill, not code-writing depth. It does not count against the coding-ramp
monotonicity requirement. The intentional lighter cognitive load here is sound
pedagogy: students consolidate API understanding before the writing-heavy 7.5–7.7.)

**Warm-up:** "Write the three forms of `import` you learned in 7.1." (Retrieval
of chapter-core syntax before pivoting to documentation.)

**Motivating scenario (open with this, not with docs anatomy):** "You want to
shuffle your playlist, but you wonder: does `random` have anything else useful?
You could search the internet — or you could read the docs directly. Let's see
how." This seeds the question that the lesson answers, making documentation
reading feel purposeful rather than procedural.

**Concepts:** anatomy of a Python docs page — function signature, parameters
table, return value, raises, examples section; `help()` in the REPL; reading a
one-liner signature like `str.split(sep=None, maxsplit=-1)` and decoding default
arguments; when to look at source vs. docs.

**Worked-example ideas:**
1. Walk through the `str.split` docs page together — label signature, each param,
   return type, and one example. Show `help(str.split)` gives the same. (Bridge
   from 7.1: the student already used `help()` there on `math.gcd`; now they see
   the full docs anatomy behind it.)
2. Read the `json.dumps` docs page; identify that `indent` is optional and what
   it does; then run with and without `indent=2` to confirm.
3. Read `random.sample` — understand `population` and `k`; spot that it returns a
   *new* list (unlike `shuffle`). Predict the output before running.

**Exercise ideas:**
- (Predict, rung 1) Given the `math.ceil` docs signature, predict what
  `math.ceil(4.1)` and `math.ceil(-4.1)` return *before* running.
- (Modify, rung 3) Given working `str.split()` code, use the docs to add the
  `maxsplit=1` argument and observe the difference.
- (Fix, rung 4) Code that calls `random.sample("hello", 10)` crashes — read the
  docs error message (`ValueError: Sample larger than population or is negative`)
  and the `ValueError` to understand the constraint and fix.

**Misconceptions:** "Parameters with = in the docs are required" — those are
default values; the argument is optional. "The docs are for experts, not me" —
the examples section is the entry point.

**Error classes:** `ValueError` (invalid argument per docs), `TypeError` (wrong
type for parameter).

**Recalls:** Ch.3 default arguments; Ch.1 string basics; 7.1 `help()` (now used
in a full documentation-anatomy context).

---

### 7.5 — Facts from Messy Text
**Arc role:** Strand-application (words). **Rungs:** 5–6.

**Warm-up:** "Call `str.split()` on `'a b c'` with no arguments. What does it
return?" (Recalls Ch.1 no-arg split before the lesson introduces split-with-sep.)

**Authoring gate — list comprehension:** Do NOT include `[p.strip() for p in ...]`
in any student-visible code block, worked example, or prose. Comprehensions are
Ch.8. This is an authoring-only note for the teacher explanation of the inner-space
trap. The student exercise must use a plain loop with an explicit strip call.

**Concepts (newly owned here):** `str.replace(old, new)`; `str.find(sub)`;
`str.startswith()` / `str.endswith()`; building a list of structured records
from raw lines; the pattern "read line → split → clean → store".
**Recalled from Ch.1:** `str.strip()` (remove whitespace); `str.lower()`;
`str.upper()`; string immutability.
**Dependency note:** `str.split(sep)` with a custom separator and `str.join()`
must be confirmed taught in an earlier chapter before this lesson can treat them
as recalls — see the authoring dependency note at the top of this document.
Until confirmed, show `split(": ")` explicitly in every worked example that first
uses it and label it "you saw no-arg split in Ch.1; here we add a separator."

**Project through-line:** a game-log extractor — given a multi-line string like
`"Alice: 1450\nBob: 882\nAlice: 2010\n"`, extract player names and scores,
compute per-player totals using a dict (Ch.4 recall), and print a ranked
leaderboard.

**Worked-example ideas:**
1. `"Alice: 1450".split(": ")` → `["Alice", "1450"]`; index `[0]` to get name
   and `[1]` to get score string; `int()` to convert. Simple and complete. The
   two-field format means `[0]` and `[1]` are the only valid indices.
2. A raw line with trailing spaces: `"  Bob : 882  ".strip().split(":")` — shows
   why outer `strip()` matters before `split()`. **Inner-space trap:** the result
   is `['Bob ', ' 882']` — each part still has leading/trailing whitespace. Show
   that `int(" 882")` works silently, but `'Bob ' == 'Bob'` is `False` — string
   comparisons against player names will fail unless each part is also stripped.
   Fix using a plain loop (not a comprehension — Ch.8 scope):
   ```python
   parts = line.strip().split(":")
   name = parts[0].strip()
   score = parts[1].strip()
   ```
   Alternatively, use `split(": ")` with the space included (as in example 1) to
   avoid inner spaces entirely.
3. Accumulate scores into a dict keyed by player name, handling the case where the
   key already exists vs. first occurrence; reuses Ch.4 dicts. **Spiral recall:**
   show both the conditional guard approach AND the `try/except` approach for the
   non-numeric string `ValueError` (recalling Ch.2 `try/except`) — let the student
   choose which to use in the exercise.

**Exercise ideas:**
- (Complete, rung 5) A stub that reads the game log line-by-line (loop over a
  list of strings) — complete the split-and-accumulate body; the scaffold provides
  the dict and the loop.
- (Write, rung 6) Given a CSV-like string of song records
  (`"title,artist,year\nBlue,Eiffel 65,1998\n…"`), write a function `parse_songs`
  from scratch that returns a list of dicts.
- (Fix, rung 4) `line.split(": ")[1]` raises `IndexError` when a blank line
  (which contains no `": "`) is encountered — diagnose and add a guard. (Note:
  the game-log data uses two fields, so the valid index is `[1]`, not `[2]`. Show
  both a conditional guard and the `try/except` alternative so the student sees
  both patterns from Ch.2.)

**Misconceptions:** "`split()` with no args and `split(' ')` do the same thing" —
no-arg split handles multiple consecutive spaces and strips leading/trailing;
`split(' ')` gives empty strings. `strip()` changes the string — no, it returns a
new string (immutability, Ch.1 recall).

**Error classes:** `IndexError` (split didn't produce enough parts), `ValueError`
(int conversion of non-numeric string).

**Recalls:** Ch.1 strings and immutability; Ch.2 loops and `try/except`; Ch.4
dicts (accumulate with a key check).

---

### 7.6 — Saving & Loading (Files + JSON)
**Arc role:** Strand-application (data). **Rungs:** 5–6.

**Warm-up:** "What is the difference between a Python list and a JSON file?"
(Primes the student to think about the text-vs-object distinction before the
lesson formally teaches it.)

**Concepts:** `open(path, mode)` with `'r'`/`'w'`/`'a'`; `with` as context
manager (guarantees close); `.read()`, `.readlines()`, iterating line by line;
`.write()` (must convert non-strings); `json.dump(obj, f)` / `json.load(f)` for
files; `json.dumps(obj)` / `json.loads(s)` for strings; JSON-supported types
(dict, list, str, int, float, bool, None); round-trip a Python dict through JSON.

**Project through-line:** a personal music library — a list of song dicts
`{"title": …, "artist": …, "year": …}` — that can be saved to a `.json` file,
loaded back, and searched by artist or year.

**Worked-example ideas:**
1. Write a short text file with `open("notes.txt", "w")` + `with`; read it back
   with `open("notes.txt", "r")`. Show the `with` block closes automatically.
   **CWD note:** `"notes.txt"` is relative to the current working directory when
   the script runs — not necessarily the folder the script lives in. If a student
   double-clicks or runs from the wrong folder, `open("notes.txt", "r")` raises
   `FileNotFoundError` even though the file exists. Safe idiom:
   `pathlib.Path(__file__).parent / "notes.txt"` — introduce as a ready-to-use
   pattern (not a concept lesson). Demystify in one sentence: "`__file__` is the
   full path to the script being run; `.parent` is the folder it lives in; `/`
   here joins two path pieces — the `Path` object repurposes the slash character
   for this."
2. `json.dumps({"title": "Blue", "year": 1998}, indent=2)` — see the formatted
   string; then `json.loads(...)` to get the dict back. No file yet.
3. Full round-trip: a list of song dicts → `json.dump` to file → `json.load`
   from file → filter by artist using a plain `for` loop + `if` (Ch.2/4 recall)
   → collect matches into a list → print. Example:
   ```python
   matches = []
   for song in library:
       if song["artist"] == target:
           matches.append(song)
   print(matches)
   ```
   (No list comprehensions — those are Ch.8.)

**Exercise ideas:**
- (Complete, rung 5) A stub with the music-library list defined; complete the
  `save_library(songs, path)` and `load_library(path)` functions using `json.dump`
  / `json.load` inside `with` blocks.
- (Write, rung 6) Write a `search_by_year(songs, year)` function from scratch;
  call it on the loaded library; print results.
- (Fix, rung 4) `f.write(42)` → `TypeError: write() argument must be str` — fix
  by converting to string or switching to `json.dump`.
- (Fix, rung 4) `json.load('{"title": "Blue"}')` → `AttributeError: 'str'
  object has no attribute 'read'` — explain that `json.load` expects an open file
  object, not a string; fix by using `json.loads(s)` for strings.

**Misconceptions:**
- "JSON is the same as a Python dict" — JSON is a text format; you need
  `json.load`/`dump` to convert.
- "I don't need `with`; `close()` is optional" — omitting it risks data loss on
  crash.
- "Sets and custom objects can be serialized to JSON" — they cannot without extra
  work; use lists or dicts instead.
- "If you put a tuple in and load it back, you get a tuple." — **Lead with the
  consequence:** if you put a tuple in and load it back, you get a list. For
  example: `json.loads(json.dumps((1,2,3)))` → `[1, 2, 3]`, type is `list`.
  Round-trip does not preserve the tuple type. Fix with `tuple(json.loads(s))` if
  you need the tuple type back. (Verified with Python 3.)
- "`json.load(string)` and `json.loads(string)` do the same thing" — `json.load`
  expects an open file object; passing a string raises `AttributeError: 'str'
  object has no attribute 'read'`. Use `json.loads` for strings.
- "`open('notes.txt')` always finds the file next to my script" — the path is
  relative to the CWD when the script runs, not the script's folder.

**Error classes:** `FileNotFoundError` (mode `'r'` on missing file, or wrong CWD),
`json.JSONDecodeError` (malformed JSON), `TypeError` (non-serializable object or
`write()` non-string), `AttributeError` (`json.load` called with a string instead
of a file object).

**Recalls:** Ch.4 dicts and lists, Ch.3 functions, Ch.2 loops, Ch.1 type
conversion.

---

### 7.7 — A Taste of SQL
**Arc role:** Concept lesson (data). **Rungs:** 3–5.
(Resets the ramp for the SQL sub-strand. 7.7 (rungs 3–5) follows 7.6 (rungs 5–6);
this dip is intentional — SQL is a new formal language requiring its own ramp from
predict-and-read up to completing INSERT and WHERE statements.)

**Scope note — cognitive load (M3):** ONE lesson; minimum-viable core only.
Required content: `connect`, `cursor.execute`, `fetchall`, `commit`, `close`,
`CREATE TABLE IF NOT EXISTS`, `INSERT INTO`, `SELECT *`.
Going Deeper sidebar (not required): `SELECT … WHERE` with `?` placeholder;
`with sqlite3.connect(…) as conn:` context manager form; `row_factory`.
The SQL injection Fix exercise (rung 4) is the ONE required advanced item — it
teaches a safety principle that must not be skipped.
No `JOIN`, no `UPDATE`, no `DELETE`. The capstone (Ch.11.4) goes deeper.

**Warm-up:** "What is the difference between a Python list and a JSON file?" *(If
the 7.6 warm-up already used this, replace with: "What does `json.load()` return
when you load a list of dicts from a file?")* (Primes the why-database discussion.)

**Concepts (required core):** why a database (vs. a JSON file) — many records,
fast search, structured schema; `sqlite3.connect(path)` creates or opens a file;
explicit cursor pattern: `cur = conn.cursor()`, `cur.execute(sql)`,
`cur.fetchall()`; `conn.commit()`, `conn.close()`;
`CREATE TABLE IF NOT EXISTS` — and what happens without `IF NOT EXISTS` (the script
crashes on a second run with `sqlite3.OperationalError: table songs already exists`;
show this anti-pattern first, then the fix); `INSERT INTO … VALUES (?, ?)`.

**Use the explicit cursor pattern throughout 7.7.** The concepts section names
`conn.cursor(); cursor.execute()`; the worked examples must match — do NOT switch
to `conn.execute()` shortcut anywhere in this lesson. `fetchall()` requires a
cursor anyway, so the explicit form is the only self-consistent choice.

**DDL auto-commit disclosure:** `CREATE TABLE` persists even without an explicit
`conn.commit()` in Python's sqlite3 default isolation mode, while `INSERT` does
not. One sentence is enough: "Python's sqlite3 automatically commits structural
changes like `CREATE TABLE` but not data changes like `INSERT` — you must call
`conn.commit()` yourself after inserting rows."

**Worked-example ideas:**
1. Create a `songs.db` with a `songs` table (id INTEGER, title TEXT, artist TEXT,
   year INTEGER) using `CREATE TABLE IF NOT EXISTS`; show what happens on a second
   run *without* `IF NOT EXISTS` (`OperationalError`) before introducing the fix.
   Insert two rows; `SELECT *` using the explicit cursor and print rows. Minimal —
   show the whole cycle in ~12 lines. This is the required rung-1 predict exercise:
   "Given this full CREATE + INSERT + SELECT block, predict what `fetchall()`
   returns — including the tuple structure." **Placeholder note:** worked examples
   1 and 3 use hardcoded literal `VALUES` for brevity. Add a parenthetical after
   the first INSERT: "These values are hardcoded for clarity — in the Fix exercise
   below you will see why `?` is the safe pattern when values come from the user."
   This avoids students cargo-culting the literal form before the `?` teaching lands.
2. **The missing-commit trap** — this demo MUST follow example 1 in the same
   session (or explicitly state "the `songs` table was already created in example 1
   above"). Without the table, `INSERT` raises `OperationalError` before the commit
   trap can be demonstrated. Sequence:
   ```python
   import sqlite3

   # Setup (table already created above — or create it here first)
   conn = sqlite3.connect("songs.db")
   cur = conn.cursor()
   cur.execute("CREATE TABLE IF NOT EXISTS songs "
               "(id INTEGER, title TEXT, artist TEXT, year INTEGER)")
   conn.commit()  # commit the table creation (happens automatically for DDL,
                  # but explicit here for clarity)
   conn.close()

   # BUG: insert without commit
   conn = sqlite3.connect("songs.db")
   cur = conn.cursor()
   cur.execute("INSERT INTO songs VALUES (1, 'Blue', 'Eiffel 65', 1998)")
   conn.close()  # no commit — row is rolled back, nothing saved

   # Verify: row is gone
   conn = sqlite3.connect("songs.db")
   cur = conn.cursor()
   cur.execute("SELECT * FROM songs")
   print(cur.fetchall())  # []
   conn.close()

   # FIX: commit before close
   conn = sqlite3.connect("songs.db")
   cur = conn.cursor()
   cur.execute("INSERT INTO songs VALUES (1, 'Blue', 'Eiffel 65', 1998)")
   conn.commit()   # now the row persists
   conn.close()
   ```
3. Insert several rows from the music-library list built in 7.6 (spiral recall);
   run `SELECT *` and print `fetchall` to show the full library. (Put `SELECT WHERE`
   in the Going Deeper sidebar and the Modify exercise, not in the required core.)

**Going Deeper sidebar (optional, not gated):**
- `SELECT * FROM songs WHERE artist = ?` with a `?` parameter; `cur.fetchall()`.
- `with sqlite3.connect(…) as conn:` context manager form — auto-commits on clean
  exit (no need to call `conn.commit()` explicitly inside the `with` block); rolls
  back on exception; **does NOT close the connection** on exit. Unlike `with open(…)`,
  which guarantees the file is closed when the block exits, the sqlite3 context
  manager leaves the connection open — `conn.execute('SELECT 1')` still works after
  the `with` block. Call `conn.close()` yourself after the `with` block when you
  are done with the database. (Verified on Python 3.)

**Exercise ideas:**
- (Predict, rung 1) Given a complete CREATE + INSERT + SELECT block (no stub),
  predict what `fetchall()` returns — including the tuple structure and field order.
  This is the required rung-1 exercise for a new formal language.
- (Modify, rung 3) Given the working songs-DB code, change the `WHERE` clause in
  the Going Deeper sidebar to filter by year instead of artist.
- (Complete, rung 5) A stub that opens a `high_scores.db`, creates a `scores`
  table, and has an `add_score(name, score)` function — complete the `INSERT`
  statement with `?` placeholders.
- (Fix, rung 4 — required advanced item) Code that uses `f"…{name}…"` string
  formatting inside `execute()` instead of `?` placeholders — explain the SQL
  injection risk and fix to use `(sql, (name,))`. Mark as required.

**Misconceptions:** "`commit()` is optional" — without it, `INSERT`s are rolled
back on close (but `CREATE TABLE` persists without commit — DDL is different).
"`fetchall()` returns dicts" — it returns a list of tuples; use index or
`row_factory` for names. "SQLite is a server" — it's a local file; no server
needed. "Inside a `with sqlite3.connect()` block I still need `conn.commit()`" —
the context manager commits automatically on clean exit; calling commit again is
harmless but unnecessary.

**Error classes:** `sqlite3.OperationalError` (syntax error, wrong table name, or
table already exists without `IF NOT EXISTS`), `sqlite3.IntegrityError`
(constraint violation), `sqlite3.ProgrammingError` (wrong number of `?` bindings).

**Recalls:** Ch.4 dicts and list iteration, 7.6 music library (same data set),
Ch.3 functions.

---

### Chapter Challenge
**Arc role:** Mixed-strand review set. 8 exercises, easy → hard.

1. (Modify, rung 3) Change an `import math` snippet to use `from math import …`
   form; check it still works.
2. (Modify, rung 3) Use the `datetime` docs page to look up `date.today()` and
   print the current day of the week. **(Use the docs — `date.weekday()` or
   `date.strftime("%A")` was not shown in any lesson. The point is to find and
   apply an undiscovered method from docs.)**
3. (Fix, rung 4) A module named `json.py` shadows the standard library; diagnose
   and fix.
4. (Fix, rung 4) A `split`-based extractor has an `IndexError` on blank lines;
   add a guard (conditional or `try/except` — either is valid).
5. (Complete, rung 5) Complete a `load_library` / `save_library` round-trip (JSON)
   — given the function stubs.
6. (Complete, rung 5) Given a `scores` table creation stub, complete the `INSERT`
   and a `SELECT WHERE score > 1000` query using `?` placeholders.
7. (Write, rung 6) Write a `top_artists.py` module from scratch: a function that
   takes a list of song dicts and returns the artist who appears most often; import
   and test it.
8. **(Write, rung 6 — hardest exercise in the chapter; this is the first exercise
   that combines every strand at once.)** Baseline: build a tiny CLI: load the
   music JSON library, prompt the user for an artist name (`input()`), query the
   SQLite DB for all songs by that artist (the DB must be pre-populated from 7.7
   or from a setup step in the exercise scaffold — specify this clearly in the
   exercise prompt), and print them. Challenge extension: re-do exercise 8 with a
   data set of your own choice (a book list, a game high-score table, a meal
   planner). The checker verifies structural properties (a working JSON load, a
   working DB query) regardless of the data set — creative ownership changes
   entirely at zero cost to concept coverage.

---

### Chapter Quiz (gate)
Must pass before Ch.8 (Writing Real Programs in Python) unlocks.

**Must-pass concepts:**
- Predict the output of `import math; print(math.floor(3.9))` (tests `import` +
  dot access).
- Identify the error in `from math import Floor` (ImportError / casing).
- Short write: what does `if __name__ == "__main__":` do and why?
- Predict: does `random.shuffle(lst)` return the shuffled list? (returns `None`)
- Fill-in: complete `"Alice: 1450".split(___)` to get `["Alice", "1450"]`.
- Multiple-choice: which Python types can be stored in a JSON file? (dict, list,
  str, int, float, bool, None — not sets or custom objects).
- Short write: why use `?` placeholders in `sqlite3.execute()` instead of
  f-string formatting?

---

## Progression / difficulty ramp

| Lesson | Dominant rung | Write-from-scratch? | Ramp note |
|--------|--------------|---------------------|-----------|
| 7.1    | Modify / Fix | No — modify examples | Coding ramp starts here |
| 7.2    | Complete / Write | Yes (the module file itself) | Ramp continues |
| 7.3    | Modify / Complete | No | **Sub-strand reset:** 7.3 dips after 7.2 — intentional; students USE a library before they READ its docs (7.4). Sound pedagogy. |
| 7.4    | Predict / Modify | No — reading, not writing | **Reading-comprehension rungs** — separate scale from coding rungs; does not count against the coding ramp. |
| 7.5    | Complete / Write | Yes (parse function) | Coding ramp resumes |
| 7.6    | Complete / Write | Yes (save/load/search) | Ramp continues |
| 7.7    | Predict / Modify / Complete | Partially (INSERT stubs) | **SQL sub-strand reset:** 7.7 dips after 7.6 — intentional; SQL is a new formal language with its own ramp from predict through complete. Not a coding regression. |
| Challenge | Modify → Write | Full write-from-scratch in exercises 7–8 | |

Exercises 7–8 of the Challenge are the first fully open-ended programs that
combine multiple chapter concepts — the intended "can they do this alone?" test.

---

## Misconceptions & error classes (chapter-wide)

### Misconceptions
- `import` re-runs the file every time it is imported — Python caches after first
  load.
- If you do `from math import sqrt`, then later write `sqrt = "surprise"` in the
  same file, you've overwritten the function. Use `math.sqrt` if you need the
  original to stay reachable.
- Writing a module named after a stdlib module (`random.py`, `math.py`, `json.py`)
  is fine — it shadows and breaks the real one.
- `random.shuffle()` returns the shuffled list — it returns `None` and mutates
  in place. Use `sorted()` when you need a non-destructive copy that returns a
  new list. `list.sort()` is the other in-place counterpart (also returns `None`).
- JSON and Python dicts are the same format — JSON is a *text* format; round-trip
  requires `json.dump`/`load`.
- `str.split(' ')` and `str.split()` behave identically — no-arg split normalizes
  whitespace.
- `strip()` modifies the string in place — strings are immutable; `strip()` returns
  a new string.
- `commit()` is optional for INSERT — without commit, rows are rolled back on
  close. (Exception: `CREATE TABLE` is auto-committed by Python's sqlite3 default
  isolation mode — structural DDL persists without explicit commit, but `INSERT`,
  `UPDATE`, and `DELETE` do not.)
- `cursor.fetchall()` returns dicts — it returns tuples.
- SQLite requires a server — it uses a local file.
- **Tuple JSON round-trip — lead with the consequence, not the false belief.**
  If you put a tuple in and load it back, you get a list:
  `json.loads(json.dumps((1,2,3)))` → `[1, 2, 3]`, type is `list`. The student's
  real runtime surprise is `type(loaded_val) == tuple` being `False`, not "I
  thought tuples couldn't serialize." Fix with `tuple(json.loads(s))` when you
  need the tuple type back. (Verified with Python 3.)
- `json.load(string)` and `json.loads(string)` are the same — `json.load` expects
  an open file object; passing a string raises `AttributeError: 'str' object has no
  attribute 'read'`. Use `json.loads` for strings, `json.load` for file objects.
- `open("notes.txt")` always opens the file next to the script — the path is
  relative to the CWD when the script runs, not the script's folder.
- Inside a `with sqlite3.connect(…) as conn:` block I still need `conn.commit()` —
  the context manager commits automatically on clean exit; explicit `conn.commit()`
  inside the block is unnecessary (though harmless).
- After `with sqlite3.connect(…) as conn:` exits, the connection is closed — unlike
  `with open(…)`, the sqlite3 context manager does **not** close the connection.
  The connection remains open after the `with` block; call `conn.close()` when you
  are done. (Verified: `conn.execute('SELECT 1')` succeeds after the `with` block
  exits.)

### Error classes (chapter additions to the Codex)
- `ModuleNotFoundError` — module name wrong or not installed. **Codex note:**
  `ModuleNotFoundError` is a subclass of `ImportError`
  (`issubclass(ModuleNotFoundError, ImportError)` is `True`). A traceback that
  shows `ImportError` where you expected `ModuleNotFoundError` may be the same
  error reported via the parent class.
- `ImportError` — specific name inside module not found (`from X import Y`); also
  the parent of `ModuleNotFoundError`
- `AttributeError` — dot-accessed name doesn't exist in the module; also raised
  when `json.load(string)` is called with a string instead of a file object
  (`'str' object has no attribute 'read'`)
- `FileNotFoundError` — `open()` in `'r'` mode on a missing file, or wrong CWD
- `json.JSONDecodeError` — malformed JSON string
- `TypeError` (file write) — `f.write(42)` non-string argument
- `sqlite3.OperationalError` — SQL syntax error, missing table, or table already
  exists (when `IF NOT EXISTS` is omitted and the script is run twice)
- `sqlite3.IntegrityError` — constraint violation (e.g. NOT NULL)
- `sqlite3.ProgrammingError` — wrong number of `?` bindings

---

## Chapter Recap (arc component 6 — retrieval set for spiral use)

**Must-stick concepts (5–7 items for Ch.8 warm-up retrieval):**

1. **Three import forms** — `import X`, `from X import Y`, `import X as Z`; the
   namespace model (module as a separate room of names).
2. **`if __name__ == "__main__"`** — Python sets `__name__` to `"__main__"` when
   the file is run directly, and to the module name when imported; the guard keeps
   test code from running on import.
3. **API contract** — call a library function knowing only its inputs and outputs;
   `random.shuffle()` returns `None` and mutates in place; `sorted()` returns a
   new list.
4. **Reading docs** — signature, parameters, default values, return type, raises;
   `help()` gives the same locally.
5. **`with open(…)` + `json.dump`/`json.load`** — the `with` block guarantees
   file close; JSON is a text format, not a Python dict.
6. **sqlite3 commit trap** — `INSERT` rows are rolled back on close without
   `conn.commit()`; `CREATE TABLE` auto-commits (DDL vs. DML distinction).
7. **`?` placeholders in sqlite3** — `cursor.execute(sql, (value,))` is safe;
   f-string formatting inside `execute()` creates SQL injection risk.

**Proposed Ch.8 warm-up questions (pull from here):**
- "Write `from random import choice`. Now call it with a list of three strings.
  What does it return?"
- "What does `if __name__ == '__main__':` prevent from happening when you import
  a module?"
- "Call `help(str.split)` mentally — what is the default value of `sep`?"
- "Write the two lines that save a Python list of dicts to a JSON file."
- "Why is `cursor.execute(f'SELECT * FROM t WHERE name = {n}')` dangerous?
  What is the safe alternative?"
- "After running `conn.execute('INSERT …')` and `conn.close()`, is the row saved?
  Why or why not?"

---

## Sources

- Python official docs — import system tutorial:
  https://docs.python.org/3/tutorial/modules.html (§6, "Modules")
- Python official docs — `str` methods (`split`, `join`, `strip`, `replace`,
  `find`, `startswith`, `endswith`):
  https://docs.python.org/3/library/stdtypes.html#string-methods
- Python official docs — `open()`, file objects, modes:
  https://docs.python.org/3/library/functions.html#open and
  https://docs.python.org/3/tutorial/inputoutput.html (§7.2, "Reading and Writing Files")
- Python official docs — `json` module:
  https://docs.python.org/3/library/json.html
- Python official docs — `sqlite3` module:
  https://docs.python.org/3/library/sqlite3.html
- *Think Python* 2e, Allen Downey — Ch.14 "Files", Ch.15 "Classes and objects"
  (API/encapsulation framing): https://greenteapress.com/thinkpython2
- *How to Think Like a Computer Scientist* (Python 3) — Ch.10 "Files and
  Exceptions", Ch.14 "List Algorithms":
  https://openbookproject.net/thinkcs/python/english3e/
- *Python for Everybody*, Ch.Severance — Ch.7 "Files", Ch.13 "Python and Web
  Services" (JSON), Ch.15 "Using Databases and SQL":
  https://www.py4e.com/html3/
- CSTA K-12 CS Standards, grades 6–8, AP CSP framework (Python subset) — scope
  cross-check confirming `import`, files, and structured data at this level:
  https://www.csteachers.org/page/standards
