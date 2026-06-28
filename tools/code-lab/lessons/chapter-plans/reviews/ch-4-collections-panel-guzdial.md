# Panel Review — Ch.4 Collections — Mark Guzdial (Georgia Tech, computing education research)
**Verdict:** Solid

---

## Findings (from my lens)

### My lens: context-first teaching, evidence-based scaffolding, novice cognition, concept sequencing

---

1. **[MAJOR] 4.4 — `shared_items` hard exercise uses `sorted()` before it is taught.**
   The hard exercise in Lesson 4.4 asks the learner to write `shared_items(basket_a, basket_b)` and specifies that the return value is a "sorted list." The plan notes that `sorted` is "then recalled in 4.4." But the plan also teaches `sorted` explicitly in Lesson 4.3 worked-example #4 — this is the right order. The problem is the word "recall" implies no re-explanation in 4.4, which is correct. However, there is a subtlety: `sorted(some_set)` — converting a set directly to a sorted list — is not explicitly covered in 4.3, which teaches `sorted(scores)` where `scores` is a list. The 4.4 exercise requires `sorted(intersection_result)` where the argument is either a set or a set intersection result. Learners who try `sorted({1, 2, 3})` will get a sorted list, which works fine, but learners who first convert via `list(intersection)` then `sorted()` will also be correct. The plan should note explicitly that `sorted()` accepts any iterable — not just a list — so 4.4 does not accidentally teach that sorted requires a list as its argument. One worked-example sentence in 4.3 saying "sorted works on any iterable — lists, sets, even strings" would close this gap cleanly.
   **Fix:** Add one sentence to 4.3's `sorted` worked-example confirming it accepts any iterable. Then 4.4's recall is unambiguous.

2. **[MAJOR] 4.2 — `list.index()` raises `ValueError`, not `IndexError`, but the plan presents this inside the IndexError lesson without distinguishing them.**
   Lesson 4.2's worked-example #4 covers `colours.index('green')` and correctly notes it "raises ValueError if not found — note, not IndexError." This parenthetical is good, but it is buried in a worked-example note in a lesson titled "Indexing & Slicing" whose stated new error class is `IndexError`. The ValueError is mentioned once as a parenthetical and never appears in the exercise set, the misconceptions list for 4.2, or the chapter-wide misconceptions/error-classes section. This creates a real gap: a learner who writes `if lst.index(item) >= 0:` to check membership will get a crash when `item` is absent — but they will be checking for `IndexError` because that is what this lesson is about. The chapter-wide error list at the bottom does not include `ValueError` at all.
   Research on debugging (Fitzgerald et al. 2008, McCauley et al. 2008) shows that learners who have seen an error class are far more likely to diagnose it correctly. Hiding `ValueError` in a parenthetical in a different error's lesson means it will be misdiagnosed.
   **Fix:** Add `ValueError` to the chapter-wide error-class list, explicitly distinguish it from `IndexError` in the 4.2 misconceptions list ("list.index() raises ValueError — not IndexError — when the value is not found"), and add one fix exercise in 4.2 or 4.4 that provokes it deliberately.

3. **[MAJOR] The aliasing hazard in 4.6 is introduced but then the chapter never requires learners to work around it.**
   Lesson 4.6 correctly identifies the aliasing trap: `inner = grid[0]; inner[0] = 99` changes `grid[0][0]`. The plan names this in the misconceptions section. But no exercise in 4.6, the Chapter Challenge, or the Quiz requires the learner to produce a correct copy. The transpose exercise (hard, 4.6) builds a new grid with nested `for` loops and `append`, which avoids aliasing by construction — but aliasing is never the obstacle the learner must consciously navigate. A learner could complete the entire chapter with a misconception about when list assignment copies vs. aliases and never encounter evidence that it matters. This is the classic situation Perkins & Simmons (1988) called a "fragile knowledge" outcome: the concept is mentioned, recognized in a multiple-choice sense, but not actionable.
   **Fix:** One exercise anywhere in 4.6 or the Challenge that asks "make a copy of `row = grid[0]`, modify the copy's first element, and confirm `grid[0][0]` is unchanged" — which fails without explicit copy semantics (`row = grid[0][:]` or `row = list(grid[0])`). This forces the learner to actually use the knowledge, not just read about it.

4. **[MINOR] 4.1 — The hook lesson opens by recalling functions before lists are motivated.**
   The warm-up recall in 4.1 asks "How did Ch.3 let you avoid copy-pasting the same code five times?" (functions) and then pivots to "how do we avoid five separate variables?" This is a reasonable motivational bridge, but the connection is weak: functions avoid repeated *code*; lists avoid repeated *variables*. These are different problems. A learner who thinks carefully about this may conclude that a function with five parameters is the answer to five separate variables (it is not unreasonable). The PRIMM model and Use-Modify-Create both recommend motivating from a concrete problem before introducing the container. A stronger hook: show five separate variables (`score1`, `score2`, `score3`, `score4`, `score5`) and ask "What if we had 50 scores?" — then show `scores = [88, 72, 95, ...]`. This is more direct than the function analogy.
   **Fix:** Change the warm-up to show the five-variable problem directly, then motivate the list as the solution. Keep the functions recall elsewhere in the lesson if desired, but don't make it the hook.

5. **[MINOR] 4.3 — accumulator pattern is re-introduced rather than explicitly recalled.**
   Lesson 4.3 names the accumulator pattern (correctly) and describes it as "initialize before, update inside, read after." This is exact language from Ch.2 Lesson 2.4 (the while-loop accumulator) and Ch.2 Lesson 2.5 (where the for-loop accumulator is explicitly recalled: "The accumulator pattern works the same way inside a for loop"). The lesson should say explicitly "You already know this pattern from Ch.2" and build from there rather than re-stating the three-step definition from scratch. Re-stating it as if new adds cognitive load without adding content. Per spiral curriculum design (Bruner), the second encounter should acknowledge and extend the first, not repeat it.
   **Fix:** Open the accumulator subsection in 4.3 with: "You already used the accumulator pattern in Ch.2 with `while` and `for` loops — `total = 0`, update inside, read after. The same pattern works on lists: instead of counting up to `n`, you iterate over items." One sentence recall; the depth is in the list-specific application.

6. **[MINOR] 4.5 — The shopping-list manager (hard exercise) introduces `while True:` with `input()` in a Rung 6 write-from-scratch, but this pattern has not appeared since Ch.2 Lesson 2.4.**
   The sentinel loop (`while True:` + `break` on a quit command) was taught in Ch.2 L2.4 and last used in the number-guessing game exercise (Ch.2 L2.4, Rung 6). It does not appear in Ch.3. Lesson 4.5's hard exercise asks for a full interactive manager with `while True`, `input()` commands (`add`, `get`, `show`, `quit`), and dict operations — all at once, from scratch. This is a large cognitive load for a single exercise. The recall gap (no practice with `while True` + sentinel in Ch.3 or Ch.4 until this exercise) means some learners will struggle with the control flow rather than with the dict concepts. The exercise is supposed to teach dicts; the difficulty should be in the dict work.
   **Fix:** Add one line to the 4.5 warm-up recalling the sentinel pattern: "In Ch.2 you used `while True:` with `break` to keep reading input. This lesson uses the same pattern to build a menu." Then the hard exercise's scaffolding is appropriate.

7. **[MINOR] 4.8 — `zip` is introduced and used in a worked example but the strand lesson does not guarantee the learner practices writing it.**
   The plan says `zip` is "introduced in 4.8 (strand)" and "brief introduction; named but not deep-dived." This is correct positioning. But the exercises for 4.8 are: easy (change two values in a list), medium (write `reverse_pattern` without mutation), hard (write a random drum machine). None of these require writing `zip`. The learner sees `zip` used in a worked example and then writes three exercises that do not involve it. The concept is named but never practiced in this chapter. Per Sweller's worked-example effect, passive exposure to a worked example is not sufficient for transfer — a practice item is needed.
   **Fix:** Either move the `zip` introduction to a brief worked example + one exercise in 4.3 (where `enumerate` is taught — natural companion), or add one 4.8 exercise that uses `zip` directly. Alternatively, be explicit in the plan that `zip` is deliberately "see but don't write" in Ch.4, with full ownership deferred to Ch.5 or later. The current plan implies practice without providing it.

8. **[MINOR] Chapter Quiz item 4 — the tuple-swap question is phrased ambiguously.**
   Quiz item 4 says: "Write one line that makes `a = 5, b = 10` become `a = 10, b = 5` without a temporary variable." The phrasing "makes `a = 5, b = 10` become..." is slightly ambiguous — it could be read as asking a learner to write the assignment that *establishes* those initial values and then swaps. The intended answer is `a, b = b, a`, which only makes sense if `a` and `b` are already defined. The quiz question should include the setup: "Given `a = 5` and `b = 10`, write one line that swaps their values without a temporary variable."
   **Fix:** Restate as: "Given `a = 5` and `b = 10` already defined, write one line that swaps them so `a` holds 10 and `b` holds 5, without using a temporary variable."

---

## Continuity notes

**Well-woven from Ch.1–3:**
- String indexing/slicing from Ch.1 is explicitly bridged to list indexing/slicing in both the 4.2 overview and warm-up: "In Ch.1 you sliced a string — `word[1:3]`." This is exactly the right pedagogical move. The structural parallel (same zero-based indices, same exclusive stop, same negative-index semantics) reduces cognitive load by leveraging existing schema. Research on analogical transfer (Gentner et al.) supports this approach strongly.
- The `for`/`range` recall in 4.3 is appropriate: "What does `for i in range(5):` do?" followed by the contrast with `for item in lst:`. This is incremental extension, not re-teaching.
- `def`/`return` from Ch.3 is properly assumed throughout — all the hard exercises ask for full functions. The plan correctly notes `def` as a recall, not a concept owned by Ch.4.
- `int(input())` conversion from Ch.1 is recalled in 4.1's hard exercise (scores from input). This is accurate — it was taught in Ch.1 L1.6 and used through Ch.2 and Ch.3.
- `try/except` and `while True:` from Ch.2 are correctly cited as recalls (not re-taught). The shopping-list manager and drum machine use them; the warm-up should mention the sentinel-loop specifically (see Finding 6).
- The accumulator pattern from Ch.2 is recalled in 4.3. However, the re-statement from scratch is unnecessary (see Finding 5).
- Immutability of strings (Ch.1) is the correct anchor for tuple immutability in 4.4. The warm-up "Can you change the second character of a string in place?" is exactly the right question to activate that schema.

**Missing or under-woven:**
- `ValueError` from `list.index()` is present in 4.2 as a parenthetical but absent from the chapter error-class master list and from all exercise sets. It will not be solidified (see Finding 2).
- Aliasing (4.6) is introduced but never practiced in a way that requires the learner to reason about it or produce correct copy behavior (see Finding 3).
- The `zip` function is shown in 4.8 but not practiced in any exercise (see Finding 7).
- The `:.2f` formatting gap identified in the Ch.3 review (finding 1 of that review): if it has still not been taught in Ch.1 or Ch.3 by the time Ch.4 lessons are written, it should not appear anywhere in Ch.4 worked examples or challenges without first being introduced. Ch.4's strand lessons use music and plot APIs, not money formatting, so this is unlikely to resurface here — but the gap from Ch.3 should be resolved before Ch.4 is authored.

**Re-taught by accident:**
- None found. The plan is notably clean here. Every recall is labeled as a recall, not a concept introduction. `for` loops, `def`, `if/elif`, `while`, `input`, and `int()` are all used freely without re-explanation. This is correct for a Ch.4 audience.

---

## What's strong

- **The "right container for the job" through-line is evidence-based and well-executed.** The chapter's organizing question — lists when order matters and things change, tuples when the group is fixed, dicts when you need labels, sets when duplicates are noise — gives learners a decision rule rather than just four container definitions. Decision-rule teaching is strongly supported by research on transfer (Chi et al. 1989; Catrambone 1998). The Boss Challenge (mini playlist manager) requiring all four container types with a motivating reason for each is an excellent capstone for this approach.

- **The mutation-returns-None misconception is addressed with the correct level of weight.** The plan lists it in the chapter-wide misconceptions, in the relevant lesson misconceptions (4.1, 4.3), and explicitly in the Chapter Challenge's first exercise ("misconception: `sort()` returns None"). Identifying `lst = lst.sort()` as the canonical trap is correct — it is the most commonly observed misconception with Python list methods across introductory courses (Altadmri & Brown 2016 confirmed it in a large-scale analysis of student Python errors). Making it the first Challenge exercise where learners must diagnose it from wrong output is exactly right.

- **The concept ordering within the chapter is pedagogically defensible.** The dependency chain (lists → indexing → looping → tuples/sets → dicts → nesting → application) reflects a sound partial order. Each lesson has genuine prerequisites in the lessons before it. Notably, putting nesting (4.6) after dicts (4.5) rather than after lists (after 4.2) is the right call: `data[key][index]` is more meaningful once both dicts and list indexing are established. This sequencing is better than several published introductory texts that cover nesting immediately after lists.

---

## Technical verification results

All code samples verified with Python 3.14.5:
- `append` returns `None`: confirmed.
- `sort()` returns `None`; `sorted()` returns a new list and leaves original unchanged: confirmed.
- `{}` is an empty dict; `set()` is an empty set: confirmed.
- `random.randint(1,6)` is inclusive on both ends (1 and 6 both appeared in 10,000 trials): confirmed.
- Single-element tuple: `(5)` is `int`; `(5,)` is `tuple`: confirmed.
- `list.index()` raises `ValueError` (not `IndexError`) when the value is not found: confirmed.
- Over-wide slice `lst[0:100]` on a 3-element list returns the whole list with no error: confirmed.
- `random.shuffle()` returns `None` and mutates in place: confirmed.
- `dict.get(key, default)` returns default for missing key: confirmed.
- `in` on a dict tests keys, not values: confirmed.
- Tuple assignment raises `TypeError`: confirmed.
- Nested list aliasing: `inner = grid[0]; inner[0] = 99` changes `grid[0][0]`: confirmed.
- 4.2 first_half bug: `lst[0:len(lst)]` silently returns the entire list; no error raised: confirmed.
- Challenge #2 bug: `scores[1:]` drops the first score silently; no error raised: confirmed.
- `zip` stops at the shorter iterable: `zip([1,2,3],[10,20])` gives `[(1,10),(2,20)]`: confirmed.
- `pop()` on an empty list raises `IndexError`: confirmed.
- `dict` preserves insertion order in Python 3.7+ (confirmed on Python 3.14.5).

---

*Three-line summary:*
**Verdict: Solid.** The container sequencing is pedagogically sound, the mutation-returns-None misconception is handled with the right weight and at the right frequency, and the "right container for the job" through-line gives learners a decision rule rather than isolated syntax. **Top issue 1:** `list.index()` raises `ValueError` (not `IndexError`), but this is buried in a parenthetical in the IndexError lesson, absent from the chapter error-class list, and never provoked in an exercise — learners will misdiagnose it in the wild. **Top issue 2:** The aliasing hazard in 4.6 is named but never actively practiced; no exercise requires the learner to produce a correct copy or reason about why aliasing produced wrong behavior, so the concept will remain fragile.
