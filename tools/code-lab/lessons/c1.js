/* Chapter 1, Lesson 1 — "Output and print", in the working lesson format with
   the locked rich-section shape: each subsection is one section carrying several
   worked examples (easy -> harder) and several exercises. Source content:
   lessons/ch-1/c1l1.reviewed.js. The one "arrange/parsons" exercise is held back
   until the player has a drag-arrange UI. */

window.CODELAB.lessons.push({
  id: "c1s1",
  chapter: 1,
  strand: "core",
  lang: "py",
  timeBudgetMin: 8,
  title: "Output and print",
  explain:
    "In Chapter 0 you broke everyday tasks — making toast, brushing teeth — into a sequence of exact steps, with nothing left to guess. A computer needs that same care: it does exactly what you say, in order, and nothing more.\n\n" +
    "A program shows you nothing until you ask it to. `print` is the instruction that asks. It takes whatever sits inside its brackets — its [[argument]] — and displays it on the screen. To print a piece of text, you wrap that text in quotation marks, which makes it a [[string]]. The quotes only mark where the text starts and ends; they are **never shown** in the output. So `print(\"Hello!\")` displays `Hello!`, with no quotes around it.\n\n" +
    "Each `print` writes its own line, so several prints stack up in the order you wrote them. You can also hand `print` more than one argument by separating them with commas, and it places a single space between them. The brackets do not have to hold plain text, either — they can hold a small calculation, and `print` shows the **result** of that calculation, not the calculation itself.",
  glossary: {
    argument: "The value you place inside a function's brackets — what the function works on. In print(\"hi\") the argument is \"hi\".",
    string: "Text: a row of characters inside quotes, single or double. The quotes mark where it starts and ends and are not part of the value.",
  },
  moreInfo: [
    { label: "Single or double quotes?", body: "Python accepts both `'hi'` and `\"hi\"` — they mean exactly the same thing. Pick one kind so the other can appear inside your text: writing `\"it's fine\"` with double quotes lets the apostrophe sit happily in the middle." },
  ],
  examples: [
    { note: "The simplest program that does anything visible. The quotes mark the text but do not appear in the output.", code: "print(\"Hello!\")\n" },
    { note: "Each print writes its own line, so two prints stack in the order you wrote them. Predict the two lines before you run it.", code: "print(\"Code\")\nprint(\"Lab\")\n" },
    { note: "One print can take several arguments separated by commas, and it puts a single space between them. (The 42 here is a number, not text — print can show a number too.)", code: "print(\"The answer is\", 42)\n" },
    { note: "The brackets can hold a calculation. print works out what is inside first, then shows the answer — so this prints 5, not the words 2 + 3.", code: "print(2 + 3)\n" },
    { note: "A label and a calculation in one print. The text comes first, then the result of 7 * 3, with one space between them from the comma.", code: "print(\"Score:\", 7 * 3)\n" },
  ],
  exercises: [
    { rung: 1, prompt: "Before you run this, predict exactly what it prints — including the spacing. Two words go into one print, separated by a comma.", starter: "print(\"Code\", \"Lab\")\n", check: { type: "output", value: "Code Lab" }, hints: ["There are two arguments, separated by a comma. What does print put between them?", "The comma makes print put one space between the two words when they appear.", "The quotation marks are not part of what shows — only the text inside them appears, with a single space between the two words."], solution: "print(\"Code\", \"Lab\")\n" },
    { rung: 3, prompt: "Right now this prints only the word Code. Change it so one print shows Code Lab on a single line, with a space between. Add the second word as another argument, separated by a comma — let the comma supply the space.", starter: "print(\"Code\")\n", check: { type: "output", value: "Code Lab" }, hints: ["You want a second word in the same print. Extra arguments go after a comma, inside the brackets.", "The comma tells print to drop one space between the two words for you, so you do not type the space yourself.", "Add the second word as its own argument: print(\"Code\", \"Lab\")."], solution: "print(\"Code\", \"Lab\")\n" },
    { rung: 4, prompt: "This program crashes instead of printing. Read the real error first, then fix it so it prints the word Hello.", starter: "print(Hello)\n", check: { type: "output", value: "Hello" }, hints: ["Read the real error: NameError: name 'Hello' is not defined. Without quotes, Python read Hello as an instruction, not as text to show.", "Text you want printed has to sit inside quotation marks.", "Wrap the word in quotes: print(\"Hello\")."], solution: "print(\"Hello\")\n" },
    { rung: 5, prompt: "Finish this line so it prints a label next to a number on one line, reading exactly:\n\nPoints: 50\n\nThe number is missing — add it as a second argument with a comma. (The 50 takes no quotes: it is a number, not text.)", starter: "print(\"Points:\")  # add the number as a second argument\n", check: { type: "output", value: "Points: 50" }, hints: ["Right now there is only one argument, so only the label prints. You need a second argument after a comma.", "The value you want is the plain number 50. Numbers need no quotes — just type 50.", "Add it as its own argument: print(\"Points:\", 50)."], solution: "print(\"Points:\", 50)\n" },
    { rung: 5, prompt: "Starting from an empty editor, write a program that prints exactly these two lines:\n\nReady to code\nLet's go\n\nThe second line has an apostrophe — choose your quotes so it does not end the text early.", starter: "", check: { type: "output", value: "Ready to code\nLet's go" }, hints: ["Two separate lines means two separate print instructions, one under the other.", "Let's has an apostrophe inside it. Wrap that text in double quotes and the apostrophe sits safely in the middle: \"Let's go\".", "Two prints: print(\"Ready to code\") then print(\"Let's go\")."], solution: "print(\"Ready to code\")\nprint(\"Let's go\")\n" },
  ],
  codex: { topic: "printing", pattern: "print(\"text\")", note: "Displays its argument on the screen. One print writes one line; the quotes are not shown. The brackets can also hold a calculation, and print shows the result." },
});

window.CODELAB.lessons.push({
  id: "c1s2",
  chapter: 1,
  strand: "core",
  lang: "py",
  timeBudgetMin: 8,
  title: "Combining text",
  explain:
    "You have printed single pieces of text; now combine them. Two operators do this. The first is `+`, which performs [[concatenation]] — it glues two strings end to end into one longer string. So `\"foot\" + \"ball\"` is `\"football\"`, and `print(\"Code\" + \"Lab\")` shows `CodeLab`. Look closely: there is **no space**. The `+` joins exactly the characters you give it, so if you want a gap you add it yourself as a space inside quotes: `\"Code\" + \" \" + \"Lab\"` shows `Code Lab`.\n\n" +
    "That is the key difference from the comma. A comma between two arguments tells `print` to insert one space for you, while `+` glues with none. Side by side: `print(\"hot\", \"dog\")` shows `hot dog`, but `print(\"hot\" + \"dog\")` shows `hotdog`. Same two words, two different tools.\n\n" +
    "The second operator is `*`. Placed between a piece of text and a whole number, it **repeats** that text: `\"ab\" * 3` is `\"ababab\"`, and `\"-\" * 10` is a row of ten dashes. You can even combine the two: `\"=\" * 3 + \" MENU \" + \"=\" * 3` builds a little title bar, `=== MENU ===`.",
  glossary: {
    concatenation: "Joining two strings end to end with +. \"foot\" + \"ball\" is \"football\". The + adds no space of its own, so add a \" \" yourself if you want a gap.",
  },
  moreInfo: [
    { label: "Why does + add no space when a comma does?", body: "`+` is literal — it joins the exact characters in each string and adds nothing of its own. The comma is print's own helper, and one of its jobs is to drop a single space between arguments. Reach for the comma when you want spacing for free, and `+` when you want to control every character yourself." },
  ],
  examples: [
    { note: "+ glues two strings end to end. The join is exact — no space appears between the words.", code: "print(\"Code\" + \"Lab\")\n" },
    { note: "Want a gap? Add it yourself. A single space inside quotes is itself a piece of text you can join in.", code: "print(\"Code\" + \" \" + \"Lab\")\n" },
    { note: "* repeats a piece of text a whole number of times. Predict the output before running.", code: "print(\"ab\" * 3)\n" },
    { note: "A mix of both operators. Python builds the repeated HoHoHo first, then glues the ! on the end.", code: "print(\"Ho\" * 3 + \"!\")\n" },
    { note: "Repeat and join together to build a title bar: three = signs, then \" MENU \", then three more = signs.", code: "print(\"=\" * 3 + \" MENU \" + \"=\" * 3)\n" },
  ],
  exercises: [
    { rung: 3, prompt: "Right now this prints CodeLab, with the two words stuck together. Change it so it prints Code Lab with a space between — but do it by joining, not by adding a comma.", starter: "print(\"Code\" + \"Lab\")\n", check: { type: "output", value: "Code Lab" }, hints: ["+ glues the exact text with no gap, which is why the words ran together. You have to add the gap yourself.", "A single space inside quotes, \" \", is itself a piece of text — you can join it in like any other string.", "Join three pieces: the first word, a space, the second word: \"Code\" + \" \" + \"Lab\"."], solution: "print(\"Code\" + \" \" + \"Lab\")\n" },
    { rung: 4, prompt: "A student wanted hot dog — two words with a single space — but got hotdog instead. The line runs without crashing, so there is no error to read; the output is just wrong. Fix it so it prints hot dog.", starter: "print(\"hot\" + \"dog\")\n", check: { type: "output", value: "hot dog" }, hints: ["Nothing crashed, so read the output, not an error: the two words ran together because + joins with no space.", "Two clean fixes: a comma between two arguments inserts one space for you, or join a \" \" in the middle yourself.", "The tidiest fix is print(\"hot\", \"dog\") — the comma adds the space."], solution: "print(\"hot\", \"dog\")\n" },
    { rung: 6, prompt: "Starting from an empty editor, build a name banner. Print three lines: a row of exactly ten dashes, then Hi, Sam!, then another row of ten dashes:\n\n----------\nHi, Sam!\n----------\n\nUse * to make the dash rows instead of typing ten dashes by hand.", starter: "", check: { type: "output", value: "----------\nHi, Sam!\n----------" }, hints: ["To make ten dashes in one go, repeat the dash: \"-\" * 10.", "The middle line is ordinary text in quotes: \"Hi, Sam!\".", "Three prints: a dash row, the greeting, then the same dash row again."], solution: "print(\"-\" * 10)\nprint(\"Hi, Sam!\")\nprint(\"-\" * 10)\n" },
  ],
  codex: { topic: "combining text", pattern: "\"a\" + \"b\"   \"ab\" * 3", note: "+ joins two pieces of text end to end with no space added; * repeats a piece of text a whole number of times. Add a \" \" yourself if you want a gap." },
});

window.CODELAB.lessons.push({
  id: "c1s3",
  chapter: 1,
  strand: "core",
  lang: "py",
  timeBudgetMin: 6,
  title: "Comments",
  explain:
    "Code is read by people as well as by Python, and sometimes you want to leave a note for the people. That is what a [[comment]] is for. A comment starts with a `#` and runs to the end of that line; Python skips everything after the `#` and never tries to run it.\n\n" +
    "A comment can sit on its own line, above the code it explains, or it can ride at the end of a line of code. Because Python ignores whatever follows the `#`, you can also \"comment out\" a real line of code: put a `#` in front of it and Python will skip the line, which lets you switch it off without deleting it. That is a handy debugging move — turn one line off to see what the rest of your program does without it, then take the `#` back off. Comments change nothing about what your program does; they only change how easy it is for a human to read.",
  glossary: {
    comment: "Text after a # that Python ignores. A note for the people reading the code; it never runs.",
  },
  moreInfo: [],
  examples: [
    { note: "A full-line comment above the code. The note is for you; Python runs only the print.", code: "# This program greets you\nprint(\"Hi\")\n" },
    { note: "An inline comment rides at the end of a code line. Everything after the # is ignored.", code: "print(\"Go\")  # this part is ignored\n" },
    { note: "Putting a # in front of a real line switches it off without deleting it. The first line does not run; only the second prints.", code: "# print(\"secret\")\nprint(\"shown\")\n" },
  ],
  exercises: [
    { rung: 1, prompt: "Read this carefully and predict exactly what it prints. Two of these lines do nothing — find them before you run it.", starter: "# print(\"one\")\nprint(\"two\")  # print three\nprint(\"three\")\n", check: { type: "output", value: "two\nthree" }, hints: ["A line that begins with # never runs, so the first line prints nothing.", "On the second line, everything after the # is ignored — print three is just a note.", "That leaves two lines that actually print: two, then three."], solution: "# print(\"one\")\nprint(\"two\")  # print three\nprint(\"three\")\n" },
    { rung: 3, prompt: "This line works, but a reader cannot tell why it is here. Add an inline comment at the end — a # followed by a short note, such as # greet the player. The output must not change: it should still print exactly Go.", starter: "print(\"Go\")\n", check: { type: "output", value: "Go" }, hints: ["An inline comment rides at the end of the code line: leave the print as it is, then add your note after it.", "Start the note with a #. Everything after the # is ignored, so it cannot change the output.", "For example: print(\"Go\")  # greet the player. The exact words are up to you."], solution: "print(\"Go\")  # greet the player\n" },
    { rung: 4, prompt: "This program should print two lines — Welcome, then keep — but it only prints one. Someone commented out a line by accident. Fix it so both lines print.", starter: "# print(\"Welcome\")\nprint(\"keep\")\n", check: { type: "output", value: "Welcome\nkeep" }, hints: ["Run it: only keep prints. Look at the line above it.", "The first line starts with #, so Python treats the whole line as a note and skips it.", "Remove the # (and the space after it) so it becomes real code again: print(\"Welcome\")."], solution: "print(\"Welcome\")\nprint(\"keep\")\n" },
  ],
  codex: { topic: "comments", pattern: "# a note Python ignores", note: "Everything after # on a line is skipped. Use it for notes, or to temporarily switch off a line of code." },
});

window.CODELAB.lessons.push({
  id: "c1s4",
  chapter: 1,
  strand: "core",
  lang: "py",
  timeBudgetMin: 8,
  title: "Shaping output: sep and end",
  explain:
    "When you give `print` several arguments, it joins them with one space by default — that is why `print(\"a\", \"b\")` shows `a b`. You can change that in-between text with [[separator]] (`sep`), and you can change the text printed *after* everything with [[end]].\n\n" +
    "By default `end` is a newline — the invisible character that drops down to the next line. That newline is the reason each `print` starts fresh below the last one. If you set `end` to something else — even an empty `\"\"` — then the next `print` carries on right where this one stopped, so two prints can share a line. You write both of these as `name=value` inside the brackets, like `sep=\"-\"`. For now, just remember: `sep` goes *between* the things, and `end` goes *after* them all.",
  glossary: {
    separator: "What print puts BETWEEN its arguments, written sep=. The default is a single space.",
    end: "What print puts AFTER its output, written end=. The default is a newline, which is why each print starts a fresh line.",
  },
  moreInfo: [],
  examples: [
    { note: "sep is the text print puts BETWEEN arguments. Here it becomes a dash instead of the usual space.", code: "print(\"a\", \"b\", sep=\"-\")\n" },
    { note: "end is the text print puts AFTER everything. Setting it to \"!\" instead of a newline means the next print starts on the same line.", code: "print(\"done\", end=\"!\")\nprint(\"next\")\n" },
    { note: "sep works for any number of arguments — it goes between each pair. Predict the result before running.", code: "print(\"red\", \"green\", \"blue\", sep=\"/\")\n" },
    { note: "Use end=\"\" to build ONE line out of two prints. The first print stops without dropping down, so the second carries straight on.", code: "print(\"load\", end=\"\")\nprint(\"ing\")\n" },
    { note: "A practical use: build a date with a single separator. sep sits between the items, joining them with the dash you chose.", code: "print(2024, 11, 30, sep=\"-\")\n" },
  ],
  exercises: [
    { rung: 3, prompt: "Right now this prints the two words with a space between them: a b. Change just the separator so it prints a-b instead.", starter: "print(\"a\", \"b\")\n", check: { type: "output", value: "a-b" }, hints: ["The space between the two words is the separator. You want a dash there instead.", "sep changes what goes BETWEEN arguments; end would change what comes after them all — you want sep here.", "Add sep=\"-\" inside the brackets, after the two words."], solution: "print(\"a\", \"b\", sep=\"-\")\n" },
    { rung: 5, prompt: "Complete this line so it prints the three words on one line separated by slashes:\n\nred/green/blue\n\nThe separator has been left blank — fill it in. (As written, the line will not even run until you do.)", starter: "print(\"red\", \"green\", \"blue\", sep=)  # fill in the separator\n", check: { type: "output", value: "red/green/blue" }, hints: ["An empty sep= is not finished — Python needs a value after the equals sign, which is why it reports a SyntaxError.", "The value you want is the slash character as a string, so it needs quotes: \"/\".", "Fill it in: sep=\"/\"."], solution: "print(\"red\", \"green\", \"blue\", sep=\"/\")\n" },
    { rung: 6, prompt: "Starting from an empty editor, print these two pieces — loading and ... — so they end up on the SAME line, reading exactly:\n\nloading...\n\nUse two print instructions, and stop the first one from dropping to a new line.", starter: "", check: { type: "output", value: "loading..." }, hints: ["Normally each print starts a new line because its end is a newline. You want the first print to NOT drop down.", "Set the first print's end to an empty string, end=\"\", so the second print carries on right after it.", "First line: print(\"loading\", end=\"\"). Second line: print(\"...\")."], solution: "print(\"loading\", end=\"\")\nprint(\"...\")\n" },
  ],
  codex: { topic: "print options", pattern: "print(a, b, sep=\"-\", end=\"!\")", note: "A comma between arguments adds one space; sep changes that in-between text; end replaces the trailing newline." },
});
