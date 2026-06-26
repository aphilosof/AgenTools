/* Chapter 3 — Functions
   Lessons: c3s0 Hook · c3s1 Defining · c3s2 Parameters · c3s3 Return
            c3s4 Scope · c3s5 Defaults · c3s6 Draw · c3s7 Bassline
            c3s8 Wild · c3s9 Capstone */

/* ── Lesson 3.0 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c3s0",
  chapter: 3,
  strand: "core",
  lang: "py",
  timeBudgetMin: 15,
  title: "The Shortcut Machine",
  glossary: {
    function: "A named, reusable block of code that runs when you call it by name.",
    definition: "The `def` block that creates a function — it describes what to do, but does not run it yet.",
    call: "The line of code that actually runs a function, written as `name()` with parentheses.",
  },
  content: [
    {
      type: "text",
      md: "## The copy-paste trap\n\nImagine you want to print a cheer three times.\n\nHere is the copy-paste version:\n\n```\nprint(\"Go team!\")\nprint(\"Win this!\")\nprint(\"Go team!\")\nprint(\"Win this!\")\nprint(\"Go team!\")\nprint(\"Win this!\")\n```\n\nSix lines. It works — for now.\n\nBut what if the cheer changes? You edit line 1, then line 3, then line 5. Miss one and you have a bug. That is the **failure mode of copy-paste**: every change must happen in five places instead of one.\n\nThis is so common in programming that it has a name: the **[[DRY]]** principle — **Don't Repeat Yourself**. Copy-paste is the enemy of DRY. A [[function]] is the cure.",
    },
    {
      type: "text",
      md: "## def creates a recipe — it does not cook the meal\n\nIn Chapter 2, every line of code ran the moment Python reached it. A [[definition]] changes that rule.\n\nThink of `def` like writing a recipe card. The card describes what to do. But writing the card does not make the food. You have to *use* the recipe to actually cook.\n\nWith a [[function]], Python reads the `def` block and sets it aside. Nothing prints. Nothing runs. The code just waits.\n\nThen, when you write the function name followed by `()`, that is the [[call]]. Python pulls out the recipe card and follows it from top to bottom. When the body is done, Python returns to where it left off.\n\nThis is the [[abstraction]] idea: you give a name to a whole block of steps. Instead of thinking about the steps, you just say the name.",
    },
    {
      type: "example",
      note: "def on line 1 creates the function. Nothing prints until cheer() is called on line 4.",
      code: "def cheer():\n    print(\"Go team!\")\n    print(\"Win this!\")\n\ncheer()  # runs the body once\n",
    },
    {
      type: "text",
      md: "## Change once, fix everywhere\n\nHere is why [[function|functions]] beat copy-paste for real.\n\nSuppose you copy-pasted that cheer five times across your program. Then your team changes its name. You now have **five places** to edit. One slip and the old name is still in there — that is a bug you might not notice.\n\nWith a function, there is **one place**: the `def` block. You change it once. Every [[call]] in the entire program automatically uses the new version. This is the DRY principle in action.\n\nThe CS rule here is: **a bug should be fixable in exactly one place**. Copy-paste makes that impossible. Functions make it automatic.",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Read this program carefully. Predict the output — write it down before you run it. What prints first? What prints after `---`? Then run it to check.",
      starter: 'def cheer():\n    print("Go!")\n    print("Yeah!")\n\ncheer()\nprint("---")\ncheer()\n',
      check: { type: "output", expected: "Go!\nYeah!\n---\nGo!\nYeah!" },
      hints: [
        "def does not print anything. It just saves the recipe.",
        "cheer() on line 5 runs the body for the first time.",
        "print(\"---\") runs between the two calls — so it appears in between.",
      ],
      solution: 'def cheer():\n    print("Go!")\n    print("Yeah!")\n\ncheer()\nprint("---")\ncheer()\n',
    },
    {
      type: "exercise",
      rung: 2,
      prompt: "Arrange these lines into a working program. The function must be defined before it is called. The blank line goes between the definition and the calls.",
      starter: "",
      check: {
        type: "parsons",
        lines: [
          "def cheer():",
          '    print("Go!")',
          '    print("Yeah!")',
          "",
          "cheer()",
          "cheer()",
        ],
        distractors: ["cheer", '    print("cheer()")'],
      },
      hints: [
        "def cheer(): must be the very first line.",
        "The two print lines must be indented inside the def block.",
        "The blank line separates the definition from the calls.",
      ],
      solution: 'def cheer():\n    print("Go!")\n    print("Yeah!")\n\ncheer()\ncheer()\n',
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "This `cheer()` function prints one line, and it is called three times. Change the body so it prints `Python is awesome!` then `Keep going!` — two lines instead of one. Run it. Notice that all three calls update automatically. That is DRY in action.",
      starter: 'def cheer():\n    print("Go team!")\n\ncheer()\ncheer()\ncheer()\n',
      check: {
        type: "output",
        expected: "Python is awesome!\nKeep going!\nPython is awesome!\nKeep going!\nPython is awesome!\nKeep going!",
      },
      hints: [
        "Add a second print() inside the def block, below the first one.",
        "Both prints must be indented with four spaces to stay inside the function.",
        "You only change the def block — the three cheer() calls stay exactly the same.",
      ],
      solution: 'def cheer():\n    print("Python is awesome!")\n    print("Keep going!")\n\ncheer()\ncheer()\ncheer()\n',
    },
  ],
  codex: {
    topic: "functions",
    pattern: "def name():\n    ...body...\n\nname()  # call it",
    note: "A function is a named block of code. def defines it; calling it by name runs it. DRY: write once, call anywhere.",
  },
});

/* ── Lesson 3.1 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c3s1",
  chapter: 3,
  strand: "core",
  lang: "py",
  timeBudgetMin: 20,
  title: "Defining a Function",
  glossary: {
    definition: "A `def` block that gives a chunk of code a name so you can run it later.",
    body: "The indented lines inside a function that run when the function is called.",
    call: "The line of code that tells Python to actually run a function, written as `name()`.",
    indentation: "The spaces at the start of a line that tell Python which block it belongs to.",
    None: "Python's value for 'nothing' — what a function returns when it has no `return` statement.",
  },
  content: [
    {
      type: "text",
      md: "## The Problem Functions Solve\n\nImagine you wrote ten lines to draw a star.\n\nNow you need to draw it five times.\n\nWithout functions, you copy those ten lines five times — **50 lines** that are almost identical.\n\nThis breaks the **DRY principle**: Don't Repeat Yourself.\n\nEvery copy is a bug waiting to happen. Fix the star? You fix it in five places.\n\nA [[definition]] lets you name the ten lines once, then just say `draw_star()` five times.\n\nThat is the core idea: **name it once, run it many times**."
    },
    {
      type: "text",
      md: "## Anatomy of a `def`\n\nHere is the smallest possible function:\n\n```\ndef greet():\n    print(\"Hello!\")\n```\n\nFour parts, each has a job:\n\n**`def`** — the keyword that says \"I am defining a function.\"\n\n**`greet`** — the name you choose. Use [[indentation]] snake_case: lowercase words joined by underscores.\n\n**`()`** — the parentheses. Empty for now; later they will hold inputs.\n\n**`:`** — the colon that opens a new block.\n\nThen comes the [[body]] — every line indented **exactly 4 spaces**.\n\nNotice: `def` uses the same colon + indent pattern as `if`, `for`, and `while`.\n\nPython is consistent — every block opens with `:` and indents.\n\nThe difference: `def` does **not** run the body right away."
    },
    {
      type: "text",
      md: "## The Two-Pass Mental Model\n\nPython reads your file top-to-bottom, but it does **two different things** as it goes.\n\nWhen Python sees a `def` line, it **registers** the function — it remembers the name and stores the body. It does NOT execute a single line of the body.\n\nWhen Python sees a [[call]] like `greet()`, it jumps into the body and runs it.\n\nThink of it like a recipe card. Writing the recipe on the card (the `def`) does not cook the food. Calling the recipe — actually following the steps — is the [[call]].\n\n**Order matters.** The call must come *after* the `def`:\n\n```\ngreet()       # NameError! Python hasn't read the def yet.\n\ndef greet():\n    print(\"Hello!\")\n```\n\nPython hits `greet()` before it has registered the function. It raises `NameError: name 'greet' is not defined`.\n\n**Fix:** always put `def` blocks before the calls that use them."
    },
    {
      type: "example",
      note: "Watch the order of output. Python reads the def first but skips its body. The call on line 4 is what triggers 'Hello!'.",
      code: "def greet():\n    print(\"Hello!\")\n\nprint(\"A\")\ngreet()\nprint(\"B\")\n"
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "**Predict the output.** Read the code carefully. Python reads `def greet()` first but does not run it. Where does `greet()` actually fire? Write out the three lines of output in order, then run it to check.",
      starter: "def greet():\n    print(\"Hello!\")\n\nprint(\"A\")\ngreet()\nprint(\"B\")\n",
      check: { type: "output", expected: "A\nHello!\nB" },
      hints: [
        "The def block is skipped on the first pass. Look at the first line that Python actually *executes*.",
        "print(\"A\") runs first. Then greet() triggers the body. Then print(\"B\") runs.",
        "Output is: A, then Hello!, then B — one per line."
      ],
      solution: "def greet():\n    print(\"Hello!\")\n\nprint(\"A\")\ngreet()\nprint(\"B\")\n"
    },
    {
      type: "exercise",
      rung: 2,
      prompt: "**Arrange the lines** to build a function called `greet` that prints two lines, then call it once. Watch out for the decoys — one has wrong syntax and one misunderstands what a call looks like.",
      starter: "",
      check: {
        type: "parsons",
        lines: [
          "def greet():",
          '    print("Hello!")',
          '    print("Nice to meet you.")',
          "",
          "greet()"
        ],
        distractors: [
          'print("greet()")',
          "def greet:"
        ]
      },
      hints: [
        "The def line must end with a colon. `def greet:` is missing the parentheses — Python requires them.",
        "The two print lines belong inside the function. They need 4 spaces of indentation.",
        "`print(\"greet()\")` just prints the text greet() — it does not call the function. The real call is `greet()`."
      ],
      solution: "def greet():\n    print(\"Hello!\")\n    print(\"Nice to meet you.\")\n\ngreet()\n"
    },
    {
      type: "text",
      md: "## IndentationError: The #1 Beginner Mistake\n\nThe [[body]] of a function **must** be indented. Forget the indent and Python raises `IndentationError`:\n\n```\ndef greet():\nprint(\"Hello!\")   # IndentationError — no indent!\n```\n\nPython sees a colon and expects at least one indented line. If the very next line is at column zero, it panics.\n\nThe fix is always the same: add 4 spaces before every line inside the function.\n\nThis is the same rule as `if` and `for` — Python uses [[indentation]] to show what belongs inside a block."
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "**Fix the bug.** This function has an `IndentationError`. Find the line that is in the wrong place and fix it so the program prints `Hello!`.",
      starter: "def greet():\nprint(\"Hello!\")\n\ngreet()\n",
      check: { type: "output", expected: "Hello!" },
      hints: [
        "Python raised IndentationError. That always means a line is at the wrong indent level.",
        "The `print` line is at column 0 — it looks like it is outside the function. It needs to move right.",
        "Add 4 spaces before `print(\"Hello!\")` so it sits inside the def block."
      ],
      solution: "def greet():\n    print(\"Hello!\")\n\ngreet()\n"
    },
    {
      type: "text",
      md: "## Functions Return `None` When You Don't Say Otherwise\n\nEvery function gives back a value when it finishes. If you don't write `return`, Python gives back the special value **[[None]]**.\n\n`None` means \"nothing\". It has its own type: `type(None)` gives `<class 'NoneType'>`.\n\nWatch what happens when you store the result of `greet()`:\n\n```\ndef greet():\n    print(\"Hello!\")\n\nx = greet()   # greet prints Hello!, then returns None\nprint(x)      # prints: None\n```\n\n**Anti-pattern:** treating a void function's result as a useful value.\n\n```\ntotal = print(1 + 2)   # print() returns None, not 3!\nprint(total + 1)       # TypeError: unsupported operand type(s) for +: 'NoneType' and 'int'\n```\n\n`print()` itself returns `None`. Storing its result and doing math on it crashes.\n\n**The rule:** if a function's job is to *do* something (print, draw, play a note), don't store its return value. If its job is to *compute* something, it should have a `return` statement — which you will see in the next lesson."
    },
    {
      type: "example",
      note: "The function prints 'Hello!' as a side effect, but its return value is None. Storing it and printing it confirms that.",
      code: "def greet():\n    print(\"Hello!\")\n\nx = greet()\nprint(x)\n"
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "**Complete the function.** Fill in the body of `describe()` so it prints exactly these two lines:\n\n```\nI am Python.\nI run on your computer.\n```\n\nThen the two calls at the bottom will run it twice.",
      starter: "def describe():\n    pass  # print \"I am Python.\"\n    pass  # print \"I run on your computer.\"\n\ndescribe()\ndescribe()\n",
      check: { type: "output", expected: "I am Python.\nI run on your computer.\nI am Python.\nI run on your computer." },
      hints: [
        "Replace each `pass` line with a `print()` call. Keep the 4-space indent.",
        "The first print should output exactly: I am Python.",
        "The second print should output exactly: I run on your computer. — note the period at the end."
      ],
      solution: "def describe():\n    print(\"I am Python.\")\n    print(\"I run on your computer.\")\n\ndescribe()\ndescribe()\n"
    }
  ],
  codex: {
    topic: "def syntax",
    pattern: "def name():\n    body...\n\nname()  # call",
    note: "`def` registers the function but does not run it. The body runs only when called. Every function without `return` gives back `None`.",
  },
});

/* ── Lesson 3.2 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c3s2",
  chapter: 3,
  strand: "numbers",
  lang: "py",
  timeBudgetMin: 20,
  title: "Parameters and Arguments",
  glossary: {
    parameter: "A variable name in a function definition that acts as a placeholder for the value passed in.",
    argument: "The actual value you pass to a function when you call it.",
    binding: "The moment Python assigns an argument value to a parameter name when a function is called.",
  },
  content: [
    {
      type: "text",
      md: "## The Blank Label on the Box\n\nLook at this function:\n\n```python\ndef double(n):\n    print(n * 2)\n```\n\n`n` is a **[[parameter]]**. It is a blank label on a box — the box has no value yet.\n\nWhen you write `double(7)`, Python does something specific: it **[[binding|binds]]** the value `7` to the name `n`. That binding step is `n = 7`. Then the body runs with `n` holding `7`.\n\nThe value `7` in the call is the **[[argument]]**. So: **parameter = placeholder in the definition. Argument = real value in the call.**\n\nThink of it like a recipe. The recipe says \"add N cups of flour.\" N is the parameter — a blank. When you actually bake, you decide N is 2. That decision is the argument."
    },
    {
      type: "example",
      note: "Watch the binding happen twice. Each call creates a fresh n.",
      code: "def double(n):\n    print(n * 2)\n\ndouble(7)   # binding: n = 7, prints 14\ndouble(3)   # binding: n = 3, prints 6\n"
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Predict the output. Trace each call: what value does `n` get bound to? What does `n * 2` produce?",
      starter: "def double(n):\n    print(n * 2)\n\ndouble(7)\ndouble(3)\n",
      check: { type: "output", expected: "14\n6" },
      hints: [
        "The first call passes 7, so n = 7. What is 7 * 2?",
        "The second call passes 3, so n = 3. What is 3 * 2?",
        "Each call produces one line of output."
      ],
      solution: "def double(n):\n    print(n * 2)\n\ndouble(7)\ndouble(3)\n"
    },
    {
      type: "text",
      md: "## Names Are Independent\n\nHere is a common misconception. Students think the caller's variable name must match the parameter name. It does not.\n\n```python\nx = 10\ndouble(x)\n```\n\nPython passes the **value** `10`, not the variable `x`. Inside `double`, only `n` exists — `x` is invisible there. You could rename `x` to `apples` and `double` would not care.\n\nThis is the **LEGB scope rule** at work. The function body has its own local scope. It sees `n` but it cannot see `x`, `apples`, or anything else from the caller.\n\nWhy did Python choose this design? It prevents functions from accidentally reading or overwriting the caller's variables. Each function is a sealed room — inputs arrive through the parameter door only."
    },
    {
      type: "text",
      md: "## Multiple Parameters — Order Matters\n\nYou can have more than one parameter. Separate them with commas:\n\n```python\ndef subtract(a, b):\n    print(a - b)\n\nsubtract(10, 3)   # a = 10, b = 3 → prints 7\nsubtract(3, 10)   # a = 3,  b = 10 → prints -7\n```\n\nPython matches arguments to parameters **by position**, left to right. Swapping the arguments gives a different answer — sometimes a wrong one. This is called **positional binding**.\n\nThe CS principle here is **DRY** (Don't Repeat Yourself). Instead of writing separate `subtract_10_3` and `subtract_3_10` functions, one function with parameters covers every case.\n\nTo add a second parameter, just add it to the `def` line and update your call to pass both values."
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "The function `square(n)` works, but it only prints the number. Add a second parameter `label`. Change `print` to show `label + \": \" + str(n * n)`. Then update the call to `square(5, \"Area\")`.",
      starter: "def square(n):\n    print(n * n)\n\nsquare(5)\n",
      check: { type: "output", expected: "Area: 25" },
      hints: [
        "Change `def square(n):` to `def square(n, label):`.",
        "Change `print(n * n)` to `print(label + \": \" + str(n * n))`.",
        "Change the call to `square(5, \"Area\")`."
      ],
      solution: "def square(n, label):\n    print(label + \": \" + str(n * n))\n\nsquare(5, \"Area\")\n"
    },
    {
      type: "text",
      md: "## TypeError — The Wrong Argument Count\n\nPython counts arguments at call time. If the count is wrong, you get a `TypeError` immediately.\n\n**Anti-pattern:**\n```python\ndef add(a, b):\n    print(a + b)\n\nadd(3)   # TypeError: add() missing 1 required positional argument: 'b'\n```\n\nWhat breaks: Python cannot bind `b` because no second argument was passed. The function cannot run at all.\n\nThe error message tells you exactly what is missing. The fix is always: look at the `def` line, count the parameters, then match that count in your call.\n\nDo not guess — read the `def`. If `def add(a, b):` has two parameters, every call needs two arguments."
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This code crashes with a `TypeError`. Find the bug and fix it so the output is `8`.",
      starter: "def add(a, b):\n    print(a + b)\n\nadd(3)\n",
      check: { type: "output", expected: "8" },
      hints: [
        "Run it and read the TypeError message carefully.",
        "`def add(a, b)` has two parameters. How many arguments does the call pass?",
        "Change `add(3)` to `add(3, 5)`."
      ],
      solution: "def add(a, b):\n    print(a + b)\n\nadd(3, 5)\n"
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete `celsius_to_f`. The formula is `(c * 9 / 5) + 32`. Replace `pass` with a `return` statement using that formula.",
      starter: "def celsius_to_f(c):\n    pass  # return (c * 9 / 5) + 32\n\nprint(celsius_to_f(0))\nprint(celsius_to_f(100))\n",
      check: { type: "output", expected: "32.0\n212.0" },
      hints: [
        "Delete the `pass` line.",
        "Write `return (c * 9 / 5) + 32` in its place.",
        "The two print calls are already correct — only the function body needs fixing."
      ],
      solution: "def celsius_to_f(c):\n    return (c * 9 / 5) + 32\n\nprint(celsius_to_f(0))\nprint(celsius_to_f(100))\n"
    },
  ],
  codex: {
    topic: "parameters",
    pattern: "def name(param1, param2):\n    ...\n\nname(arg1, arg2)",
    note: "A parameter is a placeholder name in the definition. An argument is the real value in the call. Python binds argument to parameter at call time. Wrong argument count gives TypeError.",
  },
});

/* ── Lesson 3.3 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c3s3",
  chapter: 3,
  strand: "numbers",
  lang: "py",
  timeBudgetMin: 25,
  title: "Return Values",
  glossary: {
    return: "A statement that sends a value back to the caller and immediately exits the function.",
    caller: "The code that calls a function and receives its return value.",
    composition: "Building a complex operation by passing one function's return value into another function.",
  },
  content: [
    {
      type: "text",
      md: "## print vs return — the key distinction\n\nThese two lines look similar but do very different things:\n\n```\nprint(a + b)   # sends the answer to the SCREEN\nreturn a + b   # sends the answer to the CALLER\n```\n\nHere is the same function written two ways:\n\n```\ndef add_wrong(a, b):   # anti-pattern\n    print(a + b)\n\ndef add_right(a, b):   # correct\n    return a + b\n```\n\nNow try to use the result:\n\n```\ntotal = add_wrong(3, 4) + 1   # CRASH: TypeError\ntotal = add_right(3, 4) + 1   # works: total is 8\n```\n\nWhy does `add_wrong` crash? It prints `7` to the screen, then returns `None`. Python tries to compute `None + 1` — and `None` is not a number, so you get a **TypeError**.\n\nThe rule: **if you need the answer anywhere else in your program, use `return`, not `print`.**\n\nThis is the single most common beginner bug in Python. Knowing it by name — the **print-not-return bug** — helps you spot it instantly."
    },
    {
      type: "text",
      md: "## None revisited\n\nEvery function that has no `return` statement gives back `None`. This connects to what you learned in Lesson 3.1.\n\n`None` is Python's way of saying \"no answer\". It is a real value with its own type (`NoneType`). It is not zero. It is not an empty string. It means *nothing was returned*.\n\nYou can store `None` in a variable — Python will not complain. But the moment you try to use `None` in arithmetic or string building, you get a crash.\n\nCS principle: Python chose to make \"no return value\" explicit by giving it a name (`None`) rather than silently returning zero or crashing. That design choice makes bugs visible instead of hiding them."
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Read this code and **predict** the output before running it. What does `x` hold after the call to `say_hi()`? Why?",
      starter: "def say_hi():\n    print(\"Hi!\")\n\nx = say_hi()\nprint(x)\n",
      check: { type: "output", expected: "Hi!\nNone" },
      hints: [
        "say_hi() does not have a return statement.",
        "Any function without return gives back None.",
        "The first line of output comes from inside say_hi(). The second comes from print(x)."
      ],
      solution: "def say_hi():\n    print(\"Hi!\")\n\nx = say_hi()\nprint(x)\n"
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "The `add` function below uses `print` instead of `return`. Change **one line** inside `add` so that `result` holds the number `7` and the final print shows `Total: 7`.",
      starter: "def add(a, b):\n    print(a + b)\n\nresult = add(3, 4)\nprint(\"Total:\", result)\n",
      check: { type: "output", expected: "Total: 7" },
      hints: [
        "The fix is inside the add function, not outside it.",
        "Replace print(a + b) with return a + b.",
        "Once add returns the value, result holds 7 and the outer print works."
      ],
      solution: "def add(a, b):\n    return a + b\n\nresult = add(3, 4)\nprint(\"Total:\", result)\n"
    },
    {
      type: "text",
      md: "## Early return — exit the function immediately\n\nA `return` statement does two things at once: it sends a value back to the [[caller]], **and it exits the function right there**. No more lines in the function run.\n\nThis is very useful for **guard clauses** — checks at the top of a function that handle special cases early:\n\n```\ndef is_prime(n):\n    if n < 2:\n        return False   # exit immediately, skip the loop\n    for divisor in range(2, n):\n        ...\n```\n\nWithout early return, you would need to wrap the entire loop in an `if n >= 2:` block. The code gets more deeply indented and harder to read.\n\nCS principle: **single exit vs early exit** is a real design debate. In short functions, early return is cleaner. The key insight: once you know the answer, return it — don't make the function do extra work."
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This code crashes with a **TypeError**. Find the bug — it is the print-not-return bug. Fix it so the output is `11`.",
      starter: "def double(n):\n    print(n * 2)\n\nresult = double(5) + 1\nprint(result)\n",
      check: { type: "output", expected: "11" },
      hints: [
        "Run it and read the TypeError carefully: NoneType and int can't be added.",
        "double() prints but returns None. None + 1 crashes.",
        "Change print(n * 2) to return n * 2 inside the function."
      ],
      solution: "def double(n):\n    return n * 2\n\nresult = double(5) + 1\nprint(result)\n"
    },
    {
      type: "text",
      md: "## Composition — functions calling functions\n\n[[Composition]] means passing one function's return value directly into another function. It works because `return` gives the [[caller]] a real value to use.\n\n```\ndef square(n):\n    return n * n\n\ndef double(n):\n    return n * 2\n\nresult = double(square(3))   # square(3) gives 9, double(9) gives 18\nprint(str(result) + \" is the answer\")  # str() wraps the int\n```\n\nPython evaluates this from the inside out: `square(3)` runs first and returns `9`. Then `double(9)` runs and returns `18`. Then `str(18)` returns `\"18\"`.\n\nThis is how programs scale without becoming spaghetti. Each function does one job cleanly. You combine them to build more powerful operations — without rewriting any of the pieces.\n\nAlternative without composition: you would need `temp1 = square(3)`, then `temp2 = double(temp1)`, then `str(temp2)`. That is fine too, and sometimes clearer. But composition is shorter when the logic is simple."
    },
    {
      type: "text",
      md: "## Accumulator pattern + return\n\nIn Chapter 2 you learned the **accumulator pattern** — starting at zero and adding to a running total inside a loop. That pattern was always followed by a `print` at the end.\n\nNow you can replace that `print` with a `return` — and suddenly the caller can use the result:\n\n```\ndef sum_to(n):\n    total = 0\n    for i in range(1, n + 1):\n        total += i\n    return total\n\nbig_sum = sum_to(100)\nprint(\"Sum:\", big_sum)\nprint(\"Double:\", big_sum * 2)   # can use it twice!\n```\n\nIf `sum_to` printed instead of returning, you could never use the result in `big_sum * 2`. The value would be stuck on the screen, unreachable.\n\nThis is the payoff of `return`: it makes your function's answer **available to the rest of the program**."
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete `sum_to(n)`. It should add all integers from `1` to `n` and **return** the total. The `return` is already there — fill in the missing line inside the loop (replace `pass`).",
      starter: "def sum_to(n):\n    total = 0\n    for i in range(1, n + 1):\n        pass  # add i to total\n    return total\n\nprint(sum_to(5))\nprint(sum_to(10))\n",
      check: { type: "output", expected: "15\n55" },
      hints: [
        "Replace pass with a line that adds i to total.",
        "The accumulator pattern: total += i",
        "The return is already written — just fix the body of the loop."
      ],
      solution: "def sum_to(n):\n    total = 0\n    for i in range(1, n + 1):\n        total += i\n    return total\n\nprint(sum_to(5))\nprint(sum_to(10))\n"
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write `is_prime(n)`. It should **return** `True` if `n` is a prime number, `False` otherwise.\n\nRules:\n- Any `n` less than 2 is **not** prime — return `False` immediately.\n- For `n >= 2`, try every number from `2` to `n - 1` using `range(2, n)`.\n- If any of them divides `n` evenly (remainder 0), `n` is not prime — return `False` early.\n- If the loop finishes without finding a divisor, return `True`.",
      starter: "def is_prime(n):\n    pass\n\nprint(is_prime(0))\nprint(is_prime(1))\nprint(is_prime(2))\nprint(is_prime(9))\nprint(is_prime(17))\n",
      check: { type: "output", expected: "False\nFalse\nTrue\nFalse\nTrue" },
      hints: [
        "Start with a guard clause: if n < 2, return False immediately.",
        "Use a for loop over range(2, n). Check if n % divisor == 0.",
        "If the loop finds a divisor, return False inside the loop. After the loop ends, return True."
      ],
      solution: "def is_prime(n):\n    if n < 2:\n        return False\n    for divisor in range(2, n):\n        if n % divisor == 0:\n            return False\n    return True\n\nprint(is_prime(0))\nprint(is_prime(1))\nprint(is_prime(2))\nprint(is_prime(9))\nprint(is_prime(17))\n"
    },
  ],
  codex: {
    topic: "return values",
    pattern: "def name(x):\n    return x * 2\n\nresult = name(5)  # result holds 10",
    note: "return sends a value to the caller. print sends to the screen. Without return, every function gives back None. return also exits the function immediately.",
  },
});

/* ── Lesson 3.4 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c3s4",
  chapter: 3,
  strand: "words",
  lang: "py",
  timeBudgetMin: 22,
  title: "Scope",
  glossary: {
    scope: "The region of a program where a variable name exists and can be read.",
    "local variable": "A variable created inside a function that disappears when the function returns.",
    "global variable": "A variable created outside all functions, visible throughout the file.",
    frame: "A private workspace Python creates for each function call, holding that call's local variables.",
  },
  content: [
    {
      type: "text",
      md: "## Every call gets its own whiteboard\n\nImagine each function call opens a **private whiteboard**. Only that call can see it.\n\nVariables you create inside the function are written on that whiteboard. When the call returns, Python **erases the whiteboard entirely**.\n\nTwo calls to the same function each get their **own separate whiteboard** — they never share notes. This private workspace is called a [[frame]].\n\nThe rule for which variables a name refers to is called the **LEGB rule**: Python looks **L**ocal first, then **G**lobal. Today we cover L and G.\n\nThis is the [[scope]] system. [[scope]] decides which variables a name refers to at any point in your program.",
    },
    {
      type: "example",
      note: "Both functions create a variable named `result`. They are completely independent — neither one affects the other.",
      code: 'def make_upper(text):\n    result = text.upper()   # this result lives only here\n    return result\n\ndef make_lower(text):\n    result = text.lower()   # different frame, different result\n    return result\n\nprint(make_upper("hello"))   # HELLO\nprint(make_lower("WORLD"))   # world\n',
    },
    {
      type: "text",
      md: "## Same name, different [[scope]]\n\nBoth functions above use `result`. They never clash.\n\nThis is what makes functions **safe to combine**. Internal names don't leak out. You can write `make_upper` without knowing anything about `make_lower`'s internals.\n\nThe CS principle at work here is **[[separation of concerns]]**: each function manages its own private state. No function needs to know what variables another function chose.\n\nCompare the alternative — one giant block of code with one shared `result` variable. Every line can overwrite it. You can't reuse any piece. Functions fix that completely.",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Read the code. Both functions have a [[local variable]] named `result`. Predict what prints — and explain to yourself why the two `result` variables never interfere.",
      starter: 'def make_upper(text):\n    result = text.upper()\n    return result\n\ndef make_lower(text):\n    result = text.lower()\n    return result\n\nprint(make_upper("hello"))\nprint(make_lower("WORLD"))\n',
      check: { type: "output", expected: "HELLO\nworld" },
      hints: [
        "Each function has its own [[frame]]. The `result` inside `make_upper` is not the same variable as the `result` inside `make_lower`.",
        "`make_upper` receives `\"hello\"` and calls `.upper()` on it. What does `.upper()` return?",
        "`make_lower` receives `\"WORLD\"` and calls `.lower()` on it. The two calls never overlap.",
      ],
      solution: 'def make_upper(text):\n    result = text.upper()\n    return result\n\ndef make_lower(text):\n    result = text.lower()\n    return result\n\nprint(make_upper("hello"))\nprint(make_lower("WORLD"))\n',
    },
    {
      type: "text",
      md: "## The `UnboundLocalError` trap\n\nHere is a subtle crash that surprises everyone the first time.\n\n```\ncount = 10\n\ndef reset():\n    count = count - 10\n    return count\n```\n\nPython **scans the entire function body before running a single line**. It sees `count =` inside the function, so it decides: `count` is a [[local variable]] throughout this function.\n\nNow when it tries to run `count - 10`, the local `count` has no value yet. Python raises `UnboundLocalError: local variable 'count' referenced before assignment`.\n\nThe anti-pattern: reaching outside your [[frame]] to read a [[global variable]] and then writing to a local with the same name in the same function.\n\n**The fix is always the same: pass the value as a parameter.**\n\n```\ndef reset(n):\n    return n - 10\n\nprint(reset(count))\n```\n\nNow `reset` owns its data through a parameter. No confusion about which `n` is local vs global — `n` is always local.",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This code crashes with `UnboundLocalError`. Fix it by giving `reset` a parameter instead of reading the global `count` directly.",
      starter: "count = 10\n\ndef reset():\n    count = count - 10\n    return count\n\nprint(reset())\n",
      check: { type: "output", expected: "0" },
      hints: [
        "Python sees `count =` inside `reset` and treats `count` as local throughout the function. But local `count` has no value before the assignment line runs.",
        "Remove the global `count` reference from inside the function. Add a parameter — something like `n` — and pass `count` when you call `reset`.",
        "The fixed function: `def reset(n): return n - 10` — then call it as `reset(count)`.",
      ],
      solution: "count = 10\n\ndef reset(n):\n    return n - 10\n\nprint(reset(count))\n",
    },
    {
      type: "text",
      md: "## The `global` keyword — and why not to use it\n\nPython does give you an escape hatch:\n\n```\ncount = 0\n\ndef add_one():\n    global count\n    count = count + 1\n```\n\nThe line `global count` tells Python: \"don't create a local `count` — reach outside my [[frame]] and modify the [[global variable]] directly.\"\n\nThis works. But **don't use it**.\n\nFunctions that modify [[global variable|global variables]] are hard to test — you can't call them without setting up global state first. They are hard to reuse — moving the function to a new file breaks it. Two functions that both use `global count` start interfering with each other in ways that are painful to debug.\n\nThe professional rule: **functions receive data through parameters and return data through `return`**. That is the entire contract. No side effects on shared variables.",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Each `pass` is a placeholder. Replace it with a real `return` statement so the functions work correctly.",
      starter: 'def shout(text):\n    pass  # return text.upper() + "!!!"\n\ndef whisper(text):\n    pass  # return text.lower() + "..."\n\nprint(shout("hello"))\nprint(whisper("GOODBYE"))\n',
      check: { type: "output", expected: "HELLO!!!\ngoodbye..." },
      hints: [
        "`pass` is a do-nothing placeholder. Delete it and write a real `return` statement.",
        "`shout` should return the text in upper case with `\"!!!\"` added on the end. Use `+` to join strings.",
        "`whisper` should return the text in lower case with `\"...\"` added on the end.",
      ],
      solution: 'def shout(text):\n    return text.upper() + "!!!"\n\ndef whisper(text):\n    return text.lower() + "..."\n\nprint(shout("hello"))\nprint(whisper("GOODBYE"))\n',
    },
    {
      type: "text",
      md: "## Functions calling functions: stacked frames\n\nWhen one function calls another, Python **stacks a new [[frame]] on top**.\n\nImagine `is_match(\"  Hello  \", \"hello\")` runs:\n\n1. Python opens an `is_match` [[frame]]. `a = \"  Hello  \"`, `b = \"hello\"`.\n2. `is_match` calls `clean(a)`. Python opens a **second** [[frame]] for `clean`. `text = \"  Hello  \"`.\n3. `clean` finishes and returns `\"hello\"`. Its [[frame]] closes and disappears.\n4. `is_match` calls `clean(b)`. A **new** `clean` [[frame]] opens. `text = \"hello\"`.\n5. That `clean` [[frame]] closes. `is_match` now compares the two results and returns.\n6. The `is_match` [[frame]] closes.\n\nThis layered structure is called the **call stack**. Real programs stack dozens of frames. Each frame is isolated — `clean` has no idea that `is_match` exists, and `is_match` has no idea how `clean` does its job. That is [[separation of concerns]] in action.",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write two functions. `clean(text)` strips whitespace and converts to lowercase. `is_match(a, b)` calls `clean()` on both arguments and returns `True` if they are equal, `False` otherwise. Use `clean` inside `is_match` — don't repeat the logic.",
      starter: "def clean(text):\n    pass\n\ndef is_match(a, b):\n    pass\n\nprint(is_match(\"  Hello  \", \"hello\"))\nprint(is_match(\"Python\", \"java\"))\n",
      check: { type: "output", expected: "True\nFalse" },
      hints: [
        "`clean` should call `.strip()` to remove whitespace, then `.lower()` to make it lowercase. Chain them: `text.strip().lower()`.",
        "`is_match` should call `clean(a)` and `clean(b)` separately, then compare the two results with `==`.",
        "One clean line: `return clean(a) == clean(b)`. The `==` comparison returns a bool directly.",
      ],
      solution: "def clean(text):\n    return text.strip().lower()\n\ndef is_match(a, b):\n    return clean(a) == clean(b)\n\nprint(is_match(\"  Hello  \", \"hello\"))\nprint(is_match(\"Python\", \"java\"))\n",
    },
  ],
  codex: {
    topic: "scope",
    pattern: "def f(x):\n    y = x * 2   # y is local\n    return y\n# y does not exist here",
    note: "A local variable exists only inside its function call. The same name in two functions never clashes. If Python sees any assignment inside a function, the name is treated as local throughout that function.",
  },
});

/* ── Lesson 3.5 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c3s5",
  chapter: 3,
  strand: "numbers",
  lang: "py",
  timeBudgetMin: 20,
  title: "Default Arguments and Docstrings",
  glossary: {
    "default argument": "A function parameter with a pre-set fallback value that the caller can omit.",
    "docstring": "A triple-quoted string placed first inside a function body that describes what the function does.",
  },
  content: [
    {
      type: "text",
      md: "## The problem defaults solve\n\nYou already know `range()` has shortcuts.\n\n`range(5)` is really `range(0, 5, 1)` — start and step have **default values**.\n\nWithout defaults, you would have to write `range(0, 5, 1)` every single time.\n\nThat violates **DRY** (Don't Repeat Yourself): the common case shouldn't need extra typing.\n\nPython's design choice: defaults make functions easy to call in the typical case, while still letting you override them when needed.\n\nAnti-pattern — imagine `range` had no defaults:\n\n```\nrange(5)        # SyntaxError — missing start and step!\nrange(0, 5, 1)  # you'd always have to write this\n```\n\nWith defaults, the common case is short, and the override is still possible."
    },
    {
      type: "text",
      md: "## Default argument syntax\n\nAdd `=value` after the parameter name:\n\n```\ndef greet(name, greeting=\"Hello\"):\n    return greeting + \", \" + name + \"!\"\n```\n\n`name` is **required** — the caller must pass it.\n\n`greeting` is **optional** — it falls back to `\"Hello\"` if omitted.\n\n**The order rule:** required parameters must come BEFORE defaulted ones.\n\nThis is a [[default argument]] constraint Python enforces strictly.\n\nBreaking the rule:\n\n```\ndef greet(greeting=\"Hello\", name):  # SyntaxError!\n    ...\n```\n\nError message: `SyntaxError: non-default argument follows default argument`.\n\nWhy? Python matches arguments **by position**.\n\nIf `greeting` has a default and comes first, Python can't tell which value goes where when you call `greet(\"Sam\")`."
    },
    {
      type: "example",
      note: "Calling with and without the default — notice that f(5) and f(5, 20) both work.",
      code: "def add_bonus(score, bonus=10):\n    return score + bonus\n\nprint(add_bonus(50))      # bonus uses default: 10\nprint(add_bonus(50, 25))  # bonus overridden to 25\n"
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "The function below requires both `name` and `greeting` every time it is called.\n\nAdd a default value of `\"Hello\"` to the `greeting` parameter.\n\nThen change the first `print` call to `greet(\"Sam\")` — no second argument — and keep the second call as `greet(\"Sam\", \"Hi\")`.\n\nExpected output:\n```\nHello, Sam!\nHi, Sam!\n```",
      starter: "def greet(name, greeting):\n    return greeting + \", \" + name + \"!\"\n\nprint(greet(\"Sam\", \"Hello\"))\nprint(greet(\"Sam\", \"Hi\"))\n",
      check: { type: "output", expected: "Hello, Sam!\nHi, Sam!" },
      hints: [
        "Change `greeting` to `greeting=\"Hello\"` in the `def` line.",
        "The first print call becomes `greet(\"Sam\")` — drop the second argument.",
        "Required parameters come before defaulted ones: `def greet(name, greeting=\"Hello\"):`"
      ],
      solution: "def greet(name, greeting=\"Hello\"):\n    return greeting + \", \" + name + \"!\"\n\nprint(greet(\"Sam\"))\nprint(greet(\"Sam\", \"Hi\"))\n"
    },
    {
      type: "text",
      md: "## Docstrings: built-in documentation\n\nA [[docstring]] is the **first string literal** inside a function body.\n\n```\ndef add_bonus(score, bonus=10):\n    \"\"\"Return score plus a bonus (default 10).\"\"\"\n    return score + bonus\n```\n\nPython stores it as `add_bonus.__doc__`.\n\nType `help(add_bonus)` in any Python shell and Python prints it — this is exactly how Python's own built-in docs work.\n\n**One-line vs multi-line:**\n\n```\n# Simple function — one line is enough\ndef double(x):\n    \"\"\"Return x multiplied by 2.\"\"\"\n    return x * 2\n\n# Complex function — multi-line explains each param\ndef repeat_word(word, times=3, sep=\" \"):\n    \"\"\"\n    Repeat word a number of times, joined by sep.\n\n    word  — the string to repeat\n    times — how many times (default 3)\n    sep   — separator between copies (default space)\n    \"\"\"\n    ...\n```\n\n**Anti-pattern — comment instead of docstring:**\n\n```\ndef double(x):\n    # Returns x multiplied by 2   <-- this is a comment, NOT a docstring\n    return x * 2\n\nhelp(double)  # prints nothing useful!\n```\n\nComments are invisible to `help()`. Always use triple quotes for function documentation."
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete `repeat_word` by replacing the two `pass` lines.\n\n- When `i == 0` (first iteration): set `result` to `word`.\n- Otherwise: append `sep + word` to `result`.\n\nExpected output:\n```\necho echo echo\necho echo\necho-echo-echo-echo\n```",
      starter: "def repeat_word(word, times=3, sep=\" \"):\n    result = \"\"\n    for i in range(times):\n        if i == 0:\n            pass  # set result to word\n        else:\n            pass  # append sep + word to result\n    return result\n\nprint(repeat_word(\"echo\"))\nprint(repeat_word(\"echo\", 2))\nprint(repeat_word(\"echo\", 4, \"-\"))\n",
      check: { type: "output", expected: "echo echo echo\necho echo\necho-echo-echo-echo" },
      hints: [
        "Replace the first `pass` with `result = word`.",
        "Replace the second `pass` with `result = result + sep + word`.",
        "The [[default argument]] values mean `repeat_word(\"echo\")` uses `times=3` and `sep=\" \"` automatically."
      ],
      solution: "def repeat_word(word, times=3, sep=\" \"):\n    result = \"\"\n    for i in range(times):\n        if i == 0:\n            result = word\n        else:\n            result = result + sep + word\n    return result\n\nprint(repeat_word(\"echo\"))\nprint(repeat_word(\"echo\", 2))\nprint(repeat_word(\"echo\", 4, \"-\"))\n"
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write `greet(name, greeting=\"Hello\", punctuation=\"!\")` from scratch.\n\nRules:\n- Add a [[docstring]] as the first line of the body.\n- Return `greeting + \", \" + name + punctuation`.\n\nExpected output:\n```\nHello, Sam!\nHi, Sam!\nHi, Sam?\n```",
      starter: "def greet(name, greeting=\"Hello\", punctuation=\"!\"):\n    pass\n\nprint(greet(\"Sam\"))\nprint(greet(\"Sam\", \"Hi\"))\nprint(greet(\"Sam\", \"Hi\", \"?\"))\n",
      check: { type: "output", expected: "Hello, Sam!\nHi, Sam!\nHi, Sam?" },
      hints: [
        "The [[docstring]] goes on the very first line inside the function: `\"\"\"Return a personalized greeting string.\"\"\"`",
        "Replace `pass` with `return greeting + \", \" + name + punctuation`.",
        "Required params come first: `name` has no default. The two [[default argument]] params follow it."
      ],
      solution: "def greet(name, greeting=\"Hello\", punctuation=\"!\"):\n    \"\"\"Return a personalized greeting string.\"\"\"\n    return greeting + \", \" + name + punctuation\n\nprint(greet(\"Sam\"))\nprint(greet(\"Sam\", \"Hi\"))\nprint(greet(\"Sam\", \"Hi\", \"?\"))\n"
    }
  ],
  codex: {
    topic: "default args + docstrings",
    pattern: "def f(x, y=10):\n    \"\"\"Short description.\"\"\"\n    return x + y\n\nf(3)     # y=10\nf(3, 20) # y=20",
    note: "Default arguments have a fallback value — callers can omit them. Required params come before defaulted ones (SyntaxError otherwise). A docstring (triple-quoted string, first in body) is displayed by help().",
  },
});

/* ── Lesson 3.6 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c3s6",
  chapter: 3,
  strand: "plot",
  lang: "py",
  timeBudgetMin: 22,
  title: "Functions That Draw",
  glossary: {
    decomposition: "Breaking a big problem into smaller, named sub-tasks — each handled by its own function.",
    "helper function": "A function that does one small job and is called by other functions to build something bigger.",
  },
  content: [
    {
      type: "text",
      md: "Imagine writing `draw_house` without functions.\n\nYou'd write 30-plus `forward()` and `right()` calls in a row. Finding a bug would mean reading every line.\n\nThat's the anti-pattern: **flat spaghetti code** with no structure.\n\n[[Decomposition]] is the CS principle that fixes this. You break the drawing into named jobs: `draw_square`, `draw_roof`, `draw_house`. Each function does one thing. `draw_house` just calls the helpers — it doesn't care *how* they work.\n\nThink of a recipe. A good one says \"make the dough\" as one step. A bad one lists every flour-and-yeast action inside the main method. Named sub-tasks make the top level readable.",
    },
    {
      type: "text",
      md: "Here's the key insight: **every regular polygon uses the same formula**.\n\nA regular polygon has equal sides and equal turns. After you walk one side, you turn by the exterior angle. The exterior angle is always `360 / sides`.\n\n- Square: `360 / 4 = 90°`\n- Triangle: `360 / 3 = 120°`\n- Hexagon: `360 / 6 = 60°`\n\nOne function covers all of them. That's [[abstraction]]: hide the repeated pattern behind a single name.\n\nWithout this, you'd write a separate loop for each shape — violating **DRY** (Don't Repeat Yourself).",
    },
    {
      type: "example",
      note: "draw_polygon works for any regular shape. The loop runs `sides` times. Each iteration moves forward, then turns by the exterior angle. Try it with 5, 8, or 12 sides.",
      code: "def draw_polygon(sides, length):\n    for _ in range(sides):\n        forward(length)\n        right(360 / sides)\n\ndraw_polygon(4, 60)  # square\ndraw_polygon(6, 50)  # hexagon\n",
    },
    {
      type: "text",
      md: "Now [[helper function]]s can call each other.\n\n`draw_square` calls `draw_polygon(4, size)`. `draw_house` calls `draw_square` and `draw_roof`. The top level just calls `draw_house`.\n\nBut there's a trap. What if you write this?\n\n```\ndef draw_house():\n    draw_square(side)   # BUG\n```\n\nPython looks for a variable named `side` in the current scope. There isn't one. You get `NameError: name 'side' is not defined`.\n\n**The rule:** every value a helper needs must be *passed explicitly* as an argument. Never assume a variable from somewhere else will be visible. If `draw_house` knows the size, it must hand it to `draw_square` directly: `draw_square(80)`.",
    },
    {
      type: "text",
      md: "Between shapes, you often need to move without drawing.\n\n`penup()` lifts the pen. `forward()` moves the turtle silently. `pendown()` puts the pen back.\n\nWithout this, every move between shapes leaves a line. The canvas turns into a web of unwanted marks.\n\nThink of it like lifting your pencil off the paper to reposition it — then pressing down again to start the next shape.",
    },
    {
      type: "example",
      note: "draw_house calls two helpers. Each helper knows nothing about the other — they only receive what they need as parameters. That's separation of concerns.",
      code: "def draw_polygon(sides, length):\n    for _ in range(sides):\n        forward(length)\n        right(360 / sides)\n\ndef draw_square(size):\n    draw_polygon(4, size)\n\ndef draw_roof(size):\n    draw_polygon(3, size)\n\ndef draw_house(size=80):\n    draw_square(size)\n    draw_roof(size)\n\ndraw_house()\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Read the code. What will it print? Run it to check your prediction.",
      starter: "def draw_polygon(sides, length):\n    print(\"sides:\", sides, \"length:\", length)\n    for _ in range(sides):\n        forward(length)\n        right(360 / sides)\n\ndraw_polygon(4, 60)\ndraw_polygon(3, 80)\n",
      check: { type: "output", expected: "sides: 4 length: 60\nsides: 3 length: 80" },
      hints: [
        "The function is called twice. Each call prints once.",
        "The first call passes 4 and 60. The second passes 3 and 80.",
        "Output: sides: 4 length: 60, then sides: 3 length: 80 — one line each.",
      ],
      solution: "def draw_polygon(sides, length):\n    print(\"sides:\", sides, \"length:\", length)\n    for _ in range(sides):\n        forward(length)\n        right(360 / sides)\n\ndraw_polygon(4, 60)\ndraw_polygon(3, 80)\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "The code draws a square (4 sides, length 60). Change the call to draw a **hexagon** with side length 50 instead.",
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
        "A hexagon has 6 sides. Change the first argument from 4 to 6.",
        "The length should be 50. Change the second argument from 60 to 50.",
        "The exterior angle for a hexagon is 360 / 6 = 60. The function handles that for you.",
      ],
      solution: "def draw_polygon(sides, length):\n    for _ in range(sides):\n        forward(length)\n        right(360 / sides)\n\ndraw_polygon(6, 50)\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This code crashes with `NameError: name 'side' is not defined`. Find the bug and fix it so the house draws a square with side length 80.",
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
        "Python looks for a variable called `side` inside draw_house. There isn't one.",
        "You need to pass the size directly as a number, not as a variable name.",
        "Change `draw_square(side)` to `draw_square(80)`.",
      ],
      solution: "def draw_square(size):\n    for _ in range(4):\n        forward(size)\n        right(90)\n\ndef draw_house():\n    draw_square(80)\n\ndraw_house()\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete `draw_roof` so it draws a triangle using `draw_polygon`. The `draw_house` function will call both `draw_square` and `draw_roof` with the same size.",
      starter: "def draw_polygon(sides, length):\n    for _ in range(sides):\n        forward(length)\n        right(360 / sides)\n\ndef draw_square(size):\n    draw_polygon(4, size)\n\ndef draw_roof(size):\n    pass  # call draw_polygon with 3 sides and the given size\n\ndef draw_house(size=80):\n    draw_square(size)\n    draw_roof(size)\n\ndraw_house()\n",
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
        "Replace `pass` with a call to `draw_polygon`. You need to pass the number of sides and the size.",
        "A triangle has 3 sides. The exterior angle is 360 / 3 = 120.",
        "`draw_polygon(3, size)` — just like draw_square does `draw_polygon(4, size)`.",
      ],
      solution: "def draw_polygon(sides, length):\n    for _ in range(sides):\n        forward(length)\n        right(360 / sides)\n\ndef draw_square(size):\n    draw_polygon(4, size)\n\ndef draw_roof(size):\n    draw_polygon(3, size)\n\ndef draw_house(size=80):\n    draw_square(size)\n    draw_roof(size)\n\ndraw_house()\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write `draw_scene()` from scratch. It should: draw a square (size 80), lift the pen, move forward 150, lower the pen, then draw a triangle (size 80). The helper functions are already defined for you.",
      starter: "def draw_polygon(sides, length):\n    for _ in range(sides):\n        forward(length)\n        right(360 / sides)\n\ndef draw_square(size):\n    draw_polygon(4, size)\n\ndef draw_triangle(size):\n    draw_polygon(3, size)\n\ndef draw_scene():\n    pass\n\ndraw_scene()\n",
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
        "Start with `draw_square(80)` to draw the first shape.",
        "To move without drawing: call `penup()`, then `forward(150)`, then `pendown()`.",
        "Finish with `draw_triangle(80)` for the second shape.",
      ],
      solution: "def draw_polygon(sides, length):\n    for _ in range(sides):\n        forward(length)\n        right(360 / sides)\n\ndef draw_square(size):\n    draw_polygon(4, size)\n\ndef draw_triangle(size):\n    draw_polygon(3, size)\n\ndef draw_scene():\n    draw_square(80)\n    penup()\n    forward(150)\n    pendown()\n    draw_triangle(80)\n\ndraw_scene()\n",
    },
  ],
  codex: {
    topic: "drawing with functions",
    pattern: "def draw_polygon(sides, length):\n    for _ in range(sides):\n        forward(length)\n        right(360 / sides)",
    note: "Decompose complex drawings into named helper functions. draw_polygon(sides, length) is the universal shape: exterior angle = 360 / sides. Functions calling functions create rich scenes from simple primitives.",
  },
});

/* ── Lesson 3.7 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c3s7",
  chapter: 3,
  strand: "sound",
  lang: "py",
  timeBudgetMin: 25,
  title: "def bassline()",
  glossary: {
    root: "The starting MIDI note number of a melody — all other notes are calculated relative to it.",
    tempo: "The speed of a piece of music, measured in beats per minute (BPM).",
    pattern: "A short musical idea that repeats — a beat, a riff, or a melodic shape.",
    verse: "A section of a song that repeats with the same structure but can start on a different root note.",
  },
  content: [
    {
      type: "text",
      md: "## The copy-paste trap\n\nImagine a 4-bar drum loop. Without functions it looks like this:\n\n`sample(\"kick\")` `sample(\"hihat\")` `sample(\"kick\")` `sample(\"hihat\")` — repeated 32 times.\n\nNow you want 8 bars instead of 4. You paste 32 more lines.\n\nNow you want to swap \"hihat\" for \"snare\". You edit 32 lines — and you will miss one.\n\nThis violates **DRY** (Don't Repeat Yourself). Every repeated copy is a future bug waiting to happen.\n\nWith a function the fix is one number:\n\n```\ndef beat():\n    sample(\"kick\")\n    sleep(0.5)\n    sample(\"hihat\")\n    sleep(0.5)\n\nfor _ in range(4):   # 4 bars\n    beat()\n```\n\nWant 8 bars? Change `4` to `8`. Want snare? Change one line inside `beat()`. The function is a **recipe card** — write it once, run it anywhere."
    },
    {
      type: "example",
      note: "beat() is defined once and called 4 times. Each call plays the full kick-hihat pattern.",
      code: "def beat():\n    sample(\"kick\")\n    sleep(0.5)\n    sample(\"hihat\")\n    sleep(0.5)\n\nfor _ in range(4):\n    beat()\n"
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "Add `sample(\"snare\")` and `sleep(0.5)` **after** the hihat inside `beat()`. The loop still runs 4 times, but now each beat has three sounds: kick, hihat, snare.",
      starter: "def beat():\n    sample(\"kick\")\n    sleep(0.5)\n    sample(\"hihat\")\n    sleep(0.5)\n\nfor _ in range(4):\n    beat()\n",
      check: {
        type: "calls",
        calls: [
          {fn:"sample",name:"kick"},{fn:"sample",name:"hihat"},{fn:"sample",name:"snare"},
          {fn:"sample",name:"kick"},{fn:"sample",name:"hihat"},{fn:"sample",name:"snare"},
          {fn:"sample",name:"kick"},{fn:"sample",name:"hihat"},{fn:"sample",name:"snare"},
          {fn:"sample",name:"kick"},{fn:"sample",name:"hihat"},{fn:"sample",name:"snare"}
        ]
      },
      hints: [
        "Add the new lines inside def beat() — after sleep(0.5) for hihat, before the closing of the function.",
        "The indentation inside a def block must match the other sample() lines.",
        "You only change beat() — the for loop stays exactly the same."
      ],
      solution: "def beat():\n    sample(\"kick\")\n    sleep(0.5)\n    sample(\"hihat\")\n    sleep(0.5)\n    sample(\"snare\")\n    sleep(0.5)\n\nfor _ in range(4):\n    beat()\n"
    },
    {
      type: "text",
      md: "## Parameters shift the whole melody\n\nHere is a melody function with a [[root]] parameter:\n\n```\ndef verse(root):\n    play(root)\n    play(root + 2)\n    play(root + 4)\n    play(root + 7)\n```\n\n`verse(60)` plays notes 60, 62, 64, 67.\n\n`verse(65)` plays notes 65, 67, 69, 72.\n\nThe **shape** is identical — only the starting point shifts.\n\nIn music this is called **transposition**: moving a melody to a new key without rewriting it.\n\nIn CS it is called **parameterisation**: one function, many contexts.\n\nThe anti-pattern is writing `verse_c()` and `verse_f()` as two separate functions. When you fix a bug in one, the other still has the bug."
    },
    {
      type: "example",
      note: "verse(root) takes the starting note and calculates the other notes from it. verse(60) and verse(65) play the same melodic shape, 5 semitones apart.",
      code: "def verse(root):\n    play(root)\n    sleep(0.25)\n    play(root + 2)\n    sleep(0.25)\n    play(root + 4)\n    sleep(0.25)\n    play(root + 7)\n    sleep(0.25)\n\nverse(60)   # starts on middle C\nverse(65)   # starts 5 semitones higher\n"
    },
    {
      type: "text",
      md: "## MIDI note numbers — a quick map\n\nEvery note is just a number. **60 is C4** — middle C on a piano.\n\nAdding 1 moves one semitone up (one piano key to the right).\n\nSo `root + 2` is a whole tone, `root + 4` is a major third, `root + 7` is a perfect fifth.\n\nYou do not need to memorise intervals. What matters is this: **+N always means N semitones higher**, and functions let you express that relationship once."
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Replace each `pass` with the correct `play()` call. The [[verse]] should play four notes: the [[root]], root+2, root+4, and root+7, each followed by a quarter-beat sleep. Then call `verse(60)` and `verse(65)`.",
      starter: "def verse(root):\n    pass  # play root\n    sleep(0.25)\n    pass  # play root + 2\n    sleep(0.25)\n    pass  # play root + 4\n    sleep(0.25)\n    pass  # play root + 7\n    sleep(0.25)\n\nverse(60)\nverse(65)\n",
      check: {
        type: "calls",
        calls: [
          {fn:"play",note:60},{fn:"play",note:62},{fn:"play",note:64},{fn:"play",note:67},
          {fn:"play",note:65},{fn:"play",note:67},{fn:"play",note:69},{fn:"play",note:72}
        ]
      },
      hints: [
        "Replace `pass  # play root` with `play(root)`. Use the comment as a guide for each line.",
        "root + 2 is 62 when root is 60, but write it as root + 2 so it works for any root.",
        "The sleep() lines are already there — only replace the four pass lines."
      ],
      solution: "def verse(root):\n    play(root)\n    sleep(0.25)\n    play(root + 2)\n    sleep(0.25)\n    play(root + 4)\n    sleep(0.25)\n    play(root + 7)\n    sleep(0.25)\n\nverse(60)\nverse(65)\n"
    },
    {
      type: "text",
      md: "## The song hierarchy\n\nGood song code is a **tree of functions**, each layer giving you higher-level control:\n\n- `beat()` — the leaf. Plays raw samples directly.\n- `verse(root)` — calls `beat()` or plays notes. Knows the melodic shape.\n- `song()` — calls `verse()` several times. Knows the structure.\n\nWhen you want to change the [[tempo]] you change `song()`. When you want to change the drum sound you change `beat()`. Each function has **one job** — this is the CS principle called **separation of concerns**.\n\nThe alternative is one giant block of `play()` and `sample()` calls with no structure. Try finding the chorus in 200 lines of that."
    },
    {
      type: "example",
      note: "song() is the top of the tree. It calls verse() which plays notes. Each level controls one thing.",
      code: "def beat():\n    sample(\"kick\")\n    sleep(0.5)\n    sample(\"hihat\")\n    sleep(0.5)\n\ndef verse(root):\n    play(root)\n    sleep(0.25)\n    play(root + 7)\n    sleep(0.25)\n\ndef song():\n    set_tempo(120)\n    for _ in range(4):\n        beat()\n    verse(60)\n    verse(65)\n\nsong()\n"
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write `groove(bpm=120)` from scratch. It should: call `set_tempo(bpm)`, then loop 8 times. On **even** beat numbers (0, 2, 4, 6) play `\"kick\"`. On **odd** beat numbers (1, 3, 5, 7) play `\"hihat\"`. Sleep 0.5 after each sample. Then call `groove()`.",
      starter: "def groove(bpm=120):\n    pass\n\ngroove()\n",
      check: {
        type: "calls",
        calls: [
          {fn:"sample",name:"kick"},{fn:"sample",name:"hihat"},
          {fn:"sample",name:"kick"},{fn:"sample",name:"hihat"},
          {fn:"sample",name:"kick"},{fn:"sample",name:"hihat"},
          {fn:"sample",name:"kick"},{fn:"sample",name:"hihat"}
        ]
      },
      hints: [
        "Use `for beat in range(8):` to count 8 beats. The variable `beat` holds 0, 1, 2 ... 7.",
        "Even beats satisfy `beat % 2 == 0`. Odd beats satisfy `beat % 2 != 0` (or just use else).",
        "set_tempo(bpm) goes before the loop. sleep(0.5) goes inside the loop, after the sample call."
      ],
      solution: "def groove(bpm=120):\n    set_tempo(bpm)\n    for beat in range(8):\n        if beat % 2 == 0:\n            sample(\"kick\")\n        else:\n            sample(\"hihat\")\n        sleep(0.5)\n\ngroove()\n"
    }
  ],
  codex: {
    topic: "music functions",
    pattern: "def verse(root):\n    play(root)\n    sleep(0.25)\n    play(root + 7)\n    sleep(0.25)",
    note: "Functions make music reusable and transposable. verse(60) and verse(65) play the same melodic shape at different pitches. Nest functions into a song hierarchy: beat → verse → song.",
  },
});

/* ── Lesson 3.8 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c3s8",
  chapter: 3,
  strand: "words",
  lang: "py",
  timeBudgetMin: 25,
  title: "Functions in the Wild",
  glossary: {
    iteration: "Visiting each item in a sequence one at a time, in order.",
    "membership test": "Checking whether a value appears inside a collection using the `in` operator.",
    design: "Planning what a function should do — its name, inputs, and outputs — before writing the body.",
  },
  content: [
    {
      type: "text",
      md: "## Design Before You Code\n\nProfessional programmers write the *plan* before the code.\n\nThe technique has a name: **wishful thinking** (also called top-down design).\nYou write what you *wish* existed, then you make it true.\n\nHere is the full [[design]] for `is_palindrome` before a single line of body code exists:\n\n```\ndef is_palindrome(word):\n    \"\"\"Return True if word reads the same forwards and backwards.\n    Examples: is_palindrome(\"racecar\") -> True\n              is_palindrome(\"hello\")   -> False\n    \"\"\"\n    pass  # body goes here\n```\n\nWriting the signature and examples first forces you to answer three questions:\n- What goes *in*?\n- What comes *out*?\n- What are two concrete cases I can check?\n\nOnly after answering those do you write the body.\nThis prevents the most common beginner mistake: writing code without knowing what it should do.\n\n**CS principle — separation of concerns:** each function has exactly one job.\n`is_palindrome` just answers a yes/no question.\nIt does not print, it does not ask the user anything — it just returns `True` or `False`.",
    },
    {
      type: "text",
      md: "## String [[Iteration]]: `for char in text:`\n\nYou know the `for` loop from Chapter 2.\nStrings are sequences too. Python visits each character, one at a time.\n\nSo the same loop works on a string:\n\n```\nfor char in \"hello\":\n    print(char)\n```\n\nThis prints `h`, then `e`, then `l`, then `l`, then `o`.\n\n**Two ways to do the same thing:**\n\n```\n# Messy: you track the index yourself\nfor i in range(len(text)):\n    print(text[i])\n\n# Clean: Python handles the stepping\nfor char in text:\n    print(char)\n```\n\nPython chose the clean version as the natural way. Code is read more than it is written. Short, clear code wins.\n\nAdd an accumulator and a condition, and you have a puzzle function:\n\n```\ntotal = 0\nfor char in text:\n    if char in \"aeiou\":\n        total += 1\n```\n\n`char in \"aeiou\"` is a [[membership test]]. You used `in` in Chapter 2.\nHere it checks whether `char` is one of the five vowel letters.",
    },
    {
      type: "text",
      md: "## The Prepend-Reverse Trick\n\nTo reverse a string, we use the **accumulator pattern from Chapter 2** — but with a twist.\n\nNormal accumulator (appending):\n```\nresult = result + char   # char lands at the END\n```\n\nPrepend-reverse trick:\n```\nresult = char + result   # char lands at the FRONT\n```\n\nWhy does prepending reverse the string?\n\nImagine the loop visiting `\"abc\"` in order: `a`, then `b`, then `c`.\n\n- After `a`: `result = \"a\"`\n- After `b`: `result = \"b\" + \"a\"` = `\"ba\"`\n- After `c`: `result = \"c\" + \"ba\"` = `\"cba\"`\n\nThe first character visited (`a`) gets pushed to the back by every character that comes after it.\nThe last character visited (`c`) stays at the front.\nResult: the string is reversed.\n\n**Anti-pattern:** if you append instead of prepend, you get the *original* string back, not the reverse.\n`result = result + char` gives you `\"abc\"` — no change, and `is_palindrome` always returns `True`.",
    },
    {
      type: "example",
      note: "Watch how the accumulator builds the reversed string step by step.",
      code: 'def is_palindrome(word):\n    reversed_word = ""\n    for char in word:\n        reversed_word = char + reversed_word  # prepend\n    return reversed_word == word\n\nprint(is_palindrome("racecar"))  # True\nprint(is_palindrome("hello"))    # False\n',
    },
    {
      type: "text",
      md: "## FizzBuzz: Order Matters in `elif` Chains\n\nFizzBuzz is a classic puzzle.\n\n- If `n` is divisible by both 3 and 5, print `\"FizzBuzz\"`.\n- If divisible by 3 only, print `\"Fizz\"`.\n- If divisible by 5 only, print `\"Buzz\"`.\n- Otherwise, print the number.\n\nHere is the **anti-pattern** that breaks:\n\n```\n# WRONG ORDER\ndef fizzbuzz(n):\n    if n % 3 == 0:       # 15 hits this first!\n        return \"Fizz\"\n    elif n % 5 == 0:\n        return \"Buzz\"\n    elif n % 15 == 0:    # never reached for 15\n        return \"FizzBuzz\"\n```\n\nFor `n = 15`: `15 % 3 == 0` is `True`, so Python returns `\"Fizz\"` immediately.\nIt never checks `n % 15`.\n\nThis is the **first match wins** rule from Chapter 2's `elif` chains.\n\nThe fix is the **specificity rule**: check the *narrower* (more specific) condition first.\n`n % 15 == 0` is the most specific — it requires *both* divisors — so it goes first.\n\n```\n# CORRECT ORDER\nif n % 15 == 0:    # most specific first\n    return \"FizzBuzz\"\nelif n % 3 == 0:\n    return \"Fizz\"\nelif n % 5 == 0:\n    return \"Buzz\"\n```",
    },
    {
      type: "text",
      md: "## Function Composition: `word_inspector`\n\nOnce you have `count_vowels` and `is_palindrome`, you can build a function that *uses* them.\n\n```\ndef word_inspector(word):\n    print(\"Vowels:\", count_vowels(word))\n    print(\"Palindrome:\", is_palindrome(word))\n    print(word.upper())\n```\n\n`word_inspector` does not know *how* `count_vowels` counts — it just trusts that it works.\n`word_inspector` does not know *how* `is_palindrome` reverses — it just trusts the answer.\n\nThis is **function composition**: combining functions to build bigger behaviour.\n\n**CS principle — separation of concerns:** each function has one job.\n`count_vowels` counts. `is_palindrome` checks reversal. `word_inspector` reports.\nNone of them do each other's job.\n\nThis is how real software is built — thousands of small, focused functions, composed together.",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Read the code carefully. Before you run it, predict what each `print` will output. Then run it to check.",
      starter: 'def is_palindrome(word):\n    reversed_word = ""\n    for char in word:\n        reversed_word = char + reversed_word\n    return reversed_word == word\n\nprint(is_palindrome("racecar"))\nprint(is_palindrome("hello"))\nprint(is_palindrome("level"))\n',
      check: { type: "output", expected: "True\nFalse\nTrue" },
      hints: [
        "Trace through \"racecar\" one character at a time. What does reversed_word hold after each step?",
        "After the loop, the function compares reversed_word to the original. If they match, it returns True.",
        "\"level\" reversed is still \"level\". \"hello\" reversed is \"olleh\".",
      ],
      solution: 'def is_palindrome(word):\n    reversed_word = ""\n    for char in word:\n        reversed_word = char + reversed_word\n    return reversed_word == word\n\nprint(is_palindrome("racecar"))\nprint(is_palindrome("hello"))\nprint(is_palindrome("level"))\n',
    },
    {
      type: "exercise",
      rung: 2,
      prompt: "Arrange these lines to build `fizzbuzz(n)` correctly. Remember: the **most specific condition goes first** — check `n % 15` before `n % 3` or `n % 5`.",
      starter: "",
      check: {
        type: "parsons",
        lines: [
          "def fizzbuzz(n):",
          "    if n % 15 == 0:",
          '        return "FizzBuzz"',
          "    elif n % 3 == 0:",
          '        return "Fizz"',
          "    elif n % 5 == 0:",
          '        return "Buzz"',
          "    else:",
          "        return str(n)",
          "",
          "print(fizzbuzz(15))",
          "print(fizzbuzz(3))",
          "print(fizzbuzz(5))",
          "print(fizzbuzz(7))",
        ],
        distractors: ["    elif n % 15 == 0:", '        return "FizzFizz"'],
      },
      hints: [
        "The elif chain uses first-match-wins. If n%3 comes first, then 15 (which is divisible by 3) will always return \"Fizz\" instead of \"FizzBuzz\".",
        "Start with the def line, then the most specific if, then elif for 3, then elif for 5, then else.",
        "The four print calls go at the bottom, outside the function (no indentation).",
      ],
      solution: 'def fizzbuzz(n):\n    if n % 15 == 0:\n        return "FizzBuzz"\n    elif n % 3 == 0:\n        return "Fizz"\n    elif n % 5 == 0:\n        return "Buzz"\n    else:\n        return str(n)\n\nprint(fizzbuzz(15))\nprint(fizzbuzz(3))\nprint(fizzbuzz(5))\nprint(fizzbuzz(7))\n',
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This `digit_sum` function has a bug. For `digit_sum(1234)` it should return `10` (1+2+3+4), but it gives the wrong answer. Find the bug on the line that extracts the last digit and fix it.",
      starter: "def digit_sum(n):\n    total = 0\n    while n > 0:\n        digit = n / 10   # bug is here\n        total += digit\n        n = n // 10\n    return total\n\nprint(digit_sum(1234))\n",
      check: { type: "output", expected: "10" },
      hints: [
        "n / 10 gives the quotient — for n=1234 that is 123.4, not 4.",
        "You need the *remainder* when you divide by 10. Which operator gives the remainder?",
        "Use % instead of /. n % 10 gives the last digit: 1234 % 10 is 4.",
      ],
      solution: "def digit_sum(n):\n    total = 0\n    while n > 0:\n        digit = n % 10\n        total += digit\n        n = n // 10\n    return total\n\nprint(digit_sum(1234))\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete `count_vowels`. Replace the `pass` with an `if` statement that checks whether `char` is in `\"aeiou\"`. If it is, add 1 to `total`.",
      starter: 'def count_vowels(text):\n    total = 0\n    for char in text:\n        pass  # if char is in "aeiou", add 1 to total\n    return total\n\nprint(count_vowels("hello world"))\nprint(count_vowels("python"))\n',
      check: { type: "output", expected: "3\n1" },
      hints: [
        "The `in` operator tests membership: `char in \"aeiou\"` is True if char is a vowel.",
        "Replace `pass` with: `if char in \"aeiou\":` on one line, then `total += 1` indented beneath it.",
        "\"hello world\" has e, o, o — that is 3 vowels. \"python\" has just o — that is 1.",
      ],
      solution: 'def count_vowels(text):\n    total = 0\n    for char in text:\n        if char in "aeiou":\n            total += 1\n    return total\n\nprint(count_vowels("hello world"))\nprint(count_vowels("python"))\n',
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write `word_inspector(word)`. It should call `count_vowels` and `is_palindrome` (already defined in the starter) and print a 3-line report:\n\n```\nVowels: N\nPalindrome: True/False\nWORD_IN_CAPS\n```\n\nTest it with `word_inspector(\"racecar\")` and `word_inspector(\"hello\")`.",
      starter: 'def count_vowels(text):\n    total = 0\n    for char in text:\n        if char in "aeiou":\n            total += 1\n    return total\n\ndef is_palindrome(word):\n    reversed_word = ""\n    for char in word:\n        reversed_word = char + reversed_word\n    return reversed_word == word\n\ndef word_inspector(word):\n    pass\n\nword_inspector("racecar")\nword_inspector("hello")\n',
      check: {
        type: "output",
        expected: "Vowels: 3\nPalindrome: True\nRACECAR\nVowels: 2\nPalindrome: False\nHELLO",
      },
      hints: [
        "word_inspector should have three print statements. Call count_vowels(word) and is_palindrome(word) inside them.",
        "Use print(\"Vowels:\", count_vowels(word)) for the first line. The comma adds a space automatically.",
        "For the last line, use word.upper() — you learned .upper() in Chapter 1.",
      ],
      solution: 'def count_vowels(text):\n    total = 0\n    for char in text:\n        if char in "aeiou":\n            total += 1\n    return total\n\ndef is_palindrome(word):\n    reversed_word = ""\n    for char in word:\n        reversed_word = char + reversed_word\n    return reversed_word == word\n\ndef word_inspector(word):\n    print("Vowels:", count_vowels(word))\n    print("Palindrome:", is_palindrome(word))\n    print(word.upper())\n\nword_inspector("racecar")\nword_inspector("hello")\n',
    },
  ],
  codex: {
    topic: "string iteration",
    pattern: 'for char in text:\n    if char in "aeiou":\n        total += 1',
    note: "`for char in text:` visits each character in order. `char in \"aeiou\"` is a membership test. Build puzzle functions by combining a loop, an accumulator, and a condition. Design before code: write the signature and examples before the body.",
  },
});

/* ── Lesson 3.9 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c3s9",
  chapter: 3,
  strand: "sound",
  lang: "py",
  timeBudgetMin: 25,
  title: "Art and Music: Ch1 + Ch2 + Ch3",
  glossary: {
    parametric: "A function or shape where parameters control its behavior, so one function produces infinite variations.",
    capstone: "A project that combines everything learned so far into one working program.",
  },
  content: [
    {
      type: "text",
      md: "You now have three chapters of tools.\n\nChapter 1 gave you **primitives** — `forward()`, `play()`, `print()`.\nChapter 2 gave you **loops** — repeat anything, any number of times.\nChapter 3 gave you **functions** — package logic, give it a name, reuse it.\n\nEach chapter added one level of [[abstraction]]. Alone, each level is limited. Together, they unlock things that would have felt impossible in Chapter 1.\n\nConsider `draw_snowflake()`. It uses `forward()` and `right()` from Chapter 1. It uses a `for` loop from Chapter 2. It wraps everything in a function from Chapter 3. Three chapters, one function, one shape.\n\nThis is the pattern of all programming: small tools, stacked deliberately, build something complex."
    },
    {
      type: "text",
      md: "**The missing-return bug at capstone scale.**\n\nThe most common mistake when combining functions is forgetting `return`. The function runs. It computes a value. But it hands nothing back. The result at the call site is `None`.\n\nThe tell: you see `Perimeter: None` or `Total: None` instead of a number. The function is not broken — it just kept the answer to itself.\n\nAnti-pattern:\n```\ndef area(w, h):\n    total = w * h\n    # oops — no return\n```\n\nEvery time a function computes something you plan to use, ask: does it `return` it?"
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This function calculates a perimeter. But the output is wrong — it prints `None`. Find the bug and fix it.",
      starter: "def polygon_perimeter(sides, length):\n    total = sides * length\n\np = polygon_perimeter(4, 60)\nprint(\"Perimeter:\", p)\n",
      check: { type: "output", expected: "Perimeter: 240" },
      hints: [
        "Run the code in your head. What does the function do with `total`?",
        "The function computes `total` but never sends it back. What keyword sends a value back?",
        "Add `return total` as the last line inside the function."
      ],
      solution: "def polygon_perimeter(sides, length):\n    total = sides * length\n    return total\n\np = polygon_perimeter(4, 60)\nprint(\"Perimeter:\", p)\n"
    },
    {
      type: "text",
      md: "**[[Parametric]] art: one function, infinite shapes.**\n\nA [[parametric]] function takes numbers as parameters and uses them to control a shape. Change the numbers — change the shape. No rewriting required.\n\nCompare these two calls:\n- `draw_spiral(steps=10, angle=90)` — tight square spiral\n- `draw_spiral(steps=20, angle=91)` — slowly unwinding curve\n\nOne degree of difference in `angle` produces a completely different result after enough steps. This is the DRY principle at work: one function definition, any shape from it.\n\nWithout parameters, you would write a new function for every spiral you wanted. With parameters, the loop does the variation for you. That is the [[computational thinking]] payoff."
    },
    {
      type: "example",
      note: "Watch how `i` grows each loop. The distance grows, but the angle stays fixed. That small asymmetry is what makes the spiral.",
      code: "def draw_spiral(steps, start=10, angle=91):\n    for i in range(steps):\n        forward(start + i * 10)\n        right(angle)\n\ndraw_spiral(5)\n"
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "The spiral function is almost done. Replace both `pass` lines with the real calls: `forward(start + i * 10)` and `right(angle)`.",
      starter: "def draw_spiral(steps, start=10, angle=91):\n    for i in range(steps):\n        pass  # forward(start + i * 10)\n        pass  # right(angle)\n\ndraw_spiral(5)\n",
      check: {
        type: "calls",
        calls: [
          {fn:"forward",val:10},{fn:"right",val:91},
          {fn:"forward",val:20},{fn:"right",val:91},
          {fn:"forward",val:30},{fn:"right",val:91},
          {fn:"forward",val:40},{fn:"right",val:91},
          {fn:"forward",val:50},{fn:"right",val:91}
        ]
      },
      hints: [
        "Delete both `pass` lines. Replace the first with the forward call shown in the comment.",
        "The second pass becomes `right(angle)`. `angle` is already the parameter name.",
        "With `start=10` and `i=0`, the first forward is `forward(10)`. With `i=1`, it is `forward(20)`."
      ],
      solution: "def draw_spiral(steps, start=10, angle=91):\n    for i in range(steps):\n        forward(start + i * 10)\n        right(angle)\n\ndraw_spiral(5)\n"
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write `draw_snowflake(branches=6, size=60)`. For each branch: go `forward(size)`, turn `right(180)`, go `forward(size)` back, then turn `right(360 / branches)` to face the next branch. Call `draw_snowflake()`.",
      starter: "def draw_snowflake(branches=6, size=60):\n    pass\n\ndraw_snowflake()\n",
      check: {
        type: "calls",
        calls: [
          {fn:"forward",val:60},{fn:"right",val:180},{fn:"forward",val:60},{fn:"right",val:60},
          {fn:"forward",val:60},{fn:"right",val:180},{fn:"forward",val:60},{fn:"right",val:60},
          {fn:"forward",val:60},{fn:"right",val:180},{fn:"forward",val:60},{fn:"right",val:60},
          {fn:"forward",val:60},{fn:"right",val:180},{fn:"forward",val:60},{fn:"right",val:60},
          {fn:"forward",val:60},{fn:"right",val:180},{fn:"forward",val:60},{fn:"right",val:60},
          {fn:"forward",val:60},{fn:"right",val:180},{fn:"forward",val:60},{fn:"right",val:60}
        ]
      },
      hints: [
        "Start with `for _ in range(branches):`. You need a loop that runs once per branch.",
        "Inside the loop: `forward(size)`, `right(180)`, `forward(size)`, `right(360 / branches)`.",
        "With 6 branches, `360 / 6 = 60`. Each branch turns 60 degrees. Six turns = full circle."
      ],
      solution: "def draw_snowflake(branches=6, size=60):\n    for _ in range(branches):\n        forward(size)\n        right(180)\n        forward(size)\n        right(360 / branches)\n\ndraw_snowflake()\n"
    },
    {
      type: "text",
      md: "**Song structure as code.**\n\nReal music software represents notes as numbers. A melody is a sequence of numbers. A function that plays a melody is a musical phrase.\n\nWhen you write `play_verse(root)`, you can call it with any starting note. `play_verse(60)` plays in one key. `play_verse(65)` plays the same phrase five notes higher. This is called **transposition** — and it is free when the melody is defined relative to `root`.\n\nAnti-pattern: writing out every note by hand.\n```\nplay(60)\nplay(62)\nplay(64)\nplay(67)\nplay(65)   # a different verse? copy-paste the whole block\n```\n\nWith a function, you change one number and the whole phrase moves. This is the separation of concerns principle: the melody shape lives in `play_verse`, the starting pitch comes from the caller."
    },
    {
      type: "example",
      note: "Notice that `play_scale` calls `play` and `sleep` inside the loop. The `root` shifts every note together — change `root`, change the key.",
      code: "def play_scale(root, steps=5, gap=0.25):\n    for i in range(steps):\n        play(root + i)\n        sleep(gap)\n\nplay_scale(60)       # C major scale, 5 notes\nplay_scale(65, 3)    # F, 3 notes\n"
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete `play_scale`. Replace both `pass` lines: the first plays `root + i`, the second sleeps for `gap`.",
      starter: "def play_scale(root, steps=5, gap=0.25):\n    for i in range(steps):\n        pass  # play root + i\n        pass  # sleep gap\n\nplay_scale(60)\nplay_scale(65, 3)\n",
      check: {
        type: "calls",
        calls: [
          {fn:"play",note:60},{fn:"play",note:61},{fn:"play",note:62},{fn:"play",note:63},{fn:"play",note:64},
          {fn:"play",note:65},{fn:"play",note:66},{fn:"play",note:67}
        ]
      },
      hints: [
        "Replace the first `pass` with `play(root + i)`. The variable `i` starts at 0 and counts up.",
        "Replace the second `pass` with `sleep(gap)`. `gap` is already the parameter name.",
        "`play_scale(65, 3)` uses `steps=3`, so the loop runs for `i` in 0, 1, 2 — notes 65, 66, 67."
      ],
      solution: "def play_scale(root, steps=5, gap=0.25):\n    for i in range(steps):\n        play(root + i)\n        sleep(gap)\n\nplay_scale(60)\nplay_scale(65, 3)\n"
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write a mini song. `play_verse(root)` plays four notes: `root`, `root+2`, `root+4`, `root+7`, with `sleep(0.25)` after each. `song(root=60)` calls `play_verse(root)`, then `play_verse(root+5)`, then plays `root` once and sleeps 1 second. Call `song()`.",
      starter: "def play_verse(root):\n    pass\n\ndef song(root=60):\n    pass\n\nsong()\n",
      check: {
        type: "calls",
        calls: [
          {fn:"play",note:60},{fn:"play",note:62},{fn:"play",note:64},{fn:"play",note:67},
          {fn:"play",note:65},{fn:"play",note:67},{fn:"play",note:69},{fn:"play",note:72},
          {fn:"play",note:60}
        ]
      },
      hints: [
        "`play_verse(root)` needs four `play()` calls: `play(root)`, `play(root+2)`, `play(root+4)`, `play(root+7)`. Add `sleep(0.25)` after each.",
        "In `song`, call `play_verse(root)` then `play_verse(root+5)`. `root+5` shifts the whole phrase up five notes.",
        "After the two verses, add `play(root)` and `sleep(1)` — the final landing note."
      ],
      solution: "def play_verse(root):\n    play(root)\n    sleep(0.25)\n    play(root + 2)\n    sleep(0.25)\n    play(root + 4)\n    sleep(0.25)\n    play(root + 7)\n    sleep(0.25)\n\ndef song(root=60):\n    play_verse(root)\n    play_verse(root + 5)\n    play(root)\n    sleep(1)\n\nsong()\n"
    }
  ],
  codex: {
    topic: "integration capstone",
    pattern: "def draw_spiral(steps, start=10, angle=91):\n    for i in range(steps):\n        forward(start + i * 10)\n        right(angle)",
    note: "Functions + loops + primitives = parametric art and music. Parameters make shapes and songs variable. Missing return gives None — always the first thing to check.",
  },
});
