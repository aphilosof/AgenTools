# Deep Review Round 2 — Ch.8 Real Programs
**Verdict:** Needs fixes
**Python verified on:** 3.14.5

---

## Round-1 fixes audit

Each fix from the synthesis is checked against the current revised plan.

**B1 — Factual error in 8.6b spec: remove "using list comprehensions" for min/max**
CONFIRMED-FIXED. 8.6b now reads: "uses a list comprehension to filter days below the threshold; finds min, max, and mean with `min()`, `max()`, `sum()`, and `len()`." Verified: `min([10,20,30])` = 10, `max([10,20,30])` = 30 — built-ins that iterate internally; no comprehension needed or correct. Note appended confirming this: "Verified: `min(data)` and `max(data)` are the correct tools; wrapping them in a comprehension is redundant."

**B2 — Factual error in 8.4 worked example: "five lines" → "three lines"**
CONFIRMED-FIXED. 8.4 now says "three lines → one line" with a parenthetical "(Note: 'three lines' is the accurate count for a simple for-loop-with-append, not five.)" Verified by counting: `result = []` / `for x in iterable:` / `    result.append(x)` = 3 lines. The `{w: len(w) for w in words}` for-loop equivalent is also 3 lines (`result = {}` / `for w in words:` / `    result[w] = len(w)`). Both claims in the revised plan are arithmetically correct.

**B3 — `except ExceptionType as e` introduced without prior scaffolded encounter**
CONFIRMED-FIXED. 8.3 now opens with a Predict worked example (rung 1) showing `except KeyError as e` with an explicit reveal of what `{e}` vs `{e.args[0]}` prints before any exercise requires the student to write it. The first exercise using `as e` is a rung-4 Fix, not a rung-5 Complete. The plan explicitly labels this the "first encounter."

**B4 — Concepts-Owned list incorrectly claims `try`/`except` for Ch.8**
CONFIRMED-FIXED. The Concepts-Owned section now splits into two explicit groups: "Deepened here (first taught Ch.2, c2s8)" covering `try`/`except`, multiple `except` blocks, bare-except danger, EAFP, and the input loop; and "New in Ch.8" covering `except E as e`, `else`, `finally`, `raise`. Verified against c2.js: lesson c2s8 (line 953, title "try and except") contains all five deepened concepts with worked examples and exercises to rung 5.

**M1 — 8.3 cognitive overload: too many new constructs in one lesson**
CONFIRMED-FIXED. `raise` is deferred to 8.6a–8.6d (introduced at the point of need). `finally` is demoted to a sidebar callout. The 8.3 core is now `except E as e`, `else` clause, `KeyError`/`IndexError` catching decision, and the `finally` sidebar — manageable for one lesson.

**M2 — `else` clause worked example only shows success path**
CONFIRMED-FIXED. 8.3 now has an explicit two-panel contrast: Panel A (key exists: `try` runs, `else` runs, `except` skipped) and Panel B (key missing: `except` fires, `else` skipped). Students label each panel before seeing output. The plan explicitly says "The misconception 'else runs when an exception IS caught' is addressed by showing the contrast directly."

**M3 — 8.2 Design lesson missing the call-graph mental model**
CONFIRMED-FIXED. 8.2 now includes a call-graph worked example for the temperature converter showing which function calls which and what flows between them (`main` → `get_input` → returns `(value, unit)`; `main` → `convert(value, unit)` → returns `result`; etc.), and a "nouns = data, verbs = functions" extraction heuristic applied to the spec. The final Write exercise explicitly asks students to "draw a call-graph showing the flow."

**M4 — 8.1 Hook skips the Predict step**
CONFIRMED-FIXED. 8.1 now includes an explicit annotation step before the first run: "Read the first 20 lines and write the Ch.1–7 concept next to each block." The student-choice enhancement (topic selection from animals/capitals/films) is also added.

**M5 — Warm-up / retrieval questions absent from every lesson**
CONFIRMED-FIXED. Every lesson now specifies a warm-up. Verified for each:
- 8.1: "Before the program runs, students read the first 20 lines..." (implicit retrieval)
- 8.2: "What is the difference between a function that uses `print` vs. one that uses `return`?"
- 8.3: "Write the bulletproof input loop from Chapter 2 from memory"
- 8.4: "Write a for-loop with append that doubles every number in [1,2,3,4]"
- 8.5: "Write a `double(n)` function and call it with `double(5)`"
- 8.6 sub-sessions: strand-specific (8.6a: frequency dict with for-loop; 8.6b: sum/min/max; 8.6c: while True loop; 8.6d: OOP Note recall)

**M6 — `KeyError`/`IndexError` catching introduced without LBYL-vs-EAFP decision rule**
CONFIRMED-FIXED. 8.3 now includes a side-by-side worked example: `.get()` for simple defaults vs. `try`/`except KeyError` when the `except` body needs to do real work (log, re-raise). The rule is explicitly named.

**m1 — `finally` has no exercise**
CONFIRMED-FIXED. 8.3 now includes a Complete exercise: "Add a `finally` block to a `safe_divide(a, b)` function so it prints 'Calculation complete.' whether or not a `ZeroDivisionError` occurs." Verified: `finally` runs unconditionally, including when an exception propagates.

**m2 — 8.5 Exercise order teaches wrong default reflex**
CONFIRMED-FIXED. Exercise order is swapped. Exercise 1 is now "assert found a real bug in a function" — the broken function, correct test. Exercise 2 adds the "run the function directly first" step and then judges which side is wrong. The plan explicitly labels the two reflexes in order.

**m3 — Set-vs-dict comprehension contrast must be a worked example**
CONFIRMED-FIXED. 8.4 now has a mandatory worked example with `{w for w in words}` → set and `{w: len(w) for w in words}` → dict, with `type()` calls. The `{}` alone = empty dict edge case is included. Labeled "Mandatory worked example."

**m4 — `f"No score for {e}"` output contains nested quotes**
CONFIRMED-FIXED. 8.3 now explicitly states: "`f'No score for {e.args[0]}'` prints `No score for Bob`; `f'No score for {e}'` prints `No score for 'Bob'` with quotes, because `KeyError.__str__` includes them." Verified: `str(KeyError('Bob'))` = `"'Bob'"`, `KeyError('Bob').args[0]` = `'Bob'`.

**m5 — `assert` without a message produces empty `AssertionError`**
CONFIRMED-FIXED. 8.5 now states "always use the message form `assert condition, 'message'` — without a message, `AssertionError` tells you nothing about why the check failed." Every worked example and exercise uses the message form. Verified: `assert False` raises `AssertionError:` with empty string; `assert False, "msg"` raises `AssertionError: msg`.

**m6 — 8.6 strand projects need a bridge step between worked example and blank editor**
CONFIRMED-FIXED. Each sub-project now has an explicit "Bridge questions" section with 1–2 structural questions (e.g. "Name the three functions in the worked example" / "Where does the input loop live?"). These are labeled rung 2 (Investigate).

**m7 — f-strings used in exercises without confirmed prior teaching**
PARTIALLY-FIXED / NEW PROBLEM INTRODUCED. See Finding 1 below.

**m8 — `sorted(freq, key=freq.get)` needs one explicit sentence**
CONFIRMED-FIXED. 8.4 now includes: "Python lets you pass a function without calling it — `freq.get` without `()` is the function itself; `sorted` will call it once per word. Writing `key=freq.get()` instead tries to call `freq.get()` right now with no arguments and passes its return value — that's a `TypeError`."

**m9 — Three of four strand projects have no student choice**
CONFIRMED-FIXED. Each locked sub-project now has an opt-in alternative: 8.6a ("or count frequencies in any text the student chooses"), 8.6b ("or analyze any daily measurement data the student cares about"), 8.6c (full alternative simulation spec).

**m10 — `else`/`finally` depth: the *why* of each clause needs one more sentence**
CONFIRMED-FIXED. 8.3 now adds motivation for both: `else` — "anything you put inside `try` beyond the risky line is code you are implicitly claiming you can handle — move it to `else`" (implicit in the contrast worked example). `finally` — "runs unconditionally (even if `return` or `break` is hit inside `try`, even if the exception propagates uncaught); signals cleanup intent." Verified: `finally` fires even when a `return` is inside `try`.

**m11 — Chapter Quiz question 5 is unautogradeable**
CONFIRMED-FIXED. The quiz now labels Q5 explicitly as a "compare your answer" item with the specific spec provided so the expected function list is bounded ("Expected: e.g., `get_input()`, `letter_grade(score)`, `display(name, grade)`. Graded as a 'compare your answer' item, not auto-checked").

**m12 — Chapter Recap section is absent**
CONFIRMED-FIXED. A full Chapter Recap section is now present with 7 must-stick concepts and 5 retrieval questions for Ch.9+ spiral (comprehension syntax, assert/test function shape, try/except/else pattern, program-design workflow, etc.).

**m13 — 8.5 assert exercises need ground truth before the fix step**
CONFIRMED-FIXED. Exercise 2 now includes a mandatory "run the function directly first" step — shows `print(reverse("hello"))` inline — before asking the student to judge which side is wrong.

**m14 — Challenge exercise 8 (open spec) needs a concept constraint**
CONFIRMED-FIXED. Exercise 8 now requires "at least two of the chapter's owned concepts (e.g., a comprehension and an assert test with the message form). The creativity is in the domain; the owned concepts are the floor."

**m15 — 8.6 sub-projects listed as a single lesson**
CONFIRMED-FIXED. 8.6 now explicitly states: "8.6a–8.6d are explicitly four separate sub-sessions, not one lesson. Each has its own time budget, warm-up, and difficulty ordering."

**m16 — `dict.get(key, default)` accumulator pattern labeled 'recalled from Ch.4' without verification**
PARTIALLY-ADDRESSED / STILL OPEN. See Finding 2 below.

---

## New / remaining findings

### Finding 1 — f-strings: m7 partially fixed but the fix contains an error [MINOR]

The synthesis (m7) required either confirming f-strings are formally taught in a prior lesson, or rewriting Ch.8 exercises to not require them. The revised plan's approach is to assert f-strings are taught in Ch.1 and add a spiral-recall note: "f-strings are formally taught in c1s5 (Ch.1, Lesson 5)."

**Verification result: f-strings are in the Ch.1 chapter plan and CURRICULUM-STRUCTURE §D, but NOT yet in the actual c1.js lesson file.**

- `CURRICULUM-STRUCTURE.md` §D (line 97) lists: "Strings — concat, f-strings (incl. `:.2f` money formatting)... all Ch.1"
- The Ch.1 chapter plan (`ch-1-first-words.md`) has a detailed f-string subsection in lesson L1.5b with worked examples and exercises (lines 425–463 of that plan).
- The actual `c1.js` file: no f-string glossary entry, no f-string text block, no f-string worked example, and no f-string exercise. The only f-string occurrence in c1.js is zero. In c2.js, f-strings appear in exactly one code example (line 617: `print(f"i = {i}")`) with a comment label "# f-strings evaluate fresh on each iteration" — but no glossary entry, no definition block, no exercise requiring students to write one.

**Consequence:** Ch.8 exercises requiring students to write `f"No score for {e.args[0]}"` or `f"expected 5, got {add(2, 3)}"` cannot assume f-string fluency. The plan's spiral-recall note cites c1s5, which has not yet been authored. Until c1s5 is built, the m7 fix is scaffolding over a gap.

**Required action:** The plan must either (a) note the dependency explicitly — "f-strings are required here; if c1s5 has not been built when Ch.8 is authored, the 8.3 and 8.5 exercises must accept `print('No score for', e.args[0])` as the baseline"; or (b) add a one-subsection f-string micro-introduction in the 8.1 hook's warm-up material (which already cites f-strings via the spiral-recall table). The current fix is incomplete because it asserts a foundation that does not yet exist in the delivered codebase.

### Finding 2 — `dict.get(w, 0)` accumulator: m16 still structurally open [MINOR]

The synthesis (m16) required verifying that `freq.get(w, 0)` appears in an actual c4.js worked example before marking it as recalled. The revised plan adds a note: "Note on `dict.get(w, 0)` and accumulator: if Ch.4 lessons do not yet exist and this pattern has not been verified in c4.js, it must be introduced explicitly in 8.6a rather than assumed."

**Verification result:** c4.js does not exist yet in the lessons directory. The conditional disclaimer is correct but it is not a fix — it is a deferred decision.

**Consequence:** When Ch.8 is authored, if c4.js has not been built, the 8.6a spec's claim that `freq.get(w, 0)` is "recalled from Ch.4" will be wrong, and the accumulator pattern must be introduced explicitly in 8.6a. The plan acknowledges this but does not resolve it.

**Required action:** The note is adequate as a guard, but the authoring gate for 8.6a must include an explicit pre-flight check: "Does c4.js contain a worked example using `dict.get(key, default)` and the accumulator pattern `d[k] = d.get(k, 0) + n`? If not, introduce it here."

### Finding 3 — "tie-free input" claim is misleading [MINOR / NEW]

8.6a states: "use a tie-free input (e.g. `'the the cat sat'`) so the expected top word is unambiguous."

**Verification result:** `'the the cat sat'` has `the:2`, `cat:1`, `sat:1`. The top word (`the`) is unambiguous, but `cat` and `sat` are tied at rank 2–3. The example is tie-free only at rank 1.

The assertion `assert top_words[0] == 'the'` is correct and unambiguous. But the claim that the input is "tie-free" is technically false for positions 2 and 3. In CPython, `sorted` is stable, so the tie breaks by insertion order (`cat` before `sat`), but a student writing `assert top_words[1] == 'cat'` could get a surprise if their tokenization differs.

**Consequence:** Low — the plan only asserts on `top_words[0]`, which is genuinely unambiguous. But the label "tie-free" is misleading. If a lesson author reads this and writes an assert on position 1 or 2, they will get a fragile test.

**Required action:** Change "use a tie-free input" to "use an input where the top word is unambiguous (e.g. `'the the cat sat'` where `the` appears twice and all others once — only the top position is tested)."

### Finding 4 — `e.args[0]` generalized beyond KeyError without qualification [MINOR / NEW]

8.3 presents `e.args[0]` as the general pattern for clean exception output and uses it in examples for `KeyError`. The misconceptions list says "`f'No score for {e}'` where `e` is a `KeyError` gives clean output (wrong — `KeyError.__str__` adds quotes; use `e.args[0]`)."

**Verification result:** The `e.args[0]` guidance is accurate specifically for `KeyError` because `KeyError.__str__` wraps the key in repr quotes. But for other exceptions the distinction matters:
- `ValueError('abc')`: `str(e)` = `"abc"`, `e.args[0]` = `"abc"` — identical, no quotes issue
- `ZeroDivisionError`: `str(e)` = `"division by zero"` — no quotes issue
- `KeyError('Bob')`: `str(e)` = `"'Bob'"` (with quotes), `e.args[0]` = `"Bob"` (without) — here `e.args[0]` matters

The plan's 8.3 Complete exercise (`lookup_score`) correctly uses `f"No score for {e.args[0]}"` for a `KeyError`. But the LBYL/EAFP sidebar example in 8.3 shows `except KeyError as e: log_missing(e.args[0]); raise` — this is fine.

**The issue:** The Chapter-wide misconceptions list states "`f'No score for {e}'` gives 'clean output'" as a general misconception, which implies all exception `str()` representations have this quotes problem. They do not — it is specific to `KeyError`. A lesson author reading this broadly might apply `e.args[0]` everywhere, obscuring useful verbose error messages (e.g. `ValueError`'s full "invalid literal for int() with base 10: 'abc'" is actually more useful than `e.args[0]` alone for a debug message).

**Required action:** Qualify the misconception: "specifically for `KeyError`, `f'{e}'` adds repr quotes around the key (because `KeyError.__str__` includes them); use `e.args[0]` for clean key output. For `ValueError` and `ZeroDivisionError`, `str(e)` is already clean."

### Finding 5 — `raise` in 8.3 Complete exercise is structurally inconsistent with "raise deferred to 8.6" [MINOR / NEW]

The concept map and teaching-order rationale both state: "`raise` introduced at the point of need in 8.6." The "Note on `raise`" in 8.3 explicitly says: "`raise` is introduced at the point of need in 8.6 strand projects, not in 8.3."

However, 8.3 Exercise 4 (Complete / rung 5) asks students to fill in a `lookup_score` skeleton and "re-raise" using bare `raise`. The plan's note attempts to resolve this: "students complete the surrounding code, not the `raise` itself" — i.e. `raise` is present in the skeleton, not written by the student.

**Verification result:** This creates a structural inconsistency. If `raise` appears in the skeleton of a rung-5 exercise in 8.3, students see it before it is introduced. The plan's defense ("the student doesn't write it, it's pre-supplied") is pedagogically weak — students will read the `raise` line, wonder what it does, and have no prior worked example to consult. The glossary does not define `raise` in 8.3 (correctly, since it is deferred), but seeing unexplained syntax in a Complete exercise creates confusion.

**Required action:** Either (a) remove bare `raise` from the 8.3 skeleton and replace with a `print` that simulates re-raise behavior (so students do not encounter the keyword), or (b) add a one-sentence callout in 8.3 Exercise 4: "You will see `raise` here — it re-sends the exception to the caller. You will use it yourself in 8.6. For now, leave this line as-is and focus on the `except` branch around it."

### Finding 6 — AUTHORING.md voice standard: grade 7–9 reading level [SPOT-CHECK]

Spot-checking three explanations from the revised plan against AUTHORING.md's grade 7–9 requirement and "flowing complete sentences, precise definitions" voice standard.

**Excerpt A (8.3, `finally` sidebar):** "runs unconditionally (even if `return` or `break` is hit inside `try`, even if the exception propagates); signals cleanup intent"
- Assessment: parenthetical-heavy, compressed, reads closer to a reference card than a lesson. For an 11-year-old this is not a prose sentence — it is a two-item list in one sentence. MARGINAL. Acceptable in a plan spec but the lesson author must expand it into a sentence with a concrete example.

**Excerpt B (8.2, warm-up):** "What is the difference between a function that uses `print` vs. one that uses `return`? (Two sentences, from memory. Primes the core design issue: which functions produce values, which produce output.)"
- Assessment: grade-appropriate. The warm-up question is clearly stated; the parenthetical explains the author's intent. PASS.

**Excerpt C (8.4, set-vs-dict callout):** "The set form produces no error — it just gives the wrong type silently. This is why the contrast must be taught, not just mentioned."
- Assessment: clean, grade 8 level, teaches the why. PASS.

All three excerpts are plan-level language (not final lesson prose), so the reading-level check applies to the authored lesson, not the plan. However the plan's voice for student-facing elements (warm-up prompts, exercise descriptions) should model the target register. Excerpt A is the only marginal case.

---

## Verified-correct claims

All Python code claims verified on Python 3.14.5:

- `min([10,20,30])` = 10, `max([10,20,30])` = 30 — built-ins iterate internally; no comprehension wrapper needed (B1 claim correct)
- For-loop + append = 3 lines; for-loop + dict body = 3 lines; comprehension = 1 line (B2 claim correct)
- `{w for w in ['cat','dog','cat']}` → `{'cat','dog'}` (set); `{w: len(w) for w in ['cat','dog','cat']}` → `{'cat':3,'dog':3}` (dict); `type({})` = `<class 'dict'>`; `type(set())` = `<class 'set'>` (set-vs-dict examples correct)
- `except KeyError as e`: `str(e)` = `"'Bob'"` (with quotes); `e.args[0]` = `'Bob'` (without quotes) (m4 claim correct)
- `assert False` raises `AssertionError` with empty message; `assert False, "msg"` carries "msg" (m5 claim correct)
- `else` on `try` runs when NO exception occurs; does NOT run when one is caught or when one propagates uncaught (M2 claim correct)
- `finally` runs even when `return` is inside `try`; runs even when exception propagates (m10/finally claim correct)
- `sorted(freq, key=freq.get, reverse=True)[:5]` for `'the the cat sat'` → `['the', 'cat', 'sat']` — top word `'the'` unambiguous, positions 2–3 tied (Finding 3)
- `next([1,2,3])` → `TypeError: 'list' object is not an iterator`; `next(iter([]))` → `StopIteration` (plan's Codex error classes correct)
- `clamp(x, lo, hi)` with boundary values 1 and 10: `clamp(1,1,10)`=1, `clamp(10,1,10)`=10, `clamp(0,1,10)`=1, `clamp(15,1,10)`=10 (8.5 exercise spec correct)
- `celsius_to_fahrenheit(0)`=32.0, `(100)`=212.0, `(-40)`=-40.0 (8.5 Write exercise correct)
- `''.join([c*3 for c in 'hi'])` = `'hhhiii'` (challenge 7 word-art correct)
- Re-raise: bare `raise` inside `except` re-propagates the current exception (8.3 skeleton use of `raise` is syntactically correct)
- `break` in `else` clause of `try` works as described: loop exits only when no exception fires (8.3 Exercise 3 claim correct)
- Grade-book comprehension `{name: sum(s)/len(s) for name, s in grades.items()}` works; `max(averages, key=averages.get)` gives top student; `f"No student named {e.args[0]}"` prints clean name (challenge 6 correct)
- c2s8 in c2.js (lesson id "c2s8", title "try and except") confirmed to contain: basic `try`/`except`, multiple `except` blocks, bare-except danger, EAFP explanation, and the bulletproof input loop pattern — all five B4-claimed "deepened" concepts verified present

---

## Summary of required actions

| # | Severity | Issue | Required fix |
|---|----------|-------|-------------|
| 1 | MINOR | f-string dependency on c1s5 which is not yet in c1.js | Add explicit authoring gate: "if c1s5 not built, accept `print('No score for', e.args[0])` as baseline for 8.3/8.5 exercises" |
| 2 | MINOR | `dict.get(w, 0)` accumulator: c4.js doesn't exist yet | Note is present but must be an explicit pre-flight check at 8.6a authoring time |
| 3 | MINOR | "tie-free input" label is misleading; only top-1 is tie-free | Change wording to clarify only top word is asserted |
| 4 | MINOR | `e.args[0]` vs `str(e)` generalized beyond KeyError | Qualify misconception to KeyError specifically |
| 5 | MINOR | `raise` appears in 8.3 skeleton before its introduction in 8.6 | Either remove `raise` from the skeleton or add a one-sentence callout |
| 6 | INFO | `finally` plan-prose is reference-card density | Lesson author must expand to full sentences with concrete example |
