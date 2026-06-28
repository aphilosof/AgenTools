# Panel Review — Ch.3 Functions — Luciano Ramalho (Fluent Python)
**Verdict:** Solid

---

## Findings (from my lens)

### Technical correctness

1. **[MAJOR] c3s2 — False claim about visibility** `→` Fix the prose

   Lesson 3.2 states: "Inside `double`, only `n` exists — `x` is invisible there." I ran this:

   ```python
   x = 10
   def double(n):
       print(x)   # prints 10 — x is NOT invisible
   double(5)
   ```

   `x` at module level is perfectly visible inside `double`. What is true is that `double` cannot see the **caller's local variables**. The correct sentence: "Inside `double`, only `n` exists as a local — the caller's local variable `x` is invisible, though module-level names can still be read." The current wording plants a false mental model that will collide with the scope lesson two lessons later, where global constants are explicitly shown as readable from inside functions.

2. **[MAJOR] c3s2 — Premature and incomplete LEGB citation** `→` Remove or scope correctly

   The lesson invokes "the LEGB scope rule" to explain why `double` cannot see `x`. This is doubly wrong: (a) it contradicts the false-visibility claim above, and (b) LEGB names four levels — Local, Enclosing, Global, Built-in — of which Enclosing (closures) and Built-in are not taught anywhere in this course. Dropping a four-letter acronym that introduces two unexplained levels creates noise, not clarity. Either remove the acronym and just say "Python's scope rules" or, better, say "Python gives each function its own private namespace for locals — the caller's local variables are hidden." The full scope machinery is Lesson 3.4's job.

3. **[MINOR] c3s4 — UnboundLocalError message is Python-version-specific**

   The lesson explains `UnboundLocalError` correctly. The error message it describes ("local variable 'count' referenced before assignment") is the Python ≤3.11 phrasing. Python 3.12+ produces: "cannot access local variable 'count' where it is not associated with a value". I verified this on Python 3.13. The Codex entry should note both phrasings, as the PLAN already wisely says for the SyntaxError in 3.5.

4. **[MINOR] Plan 3.5 — Duplicate-param SyntaxError: `ast.parse` does not catch it**

   The plan correctly identifies that `def power(base, exp=2, base=10):` is a `SyntaxError`. However, `ast.parse()` silently accepts this (it is a semantic check, not a parse-tree check). Only `compile()` and `exec()` catch it. If the test harness uses `ast.parse` to validate student code, this exercise's checker may silently pass the buggy version. Recommend: verify the harness uses `compile()` not `ast.parse()` for this lesson.

5. **[MINOR] Plan 3.5 — SyntaxError message version note is correct, but incomplete in the lesson**

   The plan notes that Python 3.12+ changed the message for non-default-after-default from "a required parameter cannot follow a parameter that has a default value" to "parameter without a default follows parameter with a default". I confirmed: Python 3.13 produces the latter. The written lesson (c3s5) does not quote either version of the message — it uses the old phrasing in the Codex entry. Update to the current Python 3.12+ wording and add a version note.

6. **[MINOR] c3s2 — The `LEGB` issue creates a continuity problem with c3s4**

   When c3s4 teaches that module-level names ARE readable from inside functions (the `TAX_RATE` example), students who absorbed "x is invisible" from c3s2 will be confused. The scope lesson then has to silently contradict c3s2's claim. Fixing c3s2 as described in finding 1 removes this continuity break.

### Pythonicity and idioms

7. **[MINOR] Plan 3.3 — `is_prime` uses `range(2, n)` — correct but worth noting efficiency**

   The `range(2, n)` solution is correct for an 11-year-old and pedagogically right (uses only concepts taught so far). I am not asking for `range(2, int(n**0.5) + 1)` here — that belongs in Ch.5 or later. But the lesson should at least remark: "For large `n`, this loop does a lot of work — there are faster ways, which you will see in Chapter 5." One sentence. Otherwise a curious student wonders why we stop at `n` and not `n//2`.

8. **[MINOR] Plan 3.3 — `largest_of_three` — Python has `max(a, b, c)` built-in**

   The plan asks students to write `largest_of_three(a, b, c)` manually. This is a legitimate exercise for if/elif practice. But a Pythonista would write `max(a, b, c)` — one word. The lesson should note: "Python has a built-in called `max()` that does exactly this — you will use it in Chapter 4. Writing it yourself first is how you understand what `max` is doing inside." Without that note, a student who discovers `max` feels deceived.

9. **[MINOR] c3s5 — `repeat_word` solution uses a manual loop with an `if i == 0` guard — un-Pythonic**

   The exercise solution is:
   ```python
   for i in range(times):
       if i == 0:
           result = word
       else:
           result = result + sep + word
   ```
   The idiomatic Python for this task is `sep.join([word] * times)`. I am not suggesting the student write that at Ch.3 level. But the `if i == 0` guard is a code smell: it avoids starting with an empty string, but it creates an asymmetric branch inside a loop. The standard accumulator pattern with a leading separator avoided on `i > 0` is equally manual but more natural:
   ```python
   result = ''
   for i in range(times):
       if i > 0:
           result += sep
       result += word
   return result
   ```
   Or, even cleaner — initialise with `word` and append the rest:
   ```python
   result = word
   for _ in range(times - 1):
       result += sep + word
   return result
   ```
   The `if i == 0: result = word` pattern is teaching "check if we are on the first iteration" as a normal pattern, which it is not. A student seeing `str.join()` in Ch.7 will have to unlearn this.

10. **[MINOR] Plan — `fruitful` / `void` terminology used in plan but not in lessons**

    The chapter plan uses "fruitful function" and "void function" consistently (these are Allen Downey's terms from Think Python, which this course follows). The written lessons do not use these terms. Lesson 3.3 codex says "print sends to the screen" but does not name the void/fruitful distinction in the glossary. For a course that explicitly follows Think Python's tradition, the Codex entry for 3.3 should add these terms and their definitions. They are useful vocabulary for the rest of the course.

---

## Continuity notes

**Well-woven from Ch.1–2:**
- The `for char in text:` iteration in c3s8 correctly recalls Ch.2 loops without re-teaching them.
- The accumulator pattern (`total = 0` / `total += ...`) in c3s3 and c3s8 is explicitly labelled as a Ch.2 recall — exactly right.
- The `:.2f` f-string money formatting recalled in c3s7 and the plan's tip-splitter is properly credited as a Ch.1 recall.
- The DRY principle is threaded from c3s0 through c3s7 — consistent and well-earned.
- String methods (`.upper()`, `.lower()`, `.strip()`) appear in c3s4 and c3s8 as tools, not as new teaching. Correct.

**Missing / under-recalled:**
- `round()` is used in the plan (bmi example in 3.2, tip-splitter in 3.7) but does not appear as a tagged recall in the written c3s2 or c3s7. It was introduced in Ch.1. One sentence noting "you already know `round()` from Chapter 1" keeps the spiral explicit.
- `type()` is listed in the chapter-wide misconceptions section as a recall tool for checking None, but the written lessons do not use it. Plan mentions `type(None)` gives `<class 'NoneType'>` — this is in c3s1 but not linked to any exercise. Fine as-is, but a missed opportunity.
- `bool` return values from functions (from c3s3's `is_even`, `is_prime`) are used naturally in `if is_even(x):` — correct and Pythonic. This is one of the chapter's real strengths.

**Plan vs. written lessons — structural gap:**
The chapter plan describes 8 lessons (3.0–3.7). The written `c3.js` contains 10 lessons: c3s0–c3s9, adding `c3s8` (Functions in the Wild — string iteration, palindrome, FizzBuzz) and `c3s9` (Art and Music capstone). These two extra lessons are not mentioned in the chapter plan at all. This is not a content problem — both lessons are well-constructed — but the plan document is now out of sync with the implementation. If the plan is the specification, it needs updating.

**Ch.4 boundary:**
The plan wisely defers list/tuple collection concepts. The tuple default `pattern=(1,1,5,5)` in lesson 3.7 is handled correctly with a brief immutability note. The `input`-loop version of the tip-splitter is correctly deferred to Ch.4. The ch-4 plan's ownership of `sum`, `enumerate`, `zip`, `sorted` is respected — none of these appear in Ch.3.

---

## What's strong

- **The `print` vs `return` teaching is the best I have seen at this level.** Lesson 3.3 names the anti-pattern explicitly ("the print-not-return bug"), shows the `NoneType` crash, and recurs on it in the capstone (c3s9). This is exactly the right treatment. Most beginner materials bury this distinction or discover it too late.

- **Decomposition is shown, not just told.** Lesson 3.6 (draw) and 3.7 (bassline) make decomposition concrete by building a working artifact from layered functions. The draw lesson's `draw_polygon → draw_square → draw_house` chain is a textbook example of what abstraction buys. Students do not read about decomposition — they feel it.

- **The `global` keyword is handled with exactly the right firmness.** Lesson 3.4 explains it, demonstrates it, then says "don't use it" with a technical rationale (hard to test, hard to reuse, causes interference). This sets up a professional habit without being preachy. The decision to exclude `global` from the curriculum entirely is correct.

---

## Summary (3 lines)

**Verdict: Solid** — the chapter is technically sound and pedagogically well-designed; it will teach functions correctly.

**Top issue 1:** c3s2 makes a false technical claim ("x is invisible inside `double`") that directly contradicts the scope lesson two lessons later — fix to "the caller's local variables are hidden."

**Top issue 2:** c3s5's `repeat_word` solution teaches `if i == 0` as a normal loop-start pattern, which is an un-Pythonic habit that will need to be unlearned; replace with a cleaner accumulator idiom before students internalise it.
