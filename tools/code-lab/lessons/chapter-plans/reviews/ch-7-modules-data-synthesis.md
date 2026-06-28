# Synthesis — Ch.7 Modules & Data

**Overall verdict:** Needs fixes

**Consensus issues (flagged by 2+ reviewers):**
- f-strings / `str.join()` / `split(sep)` listed as "recalled from Ch.1" but absent from written c1.js (Downey, Guzdial, Malan, Oakley, Ramalho, Resnick — 6 of 7)
- 7.7 cognitive overload: too many new SQL + sqlite3 concepts in one lesson (Hermans, Oakley — 2 of 7)
- `conn.execute()` vs `conn.cursor()` inconsistency in 7.7 worked examples (Downey, Guzdial, Malan — 3 of 7)
- Namespace mental model missing from 7.1 (Downey, Guzdial — 2 of 7)
- `__name__ == "__main__"` guard taught as mechanics without the "dual-role" mental model (Downey, Guzdial, Hermans — 3 of 7)
- Missing warm-ups for all 7 lessons (Oakley; structure rule validated by Guzdial — 2 of 7)
- Missing Ch.5 and Ch.6 spiral recalls in the recalled-from section (Guzdial — 1 major; corroborated by Malan on Ch.6 OOP bridge)
- `pathlib.Path(__file__).parent / "notes.txt"` introduced without sufficient demystification of `__file__`, `parent`, and `/` overload (Downey, Hermans, Oakley — 3 of 7)
- 7.5 Fix exercise index mismatch — `[2]` is wrong for two-field game-log data (Hermans — verified bug)
- 7.7 BUG example for missing-commit omits `CREATE TABLE`, so it would raise `OperationalError` before demonstrating the commit trap (Hermans — verified bug)
- Rung progression non-monotonic: 7.3 and 7.7 dip below preceding lesson (Guzdial, Malan — 2 of 7)
- Chapter Quiz names "Ch.8 (JavaScript)" which is factually wrong; Ch.8 is Writing Real Programs in Python (Guzdial — 1 major, factual error)
- Missing Chapter Recap / retrieval-set section for future spiral use (Oakley — 1 major, structure rule)
- DDL auto-commit behaviour in sqlite3 not disclosed (Resnick — 1 of 7; valid technical gap)
- `with sqlite3.connect()` — explanation incomplete: no explicit note that `conn.commit()` is unnecessary inside a `with` block (Ramalho — 1 of 7)
- `random.shuffle` vs `sorted()` comparison conflates two dimensions; `list.sort()` is the true in-place counterpart (Ramalho — 1 of 7)
- Tuple JSON misconception framed wrong: lead with the consequence (type changes to list after round-trip) not the false belief (Ramalho — 1 of 7)

---

## Prioritised fix list

### BLOCKERS

**B1. Chapter Quiz names the wrong next chapter.**
The quiz says "must pass before Ch.8 (JavaScript) unlocks." Ch.8 is Writing Real Programs in Python; JavaScript is Ch.9. This is a factual continuity error that will appear in the rendered UI and must be correct before authoring begins.
*Source: Guzdial.*
*Fix: change "Ch.8 (JavaScript)" to "Ch.8 (Writing Real Programs in Python)."*

**B2. 7.5 Fix exercise — index mismatch against the project data format.**
The game-log through-line uses two-field lines (`"Alice: 1450"`). Splitting produces two parts; `[2]` always raises `IndexError`. The Fix exercise must use `[1]` with a blank-line trigger, or must explicitly switch to the three-field CSV format before using `[2]`. As written, the example is technically wrong and will confuse students who trace the code.
*Source: Hermans (verified with Python 3).*
*Fix: change `line.split(": ")[2]` to `line.split(": ")[1]` and use a blank line as the trigger, or reframe the exercise explicitly around the CSV format.*

**B3. 7.7 missing-commit BUG demo — `conn.execute("INSERT …")` on a database with no table raises `OperationalError`, not the target commit-trap behavior.**
The plan's worked example 2 assumes the `songs` table already exists from a prior session. If a student runs the demo fresh, they get a different error and the pedagogical point is lost. The fix: either sequence the CREATE TABLE + commit as an explicit setup step before the INSERT demo, or annotate clearly that example 2 follows example 1 within the same Python session.
*Source: Hermans (verified with Python 3).*
*Fix: restructure 7.7 worked example 2 so the CREATE TABLE (with commit) precedes the INSERT-without-commit demo.*

**B4. `str.split(sep)` with a custom separator, `str.join()`, and f-strings are all labeled "recalled from Ch.1" but are absent from the written c1.js.**
This is the single most widespread finding (6 of 7 reviewers). `c1.js` teaches only no-arg `split()`; `join` appears only in a codex note without an example or exercise; f-strings are not present at all. Ch.7 exercises in 7.5, 7.6, and 7.7 rely on all three. Until the authoring chain confirms these are taught in Ch.2–Ch.6, Ch.7 cannot treat them as recalls. If they land in Ch.4 or Ch.5 (not yet written), the dependency must be documented explicitly.
*Source: Downey, Guzdial, Malan, Oakley, Ramalho, Resnick.*
*Fix: audit c1.js–c6.js (when written) and either (a) confirm the concepts are taught in a prior chapter, updating the "Recalled from" list to name the correct chapter, or (b) introduce them formally in the first chapter that needs them. Authoring of Ch.7 is blocked on this confirmation.*

---

### MAJORS

**M1. 7.1 — namespace mental model is named but not built.**
The three import forms are presented as syntax without a concrete picture of what a namespace is. Students will memorise `import math` as an incantation rather than understanding that each module is a separate table of names. The fix is two sentences placed before worked example 1: "A module is like a separate room full of names. `import math` puts the key `math` in your room, pointing at that room; `from math import sqrt` carries one name out of the room into your own." This is Downey's top issue and is independently supported by Guzdial and Hermans.
*Source: Downey (MAJOR), Guzdial (MINOR), Hermans (MINOR).*
*Fix: add the two-sentence namespace picture as the conceptual anchor for 7.1 before any worked examples.*

**M2. 7.2 — `__name__ == "__main__"` taught as mechanics without the dual-role mental model.**
Three reviewers flag this independently. Students see the guard explained in terms of its effect but not in terms of the underlying fact it reads: Python runs every top-level line of a `.py` file on import, and `__name__` is a string variable Python sets differently depending on whether the file is being run directly or imported. The fix is one demonstration: `print(__name__)` inside the module file shows `"__main__"`; the same print after importing shows the module name. That single observation makes the guard a consequence, not a ritual.
*Source: Downey (MAJOR), Guzdial (MINOR), Hermans (MINOR).*
*Fix: add the `print(__name__)` demonstration as worked example 2's anchor; name the "dual-role" principle explicitly.*

**M3. 7.7 — cognitive overload: too many new SQL/sqlite3 concepts in one lesson.**
Hermans and Oakley both flag the same lesson independently. The concept list has 12+ new items (connect, cursor, execute, fetchall, commit, close, CREATE TABLE IF NOT EXISTS, INSERT INTO, VALUES with `?`, SELECT *, SELECT WHERE, the context-manager form, plus the commit-trap demo). For a student who has never seen SQL, this exceeds working-memory capacity. The lesson is correctly scoped as "a taste" but the content list does not match that intent.
*Fix: apply minimum-viable reduction: keep connect, cursor.execute, fetchall, commit, close, CREATE TABLE, INSERT, SELECT *. Move SELECT WHERE to the exercises where it is introduced once. Move the `?` placeholder safety explanation and the context-manager vs. manual form to a Going Deeper sidebar. The SQL injection Fix exercise can stay as it teaches a safety principle, but should be optional/starred.*

**M4. Missing warm-up questions for all seven lessons.**
Oakley flags this as a MAJOR violation of CURRICULUM-STRUCTURE.md §B, which requires a warm-up retrieval question in every lesson. None of 7.1–7.7 has one. Without retrieval practice at lesson start, Ch.1–Ch.6 knowledge goes into passive recognition mode before new Ch.7 material is layered on top.
*Source: Oakley (MAJOR).*
*Fix: add one warm-up per lesson. Oakley's suggestions are well-targeted: 7.1 ("Write the call that runs print with two arguments"), 7.2 ("What does return give back?"), 7.3 ("What does random.shuffle() return?"), 7.5 ("Call str.split() on 'a b c' with no arguments"), 7.6 ("Write the three forms of import"), 7.7 ("What is the difference between a Python list and a JSON file?").*

**M5. Missing Ch.5 and Ch.6 spiral recalls.**
The "Recalled from earlier chapters" section lists only Ch.1–Ch.4. Ch.7 sits after Ch.6; Ch.5 (decomposition, naming, DRY) and Ch.6 (classes, instances, AttributeError) are entirely absent from the spiral table, and no exercise in the plan asks students to apply OOP patterns from Ch.6 to module design. The "every lesson reuses prior concepts" rule is technically violated.
*Source: Guzdial (MAJOR).*
*Fix: add Ch.5 and Ch.6 to the recalled list; anchor at least one exercise in 7.2 to a Ch.6 object (e.g., the module exports a class the student built in Ch.6's capstone); note that Ch.5 debugging protocol applies when a ModuleNotFoundError appears.*

**M6. Missing Chapter Recap / retrieval-set section.**
CURRICULUM-STRUCTURE.md §C requires a sixth arc component: a chapter-recap retrieval set for future chapters to pull warm-up questions from. Ch.7 ends at the quiz with no such list. Without it, Ch.8 authors have no documented targets for spaced recall.
*Source: Oakley (MAJOR).*
*Fix: add a "Chapter Recap" section naming the 5–7 must-stick concepts and proposing retrieval questions for Ch.8's warm-ups.*

---

### MINORS

**m1. 7.3 — `math.floor(math.log2(n))` uses three unfamiliar things simultaneously.**
`log2` is not familiar 11-year-old math; the nesting is new; function composition is the point. Replace with `math.floor(math.sqrt(n))` or `math.ceil(math.pow(2, 3))` — both use only arithmetic already known.
*Source: Hermans.*

**m2. `pathlib.Path(__file__).parent / "notes.txt"` introduced without demystifying `__file__`, `Path.parent`, and `/` overloading.**
Three reviewers note this independently. The pattern is correctly scoped as "introduce, not teach," but a one-sentence note is the minimum: "`__file__` is the full path to the script being run; `.parent` is the folder it lives in; `/` here joins two path pieces — Path objects repurpose the slash character for this."
*Source: Downey, Hermans, Oakley.*

**m3. 7.7 — `conn.execute()` vs. `conn.cursor(); cursor.execute()` inconsistency across the lesson.**
The concepts section names the explicit cursor pattern; the BUG demo uses `conn.execute()` shortcut. Three reviewers flag this. Pick one and use it throughout 7.7. Prefer the explicit cursor form since `fetchall()` requires a cursor anyway.
*Source: Downey, Guzdial, Malan.*

**m4. `with sqlite3.connect()` — note that explicit `conn.commit()` inside the block is unnecessary.**
The plan correctly states the `with` block auto-commits on clean exit, but does not tell the student they do not need to call `conn.commit()` explicitly inside it. One sentence prevents cargo-culting.
*Source: Ramalho.*

**m5. DDL auto-commit in sqlite3 is undisclosed.**
`CREATE TABLE` persists even without an explicit `conn.commit()` in Python's sqlite3 default isolation mode, while `INSERT` does not. A student who observes this will be confused — both ran without a commit call. One sentence is needed: "Python's sqlite3 automatically commits structural changes (`CREATE TABLE`) but not data changes (`INSERT`, `UPDATE`)."
*Source: Resnick (verified).*

**m6. Rung non-monotonicity: 7.3 (3–5) dips after 7.2 (5–6); 7.7 (3–5) dips after 7.6 (5–6).**
CURRICULUM-STRUCTURE §E requires monotonic difficulty within a chapter. The 7.4 dip is separately justified ("intentionally lighter reading interlude") but 7.3 and 7.7 dips are not. Resolution: designate 7.3 and 7.7 as "concept entry" lessons that reset the ramp for a new sub-strand (api/library strand; sql sub-strand), and document this exemption explicitly in the plan. Alternatively, move 7.4 ahead of 7.3 so the lighter lesson precedes both rung-5–6 runs.
*Source: Guzdial (MAJOR), Malan (MINOR).*
*Recommended resolution: treat 7.4 as a reading interlude with its own rung taxonomy (reading rungs, not writing rungs), and note in the ramp table that 7.7 resets the ramp for the SQL sub-strand — this is the least disruptive fix.*

**m7. 7.1 — `dir(math)` floods output with dunder names before any user-facing names appear.**
Fix: show `[name for name in dir(math) if not name.startswith("_")]` as a given one-liner with the note "don't worry how this filter works yet — you'll see it in Ch.8," or use a curated list.
*Source: Hermans.*

**m8. 7.4 — lacks a context-first motivating scenario.**
Documentation reading only becomes meaningful when the student has already hit a concrete wall. Open 7.4 with a genuine question seeded from 7.3 ("You want to shuffle your playlist but you're not sure what `random` can do…"), not with a docs-anatomy checklist.
*Source: Guzdial, Resnick.*

**m9. 7.7 — no Predict (rung 1) exercise for SQL.**
Every other new syntax in the course includes at least one predict-the-output exercise before the student writes anything. SQL is a new formal language; a rung-1 exercise (given a full CREATE + INSERT + SELECT block, predict what `fetchall()` returns including the tuple structure) is especially important here.
*Source: Guzdial.*

**m10. Tuple JSON round-trip misconception framing is backwards.**
The plan frames the misconception as "Tuples cannot be serialized to JSON" (false) and the correction as "they can, but come back as lists." The actual student error is not the false belief about serialization; it is discovering at runtime that `type(loaded_val) == tuple` is `False`. Lead with the consequence: "If you put a tuple in and load it back, you get a list. Fix with `tuple(json.loads(s))` if you need the tuple type."
*Source: Ramalho.*

**m11. 7.3 — `random.shuffle` vs `sorted()` comparison conflates mutation/copy with the operation itself.**
The contrast should be: `shuffle` (in-place, returns None) vs. `list.sort()` (in-place, returns None) vs. `sorted()` (returns new list, does not touch original). Add the Python design rationale: in-place operations avoid copying large lists; `sorted()` is the complementary function when you need a non-destructive copy.
*Source: Ramalho, Resnick.*

**m12. 7.4 — `random.sample("hello", 10)` exact error message should match Python 3.**
Plan says "k cannot exceed population length." Actual message: `ValueError: Sample larger than population or is negative`. Update to match.
*Source: Ramalho.*

**m13. Challenge exercise 2 — `date.today().weekday()` or `strftime("%A")` not shown in any lesson.**
The challenge asks students to find the day of the week using docs. The plan should note explicitly "(use the docs — this method was not shown in any lesson)" so authors do not accidentally pre-teach it.
*Source: Oakley.*

**m14. Challenge exercise 8 — database state is ambiguous.**
The exercise combines JSON + SQL but no prior exercise explicitly transfers JSON data into the SQLite DB. The challenge should specify whether the DB is pre-populated or the student must populate it as part of the exercise.
*Source: Guzdial.*

**m15. ImportError / ModuleNotFoundError parent-child relationship is undisclosed in Codex.**
`ModuleNotFoundError` is a subclass of `ImportError` (`issubclass(ModuleNotFoundError, ImportError)` is `True`). Students who see a traceback showing `ImportError` where they expected `ModuleNotFoundError` will be confused. The Codex entry for `ImportError` should note: "Also the parent of `ModuleNotFoundError`."
*Source: Ramalho.*

**m16. 7.3 — `date` from `datetime` is an object like `Pet` from Ch.6; the plan does not name this.**
A one-sentence spiral note ("Notice `today` is an object — like the `Pet` you built in Ch.6") costs nothing and reinforces both chapters.
*Source: Downey.*

**m17. 7.4 — `help()` is introduced in 7.1 but never exercised before 7.4.**
Add one exercise in 7.1 where the student must call `help()` to find what `math.gcd` does and then use it. This bridges 7.1 to 7.4 organically.
*Source: Malan.*

**m18. Challenge exercise 8 — flag it explicitly as the hardest exercise.**
First multi-concept, multi-system exercise in the course. A one-sentence note ("This is the hardest exercise in the chapter — it combines every strand at once") sets appropriate expectations.
*Source: Downey.*

**m19. No explicit Ch.6-to-Ch.7 transition paragraph.**
After OOP, a student expects more objects. 7.1 pivots to `import math` without a bridge. One paragraph: "You now know how to organize code into functions (Ch.3) and objects (Ch.6). Python itself has thousands of solved problems waiting. This chapter is where you learn to use what others have already built."
*Source: Malan.*

**m20. 7.2 — `if __name__ == "__main__"` — `def` at module level is a statement too.**
The deeper explanation — Python runs every top-level statement on import, including `def` (which binds a name to a function object but does not call it) — is currently missing and would make the guard feel like a logical consequence rather than a ritual. One sentence: "Even `def hello():` at module level is a statement Python runs when it imports the file — it just creates the function without calling it."
*Source: Downey.*

**m21. 7.5 — list comprehension in teacher notes must be authoring guidance only.**
Both Hermans and Malan note that the comprehension must never appear in student-facing text. Restate the constraint as an explicit authoring gate: "Do not include `[p.strip() for p in ...]` in any student-visible code block, worked example, or prose — author notes only."
*Source: Downey, Hermans, Malan.*

**m22. 7.5 — `try/except` not woven in despite Ch.2 owning it.**
The `IndexError` Fix exercise and the `ValueError` from non-numeric score strings are both natural places to recall the Ch.2 `try/except` pattern. The plan mentions `ValueError` as an error class but does not build the connection. Show both the conditional guard and the `try/except` approach in the Fix exercise; let the student choose.
*Source: Guzdial, Hermans, Resnick.*

**m23. Docstrings absent from module functions in 7.2.**
Ch.3 established docstrings as the documentation contract for every function. Lesson 7.2's `def hello(name):` and `def celsius_to_fahrenheit(c):` should carry docstrings, reinforcing Ch.3 discipline rather than silently dropping it.
*Source: Hermans.*

**m24. 7.7 — `IF NOT EXISTS` clause not explained.**
The plan uses `CREATE TABLE IF NOT EXISTS` without explaining what happens when the clause is omitted and the script is run twice (`sqlite3.OperationalError: table songs already exists`). Apply the same anti-pattern-first standard used for the missing-commit trap.
*Source: Downey.*

**m25. Resnick's creative ownership concern — Chapter Challenge exercise 8.**
Exercise 8 should be reframed as "design your own small database for something you care about" rather than "query the music library." The checker can verify structural properties without dictating content. The concepts covered are identical; the student's ownership changes entirely.
*Source: Resnick.*

---

## Cross-cutting themes

**1. The "recalled from Ch.1" problem is systemic.**
Six of seven reviewers flag — from different angles — that the plan assumes fluency with `str.join()`, `str.split(sep)`, and f-strings that is not backed by written lesson content in c1.js. This is not a Ch.7 authoring error; it is a gap in the chapter dependency chain that blocks Ch.7 authoring. Resolution must come from the authoring chain audit, not from Ch.7 alone.

**2. Mental models vs. mechanics: every reviewer wants more "why."**
Downey (namespace picture), Guzdial (dual-role principle), Hermans (`__name__` as a visible string), Resnick (why `shuffle` mutates), Ramalho (why tuple round-trip matters) all ask for the same thing: don't just teach what the code does — teach the mental model that makes it obvious. The AUTHORING.md depth standard requires this, and Ch.7 meets it in some places (the music-library through-line, the missing-commit trap) but not uniformly.

**3. Cognitive load in 7.7 is a structural problem, not just a detail.**
Two independent reviewers (Hermans and Oakley) from different cognitive-load traditions reach the same conclusion: 7.7 cannot be a single lesson at its current content volume without restructuring. The word "taste" in the lesson title is not matched by the content list.

**4. Retrieval and spaced practice infrastructure is absent.**
Oakley identifies the missing warm-ups as a MAJOR violation. The missing Chapter Recap section is a separate gap. Both affect every chapter that follows Ch.7. These are structural requirements of the curriculum design (CURRICULUM-STRUCTURE.md §B and §C), not optional polish.

**5. Creative ownership is the plan's weakest dimension.**
Resnick's finding — that the student's role throughout 7.5–7.7 is always "complete this stub / fix this bug" with prescribed data — is the only finding that identifies a gap in the curriculum's core pedagogy rather than its technical accuracy. The music-library data set is well-chosen for coherence but creates a repetitiveness that a single open-ended option in Challenge exercise 8 would fix at zero cost to concept coverage.

---

## Reviewer conflicts and resolutions

**Conflict 1: Depth of SQL lesson (Oakley "cut aggressively" vs. Hermans "stage carefully").**
Oakley recommends moving `SELECT … WHERE` and the `?` placeholder to optional sidebars; Hermans recommends keeping them but sequencing more carefully. Both agree the lesson is overloaded; they differ on the cure.
*Resolution: adopt Oakley's minimum-viable core (connect, execute, fetchall, commit, close, CREATE, INSERT, SELECT *) as the required lesson content; treat SELECT WHERE and the context-manager form as "Going Deeper" — surfaced in the lesson but not required. The SQL injection Fix exercise (which teaches the `?` placeholder) is too valuable to cut entirely; mark it as the one required advanced item within the lesson. This satisfies both reviewers' intent.*

**Conflict 2: Rung monotonicity (Guzdial "fix the ramp" vs. Malan "the dip is sound pedagogy").**
Guzdial flags the 7.3 and 7.7 rung dips as a MAJOR violation. Malan acknowledges the dip at 7.3 and defends it ("sound pedagogy — rung 3-5 after rung 5-6 lets students use before they read docs"), but also calls it a MINOR requiring an explicit bridge.
*Resolution: Malan's is the stronger pedagogical argument. Designate 7.4 formally as a "reading interlude" with its own rung taxonomy (reading-comprehension rungs, not coding rungs) so it does not count against the coding-ramp table. Note in the ramp table that 7.7 resets the ramp for the SQL sub-strand with an explicit rationale sentence. This satisfies the structure rule without restructuring the lesson order.*

**Conflict 3: Level of f-string use in Ch.7 (Resnick "use them freely" vs. Ramalho "they're a gap").**
Resnick argues f-strings should appear in 7.5 and 7.6 output examples as the natural expression for an 11-year-old at this stage. Ramalho notes the gap in c1.js makes it unclear whether the student has been taught f-strings at all.
*Resolution: Ramalho is correct on the dependency chain; Resnick is correct on the aspiration. The actionable fix is to resolve the c1.js gap (Blocker B4) first. Once f-strings are confirmed as taught in a prior chapter, use them freely in Ch.7 output examples per Resnick's recommendation.*

**Conflict 4: Tuple misconception framing (Ramalho "lead with consequence" vs. plan's current "correct the false belief").**
No other reviewer disputes Ramalho's reframing; it is strictly better. No conflict to resolve — adopt Ramalho's suggested framing.

**Conflict 5: Challenge exercise 8 — open-ended vs. prescribed (Resnick "open it up" vs. current plan "prescribed music library").**
No other reviewer objects to opening exercise 8. Downey independently flags that the exercise deserves an explicit difficulty warning. Both notes are compatible with each other and with the current plan structure.
*Resolution: add Downey's difficulty note and adopt Resnick's reframing of exercise 8 as an optional extension: complete the prescribed music-library version as the baseline, then extend to a data set of your choice for the challenge tier.*
