# Panel Review — Ch.7 Modules & Data — Mitchel Resnick (Scratch, MIT Media Lab)
**Verdict:** Solid

---

## Findings (from my lens)

### 1. [MAJOR] Chapter-wide — the student never makes anything that belongs to them.

This is the question I ask about every chapter: what does the student get to *make* that feels theirs? In Ch.3 they made functions with their own names. In Ch.6 they made objects. In Ch.7 the strand project (7.5) is a game-log extractor that operates on a given string. The music-library (7.6) is the closest thing to a personal artifact, but the data set is given (`{"title": "Blue", "artist": "Eiffel 65", "year": 1998}`), the schema is given, and the functions follow a prescribed round-trip. Lesson 7.7's SQL exercises operate on songs.db, again with a prescribed structure.

The chapter teaches real, important skills, but the student's role throughout is: complete this stub / fix this bug / write this function to spec. There is no moment where they choose what to save, what to track, or what their data means. Compare this to what Scratch lets even younger children do: they pick a project idea and the tools serve it.

Fix: The Chapter Challenge, exercise 8 — the CLI combining JSON + SQL — is the right instinct, but it should be reframed as "design your own small database for something you care about" rather than "query the music library." Even a one-sentence prompt ("pick any collection of things you keep track of — games you've played, books, Pokémon, anything — and build a tiny CLI that saves and searches it") would transform the chapter's emotional register from technical exercise to creative tool. The concepts covered are identical; the student's ownership is completely different.

### 2. [MINOR] 7.2 — The worked-example module names are generic when they could be generative.

`greetings.py`, `converter.py`, `stats.py` — these are textbook module names. They are fine. But the chapter's own through-line is "you don't have to build everything from scratch." The best way to make that *feel* true is to have the student write a module that collects something they built in an earlier chapter. For example: "Take your `celsius_to_fahrenheit` function from Ch.3's capstone and move it into a `temperature.py` module. Then import it in a new script." That reuse would make the module concept feel like a genuine organising tool rather than a syntax exercise.

Fix: Replace one of the three `greetings.py`/`converter.py` worked examples with a callback to a function the student actually wrote in Ch.3. This is low-effort and high-impact.

### 3. [MINOR] 7.4 — "Reading Documentation" runs the risk of being a compliance lesson.

The lesson design is technically correct: walk through the `str.split` docs, identify parameters, predict output. But reading docs as a *skill* only becomes intrinsically motivating when the student needs a piece of the library to do something they *want* to do. The current framing — "read the docs page, answer these questions" — is how teachers assign reading. The more powerful framing is: "You want to shuffle your playlist randomly. You know `random` exists. How do you figure out what it can do?" That reframe turns documentation reading into a strategy for satisfying curiosity, not a step in a procedure.

Fix: Open 7.4 with a question the student actually has (something seeded in 7.3's worked examples), not with a docs page to decode. The content stays the same; the motivation shifts.

### 4. [MINOR] 7.5 — The "Write from scratch" exercise (parse_songs) has a creative ceiling that is too low.

The rung-6 exercise gives the student a CSV-like string and asks for a `parse_songs` function that returns a list of dicts. This is a fine exercise. But the data — song records — is identical to the music-library data from 7.6. The student writes from scratch, but they write the same shape of thing three times in a row (7.5, 7.6, 7.7 all work the same music-library data set). Each lesson serves the next rather than giving the student a moment to go sideways.

Fix: Let the rung-6 exercise in 7.5 be open: "Write a `parse_records` function for a CSV-like string of your choice. Give your data at least two fields. Invent the data." The checker can verify structural properties (returns a list, each item is a dict, at least 2 keys) without dictating the content. Low floor for compliance, wide walls for students who run with it.

### 5. [MINOR] 7.7 — The `CREATE TABLE` DDL auto-commit behaviour is undisclosed.

The plan demonstrates the "missing-commit trap" for `INSERT` statements, which is exactly right. But it does not mention that `CREATE TABLE` (DDL) in sqlite3's default isolation mode is handled differently: DDL statements cause an implicit commit in Python's sqlite3 module. Verified: `CREATE TABLE` persists even without an explicit `conn.commit()`. A student who observes that the table exists after reopening the database will correctly understand DDL persists, but may then be confused when their `INSERT` does not — both ran without a commit call. This inconsistency will seem like magic and should be named explicitly: "Python's sqlite3 commits `CREATE TABLE` automatically because it changes the database structure, not just the data inside it. `INSERT`, `UPDATE`, and `DELETE` — statements that change data — require an explicit commit."

Fix: Add one sentence in 7.7 naming DDL auto-commit so the contrast with DML is explicit.

### 6. [MINOR] 7.3 — `random.shuffle` in-place mutation deserves the "Why" framing.

The plan correctly flags the misconception that `shuffle` returns the shuffled list, and the fix-exercise has the student discover it returns `None`. But it does not ask "why did Python design it this way?" This is exactly the kind of question that 11-year-olds ask and that makes them feel seen. The answer is interesting: in-place operations on large lists avoid making a full copy in memory, and `sorted()` is the complementary function when you need a new list. Naming this design choice — and the contrast between `shuffle` (in-place, returns None) and `sorted` (returns new list, does not touch original) — is a depth moment the AUTHORING.md depth standard requires and the plan currently skips.

Fix: Two sentences in the 7.3 concept block: why `shuffle` mutates vs. why `sorted` returns new. Already touched in the exercise ("notice one returns None") — just add the *why*.

---

## Continuity notes

**Well-woven from c1–c3:**
- `str.strip()`, `str.split()`, `str.join()` are correctly flagged as Ch.1 recalls and not re-taught; the 7.5 inner-space trap (`'Bob ' == 'Bob'` is `False`) properly builds on Ch.1 immutability.
- `json.dumps(..., indent=2)` worked example correctly anticipates that the student already knows about default arguments from Ch.3 (paralleling `maxsplit=-1` in the docs lesson).
- `with` block's "closes automatically" framing echoes Ch.3's return-value mental model well: both are about Python doing housekeeping on your behalf.
- The `from random import choice` hook in 7.1 correctly recalls Ch.4 lists — `choice(["rock","paper","scissors"])` — which is verified taught in c2.js (loop-art-and-beats exercises use list literals).

**Missing / underdone:**
- **f-strings** are taught in Ch.1 and heavily used in Ch.2 and Ch.3, but they disappear from Ch.7 almost entirely. The worked examples in 7.5 and 7.6 build output strings with concatenation or raw `print`. The more natural expression at this stage would use f-strings. Omitting them here creates a slight regression in student fluency and should be corrected: the leaderboard output in 7.5 and the search results in 7.6 should model f-string output formatting.
- **`str.join()`** is listed as "recalled from Ch.1" in the overview but does not appear in any worked example or exercise in 7.5 (the lesson that does the most string processing). A worked example that uses `", ".join(names)` to print a ranked leaderboard would give the recall an actual appearance rather than a mention.
- **Ch.3 `return` values and function composition** are implicitly present everywhere in 7.5–7.7, but no warm-up or explicit callback connects to Ch.3 scope. The `parse_songs` rung-6 exercise should carry a warm-up that asks: "What does it mean for a function to *return* a value instead of printing it?" — this primes the test-and-verify pattern and recalls Ch.3 at the point where the student is writing the most independent code.
- **`try/except`** is owned by Ch.2 and used in Ch.2's capstone as the "bulletproof input" pattern (verified in c2.js lesson 2.8 / polygon generator). The 7.5 Fix exercise (`IndexError` on a missing `: ` separator) is a good place to recall that pattern explicitly — the guard the student adds could be a `try/except IndexError` block. The plan currently suggests only a conditional guard; both approaches should be shown so the student chooses.

**Re-taught by accident:**
- None found. The plan is careful about the spiral.

---

## What's strong

- **The misconception list is exceptional.** The DDL auto-commit behaviour is the one gap (see Finding 5). Everything else — `json.load` vs. `json.loads`, the CWD vs. script-folder confusion, the tuple-round-trips-as-list surprise, the `shuffle`-returns-None trap, the module-shadowing bug — is exactly the set of things that burn real developers and almost never appear in beginner curricula. This is the chapter's strongest suit: it treats the learner as someone who will actually use these tools, not just pass a quiz about them.

- **The sqlite3 `with` context manager caveat (7.7)** — that it commits but does NOT close the connection, unlike `with open()` — is a subtle and correct technical observation that most adult Python tutorials get wrong. Surfacing it here, as a contrast with the file-open context manager the student just learned in 7.6, is pedagogically sharp. This is the kind of "you might expect X because Y, but here it is actually Z" teaching that builds genuine mental models.

- **The difficulty ramp across 7.5→7.6→7.7** makes structural sense: the strand-application lessons (7.5, 7.6) are where the student writes from scratch, and 7.7 properly steps back to Modify/Complete for a genuinely new and denser concept (SQL). The chapter does not make the mistake of requiring rung-6 work for every new API.
