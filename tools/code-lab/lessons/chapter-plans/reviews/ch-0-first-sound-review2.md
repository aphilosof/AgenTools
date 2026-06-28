# Deep Review Round 2 — Ch.0 First Sound
**Verdict:** Needs fixes (no blockers; one moderate new problem introduced by revision; four minors)
**Python verified on:** 3.14.5

---

## Round-1 fixes audit

All 25 synthesis items checked against the revised plan (1 blocker + 7 majors + 17 minors).

| ID | Status | Notes |
|----|--------|-------|
| B1 sleep() unit wrong | CONFIRMED-FIXED | Unit-free arithmetic throughout; "wait half a beat" in narration is informal language, not a committed unit |
| M1 Challenge ex.4 tempo | CONFIRMED-FIXED | Replaced with "is it a school day?" condition from L0.4 |
| M2 decoy Parsons too early | CONFIRMED-FIXED | L0.3 now 5-block + 7-block with no decoys; decoy variant correctly deferred to L0.5 ex.2 |
| M3 pseudocode-to-Python anchor | CONFIRMED-FIXED | "What's Next" panel in Recap; `for i in range(3):` verified correct (iterates 0,1,2 = 3 times) |
| M4 L0.4 free-text warm-up | CONFIRMED-FIXED | Replaced with forced-choice four-option item; answer B verified correct |
| M5 MIDI not grounded | CONFIRMED-FIXED | MIDI sidebar in L0.1; 60=C, 64=E, 67=G verified against chromatic scale |
| M6 retrieval spiral not contracted | CONFIRMED-FIXED | All 5 items assigned to specific L1.x, L2.x, L4.x warm-ups |
| M7 L0.1 error handling | CONFIRMED-FIXED | Engine behaviour note added; raw Python error must be visible, not silent |
| m1 three-note program | CONFIRMED-FIXED | Now "three-line program" throughout |
| m2 both notes at same time | CONFIRMED-FIXED | Correct answer: "the two notes play one after the other with no pause between them" |
| m3 bug exercises identical pattern | **PARTIALLY-FIXED / NEW-PROBLEM-INTRODUCED** | See Finding F1 below — overcorrection |
| m4 motif = loop | CONFIRMED-FIXED | Codex entry: "A short, memorable musical idea — a pattern of notes that can be repeated…"; ostinato distinction noted |
| m5 play(84) two octaves imprecise | CONFIRMED-FIXED | play(84) removed; duration bugs used instead |
| m6 no parentheses bridge | CONFIRMED-FIXED | One sentence added to L0.1 after first worked example |
| m7 pseudocode barrier | CONFIRMED-FIXED | Barrier note added at end of L0.4 |
| m8 L0.2 ex.3 free-text generation | CONFIRMED-FIXED | Recognition task: three candidate rewrites, student selects the one a literal machine can follow |
| m9+m10 L0.5 warm-up structure | CONFIRMED-FIXED | Now `repeat 4 times: play(60), play(64), sleep(0.5)` → answer 8; verified 4×2=8 ✓ |
| m11 N+1 wrong label | CONFIRMED-FIXED | Correctly labeled "body-count multiplication error" in L0.4 and chapter-wide section |
| m12 CT pillars not synthesized | CONFIRMED-FIXED | Explicit synthesis paragraph added to L0.6 before exercises |
| m13 Ch.1 function-call debt | CONFIRMED-FIXED in plan | Callback debt section added to plan. However, c1.js L1.7 (line 674) still names only print() and forward() as prior examples — play() and sleep() are absent. The plan correctly requires a c1.js edit; that edit has not been made. |
| m14 L0.6 ex.1 dual decision | CONFIRMED-FIXED | Four blocks pre-selected; optional stretch for wider bank |
| m15 Challenge ex.4 no sound | CONFIRMED-FIXED (partially) | Audible feedback added; mechanism unspecified — see Finding F3 |
| m16 L0.3 orientation panel | CONFIRMED-FIXED | "How this works" panel required before first Parsons task |
| m17 L0.6 single warm-up item | CONFIRMED-FIXED | Expanded to three interleaved items from L0.2, L0.3/L0.4, L0.5 |

**Summary:** 23 of 25 confirmed fixed. m3 partially fixed with a new problem introduced. m13 correctly flagged in the plan but the required c1.js edit has not been made.

---

## New / remaining findings

### F1 — MODERATE: Bug type monotony transferred from pitch-outlier to duration (overcorrection of m3)

The synthesis asked to change **L0.6 exercise 3** to a duration bug. The revision changed every sound bug exercise in the chapter to a duration bug. The result is five duration bugs and zero pitch bugs:

| Location | Bug type | Sleep pattern | Bug position |
|----------|----------|--------------|-------------|
| L0.5 worked ex.3 | duration | [0.5, 0.5, **5.0**, 0.5, 0.5] | position 3 |
| L0.5 ex.3 | duration | [0.5, 0.5, **5.0**, 0.5, 0.5] (implied) | position 3 |
| L0.6 worked ex.3 | duration | six values, one 5.0 | unspecified |
| L0.6 ex.3 | duration | [0.5, 0.5, **5.0**, 0.5, 0.5] | position 3 |
| Challenge ex.5 | duration | eight values, one 10× too long | unspecified |

Three of the five exercises share the identical pattern: five sleep values with 5.0 at position 3. A student who solves L0.5 ex.3 correctly can mechanically tap position 3 in L0.6 ex.3 without reading the values at all.

**Internal inconsistency:** The L0.6 annotation (lines 462–465) claims the chapter's three bug exercises cover "pitch outlier in L0.5 worked ex.3, duration in L0.5 ex.3, and duration here." But L0.5 worked ex.3 (lines 368–372) is explicitly a duration bug: `sleep(5.0)` in `[60, 62, 64, 62, 60]`. The annotation is wrong about its own chapter.

**What the synthesis actually required:** Vary L0.6 exercise 3 to a duration bug. The other bug exercises — including L0.5 worked ex.3 — were intended to stay varied. The revision overcorrected.

**Fix:**
- Restore L0.5 worked ex.3 to a **pitch-outlier bug** (e.g., `play(80)` in a 60–67 range sequence — unmistakably out of range, no music-theory judgment required).
- Change the bug position in L0.6 ex.3 from position 3 to a different position (e.g., position 2 or 4) so two duration exercises do not share the same position.
- Correct the L0.6 annotation to accurately describe the resulting three types: pitch outlier (L0.5 worked ex.3), duration at position N (L0.5 ex.3), duration at position M≠N (L0.6 ex.3).

### F2 — MINOR: `precision` is Codexed but not listed in Concepts owned

The "Concepts owned" section lists: sequence, selection, iteration, decomposition, abstraction (unnamed), algorithm, bug/debugging, play()/sleep(). `precision` is absent.

Yet L0.2 earns a standalone Codex entry for `precision`, and it appears as the expected answer in L0.6 warm-up item 1 and Recap retrieval Q2.

Options (either resolves the inconsistency):
- Add `precision` to the owned-concepts list.
- Absorb precision into the `algorithm` Codex entry and remove the standalone entry; update L0.6 warm-up item 1 to accept "algorithm" or "unambiguity" as correct.

### F3 — MINOR: Challenge ex.4 audible feedback claims no mechanism

The plan promises the lunchbox-packing branch "plays audible feedback when run — hear the school day path vs. the not school day path." The same branch in L0.4 ex.2 produces no audible feedback. Lunchbox packing has no sound output unless the engine plays a generic tone on branch execution (undocumented) or the Parsons blocks secretly include play() calls (not stated).

Fix: either specify the engine mechanism (a short tone per branch) or change "hear the school day path" to "see the result of each branch."

### F4 — MINOR: m13 callback debt unresolved in c1.js

The plan correctly flags that Ch.1 L1.7 must name play() and sleep() as prior function-call examples. Current c1.js L1.7 (line 674) says only: "You have been using function calls since Lesson 1.1: `print('Hello')` follows the same pattern." play() and sleep() are not mentioned. This is not a plan error — the plan flags it correctly — but it is a live content defect. Add to NEXT.md as a required c1.js edit.

### F5 — MINOR: L0.6 warm-up item 1 is ambiguous to auto-check

Item 1 asks: "An algorithm step says 'cook it somehow.' Which property of a good algorithm does this violate?" The plan marks the answer as `precision / unambiguity` and formats it as a short-answer field. Acceptable answers include "precision," "unambiguous," "vague," "imprecise," "ambiguity." Without a specified keyword list or a multiple-choice format, the engine will either reject valid synonyms or skip auto-checking.

Fix: reformat as multiple choice (four options) to match the other two warm-up items in L0.6, or specify the accepted keyword list for the checker.

---

## Verified-correct claims

All loop-trace arithmetic verified by running Python 3.14.5:

```
L0.4 ex.3:        repeat 3 × [play(60), play(64), sleep(0.5)] → 3×2 = 6 notes   ✓
L0.5 warm-up:     repeat 4 × [play(60), play(64), sleep(0.5)] → 4×2 = 8 notes   ✓
L0.6 warm-up #2:  repeat 3 × [play(60), play(62), sleep(0.5)] → 3×2 = 6 notes   ✓
Recap Q4:         repeat 5 × [play(60), sleep(0.5)] → 5×0.5 = 2.5 (unit-free)   ✓
Challenge ex.1:   0.5+0.5+0.5 = 1.5 (unit-free)                                  ✓
Quiz Q3:          repeat 3 × [play(60), sleep(0.5)] → note 60 plays 3 times       ✓
Duration bug:     5.0 / 0.5 = 10.0 (correctly described as 10× too long)          ✓
```

MIDI note mappings (chromatic scale from C=60): 60=C, 62=D, 64=E, 65=F, 67=G — all correctly stated in the MIDI sidebar.

What's Next panel Python: `for i in range(3):` iterates exactly 3 times (range produces [0,1,2]); `if school_day:` is valid Python. Both correct.

Concept boundary audit: No Python syntax in Ch.0. No Ch.2-owned concept (`while`, conditional iteration) claimed as Ch.0-taught. Ch.1 boundary: Ch.1 plan correctly recalls sequence, algorithm exactness, and debugging-as-idea as prior knowledge. No concept used before owned; no duplication across the boundary.

Difficulty ramp: within each lesson, harder rungs follow easier ones. The L0.1 rung-3 preview is labeled as intentional foreshadowing, not ramp progression. Cross-lesson ramp (predict → predict → arrange → arrange+trace → spot+fix → strand-app → challenge) is monotonically more demanding. No regression found.

Continuation of prior concepts: sequence from L0.1 is genuinely used in L0.2 warm-up and L0.3 exercises. Algorithm from L0.2 is used in L0.5 recalls. Decomposition from L0.3 is used in L0.4 warm-up and L0.6 synthesis. Iteration from L0.4 is used in L0.6 worked example. Debugging from L0.5 is used in L0.6 warm-up item 3 and L0.6 ex.3. Weaving is genuine, not decorative.

Reading level spot-check (Flesch-Kincaid approximation): MIDI sidebar ~grade 4 (acceptable for a two-sentence orientational aside), algorithm Codex entry ~grade 9 (at ceiling, acceptable for a definition), pseudocode-barrier note ~grade 7 (in range). No compliance issue.
