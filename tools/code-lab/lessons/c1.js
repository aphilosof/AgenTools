/* Chapter 1 — Basics
   Rebuilt to CODELAB_FULL_REPORT.md + CODELAB_CH1_REBUILT.md.
   Lessons: c1s1 Output & print · c1s2 Values & types · c1s3 Variables &
            assignment · c1s4 Expressions & math · c1s5 Strings & text ·
            c1s6 Text templates · c1s7 Input · c1s8 Drawing, Sound & your
            first real program (finale). */

/* ── Lesson 1.1 — Output & print ─────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c1s1",
  chapter: 1,
  strand: "core",
  lang: "py",
  timeBudgetMin: 12,
  title: "Output & print",
  glossary: {
    string: "Text inside quotes. The quotes mark where the text starts and ends — they are not part of the text itself.",
  },
  content: [
    {
      type: "text",
      md: "A Python program stays silent unless you tell it to speak. `print` is how it speaks: you hand it something inside the parentheses, and it shows up on the screen.",
    },
    {
      type: "example",
      note: "Run it. The quotes don't show — they just mark where the text starts and ends. Change the title to your favourite song and run again.",
      code: "print(\"Blinding Lights\")\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Before you run it, what shows up, and on which lines? Write your guess, then run to check.",
      starter: "print(\"ready\")\nprint(\"set\")\nprint(\"go\")\n",
      check: { type: "output", expected: "ready\nset\ngo" },
      hints: [
        "Each `print` gets its own line.",
        "They run top to bottom.",
        "ready, then set, then go.",
      ],
      solution: "print(\"ready\")\nprint(\"set\")\nprint(\"go\")\n",
    },
    {
      type: "text",
      md: "Text you want to show goes inside quotes — that turns it into a [[string]]. Single or double quotes both work. Use double quotes when your text has an apostrophe in it, like `\"it's fine\"`, so the apostrophe doesn't cut the string short.",
    },
    {
      type: "example",
      note: "Two prints, two lines, in the order you wrote them.",
      code: "print(\"Code\")\nprint(\"Lab\")\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "This prints Code and Lab on two lines. Make both words show on one line reading `Code Lab`, using a single print.",
      starter: "print(\"Code\")\nprint(\"Lab\")\n",
      check: { type: "output", expected: "Code Lab" },
      hints: [
        "One print can take more than one thing, separated by a comma.",
        "A comma puts a space between them for you.",
        "print(\"Code\", \"Lab\")",
      ],
      solution: "print(\"Code\", \"Lab\")\n",
    },
    {
      type: "text",
      md: "You can hand `print` more than one thing at once — separate them with commas, and it puts a space between each. They don't have to be text: `print(\"Score:\", 7 * 3)` works out the maths first and shows `Score: 21`.",
    },
    {
      type: "example",
      note: "Python does the maths first, then prints the label and the answer with a space between.",
      code: "print(\"Score:\", 7 * 3)\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This crashes. Run it, read the error — it tells you what went wrong — then fix it so it prints `Hello`.",
      starter: "print(Hello)\n",
      check: { type: "output", expected: "Hello" },
      hints: [
        "`Hello` has no quotes, so Python thinks it's a variable name and can't find one.",
        "Text needs quotes to be a string.",
        "print(\"Hello\")",
      ],
      solution: "print(\"Hello\")\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From an empty editor, print exactly these three lines:\n`Python speaks.`\n`So do I.`\n`Let's begin.`\nWatch the apostrophe in the last line — wrap it in double quotes so it doesn't end your string early.",
      starter: "",
      check: { type: "output", expected: "Python speaks.\nSo do I.\nLet's begin." },
      hints: [
        "Three separate print lines.",
        "For the last one use double quotes: \"Let's begin.\"",
        "print(\"Let's begin.\")",
      ],
      solution: "print(\"Python speaks.\")\nprint(\"So do I.\")\nprint(\"Let's begin.\")\n",
    },
  ],
  codex: {
    topic: "print",
    pattern: "print(\"text\")\nprint(\"a\", \"b\")   # space between",
    note: "print shows whatever you put in its parentheses, then moves to a new line. Hand it several things separated by commas and it prints them with a space between.",
  },
});

/* ── Lesson 1.2 — Values & types ─────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c1s2",
  chapter: 1,
  strand: "core",
  lang: "py",
  timeBudgetMin: 13,
  title: "Values & types",
  glossary: {
    "type": "The kind of thing a value is — a whole number (int), a decimal (float), text (str), or a yes/no (bool). The type decides what you can do with the value.",
  },
  content: [
    {
      type: "text",
      md: "Everything your program works with is a **value**: a number, some text, a yes-or-no. Every value has a [[type]] — the kind of thing it is — and the type decides what you're allowed to do with it.",
    },
    {
      type: "example",
      note: "type() tells you a value's kind. Four values, four types.",
      code: "print(type(7))\nprint(type(3.14))\nprint(type(\"hello\"))\nprint(type(True))\n",
    },
    {
      type: "text",
      md: "Four types will carry you a long way. A whole number like `7` is an **int**. A decimal like `3.14` is a **float**. Text in quotes is a **str**. `True` and `False` are **bools** — you'll use those in Chapter 2 to make decisions.",
    },
    {
      type: "text",
      md: "The quotes change everything. `7` is the number seven. `\"7\"` is text that happens to look like a digit. They look the same, but the type changes what the operators do.",
    },
    {
      type: "example",
      note: "Same +, two different jobs. Between numbers it adds; between strings it joins.",
      code: "print(7 + 7)       # 14 — adds\nprint(\"7\" + \"7\")   # 77 — joins\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Predict all three lines, and note why the last two look different. Then run.",
      starter: "print(2 + 3)\nprint(\"2\" + \"3\")\nprint(\"hi\" * 3)\n",
      check: { type: "output", expected: "5\n23\nhihihi" },
      hints: [
        "`+` between numbers adds; between strings it joins.",
        "`*` repeats a string.",
        "5, then 23, then hihihi.",
      ],
      solution: "print(2 + 3)\nprint(\"2\" + \"3\")\nprint(\"hi\" * 3)\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "This adds 2 and 3 and prints 5. Change it so it *joins* them as text instead, printing `23`.",
      starter: "print(2 + 3)\n",
      check: { type: "output", expected: "23" },
      hints: [
        "Text in quotes joins instead of adding.",
        "Put quotes around each digit.",
        "print(\"2\" + \"3\")",
      ],
      solution: "print(\"2\" + \"3\")\n",
    },
    {
      type: "text",
      md: "Mix a number and text with `+` and Python stops with a **TypeError** — it won't guess whether you meant to add or join. Convert first: `int(\"3\")` turns text into a number, and `str(7)` turns a number into text.",
    },
    {
      type: "example",
      note: "int() and str() convert between types so + knows what you mean.",
      code: "print(int(\"3\") + 7)   # 10\nprint(str(7) + \"!\")   # 7!\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This crashes with a TypeError — it's adding a number and text. Convert the text so it prints `10`.",
      starter: "print(7 + \"3\")\n",
      check: { type: "output", expected: "10" },
      hints: [
        "Python won't add a number to text.",
        "Wrap the `\"3\"` in `int()`.",
        "print(7 + int(\"3\"))",
      ],
      solution: "print(7 + int(\"3\"))\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: take the text `\"20\"`, turn it into a number, add 5, and print the result. It should print `25`.",
      starter: "",
      check: { type: "output", expected: "25" },
      hints: [
        "`\"20\"` is text — convert it with `int()`.",
        "Then add 5.",
        "print(int(\"20\") + 5)",
      ],
      solution: "print(int(\"20\") + 5)\n",
    },
  ],
  codex: {
    topic: "values & types",
    pattern: "type(7)      # int\ntype(3.14)   # float\nint(\"3\")     # text -> number\nstr(7)       # number -> text",
    note: "Every value has a type: int, float, str, bool. The type decides what operators do — 7 + 7 adds, \"7\" + \"7\" joins. Convert with int() and str().",
  },
});

/* ── Lesson 1.3 — Variables & assignment ─────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c1s3",
  chapter: 1,
  strand: "core",
  lang: "py",
  timeBudgetMin: 14,
  title: "Variables & assignment",
  glossary: {
    variable: "A name you pick that points to a value, so you can store it and use it later. You can repoint the name to a different value anytime.",
  },
  content: [
    {
      type: "text",
      md: "So far every value is used the moment you write it. A [[variable]] lets you keep one and use it later. A variable is a name you pick that points to a value.",
    },
    {
      type: "example",
      note: "score now points to 100. Write the name and Python looks up what it points to.",
      code: "score = 100\nprint(score)\n",
    },
    {
      type: "text",
      md: "The `=` doesn't mean \"is equal to.\" It's a command: work out the right side, then point the name on the left at the result. Read `score = 100` as \"let score point to 100.\"",
    },
    {
      type: "text",
      md: "In maths, `x = 5` is forever. In Python it just means \"right now, x points to 5\" — and you can repoint it anytime. Think of the name as a sticky note you can move to a different value.",
    },
    {
      type: "example",
      note: "The second line moves the sticky note. Watch the variable table in the stepper change from 100 to 200.",
      code: "score = 100\nprint(score)\nscore = 200\nprint(score)\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Trace it line by line. After each line, what does `x` point to? What prints at the end?",
      starter: "x = 5\nx = 10\nprint(x)\n",
      check: { type: "output", expected: "10" },
      hints: [
        "First line: x points to 5.",
        "Second line moves it to 10.",
        "It prints 10.",
      ],
      solution: "x = 5\nx = 10\nprint(x)\n",
    },
    {
      type: "text",
      md: "Python works out the whole right side *before* repointing the name — so you can use a variable's current value to set its next one: `score = score + 5`. There's a shortcut for that: `score += 5` means the same thing. A `#` starts a **comment** — Python ignores everything after it on the line.",
    },
    {
      type: "example",
      note: "The right side (10 + 5) is worked out first, then stored back in score.",
      code: "score = 10\nscore = score + 5   # 10 + 5 = 15\nprint(score)\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This should print 15 but crashes. Read the error — it names the word Python can't find — and fix the typo.",
      starter: "points = 10\ntotal = pints + 5\nprint(total)\n",
      check: { type: "output", expected: "15" },
      hints: [
        "`pints` is not the name you created.",
        "You stored the value under `points`.",
        "Change `pints` to `points`.",
      ],
      solution: "points = 10\ntotal = points + 5\nprint(total)\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "Right now this ends by printing Bob. Change the second line so it prints `Charlie` instead.",
      starter: "name = \"Alice\"\nname = \"Bob\"\nprint(name)\n",
      check: { type: "output", expected: "Charlie" },
      hints: [
        "The last value the name points to is what prints.",
        "Change the second assignment.",
        "name = \"Charlie\"",
      ],
      solution: "name = \"Alice\"\nname = \"Charlie\"\nprint(name)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: store the name `Alex` in a variable called `name` and the number 11 in `age`. Then print them on one line: `Alex is 11`.",
      starter: "",
      check: { type: "output", expected: "Alex is 11" },
      hints: [
        "Two assignments first.",
        "Then one print with commas.",
        "print(name, \"is\", age)",
      ],
      solution: "name = \"Alex\"\nage = 11\nprint(name, \"is\", age)\n",
    },
  ],
  codex: {
    topic: "variables & assignment",
    pattern: "score = 100      # let score point to 100\nscore = score + 5\nscore += 5       # same shortcut",
    note: "A variable is a name pointing to a value. = works out the right side, then repoints the name. Move the sticky note anytime; += adds to the current value.",
  },
});

/* ── Lesson 1.4 — Expressions & math ─────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c1s4",
  chapter: 1,
  strand: "numbers",
  lang: "py",
  timeBudgetMin: 13,
  title: "Expressions & math",
  glossary: {
    expression: "Anything Python can work out to a value — like `7 * 3` or `10 - 4`, or even just `7`. You can print it, store it, or drop it inside a bigger expression.",
  },
  content: [
    {
      type: "text",
      md: "An [[expression]] is anything Python can work out to a value: `7 * 3`, `10 - 4`, even just `7`. You can print the result, store it in a variable, or drop it inside a bigger expression.",
    },
    {
      type: "text",
      md: "The operators: `+ - *` you know. `/` divides and always gives a decimal — `6 / 2` is `3.0`, not `3`. `//` divides and drops the leftover — `7 // 2` is `3`. `%` gives the leftover — `7 % 3` is `1`. `**` is powers — `2 ** 8` is `256`.",
    },
    {
      type: "example",
      note: "Notice / gives a decimal even when it divides evenly.",
      code: "print(7 / 2)    # 3.5\nprint(7 // 2)   # 3\nprint(7 % 3)    # 1\nprint(2 ** 8)   # 256\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "This works out the seconds in 5 minutes (5 × 60). Change it to the seconds in 3 hours instead. It should print `10800`.",
      starter: "print(5 * 60)\n",
      check: { type: "output", expected: "10800" },
      hints: [
        "An hour is 60 minutes, a minute is 60 seconds.",
        "3 × 60 × 60.",
        "print(3 * 60 * 60)",
      ],
      solution: "print(3 * 60 * 60)\n",
    },
    {
      type: "text",
      md: "Python does maths in the usual order: powers first, then `* / // %`, then `+ -`. **Parentheses** jump the queue — whatever's inside is worked out first. When in doubt, add them.",
    },
    {
      type: "example",
      note: "The parentheses change the answer. Work out both before running.",
      code: "print(3 + 4 * 2)     # 11\nprint((3 + 4) * 2)   # 14\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Work out each line in your head — order of operations is the key. Then run to check.",
      starter: "print(2 + 3 * 4)\nprint((2 + 3) * 4)\nprint(10 % 3)\n",
      check: { type: "output", expected: "14\n20\n1" },
      hints: [
        "`*` before `+`.",
        "Parentheses first on line 2.",
        "`10 % 3` is the remainder, 1.",
      ],
      solution: "print(2 + 3 * 4)\nprint((2 + 3) * 4)\nprint(10 % 3)\n",
    },
    {
      type: "text",
      md: "`%` has a handy trick: `n % 2` is `0` for even numbers and `1` for odd ones. You'll use that in Chapter 2 to make decisions.",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This should print the average of 10, 20, and 30 — which is 20.0 — but the order of operations divides only the 30 first. Add parentheses to fix it.",
      starter: "print(10 + 20 + 30 / 3)\n",
      check: { type: "output", expected: "20.0" },
      hints: [
        "Right now only `30 / 3` happens first.",
        "Add the three numbers before dividing.",
        "print((10 + 20 + 30) / 3)",
      ],
      solution: "print((10 + 20 + 30) / 3)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: a song is 3 minutes and 45 seconds long. Print its total length in seconds. (3 × 60, plus 45.)",
      starter: "",
      check: { type: "output", expected: "225" },
      hints: [
        "Minutes to seconds first.",
        "Then add the 45.",
        "print(3 * 60 + 45)",
      ],
      solution: "print(3 * 60 + 45)\n",
    },
  ],
  codex: {
    topic: "expressions & math",
    pattern: "/   decimal divide (7/2 = 3.5)\n//  drop the leftover (7//2 = 3)\n%   the leftover (7%3 = 1)\n**  powers (2**8 = 256)",
    note: "An expression works out to a value. Order: powers, then * / // %, then + -. Parentheses jump the queue. n % 2 is 0 for even, 1 for odd.",
  },
});

/* ── Lesson 1.5 — Strings & text ─────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c1s5",
  chapter: 1,
  strand: "words",
  lang: "py",
  timeBudgetMin: 14,
  title: "Strings & text",
  glossary: {
    method: "A built-in tool that belongs to a value. You call one with a dot after the value, then the tool's name and parentheses — like `title.upper()`.",
  },
  content: [
    {
      type: "text",
      md: "Strings come with built-in tools called [[method|methods]]. You call one by putting a dot after the string, then the tool's name and parentheses.",
    },
    {
      type: "example",
      note: "upper() shouts it; title() capitalises each word. The original is untouched.",
      code: "title = \"blinding lights\"\nprint(title.upper())\nprint(title.title())\n",
    },
    {
      type: "text",
      md: "A few you'll use constantly: `s.upper()` makes it all capitals, `s.lower()` all lowercase, `s.strip()` trims spaces off the ends. `len(s)` counts the characters — that one's a plain function, so it's `len(title)`, not `title.len()`.",
    },
    {
      type: "example",
      note: "strip() cleans off the extra spaces; len() counts characters.",
      code: "song = \"  Hey Jude  \"\nprint(song.strip())\nprint(len(\"Python\"))\n",
    },
    {
      type: "text",
      md: "Here's the catch everyone hits once: `title.upper()` does **not** change `title`. It hands back a brand-new string and leaves the original alone. Strings can't be changed once they're made. To keep the shouted version, store it: `loud = title.upper()`.",
    },
    {
      type: "example",
      note: "loud is new; word is exactly as it was.",
      code: "word = \"python\"\nloud = word.upper()\nprint(loud)\nprint(word)   # still lowercase\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Predict both lines, then run.",
      starter: "word = \"hello\"\nprint(word.upper())\nprint(len(word))\n",
      check: { type: "output", expected: "HELLO\n5" },
      hints: [
        "`upper()` capitalises everything.",
        "`len` counts the letters.",
        "HELLO, then 5.",
      ],
      solution: "word = \"hello\"\nprint(word.upper())\nprint(len(word))\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "This shouts the phrase in capitals. Change the method so it prints `python is fun` in all lowercase instead.",
      starter: "print(\"Python is fun\".upper())\n",
      check: { type: "output", expected: "python is fun" },
      hints: [
        "There's a method that's the opposite of `upper`.",
        "It's `lower`.",
        ".lower()",
      ],
      solution: "print(\"Python is fun\".lower())\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This tries to shout the word, but it still prints lowercase. `upper()` hands back a new string instead of changing `word` — you have to store it. Fix it so it prints `HELLO`.",
      starter: "word = \"hello\"\nword.upper()\nprint(word)\n",
      check: { type: "output", expected: "HELLO" },
      hints: [
        "`word.upper()` on its own is thrown away.",
        "Store the result back in `word`.",
        "word = word.upper()",
      ],
      solution: "word = \"hello\"\nword = word.upper()\nprint(word)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: store the song title `\"bohemian rhapsody\"` in a variable, print it in title case (`Bohemian Rhapsody`), then print how many characters long it is including the space.",
      starter: "",
      check: { type: "output", expected: "Bohemian Rhapsody\n17" },
      hints: [
        "`title()` capitalises each word.",
        "`len()` counts every character, spaces included.",
        "print(len(title))",
      ],
      solution: "title = \"bohemian rhapsody\"\nprint(title.title())\nprint(len(title))\n",
    },
  ],
  codex: {
    topic: "strings & text",
    pattern: "s.upper()   s.lower()   s.strip()\nlen(s)      # a plain function\nloud = s.upper()   # store the new string",
    note: "Methods are tools you call with a dot: s.upper(). They return a NEW string — the original never changes — so store the result. len(s) counts characters.",
  },
});

/* ── Lesson 1.6 — Text templates ─────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c1s6",
  chapter: 1,
  strand: "words",
  lang: "py",
  timeBudgetMin: 15,
  title: "Text templates",
  glossary: {
    "f-string": "A string with an `f` before the opening quote, so you can drop a variable straight inside `{curly braces}` instead of joining text with +.",
  },
  content: [
    {
      type: "text",
      md: "Building text out of variables with `+` gets ugly — you need `str()` around every number. An [[f-string]] is cleaner: put an `f` before the quote, then drop any variable inside `{curly braces}`.",
    },
    {
      type: "example",
      note: "No +, no str() — the variables slot straight in.",
      code: "name = \"Alex\"\nage = 11\nprint(f\"{name} is {age} years old.\")\n",
    },
    {
      type: "text",
      md: "Inside the braces you can add a format after a colon. `{price:.2f}` shows exactly two decimal places — `3.5` becomes `3.50`. That's how you print prices and tidy numbers.",
    },
    {
      type: "example",
      note: ":.2f rounds and pads to two decimals.",
      code: "price = 3.5\nprint(f\"Total: ${price:.2f}\")\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "This builds a greeting with `+` and `str()`. Rewrite the print as a single f-string — the output must stay exactly `Hello Sam, you are 11 years old.`",
      starter: "name = \"Sam\"\nage = 11\nprint(\"Hello \" + name + \", you are \" + str(age) + \" years old.\")\n",
      check: { type: "output", expected: "Hello Sam, you are 11 years old." },
      hints: [
        "Put an `f` before the quote.",
        "Drop `name` and `age` in braces.",
        "f\"Hello {name}, you are {age} years old.\"",
      ],
      solution: "name = \"Sam\"\nage = 11\nprint(f\"Hello {name}, you are {age} years old.\")\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "`price` and `tax` are set up. Add one print using an f-string with `:.2f` that outputs exactly `Total: $4.50`.",
      starter: "price = 4.0\ntax = 0.5\ntotal = price + tax\n# print the total\n",
      check: { type: "output", expected: "Total: $4.50" },
      hints: [
        "Use an f-string.",
        "Format `total` with `:.2f`.",
        "print(f\"Total: ${total:.2f}\")",
      ],
      solution: "price = 4.0\ntax = 0.5\ntotal = price + tax\nprint(f\"Total: ${total:.2f}\")\n",
    },
    {
      type: "text",
      md: "`split()` breaks a string into a list of pieces: `\"red,green,blue\".split(\",\")` gives `['red', 'green', 'blue']`. `join()` is the reverse — you call it on the separator: `\" - \".join(parts)` glues the pieces back with ` - ` between them.",
    },
    {
      type: "example",
      note: "split breaks apart at each comma; join puts them back with your separator.",
      code: "colours = \"red,green,blue\"\nparts = colours.split(\",\")\nprint(parts)\nprint(\" - \".join(parts))\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This should print `rock → paper → scissors`, but `join` was handed the original string instead of the split-up list. Fix the one wrong word.",
      starter: "items = \"rock,paper,scissors\"\nparts = items.split(\",\")\nprint(\" → \".join(items))\n",
      check: { type: "output", expected: "rock → paper → scissors" },
      hints: [
        "`join` needs the list, not the original string.",
        "You already made the list — it's `parts`.",
        "\" → \".join(parts)",
      ],
      solution: "items = \"rock,paper,scissors\"\nparts = items.split(\",\")\nprint(\" → \".join(parts))\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: store your name in one variable and a score of 95 in another. Using one f-string, print `Alex scored 95 points!`.",
      starter: "",
      check: { type: "output", expected: "Alex scored 95 points!" },
      hints: [
        "Two variables.",
        "One f-string with both in braces.",
        "f\"{name} scored {score} points!\"",
      ],
      solution: "name = \"Alex\"\nscore = 95\nprint(f\"{name} scored {score} points!\")\n",
    },
  ],
  codex: {
    topic: "text templates",
    pattern: "f\"{name} is {age}\"      # drop variables in\nf\"${price:.2f}\"          # two decimals\n\"a,b\".split(\",\")   \" - \".join(parts)",
    note: "An f-string drops variables straight into text with {braces}; :.2f shows two decimals. split breaks a string into a list; join glues a list back with a separator.",
  },
});

/* ── Lesson 1.7 — Input ──────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c1s7",
  chapter: 1,
  strand: "core",
  lang: "py",
  timeBudgetMin: 12,
  title: "Input",
  content: [
    {
      type: "text",
      md: "Every program so far decides everything itself. `input()` lets it ask the person a question and use their answer.",
    },
    {
      type: "example",
      note: "input() shows the question, waits for typing, and hands back what they typed. The space after the ? keeps it from looking cramped.",
      code: "name = input(\"What's your name? \")\nprint(\"Hi,\", name)\n",
    },
    {
      type: "text",
      md: "The big thing to remember: `input()` **always** gives back text, even if they type a number. Type `11` and you get the string `\"11\"`. Try `age + 1` on that and Python stops with a TypeError. Wrap it in `int()` to get a real number: `age = int(input(\"Your age? \"))`.",
    },
    {
      type: "example",
      note: "int() turns the typed text into a number, so age + 1 works.",
      code: "age = int(input(\"Your age? \"))\nprint(\"Next year you'll be\", age + 1)\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "This greets with `Hello, Alex.` Change it to `Welcome, Alex!` — swap the word and turn the full stop into an exclamation mark.",
      starter: "name = input(\"Name: \")\nprint(\"Hello,\", name + \".\")\n",
      mockInput: ["Alex"],
      check: { type: "output", expected: "Name: Welcome, Alex!" },
      hints: [
        "Change `Hello` to `Welcome`.",
        "Change the `.` to `!`.",
        "print(\"Welcome,\", name + \"!\")",
      ],
      solution: "name = input(\"Name: \")\nprint(\"Welcome,\", name + \"!\")\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "The first line reads a number. Add one line that prints double it. With input 7, it should print 14.",
      starter: "n = int(input(\"Enter a number: \"))\n# print double n\n",
      mockInput: ["7"],
      check: { type: "output", expected: "Enter a number: 14" },
      hints: [
        "`n` already holds the number.",
        "Double it with `* 2`.",
        "print(n * 2)",
      ],
      solution: "n = int(input(\"Enter a number: \"))\nprint(n * 2)\n",
    },
    {
      type: "text",
      md: "That's the whole rule: whatever comes in from the keyboard is text, so if you want to do maths with it, convert it with `int()` first.",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: use empty `input()` (no prompt text) to read a name, then a number for age. Print `Hi Alex, next year you'll be 12.` (Inputs: Alex, then 11.)",
      starter: "",
      mockInput: ["Alex", "11"],
      check: { type: "output", expected: "Hi Alex, next year you'll be 12." },
      hints: [
        "Read the name, then `int(input())` for age.",
        "Use an f-string with `{age + 1}`.",
        "f\"Hi {name}, next year you'll be {age + 1}.\"",
      ],
      solution: "name = input()\nage = int(input())\nprint(f\"Hi {name}, next year you'll be {age + 1}.\")\n",
    },
  ],
  codex: {
    topic: "input",
    pattern: "name = input(\"Your name? \")\nage = int(input(\"Your age? \"))   # text -> number",
    note: "input() asks the user and hands back what they typed — always as text. Wrap it in int() when you need a number to do maths with.",
  },
});

/* ── Lesson 1.8 — Drawing, Sound & your first real program (finale) ──── */

window.CODELAB.lessons.push({
  id: "c1s8",
  chapter: 1,
  strand: "sound",
  lang: "py",
  timeBudgetMin: 16,
  title: "Drawing, Sound & your first real program",
  glossary: {
    MIDI: "A standard that gives every musical note a number. Middle C is 60, and each step up is one semitone higher.",
  },
  content: [
    {
      type: "text",
      md: "Time for the fun part — Python can draw and play sound. The **turtle** is a pen that moves around the screen. `forward(n)` moves it `n` steps; `right(a)` turns it `a` degrees on the spot; `left(a)` turns the other way. It starts in the middle, facing right.",
    },
    {
      type: "example",
      note: "Forward, turn right 90 degrees, four times — a square.",
      code: "forward(100)\nright(90)\nforward(100)\nright(90)\nforward(100)\nright(90)\nforward(100)\nright(90)\n",
    },
    {
      type: "text",
      md: "To close any shape, all the turns add up to 360°. A square: 360 ÷ 4 = 90° each. A triangle: 360 ÷ 3 = 120°. (The reference chart lists the angle for every regular shape.)",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "This draws a square with 100-step sides. Change all four `forward` calls so the sides are 150 steps instead.",
      starter: "forward(100)\nright(90)\nforward(100)\nright(90)\nforward(100)\nright(90)\nforward(100)\nright(90)\n",
      check: {
        type: "calls",
        calls: [
          { fn: "forward", val: 150 }, { fn: "right", val: 90 },
          { fn: "forward", val: 150 }, { fn: "right", val: 90 },
          { fn: "forward", val: 150 }, { fn: "right", val: 90 },
          { fn: "forward", val: 150 }, { fn: "right", val: 90 },
        ],
      },
      hints: [
        "Only the `forward` numbers change.",
        "There are four of them.",
        "forward(150) each time.",
      ],
      solution: "forward(150)\nright(90)\nforward(150)\nright(90)\nforward(150)\nright(90)\nforward(150)\nright(90)\n",
    },
    {
      type: "text",
      md: "For sound, `play(note)` plays a note by its number. Middle C is 60, and each step up is one semitone — the [[MIDI]] chart lists them. `sleep(1)` waits a beat before the next note.",
    },
    {
      type: "example",
      note: "Three notes of a C major chord, one after another. Change 64 to 65 and you swap the E for an F.",
      code: "play(60)   # C\nsleep(1)\nplay(64)   # E\nsleep(1)\nplay(67)   # G\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "This plays 60 (C), 64 (E), 67 (G). Change the middle note to 65 to swap the E for an F.",
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
        "Only the middle note changes.",
        "64 becomes 65.",
        "play(65)",
      ],
      solution: "play(60)\nsleep(1)\nplay(65)\nsleep(1)\nplay(67)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: a triangle's turns add up to 360°, so each is 360 ÷ 3 = 120°. Draw an equilateral triangle with 100-step sides — just raw `forward`/`right` calls, no loop yet.",
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
        "Three sides, three turns.",
        "Each turn is 120°.",
        "forward(100), right(120), three times.",
      ],
      solution: "forward(100)\nright(120)\nforward(100)\nright(120)\nforward(100)\nright(120)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: make a name banner. Store your name in a variable. Print a row of 20 dashes, then `>>> Alex <<<` using an f-string, then another row of 20 dashes. Use `\"-\" * 20` for the dash rows — don't type twenty dashes by hand. (Name: Alex.)",
      starter: "",
      check: { type: "output", expected: "--------------------\n>>> Alex <<<\n--------------------" },
      hints: [
        "\"-\" * 20 makes the dash row.",
        "Use an f-string for the middle line.",
        "print(f\">>> {name} <<<\")",
      ],
      solution: "name = \"Alex\"\nprint(\"-\" * 20)\nprint(f\">>> {name} <<<\")\nprint(\"-\" * 20)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch — your first real program. Ask for a name with empty `input()`. Print a welcome line with an f-string: `Welcome, Alex!`. Then play a four-note signature tune — 60, 64, 67, 72 — with `sleep(1)` between each note. (Input: Alex. The checker listens for your tune.)",
      starter: "",
      mockInput: ["Alex"],
      check: {
        type: "calls",
        calls: [
          { fn: "play", note: 60 },
          { fn: "play", note: 64 },
          { fn: "play", note: 67 },
          { fn: "play", note: 72 },
        ],
      },
      hints: [
        "Read the name, then print the welcome with an f-string.",
        "Play the four notes with `sleep(1)` between them.",
        "60, 64, 67, 72 — a C major arpeggio.",
      ],
      solution: "name = input()\nprint(f\"Welcome, {name}!\")\nplay(60)\nsleep(1)\nplay(64)\nsleep(1)\nplay(67)\nsleep(1)\nplay(72)\n",
    },
  ],
  codex: {
    topic: "drawing & sound",
    pattern: "forward(n)   right(a)     # turtle\nplay(note)   sleep(beats)  # sound",
    note: "The turtle draws: forward moves, right turns (a closed shape's turns total 360). play(note) plays a MIDI note (middle C = 60); sleep waits a beat.",
  },
});
