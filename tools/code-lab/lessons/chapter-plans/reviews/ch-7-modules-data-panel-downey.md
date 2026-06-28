# Panel Review — Ch.7 Modules & Data — Allen Downey (Think Python)
**Verdict:** Solid

---

## Findings (from my lens)

### Mental models and the "why"

1. [MAJOR] **7.1 — namespace mental model is named but not built.**
   The plan says "dot notation explained" but gives no worked mental model of what a namespace actually is. Students at this level will understand `math.sqrt` as a magic incantation unless they have a concrete picture: a module is a separate room with its own names; dot notation opens the door to that room and grabs the name on the other side. The chapter-wide misconception list says "import re-runs the file every time — Python caches after first load." That is true but it is a *caching* fact, not a *namespace* explanation. What students most need to hear is: every module has its own table of names; `import math` adds the key `math` to your file's table, pointing at that room; `from math import sqrt` copies one name out of the room into your own table. Without this picture, the difference between `import X` / `from X import Y` / `import X as Z` is a list of syntax forms, not an idea. AUTHORING.md is explicit: build the mental model alongside the syntax. Fix: add a two-sentence namespace picture before the first example in 7.1.

2. [MAJOR] **7.2 — `__name__ == "__main__"` guard gets the right explanation but misses the mental model of *when* Python runs module-level code.**
   The guard is well-motivated ("show what happens without the guard"). But the deeper why — Python runs every top-level statement in a `.py` file the moment it imports it, and the guard short-circuits that — is not stated. A student who understands that `def` statements at module level are *also* statements that run on import (they just bind a name to a function object, they do not call the function) will understand the guard naturally. A student who does not will memorise it as a ritual. The mental model to add: "When Python imports your file, it runs every line from top to bottom, just like running a script — `def` included. The `__name__` guard is a conditional that reads differently depending on who is running the file." One sentence. Currently missing.

3. [MINOR] **7.3 — API concept is sound; the `date.today()` wrinkle needs one more word of honesty.**
   The plan notes correctly that `date` is a class and `today()` is a method on it. It suggests `from datetime import date` to avoid the three-level chain. That is good pedagogy. But the plan uses this as a worked example for "using an object from a library without knowing how it works" — and then has the student print `today.year`, `today.month`, `today.day`. Students who have just finished Ch.6 (classes) will immediately ask: "Is `date` an object the same way `Pet` was an object?" The answer is yes, and saying so explicitly would reinforce both Ch.6 and Ch.7 at no cost. Currently the plan treats this as an opacity win ("how it works inside is irrelevant"), which is true, but it misses a spiral-weaving opportunity. Fix: one note in the worked-example commentary: "Notice `today` is an object — like the `Pet` you built in Ch.6 — and `.year` is an attribute."

4. [MINOR] **7.4 — "Reading Documentation" lesson has the right exercises but the wrong primary mental model.**
   The lesson frames docs-reading as anatomy — signature, parameters, return value, examples section. That is a fine reference checklist. But the mental model I would give a student is: *a function's signature is a contract*. The contract says what you must hand in and what you will get back. Docs annotate that contract. If you internalise "signature = contract", you know instinctively where to look: give me the types I need to supply and the type I will receive. Without that frame, the anatomy list is just labels. Fix: one sentence at the top of 7.4 calling a signature a contract, then the anatomy list hangs on that idea.

5. [MINOR] **7.5 — list comprehension slips into a footnote without a gate.**
   The plan says: "the `for` comprehension here is shown only as a one-liner shorthand in teacher notes; the student exercise uses a plain loop, per Ch.8 scope." That boundary is correct and well-placed. But the plan exposes the comprehension syntax in the teacher note without explaining to the *author* how that note reaches the student. If it appears as a code comment in a read-only example, a strong 11-year-old will ask "what does that `[p.strip() for p in ...]` mean?" and find no explanation in the lesson. The plan should be explicit: comprehension syntax appears *only* in the author note, never in student-facing code or worked examples. Fix: restate the constraint as an authoring guard, not just a sequencing note.

6. [MINOR] **7.6 — `pathlib.Path(__file__).parent` is introduced as a pattern without sufficient framing.**
   The plan correctly identifies the CWD trap and suggests the pathlib idiom as a safe pattern. But `Path(__file__).parent / "notes.txt"` is a line of code involving operator overloading (`/` on Path objects), a dunder attribute (`__file__`), and an import not yet shown. For a student whose mental model of `/` is "divide a number", seeing it join two filesystem paths will be confusing unless the author writes one demystifying sentence. The plan's instruction "introduce as a pattern, not a concept lesson" is reasonable — but the minimum framing required is: "`__file__` is the full path to the script Python is running right now; `Path(...).parent` is the folder it lives in; `/` here means 'join two path pieces' — it is the same `/` character but Path objects repurpose it for joining." Without that, the pattern is magic. Fix: add this sentence to the worked-example notes in 7.6.

---

### Technical verification results

All claims I checked ran correctly against Python 3.14:
- Tuple-to-JSON round-trip: `json.loads(json.dumps((1,2,3)))` → `[1,2,3]`, type `list`. Correct.
- `json.load('{"a":1}')` → `AttributeError: 'str' object has no attribute 'read'`. Correct.
- `math.ceil(-4.1)` → `-4`. Correct.
- `random.shuffle(lst)` → `None`. Correct.
- `split()` vs `split(' ')`: `'a  b'.split()` → `['a','b']`; `'a  b'.split(' ')` → `['a','','b']`. Correct.
- `int(' 882')` → `882` (works silently); `' Bob ' == 'Bob'` → `False`. The inner-space trap analysis in 7.5 is accurate and useful.
- sqlite3 context manager auto-commits on clean exit and rolls back on exception. Confirmed correct. Connection remains open after `with` block — correctly noted in plan.
- Missing-commit trap (7.7 worked example 2): rows disappear without `commit()`. Confirmed.
- `from math import Sqrt` → `ImportError: cannot import name 'Sqrt' from 'math'`. Correct.
- `random.sample('hello', 10)` → `ValueError: Sample larger than population`. Correct.

One subtle correctness note: the plan's 7.7 example 2 shows `conn.execute(...)` directly on the connection object (no explicit cursor). In Python's `sqlite3`, the `Connection` object itself has an `execute()` shortcut that creates an implicit cursor. This is valid Python but differs from the `conn.cursor(); cursor.execute()` pattern taught in 7.7 concepts. The inconsistency is harmless for this worked example but could confuse a student who then tries `conn.fetchall()` (which does not work — fetchall is on the cursor, not the connection). The author should pick one style and stay consistent throughout 7.7. Recommend: use explicit cursor in all 7.7 code.

---

### Scope and sequencing

7. [MINOR] **7.7 comes after 7.6 but uses the same data set (music library). This is good. However, the ordering of skills within 7.7 is slightly off.**
   The plan introduces `CREATE TABLE IF NOT EXISTS` without explaining the `IF NOT EXISTS` clause — a student who runs the script twice will see no error (because of `IF NOT EXISTS`), but a student who forgets it and runs the script twice will get `sqlite3.OperationalError: table songs already exists`. That error deserves one sentence of preemptive explanation: "The `IF NOT EXISTS` clause is a safety guard — without it, running the script twice would crash with an error because the table already exists." Currently `IF NOT EXISTS` is mentioned but not explained. This is the same standard the chapter applies to the missing-commit trap (explain the wrong version first, then the fix). Apply it here too.

8. [MINOR] **Chapter Challenge exercise 8 is excellent but its prerequisite is Ch.4 dicts, which are assumed but Ch.4 is not yet written.**
   The plan correctly lists Ch.4 as a recalled chapter. The chapter-plan for Ch.4 confirms dicts and lists will be owned there. The dependency chain is sound. However, the challenge's final exercise (exercise 8: CLI + JSON + SQL) will be the first time a student simultaneously uses three distinct file/data systems in one program. The plan's description does not flag this as deliberately hard. It should. A one-sentence note ("This is the hardest exercise in the chapter — it combines every strand at once") sets appropriate expectations without reducing the challenge.

---

## Continuity notes

**What is well-woven from c1–c3:**

- `str.split()` and `str.strip()` appear in c1.js (lesson 1.5) as taught methods. The plan correctly marks these as recalls. The inner-space trap in 7.5 (showing `' Bob ' == 'Bob'` is `False`) is a perfect extension of c1.js's immutability lesson — it applies what students already know in a new context. Well done.
- `try/except` is fully taught in c2s8 (Chapter 2, lesson 8), including EAFP, bare-except dangers, and bulletproof input. Chapter 7 can assume this fluently.
- `def`, parameters, `return`, scope, and docstrings are all taught in c3.js. The plan's use of functions (`save_library`, `load_library`, `search_by_year`, `parse_songs`, `mean`, `maximum`) as scaffolding targets in exercises is well-calibrated — it keeps the expected form familiar while adding the new content.
- The accumulator pattern (initialise before loop, update inside, read after) is named and taught in c2.js. The plan's 7.5 leaderboard project uses this pattern explicitly with dicts. Continuity is sound.

**What is missing from continuity:**

- **f-strings**: c1.js does not appear to teach f-strings — the c1 worked examples use string `+` concatenation and `str()` conversion (e.g., the age greeter at line 641 uses `"Hi " + name + ...`). The CURRICULUM-STRUCTURE.md §D says f-strings (including `:.2f`) are owned by Ch.1. If they are owned by Ch.1 but not yet in c1.js, that is a c1.js gap, not a Ch.7 gap. But Chapter 7 exercises should not assume f-strings until that gap is resolved. The plan uses f-strings in multiple worked examples without flagging that they may need to be recalled. This is a coordination risk: if f-strings are added to c1.js before Ch.7 is written, no problem; if not, Ch.7 authors will need to use `str()` + `+` or add an early recall step.

- **`str.split(sep)` with a custom separator**: c1.js teaches `split()` with no argument (split on whitespace). The plan's 7.5 worked example 1 uses `"Alice: 1450".split(": ")` — split with a custom separator string. This is a new behaviour of `split`, not a re-use of the existing one. The plan acknowledges this ("deeper data-wrangling string methods owned here"), but the claim that `split(sep)` is "recalled from Ch.1" is slightly misleading: Ch.1 teaches the no-argument form. The custom-separator form is new. The author should frame it as an extension, not a recall.

- **`str.join()`**: c1.js does not show `join()` in the lesson content (only the codex entry mentions it). The plan marks it as "recalled from Ch.1" in 7.5. If the actual c1.js content does not include a worked example of `join()`, using it in 7.5 without re-introduction will confuse students. Check c1.js and either add `join()` to c1s5 or introduce it properly in 7.5 instead of treating it as recalled.

- **Ch.4 dicts and lists** are assumed throughout Ch.7 but Ch.4 is not yet written. The dependency is architecturally correct (Ch.7 comes after Ch.4) but authors must verify that the specific dict operations used in Ch.7 — in particular `dict.get()` for safe lookup, `for key in d`, and looping over `dict.items()` — are explicitly taught in Ch.4 before Ch.7 exercises rely on them.

**Re-teaching by accident:**

- None detected. The plan is disciplined about marking what is recalled vs. what is new. The explicit "do not re-teach" callouts in the recap section are correct.

---

## What's strong

- **The misconception inventory is the best I have seen in this course so far.** The plan enumerates 14 chapter-level misconceptions and validates the non-obvious ones against real Python. The tuple round-trip claim, the `json.load`-vs-`json.loads` distinction, the CWD trap, the `commit()` rollback trap, and the sqlite3 context-manager-does-not-close caveat are all present and verified. This is what AUTHORING.md demands: every technical claim verified before writing it. The plan meets the bar.

- **The missing-commit trap in 7.7 is taught in exactly the right way.** The plan shows the broken version first, explains the failure mode, then fixes it. This is the EAFP / anti-pattern-first approach that AUTHORING.md requires for every construct with a common misuse. It is also the most common real error beginners make with sqlite3, so teaching it explicitly, early, and with a runnable demo is high-value.

- **Scope discipline is excellent.** No `JOIN`, no `UPDATE`, no `DELETE`, no class methods, no list comprehensions before Ch.8, no inheritance, no lambdas. The plan is clear about exactly what is taught and what is deferred, and the deferral rationale is sound in every case. The note "full SQL deferred to Ch.11.4" gives the student a forward reference without overpromising. This is the kind of scope control that prevents lessons from drifting into encyclopaedia entries.

---

## 3-line summary

**Verdict: Solid.** The technical content is accurate, the misconception list is thorough, and the scope discipline is exemplary.

**Top issue 1:** The namespace mental model in 7.1 is missing — students need a concrete picture of "module as a separate room of names" before the three import forms make sense as ideas rather than syntax forms.

**Top issue 2:** The continuity claim that `str.split(sep)` and `str.join()` are "recalled from Ch.1" overstates what c1.js actually teaches — the separator form of `split` and `join` are new in Ch.7 and must be introduced as extensions, not recalled as prior knowledge.
