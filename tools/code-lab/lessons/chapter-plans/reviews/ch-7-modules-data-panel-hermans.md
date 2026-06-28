# Panel Review — Ch.7 Modules & Data — Felienne Hermans (The Programmer's Brain)
**Verdict:** Solid

---

## Findings (from my lens)

### Cognitive load and working memory

**1. [MAJOR] 7.7 — SQL syntax dumps too many new symbols at once**

Seven new vocabulary items land in one lesson: `connect`, `cursor`, `execute`, `fetchall`, `commit`, `close`, SQL string syntax (`CREATE TABLE IF NOT EXISTS`, `INSERT INTO … VALUES (?, ?)`, `SELECT … WHERE`), and the `?` placeholder mechanism. For a novice, each of these is a new chunk that must be held in working memory simultaneously. The chapter plan correctly scopes SQL to a "taste" and defers JOINs — but within the lesson itself, the worked examples introduce everything in one pass. The cognitive research is clear here: when learners encounter a new notation system inside a new API inside a new module, load compounds multiplicatively.

Fix: explicitly stage the worked examples so each one introduces exactly one new construct and requires zero inference about any other. Example 1 should use `CREATE TABLE` only and show the result. Example 2 inserts one row and selects it back. The `?` placeholder and the missing-commit trap are two separate concepts that should not share an example. The plan puts the missing-commit demo in worked example 2 and the `?` placeholder in a Fix exercise — that sequencing is actually fine; just make sure the first example truly is minimal (no `conn.cursor()`, `execute`, `commit`, `fetchall`, and `conn.close()` all at once in a single block labeled "minimal").

**2. [MINOR] 7.3 — `math.floor(math.log2(n))` introduces chained library calls as a concept when `math.log2` itself is new vocabulary**

The plan uses this as example 3 to demonstrate "function composition," recalled from Ch.3. But `log2` is not a familiar concept for a strong 11-year-old; it requires simultaneous understanding of logarithms AND the nesting syntax AND the "function composition" idea. That is three unfamiliar things at once. Reading research (Sweller; also my own work in *The Programmer's Brain*) shows that novices read code by tracing individual tokens, not by parsing tree structure — they will read `math.floor(math.log2(n))` left-to-right and lose track of where the inner call ends.

Fix: use a more concrete inner call. `math.floor(math.sqrt(n))` involves only Ch.1-level math (`sqrt` of a number, then truncate). Or `math.ceil(math.pow(2, 3))` — both operands are numeric constants so the student is not also reasoning about variable state. Reserve the log example for a Codex note or the Challenge.

**3. [MINOR] 7.2 — `if __name__ == "__main__"` is introduced before the learner has a stable mental model of what `__name__` is**

The plan correctly explains the *effect* of the guard. But novices systematically misread double-underscore names because they look like noise — the visual channel is overloaded by the syntactic density of `__name__ == "__main__"`. The danger is learners treat it as magic incantation they must type without understanding, which is exactly the kind of surface-level encoding that does not transfer.

Fix: dedicate half a paragraph to showing that `__name__` is just a string variable Python sets automatically — run `print(__name__)` inside the module file directly and show it prints `"__main__"`, then import the same file and show it prints the module name instead. That single demonstration makes the guard a consequence of a visible fact, not an opaque ritual. The plan implies this but does not make it the pedagogical anchor.

**4. [MINOR] 7.6 — `pathlib.Path(__file__).parent / "notes.txt"` introduced as a pattern without explanation**

The plan correctly scopes this as "introduced as a pattern, not a concept lesson." The problem is that for a novice reader, seeing `/` used between two non-numeric objects (a `Path` and a string) when `/` was introduced in Ch.1 as division creates genuine cognitive conflict. At minimum, a one-sentence note saying "Python lets the `Path` type redefine what `/` does — you'll see how this works when you learn operator overloading" prevents the student from filing a false belief about division.

### Reading and tracing

**5. [MAJOR] 7.5 Fix exercise — inconsistency between project thread and the fix example**

The project through-line in 7.5 uses two-field game-log lines (`"Alice: 1450"`) which split to exactly two parts. The Fix exercise says `line.split(": ")[2]` causes `IndexError` when "a line that doesn't contain `': '`" is encountered. These are inconsistent: on a blank line, `split(": ")` produces `['']`, so `[1]` raises `IndexError`, not `[2]`. `[2]` only makes sense if the data format has three fields (as in the Write exercise's CSV with `title,artist,year`). The exercise appears to have been written for the CSV format and placed in the game-log section by mistake.

Verified with Python: `"".split(": ")` → `['']`; `""[1]` raises `IndexError`. The index in the Fix exercise must match the actual data format used in the project thread.

Fix: either (a) change the Fix to `line.split(": ")[1]` and use a blank line as the trigger, or (b) explicitly switch to the three-field CSV format before the Fix exercise and use `[2]`.

**6. [MINOR] 7.1 — `dir(math)` first output floods the screen with dunder names**

`dir(math)` returns `['__doc__', '__file__', '__loader__', '__name__', ...]` before any user-facing names appear. Novice readers, who read token by token, will spend cognitive effort trying to parse `'__loader__'` and `'__package__'` before they reach `'ceil'` or `'sqrt'`. This is a known issue with using `dir()` as a discovery tool at this stage.

Fix: show `[name for name in dir(math) if not name.startswith("_")]` and note that the underscore names are Python internals — or use a curated list like `["ceil", "floor", "sqrt", "pi", "e"]` in a worked example and reserve `dir()` for a "try this" aside. If list comprehensions are Ch.8, show the filter as a given one-liner and tell them not to worry how it works yet.

### Conceptual accuracy

**7. [MINOR] 7.7 worked example 2 — the BUG code uses `conn.execute()` without first creating a table in the same session**

The plan shows:
```python
# BUG: no commit
conn = sqlite3.connect("songs.db")
conn.execute("INSERT INTO songs VALUES (1, 'Blue', 'Eiffel 65', 1998)")
conn.close()
```

For this to run at all, `songs.db` must already have a `songs` table from a previous session. If a student runs this as their first exposure to the database, it raises `sqlite3.OperationalError: no such table: songs` rather than demonstrating the missing-commit behavior. The table creation must appear before the INSERT in the bug demo, and the commit of the CREATE must be shown explicitly or the bug demo will be confounded by a different error.

Verified: `conn.execute("INSERT INTO songs VALUES ...")` on a database with no `songs` table raises `OperationalError`, not the expected behavior.

Fix: the bug worked example must show the full sequence starting from `CREATE TABLE` (or note explicitly that this follows from a prior worked example that already ran the CREATE). The minimal version: show CREATE + commit in example 1, then show INSERT without commit as the bug demo in example 2.

**8. [MINOR] 7.3 — `random.shuffle(lst)` described as "in-place" with `None` return — well-handled but missing one nuance**

The plan correctly flags this and the fix exercise demonstrates it. However, the plan does not mention that `random.shuffle` requires a mutable sequence — passing a string or tuple raises `TypeError`. For an 11-year-old who has been working with strings heavily (Ch.1), the natural instinct to shuffle a string (e.g., to make an anagram game) will fail with a confusing error. This is worth a single sentence in the misconceptions list for 7.3.

---

## Continuity notes

**Well-woven:**
- `str.strip()`, `str.split()`, `str.join()`, `str.lower()`, `str.upper()` are correctly marked as Ch.1 recalls throughout 7.5. The plan explicitly warns against re-teaching them.
- `for` loops, `if/else`, `while` from Ch.2 are woven into 7.5–7.7 without re-explanation.
- Ch.3 `def`, `return`, default arguments, docstrings are correctly used in 7.2 (writing modules with functions) and 7.6 (save_library/load_library functions).
- Ch.4 dicts and lists are the natural data structure for the music library through-line (7.6–7.7) — good recall.
- The `int()` conversion from Ch.1 appears in 7.5 worked example 1 without re-teaching — correct.

**Missing or under-woven:**
- **Ch.2 `try/except`** (c2s8) taught try/except with `ValueError` and `int()` conversion. Lesson 7.5 has the learner call `int(" 882")` on strings extracted from text — the natural question "what if the score field is not a number?" should trigger a brief recall of try/except here, especially since Ch.8 deepens it. The plan mentions `ValueError` as an error class for 7.5 but does not build the connection to the Ch.2 knowledge.
- **Ch.3 docstrings** — the plan introduces writing modules in 7.2 with `def hello(name)` but does not note that the module's functions should carry docstrings (which Ch.3 established as the documentation contract). This is a missed reinforcement opportunity and a style inconsistency.
- **String immutability** — recalled correctly in the misconceptions note in 7.5, but the actual exercises do not provoke the misconception. A quick predict exercise asking "what does `line.strip()` do to `line`?" would make this recall active rather than passive.

**Re-taught by accident:**
- None found. The plan is careful here.

**Boundary with Ch.8:**
- Ch.8 owns `try/except` at depth (including `raise`, `finally`, `except ExceptionType as e`). Ch.7.6 opens files with `with open(...)` but does not wrap in `try/except` for `FileNotFoundError`. That is correct sequencing — don't introduce error handling for file I/O until Ch.8 teaches it properly. The plan is clean on this boundary.
- Ch.8 owns list comprehensions. 7.5 worked example 2 includes `[p.strip() for p in line.strip().split(":")]` in teacher notes with a parenthetical "the student exercise uses a plain loop, per Ch.8 scope." This is correct but the parenthetical is informal. When this is authored, the comprehension must not appear in any student-facing text or code panel — only in the teacher rationale.

---

## What's strong

- **The through-line is pedagogically sound.** A single music-library data set threads through 7.5 (extract records from text) → 7.6 (persist as JSON) → 7.7 (query with SQL). This is excellent for reducing extraneous cognitive load: the student's mental model of the data stays constant while the mechanism for storing and querying it changes. The chapter teaches the tool, not the data.

- **Misconceptions are unusually precise and verified.** The misconception list catches subtle issues that most beginner curricula miss: `split(' ')` vs `split()` whitespace normalization, the tuple-to-list round-trip through JSON, `json.load` vs `json.loads` distinction, and the CWD vs script-folder ambiguity for `open()`. Each one is technically accurate (I verified the tuple round-trip, the `AttributeError` from `json.load(string)`, and the whitespace behavior). This is the level of precision that prevents the persistent false beliefs that accumulate in novice programmers.

- **The rung progression is honest.** The difficulty ramp table at the end is truthful: 7.1 stays at Modify/Fix and does not jump to Write; Write appears only in 7.2 and 7.5+ where the learner has enough context. The Chapter Challenge exercises 7–8 are the first genuinely open-ended multi-concept programs in the course. This respects the cognitive reality that writing from scratch requires stable retrieval of every concept involved.
