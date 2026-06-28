# Panel Review — Ch.1 First Words — Allen Downey (Think Python)
**Verdict:** Solid

---

## Findings (from my lens)

### 1. [MINOR] Lesson 1.2 — "int() truncates toward zero" vs "// truncates toward negative infinity" — distinction present but not dramatised

The plan correctly names both behaviors separately, which is right. `int(-3.9)` gives `-3` (toward zero); `-7 // 2` gives `-4` (toward −∞). This is a genuine gotcha that bites intermediate programmers. The plan mentions it but does not stage a worked example that shows the difference on a negative number. At this level, students will almost never use negative numbers with floor division, so this is minor — but if the lesson only shows positive inputs the two behaviors look identical, and the distinction stays invisible until it matters. Recommendation: add one stepper trace showing `int(-3.9)` → `-3` alongside `(-3.9) // 1` → `-4.0` in the 1.4 lesson, with a one-sentence explanation. The mental model is: `int()` is a chop toward zero; `//` is a step down to the next whole floor tile.

### 2. [MINOR] Lesson 1.4 — The `^` XOR exercise and the quiz use *different* numbers

Lesson 1.4 drills `2 ^ 10` → `8` as the worked debug example. The Chapter Quiz asks `2 ^ 8` → `10`. These are both correct results, but the quiz asks the student to generalise to a new instance they have not seen. That is good spaced practice for students who genuinely understood the concept; but students who memorised "the answer is 8" will fail. Make the quiz intent explicit: frame the quiz question as "the same trap — a different pair of numbers" so the student knows the task is to apply the rule, not recall the number. One sentence in the quiz preamble suffices.

### 3. [MINOR] Lesson 1.2 — Truthiness scope note is slightly premature

The plan says: "Scope note for students: 'For the types we've seen so far, those are all the falsy values — collections like lists will add a few more in a later chapter.'" This is exactly the right thing to say — it prevents the misconception "I know all the falsy values" while keeping the list manageable. The phrasing is fine. The only risk is that mentioning lists-to-come makes a student wonder what a list is. The note already says "a later chapter" — leave it exactly as written.

### 4. [MINOR] Lesson 1.5 — `.join()` introduces a list *as a value* with no scaffolding for list syntax

The plan notes: "Lists are introduced only as a return-value here — Ch.4 owns them fully." That is correct pedagogy. But the example `" ".join(["Code", "Lab"])` asks a student who has never seen `[...]` to write a list literal inside a function call. The plan's exercises for `.join()` include "join a short list of words with a dash" — this requires the student to type `["word1", "word2", ...]`. That is not a minimal encounter with `.join()`; it requires synthesising syntax that hasn't been taught. Recommendation: the *example* can show a list literal (the student reads it), but the *exercise* should only ask students to call `.join()` on a list already stored in a variable — the variable was assigned before the exercise, so the student never has to construct list syntax. The plan says Ch.4 owns lists. Hold the line there.

### 5. [MINOR] Lesson 1.5 — "String building" synthesis subsection is the right move but is not assigned a rung

The plan lists a final synthesis subsection called "String building" that combines indexing, slicing, `.split()`/`.join()`, and f-strings. It is described as a write-from-scratch exercise producing a "formatted report." This is good — it is the generative moment at the end of the lesson. But the plan does not assign it a rung, and the synthesis subsection as described is doing more work than one subsection should (combining five distinct previously-learned tools). Consider assigning it explicitly as rung 5 (complete from a stub) rather than rung 6 (blank editor), since the student has just learned slicing and `.join()` in the same lesson. Rung 6 write-from-scratch with all five tools simultaneously is a steep ask for a first encounter.

### 6. [MAJOR] Lesson 1.5 — The written `c1.js` is missing all of: f-strings, `:.2f`, indexing, slicing, `.join()`, `round()`

This is a plan-vs-implementation gap, not a plan defect. The chapter plan correctly claims all these as Ch.1-owned concepts. The written `c1.js` stops at: concatenation, `*`, `.upper`/`.lower`/`.strip`/`.split`, `len()`, and `immutability`. Everything from indexing onward is unwritten. Similarly, `sep=`, `end=`, the `^` XOR gotcha, `-2**2` precedence, `EOFError`, and the `:.2f` format spec are all in the plan but absent from `c1.js`. The plan is sound; the lesson file needs to be completed. Flag this as the primary authoring gap before this chapter is considered done.

### 7. [MINOR] Lesson 1.3 — Stepper is introduced as the *primary* worked example vehicle but the plan does not describe what the stepper actually shows

The plan says "Stepper trace is the primary worked example (show variable table building line by line)." The written `c1.js` references the stepper in prose ("Watch this in the stepper on the right") but the plan gives no guidance on what the stepper column labels are, what happens at line boundaries, or how it interacts with an exercise that requires typing. This is an engine spec concern more than a content concern, but the lesson plan should specify: the stepper shows one row per variable, updating after each assignment. If the stepper is the primary mental-model tool, its interface contract needs to be stable before the lesson is authored.

### 8. [MINOR] Chapter Quiz — `:.2f` vs `round()` question is pedagogically strong but the keyword-match grader is fragile

The last quiz question is short-write: "why do you need `int()` around `input()` before adding a number?" graded by keyword matching requiring "string" or "str" and "convert" or `int()`. This is a reasonable proxy. The `:.2f` vs `round()` question is multiple-choice predict-the-output, which is the right format. The `^` quiz question requires the student to explain why the output is not 256. If this is auto-checked as predict-the-output (fill-in the number), that is tractable. If it requires the explanation to be auto-graded, the keyword matcher will miss many correct answers. The plan says "predict-the-output (fill-in)" for all but the last item — consistent with this, the `^` question should only require the student to fill in the number `10` and select "this is bitwise XOR, not power" from a multiple-choice, not write the XOR explanation in free text.

---

## Continuity notes

**Well-woven from Ch.0:**
- The "literal machine" framing from Ch.0 is explicitly recalled at the start of the dependency map ("Ch.0 recall: sequence, algorithm exactness, debugging as a process"). The plan's 1.1 warm-up retrieves the sequence idea from Ch.0 cleanly.
- Debugging as an idea (Ch.0 L0.5) correctly reappears in Ch.1 as error classes with real tracebacks — the plan names `NameError`, `SyntaxError`, `TypeError`, `ValueError`, `IndexError`, `ZeroDivisionError` and assigns them to specific lessons. The error-taxonomy progression from Ch.0 (bug = wrong step) to Ch.1 (error = Python telling you where) is exactly right.

**Well-woven within Ch.1:**
- The plan's dependency order is sound: `print` → types → variables → operators → strings → `input()`. Each lesson's warm-up recalls the prior lesson's concept. The plan explicitly marks each lesson's `reuses:` — this is the right way to enforce spiral weaving.
- `input()` appears last because it pays off type conversion directly (the `int(input())` pattern only makes sense after types and conversion are owned). This is the HTTLACS ordering and it is correct.

**Missing from written `c1.js` but correctly placed in the plan:**
- `bool` is in the written c1.js but truthiness is not. The plan correctly puts truthiness in 1.2 with a scope note about future falsy values (empty list, etc.). The written lesson will need to add this.
- The `^` XOR gotcha is correctly placed in 1.4 (operators lesson), not in 1.5 or later. It is a logic error with no traceback — harder to catch than a traceback — and introducing that category of bug early builds good debugging habits.

**Potential re-teaching risk (minor):**
- Lesson 1.5 opens with "You already know that `+` joins strings end to end" — the written `c1.js` lesson 1.5 already says exactly this. The plan correctly treats this as retrieval, not re-teaching. No problem here.
- Lesson 1.2's truthiness content (the written `c1.js` shows `bool` and conversion but not the full falsy list) will need to be added without re-teaching the type taxonomy. The plan handles this correctly by placing truthiness as a *subsection* of 1.2, not a new lesson.

**What Ch.2 expects (boundary check):**
The Ch.2 plan (ch-2-decisions-loops.md) explicitly recalls from Ch.1: "int, float, str, bool, None — variables + assignment — print + expressions — comparison values (True/False) — first met in Ch.1 as a type." It also recalls `input()` → str → convert. The Ch.1 plan delivers all of these. Ch.2 deepens truthiness (already introduced in Ch.1) and comparison operators (new in Ch.2). No Ch.2 content appears to depend on f-strings, indexing, or slicing from Ch.1 — those concepts spiral later. The boundary is clean.

---

## What's strong

- **The `^` XOR treatment is exactly right.** Naming it as a logic error with no traceback — harder to find than an exception — and placing it alongside "silent wrong answer" in the misconceptions table is the correct level of programming-thinking depth for this age. Most courses skip this; including it builds the right habit early.

- **The "system boundary" principle in Lesson 1.6 is a genuine CS idea, named and explained.** "Anything arriving from outside your program — keyboard, file, network — arrives as raw text." This is a principle that scales: it explains `input()`, it will explain file reading in Ch.7, it will explain API responses later. Teaching the principle once here means every future encounter is a recognition, not a surprise. This is the kind of "why" that makes knowledge last.

- **The misconception table is thorough and correctly cross-referenced to specific lessons.** Fourteen misconceptions, each with the lesson(s) that address them. Particularly strong: the `:.2f` vs `round(n, 2)` distinction (one always shows trailing zeros, one does not), which is a misconception even experienced programmers carry.
