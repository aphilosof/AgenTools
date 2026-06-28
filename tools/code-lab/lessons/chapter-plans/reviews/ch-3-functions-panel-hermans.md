# Panel Review — Ch.3 Functions — Felienne Hermans (The Programmer's Brain)
**Verdict:** Solid

---

## Findings (from my lens)

### 1. [BLOCKER] c3s8 — String iteration (`for char in text`) introduced with no prior exposure, at maximum rung

`for char in text` and `char in "aeiou"` (membership test) both appear for the first time in c3s8, which is a rung-6 lesson. Neither concept appears anywhere in c1.js or c2.js. The chapter 2 lessons use `in` only in the looping sense (`for i in range(...)`), never as a membership test operator. Learners hitting c3s8 face two new syntactic forms simultaneously — and are immediately asked to write `is_palindrome` from a blank editor.

This is a textbook case of what I call **the notation problem**: when a symbol (`in`) is reused in a structurally different role (loop variable binding vs. membership predicate), novices do not automatically generalise — they carry the prior reading. A student who has only seen `for x in range(...)` will read `char in "aeiou"` as loop syntax and be confused why it sits inside an `if`.

Fix: add at least one predict/run exercise using `char in "aeiou"` and `for char in text` before c3s8's rung-4 exercises. Either scaffold it in c3s8's opening text blocks (currently absent), or move string iteration to Ch.4 (Collections) where iteration over sequences is the chapter theme. If it stays here, reduce the rung ceiling in c3s8 to rung 5 max.

### 2. [MAJOR] c3s3 — Working memory overload: five conceptual ideas + rung-6 `is_prime` in 25 minutes

c3s3 introduces: (1) print vs return distinction, (2) None revisited, (3) early return / guard clauses, (4) function composition (`double(square(3))`), and (5) the accumulator pattern with return. Then the final exercise is rung 6 — a blank-editor `is_prime` that also requires `for`, `range`, `%`, conditional logic, and multiple return points.

My research on code reading shows that novices process syntax and semantics serially, not in parallel. Each new construct requires a separate parsing pass. Five new conceptual frames plus a blank-editor exercise that requires all of them simultaneously exceeds what working memory can hold at age 11, even for a strong reader.

The actual lesson is well-written — the print-vs-return anti-pattern is exactly right, and the accumulator recall is good spiral work. The problem is packing. The composition subsection in particular feels grafted on: the `double(square(3))` example requires learners to mentally evaluate two nested calls while also absorbing a new idea about how return enables that.

Fix: split c3s3. Move composition to a brief worked-example in c3s5 or c3s6 (where it can be shown through concrete decomposition). In c3s3 itself, the rung-6 exercise should be `largest_of_three` (the plan's own suggestion) rather than `is_prime`, which demands greater prior-knowledge recall. `is_prime` moves to the Chapter Challenge where Ch.2 loop fluency can be assumed.

### 3. [MAJOR] LEGB rule named in c3s2 before scope is taught

c3s2 (Parameters) mentions "This is the **LEGB scope rule** at work" in the body text. The scope lesson is c3s4, two lessons later. Naming a rule before it is explained creates a forward reference that learners cannot anchor. Research on self-explanation and the "generation effect" shows that naming something with no definition causes learners to generate wrong definitions — which then must be unlearned.

Fix: in c3s2, say "each function has its own private workspace" without using the LEGB acronym. Introduce the LEGB name and its full explanation once, in c3s4 where it belongs. The c3s4 text does this correctly ("Today we cover L and G") — simply remove the forward reference in c3s2.

### 4. [MINOR] Plan is incomplete: c3s8 and c3s9 are not described in ch-3-functions.md

The chapter plan ends at lesson 3.7 (Bassline). The actual c3.js contains two additional lessons — c3s8 (Functions in the Wild) and c3s9 (Art and Music capstone) — that have no corresponding specification in the plan document. This matters because the plan is the design document that future reviewers and authors rely on. Concepts introduced in c3s8 (string iteration, membership test, design-before-code / wishful thinking) are not listed in the chapter's "Concepts owned" section, which means they will not be tracked for spiral coverage in Ch.4 onward.

Fix: add lesson entries for 3.8 and 3.9 to ch-3-functions.md, and add `for char in text`, `in` as membership test, and "wishful thinking" to the concepts-owned section or explicitly defer them to Ch.4/Ch.5 with a named owner.

### 5. [MINOR] c3s4 plan vs actual: strand and examples differ

The plan specifies c3s4 strand as `numbers` with a `TAX_RATE` constant worked example. The actual c3s4 uses strand `words` with `text.upper()` / `text.lower()` examples and a final rung-6 exercise involving `clean()` and `is_match()`. The actual implementation is sound — using string operations to demonstrate scope (same variable name `result` in two functions) is effective precisely because string operations are familiar from Ch.1 and impose no new cognitive load during the scope explanation. But the plan and the implementation are misaligned, which means the plan cannot be used to verify coverage.

Fix: update the plan to reflect the actual worked examples and strand.

### 6. [MINOR] c3s4 glossary defines `global variable` while CURRICULUM-STRUCTURE.md marks `global` as excluded

The actual c3s4 lesson shows the `global` keyword explicitly (in a "here's why not to use it" block), and the glossary entry defines "global variable" as a first-class term. CURRICULUM-STRUCTURE.md marks `global` as excluded from the concept spine. Showing a concept to reject it is defensible pedagogy — but it should be flagged as "introduced to reject" in the plan, not listed neutrally in the glossary alongside taught concepts. Learners and future reviewers reading the glossary have no way to distinguish "you should know this" from "we showed this so you'd know what not to do."

Fix: annotate the glossary entry: `"global variable": "A variable created outside all functions. Python has a global keyword to modify these from inside functions — but this course teaches the better alternative: always pass values as parameters."` That framing closes the loop within the entry itself.

---

## Continuity notes

**Well-woven from c1–c2:**
- The `print vs return` distinction is the right target. Ch.1 established `print` as the voice of the program; c3s3 correctly exploits that prior knowledge to land the contrast.
- Accumulator pattern recall in c3s3 is clean: learners see `total += i` inside a function, connecting Ch.2's loop pattern to Ch.3's `return` in a way that feels earned rather than invented.
- The DRY principle introduced in c3s0 echoes the "copy-paste trap" mental model from Ch.1 strings (`str * int` instead of repeating). The repetition of DRY across chapters is good Bruner-style spiral work.
- `UnboundLocalError` is introduced at exactly the right moment (c3s4), immediately after learners have built a working mental model of local scope. The "Python scans the whole function before running it" explanation is cognitively precise and not something novices would discover on their own.

**Missing recall / weak weaving:**
- c3s8 uses `.upper()`, `.lower()`, `.strip()` as if they are obvious recall items — but there is no warm-up or explicit "remember from Ch.1" pointer. For a lesson introducing two new syntax forms simultaneously, the opening should anchor what is old so learners can direct attention to what is new.
- The `%` operator is used in `is_prime` (c3s3 rung 6) and `groove` (c3s7 rung 6). Both assume `%` fluency from Ch.2. This is fine — c2s5 and c2s6 cover it — but neither rung-6 exercise has a warm-up that rehearses modulo before deploying it. Given that `%` is the hardest arithmetic operator for novices to read correctly (they tend to confuse it with percentage), a single predict/trace step before the blank editor is warranted.

**Concepts appearing early that need later expansion:**
- String iteration (`for char in text`) appears in c3s8 without Ch.4 coverage committed in the plan. It should be explicitly listed as "first encounter here, owned by Ch.4."
- The tuple default `pattern=(1,1,5,5)` in the c3s7 plan is a fine immutability preview, but the plan's note ("brief note") should be brief — no more than one sentence. Anything more and learners start trying to learn tuples prematurely.
- Composition (`double(square(3))`) in c3s3 — the concept is sound, but "inside-out evaluation" is genuinely hard to trace for novices. The lesson shows it once but does not have a predict exercise for it. A predict exercise before the worked example would give learners a chance to form (and test) their own model before reading the answer.

---

## What's strong

- **The concept ladder (c3s0–c3s5) is correctly sequenced and dependency-ordered.** Each lesson adds exactly one idea to the previous: no parameters → parameters → return → scope → defaults. This is the right granularity for novice learners. Most curricula collapse parameters and return into one lesson; keeping them apart gives learners a clean model before the next complexity is added.

- **The print-vs-return anti-pattern is taught head-on with a real crash.** The `NoneType` TypeError fix exercise in c3s3 is the most important exercise in the chapter. Learners who can diagnose `None + 1` have internalised the function contract; those who can't will spend years confused by it. Having them fix a realistic program that uses the return value downstream (rather than just adding `return` in isolation) is exactly the right pedagogical move.

- **The decomposition progression across c3s6 (turtle) and c3s7 (sound) is genuinely motivating.** Moving from `draw_polygon(sides, length)` — which makes all regular polygons one function — to `verse(root)` — which makes a transposable melody — gives learners two separate domains where the same abstraction principle produces visible, satisfying results. The CS principle (separation of concerns) is named at both sites without feeling forced.
