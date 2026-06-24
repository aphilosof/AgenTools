/* Chapter 1 — all sections in the content[] interleaved format.
   Section order follows HTTLACS/Think Python sequencing:
   c1s1 Output · c1s2 Values & Types · c1s3 Variables · c1s4 Expressions
   c1s5 Strings · c1s6 Input · c1s7 First Drawing & Sound */

/* ── Lesson 1.1 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c1s1",
  chapter: 1,
  strand: "core",
  lang: "py",
  timeBudgetMin: 15,
  title: "Output and print",
  glossary: {
    argument: "A value you place inside a function's parentheses. It is what the function works on. In print(\"Hello\"), the argument is the string \"Hello\".",
    string: "A sequence of characters enclosed in quotation marks. The quotes are boundary markers — they tell Python where the text begins and ends but are never part of the text itself.",
    "function": "A named instruction that performs a specific task. You run a function by writing its name followed by parentheses. Python comes with many built-in functions; print is one of them.",
  },
  content: [
    {
      type: "text",
      md: "A Python program runs silently by default. It can calculate, compare, and store values without ever showing you what it found. The `print` [[function]] is the instruction that makes it speak: it takes whatever you place inside its parentheses — its [[argument]] — displays it on the screen, and then moves to the next line. Remove `print` from your program and its work happens invisibly. Add it back and the result becomes readable.",
    },
    {
      type: "example",
      note: "The simplest complete program that produces visible output. Run it and notice that the quotation marks around Hello! do not appear in what prints — they are boundary markers, not part of the text.",
      code: "print(\"Hello!\")\n",
    },
    {
      type: "text",
      md: "Text that you want to display must sit inside quotation marks, which turns it into a [[string]]. The quotes tell Python where the text begins and ends; they are never part of the content itself. Python accepts both single and double quotes and treats them as identical — `'Hello'` and `\"Hello\"` mean exactly the same thing. The practical reason to know both: when your text contains an apostrophe, wrap the whole thing in double quotes. Writing `\"it's fine\"` keeps the apostrophe inside as a plain character rather than a signal that the string has ended.",
    },
    {
      type: "example",
      note: "Two separate print calls produce two separate lines, in the order they appear in the program. Python reads and executes your code from top to bottom, one statement at a time — so the order you write things in is the order they happen.",
      code: "print(\"Code\")\nprint(\"Lab\")\n",
    },
    {
      type: "text",
      md: "You can give `print` more than one argument by separating them with commas. It places a single space between each one on its own. Arguments don't have to be text — numbers and math work too. When `print` sees a calculation, it works it out first and shows the answer, not the calculation itself.",
    },
    {
      type: "example",
      note: "A text label and a calculation side by side. Python evaluates 7 * 3 first, getting 21, then print displays the label and the result with one space between them.",
      code: "print(\"Score:\", 7 * 3)\n",
    },
    {
      type: "example",
      note: "Four calls showing the range of what print can display: a string, a number, an expression, and a label paired with a calculation. Run each one in your head before you run the code.",
      code: "print(\"hello\")\nprint(42)\nprint(10 + 5)\nprint(\"Total:\", 3 * 8)\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Before you run this, predict exactly what appears on the screen — the exact words and which line each one lands on. Write your prediction in the box, then run to check.",
      starter: "print(\"ready\")\nprint(\"set\")\nprint(\"go\")\n",
      check: { type: "output", expected: "ready\nset\ngo" },
      hints: [
        "Each print call writes one piece of output, then moves to the next line.",
        "Python runs these three calls from top to bottom, so the output appears in the same order as the code.",
        "You should see three separate lines: ready, then set, then go.",
      ],
      solution: "print(\"ready\")\nprint(\"set\")\nprint(\"go\")\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "This program prints Code and Lab on two separate lines. Change it so both words appear on a single line reading Code Lab, with a space between them — using one print call instead of two.",
      starter: "print(\"Code\")\nprint(\"Lab\")\n",
      check: { type: "output", expected: "Code Lab" },
      hints: [
        "Two separate print calls always produce two separate lines. To get one line, you need one print call.",
        "A single print can take multiple arguments separated by commas. It puts one space between them automatically.",
        "Replace both lines with a single call: print(\"Code\", \"Lab\")",
      ],
      solution: "print(\"Code\", \"Lab\")\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This program crashes instead of printing. Run it, read the error message carefully — it tells you exactly what Python tried to do and where it went wrong. Then fix the code so it prints Hello.",
      starter: "print(Hello)\n",
      check: { type: "output", expected: "Hello" },
      hints: [
        "The error is NameError: name 'Hello' is not defined. Python read Hello as a variable name — something it expected to find a stored value in — and found nothing there.",
        "Without quotation marks, Python treats any bare word as a variable or instruction, not as text to display.",
        "Wrap the word in quotes so Python reads it as a string: print(\"Hello\")",
      ],
      solution: "print(\"Hello\")\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write a program from scratch that prints exactly these three lines:\n\nPython speaks.\nSo do I.\nLet's begin.\n\nPay attention to punctuation. The apostrophe in the third line will end your string early if you use the wrong kind of quotes.",
      starter: "",
      check: { type: "output", expected: "Python speaks.\nSo do I.\nLet's begin." },
      hints: [
        "Three lines of output means three separate print calls, one for each line.",
        "Let's contains an apostrophe. If you wrap it in single quotes, Python reads the apostrophe as the closing quote and breaks the string. Use double quotes for that line: print(\"Let's begin.\")",
        "Three prints in order: print(\"Python speaks.\"), then print(\"So do I.\"), then print(\"Let's begin.\")",
      ],
      solution: "print(\"Python speaks.\")\nprint(\"So do I.\")\nprint(\"Let's begin.\")\n",
    },
  ],
  codex: {
    topic: "printing",
    pattern: "print(value)\nprint(a, b, c)",
    note: "Displays its arguments on screen and moves to the next line. Multiple arguments are joined with one space. Text must be in quotes; numbers and expressions need no quotes.",
  },
});

/* ── Lesson 1.2 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c1s2",
  chapter: 1,
  strand: "core",
  lang: "py",
  timeBudgetMin: 15,
  title: "Values and types",
  glossary: {
    value: "One of the basic things a program works with — a number, a piece of text, a yes-or-no answer.",
    type: "The category a value belongs to. The type decides what you are allowed to do with the value and what operators mean.",
    integer: "A whole number like 7 or -20. Python's type name is int. Integers are exact and have no size limit.",
    float: "A number with a decimal point like 3.14. Python's type name is float. Floats sacrifice a tiny amount of accuracy for a huge range.",
    boolean: "The value True or False. Python's type name is bool. Used for yes-or-no questions and decisions.",
    concatenation: "Joining two strings end to end using +. No space is added between them automatically.",
    "TypeError": "An error Python raises when you use an operator on types it cannot handle together — for example, adding a number to a string.",
  },
  content: [
    {
      type: "text",
      md: "A **[[value]]** is one of the basic things a program works with — a number, a piece of text, a yes-or-no answer. You have already made several without noticing: in `print(\"Hello!\")`, the text `\"Hello!\"` is a value, and so is `7 * 3`. Almost everything a program does is some action on values: displaying them, comparing them, combining them, calculating with them. Values are the raw material; the rest of programming is what you do with them.",
    },
    {
      type: "text",
      md: "Every value has a **[[type]]** — the category it belongs to. The type is not just a label; it decides what you are allowed to do with the value. Four types will carry you a long way.\n\nA whole number like `7` or `-20` is an **[[integer]]**, type `int`. Python's integers are exact and have no size limit.\n\nA number with a decimal point like `3.14` is a **[[float]]**. Floats trade a tiny amount of accuracy for a huge range: `0.1 + 0.2` gives `0.30000000000000004`, not `0.3`. That is normal in every language.\n\nText like `\"Hello!\"` is a **string**, type `str`. The quotes mark where the text begins and ends — they are never part of the value itself.\n\nThe answers `True` and `False` are **[[boolean]]** values, type `bool`. `5 > 3` is `True`; `5 < 3` is `False`. You will use them once you start making decisions in Chapter 2.",
    },
    {
      type: "example",
      note: "type() tells you a value's category. Run this and read each result. Notice especially the last line: type(\"7\") reports str, not int — the quotes alone change the type.",
      code: "print(type(7))\nprint(type(3.14))\nprint(type(\"Hello!\"))\nprint(type(True))\nprint(type(\"7\"))   # str, not int\n",
    },
    {
      type: "text",
      md: "The difference between `7` and `\"7\"` is real. `7` is the number seven. `\"7\"` is a one-character string that happens to look like a digit. The quotes alone changed the type, and the type changes what operators do.",
    },
    {
      type: "example",
      note: "The + symbol does two completely different things. Which one it does depends on the types beside it.",
      code: "print(7 + 7)       # adds two integers: 14\nprint(\"7\" + \"7\")   # joins two strings: 77\n",
    },
    {
      type: "text",
      md: "Between numbers, `+` **adds**. Between strings, `+` **joins them end to end** — an operation called **[[concatenation]]**. The symbol is the same; the types choose the meaning.\n\nThe `*` operator works the same way. Between numbers it **multiplies**: `7 * 3` gives `21`. Between a string and a whole number it **repeats** the string: `\"ab\" * 3` gives `\"ababab\"`, and `\"-\" * 20` gives a line of twenty dashes in one step. The types of the values decide what your code means.",
    },
    {
      type: "example",
      note: "Predict the output before you run. The same * symbol does two completely different things depending on the types.",
      code: "print(7 * 3)\nprint(\"ab\" * 3)\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Before you run this, predict exactly what each line prints and write down why the three results look different. Then run to check.",
      starter: "print(2 + 3)\nprint(\"2\" + \"3\")\nprint(\"hi\" * 3)\n",
      check: { type: "output", expected: "5\n23\nhihihi" },
      hints: [
        "2 + 3: both are integers, so + adds them: 5.",
        "\"2\" + \"3\": both are strings (the quotes make them text), so + joins the characters: 23.",
        "\"hi\" * 3: a string times a number repeats the string three times: hihihi.",
      ],
      solution: "print(2 + 3)\nprint(\"2\" + \"3\")\nprint(\"hi\" * 3)\n",
    },
    {
      type: "text",
      md: "Mixing types does not behave one single way — and that is why you cannot ignore them.\n\n`7 + 3.14` **adapts**: when you mix an `int` and a `float`, Python quietly promotes the integer to a float and gives you `10.14`.\n\n`7 + \"3\"` **refuses** with a `[[TypeError]]`. Python cannot tell whether you mean addition (`10`) or joining (`\"73\"`), so rather than guess it stops: `TypeError: unsupported operand type(s) for +: 'int' and 'str'`. Refusing to guess is safer than a silent wrong answer.\n\n`\"7\" * 3` **silently** gives `\"777\"` — string repetition, not multiplication. No error; just not what you might expect.",
    },
    {
      type: "example",
      note: "int + float adapts quietly, giving a float result. Run this and look at the decimal point in the output.",
      code: "print(7 + 3.14)\n",
    },
    {
      type: "text",
      md: "To turn one type into another, call the type name as a function. Each one builds a new value and leaves the original alone. `int(\"7\")` gives `7`; `int(3.9)` gives `3` — it **drops the fraction**, not rounds; `float(\"3.5\")` gives `3.5`; `str(7)` gives `\"7\"`; `bool(0)` gives `False` and `bool(5)` gives `True`.\n\nYou may sometimes see the value `None` — for example, if you store the result of `print()` in a variable and print that. `None` has its own type (`NoneType`) and means \"nothing here\". You cannot do arithmetic with it. If you see it unexpectedly, a function likely did not return the value you expected.",
    },
    {
      type: "example",
      note: "Conversion in action. Note int(3.9) — it drops the fraction entirely rather than rounding.",
      code: "print(int(\"7\"))\nprint(float(\"3.5\"))\nprint(str(42))\nprint(int(3.9))    # drops the fraction — does NOT round\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This crashes with a TypeError. Read the error — it names the two types on each side of +. Fix the code so it prints 10.",
      starter: "print(7 + \"3\")\n",
      check: { type: "output", expected: "10" },
      hints: [
        "The error is TypeError: Python cannot use + between an int and a str.",
        "\"3\" is text. To add it to 7 numerically, you need the number 3, not the string.",
        "int(\"3\") converts the text \"3\" to the number 3. Or simply remove the quotes so Python reads 3 as a number.",
      ],
      solution: "print(7 + int(\"3\"))\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Starting from an empty editor, write a program that converts the string \"20\" into a number, adds 5 to it, and prints the result. It should print 25.",
      starter: "",
      check: { type: "output", expected: "25" },
      hints: [
        "\"20\" is text — you cannot add a number to a string directly.",
        "int(\"20\") converts the string \"20\" to the integer 20.",
        "Then add 5 and print: print(int(\"20\") + 5).",
      ],
      solution: "print(int(\"20\") + 5)\n",
    },
  ],
  codex: {
    topic: "types",
    pattern: "type(v)   int(v)   float(v)   str(v)   bool(v)",
    note: "Every value has a type: int (whole numbers), float (decimals), str (text), bool (True/False). type() reveals it. Operators behave differently by type: + adds numbers but concatenates strings; * multiplies numbers but repeats strings. Convert with int(), float(), str().",
  },
});

/* ── Lesson 1.3 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c1s3",
  chapter: 1,
  strand: "core",
  lang: "py",
  timeBudgetMin: 12,
  title: "Variables and assignment",
  glossary: {
    variable: "A name you choose that refers to a value. When you write the name later, Python replaces it with the stored value.",
    assignment: "The instruction that links a name to a value. Written as name = value. The = sign is not equality — it is an action: store this value under this name.",
  },
  content: [
    {
      type: "text",
      md: "So far your programs work with values directly — you typed `7 * 3` and Python computed it right there. That works once, but what if you want to keep a result and use it later? That is what **[[variable|variables]]** are for. A [[variable]] is a name you choose that refers to a value. Whenever you write the name later in your code, Python looks up the value stored there and uses it.",
    },
    {
      type: "text",
      md: "The instruction that creates this link is called **[[assignment]]**, written as `name = value`. Read `score = 100` as \"let score refer to 100\". Python evaluates the right side first, then links the name on the left to that result. The `=` sign is **not** asking whether two things are equal — it is an action: evaluate the right, then store the result under the name on the left.",
    },
    {
      type: "example",
      note: "Store a value in a variable, then print it. The print sees the name score and looks up what it refers to.",
      code: "score = 100\nprint(score)\n",
    },
    {
      type: "text",
      md: "A variable's value can change. Writing the name on the left side of `=` again simply points it at a new value — the old link disappears. Watch this in the **stepper** on the right: after the first line, the variable table shows `score → 100`. After the second line, it changes to `score → 200`. The name stays the same; what it refers to changes.",
    },
    {
      type: "example",
      note: "Reassignment replaces the old value. Each print shows what the name refers to at that moment.",
      code: "score = 100\nprint(score)\nscore = 200\nprint(score)\n",
    },
    {
      type: "text",
      md: "Python always evaluates the right side of `=` completely before doing anything with the left. That means you can use the current value of a variable to compute the next one. Look at the example below: Python reads `score + 5` (which is `10 + 5`), gets `15`, then stores that under `score`, replacing the old `10`.\n\n**A quick note on comments.** As programs grow, you will want to leave notes for yourself or anyone reading the code. A comment starts with `#` and continues to the end of the line — Python ignores it entirely. You can also put `#` in front of a whole line to switch it off without deleting it, which is handy when you are debugging.",
    },
    {
      type: "example",
      note: "The right side is evaluated before the name is updated. After this code, score holds 15 — not 10.",
      code: "score = 10\nscore = score + 5  # 10 + 5 = 15\nprint(score)\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Before you run this, trace through it step by step in your head. After each line, what does the variable table show? What does the program print?",
      starter: "x = 5\nx = 10\nprint(x)\n",
      check: { type: "output", expected: "10" },
      hints: [
        "After x = 5, the variable table shows x → 5.",
        "After x = 10, x is rebound: the table now shows x → 10. The old 5 is gone.",
        "print(x) looks up x and finds 10. Output: 10.",
      ],
      solution: "x = 5\nx = 10\nprint(x)\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "Right now this ends by printing Bob. Change the second assignment so the program prints Charlie instead.",
      starter: "name = \"Alice\"\nname = \"Bob\"\nprint(name)\n",
      check: { type: "output", expected: "Charlie" },
      hints: [
        "The last print shows whatever name currently refers to.",
        "name = \"Bob\" is the second assignment — it overwrites Alice. Change the string on its right side.",
        "Change name = \"Bob\" to name = \"Charlie\".",
      ],
      solution: "name = \"Alice\"\nname = \"Charlie\"\nprint(name)\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This should print 15, but it crashes. Read the error message — it tells you exactly which name Python could not find. Fix the mistake so the program prints 15.",
      starter: "points = 10\ntotal = pints + 5\nprint(total)\n",
      check: { type: "output", expected: "15" },
      hints: [
        "The error is NameError — Python looked up a name and found nothing stored under it.",
        "Look at the second line. The variable is called points, not pints.",
        "Fix the typo: total = points + 5.",
      ],
      solution: "points = 10\ntotal = points + 5\nprint(total)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write a program that stores the string \"Alex\" in a variable called name and the number 11 in a variable called age. Then print them on one line: Alex is 11",
      starter: "",
      check: { type: "output", expected: "Alex is 11" },
      hints: [
        "You need two assignment lines: one for name, one for age.",
        "A comma between arguments in print puts a space between them automatically.",
        "print(name, \"is\", age) will output the name, then is, then the number.",
      ],
      solution: "name = \"Alex\"\nage = 11\nprint(name, \"is\", age)\n",
    },
  ],
  codex: {
    topic: "variables",
    pattern: "name = value\nname = name + 1",
    note: "Assignment binds a name to a value. Python evaluates the right side first, then stores the result under the left-side name. Reassignment replaces the old binding. # starts a comment Python ignores.",
  },
});

/* ── Lesson 1.4 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c1s4",
  chapter: 1,
  strand: "numbers",
  lang: "py",
  timeBudgetMin: 12,
  title: "Expressions and math",
  glossary: {
    expression: "Any combination of values and operators that Python can evaluate to produce a result. 7 * 3 is an expression. So is \"hi\" + \"there\". So is a variable name on its own.",
    "operator": "A symbol that combines values to produce a new value. + - * / are operators.",
  },
  content: [
    {
      type: "text",
      md: "Every value you have typed so far — `7`, `3.14`, `\"Hello\"` — is itself an **[[expression]]**. But an expression can be more than a bare value: it is anything Python can evaluate to produce a result. `7 * 3` is an expression that produces `21`. `10 - 4` is an expression that produces `6`. The result is just another value, and you can do anything with it: print it, store it in a variable, or use it inside a bigger expression.",
    },
    {
      type: "text",
      md: "Python has the arithmetic operators you would expect, plus a few especially useful ones. `+` adds, `-` subtracts, `*` multiplies. `/` **always gives a float**: `7 / 2` is `3.5`, and even `6 / 2` is `3.0`, not `3`. `//` is **floor division** — divide and drop the remainder: `7 // 2` is `3`. `%` gives the **remainder**: `7 % 3` is `1` (seven divided by three leaves one over). `**` raises to a power: `2 ** 8` is `256`.",
    },
    {
      type: "example",
      note: "Division always gives a float, even when the answer is a whole number. Floor division keeps only the whole part.",
      code: "print(7 / 2)    # float: 3.5\nprint(7 // 2)   # floor: 3\nprint(7 % 3)    # remainder: 1\nprint(2 ** 8)   # power: 256\n",
    },
    {
      type: "text",
      md: "Python follows the same order of operations as maths: `**` is worked out first, then `*` `/` `//` `%` (left to right), then `+` `-` (left to right). Use **parentheses** to override this order — anything inside parentheses is worked out first. When in doubt, add parentheses to make your intention clear.",
    },
    {
      type: "example",
      note: "The parentheses change everything. Work out both lines in your head before running.",
      code: "print(3 + 4 * 2)    # 11: * first, then +\nprint((3 + 4) * 2)  # 14: () first, then *\n",
    },
    {
      type: "text",
      md: "An expression produces a value. You can use that value anywhere: print it directly, store it in a variable, or use it inside another expression. The example below shows both styles producing the same output. Store a result when you need it more than once, or when a name makes the code clearer.",
    },
    {
      type: "example",
      note: "Both approaches print the same thing — the only difference is whether you store the result first.",
      code: "print(7 * 3 + 1)\nresult = 7 * 3 + 1\nprint(result)\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Before you run this, work out each answer in your head. The order of operations is the key — write your predictions, then run to check.",
      starter: "print(2 + 3 * 4)\nprint((2 + 3) * 4)\nprint(10 % 3)\n",
      check: { type: "output", expected: "14\n20\n1" },
      hints: [
        "2 + 3 * 4: multiplication before addition, so 3 * 4 = 12 first, then 2 + 12 = 14.",
        "(2 + 3) * 4: parentheses first, so 2 + 3 = 5 first, then 5 * 4 = 20.",
        "10 % 3: 10 divided by 3 is 3 remainder 1. The % operator gives the remainder.",
      ],
      solution: "print(2 + 3 * 4)\nprint((2 + 3) * 4)\nprint(10 % 3)\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "This calculates the number of seconds in 5 minutes (5 × 60 = 300). Change it to calculate the number of seconds in 3 hours instead. It should print 10800.",
      starter: "print(5 * 60)\n",
      check: { type: "output", expected: "10800" },
      hints: [
        "One hour is 60 minutes. One minute is 60 seconds.",
        "3 hours × 60 minutes × 60 seconds — you can chain multiplications.",
        "print(3 * 60 * 60)",
      ],
      solution: "print(3 * 60 * 60)\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This should print the average of 10, 20, and 30, which is 20.0. But because of how Python applies operator order, it calculates something different. Add parentheses to fix it.",
      starter: "print(10 + 20 + 30 / 3)\n",
      check: { type: "output", expected: "20.0" },
      hints: [
        "Python divides 30 by 3 first (getting 10.0), then adds 10 + 20 + 10.0 = 40.0. That is not the average.",
        "An average adds all the numbers together first, then divides. You need to group the addition.",
        "Wrap the whole sum in parentheses: (10 + 20 + 30) / 3.",
      ],
      solution: "print((10 + 20 + 30) / 3)\n",
    },
  ],
  codex: {
    topic: "expressions",
    pattern: "+ - * / // % **",
    note: "An expression combines values and operators to produce a new value. Order: ** first, then * / // %, then + -. Use parentheses to control the order. / always gives a float; // gives the whole-number part only.",
  },
});

/* ── Lesson 1.5 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c1s5",
  chapter: 1,
  strand: "words",
  lang: "py",
  timeBudgetMin: 12,
  title: "Working with strings",
  glossary: {
    concatenation: "Joining two strings end to end using +. No space is added between them automatically.",
    method: "A function that belongs to a specific type, called with a dot after the value. \"hello\".upper() is a method call on a string.",
  },
  content: [
    {
      type: "text",
      md: "You already know that `+` joins strings end to end — **[[concatenation]]** — and that `*` repeats a string a whole number of times. Now that you understand types and variables, these operators make more sense: they are type-dependent. `+` adds numbers but joins strings; `*` multiplies numbers but repeats strings.",
    },
    {
      type: "text",
      md: "When you use `+` to join strings, you control exactly what appears. No space is added unless you put one there yourself. That is the key difference between `,` and `+` inside `print`: a comma puts one space between arguments for you; `+` adds nothing of its own. `print(\"hot\", \"dog\")` shows `hot dog`; `print(\"hot\" + \"dog\")` shows `hotdog`. Same words, two different tools.",
    },
    {
      type: "example",
      note: "+ joins with no gap; a space in quotes is itself a piece of text you can join in.",
      code: "print(\"Code\" + \"Lab\")          # CodeLab\nprint(\"Code\" + \" \" + \"Lab\")    # Code Lab\n",
    },
    {
      type: "text",
      md: "The `*` operator repeats a string a whole number of times. Python works out `*` before `+`, so you can combine both in one expression: `\"Ho\" * 3 + \"!\"` gives `\"HoHoHo!\"`.",
    },
    {
      type: "example",
      note: "Predict the output of each line before running. Work out the repetition first, then the join.",
      code: "print(\"ab\" * 3)\nprint(\"Ho\" * 3 + \"!\")\nprint(\"=\" * 3 + \" MENU \" + \"=\" * 3)\n",
    },
    {
      type: "text",
      md: "Strings also come with built-in tools called **[[method|methods]]**. A method is a function that belongs to a specific type. You call it by writing a dot after the value, then the method name and parentheses.\n\n`s.upper()` gives a copy with every letter capitalised; `s.lower()` gives all lowercase; `s.strip()` removes leading and trailing spaces; `s.split()` splits on spaces and returns a list of words. `len(s)` gives the number of characters — unlike the others, `len` is a standalone function, so you write `len(word)`, not `word.len()`.",
    },
    {
      type: "example",
      note: "Methods transform a string and give back a new one — the original is not changed.",
      code: "word = \"Python\"\nprint(word.upper())\nprint(word.lower())\nprint(len(word))\n",
    },
    {
      type: "example",
      note: "strip() cleans up extra spaces. split() breaks a sentence into a list of words.",
      code: "sentence = \"  hello world  \"\nprint(sentence.strip())\nprint(sentence.strip().split())\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "Right now this prints CodeLab — the two words stuck together. Change it so it prints Code Lab with a space between, but do it with + joining, not by adding a comma.",
      starter: "print(\"Code\" + \"Lab\")\n",
      check: { type: "output", expected: "Code Lab" },
      hints: [
        "+ glues the exact text with no gap. You have to add the space yourself.",
        "A single space in quotes, \" \", is a valid string — join it in between the two words.",
        "Join three pieces: \"Code\" + \" \" + \"Lab\".",
      ],
      solution: "print(\"Code\" + \" \" + \"Lab\")\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "A student wanted hot dog — two words with a space — but got hotdog instead. There is no error; the output is just wrong. Fix it so it prints hot dog.",
      starter: "print(\"hot\" + \"dog\")\n",
      check: { type: "output", expected: "hot dog" },
      hints: [
        "The words ran together because + joins with no automatic space.",
        "Two fixes work: use a comma instead of +, or join a space string in the middle.",
        "Simplest fix: print(\"hot\", \"dog\") — the comma inserts one space.",
      ],
      solution: "print(\"hot\", \"dog\")\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Starting from an empty editor, build a name banner. Print three lines: a row of exactly ten dashes, then Hi, Sam!, then another row of ten dashes:\n\n----------\nHi, Sam!\n----------\n\nUse * to make the dash rows instead of typing ten dashes by hand.",
      starter: "",
      check: { type: "output", expected: "----------\nHi, Sam!\n----------" },
      hints: [
        "To make ten dashes in one go, repeat the dash character: \"-\" * 10.",
        "The middle line is ordinary text: print(\"Hi, Sam!\").",
        "Three print calls: dash row, greeting, dash row again.",
      ],
      solution: "print(\"-\" * 10)\nprint(\"Hi, Sam!\")\nprint(\"-\" * 10)\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "This prints PYTHON IS FUN in capitals. Change the method call so it prints python is fun in all lowercase instead.",
      starter: "print(\"Python is fun\".upper())\n",
      check: { type: "output", expected: "python is fun" },
      hints: [
        "upper() gives all capitals. You want the opposite.",
        "Every string method that changes case has a counterpart.",
        "Replace .upper() with .lower().",
      ],
      solution: "print(\"Python is fun\".lower())\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "This prints HELLO. Add one more line below it that prints the number of letters in the word: 5.",
      starter: "word = \"hello\"\nprint(word.upper())\n",
      check: { type: "output", expected: "HELLO\n5" },
      hints: [
        "You need a second print call that shows the length.",
        "len() gives the number of characters in a string. You call it as len(value), not as a method.",
        "Add: print(len(word))",
      ],
      solution: "word = \"hello\"\nprint(word.upper())\nprint(len(word))\n",
    },
  ],
  codex: {
    topic: "string operations",
    pattern: "\"a\" + \"b\"   \"ab\" * 3   s.upper()   s.lower()   s.strip()   s.split()   len(s)",
    note: "+ joins strings end to end (no space added); * repeats a string. Methods like upper(), lower(), strip(), split() return transformed copies. len() counts characters.",
  },
});

/* ── Lesson 1.6 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c1s6",
  chapter: 1,
  strand: "core",
  lang: "py",
  timeBudgetMin: 12,
  title: "Input",
  glossary: {
    "input": "A built-in function that displays a prompt and waits for the user to type something. It always returns the answer as a string, even if the user types digits.",
  },
  content: [
    {
      type: "text",
      md: "So far your programs decide everything — all values are written directly in the code and the output is always the same. Real programs ask the user questions. Python's `[[input]]()` function displays a prompt, waits for the person to type something and press Enter, and hands the answer back as a **string**. Always a string, no matter what the user typed.",
    },
    {
      type: "text",
      md: "The pattern is `name = input(\"What is your name? \")`. When Python hits this line, it prints `What is your name? `, then waits. Whatever the user types — say, `Alex` — gets stored in `name`. Then `print(\"Hello,\", name)` says `Hello, Alex`.\n\nNotice the space at the end of the prompt string: `\"What is your name? \"`. Without it, the cursor appears right after the question mark, which looks cramped.",
    },
    {
      type: "text",
      md: "The most important thing to remember: `input()` **always** returns a string. If you ask someone their age and they type `11`, you get the string `\"11\"`, not the number `11`. If you then try `print(age + 1)`, Python stops with a `TypeError` — it cannot add a string and a number.\n\nThe fix is to convert: wrap `input()` in `int()`. Write `age = int(input(\"Your age? \"))`. Now `age` holds an integer, and `age + 1` works.",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "This greets the user with Hello, Alex. — a full stop at the end. Change it so it prints Welcome, Alex! with an exclamation mark instead.",
      starter: "name = input(\"Name: \")\nprint(\"Hello,\", name + \".\")\n",
      mockInput: ["Alex"],
      check: { type: "output", expected: "Name: Welcome, Alex!" },
      hints: [
        "The greeting text is inside the print call. Change the word Hello to Welcome.",
        "The punctuation at the end is part of the string joined to name. Change \".\" to \"!\".",
        "print(\"Welcome,\", name + \"!\")",
      ],
      solution: "name = input(\"Name: \")\nprint(\"Welcome,\", name + \"!\")\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "The first line reads a number from the user. Add one more line below it that prints double that number. With input 7, it should print 14.",
      starter: "n = int(input(\"Enter a number: \"))\n",
      mockInput: ["7"],
      check: { type: "output", expected: "Enter a number: 14" },
      hints: [
        "n already holds the integer. You need to print n multiplied by 2.",
        "print(n * 2) goes on the line after the input call.",
        "Add: print(n * 2)",
      ],
      solution: "n = int(input(\"Enter a number: \"))\nprint(n * 2)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write an age greeter. Use input() with empty parentheses (no prompt text) to read a name, then a number for the age. Print: Hi Alex, next year you will be 12.\n\nThe inputs will be Alex and 11.",
      starter: "",
      mockInput: ["Alex", "11"],
      check: { type: "output", expected: "Hi Alex, next year you will be 12." },
      hints: [
        "Two input() calls: one for the name (a string), one for the age. Convert the age to an integer.",
        "To build the message, you can use + to join strings. str(age + 1) converts the next year's age to text.",
        "print(\"Hi \" + name + \", next year you will be \" + str(age + 1) + \".\")",
      ],
      solution: "name = input()\nage = int(input())\nprint(\"Hi \" + name + \", next year you will be \" + str(age + 1) + \".\")\n",
    },
  ],
  codex: {
    topic: "input",
    pattern: "s = input()   n = int(input(\"prompt \"))",
    note: "input() always returns a string. Wrap in int() or float() before doing arithmetic. The optional prompt string is displayed before waiting; leave a space at the end so the cursor is not crowded against the question.",
  },
});

/* ── Lesson 1.7 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c1s7",
  chapter: 1,
  strand: "sound",
  lang: "py",
  timeBudgetMin: 15,
  title: "First Drawing and Sound",
  glossary: {
    "MIDI": "A numbering system for musical notes. Middle C on a piano is note 60. Each number up is one semitone higher; each number down is one semitone lower. An octave is 12 semitones.",
    forward: "A turtle command. forward(n) moves the drawing cursor n units in the direction it is currently facing.",
    right: "A turtle command. right(a) turns the drawing cursor a degrees to the right without moving it.",
    play: "A sound command. play(note) plays a MIDI note number. 60 is middle C.",
    sleep: "A sound command. sleep(beats) advances the sound clock by that many beats before the next note plays.",
  },
  content: [
    {
      type: "text",
      md: "Python can draw with a **turtle** — a cursor that moves around a canvas, leaving a line behind it. `forward(n)` moves forward `n` units; `backward(n)` moves backward; `right(a)` turns right by `a` degrees without moving; `left(a)` turns left. The turtle starts at the centre of the canvas, pointing right.",
    },
    {
      type: "example",
      note: "A square: move forward, turn right 90 degrees, repeat four times. Each side is 100 units long.",
      code: "forward(100)\nright(90)\nforward(100)\nright(90)\nforward(100)\nright(90)\nforward(100)\nright(90)\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "This draws a square with sides of 100 units. Change all four forward() calls so the sides are 150 units long instead.",
      starter: "forward(100)\nright(90)\nforward(100)\nright(90)\nforward(100)\nright(90)\nforward(100)\nright(90)\n",
      check: {
        type: "calls",
        calls: [
          { fn: "forward", val: 150 },
          { fn: "right", val: 90 },
          { fn: "forward", val: 150 },
          { fn: "right", val: 90 },
          { fn: "forward", val: 150 },
          { fn: "right", val: 90 },
          { fn: "forward", val: 150 },
          { fn: "right", val: 90 },
        ],
      },
      hints: [
        "There are four forward() calls, one per side. Each one needs to change.",
        "Replace each 100 with 150 — keep the right(90) calls the same.",
        "forward(150), right(90) repeated four times.",
      ],
      solution: "forward(150)\nright(90)\nforward(150)\nright(90)\nforward(150)\nright(90)\nforward(150)\nright(90)\n",
    },
    {
      type: "text",
      md: "The sound commands use **[[MIDI]]** numbers — a standard where every note on a keyboard gets a number. **Middle C is 60**. Each number up is one semitone higher; going up 12 reaches the same note one octave higher. A few useful reference points: 60 = C, 62 = D, 64 = E, 65 = F, 67 = G, 69 = A, 71 = B, 72 = C again (one octave up).\n\n`play(note)` plays that note. `sleep(beats)` sets a gap before the next note — at the default tempo, `sleep(1)` is half a second.",
    },
    {
      type: "example",
      note: "Three notes — C, E, G — the notes of a C major chord, played one after the other with a beat between them.",
      code: "play(60)   # C\nsleep(1)\nplay(64)   # E\nsleep(1)\nplay(67)   # G\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "This plays three notes: 60 (C), 64 (E), and 67 (G). Change the middle note to 65 to swap the E for an F.",
      starter: "play(60)\nsleep(1)\nplay(64)\nsleep(1)\nplay(67)\n",
      check: {
        type: "calls",
        calls: [
          { fn: "play", note: 60 },
          { fn: "play", note: 65 },
          { fn: "play", note: 67 },
        ],
      },
      hints: [
        "The middle note is the second play() call.",
        "64 is E; 65 is F. Change the number in the second play() call.",
        "Change play(64) to play(65).",
      ],
      solution: "play(60)\nsleep(1)\nplay(65)\nsleep(1)\nplay(67)\n",
    },
  ],
  codex: {
    topic: "drawing and sound",
    pattern: "forward(n)   right(a)   play(note)   sleep(beats)",
    note: "forward/right draw with the turtle. right(90) turns 90 degrees. play() takes a MIDI number: 60 = middle C, each +1 is one semitone higher. sleep() sets a gap in beats before the next note.",
  },
});

/* ── Preserved sections (demoted from Chapter 1 early draft) ──────────
   These were authored as c1s2, c1s3, c1s4 in an earlier draft and are
   kept here as reference material:
   - Old c1s2 (Combining text): content now incorporated into c1s5
   - Old c1s3 (Comments): content folded into c1s3 variables lesson
   - Old c1s4 (sep and end): moved to Chapter 2 when authored
   ─────────────────────────────────────────────────────────────────── */
