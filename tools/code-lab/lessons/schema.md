# Lesson data schema

All curriculum content lives in `lessons/`. Files are plain JS concatenated by
the build into `window.CODELAB.lessons[]`. The engine navigates section by section.

---

## Hierarchy

**Chapter → Lesson → Section**

| Level | Description | Example |
|---|---|---|
| Chapter | A major theme (5–8 lessons) | Chapter 1: Python First Words |
| Lesson | A topic within the chapter (3–6 sections) | Lesson 1.1: Print and Output |
| Section | **The atomic navigable unit** — one concept | c1s1: "Output and print" |

The engine navigates section by section. The Knowledge Map groups sections by lesson
and chapter. IDs encode chapter and section: `c1s1` = Chapter 1, Section 1.

---

## Section object

```js
window.CODELAB.lessons.push({
  id:           "c1s1",       // stable forever — saved progress references this
  chapter:      1,            // integer ≥ 0
  strand:       "core",       // "numbers"|"words"|"data"|"plot"|"sound"|"core"
  lang:         "py",         // "py"|"js"|"ts"|"none"
  timeBudgetMin: 15,          // harness enforces 5–90
  title:        "Output and print",

  glossary: {                 // terms that [[term]] links resolve to (hover popover)
    argument: "A value placed inside a function's parentheses.",
    string:   "A sequence of characters enclosed in quotation marks.",
  },

  content: [ /* ordered blocks — see below */ ],

  codex: {                    // entry in the earned cheat sheet (Skills tab)
    topic:   "printing",
    pattern: "print(value)\nprint(a, b, c)",
    note:    "Displays arguments on screen. Multiple arguments joined with one space.",
  },
});
```

---

## content[] blocks

The `content` array is walked top-to-bottom. Each block is one of three types.

### Text block

```js
{ type: "text", md: "Prose with `code`, **bold**, and [[term]] links." }
```

One or more prose paragraphs. Blank lines inside `md` split into separate rendered
paragraphs. Harness checks grade ≤ 9 (Flesch-Kincaid; code spans stripped).

### Example block

```js
{
  type: "example",
  note: "1–2 sentence caption shown above the code panel.",  // optional
  code: "print(\"Hello!\")\n",
}
```

Read-only, runnable. Student clicks Run to see output. No check — examples
demonstrate, exercises assess.

### Exercise block

```js
{
  type:    "exercise",
  rung:    3,              // see rung ladder below
  prompt:  "Instruction for the student.",
  starter: "print(\"Code\" + \"Lab\")\n",  // "" for rung 6 (write from scratch)
  check: {
    type:     "output",   // "output"|"calls"|"tests"|"parsons"
    expected: "Code Lab",
  },
  hints: [
    "Nudge toward the idea.",
    "Larger nudge.",
    "Near-solution hint.",
  ],
  solution: "print(\"Code\", \"Lab\")\n",  // MUST pass check — harness verifies
}
```

---

## Rung ladder

| Rung | Label | What the student does | Starter |
|------|-------|-----------------------|---------|
| 1 | Predict | Reads code, writes prediction before running | = solution (read-only) |
| 2 | Arrange | Reorders scrambled lines (Parsons) | scrambled |
| 3 | Modify | Changes values in working code | working code |
| 4 | Fix | Repairs broken/crashing code | broken code |
| 5 | Complete | Finishes a partial program | partial stub |
| 6 | Write | Blank editor, from scratch | `""` |

Rung 1: predict textarea appears; starter is read-only.  
Rung 2: engine shows scrambled lines as draggable blocks; student reorders by drag-and-drop; check compares final order against `check.lines`.  
Rungs 3–4: starter contains real code to change.  
Rung 6: `starter: ""` — placeholder shown instead.

Early sections use rungs 1–4. Sections from Chapter 5 onward use 5–6.

---

## Check object

```js
{ type: "output",  expected: "10" }
// Normalized stdout match. Whitespace-trimmed per line.

{ type: "calls",   calls: [{ t: 0, fn: "play", args: [60] }] }
// Music/turtle/plot events. Same-timestamp calls match order-insensitively.

{ type: "tests",   tests: [{ call: "is_prime(7)", expect: "True" }] }
// Hidden test cases run against a named function.

{ type: "parsons", lines: ["line 1", "line 2"], distractors: ["decoy"] }
// Engine scrambles correct lines + distractors; student reorders.
```

---

## Inline prose markup

Works in `md` (text blocks), `note` (example captions), and `prompt` (exercise instructions).

| Syntax | Result |
|--------|--------|
| `` `code` `` | Inline code, accent color |
| `**bold**` | Bold |
| `[[term]]` | Hover popover from the section's `glossary` |

---

## Harness invariants (`npm test`)

| # | Check |
|---|-------|
| 1 | Every exercise `solution` passes its own `check` |
| 2 | Every `id` is unique |
| 3 | Every `codex` has `topic`, `pattern`, `note` (chapter 0 exempt) |
| 4 | All `{type:"text"}` prose ≤ grade 9 Flesch-Kincaid (code stripped) |
| 5 | `timeBudgetMin` within 5–90 |

---

## Planned — not yet in engine

- Lesson-level warmup recall beat (one question at lesson start)
- Section recap summary
- Quiz gate between chapters
- Chapter challenge (6–10 exercises mixing the chapter's concepts)
- Arena (parallel challenge track, unlocked later)
