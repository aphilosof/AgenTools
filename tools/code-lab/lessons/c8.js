/* Chapter 8 — Writing Real Programs
   Rebuilt to CODELAB_CH8_REBUILT.md + CODELAB_FULL_REPORT.md.
   Lessons: c8s1 A real program, alive · c8s2 Planning a program ·
            c8s3 Handling errors, deeper · c8s4 Comprehensions ·
            c8s5 Testing your own code · c8s6 raise + a real project ·
            c8s7 Finale: the chapter challenge. Closes the Python track.
   All Python; input() is mocked. No file I/O or sqlite. */

/* ── Lesson 8.1 — A real program, alive ──────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c8s1",
  chapter: 8,
  strand: "core",
  lang: "py",
  timeBudgetMin: 13,
  title: "A real program, alive",
  content: [
    {
      type: "text",
      md: "A real program is just the pieces you already know, working together. Some data, a few functions, a loop, a little error handling. Here's a whole quiz in a handful of lines. Every part is something you've built before.",
    },
    {
      type: "example",
      note: "A complete quiz: a list of question/answer pairs (Ch4), a loop (Ch2), an f-string (Ch1).",
      code: "questions = [(\"Capital of France?\", \"Paris\"), (\"2 + 2?\", \"4\")]\nscore = 0\nfor q, answer in questions:\n    guess = input(q + \" \")\n    if guess == answer:\n        score += 1\nprint(f\"Score: {score}/{len(questions)}\")\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "The player answers Paris, then 4. Predict the final line. (The questions print as they're asked.)",
      starter: "questions = [(\"Capital of France?\", \"Paris\"), (\"2 + 2?\", \"4\")]\nscore = 0\nfor q, answer in questions:\n    guess = input(q + \" \")\n    if guess == answer:\n        score += 1\nprint(f\"Score: {score}/{len(questions)}\")\n",
      mockInput: ["Paris", "4"],
      check: { type: "output", expected: "Capital of France? 2 + 2? Score: 2/2" },
      hints: [
        "Both answers are correct.",
        "Score climbs to 2.",
        "It ends with `Score: 2/2`.",
      ],
      solution: "questions = [(\"Capital of France?\", \"Paris\"), (\"2 + 2?\", \"4\")]\nscore = 0\nfor q, answer in questions:\n    guess = input(q + \" \")\n    if guess == answer:\n        score += 1\nprint(f\"Score: {score}/{len(questions)}\")\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "Change the final line so it reports a percentage instead — `You scored 100%` for a perfect run. Use `int(score / len(questions) * 100)`.",
      starter: "questions = [(\"Capital of France?\", \"Paris\"), (\"2 + 2?\", \"4\")]\nscore = 0\nfor q, answer in questions:\n    guess = input(q + \" \")\n    if guess == answer:\n        score += 1\nprint(f\"Score: {score}/{len(questions)}\")\n",
      mockInput: ["Paris", "4"],
      check: { type: "output", expected: "Capital of France? 2 + 2? You scored 100%" },
      hints: [
        "Only the last line changes.",
        "`score / len * 100` then `int(...)`.",
        "2/2 → 100%.",
      ],
      solution: "questions = [(\"Capital of France?\", \"Paris\"), (\"2 + 2?\", \"4\")]\nscore = 0\nfor q, answer in questions:\n    guess = input(q + \" \")\n    if guess == answer:\n        score += 1\nprint(f\"You scored {int(score / len(questions) * 100)}%\")\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This quiz crashes with a `KeyError: 'Paris'` because it looks up the guess in the answers dict backwards — it should compare, not index. Fix the check so a correct answer scores. (Answer Paris → `Score: 1/1`.)",
      starter: "questions = {\"Capital of France?\": \"Paris\"}\nscore = 0\nfor q in questions:\n    guess = input(q + \" \")\n    if questions[guess] == q:\n        score += 1\nprint(f\"Score: {score}/{len(questions)}\")\n",
      mockInput: ["Paris"],
      check: { type: "output", expected: "Capital of France? Score: 1/1" },
      hints: [
        "`questions[guess]` looks up the guess as a key — it isn't one.",
        "Compare the guess to the stored answer.",
        "`if guess == questions[q]:`",
      ],
      solution: "questions = {\"Capital of France?\": \"Paris\"}\nscore = 0\nfor q in questions:\n    guess = input(q + \" \")\n    if guess == questions[q]:\n        score += 1\nprint(f\"Score: {score}/{len(questions)}\")\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: write a 2-question quiz. Store two `(question, answer)` pairs in a list, loop them reading `input()`, count correct answers, and print `Score: N/2`. (Answers: 4, then blue → `Score: 2/2`.)",
      starter: "",
      mockInput: ["4", "blue"],
      check: { type: "output", expected: "2 + 2? Color of the sky? Score: 2/2" },
      hints: [
        "A list of pairs, a loop, a counter.",
        "Compare each guess to its answer.",
        "Both right → 2/2.",
      ],
      solution: "questions = [(\"2 + 2?\", \"4\"), (\"Color of the sky?\", \"blue\")]\nscore = 0\nfor q, answer in questions:\n    guess = input(q + \" \")\n    if guess == answer:\n        score += 1\nprint(f\"Score: {score}/2\")\n",
    },
  ],
  codex: {
    topic: "a real program",
    pattern: "data = [(q, a), ...]\nfor q, a in data:\n    if input(q) == a: score += 1\nprint(f\"Score: {score}\")",
    note: "A whole program is the pieces you know together: data, a loop, functions, an f-string. Nothing new — just assembled.",
  },
});

/* ── Lesson 8.2 — Planning a program ─────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c8s2",
  chapter: 8,
  strand: "core",
  lang: "py",
  timeBudgetMin: 13,
  title: "Planning a program",
  content: [
    {
      type: "text",
      md: "Real programmers don't start typing — they plan. Read the spec and underline the **nouns** (those become your data) and the **verbs** (those become your functions). \"Read a score and show a grade\" gives data (the score) and functions (`get_score`, `letter_grade`, `display`). Write the function names first as empty stubs, sketch which calls which, *then* fill in the logic one function at a time.",
    },
    {
      type: "example",
      note: "Three small functions, each one job — the shape of the program is clear before any hard logic.",
      code: "def letter_grade(score):\n    if score >= 90:\n        return \"A\"\n    elif score >= 80:\n        return \"B\"\n    else:\n        return \"F\"\n\ndef report(name, score):\n    return f\"{name}: {letter_grade(score)}\"\n\nprint(report(\"Ada\", 92))   # Ada: A\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Trace `report` — it calls `letter_grade`. Predict the line.",
      starter: "def letter_grade(score):\n    if score >= 90:\n        return \"A\"\n    elif score >= 80:\n        return \"B\"\n    else:\n        return \"F\"\n\ndef report(name, score):\n    return f\"{name}: {letter_grade(score)}\"\n\nprint(report(\"Ben\", 85))\n",
      check: { type: "output", expected: "Ben: B" },
      hints: [
        "85 is in the 80s.",
        "That's a B.",
        "`Ben: B`",
      ],
      solution: "def letter_grade(score):\n    if score >= 90:\n        return \"A\"\n    elif score >= 80:\n        return \"B\"\n    else:\n        return \"F\"\n\ndef report(name, score):\n    return f\"{name}: {letter_grade(score)}\"\n\nprint(report(\"Ben\", 85))\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "The design is right but `letter_grade` forgot to `return` in one branch, so a 92 comes back as `None` and prints `Ada: None`. Add the missing `return` so it prints `Ada: A`.",
      starter: "def letter_grade(score):\n    if score >= 90:\n        \"A\"\n    else:\n        return \"F\"\n\ndef report(name, score):\n    return f\"{name}: {letter_grade(score)}\"\n\nprint(report(\"Ada\", 92))\n",
      check: { type: "output", expected: "Ada: A" },
      hints: [
        "The 90+ branch computes `\"A\"` but never returns it.",
        "Add `return`.",
        "`return \"A\"`",
      ],
      solution: "def letter_grade(score):\n    if score >= 90:\n        return \"A\"\n    else:\n        return \"F\"\n\ndef report(name, score):\n    return f\"{name}: {letter_grade(score)}\"\n\nprint(report(\"Ada\", 92))\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "The design is stubbed: `total` and `display` are done, `average` is a stub. Complete `average(scores)` so the program prints `Average: 80.0`.",
      starter: "def total(scores):\n    return sum(scores)\n\ndef average(scores):\n    pass  # return the average\n\ndef display(scores):\n    print(f\"Average: {average(scores)}\")\n\ndisplay([70, 80, 90])\n",
      check: { type: "output", expected: "Average: 80.0" },
      hints: [
        "Reuse `total`.",
        "Divide by the count.",
        "`return total(scores) / len(scores)`",
      ],
      solution: "def total(scores):\n    return sum(scores)\n\ndef average(scores):\n    return total(scores) / len(scores)\n\ndef display(scores):\n    print(f\"Average: {average(scores)}\")\n\ndisplay([70, 80, 90])\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch, design and build a tip calculator. Write `tip(bill, percent)` (returns `bill * percent / 100`) and `total(bill, percent)` (returns `bill + tip(...)`), then print `total(50, 20)`. (50 + 10 = 60.0.)",
      starter: "",
      check: { type: "output", expected: "60.0" },
      hints: [
        "Two functions: one for the tip, one that adds it.",
        "`total` calls `tip`.",
        "50 + 10 = 60.0.",
      ],
      solution: "def tip(bill, percent):\n    return bill * percent / 100\n\ndef total(bill, percent):\n    return bill + tip(bill, percent)\n\nprint(total(50, 20))\n",
    },
  ],
  codex: {
    topic: "planning a program",
    pattern: "# nouns -> data, verbs -> functions\ndef get(...): ...   # stub first\ndef show(...): ...   # then fill in one at a time",
    note: "Plan before typing: nouns become data, verbs become functions. Write the function names as stubs, sketch who calls whom, then fill in one at a time.",
  },
});

/* ── Lesson 8.3 — Handling errors, deeper ────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c8s3",
  chapter: 8,
  strand: "core",
  lang: "py",
  timeBudgetMin: 15,
  title: "Handling errors, deeper",
  content: [
    {
      type: "text",
      md: "`except KeyError as e` names the exception object so you can inspect it. For a missing dict key, `e.args[0]` gives the clean key — `Bob`. Printing `{e}` directly adds quotes (`'Bob'`), a surprise, so use `e.args[0]`.",
    },
    {
      type: "example",
      note: "e is the exception; e.args[0] is the clean missing key.",
      code: "scores = {\"Alice\": 90}\ntry:\n    x = scores[\"Bob\"]\nexcept KeyError as e:\n    print(f\"Missing: {e.args[0]}\")   # Missing: Bob\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Predict the printed line — note `e.args[0]` has no quotes.",
      starter: "scores = {\"Alice\": 90}\ntry:\n    x = scores[\"Bob\"]\nexcept KeyError as e:\n    print(f\"Missing: {e.args[0]}\")\n",
      check: { type: "output", expected: "Missing: Bob" },
      hints: [
        "`scores[\"Bob\"]` raises KeyError.",
        "`e.args[0]` is the key, clean.",
        "`Missing: Bob`",
      ],
      solution: "scores = {\"Alice\": 90}\ntry:\n    x = scores[\"Bob\"]\nexcept KeyError as e:\n    print(f\"Missing: {e.args[0]}\")\n",
    },
    {
      type: "text",
      md: "The `else` clause on a `try` runs **only when no exception happened** — it holds the success path, kept separate from the risky line. It does not run when an exception is caught.",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "`check` returns from `else` on success and from `except` on failure. Predict both lines.",
      starter: "def check(scores, name):\n    try:\n        value = scores[name]\n    except KeyError:\n        return \"missing\"\n    else:\n        return \"found \" + str(value)\n\nprint(check({\"A\": 1}, \"A\"))\nprint(check({\"A\": 1}, \"B\"))\n",
      check: { type: "output", expected: "found 1\nmissing" },
      hints: [
        "'A' exists → the else runs.",
        "'B' doesn't → the except runs.",
        "found 1, then missing.",
      ],
      solution: "def check(scores, name):\n    try:\n        value = scores[name]\n    except KeyError:\n        return \"missing\"\n    else:\n        return \"found \" + str(value)\n\nprint(check({\"A\": 1}, \"A\"))\nprint(check({\"A\": 1}, \"B\"))\n",
    },
    {
      type: "text",
      md: "The `finally` clause runs **no matter what** — success, caught error, even an early `return`. It's for cleanup or a \"done\" signal.",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This should catch a bad number, but it catches `ZeroDivisionError` while the real error from `int(\"x\")` is a `ValueError`, so it still crashes. Fix the `except` class so it prints `not a number`.",
      starter: "try:\n    n = int(input())\n    print(n)\nexcept ZeroDivisionError:\n    print(\"not a number\")\n",
      mockInput: ["x"],
      check: { type: "output", expected: "not a number" },
      hints: [
        "`int(\"x\")` raises ValueError, not a division error.",
        "Match the class.",
        "`except ValueError:`",
      ],
      solution: "try:\n    n = int(input())\n    print(n)\nexcept ValueError:\n    print(\"not a number\")\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete `safe_divide` by adding a `finally` block that prints `done` whether or not the division fails. (It's called twice: 10/2, then 10/0.)",
      starter: "def safe_divide(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return \"nope\"\n    # add a finally that prints \"done\"\n\nprint(safe_divide(10, 2))\nprint(safe_divide(10, 0))\n",
      check: { type: "output", expected: "done\n5.0\ndone\nnope" },
      hints: [
        "`finally` runs even when `return` fires.",
        "It prints before each returned value shows.",
        "done, 5.0, done, nope.",
      ],
      solution: "def safe_divide(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return \"nope\"\n    finally:\n        print(\"done\")\n\nprint(safe_divide(10, 2))\nprint(safe_divide(10, 0))\n",
    },
  ],
  codex: {
    topic: "errors, deeper",
    pattern: "try:\n    ...\nexcept KeyError as e:\n    print(e.args[0])   # clean key\nelse:   # ran if no error\nfinally:  # always runs",
    note: "except X as e names the error (e.args[0] is a clean message). else runs only on success; finally runs no matter what — even after a return.",
  },
});

/* ── Lesson 8.4 — Comprehensions ─────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c8s4",
  chapter: 8,
  strand: "words",
  lang: "py",
  timeBudgetMin: 15,
  title: "Comprehensions",
  glossary: {
    comprehension: "A one-expression way to build a list (or dict) from a loop: `[expr for x in iterable]`, optionally with `if` to filter. The same loop-and-append, folded into one line.",
  },
  content: [
    {
      type: "text",
      md: "A [[comprehension]] builds a whole list in one line: `[expr for x in iterable]`. Add `if` to filter: `[x for x in nums if x > 0]`. It's the same loop-and-append you know, folded into one expression — reach for it only when the logic stays simple.",
    },
    {
      type: "example",
      note: "A transform and a filter, each in one line.",
      code: "print([n * n for n in range(5)])             # [0, 1, 4, 9, 16]\nprint([n for n in range(10) if n % 2 == 0])  # [0, 2, 4, 6, 8]\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Predict both lists.",
      starter: "print([n * n for n in range(5)])\nprint([n for n in range(10) if n % 2 == 0])\n",
      check: { type: "output", expected: "[0, 1, 4, 9, 16]\n[0, 2, 4, 6, 8]" },
      hints: [
        "First squares 0–4.",
        "Second keeps the evens.",
        "[0,1,4,9,16], then [0,2,4,6,8].",
      ],
      solution: "print([n * n for n in range(5)])\nprint([n for n in range(10) if n % 2 == 0])\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "This keeps numbers **above** 50. Change the filter so it keeps numbers **50 or above** instead (so 50 is included).",
      starter: "plays = [40, 50, 60, 30, 90]\nprint([p for p in plays if p > 50])\n",
      check: { type: "output", expected: "[50, 60, 90]" },
      hints: [
        "`>` excludes 50.",
        "Use `>=`.",
        "Now 50 is kept: [50, 60, 90].",
      ],
      solution: "plays = [40, 50, 60, 30, 90]\nprint([p for p in plays if p >= 50])\n",
    },
    {
      type: "text",
      md: "Braces make a **dict** comprehension for transforming: `{w: len(w) for w in words}`. Careful — `{w for w in words}` (no colon) makes a **set**, and `{}` alone is an empty **dict**, not a set. And a dict comprehension can't *count* — for accumulation, keep the `for`+`.get()` loop from Chapter 4.",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "A dict comprehension maps each word to its length. Predict the dict.",
      starter: "words = [\"cat\", \"bird\", \"ox\"]\nprint({w: len(w) for w in words})\n",
      check: { type: "output", expected: "{'cat': 3, 'bird': 4, 'ox': 2}" },
      hints: [
        "Each word maps to its length.",
        "cat→3, bird→4, ox→2.",
        "`{'cat': 3, 'bird': 4, 'ox': 2}`",
      ],
      solution: "words = [\"cat\", \"bird\", \"ox\"]\nprint({w: len(w) for w in words})\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: given `nums = [5, 12, 8, 20, 3, 15]`, use one list comprehension to build and print a list of only the numbers 10 or greater.",
      starter: "",
      check: { type: "output", expected: "[12, 20, 15]" },
      hints: [
        "`[n for n in nums if ...]`.",
        "Keep `n >= 10`.",
        "[12, 20, 15].",
      ],
      solution: "nums = [5, 12, 8, 20, 3, 15]\nprint([n for n in nums if n >= 10])\n",
    },
    {
      type: "text",
      md: "Comprehensions shine for building data to feed your other tools. Build a list of sizes to draw with the turtle, or a melody to play — then loop over it. The comprehension makes the data; the loop uses it.",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: use a list comprehension to build side lengths `[i * 20 for i in range(1, 4)]` (that's `[20, 40, 60]`). Loop them and draw each — `forward(size)` then `right(120)`. After the loop, `play(60)` to finish with a note.",
      starter: "",
      check: {
        type: "calls",
        calls: [
          { fn: "forward", val: 20 }, { fn: "right", val: 120 },
          { fn: "forward", val: 40 }, { fn: "right", val: 120 },
          { fn: "forward", val: 60 }, { fn: "right", val: 120 },
          { fn: "play", note: 60 },
        ],
      },
      hints: [
        "`[i * 20 for i in range(1, 4)]` is [20, 40, 60].",
        "Loop: `forward(size)`, `right(120)`.",
        "Finish with `play(60)`.",
      ],
      solution: "sizes = [i * 20 for i in range(1, 4)]\nfor size in sizes:\n    forward(size)\n    right(120)\nplay(60)\n",
    },
  ],
  codex: {
    topic: "comprehensions",
    pattern: "[n * n for n in range(5)]          # transform\n[n for n in nums if n >= 10]       # filter\n{w: len(w) for w in words}         # dict",
    note: "A comprehension folds loop-and-append into one line: [expr for x in it], add if to filter. Braces with a colon make a dict. Use it for transforms; keep a for-loop for counting.",
  },
});

/* ── Lesson 8.5 — Testing your own code ──────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c8s5",
  chapter: 8,
  strand: "core",
  lang: "py",
  timeBudgetMin: 14,
  title: "Testing your own code",
  content: [
    {
      type: "text",
      md: "`assert condition, \"message\"` checks something you believe is true. If it's false, the program stops with an `AssertionError` and your message. Always include the message — without it, the crash tells you nothing. Group asserts into a `test_*()` function, one behavior per assert.",
    },
    {
      type: "example",
      note: "A passing assert is silent; a failing one names the problem.",
      code: "assert 2 + 2 == 4, \"math is broken\"\nprint(\"passed\")   # this runs; the assert was true\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "The assert is true. Predict what prints.",
      starter: "assert 2 + 2 == 4, \"math is broken\"\nprint(\"passed\")\n",
      check: { type: "output", expected: "passed" },
      hints: [
        "A true assert does nothing visible.",
        "So the print runs.",
        "`passed`",
      ],
      solution: "assert 2 + 2 == 4, \"math is broken\"\nprint(\"passed\")\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "The test fails with `AssertionError` — and the first reflex should be that the **function** is wrong, not the test. `double` adds 2 instead of doubling. Fix `double` so the assert passes and it prints `ok`.",
      starter: "def double(n):\n    return n + 2\n\nassert double(5) == 10, \"double(5) should be 10\"\nprint(\"ok\")\n",
      check: { type: "output", expected: "ok" },
      hints: [
        "`double(5)` gives 7, not 10.",
        "Doubling is `n * 2`.",
        "`return n * 2`",
      ],
      solution: "def double(n):\n    return n * 2\n\nassert double(5) == 10, \"double(5) should be 10\"\nprint(\"ok\")\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete `test_grade` by adding one assert (message form) checking that `letter_grade(95)` is `\"A\"`. The function prints `all passed` when every assert holds.",
      starter: "def letter_grade(score):\n    return \"A\" if score >= 90 else \"B\"\n\ndef test_grade():\n    assert letter_grade(85) == \"B\", \"85 should be B\"\n    # add an assert that 95 is an A\n    print(\"all passed\")\n\ntest_grade()\n",
      check: { type: "output", expected: "all passed" },
      hints: [
        "Copy the pattern of the first assert.",
        "Check `letter_grade(95) == \"A\"`.",
        "Include a message.",
      ],
      solution: "def letter_grade(score):\n    return \"A\" if score >= 90 else \"B\"\n\ndef test_grade():\n    assert letter_grade(85) == \"B\", \"85 should be B\"\n    assert letter_grade(95) == \"A\", \"95 should be A\"\n    print(\"all passed\")\n\ntest_grade()\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: write `add(a, b)` returning `a + b`, then `test_add()` with two asserts (message form) — `add(2, 3) == 5` and `add(0, 0) == 0` — and print `passed` at the end. Call `test_add()`.",
      starter: "",
      check: { type: "output", expected: "passed" },
      hints: [
        "`add` returns the sum.",
        "Two asserts, each with a message.",
        "Print `passed` after them.",
      ],
      solution: "def add(a, b):\n    return a + b\n\ndef test_add():\n    assert add(2, 3) == 5, \"2 + 3 should be 5\"\n    assert add(0, 0) == 0, \"0 + 0 should be 0\"\n    print(\"passed\")\n\ntest_add()\n",
    },
  ],
  codex: {
    topic: "testing your own code",
    pattern: "assert double(5) == 10, \"double(5) should be 10\"\ndef test_double():\n    assert ...\n    print(\"passed\")",
    note: "assert condition, \"message\" stops with AssertionError if false — always give a message. Group asserts in a test_*() function, one behavior each. A failing test usually means the function is wrong.",
  },
});

/* ── Lesson 8.6 — raise + a real project ─────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c8s6",
  chapter: 8,
  strand: "words",
  lang: "py",
  timeBudgetMin: 15,
  title: "raise + a real project",
  content: [
    {
      type: "text",
      md: "Your own functions can `raise` an error when given bad input — `raise ValueError(\"Input cannot be empty\")` stops the program with your message, exactly like a built-in error. A validator that raises early keeps the rest of the program clean.",
    },
    {
      type: "example",
      note: "A validator raises; the caller catches it and reads the message.",
      code: "def validate(text):\n    if text == \"\":\n        raise ValueError(\"Input cannot be empty\")\n    return text\n\ntry:\n    validate(\"\")\nexcept ValueError as e:\n    print(e.args[0])   # Input cannot be empty\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Predict the printed line.",
      starter: "def validate(text):\n    if text == \"\":\n        raise ValueError(\"Input cannot be empty\")\n    return text\n\ntry:\n    validate(\"\")\nexcept ValueError as e:\n    print(e.args[0])\n",
      check: { type: "output", expected: "Input cannot be empty" },
      hints: [
        "Empty text triggers the raise.",
        "The except reads `e.args[0]`.",
        "`Input cannot be empty`",
      ],
      solution: "def validate(text):\n    if text == \"\":\n        raise ValueError(\"Input cannot be empty\")\n    return text\n\ntry:\n    validate(\"\")\nexcept ValueError as e:\n    print(e.args[0])\n",
    },
    {
      type: "text",
      md: "Now the project: count how often each word appears. Build the frequency dict with the `for`+`.get()` accumulator from Chapter 4 (a dict comprehension can't count). To find the top word without `lambda`, pass `freq.get` — the function itself, no parentheses — as the `key` to `sorted`, with `reverse=True`.",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete the frequency counter: fill the accumulator line so each word's count grows. (`\"the the cat\"` → the:2, cat:1, so `the` has count 2.)",
      starter: "def word_freq(text):\n    freq = {}\n    for w in text.split():\n        # add 1 to this word's count\n        pass\n    return freq\n\nprint(word_freq(\"the the cat\")[\"the\"])\n",
      check: { type: "output", expected: "2" },
      hints: [
        "Use `.get(w, 0)` for the current count.",
        "Add 1 and store it back.",
        "`freq[w] = freq.get(w, 0) + 1`",
      ],
      solution: "def word_freq(text):\n    freq = {}\n    for w in text.split():\n        freq[w] = freq.get(w, 0) + 1\n    return freq\n\nprint(word_freq(\"the the cat\")[\"the\"])\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This finds the top word but crashes with `TypeError` because `key=freq.get()` calls the function with no arguments. Pass the function itself — `freq.get` with **no** parentheses. (Top word is `the`.)",
      starter: "freq = {\"the\": 3, \"cat\": 2, \"sat\": 1}\ntop = sorted(freq, key=freq.get(), reverse=True)[0]\nprint(top)\n",
      check: { type: "output", expected: "the" },
      hints: [
        "`freq.get()` calls it; you want the function.",
        "Drop the parentheses.",
        "`key=freq.get`",
      ],
      solution: "freq = {\"the\": 3, \"cat\": 2, \"sat\": 1}\ntop = sorted(freq, key=freq.get, reverse=True)[0]\nprint(top)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: write `top_word(text)` that counts words (with the `for`+`.get()` pattern) and returns the most frequent one (`sorted(freq, key=freq.get, reverse=True)[0]`). It should `raise ValueError(\"empty\")` if the text is empty. Print `top_word(\"the the cat sat\")`.",
      starter: "",
      check: { type: "output", expected: "the" },
      hints: [
        "Guard the empty case with `raise`.",
        "Count with `.get()`, then sort by `freq.get`.",
        "`the` appears twice — it wins.",
      ],
      solution: "def top_word(text):\n    if text == \"\":\n        raise ValueError(\"empty\")\n    freq = {}\n    for w in text.split():\n        freq[w] = freq.get(w, 0) + 1\n    return sorted(freq, key=freq.get, reverse=True)[0]\n\nprint(top_word(\"the the cat sat\"))\n",
    },
  ],
  codex: {
    topic: "raise + word frequency",
    pattern: "raise ValueError(\"empty\")\nfreq[w] = freq.get(w, 0) + 1\nsorted(freq, key=freq.get, reverse=True)[0]",
    note: "raise signals a bad input with your own message. Count with the for+.get() accumulator; a dict comprehension can't count. Sort by a function passed bare: key=freq.get (no parentheses).",
  },
});

/* ── Lesson 8.7 — Finale: the chapter challenge (cumulative) ─────────── */

window.CODELAB.lessons.push({
  id: "c8s7",
  chapter: 8,
  strand: "data",
  lang: "py",
  timeBudgetMin: 18,
  title: "Finale: the chapter challenge",
  content: [
    {
      type: "text",
      md: "The last thing this chapter builds is a program you write, test, and trust — planned into functions, made robust with `try`/`except`, and checked with your own asserts. Read the worked example, then build three of your own.",
    },
    {
      type: "example",
      note: "flatten with a for+.extend() loop — never a nested comprehension — and a test that proves it.",
      code: "def flatten(list_of_lists):\n    result = []\n    for sub in list_of_lists:\n        result.extend(sub)\n    return result\n\ndef test_flatten():\n    assert flatten([]) == [], \"empty should stay empty\"\n    assert flatten([[1, 2], [3]]) == [1, 2, 3], \"should merge sublists\"\n    print(\"passed\")\n\ntest_flatten()   # passed\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete `flatten` by filling the loop body so each sublist's items are added to `result`. Use `.extend()`, not a comprehension. (`[[1,2],[3,4],[5]]` → `[1, 2, 3, 4, 5]`.)",
      starter: "def flatten(list_of_lists):\n    result = []\n    for sub in list_of_lists:\n        # add every item of sub to result\n        pass\n    return result\n\nprint(flatten([[1, 2], [3, 4], [5]]))\n",
      check: { type: "output", expected: "[1, 2, 3, 4, 5]" },
      hints: [
        "`.extend` adds every item of a list.",
        "`result.extend(sub)`.",
        "Flattens to [1,2,3,4,5].",
      ],
      solution: "def flatten(list_of_lists):\n    result = []\n    for sub in list_of_lists:\n        result.extend(sub)\n    return result\n\nprint(flatten([[1, 2], [3, 4], [5]]))\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: write `safe_int(prompt, lo, hi)` — a `while True` loop that reads `int(input(prompt))`, and if the number is between `lo` and `hi` returns it, otherwise `raise ValueError(\"out of range\")`. Catch bad text or an out-of-range value with `try`/`except ValueError`, print `Try again.`, and loop. Print `safe_int(\"Pick: \", 1, 10)`. (Inputs: `abc`, then `7`.)",
      starter: "",
      mockInput: ["abc", "7"],
      check: { type: "output", expected: "Pick: Try again.\nPick: 7" },
      hints: [
        "`while True` + `try` + `int(input(prompt))`.",
        "Raise when out of range; the except prints `Try again.` and loops.",
        "`abc` retries, `7` returns.",
      ],
      solution: "def safe_int(prompt, lo, hi):\n    while True:\n        try:\n            n = int(input(prompt))\n            if n < lo or n > hi:\n                raise ValueError(\"out of range\")\n            return n\n        except ValueError:\n            print(\"Try again.\")\n\nprint(safe_int(\"Pick: \", 1, 10))\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: write `flatten(list_of_lists)` (a `for`+`.extend()` loop), then `test_flatten()` with three asserts (message form) — empty input `[]`, a single sublist `[[1]]`, and two sublists `[[1,2],[3]]` — and print `passed`. Call `test_flatten()`.",
      starter: "",
      check: { type: "output", expected: "passed" },
      hints: [
        "Write `flatten` with `.extend()`.",
        "Three asserts, each with a message.",
        "All pass → `passed`.",
      ],
      solution: "def flatten(list_of_lists):\n    result = []\n    for sub in list_of_lists:\n        result.extend(sub)\n    return result\n\ndef test_flatten():\n    assert flatten([]) == [], \"empty should stay empty\"\n    assert flatten([[1]]) == [1], \"single sublist\"\n    assert flatten([[1, 2], [3]]) == [1, 2, 3], \"two sublists\"\n    print(\"passed\")\n\ntest_flatten()\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch — the capstone. Given `grades = {\"Ada\": [90, 80], \"Ben\": [70, 60]}`, use a **dict comprehension** to build `averages` mapping each name to its average, write `top_student(averages)` returning the name with the highest average, and look up a missing name with `try`/`except KeyError as e` printing `No student: <name>`. Print Ada's average, the top student, then look up `\"Cid\"`.",
      starter: "",
      check: { type: "output", expected: "85.0\nAda\nNo student: Cid" },
      hints: [
        "Dict comprehension for the averages (a transformation).",
        "`top_student` loops and tracks the best.",
        "The missing lookup raises KeyError; read `e.args[0]`.",
      ],
      solution: "grades = {\"Ada\": [90, 80], \"Ben\": [70, 60]}\n\naverages = {name: sum(scores) / len(scores) for name, scores in grades.items()}\n\ndef top_student(averages):\n    best = None\n    for name in averages:\n        if best is None or averages[name] > averages[best]:\n            best = name\n    return best\n\nprint(averages[\"Ada\"])\nprint(top_student(averages))\n\ntry:\n    print(averages[\"Cid\"])\nexcept KeyError as e:\n    print(\"No student:\", e.args[0])\n",
    },
  ],
  codex: {
    topic: "the chapter challenge",
    pattern: "plan -> functions\ntry/except for safety\nassert in test_*() to trust it",
    note: "A complete program: planned into functions, made robust with try/except and raise, and checked with your own asserts. The whole Python track, in one screen.",
  },
});
