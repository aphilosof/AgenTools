# Synthesis — Ch.2 Decisions & Loops

**Overall verdict:** Needs fixes

**Consensus issues (flagged by 2+ reviewers):**
1. Plan documents 7 lessons; 9 were built — L2.8 (try/except) and L2.9 (capstone) are absent from the plan (Downey, Guzdial, Malan — all three call this a blocker or major)
2. `and`/`or` returning operands is named as a misconception but never demonstrated with a runnable example (Downey, Hermans, Malan, Ramalho, Oakley — 5 reviewers)
3. L2.4 cognitive overload — seven schema in one lesson; `while True:`/`break` sentinel appears before `break` is taught (Hermans, Malan, Oakley — 3 reviewers)
4. L2.5 cognitive overload — `for`, all three `range` forms, `break`, `continue`, nested loops, `print(end=/sep=)`, and accumulator recall packed into one lesson (Oakley, Resnick, Hermans)
5. No warm-up retrieval questions in any lesson, violating CURRICULUM-STRUCTURE.md §B (Oakley; implicit in Guzdial's transfer findings)
6. `continue`-before-update infinite-loop trap mentioned only parenthetically; deserves explicit named anti-pattern in L2.5 (Hermans, Malan, Ramalho, Resnick — 4 reviewers)
7. L2.7 plan uses `play()` but the actual lesson uses `sample()` — API name mismatch (Resnick)

---

## Prioritised fix list

### BLOCKERS

**B1. Wrong SyntaxError message taught in c2s1** (Ramalho — sole finder, verified)
The lesson states `if x = 5:` raises "cannot assign to literal." Python 3 actually raises "invalid syntax. Maybe you meant '==' or ':=' instead of '='?" The lesson teaches the wrong error message. This violates the AUTHORING.md rule to verify every technical claim. Students who run the code and see the real message will distrust the course.
Fix: Replace "cannot assign to literal" with the actual Python 3 message throughout c2s1.

**B2. "Exactly three falsy values" is factually wrong** (Ramalho — sole finder, verified)
c2s1 states falsy values are "exactly" 0, `""`, and `None`. This forecloses the question incorrectly — `0.0`, `[]`, `{}`, `()` are all falsy. A student who writes `if my_list:` in Ch.4 will be confused.
Fix: Replace "exactly these three" with "At this point in the course, the falsy values you need to know are 0, `""`, and `None`. In Chapter 4 you will meet others, like empty lists. Everything else is truthy."

**B3. Plan/implementation gap: L2.8 and L2.9 absent from the chapter plan** (Downey, Guzdial, Malan — 3 reviewers)
The chapter plan describes 7 lessons. The built c2.js has 9. L2.8 (try/except, EAFP, bulletproof input, ValueError, ZeroDivisionError) and L2.9 (Art and Music Capstone) are substantive lessons that own concepts, error classes, and exercises not documented anywhere in the plan. The Chapter Quiz has no question on exception handling even though L2.8 is required reading before the gate.
Fix: Add L2.8 and L2.9 entries to the chapter plan, including their concepts owned (try/except, EAFP vs LBYL, ValueError, ZeroDivisionError), misconceptions (bare except catches bugs silently), and arc role. Add at least one quiz question touching exception handling, or explicitly document that L2.8 content is assessed in Ch.3.

---

### MAJORS

**M1. `and`/`or` operand-return behaviour never demonstrated with runnable code** (Downey, Hermans, Malan, Ramalho, Oakley — 5 reviewers)
All five reviewers found the same gap: the plan correctly lists this misconception, but the actual c2s1 lesson never shows `print(0 and "hello")` or `print("" or 42)`. A student reading c2s1 forms the model "and/or produce True or False" because every worked example uses them in boolean context. The operand-return behaviour is stated in a codex note only. The `not` contrast (always returns bool) is the same — present in the misconceptions list but not demonstrated.
Fix: Add two runnable lines to c2s1: `print(0 and "hello")` → `0` and `print("" or 42)` → `42`, with one sentence: "and and or return one of their operands — whichever one determined the result — not a new True or False."

**M2. L2.4 opens with augmented assignment before the first `while` loop** (Malan, confirmed by Hermans/Oakley)
c2s4 teaches augmented assignment on the first screen, before the student has seen a single `while` loop. The hook moment — the blastoff countdown — is buried as worked example 2. The plan's own worked-example 1 correctly opens with the countdown; the written lesson departs from this and inverts the pedagogical payoff.
Fix: Move augmented assignment to after the first countdown worked example. Students see `n = n - 1` in the countdown, then the next screen introduces `+=` as "a shorter way to write what you just wrote." This is the motivated introduction; the current order kills the hook.

**M3. L2.4 cognitive overload — seven schema in one lesson** (Hermans, Malan, Oakley — 3 reviewers)
c2s4 introduces: augmented assignment, loop invariants (named), off-by-one errors (named), while loop with three responsibilities, infinite loops and recovery, the accumulator pattern, and the `while True:`/`break` sentinel — all in a 25-minute budget. The plan's progression table shows "rungs 3–6" but gives no signal that this is the densest lesson in the chapter.
Fix: (a) Add a "high density — slow the ramp" note to the plan's progression table for L2.4. (b) Ensure the written lesson sequences schema acquisition explicitly: three-responsibility model and rung-1 traces first; accumulator second; sentinel pattern last (or move sentinel to L2.5 where `break` is formally taught). The plan already supports moving the sentinel to L2.5.

**M4. L2.5 cognitive overload — nested loops packed into first `for` lesson** (Oakley, Resnick, Hermans — 3 reviewers)
c2s5 contains: `for`, all three `range` forms, the lazy-sequence property, the `for` vs `while` decision rule, `break`, `continue`, nested loops, `print(end=/sep=)`, and accumulator recall. Nine to fourteen discrete items in one lesson exceeds a 25-minute budget for an 11-year-old. `print(end=/sep=)` is not a loop concept. Nested loops are a separate conceptual unit with their own failure mode (`break` exits only the innermost).
Fix: Move nested loops to L2.7 where they appear in real context (the drum loop structure). Move `print(sep=, end=)` to a codex/note entry in c1s1 or introduce it as a brief warm-up note in c2s6 where it is first genuinely needed. This reduces c2s5 to a manageable scope.

**M5. L2.3 rung-6 BMI exercise: cognitive load spike without scaffolding support** (Guzdial)
The first write-from-scratch exercise in the chapter asks simultaneously for `float(input())`, arithmetic, and a four-way `elif` chain from a blank editor. No preceding worked example shows all three together. The expertise reversal effect (Kalyuga et al.) predicts overload here.
Fix: Add a worked example in L2.3 showing the full pattern — `x = float(input(...))`; compute a value; `if/elif/else` chain — before the BMI exercise. Alternatively, down-rung the BMI to rung 5 (input/arithmetic lines provided, student writes the elif chain) and move the blank-editor version to the Chapter Challenge.

**M6. No warm-up retrieval questions in any lesson** (Oakley — primary; Guzdial implicit)
CURRICULUM-STRUCTURE.md §B mandates a quick recall question from an earlier lesson at the start of every lesson. None of the nine written lessons (c2s1–c2s9) contain a warm-up subsection. Retrieval practice is not the same as incidental re-use; the structured recall moment is missing for the entire chapter.
Fix: Add a named warm-up item to each lesson's content array — one predict-the-output or free-recall question targeting the previous lesson's key concept. Specify this in the chapter plan as a required section so subsequent chapters inherit the pattern.

**M7. Write-from-scratch exercises are all calculators/classifiers; no open creative prompts** (Resnick — primary)
The chapter's rung-6 exercises are almost entirely fixed-spec tasks: BMI classifier, guessing game, prime checker, drum pattern with specified output. The strand lesson (L2.7) gives creative-adjacent tasks but all six exercises have exact specs. The Chapter Challenge capstone (drum loop) is a translation task, not a making task.
Fix: Convert at least one L2.7 exercise and the Chapter Challenge exercise 6 to open-ended prompts. "Make an 8-beat drum pattern you would actually want to listen to" with a structural checker (correct number of sample/sleep calls, a loop present) is sufficient. This is consistent with the checker architecture.

---

### MINORS

**m1. `continue`-before-update infinite-loop trap deserves explicit named anti-pattern in L2.5** (Hermans, Malan, Ramalho, Resnick — 4 reviewers)
The interaction "continue in a while loop skips the update, creating an infinite loop" is currently mentioned only parenthetically in the Chapter Challenge. This is a real, non-obvious hazard distinct from the "missing update" infinite loop already taught.
Fix: In the `continue` subsection of L2.5 (or L2.4 given M3 above), add a named anti-pattern block: "If you use `continue` inside a `while` loop, make sure the update step comes before the `continue` line — if it comes after, `continue` skips it and you have an infinite loop."

**m2. L2.7 plan uses `play()` but actual lesson uses `sample()`** (Resnick)
API name mismatch between plan and implementation throughout L2.7 and L2.9.
Fix: Update the chapter plan to use `sample()` consistently, or confirm the correct engine-exposed name and align both documents.

**m3. `len()` described as "introduced briefly" in L2.2 but already taught in c1s5** (Malan)
The plan says "introduce `len()` briefly" in L2.2. It was already introduced in Ch.1 L1.5. This should read "recall `len()` from c1s5" not "introduce."
Fix: Update the plan's L2.2 entry to label `len()` as a Ch.1 recall.

**m4. `augmented assignment` and `accumulator pattern` not listed in Ch.2 concepts-owned** (Guzdial, Ramalho)
Both are introduced, named, and given Codex entries in c2s4. Neither appears in the chapter plan's "Concepts owned" section. Ch.3 uses the accumulator constantly.
Fix: Add "augmented assignment (`+=`, `-=`, `*=`, `//=`)" and "accumulator pattern" to the Ch.2 concepts-owned section and to the Ch.2→Ch.3 recall note.

**m5. `/=` augmented assignment gap** (Ramalho)
The plan lists `//=` but not `/=`. A student who writes `n /= 2` in an accumulator gets a float, which is a subtle bug.
Fix: Add a one-line note in L2.4: "`/=` gives a float; use `//=` if you want an integer."

**m6. `range(0)` NameError demo is scope-dependent** (Downey)
L2.6 worked example 3 shows a `NameError` from a `for` loop over `range(0)`. This only works reliably inside a function — at module level, a previously bound `i` from an earlier loop persists.
Fix: If this example is authored, wrap it in a function. Alternatively, replace with an unambiguous NameError demo (variable used before any assignment).

**m7. Logic bug category appears without framing in L2.6** (Hermans, Ramalho)
"Logic bug" is introduced as a third error category in L2.6 with no prior mention. Students who have had five lessons of Python detecting every problem may find "Python cannot detect this" disorienting.
Fix: Add one sentence of framing: "Python does not know what you intended to compute — it only knows what you told it to compute. A logic bug is a gap between your intention and your instruction."

**m8. `if x == 1 or 2:` trap demonstrated but not practised as an exercise** (Guzdial, Hermans)
The misconception is shown in a worked example but no exercise requires the student to spot or fix it themselves.
Fix: Add a rung-4 fix exercise in L2.1: give code that uses `if x == 1 or 2:`, ask why it always prints "match," then fix it.

**m9. `bool()` re-explained in c2s1 as if new** (Oakley)
`bool(42)` → `True`, `bool("")` → `False` was previewed in Ch.1's types lesson. c2s1 re-explains it from scratch rather than recalling it.
Fix: Replace the opening `bool()` explanation with a one-sentence callback: "Recall from Chapter 1: `bool()` converts any value to True or False — now let's see exactly which values map to which."

**m10. `for`/`while` decision requires one practice exercise** (Guzdial)
Every L2.4 and L2.5 exercise specifies the loop type in the prompt. The first time a student must choose which loop fits a problem is the Chapter Challenge. Selection needs practice.
Fix: Add one exercise in L2.5 (rung 5): "Here are two problems. For each, decide whether you need `for` or `while`, and explain why, before writing anything."

**m11. Quiz Q5 (free-recall conceptual question) does not block advancement** (Oakley)
The most important conceptual question in the chapter — "why can `while` loop forever but `for`/`range` cannot?" — is optional and ungraded. A student who cannot answer in any form has not chunked the core distinction.
Fix: Either require any non-empty response (coach mode leniency), or replace one easier predict-the-output question with this one and make it gate the quiz.

**m12. Print debugging exercise describes the skill but provides no practice** (Malan)
c2s6 teaches print debugging as a text block. No exercise asks the student to add a debug print, read the output, find the bug, and remove the print.
Fix: Add one exercise with a logic bug and a commented-out `# print(i, total)` inside the loop. Student uncomments it, reads the output, fixes the bug, comments it back out.

**m13. f-strings with `:.2f` are never recalled in Ch.2** (Oakley)
These were taught in c1s5 and will be used heavily in Ch.4. No Ch.2 exercise or example uses them.
Fix: In c2s7 or c2s9, use an f-string in one worked example (e.g., `f"Beat {beat+1}"` or `f"BMI: {bmi:.1f}"`).

**m14. Words strand is thin despite being named in the chapter overview** (Resnick)
The words strand amounts to `len()` in L2.2–L2.3 and `split()` in the Chapter Challenge. Natural string-method uses in conditions (`if word.lower() == "yes":`, `while input_val.strip() == "":`) are absent.
Fix: Add at least one worked example in L2.3 or L2.7 that uses a string method inside a condition or loop — this costs nothing and makes the "words strand" label accurate.

---

## Cross-cutting themes

**1. Plan/implementation divergence is the structural problem.** Three reviewers independently flagged the same root issue: the chapter plan describes 7 lessons, but 9 were built. The plan is being used as the authoritative specification for quiz gates, concept ownership, and recall lists — and it is wrong. Every other documentation gap (augmented assignment not in concepts-owned, `len()` mislabeled as introduced in L2.2, `play()` vs `sample()`) is a symptom of the same cause: the plan was not updated as the implementation evolved. Fix the plan after fixing the lessons.

**2. Cognitive load spikes in L2.4 and L2.5 are the pedagogical problem.** Four reviewers raised this from different frameworks (expertise reversal effect, working memory, cognitive load theory, Scratch's one-concept-per-project rule). The consensus is: L2.4 should end before the sentinel pattern, and L2.5 should end before nested loops. These are the same two split points from all four reviews. The resolution is clear.

**3. `and`/`or` operand-return is the most-flagged single content gap.** Five reviewers named it. Two ran the code to verify. The fix is two lines of runnable code in c2s1 and one sentence. There is no conflict — do it.

**4. Retrieval practice is architecturally absent.** Oakley flagged it as a MAJOR. Guzdial's transfer finding (students cannot choose a loop type because selection was never practised) is a symptom of the same gap. The chapter teaches the concepts but does not install retrieval habits. Warm-ups address this at the lesson level; the loop-type decision exercise addresses it at the transfer level.

**5. Creative latitude is missing from rung-6 exercises.** Resnick flagged it as a MAJOR; no other reviewer contradicted it. The strand lesson and capstone are the natural fix points. The checker architecture already supports structural checking rather than output matching.

---

## Reviewer conflicts and resolutions

**Conflict 1: Should `break` be moved entirely out of L2.4?**
Hermans (MAJOR): cut the sentinel pattern from L2.4 entirely; `break` belongs in L2.5.
Ramalho (MINOR): the preview is defensible because the lesson is honest about it and the rung-5 exercise does not actually require `break`.
Resnick: the L2.4 sentinel introduction is handled honestly; no objection to the preview.
Downey: verified correct.

Resolution: Keep the motivating preview of `break` in L2.4 (the `while True:` sentinel as a worked example), but do not include any exercise in L2.4 that requires `break`. The rung-6 guessing-game model solution should use a condition-based exit (`while guess != secret:`) not `break`. Move the full `while True:`/`break` sentinel as a taught exercise to L2.5. This satisfies Hermans's cognitive load concern (no `break` exercises before `break` is taught) while preserving Ramalho's defence of the motivating preview.

**Conflict 2: Is the L2.3 BMI write-from-scratch exercise appropriate as rung 6?**
Guzdial (MAJOR): cognitive overload — first blank-editor exercise piles three sub-tasks; needs either a worked example or a down-rung.
Malan (implicitly endorses the ramp): "the difficulty ramp is correctly calibrated."
Resnick: calls L2.3 ex. 3 fine "as a translation task."

Resolution: Guzdial's specific concern is not about the ramp speed overall but about the absence of a complete worked example showing all three sub-tasks together before the blank editor. This is a gap independent of the ramp question. Fix: add a worked example in L2.3 showing `float(input())` + arithmetic + elif chain before the BMI exercise. Keep the exercise at rung 6 but ensure the model exists.

**Conflict 3: Should nested loops be moved out of L2.5?**
Oakley and Resnick: yes, move to L2.7 where they appear in real context.
Malan and Downey: no direct objection to L2.5, but both flag the lesson's cognitive density.

Resolution: Move the nested-loop introductory teaching (the multiplication table grid example) to L2.7, where nested loops are used naturally (the drum pattern's bar×beat structure). Keep a single sentence in L2.5 previewing that loops can be nested — "you will see this in practice in L2.7" — so the concept is not invisible before it appears. This is the resolution recommended by both Oakley and Resnick and is not contradicted by any other reviewer.

**Conflict 4: Is the L2.4 high density a MAJOR or just needs a documentation note?**
Malan: MAJOR (calls for pacing guidance and explicit difficulty signal in the plan).
Hermans: MAJOR (calls for structural rearrangement — sentinel to L2.5).
Oakley: MAJOR (cognitive load).
Downey: does not flag L2.4's density as a structural problem; flags loop invariant exercises as missing.

Resolution: The three MAJOR votes carry. The written lesson needs reordering (M2 and M3 in the fix list), not just a documentation note. Malan's "add a high-density marker" is also correct and costs nothing.
