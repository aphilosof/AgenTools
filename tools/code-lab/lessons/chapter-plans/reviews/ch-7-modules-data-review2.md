# Deep Review (round 2) — Chapter 7 (Modules, Packages & Real Data)
**Verdict:** Needs fixes (one MINOR correctness bug + two MINOR precision issues; all round-1 findings confirmed fixed)
**Python verified on:** 3.14.5

## Round-1 fixes audit

- **Finding 1 [BLOCKER] — list comprehension in 7.6:** CONFIRMED-FIXED. Worked example 3 (lines 291–300) now uses an explicit `matches = []` / `for song in library:` / `if … : matches.append(song)` loop with the explicit note "(No list comprehensions — those are Ch.8.)". Exercise stubs (lines 302–307) describe `for`-loop bodies, no comprehension. The only comprehension that survives is `[p.strip() for p in line.strip().split(":")]` in **7.5 ex.2 (line 239)**, and it is explicitly fenced as teacher-notes-only: "the `for` comprehension here is shown only as a one-liner shorthand in teacher notes; the student exercise uses a plain loop, per Ch.8 scope." Correctly scoped. (See MINOR finding 1 below for a residual nuance.)

- **Finding 2 [MAJOR] — tuple serialization claim wrong:** CONFIRMED-FIXED. Lines 322–325 now state tuples DO serialize (`json.dumps((1,2,3))` → `'[1, 2, 3]'`) but round-trip back as lists, and sets/custom objects are split into a separate, correct misconception (lines 319–320). Verified:
  ```
  json.dumps((1,2,3))                      -> '[1, 2, 3]'   (no error)
  json.loads(json.dumps((1,2,3)))          -> [1, 2, 3], type list
  json.loads(json.dumps({"point":(1,2,3)}))-> {'point': [1, 2, 3]}, point is list
  ```

- **Finding 3 [MAJOR] — missing-commit trap not demonstrated:** CONFIRMED-FIXED. 7.7 worked example 2 (lines 360–376) now demonstrates it explicitly: INSERT without commit → close → re-open → `fetchall()` returns `[]`, THEN the commit fix. Verified empirically: no-commit `fetchall()` → `[]`; with-commit → `[(1, 'Blue', 'Eiffel 65', 1998)]`. Matches the chapter's BUG/FIX code blocks exactly.

- **Finding 4 [MAJOR] — 7.4 rung inconsistency:** CONFIRMED-FIXED. Header now reads `Rungs: 1–4` with the parenthetical "(Intentionally lighter — reading docs is lower-intensity than writing code.)" (line 178). Consistent with its rung-1 Predict and rung-4 Fix exercises.

- **Finding 5 [MAJOR] — `json.load(string)` trap missing:** CONFIRMED-FIXED. Now a Fix exercise (lines 310–312), a misconception (lines 326–328 and 491–492), and an error-class entry (lines 499–501). Verified: `json.load('{"title": "Blue"}')` → `AttributeError: 'str' object has no attribute 'read'`; `json.loads(...)` works.

- **Finding 6 [MAJOR] — relative-path / CWD trap missing:** CONFIRMED-FIXED. 7.6 worked example 1 now carries a "CWD note" (lines 282–287), a misconception (lines 329–330, 493–494), and `FileNotFoundError` (… or wrong CWD) in the error-class list (line 332, 502). `pathlib.Path(__file__).parent / "notes.txt"` correctly given as a pattern, not a concept lesson. Verified: missing file on `'r'` → `FileNotFoundError: [Errno 2] No such file or directory`.

- **Finding 7 [MINOR] — 7.5 ex.2 inner spaces:** CONFIRMED-FIXED. Lines 233–239 now show the `['Bob ', ' 882']` result, that `int(" 882")` works silently while `'Bob ' == 'Bob'` is `False`, and the per-part `.strip()` fix. Verified exactly: `"  Bob : 882  ".strip().split(":")` → `['Bob ', ' 882']`; `int(" 882")` → `882`; `'Bob ' == 'Bob'` → `False`; per-part strip → `['Bob', '882']`.

- **Finding 8 [MINOR] — over-subtle import-reassignment misconception:** CONFIRMED-FIXED. Replaced with the practical version (lines 472–474): "If you do `from math import sqrt`, then later write `sqrt = 'surprise'` … you've overwritten the function. Use `math.sqrt` …".

- **Finding 9 [MINOR] — context-manager rollback-on-exception note:** CONFIRMED-FIXED. 7.7 worked example 4 (lines 380–382) adds "if an error happens inside the `with` block, the changes are automatically rolled back — nothing is saved. Only a clean exit triggers the commit." Verified: clean exit committed value 1; exception inside block left value 2 unsaved.

- **Finding 10 [MINOR] — `datetime.date.today()` chain unexplained:** CONFIRMED-FIXED. 7.3 worked example 1 (line 152) now uses `from datetime import date; date.today()` and explains module/class/method levels explicitly, avoiding the three-dot chain.

## New / remaining findings

1. **[MINOR] 7.1 Fix exercise (line 95) — wrong error class listed.** The exercise says `from math import Sqrt` → "`NameError`/`ImportError`". It raises **`ImportError` only**, never `NameError`:
   ```
   ImportError: cannot import name 'Sqrt' from 'math' … Did you mean: 'sqrt'?
   ```
   A `from X import Y` with a bad `Y` is always `ImportError`; `NameError` would only occur if you *used* an unbound name. → **Fix:** drop "`NameError`/" — state `ImportError` (and note the helpful "Did you mean: 'sqrt'?" suggestion). The error-classes block (line 102) already correctly lists only `ImportError`; only the exercise line is wrong.

2. **[MINOR] 7.7 worked example 4 / line 351 — `with sqlite3.connect(...)` does not close the connection.** The chapter twice frames the context-manager form as the alternative to "manual `commit/close`" (lines 351, 380–382) and says it "commits automatically on clean exit." That commit/rollback claim is correct and verified. But unlike a `with open(...)` block, the sqlite3 context manager commits/rolls-back **without closing** the connection — the connection stays open after the block. If the chapter leaves students believing `with sqlite3.connect(...)` is a full replacement for `close()`, that is subtly false. → **Fix:** add half a sentence: "the `with` form handles commit/rollback for you, but unlike files it does *not* close the connection — call `conn.close()` yourself when done." Low priority but worth a line since 7.6 establishes the opposite intuition for `with open(...)`.

3. **[MINOR] 7.5 ex.2 (line 239) vs. Ch.8 ownership — borderline.** The teacher-note comprehension `[p.strip() for p in line.strip().split(":")]` is correctly labelled teacher-only and the student exercise uses a plain loop, so this honours the §D "comprehensions only Ch.8" rule for student-facing material. Flagging only so the authoring step keeps that comprehension out of any rendered student view (worked-example code that students read could still leak it). No change needed if the teacher/student split is preserved at authoring time.

## Verified-correct (ran and confirmed)

- **Deeper string methods are correctly homed in 7.5, basics recalled from Ch.1.** `strip`/`replace`/`find`/`startswith`/`endswith` are the new ones (verified: `find` returns index or `-1`; `startswith`/`endswith` return bools). Basic `split`/`join`/indexing/slicing are recalled, not re-taught (line 23, 220). The no-arg-vs-`split(' ')` misconception is correct: `"a   b".split()` → `['a','b']`; `"a   b".split(" ")` → `['a','','','b']`.
- **7.4 predict exercise:** `math.ceil(4.1)` → `5`, `math.ceil(-4.1)` → `-4` (ceiling toward +∞, correct).
- **7.3:** `random.shuffle([...])` returns `None`; `random.sample("hello", 10)` → `ValueError: Sample larger than population or is negative`.
- **7.6:** `f.write(42)` → `TypeError: write() argument must be str, not int`; `json.dumps({...}, indent=2)` formats as documented.
- **7.7:** wrong `?` binding count → `sqlite3.ProgrammingError: Incorrect number of bindings supplied`. SQL stays one taste — no `JOIN`/`UPDATE`/`DELETE` anywhere (scope note line 353 honoured).

## Verdict notes

The revision is solid: all ten round-1 findings are genuinely fixed (verified against live Python, not just claimed), and the new traps (missing-commit demo, `json.load` string, CWD `FileNotFoundError`, tuple round-trip) are technically accurate and well-placed. Remaining issues are all MINOR: one real correctness bug (the spurious `NameError` in 7.1's Fix exercise) and two precision notes (sqlite3 `with` does not close; keep the 7.5 teacher-note comprehension out of student-rendered code). No BLOCKER or MAJOR issues survive. Fix finding 1 before authoring; findings 2–3 are polish.
