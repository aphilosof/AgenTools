# Panel Review — Ch.2 Decisions & Loops — Luciano Ramalho (Fluent Python)
**Verdict:** Solid

---

## Findings (from my lens)

### 1. [BLOCKER] c2s1 lesson text — wrong SyntaxError message taught

The lesson text (c2.js, c2s1) states:

> "The error message says 'cannot assign to literal'"

I ran `compile('if x = 5: pass', '<string>', 'exec')` against Python 3.14.5:

```
SyntaxError: invalid syntax. Maybe you meant '==' or ':=' instead of '='?
```

The message "cannot assign to literal" is what Python says for `if 5 = x:` (assigning to a number), not for `if x = 5:` (assigning to a variable inside a condition). The lesson uses `if x = 5:` as the example, so it teaches the wrong error message.

A student who writes `if x = 5:`, sees the real error, and compares it to what the lesson said will immediately distrust the course. Fix: replace "cannot assign to literal" with the actual message: "invalid syntax. Maybe you meant '==' or ':=' instead of '='?" and explain that Python is offering a helpful hint.

This is a blocker because it fails the AUTHORING.md rule "Verify every technical claim against real Python before writing it."

---

### 2. [MAJOR] c2s1 lesson text — "exactly these three falsy values" is factually wrong

The lesson text states:

> "Falsy values — ones Python treats as false — are exactly these three: the number 0, the empty string "", and the special value None."

I verified: `bool(0.0)` is `False`. `bool([])` is `False`. `bool({})` is `False`. `bool(())` is `False`. The word "exactly" is a false promise. A student who writes `if my_list:` in Chapter 4 and it works correctly will wonder why the lesson said only three values are falsy.

The plan overview lists `[]` in the truthiness entry and correctly defers it to Chapter 4. But the lesson text uses the word "exactly" to foreclose the question. The right fix is simple: say "At this point in the course, three values are falsy: 0, `""`, and `None`. In Chapter 4 you will meet others, like empty lists. Everything else is truthy." That is honest and complete without over-teaching.

---

### 3. [MAJOR] c2s1 lesson — `and`/`or` returning operands: the claim is in the plan but not fully in the lesson

The plan's misconceptions section correctly states: "and/or always return True or False — they return an operand." This is a critical Python fact with real consequences.

I verified:
```python
>>> 1 and 2    # 2
>>> 0 and 2    # 0
>>> 1 or 2     # 1
>>> 0 or 5     # 5
>>> not 0      # True  (not always returns bool)
```

The c2s1 lesson text mentions short-circuit evaluation but never demonstrates that `and`/`or` return operands, not booleans. The codex note does not mention it either. A student who runs `print(1 and 2)` and sees `2` will be confused unless the lesson names this.

The plan flags it under misconceptions, but misconceptions only appear as hints in exercises — a student who never makes the mistake never sees the correction. The operand-return behaviour of `and`/`or` needs one sentence in the explanatory text, with a runnable example. The contrast with `not` (which always returns `bool`) must be there too, because it makes the asymmetry concrete.

---

### 4. [MINOR] c2s4 — `augmented assignment` introduced here: correct placement, one missing operator

The plan correctly introduces `+=`, `-=`, `*=`, `//=` in L2.4. c1.js uses `score = score + 5` throughout and never uses `+=`, so the handoff is clean. The actual lesson text in c2s4 names all four variants.

One gap: the plan mentions `n //= 2` but does not mention `/=`. A student who writes `n /= 2` will get a float, which may surprise them. A one-line note — "`/=` gives a float; use `//=` if you want an integer" — prevents a subtle bug at the accumulator exercises.

---

### 5. [MINOR] c2s5 — `print(sep=, end=)` introduced mid-lesson without a warm-up signal

The `sep=` and `end=` parameters of `print` are taught inside the `for`/`range` lesson as a subordinate concept (to keep all `range` examples on one line). This is pedagogically defensible — the need arises naturally. But these are `print` parameters that belong to Chapter 1's output lesson by spine ownership.

The lesson handles it acceptably: the text is clear, the worked example demonstrates both. The only risk is the reading-level check: the lesson is already the longest in the chapter (25 min budget), and inserting a two-parameter `print` detour adds cognitive load mid-lesson. If the lesson runs long in testing, split `sep=`/`end=` to a warm-up in c2s6 or move it to c2s7 (strand application), where `end=""` for on-one-line output is naturally useful.

---

### 6. [MINOR] c2s6 — three error categories named but "logic bug" is not in the plan's error-class table

The c2s6 lesson correctly introduces three categories: syntax error, runtime error, logic bug. The plan's chapter-wide error-class table lists concrete Python error classes but not "logic bug" (since it is not an error class). The lesson handles this correctly — the exercise for the logic bug (`total = n` instead of `total += n`) is well-constructed. The plan's table should note that "logic bug" is a separate category, not omitted from the Codex. This is a documentation gap in the plan, not a lesson gap.

---

### 7. [MINOR] c2s4 — sentinel-pattern `while True: break` preview is introduced before `break` is fully taught in c2s5

The lesson previews `break` in a `while True:` sentinel pattern (with a comment "break is covered fully in L2.5"). This is called out explicitly in the plan as a preview. The lesson text is honest about it. The pattern is Pythonic and I do not object to the preview — it motivates `while True:` correctly.

One concern: the exercise that uses `break` (the sentinel exercise) is rung 5 (complete) in c2s4. A student completing it before `break` is formally taught is doing so with an informal definition only. The exercise starter code shows the `break` line in the worked example, but the rung 5 exercise (the accumulator that stops at total >= 50) does not use `break` — it exits via the condition. So the rung 5 exercise is safe. The rung 6 write-from-scratch (guessing game) does not require `break` either (the model solution uses `while guess != secret:`). This is well managed.

---

### 8. [MINOR] Chapter Challenge exercise 2 — plan note is correct but the reasoning deserves to be in the lesson

The plan explains why `for`/`range` is used instead of `while` for the `continue`-with-skip exercise:

> "placing continue in a while countdown without careful decrement ordering creates an accidental infinite loop"

This is a real and important teaching point. I verified it: in a `while` countdown, if `continue` fires before `n -= 1`, the counter never decrements and the loop hangs. The plan mentions it in a parenthetical note, but it should appear explicitly in the c2s4 or c2s5 lesson as a named anti-pattern: "If you use `continue` inside a `while` loop, make sure the update step comes before the `continue` — or it will never execute, and you have an infinite loop."

---

## Continuity notes

**Well-woven from c1.js:**
- `score = score + 5` pattern from c1s3 is explicitly connected to `+=` in c2s4's introductory text ("You have been writing `n = n + 1`...") — excellent bridging.
- The `%` operator (c1s4) is recalled naturally in even/odd checks throughout.
- `f-strings` (c1s5) appear in worked examples in c2s4 and c2s5 without re-teaching.
- `input()` + `int()` / `float()` (c1s6) are recalled correctly in the guessing game and BMI exercise.
- `len()` is used in c2s2 and c2s3 with a note "full string treatment is Ch.4" — correct deferral.
- `str.split()` appears in the Chapter Challenge exercise 5 with a "recalled concept from Ch.1" label — correct.

**Gaps:**
- The `bool()` function is introduced in c1s2 as a type conversion, but c2s1 does not explicitly reference that lesson when it introduces `bool(v)` in the worked example. The connection is implicit. A one-word callback ("Recall from Chapter 1: `bool()` converts any value...") would close it.
- The c1s5 string indexing/slicing is available but unused in Chapter 2. This is fine — strings as Chapter 4's primary data structure means there is no natural home for it in Chapter 2's exercises. The Chapter Challenge exercise 5 (word-length histogram) uses `split()` and `len()` correctly.

**Not re-taught (good):**
- `type()`, `int()`, `float()`, `str()`, arithmetic operators — all used without re-introduction. The plan correctly labels these as "recalls."

---

## What's strong

- **The three error categories in c2s6 are excellent curriculum.** Naming syntax/runtime/logic as separate categories — not just listing error class names — is exactly what a learner needs to build a debugging mental model. The three-step protocol (read → locate → understand before changing) is Pythonic and professional.

- **The `while True: break` sentinel pattern is introduced honestly.** The lesson names it, shows it, and labels `break` as a preview. Many beginner courses either omit the sentinel pattern entirely or teach it without explaining why `while True:` is not inherently wrong. This lesson threads that needle correctly.

- **The `continue`-in-`while` infinite-loop trap is caught in the Chapter Challenge design.** The plan explicitly chooses `for`/`range` for the `continue` exercise because `continue` before decrement in a `while` loop creates an infinite loop. This is a real bug that trips even experienced programmers and the design decision to protect against it without hiding it from students is exactly right.
