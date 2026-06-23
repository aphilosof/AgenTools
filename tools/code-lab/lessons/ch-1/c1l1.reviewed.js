window.CODELAB.lessons.push({
  id: "c1l1",
  chapter: 1,
  lessonNo: 1,
  title: "Output and print",
  lang: "py",
  strand: "core",
  concepts: ["print", "output", "string-literal", "expression-as-arg", "string-concat", "string-repeat", "comment", "sep", "end"],
  recalls: [],
  timeBudgetMin: 22,

  warmup: {
    md: "In Chapter 0 you broke everyday tasks — making toast, brushing teeth — into a sequence of exact steps, with nothing left to guess. A computer needs that same care: it does exactly what you say, in order, and nothing more. So here is the question this lesson answers: if a program is just a list of exact instructions, how does it ever *show* you anything? Nothing appears until one particular instruction puts it there — and that is where we start."
  },

  subsections: [

    // ── S1 ─────────────────────────────────────────────────────────────────
    {
      title: "print shows output",
      concept: {
        md: "A program shows you nothing until you ask it to. `print` is the instruction that asks. It takes whatever sits inside its brackets — its [[argument]] — and displays it on the screen. To print a piece of text, you wrap that text in quotation marks, which makes it a [[string]]. The quotes only mark where the text starts and ends; they are **never shown** in the output. So `print(\"Hello!\")` displays `Hello!`, with no quotes around it.\n\nEach `print` writes its own line, so several prints stack up in the order you wrote them. You can also hand `print` more than one argument by separating them with commas, and it places a single space between them. The brackets do not have to hold plain text, either — they can hold a small calculation, and `print` shows the **result** of that calculation, not the calculation itself. That is worth holding on to: `print` works out what is inside the brackets first, then shows the answer.\n\n{{more:Single or double quotes?|Python accepts both `'hi'` and `\"hi\"` — they mean exactly the same thing. Pick one kind so the other can appear *inside* your text: writing `\"it's fine\"` with double quotes lets the apostrophe sit happily in the middle.}}"
      },
      examples: [
        {
          note: "The simplest program that does anything visible. The quotes mark the text but do not appear in the output.",
          code: "print(\"Hello!\")\n",
          expect: { type: "output", value: "Hello!" }
        },
        {
          note: "Each print writes its own line, so two prints stack in the order you wrote them. Predict the two lines before you run it.",
          code: "print(\"Code\")\nprint(\"Lab\")\n",
          expect: { type: "output", value: "Code\nLab" }
        },
        {
          note: "One print can take several arguments separated by commas, and it puts a single space between them. (The 42 here is a number, not text — print can show a number too. The difference between a number and text comes next lesson.)",
          code: "print(\"The answer is\", 42)\n",
          expect: { type: "output", value: "The answer is 42" }
        },
        {
          note: "The brackets can hold a calculation. print works out what is inside first, then shows the answer — so this prints 5, not the words 2 + 3. With quotes, print(\"2 + 3\") would show the words instead.",
          code: "print(2 + 3)\n",
          expect: { type: "output", value: "5" }
        },
        {
          note: "A label and a calculation in one print. The text comes first, then the result of 7 * 3, with one space between them from the comma.",
          code: "print(\"Score:\", 7 * 3)\n",
          expect: { type: "output", value: "Score: 21" }
        }
      ],
      exercises: [
        {
          rung: 1,
          scaffold: "boilerplate",
          debug: false,
          prompt: "Before you run this, predict exactly what it prints — including the spacing. Two words go into one print, separated by a comma. Write down your guess, then run it to check.",
          starter: "print(\"Code\", \"Lab\")\n",
          starterExpectation: "runs-clean",
          check: { type: "output", value: "Code Lab" },
          hints: [
            "There are two arguments, separated by a comma. What does print put between them?",
            "The comma makes print put one space between the two words when they appear.",
            "The quotation marks are not part of what shows — only the text inside them appears, with a single space between the two words."
          ],
          misconceptions: ["quotes-in-output"],
          solution: "print(\"Code\", \"Lab\")\n"
        },
        {
          rung: 3,
          scaffold: "boilerplate",
          debug: false,
          prompt: "Right now this prints only the word Code on its own. Change it so one print shows Code Lab on a single line, with a space between the two words. Add the second word as another argument, separated by a comma — let the comma supply the space.",
          starter: "print(\"Code\")\n",
          starterExpectation: "runs-clean",
          check: { type: "output", value: "Code Lab" },
          hints: [
            "You want a second word in the same print. Extra arguments go after a comma, inside the brackets.",
            "The comma does more than separate — it tells print to drop one space between the two words for you, so you do not type the space yourself.",
            "Add the second word as its own argument: print(\"Code\", \"Lab\")."
          ],
          misconceptions: ["comma-vs-plus"],
          solution: "print(\"Code\", \"Lab\")\n"
        },
        {
          rung: 4,
          scaffold: "stub",
          debug: true,
          prompt: "This program crashes instead of printing. Read the real error first, then fix it so it prints the word Hello.",
          starter: "print(Hello)\n",
          starterExpectation: "raises:NameError",
          check: { type: "output", value: "Hello" },
          hints: [
            "Read the real error: NameError: name 'Hello' is not defined. Without quotes, Python read Hello as an instruction to carry out, not as text to show.",
            "Text you want printed has to sit inside quotation marks.",
            "Wrap the word in quotes: print(\"Hello\")."
          ],
          misconceptions: ["unquoted-word-as-text"],
          solution: "print(\"Hello\")\n",
          errorClasses: ["NameError"]
        },
        {
          rung: 5,
          scaffold: "stub",
          debug: false,
          prompt: "Finish this line so it prints a label next to a number on one line, reading exactly:\n\nPoints: 50\n\nThe number is missing — add it. Use one print with a comma so the label and the number share a line with one space between them. (The 50 takes no quotes: it is a number, like the 42 you saw earlier, not text.)",
          starter: "print(\"Points:\")  # add the number as a second argument\n",
          starterExpectation: "runs-clean",
          check: { type: "output", value: "Points: 50" },
          hints: [
            "Right now there is only one argument, so only the label prints. You need a second argument after a comma.",
            "The value you want is the plain number 50. Numbers are not text, so they need no quotes — just type 50.",
            "Add it as its own argument: print(\"Points:\", 50). The comma adds the one space between the label and the value."
          ],
          misconceptions: ["comma-vs-plus"],
          solution: "print(\"Points:\", 50)\n"
        },
        {
          rung: 5,
          scaffold: "blank",
          debug: false,
          prompt: "Starting from an empty editor, write a program that prints exactly these two lines:\n\nReady to code\nLet's go\n\nThe second line has an apostrophe in it — choose your quotes so that apostrophe does not end the text early.",
          starter: "",
          starterExpectation: "runs-clean",
          check: { type: "output", value: "Ready to code\nLet's go" },
          hints: [
            "Two separate lines means two separate print instructions, one under the other.",
            "Let's has an apostrophe inside it. If you wrap that text in double quotes, the apostrophe sits safely in the middle: \"Let's go\".",
            "Two prints: print(\"Ready to code\") on the first line, print(\"Let's go\") on the second."
          ],
          misconceptions: ["quotes-in-output"],
          solution: "print(\"Ready to code\")\nprint(\"Let's go\")\n"
        }
      ]
    },

    // ── S2 ─────────────────────────────────────────────────────────────────
    {
      title: "Combining text: + to join, * to repeat",
      concept: {
        md: "You have printed single pieces of text; now combine them. Two operators do this. The first is `+`, which performs [[concatenation]] — it glues two strings end to end into one longer string. So `\"foot\" + \"ball\"` is `\"football\"`, and `print(\"Code\" + \"Lab\")` shows `CodeLab`. Look closely: there is **no space**. The `+` joins exactly the characters you give it and nothing more, so if you want a gap you add it yourself as a space inside quotes: `\"Code\" + \" \" + \"Lab\"` shows `Code Lab`.\n\nThat is the key difference from the comma you met a moment ago. A comma between two arguments tells `print` to insert one space for you, while `+` glues with none. Side by side: `print(\"hot\", \"dog\")` shows `hot dog`, but `print(\"hot\" + \"dog\")` shows `hotdog`. Same two words, two different tools.\n\nThe second operator is `*`. Placed between a piece of text and a whole number, it **repeats** that text: `\"ab\" * 3` is `\"ababab\"`, and `\"-\" * 10` is a row of ten dashes — a quick way to draw a divider line without typing every character. You can even combine the two operators: `\"=\" * 3 + \" MENU \" + \"=\" * 3` builds a little title bar, `=== MENU ===`.\n\n{{more:Why does + add no space when a comma does?|+ is literal — it joins the exact characters in each string and adds nothing of its own. The comma is print's own helper, and one of its jobs is to drop a single space between arguments. Two different tools: reach for the comma when you want spacing for free, and + when you want to control every character yourself.}}"
      },
      examples: [
        {
          note: "+ glues two strings end to end. The join is exact — no space appears between the words.",
          code: "print(\"Code\" + \"Lab\")\n",
          expect: { type: "output", value: "CodeLab" }
        },
        {
          note: "Want a gap? Add it yourself. A single space inside quotes is itself a piece of text you can join in.",
          code: "print(\"Code\" + \" \" + \"Lab\")\n",
          expect: { type: "output", value: "Code Lab" }
        },
        {
          note: "* repeats a piece of text a whole number of times. Predict the output before running.",
          code: "print(\"ab\" * 3)\n",
          expect: { type: "output", value: "ababab" }
        },
        {
          note: "A mix of both operators. Python builds the repeated HoHoHo first, then glues the ! on the end — so you get a triple Ho with a single ! after it.",
          code: "print(\"Ho\" * 3 + \"!\")\n",
          expect: { type: "output", value: "HoHoHo!" }
        },
        {
          note: "Repeat and join together to build a title bar: three = signs, then \" MENU \", then three more = signs.",
          code: "print(\"=\" * 3 + \" MENU \" + \"=\" * 3)\n",
          expect: { type: "output", value: "=== MENU ===" }
        }
      ],
      exercises: [
        {
          rung: 2,
          scaffold: "boilerplate",
          debug: false,
          prompt: "Arrange these lines so the program prints a row of twelve = signs, then the word MENU on its own line, then another row of twelve = signs. Drag the correct lines into order; some lines are wrong and should be left out.",
          starter: "",
          starterExpectation: "runs-clean",
          check: {
            type: "parsons",
            value: ["print(\"=\" * 12)", "print(\"MENU\")", "print(\"=\" * 12)"],
            distractors: ["print(\"=\" + 12)", "print(MENU)"]
          },
          hints: [
            "To make twelve = signs without typing them all, repeat the character: \"=\" * 12.",
            "MENU is text you want shown, so it has to sit inside quotes: print(\"MENU\").",
            "The two = rows are identical — the same line goes at the top and the bottom, with the MENU line between them."
          ],
          solution: "print(\"=\" * 12)\nprint(\"MENU\")\nprint(\"=\" * 12)\n"
        },
        {
          rung: 3,
          scaffold: "boilerplate",
          debug: false,
          prompt: "Right now this prints CodeLab, with the two words stuck together. Change it so it prints Code Lab with a space between — but do it by joining, not by adding a comma.",
          starter: "print(\"Code\" + \"Lab\")\n",
          starterExpectation: "runs-clean",
          check: { type: "output", value: "Code Lab" },
          hints: [
            "+ glues the exact text together with no gap, which is why the words ran into each other. You have to add the gap yourself.",
            "A single space inside quotes, \" \", is itself a piece of text — you can join it in like any other string.",
            "Join three pieces: the first word, a space, the second word: \"Code\" + \" \" + \"Lab\"."
          ],
          misconceptions: ["join-needs-space"],
          solution: "print(\"Code\" + \" \" + \"Lab\")\n"
        },
        {
          rung: 4,
          scaffold: "stub",
          debug: true,
          prompt: "A student wanted hot dog — two words with a single space — but got hotdog instead. Here is their line. It runs without crashing, so there is no error message to read; the output is just wrong. Fix it so it prints hot dog.",
          starter: "print(\"hot\" + \"dog\")\n",
          starterExpectation: "runs-clean",
          check: { type: "output", value: "hot dog" },
          hints: [
            "Nothing crashed, so read the output, not an error: the two words ran together because + joins with no space.",
            "You have two clean ways to add the space: a comma between two arguments inserts one space for you, or you can join a \" \" in the middle yourself.",
            "The tidiest fix is print(\"hot\", \"dog\") — the comma adds the space. (Joining the space, print(\"hot\" + \" \" + \"dog\"), works just as well.)"
          ],
          misconceptions: ["comma-vs-plus"],
          solution: "print(\"hot\", \"dog\")\n"
        },
        {
          rung: 6,
          scaffold: "blank",
          debug: false,
          prompt: "Starting from an empty editor, build a name banner. Print three lines: a row of exactly ten dashes, then Hi, Sam!, then another row of exactly ten dashes, reading:\n\n----------\nHi, Sam!\n----------\n\nUse * to make the dash rows instead of typing ten dashes by hand.",
          starter: "",
          starterExpectation: "runs-clean",
          check: { type: "output", value: "----------\nHi, Sam!\n----------" },
          hints: [
            "To make ten dashes in one go, repeat the dash: \"-\" * 10.",
            "The middle line is just ordinary text in quotes, nothing special: \"Hi, Sam!\".",
            "Three prints, top to bottom: a dash row, the greeting, then the same dash row again."
          ],
          solution: "print(\"-\" * 10)\nprint(\"Hi, Sam!\")\nprint(\"-\" * 10)\n"
        }
      ]
    },

    // ── S3 ─────────────────────────────────────────────────────────────────
    {
      title: "Comments: notes Python ignores",
      concept: {
        md: "Code is read by people as well as by Python, and sometimes you want to leave a note for the people. That is what a [[comment]] is for. A comment starts with a `#` and runs to the end of that line; Python skips everything after the `#` and never tries to run it.\n\nA comment can sit on its own line, above the code it explains, or it can ride at the end of a line of code — that second kind is called an *inline* comment. Because Python ignores whatever follows the `#`, you can also \"comment out\" a real line of code: put a `#` in front of it and Python will skip the line, which lets you switch it off without deleting it. That is a handy debugging move — turn one line off for a moment to see what the rest of your program does without it, then take the `#` back off. Comments change nothing about what your program does; they only change how easy it is for a human to read."
      },
      examples: [
        {
          note: "A full-line comment above the code. The note is for you; Python runs only the print.",
          code: "# This program greets you\nprint(\"Hi\")\n",
          expect: { type: "output", value: "Hi" }
        },
        {
          note: "An inline comment rides at the end of a code line. Everything after the # is ignored.",
          code: "print(\"Go\")  # this part is ignored\n",
          expect: { type: "output", value: "Go" }
        },
        {
          note: "Putting a # in front of a real line switches it off without deleting it. The first line does not run; only the second prints.",
          code: "# print(\"secret\")\nprint(\"shown\")\n",
          expect: { type: "output", value: "shown" }
        }
      ],
      exercises: [
        {
          rung: 1,
          scaffold: "boilerplate",
          debug: false,
          prompt: "Read this carefully and predict exactly what it prints. Two of these lines do nothing — find them before you run it.",
          starter: "# print(\"one\")\nprint(\"two\")  # print three\nprint(\"three\")\n",
          starterExpectation: "runs-clean",
          check: { type: "output", value: "two\nthree" },
          hints: [
            "A line that begins with # never runs, so the first line prints nothing.",
            "On the second line, everything after the # is ignored — the words print three are just a note, not a command.",
            "That leaves two lines that actually print: two, then three."
          ],
          misconceptions: ["comment-runs"],
          solution: "# print(\"one\")\nprint(\"two\")  # print three\nprint(\"three\")\n"
        },
        {
          rung: 3,
          scaffold: "boilerplate",
          debug: false,
          prompt: "This line works, but a reader cannot tell why it is here. Add an inline comment at the end of the line — a # followed by a short note saying what the line does, such as # greet the player. The output must not change: it should still print exactly Go.",
          starter: "print(\"Go\")\n",
          starterExpectation: "runs-clean",
          check: { type: "output", value: "Go" },
          hints: [
            "An inline comment rides at the end of the code line: leave the print as it is, then add your note after it.",
            "Start the note with a #. Everything after the # is ignored by Python, so it cannot change the output — the line still prints Go.",
            "For example: print(\"Go\")  # greet the player. The exact words of the note are up to you."
          ],
          misconceptions: ["comment-runs"],
          solution: "print(\"Go\")  # greet the player\n"
        },
        {
          rung: 4,
          scaffold: "stub",
          debug: true,
          prompt: "This program is supposed to print two lines — Welcome, then keep — but it only prints one. Someone commented out a line by accident. Fix it so both lines print.",
          starter: "# print(\"Welcome\")\nprint(\"keep\")\n",
          starterExpectation: "runs-clean",
          check: { type: "output", value: "Welcome\nkeep" },
          hints: [
            "Run it: only keep prints. Look at the line above it.",
            "The first line starts with #, so Python treats the whole line as a note and skips it.",
            "Remove the # (and the space after it) so the line becomes real code again: print(\"Welcome\")."
          ],
          misconceptions: ["comment-runs"],
          solution: "print(\"Welcome\")\nprint(\"keep\")\n"
        }
      ]
    },

    // ── S4 ─────────────────────────────────────────────────────────────────
    {
      title: "Shaping output: sep and end",
      concept: {
        md: "When you give `print` several arguments, it joins them with one space by default — that is why `print(\"a\", \"b\")` shows `a b`, and (tying back to the last subsection) why a comma behaves differently from `+`. You can change that in-between text with [[separator]] (`sep`), and you can change the text printed *after* everything with [[end]].\n\nBy default `end` is a newline — the invisible character that drops down to the next line. That newline is the reason each `print` starts fresh below the last one. If you set `end` to something else — even an empty `\"\"` — then the next `print` carries on right where this one stopped, so two prints can share a line. You write both of these as `name=value` inside the brackets, like `sep=\"-\"`. Unlike the plain arguments you separate with commas, this kind has a *name* (`sep`, `end`) and an `=`, so Python knows which setting you mean rather than just one more thing to print — that named style is called a **keyword argument**, and you will meet many more of them later. For now, just remember: `sep` goes *between* the things, and `end` goes *after* them all."
      },
      examples: [
        {
          note: "sep is the text print puts BETWEEN arguments. Here it becomes a dash instead of the usual space.",
          code: "print(\"a\", \"b\", sep=\"-\")\n",
          expect: { type: "output", value: "a-b" }
        },
        {
          note: "end is the text print puts AFTER everything. Setting it to \"!\" instead of a newline means the next print starts on the same line.",
          code: "print(\"done\", end=\"!\")\nprint(\"next\")\n",
          expect: { type: "output", value: "done!next" }
        },
        {
          note: "sep works for any number of arguments — it goes between each pair. Predict the result before running.",
          code: "print(\"red\", \"green\", \"blue\", sep=\"/\")\n",
          expect: { type: "output", value: "red/green/blue" }
        },
        {
          note: "Use end=\"\" to build ONE line out of two prints. The first print stops without dropping down, so the second carries straight on — load then ing land side by side as loading.",
          code: "print(\"load\", end=\"\")\nprint(\"ing\")\n",
          expect: { type: "output", value: "loading" }
        },
        {
          note: "A practical use: build a date with a single separator. sep sits between whatever you print, joining the items with the dash you chose.",
          code: "print(2024, 11, 30, sep=\"-\")\n",
          expect: { type: "output", value: "2024-11-30" }
        }
      ],
      exercises: [
        {
          rung: 3,
          scaffold: "boilerplate",
          debug: false,
          prompt: "Right now this prints the two words with a space between them: a b. Change just the separator so it prints a-b instead.",
          starter: "print(\"a\", \"b\")\n",
          starterExpectation: "runs-clean",
          check: { type: "output", value: "a-b" },
          hints: [
            "The space between the two words is the separator. You want a dash there instead.",
            "sep changes what goes BETWEEN arguments; end would change what comes after them all — you want sep here.",
            "Add sep=\"-\" inside the brackets, after the two words."
          ],
          misconceptions: ["sep-vs-end"],
          solution: "print(\"a\", \"b\", sep=\"-\")\n"
        },
        {
          rung: 5,
          scaffold: "stub",
          debug: false,
          prompt: "Complete this line so it prints the three words on one line separated by slashes:\n\nred/green/blue\n\nThe separator has been left blank — fill it in. (As written, the line will not even run until you do.)",
          starter: "print(\"red\", \"green\", \"blue\", sep=)  # fill in the separator\n",
          starterExpectation: "raises:SyntaxError",
          check: { type: "output", value: "red/green/blue" },
          hints: [
            "An empty sep= is not finished — Python needs a value after the equals sign, which is why it reports a SyntaxError.",
            "The value you want is the slash character as a string, so it needs quotes: \"/\".",
            "Fill it in: sep=\"/\"."
          ],
          misconceptions: ["sep-vs-end"],
          solution: "print(\"red\", \"green\", \"blue\", sep=\"/\")\n",
          errorClasses: ["SyntaxError"]
        },
        {
          rung: 6,
          scaffold: "blank",
          debug: false,
          prompt: "Starting from an empty editor, print these two pieces — loading and ... — so they end up on the SAME line, reading exactly:\n\nloading...\n\nUse two print instructions, and stop the first one from dropping to a new line.",
          starter: "",
          starterExpectation: "runs-clean",
          check: { type: "output", value: "loading..." },
          hints: [
            "Normally each print starts a new line because its end is a newline. You want the first print to NOT drop down.",
            "Set the first print's end to an empty string, end=\"\", so the second print carries on right after it.",
            "First line: print(\"loading\", end=\"\"). Second line: print(\"...\")."
          ],
          misconceptions: ["sep-vs-end"],
          solution: "print(\"loading\", end=\"\")\nprint(\"...\")\n"
        }
      ]
    }

  ],

  recap: {
    md: "- `print` is the instruction that shows output; nothing appears on screen until you ask for it.\n- Text to be printed goes inside quotation marks — the quotes mark where the text starts and ends and are never shown.\n- Giving `print` several arguments separated by commas prints them with one space between by default.\n- The brackets can hold a calculation; `print` shows its **result** (`print(2 + 3)` → `5`), not the text of the sum.\n- `+` glues two strings end to end with **no** space, so you add a `\" \"` yourself if you want a gap; `*` repeats a string a whole number of times (`\"-\" * 10` is ten dashes). This is [[concatenation]] and repetition.\n- A comma between arguments adds one space; `+` adds none — same words, two different tools.\n- A `#` starts a [[comment]] that runs to the end of the line; Python ignores it, so comments are notes for people and can switch a line off.\n- `sep` changes what goes **between** arguments; `end` changes what goes **after** them (it is a newline by default, which is why prints normally stack).",
    mistakes: [
      "Expecting the quotation marks to appear in the output — they only mark where the text starts and ends.",
      "Writing a word without quotes, like print(Hello), so Python reads it as an instruction and raises a NameError instead of showing the word.",
      "Expecting + to add a space the way a comma does — + glues with no space, so you must add a \" \" yourself.",
      "Forgetting the brackets on print, or leaving a keyword argument like sep= empty, so the line will not run.",
      "Mixing up sep and end: sep goes between the arguments, end goes after them all."
    ]
  },

  glossary: {
    argument: "The value you place inside a function's brackets — what the function works on. In print(\"hi\") the argument is \"hi\".",
    string: "Text: a row of characters inside quotes, single or double. The quotes mark where it starts and ends and are not part of the value. (Python's name for this type, str, arrives next lesson.)",
    concatenation: "Joining two strings end to end with +. \"foot\" + \"ball\" is \"football\". The + adds no space of its own, so add a \" \" yourself if you want a gap.",
    comment: "Text after a # that Python ignores. A note for the people reading the code; it never runs.",
    separator: "What print puts BETWEEN its arguments, written sep=. The default is a single space.",
    end: "What print puts AFTER its output, written end=. The default is a newline, which is why each print starts a fresh line."
  },

  codex: [
    { topic: "printing", pattern: "print(\"text\")", note: "Displays its argument on the screen. One print writes one line; the quotes are not shown. The brackets can also hold a calculation, and print shows the result." },
    { topic: "combining text", pattern: "\"a\" + \"b\"   \"ab\" * 3", note: "+ joins two pieces of text end to end with no space added; * repeats a piece of text a whole number of times. Add a \" \" yourself if you want a gap." },
    { topic: "print options", pattern: "print(a, b, sep=\"-\", end=\"!\")", note: "A comma between arguments adds one space; sep changes that in-between text; end replaces the trailing newline." },
    { topic: "comments", pattern: "# a note Python ignores", note: "Everything after # on a line is skipped. Use it for notes, or to temporarily switch off a line of code." }
  ],

  errorClasses: ["NameError", "SyntaxError"],
  styleRequired: false
});
