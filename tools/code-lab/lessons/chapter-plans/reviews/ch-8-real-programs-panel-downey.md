# Panel Review — Ch.8 Real Programs — Allen Downey (Think Python)
**Verdict:** Solid

---

## Findings (from my lens)

### 1. [MAJOR] 8.3 — `except ExceptionType as e` is introduced here but was never seen before

The plan lists `except ExceptionType as e` as an owned concept and uses it in an exercise (8.3 exercise 4: `except KeyError as e` with `f"No score for {e}"`). But c2s8 — the only prior try/except lesson — teaches `except ValueError:` and `except ZeroDivisionError:` exclusively, with no mention of the `as e` binding form. The student has never seen an exception object named and used.

This is not just a syntax gap. The `as e` form requires understanding that an exception *is an object* carrying information — a mental model shift from "exception is a signal" to "exception is a value I can inspect." C2s8 does say "exceptions are named objects" in prose, but it never shows `as e` in code or exercise.

**Fix:** Either (a) teach `except ExceptionType as e` as a distinct step in 8.3, with a worked example that shows what `e` actually contains when printed (`str(e)` reveals the message), and explain the mental model shift before giving exercise 4; or (b) demote exercise 4 to a read-and-explain format (rung 1) where the student predicts what `f"No score for {e}"` prints, making the first encounter low-floor before asking them to write it.

Option (b) is more pedagogically sound: the first time you write `as e`, you should already know what it produces.

---

### 2. [MAJOR] 8.2 — Program design is taught but the *notional machine for programs* is never built

8.2 teaches spec → data → stubs → fill in → integrate. This is the right workflow. But the plan skips the mental model that makes the workflow stick: **how does a programmer hold a whole program in their head at once?**

Think Python devotes considerable space to what I call the "call graph" mental model — the idea that a program is a network of function calls, each one a box that receives inputs and hands back outputs, and the main loop is the thread that connects them. Without that model, "decompose into functions" is just advice. With it, the student can *draw* the program before writing a line.

The plan's worked example (temperature converter: `convert`, `display_menu`, `get_input`) is good data, but there is no instruction to draw a diagram or trace the call flow before coding. There is no worked example of tracing *through* the completed stub structure to verify the pieces connect. The student who follows 8.2 may produce correct stubs but not know *why* the stubs connect that way.

**Fix:** Add a worked example that explicitly draws (or traces with pseudocode) the call graph of the temperature converter — which function calls which, what each receives, what each returns — before any code is written. This takes two paragraphs and one diagram. It is the single most powerful thing 8.2 can give a student who has never written a multi-function program.

---

### 3. [MINOR] 8.3 — `else` and `finally` are listed as owned concepts but the *why* is thin

The plan mentions `else` clause: "runs only when no exception was raised; preferred over expanding the `try` body." That is correct, but it is the rule without the explanation.

The reason `else` exists is subtle and important: it separates "code that might raise the exception we are catching" from "code that should run only when the risky operation succeeded, but which we do not want inside the `try` body because we are not prepared to catch errors from it." In other words, `else` is a precision tool — it keeps the `try` body minimal (AUTHORING.md's own depth standard: "put too much code in the try body" is listed as a misconception). A student who does not understand this will either never use `else`, or will put everything in `try` and wonder why the `except` fires on a line they thought was safe.

Similarly, `finally` is described as "signals cleanup intent" — which is fine but incomplete. The key insight is that `finally` runs even if `return` or `break` is hit inside the `try` block, and even if no `except` matches (the exception still propagates after `finally` completes). These are not edge cases; they are the reason `finally` exists.

**Fix:** For `else`, add one sentence: "anything you put inside `try` beyond the risky line is code you are implicitly saying you can handle — move it to `else` so only the genuinely risky line is inside `try`." For `finally`, add one worked example showing it running even when an uncaught exception propagates past the `except` block.

---

### 4. [MINOR] 8.4 — The set comprehension / dict comprehension contrast is excellent, but the *when not to use a comprehension* guidance is underpowered

The plan says: "when not to use a comprehension (side effects, complex multi-step logic)." That is the right list, but the mental model behind it — which I call the *transformation vs mutation* distinction — is missing.

A comprehension is a *transformation*: it reads from one sequence and produces a new one. The moment your loop needs to modify something external, communicate a result as it goes, or make a decision that changes what happens on the next iteration, you have left the territory where a comprehension is appropriate. The anti-pattern worth showing explicitly is a comprehension used for side effects: `[print(x) for x in items]` — this works, produces a list of `None`s that is thrown away, and confuses anyone reading the code.

**Fix:** One worked example showing `[print(x) for x in items]` and why it is wrong — the comprehension runs, the side effects happen, and you get a useless list back. Then state the rule: comprehensions build values; `for` loops drive actions.

---

### 5. [MINOR] 8.5 — The fix exercise (exercise 1) has a conceptual twist that needs flagging

Exercise 1 in 8.5: "A `def test_reverse()` function has one `assert` that passes and one that fails (the expected value is wrong in the assert, not in the function) — read the `AssertionError`, correct the test expectation, not the function."

This is pedagogically excellent — it teaches that a failing test might mean the test is wrong, not the code. But there is a real risk: a student who just learned "failing assert = bug in your code" will be confused when told "no, fix the test." The plan does not signal this cognitive reversal anywhere in the lesson narrative.

**Fix:** Before exercise 1, add a short concept note: "A failing assert tells you two things are true: the condition evaluated to False, and that was unexpected. It does not tell you *which side* was wrong. When you write tests, you can make mistakes in the test itself — calling the function with the wrong expected result, for example. Always read the `AssertionError` message and ask: is the function wrong, or is my expectation of what it should return wrong?" One sentence of framing prevents a frustrating ten-minute detour.

---

### 6. [MINOR] Chapter Quiz question 5 — design-before-code question is underspecified

Quiz question 5: "given a two-line spec, name the functions you would define before writing any logic." This tests design thinking — good. But the grading question is: what counts as a correct answer? A student who writes `main(), do_stuff()` technically answered the question. Without a rubric that specifies "functions should have clear single responsibilities and names that describe their return value or action," this is ungradeable by an auto-checker.

**Fix:** Either (a) provide the specific spec in the plan so the expected function list is deterministic and auto-checkable; or (b) explicitly label this as a "teacher-checked" or "compare your answer" item, not an auto-gate.

---

## Continuity notes

**Well-woven from c1–c3:**
- `while True` + `break` input loop (c2s4, c2s8) — 8.3 correctly recalls this as prior knowledge and builds on it
- `ValueError` from `int(input())` (c2s8) — correctly treated as recall, not re-teach
- `def`, `return`, docstrings (c3s1–c3s3) — 8.2's design workflow correctly presupposes these
- DRY and decomposition (c3s0) — named and recalled correctly in 8.2
- Dict `.get(key, default)` from Ch.4 — correctly used in 8.6a's frequency counter pattern
- `sorted()` with `key=freq.get` — the plan correctly avoids lambda and uses `freq.get` as the key function, which only requires dict `.get()` from Ch.4. This is the right call.
- f-strings and `.lower()`/`.strip()`/`.split()` (c1s5) — correctly recalled in 8.6a without re-teaching

**Missing or underweighted:**
- `except ExceptionType as e` — as noted above, never appeared in c1–c3 and appears here without a scaffolded introduction
- The accumulator pattern (c4) — 8.6a's frequency counter uses `freq[w] = freq.get(w, 0) + 1`, which is exactly the Ch.4 accumulator pattern. The plan notes this correctly but should make the spiral explicit in the lesson narrative ("you built this accumulator pattern in Ch.4 — here it is solving a word-counting problem")
- `enumerate` and `zip` (c4) — not mentioned in 8.6 strand projects at all; a missed spiral opportunity for the data analyzer (8.6b)

**Concepts that appear early without full ownership:**
- `raise` — listed as an owned concept of Ch.8, appears in 8.3. The worked examples in 8.3 are appropriately low-floor (reading it first, then the re-raise exercise). This is handled correctly.
- `assert` as a keyword encountered in tracebacks — the plan notes students may have seen `AssertionError` in prior tracebacks; 8.5 teaching it formally is correctly sequenced.

---

## What's strong

- **The `sorted(freq, key=freq.get, reverse=True)` decision.** Teaching the lambda-free idiom is exactly right for this level. It reuses `dict.get` that students already know, produces readable code, and avoids introducing a whole new concept (lambda) just to sort a dict. The plan explains *why* this works in the concept note for `key=`. This is careful curriculum design.

- **The set vs dict comprehension contrast.** Flagging `{x for x in it}` (set) vs `{x: y for x in it}` (dict) as an explicit misconception, with a side-by-side contrast in the worked example, is exactly the right treatment. This confusion trips up beginners badly and the plan addresses it directly.

- **8.6 strand projects at rung 6.** Four complete programs, one per strand, all written from a blank editor against a spec. This is what Chapter 8 should feel like — the chapter that proves the student can actually write software. The constraint that at least one project must use `raise` explicitly is a good structural decision: it forces students to think of exceptions as something they generate, not just handle.
