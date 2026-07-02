/* Chapter 3 — Functions
   Rebuilt to CODELAB_FULL_REPORT.md + CODELAB_CH3_REBUILT.md.
   Lessons: c3s1 Why functions · c3s2 Defining a function · c3s3 Parameters ·
            c3s4 Return values · c3s5 Scope · c3s6 Default values ·
            c3s7 Functions that draw · c3s8 Functions that play ·
            c3s9 Practice: word tools · c3s10 Finale: Art & Music */

/* ── Lesson 3.1 — Why functions ──────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c3s1",
  chapter: 3,
  strand: "core",
  lang: "py",
  timeBudgetMin: 12,
  title: "Why functions",
  glossary: {
    DRY: "Short for \"Don't Repeat Yourself\" — write a piece of code once and reuse it by name, instead of copying it around where a change would have to be made in every copy.",
  },
  content: [
    {
      type: "text",
      md: "You already repeat code with a loop. But some things repeat that a loop can't help with — the same block used in different places. Copying it is the problem functions solve.",
    },
    {
      type: "example",
      note: "The same two lines, twice. Change the cheer and you'd have to fix it in both places — miss one and it's a bug.",
      code: "print(\"Go team!\")\nprint(\"We win!\")\nprint(\"Go team!\")\nprint(\"We win!\")\n",
    },
    {
      type: "text",
      md: "A function lets you name a block once and run it by name. `def cheer():` writes the recipe; `cheer()` runs it. Writing the recipe doesn't run it — calling it does. Programmers have a name for not repeating yourself: [[DRY]], \"Don't Repeat Yourself.\" A function is how you stay DRY.",
    },
    {
      type: "example",
      note: "Defined once, called twice. Change the cheer in one place and every call updates.",
      code: "def cheer():\n    print(\"Go team!\")\n    print(\"We win!\")\n\ncheer()\ncheer()\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Predict the output. What prints first, what prints after `---`?",
      starter: "def cheer():\n    print(\"Go!\")\n    print(\"Yeah!\")\n\ncheer()\nprint(\"---\")\ncheer()\n",
      check: { type: "output", expected: "Go!\nYeah!\n---\nGo!\nYeah!" },
      hints: [
        "The def just sets the recipe.",
        "Each `cheer()` runs both lines.",
        "Go!, Yeah!, ---, Go!, Yeah!",
      ],
      solution: "def cheer():\n    print(\"Go!\")\n    print(\"Yeah!\")\n\ncheer()\nprint(\"---\")\ncheer()\n",
    },
    {
      type: "exercise",
      rung: 2,
      prompt: "Arrange these lines into a program that defines `cheer` (printing two lines) and calls it twice. Watch the decoys — one is a call with no parentheses, one prints the wrong thing.",
      starter: "",
      check: {
        type: "parsons",
        lines: [
          "def cheer():",
          "    print(\"Go!\")",
          "    print(\"Yeah!\")",
          "cheer()",
          "cheer()",
        ],
        distractors: ["cheer", "    print(\"cheer()\")"],
      },
      hints: [
        "Define before you call.",
        "A call needs parentheses.",
        "Two calls at the end.",
      ],
      solution: "def cheer():\n    print(\"Go!\")\n    print(\"Yeah!\")\ncheer()\ncheer()\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "This `cheer()` prints one line and is called three times. Change the body so it prints two lines — `Nice work!` then `Keep going!`. Notice all three calls update at once.",
      starter: "def cheer():\n    print(\"Go team!\")\n\ncheer()\ncheer()\ncheer()\n",
      check: { type: "output", expected: "Nice work!\nKeep going!\nNice work!\nKeep going!\nNice work!\nKeep going!" },
      hints: [
        "Only the body changes.",
        "Two print lines inside.",
        "The three calls stay.",
      ],
      solution: "def cheer():\n    print(\"Nice work!\")\n    print(\"Keep going!\")\n\ncheer()\ncheer()\ncheer()\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: write a function `chant()` that prints `We`, then `Will`, then `Win`. Then call it twice.",
      starter: "",
      check: { type: "output", expected: "We\nWill\nWin\nWe\nWill\nWin" },
      hints: [
        "`def chant():` then three prints.",
        "Indent the body four spaces.",
        "Call it twice at the end.",
      ],
      solution: "def chant():\n    print(\"We\")\n    print(\"Will\")\n    print(\"Win\")\n\nchant()\nchant()\n",
    },
  ],
  codex: {
    topic: "why functions",
    pattern: "def cheer():\n    print(\"Go!\")\n\ncheer()   # runs the body",
    note: "A function names a block once so you can run it by name. def writes the recipe; the call runs it. Reuse instead of copying — that's staying DRY.",
  },
});

/* ── Lesson 3.2 — Defining a function ────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c3s2",
  chapter: 3,
  strand: "core",
  lang: "py",
  timeBudgetMin: 12,
  title: "Defining a function",
  content: [
    {
      type: "text",
      md: "Every function has the same four parts, and once you see them you can write any function. `def` starts it. `greet` is the name you choose (lowercase, underscores between words). `()` holds inputs — empty for now. `:` opens the block. The body is indented four spaces — the same colon-and-indent as `if` and `for`.",
    },
    {
      type: "example",
      note: "def greet(): makes the recipe; greet() runs it. Nothing prints until the call.",
      code: "def greet():\n    print(\"Hello!\")\n\ngreet()\n",
    },
    {
      type: "text",
      md: "Python reads the `def` and sets the recipe aside — it doesn't run the body yet. When it reaches `greet()`, it runs the body, then comes back. The call must come *after* the def; calling before raises `NameError`.",
    },
    {
      type: "example",
      note: "Reads the def, skips its body. Prints A, then the call fires Hello!, then B.",
      code: "def greet():\n    print(\"Hello!\")\n\nprint(\"A\")\ngreet()\nprint(\"B\")\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Where does `greet()` actually fire? Predict the three lines in order.",
      starter: "def greet():\n    print(\"Hello!\")\n\nprint(\"A\")\ngreet()\nprint(\"B\")\n",
      check: { type: "output", expected: "A\nHello!\nB" },
      hints: [
        "The def runs nothing yet.",
        "A prints, then the call.",
        "A, Hello!, B.",
      ],
      solution: "def greet():\n    print(\"Hello!\")\n\nprint(\"A\")\ngreet()\nprint(\"B\")\n",
    },
    {
      type: "text",
      md: "The body **must** be indented. Forget the indent and Python stops with an `IndentationError`.",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This crashes with an IndentationError — the print isn't indented into the function. Fix it so it prints `Hi there`.",
      starter: "def hello():\nprint(\"Hi there\")\n\nhello()\n",
      check: { type: "output", expected: "Hi there" },
      hints: [
        "The body needs to be inside the function.",
        "Indent the print four spaces.",
        "    print(\"Hi there\")",
      ],
      solution: "def hello():\n    print(\"Hi there\")\n\nhello()\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete `sign_off` so it prints `Bye!` then `See you!`. Fill in the body.",
      starter: "def sign_off():\n    pass  # print Bye! then See you!\n\nsign_off()\n",
      check: { type: "output", expected: "Bye!\nSee you!" },
      hints: [
        "Replace `pass` with two prints.",
        "`Bye!` first, then `See you!`.",
        "Both indented.",
      ],
      solution: "def sign_off():\n    print(\"Bye!\")\n    print(\"See you!\")\n\nsign_off()\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: write a function `banner()` that prints a line of 10 stars (`\"*\" * 10`), then `WELCOME`, then another line of 10 stars. Call it once.",
      starter: "",
      check: { type: "output", expected: "**********\nWELCOME\n**********" },
      hints: [
        "`\"*\" * 10` makes the star line.",
        "Three prints in the body.",
        "Call it once.",
      ],
      solution: "def banner():\n    print(\"*\" * 10)\n    print(\"WELCOME\")\n    print(\"*\" * 10)\n\nbanner()\n",
    },
  ],
  codex: {
    topic: "defining a function",
    pattern: "def name():\n    body      # indented 4 spaces\n\nname()        # call after the def",
    note: "def name(): colon, then an indented body. Python sets the recipe aside at the def and runs the body only when you call it. Call before the def → NameError.",
  },
});

/* ── Lesson 3.3 — Parameters ─────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c3s3",
  chapter: 3,
  strand: "core",
  lang: "py",
  timeBudgetMin: 13,
  title: "Parameters",
  glossary: {
    parameter: "The blank in a function's definition — a name that waits for a value. In `def double(n):`, `n` is a parameter.",
    argument: "The real value you hand to a function when you call it. In `double(7)`, `7` is the argument that fills the parameter.",
  },
  content: [
    {
      type: "text",
      md: "A function gets far more useful when you can hand it different values each time. Those inputs are [[parameter|parameters]]. In `def double(n):`, `n` is a parameter — a blank waiting for a value. When you call `double(7)`, the value 7 is the [[argument]], and `n` becomes 7 inside. Parameter = the blank in the definition; argument = the real value in the call.",
    },
    {
      type: "example",
      note: "Each call fills n with a different value.",
      code: "def double(n):\n    print(n * 2)\n\ndouble(7)   # 14\ndouble(3)   # 6\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Trace each call — what does `n` become, and what prints?",
      starter: "def double(n):\n    print(n * 2)\n\ndouble(7)\ndouble(3)\n",
      check: { type: "output", expected: "14\n6" },
      hints: [
        "First call: n is 7.",
        "Second: n is 3.",
        "14, then 6.",
      ],
      solution: "def double(n):\n    print(n * 2)\n\ndouble(7)\ndouble(3)\n",
    },
    {
      type: "text",
      md: "More than one parameter? Separate them with commas. Python matches arguments to parameters **by position**, left to right: `subtract(10, 3)` sets `a` to 10 and `b` to 3.",
    },
    {
      type: "example",
      note: "Position decides which value goes where — swapping them flips the answer.",
      code: "def subtract(a, b):\n    print(a - b)\n\nsubtract(10, 3)   # 7\nsubtract(3, 10)   # -7\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "`square(n)` prints n × n. Add a second parameter `label`, print it as `Area: 25`, and update the call to `square(5, \"Area\")`. (Print `label + \": \" + str(n * n)`.)",
      starter: "def square(n):\n    print(n * n)\n\nsquare(5)\n",
      check: { type: "output", expected: "Area: 25" },
      hints: [
        "Add `label` as a second parameter.",
        "Numbers need `str()` to join with text.",
        "square(5, \"Area\")",
      ],
      solution: "def square(n, label):\n    print(label + \": \" + str(n * n))\n\nsquare(5, \"Area\")\n",
    },
    {
      type: "text",
      md: "Pass the wrong number of arguments and Python stops with a `TypeError`. Count the parameters in the def and match that many in the call.",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This crashes with a TypeError — `add` needs two arguments but got one. Fix the call so it prints `8`.",
      starter: "def add(a, b):\n    print(a + b)\n\nadd(3)\n",
      check: { type: "output", expected: "8" },
      hints: [
        "`add` has two parameters.",
        "The call gives only one value.",
        "add(3, 5)",
      ],
      solution: "def add(a, b):\n    print(a + b)\n\nadd(3, 5)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: write `greet(name)` that prints `Hi <name>!` with an f-string. Call it with `greet(\"Alex\")` and `greet(\"Sam\")`.",
      starter: "",
      check: { type: "output", expected: "Hi Alex!\nHi Sam!" },
      hints: [
        "One parameter, `name`.",
        "Use an f-string in the body.",
        "Two calls with different names.",
      ],
      solution: "def greet(name):\n    print(f\"Hi {name}!\")\n\ngreet(\"Alex\")\ngreet(\"Sam\")\n",
    },
  ],
  codex: {
    topic: "parameters",
    pattern: "def double(n):\n    print(n * 2)\n\ndouble(7)   # n becomes 7",
    note: "A parameter is the blank in the def; an argument is the value in the call. Python matches them by position, left to right. Wrong count → TypeError.",
  },
});

/* ── Lesson 3.4 — Return values ──────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c3s4",
  chapter: 3,
  strand: "core",
  lang: "py",
  timeBudgetMin: 15,
  title: "Return values",
  content: [
    {
      type: "text",
      md: "`print` shows an answer on the screen. `return` hands it back to the rest of your program, so you can store it, add to it, or pass it on.",
    },
    {
      type: "example",
      note: "return gives 10 back; we store it and add 1. print couldn't do that.",
      code: "def double(n):\n    return n * 2\n\nresult = double(5)\nprint(result + 1)   # 11\n",
    },
    {
      type: "text",
      md: "If a function only prints, it hands back nothing — the special value `None`. Try to use that in maths and you get a TypeError, because `None` isn't a number. The rule: if you need the answer anywhere else, `return` it.",
    },
    {
      type: "example",
      note: "add_bad prints and returns None; add_good returns the number so it can be used.",
      code: "def add_bad(a, b):\n    print(a + b)      # returns None\n\ndef add_good(a, b):\n    return a + b\n\nprint(add_good(3, 4) + 1)   # 8\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "`say_hi` prints but doesn't return. What does `x` hold after the call?",
      starter: "def say_hi():\n    print(\"Hi!\")\n\nx = say_hi()\nprint(x)\n",
      check: { type: "output", expected: "Hi!\nNone" },
      hints: [
        "The print runs.",
        "No return means None comes back.",
        "Hi!, then None.",
      ],
      solution: "def say_hi():\n    print(\"Hi!\")\n\nx = say_hi()\nprint(x)\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This crashes with a TypeError — `double` prints instead of returning, so `double(5) + 1` tries to add to None. Change `double` so it prints `11`.",
      starter: "def double(n):\n    print(n * 2)\n\nresult = double(5) + 1\nprint(result)\n",
      check: { type: "output", expected: "11" },
      hints: [
        "`print` leaves nothing to add to.",
        "Return the value instead.",
        "return n * 2",
      ],
      solution: "def double(n):\n    return n * 2\n\nresult = double(5) + 1\nprint(result)\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete `celsius_to_f(c)` so it returns `(c * 9 / 5) + 32`. Replace `pass` with a `return`.",
      starter: "def celsius_to_f(c):\n    pass  # return the formula\n\nprint(celsius_to_f(0))\nprint(celsius_to_f(100))\n",
      check: { type: "output", expected: "32.0\n212.0" },
      hints: [
        "Return the formula.",
        "0 → 32.0, 100 → 212.0.",
        "return (c * 9 / 5) + 32",
      ],
      solution: "def celsius_to_f(c):\n    return (c * 9 / 5) + 32\n\nprint(celsius_to_f(0))\nprint(celsius_to_f(100))\n",
    },
    {
      type: "text",
      md: "A `return` also **exits the function right away** — nothing after it runs. That's handy for handling a special case first, then returning the normal answer.",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: write `is_prime(n)` that returns True if n is prime, else False. Rules: n below 2 → return False immediately. Otherwise, for each `d` from 2 to n-1 (`range(2, n)`), if `n % d == 0`, return False. If none divide n, return True. Test with 1, 2, 9, 17.",
      starter: "",
      check: { type: "output", expected: "False\nTrue\nFalse\nTrue" },
      hints: [
        "Guard the small case first: n < 2 → False.",
        "Loop divisors 2 to n-1; `n % d == 0` means not prime.",
        "Return True only after the loop finishes.",
      ],
      solution: "def is_prime(n):\n    if n < 2:\n        return False\n    for d in range(2, n):\n        if n % d == 0:\n            return False\n    return True\n\nprint(is_prime(1))\nprint(is_prime(2))\nprint(is_prime(9))\nprint(is_prime(17))\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: write `bmi(weight, height)` that returns `weight / (height ** 2)` rounded to 1 decimal (`round(..., 1)`). Test with `print(bmi(70, 1.75))`.",
      starter: "",
      check: { type: "output", expected: "22.9" },
      hints: [
        "`height ** 2` squares the height.",
        "Wrap the division in `round(..., 1)`.",
        "70 / (1.75 ** 2) rounds to 22.9.",
      ],
      solution: "def bmi(weight, height):\n    return round(weight / (height ** 2), 1)\n\nprint(bmi(70, 1.75))\n",
    },
  ],
  codex: {
    topic: "return values",
    pattern: "def double(n):\n    return n * 2\n\nx = double(5)   # x is 10",
    note: "return hands the answer back so you can store or reuse it; print only shows it. A function with no return gives None. return also exits the function at once.",
  },
});

/* ── Lesson 3.5 — Scope ──────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c3s5",
  chapter: 3,
  strand: "core",
  lang: "py",
  timeBudgetMin: 12,
  title: "Scope",
  content: [
    {
      type: "text",
      md: "Variables you make inside a function are private to that call. When the call ends, they're gone. Picture each call getting its own whiteboard: it writes its variables there, and Python wipes it when the call returns. Two calls get two separate whiteboards — they never share.",
    },
    {
      type: "example",
      note: "Both use result, but each on its own whiteboard. They never interfere.",
      code: "def make_upper(text):\n    result = text.upper()\n    return result\n\ndef make_lower(text):\n    result = text.lower()\n    return result\n\nprint(make_upper(\"hello\"))   # HELLO\nprint(make_lower(\"WORLD\"))   # world\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Both functions use a variable named `result`. Predict what prints — and note why they don't clash.",
      starter: "def make_upper(text):\n    result = text.upper()\n    return result\n\ndef make_lower(text):\n    result = text.lower()\n    return result\n\nprint(make_upper(\"hello\"))\nprint(make_lower(\"WORLD\"))\n",
      check: { type: "output", expected: "HELLO\nworld" },
      hints: [
        "Each `result` is on its own whiteboard.",
        "They never see each other.",
        "HELLO, then world.",
      ],
      solution: "def make_upper(text):\n    result = text.upper()\n    return result\n\ndef make_lower(text):\n    result = text.lower()\n    return result\n\nprint(make_upper(\"hello\"))\nprint(make_lower(\"WORLD\"))\n",
    },
    {
      type: "text",
      md: "A function can't see a caller's variables unless you **pass them in**. Relying on an outside variable raises `NameError`. The fix is always the same: hand the value in as an argument.",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This crashes with a NameError — `triple` uses `value`, but `value` lives outside and was never passed in. Give `triple` a parameter and pass `value` to it, so it prints `15`.",
      starter: "def triple():\n    print(value * 3)\n\nvalue = 5\ntriple()\n",
      check: { type: "output", expected: "15" },
      hints: [
        "The function can't see `value` on its own.",
        "Add a parameter and pass it in.",
        "def triple(n): … triple(value)",
      ],
      solution: "def triple(n):\n    print(n * 3)\n\nvalue = 5\ntriple(value)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: write two functions that each use a variable named `total`, proving they don't clash. `add_up(a, b)` returns a + b using `total`; `times(a, b)` returns a * b using `total`. Print `add_up(2, 3)` then `times(2, 3)`.",
      starter: "",
      check: { type: "output", expected: "5\n6" },
      hints: [
        "Both functions can safely name a variable `total`.",
        "Each returns its own.",
        "5, then 6.",
      ],
      solution: "def add_up(a, b):\n    total = a + b\n    return total\n\ndef times(a, b):\n    total = a * b\n    return total\n\nprint(add_up(2, 3))\nprint(times(2, 3))\n",
    },
  ],
  codex: {
    topic: "scope",
    pattern: "def f(x):\n    r = x + 1   # r is private to f\n    return r",
    note: "Variables made inside a function are private to that call and vanish when it returns. A function can't see outside variables unless you pass them in as arguments.",
  },
});

/* ── Lesson 3.6 — Default values ─────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c3s6",
  chapter: 3,
  strand: "core",
  lang: "py",
  timeBudgetMin: 13,
  title: "Default values",
  glossary: {
    "default": "A value a parameter falls back on when the caller doesn't supply one. Written in the def like `greeting=\"Hello\"`.",
  },
  content: [
    {
      type: "text",
      md: "You can give a parameter a [[default]], so a caller can leave it out and still get a sensible result.",
    },
    {
      type: "example",
      note: "greeting defaults to \"Hello\"; pass a second argument to override it.",
      code: "def greet(name, greeting=\"Hello\"):\n    print(greeting + \", \" + name + \"!\")\n\ngreet(\"Sam\")           # Hello, Sam!\ngreet(\"Sam\", \"Hi\")     # Hi, Sam!\n",
    },
    {
      type: "text",
      md: "Defaults go *after* the parameters without defaults. A default is used only when the caller doesn't supply that argument.",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "`exp` defaults to 2. Predict both lines.",
      starter: "def power(base, exp=2):\n    print(base ** exp)\n\npower(5)\npower(5, 3)\n",
      check: { type: "output", expected: "25\n125" },
      hints: [
        "First call uses the default exp=2.",
        "5 ** 2, then 5 ** 3.",
        "25, then 125.",
      ],
      solution: "def power(base, exp=2):\n    print(base ** exp)\n\npower(5)\npower(5, 3)\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "`line(char)` always prints 10 of a character. Add a parameter `n` that defaults to 10, and change the call to `line(\"-\", 5)` so it prints 5 dashes.",
      starter: "def line(char):\n    print(char * 10)\n\nline(\"*\")\n",
      check: { type: "output", expected: "-----" },
      hints: [
        "Add `n=10` as a second parameter.",
        "Use `char * n`.",
        "line(\"-\", 5)",
      ],
      solution: "def line(char, n=10):\n    print(char * n)\n\nline(\"-\", 5)\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete `greet` so it returns `<greeting>, <name><punctuation>`. It has defaults `greeting=\"Hello\"` and `punctuation=\"!\"`. Fill in the return.",
      starter: "def greet(name, greeting=\"Hello\", punctuation=\"!\"):\n    pass\n\nprint(greet(\"Sam\"))\nprint(greet(\"Sam\", \"Hi\"))\nprint(greet(\"Sam\", \"Hi\", \"?\"))\n",
      check: { type: "output", expected: "Hello, Sam!\nHi, Sam!\nHi, Sam?" },
      hints: [
        "Join greeting, name, and punctuation.",
        "First call uses both defaults.",
        "return greeting + \", \" + name + punctuation",
      ],
      solution: "def greet(name, greeting=\"Hello\", punctuation=\"!\"):\n    return greeting + \", \" + name + punctuation\n\nprint(greet(\"Sam\"))\nprint(greet(\"Sam\", \"Hi\"))\nprint(greet(\"Sam\", \"Hi\", \"?\"))\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: write `play_note(note, gap=0.5)` that plays the note, then sleeps `gap` beats. Call `play_note(60)` (using the default gap), then `play_note(67, 1)`.",
      starter: "",
      check: {
        type: "calls",
        calls: [
          { fn: "play", note: 60 },
          { fn: "play", note: 67 },
        ],
      },
      hints: [
        "Give `gap` a default of 0.5.",
        "Play, then sleep the gap.",
        "First call leaves gap out; second passes 1.",
      ],
      solution: "def play_note(note, gap=0.5):\n    play(note)\n    sleep(gap)\n\nplay_note(60)\nplay_note(67, 1)\n",
    },
  ],
  codex: {
    topic: "default values",
    pattern: "def greet(name, greeting=\"Hello\"):\n    ...\ngreet(\"Sam\")   # uses the default",
    note: "A default lets a caller leave an argument out. Defaults go after the plain parameters, and apply only when that argument isn't supplied.",
  },
});

/* ── Lesson 3.7 — Functions that draw ────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c3s7",
  chapter: 3,
  strand: "plot",
  lang: "py",
  timeBudgetMin: 16,
  title: "Functions that draw",
  content: [
    {
      type: "text",
      md: "One function can draw *any* regular shape, because every regular polygon follows the same rule: after each side, turn `360 / sides`. A square turns 90, a triangle 120, a hexagon 60 — one function covers them all.",
    },
    {
      type: "example",
      note: "One function, every shape. Try 3, 5, or 8 sides.",
      code: "def draw_polygon(sides, length):\n    for _ in range(sides):\n        forward(length)\n        right(360 / sides)\n\ndraw_polygon(4, 60)   # square\ndraw_polygon(6, 50)   # hexagon\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "This draws a square (4 sides, length 60). Change the call to draw a hexagon (6 sides) of length 50.",
      starter: "def draw_polygon(sides, length):\n    for _ in range(sides):\n        forward(length)\n        right(360 / sides)\n\ndraw_polygon(4, 60)\n",
      check: {
        type: "calls",
        calls: [
          { fn: "forward", val: 50 }, { fn: "right", val: 60 },
          { fn: "forward", val: 50 }, { fn: "right", val: 60 },
          { fn: "forward", val: 50 }, { fn: "right", val: 60 },
          { fn: "forward", val: 50 }, { fn: "right", val: 60 },
          { fn: "forward", val: 50 }, { fn: "right", val: 60 },
          { fn: "forward", val: 50 }, { fn: "right", val: 60 },
        ],
      },
      hints: [
        "Change the two numbers in the call.",
        "6 sides, length 50.",
        "draw_polygon(6, 50)",
      ],
      solution: "def draw_polygon(sides, length):\n    for _ in range(sides):\n        forward(length)\n        right(360 / sides)\n\ndraw_polygon(6, 50)\n",
    },
    {
      type: "text",
      md: "Build bigger drawings from small ones: `draw_square` calls `draw_polygon(4, size)`, and `draw_house` calls `draw_square` and `draw_roof`. Each helper needs its values passed in — if `draw_house` calls `draw_square(side)` where `side` was never given, that's a `NameError`. Hand the value in directly.",
    },
    {
      type: "example",
      note: "Each function does one job; draw_house just calls the helpers.",
      code: "def draw_polygon(sides, length):\n    for _ in range(sides):\n        forward(length)\n        right(360 / sides)\n\ndef draw_square(size):\n    draw_polygon(4, size)\n\ndef draw_roof(size):\n    draw_polygon(3, size)\n\ndef draw_house(size=80):\n    draw_square(size)\n    draw_roof(size)\n\ndraw_house()\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This crashes with a NameError — `draw_house` calls `draw_square(side)`, but `side` was never defined or passed. Fix it so it draws a square of size 80.",
      starter: "def draw_square(size):\n    for _ in range(4):\n        forward(size)\n        right(90)\n\ndef draw_house():\n    draw_square(side)\n\ndraw_house()\n",
      check: {
        type: "calls",
        calls: [
          { fn: "forward", val: 80 }, { fn: "right", val: 90 },
          { fn: "forward", val: 80 }, { fn: "right", val: 90 },
          { fn: "forward", val: 80 }, { fn: "right", val: 90 },
          { fn: "forward", val: 80 }, { fn: "right", val: 90 },
        ],
      },
      hints: [
        "`side` doesn't exist.",
        "Pass the actual size in.",
        "draw_square(80)",
      ],
      solution: "def draw_square(size):\n    for _ in range(4):\n        forward(size)\n        right(90)\n\ndef draw_house():\n    draw_square(80)\n\ndraw_house()\n",
    },
    {
      type: "text",
      md: "To move without drawing, `penup()` lifts the pen, `forward()` moves silently, and `pendown()` puts it back — so separate shapes aren't joined by stray lines.",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete `draw_roof` so it draws a triangle using `draw_polygon`. `draw_house` calls both helpers with the same size.",
      starter: "def draw_polygon(sides, length):\n    for _ in range(sides):\n        forward(length)\n        right(360 / sides)\n\ndef draw_square(size):\n    draw_polygon(4, size)\n\ndef draw_roof(size):\n    pass  # call draw_polygon with 3 sides\n\ndef draw_house(size=80):\n    draw_square(size)\n    draw_roof(size)\n\ndraw_house()\n",
      check: {
        type: "calls",
        calls: [
          { fn: "forward", val: 80 }, { fn: "right", val: 90 },
          { fn: "forward", val: 80 }, { fn: "right", val: 90 },
          { fn: "forward", val: 80 }, { fn: "right", val: 90 },
          { fn: "forward", val: 80 }, { fn: "right", val: 90 },
          { fn: "forward", val: 80 }, { fn: "right", val: 120 },
          { fn: "forward", val: 80 }, { fn: "right", val: 120 },
          { fn: "forward", val: 80 }, { fn: "right", val: 120 },
        ],
      },
      hints: [
        "A roof is a triangle — 3 sides.",
        "Reuse `draw_polygon`.",
        "draw_polygon(3, size)",
      ],
      solution: "def draw_polygon(sides, length):\n    for _ in range(sides):\n        forward(length)\n        right(360 / sides)\n\ndef draw_square(size):\n    draw_polygon(4, size)\n\ndef draw_roof(size):\n    draw_polygon(3, size)\n\ndef draw_house(size=80):\n    draw_square(size)\n    draw_roof(size)\n\ndraw_house()\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: define `draw_polygon(sides, length)`, then `draw_square(size)` and `draw_triangle(size)` built on it. Then `draw_scene()`: draw a square (size 80), lift the pen, go `forward(150)`, lower the pen, then draw a triangle (size 80). Call `draw_scene()`.",
      starter: "",
      check: {
        type: "calls",
        calls: [
          { fn: "forward", val: 80 }, { fn: "right", val: 90 },
          { fn: "forward", val: 80 }, { fn: "right", val: 90 },
          { fn: "forward", val: 80 }, { fn: "right", val: 90 },
          { fn: "forward", val: 80 }, { fn: "right", val: 90 },
          { fn: "penup" },
          { fn: "forward", val: 150 },
          { fn: "pendown" },
          { fn: "forward", val: 80 }, { fn: "right", val: 120 },
          { fn: "forward", val: 80 }, { fn: "right", val: 120 },
          { fn: "forward", val: 80 }, { fn: "right", val: 120 },
        ],
      },
      hints: [
        "Build both shapes on `draw_polygon`.",
        "Between them: penup, forward 150, pendown.",
        "Call `draw_scene()` at the end.",
      ],
      solution: "def draw_polygon(sides, length):\n    for _ in range(sides):\n        forward(length)\n        right(360 / sides)\n\ndef draw_square(size):\n    draw_polygon(4, size)\n\ndef draw_triangle(size):\n    draw_polygon(3, size)\n\ndef draw_scene():\n    draw_square(80)\n    penup()\n    forward(150)\n    pendown()\n    draw_triangle(80)\n\ndraw_scene()\n",
    },
  ],
  codex: {
    topic: "functions that draw",
    pattern: "def draw_polygon(sides, length):\n    for _ in range(sides):\n        forward(length)\n        right(360 / sides)",
    note: "One parameterised function draws any regular shape (turn 360 / sides). Bigger drawings call smaller helpers — pass each helper the values it needs, or you get a NameError.",
  },
});

/* ── Lesson 3.8 — Functions that play ────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c3s8",
  chapter: 3,
  strand: "sound",
  lang: "py",
  timeBudgetMin: 16,
  title: "Functions that play",
  glossary: {
    transposition: "Moving a whole melody up or down by the same number of semitones, so it keeps its shape but starts on a different note.",
  },
  content: [
    {
      type: "text",
      md: "The same idea works for music. Wrap a pattern in a function. Then one parameter can shift the whole melody up or down.",
    },
    {
      type: "example",
      note: "beat() plays the kick-hihat pattern; the loop repeats it four times.",
      code: "def beat():\n    sample(\"kick\")\n    sleep(0.5)\n    sample(\"hihat\")\n    sleep(0.5)\n\nfor _ in range(4):\n    beat()\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "Add `sample(\"snare\")` and `sleep(0.5)` after the hihat inside `beat()`. The loop still runs 4 times, so each beat now plays kick, hihat, snare.",
      starter: "def beat():\n    sample(\"kick\")\n    sleep(0.5)\n    sample(\"hihat\")\n    sleep(0.5)\n\nfor _ in range(4):\n    beat()\n",
      check: {
        type: "calls",
        calls: [
          { fn: "sample", name: "kick" }, { fn: "sample", name: "hihat" }, { fn: "sample", name: "snare" },
          { fn: "sample", name: "kick" }, { fn: "sample", name: "hihat" }, { fn: "sample", name: "snare" },
          { fn: "sample", name: "kick" }, { fn: "sample", name: "hihat" }, { fn: "sample", name: "snare" },
          { fn: "sample", name: "kick" }, { fn: "sample", name: "hihat" }, { fn: "sample", name: "snare" },
        ],
      },
      hints: [
        "Add two lines to the body.",
        "Snare comes after the hihat.",
        "The loop stays the same.",
      ],
      solution: "def beat():\n    sample(\"kick\")\n    sleep(0.5)\n    sample(\"hihat\")\n    sleep(0.5)\n    sample(\"snare\")\n    sleep(0.5)\n\nfor _ in range(4):\n    beat()\n",
    },
    {
      type: "text",
      md: "Give a melody function a `root` parameter and it plays the same shape from any starting note. `verse(60)` plays 60, 62, 64, 67; `verse(65)` plays 65, 67, 69, 72 — the same shape, five semitones up. Moving a melody like this is [[transposition]]. (Middle C is 60; `+N` means N semitones higher — see the reference chart.)",
    },
    {
      type: "example",
      note: "One function, any key — root shifts every note together.",
      code: "def verse(root):\n    play(root)\n    sleep(0.25)\n    play(root + 2)\n    sleep(0.25)\n    play(root + 4)\n    sleep(0.25)\n    play(root + 7)\n    sleep(0.25)\n\nverse(60)\nverse(65)\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete `verse(root)` so it plays four notes — root, root+2, root+4, root+7 — each followed by `sleep(0.25)`. It's called with 60 and 65.",
      starter: "def verse(root):\n    pass  # play root\n    sleep(0.25)\n    pass  # play root + 2\n    sleep(0.25)\n    pass  # play root + 4\n    sleep(0.25)\n    pass  # play root + 7\n    sleep(0.25)\n\nverse(60)\nverse(65)\n",
      check: {
        type: "calls",
        calls: [
          { fn: "play", note: 60 }, { fn: "play", note: 62 }, { fn: "play", note: 64 }, { fn: "play", note: 67 },
          { fn: "play", note: 65 }, { fn: "play", note: 67 }, { fn: "play", note: 69 }, { fn: "play", note: 72 },
        ],
      },
      hints: [
        "Each `pass` becomes a `play`.",
        "Offsets 0, +2, +4, +7.",
        "play(root + 4)",
      ],
      solution: "def verse(root):\n    play(root)\n    sleep(0.25)\n    play(root + 2)\n    sleep(0.25)\n    play(root + 4)\n    sleep(0.25)\n    play(root + 7)\n    sleep(0.25)\n\nverse(60)\nverse(65)\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This `verse` should play root, root+2, root+4, root+7, but the third note uses the wrong offset — root+5 instead of root+4. Fix it so `verse(60)` plays 60, 62, 64, 67.",
      starter: "def verse(root):\n    play(root)\n    sleep(0.25)\n    play(root + 2)\n    sleep(0.25)\n    play(root + 5)\n    sleep(0.25)\n    play(root + 7)\n    sleep(0.25)\n\nverse(60)\n",
      check: {
        type: "calls",
        calls: [
          { fn: "play", note: 60 }, { fn: "play", note: 62 }, { fn: "play", note: 64 }, { fn: "play", note: 67 },
        ],
      },
      hints: [
        "The third note is wrong.",
        "It should be +4, not +5.",
        "play(root + 4)",
      ],
      solution: "def verse(root):\n    play(root)\n    sleep(0.25)\n    play(root + 2)\n    sleep(0.25)\n    play(root + 4)\n    sleep(0.25)\n    play(root + 7)\n    sleep(0.25)\n\nverse(60)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: write `verse(root)` that plays root, root+4, root+7 (a major chord) with `sleep(0.25)` after each. Then write `song()` that sets the tempo to 120, calls `verse(60)`, then `verse(67)`. Call `song()`.",
      starter: "",
      check: {
        type: "calls",
        calls: [
          { fn: "play", note: 60 }, { fn: "play", note: 64 }, { fn: "play", note: 67 },
          { fn: "play", note: 67 }, { fn: "play", note: 71 }, { fn: "play", note: 74 },
        ],
      },
      hints: [
        "`verse` plays three notes: root, +4, +7.",
        "`song` sets tempo, then calls verse twice.",
        "verse(60) then verse(67).",
      ],
      solution: "def verse(root):\n    play(root)\n    sleep(0.25)\n    play(root + 4)\n    sleep(0.25)\n    play(root + 7)\n    sleep(0.25)\n\ndef song():\n    set_tempo(120)\n    verse(60)\n    verse(67)\n\nsong()\n",
    },
  ],
  codex: {
    topic: "functions that play",
    pattern: "def verse(root):\n    play(root)\n    play(root + 4)\n    play(root + 7)",
    note: "Wrap a musical pattern in a function; a root parameter shifts the whole melody up or down (transposition). Functions can call other functions to build a song.",
  },
});

/* ── Lesson 3.9 — Practice: word tools ───────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c3s9",
  chapter: 3,
  strand: "words",
  lang: "py",
  timeBudgetMin: 14,
  title: "Practice: word tools",
  content: [
    {
      type: "text",
      md: "This is a practice lesson. There's no new syntax. You just build small functions that return values, then combine them.",
    },
    {
      type: "example",
      note: "Loops the letters, counts the vowels, returns the total. char in \"aeiou\" is True for a vowel.",
      code: "def count_vowels(text):\n    total = 0\n    for char in text:\n        if char in \"aeiou\":\n            total += 1\n    return total\n\nprint(count_vowels(\"banana\"))   # 3\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Predict the count for `\"hello\"`.",
      starter: "def count_vowels(text):\n    total = 0\n    for char in text:\n        if char in \"aeiou\":\n            total += 1\n    return total\n\nprint(count_vowels(\"hello\"))\n",
      check: { type: "output", expected: "2" },
      hints: [
        "Vowels in hello: e and o.",
        "That's 2.",
        "2.",
      ],
      solution: "def count_vowels(text):\n    total = 0\n    for char in text:\n        if char in \"aeiou\":\n            total += 1\n    return total\n\nprint(count_vowels(\"hello\"))\n",
    },
    {
      type: "text",
      md: "A classic: for a number, return \"Fizz\" if it divides by 3, \"Buzz\" if by 5, \"FizzBuzz\" if by both. Order matters — check \"both\" first, or a 15 would print \"Fizz\" and stop.",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete `fizzbuzz(n)`: return `FizzBuzz` if n divides by 15, `Fizz` if by 3, `Buzz` if by 5, else `str(n)`. Fill in the four branches.",
      starter: "def fizzbuzz(n):\n    pass  # if/elif/else on n % 15, n % 3, n % 5\n\nprint(fizzbuzz(15))\nprint(fizzbuzz(3))\nprint(fizzbuzz(5))\nprint(fizzbuzz(7))\n",
      check: { type: "output", expected: "FizzBuzz\nFizz\nBuzz\n7" },
      hints: [
        "Check `n % 15 == 0` first.",
        "Then `% 3`, then `% 5`.",
        "Else return `str(n)`.",
      ],
      solution: "def fizzbuzz(n):\n    if n % 15 == 0:\n        return \"FizzBuzz\"\n    elif n % 3 == 0:\n        return \"Fizz\"\n    elif n % 5 == 0:\n        return \"Buzz\"\n    else:\n        return str(n)\n\nprint(fizzbuzz(15))\nprint(fizzbuzz(3))\nprint(fizzbuzz(5))\nprint(fizzbuzz(7))\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "`is_palindrome` should return True if a word reads the same backwards. It builds the reversed word but compares it to the wrong thing. Fix the return so `\"racecar\"` is True and `\"hello\"` is False.",
      starter: "def is_palindrome(word):\n    reversed_word = \"\"\n    for char in word:\n        reversed_word = char + reversed_word\n    return reversed_word == reversed_word\n\nprint(is_palindrome(\"racecar\"))\nprint(is_palindrome(\"hello\"))\n",
      check: { type: "output", expected: "True\nFalse" },
      hints: [
        "It compares the reversed word to itself — always True.",
        "Compare it to the original.",
        "return reversed_word == word",
      ],
      solution: "def is_palindrome(word):\n    reversed_word = \"\"\n    for char in word:\n        reversed_word = char + reversed_word\n    return reversed_word == word\n\nprint(is_palindrome(\"racecar\"))\nprint(is_palindrome(\"hello\"))\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: write `count_vowels(text)` (loop and count), `is_palindrome(word)` (reverse and compare to the original), and `word_inspector(word)` that calls both and prints a 3-line report: `Vowels: N`, then `Palindrome: True/False`, then the word in capitals. Test with `word_inspector(\"racecar\")` and `word_inspector(\"hello\")`.",
      starter: "",
      check: { type: "output", expected: "Vowels: 3\nPalindrome: True\nRACECAR\nVowels: 2\nPalindrome: False\nHELLO" },
      hints: [
        "Write the two helpers first, each returning a value.",
        "`word_inspector` calls both and prints three lines.",
        "`word.upper()` for the last line.",
      ],
      solution: "def count_vowels(text):\n    total = 0\n    for char in text:\n        if char in \"aeiou\":\n            total += 1\n    return total\n\ndef is_palindrome(word):\n    reversed_word = \"\"\n    for char in word:\n        reversed_word = char + reversed_word\n    return reversed_word == word\n\ndef word_inspector(word):\n    print(\"Vowels:\", count_vowels(word))\n    print(\"Palindrome:\", is_palindrome(word))\n    print(word.upper())\n\nword_inspector(\"racecar\")\nword_inspector(\"hello\")\n",
    },
  ],
  codex: {
    topic: "word tools",
    pattern: "def count_vowels(text):\n    total = 0\n    for c in text:\n        if c in \"aeiou\": total += 1\n    return total",
    note: "Build small functions that each return a value, then combine them: one function can call two others and report their results.",
  },
});

/* ── Lesson 3.10 — Finale: Art & Music (cumulative) ──────────────────── */

window.CODELAB.lessons.push({
  id: "c3s10",
  chapter: 3,
  strand: "core",
  lang: "py",
  timeBudgetMin: 18,
  title: "Finale: Art & Music",
  content: [
    {
      type: "text",
      md: "Three chapters of tools now stack: Chapter 1's `forward`/`play`/`print`, Chapter 2's loops, Chapter 3's functions. Read the worked example, then build three of your own.",
    },
    {
      type: "example",
      note: "A petal function, drawn in a ring — forward/right from Chapter 1, a loop from Chapter 2, functions from Chapter 3. Try draw_flower(8, 50).",
      code: "def petal(size):\n    forward(size)\n    right(180)\n    forward(size)\n    right(180)\n\ndef draw_flower(petals=6, size=60):\n    for _ in range(petals):\n        petal(size)\n        right(360 / petals)\n\ndraw_flower()\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete `draw_spiral(steps, angle=91)` so each step goes `forward(10 + i * 10)` and turns `right(angle)`. It's called with `draw_spiral(5)`.",
      starter: "def draw_spiral(steps, angle=91):\n    for i in range(steps):\n        pass  # forward(10 + i * 10)\n        pass  # right(angle)\n\ndraw_spiral(5)\n",
      check: {
        type: "calls",
        calls: [
          { fn: "forward", val: 10 }, { fn: "right", val: 91 },
          { fn: "forward", val: 20 }, { fn: "right", val: 91 },
          { fn: "forward", val: 30 }, { fn: "right", val: 91 },
          { fn: "forward", val: 40 }, { fn: "right", val: 91 },
          { fn: "forward", val: 50 }, { fn: "right", val: 91 },
        ],
      },
      hints: [
        "The distance grows with `i`.",
        "The angle stays fixed.",
        "`forward(10 + i * 10)` then `right(angle)`.",
      ],
      solution: "def draw_spiral(steps, angle=91):\n    for i in range(steps):\n        forward(10 + i * 10)\n        right(angle)\n\ndraw_spiral(5)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: write `draw_snowflake(branches=6, size=60)`. For each branch: `forward(size)`, `right(180)`, `forward(size)` back, then `right(360 / branches)` to face the next. Call `draw_snowflake()`.",
      starter: "",
      check: {
        type: "calls",
        calls: [
          { fn: "forward", val: 60 }, { fn: "right", val: 180 }, { fn: "forward", val: 60 }, { fn: "right", val: 60 },
          { fn: "forward", val: 60 }, { fn: "right", val: 180 }, { fn: "forward", val: 60 }, { fn: "right", val: 60 },
          { fn: "forward", val: 60 }, { fn: "right", val: 180 }, { fn: "forward", val: 60 }, { fn: "right", val: 60 },
          { fn: "forward", val: 60 }, { fn: "right", val: 180 }, { fn: "forward", val: 60 }, { fn: "right", val: 60 },
          { fn: "forward", val: 60 }, { fn: "right", val: 180 }, { fn: "forward", val: 60 }, { fn: "right", val: 60 },
          { fn: "forward", val: 60 }, { fn: "right", val: 180 }, { fn: "forward", val: 60 }, { fn: "right", val: 60 },
        ],
      },
      hints: [
        "A loop over the branches.",
        "Out and back, then turn to the next.",
        "Turn `360 / branches`.",
      ],
      solution: "def draw_snowflake(branches=6, size=60):\n    for _ in range(branches):\n        forward(size)\n        right(180)\n        forward(size)\n        right(360 / branches)\n\ndraw_snowflake()\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: write `play_verse(root)` that plays root, root+2, root+4, root+7 with `sleep(0.25)` after each. Then `song(root=60)` that calls `play_verse(root)`, then `play_verse(root + 5)`, then plays `root` once and sleeps 1. Call `song()`.",
      starter: "",
      check: {
        type: "calls",
        calls: [
          { fn: "play", note: 60 }, { fn: "play", note: 62 }, { fn: "play", note: 64 }, { fn: "play", note: 67 },
          { fn: "play", note: 65 }, { fn: "play", note: 67 }, { fn: "play", note: 69 }, { fn: "play", note: 72 },
          { fn: "play", note: 60 },
        ],
      },
      hints: [
        "`play_verse` plays four notes off `root`.",
        "`song` calls it twice — at root and root+5.",
        "Then one more `play(root)` and a `sleep(1)`.",
      ],
      solution: "def play_verse(root):\n    play(root)\n    sleep(0.25)\n    play(root + 2)\n    sleep(0.25)\n    play(root + 4)\n    sleep(0.25)\n    play(root + 7)\n    sleep(0.25)\n\ndef song(root=60):\n    play_verse(root)\n    play_verse(root + 5)\n    play(root)\n    sleep(1)\n\nsong()\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch — the capstone. Write `draw_polygon(sides, length)` (draws the shape with a loop). Write `perimeter(sides, length)` that *returns* `sides * length`. Then `shape_report(sides, length)`: draw the polygon, then print `Perimeter: N` using perimeter's returned value in an f-string. Call `shape_report(4, 60)`. (The checker reads the printed line; the drawing is part of the task.)",
      starter: "",
      check: { type: "output", expected: "Perimeter: 240" },
      hints: [
        "Three functions: one draws, one returns a number, one combines them.",
        "`perimeter` uses `return`, not print.",
        "`print(f\"Perimeter: {perimeter(sides, length)}\")` — 4 × 60 is 240.",
      ],
      solution: "def draw_polygon(sides, length):\n    for _ in range(sides):\n        forward(length)\n        right(360 / sides)\n\ndef perimeter(sides, length):\n    return sides * length\n\ndef shape_report(sides, length):\n    draw_polygon(sides, length)\n    print(f\"Perimeter: {perimeter(sides, length)}\")\n\nshape_report(4, 60)\n",
    },
  ],
  codex: {
    topic: "art & music finale",
    pattern: "def shape(...): ...       # draw\ndef measure(...): return  # compute\ndef report(...): shape(); print(measure())",
    note: "Combine everything: functions that draw, functions that return a number, and a function that calls both. Three chapters of tools working together.",
  },
});
