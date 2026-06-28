# Panel Review — Ch.0 First Sound — Felienne Hermans (The Programmer's Brain)
**Verdict:** Solid

---

## Findings (from my lens)

### MAJOR

1. **[MAJOR] L0.3 — Decoy Parsons as the second-ever Parsons task overloads working memory**
   Location: L0.3, exercise 2.
   L0.3 is the chapter's first hands-on lesson. Exercise 1 is a clean 5-block Parsons task with one correct answer — correct for a first exposure. Exercise 2 immediately raises the stakes by adding **two decoy blocks** that must be identified and excluded. This requires a student to do three cognitive operations simultaneously: understand the goal (navigate the grid), sequence the usable blocks correctly, and recognise and reject two blocks that look plausible but lead the robot off the edge.
   This is a legitimate Parsons variant (Denny et al., 2008 found distractors increase transfer), but it is documented as working best *after* students have internalized the basic sequencing task — not as their second-ever Parsons problem. A novice who hasn't consolidated basic sequencing yet will experience the extra exclusion decision as intrusive noise, not as productive challenge. The split-attention between "does this block belong?" and "where does this block go?" is the exact dual-task that working memory research says to avoid at the learning stage.
   → **Fix:** Move the decoy variant to L0.5 or L0.6 (after three plain Parsons tasks have built automaticity). Replace L0.3 ex.2 with a second plain-Parsons task at slightly longer block count (7 blocks, one correct answer) to build sequencing fluency before introducing the exclusion dimension.

### MINOR

2. **[MINOR] L0.1 — Real function-call syntax is introduced without anchoring what parentheses mean**
   Location: L0.1 hook, all worked examples and exercise 3.
   The hook presents `play(60)`, `sleep(0.5)` as "words the machine knows" — a reasonable framing. But these look exactly like Python function calls, and an 11-year-old seeing parentheses + a number for the first time will form a mental model of what parentheses *do*, whether the lesson intends it or not. If that model is wrong (e.g., "parentheses contain the thing I want" rather than "parentheses mean I'm calling the word as a command"), the student will carry it into Ch.1 where it collides with the correct notional-machine explanation.
   This is not a reason to avoid the hook — the hook is excellent pedagogy. But a one-sentence bridging note is needed at the Ch.1 boundary: "In Ch.0 you used `play(60)` without knowing exactly what the parentheses do — in Ch.1 you'll see that parentheses are how you call any function, and `60` is the value you pass in." Without that bridge, the Ch.0 mental model gets fossilized rather than refined.
   → **Fix:** Add a bridging note to the Ch.0 → Ch.1 handoff (e.g., in the Chapter Recap or in Ch.1 L1.1's warm-up): explicitly acknowledge that `play(60)` was a function call and connect the notation to Ch.1's treatment of functions. No new content in Ch.0 itself; this is a Ch.1 authoring note.

3. **[MINOR] L0.4 — Pseudocode mixes English and Python notation without marking the boundary**
   Location: L0.4, pseudocode examples and exercise 3.
   The lesson uses `repeat 4 times: play(60), play(64), sleep(0.5)` — a hybrid of English control-flow (`repeat 4 times`) and actual Python-shaped function calls (`play(60)`). This is intentional and appropriate for an unplugged lesson, but it creates a representation ambiguity: is `repeat 4 times:` a thing Python says? Is the comma between `play(60)` and `play(64)` Python syntax? The lesson does not mark the English/code boundary.
   When students arrive in Ch.2 (`for` loop, `while` loop), they will likely expect `repeat N times:` to work and be confused that Python uses `for i in range(N):`. The gap between the pseudocode representation and the real syntax is wider than a line-count comparison suggests — `repeat 4 times:` is one semantic unit; `for i in range(4):` introduces a variable, a function call, a colon, and an indented body in one hit.
   This is a known "pseudocode barrier" effect (Hermans 2021, Ch.5: students who learned pseudocode loops often have harder times with real loop syntax than students who learned from a blank slate, because they have to suppress the wrong representation before acquiring the right one).
   → **Fix:** Add a one-sentence disclaimer at the end of L0.4: "The `repeat` syntax is a teaching shorthand — it is not how Python writes loops. In Chapter 2 you will see Python's real loop syntax, which does the same job differently." This inoculates against the fossilized pseudocode problem without disrupting the lesson.

4. **[MINOR] L0.4 → L0.5 warm-up: loop-body change creates transfer interference**
   Location: L0.4 exercise 3 → L0.5 warm-up.
   L0.4 exercise 3 is `repeat 3 times: play(60), play(64), sleep(0.5)` → 6 notes (3 × 2 notes). The immediately following warm-up in L0.5 is `repeat 4 times: play(60), sleep(0.5)` → 4 notes (4 × 1 note). Both are arithmetically correct (verified: 3×2=6, 4×1=4). However, the loop bodies differ in a critical way: L0.4 had *two* `play()` calls per iteration; L0.5 has *one*. A student primed by L0.4 who reads the L0.5 warm-up quickly may apply the wrong multiplier (4 × 2 = 8) rather than reading the body carefully. This is a classic **transfer interference** pattern: the L0.4 solution procedure is still in working memory and gets applied where the surface form looks similar but the deep structure differs.
   The four counted-loop trace items across this chapter (L0.4 ex.3 → L0.5 warm-up → Quiz q.3 → Recap q.4) already attracted a finding in round 2 review about monotony. This finding is distinct: it is about the specific L0.4→L0.5 body-count switch being placed too soon after the priming exercise.
   → **Fix:** Either (a) make the L0.5 warm-up's loop body identical in structure to L0.4's (still two items, just different N) so the student is confidently recalling, or (b) add a single word of emphasis: "Notice that this loop's body has only one `play()` call — count carefully." Option (b) is lower overhead; option (a) is cleaner cognitively.

5. **[MINOR] L0.2 exercise 3 — free-text rewrite is rung 4+ behaviour in a rung-1 chapter**
   Location: L0.2, exercise 3.
   The exercise asks students to identify the vague step in a four-step robot instruction and "rewrite it in one sentence (free text, not auto-checked — reflection exercise)." This is described as a reflection exercise, but generating a correct, precise algorithm step from scratch is compositional writing behaviour — closer to rung 4 (fix) or rung 5 (complete) than rung 1 (predict/identify). The chapter's declared rung ceiling is rung 2, with one previewed rung-3 value change in L0.1 and Challenge ex.6.
   For a first exposure to algorithmic precision, being asked to generate a precise step requires applying the concept being learned as a production task, not a recognition task. This is exactly the novice difficulty Sweller's cognitive load research documents: novices cannot easily apply a new schema while simultaneously generating output in that schema. Recognition ("which step is vague?") is appropriate at rung 1; generation ("rewrite it") exceeds the chapter's rung ceiling.
   The exercise is labelled "not auto-checked — reflection exercise," which acknowledges it is open-ended. But if the student writes a vague rewrite, they receive no feedback that it is still vague — the exercise could silently reinforce the misconception it is trying to address.
   → **Fix:** Replace the generation part with a recognition task: show three candidate rewrites of the vague step (one still vague, one correct, one overly prescriptive to the point of absurdity) and ask the student to select the one that would work for the literal machine. This stays at rung 1, exercises the same precision concept, and provides correct feedback.

6. **[MINOR] L0.6 exercise 1 — open-choice Parsons splits student attention across two simultaneous decisions**
   Location: L0.6, exercise 1.
   The exercise gives students 8 `play()`/`sleep()` blocks and asks them to "arrange any four of them into a sequence they like." The educational goal is expressive authorship (any arrangement is valid). The cognitive cost is that the student must simultaneously decide *which four blocks to include* and *how to sequence them* — two separate decisions with no fixed answer for either. Research on Parsons tasks (Ericson et al., 2022) finds that even standard single-answer Parsons has high working-memory demand; introducing a selection dimension before sequencing is resolved adds a second sub-goal.
   Students who feel uncertain will experience this as paralysis, not freedom. Students who grab four blocks arbitrarily will sequence them without musical intent, and the claimed expressive benefit will not materialise.
   → **Fix:** Pre-select the four blocks (e.g., "Here are four blocks — arrange them in any order you like"). The expressive choice now lives entirely in the sequencing step, not in the selection step. Alternatively, offer two preset groups of four and ask the student to choose which group, then sequence their chosen group. This reduces working memory load while preserving the "my choice" affect.

---

## Continuity notes

**What from c1–c3 is well-woven:** Nothing from c1–c3 is assumed here, by design — Ch.0 is the first chapter with no prior content to recall. The "Recalls: none" annotation is correct and handled cleanly.

**What the chapter hands forward (and whether Ch.1 picks it up correctly):** The plan for Ch.1 (`ch-1-first-words.md`) explicitly names "Ch.0 recall: sequence, algorithm exactness, debugging idea" as the first node in its concept map. That is exactly what Ch.0 delivers — no more, no less. The boundary is clean.

**One continuity risk to flag for Ch.2 authoring:** The pseudocode `repeat N times:` construct in L0.4 is not marked as temporary/approximate. When Ch.2 introduces real loop syntax (`for i in range(N):` and `while`), the author must explicitly revisit the pseudocode representation and explain the gap. If Ch.2 just introduces `for ... in range():` without acknowledging "this is what `repeat N times` looked like in Ch.0," a subset of students will have a residual pseudocode representation competing with the real syntax. This is a note for Ch.2 authoring, not a defect in Ch.0.

**Re-teaching risk:** None detected. No concept is re-taught by accident. The warm-up recalls in L0.2–L0.6 are genuine retrieval prompts (one question each, correctly drawn from the prior lesson), not re-explanations.

---

## What's strong

- **The literal-machine through-line is the single most cognitively high-value decision in this chapter.** Every lesson returning to "the machine does exactly what you say, nothing more" is not just a theme — it is pre-loading the correct notional machine before students have to operate one. My research on misconceptions (Hermans 2021, Ch.3) finds that "the computer infers intent" is the most persistent novice misconception and the hardest to dislodge once entrenched. Introducing the corrective frame *before* any real syntax means there is nothing to dislodge — the correct model is in place first. This is excellent cognitive sequencing.

- **The hook lesson's PRIMM execution is textbook.** Predict (which note plays third?) → Run (hear it) → Modify (change one pitch number, hear only that note change) is the exact Use-Modify arc that Sentence et al. (2019) validated with school-age learners, and it is executed without clutter. The single-value change in exercise 3 is the right level of modification for a first encounter: it changes one thing and changes exactly one thing in the output, which makes the causal link between code and behaviour traceable.

- **Debugging-as-mindset before syntax is the right pedagogical call.** Establishing "a bug is a wrong instruction, not a computer mistake" before the first SyntaxError appears means the debugging framing is already in place when the error messages start. Students who receive their first traceback already knowing that bugs are their algorithm's fault, not the machine's, will engage with the traceback as useful information rather than an accusation. The unplugged debugging exercises in L0.5 (spot the step, swap the wrong block, identify the position) are well-graded rung-1/rung-2 work that builds the *reading carefully* habit Ch.1 needs.

---

## Python verification

All checkable arithmetic in the plan was verified with Python 3:

```
L0.4 ex3:    repeat 3 × [play(60), play(64), sleep(0.5)] → 3×2 = 6 notes       CORRECT
L0.5 warm-up: repeat 4 × [play(60), sleep(0.5)]          → 4×1 = 4 notes       CORRECT
Quiz q3:     repeat 3 × [play(60), sleep(0.5)]            → 3×1 = 3 plays       CORRECT
Recap q4:    repeat 5 × [play(60), sleep(0.5)]            → 5×0.5 = 2.5 sec     CORRECT
```

MIDI pitch check: `play(84)` used as the "wrong note" in L0.5 and L0.6 debugging exercises. MIDI 84 = C6, which is 24 semitones (2 octaves) above middle C (60) and 20 semitones above the surrounding notes (60–64 range). This is unambiguously wrong by pitch *distance*, not by music-theory consonance. The plan's description "two octaves higher and unmistakably out of range" is accurate for the note-60 anchor; it is 20 semitones above the highest surrounding note (64 = E4), which is also unmistakably audible. The round-2 reviewer's concern about "clashes" (music-theory consonance) is resolved by the pitch-distance framing, provided the authored exercise uses the exact note list given in the plan. No further fix needed, but authors must not change the surrounding note context when writing the exercise.
