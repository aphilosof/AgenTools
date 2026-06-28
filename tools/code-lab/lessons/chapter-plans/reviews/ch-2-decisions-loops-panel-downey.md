# Panel Review — Ch.2 Decisions & Loops — Allen Downey (Think Python)
**Verdict:** Solid

---

## Findings (from my lens)

### Mental models and the "why"

1. [MINOR] **L2.1 — `and`/`or` returning operands, not booleans** — The plan correctly flags this as a misconception and the written lesson (c2s1) states it accurately. But the teaching stops there: it names the fact without building the mental model. The student needs to understand *why* — Python evaluates `a and b` by asking "does `a` count as true?" and if not, returns `a` itself; if yes, returns `b`. This makes the behaviour predictable (it is not a quirk; it is a rule). The current prose just says `and`/`or` return an operand. Add one sentence explaining the rule: "Python doesn't produce a new True or False — it stops at the first value that settles the question and returns that value unchanged." **Fix:** Add one worked example showing `print(0 and "hello")` → `0` and `print(1 and "hello")` → `"hello"` with an explanation of the return-the-deciding-operand rule. The `not` contrast (which always returns a bool) is already there and is correct.

2. [MINOR] **L2.4 — loop invariant introduced but not built into exercises** — The written lesson (c2s4) mentions loop invariants and off-by-one errors in a text block — this is genuinely good and matches the depth standard. But none of the exercises ask the student to *state* an invariant before writing a loop. An invariant is a thinking tool; teaching it as a vocabulary item without a practice moment doesn't install it as a habit. **Fix:** In the rung-6 guessing-game exercise, add a single pre-prompt: "Before you write the loop, state in one sentence what is always true at the start of each iteration." This costs nothing and trains the habit.

3. [MINOR] **L2.5 — `range()` laziness: claim present but mental model is incomplete** — The lesson correctly states that `range()` is lazy and does not build a list. The text says "Python does not create all the values at once; it produces each one only when the loop asks for the next." Good. What is missing is the mental model that makes this concrete: `range(1_000_000)` uses essentially no memory because it holds only three numbers — start, stop, step — and computes the next value on demand. Without that, "lazy" remains an abstract word rather than an actionable concept. **Fix:** Add: "`range(1_000_000)` stores just three numbers internally — start, stop, step. It computes the next value only when asked. That is why it uses almost no memory even for huge counts." One sentence.

4. [MINOR] **L2.3 — "flat is better than nested" named but not fully grounded** — The lesson references the Zen of Python, which is correct and appropriate. But the teaching of *why* nesting is dangerous stays at the visual level ("extra indentation"). The real failure mode — a missing inner `else` causes silent wrong results, which the student cannot detect — is present in the worked example but is not named explicitly as a class of bug. **Fix:** Name it: "This is a silent logic bug — the program finishes without an error, but no output is produced when `x <= 3`. Silent failures are harder to find than crashes because Python gives you nothing to look at."

### Continuity

5. [MINOR] **L2.6 — NameError from `range(0)` claim is scope-dependent** — The chapter plan's L2.6 worked example 3 describes a `NameError: name 'i' is not defined` when a `for` loop over `range(0)` never executes. I verified this in Python: *at the top level* (which is the REPL or a flat script), if the variable `i` was bound by a previous loop in the same session, it persists — the `NameError` does not occur. The `NameError` happens reliably only inside a function, where the variable was never bound in that scope. The lesson as implemented in c2s6 does not include this specific example, so it is not wrong in the written content — but the chapter plan describes it as a demonstration. If this demonstration is ever written as an executed code example, it needs to be wrapped in a function to guarantee the `NameError`. **Fix:** If this worked example is authored, wrap it: `def test(): for i in range(0): pass; print(i)` and call `test()`. Alternatively replace with a simpler NameError demo (using a variable before assignment, which is unambiguous at any scope level).

### Concepts appearing early

6. [MINOR] **`break` previewed in L2.4 (while) before full treatment in L2.5** — The plan intentionally previews `break` in the sentinel-input worked example in L2.4, then teaches it fully in L2.5. The written c2s4 handles this correctly: it shows `while True: ... break` with a note that `break` is covered fully in L2.5. This is sound pedagogy — a motivating early encounter followed by consolidation. No fix needed; flagging as verified correct.

7. [MINOR] **`len()` used in L2.2 before Strings chapter** — The chapter plan notes this explicitly ("full string treatment is Ch.4"). The written c2s2 uses `len(password)` in a worked example. This is an appropriate low-floor encounter, correctly handled. The plan flags it; the lesson treats it as a black box ("counts the characters"). No problem here — this is the right call.

8. [BLOCKER] **`try/except` (L2.8) is not in the chapter plan at all** — The chapter plan document being reviewed describes 7 lessons: L2.1–L2.7. But the actual written c2.js contains two additional lessons: c2s8 (`try/except`) and c2s9 (Art and Music Capstone). The chapter plan is incomplete — it does not document these lessons. This is a plan-versus-implementation gap. The written c2s8 is substantive (EAFP, bare `except` danger, bulletproof input, `ValueError`, `ZeroDivisionError`) and c2s9 is a capstone that integrates all prior Ch.2 concepts. The chapter plan should account for all 9 lessons. **Fix:** Update the chapter plan to add L2.8 and L2.9 entries, including their concepts owned (`try/except`, `ValueError`, `ZeroDivisionError`, `EAFP`), misconceptions (bare `except:` catches bugs silently), and their role in the arc (L2.8 = concept lesson, L2.9 = capstone/strand-application).

### Language and level

9. [MINOR] **Chapter Challenge exercise 2 — the rationale note is correct but too internal** — "(`for` is used here rather than `while` because placing `continue` in a `while` countdown without careful decrement ordering creates an accidental infinite loop — the exercise tests `continue`, not trap-spotting.)" This is a design decision note in the plan, not something a student sees. It is fine as a plan annotation. But it is worth confirming: the `for/continue` version cleanly skips odd numbers without the infinite-loop trap. Verified correct.

10. [MINOR] **Quiz question 5 (short write) — not auto-graded, appears in coach mode** — The question asks: "In one sentence, explain why a `while` loop can run forever but a `for`/`range` loop cannot." This is an excellent conceptual question. The plan says "surfaces in coach mode" — meaning it is a human-readable response, not auto-checked. This is appropriate. The expected answer (not stated in the plan) is: because `range` generates a finite sequence and the `for` loop terminates when the sequence is exhausted, whereas `while` only stops when a condition becomes `False` — which may never happen if the programmer forgets the update. The answer the plan implies is sound.

---

## Continuity notes

**Well-woven from Ch.1:**
- `%` operator appears in L2.2's even/odd example, in L2.3, L2.5's prime checker, and L2.7's drum pattern — each use naturally extends the Ch.1 introduction of modulo without re-teaching it.
- `input()` → `int()`/`float()` conversion recurs in L2.3's BMI exercise and L2.4's guessing game, correctly using Ch.1 patterns without explanation.
- f-strings used in L2.5's times-table example — natural reuse, correct.
- `str.split()` used in Chapter Challenge exercise 5 with explicit label "recalled concept from Ch.1 (owned by Ch.1 Strings lesson — used here without re-teaching)" — this is exactly right.
- `bool` type and `type()` recalled from Ch.1 at L2.1 — clean.

**Missing from Ch.1 recall:**
- `round()` and `len()` are Ch.1 concepts. `len()` appears correctly as a black-box early use in L2.2. `round()` does not appear in Ch.2 at all — this is fine, it will recur in later chapters. No gap.
- `str * int` repetition (Ch.1) is used in Chapter Challenge exercise 5 ("print the word followed by `*` × its length"). This is a nice spiral use.

**Spaced recall across Ch.2:**
- Accumulator pattern introduced in L2.4, revisited in L2.5 with `for` — good explicit spiral ("Recall from the last lesson: accumulator with a for loop").
- Debugging exercises recur in every lesson — the plan's claim is met in the written lessons.
- `if/else` from L2.2 is woven into L2.4 (guessing game), L2.5 (prime checker, break/continue), L2.7 (drum beat alternation) — monotonic difficulty maintained.

**What Ch.3 expects from Ch.2:**
- Ch.3's concept map says "Ch.1–2 recalled: variables, types, arithmetic, loops, conditionals, print, input." Ch.2 delivers all of these. The write-from-scratch milestone is reached by L2.3–L2.5, which is consistent with Ch.3's expectation that blank-editor is the default.

**One genuine gap:**
- The accumulator pattern (named in c2s4) is not consolidated in the Chapter Challenge or Quiz as a named, retrievable concept. Quiz question 2 (trace a `while` loop) implicitly exercises it, but the name "accumulator" is not used there. The pattern should appear by name in at least one quiz question or Challenge problem to anchor it for Ch.3's function exercises, where it recurs constantly. The Chapter Challenge exercise 5 (word histogram) is a natural accumulator in the making — the prompt as written uses a `for` loop and `str * int` but does not require accumulation. Adding a running count would make the recall explicit.

---

## What's strong

- **The misconception coverage is excellent.** `if x == 1 or 2:`, `=` vs `==`, `break` vs `continue`, `range()` including stop — each of these is the most-cited real-world confusion for its concept, and each gets a dedicated worked example with the *wrong* code running before the fix. This is the right pedagogy: the misconception is encountered, not just mentioned.

- **The three-category error taxonomy in L2.6 (syntax / runtime / logic) is the best thing in this chapter.** Most beginner courses teach errors reactively. Naming these as categories and teaching them as a framework before showing examples gives the student a diagnostic tool they will use for the rest of the course. The implementation (c2s6) is one of the cleaner lessons in the course — the "print debugging" note is a practical addition that most courses omit entirely.

- **The strand integration in L2.7/L2.9 is motivating without being forced.** The drum-pattern exercises use `%` for alternation in a way that is genuinely the right tool, not a contrived application. The spiral uses the loop variable as a scale parameter, which correctly teaches that loop variables are not just counters — they are data available to the body. Both of these are computational thinking points that earn their place in the chapter.

---

*Technical claims verified by running Python 3.13. Specific verifications: `and`/`or` operand-return behaviour; `range()` step=0 raises `ValueError`; `break` exits only innermost loop; `range(0)` NameError scope-dependence; continue vs break on odd-number filter; range quiz answer (2, 4, 6).*
