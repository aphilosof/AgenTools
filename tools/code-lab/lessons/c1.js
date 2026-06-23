/* Chapter 1, Lesson 1 — "Output and print", expressed in the working lesson
   format (one concept per section, like w1l1). Source content: the reviewed
   lesson lessons/ch-1/c1l1.reviewed.js (warm-up folded into section 1, each
   subsection -> one section, one worked example + one write/fix exercise each).
   This is the "put the reviewed lesson on the working site" step. */

window.CODELAB.lessons.push({
  id: "c1s1",
  world: 1,
  strand: "core",
  rung: 5,
  concepts: ["print", "output", "string-literal"],
  misconceptions: ["quotes-in-output", "unquoted-word-as-text"],
  warmup: [],
  timeBudgetMin: 8,
  title: "Output and print",
  lang: "py",
  explain:
    "In Chapter 0 you broke everyday tasks — making toast, brushing teeth — into a sequence of exact steps, with nothing left to guess. A computer needs that same care: it does exactly what you say, in order, and nothing more.\n\n" +
    "A program shows you nothing until you ask it to. `print` is the instruction that asks. It takes whatever sits inside its brackets — its [[argument]] — and displays it on the screen. To print a piece of text, you wrap that text in quotation marks, which makes it a [[string]]. The quotes only mark where the text starts and ends; they are **never shown** in the output. So `print(\"Hello!\")` displays `Hello!`, with no quotes around it.\n\n" +
    "Each `print` writes its own line, so several prints stack up in the order you wrote them. You can also hand `print` more than one argument by separating them with commas, and it places a single space between them. The brackets do not have to hold plain text, either — they can hold a small calculation, and `print` shows the **result** of that calculation, not the calculation itself.",
  glossary: {
    argument: "The value you place inside a function's brackets — what the function works on. In print(\"hi\") the argument is \"hi\".",
    string: "Text: a row of characters inside quotes, single or double. The quotes mark where it starts and ends and are not part of the value.",
  },
  moreInfo: [
    { label: "Single or double quotes?", body: "Python accepts both 'hi' and \"hi\" — they mean exactly the same thing. Pick one kind so the other can appear inside your text: writing \"it's fine\" with double quotes lets the apostrophe sit happily in the middle." },
  ],
  example: "print(\"The answer is\", 42)\n",
  exampleNote:
    "One print can take several arguments separated by commas, and it puts a single space between them. (The 42 here is a number, not text — print can show a number too.)",
  task: "Starting from an empty editor, write a program that prints exactly these two lines:\n\nReady to code\nLet's go\n\nThe second line has an apostrophe in it — choose your quotes so that apostrophe does not end the text early.",
  starter: "",
  starterExpectation: "runs-clean",
  check: { type: "output", expected: "Ready to code\nLet's go" },
  hints: [
    "Two separate lines means two separate print instructions, one under the other.",
    "Let's has an apostrophe inside it. If you wrap that text in double quotes, the apostrophe sits safely in the middle: \"Let's go\".",
    "Two prints: print(\"Ready to code\") on the first line, print(\"Let's go\") on the second.",
  ],
  solution: "print(\"Ready to code\")\nprint(\"Let's go\")\n",
  codex: { topic: "printing", pattern: "print(\"text\")", note: "Displays its argument on the screen. One print writes one line; the quotes are not shown. The brackets can also hold a calculation, and print shows the result." },
  styleRequired: false,
});

window.CODELAB.lessons.push({
  id: "c1s2",
  world: 1,
  strand: "core",
  rung: 6,
  concepts: ["string-concat", "string-repeat"],
  misconceptions: ["join-needs-space", "comma-vs-plus"],
  warmup: [],
  timeBudgetMin: 8,
  title: "Combining text",
  lang: "py",
  explain:
    "You have printed single pieces of text; now combine them. Two operators do this. The first is `+`, which performs [[concatenation]] — it glues two strings end to end into one longer string. So `\"foot\" + \"ball\"` is `\"football\"`, and `print(\"Code\" + \"Lab\")` shows `CodeLab`. Look closely: there is **no space**. The `+` joins exactly the characters you give it, so if you want a gap you add it yourself as a space inside quotes: `\"Code\" + \" \" + \"Lab\"` shows `Code Lab`.\n\n" +
    "That is the key difference from the comma. A comma between two arguments tells `print` to insert one space for you, while `+` glues with none. Side by side: `print(\"hot\", \"dog\")` shows `hot dog`, but `print(\"hot\" + \"dog\")` shows `hotdog`. Same two words, two different tools.\n\n" +
    "The second operator is `*`. Placed between a piece of text and a whole number, it **repeats** that text: `\"ab\" * 3` is `\"ababab\"`, and `\"-\" * 10` is a row of ten dashes — a quick way to draw a divider without typing every character. You can even combine the two: `\"=\" * 3 + \" MENU \" + \"=\" * 3` builds a little title bar, `=== MENU ===`.",
  glossary: {
    concatenation: "Joining two strings end to end with +. \"foot\" + \"ball\" is \"football\". The + adds no space of its own, so add a \" \" yourself if you want a gap.",
  },
  moreInfo: [
    { label: "Why does + add no space when a comma does?", body: "+ is literal — it joins the exact characters in each string and adds nothing of its own. The comma is print's own helper, and one of its jobs is to drop a single space between arguments. Reach for the comma when you want spacing for free, and + when you want to control every character yourself." },
  ],
  example: "print(\"=\" * 3 + \" MENU \" + \"=\" * 3)\n",
  exampleNote:
    "Repeat and join together to build a title bar: three = signs, then \" MENU \", then three more = signs.",
  task: "Starting from an empty editor, build a name banner. Print three lines: a row of exactly ten dashes, then Hi, Sam!, then another row of exactly ten dashes, reading:\n\n----------\nHi, Sam!\n----------\n\nUse * to make the dash rows instead of typing ten dashes by hand.",
  starter: "",
  starterExpectation: "runs-clean",
  check: { type: "output", expected: "----------\nHi, Sam!\n----------" },
  hints: [
    "To make ten dashes in one go, repeat the dash: \"-\" * 10.",
    "The middle line is just ordinary text in quotes, nothing special: \"Hi, Sam!\".",
    "Three prints, top to bottom: a dash row, the greeting, then the same dash row again.",
  ],
  solution: "print(\"-\" * 10)\nprint(\"Hi, Sam!\")\nprint(\"-\" * 10)\n",
  codex: { topic: "combining text", pattern: "\"a\" + \"b\"   \"ab\" * 3", note: "+ joins two pieces of text end to end with no space added; * repeats a piece of text a whole number of times. Add a \" \" yourself if you want a gap." },
  styleRequired: false,
});

window.CODELAB.lessons.push({
  id: "c1s3",
  world: 1,
  strand: "core",
  rung: 4,
  concepts: ["comment"],
  misconceptions: ["comment-runs"],
  warmup: [],
  timeBudgetMin: 6,
  title: "Comments",
  lang: "py",
  explain:
    "Code is read by people as well as by Python, and sometimes you want to leave a note for the people. That is what a [[comment]] is for. A comment starts with a `#` and runs to the end of that line; Python skips everything after the `#` and never tries to run it.\n\n" +
    "A comment can sit on its own line, above the code it explains, or it can ride at the end of a line of code. Because Python ignores whatever follows the `#`, you can also \"comment out\" a real line of code: put a `#` in front of it and Python will skip the line, which lets you switch it off without deleting it. That is a handy debugging move — turn one line off for a moment to see what the rest of your program does without it, then take the `#` back off. Comments change nothing about what your program does; they only change how easy it is for a human to read.",
  glossary: {
    comment: "Text after a # that Python ignores. A note for the people reading the code; it never runs.",
  },
  moreInfo: [],
  example: "# print(\"secret\")\nprint(\"shown\")\n",
  exampleNote:
    "Putting a # in front of a real line switches it off without deleting it. The first line does not run; only the second prints.",
  task: "This program is supposed to print two lines — Welcome, then keep — but it only prints one. Someone commented out a line by accident. Fix it so both lines print.",
  starter: "# print(\"Welcome\")\nprint(\"keep\")\n",
  starterExpectation: "runs-clean",
  check: { type: "output", expected: "Welcome\nkeep" },
  hints: [
    "Run it: only keep prints. Look at the line above it.",
    "The first line starts with #, so Python treats the whole line as a note and skips it.",
    "Remove the # (and the space after it) so the line becomes real code again: print(\"Welcome\").",
  ],
  solution: "print(\"Welcome\")\nprint(\"keep\")\n",
  codex: { topic: "comments", pattern: "# a note Python ignores", note: "Everything after # on a line is skipped. Use it for notes, or to temporarily switch off a line of code." },
  styleRequired: false,
});

window.CODELAB.lessons.push({
  id: "c1s4",
  world: 1,
  strand: "core",
  rung: 6,
  concepts: ["sep", "end"],
  misconceptions: ["sep-vs-end"],
  warmup: [],
  timeBudgetMin: 8,
  title: "Shaping output: sep and end",
  lang: "py",
  explain:
    "When you give `print` several arguments, it joins them with one space by default — that is why `print(\"a\", \"b\")` shows `a b`. You can change that in-between text with [[separator]] (`sep`), and you can change the text printed *after* everything with [[end]].\n\n" +
    "By default `end` is a newline — the invisible character that drops down to the next line. That newline is the reason each `print` starts fresh below the last one. If you set `end` to something else — even an empty `\"\"` — then the next `print` carries on right where this one stopped, so two prints can share a line. You write both of these as `name=value` inside the brackets, like `sep=\"-\"`. For now, just remember: `sep` goes *between* the things, and `end` goes *after* them all.",
  glossary: {
    separator: "What print puts BETWEEN its arguments, written sep=. The default is a single space.",
    end: "What print puts AFTER its output, written end=. The default is a newline, which is why each print starts a fresh line.",
  },
  moreInfo: [],
  example: "print(2024, 11, 30, sep=\"-\")\n",
  exampleNote:
    "A practical use: build a date with a single separator. sep sits between whatever you print, joining the items with the dash you chose.",
  task: "Starting from an empty editor, print these two pieces — loading and ... — so they end up on the SAME line, reading exactly:\n\nloading...\n\nUse two print instructions, and stop the first one from dropping to a new line.",
  starter: "",
  starterExpectation: "runs-clean",
  check: { type: "output", expected: "loading..." },
  hints: [
    "Normally each print starts a new line because its end is a newline. You want the first print to NOT drop down.",
    "Set the first print's end to an empty string, end=\"\", so the second print carries on right after it.",
    "First line: print(\"loading\", end=\"\"). Second line: print(\"...\").",
  ],
  solution: "print(\"loading\", end=\"\")\nprint(\"...\")\n",
  codex: { topic: "print options", pattern: "print(a, b, sep=\"-\", end=\"!\")", note: "A comma between arguments adds one space; sep changes that in-between text; end replaces the trailing newline." },
  styleRequired: false,
});
