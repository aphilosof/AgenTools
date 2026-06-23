# Lesson / chapter / arena data schema

The data contract for all curriculum content, matching the locked structure in
`CURRICULUM-STRUCTURE.md`. Content is plain-JS data files concatenated by the
build into `window.CODELAB`:
- `window.CODELAB.lessons`  — lesson objects (one chapter's lessons per file)
- `window.CODELAB.chapters` — chapter objects (the Chapter Challenge + Quiz)
- `window.CODELAB.arena`    — arena challenges (parallel track, later)

Terminology: **Chapter → Lesson → Subsection** (see `CURRICULUM-STRUCTURE.md`).
Reading level for prose is **grade 7–9** (a ceiling); code is stripped before scoring.

---

## Lesson object

```js
{
  id: "c1l2",                  // chapter+lesson, stable forever (saves reference it)
  chapter: 1,                  // chapter number (0..12)
  lessonNo: 2,                 // position within the chapter
  title: "Values and Types",
  lang: "py",                  // "py" | "js" | "ts" | "none" (Ch.0 pre-syntax)
  strand: "numbers",           // "numbers"|"words"|"data"|"plot"|"sound"|"core"
  concepts: ["types","int","str"],     // for the Knowledge Map search + spine coverage
  recalls: ["c1l1"],           // lesson ids whose concepts this reuses (spiral)
  timeBudgetMin: 20,           // 15-25 across the whole lesson

  warmup: {                    // one retrieval beat (recall from an earlier lesson)
    md: "Last lesson you used `print`. Quick question: does `print(\"5\")` show …?",
  },

  subsections: [ /* Subsection objects — 3..6, see below */ ],

  recap: {
    md: "- Every [[value]] has a [[type]] …",   // bullet summary, [[term]] links allowed
    mistakes: ["Quoting a number you mean to calculate with …", "…"],
  },

  glossary: { value: "A single piece of data …", type: "The category …" },   // terms earned here
  codex: [ { topic: "types", pattern: "int(x)  str(x)  type(x)", note: "…" } ],// Skills entries (array)
  errorClasses: ["TypeError","ValueError"],     // classes provoked; feed the Codex Errors tab
  styleRequired: false         // true at Ch.6+ checkpoints: style findings block completion
}
```

## Subsection object  (one screen = one concept)

```js
{
  title: "Types decide what an operator means",
  concept: {
    md: "`7` and `\"7\"` look identical … [[concatenation]] …",  // teaching prose
    // md supports: `code`, **bold**, [[term]] (glossary hover), {{more:Label|Body}} (expandable)
  },
  examples: [ /* 2..3 Example objects, easy → harder */ ],
  exercises: [ /* 2..3 Exercise objects, increasing difficulty */ ],
}
```
(A subsection may omit `examples` or `exercises` only when the idea genuinely
needs neither — e.g. a pure warm-up-like concept beat. Default is all three.)

## Example object  (read-only, runnable; Predict → Run)

```js
{
  note: "Predict each line before running.",        // 1-2 line framing
  code: "print(2 + 3)\nprint(\"2\" + \"3\")\n",      // shown read-only, runnable
  expect: { type: "output", value: "5\n23" }         // for QC to verify the example runs as claimed
  // or expect: { type: "calls", value: [ … ] } for music/turtle/plot examples
}
```

## Exercise object  (Modify → Make; the rung ladder)

```js
{
  rung: 4,                     // 1 predict · 2 arrange · 3 modify · 4 fix · 5 complete · 6 write
  scaffold: "stub",            // "boilerplate" (imports/headers given) | "stub" (TODO) | "blank"
  debug: true,                 // true = spot-the-error / fix-the-code exercise
  prompt: "This crashes with a TypeError. Make it print 10.",
  starter: "print(7 + \"3\")\n",          // seeded per scaffold level; "" for blank/write
  starterExpectation: "raises:TypeError", // "runs-clean" | "raises:<ErrorType>"
  check: { /* Check object, see below */ },
  hints: ["The error says + can't combine int and str.", "…", "…"],  // keyed to misconceptions
  misconceptions: ["string-vs-number"],   // ids from tests/misconceptions.md
  solution: "print(7 + 3)\n",             // MUST pass check (+ style when styleRequired)
  errorClasses: ["TypeError"]             // classes this exercise can surface
}
```

## Check object  (tolerant, always diagnostic — never a bare fail)

```js
{ type: "output", value: "10" }                          // whitespace-normalized stdout, diff on fail
{ type: "calls",  value: [ /* recorded music/turtle/plot calls, grouped by scheduled timestamp;
                              same-timestamp calls match order-insensitively, groups in time order */ ] }
{ type: "tests",  value: [ { call: "is_prime(7)", expect: "True" }, … ] }  // hidden cases vs named fns
{ type: "parsons", value: ["line 1","line 2", …], distractors: ["…"] }     // correct order; engine scrambles
```

## Chapter object  (the Chapter Challenge + Quiz)

```js
{
  chapter: 1,
  title: "Python: First Words",
  challenge: [ /* 6..10 Exercise objects, ordered easy → hard, mixing the chapter's
                  concepts + strands; scaffolding fades to "blank" */ ],
  quiz: {
    pass: 0.8,                 // fraction required to unlock the next chapter
    questions: [
      { type: "predict", prompt: "What does this print?", code: "…", answer: "…" },
      { type: "write",   prompt: "Write one line that prints 25.", check: { type:"output", value:"25" } },
    ]
  }
}
```
The Quiz **gates** the next chapter: it stays locked until `pass` is reached.

## Arena challenge object (parallel track — later)
Same shape as an Exercise, plus: `code` ("C1-3"), `requires` (concept tags to unlock),
`par` ({minutes}), `boss` (bool), `custom` (bool). No rung, no error annotation,
hints only if coach mode enables them.

---

## Invariants the harness enforces

1. Every Example's `code` runs clean and produces its stated `expect`.
2. Every Exercise/Challenge `solution` passes its own `check` (+ the style checker when `styleRequired`).
3. Every Exercise `starter` matches its `starterExpectation` when executed.
4. Every `id` is unique; every concept in a lesson's `recalls`/spine is introduced by an earlier lesson.
5. Every lesson has ≥1 `codex` entry and a `recap` (except Ch.0).
6. Prose (`warmup`, `concept.md`, `recap.md`) scores at **grade 7–9** (code stripped before scoring).
7. `timeBudgetMin` ∈ [15,25]; a chapter's lessons sum to a sane total.
8. Every id in `misconceptions` exists in `tests/misconceptions.md`; every exercise with `misconceptions` has non-generic hints.
9. Every class in `errorClasses` has a translation in the friendly-error layer (`errors.js`).
10. Difficulty ramps at the lesson level: exercise rungs do not decrease *within* a subsection, and a lesson's *final* subsection reaches a rung ≥ its first. A genuinely lighter middle subsection (e.g. comments) may dip — the lesson-level ramp is what's enforced, not strict non-decrease across every subsection.
11. Every Quiz has `pass` and ≥1 auto-checkable question; every Chapter Challenge has 6–10 exercises.

All checks run on the **shipping Python version (3.13.x)** to match the site.
