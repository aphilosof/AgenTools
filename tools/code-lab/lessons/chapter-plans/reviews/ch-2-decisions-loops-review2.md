# Deep Review Round 2 — Ch.2 Decisions & Loops

**Verdict:** Needs fixes — plan is materially improved but is not aligned with the actual lessons (c2s1–c2s9), and several issues survive in both the plan and the implementation.

**Python verified on:** 3.14.5 (darwin, clang 21)

---

## Round-1 fixes audit

Every item from the synthesis is assessed against (a) what the revised plan now says, and (b) what the actual lesson files (c2s1–c2s9) contain. Both must be resolved.

### Blockers

**B1 — Wrong SyntaxError message ("cannot assign to literal")**
Status: PLAN FIXED / LESSON STILL BROKEN

The revised plan (L2.1 misconceptions and worked-example 4) now states the correct Python 3 message: `"invalid syntax. Maybe you meant '==' or ':=' instead of '='?"` — verified against Python 3.14.5. But `c2s1` line 30 still reads: `"The error message says 'cannot assign to literal'"`. The plan is now correct; the lesson is not. Students will see the real error, compare it to the lesson text, and distrust the course.

**B2 — "Exactly three falsy values" is factually wrong**
Status: PLAN FIXED / LESSON STILL BROKEN

The revised plan correctly replaces "exactly these three" with the scoped framing about Ch.4 expansion. But `c2s1` line 56 still says: `"are exactly these three: the number 0, the empty string \"\", and the special value None."` Verified: `bool(0.0)`, `bool([])`, `bool({})`, `bool(())` all return `False`. The lesson is wrong on a verifiable fact.

**B3 — L2.8 and L2.9 absent from the chapter plan**
Status: CONFIRMED FIXED

The revised plan now has full entries for L2.8 (try/except, EAFP, bulletproof input, ValueError, ZeroDivisionError) and L2.9 (Art and Music Capstone), including concepts owned, misconceptions, arc roles, and a Quiz Q5 on exception handling. The plan now matches the 9-lesson implementation. This is the most significant structural fix.

---

### Majors

**M1 — `and`/`or` returning operands never demonstrated with runnable code**
Status: PLAN FIXED / LESSON STILL BROKEN

The revised plan adds worked-example 4 in L2.1 with `print(0 and "hello")` → `0` and `print("" or 42)` → `42`, plus the `not` contrast. Verified correct against Python 3.14.5. But `c2s1` never executes these lines — the operand-return behaviour is only referenced in a Codex note and the misconceptions text block. A student working through c2s1 today still forms the wrong model.

**M2 — L2.4 opens with augmented assignment before the first loop**
Status: PLAN FIXED / LESSON STILL BROKEN

The revised plan's density note says: `"Do NOT open with augmented assignment before the first loop — that kills the hook."` But `c2s4`'s `content[0]` is still the augmented assignment text block, `content[1]` is the loop invariants text, and `content[2]` is the augmented assignment example. The countdown with `n = n - 1` appears as a rung-1 exercise after the shorthand has already been introduced. The pedagogical payoff (motivated introduction) is still inverted.

**M3 — L2.4 cognitive overload / sequence note**
Status: PLAN FIXED / LESSON PARTIALLY FIXED

The revised plan adds the density note and specifies the correct sequence: hook → augmented assignment → accumulator → sentinel preview. The lesson (`c2s4`) contains all the right elements (countdown trace, accumulator, sentinel) but still opens with augmented assignment rather than the countdown. The density warning is documented in the plan; the lesson sequencing has not been corrected.

**M4 — L2.5 nested loops not moved to L2.7**
Status: PLAN FIXED / LESSON STILL BROKEN — CRITICAL

The revised plan says nested loops are moved to L2.7, with only a one-sentence preview in L2.5. But `c2s5`'s rung-6 prime-checker exercise and its hints explicitly require nested loops: *"Use a nested loop: the outer loop steps through n from 2 to 20; the inner loop tests each potential divisor."* The solution uses a nested `for divisor in range(2, n):` loop. The nested-loop teaching that was supposed to move to L2.7 is still being exercised in L2.5. The plan says one thing; the implementation does the opposite.

**M5 — L2.3 BMI rung-6 without a full-pattern worked example first**
Status: PLAN FIXED / LESSON STILL BROKEN

The revised plan mandates a full-pattern worked example (float(input) + arithmetic + elif chain) before the BMI exercise. `c2s3` has no such worked example — it goes from the ordering/nesting comparison examples directly to the rung-4, rung-5, rung-6 exercises. The first time a student sees all three sub-tasks together is in the blank-editor exercise itself.

**M6 — No warm-up retrieval questions in any lesson**
Status: PLAN FIXED / LESSONS STILL BROKEN

The revised plan adds a mandatory warm-up to every lesson (L2.1–L2.9) with specific predict-the-output prompts. None of the nine implemented lessons (`c2s1`–`c2s9`) contain a warm-up content block of any kind. The CURRICULUM-STRUCTURE.md §B requirement remains unmet in the actual data files.

**M7 — Open-ended creative exercises**
Status: PLAN FIXED / LESSONS PARTIALLY FIXED

The revised plan converts the L2.7 rung-6 sound exercise to a making task and the Chapter Challenge exercise 6 to structural-check only. `c2s7`'s rung-6 sound exercise specifies exact calls (`kick` on even beats, `hihat` on odd) — a translation task, not a making task. `c2s9`'s rung-6 groove exercise similarly specifies exact beat positions (beats 2 and 6). Neither is open-ended in the implementation.

---

### Minors

**m1 — `continue`-before-update anti-pattern not in L2.5**
Status: PLAN FIXED / LESSON STILL BROKEN

The revised plan names this as a worked example in L2.5 and a misconception. `c2s5` has no such demonstration.

**m2 — `play()` vs `sample()` API naming**
Status: NEW PROBLEM INTRODUCED (see New Findings, NF1)

**m3 — `len()` mislabelled as "introduced" in L2.2**
Status: CONFIRMED FIXED

`c2s2` and the revised plan both treat `len()` as a Ch.1 recall. `split()` is also verified as taught in `c1s5` — the Chapter Challenge exercise 5 using `split()` is a legitimate recall, not a boundary violation.

**m4 — `augmented assignment` and `accumulator pattern` not in concepts-owned**
Status: CONFIRMED FIXED

Both are now in the revised plan's concepts-owned section with full entries.

**m5 — `/=` yields float, note missing**
Status: CONFIRMED FIXED

The revised plan adds a note for `/=` vs `//=` in L2.4 and the concepts-owned list.

**m6 — `range(0)` NameError demo scope-dependent**
Status: CONFIRMED FIXED

`c2s6` uses the accumulator logic bug (`total = n` instead of `total += n`) — unambiguous, no function wrapper needed.

**m7 — Logic bug category lacks framing**
Status: CONFIRMED FIXED

`c2s6` explicitly states: `"Python cannot detect logic bugs — the code did exactly what you told it to do."` Revised plan adds the complete framing sentence.

**m8 — `if x == 1 or 2:` trap not practised as an exercise**
Status: CONFIRMED FIXED

`c2s1` has a rung-4 fix exercise for this exact trap.

**m9 — `bool()` re-explained as if new**
Status: PARTIALLY FIXED

The hook example now precedes the bool() worked example, but there is no explicit callback phrase ("Recall from Chapter 1…") in the lesson text.

**m10 — `for`/`while` decision requires one practice exercise**
Status: CONFIRMED FIXED

`c2s5` has a rung-5 choose-and-explain exercise.

**m11 — Quiz Q5 gates advancement**
Status: CONFIRMED FIXED

Quiz Q6 now gates advancement; the plan specifies a non-empty response requirement.

**m12 — Print-debugging exercise not practised**
Status: PLAN FIXED / LESSON PARTIALLY FIXED

The revised plan specifies a rung-4 exercise with a commented-out `# print(i, total)` to uncomment. `c2s6` has a rung-4 logic-bug exercise but it does not include a commented-out debug print to uncomment. The practised-skill element is absent.

**m13 — f-strings with `:.1f` not recalled in Ch.2**
Status: PLAN FIXED / LESSON STILL MISSING

The revised plan adds f-strings with `:.1f` to worked examples in L2.5 (times-table) and L2.7 (spiral label). Neither `c2s5` nor `c2s7` use format specifiers. `c2s5` has `f"i = {i}"` without a format spec.

**m14 — Words strand thin; no string method in condition**
Status: PLAN FIXED / LESSON STILL MISSING

The revised plan adds `answer.lower() == "yes"` as worked example 3 in L2.3. `c2s3` has no string method in any condition example.

---

## New / remaining findings

### NF1 — API naming: `play()` is valid for notes; plan's blanket `sample()` claim is misleading

The plan states in multiple places: `"The sound API throughout Ch.2 is sample() (not play())"` and lists as a misconception `"The sound API is play() — the engine exposes sample()."` But `c2s9` worked example 2 and the rung-5 arpeggio exercise both use `play(60)`, `play(64)`, `play(67)` — melodic note playing. The runner mock (`runner.py` line 23) confirms `play(note)` is a registered builtin alongside `sample(name)`. This is a NEW PROBLEM INTRODUCED by the revision: the correction overcorrected.

The accurate distinction (verified from `runner.py`): `sample("kick")` is for percussion samples; `play(60)` is for melodic MIDI notes. Both are correct. The plan's misconception list should read: `"For drum sounds, use sample(). For pitched notes, use play()."` Any lesson text claiming `play()` is wrong is itself wrong.

### NF2 — Checker `fn` names do not match runner event prefixes

`c2s9` exercise 2 (colour spiral) has checker calls with `{ fn: "color", val: "red" }`. The Python mock runner records `pencolor(c)` as `['t_color', str(c)]`. `c2s7` turtle exercises specify `{ fn: "forward", val: 100 }` while the runner records `['t_forward', float(d)]`. There is a systematic naming gap between checker `fn` values and runner event array prefixes. This is either handled by an in-browser normalisation layer not visible in reviewed files, or is a latent test failure. The chapter plan cannot resolve this — it is a build/test concern — but `npm test` may not surface it if the snapshot test uses runner format while the in-browser checker uses un-prefixed format. The contract must be documented and confirmed before shipping.

### NF3 — `_` convention appears in `c2s5` codex before it is explained in `c2s7`

`c2s5`'s codex pattern includes `for _ in range(n): # repeat n times, ignore counter`. The `_` convention is formally introduced with explanation in `c2s7`. A student who reads the codex after L2.5 encounters an unexplained idiom. Replace with `for i in range(n):` in the `c2s5` codex until `c2s7` has run.

### NF4 — Nested loops are a Ch.2 owned concept with no gate-quiz question

The revised plan's gate quiz (Q1–Q6) covers booleans, if/elif tracing, while tracing, for/range tracing, error class ID, and while-vs-for explanation. Nested loops (owned in L2.7) are not tested. Either add a trace question for a two-level loop, or explicitly document the deferral to Ch.3 gate.

### NF5 — `play()` for melodic notes has no reference card entry in `c2s9`

`play(60)` appears in `c2s9` without being introduced earlier in Ch.2 or listed in the `c2s9` reference tables. The drum-sounds reference card lists `sample()` calls only. Students writing melodic music in the rung-6 exercise have no reference for `play(note)` syntax. Add one row to the reference card.

---

## Verified-correct claims

All of the following were run against Python 3.14.5 and confirmed:

| Claim | Result |
|---|---|
| `0 and "hello"` | `0` |
| `"" or 42` | `42` |
| `not "hello"` | `False` |
| `if x = 5:` error message | `"invalid syntax. Maybe you meant '==' or ':=' instead of '='?"` |
| `bool(0.0)`, `bool([])`, `bool({})`, `bool(())` | all `False` |
| `range(5)` | `[0,1,2,3,4]`; stop not included |
| `range(5.0)` | `TypeError` |
| `range(0,10,0)` | `ValueError: range() arg 3 must not be zero` |
| `range(2,6,2)` (L2.6 warm-up) | `[2, 4]` |
| `range(2,8,2)` (Quiz Q3) | `[2, 4, 6]` |
| `range(0,8,2)` (L2.8 warm-up) | 4 iterations |
| `int("3.5")` | `ValueError` |
| L2.5 warm-up `n=4; while n>0: n-=1; print(n)` | `3 2 1 0` |
| `.isdigit()` on `"-5"`, `"3.14"`, `" 7"` | all `False`; all accepted by `int()` or noted |
| BMI with weight=70, height=1.75 | `≈22.86` → "Normal" |
| Hexagon turn angle | `60°` |
| 5-pointed star turn angle | `144°` |
| `continue`-before-update: `n=0; while n<5: if n%2==0: continue; n+=1` | infinite loop |
| `str.split()` taught in `c1s5` | confirmed — Ch.Challenge ex.5 is a recall |
| `c2s4` rung-6 solution | uses `while guess != secret` — no `break` |
| `c2s6` logic-bug demo | uses `total = n` — scope-safe, no function wrapper needed |
| `c2s9` groove checker counts | 10 calls (8 kick + 2 snare) matches correct output |
| Quiz Q2 trace `i=3` | `3 2 1` |
| Reading level (3 samples) | grade 7–9, all PASS |

---

## Action priority

1. **c2s1 (B1, B2, M1):** Three fixes in one file: correct SyntaxError message; remove "exactly these three"; add two runnable lines for operand-return.
2. **c2s4 (M2):** Reorder content: countdown rung-1 trace first, augmented assignment introduced after.
3. **c2s5 (M4):** Remove nested-loop requirement from prime-checker exercise; replace with a boolean-flag approach. Also add `continue`-before-update anti-pattern (m1) and f-string recall (m13).
4. **c2s3 (M5):** Add a full-pattern worked example showing `float(input())` + arithmetic + elif chain before the BMI exercise. Add string method in condition (m14).
5. **All c2s1–c2s9 (M6):** Add one warm-up predict-the-output content block to each lesson.
6. **c2s7 rung-6 (M7):** Convert to structural-check open-ended prompt.
7. **Plan + c2s9 reference cards (NF1):** Correct the `play()`-vs-`sample()` misconception to be drum-specific; add `play(note)` entry to the c2s9 music reference card.
8. **Build/test (NF2):** Confirm and document the checker `fn` name normalisation contract.
