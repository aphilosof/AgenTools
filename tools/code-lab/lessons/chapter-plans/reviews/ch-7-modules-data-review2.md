# Deep Review Round 2 — Ch.7 Modules & Data
**Verdict:** Needs fixes
**Python verified on:** 3.14.5 (CPython, sqlite3.sqlite_version 3.53.1)

---

## Round-1 fixes audit

Each synthesis fix is listed with its ID and verdict.

**B1 — Chapter Quiz names wrong next chapter (JavaScript)**
CONFIRMED-FIXED. Quiz gate now reads "Must pass before Ch.8 (Writing Real Programs in Python) unlocks." Correct.

**B2 — 7.5 Fix exercise index mismatch ([2] on two-field data)**
CONFIRMED-FIXED. The Fix exercise now explicitly uses `[1]` ("line.split(": ")[1]") and uses a blank line (no `: ` present) as the trigger for `IndexError`. Verified: `"Alice: 1450".split(": ")` → `['Alice', '1450']`, len 2; `parts[2]` → `IndexError`. Consistent with the two-field game-log project data.

**B3 — 7.7 missing-commit demo omits CREATE TABLE**
CONFIRMED-FIXED. Worked example 2 now shows a full code block that creates the table with `CREATE TABLE IF NOT EXISTS` and commits before the INSERT-without-commit demo. The sequence is explicit: setup → INSERT without commit → close → verify empty → INSERT with commit → verify row saved. Verified: no-commit INSERT → `[]`; with-commit INSERT → `[(1, 'Blue', 'Eiffel 65', 1998)]`.

**B4 — `str.split(sep)`, `str.join()`, f-strings listed as "recalled from Ch.1" but absent from c1.js**
CONFIRMED-FIXED (correctly handled as an unresolved blocker). The plan now carries a prominent "Authoring dependency note (Blocker B4)" block in the concept map section and again at the top of 7.5. It blocks authoring of 7.5–7.7 pending confirmation from the chapter-chain author, and instructs that until resolved `split(sep)` must be shown explicitly in every first use. This is the correct treatment: the plan cannot resolve it alone, and it no longer silently assumes the gap away.

Status of B4 in the actual content files: c1.js teaches `str.split()` with no argument only (c1s5 codex: `s.split()`; example at line 497 shows no-arg split). `str.join()` appears nowhere in c1.js. `str.join()` also appears nowhere in c2.js or c3.js. f-strings appear exactly once in c2.js (line 617) as a worked example comment (`# f-strings evaluate fresh on each iteration`) with no formal introduction or exercise. f-strings are referenced extensively in ch-3 plan as "recalled from Ch.1" but c3.js has zero f-strings in actual lesson code. The ch-4 plan similarly references f-strings as "Ch.1 recall." The dependency gap is real, systemic, and correctly flagged but not yet resolved.

**M1 — 7.1 namespace mental model missing**
CONFIRMED-FIXED. A full "Namespace mental model" section now appears in 7.1 before any worked examples, including the room analogy and the overwrite-risk explanation for `from math import sqrt`.

**M2 — 7.2 `__name__` dual-role mental model missing**
CONFIRMED-FIXED. A "Dual-role mental model for `__name__`" section now precedes the guard, with the `print(__name__)` demonstration and the m20 note about `def` at module level being a top-level statement.

**M3 — 7.7 cognitive overload**
CONFIRMED-FIXED. The lesson now explicitly designates minimum-viable core (connect, cursor.execute, fetchall, commit, close, CREATE TABLE IF NOT EXISTS, INSERT INTO, SELECT *) and moves SELECT WHERE, the context-manager form, and `row_factory` to a "Going Deeper sidebar (not required)." The SQL injection Fix exercise is retained as the one required advanced item with explicit "Mark as required" note.

**M4 — Missing warm-ups for all seven lessons**
PARTIALLY FIXED. Warm-ups are now present for 7.1, 7.2, 7.4, 7.5, 7.6, and 7.7. However:
- **7.3 explicitly declares no warm-up.** The plan states: "*(no dedicated warm-up needed — this lesson opens with a worked example that modifies 7.2 code. The 7.2 warm-up already recalled Ch.3. For authors: if a warm-up is added, recall Ch.3 return values…)*"
- CURRICULUM-STRUCTURE.md §B is unambiguous: "Warm-up — a quick recall question from an earlier lesson (spiral / retrieval)" is a required component of every lesson. A parenthetical "no warm-up needed" is a structural rule violation. The plan's own fallback text ("For authors: if a warm-up is added, recall Ch.3 return values: 'What does a function return if it has no return statement?'") is the correct warm-up; it should be promoted to required. **This remains a MINOR structural gap.**

**M5 — Missing Ch.5 and Ch.6 spiral recalls**
CONFIRMED-FIXED. Ch.5 and Ch.6 are now both listed in the "Recalled from earlier chapters" section with explicit attribution. Ch.5 debugging protocol is named for `ModuleNotFoundError`. Ch.6 classes are anchored to the `datetime.date` spiral note in 7.3 and the optional `Playlist` class in 7.2.

**M6 — Missing Chapter Recap / retrieval-set section**
CONFIRMED-FIXED. A full "Chapter Recap (arc component 6)" section is present with seven must-stick concepts and six proposed Ch.8 warm-up questions.

**m1 — `math.floor(math.log2(n))` uses three unfamiliar things**
CONFIRMED-FIXED. 7.3 worked example 3 now uses `math.floor(math.sqrt(n))`, which uses only arithmetic the student knows. `log2` is absent. Verified: `math.floor(math.sqrt(n))` is straightforward.

**m2 — `pathlib.Path(__file__).parent / "notes.txt"` not demystified**
CONFIRMED-FIXED. A "CWD note" in 7.6 worked example 1 explains `__file__`, `.parent`, and the `/` path-join overload in one sentence each, exactly as specified.

**m3 — `conn.execute()` vs `conn.cursor()` inconsistency in 7.7**
CONFIRMED-FIXED. The plan now explicitly states "Use the explicit cursor pattern throughout 7.7" and all worked-example code uses `cur = conn.cursor()` / `cur.execute()` / `cur.fetchall()`.

**m4 — `with sqlite3.connect()` — no note that `conn.commit()` is unnecessary inside the block**
CONFIRMED-FIXED. Going Deeper sidebar notes: "auto-commits on clean exit (no need to call `conn.commit()` explicitly inside the `with` block)." Also stated in the chapter-wide misconceptions list.

**m5 — DDL auto-commit undisclosed**
CONFIRMED-FIXED. A "DDL auto-commit disclosure" note is now present in 7.7 concepts: "Python's sqlite3 automatically commits structural changes like `CREATE TABLE` but not data changes like `INSERT` — you must call `conn.commit()` yourself after inserting rows." Verified: `CREATE TABLE` without commit persists on file-based connections; `INSERT` without commit does not.

**m6 — Rung non-monotonicity: 7.3 and 7.7 dips**
CONFIRMED-FIXED. The progression table now labels 7.3 as "Sub-strand reset" and 7.7 as "SQL sub-strand reset," with explicit rationale sentences for each intentional dip. 7.4 is designated as "Reading-comprehension rungs — separate scale from coding rungs."

**m7 — `dir(math)` floods output with dunder names**
CONFIRMED-FIXED. 7.1 now shows the filtered form `[name for name in dir(math) if not name.startswith("_")]` as a given one-liner with a "don't worry how this filter works yet — you'll learn it in Ch.8" note, or a curated list alternative.

**m8 — 7.4 lacks context-first motivating scenario**
CONFIRMED-FIXED. 7.4 opens with: "You want to shuffle your playlist, but you wonder: does `random` have anything else useful?…" The motivating question precedes the anatomy walk-through.

**m9 — No Predict (rung 1) exercise for SQL**
CONFIRMED-FIXED. 7.7 exercise ideas include a rung-1 Predict: "Given a complete CREATE + INSERT + SELECT block (no stub), predict what `fetchall()` returns — including the tuple structure and field order." It is also flagged as "This is the required rung-1 exercise for a new formal language."

**m10 — Tuple JSON round-trip misconception framing reversed**
CONFIRMED-FIXED. The misconception now leads with the consequence: "If you put a tuple in and load it back, you get a list: `json.loads(json.dumps((1,2,3)))` → `[1, 2, 3]`, type is `list`." Verified.

**m11 — `random.shuffle` vs `sorted()` contrast conflates mutation/copy with operation**
CONFIRMED-FIXED. 7.3 now presents the three-way contrast: `shuffle` (in-place, returns None) vs `list.sort()` (in-place, returns None) vs `sorted()` (returns new list, does not touch original). Python design rationale included.

**m12 — `random.sample("hello", 10)` error message wrong**
CONFIRMED-FIXED. The plan now states the exact Python error: `ValueError: Sample larger than population or is negative`. Verified: this is the exact message raised by Python 3.14.5.

**m13 — Challenge exercise 2 — method not shown in any lesson**
CONFIRMED-FIXED. Challenge exercise 2 now explicitly notes: "**(Use the docs — `date.weekday()` or `date.strftime("%A")` was not shown in any lesson. The point is to find and apply an undiscovered method from docs.)**"

**m14 — Challenge exercise 8 — database state ambiguous**
CONFIRMED-FIXED. Challenge exercise 8 now specifies: "the DB must be pre-populated from 7.7 or from a setup step in the exercise scaffold — specify this clearly in the exercise prompt."

**m15 — `ModuleNotFoundError` / `ImportError` parent-child undisclosed**
CONFIRMED-FIXED. Error classes section now states: "`ModuleNotFoundError` is a subclass of `ImportError` (`issubclass(ModuleNotFoundError, ImportError)` is `True`)." Verified.

**m16 — 7.3 `datetime.date` object not connected to Ch.6**
CONFIRMED-FIXED. 7.3 worked example 1 now carries: "**Spiral connection:** 'Notice `today` is an object — just like the `Pet` you built in Ch.6. The difference is that the `date` class was written by someone else and lives in Python's standard library.'"

**m17 — `help()` introduced in 7.1 but never exercised before 7.4**
CONFIRMED-FIXED. 7.1 exercise ideas now include: "(Complete, rung 5) Call `help(math.gcd)` to find what it does, then use it to find the GCD of 48 and 18." Verified: `math.gcd(48, 18)` → 6.

**m18 — Challenge exercise 8 not flagged as hardest**
CONFIRMED-FIXED. Now explicitly labeled: "**(Write, rung 6 — hardest exercise in the chapter; this is the first exercise that combines every strand at once.)**"

**m19 — No Ch.6-to-Ch.7 transition paragraph**
CONFIRMED-FIXED. Overview section now opens with the bridge paragraph.

**m20 — `def` at module level as a top-level statement not explained**
CONFIRMED-FIXED. 7.2 dual-role mental model section now includes: "Even `def hello():` at module level is a top-level statement Python runs on import — it just creates the function without calling it."

**m21 — List comprehension must be authoring-only**
CONFIRMED-FIXED. 7.5 includes an explicit "Authoring gate — list comprehension" box prohibiting `[p.strip() for p in ...]` from any student-visible code block, worked example, or prose.

**m22 — `try/except` not woven into 7.5**
CONFIRMED-FIXED. 7.5 worked example 3 now shows both the conditional guard and the `try/except` approach for non-numeric score `ValueError`, and the Fix exercise shows both patterns for `IndexError`.

**m23 — Docstrings absent from module functions in 7.2**
CONFIRMED-FIXED. 7.2 worked example 1 now includes docstrings in `hello(name)` and all module function stubs. The exercise prompt for `converter.py` explicitly includes "a docstring slot to fill in."

**m24 — `IF NOT EXISTS` not explained**
CONFIRMED-FIXED. 7.7 concepts section now includes: "show what happens on a second run *without* `IF NOT EXISTS` (`OperationalError`) before introducing the fix." The anti-pattern-first standard is applied.

**m25 — Challenge exercise 8 prescribed data lacks creative ownership**
CONFIRMED-FIXED. Exercise 8 now has a baseline (prescribed music library) plus a "Challenge extension: re-do exercise 8 with a data set of your own choice."

---

## New / remaining findings

### MINOR-1: 7.3 warm-up is structurally absent (rule violation)
CURRICULUM-STRUCTURE.md §B requires a warm-up in every lesson without exception. 7.3 explicitly opts out: "*(no dedicated warm-up needed — this lesson opens with a worked example…)*". The plan's own parenthetical even provides the correct warm-up text ("What does a function return if it has no return statement?") but marks it advisory rather than required. This is a structural rule violation. The fix is one sentence: promote the parenthetical warm-up to required and remove the "no warm-up needed" framing.

### MINOR-2: 7.7 worked examples 1 and 3 use hardcoded literal VALUES — inconsistent with the required ? teaching
Worked examples 1 and 3 use `cur.execute("INSERT INTO songs VALUES (1, 'Blue', 'Eiffel 65', 1998)")` — string-literal SQL with no `?` placeholders. The SQL injection Fix exercise (required advanced item) correctly uses `(sql, (name,))` syntax. The gap: a student who sees three worked examples with hardcoded literals and one Fix exercise with `?` will cargo-cult the literal form. The worked examples should use `?` from first introduction, or at minimum example 1 should show both forms side-by-side with a note: "These values are hardcoded for brevity — in the next section you will see why `?` is the safe pattern when values come from the user." Not a blocker (the Fix exercise teaches the right lesson) but an inconsistency that undercuts the teaching.

### MINOR-3: `with sqlite3.connect() as conn:` — the plan omits that it does NOT close the connection
The Going Deeper sidebar correctly states the context manager "auto-commits on clean exit" and "rolls back on exception." It does NOT note that unlike `with open(...)`, the sqlite3 context manager does **not** close the connection on exit. Verified on Python 3.14.5: after the `with` block exits, `conn.execute('SELECT 1')` succeeds — the connection remains open. Since 7.6 establishes `with open(...)` as a "guarantees close" pattern, a student moving to `with sqlite3.connect()` will wrongly infer the same guarantee. One sentence is sufficient: "Unlike `with open(...)`, the sqlite3 context manager does not close the connection — call `conn.close()` yourself after the `with` block."

### MINOR-4: `math.sqrt(144)` returns `12.0` (float), not `12` — plan does not note this
7.1 worked example 1 uses `print(math.pi, math.sqrt(144))`. The output includes `12.0`, a float, because `math.sqrt` always returns float. Students who expect integer output will be surprised, and the plan misses an opportunity to reinforce the Ch.1 type lesson (functions always return a specific type). Not incorrect — just a missed teaching moment. One parenthetical: "Note: `math.sqrt(144)` returns `12.0`, a float — `math.sqrt` always returns float even when the answer is a whole number."

### VERIFIED-NOT-A-PROBLEM: 7.1 error class listing
The plan correctly distinguishes two separate error paths: `from math import Sqrt` raises `ImportError` (verified: `ImportError: cannot import name 'Sqrt' from 'math'`); `math.Sqrt` (attribute access) raises `AttributeError` (verified: `AttributeError: module 'math' has no attribute 'Sqrt'`). Both appear in the error class list. The Fix exercise uses the `from math import Sqrt` → `ImportError` path, which is correct. No inconsistency.

### VERIFIED-NOT-A-PROBLEM: 7.6 warm-up reuse
7.6 warm-up: "What is the difference between a Python list and a JSON file?" 7.7 warm-up: same question with explicit note "(If the 7.6 warm-up already used this, replace with: 'What does `json.load()` return when you load a list of dicts from a file?')". The plan is aware of the collision and provides a replacement. Acceptable.

### VERIFIED-NOT-A-PROBLEM: DDL auto-commit technical accuracy
The plan states: "Python's sqlite3 automatically commits structural changes like `CREATE TABLE` but not data changes like `INSERT`." Verified on Python 3.14.5 with file-based connections: `CREATE TABLE` without explicit `conn.commit()` persists across connection close/reopen. `INSERT` without commit does not. The explanation is accurate for the default `isolation_level=''` mode.

### VERIFIED-NOT-A-PROBLEM: SQLite `sqlite3.ProgrammingError` for wrong bindings
Verified: providing one binding to a two-`?` statement raises `sqlite3.ProgrammingError: Incorrect number of bindings supplied. The current statement uses 2, and there are 1 supplied.` Error class correctly named in the plan.

---

## Verified-correct claims

- `"Alice: 1450".split(": ")` → `['Alice', '1450']` (len 2; indices 0 and 1 only)
- `"  Bob : 882  ".strip().split(":")` → `['Bob ', ' 882']`; `int(" 882")` → 882; `'Bob ' == 'Bob'` → False
- `random.shuffle([...])` → None; list mutated in place
- `sorted([3,1,2])` → `[1,2,3]`; original unchanged
- `json.loads(json.dumps((1,2,3)))` → `[1, 2, 3]`, type `list`
- `json.load('{"a":1}')` (string arg) → `AttributeError: 'str' object has no attribute 'read'`
- `json.dumps({...}, indent=2)` works; JSON serializes dict, list, str, int, float, bool, None; sets raise TypeError
- `from math import Sqrt` → `ImportError`; `math.Sqrt` → `AttributeError`
- `random.sample("hello", 10)` → `ValueError: Sample larger than population or is negative`
- `math.ceil(4.1)` → 5; `math.ceil(-4.1)` → -4 (ceiling toward +∞)
- `math.gcd(48, 18)` → 6
- `sqlite3.OperationalError` on duplicate `CREATE TABLE` without `IF NOT EXISTS`
- `cursor.fetchall()` returns list of tuples (verified: `[(1, 'Alice')]`, `type(rows[0])` is `tuple`)
- `INSERT` without `conn.commit()` → rolled back on close (fetchall returns `[]` in fresh connection)
- `issubclass(ModuleNotFoundError, ImportError)` → True
- `with sqlite3.connect() as conn:` commits on clean exit, rolls back on exception, does NOT close connection
- `str.startswith()`, `str.endswith()`, `str.replace()`, `str.find()` — all correctly owned in 7.5
