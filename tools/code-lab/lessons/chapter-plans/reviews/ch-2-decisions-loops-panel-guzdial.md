# Panel Review — Ch.2 Decisions & Loops — Mark Guzdial (Georgia Tech, computing education research)
**Verdict:** Solid

---

## Findings (from my lens)

### Computing education research lens

My work is grounded in three questions: Does the concept ordering match the *learnable* order, not just the logical one? Does the context precede the concept (context-first)? Is the scaffolding structure — the rung ladder — actually calibrated to what we know about novice cognitive load?

---

1. [MINOR] L2.1 — Context arrives before concept, but the hook is passive

The chapter plan describes a two-branch program the student runs and modifies before any syntax explanation. That is exactly what context-first teaching demands: see the problem, then learn the tool. The written c2s1 lesson executes this well — the `age >= 18` voting program runs immediately, and the instruction says "change 18 to 10, run again, and see which branch fires" before a single word about boolean syntax.

The minor issue: this is the hook for comparisons, but the chapter plan does not have a dedicated Hook lesson (L2.0) per CURRICULUM-STRUCTURE.md §C. L2.1 plays the hook role but is labeled a concept lesson. That gap is noted in the existing review. From a CE research perspective, this matters because the hook is supposed to motivate the *whole chapter's* question — "the computer can choose and repeat" — not just introduce booleans. L2.1 does establish this framing ("A condition is just an expression"), but it is doing double duty.

Fix: Either retitle L2.1 as "Hook" in both the plan and the lesson metadata, or add a separate L2.0 that runs a complete branching-and-looping program (something that contains an if *and* a while) so students see the chapter's full concept space before drilling into its parts.

---

2. [MAJOR] L2.3 write-from-scratch BMI exercise — cognitive load spike not supported by the scaffold

The rung-6 BMI exercise in L2.3 (rung 6, blank editor) asks a student to: read weight and height with `float(input())`, compute `weight / height**2`, and implement a four-way `elif` chain — all from a blank editor. This is the *first* rung-6 exercise in the chapter. Research on the expertise reversal effect (Kalyuga et al., 2003; Sweller et al., 2011) is clear: removing worked examples before the learner has consolidated the relevant schemas causes cognitive overload. The preceding exercises in L2.3 are rung 4 (fix the wrong elif order) and rung 5 (fill in conditions). Jumping directly to a blank editor with three simultaneous sub-tasks — float input, arithmetic, four-branch elif — skips rungs for a student who has seen maybe six if/elif exercises total.

The plan acknowledges this: "Write-from-scratch expectation arrives at L2.3." But the worked examples immediately before the blank exercise do not include a complete end-to-end example with float input + arithmetic + elif together, so there is no model to transfer from.

Fix: Add a worked example in L2.3 that shows the full pattern: `x = float(input()); ... if/elif chain with computed value`. The student then writes the BMI as rung 6 but now has a complete mental model of the structure. Alternatively, down-rung the BMI to rung 5 (provide the input/arithmetic lines, student writes the elif chain) and save the full blank-editor version for L2.4 or the Chapter Challenge.

---

3. [MINOR] L2.4 and L2.5 — The while/for decision rule is taught, but the transfer exercise arrives too late

L2.5 teaches the decision rule explicitly: "use `for` when you know the count in advance; use `while` when the count depends on what happens at runtime." The written c2s5 lesson nails this. However, the first time the student is asked to *choose* which loop to use (rather than being given one) is in the Chapter Challenge. Every L2.4 and L2.5 exercise specifies the loop type in the prompt. Research on transfer (Judd, 1908; Singley & Anderson, 1989) shows that learning to use a tool does not automatically produce the ability to choose it — selection needs to be practiced. One exercise, somewhere in L2.5, should present a problem description and ask the student to decide whether it calls for `for` or `while` before writing it.

Fix: Add one exercise in L2.5 (rung 5 or 6) phrased as: "Here are two problem descriptions. For each, decide whether you need a for loop or a while loop, and explain why, before writing anything." This activates the decision rule rather than just exposing it.

---

4. [MINOR] L2.6 debugging lesson — the three-step protocol is named but not practiced as a protocol

The plan and written c2s6 lesson define the three debugging steps well: read the error class, go to the line (look one line earlier), understand before changing. But the exercises present pre-broken programs where the error is already visible. There is no exercise where the student must diagnose *which* of the three steps they need first — the protocol is always implicitly applied for them by the exercise design (the broken code is right there). Research on metacognition (Flavell, 1979; Chi et al., 1989) shows that naming a strategy is not the same as practicing the strategy selection.

This is minor because the lessons leading to L2.6 each have fix exercises, so students have seen the *behavior* of debugging even if they haven't explicitly applied the named protocol. But one exercise in L2.6 could strengthen this: present the traceback text alone (no code visible) and ask the student to interpret it and state what line to look at before showing the code.

Fix: Add one exercise that shows only the error message and asks: "What type of error is this? Which line should you look at? What are you looking for?" Then reveals the code for the fix. This makes protocol application explicit.

---

5. [MINOR] Misconception list — `if x == 1 or 2:` misconception is caught in plan and lesson, but the fix is only stated, not demonstrated in an exercise

The plan correctly identifies the `or 2` trap as a target misconception, and the written c2s1 lesson shows it in a worked example with clear explanation. But none of the exercises ask the student to spot or fix this pattern. Research on misconception instruction (Smith et al., 1993; Confrey, 1990) shows that demonstrating a misconception without requiring the student to encounter and correct it themselves leaves the misconception intact for many learners. The worked example inoculates some students; an exercise requiring diagnosis inoculates more.

Fix: Add a rung-4 fix exercise in L2.1 where the student is given code like `if x == 1 or 2: print("match")` and asked why it always prints "match," then fixes it to the correct form.

---

6. [MAJOR] c2.js adds L2.8 (try/except) — not present in the chapter plan

The written c2.js file contains a lesson c2s8 ("try and except") that does not appear anywhere in the ch-2-decisions-loops.md plan. This lesson is substantive — it introduces EAFP, bare-except dangers, bulletproof input patterns, `ValueError`, `ZeroDivisionError`, and the sentinel+try+break idiom. These are Ch.2-appropriate concepts (they require while, if, and type conversion to motivate), but:

- The plan's concept inventory does not list them.
- The Chapter Challenge and Quiz in the plan do not reference them.
- The Chapter Quiz has no question on exception handling.

This is a plan/implementation mismatch. The lesson itself is strong (the reference review already designated c2s8 as the depth standard). The problem is that the plan is now stale — it describes a 7-lesson chapter but the chapter has 8 lessons. From a CE research perspective this is important because the quiz gate (unlocks Ch.3) tests none of the c2s8 content. A student could pass the gate having only seen but not practiced exception handling, which then creates a gap when Ch.3 uses it.

Fix: Update the chapter plan to include L2.8 as a concept lesson. Add one quiz question covering exception handling. Alternatively, if try/except is intentionally placed in Ch.2 with no quiz gate, document that explicitly and confirm it will be recalled and assessed in Ch.3.

---

7. [MINOR] The `accumulator` pattern — named and taught in c2s4 but not in the plan

The written c2s4 lesson introduces the accumulator pattern explicitly, names it, and gives it a Codex entry. The ch-2 plan does not list "accumulator" in its concepts-owned section. This is a minor plan/implementation gap — the pattern is one of the most important programming patterns a novice will learn (Guzdial, 2015; Ericson et al.), and naming it is the right pedagogical call. The plan should be updated to own "accumulator pattern" as a Ch.2 concept, so later chapters can recall it by name.

Fix: Add "accumulator pattern" to the Ch.2 concepts-owned list and to the Ch.2 → Ch.3 recall note.

---

## Continuity notes

**Well-woven from Ch.1:**
- The `%` operator is used immediately in L2.1 (predicting results) and L2.2 (even/odd) without re-teaching — correct spiral use.
- `int()`, `float()`, `input()` are used in exercises from L2.2 onward as recalled tools — the written lessons treat them as prior knowledge exactly right.
- `len()` is introduced briefly in L2.2 with a forward reference to Ch.4 for full coverage — appropriate use-before-teach with explicit flagging.
- f-strings appear in L2.5 worked examples (`f"{n} × {i} = {n*i}"`) as recalled, not re-taught — correct.

**Missing recall:**
- `bool()` conversion is used in the c2s1 truthiness examples, but the explicit link "you first saw `bool()` in Ch.1 L1.2" is made only in the plan (Recalls section), not surfaced in the written lesson text. A one-sentence callback in the lesson would reinforce spiral learning.
- Augmented assignment (`+=`, `-=`) is introduced in c2s4 as new material. Ch.1 uses `n = n + 1` style throughout. The transition is handled correctly (c2s4 explicitly contrasts the two forms) but the plan's concept inventory does not list `+=` as a Ch.2-owned concept. Add it.

**Accidental re-teaching:**
- None detected. The lessons are disciplined about recalling Ch.1 concepts without restating their definition.

**Boundary with Ch.3:**
- c2s8 (try/except) teaches the `while True: / break` pattern for validated input. Ch.3 builds on this with function decomposition (putting the input loop in a helper function). The handoff is appropriate provided Ch.3 explicitly recalls the sentinel pattern.

---

## What's strong

- **Context-first execution throughout.** Nearly every concept is motivated by a runnable example before the syntax is named. The voting-program hook in c2s1, the deliberately-broken infinite loop in c2s4, and the run-both-see-the-difference examples in c2s3 and c2s5 all follow research-validated motivate-before-formalize sequencing.

- **Misconception targeting is specific and technically correct.** The `or 2` trap, the three-responsibility rule for while, the `range` stop-not-included rule, and `break`-exits-innermost-only are each given dedicated worked examples with contrast cases. This is exactly the kind of specific, named misconception instruction that research (Smith et al., 1993) shows to be more effective than generic warnings.

- **The debugging lesson (L2.6 / c2s6) distinguishes the three error categories and teaches a named protocol.** Separating syntax errors, runtime errors, and logic bugs — and giving the three-step protocol a name the student can use — is grounded practice. The logic-bug exercise (total = n instead of total += n) is particularly strong: no error message, wrong answer, the student must trace variables. That is authentic debugging experience at the right level.
