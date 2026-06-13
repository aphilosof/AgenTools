# Lesson and arena data schema

All curriculum content is data. One file per world in `lessons/`, the arena bank in `arena/`. Files are plain JS modules pushing into `window.CODELAB.lessons` / `window.CODELAB.arena` so the build can concatenate them with no module system.

## Lesson object

```js
{
  id: "w2l3",                 // world + lesson, stable forever (saves reference it)
  world: 2,
  title: "Loops that drum",
  lang: "py",                 // "py" | "js" | "ts" | "none" (World 0 puzzles)
  strand: "sound",            // "numbers" | "words" | "data" | "plot" | "sound" | "core"
  rung: 4,                    // 1 predict, 2 arrange (Parsons), 3 modify, 4 fix, 5 complete, 6 write
  concepts: ["for", "range"], // feeds the knowledge map search
  misconceptions: ["off-by-one-range", "loop-var-confusion"], // ids from tests/misconceptions.md; hints must address these
  warmup: ["w1l4:q1", "w1l6:q2"], // retrieval questions from earlier lessons (question bank ids), 1-2 per lesson
  timeBudgetMin: 20,          // 15-25 including the challenge; harness fails lessons outside the range
  explain: "...",             // under 150 words, grade 5-6 reading level (harness-checked), one concept
  starter: "for beat in range(8):\n    sample(\"kick\")\n    sleep(0.5)\n",
  starterExpectation: "runs-clean",  // "runs-clean" | "raises:<ErrorType>" — machine-checkable, replaces the prose claim in invariant 5
  check: {
    type: "output",           // "output" | "tests" | "calls" | "parsons"
    expected: "...",          // output matching: whitespace-normalized, diagnostic diff on fail
    tests: [ ... ],           // hidden test cases: [{call, expect}] against named functions
    calls: [ ... ],           // music/turtle/plot: recorded calls grouped by scheduled timestamp; calls sharing a timestamp match order-insensitively, groups match in time order. Do not use a single orderInsensitive flag — it cannot express chord-then-sequence
    lines: [ ... ]            // parsons: correct line order; engine presents them scrambled (with optional distractors)
  },
  hints: ["nudge", "bigger nudge", "near-solution"], // each written against the listed misconceptions, not generic
  solution: "...",            // model solution; MUST pass check AND the style checker in the harness
  codex: {                    // written into the Codex on completion
    topic: "loops",
    pattern: "for x in range(n):",
    note: "Repeats the indented block n times."
  },
  styleRequired: false        // true on World 6+ checkpoints: style findings block completion
}
```

Notes:
- `check.type: "calls"` exists because sound, turtle, and plot exercises are judged by what the program asked the engine to do (the recorded call sequence with arguments), not by printed output.
- Checks must never produce a bare fail. Every check type returns a diagnostic: what differed, where, and which line most likely caused it.
- Error annotation level is computed by the engine from world number and Real Tools I status, not stored per lesson. Arena items never annotate.
- From World 8 onward, paired lessons share a `pairId` so the engine can show Python and JS side by side and the Codex can merge entries.
- Boss and checkpoint lessons set `kind: "checkpoint"`.
- Every distinct error class surfaced by an exercise should be listed in `errorClasses: [...]` so the harness can verify the friendly layer covers it and the Codex errors tab can link back.

## Arena challenge object

Same shape as a lesson, plus:

```js
{
  code: "W2-C1",             // assignable short code
  requires: ["for", "range"],// concept tags that must be learned to unlock
  par: { minutes: 10 },      // third star threshold
  boss: false,               // one true per world; boss timer is coach-configurable, default off
  custom: false              // true for coach-authored challenges (output checks only)
}
```

Arena entries have no `rung`, show no error annotation, and default to no hints unless coach mode enables them.

## Invariants the test harness enforces

1. Every `solution` passes its own `check`, and passes the style checker.
2. Every `id` and `code` is unique.
3. Every concept tag used in `requires` is introduced by some earlier lesson.
4. Every lesson has a non-empty `codex` entry (except World 0 and `kind: "checkpoint"`).
5. `starter` behavior matches `starterExpectation` (runs clean, or raises the named error type) when executed in the harness.
6. `explain` text scores at grade 5 to 6 reading level.
7. `timeBudgetMin` is within 15 to 25, and every world's budgets sum to a sane total.
8. Every id in `misconceptions` exists in `tests/misconceptions.md`, and every lesson with misconceptions has hints (no generic-only hint ladders).
9. Every id in `errorClasses` has a translation in the friendly error layer.
