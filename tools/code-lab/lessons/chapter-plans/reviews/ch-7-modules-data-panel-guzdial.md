# Panel Review — Ch.7 Modules & Data — Mark Guzdial (Georgia Tech, computing education research)
**Verdict:** Solid

## Findings (from my lens)

1. [MAJOR] Chapter Quiz (gate) — "must pass before Ch.8 (JavaScript) unlocks" is factually wrong. Ch.8 is *Writing Real Programs in Python* (confirmed in ch-8 plan, which itself says "must pass to unlock Chapter 9 (JavaScript)"). This is a continuity error that will confuse any author or learner reading the plan. Fix: change to "must pass before Ch.8 (Writing Real Programs in Python) unlocks."

2. [MAJOR] Rung progression violates CURRICULUM-STRUCTURE monotonic difficulty requirement. The per-lesson dominant rungs are: 7.1 (3–5) → 7.2 (5–6) → 7.3 (3–5) → 7.4 (1–4) → 7.5 (5–6) → 7.6 (5–6) → 7.7 (3–5). Two lessons (7.4 and 7.7) dip below the preceding lesson, and 7.7 is the final concept lesson before the Challenge. CURRICULUM-STRUCTURE §E says "each lesson is harder than the previous lesson in the chapter." The plan's own table acknowledges this and frames 7.4 as "intentionally lighter," but that framing conflicts with the locked structure. Fix: either reorder so 7.4 precedes the rung-5–6 lessons, or explicitly designate 7.4 as a reading interlude that carries a different rung taxonomy and does not count against the difficulty ramp.

3. [MAJOR] Missing Ch.5 and Ch.6 spiral recalls. The plan's "Recalled from earlier chapters" section lists only Ch.1–4. Ch.7 sits after Ch.6 (OOP); the student has been through Ch.5 (decomposition, naming, DRY, debugging protocol) and Ch.6 (classes, instances, methods, AttributeError). Neither chapter appears in the spiral-weaving table, and no exercise in the plan applies OOP patterns from Ch.6 to module design (e.g., "your greetings.py module exports a class you built in Ch.6") or applies the Ch.5 debugging protocol to a ModuleNotFoundError. This is a missed spiral opportunity and technically violates the "every lesson reuses prior concepts" rule. Fix: add Ch.5 and Ch.6 to the recalled list, and anchor at least one exercise in 7.2 or 7.5 to a Ch.6 object.

4. [MINOR] Challenge exercise 8 is ambiguous about database state. It asks the student to "load the music JSON library, prompt the user for an artist name, query the SQLite DB for all songs by that artist, and print them." This implies the SQLite DB already exists and is populated — but no prior exercise in the chapter explicitly transfers JSON data into the DB. The student could reasonably ask: is the DB pre-populated, or do I also write the insert loop? Fix: add one sentence specifying whether the DB is given pre-populated or the student must populate it as part of the exercise.

5. [MINOR] Lesson 7.4 (Reading Documentation) lacks a context-first motivating scenario. My research on novice learners (including work on MediaComp) shows that documentation-reading is most learnable when students have already hit a concrete wall — they encountered a function they need and cannot figure it out from the name alone. The plan goes straight to "walk through the str.split docs page together" without first presenting a situation where the student needed something they did not know. Fix: open 7.4 with a one-paragraph scenario: "You want to know how many characters in the longest word in a list — you've heard of `max()` but you're not sure how to make it work on word lengths. How do you find out?" That makes reading docs feel like the answer to a real question, not a skill drill.

6. [MINOR] Lesson 7.7 (SQL) introduces an entirely new formal language (SQL) with no Predict (rung 1) exercise. Every other new syntax in this course — booleans, loops, functions, classes — includes at least one predict-the-output exercise before the student writes anything. Rung 1 is particularly important when the new syntax is not Python: the student needs to form a mental model of what a SELECT statement returns before they write one. Fix: add one rung-1 exercise: give a complete working CREATE + INSERT + SELECT block and ask the student to predict what fetchall() returns, including the tuple structure.

7. [MINOR] The `__name__ == "__main__"` guard in 7.2 is correctly taught in context, but the deeper *why* (module as a namespace vs. a script) deserves explicit naming as a CS principle. The research literature on namespace confusion in novices (Sorva, 2013; my own MediaComp studies) consistently shows that the concept of "this file is both a runnable script AND a reusable module" is a genuine mental-model discontinuity. The plan covers the mechanics but does not name the principle. Fix: add one sentence: "This is the dual-role problem: every .py file is simultaneously a script you can run and a module someone else can import. The guard lets it play both roles cleanly." This costs two lines and eliminates a persistent misconception.

## Continuity notes

**Well-woven from c1–c3:**
- Ch.1 string methods: `split`, `join`, `strip`, `lower`, `upper` are consistently marked "recalled from Ch.1" throughout 7.5, and the immutability point is explicitly flagged. Correct.
- Ch.3 functions: every import lesson frames the imported functions through the Ch.3 mental model ("you are calling functions from another file"). This is the right scaffold — students already know what a function call looks like, so `math.sqrt(9)` is not alien syntax.
- Ch.2 loops and Ch.4 dicts: used in 7.5 and 7.6 for the accumulation pattern. Appropriate.

**Missing or incorrectly handled:**
- Ch.5 and Ch.6 are entirely absent from the recalled list (see finding 3 above).
- `try/except` from Ch.2 lesson 8 is not woven into 7.5 or 7.6, even though parsing messy text and reading files are exactly the scenarios where `try/except ValueError` and `try/except FileNotFoundError` are natural. The Ch.2 lesson taught `try/except` precisely for `input()` conversion errors; a split producing a non-numeric score string is structurally identical. This is a missed spiral reinforcement.
- The `enumerate()` built-in, listed in CURRICULUM-STRUCTURE §D as owned by Ch.4, is not recalled in 7.5 despite the line-by-line parsing exercises being a natural fit.

**Concepts appearing early (appropriate low-floor uses):**
- `pathlib.Path` appears in 7.6 as an idiom without a full lesson — explicitly scoped as "introduce as a pattern, not a concept lesson." This is appropriate. Students see it work without needing to understand Path objects fully.
- The list comprehension in 7.5 worked-example 2 is placed in teacher notes only, with the student exercise explicitly using a plain loop. Correct scoping per Ch.8 ownership.

## Technical verification

All technical claims in the plan were verified with Python 3:
- Tuple-to-JSON round-trip: `json.loads(json.dumps((1,2,3)))` returns `[1, 2, 3]` (list, not tuple). Correct.
- `json.load(string)` raises `AttributeError: 'str' object has no attribute 'read'`. Correct.
- `str.split()` vs `str.split(' ')` on a string with multiple spaces: no-arg returns `['hello', 'world']`; space-arg returns `['', '', 'hello', '', '', 'world', '', '']`. Correct and well-explained in the plan.
- Inner-space trap: `'  Bob : 882  '.strip().split(':')` gives `['Bob ', ' 882']`; `'Bob ' == 'Bob'` is `False`; `int(' 882')` is `882`. All correct and plan notes all three behaviors.
- `random.shuffle` returns `None`. Correct.
- `math.ceil(-4.1)` returns `-4`. Correct.
- `with sqlite3.connect(…)` auto-commits on clean exit but does NOT close the connection. Plan explicitly states both behaviors. Correct.
- sqlite3 INSERT without `commit()` followed by `close()` loses the rows. Confirmed.

One technical note for the author: the plan's missing-commit trap example in 7.7 uses `conn.execute(…)` directly, which is valid — `sqlite3.Connection` has a shortcut `execute()` method. However, lesson 7.7 also introduces `conn.cursor()` as the standard pattern. Students will see two different idioms for the same operation within the same lesson. Add one sentence acknowledging this: "`conn.execute(sql)` is a shortcut that creates a temporary cursor internally — it is equivalent to `conn.cursor(); cursor.execute(sql)` in one step."

## What's strong

- **The missing-commit trap in 7.7 is excellent pedagogy.** Showing the broken behavior first (insert without commit, re-open, get empty result), then showing the fix, is exactly the evidence-based "predict-observe-explain" pattern my research supports. Most introductions to sqlite3 skip this because it is tedious; skipping it produces persistent bugs. This plan does not skip it.
- **The through-line (personal music library) carries all three strands coherently.** The same data set is parsed from text in 7.5, saved and loaded as JSON in 7.6, and queried in SQLite in 7.7. This is authentic data flow — not three disconnected demonstrations — and it gives the student a meaningful reason to use each tool. Media computation at its best: one real artifact, multiple transformations.
- **Misconception coverage is unusually thorough.** The chapter-wide misconceptions section reads like a real debugging guide for the target age group: the `json.load` vs `json.loads` confusion, the CWD trap, the `shuffle` returns None trap, the `split(' ')` vs `split()` distinction — all are present, correctly explained, and keyed to error classes. This is the level of detail that prevents help-desk questions.
