# Review — Chapter 0 (First Sound, Then Think)
**Verdict:** Needs fixes
**Reviewed against:** Python 3.x (no Python syntax in Ch.0 — verified only the one arithmetic trace claim), CURRICULUM-STRUCTURE.md, AUTHORING.md, ch-1-first-words.md (N+1 boundary check)

---

## Findings

### MAJOR

**1. [MAJOR] Chapter arc — strand-application lesson and chapter recap missing**
`CURRICULUM-STRUCTURE.md §C` defines a mandatory six-part arc:
Hook → Concept lessons → **Strand-application lesson(s)** → Chapter Challenge → Chapter Quiz → **Chapter recap**.
Ch.0 stops at the quiz. There is no dedicated strand-application lesson (the Sound Machine challenge is the Chapter Challenge, not a strand-app lesson) and no Chapter recap (Codex consolidation + retrieval set for later spiral). The chapter challenge and the strand-application lesson serve different pedagogical roles — the challenge assesses; the strand lesson applies in a low-stakes context.
→ **Fix:** Either (a) designate L0.1 as both hook and strand-application lesson (it qualifies — student runs and modifies sound code) and add a short Chapter Recap section after the quiz, or (b) add an explicit strand-application lesson after L0.5 before the challenge. The Chapter Recap is a required arc element; add it.

**2. [MAJOR] Abstraction spine ownership vs. plan deferral — contradiction**
`CURRICULUM-STRUCTURE.md §D` places abstraction inside the Ch.0 spine entry ("CT foundations (Ch.0) — sequence, selection, iteration, decomposition, abstraction, debugging — as ideas, unplugged"). The plan's Coverage Note says abstraction "will be owned properly in Ch.5 (code design)." These are incompatible. Ownership means first-taught-here; deferring meaningful coverage to Ch.5 means Ch.0 doesn't actually own it.
→ **Fix:** Either give abstraction a real unplugged lesson in Ch.0 (it pairs naturally with decomposition in L0.3 — ignoring irrelevant detail is the flip side of breaking a problem apart) or explicitly re-assign ownership in the spine to Ch.5 and note Ch.0 as a "preview only." Pick one; the plan cannot have it both ways.

**3. [MAJOR] Warm-up activities and lesson-level Recap + Codex missing from all lessons**
`CURRICULUM-STRUCTURE.md §B` defines the lesson template as: Warm-up → Subsections × 3–6 → Recap + Codex. None of the five lessons include a warm-up exercise or a Recap + Codex subsection. Recall references are listed per lesson (e.g. L0.3 recalls sequence from L0.2) but these are concept pointers, not the retrieval-practice warm-up question the template requires. L0.2 onwards has within-chapter content to recall.
→ **Fix:** Add a one-question warm-up (e.g. for L0.3: "Which of these is a sequence: a list of steps in order, a repeated block, or a branch?") to L0.2 through L0.5. Add a Recap + Codex beat to each lesson: a one-sentence summary and the earned Codex entry for the lesson's concept.

---

### MINOR

**4. [MINOR] L0.1 exercise 3 rung mislabeled — "rung 1" but the action is rung 3**
The exercise header reads `(rung 1 — modify, single value)`. Modifying a value is rung 3 (modify) per the rung ladder, not rung 1 (predict). The subsection header also declares `rungs 1–1` despite containing this exercise. The progression table correctly identifies it as "one tiny rung-3 value change," but the exercise label contradicts both the table and the rung ladder definition.
→ **Fix:** Change the exercise label to `(rung 3 — modify, single value)` and update the subsection header from `rungs 1–1` to `rungs 1, 3`.

**5. [MINOR] Overview self-contradiction about where rung 3 first appears**
The Overview states: "Rung 3 (modify) is introduced at the very end of the chapter challenge as a teaser for Chapter 1." But L0.1 exercise 3 already performs a rung-3 value change — before the chapter challenge. The rung-3 teaser appears twice (L0.1 and Challenge ex.6), not once, and the first occurrence is not "at the very end."
→ **Fix:** Revise to: "Rung 3 (modify) first appears in L0.1 as a brief value-change preview and returns in Challenge exercise 6 as the capstone stretch."

**6. [MINOR] L0.4 misconception 3 is while-loop specific, not applicable to Ch.0's counted loops**
The third misconception listed for L0.4 is "Confusing how many times the loop body runs with how many times the condition is checked." All loops in Ch.0 use pseudocode `repeat N times` — a counted loop with no explicit condition. The condition-check count vs. body-run count confusion arises in `while` loops (Ch.2). Teaching this distinction here, against loops that have no visible condition, is likely to introduce rather than prevent confusion.
→ **Fix:** Remove this misconception from L0.4. Replace with a more applicable one: "Thinking the loop body executes one extra time (the N+1 error)," which arises naturally when students trace `repeat 3 times: play(60), play(64)` and miscount.

---

## Python verification

The only checkable arithmetic claim in Ch.0 is the L0.4 trace exercise answer:

```
# L0.4 exercise 3: 'repeat 3 times: play(60), play(64), sleep(0.5)'
# Q: How many notes play in total? Plan says: 6.
>>> 3 * 2
6   # correct
```

No other numeric or Python-behaviour claims appear in Ch.0 (the chapter is pre-syntax).

---

## What's strong

- **CT concept ordering is dependency-correct and internally consistent.** The concept map (algorithm → sequence → Parsons → loop/branch → debug) is pedagogically sound. No concept is used before it is introduced, and the dependency graph is acyclic.
- **PRIMM / Use-Modify hook in L0.1 is well-executed.** The student runs code, hears a result, and makes a single-value change before any terminology is introduced — exactly the Use-Modify pattern the structure mandates. The sound payoff makes the hook genuinely motivating for an 11-year-old.
- **Debugging-as-mindset before syntax is excellent sequencing.** Introducing "a bug is a wrong instruction, not a crash" in L0.5 before Ch.1 adds real error messages means the mindset is in place when the first traceback appears. Ch.1 explicitly picks this up ("Spiral from Ch.0: Debugging as an idea → now met as real error classes").
- **The literal-machine metaphor is a strong through-line.** Returning to "the machine does exactly what you say, nothing more" in every lesson gives the chapter coherence and pre-loads the single most common novice misconception (computer infers intent).

---

## Coverage check

| Spine concept (Ch.0) | Coverage | Notes |
|---|---|---|
| sequence | Well covered | L0.2, L0.3, L0.1 callback |
| selection | Covered | L0.4 (branch Parsons + flowchart) |
| iteration | Covered | L0.4 (counted-loop analogy + Parsons) |
| decomposition | Well covered | L0.3 + L0.5 |
| abstraction | **Thin — Codex preview only** | Plan defers ownership to Ch.5; contradicts spine |
| debugging (as idea) | Well covered | L0.5 full lesson + chapter-wide framing |
| algorithm | Covered | L0.2 |

The only concept with a genuine coverage gap is **abstraction**. All other spine concepts for Ch.0 are taught at an appropriate unplugged depth for the age.
