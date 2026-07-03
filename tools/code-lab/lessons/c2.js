/* Chapter 2 — Decisions & Loops
   Rebuilt to CODELAB_FULL_REPORT.md + CODELAB_CH2_REBUILT.md.
   Lessons: c2s1 Comparisons & booleans · c2s2 if / else · c2s3 Truthiness ·
            c2s4 elif · c2s5 while · c2s6 for and range ·
            c2s7 Loops make art & beats · c2s8 Reading errors & debugging ·
            c2s9 try / except · c2s10 Finale: Guess & Grade */

/* ── Lesson 2.1 — Comparisons & booleans ─────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c2s1",
  chapter: 2,
  strand: "core",
  lang: "py",
  timeBudgetMin: 23,
  title: "Comparisons & booleans",
  glossary: {
    comparison: "A question with a True/False answer, like `age >= 13`. Python works it out to True or False, just like it works out a sum to a number.",
  },
  content: [
    {
      type: "text",
      md: "Programs make choices, and every choice starts with a question. A [[comparison]] asks one and Python answers it with `True` or `False`.",
    },
    {
      type: "example",
      note: "A comparison is a question with a True/False answer. Change age and run again.",
      code: "age = 15\nprint(age >= 13)   # True\nprint(age >= 18)   # False\n",
    },
    {
      type: "text",
      md: "You've used `=` to store a value. `==` is different: it asks \"are these equal?\" The six comparisons are `==` (equal), `!=` (not equal), `<`, `>`, `<=`, and `>=`. Types matter — `\"7\" == 7` is `False`, because the text isn't the number.",
    },
    {
      type: "example",
      note: "Each line is a question Python answers True or False.",
      code: "print(5 > 3)       # True\nprint(5 == 5)      # True\nprint(5 != 5)      # False\nprint(\"7\" == 7)    # False — text isn't the number\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Predict True or False for each line — watch the types on line 4. Then run.",
      starter: "print(5 > 3)\nprint(5 < 3)\nprint(5 == 5)\nprint(\"7\" == 7)\nprint(10 >= 10)\n",
      check: { type: "output", expected: "True\nFalse\nTrue\nFalse\nTrue" },
      hints: [
        "`>=` includes equal.",
        "Line 4 compares text to a number.",
        "True, False, True, False, True.",
      ],
      solution: "print(5 > 3)\nprint(5 < 3)\nprint(5 == 5)\nprint(\"7\" == 7)\nprint(10 >= 10)\n",
    },
    {
      type: "text",
      md: "Combine questions with **and**, **or**, **not**. `and` needs both sides true, `or` needs at least one, `not` flips a single answer.",
    },
    {
      type: "example",
      note: "Three combined questions. Work each out before running.",
      code: "age = 15\nprint(age >= 13 and age < 18)   # True\nprint(age < 10 or age >= 13)    # True\nprint(not age >= 18)            # True\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "This checks whether `n` is between 10 and 20. Change the two numbers so it checks between 1 and 100 instead. (n is 50, so it should print True.)",
      starter: "n = 50\nprint(n >= 10 and n <= 20)\n",
      check: { type: "output", expected: "True" },
      hints: [
        "Two numbers to change.",
        "1 on the low side, 100 on the high side.",
        "print(n >= 1 and n <= 100)",
      ],
      solution: "n = 50\nprint(n >= 1 and n <= 100)\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This is meant to check if `x` is 1 or 2, but `x == 1 or 2` doesn't do that — run it and you'll see it prints `2`, not a yes/no answer. Each side of `or` needs its own full comparison. With x = 99 it should print `False`.",
      starter: "x = 99\nprint(x == 1 or 2)\n",
      check: { type: "output", expected: "False" },
      hints: [
        "`or 2` isn't a comparison — 2 on its own always counts as true.",
        "Write the second check in full.",
        "print(x == 1 or x == 2)",
      ],
      solution: "x = 99\nprint(x == 1 or x == 2)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: store a temperature of 25 in `temp`. Print whether it's nice out — that is, whether temp is between 18 and 28 inclusive. It should print `True`.",
      starter: "",
      check: { type: "output", expected: "True" },
      hints: [
        "Two comparisons joined with `and`.",
        "Use `>=` and `<=` for inclusive.",
        "print(temp >= 18 and temp <= 28)",
      ],
      solution: "temp = 25\nprint(temp >= 18 and temp <= 28)\n",
    },
  ],
  codex: {
    topic: "comparisons & booleans",
    pattern: "a == b   a != b   a < b\na and b   a or b   not a",
    note: "A comparison asks a True/False question. == tests equality; = assigns. and needs both sides true, or needs at least one, not flips a single answer.",
  },
});

/* ── Lesson 2.2 — if / else ──────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c2s2",
  chapter: 2,
  strand: "core",
  lang: "py",
  timeBudgetMin: 25,
  title: "if / else",
  glossary: {
    "if": "A statement that runs an indented block only when its condition is true.",
    "else": "The block that runs when the if condition is false. Exactly one of if/else runs.",
    branch: "One of the two paths through an if/else — the indented block that runs when the condition is true, or the else block that runs when it is false. Exactly one branch runs.",
  },
  content: [
    {
      type: "text",
      md: "A comparison gives `True` or `False`. [[if]] uses that answer to choose what the program does next.",
    },
    {
      type: "example",
      note: "If the condition is true, the first block runs; otherwise the `else` block. Change rain to 20 and run again.",
      code: "rain = 70\nif rain >= 50:\n    print(\"Bring an umbrella\")\nelse:\n    print(\"Leave it home\")\n",
    },
    {
      type: "text",
      md: "The `if` line ends with a colon, and the lines inside are indented four spaces — that's how Python knows they belong to the `if`. [[else]] catches everything the `if` didn't.",
    },
    {
      type: "text",
      md: "Exactly one [[branch]] runs — never both. And any code *after* the if/else runs no matter which branch fired.",
    },
    {
      type: "example",
      note: "The last line prints every time — it's outside the if/else.",
      code: "score = 85\nif score >= 60:\n    print(\"Passed\")\nelse:\n    print(\"Try again\")\nprint(\"Done\")\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "`n % 2` is 0 for even numbers (you saw `%` in Chapter 1). Trace this for n = 4 and predict what prints.",
      starter: "n = 4\nif n % 2 == 0:\n    print(\"even\")\nelse:\n    print(\"odd\")\n",
      check: { type: "output", expected: "even" },
      hints: [
        "4 % 2 is 0.",
        "0 == 0 is True.",
        "It prints even.",
      ],
      solution: "n = 4\nif n % 2 == 0:\n    print(\"even\")\nelse:\n    print(\"odd\")\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "This brings an umbrella at 50% rain or higher. Make it stricter — 70% or higher. (rain is 60, so it should now print the leave-it message.)",
      starter: "rain = 60\nif rain >= 50:\n    print(\"Bring an umbrella\")\nelse:\n    print(\"Leave it home\")\n",
      check: { type: "output", expected: "Leave it home" },
      hints: [
        "Only the number in the condition changes.",
        "50 becomes 70.",
        "60 >= 70 is False, so the else runs.",
      ],
      solution: "rain = 60\nif rain >= 70:\n    print(\"Bring an umbrella\")\nelse:\n    print(\"Leave it home\")\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This crashes. The `if` line is missing the colon Python needs at the end. Add it so the program prints `Passed`.",
      starter: "score = 75\nif score >= 60\n    print(\"Passed\")\nelse:\n    print(\"Try again\")\n",
      check: { type: "output", expected: "Passed" },
      hints: [
        "Every `if` line ends with something.",
        "It's a colon.",
        "if score >= 60:",
      ],
      solution: "score = 75\nif score >= 60:\n    print(\"Passed\")\nelse:\n    print(\"Try again\")\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete the discount checker. If price is 50 or more, print `Discount!`; otherwise print `Full price`. Fill in the two prints.",
      starter: "price = 60\nif price >= 50:\n    pass\nelse:\n    pass\n",
      check: { type: "output", expected: "Discount!" },
      hints: [
        "Replace each `pass` with a print.",
        "price is 60, so the if branch runs.",
        "print(\"Discount!\")",
      ],
      solution: "price = 60\nif price >= 50:\n    print(\"Discount!\")\nelse:\n    print(\"Full price\")\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: store a temperature of 12 in `temp`. If it's below 15, print `Bring a jacket`; otherwise print `You're fine`.",
      starter: "",
      check: { type: "output", expected: "Bring a jacket" },
      hints: [
        "Condition is `temp < 15`.",
        "Two branches, one print each.",
        "12 < 15 is True.",
      ],
      solution: "temp = 12\nif temp < 15:\n    print(\"Bring a jacket\")\nelse:\n    print(\"You're fine\")\n",
    },
  ],
  codex: {
    topic: "if / else",
    pattern: "if condition:\n    ...      # runs when true\nelse:\n    ...      # runs when false",
    note: "if runs its indented block when the condition is true; else runs when it's false. Exactly one branch runs. The if and else lines end with a colon.",
  },
});

/* ── Lesson 2.3 — Truthiness ─────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c2s3",
  chapter: 2,
  strand: "core",
  lang: "py",
  timeBudgetMin: 18,
  title: "Truthiness",
  content: [
    {
      type: "text",
      md: "`if` doesn't need a strict `True` or `False` — it takes any value and decides whether it \"counts as\" true.",
    },
    {
      type: "text",
      md: "These count as **false**: `False`, `0`, `0.0`, the empty string `\"\"`, and `None`. Everything else counts as **true** — any number that isn't zero, any text that isn't empty.",
    },
    {
      type: "example",
      note: "bool() shows what a value counts as.",
      code: "print(bool(0))     # False\nprint(bool(\"\"))    # False\nprint(bool(42))    # True\nprint(bool(\"hi\"))  # True\n",
    },
    {
      type: "text",
      md: "This lets you write `if name:` to mean \"if name isn't empty,\" instead of the longer `if name != \"\":`. Both work; the short one is common.",
    },
    {
      type: "example",
      note: "name isn't empty, so it counts as true.",
      code: "name = \"Alex\"\nif name:\n    print(\"Got a name:\", name)\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Predict each line, then run.",
      starter: "print(bool(0))\nprint(bool(\"no\"))\nprint(bool(\"\"))\nprint(bool(100))\n",
      check: { type: "output", expected: "False\nTrue\nFalse\nTrue" },
      hints: [
        "0 and empty string count as false.",
        "Any non-empty text counts as true.",
        "False, True, False, True.",
      ],
      solution: "print(bool(0))\nprint(bool(\"no\"))\nprint(bool(\"\"))\nprint(bool(100))\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete the check so it prints `empty!` only when `text` has nothing in it. Use `if not text:`.",
      starter: "text = \"\"\n# print \"empty!\" if text is empty\n",
      check: { type: "output", expected: "empty!" },
      hints: [
        "An empty string counts as false.",
        "`not` flips it to true.",
        "if not text:",
      ],
      solution: "text = \"\"\nif not text:\n    print(\"empty!\")\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: store an empty string in `answer`. Using `if answer:` / `else:`, print `You answered!` if it isn't empty, or `No answer yet.` if it is. (It's empty, so it prints the second.)",
      starter: "",
      check: { type: "output", expected: "No answer yet." },
      hints: [
        "An empty string counts as false, so the else runs.",
        "No need for `== \"\"`.",
        "if answer:",
      ],
      solution: "answer = \"\"\nif answer:\n    print(\"You answered!\")\nelse:\n    print(\"No answer yet.\")\n",
    },
  ],
  codex: {
    topic: "truthiness",
    pattern: "if name:       # true when not empty\nif not text:   # true when empty",
    note: "if accepts any value, not just True/False. Falsy: False, 0, 0.0, \"\", None. Everything else is truthy.",
  },
});

/* ── Lesson 2.4 — elif: many branches ────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c2s4",
  chapter: 2,
  strand: "data",
  lang: "py",
  timeBudgetMin: 20,
  title: "elif: many branches",
  glossary: {
    elif: "Short for 'else if' — an extra condition checked only when the ones above it were false.",
  },
  content: [
    {
      type: "text",
      md: "Two choices is `if`/`else`. For more, [[elif]] adds extra conditions in between. Python checks them top to bottom and runs the **first** one that's true, then skips the rest.",
    },
    {
      type: "example",
      note: "Four branches. Try different scores to see which fires.",
      code: "score = 85\nif score >= 90:\n    print(\"A\")\nelif score >= 80:\n    print(\"B\")\nelif score >= 70:\n    print(\"C\")\nelse:\n    print(\"F\")\n",
    },
    {
      type: "text",
      md: "Because only the first true branch runs, **order matters**. Go from most specific to least: put `>= 90` before `>= 80`, or a 95 would match the lower one first and never reach the top.",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Trace this for score = 72 and predict what prints.",
      starter: "score = 72\nif score >= 90:\n    print(\"A\")\nelif score >= 70:\n    print(\"C\")\nelse:\n    print(\"F\")\n",
      check: { type: "output", expected: "C" },
      hints: [
        "72 isn't >= 90.",
        "72 is >= 70.",
        "It prints C.",
      ],
      solution: "score = 72\nif score >= 90:\n    print(\"A\")\nelif score >= 70:\n    print(\"C\")\nelse:\n    print(\"F\")\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete the password checker: `Weak` under 6 characters, `OK` for 6–9, `Strong` for 10 or more. Fill in the two conditions. (The password has 8 characters, so it prints OK.)",
      starter: "pw = \"hello123\"\nn = len(pw)\nif ___:\n    print(\"Weak\")\nelif ___:\n    print(\"OK\")\nelse:\n    print(\"Strong\")\n",
      check: { type: "output", expected: "OK" },
      hints: [
        "First condition: fewer than 6.",
        "Second: fewer than 10 (6–9).",
        "`n < 6` then `n < 10`.",
      ],
      solution: "pw = \"hello123\"\nn = len(pw)\nif n < 6:\n    print(\"Weak\")\nelif n < 10:\n    print(\"OK\")\nelse:\n    print(\"Strong\")\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This grade checker is in the wrong order, so a 92 prints `Average` instead of `Excellent`. Reorder the branches from highest to lowest so 92 prints `Excellent`.",
      starter: "score = 92\nif score >= 60:\n    print(\"Average\")\nelif score >= 80:\n    print(\"Good\")\nelif score >= 90:\n    print(\"Excellent\")\n",
      check: { type: "output", expected: "Excellent" },
      hints: [
        "The broadest condition is firing first.",
        "Put `>= 90` at the top.",
        "Highest to lowest.",
      ],
      solution: "score = 92\nif score >= 90:\n    print(\"Excellent\")\nelif score >= 80:\n    print(\"Good\")\nelif score >= 60:\n    print(\"Average\")\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: store a temperature of 30 in `temp`. Print `Hot` if it's 28 or more, `Nice` if 18–27, `Cold` if below 18. Use if / elif / else. (30 → Hot.)",
      starter: "",
      check: { type: "output", expected: "Hot" },
      hints: [
        "Highest band first.",
        "`>= 28`, then `>= 18`, else Cold.",
        "30 >= 28 is True.",
      ],
      solution: "temp = 30\nif temp >= 28:\n    print(\"Hot\")\nelif temp >= 18:\n    print(\"Nice\")\nelse:\n    print(\"Cold\")\n",
    },
  ],
  codex: {
    topic: "elif",
    pattern: "if a:\n    ...\nelif b:\n    ...\nelse:\n    ...",
    note: "elif adds more branches. Python runs the first true one and skips the rest, so order from most specific to least.",
  },
});

/* ── Lesson 2.5 — while loops ────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c2s5",
  chapter: 2,
  strand: "sound",
  lang: "py",
  timeBudgetMin: 25,
  title: "while loops",
  glossary: {
    "while": "A loop that repeats its body as long as its condition stays true.",
    "infinite loop": "A loop whose condition never becomes false, so it never stops on its own — you have to interrupt it.",
    "break": "A statement that stops a loop immediately, jumping out of it.",
    accumulator: "A running total you build up in a loop: start a variable at 0, add to it each time around, and read it once after the loop ends.",
  },
  content: [
    {
      type: "text",
      md: "A [[while]] loop repeats its body as long as its condition stays true.",
    },
    {
      type: "example",
      note: "Each time around, check n > 0; if true, run the body. n -= 1 moves toward the end. Forget that line and it loops forever — hit Stop.",
      code: "n = 5\nwhile n > 0:\n    print(n)\n    n -= 1\nprint(\"Blastoff!\")\n",
    },
    {
      type: "text",
      md: "A while loop has three parts: set the variable before, test it at the top, and change it inside. Miss the update and the condition never becomes false — an [[infinite loop]]. Click Stop, then add the missing change.",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Predict every line this prints.",
      starter: "n = 3\nwhile n > 0:\n    print(n)\n    n -= 1\nprint(\"Done\")\n",
      check: { type: "output", expected: "3\n2\n1\nDone" },
      hints: [
        "Prints n, then drops it by 1.",
        "Stops when n hits 0.",
        "3, 2, 1, Done.",
      ],
      solution: "n = 3\nwhile n > 0:\n    print(n)\n    n -= 1\nprint(\"Done\")\n",
    },
    {
      type: "text",
      md: "The most useful pattern is the [[accumulator]]. You start a total at 0. You add to it each time around the loop. You read it once, after the loop ends.",
    },
    {
      type: "example",
      note: "total grows each time; you read it once, after the loop.",
      code: "total = 0\nn = 1\nwhile n <= 5:\n    total += n\n    n += 1\nprint(total)   # 15\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This loops forever because nothing changes `n`. Click Stop, then add the missing line so it counts down from 3 and prints Done.",
      starter: "n = 3\nwhile n > 0:\n    print(n)\nprint(\"Done\")\n",
      check: { type: "output", expected: "3\n2\n1\nDone" },
      hints: [
        "The condition uses `n`, but `n` never changes.",
        "Lower it inside the loop.",
        "n -= 1",
      ],
      solution: "n = 3\nwhile n > 0:\n    print(n)\n    n -= 1\nprint(\"Done\")\n",
    },
    {
      type: "text",
      md: "`while True:` runs forever until a [[break]] stops it — handy for \"keep going until…\". Here it climbs a note each beat until it passes 67.",
    },
    {
      type: "example",
      note: "Plays 60, 62, 64, 66 — climbs by whole steps, then stops.",
      code: "note = 60\nwhile note <= 67:\n    play(note)\n    sleep(0.5)\n    note += 2\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete the accumulator: keep reading numbers and adding them until the total reaches 50 or more, then print it. Add the line that adds `x` to `total`. (Inputs 20, 20, 20 → 60.)",
      starter: "total = 0\nwhile total < 50:\n    x = int(input())\n    # add x to total\nprint(total)\n",
      mockInput: ["20", "20", "20"],
      check: { type: "output", expected: "60" },
      hints: [
        "`x` holds the number just read.",
        "Add it to the running total.",
        "total += x",
      ],
      solution: "total = 0\nwhile total < 50:\n    x = int(input())\n    total += x\nprint(total)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: play a descending tune. Start at note 72 and, while the note is 60 or higher, play it and drop by 3 (`note -= 3`), with `sleep(0.5)` between. (Plays 72, 69, 66, 63, 60.)",
      starter: "",
      check: {
        type: "calls",
        calls: [
          { fn: "play", note: 72 },
          { fn: "play", note: 69 },
          { fn: "play", note: 66 },
          { fn: "play", note: 63 },
          { fn: "play", note: 60 },
        ],
      },
      hints: [
        "Start at 72, condition `note >= 60`.",
        "Drop by 3 each time.",
        "note -= 3",
      ],
      solution: "note = 72\nwhile note >= 60:\n    play(note)\n    sleep(0.5)\n    note -= 3\n",
    },
  ],
  codex: {
    topic: "while loops",
    pattern: "n = 5\nwhile n > 0:\n    print(n)\n    n -= 1",
    note: "while repeats while its condition is true. Set the variable before, test at the top, change it inside — miss the update and it loops forever. Accumulator: start a total at 0 and add each time.",
  },
});

/* ── Lesson 2.6 — for and range ──────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c2s6",
  chapter: 2,
  strand: "plot",
  lang: "py",
  timeBudgetMin: 22,
  title: "for and range",
  glossary: {
    "for": "A loop that runs once for each item in a sequence — like each number that range produces.",
    range: "A built-in that produces a sequence of numbers to loop over. range(stop) counts from 0 up to but not including stop.",
  },
  content: [
    {
      type: "text",
      md: "A [[for]] loop counts for you. `for i in range(5):` runs five times with `i` equal to 0, 1, 2, 3, 4. You can't forget to update a counter, so it's cleaner than `while` when you know the count.",
    },
    {
      type: "example",
      note: "range(5) gives 0 to 4 — five numbers, but 5 itself is left out.",
      code: "for i in range(5):\n    print(i)\n",
    },
    {
      type: "text",
      md: "[[range]] has three forms: `range(stop)` starts at 0; `range(start, stop)`; `range(start, stop, step)`. The stop is never included — `range(2, 10, 2)` is 2, 4, 6, 8. If you don't need the number, name it `_`.",
    },
    {
      type: "example",
      note: "The same loop shape draws a shape and plays a scale.",
      code: "# draw a square\nfor _ in range(4):\n    forward(100)\n    right(90)\n\n# play the notes 60 to 67\nfor note in range(60, 68):\n    play(note)\n    sleep(0.3)\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Predict the exact numbers this prints.",
      starter: "for n in range(2, 10, 2):\n    print(n)\n",
      check: { type: "output", expected: "2\n4\n6\n8" },
      hints: [
        "Start 2, step 2.",
        "Stop at 10, not including it.",
        "2, 4, 6, 8.",
      ],
      solution: "for n in range(2, 10, 2):\n    print(n)\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "This loop draws a square (4 sides, 90° turns). Change it to a hexagon: 6 sides, turning 360 ÷ 6 = 60° each.",
      starter: "for _ in range(4):\n    forward(100)\n    right(90)\n",
      check: {
        type: "calls",
        calls: [
          { fn: "forward", val: 100 }, { fn: "right", val: 60 },
          { fn: "forward", val: 100 }, { fn: "right", val: 60 },
          { fn: "forward", val: 100 }, { fn: "right", val: 60 },
          { fn: "forward", val: 100 }, { fn: "right", val: 60 },
          { fn: "forward", val: 100 }, { fn: "right", val: 60 },
          { fn: "forward", val: 100 }, { fn: "right", val: 60 },
        ],
      },
      hints: [
        "Change the count and the turn.",
        "6 sides, 60° each.",
        "`range(6)` and `right(60)`.",
      ],
      solution: "for _ in range(6):\n    forward(100)\n    right(60)\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "The loop variable `i` changes each time. Predict what this prints.",
      starter: "for i in range(4):\n    print(i * 10)\n",
      check: { type: "output", expected: "0\n10\n20\n30" },
      hints: [
        "i is 0, 1, 2, 3.",
        "Each is multiplied by 10.",
        "0, 10, 20, 30.",
      ],
      solution: "for i in range(4):\n    print(i * 10)\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete the loop so it plays every note from 60 up to and including 67, with `sleep(0.3)` after each.",
      starter: "for note in range(60, ___):\n    pass  # play note, then sleep 0.3\n",
      check: {
        type: "calls",
        calls: [
          { fn: "play", note: 60 },
          { fn: "play", note: 61 },
          { fn: "play", note: 62 },
          { fn: "play", note: 63 },
          { fn: "play", note: 64 },
          { fn: "play", note: 65 },
          { fn: "play", note: 66 },
          { fn: "play", note: 67 },
        ],
      },
      hints: [
        "Stop is not included, so use 68 to reach 67.",
        "Play the note, then sleep.",
        "`range(60, 68)`",
      ],
      solution: "for note in range(60, 68):\n    play(note)\n    sleep(0.3)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: use a for loop to draw a triangle — 3 sides of 100, turning 120° each. Use `_` since you don't need the count.",
      starter: "",
      check: {
        type: "calls",
        calls: [
          { fn: "forward", val: 100 }, { fn: "right", val: 120 },
          { fn: "forward", val: 100 }, { fn: "right", val: 120 },
          { fn: "forward", val: 100 }, { fn: "right", val: 120 },
        ],
      },
      hints: [
        "3 sides.",
        "360 ÷ 3 = 120.",
        "for _ in range(3):",
      ],
      solution: "for _ in range(3):\n    forward(100)\n    right(120)\n",
    },
  ],
  codex: {
    topic: "for and range",
    pattern: "for i in range(5):      # 0,1,2,3,4\nfor n in range(2,10,2): # 2,4,6,8",
    note: "for counts for you. range(stop) starts at 0; range(start, stop, step). The stop is never included. Use _ when you don't need the number.",
  },
});

/* ── Lesson 2.7 — Loops make art & beats ─────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c2s7",
  chapter: 2,
  strand: "sound",
  lang: "py",
  timeBudgetMin: 22,
  title: "Loops make art & beats",
  content: [
    {
      type: "text",
      md: "When the loop variable feeds into what you draw or play, patterns appear. `forward(i * 4)` means a longer line every step — that's what turns a circle into a spiral.",
    },
    {
      type: "example",
      note: "The step length grows with i, so the path winds outward.",
      code: "for i in range(30):\n    forward(i * 4)\n    right(91)\n",
    },
    {
      type: "text",
      md: "Mix in `%` (from Chapter 1) to cycle: `i % 3` is 0, 1, 2, 0, 1, 2… — perfect for rotating through three colours.",
    },
    {
      type: "example",
      note: "A spiral that changes colour every step.",
      code: "for i in range(18):\n    if i % 3 == 0:\n        pencolor(\"red\")\n    elif i % 3 == 1:\n        pencolor(\"blue\")\n    else:\n        pencolor(\"green\")\n    forward(i * 6)\n    right(91)\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This should spiral outward, but every line is the same length so it draws a rough circle. Fix the `forward` call so the length grows with `i`.",
      starter: "for i in range(6):\n    forward(50)\n    right(91)\n",
      check: {
        type: "calls",
        calls: [
          { fn: "forward", val: 0 },  { fn: "right", val: 91 },
          { fn: "forward", val: 10 }, { fn: "right", val: 91 },
          { fn: "forward", val: 20 }, { fn: "right", val: 91 },
          { fn: "forward", val: 30 }, { fn: "right", val: 91 },
          { fn: "forward", val: 40 }, { fn: "right", val: 91 },
          { fn: "forward", val: 50 }, { fn: "right", val: 91 },
        ],
      },
      hints: [
        "A fixed 50 never changes.",
        "Use `i` to grow it.",
        "forward(i * 10)",
      ],
      solution: "for i in range(6):\n    forward(i * 10)\n    right(91)\n",
    },
    {
      type: "text",
      md: "For beats, `sample(\"kick\")` plays a drum. Loop the beats and use `if` to place a snare on certain ones.",
    },
    {
      type: "example",
      note: "Kick every beat; snare added on beats 2 and 6 — the backbeat.",
      code: "for beat in range(8):\n    sample(\"kick\")\n    if beat == 2 or beat == 6:\n        sample(\"snare\")\n    sleep(0.5)\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Now the same `%` trick, but in music instead of colour. Complete the loop so it plays a repeating three-note pattern over 6 steps — `i % 3` picks note 60, 64, or 67 — with `sleep(0.3)` after each. Fill in the three play lines.",
      starter: "for i in range(6):\n    if i % 3 == 0:\n        pass  # play 60\n    elif i % 3 == 1:\n        pass  # play 64\n    else:\n        pass  # play 67\n    sleep(0.3)\n",
      check: {
        type: "calls",
        calls: [
          { fn: "play", note: 60 },
          { fn: "play", note: 64 },
          { fn: "play", note: 67 },
          { fn: "play", note: 60 },
          { fn: "play", note: 64 },
          { fn: "play", note: 67 },
        ],
      },
      hints: [
        "Same `i % 3` cycle you just saw with colours, now with notes.",
        "Match each branch to its note.",
        "play(60), play(64), play(67).",
      ],
      solution: "for i in range(6):\n    if i % 3 == 0:\n        play(60)\n    elif i % 3 == 1:\n        play(64)\n    else:\n        play(67)\n    sleep(0.3)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: write a 4-beat groove with a for loop over `range(4)`. Every beat plays a kick. On beat 0, also play a snare after the kick. Add `sleep(0.5)` after each beat.",
      starter: "",
      check: {
        type: "calls",
        calls: [
          { fn: "sample", name: "kick" },
          { fn: "sample", name: "snare" },
          { fn: "sample", name: "kick" },
          { fn: "sample", name: "kick" },
          { fn: "sample", name: "kick" },
        ],
      },
      hints: [
        "Kick every time.",
        "An `if beat == 0` adds the snare.",
        "Snare comes after the kick.",
      ],
      solution: "for beat in range(4):\n    sample(\"kick\")\n    if beat == 0:\n        sample(\"snare\")\n    sleep(0.5)\n",
    },
  ],
  codex: {
    topic: "loops make patterns",
    pattern: "for i in range(n):\n    forward(i * 4)   # grows\n    if i % 3 == 0: ...",
    note: "Feed the loop variable into what you draw or play. i % k cycles 0,1,...,k-1 — handy for rotating colours or notes.",
  },
});

/* ── Lesson 2.8 — Reading errors & debugging ─────────────────────────── */

window.CODELAB.lessons.push({
  id: "c2s8",
  chapter: 2,
  strand: "core",
  lang: "py",
  timeBudgetMin: 23,
  title: "Reading errors & debugging",
  glossary: {
    SyntaxError: "The error Python gives when code breaks its grammar rules — a missing colon, bracket, or quote.",
    IndentationError: "The error Python gives when a line's indentation doesn't line up the way it expects.",
    NameError: "The error Python gives when you use a name it doesn't recognise — often a typo, or a variable used before it's set.",
  },
  content: [
    {
      type: "text",
      md: "Errors aren't the enemy. They tell you what went wrong, and where. First, read the error type — the word before the colon. You'll meet [[SyntaxError]], [[IndentationError]], `TypeError`, and [[NameError]]. Then go to the line it names. Understand the cause before you change anything.",
    },
    {
      type: "example",
      note: "Run it and read the IndentationError — it points at the print line.",
      code: "total = 0\nfor n in range(1, 4):\n    total += n\n  print(total)   # wrong indent\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Here the print is outside the loop, so it runs once at the end. Predict what it prints.",
      starter: "total = 0\nfor n in range(1, 4):\n    total += n\nprint(total)\n",
      check: { type: "output", expected: "6" },
      hints: [
        "Adds 1 + 2 + 3.",
        "Prints once, after the loop.",
        "6.",
      ],
      solution: "total = 0\nfor n in range(1, 4):\n    total += n\nprint(total)\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This crashes with an IndentationError. Fix the indent so it prints 15.",
      starter: "total = 0\nfor n in range(1, 6):\n    total += n\n  print(total)\n",
      check: { type: "output", expected: "15" },
      hints: [
        "The print is indented oddly.",
        "It should be outside the loop, at the margin.",
        "Remove its indent.",
      ],
      solution: "total = 0\nfor n in range(1, 6):\n    total += n\nprint(total)\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This crashes with a TypeError — `range` can't take a decimal, and `limit / 2` gives `5.0`. Use `//` so it's a whole number. It should print `0 1 2 3 4 `.",
      starter: "limit = 10\nfor i in range(limit / 2):\n    print(i, end=\" \")\n",
      check: { type: "output", expected: "0 1 2 3 4" },
      hints: [
        "`/` always makes a decimal.",
        "`//` keeps it whole.",
        "range(limit // 2)",
      ],
      solution: "limit = 10\nfor i in range(limit // 2):\n    print(i, end=\" \")\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This runs without crashing but prints 5 instead of 15 — a logic bug. It replaces `total` each time instead of adding to it. Fix the one line.",
      starter: "total = 0\nfor n in range(1, 6):\n    total = n\nprint(total)\n",
      check: { type: "output", expected: "15" },
      hints: [
        "`total = n` throws away the running total.",
        "Add instead of replace.",
        "total += n",
      ],
      solution: "total = 0\nfor n in range(1, 6):\n    total += n\nprint(total)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: use a for loop over `range(1, 11)` to count how many of the numbers 1–10 are even, and print the count. (Use `% 2` to test even, and a counter.) It should print 5.",
      starter: "",
      check: { type: "output", expected: "5" },
      hints: [
        "Start a counter at 0.",
        "`n % 2 == 0` means even.",
        "Add 1 for each even number, print after the loop.",
      ],
      solution: "count = 0\nfor n in range(1, 11):\n    if n % 2 == 0:\n        count += 1\nprint(count)\n",
    },
  ],
  codex: {
    topic: "reading errors",
    pattern: "SyntaxError · IndentationError · TypeError · NameError",
    note: "Read the error type and the line it names, understand the cause, then fix. range() needs a whole number — use // not /.",
  },
});

/* ── Lesson 2.9 — try / except ───────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c2s9",
  chapter: 2,
  strand: "core",
  lang: "py",
  timeBudgetMin: 21,
  title: "try / except",
  glossary: {
    "try": "Wraps risky code so that if it fails, Python jumps to the matching except instead of crashing.",
    "except": "Catches a named error from the try block and runs its own code instead of crashing.",
    ValueError: "The error Python gives when a value is the right type but not usable — like int(\"hello\"), text that isn't a number.",
  },
  content: [
    {
      type: "text",
      md: "Some lines can fail — like `int(\"hello\")`. [[try]]/[[except]] lets you catch the failure and keep going instead of crashing.",
    },
    {
      type: "example",
      note: "int(\"hello\") fails, so Python jumps to except. The line after runs either way.",
      code: "try:\n    n = int(\"hello\")\n    print(n)\nexcept ValueError:\n    print(\"Not a number\")\nprint(\"Program continues\")\n",
    },
    {
      type: "text",
      md: "The `except` line names the error it handles. `except ValueError:` catches only that one — name the error you actually expect, so you don't accidentally hide real bugs.",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "`int(\"42\")` works fine. Predict which line prints.",
      starter: "try:\n    n = int(\"42\")\n    print(\"ok:\", n)\nexcept ValueError:\n    print(\"bad\")\n",
      check: { type: "output", expected: "ok: 42" },
      hints: [
        "int(\"42\") succeeds.",
        "So the except is skipped.",
        "ok: 42.",
      ],
      solution: "try:\n    n = int(\"42\")\n    print(\"ok:\", n)\nexcept ValueError:\n    print(\"bad\")\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "This catches the error and prints `oops`. Change the message to `Enter a whole number.`",
      starter: "try:\n    n = int(\"hi\")\n    print(n)\nexcept ValueError:\n    print(\"oops\")\n",
      check: { type: "output", expected: "Enter a whole number." },
      hints: [
        "Only the except message changes.",
        "Swap the text.",
        "print(\"Enter a whole number.\")",
      ],
      solution: "try:\n    n = int(\"hi\")\n    print(n)\nexcept ValueError:\n    print(\"Enter a whole number.\")\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This means to catch the [[ValueError]] from `int(\"hello\")`, but it names the wrong error, so the program still crashes. Fix the except line so it prints `not a number`.",
      starter: "try:\n    n = int(\"hello\")\nexcept ZeroDivisionError:\n    print(\"not a number\")\n",
      check: { type: "output", expected: "not a number" },
      hints: [
        "int of bad text raises a ValueError, not a division error.",
        "Match the error name.",
        "except ValueError:",
      ],
      solution: "try:\n    n = int(\"hello\")\nexcept ValueError:\n    print(\"not a number\")\n",
    },
    {
      type: "text",
      md: "Combine `try` with `while True:` and `break` to keep asking until the input works — the standard way to read a number safely.",
    },
    {
      type: "example",
      note: "Keeps asking until int() succeeds; a bad entry loops again.",
      code: "while True:\n    try:\n        n = int(input())\n        break\n    except ValueError:\n        print(\"Not a number. Try again.\")\nprint(\"Got:\", n)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: read two numbers with `float(input())`, divide the first by the second, and print the result. Catch two errors: a non-number prints `Numbers only.`; dividing by zero prints `Can't divide by zero.` (Inputs 10 and 2 → 5.0.)",
      starter: "",
      mockInput: ["10", "2"],
      check: { type: "output", expected: "5.0" },
      hints: [
        "Read both, then divide.",
        "Two except blocks — one per error.",
        "10 / 2 is 5.0.",
      ],
      solution: "try:\n    a = float(input())\n    b = float(input())\n    print(a / b)\nexcept ValueError:\n    print(\"Numbers only.\")\nexcept ZeroDivisionError:\n    print(\"Can't divide by zero.\")\n",
    },
  ],
  codex: {
    topic: "try / except",
    pattern: "try:\n    n = int(x)\nexcept ValueError:\n    ...",
    note: "try runs risky code; except catches a named error instead of crashing. Name the error you expect so you don't hide real bugs.",
  },
});

/* ── Lesson 2.10 — Finale: Guess & Grade (cumulative) ────────────────── */

window.CODELAB.lessons.push({
  id: "c2s10",
  chapter: 2,
  strand: "data",
  lang: "py",
  timeBudgetMin: 25,
  title: "Finale: Guess & Grade",
  content: [
    {
      type: "text",
      md: "No new syntax here — this is where the pieces come together. Read the worked example, then build three programs of your own.",
    },
    {
      type: "example",
      note: "Chapter 1's input and f-string, this chapter's elif — a grade reporter. Run it with different scores.",
      code: "score = int(input())\nif score >= 90:\n    grade = \"A\"\nelif score >= 80:\n    grade = \"B\"\nelif score >= 70:\n    grade = \"C\"\nelse:\n    grade = \"F\"\nprint(f\"Score {score} earns a {grade}\")\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete it: read 3 scores in a loop, count how many are 60 or above, and print `X of 3 passed`. Add the `if` that bumps the counter. (Inputs 55, 80, 90 → 2 of 3 passed.)",
      starter: "passed = 0\nfor _ in range(3):\n    score = int(input())\n    # if score >= 60, add 1 to passed\nprint(f\"{passed} of 3 passed\")\n",
      mockInput: ["55", "80", "90"],
      check: { type: "output", expected: "2 of 3 passed" },
      hints: [
        "Check each score against 60.",
        "Add 1 when it passes.",
        "if score >= 60: passed += 1",
      ],
      solution: "passed = 0\nfor _ in range(3):\n    score = int(input())\n    if score >= 60:\n        passed += 1\nprint(f\"{passed} of 3 passed\")\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: read test scores one at a time with `int(input())`, stopping when the user enters `-1`. Then print the class average as `Average: 80.0`. (This uses the `while True:` + `break` idea from Lessons 5 and 9, plus an accumulator.) Inputs 80, 90, 70, -1 → `Average: 80.0`.",
      starter: "",
      mockInput: ["80", "90", "70", "-1"],
      check: { type: "output", expected: "Average: 80.0" },
      hints: [
        "Loop with `while True:` and `break` when the score is -1.",
        "Keep a running total and a count of how many you read.",
        "Average is total / count.",
      ],
      solution: "total = 0\ncount = 0\nwhile True:\n    score = int(input())\n    if score == -1:\n        break\n    total += score\n    count += 1\nprint(f\"Average: {total / count}\")\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: the secret number is 7. Read guesses with `int(input())` in a loop. For each wrong guess print `Too high` or `Too low`. When they guess 7, print `Correct!` and stop. (Inputs 3, 9, 7 → Too low / Too high / Correct!.)",
      starter: "",
      mockInput: ["3", "9", "7"],
      check: { type: "output", expected: "Too low\nToo high\nCorrect!" },
      hints: [
        "Loop while the guess isn't 7.",
        "Inside, an if/else for high vs low.",
        "Read the next guess at the end of the loop, print Correct! after.",
      ],
      solution: "secret = 7\nguess = int(input())\nwhile guess != secret:\n    if guess > secret:\n        print(\"Too high\")\n    else:\n        print(\"Too low\")\n    guess = int(input())\nprint(\"Correct!\")\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch — a mini report card. Read 4 scores in a for loop. For each, print its grade in the form `85 -> B` (90+ A, 80+ B, 70+ C, else F). Count how many passed (60+). After the loop, print `Passed: X of 4`. (Inputs 92, 47, 78, 85.)",
      starter: "",
      mockInput: ["92", "47", "78", "85"],
      check: { type: "output", expected: "92 -> A\n47 -> F\n78 -> C\n85 -> B\nPassed: 3 of 4" },
      hints: [
        "A for loop over range(4), reading a score each time.",
        "Grade with an elif chain, then print `score -> grade`.",
        "Count passes with a separate `if score >= 60`.",
      ],
      solution: "passed = 0\nfor _ in range(4):\n    score = int(input())\n    if score >= 90:\n        grade = \"A\"\n    elif score >= 80:\n        grade = \"B\"\n    elif score >= 70:\n        grade = \"C\"\n    else:\n        grade = \"F\"\n    print(f\"{score} -> {grade}\")\n    if score >= 60:\n        passed += 1\nprint(f\"Passed: {passed} of 4\")\n",
    },
  ],
  codex: {
    topic: "putting it together",
    pattern: "read input · if/elif · while/for · f-string output",
    note: "No new syntax — combine input, conditionals, loops, and f-strings into whole programs.",
  },
});
