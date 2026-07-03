/* Chapter 7 — Modules & Real Data
   Rebuilt to CODELAB_CH7_REBUILT.md + CODELAB_FULL_REPORT.md.
   Lessons: c7s1 import · c7s2 Writing your own module · c7s3 Using a library ·
            c7s4 Reading documentation · c7s5 Facts from messy text ·
            c7s6 Saving & loading (files + JSON) · c7s7 A taste of SQL ·
            c7s8 Finale: the music library.
   Through-line: a personal music library — parse text, save JSON, query SQL. */

/* ── Lesson 7.1 — import: the standard library ───────────────────────── */

window.CODELAB.lessons.push({
  id: "c7s1",
  chapter: 7,
  strand: "core",
  lang: "py",
  timeBudgetMin: 18,
  title: "import: the standard library",
  glossary: {
    ImportError: "The error Python gives when an import fails — usually a misspelled or miscapitalised name.",
    module: "A collection of ready-made names (functions, values) you bring in with `import`. `import math` opens the math module; you reach a name inside it with a dot, like `math.sqrt`.",
  },
  content: [
    {
      type: "text",
      md: "Until now every program built everything itself. Most real Python doesn't — it `import`s code that's already written and tested. Picture each [[module]] as a separate room full of names. `import math` puts a key labelled `math` in your room, so `math.sqrt` means \"go to the math room, grab `sqrt`.\" `from math import sqrt` carries that one name straight into your room, so you can write `sqrt` on its own.",
    },
    {
      type: "example",
      note: "import math opens the whole room; you reach in with a dot. sqrt always hands back a float — 12.0, not 12.",
      code: "import math\nprint(math.sqrt(144))   # 12.0\nprint(math.floor(4.7))  # 4\nprint(math.ceil(4.1))   # 5\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Predict all three lines. Remember `sqrt` returns a float.",
      starter: "import math\nprint(math.sqrt(144))\nprint(math.floor(4.7))\nprint(math.ceil(4.1))\n",
      check: { type: "output", expected: "12.0\n4\n5" },
      hints: [
        "`sqrt` gives a float.",
        "`floor` rounds down, `ceil` rounds up.",
        "12.0, 4, 5.",
      ],
      solution: "import math\nprint(math.sqrt(144))\nprint(math.floor(4.7))\nprint(math.ceil(4.1))\n",
    },
    {
      type: "text",
      md: "`from math import sqrt` carries just that name in, so you call it without the `math.` prefix. Get the name wrong — even the capitalization — and Python stops with an [[ImportError]].",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This crashes with `ImportError: cannot import name 'Sqrt' from 'math'`. Python names are case-sensitive. Fix the import and the call so it prints `7.0`.",
      starter: "from math import Sqrt\nprint(Sqrt(49))\n",
      check: { type: "output", expected: "7.0" },
      hints: [
        "`Sqrt` isn't the real name.",
        "It's all lowercase.",
        "`from math import sqrt` then `sqrt(49)`.",
      ],
      solution: "from math import sqrt\nprint(sqrt(49))\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "This prints the square root. Change the import and the call so it prints the **greatest common divisor** of 48 and 18 instead, using `math.gcd`.",
      starter: "import math\nprint(math.sqrt(48))\n",
      check: { type: "output", expected: "6" },
      hints: [
        "`gcd` takes two numbers.",
        "`math.gcd(48, 18)`.",
        "The answer is 6.",
      ],
      solution: "import math\nprint(math.gcd(48, 18))\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: `import math`, then print the square root of 81 and the value of `math.pi` rounded to 2 decimal places (`round(math.pi, 2)`).",
      starter: "",
      check: { type: "output", expected: "9.0\n3.14" },
      hints: [
        "`math.sqrt(81)` is a float.",
        "`round(math.pi, 2)`.",
        "9.0, then 3.14.",
      ],
      solution: "import math\nprint(math.sqrt(81))\nprint(round(math.pi, 2))\n",
    },
  ],
  codex: {
    topic: "import",
    pattern: "import math\nmath.sqrt(144)        # reach in with a dot\nfrom math import sqrt  # carry one name in",
    note: "import brings in code others wrote. `import math` then `math.name`, or `from math import name` to use it bare. A wrong name (case matters) raises ImportError.",
  },
});

/* ── Lesson 7.2 — Writing your own module ────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c7s2",
  chapter: 7,
  strand: "core",
  lang: "py",
  timeBudgetMin: 20,
  title: "Writing your own module",
  glossary: {
    AttributeError: "The error Python gives when you ask a value for an attribute or method it doesn't have.",
  },
  content: [
    {
      type: "text",
      md: "Any `.py` file is a module — `import stats` runs `stats.py` and gives you its functions as `stats.mean(...)`. Python runs every top-level line of a file when it's imported, including your test prints. The variable `__name__` is how you stop that. Python sets it to `\"__main__\"` when the file is **run directly**, and to the module's name when it's **imported**. So `if __name__ == \"__main__\":` means \"only when I'm the program being run, not when someone imports me.\"",
    },
    {
      type: "example",
      note: "Run this file directly and __name__ is \"__main__\". The def still runs either way — it just creates the function without calling it.",
      code: "def greet(name):\n    return \"Hello, \" + name\n\nprint(__name__)   # \"__main__\" when run directly\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "This file is being run directly (not imported). Predict what `print(__name__)` shows.",
      starter: "def greet(name):\n    return \"Hello, \" + name\n\nprint(__name__)\n",
      check: { type: "output", expected: "__main__" },
      hints: [
        "Run directly → the special name.",
        "It's `__main__`.",
        "The `def` just makes the function.",
      ],
      solution: "def greet(name):\n    return \"Hello, \" + name\n\nprint(__name__)\n",
    },
    {
      type: "text",
      md: "With the guard in place, the test code runs only when you run the file yourself. It stays quiet when another file imports the module.",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete the guard so the test line runs only when this file is the program being run. Fill in the condition.",
      starter: "def greet(name):\n    return \"Hello, \" + name\n\nif _____:\n    print(greet(\"Ada\"))\n",
      check: { type: "output", expected: "Hello, Ada" },
      hints: [
        "Compare `__name__` to a string.",
        "The string is `\"__main__\"`.",
        "if __name__ == \"__main__\":",
      ],
      solution: "def greet(name):\n    return \"Hello, \" + name\n\nif __name__ == \"__main__\":\n    print(greet(\"Ada\"))\n",
    },
    {
      type: "text",
      md: "One more trap: don't name your own file after a standard-library module. Name a file `random.py` and `import random` loads *your* file, not Python's — so `random.randint` won't exist and you get an [[AttributeError]]. The fix isn't code, it's the filename: rename it to something that doesn't clash.",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "Imagine this file was accidentally named `random.py`, so it shadows Python's real `random`. Rename the clashing function `randint` to a non-clashing name `roll` and call it, printing `4`.",
      starter: "# imagine this is your file, accidentally named random.py\ndef randint(a, b):\n    return 4  # stand-in\n\nprint(randint(1, 6))\n",
      check: { type: "output", expected: "4" },
      hints: [
        "Naming your file/function after the stdlib shadows it.",
        "Rename to something that doesn't clash.",
        "`roll` instead of `randint`.",
      ],
      solution: "def roll(a, b):\n    return 4\n\nprint(roll(1, 6))\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch, write a small `stats` module: define `mean(nums)` (with a one-line docstring) returning the average, and guard a test line that prints `mean([10, 20, 30])` so it runs only when the file is run directly.",
      starter: "",
      check: { type: "output", expected: "20.0" },
      hints: [
        "`mean` returns `sum / len`.",
        "Give it a docstring (Ch3).",
        "Guard the test with `if __name__ == \"__main__\":`.",
      ],
      solution: "def mean(nums):\n    \"\"\"Return the average of a list of numbers.\"\"\"\n    return sum(nums) / len(nums)\n\nif __name__ == \"__main__\":\n    print(mean([10, 20, 30]))\n",
    },
  ],
  codex: {
    topic: "your own module",
    pattern: "def mean(nums): ...\n\nif __name__ == \"__main__\":\n    print(mean([10, 20, 30]))   # test only when run directly",
    note: "Any .py file is a module. __name__ is \"__main__\" when run directly, the module name when imported — so guard test code with if __name__ == \"__main__\". Don't name your file after a stdlib module.",
  },
});

/* ── Lesson 7.3 — Using a library (an API) ───────────────────────────── */

window.CODELAB.lessons.push({
  id: "c7s3",
  chapter: 7,
  strand: "core",
  lang: "py",
  timeBudgetMin: 30,
  title: "Using a library (an API)",
  glossary: {
    API: "The contract of a function or library — what goes in and what comes out — so you can use it without reading the code inside.",
  },
  content: [
    {
      type: "text",
      md: "An [[API]] is a contract: what goes in, what comes out — you don't need to read the code inside. `date.today()` hands back a date object (an object, like the `Creature` you built in Chapter 6, but written by someone else). Some functions change their input and return nothing; others return a new value and leave the input alone. Knowing which is which is the whole contract.",
    },
    {
      type: "example",
      note: "date.today() returns an object; you read its parts with a dot.",
      code: "from datetime import date\ntoday = date.today()\nprint(today.year >= 2024)   # True\n",
    },
    {
      type: "text",
      md: "A classic contract trap: `random.shuffle(lst)` shuffles **in place** and returns `None`. `sorted(lst)` returns a **new** sorted list and leaves the original alone. Print the return of `shuffle` and you get `None`, not a list.",
    },
    {
      type: "example",
      note: "sorted returns a new list; the original is untouched. shuffle would return None.",
      code: "plays = [2100, 4300, 3100]\nprint(sorted(plays))   # [2100, 3100, 4300]\nprint(plays)           # unchanged: [2100, 4300, 3100]\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Predict both lines — does `sorted` change the original?",
      starter: "plays = [2100, 4300, 3100]\nprint(sorted(plays))\nprint(plays)\n",
      check: { type: "output", expected: "[2100, 3100, 4300]\n[2100, 4300, 3100]" },
      hints: [
        "`sorted` makes a new list.",
        "The original is untouched.",
        "Sorted, then unchanged.",
      ],
      solution: "plays = [2100, 4300, 3100]\nprint(sorted(plays))\nprint(plays)\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This prints `None`, because `random.shuffle` changes the list in place and returns `None` — don't store its result. Fix it to print the shuffled list itself. (We've seeded the shuffle with `random.seed(0)` so the order is reproducible: `['a', 'c', 'b']`.)",
      starter: "import random\nrandom.seed(0)\ndeck = [\"a\", \"b\", \"c\"]\nresult = random.shuffle(deck)\nprint(result)\n",
      check: { type: "output", expected: "['a', 'c', 'b']" },
      hints: [
        "`shuffle` returns `None`.",
        "Don't store its result.",
        "Print `deck` directly.",
      ],
      solution: "import random\nrandom.seed(0)\ndeck = [\"a\", \"b\", \"c\"]\nrandom.shuffle(deck)   # changes deck in place, returns None\nprint(deck)            # print the list itself\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete the composition: print the whole-number part of the square root of 40 by chaining `math.floor` around `math.sqrt`.",
      starter: "import math\nprint(_____)  # floor of the square root of 40\n",
      check: { type: "output", expected: "6" },
      hints: [
        "`sqrt(40)` is about 6.32.",
        "`floor` drops the decimal.",
        "`math.floor(math.sqrt(40))` is 6.",
      ],
      solution: "import math\nprint(math.floor(math.sqrt(40)))\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: `import random` and seed it with `random.seed(0)` for a reproducible pick. Then `from random import choice` and print one item from `[\"rock\", \"paper\", \"scissors\"]`. (With this seed you'll get `paper`.)",
      starter: "",
      check: { type: "output", expected: "paper" },
      hints: [
        "`choice` returns one item from a list.",
        "Import it directly.",
        "Seed first, then print the pick.",
      ],
      solution: "import random\nrandom.seed(0)\nfrom random import choice\nprint(choice([\"rock\", \"paper\", \"scissors\"]))\n",
    },
    {
      type: "text",
      md: "You've been using libraries since Chapter 1. The turtle you draw with is a library. So are the `play` and `sleep` you make sound with. They're code someone else wrote, and you call them by name — just like `math.sqrt`. `forward(100)` and `play(60)` are library calls too.",
    },
    {
      type: "example",
      note: "Same idea as math: call a library by name. The turtle draws; play sounds a note.",
      code: "forward(100)\nright(120)\nplay(60)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: use the drawing and sound libraries you already know. Draw a triangle — three times, `forward(100)` then `right(120)` — then `play(60)` to sound a note.",
      starter: "",
      check: {
        type: "calls",
        calls: [
          { fn: "forward", val: 100 }, { fn: "right", val: 120 },
          { fn: "forward", val: 100 }, { fn: "right", val: 120 },
          { fn: "forward", val: 100 }, { fn: "right", val: 120 },
          { fn: "play", note: 60 },
        ],
      },
      hints: [
        "`forward` and `right` are the turtle library.",
        "Three sides, each turn 120°.",
        "Finish with `play(60)`.",
      ],
      solution: "forward(100)\nright(120)\nforward(100)\nright(120)\nforward(100)\nright(120)\nplay(60)\n",
    },
  ],
  codex: {
    topic: "using a library",
    pattern: "sorted(lst)          # returns a NEW list\nrandom.shuffle(lst)  # changes in place, returns None",
    note: "An API is a contract: inputs and outputs, no need to read inside. Some calls return a new value; some change their input and return None. Know which before you use the result.",
  },
});

/* ── Lesson 7.4 — Reading documentation ──────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c7s4",
  chapter: 7,
  strand: "core",
  lang: "py",
  timeBudgetMin: 12,
  title: "Reading documentation",
  glossary: {
    signature: "The first line of a function's docs — its name and parameters, like `str.split(sep=None, maxsplit=-1)`. Anything with an `=` has a default and can be left out.",
  },
  content: [
    {
      type: "text",
      md: "You don't have to memorize a library — you read its docs. A [[signature]] like `str.split(sep=None, maxsplit=-1)` tells you three things: the function's name, its parameters, and which ones are optional. Anything written with an `=` in the signature has a default — you can leave it out. `help(str.split)` prints the same thing right in Python.",
    },
    {
      type: "example",
      note: "maxsplit defaults to unlimited; set it to 1 and the split stops after the first separator.",
      code: "print(\"a-b-c-d\".split(\"-\"))       # ['a', 'b', 'c', 'd']\nprint(\"a-b-c-d\".split(\"-\", 1))    # ['a', 'b-c-d']\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "The docs say `math.ceil` rounds **up** to the nearest whole number, toward positive infinity. Predict both, including the negative one.",
      starter: "import math\nprint(math.ceil(4.1))\nprint(math.ceil(-4.1))\n",
      check: { type: "output", expected: "5\n-4" },
      hints: [
        "Ceil always rounds up.",
        "Up from -4.1 is -4, not -5.",
        "5, then -4.",
      ],
      solution: "import math\nprint(math.ceil(4.1))\nprint(math.ceil(-4.1))\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "The docs for `split` show an optional `maxsplit`. This splits on every space. Add `maxsplit=1` so it splits only once, giving `['first', 'second third']`.",
      starter: "line = \"first second third\"\nprint(line.split(\" \"))\n",
      check: { type: "output", expected: "['first', 'second third']" },
      hints: [
        "`maxsplit` limits how many splits happen.",
        "Pass `1`.",
        "line.split(\" \", 1)",
      ],
      solution: "line = \"first second third\"\nprint(line.split(\" \", 1))\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "The docs for `random.sample(population, k)` say `k` can't be larger than the population — otherwise `ValueError: Sample larger than population`. This asks for 10 from a 5-item list. Read the constraint and fix `k` to 2 so it can run. (Print the length of the result, which is 2.)",
      starter: "import random\npicked = random.sample([1, 2, 3, 4, 5], 10)\nprint(len(picked))\n",
      check: { type: "output", expected: "2" },
      hints: [
        "`k` can't exceed the list length.",
        "Ask for 2, not 10.",
        "`random.sample([...], 2)` then its length is 2.",
      ],
      solution: "import random\npicked = random.sample([1, 2, 3, 4, 5], 2)\nprint(len(picked))\n",
    },
  ],
  codex: {
    topic: "reading documentation",
    pattern: "str.split(sep=None, maxsplit=-1)\n#           ^ default        ^ default\n\"a-b-c\".split(\"-\", 1)   # ['a', 'b-c']",
    note: "Read the signature: name, parameters, and which are optional (they have an = default). help(fn) prints it. Respect stated limits (sample's k can't exceed the population).",
  },
});

/* ── Lesson 7.5 — Facts from messy text ──────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c7s5",
  chapter: 7,
  strand: "words",
  lang: "py",
  timeBudgetMin: 20,
  title: "Facts from messy text",
  content: [
    {
      type: "text",
      md: "Real data arrives as messy text. The pattern is always: read a line, split it, clean the pieces, store them. New string tools here: `replace(old, new)` swaps text, `find(sub)` returns where something starts (or `-1`), and `startswith`/`endswith` test the ends. You already have `strip` (removes surrounding spaces) and `split` from Chapter 1.",
    },
    {
      type: "example",
      note: "Split a \"name: score\" line into two pieces, then convert the score with int.",
      code: "line = \"Alice: 1450\"\nparts = line.split(\": \")\nname = parts[0]\nscore = int(parts[1])\nprint(name, score)   # Alice 1450\n",
    },
    {
      type: "text",
      md: "Watch the inner spaces. If you split on just `\":\"`, the pieces keep their spaces: `\"  Bob : 882 \".strip().split(\":\")` gives `['Bob ', ' 882']`. `int(\" 882\")` still works, but `'Bob ' == 'Bob'` is `False`. Strip each piece, or split on `\": \"` (with the space) to avoid it.",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Predict the printed name and score.",
      starter: "line = \"Blinding Lights: 4300\"\nparts = line.split(\": \")\nprint(parts[0])\nprint(int(parts[1]))\n",
      check: { type: "output", expected: "Blinding Lights\n4300" },
      hints: [
        "Split on `\": \"` gives two pieces.",
        "`[0]` is the title, `[1]` the number.",
        "Blinding Lights, then 4300.",
      ],
      solution: "line = \"Blinding Lights: 4300\"\nparts = line.split(\": \")\nprint(parts[0])\nprint(int(parts[1]))\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This splits on `\":\"`, so the name keeps a trailing space and `parts[0] == \"Bob\"` is `False`, printing `no`. Fix it by stripping the name (or splitting on `\": \"`) so it prints `yes`.",
      starter: "line = \"Bob : 882\"\nparts = line.split(\":\")\nname = parts[0]\nif name == \"Bob\":\n    print(\"yes\")\nelse:\n    print(\"no\")\n",
      check: { type: "output", expected: "yes" },
      hints: [
        "`parts[0]` is `'Bob '` with a space.",
        "Strip it.",
        "parts[0].strip()",
      ],
      solution: "line = \"Bob : 882\"\nparts = line.split(\":\")\nname = parts[0].strip()\nif name == \"Bob\":\n    print(\"yes\")\nelse:\n    print(\"no\")\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete the loop that reads a game log (a list of `\"name: score\"` strings) and totals each player's score into a dict. Fill in the split-and-accumulate body. (Alice: 1450 + 2010 = 3460; Bob: 882.)",
      starter: "log = [\"Alice: 1450\", \"Bob: 882\", \"Alice: 2010\"]\ntotals = {}\nfor line in log:\n    # split into name and score, add score to totals[name]\n    pass\nprint(totals[\"Alice\"])\n",
      check: { type: "output", expected: "3460" },
      hints: [
        "Split each line, convert the score with `int`.",
        "Use `totals.get(name, 0) + score` to accumulate.",
        "Alice totals 3460.",
      ],
      solution: "log = [\"Alice: 1450\", \"Bob: 882\", \"Alice: 2010\"]\ntotals = {}\nfor line in log:\n    parts = line.split(\": \")\n    name = parts[0]\n    score = int(parts[1])\n    totals[name] = totals.get(name, 0) + score\nprint(totals[\"Alice\"])\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: write `parse_songs(text)` that takes a string of comma-separated records, one per line, like `\"Blue,Eiffel 65,1998\\nStay,Rihanna,2012\"`, and returns a list of dicts `{\"title\":..., \"artist\":..., \"year\":...}` (year as an int). Print the first song's title. (Use `text.split(\"\\n\")` for lines, `line.split(\",\")` for fields — no comprehensions.)",
      starter: "",
      check: { type: "output", expected: "Blue" },
      hints: [
        "Split the text into lines, then each line into fields.",
        "Build a dict per line and append it.",
        "The first title is Blue.",
      ],
      solution: "def parse_songs(text):\n    songs = []\n    for line in text.split(\"\\n\"):\n        fields = line.split(\",\")\n        songs.append({\"title\": fields[0], \"artist\": fields[1], \"year\": int(fields[2])})\n    return songs\n\ndata = \"Blue,Eiffel 65,1998\\nStay,Rihanna,2012\"\nsongs = parse_songs(data)\nprint(songs[0][\"title\"])\n",
    },
  ],
  codex: {
    topic: "facts from messy text",
    pattern: "parts = line.split(\": \")\nname = parts[0].strip()\nscore = int(parts[1])",
    note: "Parse text by read, split, clean, store. New tools: replace, find, startswith/endswith, plus strip and split. Watch inner spaces — split on \": \" or strip each piece.",
  },
});

/* ── Lesson 7.6 — Saving & loading (files + JSON) ────────────────────── */

window.CODELAB.lessons.push({
  id: "c7s6",
  chapter: 7,
  strand: "data",
  lang: "py",
  timeBudgetMin: 20,
  title: "Saving & loading (files + JSON)",
  glossary: {
    JSON: "A text format for saving data. `json.dumps(obj)` turns an object into JSON text; `json.loads(s)` turns text back into an object. `json.dump`/`json.load` do the same with a file.",
  },
  content: [
    {
      type: "text",
      md: "`open(path, mode)` opens a file — `\"r\"` to read, `\"w\"` to write (replacing), `\"a\"` to append. Wrap it in `with`, and Python closes the file for you even if something goes wrong. To save real data, [[JSON]] is a text format: `json.dump(obj, f)` writes it to a file, `json.load(f)` reads it back; `json.dumps(obj)` and `json.loads(s)` do the same with strings.",
    },
    {
      type: "example",
      note: "A dict to a JSON string and back to a dict. dumps makes text; loads makes the object.",
      code: "import json\nsong = {\"title\": \"Blue\", \"year\": 1998}\ntext = json.dumps(song)\nprint(text)                       # {\"title\": \"Blue\", \"year\": 1998}\nprint(json.loads(text)[\"year\"])   # 1998\n",
    },
    {
      type: "text",
      md: "Two traps worth knowing. First, JSON has no tuples — a tuple you save comes back as a **list**: `json.loads(json.dumps((1, 2, 3)))` is `[1, 2, 3]`, and its type is `list`, not `tuple`. Second, `json.load` expects an open **file**, not a string. Passing a string raises `AttributeError`. Use `json.loads` for strings, `json.load` for files.",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "A tuple goes in; what type and value come back out?",
      starter: "import json\nprint(json.loads(json.dumps((1, 2, 3))))\nprint(type(json.loads(json.dumps((1, 2, 3)))) == list)\n",
      check: { type: "output", expected: "[1, 2, 3]\nTrue" },
      hints: [
        "JSON has no tuples.",
        "It comes back as a list.",
        "`[1, 2, 3]`, then True.",
      ],
      solution: "import json\nprint(json.loads(json.dumps((1, 2, 3))))\nprint(type(json.loads(json.dumps((1, 2, 3)))) == list)\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This crashes with `AttributeError: 'str' object has no attribute 'read'`. `json.load` wants an open file, but a **string** was passed. Fix it by using `json.loads` (with an s) for the string, so it prints `Blue`.",
      starter: "import json\ntext = '{\"title\": \"Blue\"}'\ndata = json.load(text)\nprint(data[\"title\"])\n",
      check: { type: "output", expected: "Blue" },
      hints: [
        "`json.load` is for files, `json.loads` for strings.",
        "Add the `s`.",
        "json.loads(text)",
      ],
      solution: "import json\ntext = '{\"title\": \"Blue\"}'\ndata = json.loads(text)\nprint(data[\"title\"])\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete `search_by_artist`: loop the library (a list of song dicts) and collect every song whose `\"artist\"` matches, into a list. Use a plain `for`+`if` — no comprehensions. (Two songs by 'Eiffel 65'.)",
      starter: "library = [{\"title\":\"Blue\",\"artist\":\"Eiffel 65\"},{\"title\":\"Move On\",\"artist\":\"Eiffel 65\"},{\"title\":\"Stay\",\"artist\":\"Rihanna\"}]\ndef search_by_artist(songs, target):\n    matches = []\n    # loop songs; append the ones whose artist == target\n    return matches\n\nprint(len(search_by_artist(library, \"Eiffel 65\")))\n",
      check: { type: "output", expected: "2" },
      hints: [
        "Loop every song.",
        "Append when `song[\"artist\"] == target`.",
        "Two match.",
      ],
      solution: "library = [{\"title\":\"Blue\",\"artist\":\"Eiffel 65\"},{\"title\":\"Move On\",\"artist\":\"Eiffel 65\"},{\"title\":\"Stay\",\"artist\":\"Rihanna\"}]\ndef search_by_artist(songs, target):\n    matches = []\n    for song in songs:\n        if song[\"artist\"] == target:\n            matches.append(song)\n    return matches\n\nprint(len(search_by_artist(library, \"Eiffel 65\")))\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: save and reload a library. Write `save_library(songs, path)` (uses `json.dump` inside a `with open(path, \"w\") as f:`) and `load_library(path)` (uses `json.load` inside `with open(path, \"r\") as f:`). Save `[{\"title\":\"Blue\",\"year\":1998}]` to `\"lib.json\"`, load it back, and print the first song's title.",
      starter: "",
      check: { type: "output", expected: "Blue" },
      hints: [
        "`json.dump(obj, f)` to write, `json.load(f)` to read.",
        "Both inside `with open(...)` blocks.",
        "Round-trips to Blue.",
      ],
      solution: "import json\n\ndef save_library(songs, path):\n    with open(path, \"w\") as f:\n        json.dump(songs, f)\n\ndef load_library(path):\n    with open(path, \"r\") as f:\n        return json.load(f)\n\nsave_library([{\"title\": \"Blue\", \"year\": 1998}], \"lib.json\")\nlibrary = load_library(\"lib.json\")\nprint(library[0][\"title\"])\n",
    },
  ],
  codex: {
    topic: "files & JSON",
    pattern: "with open(path, \"w\") as f:\n    json.dump(obj, f)      # save\nwith open(path, \"r\") as f:\n    obj = json.load(f)     # load",
    note: "with open(path, mode) reads/writes files and closes them for you. JSON saves data as text: dumps/loads for strings, dump/load for files. A saved tuple returns as a list.",
  },
});

/* ── Lesson 7.7 — A taste of SQL ─────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c7s7",
  chapter: 7,
  strand: "data",
  lang: "py",
  timeBudgetMin: 20,
  title: "A taste of SQL",
  glossary: {
    SQL: "The language for storing and querying records in a database. Its core statements here: CREATE TABLE, INSERT, and SELECT.",
  },
  content: [
    {
      type: "text",
      md: "A database is better than a JSON file when you have many records and want fast, structured search. `sqlite3.connect(path)` opens (or creates) a database. The pattern: make a cursor, `execute` [[SQL]] on it, `fetchall` the results. Three SQL statements are enough here: `CREATE TABLE IF NOT EXISTS`, `INSERT INTO`, and `SELECT`.",
    },
    {
      type: "example",
      note: "The whole cycle: create, insert, select. fetchall returns a list of tuples.",
      code: "import sqlite3\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE IF NOT EXISTS songs (id INTEGER, title TEXT, year INTEGER)\")\ncur.execute(\"INSERT INTO songs VALUES (1, 'Blue', 1998)\")\nconn.commit()\ncur.execute(\"SELECT * FROM songs\")\nprint(cur.fetchall())   # [(1, 'Blue', 1998)]\nconn.close()\n",
    },
    {
      type: "text",
      md: "The number-one beginner bug: **forgetting `commit()`**. Python auto-saves structural changes like `CREATE TABLE`, but **not** data changes — insert a row, close without `conn.commit()`, reopen, and the row is gone. And `fetchall` returns **tuples**, not dicts: read `row[0]`, `row[1]`, not `row[\"title\"]`.",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Predict what `fetchall` returns — pay attention to the tuple structure.",
      starter: "import sqlite3\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE songs (id INTEGER, title TEXT)\")\ncur.execute(\"INSERT INTO songs VALUES (1, 'Blue')\")\ncur.execute(\"INSERT INTO songs VALUES (2, 'Stay')\")\nconn.commit()\ncur.execute(\"SELECT * FROM songs\")\nprint(cur.fetchall())\n",
      check: { type: "output", expected: "[(1, 'Blue'), (2, 'Stay')]" },
      hints: [
        "Each row is a tuple.",
        "Two rows inserted.",
        "[(1, 'Blue'), (2, 'Stay')]",
      ],
      solution: "import sqlite3\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE songs (id INTEGER, title TEXT)\")\ncur.execute(\"INSERT INTO songs VALUES (1, 'Blue')\")\ncur.execute(\"INSERT INTO songs VALUES (2, 'Stay')\")\nconn.commit()\ncur.execute(\"SELECT * FROM songs\")\nprint(cur.fetchall())\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This inserts a row but reads back an empty list `[]` — the row was never saved because `commit()` is missing. Add `conn.commit()` after the insert so the `SELECT` returns the row.",
      starter: "import sqlite3\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE songs (id INTEGER, title TEXT)\")\ncur.execute(\"INSERT INTO songs VALUES (1, 'Blue')\")\ncur.execute(\"SELECT * FROM songs\")\nprint(cur.fetchall())\n",
      check: { type: "output", expected: "[(1, 'Blue')]" },
      hints: [
        "Data changes need `commit`.",
        "Add `conn.commit()` after the insert.",
        "Then the row shows up.",
      ],
      solution: "import sqlite3\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE songs (id INTEGER, title TEXT)\")\ncur.execute(\"INSERT INTO songs VALUES (1, 'Blue')\")\nconn.commit()\ncur.execute(\"SELECT * FROM songs\")\nprint(cur.fetchall())\n",
    },
    {
      type: "text",
      md: "When a value comes from a user, never paste it into the SQL with an f-string — that's an injection risk. Use a `?` placeholder and pass the value separately: `cur.execute(\"INSERT INTO songs VALUES (?, ?)\", (id, title))`.",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This builds the query with an f-string, which is unsafe. Rewrite the `execute` to use a `?` placeholder and pass `title` as a parameter tuple. It should still find the one matching row.",
      starter: "import sqlite3\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE songs (title TEXT)\")\ncur.execute(\"INSERT INTO songs VALUES ('Blue')\")\nconn.commit()\ntitle = \"Blue\"\ncur.execute(f\"SELECT * FROM songs WHERE title = '{title}'\")\nprint(cur.fetchall())\n",
      check: { type: "output", expected: "[('Blue',)]" },
      hints: [
        "Replace the f-string with a `?`.",
        "Pass the value as a one-item tuple `(title,)`.",
        "Note the comma in `(title,)`.",
      ],
      solution: "import sqlite3\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE songs (title TEXT)\")\ncur.execute(\"INSERT INTO songs VALUES ('Blue')\")\nconn.commit()\ntitle = \"Blue\"\ncur.execute(\"SELECT * FROM songs WHERE title = ?\", (title,))\nprint(cur.fetchall())\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: open an in-memory database (`sqlite3.connect(\":memory:\")`), create a `songs` table with `id INTEGER` and `title TEXT`, insert two rows (1, 'Blue') and (2, 'Stay') using `?` placeholders, `commit`, then `SELECT *` and print the results. (Should print `[(1, 'Blue'), (2, 'Stay')]`.)",
      starter: "",
      check: { type: "output", expected: "[(1, 'Blue'), (2, 'Stay')]" },
      hints: [
        "Cursor → execute → commit → select → fetchall.",
        "Use `?` placeholders for the values.",
        "Don't forget `commit` before selecting.",
      ],
      solution: "import sqlite3\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE IF NOT EXISTS songs (id INTEGER, title TEXT)\")\ncur.execute(\"INSERT INTO songs VALUES (?, ?)\", (1, \"Blue\"))\ncur.execute(\"INSERT INTO songs VALUES (?, ?)\", (2, \"Stay\"))\nconn.commit()\ncur.execute(\"SELECT * FROM songs\")\nprint(cur.fetchall())\nconn.close()\n",
    },
  ],
  codex: {
    topic: "a taste of SQL",
    pattern: "cur.execute(\"CREATE TABLE ...\")\ncur.execute(\"INSERT ... VALUES (?, ?)\", (a, b))\nconn.commit()\ncur.execute(\"SELECT ...\"); cur.fetchall()",
    note: "sqlite3: connect, cursor, execute, fetchall. CREATE / INSERT / SELECT. Commit after data changes or they vanish. Rows are tuples (row[0]). Use ? placeholders, never f-strings.",
  },
});

/* ── Lesson 7.8 — Finale: the music library (cumulative) ─────────────── */

window.CODELAB.lessons.push({
  id: "c7s8",
  chapter: 7,
  strand: "data",
  lang: "py",
  timeBudgetMin: 24,
  title: "Finale: the music library",
  content: [
    {
      type: "text",
      md: "No new tools — this is the pipeline real programs run: raw text in, structured records out, saved and queried. Read the worked example, then build three of your own.",
    },
    {
      type: "example",
      note: "Text -> list of dicts, with one helper doing one job.",
      code: "def parse_line(line):\n    fields = line.split(\",\")\n    return {\"title\": fields[0], \"artist\": fields[1], \"year\": int(fields[2])}\n\ndata = \"Blue,Eiffel 65,1998\\nStay,Rihanna,2012\"\nlibrary = []\nfor line in data.split(\"\\n\"):\n    library.append(parse_line(line))\n\nprint(len(library))            # 2\nprint(library[0][\"artist\"])    # Eiffel 65\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete `newest(library)` so it returns the title of the song with the largest `year`. (Loop the list, track the best.)",
      starter: "library = [{\"title\":\"Blue\",\"year\":1998},{\"title\":\"Stay\",\"year\":2012},{\"title\":\"Levitating\",\"year\":2020}]\ndef newest(library):\n    best = library[0]\n    # loop; keep the one with the larger year\n    return best[\"title\"]\n\nprint(newest(library))\n",
      check: { type: "output", expected: "Levitating" },
      hints: [
        "Start `best` as the first song.",
        "Keep the one with the bigger year.",
        "Levitating (2020).",
      ],
      solution: "library = [{\"title\":\"Blue\",\"year\":1998},{\"title\":\"Stay\",\"year\":2012},{\"title\":\"Levitating\",\"year\":2020}]\ndef newest(library):\n    best = library[0]\n    for song in library:\n        if song[\"year\"] > best[\"year\"]:\n            best = song\n    return best[\"title\"]\n\nprint(newest(library))\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: given the text `\"Blue,Eiffel 65,1998\\nStay,Rihanna,2012\\nLevitating,Dua Lipa,2020\"`, write `parse_songs(text)` returning a list of dicts (`title`, `artist`, `year` as int), and print how many songs it parsed.",
      starter: "",
      check: { type: "output", expected: "3" },
      hints: [
        "Split into lines, then fields.",
        "Build a dict per line.",
        "Three songs.",
      ],
      solution: "def parse_songs(text):\n    songs = []\n    for line in text.split(\"\\n\"):\n        fields = line.split(\",\")\n        songs.append({\"title\": fields[0], \"artist\": fields[1], \"year\": int(fields[2])})\n    return songs\n\ndata = \"Blue,Eiffel 65,1998\\nStay,Rihanna,2012\\nLevitating,Dua Lipa,2020\"\nprint(len(parse_songs(data)))\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: `import json`. Save the list `[{\"title\":\"Blue\",\"year\":1998},{\"title\":\"Stay\",\"year\":2012}]` to `\"lib.json\"` with `json.dump` inside a `with` block, load it back with `json.load`, and print the number of songs loaded.",
      starter: "",
      check: { type: "output", expected: "2" },
      hints: [
        "`json.dump(obj, f)` to write.",
        "`json.load(f)` to read, both in `with` blocks.",
        "Two songs round-trip.",
      ],
      solution: "import json\n\nlibrary = [{\"title\": \"Blue\", \"year\": 1998}, {\"title\": \"Stay\", \"year\": 2012}]\nwith open(\"lib.json\", \"w\") as f:\n    json.dump(library, f)\n\nwith open(\"lib.json\", \"r\") as f:\n    loaded = json.load(f)\n\nprint(len(loaded))\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch — the whole pipeline in SQL. Open `sqlite3.connect(\":memory:\")`, create a `songs` table (`title TEXT, year INTEGER`), insert `('Blue', 1998)` and `('Stay', 2012)` with `?` placeholders, `commit`, then `SELECT` the titles of songs with `year > 2000` using a `?` placeholder, and print the results. (Should print `[('Stay',)]`.)",
      starter: "",
      check: { type: "output", expected: "[('Stay',)]" },
      hints: [
        "Create, insert with `?`, commit.",
        "`SELECT title ... WHERE year > ?` with `(2000,)`.",
        "Only Stay is after 2000.",
      ],
      solution: "import sqlite3\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE IF NOT EXISTS songs (title TEXT, year INTEGER)\")\ncur.execute(\"INSERT INTO songs VALUES (?, ?)\", (\"Blue\", 1998))\ncur.execute(\"INSERT INTO songs VALUES (?, ?)\", (\"Stay\", 2012))\nconn.commit()\ncur.execute(\"SELECT title FROM songs WHERE year > ?\", (2000,))\nprint(cur.fetchall())\nconn.close()\n",
    },
  ],
  codex: {
    topic: "the music library",
    pattern: "parse text -> list of dicts\njson.dump/load -> save & reload\nsqlite: create/insert/commit/select",
    note: "The real-data pipeline: parse messy text into records, save and reload as JSON, and store and query in SQL. The same shape powers most data programs.",
  },
});
