/* Chapter 1, Lesson 1 — subsections in the content[] interleaved format.
   Each subsection interleaves prose, runnable examples, and exercises in the
   order a reader would encounter them in a textbook. */

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

window.CODELAB.lessons.push({
  id: "c1s2",
  chapter: 1,
  strand: "core",
  lang: "py",
  timeBudgetMin: 8,
  title: "Combining text",
  glossary: {
    concatenation: "Joining two strings end to end with +. \"foot\" + \"ball\" is \"football\". The + adds no space of its own, so add a \" \" yourself if you want a gap.",
  },
  content: [
    {
      type: "text",
      md: "You have printed single pieces of text; now combine them. The `+` operator performs [[concatenation]] — it glues two strings end to end into one longer string. `\"foot\" + \"ball\"` becomes `\"football\"`. Notice what `print(\"Code\" + \"Lab\")` shows:",
    },
    {
      type: "example",
      note: "+ joins the two strings exactly — no space appears between them. The join is character by character, nothing added.",
      code: "print(\"Code\" + \"Lab\")\n",
    },
    {
      type: "text",
      md: "There is no space because `+` gives you exactly what you hand it. If you want a gap, you add it yourself — a space in quotes is itself a piece of text you can join in.",
    },
    {
      type: "example",
      note: "A space in quotes is a valid string. Join it between the two words and you control exactly what appears.",
      code: "print(\"Code\" + \" \" + \"Lab\")\n",
    },
    {
      type: "text",
      md: "That is the key difference from the comma. A comma tells `print` to insert one space for you; `+` adds nothing of its own. `print(\"hot\", \"dog\")` shows `hot dog`, but `print(\"hot\" + \"dog\")` shows `hotdog`. Same two words, two different tools — and the choice is yours depending on whether you want spacing given to you or full control.",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "Right now this prints CodeLab, with the two words stuck together. Change it so it prints Code Lab with a space between — but do it by joining, not by adding a comma.",
      starter: "print(\"Code\" + \"Lab\")\n",
      check: { type: "output", expected: "Code Lab" },
      hints: [
        "+ glues the exact text with no gap. You have to add the gap yourself.",
        "A single space in quotes, \" \", is itself a string — join it in like any other piece.",
        "Join three pieces: the first word, a space, the second word: \"Code\" + \" \" + \"Lab\".",
      ],
      solution: "print(\"Code\" + \" \" + \"Lab\")\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "A student wanted hot dog — two words with a space — but got hotdog. The line runs without crashing, so there is no error message; the output is just wrong. Fix it so it prints hot dog.",
      starter: "print(\"hot\" + \"dog\")\n",
      check: { type: "output", expected: "hot dog" },
      hints: [
        "Read the output, not an error: the words ran together because + joins with no space.",
        "Two clean fixes: a comma inserts one space for you, or join a \" \" in the middle yourself.",
        "The tidiest fix: print(\"hot\", \"dog\") — the comma adds the space.",
      ],
      solution: "print(\"hot\", \"dog\")\n",
    },
    {
      type: "text",
      md: "The second operator is `*`. Placed between a string and a whole number, it repeats that string that many times: `\"ab\" * 3` gives `\"ababab\"`, and `\"-\" * 10` gives a row of ten dashes without typing them one by one.",
    },
    {
      type: "example",
      note: "* repeats a string a whole number of times. Predict the output before you run.",
      code: "print(\"ab\" * 3)\n",
    },
    {
      type: "text",
      md: "You can combine `+` and `*` in one expression. Python works out `*` first, then `+` — the same rule as in math: multiply before you add. So repetitions are done first, then the pieces are joined.",
    },
    {
      type: "example",
      note: "Python repeats Ho three times first, then glues the ! on the end. Work through the order before running.",
      code: "print(\"Ho\" * 3 + \"!\")\n",
    },
    {
      type: "example",
      note: "Three = signs, a space-padded label, then three more = signs — a title bar built from two operators.",
      code: "print(\"=\" * 3 + \" MENU \" + \"=\" * 3)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Starting from an empty editor, build a name banner. Print three lines: a row of exactly ten dashes, then Hi, Sam!, then another row of ten dashes:\n\n----------\nHi, Sam!\n----------\n\nUse * to make the dash rows instead of typing ten dashes by hand.",
      starter: "",
      check: { type: "output", expected: "----------\nHi, Sam!\n----------" },
      hints: [
        "To make ten dashes in one go, repeat the dash character: \"-\" * 10.",
        "The middle line is ordinary text in quotes: \"Hi, Sam!\".",
        "Three prints: a dash row, the greeting, then the same dash row again.",
      ],
      solution: "print(\"-\" * 10)\nprint(\"Hi, Sam!\")\nprint(\"-\" * 10)\n",
    },
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
  glossary: {
    comment: "Text after a # that Python ignores. A note for the people reading the code; it never runs.",
  },
  content: [
    {
      type: "text",
      md: "Code is read by people as well as by Python, and sometimes you want to leave a note for the people. That is what a [[comment]] is for. A comment starts with a `#` and continues to the end of that line. Python skips everything after the `#` and never tries to run it.",
    },
    {
      type: "example",
      note: "A full-line comment sits above the code it describes. The note is for you; Python runs only the print statement.",
      code: "# This program greets you\nprint(\"Hi\")\n",
    },
    {
      type: "text",
      md: "A comment does not have to stand alone on its own line. It can ride at the end of a code line — everything after the `#` is ignored, so the code before it still runs normally.",
    },
    {
      type: "example",
      note: "An inline comment follows the code on the same line. The print runs; the words after # do not.",
      code: "print(\"Go\")  # this part is ignored\n",
    },
    {
      type: "text",
      md: "Because Python ignores whatever follows `#`, you can also use it to switch off a real line of code. Put a `#` in front and Python skips the whole line, so you can turn it off without deleting it. This is a standard debugging move: silence one line to see what the rest of your program does without it, then remove the `#` to bring it back.",
    },
    {
      type: "example",
      note: "A # at the start of a line converts it into a comment. The first line does not run; only the second prints.",
      code: "# print(\"secret\")\nprint(\"shown\")\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Read this carefully and predict exactly what it prints. Two of these three lines do nothing at all — find them before you run.",
      starter: "# print(\"one\")\nprint(\"two\")  # print three\nprint(\"three\")\n",
      check: { type: "output", expected: "two\nthree" },
      hints: [
        "A line that begins with # never runs — the first line prints nothing.",
        "On the second line, everything after the # is ignored. 'print three' is just a label.",
        "That leaves two lines that actually run: the ones that print two and three.",
      ],
      solution: "# print(\"one\")\nprint(\"two\")  # print three\nprint(\"three\")\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "This line works, but a reader cannot tell why it is here. Add an inline comment at the end — a # followed by a short note. The output must not change: it should still print exactly Go.",
      starter: "print(\"Go\")\n",
      check: { type: "output", expected: "Go" },
      hints: [
        "Leave the print as it is, then add your note after it on the same line.",
        "Start the note with a #. Everything after # is ignored, so it cannot change the output.",
        "For example: print(\"Go\")  # start the race. The exact words are up to you.",
      ],
      solution: "print(\"Go\")  # greet the player\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This program should print two lines — Welcome, then keep — but it only prints one. A line was commented out by accident. Fix it so both lines print.",
      starter: "# print(\"Welcome\")\nprint(\"keep\")\n",
      check: { type: "output", expected: "Welcome\nkeep" },
      hints: [
        "Run it: only keep prints. Look at the line above.",
        "The first line starts with #, so Python treats the whole thing as a note and skips it.",
        "Remove the # (and the space after it) so it becomes real code again: print(\"Welcome\").",
      ],
      solution: "print(\"Welcome\")\nprint(\"keep\")\n",
    },
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
  glossary: {
    separator: "What print puts BETWEEN its arguments, written sep=. The default is a single space.",
    end: "What print puts AFTER its output, written end=. The default is a newline, which is why each print starts a fresh line.",
  },
  content: [
    {
      type: "text",
      md: "When you give `print` several arguments separated by commas, it joins them with a single space by default — that is why `print(\"a\", \"b\")` shows `a b`. You can replace that in-between text using the `sep` ([[separator]]) option. Write it as `sep=\"your text\"` inside the parentheses after your arguments.",
    },
    {
      type: "example",
      note: "sep replaces the default space between arguments. Here a dash appears between a and b instead of a space.",
      code: "print(\"a\", \"b\", sep=\"-\")\n",
    },
    {
      type: "example",
      note: "sep applies between every pair of arguments, no matter how many there are. Predict the output before running.",
      code: "print(\"red\", \"green\", \"blue\", sep=\"/\")\n",
    },
    {
      type: "example",
      note: "A practical use: three numbers joined with a dash to form a date. sep does the joining so you don't need + at all.",
      code: "print(2024, 11, 30, sep=\"-\")\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "Right now this prints a b with a space between them. Change just the separator so it prints a-b instead.",
      starter: "print(\"a\", \"b\")\n",
      check: { type: "output", expected: "a-b" },
      hints: [
        "The space between the words is the separator. You want a dash there instead.",
        "sep changes what goes BETWEEN arguments. Add it after the last argument.",
        "Add sep=\"-\" inside the brackets after the two words.",
      ],
      solution: "print(\"a\", \"b\", sep=\"-\")\n",
    },
    {
      type: "text",
      md: "The `end` option controls what `print` puts *after* all its output. By default `end` is a newline — the invisible character that moves to the next line. That is why each `print` call starts fresh below the last. Set `end` to something else and the next `print` picks up right where this one stopped.",
    },
    {
      type: "example",
      note: "end replaces the trailing newline with whatever you choose. Here the first print ends with ! and the next one starts on the same line.",
      code: "print(\"done\", end=\"!\")\nprint(\"next\")\n",
    },
    {
      type: "example",
      note: "Setting end to an empty string removes the newline entirely. The second print continues right after the first, on the same line.",
      code: "print(\"load\", end=\"\")\nprint(\"ing\")\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete this line so it prints the three colours on one line separated by slashes:\n\nred/green/blue\n\nThe sep value has been left blank — fill it in. As written, the line will not run until you do.",
      starter: "print(\"red\", \"green\", \"blue\", sep=)  # fill in the separator\n",
      check: { type: "output", expected: "red/green/blue" },
      hints: [
        "An empty sep= is unfinished — Python needs a value after the = sign.",
        "The value is the slash character as a string, so it needs quotes: \"/\".",
        "Fill it in: sep=\"/\".",
      ],
      solution: "print(\"red\", \"green\", \"blue\", sep=\"/\")\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Starting from an empty editor, print loading and ... so they appear on the SAME line:\n\nloading...\n\nUse two print statements. Stop the first one from dropping to a new line.",
      starter: "",
      check: { type: "output", expected: "loading..." },
      hints: [
        "Each print normally drops to a new line because its end is a newline. You want the first one to not drop down.",
        "Set the first print's end to an empty string so the second carries straight on after it.",
        "First line: print(\"loading\", end=\"\"). Second line: print(\"...\").",
      ],
      solution: "print(\"loading\", end=\"\")\nprint(\"...\")\n",
    },
  ],
  codex: { topic: "print options", pattern: "print(a, b, sep=\"-\", end=\"!\")", note: "sep changes the text between arguments (default: one space); end changes the text after all output (default: newline)." },
});

/* TEMPORARY — JS runtime browser test. Delete after verification. */
window.CODELAB.lessons.push({
  id: "js-test",
  chapter: 1,
  strand: "core",
  lang: "js",
  timeBudgetMin: 5,
  title: "JS runtime test",
  content: [
    { type: "text", md: "This section tests the JavaScript runtime. Run each example and check the output." },
    { type: "example", intro: "console.log prints to output:", code: "console.log(\"hello from JS\");\nconsole.log(1 + 2);" },
    { type: "exercise", rung: 3,
      prompt: "Print the number 99 using console.log.",
      starter: "// your code here",
      hints: ["Type: console.log(99)"],
      solution: "console.log(99);",
      check: { type: "output", expected: "99" } },
    { type: "example", intro: "play() works the same as in Python:", code: "play(60);\nsleep(0.5);\nplay(64);" },
    { type: "exercise", rung: 3,
      prompt: "Play note 67 (a G).",
      starter: "// your code here",
      hints: ["Type: play(67)"],
      solution: "play(67);",
      check: { type: "calls", calls: [{ t: 0, fn: "play", args: [67] }] } },
  ],
  codex: { topic: "JS output", pattern: "console.log(value)", note: "Prints a value in JavaScript." },
});

/* TEMPORARY — Parsons drag UI test. Delete after verification. */
window.CODELAB.lessons.push({
  id: "parsons-test",
  chapter: 1,
  strand: "core",
  lang: "py",
  timeBudgetMin: 5,
  title: "Parsons drag test",
  content: [
    { type: "text", md: "Put the lines in the right order to print Hello World." },
    { type: "exercise",
      rung: 2,
      prompt: "Arrange these lines to print 'Hello' then 'World'.",
      starter: "",
      hints: ["print Hello first, then World."],
      solution: "print(\"Hello\")\nprint(\"World\")\n",
      check: { type: "parsons", lines: ["print(\"Hello\")", "print(\"World\")"] } },
  ],
  codex: { topic: "arrange", pattern: "print()", note: "Prints in order." },
});
