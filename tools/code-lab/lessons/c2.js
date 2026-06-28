/* Chapter 2 — Decisions and Loops
   Lessons: c2s1 True/False & Comparison · c2s2 if/else · c2s3 elif
            c2s4 while · c2s5 for & range · c2s6 Fix the Broken Code
            c2s7 Loops Make Art and Beats
   All concepts per the approved 5-reviewer curriculum audit in CURRICULUM.md. */

/* ── Lesson 2.1 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c2s1",
  chapter: 2,
  strand: "numbers",
  lang: "py",
  timeBudgetMin: 20,
  title: "True, False, and Comparison",
  glossary: {
    boolean: "The value True or False. Python's type name is bool. Every comparison expression produces a boolean.",
    comparison: "An expression using ==, !=, <, >, <=, or >= that evaluates to True or False.",
    truthiness: "Python's rule for deciding whether a non-boolean value counts as True or False inside a condition. False, zero (0 and 0.0), empty string, and None are falsy; everything else is truthy.",
    "short-circuit": "Python's behavior of stopping evaluation of and/or as soon as the result is determined. If the left side of and is False, the right side is never evaluated.",
  },
  content: [
    {
      type: "example",
      note: "Run this. Then change 18 to 10, run again, and see which branch fires. You are already making decisions with code — before reading a word about how they work.",
      code: "age = 18\nif age >= 18:\n    print(\"You can vote.\")\nelse:\n    print(\"Not yet.\")\n",
    },
    {
      type: "text",
      md: "**`==` is a question; `=` is a command.** `=` stores a value: `age = 11` means 'let age hold 11.' `==` asks a question: `age == 11` means 'does age currently hold 11?' The answer is `True` or `False`. Python deliberately uses two different symbols so you can never accidentally store when you meant to ask. Writing `if age = 11:` is a `SyntaxError` — Python refuses to let you confuse the two. The error message says 'cannot assign to literal' — it recognised you tried to store a value where a question was expected.\n\n**Why `True` and `False` are capitalised.** Python is case-sensitive: `true` is a `NameError` — Python looks for a variable named `true` and finds nothing. `True` is a built-in constant. The capitalisation is the standard across many languages that treat boolean values as proper named constants rather than keywords.",
    },
    {
      type: "text",
      md: "Every condition in that program is a **[[comparison]]** — an expression that asks a question and answers it with **[[boolean|True or False]]**. `age >= 18` is not a filter you apply; it is a full expression with a value. That value is either `True` or `False`, and you can print it, store it in a variable, or combine it with other comparisons.\n\nPython has six comparison operators. `==` tests equality. `!=` tests inequality (not equal). `<` and `>` test whether one value is strictly less than or greater than another. `<=` and `>=` include equality as well: `age >= 18` is True when age is exactly 18, not only when it exceeds 18.",
    },
    {
      type: "example",
      note: "Every comparison is an expression. Run each line and notice that Python prints the value True or False, just as it would print any other value.",
      code: "print(5 > 3)       # True\nprint(5 < 3)       # False\nprint(5 == 5)      # True\nprint(5 != 5)      # False\nprint(\"7\" == 7)    # False — type matters\nprint(10 >= 10)    # True — >= includes equality\n",
    },
    {
      type: "text",
      md: "Notice `\"7\" == 7`. You learned in Chapter 1 that the string `\"7\"` and the integer `7` are different types. Python does not convert them before comparing: different types are never `==`, so this is always `False`. The type of each side matters, not just the visual appearance.",
    },
    {
      type: "text",
      md: "There is one trap beginners hit on their first condition. The `=` sign you know from Chapter 1 is an **action** — it stores a value. The `==` operator is a **question** — it asks whether two values are equal. Inside an `if` condition, Python expects a question. If you write `=` instead, Python stops immediately with a `SyntaxError`.\n\nThe error message says *invalid syntax* and points at the `=`. That is your cue: look for a lone `=` where `==` belongs.",
    },
    {
      type: "example",
      note: "Run this deliberately broken code and read the SyntaxError. Then fix = to == and run again to see it work.",
      code: "x = 5\nif x = 5:\n    print(\"five\")\n",
    },
    {
      type: "text",
      md: "Python's `if` statement does not demand a strict `True` or `False`. It accepts any value and applies a rule called **[[truthiness]]**: some values count as true, others as false.\n\n**Falsy** values — ones Python treats as false — are: `False`, zero (`0` and `0.0`), the empty string `\"\"`, and the special value `None`. (In Chapter 4 you will meet two more: the empty list `[]` and empty dictionary `{}`.) Every other value is **truthy**. A non-zero number, any non-empty string, even a single space — all truthy.\n\nThis means `if name:` and `if name != \"\":` say the same thing. Both pass when `name` holds any non-empty string.",
    },
    {
      type: "example",
      note: "bool() converts any value to its True/False equivalent. Predict each line before running.",
      code: "print(bool(False))  # False\nprint(bool(0))      # False\nprint(bool(0.0))    # False\nprint(bool(\"\"))     # False\nprint(bool(None))   # False\nprint(bool(42))     # True\nprint(bool(\"hi\"))   # True\nprint(bool(\" \"))    # True — one space is not empty\n",
    },
    {
      type: "text",
      md: "A single comparison asks one question. The three **boolean operators** let you combine questions.\n\n`and` requires both sides to be true: `age >= 13 and age < 18` is True only when age is at least 13 and also less than 18. If either side is false, the whole expression is false.\n\n`or` requires at least one side to be true: `score >= 90 or bonus` is True when the score is high, or when there is a bonus, or both.\n\n`not` flips a single value: `not True` gives `False`, and `not False` gives `True`.\n\nPrecedence: `not` is applied first, then `and`, then `or`. Use parentheses to override the order.",
    },
    {
      type: "example",
      note: "Three compound conditions. Work each one out before running.",
      code: "age = 15\nprint(age >= 13 and age < 18)    # True and True → True\nprint(age < 10 or age >= 13)     # False or True → True\nprint(not age >= 18)              # not False → True\n",
    },
    {
      type: "text",
      md: "Python evaluates `and` and `or` from left to right and **stops as soon as the result is decided**. This is called **[[short-circuit]]** evaluation.\n\nFor `and`: if the left side is `False`, the whole expression must be `False`, so Python never evaluates the right side.\n\nFor `or`: if the left side is `True`, the whole expression must be `True`, so Python skips the right side.\n\nThis matters when the right side could crash. In the example below, if `age` is zero, dividing by it would cause a `ZeroDivisionError`. Because `age > 0` is `False`, Python stops there and never reaches `100 / age`.",
    },
    {
      type: "example",
      note: "With age=0, short-circuit stops at the first condition being False and never runs the division.",
      code: "age = 0\nif age > 0 and 100 / age > 2:\n    print(\"ratio is high\")\nelse:\n    print(\"age is zero — division was never attempted\")\n",
    },
    {
      type: "text",
      md: "**Why truthiness is designed this way.** Python's rule is consistent: values that represent 'empty' or 'nothing' are falsy — `False`, `0`, `0.0`, `\"\"`, `None`, and later `[]` (empty list) and `{}` (empty dictionary). Everything else is truthy. This is a deliberate design choice that lets you write `if name:` instead of `if name != \"\"`, and `if count:` instead of `if count != 0`. It is not magic; it is a convention about what 'empty' means.\n\n**Short-circuit evaluation — not just a speed trick.** In `a and b`, if `a` is `False`, Python never evaluates `b`. In `a or b`, if `a` is `True`, Python never evaluates `b`. This prevents crashes: `if x != 0 and 10 / x > 2:` is safe because when `x` is `0`, the `and` short-circuits before the division executes. If Python always evaluated both sides, that division by zero would crash regardless of the first condition. Short-circuit evaluation is a real safety tool.",
    },
    {
      type: "text",
      md: "Here is a trap that looks reasonable but is wrong in a way Python will not catch for you.\n\nSuppose you want to check whether `x` equals `1` or `2`. You might write `if x == 1 or 2:`. Python reads this as `if (x == 1) or (2):`. The value `2` stands alone, and because `2` is non-zero it is always truthy. So the condition is **always True**, regardless of what `x` holds.\n\nThe fix is: `if x == 1 or x == 2:`. Each side of `or` needs its own complete comparison.",
    },
    {
      type: "example",
      note: "The first if prints 'match' even when x is 99. The second one never prints. Run it to see the difference.",
      code: "x = 99\nif x == 1 or 2:\n    print(\"match\")          # always runs — 2 is always truthy\n\nif x == 1 or x == 2:\n    print(\"really 1 or 2\")  # never runs when x is 99\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Before you run this, predict what each line prints — True or False? Work through the type and value on each side of the comparison. Write your six predictions, then run to check.",
      starter: "print(5 > 3)\nprint(5 < 3)\nprint(5 == 5)\nprint(\"7\" == 7)\nprint(not True)\nprint(10 >= 10)\n",
      check: { type: "output", expected: "True\nFalse\nTrue\nFalse\nFalse\nTrue" },
      hints: [
        "5 > 3: three is less than five, so 5 is greater than 3 — True.",
        "\"7\" == 7: the string \"7\" and the integer 7 are different types. Python never considers different types equal — False.",
        "not True: not flips a boolean. not True is False.",
      ],
      solution: "print(5 > 3)\nprint(5 < 3)\nprint(5 == 5)\nprint(\"7\" == 7)\nprint(not True)\nprint(10 >= 10)\n",
    },
    {
      type: "exercise",
      rung: 2,
      prompt: "Arrange these lines into a program that prints 'in range' if n is between 10 and 20 (including both endpoints), and 'out of range' otherwise. One line is a decoy that does not belong.",
      starter: "",
      check: {
        type: "parsons",
        lines: [
          "n = 15",
          "if n >= 10 and n <= 20:",
          "    print(\"in range\")",
          "else:",
          "    print(\"out of range\")",
        ],
        distractors: ["if n > 10 or n < 20:"],
      },
      hints: [
        "Assign n before you use it in any condition.",
        "To check that n is between 10 and 20, you need two conditions joined with and — one for the lower bound, one for the upper.",
        "The correct condition is: if n >= 10 and n <= 20: — the decoy uses or, which would match almost any number.",
      ],
      solution: "n = 15\nif n >= 10 and n <= 20:\n    print(\"in range\")\nelse:\n    print(\"out of range\")\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This program crashes before it runs a single line. Read the error message — it names the error type and the line number. Fix the code so it prints five.",
      starter: "x = 5\nif x = 5:\n    print(\"five\")\n",
      check: { type: "output", expected: "five" },
      hints: [
        "The error is SyntaxError. Python refused to run the program at all — it spotted the problem before executing anything.",
        "Look at the condition on the if line. The = sign is an assignment action. Inside a condition, Python expects a question, not an action.",
        "Change = to == to ask 'is x equal to 5?' rather than trying to store 5 in x.",
      ],
      solution: "x = 5\nif x == 5:\n    print(\"five\")\n",
    },
  ],
  codex: {
    topic: "comparisons and booleans",
    pattern: "==  !=  <  >  <=  >=\nand  or  not\nbool(v)   # reveals truthiness",
    note: "Comparisons return True or False. == tests equality; = assigns (never use = in a condition — SyntaxError). Falsy: 0, \"\", None. Truthy: everything else. and/or short-circuit: stop as soon as the result is decided. Pitfall: 'if x == 1 or 2:' — 2 is always truthy; write 'if x == 1 or x == 2:'.",
  },
});

/* ── Lesson 2.2 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c2s2",
  chapter: 2,
  strand: "core",
  lang: "py",
  timeBudgetMin: 20,
  title: "if and else",
  glossary: {
    branch: "One path through a conditional — the if branch or the else branch. Exactly one runs per execution.",
    "IndentationError": "An error Python raises when the indentation level of a line does not match the expected structure. The error message often points to the line after the actual problem.",
    "TabError": "An error raised when a file mixes tab characters and spaces for indentation. Python 3 does not allow mixing the two.",
  },
  content: [
    {
      type: "text",
      md: "A comparison produces True or False, but by itself it does nothing — it does not change what happens next. The `if` statement uses that value to choose between two paths, called **[[branch|branches]]**. It runs the first branch when the condition is true, and the second when it is false. **Exactly one branch runs per execution** — never both, never neither.",
    },
    {
      type: "text",
      md: "**Why Python uses indentation instead of braces.** Most languages use curly braces `{}` to mark blocks. Python uses indentation — the whitespace at the start of each line. This was a deliberate design decision: programmers indent their code for readability whether or not the language requires it. Making indentation mandatory means the visual structure of the code and the logical structure are always identical. In brace languages, it is possible to write code whose indentation lies — that looks like it does one thing but does another. Python makes that impossible. Four spaces per level is the Python standard.",
    },
    {
      type: "example",
      note: "The complete if/else structure. Run it, then change score to 55 and run again. Notice that each run follows exactly one path.",
      code: "score = 85\nif score >= 60:\n    print(\"Passed\")\nelse:\n    print(\"Try again\")\n",
    },
    {
      type: "text",
      md: "Two things about the syntax that cause real errors if you miss them.\n\nFirst, each header line — the `if` line and the `else` line — must end with a **colon**. Without it, Python raises a `SyntaxError` pointing at the line after, since that is where it first noticed something was wrong.\n\nSecond, the **body** of each branch is the indented block below the colon. Python uses the indentation level to decide what belongs to the branch and what comes after it. The standard indent is four spaces.",
    },
    {
      type: "example",
      note: "Two versions: one correct, one with the colon missing. Run the broken one first, read the SyntaxError, then compare.",
      code: "# Correct\nif True:\n    print(\"yes\")\n\n# Missing colon — SyntaxError\n# if True\n#     print(\"yes\")\n",
    },
    {
      type: "text",
      md: "When the indentation is wrong, Python raises an **[[IndentationError]]**. The tricky part: the error message often points to the line **after** the real problem. If Python reports an IndentationError on line 6, look at line 5 — that is frequently where the wrong indent is.\n\nA related error is **[[TabError]]**: Python 3 does not allow mixing tab characters and spaces in the same file. If you mix them, Python raises a TabError. The fix is to use only spaces (four per level) throughout.",
    },
    {
      type: "example",
      note: "The print on the third line has two spaces instead of four. Run this and read the IndentationError. Note that Python reports the problem on the print line.",
      code: "x = 10\nif x > 5:\n  print(\"big\")   # only 2 spaces — wrong indent level\n",
    },
    {
      type: "text",
      md: "Here is a fact that trips many beginners: **code that comes after the if/else block always runs**, regardless of which branch fired.\n\nLook at the example below. The `print(\"done\")` line is at the same indent level as `if` — it is not inside either branch. After the if/else makes its choice and runs one branch, Python moves on to `print(\"done\")` every single time.",
    },
    {
      type: "text",
      md: "**One `if` vs `if/else` — when each fits.** Use `if/else` when exactly one of two alternatives should run. Use two separate `if` statements when the conditions are independent and both might be true. `if score >= 90: print('A')` followed by `if score >= 80: print('B')` checks both independently: a score of 95 triggers both prints. That is a bug — one student gets two grades. If the grades are mutually exclusive, use `elif` (next lesson). The test: 'can both conditions be true at the same time?' If yes, two ifs. If no, if/elif/else.",
    },
    {
      type: "example",
      note: "The third print always runs. It is outside the if/else block — Python reaches it no matter which branch fired.",
      code: "score = 85\nif score >= 60:\n    print(\"Passed\")       # only runs when score >= 60\nelse:\n    print(\"Try again\")    # only runs when score < 60\nprint(\"Assessment done\")  # ALWAYS runs\n",
    },
    {
      type: "text",
      md: "There is a difference between a chain of independent `if` statements and a single `if`/`else`. With independent `if`s, Python evaluates each condition separately — and if more than one is true, more than one branch can fire.\n\nAn `if`/`else` is different: it is a single decision. Python checks the condition once and runs exactly one branch. If you want only one branch to fire, use `if`/`else`, not two separate `if`s.",
    },
    {
      type: "example",
      note: "With n=15, both independent ifs fire and you see two lines. With if/else, exactly one fires.",
      code: "n = 15\n\n# Two separate ifs — both conditions are true, both branches run\nif n > 10:\n    print(\"over 10\")\nif n > 5:\n    print(\"over 5\")\n\n# if/else — exactly one branch runs\nif n > 10:\n    print(\"big\")\nelse:\n    print(\"small\")\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Before you run this, trace through it for n=4 and then n=8. Which branch fires each time? What does the program print? Write your prediction for both values, then run to check.",
      starter: "n = 4\nif n % 2 == 0:\n    print(n, \"is even\")\nelse:\n    print(n, \"is odd\")\n",
      check: { type: "output", expected: "4 is even" },
      hints: [
        "The condition is n % 2 == 0. The % operator gives the remainder. 4 divided by 2 leaves no remainder.",
        "When n is 4, n % 2 is 0. The condition 0 == 0 is True, so the if branch runs.",
        "The output is: 4 is even. (For n=8, the same branch fires — 8 % 2 is also 0.)",
      ],
      solution: "n = 4\nif n % 2 == 0:\n    print(n, \"is even\")\nelse:\n    print(n, \"is odd\")\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "This program prints 'Too hot' when temperature is above 30 and 'Just right' otherwise. Change the threshold from 30 to 25, and change 'Too hot' to 'Very warm'.",
      starter: "temperature = 28\nif temperature > 30:\n    print(\"Too hot\")\nelse:\n    print(\"Just right\")\n",
      check: { type: "output", expected: "Very warm" },
      hints: [
        "The threshold is the number after the > operator. Change it from 30 to 25.",
        "The message is inside the if branch. Find it and change the text.",
        "Change temperature > 30 to temperature > 25, and change \"Too hot\" to \"Very warm\".",
      ],
      solution: "temperature = 28\nif temperature > 25:\n    print(\"Very warm\")\nelse:\n    print(\"Just right\")\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This program crashes with an IndentationError. The error points to a line — but the real problem is one line earlier. Read the traceback, find the actual mistake, and fix it so the program prints the correct message.",
      starter: "score = 75\nif score >= 60:\n    print(\"Passed\")\n  print(\"Well done\")\n",
      check: { type: "output", expected: "Passed\nWell done" },
      hints: [
        "The IndentationError says the indent on one line does not match the surrounding block. Look at the line before where Python complained.",
        "The print(\"Well done\") line has two spaces of indent, but the if body uses four. They must match.",
        "Change the two-space indent on print(\"Well done\") to four spaces so it sits inside the if branch.",
      ],
      solution: "score = 75\nif score >= 60:\n    print(\"Passed\")\n    print(\"Well done\")\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete this discount checker. If the price is 50 or more, print 'Discount: 10%'. Otherwise, print 'No discount'. The condition and both branch labels are already placed — fill in the two print calls.",
      starter: "price = 60\nif price >= 50:\n    pass  # print discount message here\nelse:\n    pass  # print no-discount message here\n",
      check: { type: "output", expected: "Discount: 10%" },
      hints: [
        "Replace both pass lines with real print calls. Each branch prints one message.",
        "price is 60, which is >= 50, so the if branch will run.",
        "Replace the first pass with print(\"Discount: 10%\") and the second with print(\"No discount\").",
      ],
      solution: "price = 60\nif price >= 50:\n    print(\"Discount: 10%\")\nelse:\n    print(\"No discount\")\n",
    },
  ],
  codex: {
    topic: "if and else",
    pattern: "if condition:\n    # runs when True\nelse:\n    # runs when False",
    note: "The colon after if and else is required. Indentation (4 spaces) defines the body. Exactly one branch runs. Code after the if/else block always runs — it is not inside either branch. IndentationError often points one line late: look at the line before.",
  },
});

/* ── Lesson 2.3 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c2s3",
  chapter: 2,
  strand: "words",
  lang: "py",
  timeBudgetMin: 18,
  title: "elif: Many Branches",
  glossary: {
    elif: "Short for 'else if'. Adds a new condition to check when all previous conditions were false. Python stops at the first branch whose condition is true.",
  },
  content: [
    {
      type: "text",
      md: "`if`/`else` makes a binary choice — true or false, this or that. Real programs often need more branches. The `[[elif]]` keyword adds extra conditions between the `if` and the `else`. Python checks each condition in order and runs the **first one that is true** — then skips all the rest.\n\nThis is the defining rule: only the first matching branch fires. If none of the conditions match, the `else` branch runs (if you included one).",
    },
    {
      type: "example",
      note: "Four branches for a grade classifier. Run it with different scores to see which branch fires each time.",
      code: "score = 85\nif score >= 90:\n    print(\"A\")\nelif score >= 80:\n    print(\"B\")\nelif score >= 70:\n    print(\"C\")\nelse:\n    print(\"D or below\")\n",
    },
    {
      type: "text",
      md: "The **order of your conditions matters**. Because Python stops at the first true branch, putting a broader condition before a narrower one will swallow results it should not.\n\nIn the broken example below, `score >= 50` appears before `score >= 90`. A score of 95 satisfies both — but Python fires the first matching condition and prints 'Average', never reaching the 'Excellent' branch.",
    },
    {
      type: "text",
      md: "**`elif` is 'else if' — the first match wins and Python stops.** Once a condition in an `elif` chain is `True`, Python runs that block and skips all remaining `elif` and `else` branches. This is different from two separate `if` statements, which always check their condition regardless of what came before. Order in an `elif` chain matters when conditions overlap: `if score >= 90:` before `elif score >= 80:` is correct because a score of 95 hits the first branch and stops. Reversing the order means every A student gets a B instead — the less-specific condition fires first.\n\n**'Flat is better than nested' — a Python principle.** The Zen of Python, a short document of guiding principles, includes: 'Flat is better than nested.' `elif` is the tool for keeping conditional logic flat. The alternative — writing `else:` and then an `if:` inside it — grows rightward with each level and becomes hard to read. `elif` chains stay at the same indentation. Flat code is easier to follow, easier to change, and easier to debug.",
    },
    {
      type: "example",
      note: "A score of 95 should print Excellent, but the elif order is wrong. Run it and see the broken output, then look at the fix.",
      code: "score = 95\n\n# Wrong order — too-early condition swallows high scores\nif score >= 50:\n    print(\"Average\")    # fires for 95, which is wrong\nelif score >= 90:\n    print(\"Excellent\")  # never reached\n\n# Correct: narrow conditions first\nif score >= 90:\n    print(\"Excellent\")\nelif score >= 50:\n    print(\"Average\")\n",
    },
    {
      type: "text",
      md: "Remember the lesson on multiple independent `if` statements? With `elif`, only one branch fires. Without it, every condition is tested independently and several can fire. Here is the difference side by side.",
    },
    {
      type: "example",
      note: "With score=95, the independent-if version prints two lines because both conditions are true. The elif version prints one.",
      code: "score = 95\n\n# Two separate ifs — both fire\nif score >= 90:\n    print(\"Excellent\")\nif score >= 50:\n    print(\"Average\")\n\n# With elif — only the first matching branch fires\nif score >= 90:\n    print(\"Excellent\")\nelif score >= 50:\n    print(\"Average\")\n",
    },
    {
      type: "text",
      md: "You might be tempted to write `else:` followed by `if ...:` on the next line — instead of `elif`. This is not a SyntaxError; it is valid Python. But it creates a **nested** `if` inside the `else` branch, adding an extra level of indentation. If you then omit the inner `else`, you get silent wrong behavior — a case where nothing prints at all.\n\nUsing `elif` avoids this by keeping all the conditions at the same level. Prefer `elif` over `else: / if ...:` whenever you are building a multi-branch decision.",
    },
    {
      type: "example",
      note: "Both versions produce the same output here — but the nested version is harder to read and easier to break. Notice the extra indent level.",
      code: "x = 5\n\n# Using elif (preferred)\nif x > 10:\n    print(\"big\")\nelif x > 3:\n    print(\"medium\")\nelse:\n    print(\"small\")\n\n# Using else: / if: (nested — avoid)\nif x > 10:\n    print(\"big\")\nelse:\n    if x > 3:\n        print(\"medium\")\n    # forgot the inner else — small never prints\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This grade classifier produces wrong results because the elif conditions are in the wrong order. A score of 92 prints 'Average' instead of 'Excellent'. Fix the order so conditions run from highest to lowest.",
      starter: "score = 92\nif score >= 60:\n    print(\"Average\")\nelif score >= 80:\n    print(\"Good\")\nelif score >= 90:\n    print(\"Excellent\")\n",
      check: { type: "output", expected: "Excellent" },
      hints: [
        "With score=92, the first condition score >= 60 is true — so Python fires that branch and skips the rest. The problem is the condition ordering.",
        "Put the most specific (highest) threshold first so narrow conditions have a chance to fire.",
        "Reorder: if score >= 90: Excellent, elif score >= 80: Good, elif score >= 60: Average.",
      ],
      solution: "score = 92\nif score >= 90:\n    print(\"Excellent\")\nelif score >= 80:\n    print(\"Good\")\nelif score >= 60:\n    print(\"Average\")\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete this password-strength checker. A password is 'Weak' if it has fewer than 6 characters, 'OK' if it has 6 to 9 characters, and 'Strong' if it has 10 or more. The structure is set up — fill in the three conditions.",
      starter: "password = \"hello123\"\nlength = len(password)\nif ___:\n    print(\"Weak\")\nelif ___:\n    print(\"OK\")\nelse:\n    print(\"Strong\")\n",
      check: { type: "output", expected: "OK" },
      hints: [
        "password is 'hello123', which has 8 characters. So len(password) is 8. It should print 'OK'.",
        "The first condition checks for fewer than 6 characters. The second checks for 6 to 9.",
        "Use: if length < 6: ... elif length < 10: ... else: ...",
      ],
      solution: "password = \"hello123\"\nlength = len(password)\nif length < 6:\n    print(\"Weak\")\nelif length < 10:\n    print(\"OK\")\nelse:\n    print(\"Strong\")\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write a BMI classifier from scratch. Read weight in kilograms and height in metres using float(input()). Compute BMI as weight divided by height squared. Then print one of four labels:\n\n- Under 18.5: Underweight\n- 18.5 to under 25: Normal\n- 25 to under 30: Overweight\n- 30 or above: Obese\n\nWith inputs 70 and 1.75, it should print Normal.",
      starter: "",
      mockInput: ["70", "1.75"],
      check: { type: "output", expected: "Normal" },
      hints: [
        "Read weight and height with float(input()), not int(input()) — they can have decimal values. Compute: bmi = weight / (height ** 2).",
        "With 70 and 1.75: bmi = 70 / (1.75 ** 2) = 70 / 3.0625 ≈ 22.9, which falls between 18.5 and 25 — Normal.",
        "Use if bmi < 18.5: for Underweight, elif bmi < 25: for Normal, elif bmi < 30: for Overweight, else: for Obese.",
      ],
      solution: "weight = float(input())\nheight = float(input())\nbmi = weight / (height ** 2)\nif bmi < 18.5:\n    print(\"Underweight\")\nelif bmi < 25:\n    print(\"Normal\")\nelif bmi < 30:\n    print(\"Overweight\")\nelse:\n    print(\"Obese\")\n",
    },
  ],
  codex: {
    topic: "elif",
    pattern: "if condition1:\n    ...\nelif condition2:\n    ...\nelse:\n    ...",
    note: "Only the first matching branch fires; all others are skipped. Order matters: put narrower (more specific) conditions first. Prefer elif over 'else: / if:' — the latter creates nesting and is easier to break. Forgetting else: means no output when no condition matches.",
  },
});

/* ── Lesson 2.4 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c2s4",
  chapter: 2,
  strand: "numbers",
  lang: "py",
  timeBudgetMin: 25,
  title: "while Loops",
  glossary: {
    "while loop": "A loop that repeats its body as long as a condition remains true. The condition is checked at the top of each iteration, not continuously.",
    accumulator: "A variable initialized before a loop, updated on each iteration, and read after the loop ends. Used to build up totals, counts, or collected results.",
    "augmented assignment": "A shorthand that combines an operation with assignment. += adds to the current value: n += 1 means n = n + 1.",
    "infinite loop": "A loop whose condition never becomes False, causing it to run forever. Caused by forgetting to update the loop variable inside the body.",
  },
  content: [
    {
      type: "text",
      md: "Before the first while loop, one new shorthand. You have been writing `n = n + 1` to update a variable by adding 1. Python has a shorter form: `n += 1`. This is called **[[augmented assignment]]**. The `+=` operator adds the right side to the current value and stores the result — it means exactly the same thing as the long form.\n\nThe same pattern works for other operators: `n -= 1` subtracts, `n *= 2` doubles, `n //= 2` halves using floor division. You will use `n -= 1` and `n += 1` throughout this lesson.",
    },
    {
      type: "text",
      md: "**Loop invariants — a thinking tool before you write the loop.** An invariant is something that stays true at the start of every iteration. For a countdown from 10: 'at the start of each iteration, `count` holds the number about to be printed.' This gives you three things: what to initialise before the loop (`count = 10`), what to check as the stopping condition (`count >= 1`), and what to update inside (`count -= 1`). If you can state the invariant, you can write the loop. If you cannot, the loop is not yet clear in your head.\n\n**Off-by-one errors — the most common loop bug in all of programming.** `while count < 10` vs `while count <= 10` — which runs ten times when count starts at 1? The first: 1, 2, ..., 9 — nine times. The second: 1, 2, ..., 10 — ten times. Off-by-one errors happen at loop boundaries and are one of the most common bugs across every programming language. The fix: trace through the first iteration and the last iteration by hand. Check both ends before you trust the loop.",
    },
    {
      type: "example",
      note: "Short form and long form do the same thing. The augmented assignment is cleaner and is what you will see in all real Python code.",
      code: "n = 10\nn -= 1       # same as n = n - 1\nprint(n)     # 9\n\ntotal = 0\ntotal += 5   # same as total = total + 5\nprint(total) # 5\n",
    },
    {
      type: "text",
      md: "A **[[while loop]]** repeats a block of code as long as a condition is true. The structure has three parts that you — the programmer — are responsible for:\n\n1. **Initialize** the loop variable before the `while` line\n2. **Test** the variable in the condition\n3. **Update** the variable inside the body\n\nMiss any one of these and the loop breaks: no initialization gives a `NameError`, no update gives an infinite loop.",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Before you run this countdown, trace it on paper. Fill in a table with three columns: the value of n, whether n > 0 is True or False, and what prints. Then run to check.",
      starter: "n = 5\nwhile n > 0:\n    print(n)\n    n -= 1\nprint(\"Blastoff!\")\n",
      check: { type: "output", expected: "5\n4\n3\n2\n1\nBlastoff!" },
      hints: [
        "Start with n=5. Is n > 0 True? Yes — so print 5, then n becomes 4.",
        "After n becomes 0, the condition n > 0 is False. The loop stops.",
        "After the loop, print(\"Blastoff!\") runs — it is outside the loop body.",
      ],
      solution: "n = 5\nwhile n > 0:\n    print(n)\n    n -= 1\nprint(\"Blastoff!\")\n",
    },
    {
      type: "example",
      note: "The complete countdown. Note how each part of the loop is labelled.",
      code: "n = 5            # 1. Initialize\nwhile n > 0:     # 2. Test\n    print(n)\n    n -= 1       # 3. Update\nprint(\"Blastoff!\")\n",
    },
    {
      type: "text",
      md: "The condition is only checked **at the top of each iteration**, not continuously. When Python reaches the `while` line, it evaluates the condition. If it is true, Python runs the entire body before checking again. A change inside the body does not cause an immediate exit — Python finishes the current iteration first.",
    },
    {
      type: "text",
      md: "What happens when you forget the update step? The condition stays true forever and the loop never stops. This is called an **[[infinite loop]]**. If you accidentally create one, click the **Stop** button — this interrupts Python without freezing the tab. The page stays responsive; only the Python worker is stopped.\n\nAfter clicking Stop, read your code and look for the missing update. The fix is always the same: make sure the variable in the condition changes inside the body.",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This loop runs forever because the update step is missing. Click Stop to interrupt it, then add the missing line so it counts down from 3 and prints Done.",
      starter: "n = 3\nwhile n > 0:\n    print(n)\nprint(\"Done\")\n",
      check: { type: "output", expected: "3\n2\n1\nDone" },
      hints: [
        "The condition is n > 0. For the loop to stop, n must eventually reach 0 or below — but nothing inside the body changes n.",
        "Add a line inside the loop body that reduces n by 1 on each iteration.",
        "Add n -= 1 inside the while block, after print(n).",
      ],
      solution: "n = 3\nwhile n > 0:\n    print(n)\n    n -= 1\nprint(\"Done\")\n",
    },
    {
      type: "text",
      md: "The most important loop pattern is the **[[accumulator]]**. It has three parts:\n\n1. Set a variable to a starting value before the loop — usually 0\n2. Update that variable inside the loop on each iteration\n3. Read the final value after the loop ends\n\nThis pattern shows up in almost every real program: summing a list of numbers, counting how many things meet a condition, building a result string. The name is worth learning: when someone says 'use an accumulator', you know exactly what they mean.",
    },
    {
      type: "example",
      note: "An accumulator that sums the numbers 1 through 5. total starts at 0 and grows with each iteration.",
      code: "total = 0    # initialize the accumulator\nn = 1\nwhile n <= 5:\n    total += n   # update on each iteration\n    n += 1\nprint(total)     # read after the loop — prints 15\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This program should print the total of all numbers added, but it prints a partial result on every iteration instead of once at the end. Fix it so it prints only the final total.",
      starter: "total = 0\nn = 1\nwhile n <= 5:\n    total += n\n    print(total)\n    n += 1\n",
      check: { type: "output", expected: "15" },
      hints: [
        "The program prints total inside the loop — so it prints after every addition: 1, 3, 6, 10, 15. You want only the last value.",
        "Move print(total) outside the loop. Code after the while block runs once, after all iterations complete.",
        "Remove print(total) from inside the while body and add it below the loop, at the same indent level as while.",
      ],
      solution: "total = 0\nn = 1\nwhile n <= 5:\n    total += n\n    n += 1\nprint(total)\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete this accumulator. It reads numbers from input until the running total reaches 50 or above, then prints the final total. The while condition and the input line are given — add the two missing lines inside the body.",
      starter: "total = 0\nwhile total < 50:\n    x = int(input())\n    # add x to total\n    # (the loop stops automatically when total >= 50)\nprint(total)\n",
      mockInput: ["10", "20", "25"],
      check: { type: "output", expected: "55" },
      hints: [
        "You need to add x to total inside the loop. Use the accumulator pattern: total += x.",
        "With inputs 10, 20, 25: total becomes 10, then 30, then 55. At 55 the condition total < 50 is False, so the loop stops.",
        "Add the single line: total += x — that is the only thing missing.",
      ],
      solution: "total = 0\nwhile total < 50:\n    x = int(input())\n    total += x\nprint(total)\n",
    },
    {
      type: "text",
      md: "Sometimes you want a loop that reads input until the user enters a specific value — called a **sentinel**. The cleanest way to write this is `while True:` with a `break` inside. `break` exits the loop immediately, regardless of the condition.\n\n`while True:` would run forever on its own. The `break` inside is the only way out. This pattern is common in real code — it is not a mistake.",
    },
    {
      type: "example",
      note: "Keep reading numbers until the user enters 0. break exits the loop as soon as the sentinel is seen.",
      code: "total = 0\nwhile True:\n    x = int(input())\n    if x == 0:\n        break        # 0 is the sentinel — stop here\n    total += x\nprint(\"Total:\", total)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write a number-guessing game. The secret number is 7. Read guesses with int(input()). After each wrong guess, print 'Too high' if the guess is above 7, or 'Too low' if it is below. When the player guesses correctly, print 'Correct!' and stop. With inputs 3, 9, and 7, the output should be:\n\nToo low\nToo high\nCorrect!",
      starter: "",
      mockInput: ["3", "9", "7"],
      check: { type: "output", expected: "Too low\nToo high\nCorrect!" },
      hints: [
        "Start with secret = 7 and read the first guess with guess = int(input()). Then use a while loop that keeps going as long as guess != secret.",
        "Inside the loop, use if/elif to print 'Too high' or 'Too low'. Then read the next guess with guess = int(input()) at the end of the loop body.",
        "After the loop ends (when guess == secret), print 'Correct!'.",
      ],
      solution: "secret = 7\nguess = int(input())\nwhile guess != secret:\n    if guess > secret:\n        print(\"Too high\")\n    else:\n        print(\"Too low\")\n    guess = int(input())\nprint(\"Correct!\")\n",
    },
  ],
  codex: {
    topic: "while loops",
    pattern: "n = start          # 1. initialize\nwhile condition:   # 2. test\n    ...\n    n += 1         # 3. update\n\ntotal = 0          # accumulator\nwhile ...:\n    total += x\nprint(total)",
    note: "Three responsibilities: initialize before, test in condition, update inside body. Condition is checked at the top of each iteration — not continuously. Missing update → infinite loop (click Stop to interrupt). Accumulator pattern: initialize to 0, total += x inside, read after. += is shorthand for n = n + x.",
  },
});

/* ── Lesson 2.5 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c2s5",
  chapter: 2,
  strand: "numbers",
  lang: "py",
  timeBudgetMin: 25,
  title: "for and range",
  glossary: {
    "for loop": "A loop that iterates over a sequence, binding the loop variable to each value in turn. Python manages the counter automatically.",
    range: "A built-in that generates a sequence of integers. range(stop), range(start, stop), or range(start, stop, step). The stop value is not included.",
    break: "Exits the innermost loop immediately, skipping the rest of the current iteration and all future ones.",
    continue: "Skips the rest of the current iteration and jumps back to the condition check. Does not exit the loop.",
  },
  content: [
    {
      type: "text",
      md: "A `while` loop puts you in charge of the counter: you initialize it, test it, and update it. A **[[for loop]]** hands that job to Python. You tell Python what sequence to iterate over, and it steps through the values one by one, giving each to your code in turn.\n\nThe most common sequence is produced by **[[range]]**: `range(5)` generates the integers 0, 1, 2, 3, 4. The loop variable takes each value in order.",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Before you run this, predict the exact sequence of values that range(2, 10, 2) produces. Write out all the numbers it generates, then run to check.",
      starter: "for n in range(2, 10, 2):\n    print(n)\n",
      check: { type: "output", expected: "2\n4\n6\n8" },
      hints: [
        "range(start, stop, step) generates numbers starting at 2, going up by 2 each time, stopping before 10.",
        "2, then 2+2=4, then 4+2=6, then 6+2=8, then 8+2=10 — but 10 is the stop value and is not included.",
        "The sequence is: 2, 4, 6, 8.",
      ],
      solution: "for n in range(2, 10, 2):\n    print(n)\n",
    },
    {
      type: "text",
      md: "The single most important thing about `range`: **the stop value is not included**. `range(5)` gives 0, 1, 2, 3, 4 — five numbers, but 5 itself is not in the sequence. Think of the stop as the fence post at the end: you walk up to it but do not step on it.\n\n`range` has three forms:\n- `range(stop)` — starts at 0, ends at stop−1\n- `range(start, stop)` — starts at start, ends at stop−1\n- `range(start, stop, step)` — starts at start, steps by step, ends before stop\n\nA negative step counts down: `range(5, 0, -1)` gives 5, 4, 3, 2, 1.",
    },
    {
      type: "text",
      md: "**Why `for` exists when `while` can do everything.** A `while` loop that counts can replicate any `for` loop: `i = 0` then `while i < n:` then `i += 1` inside. But `for i in range(n):` says the same thing in one line, and it is harder to get wrong — you cannot forget to increment `i`, and you cannot accidentally increment the wrong variable. More importantly, `for` communicates intent: 'iterate over exactly these values.' `while` communicates a condition: 'keep going as long as this is true.' When the count is known in advance, `for` is the right tool because it makes that structure explicit.\n\n**`range()` is lazy — it generates numbers on demand.** `print(range(5))` shows `range(0, 5)`, not a list of numbers. Python does not create all the values at once; it produces each one only when the loop asks for the next. `for i in range(1_000_000):` uses almost no memory — it never holds a million numbers simultaneously. This matters more as programs grow. You will see it again in Chapter 4 when you compare `range()` to actual lists.",
    },
    {
      type: "example",
      note: "The three forms of range. Notice that the stop value never appears in the output.",
      code: "for i in range(5):            # 0 1 2 3 4\n    print(i, end=\" \")\nprint()\n\nfor i in range(1, 6):         # 1 2 3 4 5\n    print(i, end=\" \")\nprint()\n\nfor i in range(5, 0, -1):     # 5 4 3 2 1\n    print(i, end=\" \")\nprint()\n",
    },
    {
      type: "text",
      md: "You may have noticed `end=\" \"` in that example. Now is a good time to learn what it does.\n\n`print()` normally ends each call with a newline, moving the cursor to the next line. The `end=` parameter lets you change that. `end=\" \"` puts a space after the output instead of a newline, which lets multiple print calls build a single line.\n\nThe `sep=` parameter controls what goes between multiple arguments in a single print call. By default it is a single space: `print(\"a\", \"b\")` gives `a b`. With `sep=\"-\"`, you get `a-b`.",
    },
    {
      type: "example",
      note: "sep= and end= in action. Try changing the separator and end character.",
      code: "print(\"a\", \"b\", \"c\")           # a b c  (default sep=' ')\nprint(\"a\", \"b\", \"c\", sep=\"-\")  # a-b-c\nprint(\"no newline\", end=\"!\")   # no newline!  (cursor stays on same line)\nprint(\" next\")                  # next print continues on same line\n",
    },
    {
      type: "text",
      md: "If you try `print(range(5))`, you see `range(0, 5)` — not the individual numbers. That is because `range` is a lazy sequence: it does not build a list of all values at once. It produces each value on demand as the loop requests it. You will learn why this matters in Chapter 4 when you meet lists. For now, just know: `print(range(5))` shows the description, not the numbers.",
    },
    {
      type: "example",
      note: "range describes itself when printed directly. The for loop asks it for values one by one.",
      code: "print(range(5))         # range(0, 5) — not [0, 1, 2, 3, 4]\nfor n in range(5):\n    print(n, end=\" \")   # 0 1 2 3 4\n",
    },
    {
      type: "text",
      md: "Two keywords that give you fine control inside a loop:\n\n**`break`** exits the loop immediately. No more iterations, no matter what the condition says. The loop is done.\n\n**`[[continue]]`** skips the rest of the current iteration and jumps back to the top of the loop to check the condition and try the next value. The loop is not done — it keeps going.\n\nA common mistake: using `break` when you meant `continue`. They look similar but do opposite things — one ends the loop, the other skips a step.",
    },
    {
      type: "example",
      note: "The same loop body, once with break and once with continue. Compare the outputs.",
      code: "# break: stop when we hit 5\nfor i in range(10):\n    if i == 5:\n        break\n    print(i, end=\" \")     # 0 1 2 3 4\nprint()\n\n# continue: skip 5, keep going\nfor i in range(10):\n    if i == 5:\n        continue\n    print(i, end=\" \")     # 0 1 2 3 4 6 7 8 9\nprint()\n",
    },
    {
      type: "text",
      md: "One important limit: `break` only exits the **innermost loop**. If you have a loop inside another loop, breaking the inner one does not stop the outer one. The outer loop continues with its next iteration.\n\nIf you need to exit both loops at once, one approach is a flag variable: set it to `True` when you want to exit, check it in the outer loop's condition.",
    },
    {
      type: "example",
      note: "break exits the inner loop — the outer loop notices and keeps going. The outer loop controls the rows; break only breaks out of the column loop.",
      code: "for row in range(3):\n    for col in range(5):\n        if col == 3:\n            break           # exits only the inner loop\n        print(row, col)\n    print(\"---\")           # this always runs (outer loop continues)\n",
    },
    {
      type: "text",
      md: "When do you use `for` and when do you use `while`? Here is a rule you can apply:\n\n**Use `for` when you know the count in advance** (or have a sequence to step through). Times-tables, processing a known set of values, repeating a drawing step a fixed number of times — these are all `for` jobs.\n\n**Use `while` when the count depends on what happens at runtime**. A guessing game, reading input until a sentinel, searching until something is found — you do not know in advance how many iterations it will take.",
    },
    {
      type: "example",
      note: "Same effect, different tool. The for version is cleaner because we know the count. The while version would be correct for an unknown count.",
      code: "# for: print 1 to 5 — count is known\nfor i in range(1, 6):\n    print(i)\n\n# while: read until zero — count is not known in advance\n# n = int(input())\n# while n != 0:\n#     print(n)\n#     n = int(input())\n",
    },
    {
      type: "text",
      md: "The accumulator pattern works the same way inside a `for` loop as it does in a `while` loop. Initialize before, update inside, read after.",
    },
    {
      type: "example",
      note: "Recall from the last lesson: accumulator with a for loop. range handles the counter; your job is just the accumulation.",
      code: "# f-strings evaluate fresh on each iteration\nfor i in range(1, 6):\n    print(f\"i = {i}\")\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "This prints the numbers 0 to 4. Change it to print the numbers 10 to 1 in descending order, one per line.",
      starter: "for i in range(5):\n    print(i)\n",
      check: { type: "output", expected: "10\n9\n8\n7\n6\n5\n4\n3\n2\n1" },
      hints: [
        "range can count down using a negative step. range(start, stop, step) where step is -1.",
        "To go from 10 down to 1, the stop must be one below the last value you want. 1 should be included, so stop = 0.",
        "Use range(10, 0, -1) — starts at 10, ends before 0, steps by -1.",
      ],
      solution: "for i in range(10, 0, -1):\n    print(i)\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This loop should print only the odd numbers from 1 to 9, skipping even ones. But it uses break instead of continue — so it stops at the first even number instead of skipping it. Fix the keyword.",
      starter: "for n in range(1, 10):\n    if n % 2 == 0:\n        break\n    print(n)\n",
      check: { type: "output", expected: "1\n3\n5\n7\n9" },
      hints: [
        "break exits the loop entirely when it meets an even number. You want to skip even numbers but keep going.",
        "continue skips the rest of the current iteration and moves to the next value — exactly what skipping means.",
        "Replace break with continue.",
      ],
      solution: "for n in range(1, 10):\n    if n % 2 == 0:\n        continue\n    print(n)\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete this accumulator. It should sum the integers from 1 to n (inclusive) and print the total. The loop and the variable n are given — add the update line inside the loop.",
      starter: "n = 5\ntotal = 0\nfor i in range(1, n + 1):\n    pass  # add i to total here\nprint(total)\n",
      check: { type: "output", expected: "15" },
      hints: [
        "total is the accumulator. It starts at 0 and should grow on each iteration.",
        "Inside the loop, you need to add i to total on each step.",
        "Replace pass with: total += i",
      ],
      solution: "n = 5\ntotal = 0\nfor i in range(1, n + 1):\n    total += i\nprint(total)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write a prime checker from scratch. Loop through every integer from 2 to 20. For each number n, check whether any integer from 2 to n−1 divides it evenly. If none do, print n. The output should be:\n\n2\n3\n5\n7\n11\n13\n17\n19",
      starter: "",
      check: { type: "output", expected: "2\n3\n5\n7\n11\n13\n17\n19" },
      hints: [
        "Use a nested loop: the outer loop steps through n from 2 to 20; the inner loop tests each potential divisor from 2 to n-1.",
        "Use the % operator from Chapter 1 to test divisibility: n % divisor == 0 means divisor divides n exactly.",
        "Track is_prime = True before the inner loop. Set it to False if any divisor works. After the inner loop, if is_prime is still True, print n.",
      ],
      solution: "for n in range(2, 21):\n    is_prime = True\n    for divisor in range(2, n):\n        if n % divisor == 0:\n            is_prime = False\n    if is_prime:\n        print(n)\n",
    },
  ],
  codex: {
    topic: "for loops and range",
    pattern: "for i in range(stop):       # 0 to stop-1\nfor i in range(start, stop):\nfor i in range(start, stop, step):\nfor _ in range(n):         # repeat n times, ignore counter\n\nbreak   # exit loop now\ncontinue  # skip this iteration",
    note: "range stop is NOT included. for when count is known; while when count depends on runtime. break exits only the innermost loop. continue skips the iteration, not the loop. print(sep=, end=): sep= controls the separator between arguments; end= replaces the trailing newline. Accumulator works in for loops too: total = 0 before, total += x inside, read after.",
  },
});

/* ── Lesson 2.6 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c2s6",
  chapter: 2,
  strand: "core",
  lang: "py",
  timeBudgetMin: 15,
  title: "Fix the Broken Code",
  glossary: {
    "syntax error": "An error where Python refuses to run the program at all because the code violates the grammar rules of the language.",
    "runtime error": "An error where Python starts running the program but crashes part-way through — the code was grammatically valid but caused a problem during execution.",
    "logic bug": "Code that runs without crashing but produces the wrong result. Python cannot detect logic bugs — only you can.",
  },
  content: [
    {
      type: "text",
      md: "Errors fall into three categories, and knowing which category you have tells you where to look.\n\nA **[[syntax error]]** means Python refused to run the program at all. The code broke a grammar rule — a missing colon, a `=` where `==` belongs. Python catches these before running a single line.\n\nA **[[runtime error]]** means Python started running but crashed mid-program. The grammar was fine, but something went wrong during execution — dividing by zero, calling `range()` with a float, or referencing a name that was never assigned.\n\nA **[[logic bug]]** means the program ran and finished, but it printed the wrong answer. Python cannot detect logic bugs — the code did exactly what you told it to do, but you told it the wrong thing.",
    },
    {
      type: "text",
      md: "**Debugging is a skill, not luck — follow a process.** Experienced programmers debug systematically. Step one: read the error message completely. It names the file, the line, and the type of error. That line is where Python stopped — which is often (but not always) close to the actual mistake. Step two: understand what Python expected versus what it found. A `TypeError` on `total + item` means one of those is not a number — check what each variable actually holds at that point. Step three: fix the root cause, not the symptom. Indenting a line differently might silence an `IndentationError` without fixing the underlying confusion about which block the line belongs to.\n\n**Print debugging — the oldest tool.** Add `print()` calls to see what variables hold mid-program. If a loop produces the wrong total, add `print(i, total)` inside it. See the actual values on each iteration. Most bugs become obvious when you compare what the computer actually computed against what you assumed it computed. Remove the print calls once the bug is fixed — they are diagnostic scaffolding, not permanent code.",
    },
    {
      type: "text",
      md: "When you hit an error, follow these three steps before changing anything:\n\n1. **Read the error class and message.** The first word after the colon names the type: `SyntaxError`, `IndentationError`, `TypeError`, `NameError`. The message after it says what specifically went wrong.\n2. **Go to the indicated line — then look at the line before it.** Python reports where it *noticed* the problem, which is sometimes one line after where the mistake actually is. The classic case: `IndentationError` often points to the line after the mis-indented one.\n3. **Understand the cause before changing anything.** If you fix something without understanding it, you may introduce a new bug or hide the original one. Ask: 'Why did this specific thing fail here?'",
    },
    {
      type: "example",
      note: "IndentationError pointing to the wrong line. Python reports line 5, but the real problem is the wrong indent on the print below it. Read the error, look one line earlier, and spot the cause.",
      code: "# Run this and read the IndentationError.\n# Then look at line 4 vs what Python expected.\ntotal = 0\nfor n in range(1, 4):\n    total += n\n  print(total)   # 2-space indent in a 4-space block\n",
    },
    {
      type: "example",
      note: "The fixed version: print is now outside the loop (no indent) where it prints the final total once.",
      code: "total = 0\nfor n in range(1, 4):\n    total += n\nprint(total)    # 6 — printed once, after the loop\n",
    },
    {
      type: "text",
      md: "One more thing to know: **fixing the first error may reveal a second one underneath**. Python stops at the first problem it finds, so your code might have multiple bugs hiding behind each other. Fix one, re-run, and read the next error fresh. Each fix should be deliberate — understand each error before moving to the next.",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This program should print 15, but it crashes with an IndentationError. Read the traceback — the error points to a specific line, but the real problem is one line earlier. Fix it so the program prints 15.",
      starter: "total = 0\nfor n in range(1, 6):\n    total += n\n  print(total)\n",
      check: { type: "output", expected: "15" },
      hints: [
        "The IndentationError message tells you the line Python found the problem on. Look at the line before that one.",
        "print(total) has two spaces of indent, but the for body uses four. They are at different indentation levels — Python cannot tell where print belongs.",
        "Fix: move print(total) to column 0 (no indent) so it runs after the loop finishes.",
      ],
      solution: "total = 0\nfor n in range(1, 6):\n    total += n\nprint(total)\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This program should print 0 1 2 3 4 on one line but crashes with a TypeError. Read the error, understand why range() cannot use that value, and fix it.",
      starter: "limit = 10\nfor i in range(limit / 2):\n    print(i, end=\" \")\n",
      check: { type: "output", expected: "0 1 2 3 4 " },
      hints: [
        "The TypeError message says 'float object cannot be interpreted as an integer'. range() needs an integer, not a float.",
        "limit / 2 uses regular division, which always produces a float (10 / 2 = 5.0, not 5). range() cannot accept 5.0.",
        "Use floor division instead: range(limit // 2). // gives an integer result.",
      ],
      solution: "limit = 10\nfor i in range(limit // 2):\n    print(i, end=\" \")\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This program runs without crashing but prints 5 instead of 15. It is a logic bug — no error message, just a wrong answer. Find and fix the mistake.",
      starter: "total = 0\nfor n in range(1, 6):\n    total = n\nprint(total)\n",
      check: { type: "output", expected: "15" },
      hints: [
        "There is no error — Python does exactly what the code says. Read the loop body and ask: what does total = n do on each iteration?",
        "total = n replaces total with n on every step. After the last iteration, n is 5, so total is 5. The accumulation is lost.",
        "The accumulator pattern uses +=, not =. Change total = n to total += n.",
      ],
      solution: "total = 0\nfor n in range(1, 6):\n    total += n\nprint(total)\n",
    },
  ],
  codex: {
    topic: "debugging protocol",
    pattern: "# 1. Read the error class and message\n# 2. Go to the line — look one line earlier too\n# 3. Understand the cause before changing anything",
    note: "Three error categories: syntax (Python won't run), runtime (crashes mid-run), logic (runs but wrong answer). IndentationError often points one line late. TypeError in range(): use // not /. Logic bugs have no error message — trace the variable table to find them. Fixing one error may reveal another underneath.",
  },
});

/* ── Lesson 2.7 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c2s7",
  chapter: 2,
  strand: "sound",
  lang: "py",
  timeBudgetMin: 20,
  title: "Loops Make Art and Beats",
  glossary: {
    "_": "The underscore variable name, used by convention when you need to loop a set number of times but do not actually use the loop variable in the body.",
  },
  content: [
    {
      type: "text",
      md: "In the last two lessons, loops counted numbers. Here they do something more interesting: they draw shapes and schedule music. The loop itself is unchanged — the only difference is what you call inside the body.\n\nThe key idea in this lesson: **the loop variable does not have to be a counter you print — it can be a parameter that changes what happens on each step**. When you write `forward(i * 10)`, the turtle moves a different distance on every iteration. That changing distance is what makes a spiral open outward instead of repeating the same step.",
    },
    {
      type: "text",
      md: "**The `_` convention — communicating throwaway variables.** In Python, `_` is a valid variable name, but by convention it means 'I do not need this value.' Writing `for _ in range(6):` tells any reader: 'this loop runs 6 times; the loop count itself is not used.' Without `_`, a reader would wonder where `i` gets used later. The underscore is the standard Python signal for a throwaway — you will see it in professional code constantly.\n\n**Using the loop variable as a parameter — the key to procedural art.** `forward(i * 10)` means the distance changes with every step: 0, 10, 20, 30, ... The loop variable `i` is not just a counter; it is a *scaling parameter* that drives the drawing. This is the core trick behind spirals, gradients, and patterns: let the iteration number control the size, angle, or colour. The same principle applies to music: `play(60 + i)` plays a rising sequence, one note per step.",
    },
    {
      type: "example",
      note: "A square. We repeat the same two steps four times. The loop variable _ is the underscore convention — it signals that the count exists but you do not need to use its value.",
      code: "for _ in range(4):\n    forward(100)\n    right(90)\n",
    },
    {
      type: "text",
      md: "The `_` name is a Python convention for 'I need to loop N times, but I do not need the count'. It is a real variable — you could call it `i` — but `_` tells any reader that the loop variable is intentionally unused in the body. You will see it often in real code.",
    },
    {
      type: "example",
      note: "A spiral: the step length grows on every iteration because i multiplies forward's distance. Without i * 5, you get a circle.",
      code: "for i in range(36):\n    forward(i * 5)    # i changes every step — that's what makes it a spiral\n    right(10)\n",
    },
    {
      type: "example",
      note: "A kick on every beat, repeated four times. sample('kick') plays the sample; sleep(0.5) adds a half-second gap before the next beat.",
      code: "for beat in range(4):\n    sample(\"kick\")\n    sleep(0.5)\n",
    },
    {
      type: "text",
      md: "Loops can contain `if` statements to vary what happens on different iterations. The `%` operator from Chapter 1 is especially useful here: `beat % 2 == 0` is True on beats 0, 2, 4, 6... (the even ones) and False on beats 1, 3, 5, 7... (the odd ones). This lets you alternate between two sounds or actions on alternating steps.",
    },
    {
      type: "example",
      note: "Kick on even beats, snare on odd beats. The if/else inside the loop picks a different sample depending on the beat number.",
      code: "for beat in range(8):\n    if beat % 2 == 0:\n        sample(\"kick\")\n    else:\n        sample(\"snare\")\n    sleep(0.5)\n",
    },
    {
      type: "text",
      md: "Two loops can be nested: one inside the other. The inner loop runs to completion on **each** iteration of the outer loop. In the drum example below, for each bar the inner loop plays all four beats. Four bars of four beats gives sixteen events total.",
    },
    {
      type: "example",
      note: "A nested drum pattern. The outer loop controls the bar; the inner loop plays the beats. bar is held steady while beat cycles through 0,1,2,3.",
      code: "for bar in range(4):\n    for beat in range(4):\n        if beat == 0:\n            sample(\"kick\")\n        else:\n            sample(\"hihat\")\n        sleep(0.5)\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This code draws a hexagon instead of a spiral because forward uses a fixed distance on every step. Fix it so the distance grows with each iteration — use the loop variable to multiply the step size — so the shape opens outward.",
      starter: "for i in range(6):\n    forward(50)\n    right(60)\n",
      check: {
        type: "calls",
        calls: [
          { fn: "forward", val: 0 },  { fn: "right", val: 60 },
          { fn: "forward", val: 15 }, { fn: "right", val: 60 },
          { fn: "forward", val: 30 }, { fn: "right", val: 60 },
          { fn: "forward", val: 45 }, { fn: "right", val: 60 },
          { fn: "forward", val: 60 }, { fn: "right", val: 60 },
          { fn: "forward", val: 75 }, { fn: "right", val: 60 },
        ],
      },
      hints: [
        "A hexagon repeats the same step each time. A spiral increases the step on every iteration.",
        "The loop variable i holds 0, 1, 2, 3, 4, 5 in order. Multiply it by a constant to get a growing distance.",
        "Change forward(50) to forward(i * 15). That gives 0, 15, 30, 45, 60, 75 — a growing spiral.",
      ],
      solution: "for i in range(6):\n    forward(i * 15)\n    right(60)\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete this spiral. The for header is given. Fill in the two turtle calls inside the body so each step moves forward by i * 10 units and turns right by 91 degrees.",
      starter: "for i in range(8):\n    pass  # your two lines here\n",
      check: {
        type: "calls",
        calls: [
          { fn: "forward", val: 0 },  { fn: "right", val: 91 },
          { fn: "forward", val: 10 }, { fn: "right", val: 91 },
          { fn: "forward", val: 20 }, { fn: "right", val: 91 },
          { fn: "forward", val: 30 }, { fn: "right", val: 91 },
          { fn: "forward", val: 40 }, { fn: "right", val: 91 },
          { fn: "forward", val: 50 }, { fn: "right", val: 91 },
          { fn: "forward", val: 60 }, { fn: "right", val: 91 },
          { fn: "forward", val: 70 }, { fn: "right", val: 91 },
        ],
      },
      hints: [
        "Replace pass with two lines: one forward call and one right call.",
        "The distance should change each iteration: i * 10 gives 0, 10, 20, 30... as i increases.",
        "forward(i * 10) then right(91).",
      ],
      solution: "for i in range(8):\n    forward(i * 10)\n    right(91)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write a hexagon from scratch. A hexagon has 6 equal sides. Each exterior angle is 60 degrees. Use a for loop and the _ convention since you do not need the counter. Each side should be 100 units long.",
      starter: "",
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
        "A hexagon has 6 sides, so range(6). The _ convention: for _ in range(6).",
        "Each side is a forward(100) call. Each turn is a right(60) call.",
        "for _ in range(6): then forward(100) and right(60) inside the body.",
      ],
      solution: "for _ in range(6):\n    forward(100)\n    right(60)\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete this 4-beat drum loop. On even beats (0 and 2) play a kick; on odd beats (1 and 3) play a snare. The loop and the if/else structure are given — fill in the two sample calls.",
      starter: "for beat in range(4):\n    if beat % 2 == 0:\n        pass  # play kick here\n    else:\n        pass  # play snare here\n    sleep(0.5)\n",
      check: {
        type: "calls",
        calls: [
          { fn: "sample", name: "kick" },
          { fn: "sample", name: "snare" },
          { fn: "sample", name: "kick" },
          { fn: "sample", name: "snare" },
        ],
      },
      hints: [
        "Replace each pass with a sample() call.",
        "sample(\"kick\") plays the kick drum sound. sample(\"snare\") plays the snare.",
        "First pass: sample(\"kick\"). Second pass: sample(\"snare\").",
      ],
      solution: "for beat in range(4):\n    if beat % 2 == 0:\n        sample(\"kick\")\n    else:\n        sample(\"snare\")\n    sleep(0.5)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write an 8-beat loop from scratch. On even beats call sample('kick'); on odd beats call sample('hihat'). Add sleep(0.5) after each beat to set the pace.",
      starter: "",
      check: {
        type: "calls",
        calls: [
          { fn: "sample", name: "kick" },
          { fn: "sample", name: "hihat" },
          { fn: "sample", name: "kick" },
          { fn: "sample", name: "hihat" },
          { fn: "sample", name: "kick" },
          { fn: "sample", name: "hihat" },
          { fn: "sample", name: "kick" },
          { fn: "sample", name: "hihat" },
        ],
      },
      hints: [
        "Start with for beat in range(8): and an if/else inside to pick the right sample.",
        "beat % 2 == 0 is True for beats 0, 2, 4, 6 — the even ones.",
        "if beat % 2 == 0: sample(\"kick\") else: sample(\"hihat\"), then sleep(0.5) after the if/else block.",
      ],
      solution: "for beat in range(8):\n    if beat % 2 == 0:\n        sample(\"kick\")\n    else:\n        sample(\"hihat\")\n    sleep(0.5)\n",
    },
  ],
  codex: {
    topic: "loops for drawing and sound",
    pattern: "for _ in range(n):      # repeat n times\n    forward(100)\n    right(60)\n\nfor i in range(n):      # vary with i\n    forward(i * 10)\n    right(91)\n\nfor beat in range(8):   # drum pattern\n    if beat % 2 == 0:\n        sample(\"kick\")\n    sleep(0.5)",
    note: "_ is the throwaway variable convention — use it when the loop variable is not needed in the body. The loop variable is a parameter: forward(i * 10) produces a different step each iteration. % 2 == 0 selects even beats; % 2 != 0 selects odd. Nested loops: inner loop completes all iterations before outer loop advances one step.",
  },
});

/* ── Lesson 2.8 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c2s8",
  chapter: 2,
  strand: "core",
  lang: "py",
  timeBudgetMin: 18,
  title: "try and except",
  glossary: {
    exception: "An error that occurs while a program is running. Python creates an exception object and looks for code that can handle it.",
    "try block": "The code Python attempts to run. If an exception occurs inside, Python jumps to the matching except block.",
    "except block": "Code that runs only when a specific exception occurs in the try block above it. If no exception occurs, the except block is skipped.",
    "ValueError": "Raised when a function receives the right type but an invalid value — for example, int(\"hello\") receives a string but \"hello\" is not a valid integer.",
    "ZeroDivisionError": "Raised when dividing by zero.",
  },
  content: [
    {
      type: "text",
      md: "You have already seen `ValueError` at work: `int(\"hello\")` crashes with it. Until now, the only way to avoid that crash was to check the input before calling `int()`. Python gives you a second tool: `try`/`except`.\n\nThe idea is direct. Put the risky code inside a `try` block. If an **[[exception]]** occurs, Python jumps immediately to the matching `except` block and runs it instead. If no exception occurs, the `except` block is skipped entirely.",
    },
    {
      type: "example",
      note: "Run this. int('hello') raises a ValueError — Python jumps to the except block and prints the message. The line print(n) inside the try block never runs.",
      code: "try:\n    n = int(\"hello\")\n    print(n)              # never reached\nexcept ValueError:\n    print(\"not a valid number\")\nprint(\"program continues\")  # always runs\n",
    },
    {
      type: "text",
      md: "**Why not just use `if` to check first?** You could try to guard against bad input before calling `int()`. Python strings have a method called `.isdigit()` that returns `True` if every character is a digit. Looks like a solution — but `.isdigit()` returns `False` for `\"-5\"` (has a minus sign), `\"3.14\"` (has a dot), and `\" 7\"` (has a leading space). All three are valid integers or near-integers that `int()` actually handles fine. The pre-check rejects numbers you want to accept.\n\nYou also end up writing the work twice: check the string, then convert the string. `try`/`except` does it once — attempt the conversion, handle the failure. The rule of thumb: use `if` when you can test a condition cleanly and cheaply before doing the work. Use `try`/`except` when the only reliable way to know if something works is to try it.",
    },
    {
      type: "text",
      md: "The `except` line names the specific **[[exception]]** class it handles. `except ValueError:` catches only `ValueError` — other exceptions still propagate and crash the program as usual. This is correct behaviour: you should only catch exceptions you know how to handle.\n\nYou can have multiple `except` blocks below one `try`, each handling a different class. Python checks them in order and runs the first one that matches.",
    },
    {
      type: "example",
      note: "Two except blocks, two different errors. Change the inputs to see each branch fire.",
      code: "try:\n    a = float(input())\n    b = float(input())\n    print(a / b)\nexcept ValueError:\n    print(\"Enter numbers only.\")\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero.\")\n",
    },
    {
      type: "text",
      md: "**Python's philosophy: EAFP.** Python programmers call this style EAFP — 'Easier to Ask Forgiveness than Permission'. Instead of pre-checking every possible problem before doing something, you attempt the thing and handle failures in named `except` blocks. The alternative is called LBYL — 'Look Before You Leap' — which produces chains of `if` guards that are often harder to read and still miss edge cases.\n\nEAFP keeps the normal path clean. The `try` block reads like the code would if nothing went wrong. Error handling is separated into blocks that are clearly labelled with exactly what went wrong. Exceptions are **named objects** — `ValueError` and `ZeroDivisionError` are Python classes that carry information about what failed. Naming them in `except` is making a claim: 'I know exactly what can go wrong on these lines, and I know what to do about it.' That specificity is what makes exception handling good design, not just defensive coding.",
    },
    {
      type: "text",
      md: "**Bare `except:` — why it is dangerous.** You may see `except:` written without a class name. This catches everything, including `KeyboardInterrupt` (what fires when someone presses Ctrl-C to stop the program), `SystemExit`, and `MemoryError`. More importantly, it catches bugs in your own code. If you have a typo that causes a `NameError`, a bare `except:` swallows it silently and runs your error-handling message instead — making the bug invisible. You spend an hour wondering why the wrong thing happens, not realising the program is hiding a crash from you.\n\nAlways name the class you intend to handle. Catching `ValueError` means: 'this line can fail with a bad value and I know what to print.' Everything else — including bugs you did not anticipate — still crashes loudly, which is correct.",
    },
    {
      type: "text",
      md: "**Bulletproof input: combining what you know.** The most practical pattern `try`/`except` unlocks is a loop that keeps asking until it gets a valid answer. You already know all the pieces: `while True:` from Lesson 2.4 loops forever, and `break` exits the loop early. Wrap the risky conversion in `try`, put `break` right after the line that can fail, and put the retry message in `except`.\n\nWhy does `break` go after `int(input())` and not after the whole `try` block? Because if `int()` raises a `ValueError`, Python immediately jumps to `except` — the `break` is never reached. The loop restarts. Only when `int()` succeeds does execution reach `break` and exit the loop. The structure uses the exception itself as the signal: success means break, failure means loop again.\n\nThis is the standard Python idiom for validated input. Almost every real program that reads from a person eventually needs it.",
    },
    {
      type: "example",
      note: "Keep asking until the user enters a valid integer. break exits the loop only when int() succeeds. Any non-integer restarts the loop.",
      code: "while True:\n    try:\n        n = int(input())\n        break\n    except ValueError:\n        print(\"That's not a number. Try again.\")\nprint(\"Got:\", n)\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Before you run this, predict which block executes and what prints. Write your prediction, then run to check.",
      starter: "try:\n    n = int(\"42\")\n    print(\"success:\", n)\nexcept ValueError:\n    print(\"not a number\")\n",
      check: { type: "output", expected: "success: 42" },
      hints: [
        "int(\"42\") converts the string \"42\" to the integer 42. That is a valid conversion — no ValueError is raised.",
        "When no exception occurs inside the try block, the except block is skipped entirely.",
        "The try block runs to completion: n becomes 42 and print(\"success:\", n) runs. Output: success: 42.",
      ],
      solution: "try:\n    n = int(\"42\")\n    print(\"success:\", n)\nexcept ValueError:\n    print(\"not a number\")\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "This catches a ValueError and prints 'oops'. Change the except message to 'Enter a whole number.' instead.",
      starter: "try:\n    n = int(\"hello\")\n    print(n)\nexcept ValueError:\n    print(\"oops\")\n",
      check: { type: "output", expected: "Enter a whole number." },
      hints: [
        "The message is inside the except block. It is a string argument to print.",
        "Change only the string — keep the rest of the structure the same.",
        "Replace print(\"oops\") with print(\"Enter a whole number.\")",
      ],
      solution: "try:\n    n = int(\"hello\")\n    print(n)\nexcept ValueError:\n    print(\"Enter a whole number.\")\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This program should catch the error from int('hello') and print 'not a number'. But it specifies the wrong exception class, so the real ValueError escapes and crashes the program. Fix the except line so it catches the right error.",
      starter: "try:\n    n = int(\"hello\")\n    print(n)\nexcept ZeroDivisionError:\n    print(\"not a number\")\n",
      check: { type: "output", expected: "not a number" },
      hints: [
        "int(\"hello\") raises a ValueError — a conversion failure. The except line currently catches ZeroDivisionError, which is a different class.",
        "The except line needs to name the class that int() actually raises when it gets invalid text.",
        "Change except ZeroDivisionError: to except ValueError:",
      ],
      solution: "try:\n    n = int(\"hello\")\n    print(n)\nexcept ValueError:\n    print(\"not a number\")\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete the bulletproof input loop. The while True and try/break structure are in place — add one print call inside the except block so the user knows to try again.",
      starter: "while True:\n    try:\n        n = int(input())\n        break\n    except ValueError:\n        pass  # tell the user to try again\nprint(\"Got:\", n)\n",
      mockInput: ["abc", "5"],
      check: { type: "output", expected: "That's not a number. Try again.\nGot: 5" },
      hints: [
        "Replace pass with a print call. When the user types 'abc', int() raises ValueError and the except block runs — your message should appear there.",
        "The loop keeps going after the except block. On the next iteration, the user enters 5 — int('5') succeeds, break exits the loop.",
        "Replace pass with: print(\"That's not a number. Try again.\")",
      ],
      solution: "while True:\n    try:\n        n = int(input())\n        break\n    except ValueError:\n        print(\"That's not a number. Try again.\")\nprint(\"Got:\", n)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write a safe divider from scratch. Read two numbers with float(input()). Divide the first by the second and print the result. Handle two possible errors: if the user types a non-number, print 'Enter numbers only.'; if the second number is zero, print 'Cannot divide by zero.' With inputs 10 and 2, it should print 5.0.",
      starter: "",
      mockInput: ["10", "2"],
      check: { type: "output", expected: "5.0" },
      hints: [
        "Wrap both float(input()) calls and the division inside a single try block. If any line in the try block raises an exception, Python jumps to the matching except.",
        "Use two except blocks: except ValueError: and except ZeroDivisionError: — each with its own message.",
        "try: a = float(input()); b = float(input()); print(a / b) — then two except blocks beneath.",
      ],
      solution: "try:\n    a = float(input())\n    b = float(input())\n    print(a / b)\nexcept ValueError:\n    print(\"Enter numbers only.\")\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero.\")\n",
    },
  ],
  codex: {
    topic: "try and except",
    pattern: "try:\n    risky_code()\nexcept ValueError:\n    print(\"handle it\")\nexcept ZeroDivisionError:\n    print(\"zero\")\n\n# Bulletproof input:\nwhile True:\n    try:\n        n = int(input())\n        break\n    except ValueError:\n        print(\"Try again.\")",
    note: "try runs the risky code; except catches the named exception if it occurs. Always name the exception class — bare except: catches everything including bugs. ValueError: bad conversion (int('abc')). ZeroDivisionError: division by zero. Multiple except blocks catch different classes.",
  },
});

/* ── Lesson 2.9 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c2s9",
  chapter: 2,
  strand: "sound",
  lang: "py",
  timeBudgetMin: 25,
  title: "Art and Music Capstone",
  glossary: {
    capstone: "A project that combines everything you have learned so far. No new syntax — only new combinations.",
  },
  content: [
    {
      type: "text",
      md: "This lesson introduces no new syntax. Everything here — variables, loops, conditions, try/except, turtle commands, and sound commands — you already know. The goal is to combine them in ways that are bigger than any single lesson.\n\nThe exercises below are split into two groups: drawing first, then music. Each group starts with a worked example, then a reference card, then exercises.",
    },
    {
      type: "text",
      md: "**Drawing with the turtle.** Here is the complete toolkit for what follows. Keep this visible while you work through the drawing exercises.",
    },
    {
      type: "table",
      title: "Turtle colours — any of these work in pencolor()",
      head: ["colour", "colour", "colour", "colour", "colour", "colour", "colour"],
      rows: [
        ["`\"red\"`", "`\"orange\"`", "`\"yellow\"`", "`\"green\"`", "`\"blue\"`", "`\"purple\"`", "`\"pink\"`"],
        ["`\"cyan\"`", "`\"magenta\"`", "`\"gold\"`", "`\"coral\"`", "`\"teal\"`", "`\"lime\"`", "`\"indigo\"`"],
      ],
    },
    {
      type: "table",
      title: "Polygon angles — regular shapes",
      head: ["shape", "sides", "turn angle"],
      rows: [
        ["triangle", "3", "`120`°"],
        ["square", "4", "`90`°"],
        ["pentagon", "5", "`72`°"],
        ["hexagon", "6", "`60`°"],
        ["5-pointed star", "—", "`144`° (skips every other vertex)"],
      ],
    },
    {
      type: "example",
      note: "A spiral that changes colour every three steps. Three ideas from different lessons working together: the loop variable as a parameter, the % operator for cycling, and pencolor() from the turtle library.",
      code: "for i in range(18):\n    if i % 3 == 0:\n        pencolor(\"red\")\n    elif i % 3 == 1:\n        pencolor(\"blue\")\n    else:\n        pencolor(\"green\")\n    forward(i * 8)\n    right(91)\n",
    },
    {
      type: "example",
      note: "A melody that repeats a three-note motif four times. The outer loop counts repetitions; the inner play/sleep lines lay down the notes. set_tempo() controls the speed.",
      code: "set_tempo(110)\nfor rep in range(4):\n    play(60)\n    sleep(0.5)\n    play(64)\n    sleep(0.5)\n    play(67)\n    sleep(0.5)\n",
    },
    {
      type: "example",
      note: "A 16-beat groove: kick on every beat, snare on beats 3 and 11 (the backbeat in a bar of 16). Change the beat numbers to shift the snare position.",
      code: "set_tempo(120)\nfor beat in range(16):\n    sample(\"kick\")\n    if beat == 3 or beat == 11:\n        sample(\"snare\")\n    sleep(0.25)\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This is meant to draw a 5-pointed star, but the angle is wrong so it draws something else. A regular 5-pointed star needs an exterior angle of 144 degrees — not 120. Fix the turn angle.",
      starter: "for _ in range(5):\n    forward(100)\n    right(120)\n",
      check: {
        type: "calls",
        calls: [
          { fn: "forward", val: 100 }, { fn: "right", val: 144 },
          { fn: "forward", val: 100 }, { fn: "right", val: 144 },
          { fn: "forward", val: 100 }, { fn: "right", val: 144 },
          { fn: "forward", val: 100 }, { fn: "right", val: 144 },
          { fn: "forward", val: 100 }, { fn: "right", val: 144 },
        ],
      },
      hints: [
        "A regular polygon with n sides has an exterior angle of 360/n degrees. But a 5-pointed star is not a regular pentagon — each point turns 144 degrees, not 72.",
        "The current angle 120 draws a triangle-like shape. A proper 5-pointed star goes forward, turns 144, forward, turns 144, and so on for all five points.",
        "Change right(120) to right(144).",
      ],
      solution: "for _ in range(5):\n    forward(100)\n    right(144)\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete this colour-changing spiral. The loop runs 6 steps. On each step, pick a colour based on i % 3 (0 → red, 1 → blue, 2 → green), then move forward by i * 10 and turn right 91 degrees. The three pencolor calls are missing — fill them in.",
      starter: "for i in range(6):\n    if i % 3 == 0:\n        pass  # pencolor red\n    elif i % 3 == 1:\n        pass  # pencolor blue\n    else:\n        pass  # pencolor green\n    forward(i * 10)\n    right(91)\n",
      check: {
        type: "calls",
        calls: [
          { fn: "color", val: "red" },   { fn: "forward", val: 0 },  { fn: "right", val: 91 },
          { fn: "color", val: "blue" },  { fn: "forward", val: 10 }, { fn: "right", val: 91 },
          { fn: "color", val: "green" }, { fn: "forward", val: 20 }, { fn: "right", val: 91 },
          { fn: "color", val: "red" },   { fn: "forward", val: 30 }, { fn: "right", val: 91 },
          { fn: "color", val: "blue" },  { fn: "forward", val: 40 }, { fn: "right", val: 91 },
          { fn: "color", val: "green" }, { fn: "forward", val: 50 }, { fn: "right", val: 91 },
        ],
      },
      hints: [
        "Replace each pass with a pencolor() call. pencolor takes a colour name as a string.",
        "The first pass is inside if i % 3 == 0: — that branch runs when i is 0 or 3. The colour there is red.",
        "Three replacements: pencolor(\"red\"), pencolor(\"blue\"), pencolor(\"green\") — one per branch.",
      ],
      solution: "for i in range(6):\n    if i % 3 == 0:\n        pencolor(\"red\")\n    elif i % 3 == 1:\n        pencolor(\"blue\")\n    else:\n        pencolor(\"green\")\n    forward(i * 10)\n    right(91)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write a polygon generator. Use bulletproof input (while True / try / break / except ValueError) to read the number of sides. Then draw a regular polygon: each side is 100 units and each turn is 360 divided by the number of sides degrees. With input 5, it draws a pentagon.",
      starter: "",
      mockInput: ["5"],
      check: {
        type: "calls",
        calls: [
          { fn: "forward", val: 100 }, { fn: "right", val: 72.0 },
          { fn: "forward", val: 100 }, { fn: "right", val: 72.0 },
          { fn: "forward", val: 100 }, { fn: "right", val: 72.0 },
          { fn: "forward", val: 100 }, { fn: "right", val: 72.0 },
          { fn: "forward", val: 100 }, { fn: "right", val: 72.0 },
        ],
      },
      hints: [
        "Use the bulletproof input pattern from Lesson 2.8: while True: / try: n = int(input()) / break / except ValueError: print(...)",
        "Once you have n, use a for loop: for _ in range(n): then forward(100) and right(360 / n).",
        "360 / 5 = 72.0 — division gives a float, which right() accepts. You do not need to convert it.",
      ],
      solution: "while True:\n    try:\n        n = int(input())\n        break\n    except ValueError:\n        print(\"Enter a whole number.\")\nfor _ in range(n):\n    forward(100)\n    right(360 / n)\n",
    },
    {
      type: "text",
      md: "**Making music.** The next exercises are all about sound. Use the reference cards below while you build.",
    },
    {
      type: "table",
      title: "Note numbers — C major scale (middle octave)",
      head: ["C", "D", "E", "F", "G", "A", "B", "high C"],
      rows: [
        ["`60`", "`62`", "`64`", "`65`", "`67`", "`69`", "`71`", "`72`"],
      ],
    },
    {
      type: "table",
      title: "Going higher or lower — add or subtract 12 per octave",
      head: ["low C", "middle C", "high C", "very high C"],
      rows: [
        ["`48`", "`60`", "`72`", "`84`"],
      ],
    },
    {
      type: "table",
      title: "Minor scale — darker, moodier sound",
      head: ["C", "D", "Eb", "F", "G", "Ab", "Bb", "C"],
      rows: [
        ["`60`", "`62`", "`63`", "`65`", "`67`", "`68`", "`70`", "`72`"],
      ],
    },
    {
      type: "table",
      title: "Pentatonic — five notes that sound good in any order",
      head: ["C", "D", "E", "G", "A"],
      rows: [
        ["`60`", "`62`", "`64`", "`67`", "`69`"],
      ],
    },
    {
      type: "table",
      title: "Drum sounds — use with sample()",
      head: ["name", "sound"],
      rows: [
        ["`\"kick\"`", "deep bass drum hit"],
        ["`\"snare\"`", "cracking mid hit"],
        ["`\"hihat\"`", "short high tick"],
        ["`\"clap\"` / `\"tom\"` / any name", "short percussive click"],
      ],
    },
    {
      type: "table",
      title: "sleep() values — how long to wait between notes or beats",
      head: ["call", "feels like"],
      rows: [
        ["`sleep(1)`", "one full beat"],
        ["`sleep(0.5)`", "half beat (eighth note)"],
        ["`sleep(0.25)`", "quarter beat (sixteenth note — driving groove)"],
      ],
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete this repeating arpeggio. The outer loop runs 3 times. Inside each repetition, play three notes — 60 (C), 64 (E), and 67 (G) — with a sleep(0.5) after each note. The loop header and set_tempo are given; add the six missing lines.",
      starter: "set_tempo(100)\nfor rep in range(3):\n    pass  # play 60, sleep 0.5, play 64, sleep 0.5, play 67, sleep 0.5\n",
      check: {
        type: "calls",
        calls: [
          { fn: "play", note: 60 }, { fn: "play", note: 64 }, { fn: "play", note: 67 },
          { fn: "play", note: 60 }, { fn: "play", note: 64 }, { fn: "play", note: 67 },
          { fn: "play", note: 60 }, { fn: "play", note: 64 }, { fn: "play", note: 67 },
        ],
      },
      hints: [
        "Replace pass with three play/sleep pairs. Each pair plays one note then waits.",
        "play(60); sleep(0.5) plays middle C and waits. Then play(64); sleep(0.5) plays E. Then play(67); sleep(0.5) plays G.",
        "Six lines inside the loop body: play(60), sleep(0.5), play(64), sleep(0.5), play(67), sleep(0.5).",
      ],
      solution: "set_tempo(100)\nfor rep in range(3):\n    play(60)\n    sleep(0.5)\n    play(64)\n    sleep(0.5)\n    play(67)\n    sleep(0.5)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write an 8-beat groove from scratch. On every beat play a kick with sample('kick'). On beats 2 and 6 also play a snare with sample('snare') — after the kick. Add sleep(0.5) after each beat's sounds. Use a for loop over range(8) and if with the or operator.",
      starter: "",
      check: {
        type: "calls",
        calls: [
          { fn: "sample", name: "kick" },
          { fn: "sample", name: "kick" },
          { fn: "sample", name: "kick" }, { fn: "sample", name: "snare" },
          { fn: "sample", name: "kick" },
          { fn: "sample", name: "kick" },
          { fn: "sample", name: "kick" },
          { fn: "sample", name: "kick" }, { fn: "sample", name: "snare" },
          { fn: "sample", name: "kick" },
        ],
      },
      hints: [
        "Start with: for beat in range(8): then sample(\"kick\") inside. That gives the kick on every beat.",
        "Add an if statement after the kick: if beat == 2 or beat == 6: sample(\"snare\")",
        "Put sleep(0.5) after the if block — outside the if, so it runs on every beat regardless.",
      ],
      solution: "for beat in range(8):\n    sample(\"kick\")\n    if beat == 2 or beat == 6:\n        sample(\"snare\")\n    sleep(0.5)\n",
    },
  ],
  codex: {
    topic: "Chapter 2 capstone",
    pattern: "# Colour spiral\nfor i in range(n):\n    pencolor(\"red\" if i%3==0 else \"blue\")\n    forward(i * step)\n    right(angle)\n\n# Drum groove\nfor beat in range(8):\n    sample(\"kick\")\n    if beat == 2 or beat == 6:\n        sample(\"snare\")\n    sleep(0.5)",
    note: "All Chapter 2 patterns apply here: loop variable as a parameter, % for cycling, if/elif inside loops, try/except for input, nested loops for multi-bar patterns. pencolor() changes the drawing colour mid-spiral. set_tempo() controls beat speed.",
  },
});
