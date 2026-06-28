# Synthesis — Ch.0 First Sound
**Overall verdict:** Needs fixes
**Consensus issues (flagged by 2+ reviewers):**
- sleep() unit undefined / wrong arithmetic (Downey + Ramalho — BLOCKER)
- "Three-note program" mislabel (Malan + Ramalho — MINOR)
- "Both notes at the same time" incorrect answer (Malan + Ramalho — MINOR)
- Decoy Parsons too early in L0.3 ex.2 (Hermans + Malan + Resnick — MAJOR)
- No parentheses/function-call bridge to Ch.1 (Hermans + Ramalho + Resnick — MINOR)
- Bug exercise repeated 3x with identical pattern (Malan + Ramalho + Resnick — MINOR)
- "Motif" Codex entry defines motif as "a loop" incorrectly (Ramalho + Resnick — MINOR)
- play(84) "two octaves above surrounding notes" is imprecise (Ramalho + Resnick — MINOR)
- Challenge ex.4 "tempo" term introduced only in assessment (Malan — MAJOR)
- No pseudocode-to-Python translation anchor (Guzdial + Hermans — MAJOR)
- Retrieval spiral not contracted into later chapters (Oakley — MAJOR)
- L0.4 free-text warm-up is illusion-of-competence, not retrieval (Oakley + Resnick — MAJOR)
- MIDI note numbers never grounded to piano (Malan — MAJOR)

---

## Prioritised fix list

### BLOCKERS

**B1. sleep() unit is undefined and the arithmetic in Challenge ex.1 and Recap Q4 is wrong.**
Flagged by: Downey, Ramalho.
c1.js defines sleep() in beats (sleep(1) = 0.5 s), so sleep(0.5) = 0.25 s. Challenge ex.1 asks "how many seconds of silence?" and Recap Q4 states "5 × 0.5 = 2.5 seconds" — both wrong by a factor of 2 if the beats definition holds.
Fix: Either (a) declare that sleep() takes seconds in the Ch.0 context and reconcile c1.js lesson 1.7's definition before authoring, or (b) remove the word "seconds" from Challenge ex.1 and Recap Q4 and ask for "the total of all sleep() values" (unit-free arithmetic). Option (b) is lower-risk and consistent with treating sleep() as an opaque command in Ch.0.

---

### MAJORS

**M1. Challenge ex.4 introduces "tempo" — a term and variable never seen in the chapter — inside the summative assessment.**
Flagged by: Malan.
Assessment must test what was taught. "Tempo" appears nowhere in any lesson.
Fix: Replace the tempo branch with the lunchbox-packing branch from L0.4 ("is it a school day?"), which the student has already arranged, or use any condition already established in the chapter.

**M2. L0.3 exercise 2 — decoy-exclusion Parsons as the student's second-ever Parsons task overloads working memory.**
Flagged by: Hermans, Malan, Resnick.
Denny et al. (2008) shows distractors improve transfer but only after basic sequencing is automatized. This is exercise 2 of the student's first Parsons lesson.
Fix: Move the decoy variant to L0.5 or L0.6. Replace L0.3 ex.2 with a plain 7-block Parsons (one correct answer, no decoys) to build fluency.

**M3. No pseudocode-to-Python translation anchor at the Ch.0/Ch.1 boundary.**
Flagged by: Guzdial, Hermans.
Students build mental models around "repeat N times:" (English) and play(60) (Python-shaped). Neither plan owns the explicit transfer moment where "repeat N times" is shown next to "for i in range(N):". Without it, near-transfer fails (Mayer 2004, Guzdial 2015).
Fix: Add a one-screen "What's Next" panel to the Chapter Recap that side-by-sides the pseudocode notation with the coming Python spelling. No exercises — just a visual anchor that plants the transfer bridge.

**M4. L0.4 warm-up is open free-text reflection, not retrieval practice — creates illusion of competence.**
Flagged by: Oakley, Resnick (disposition of free-text answers).
"Why is decomposing 'get home' better than one instruction?" is the only warm-up in the chapter that is neither auto-checked nor a concrete retrieval cue. The student can fluently re-read recent prose rather than retrieve. Oakley: this is a textbook illusion of competence.
Fix: Replace with a forced-choice item: "A friend wants to write one instruction: 'go home.' They break it into four sub-steps. Which benefit does that give them? (A) fewer steps / (B) each sub-step is small enough to solve on its own / (C) the algorithm runs faster / (D) decomposition is only useful for big problems."

**M5. MIDI note numbers are never grounded to anything musical — the hook risks feeling arbitrary.**
Flagged by: Malan.
An 11-year-old does not know that 60 is middle C or that 64 is E. Without one mapping, numbers are as arbitrary as memory addresses and the "aha" moment may not land.
Fix: Add a two-sentence sidebar in L0.1 — "Note 60 is middle C on a piano; each number up is one piano key higher" — with a minimal keyboard graphic showing note 60 marked. Negligible content cost, large motivational payoff.

**M6. Retrieval spiral is described but not contracted — Ch.2/Ch.4 authors have no obligation to resurface Ch.0 items.**
Flagged by: Oakley.
The plan says retrieval items appear "as warm-ups in Ch.1 lessons (one per lesson, rotating)" but does not assign items to specific lesson numbers, and does not schedule re-retrieval at Ch.2 and Ch.4. Single-interval retrieval is significantly less effective than expanding-interval re-retrieval (spacing effect research).
Fix: (a) Assign each of the five retrieval items to a specific Ch.1 lesson number in the plan itself. (b) Mark each item with a spiral schedule: "resurface in Ch.2 warm-up [L2.x]" and "resurface in Ch.4 warm-up [L4.x]" — creating a contractual obligation for those chapter authors.

**M7. L0.1 runs real Python but the plan declares "Error classes: none" with no fallback for the errors students will actually see.**
Flagged by: Guzdial.
The rung-3 exercise asks the student to edit a pitch number. If they type play(abc) or ply(60), they will get a NameError or SyntaxError. "Error classes: none" is true from a curriculum-ownership perspective; it is false from an engine perspective.
Fix: Declare one of two paths in the plan: (a) the Ch.0 music editor restricts input to numeric values only (UI constraint), which avoids the problem; or (b) add an explicit note: "The engine displays raw Python errors verbatim if the student types malformed values — the UI must not crash silently. Ch.0 does not teach error classes, but the first error a student sees must be visible and not mysterious."

---

### MINORS

**m1. "The three-note program" is factually wrong — the L0.1 program has two notes and one sleep.**
Flagged by: Malan, Ramalho.
The L0.1 hook is play(60), sleep(0.5), play(64) — three lines, two sounds. Calling it "three-note" directly contradicts the literal-machine metaphor.
Fix: Replace every instance of "three-note program" with "three-line program" (L0.2 worked example 2 and anywhere else referenced). The L0.2 warm-up already uses the correct phrasing.

**m2. L0.2 warm-up correct answer — "both notes at the same time" is an engine-implementation claim that contradicts the sequential model being taught.**
Flagged by: Malan, Ramalho.
Whether two consecutive play() calls overlap depends on whether the engine is beat-scheduling or blocking. The chapter teaches sequential execution; "simultaneous" is not derivable from that model.
Fix: Change the correct answer to "the two notes play one after the other with no pause between them."

**m3. Bug exercise repeated three times with identical pattern (play(84) in a 60–65 note sequence) — tests recognition, not debugging process.**
Flagged by: Malan, Ramalho, Resnick (also: L0.6 worked example uses the same sequence as L0.6 exercise 3).
Three appearances of the same outlier-pitch bug trains pattern-matching, not the read→compare→locate→fix process. Additionally, the L0.6 worked example and L0.6 exercise 3 use the same note sequence — direct reproduction.
Fix: Change L0.6 exercise 3 to a duration bug (sleep(5.0) instead of sleep(0.5)) — same debugging process, different sensory channel, and previews Challenge ex.5. Use a different note sequence in L0.6 exercise 3 from the L0.6 worked example.

**m4. "Motif" Codex entry incorrectly defines motif as "a loop of notes."**
Flagged by: Ramalho, Resnick.
A motif does not have to repeat. Defining it as "a loop" conflates motif with ostinato.
Fix: "A short, memorable musical idea — a pattern of notes that can be repeated to give a piece its character."

**m5. play(84) described as "two octaves above surrounding notes" — imprecise when surrounding notes reach 64 (20 semitones, not 24).**
Flagged by: Ramalho, Resnick.
84 is exactly 2 octaves above 60 but only ~1.67 octaves above 64. A student with a piano can check.
Fix: Either reword to "much higher — nearly two octaves above the notes around it," or use MIDI 88 (24 semitones above 64) as the bug pitch so the claim is exactly true.

**m6. No parentheses/function-call bridge from Ch.0 to Ch.1 — students form an uncorrected mental model of what parentheses do.**
Flagged by: Hermans, Ramalho, Resnick.
Students spend the whole chapter using play(60) and sleep(0.5). Ch.1 formally introduces function calls with no acknowledgment that the student has been doing this all along.
Fix: Add one sentence to L0.1 after the first worked example: "Notice the parentheses — they are how you pass a value to the command. In Chapter 1 you will learn exactly what that means." No new content; one sentence, planted once.

**m7. L0.4 pseudocode mixes English control-flow ("repeat 4 times:") with Python-shaped function calls without marking the boundary.**
Flagged by: Hermans.
Students may expect "repeat N times:" to work in Python. The "pseudocode barrier" effect (Hermans 2021 Ch.5) shows this produces harder acquisition of real loop syntax.
Fix: Add one sentence at the end of L0.4: "The `repeat` syntax is a teaching shorthand — it is not how Python writes loops. In Chapter 2 you will see Python's real loop syntax, which does the same job differently."

**m8. L0.2 exercise 3 — free-text rewrite of a vague algorithm step is rung 4+ generation behavior in a rung-1 chapter.**
Flagged by: Hermans.
Generating a correct, precise algorithm step from scratch is compositional writing. If the student writes a still-vague rewrite, they receive no feedback — the exercise can silently reinforce the misconception it targets.
Fix: Replace the generation task with a recognition task: show three candidate rewrites of the vague step (one vague, one correct, one absurdly over-specified) and ask the student to select the one that works for the literal machine.

**m9. L0.4 → L0.5 loop-body switch creates transfer interference — students primed by two-play-per-iteration apply the wrong multiplier.**
Flagged by: Hermans.
L0.4 ex.3 has two play() calls per body; L0.5 warm-up has one. A student still holding L0.4's solution procedure will compute 4×2=8 instead of 4×1=4.
Fix: Either (a) make the L0.5 warm-up body identical in structure to L0.4 ex.3 (two plays per iteration, different N), or (b) add a word of emphasis: "Notice that this loop's body has only one play() call — count carefully."

**m10. L0.5 warm-up uses a simpler loop form than L0.4's exercise — retrieval is not equivalent in difficulty.**
Flagged by: Oakley.
L0.4 ex.3 was 3×2=6 (two-play body); L0.5 warm-up is 4×1=4 (one-play body). The warm-up retrieves a simpler version of the skill, missing the off-by-one risk from L0.4.
Fix: Change L0.5 warm-up to "repeat 4 times: play(60), play(64), sleep(0.5)" → answer 8, matching the two-play structure that L0.4 introduced. (This resolves both m9 and m10 simultaneously.)

**m11. "N+1 off-by-one" is the wrong name for the misconception in L0.4.**
Flagged by: Downey.
Guessing 4 notes instead of 6 for "repeat 3 times: play(60), play(64)" is a body-count multiplication error, not a boundary error. Calling it "N+1" plants the wrong mental model.
Fix: Replace "the N+1 error" with "a body-count error — the student counts loop iterations (3) instead of multiplying iterations by body size (3 × 2 = 6)."

**m12. Four CT pillars are never explicitly synthesized as a unified way of thinking.**
Flagged by: Downey.
Sequence, iteration, selection, and decomposition are introduced and Codexed separately. Students may leave Ch.0 thinking these are four unrelated tools.
Fix: Add one explicit synthesis paragraph in L0.6 or the Chapter Recap: "Look back at the sandwich algorithm — it used all four ideas at once: sequence (steps in order), decomposition (breaking into sub-tasks), iteration (repeat the saw motion), and selection (if the jar is closed, open it first). They are not separate tools; they are four lenses on the same problem."

**m13. Ch.1 never closes the loop on play()/sleep() as function calls — the transfer debt must be noted.**
Flagged by: Downey.
c1.js L1.7 connects forward(100) to print() but does not mention play(). The recognition moment — "what you've been doing all along in Ch.0 was a function call" — is high pedagogical value and currently unowned.
Fix: Flag in the Ch.0 plan as a required callback debt: "Ch.1 L1.7 must explicitly name play() and sleep() as examples of function calls the student already used."

**m14. L0.6 ex.1 open-choice Parsons splits student attention across two simultaneous decisions (which blocks + how to sequence them).**
Flagged by: Hermans, Resnick.
Ericson et al. (2022): standard Parsons already has high WM demand; adding a selection dimension before sequencing is resolved adds a second sub-goal.
Fix: Pre-select the four blocks ("Here are four blocks — arrange them in any order you like"), or offer two preset groups and let the student choose which group then sequence. Preserves expressive choice with lower cognitive load.

**m15. Challenge ex.4 branch has no sound feedback — contradicts the chapter's core premise that code makes sound happen.**
Flagged by: Resnick.
A tempo-branch exercise that never plays either branch undercuts the chapter's "code makes things happen" hook.
Fix (contingent on M1 fix): once "tempo" is replaced with a known condition, make the exercise runnable or add "hear fast / hear slow" demo buttons so the branch has auditory consequences.

**m16. L0.3 "How this works" orientation panel is missing before the first Parsons task.**
Flagged by: Oakley.
Parsons drag-and-drop, decomposition concept, and grid-robot domain all land simultaneously on a student who has never seen any of them. The interface is not self-evident.
Fix: Add one explicit "How this works" orientation panel before the first Parsons task in L0.3.

**m17. L0.6 warm-up is a single recall item — misses the highest-value pre-quiz interleaved retrieval moment.**
Flagged by: Oakley.
Roediger and Karpicke (2006): retrieval before assessment improves both the assessment and long-term retention.
Fix: Expand the L0.6 warm-up to three short-answer items drawn from L0.2 (algorithm precision), L0.3/L0.4 (decomposition or loop trace), and L0.5 (bug definition) — thirty seconds of interleaved retrieval before the chapter's final content lesson.

---

## Cross-cutting themes

**1. Precision failures in the plan's own prose**
The plan champions "literal-machine precision" as its core metaphor, then makes several precision errors itself: "three-note program" (two notes), "both notes at the same time" (contradicts sequential model), "two octaves above surrounding notes" (arithmetically imprecise), "motif = loop" (wrong music-theory definition), sleep() unit (undefined and then used as if it were seconds). These are correctness errors in a chapter whose entire argument rests on correctness mattering. Every one must be fixed before authoring.

**2. Assessment/exercise integrity**
Two distinct problems here: (a) the Challenge introduces "tempo," a new term, in the summative gate (Malan); and (b) the L0.6 worked example and exercise 3 use the same note sequence, allowing reproduction rather than application (Resnick). Assessment must test what was taught, and exercises must differ structurally from the worked examples that precede them.

**3. Retrieval architecture is built but not contracted**
Oakley's two MAJOR findings are about the same root issue: the retrieval practice infrastructure is visible but fragile. The spiral schedule exists in description but not as an assignment. The L0.4 warm-up breaks the chain by substituting reflection for retrieval. The Ch.0 retrieval items will be dropped when Ch.2 and Ch.4 are authored unless the plan explicitly assigns them.

**4. Ch.0/Ch.1 boundary is under-designed**
Three separate reviewers (Guzdial, Hermans, Resnick/Ramalho) flagged different aspects of the same gap: students arrive at Ch.1 with working intuitions about play()/sleep() syntax, pseudocode loops, and function-call patterns, but no bridge is explicitly drawn from Ch.0 vocabulary to Ch.1 syntax. The plan treats the transfer as automatic; research says it is not. One "What's Next" panel at the Chapter Recap and one sentence in L0.1 about parentheses would close most of this gap.

**5. Cognitive load violations at specific exercise transitions**
Three exercises exceed their stated cognitive demands: L0.3 ex.2 (decoy exclusion as second-ever Parsons), L0.2 ex.3 (generation as rung 1), L0.6 ex.1 (select + sequence simultaneously). These are not rung-label paperwork — they are genuine WM overload risks for the target age.

---

## Reviewer conflicts and resolutions

**Conflict 1: How much musical grounding should L0.1 provide?**
Malan (MAJOR): add a two-sentence sidebar grounding MIDI 60 = middle C with a keyboard diagram.
Guzdial (no flag on this): the sound hook is already motivating by Media Computation standards; the numbers serve as a "pick any pitch" affordance.
Resolution: Malan's fix is correct and cheap. Knowing that 60 = middle C does not require music theory — it gives the student a reference point that makes the motif exercises in L0.6 feel like music rather than arithmetic. Adopt the sidebar. It is two sentences and one image; it costs almost nothing.

**Conflict 2: L0.5 warm-up arithmetic — is 4×1=4 correct or not?**
Hermans (MINOR, m9+m10): the one-play-per-body warm-up creates transfer interference from L0.4's two-play body; the warm-up is also too easy relative to L0.4's exercise.
Oakley (MINOR, m10): agrees the warm-up should match the harder multi-body form.
Ramalho (Python verification): verified 4×1=4 as arithmetically correct; did not flag it as a problem.
Hermans' round-2 note: "the four counted-loop trace items across this chapter already attracted a finding about monotony — this is distinct, about specific body-count switch."
Resolution: change the L0.5 warm-up to "repeat 4 times: play(60), play(64), sleep(0.5)" → answer 8. This is correct arithmetic, matches L0.4's harder two-play structure, and resolves both the transfer-interference and the retrieval-difficulty concerns. The monotony concern (four loop-trace questions in a row) is a separate issue; the fix to vary bug types (m3) already diversifies the exercise types across L0.5 and L0.6 and reduces this.

**Conflict 3: How open should L0.6 exercise 1 be?**
Resnick (MAJOR): the Parsons bank is too constrained; a genuine Make moment requires blank pitch slots.
Hermans (MINOR): the select-then-sequence dual decision is a WM issue; fix by pre-selecting.
Guzdial (MINOR, metadata): nested Parsons is harder than flat Parsons and needs a rung label (2+ or 2n).
Resolution: these are compatible, not conflicting. Pre-select four blocks (Hermans' fix) for the sequencing exercise; widen the bank and add one blank slot (Resnick's direction) for a separate, clearly labeled creative stretch step that is optional and structurally checked (four play() calls with sleep() gaps), not content-checked. Label the nested Parsons in ex.2 as rung 2n in metadata (Guzdial).

**Conflict 4: Is the decoy-exclusion Parsons in L0.3 ex.2 a MAJOR or a metadata issue?**
Hermans (MAJOR): WM overload for a novice at their second Parsons task.
Resnick (MINOR): rung metadata should label it 2+4, not a pedagogy error.
Malan (MINOR): worked examples don't model exclusion, so the student can't do the task correctly.
Resolution: Hermans' cognitive-load argument is the stronger one. For an 11-year-old at their second Parsons exposure, introducing exclusion-decisions in the same task as sequencing-decisions is a genuine overload risk, not just a metadata label issue. Move the decoy variant to L0.5 or L0.6 (Hermans' fix). If retained, add a worked example that explicitly models the exclusion step and update rung metadata to 2+4 (Resnick's fix). The more conservative path (move it) is recommended.
