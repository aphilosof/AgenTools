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
- Ch.1: strings (including `str.split()`, `str.join()`, indexing, slicing),
  `print`, variables, `input()`, type conversions, immutability
- Ch.2: `for` loops, `if/elif/else`, `while`
- Ch.3: `def`, parameters, `return`, docstrings, scope, default arguments
- Ch.4: lists, dicts, indexing, `.append()`, looping over collections

---

## Lessons

### 7.1 — `import` (Hook)
**Arc role:** Hook — run real code that uses the standard library; motivates the
whole chapter. **Strand:** core. **Rungs:** 3–5.

**Concepts:** `import math`, `from math import sqrt`, `import random as r`;
the module as a namespace (dot notation); `dir(math)` to peek inside; `help()`.

**Worked-example ideas (easy → harder):**
1. `import math; print(math.pi, math.sqrt(144))` — see a result immediately; dot
   notation explained.
2. `from random import randint, choice; print(choice(["rock","paper","scissors"]))`
   — picks one item; reuses Ch.4 lists.
3. `import os; print(os.getcwd())` — a module that isn't math; shows the std lib
   is vast; reuses the idea that functions return values (Ch.3).

**Exercise ideas:**
- (Modify, rung 3) Change `math.sqrt` to `math.ceil` and predict the new output.
- (Complete, rung 5) Given a stub that imports `random`, complete a "roll two
  dice and print their sum" program.
- (Fix, rung 4) `from math import Sqrt` → `ImportError: cannot import name 'Sqrt' from 'math'`; spot the casing mistake.

**Misconceptions:** "import gives me all of Python" — no, you choose what to
bring in. "`from X import Y` copies the code into my file" — it binds a name.
"I can use `sqrt` without `import math`" — `NameError`.

**Error classes:** `ModuleNotFoundError`, `ImportError` (wrong name or casing),
`AttributeError` (e.g. `math.Sqrt`).

**Recalls:** Ch.3 functions (you're calling functions from another file), Ch.4
lists (`choice` on a list).

---

### 7.2 — Writing a Module
**Arc role:** Concept lesson 1. **Strand:** core. **Rungs:** 5–6.

**Concepts:** a `.py` file *is* a module; `import mymodule`; dot access to its
functions; `if __name__ == "__main__"` guard and why it matters; naming
collision (don't call your file `math.py`).

**Worked-example ideas:**
1. Two files: `greetings.py` (defines `hello(name)`) and a main script that does
   `import greetings; greetings.hello("Ada")`. Run both.
2. Show what happens *without* the `__name__` guard — the module's test code runs
   on import; then add the guard to fix it.
3. `from greetings import hello` — import one name directly; compare behaviour
   when the module has two functions and you only want one.

**Exercise ideas:**
- (Complete, rung 5) A `converter.py` stub with `def celsius_to_fahrenheit(c):`
  has a missing formula; complete it and import it in a test script.
- (Write, rung 6) Write a `stats.py` module from scratch with `mean(nums)` and
  `maximum(nums)`; import and call both from a main script.
- (Fix, rung 4) A module named `random.py` shadows the standard library;
  diagnose the `ImportError` / unexpected behaviour and rename the file.

**Misconceptions:** "The module runs when I import it" — the guard prevents this.
"I need `__init__` to make a module" — that's for packages, not single files.
Shadowing a built-in name (the `random.py` trap).

**Error classes:** `ModuleNotFoundError` (wrong path or name), `ImportError`,
`AttributeError` (called before import or wrong dot access).

**Recalls:** Ch.3 `def` and `return`, Ch.3 scope (module has its own namespace).

---

### 7.3 — Using a Library (an API)
**Arc role:** Concept lesson 2. **Strand:** core. **Rungs:** 3–5.

**Concepts:** API as a contract — what goes in, what comes out, what happens
inside is irrelevant; the `datetime` module as a concrete example; `math` and
`random` re-visited through an API lens; composing library calls.

**Worked-example ideas:**
1. `from datetime import date; today = date.today(); print(today.year, today.month, today.day)` — using an object from a library without knowing how it works. (Note: `datetime` is a module; `date` is a class inside it; `today()` is a method on that class. Using `from datetime import date` keeps the call to one dot and avoids the confusing `datetime.date.today()` three-level chain.)
2. Use `random.shuffle(lst)` (in-place) vs. `sorted()` — notice one returns
   `None` (a common API surprise); reuses Ch.4 lists.
3. Compose `math.floor(math.log2(n))` — chain library calls; reuses Ch.3
   function composition idea.

**Exercise ideas:**
- (Modify, rung 3) Given working `date.today()` code, change it to print how many
  days until the learner's next birthday.
- (Complete, rung 5) A stub that shuffles a playlist list (from Ch.4); complete
  the shuffle + print step.
- (Fix, rung 4) `result = random.shuffle(["a","b","c"]); print(result)` prints
  `None` — explain and fix by printing the list directly.

**Misconceptions:** "I need to read the source to use a library" — the API
contract is enough. "`random.shuffle()` returns the shuffled list" — it returns
`None` and mutates in place.

**Error classes:** `TypeError` (wrong arg type), `AttributeError` (misspelled
method name).

**Recalls:** Ch.3 return values, Ch.4 lists and in-place mutation.

---

### 7.4 — Reading Documentation
**Arc role:** Concept lesson 3. **Strand:** core. **Rungs:** 1–4. (Intentionally lighter — reading docs is lower-intensity than writing code.)

**Concepts:** anatomy of a Python docs page — function signature, parameters
table, return value, raises, examples section; `help()` in the REPL; reading a
one-liner signature like `str.split(sep=None, maxsplit=-1)` and decoding default
arguments; when to look at source vs. docs.

**Worked-example ideas:**
1. Walk through the `str.split` docs page together — label signature, each param,
   return type, and one example. Show `help(str.split)` gives the same.
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
  docs error message and the `ValueError` to understand the constraint (`k` cannot
  exceed population length) and fix.

**Misconceptions:** "Parameters with = in the docs are required" — those are
default values; the argument is optional. "The docs are for experts, not me" —
the examples section is the entry point.

**Error classes:** `ValueError` (invalid argument per docs), `TypeError` (wrong
type for parameter).

**Recalls:** Ch.3 default arguments, Ch.1 string basics.

---

### 7.5 — Facts from Messy Text
**Arc role:** Strand-application (words). **Rungs:** 5–6.

**Concepts (newly owned here):** `str.replace(old, new)`; `str.find(sub)`;
`str.startswith()` / `str.endswith()`; building a list of structured records
from raw lines; the pattern "read line → split → clean → store".
**Recalled from Ch.1:** `str.strip()` (remove whitespace); `str.lower()`;
`str.upper()`; `str.split(sep)` with a custom separator; `str.join()`;
string immutability.

**Project through-line:** a game-log extractor — given a multi-line string like
`"Alice: 1450\nBob: 882\nAlice: 2010\n"`, extract player names and scores,
compute per-player totals using a dict (Ch.4 recall), and print a ranked
leaderboard.

**Worked-example ideas:**
1. `"Alice: 1450".split(": ")` → `["Alice", "1450"]`; index to get name and
   score string; `int()` to convert. Simple and complete.
2. A raw line with trailing spaces: `"  Bob : 882  ".strip().split(":")` — shows
   why outer `strip()` matters before `split()`. **Inner-space trap:** the result
   is `['Bob ', ' 882']` — each part still has leading/trailing whitespace. Show
   that `int(" 882")` works silently, but `'Bob ' == 'Bob'` is `False` — string
   comparisons against player names will fail unless each part is also stripped.
   Fix: `[p.strip() for p in line.strip().split(":")]` — or use `split(": ")` with
   the space included, as in example 1, to avoid inner spaces entirely. (Note: the
   `for` comprehension here is shown only as a one-liner shorthand in teacher
   notes; the student exercise uses a plain loop, per Ch.8 scope.)
3. Accumulate scores into a dict keyed by player name, handling the case where the
   key already exists vs. first occurrence; reuses Ch.4 dicts.

**Exercise ideas:**
- (Complete, rung 5) A stub that reads the game log line-by-line (loop over a
  list of strings) — complete the split-and-accumulate body; the scaffold provides
  the dict and the loop.
- (Write, rung 6) Given a CSV-like string of song records
  (`"title,artist,year\nBlue,Eiffel 65,1998\n…"`), write a function `parse_songs`
  from scratch that returns a list of dicts.
- (Fix, rung 4) `line.split(": ")[2]` → `IndexError` — a line that doesn't
  contain `": "` causes an unexpected split; diagnose and add a guard.

**Misconceptions:** "`split()` with no args and `split(' ')` do the same thing" —
no-arg split handles multiple consecutive spaces and strips leading/trailing;
`split(' ')` gives empty strings. `strip()` changes the string — no, it returns a
new string (immutability, Ch.1 recall).

**Error classes:** `IndexError` (split didn't produce enough parts), `ValueError`
(int conversion of non-numeric string).

**Recalls:** Ch.1 strings and immutability, Ch.2 loops, Ch.4 dicts (accumulate
with a key check).

---

### 7.6 — Saving & Loading (Files + JSON)
**Arc role:** Strand-application (data). **Rungs:** 5–6.

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
   `pathlib.Path(__file__).parent / "notes.txt"` (introduce as a pattern, not a
   concept lesson).
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
- "A tuple stored in a dict survives JSON round-trip as a tuple" — tuples DO
  serialize (`json.dumps((1,2,3))` → `'[1, 2, 3]'`), but they come back as lists
  (`json.loads('[1, 2, 3]')` → `[1, 2, 3]`). Round-trip does not preserve the
  tuple type. (Verified: `json.loads(json.dumps((1,2,3)))` → `[1, 2, 3]`,
  `type` is `list`.)
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
**Arc role:** Concept lesson (data). **Rungs:** 3–5. (Full SQL deferred.)

**Concepts:** why a database (vs. a JSON file) — many records, fast search,
structured schema; `sqlite3.connect(path)` creates or opens a file;
`conn.cursor()`, `cursor.execute(sql)`, `conn.commit()`, `conn.close()`;
`CREATE TABLE IF NOT EXISTS`; `INSERT INTO … VALUES (?, ?)` — the `?` placeholder
and why (safety); `SELECT * FROM …` and `SELECT … WHERE …`; `cursor.fetchall()`
returns a list of tuples; the context manager form (`with sqlite3.connect(…) as
conn:`).

**Scope note:** ONE lesson; no `JOIN`, no `UPDATE`, no `DELETE`. The capstone
(Ch.11.4) uses `sqlite3` more deeply — this lesson is just the taste.

**Worked-example ideas:**
1. Create a `songs.db` with a `songs` table (id INTEGER, title TEXT, artist TEXT,
   year INTEGER); insert two rows; `SELECT *` and print rows. Minimal — show the
   whole cycle in ~10 lines.
2. **The missing-commit trap** — insert a row, call `conn.close()` without
   `conn.commit()`, re-open the database, run `SELECT *`, and show `fetchall()`
   returns `[]`. Then add `conn.commit()` before `close()` and show the row
   persists. This is the single most common sqlite3 beginner error; demonstrate it
   explicitly before the fix.
   ```python
   # BUG: no commit
   conn = sqlite3.connect("songs.db")
   conn.execute("INSERT INTO songs VALUES (1, 'Blue', 'Eiffel 65', 1998)")
   conn.close()  # rows are rolled back — nothing saved

   # FIX: commit before close
   conn = sqlite3.connect("songs.db")
   conn.execute("INSERT INTO songs VALUES (1, 'Blue', 'Eiffel 65', 1998)")
   conn.commit()
   conn.close()  # now the row persists
   ```
3. Insert several rows from the music-library list built in 7.6 (spiral recall);
   run `SELECT * FROM songs WHERE artist = ?` with a parameter; print fetchall.
4. Show the `with sqlite3.connect(…) as conn:` form vs. manual `commit/close` —
   context manager commits automatically on clean exit. **Important:** if an error
   happens inside the `with` block, the changes are automatically rolled back —
   nothing is saved. Only a clean exit triggers the commit. **Unlike `with
   open(…)`**, `with sqlite3.connect(…)` does NOT close the connection when the
   block exits — the connection stays open and must be closed explicitly with
   `conn.close()` if you need to release it.

**Exercise ideas:**
- (Modify, rung 3) Given the working songs-DB code, change the `WHERE` clause to
  filter by year instead of artist.
- (Complete, rung 5) A stub that opens a `high_scores.db`, creates a `scores`
  table, and has an `add_score(name, score)` function — complete the `INSERT`
  statement with `?` placeholders.
- (Fix, rung 4) Code that uses `f"…{name}…"` string formatting inside
  `execute()` instead of `?` placeholders — explain the SQL injection risk and fix
  to use `(sql, (name,))`.

**Misconceptions:** "`commit()` is optional" — without it, `INSERT`s are rolled
back on close. "`fetchall()` returns dicts" — it returns a list of tuples; use
index or `row_factory` for names. "SQLite is a server" — it's a local file; no
server needed.

**Error classes:** `sqlite3.OperationalError` (syntax error or wrong table name),
`sqlite3.IntegrityError` (constraint violation), `sqlite3.ProgrammingError`
(wrong number of `?` bindings).

**Recalls:** Ch.4 dicts and list iteration, 7.6 music library (same data set),
Ch.3 functions.

---

### Chapter Challenge
**Arc role:** Mixed-strand review set. 8 exercises, easy → hard.

1. (Modify, rung 3) Change an `import math` snippet to use `from math import …`
   form; check it still works.
2. (Modify, rung 3) Use the `datetime` docs page to look up `date.today()` and
   print the current day of the week.
3. (Fix, rung 4) A module named `json.py` shadows the standard library; diagnose
   and fix.
4. (Fix, rung 4) A `split`-based extractor has an `IndexError` on blank lines;
   add a guard.
5. (Complete, rung 5) Complete a `load_library` / `save_library` round-trip (JSON)
   — given the function stubs.
6. (Complete, rung 5) Given a `scores` table creation stub, complete the `INSERT`
   and a `SELECT WHERE score > 1000` query.
7. (Write, rung 6) Write a `top_artists.py` module from scratch: a function that
   takes a list of song dicts and returns the artist who appears most often; import
   and test it.
8. (Write, rung 6) Build a tiny CLI: load the music JSON library, prompt the user
   for an artist name (`input()`), query the SQLite DB for all songs by that
   artist, and print them. Combines 7.5 text skills, 7.6 JSON, 7.7 SQL.

---

### Chapter Quiz (gate)
Must pass before Ch.8 (JavaScript) unlocks.

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

| Lesson | Dominant rung | Write-from-scratch? |
|--------|--------------|---------------------|
| 7.1    | Modify / Fix | No — modify examples |
| 7.2    | Complete / Write | Yes (the module file itself) |
| 7.3    | Modify / Complete | No |
| 7.4    | Predict / Modify | No — reading, not writing |
| 7.5    | Complete / Write | Yes (parse function) |
| 7.6    | Complete / Write | Yes (save/load/search) |
| 7.7    | Modify / Complete | Partially (INSERT + WHERE stubs) |
| Challenge | Modify → Write | Full write-from-scratch in exercises 7–8 |

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
- `random.shuffle()` returns the shuffled list — it returns `None`.
- JSON and Python dicts are the same format — JSON is a *text* format; round-trip
  requires `json.dump`/`load`.
- `str.split(' ')` and `str.split()` behave identically — no-arg split normalizes
  whitespace.
- `strip()` modifies the string in place — strings are immutable; `strip()` returns
  a new string.
- `commit()` is optional for INSERT — without commit, rows are rolled back on
  close.
- `cursor.fetchall()` returns dicts — it returns tuples.
- SQLite requires a server — it uses a local file.
- Tuples cannot be serialized to JSON — they can (`json.dumps((1,2,3))` →
  `'[1, 2, 3]'`), but they round-trip as lists, not tuples.
- `json.load(string)` and `json.loads(string)` are the same — `json.load` expects
  an open file object; passing a string raises `AttributeError: 'str' object has no
  attribute 'read'`. Use `json.loads` for strings, `json.load` for file objects.
- `open("notes.txt")` always opens the file next to the script — the path is
  relative to the CWD when the script runs, not the script's folder.

### Error classes (chapter additions to the Codex)
- `ModuleNotFoundError` — module name wrong or not installed
- `ImportError` — specific name inside module not found (`from X import Y`)
- `AttributeError` — dot-accessed name doesn't exist in the module; also raised
  when `json.load(string)` is called with a string instead of a file object
  (`'str' object has no attribute 'read'`)
- `FileNotFoundError` — `open()` in `'r'` mode on a missing file, or wrong CWD
- `json.JSONDecodeError` — malformed JSON string
- `TypeError` (file write) — `f.write(42)` non-string argument
- `sqlite3.OperationalError` — SQL syntax error or missing table
- `sqlite3.IntegrityError` — constraint violation (e.g. NOT NULL)
- `sqlite3.ProgrammingError` — wrong number of `?` bindings

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
