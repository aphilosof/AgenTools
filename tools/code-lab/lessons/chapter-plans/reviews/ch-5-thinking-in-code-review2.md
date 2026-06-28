# Deep Review Round 2 — Ch.5 Thinking in Code
**Verdict:** Needs fixes (minor — 3 new problems introduced by revision; no round-1 blockers remaining)
**Python verified on:** 3.14.5 (Clang 21.0.0, macOS)

---

## Round-1 fixes audit

### Blockers

**B1 — TypeError message mismatch in 5.4B (Ramalho)**
CONFIRMED-FIXED. Scenario changed to `counter + input("Add: ")` (int + str). Verified: `5 + 'hello'` raises `TypeError: unsupported operand type(s) for +: 'int' and 'str'` — message matches plan exactly.

**B2 — ZeroDivisionError provenance wrong (Hermans, Malan, Ramalho)**
CONFIRMED-FIXED. Chapter-wide error list now reads "introduced in Ch.2 (c2s8, try/except); recalled in Ch.4; formalised in Ch.5." Verified against c2.js line 964: ZeroDivisionError is in the c2s8 glossary with a `except ZeroDivisionError:` worked example. c2s8 is unambiguously the introduction point.

**B3 — 5.1 no hook, concept precedes experience (Guzdial, Malan, Oakley, Resnick)**
CONFIRMED-FIXED. 5.1A now opens with the 35-line monolith and the task ("run this; if I change the weight unit, how many lines do you edit?") before any concept name appears. Students feel the difficulty of tracing the change through the unsorted mass of code; the word "decomposition" appears only after.

**B4 — 5.4 over-stuffed (Hermans, Oakley)**
CONFIRMED-FIXED. Chapter split to 6 lessons. 5.4 covers traceback anatomy + protocol steps 1-2 only. 5.5 covers steps 3-4, print-tracing, and preconditions. 5.6 is checkpoint projects.

### Majors

**M1 — Style channel opens at rung 5-6 with no low-stakes first contact**
CONFIRMED-FIXED. 5.2A Exercise 1 is explicitly labelled `rung 3 / modify`: a working program with two style violations the student renames. Style channel is introduced at low cognitive load before any rung-5/6 exercise requires it. The 5.2 lesson header now correctly reads `Rung: 3-6`.

**M2 — 5.4B hypothesis comment format never modelled in code**
CONFIRMED-FIXED. 5.4B worked example shows all four steps as actual Python comments in the file. Steps 3-4 are left blank with "(next lesson)" placeholder. Exercise 1 starter code includes the four-comment skeleton with blanks to fill in.

**M3 — 5.4A traceback direction not drilled as counter-intuitive override**
CONFIRMED-FIXED. 5.4A Exercise 1 is a `rung 2 / predict` counter-intuitive override drill: a traceback where the top frame is `main` and the error is three calls deep. Student must write both answers — where does the top frame point? where does the bottom frame point? — before being told which is the error site. This forces the cognitive override of the top-down reading reflex explicitly.

**M4 — 5.1B definition-order exercise conflates two distinct NameError causes**
CONFIRMED-FIXED. Side-by-side worked example present with both cases clearly labelled. Case 1: `greet()` before `def greet():` at top level → NameError (verified: raises `NameError: name 'greet' is not defined`). Case 2: `def a(): return b()` before `def b():`, with `a()` called after both defs → works fine (verified: returns 42). The exercise tests only Case 1.

**M5 — Preconditions introduced only as debugging tool, not design-first habit**
CONFIRMED-FIXED. 5.5C concept now includes the sentence: "Preconditions are not only a debugging tool — professional programmers write them when they design a function, before writing the body, to clarify exactly what the function requires." The worked example uses `average(scores)` with `assert len(scores) > 0, "average() requires a non-empty list"`. Verified: `assert len([]) > 0` raises `AssertionError: average() requires a non-empty list`; `sum([1,2,3]) / 3` = `2.0` (type: `float`).

**M6 — 5.3 DRY re-introduces rather than deepens**
CONFIRMED-FIXED. 5.3A opens with explicit retrieval bridging to c3s0, c3s1, c3s5: "In Ch.3 you replaced copy-pasted code with a function — that is DRY applied to code. You already own this principle." DRY extraction exercises start at rung 5 to honour Ch.3 coverage; rung 4 reserved for named constants (genuinely new content).

### Minors

**m1** CONFIRMED-FIXED — docstring recall added to 5.5C alongside precondition/postcondition comments. Phrase present: "next to or inside the docstring you learned in Ch.3 — recall c3s5."

**m2** CONFIRMED-FIXED — 5.1B warm-up and concept intro explicitly references c3s8: "In Ch.3 Functions in the Wild you wrote a signature and `pass` before the body — we called it wishful thinking. Now we name that technique: top-down design." Verified against c3.js: c3s8 teaches "wishful thinking / top-down design" with stub-first worked example.

**m3** CONFIRMED-FIXED — 5.4 warm-up now activates the call-stack schema from c3s4 rather than error classes: "In Ch.3 you saw Python stack frames when functions call each other. Draw the stack for this two-function program... a Python traceback is exactly that stack printed on screen, most recent frame last."

**m4** CONFIRMED-FIXED — 5.4B concept intro says: "In Ch.2 (c2s6) you learned a three-step process for debugging. It worked because your programs were flat. Now that functions call functions, you need the upgraded four-step protocol." Verified against c2.js c2s6: the three steps are (1) read error class and message, (2) go to the indicated line, (3) understand the cause before changing anything.

**m5** CONFIRMED-FIXED — `assert` present in 5.5C as an explicit teaching item with a worked example (`assert len(scores) > 0, "..."`) and an exercise requiring students to write `assert` for the key precondition of each function stub.

**m6** CONFIRMED-FIXED — Engine caveats moved to a standalone "Engine pre-authoring notes" section at bottom of plan. Lesson prose now scopes the checker honestly: "The style channel catches exact duplicate blocks — for near-duplicates, you are the detector."

**m7** CONFIRMED-FIXED — Number-guessing game used only in 5.1B (stub-first demo). 5.6 uses fresh domains (buggy calculator, text-statistics tool, messy song). Note present: "the 5.6 checkpoint project uses a fresh domain to preserve novelty."

**m8** CONFIRMED-FIXED — Project B bug changed to `IndexError`: deliberately call `words[0]` on an empty list in `find_longest()`. Verified: `[][0]` raises `IndexError: list index out of range`. Rationale given: "IndexError is more natural for this text-stats domain than KeyError, since the data structure is a list, not a dict."

**m9** CONFIRMED-FIXED — Project C ends with a generative composition step: "Now that your functions are named and short, write a 4-bar variation by changing the constants and the pattern. The code should stay under 10 lines of main()."

**m10** CONFIRMED-FIXED — `set (Ch.4, c4s4)` present in 5.6 Project B: "Use `.split()`, `len()`, a `set` *(recall Ch.4, c4s4)*."

**m11** CONFIRMED-FIXED — `while True / break sentinel (c2s4, c2s8)` present in 5.6 Project A Recalls.

**m12** CONFIRMED-FIXED — 5.2 header now reads `Rung: 3-6`. Exercise 1 explicitly labelled `rung 3 / modify`. Lesson ramp now runs 3 → 6 within 5.2.

**m13** CONFIRMED-FIXED — `process_data(data, mode)` counter-example present in 5.3A showing it cannot be named well, cannot be tested cleanly, and is harder to change than two separate functions.

**m14** CONFIRMED-FIXED — DRY-naming bridge present in 5.3A: "Extracting a duplicated block into a function does two things at once: it names the piece of knowledge (5.2) and it puts that knowledge in one place (5.3). DRY and naming are the same instinct."

**m15** CONFIRMED-FIXED — LBYL vs EAFP bridge added to 5.5C: "the caller can enforce it with `assert` (precondition contract) or the function can defend with `try/except ZeroDivisionError` (EAFP from Ch.2 c2s8). Both are valid." `try/except (c2s8)` present in 5.5C Recalls.

**m16** CONFIRMED-FIXED — 5.2 warm-up shows naming cost not just benefit: `f(d, t, r)` called with arguments in wrong order because cryptic names gave no guidance — the wrong-order mistake is the motivating failure.

**m17** CONFIRMED-FIXED — 5.2 Exercise 3 bug specified: `do_thing(x)` computes `x * 2` when it should compute `x ** 2`; the misleading name hid the intent.

**m18** CONFIRMED-FIXED — Flag-parameter anti-pattern present in chapter-wide misconceptions list: "DRY can be over-applied into a flag-parameter anti-pattern: one function with a `mode` parameter that does completely different things. DRY applies to the same piece of knowledge, not to code that merely looks similar."

**m19** CONFIRMED-FIXED — `is_` prefix rationale present in 5.2B: "This mirrors Python's own library — `str.isdigit()` and `str.isupper()` follow the same pattern, which is why it will feel familiar when you encounter it."

**m20** CONFIRMED-FIXED — `f-string :.2f (c1s5)` present in 5.6 Recalls.

---

## New / remaining findings

### NEW-PROBLEM-1 — 5.4 lesson header rung label is wrong [INTRODUCED by revision]

**Severity: minor, authoring contract error.**

The 5.4 lesson header reads `*Rung: 4–6*`. The progression section in the same plan correctly states "5.4 — rung 2–6; predict exercises (rung 2–3)." The lesson body is consistent with rung 2–6: the counter-intuitive override drill is explicitly labelled `rung 2 / predict`; Exercise 2 is `rung 3 / predict`; fix exercises are rung 4–5. The header was not updated when the predict exercises were added during the B4 split. An author reading only the header will miscalibrate the lesson difficulty range.

**Fix:** Change `*Rung: 4–6*` to `*Rung: 2–6*` in the 5.4 lesson header.

### NEW-PROBLEM-2 — 5.5C postcondition illustrative example conflicts with the worked example [INTRODUCED by revision]

**Severity: medium authoring hazard.**

The 5.5C concept text introduces postcondition with: "a postcondition is what the function guarantees on return (e.g. 'returns a float between 0.0 and 1.0')." Immediately after, the worked example is `average(scores)` with postcondition comment `# Postcondition: returns a float`. These are two different hypothetical functions (a normaliser vs. an average), but the prose runs them together in the same paragraph without a separator or clarifying sentence. Verified: `sum([1,2,3]) / 3` = `2.0` — an `average(scores)` return value of 2.0 violates the "between 0.0 and 1.0" postcondition in the illustration above it. An author writing the exercise solution checker may accidentally write `assert 0.0 <= result <= 1.0` for `average()`, producing a failing check for all non-trivial inputs.

**Fix (option A — simplest):** Change the illustrative example to match the worked example: "e.g. 'returns a float'" — omit the "between 0.0 and 1.0" clause.
**Fix (option B):** Use a different function for the 0.0–1.0 postcondition illustration (e.g. a probability normaliser) and insert one explicit sentence separating it from the `average(scores)` example that follows.

### NEW-PROBLEM-3 — 5.4B Exercise 1 and 5.5A Exercise 1 share the same broken program with no authoring note [INTRODUCED by revision]

**Severity: low, scaffolding integrity risk.**

5.4B Exercise 1 and 5.5A Exercise 1 both describe "a program with a `ValueError` from `int("3.5")`" as the broken program — apply steps 1-2 in 5.4B, apply all four steps in 5.5A. This is intentionally the same bug used across two lessons so students apply progressively more of the protocol to a familiar program. The scaffolding is pedagogically sound. However, the plan contains no annotation flagging this as intentional. An author writing the actual lesson data for 5.5A, without cross-referencing 5.4B, will naturally create a fresh broken program — cutting the scaffold link that makes the protocol's two-lesson progression visible to the student.

**Fix:** Add a parenthetical note to both exercises: "(Intentionally the same broken program as 5.4B Exercise 1 — students apply more protocol steps to the same bug.)"

### SURVIVING-MINOR — Per-lesson time budgets not assigned

**Severity: low planning gap.**

AUTHORING.md requires `timeBudgetMin` in the lesson data schema; CURRICULUM-STRUCTURE.md specifies 15–25 minutes per lesson. The chapter overview states "15–25 minute lesson budgets" but does not assign individual values to 5.1–5.6. Lesson 5.6 (three checkpoint projects each with multiple tasks) will almost certainly exceed 25 minutes if treated as one lesson session; 5.4 and 5.5 (two subsections each after the B4 split) may underrun. This does not block authoring but leaves the harness's time-budget check without targets.

**Fix:** Assign `timeBudgetMin` to each lesson. Suggested allocation: 5.1 = 20, 5.2 = 20, 5.3 = 20, 5.4 = 20, 5.5 = 20, 5.6 = 25 (or flag 5.6 as a two-session checkpoint and set 20+20).

---

## Verified-correct claims

All claims below were run against Python 3.14.5:

- `5 + 'hello'` → `TypeError: unsupported operand type(s) for +: 'int' and 'str'` — matches 5.4B scenario exactly. (B1)
- `'hello' + 5` → `TypeError: can only concatenate str (not "int") to str` — confirms these are two distinct messages; plan correctly uses the int-first variant.
- `def f(): x = 1` then `f().upper()` → `AttributeError: 'NoneType' object has no attribute 'upper'` — matches 5.5A claim. (error class list)
- `int("3.5")` → `ValueError: invalid literal for int() with base 10: '3.5'` — matches 5.4B and 5.5A exercises.
- `'the  quick   fox'.split(' ')` → `['the', '', 'quick', '', '', 'fox']` (6 elements); `.split()` → `['the', 'quick', 'fox']` (3 elements) — matches 5.5B print-tracing exercise claim exactly.
- `assert len([]) > 0, "average() requires a non-empty list"` → `AssertionError: average() requires a non-empty list` — matches 5.5C worked example.
- `sum([1,2,3]) / 3` = `2.0` (type `float`) — matches 5.5C postcondition "returns a float."
- `def a(): return b()` / `def b(): return 42` / `print(a())` → `42` — helper-to-helper definition order does not matter; verified M4 Case 2.
- `exec('greet()\ndef greet(): print("hello")')` → `NameError: name 'greet' is not defined` — top-level call before `def` raises NameError; verified M4 Case 1.
- `[][0]` → `IndexError: list index out of range` — matches 5.6 Project B deliberately seeded bug. (m8)
- `ZeroDivisionError` in c2s8 glossary (c2.js line 964) confirmed — provenance B2 fix is factually correct.
- `AttributeError` absent from c1.js, c2.js, c3.js (grep returns zero hits) — "first taught in 5.5A" is correct.
- `AssertionError` absent from c1-c3 — "first taught in 5.5C" is correct.
- c2s6 three-step protocol confirmed (c2.js lines 703-704): (1) read error class and message, (2) go to indicated line, (3) understand cause before changing. Ch.5 four-step upgrade adds "walk the stack" as step 3 and relabels old step 3 as step 4 — consistent with the stated upgrade path.
- Ch.4 chapter plan: no owned concepts overlap with Ch.5 (decomposition, naming, DRY, magic numbers, debugging protocol, style channel, preconditions) — upstream boundary clean.
- Ch.6 chapter plan: correctly spirals Ch.5 — "four-step debugging protocol applied explicitly in 6.5 debug exercise" — downstream boundary clean.
- `str.isdigit()`, `str.isupper()` follow the `is`/`has` boolean-naming convention from Python stdlib — claim in 5.2B is correct.
- Flag-parameter anti-pattern: Think Python §4.7 explicitly warns about this — source claim in misconceptions is verifiable.
