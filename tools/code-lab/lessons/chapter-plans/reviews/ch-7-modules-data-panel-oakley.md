# Panel Review — Ch.7 Modules & Data — Barbara Oakley (Learning How to Learn)
**Verdict:** Solid

---

## Findings (from my lens)

### Spaced Practice and Retrieval

1. [MAJOR] **Missing warm-up questions for all seven lessons.** Every lesson in Ch.6 specifies a warm-up retrieval question that activates prior knowledge and primes the new concept. Ch.7 has none — not a single warm-up is listed for any of 7.1 through 7.7. This violates CURRICULUM-STRUCTURE.md §B ("Warm-up — a quick recall question from an earlier lesson") and destroys the most reliable mechanism for consolidating Ch.1–6 knowledge before layering Ch.7 on top. Without retrieval practice at lesson start, prior concepts go into passive recognition mode and fade. Fix: add a warm-up to each lesson. Suggested starting points: 7.1 — "Write the call that runs the `print` function and passes two arguments." (establishes the function-call mental model before introducing `import`). 7.2 — "What does `return` give back, and what happens if a function has no `return`?" (primes the namespace discussion). 7.3 — "What does `random.shuffle()` return?" (the None-return trap from 7.3 is primed by reminding them `append()` returns None — Ch.4). 7.5 — "Call `str.split()` on `'a b c'` with no arguments. What does it return?" (fires Ch.1 recall before adding the sep= form). 7.6 — "Write the three forms of `import`." (Ch.7 spiral). 7.7 — "What is the difference between a Python list and a JSON file?" (7.6 spiral).

2. [MINOR] **Chapter Recap / Codex consolidation section is absent.** The six-part arc in §C of CURRICULUM-STRUCTURE requires a sixth item: "Chapter recap — Codex consolidation + a retrieval set for later spiral." Ch.7's plan ends at the Chapter Quiz and has no retrieval set specified for future chapters to pull from. This is the mechanism that makes spaced repetition work: if nothing is written here, the authoring team will have no list of recall targets when writing Ch.8 warm-ups. Fix: add a "Chapter Recap" section that (a) names the 5–7 most important must-stick concepts and (b) proposes retrieval questions for later chapters to use.

### Chunking and Cognitive Load

3. [MAJOR] **7.7 (SQL) contains a dangerous chunking spike.** A single lesson introduces: `sqlite3.connect`, `conn.cursor()`, `cursor.execute()`, `conn.commit()`, `conn.close()`, `CREATE TABLE IF NOT EXISTS`, `INSERT INTO … VALUES (?, ?)`, the `?` placeholder and its SQL-injection rationale, `SELECT *`, `SELECT … WHERE`, `cursor.fetchall()`, the context-manager form with its non-closing behavior, and the missing-commit trap (roll-back on close). That is twelve distinct new concepts in one lesson at rungs 3–5. For a learner who has never seen SQL or databases, this exceeds working-memory capacity. It also introduces concepts that are interdependent in a way that is hard to sequence — you cannot teach `SELECT … WHERE` before you understand `cursor.execute()`, and you cannot teach `cursor.fetchall()` before `SELECT`. The plan does label this "A Taste of SQL" and scopes it to one lesson, but the content list has not been trimmed to match that intent. Fix: cut to the irreducible minimum needed for the Ch.11.4 capstone: `connect`, `cursor.execute`, `fetchall`, `commit`, `close`, and one SQL keyword set (`CREATE TABLE`, `INSERT`, `SELECT *`). Move `SELECT … WHERE`, the `?` placeholder safety explanation, and the context-manager form to a "Going Deeper" sidebar marked as optional. The SQL injection fix exercise (currently in 7.7) is excellent but belongs in the capstone, not in the tasting lesson.

4. [MINOR] **7.4 (Reading Documentation) is good but its worked examples span four separate libraries** (`str.split`, `json.dumps`, `random.sample`, `math.ceil`) in a lesson explicitly scoped as "intentionally lighter." Four different library docs pages in one lesson is four contexts to hold simultaneously. The plan's instinct is correct — make this lesson lighter — but lighter means fewer examples, not the same number of examples at lower rung. Fix: cut to two worked examples (keep `str.split` and `json.dumps` since both reappear in 7.5–7.6), turn `random.sample` and `math.ceil` into the exercises instead of worked examples.

5. [MINOR] **7.6 introduces `pathlib.Path(__file__).parent / "notes.txt"` as an aside.** The plan says "introduce as a pattern, not a concept lesson" — that is correct intent — but doing it inside the lesson that is already teaching `open()`, `with`, `.read()`, `.readlines()`, `.write()`, `json.dump/load`, `json.dumps/loads`, JSON-supported types, and tuple round-trip behavior means the aside lands when the learner's working memory is near capacity. Fix: move the CWD / pathlib note to a teacher sidebar or an expandable "If this happens to you…" block. It is important but it is not Chapter 7 material.

### Illusions of Competence

6. [MINOR] **7.3 introduces `date.today()` from `datetime`, then the Chapter Challenge (item 2) asks learners to "use the `datetime` docs page to look up `date.today()` and print the current day of the week."** This is good: docs → use → apply. But nowhere in any lesson or exercise does the student actually compute a day of the week — `date.today().weekday()` or `date.today().strftime("%A")` — before the Challenge asks for it. If 7.4 teaches docs-reading, and Challenge item 2 requires docs-reading applied to `weekday()`, that is appropriate independence. But the plan should note explicitly that learners need to use the docs for this (not recall from a worked example), so the author knows to keep it out of the lessons. Currently this reads ambiguously. Fix: add a parenthetical in Challenge item 2: "(use the docs — this method was not shown in any lesson)."

### Spaced Recall of Prior Concepts

7. [MINOR] **The plan claims `str.split(sep)` with a custom separator is "recalled from Ch.1."** Verified against the actual written lesson file `c1.js`: the lesson teaches no-arg `str.split()` only (in Lesson 1.5, listed in the codex as `s.split()`). No worked example or exercise in c1.js uses `split(sep)` with an explicit separator argument. The plan also claims `str.join()` is "recalled from Ch.1" — this is also absent from c1.js; `.join()` appears nowhere in the actual written content. And CURRICULUM-STRUCTURE.md §D lists f-strings (incl. `:.2f`), indexing, and slicing as Ch.1 owned — but none of these appear in the actual c1.js file either. This is a continuity discrepancy between what the plan assumes and what was actually built. Fix: the Ch.7 authoring team must verify which string concepts are genuinely in the student's head (from c1.js + c2.js + c3.js + c4–c6 lessons) before using "recalled from Ch.1" labels. Specifically: (a) `split(sep)` — was it taught in Ch.4 or Ch.5? If not, it must be introduced in 7.5, not recalled. (b) `str.join()` — if not in any prior written lesson, 7.5 must own it, not recall it.

---

## Continuity notes

**Well-woven recalls (confirmed by actual lesson files):**
- Ch.2 `try`/`except` (c2s8): the `ValueError` and `IndexError` error classes in 7.5–7.6 are well-positioned as applications of what was deeply taught in Ch.2.
- Ch.3 functions (c3.js): the framing of "a module is a file full of functions you didn't write" builds naturally on Ch.3's function mental model. The `__name__ == "__main__"` guard is correctly explained as a scope/call pattern, not a new concept.
- Ch.4 dicts: the accumulator dict pattern in 7.5 (per-player scores) is a correct and rich recall of Ch.4's dict-accumulation pattern.
- Ch.2 `for` loops + Ch.4 lists: used throughout 7.5–7.7 without re-teaching. Correct.
- Ch.6 OOP: 7.7 uses the music library from 7.6 as the data source, creating a clean spiral back to the music domain without re-teaching OOP.

**Missing or unverified recalls (potential holes):**
- `str.split(sep)` with an explicit separator: not confirmed in c1.js. If not taught by Ch.6, 7.5 must introduce it, not recall it.
- `str.join()`: not in c1.js. The 7.5 example `[p.strip() for p in line.strip().split(":")]` references it in teacher notes without a prior mention in any written lesson.
- f-strings: not in c1.js. The f-string `f"…{name}…"` in the 7.7 SQL injection exercise is used casually. If f-strings were first taught in Ch.2 (c2.js has one example, line 617, as an incidental use in a comment, but no teaching of f-string syntax), the learner at Ch.7 has never had a lesson that formally teaches them. The 7.7 fix exercise (`f"…{name}…"` string formatting inside `execute()`) assumes the learner can read and write f-strings. This needs to be confirmed against what is actually written in c2.js–c6.js.
- Sorting with `sorted()`: the 7.5 leaderboard requires ranking player totals, but no sort method is specified in the plan. The learner won't know `sorted()` until Ch.8 unless Ch.4 introduced it. Verify against the Ch.4 plan.

**Accidental re-teaching risks:**
- None found. The plan is careful to mark `strip()`, `split()`, `lower()` as "recalled, not re-taught." The distinction between `json.load` (file) and `json.loads` (string) is new and correctly owned here.

---

## What's strong

- **The project through-line is coherent and motivating.** The music library data set runs from 7.5 (parse it from raw text) → 7.6 (save/load as JSON) → 7.7 (query in SQLite). This is not three unrelated exercises; it is one evolving artifact. For a learner at this level, seeing data move from raw text to a persistent database in three lessons is exactly the kind of "I built something real" payoff that sustains engagement.

- **Misconception inventory is unusually thorough.** The plan names 13 chapter-wide misconceptions and verifies several of them with actual Python runs (tuple JSON round-trip, `json.load(string)` raising `AttributeError`, `with sqlite3.connect()` not closing the connection). This is the research-first standard working correctly. The `split(' ')` vs `split()` behavior and the inner-strip trap in 7.5 are both verified against `python3` output and explained precisely.

- **The SQL injection fix exercise in 7.7 is excellent.** Teaching a 12-year-old that f-string formatting inside `execute()` is a security hole — and making the fix a hands-on exercise — is one of the most professionally relevant things in the whole Python sequence. The plan is careful to make the fix (use `?` placeholders) the active task rather than the break, which is the correct rung assignment.
