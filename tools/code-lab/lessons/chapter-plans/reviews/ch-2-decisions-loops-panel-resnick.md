# Panel Review — Ch.2 Decisions & Loops — Mitchel Resnick (Scratch, MIT Media Lab)
**Verdict:** Solid

---

## Findings (from my lens)

**Creative latitude and expression**

1. [MAJOR] L2.3 ex. 3 and L2.4 ex. 3 and L2.7 — The chapter's write-from-scratch exercises are almost all calculators or classifiers (BMI, passwords, guessing game). These are fine demonstrations, but they do not ask students to make *something they care about*. In Scratch, the moment students move from "follow instructions" to "build your thing," intrinsic motivation spikes. The strand lesson (L2.7) is the one place where genuine expression lives — spiral art and drum patterns let a student make something theirs. But L2.7 is a single lesson placed at the end; all six exercises give fixed specs ("a hexagon," "a kick-snare alternation"). There is no moment in the chapter where a student is told "make a drum pattern you like" or "draw a shape you design." → Fix: Convert at least one L2.7 exercise and one Chapter Challenge exercise into open-ended prompts with no specified output. "Make an 8-beat drum pattern you would actually want to listen to" is sufficient. Give the checker a structural test (correct number of sample/sleep calls, a loop present) rather than a specific output match. This respects the checker architecture while opening creative space.

2. [MAJOR] Chapter Challenge ex. 6 — The four-bar drum loop is the only sound exercise in the capstone, and it specifies the pattern (A on bars 1 and 3, B on bars 2 and 4). This is the chapter's capstone moment — the place most analogous to Scratch's "make a project." It should invite the student's own pattern. The current spec is a translation task, not a making task. → Fix: Change to "Write a 4-bar loop with your own two patterns. At minimum: a loop over bars, an if inside, and both sample() and sleep() used." Check structure only.

3. [MINOR] L2.1 hook — The chapter plan describes starting with a runnable demo the student modifies (age checker). The actual c2.js lesson opens with that example as a runnable code block. This is exactly right — play before theory. No change needed, but worth noting: this one moment (run it, change 18 to 10, see what happens) is the chapter's best "low floor" entry point, and the plan protects it. Do not let revision pressure strip it.

4. [MINOR] L2.4 ex. 3 (guessing game) and L2.5 ex. 3 (prime checker) are strong as rung-6 exercises. They are challenging, conceptually honest, and the guessing game in particular has natural play value. The prime checker is more utilitarian but technically appropriate. Both earn their place.

**Structural concerns**

5. [MAJOR] L2.5 is overloaded — `for`, all three `range` forms, `break`, `continue`, and nested loops are all in one lesson. The plan acknowledges this as a deliberate decision, but the actual c2.js lesson bears the cost: it runs to 25 minutes (the budget ceiling), contains nine content blocks and six exercises, and asks students to absorb nested loops in the same sitting as their first `for` loop. In Scratch, we would never put "if-then," "if-then-else," repeat, and nested repeat into one sitting. Each new control structure is a new mental tool that needs its own project moment to settle. The plan's rationale — that `break` fits naturally with `for` — is correct for `break` and `continue`, but nested loops are genuinely a separate concept with their own failure mode (believing `break` exits all loops). → Fix: Promote nested loops to a standalone half-lesson or give them their own subsection in L2.7 (where they appear in a real context — the 4-bar drum loop). The current plan already uses nested loops in L2.7; move the introductory teaching there rather than cramming it into L2.5.

6. [MINOR] L2.6 is a well-designed debugging lesson that names three error categories (syntax, runtime, logic bug). The plan and the actual lesson both execute this well — especially the logic-bug exercise (total = n instead of total += n). Debugging as a first-class skill, taught explicitly, is correct pedagogy and underused in most curricula. No change needed.

7. [MINOR] L2.2 ex. 1 (rung 1 predict) — the exercise asks students to trace `n=4`, but the starter code hardcodes `n = 4` and the check expects only the output for `n=4`. The hint says "then change n to 8 and run again" but there is no second check for n=8. The plan says "trace for n=4 and n=8" but the checker enforces only one. The missing second trace is a lost predict-the-output rung-1 moment. This is small but misaligned between plan and execution. → Fix: Add a second exercise that hardcodes n=8 and has its own check, or change the prompt to trace both values in a single response and check for both outputs.

**Language and voice**

8. [MINOR] The actual lessons (c2.js) are at a comfortable grade 7–9 level throughout. "Augmented assignment," "accumulator," "loop invariant" are introduced with definitions and the `why` before the syntax. The "short-circuit is not just a speed trick" passage (c2s1) and the "EAFP" passage (c2s8) are the best prose in the chapter — they build the mental model alongside the term. These passages exceed the depth requirement and should be treated as the baseline for the chapter, not the exception.

9. [MINOR] L2.7 plan lists `play()` and `sleep()` as the sound API. The actual lesson uses `sample()` and `sleep()`. The plan and implementation are misaligned on function names. → Fix: Update the plan to use `sample()` consistently, or confirm which API name the engine exposes and align both documents.

---

## Continuity notes

**Well-woven from Ch.1:**
- `%` operator recalled throughout — even/odd, beat selection, BMI rounding. Never re-taught, always used.
- `f-strings` with `:.2f` recalled in c2s5 via the times-table printer (`f"{n} × {i} = {n * i}"`). Natural and clean.
- `len()` introduced in c2s2 (password check) with a note that full string treatment is Ch.4. Appropriate low-floor use — shown working, not taught as a new concept.
- `input()` → `int()` / `float()` conversion: used without re-teaching in multiple exercises (guessing game, BMI). Correct recall.
- `bool`, `type()`, `bool()` conversion: c2s1 opens with these as recalled concepts, builds on them for truthiness. Handled correctly.

**Missing or thin recall:**
- `str.split()` appears in Chapter Challenge ex. 5 ("sentence.split()") with a note that it is "recalled from Ch.1." The Ch.1 plan owns `split()` and the c1.js content teaches it. This is a legitimate recall. However, the challenge ex. 5 is the only place in the entire chapter where string methods are revisited at all. For a chapter that includes a "words strand," `.lower()`, `.upper()`, `.strip()`, and `.replace()` are never used in any condition or loop — even though `while input_val.strip() == "":` or `if word.lower() == "yes":` would be natural. The words strand is thin in this chapter despite being named in the overview.

- `round()` from Ch.1 is never recalled in Ch.2. Minor omission — a natural hook would be formatting the BMI output in L2.3 ex. 3 (`round(bmi, 1)`), which is a real-world touch and costs nothing.

- `str * int` repetition (Ch.1) is recalled once in Chapter Challenge ex. 5 (`"*" * len(word)`). Good. Could appear earlier (e.g., printing a progress bar inside a loop in L2.4 or L2.5).

**Concepts appearing before full teaching (plan vs. execution):**
- `break` appears in L2.4 (sentinel input pattern) before it is formally taught in L2.5. The plan flags this as a preview and the actual c2s4 lesson introduces it with a direct sentence ("break is covered fully in L2.5; this is a preview"). The actual c2s4 lesson goes further and teaches `while True: / break` as the sentinel idiom completely, including the motivating explanation. By the time L2.5 arrives, `break` has already been taught in context. L2.5's formal treatment then adds `continue` and nested-loop scoping. This sequencing is defensible — context before syntax — and the execution handles the partial introduction honestly.

- `len()` used in L2.2 before the Strings chapter. Appropriate: shown working, noted as "full treatment in Ch.4," no exercises test it independently here.

**Potential re-teaching risk:**
- c2s1 explains `=` vs `==` in detail. c2s2 briefly mentions it again. c2s3 codex note includes it. The concept is correct to reinforce, but by the third appearance the prose should be shortening, not restating. Check that later lessons reference rather than re-explain.

**Ch.3 boundary:**
- The Ch.3 plan states that by L3.3, blank-editor authoring is expected as the default. The Ch.2 progression reaches rung 6 at L2.3, with write-from-scratch appearing throughout L2.4–L2.7. The handoff is clean — Ch.3 can treat blank-editor as normal without abrupt escalation.

---

## What's strong

- **The actual depth of execution exceeds the plan.** The c2.js lessons contain named CS principles (EAFP, accumulator, loop invariant, flat-is-better), explicit mental models (the three while responsibilities framed as an invariant), and honest anti-patterns (bare `except`, `total = n` instead of `+=`). The prose standard from the c2s8 try/except lesson — which is the strongest writing in the chapter — has been applied across the chapter's other lessons.

- **Debugging as a first-class skill.** Every lesson from L2.1 onward includes at least one fix/spot exercise, and L2.6 explicitly names the three error categories (syntax, runtime, logic bug) and the three-step debugging protocol. The logic-bug exercise (accumulator using `=` instead of `+=`) is precisely the kind of mistake that runs silently and that students need to experience in a controlled setting. This is excellent curriculum design.

- **The spiral and drum pattern in L2.7.** The loop-as-parameter idea — that `forward(i * 10)` makes something visually different each iteration, that `beat % 2 == 0` alternates sounds — gives students a genuine aha moment. The plan's framing ("the loop variable does not have to be a counter you print — it can be a parameter that changes what happens") is the right frame. These two examples show students that loops make *things*, not just numbers.
