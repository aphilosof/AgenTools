# Panel Review — Ch.5 Thinking in Code — Mitchel Resnick (Scratch, MIT Media Lab)
**Verdict:** Solid

---

## Findings (from my lens)

### 1. [MAJOR] All five lessons — exercises are compliance tasks, not creative expression

The rung ladder tells a student what to produce, but never *why they would want to*. Every exercise in Ch.5 is fix-this-monolith or rename-this-variable or extract-these-functions. The student improves code that was handed to them. That is a craft skill worth teaching — but when *every* exercise is a repair job, the student never owns the work. They are forever an editor, never an author.

The chapter's own through-line — "readable code is debuggable code" — could be felt rather than just stated if students were asked to write something they *care to read later*. A short song generator, a text adventure, a beat pattern organiser — any domain where messiness would bother *them* — would make the point land without lecturing it.

**Fix:** In at least two of the five lessons (I'd choose 5.2 and 5.5 Project B), add a "now build your own version from scratch on a topic you choose" path alongside the mandatory exercise. The style channel can still gate it. The learner gets to feel that good naming makes *their* code better, not just some hypothetical BMI calculator better.

---

### 2. [MAJOR] 5.5 Project C is a pure refactoring exercise — the student never hears their own music

Project C is described explicitly as "No new music functionality — this is a pure refactoring exercise." The student receives a messy 40-line sound program and spends the whole project reorganising it. They never compose anything. After two chapters (Ch.2 loops+beats, Ch.3 basslines) where sound was generative and expressive, the sound strand here is reduced to janitorial work.

This is the high-ceiling strand — the one that should invite: "what would *you* do with a clean, well-named set of note functions?" It does not. The project ends when the style checker is silent, not when something interesting happens sonically.

**Fix:** After the refactoring tasks, add one final step: "Now that your functions are named and short, write a 4-bar variation by changing the constants and the pattern. The code should stay under 10 lines of main()." The learner refactors *in order to do something new*, not just for cleanliness as an end in itself.

---

### 3. [MINOR] 5.2 Exercise 4 (blank / rung 6) — the constraint is negative

Exercise 4 says: "given a plain-English description of a small data-summary program, write the complete program from scratch; the style channel must report no naming violations." The framing is still checklist-oriented — write the program so the checker is happy. That is a low-floor constraint that feels like an exam, not an invitation.

**Fix:** Rephrase: "Write a program that summarises something you find interesting — sports scores, music, temperatures, anything with three inputs and two calculations. Name everything so a friend who has never seen your code can read it without asking you questions." The style channel still runs; the student still must pass it. But the invitation is different.

---

### 4. [MINOR] 5.1 Subsection B exercise (fix) — the NameError framing is technically accurate but pedagogically backwards

The exercise says: "given stubs with a wrong call order that crashes with a NameError, reorder the definitions and calls so it runs." The plan correctly notes that Python resolves function names at call time (helper-to-helper order is irrelevant). But the exercise is about a *top-level call placed before its def* — which is the only real scenario here. (Verified: `result = greet()` before `def greet():` does raise NameError.)

The subsection then partially contradicts itself: it says helper definition order "does not matter" in the Misconceptions section but the exercise is specifically about top-level call order, which *does* matter. A student who reads the Misconceptions first might think "order never matters" and be confused when the top-level call fails.

**Fix:** Tighten the language. The rule is: "Python executes `def` statements like any other statement — top to bottom. A function only exists after its `def` line has run. Calling a function before its `def` line raises NameError. But *inside* a function body, you can call a helper that is defined further down, as long as the outer function isn't invoked until after all the defs have run." State this precisely once; the exercise then illustrates the specific case cleanly.

---

### 5. [MINOR] 5.3 style channel flags — two are deferred to future engine work with a proxy

The plan notes, in brackets: `[ENGINE: requires AST clone detection — not yet built; use exact-string duplicate as proxy until implemented]` and a Levenshtein-based check also deferred. These are honest engine notes. But the lesson as authored will teach students that the style checker catches duplicate blocks — and the proxy (exact string match only) will silently miss near-duplicate drift, which is exactly the motivating case.

**Fix:** When the lesson is written, either (a) only promise what the checker actually does at ship time, or (b) make the worked example use exact duplicates so the proxy works correctly in the lesson exercises. Do not show a near-duplicate drift example if the checker will not flag it.

---

### 6. [MINOR] No student-owned artifact from the chapter as a whole

After five lessons, the student has debugged other people's programs and renamed other people's variables. There is no single thing they built from scratch that they could show someone and say "I made that." Project B (text-statistics tool from scratch) comes closest, but it is the one exercise in the chapter where the domain is chosen for the student (text stats) and the function names are specified (`load_text`, `count_words`, etc.).

**Fix:** The Chapter Challenge exercise 6 (shopping-receipt boss exercise) is structurally correct — no starter code, student designs the functions. Consider making one of the earlier exercises (perhaps 5.2 Exercise 4 or 5.5 Project B) similarly open on domain, so the student has a genuine authorial choice at least once before the boss exercise.

---

## Continuity notes

**Well-woven from c1–c3:**
- Warm-up recalls are correctly targeted: 5.1 recalls Ch.3 `return`; 5.2 recalls Ch.1 variable naming; 5.3 recalls copy-paste pain; 5.4 recalls Ch.2 NameError/IndexError; 5.5 gates on protocol recall. These are genuine retrieval prompts, not decorative ones.
- The `AttributeError` (None from missing return) in 5.4B correctly builds on Ch.3's `return` lesson — `def f(): x = 1` is the exact anti-pattern c3s3 warned about.
- `.split()` vs `.split(' ')` in 5.4C print-tracing exercise correctly recalls Ch.1 Strings and gives a real debugging payoff: the difference is non-obvious and the protocol is necessary.
- ZeroDivisionError in the Chapter Challenge (exercise 2) is correctly noted as "recalled from Ch.4.3" — the average-of-empty-list scenario was introduced there. The continuity is right.

**Missing or thin weave:**
- Ch.4 collections barely appear in 5.1–5.4. The strand applications use text and numbers; only 5.5 Project B mentions `.split()` (a Ch.1 concept) and sets (Ch.4). A decomposition or DRY lesson that used a list or dict as the data structure would recall Ch.4 and make the chapter feel less like a "thinking skills interlude" and more like a natural continuation.
- Ch.3 scope is mentioned once (5.4 Recalls: "scope — stack frames are scope boundaries"). This is exactly the right connection — a stack frame is scope made visible. It deserves a sentence in the lesson prose, not just a recall tag.
- Ch.2 `try/except` (c2s8) is not recalled anywhere in Ch.5, even though "handle bad input" appears in Project A (the number-guessing game crashes on bad input with a ValueError). The plan has students fix the ValueError with `int()` conversion — which is the LBYL approach — but c2s8 taught EAFP (`try/except`). The plan should either recall `try/except` as the alternative fix, or explain why `int()` with no guard is the chosen approach here.

**Re-taught by accident:**
- Nothing is re-taught in a problematic way. The plan is careful to say "recalls" not "introduces" for prior concepts.

---

## What's strong

- **The debugging protocol is grounded in verifiable behavior.** The decision to anchor every step ("read the bottom line", "find the line", "walk the stack") to actual Python traceback structure — and to verify the AttributeError claim with a real Python run — is exactly the right standard. The protocol is not a mnemonic; it is a reading skill applied to a specific document format. The plan teaches it that way.

- **The style channel is additive and cumulative.** Opening naming checks in 5.2, adding DRY/magic-number rules in 5.3, adding function-length in 5.3, and keeping all active through 5.5 is structurally sound. Students do not get a fresh start per lesson; they carry the accumulated constraints forward. This mirrors real code review.

- **The Chapter Challenge boss exercise (exercise 6)** — "design the functions top-down, write preconditions as comments, make the style channel silent, no starter code" — is the best exercise in the chapter. It asks the student to think before they code, document their assumptions, and then verify their result. That is the complete thinking loop the chapter promises.
