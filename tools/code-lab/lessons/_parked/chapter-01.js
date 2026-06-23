/* Chapter 1 — Python: First Words (PLAN §4).
   Sequence follows the "How to Think Like a Computer Scientist" tradition:
   print, then values and types, then variables, then expressions/maths, then
   strings, then the turtle and sound exercises. input() arrives once the
   worker gains stdin. Each lesson teaches the idea (grade 6-7, multi-paragraph),
   shows a runnable worked example, then sets a challenge. Every solution is
   executed and graded by the harness. */

window.CODELAB.lessons.push({
  id: "w1l1",
  chapter: 1,
  title: "Telling the Computer to Speak",
  lang: "py",
  strand: "words",
  rung: 5,
  concepts: ["print", "output"],
  misconceptions: [],
  warmup: [],
  timeBudgetMin: 15,
  explain:
    "A program does nothing you can see until you tell it to. `print` is the command for that: it takes whatever you put between its brackets and displays it on the screen. The thing inside the brackets is called the [[argument]] — it is what print works on.\n\n" +
    "Text has to sit inside quotation marks, like `\"hello\"` — that makes it a [[string]]. The quotes tell Python this is text to show, not a command to run. They are never displayed themselves; they only mark where the text starts and ends. Each print writes its own line, so using print several times stacks the lines up in order.",
  glossary: {
    argument: "The value you put inside a function's brackets — what the function works on. In print(\"hi\"), the argument is \"hi\".",
    string: "Text — a row of characters inside quotes. Its Python type is str.",
  },
  moreInfo: [
    { label: "Single or double quotes?", body: "Python accepts both 'hi' and \"hi\" — they work the same. Use one kind so you can include the other inside: \"it's fine\" or 'she said \"hi\"'." },
  ],
  example: 'print("Hello, world!")\nprint("I am learning to code.")\n',
  exampleNote:
    "Run this to see two lines appear — each print writes its own line.",
  task: "Make the program print these two lines, exactly:\nReady to code\nLet's go",
  starter: "",
  starterExpectation: "runs-clean",
  check: { type: "output", expected: "Ready to code\nLet's go" },
  hints: [
    "You need two separate print commands, one for each line.",
    "Each piece of text goes inside quotation marks, like print(\"Ready to code\").",
    "Write print(\"Ready to code\") on the first line and print(\"Let's go\") on the second.",
  ],
  solution: 'print("Ready to code")\nprint("Let\'s go")\n',
  codex: { topic: "printing", pattern: 'print("text")', note: "Displays its argument on the screen. One print writes one line." },
  styleRequired: false,
});

window.CODELAB.lessons.push({
  id: "w1l2",
  chapter: 1,
  title: "Values and Types",
  lang: "py",
  strand: "numbers",
  rung: 5,
  concepts: ["types", "int", "str"],
  misconceptions: ["string-vs-number"],
  warmup: [],
  timeBudgetMin: 20,
  explain:
    "Every piece of data in a program is a value, and every value has a type. The type tells Python what kind of thing it is and what you are allowed to do with it. Three types matter most at the start. A whole number like 7 is an int, short for integer. A number with a decimal point like 3.5 is a float. Text like \"hello\" is a str, short for string, and it always sits inside quotation marks.\n\n" +
    "The quotation marks are what separate text from numbers. 7 is an int you can add and multiply. \"7\" is a str — the seven treated as text. They look alike to you, but to Python they are different types, and it will not do maths on text.\n\n" +
    "When a value is the wrong type, you convert it. int(\"7\") turns the text into the number 7. str(7) turns the number into text. The command type() shows the type of any value, which helps when something behaves in a way you did not expect.",
  example: 'print(type(7))\nprint(type(3.5))\nprint(type("hello"))\n',
  exampleNote:
    "Run this to see the three types Python reports. Now add a line, print(type(\"7\")), and notice it is a str, not an int.",
  task: "The text \"7\" is a string, not a number. Convert it to a real number with int(), add 3 to it, and print the result. It should show 10.",
  starter: '# convert the text "7" to a number, add 3, and print it\n',
  starterExpectation: "runs-clean",
  check: { type: "output", expected: "10" },
  hints: [
    "int(\"7\") turns the text \"7\" into the number 7.",
    "Once it is a number you can add: int(\"7\") + 3.",
    'Write print(int("7") + 3).',
  ],
  solution: 'print(int("7") + 3)\n',
  codex: { topic: "types", pattern: "int(x)   str(x)   type(x)", note: "Every value has a type: int, float, or str. Convert between them with int() or str()." },
  styleRequired: false,
});

window.CODELAB.lessons.push({
  id: "w1l3",
  chapter: 1,
  title: "Storing Values in Variables",
  lang: "py",
  strand: "numbers",
  rung: 5,
  concepts: ["variables", "assignment"],
  misconceptions: ["assignment-vs-equality"],
  warmup: [],
  timeBudgetMin: 20,
  explain:
    "Programs have to keep track of information while they run. A variable is how a program remembers a value and gives it a name. Think of it as a label tied to a value: the value is the real data, such as the number 10, and the name is how you reach it later without typing it again.\n\n" +
    "You make a variable with an assignment statement, written with one equals sign: score = 10. This does not mean \"score equals 10\" the way it would in maths. It is an instruction. Python runs it right to left: first it works out the value on the right, then it points the name on the left at that value. Because it is an instruction, not a fact, you can change a variable later. Writing score = 20 just points the same name at a new value.\n\n" +
    "Once a name holds a value, writing the name gives the value back. So you can print it or do maths with it. Together, a program's variables are its state: the names that exist now and the values they hold. The stepper lets you watch that state change one line at a time. That is the clearest way to see what your code really does.",
  example: "score = 10\nprint(score)\nscore = score + 5\nprint(score)\n",
  exampleNote:
    "Run this and read it line by line. The line score = score + 5 takes the old value (10), adds 5, and stores 15 back under the same name. Use the stepper to watch score change.",
  task: "Create a variable called score holding 10. On the next line, add 5 to it and store the result back in score. Then print score — it should show 15.",
  starter: "# 1) store 10 in score\n# 2) add 5 to score and store it back\n# 3) print score\n",
  starterExpectation: "runs-clean",
  check: { type: "output", expected: "15" },
  hints: [
    "Start by storing the first value: score = 10.",
    "To add 5, put the new value on the right and the same name on the left: score = score + 5.",
    "Write score = 10, then score = score + 5, then print(score).",
  ],
  solution: "score = 10\nscore = score + 5\nprint(score)\n",
  codex: { topic: "variables", pattern: "name = value", note: "Assignment stores the value on the right under the name on the left. You can reassign it later." },
  styleRequired: false,
});

window.CODELAB.lessons.push({
  id: "w1l4",
  chapter: 1,
  title: "Python as a Calculator",
  lang: "py",
  strand: "numbers",
  rung: 5,
  concepts: ["math", "expressions"],
  misconceptions: [],
  warmup: [],
  timeBudgetMin: 18,
  explain:
    "A computer is, at heart, a very fast calculator. Python does maths with + to add and - to subtract. Multiply is a star (*) and divide is a slash (/), because a keyboard has no × or ÷ key.\n\n" +
    "A piece of code that works out to a value is called an expression. 7 * 6 is an expression, and its value is 42. Python follows the usual order of operations, so it does * and / before + and -. You can use brackets to force a different order, just like in maths. To see what an expression works out to, put it inside print.",
  example: "print(2 + 3 * 4)\nprint((2 + 3) * 4)\n",
  exampleNote:
    "Run this. The first line gives 14, because * happens before +. The brackets in the second line change the order, giving 20.",
  task: "Print the answer to 7 times 6. Let Python work it out — don't just print 42 yourself.",
  starter: "# print the result of 7 times 6\n",
  starterExpectation: "runs-clean",
  check: { type: "output", expected: "42" },
  hints: [
    "Use the star (*) for multiply, not the letter x.",
    "Put the whole expression inside print so the answer shows.",
    "Write print(7 * 6) and run it.",
  ],
  solution: "print(7 * 6)\n",
  codex: { topic: "math", pattern: "a + b   a * b   (a + b) * c", note: "An expression works out to a value. * and / happen before + and -; brackets change the order." },
  styleRequired: false,
});

window.CODELAB.lessons.push({
  id: "w1l5",
  chapter: 1,
  title: "How Old Are You in Days?",
  lang: "py",
  strand: "numbers",
  rung: 6,
  concepts: ["variables", "math"],
  misconceptions: [],
  warmup: [],
  timeBudgetMin: 22,
  explain:
    "Now you can put variables and expressions together to build something useful: a small calculator. The idea is simple. Store the starting facts in well-named variables. Then work out the answer from those names. If a fact changes, you change it in just one place.\n\n" +
    "A year is about 365 days. So your age in days is your age in years times 365. Give the age its own variable, and the program is easy to read and to change. Swap the age, run it again, and the answer updates. This is the heart of programming: describe the calculation once, then let the computer redo it for any numbers.",
  example: "years = 8\ndays = years * 365\nprint(days)\n",
  exampleNote:
    "Run this to see how many days an 8-year-old has lived. Change years to your own age and run it again.",
  task: "Store the age 11 in a variable called years. Work out the age in days (years times 365), store it in days, and print days. It should show 4015.",
  starter: "# 1) years = 11\n# 2) days = years * 365\n# 3) print days\n",
  starterExpectation: "runs-clean",
  check: { type: "output", expected: "4015" },
  hints: [
    "Store the age first: years = 11.",
    "Multiply the variable by 365 and store it: days = years * 365.",
    "Then print(days).",
  ],
  solution: "years = 11\ndays = years * 365\nprint(days)\n",
  codex: { topic: "variables", pattern: "result = input1 * input2", note: "Store facts in named variables, then compute the answer from the names." },
  styleRequired: false,
});

window.CODELAB.lessons.push({
  id: "w1l6",
  chapter: 1,
  title: "Joining Words Together",
  lang: "py",
  strand: "words",
  rung: 5,
  concepts: ["strings", "concatenation"],
  misconceptions: ["string-vs-number"],
  warmup: [],
  timeBudgetMin: 18,
  explain:
    "The plus sign does two different jobs, depending on the types beside it. Between numbers it adds. Between two strings it joins them into one longer string — programmers call this concatenation.\n\n" +
    'So "Sky" + "walker" becomes "Skywalker". No space appears in the middle: Python joins the text exactly as written, so if you want a gap you include it yourself, as a space inside quotation marks. Each string keeps its own quotes, and the plus sits between them. This is also why you cannot add a string and a number — their types do not match, so Python does not know whether to add or to join.',
  example: 'first = "Ada"\nlast = "Lovelace"\nprint(first + " " + last)\n',
  exampleNote:
    "Run this to see a full name built from two variables and a space. Remove the \" \" in the middle and see what changes.",
  task: 'Join the two strings "Sky" and "walker" into one and print the result. It should read Skywalker, with no space.',
  starter: "# join Sky and walker, then print the result\n",
  starterExpectation: "runs-clean",
  check: { type: "output", expected: "Skywalker" },
  hints: [
    "Put a plus sign between the two strings.",
    "Keep each word inside its own quotation marks; the plus goes between them.",
    'Write print("Sky" + "walker").',
  ],
  solution: 'print("Sky" + "walker")\n',
  codex: { topic: "strings", pattern: '"a" + "b"', note: "Between strings, + joins (concatenates). Add a space yourself if you want one." },
  styleRequired: false,
});

window.CODELAB.lessons.push({
  id: "w1l7",
  chapter: 1,
  title: "Your First Drawing",
  lang: "py",
  strand: "core",
  rung: 6,
  concepts: ["turtle"],
  misconceptions: [],
  warmup: [],
  timeBudgetMin: 22,
  explain:
    "You can command a turtle — a little drawing robot — to move around the screen, leaving a line behind it. Two commands do most of the work: forward(n) moves it n steps in the direction it faces, and right(a) turns it a degrees on the spot without moving.\n\n" +
    "To draw a shape you give the turtle a sequence of moves and turns, in order. A square is four equal sides with a quarter turn between them. A quarter turn is 90 degrees, because a full turn is 360 and 360 divided by 4 is 90. For now you write each move out by hand. Soon you will learn a way to repeat moves automatically.",
  example: "forward(100)\nright(90)\nforward(100)\n",
  exampleNote:
    "Run this to draw a corner — one side, a quarter turn, another side. Change 90 to 120 and see how the angle changes.",
  task: "Draw a full square: four sides of 100 steps, with a right turn of 90 degrees after each side.",
  starter: "# forward and right turn, four times, to make a square\n",
  starterExpectation: "runs-clean",
  check: {
    type: "calls",
    calls: [
      { fn: "forward", val: 100 }, { fn: "right", val: 90 },
      { fn: "forward", val: 100 }, { fn: "right", val: 90 },
      { fn: "forward", val: 100 }, { fn: "right", val: 90 },
      { fn: "forward", val: 100 }, { fn: "right", val: 90 },
    ],
  },
  hints: [
    "One side then one turn is: forward(100) then right(90).",
    "A square has four sides, so you need that pair four times.",
    "Write forward(100) and right(90), then repeat those two lines until you have four of each.",
  ],
  solution: "forward(100)\nright(90)\nforward(100)\nright(90)\nforward(100)\nright(90)\nforward(100)\nright(90)\n",
  codex: { topic: "turtle", pattern: "forward(n); right(a)", note: "forward moves and draws; right turns in place. Sequence them to make shapes." },
  styleRequired: false,
});

window.CODELAB.lessons.push({
  id: "w1l8",
  chapter: 1,
  title: "Writing a Tune",
  lang: "py",
  strand: "sound",
  rung: 6,
  concepts: ["play", "sleep"],
  misconceptions: ["pitch-direction"],
  warmup: [],
  timeBudgetMin: 20,
  explain:
    "Code can make music, not just text. play sounds a note, and the number you give it chooses the pitch: higher numbers are higher notes, lower numbers are lower. The numbers come from the way a piano is laid out, where each step up is the next key along.\n\n" +
    "If you only called play several times, the notes would all sound at once, like a chord. sleep fixes that: it pauses for a number of beats before the next note. So a tune is really a list of notes with waits between them, played in order from top to bottom — just like reading music from left to right.",
  example: "play(60)\nsleep(0.5)\nplay(62)\nsleep(0.5)\nplay(64)\n",
  exampleNote:
    "Run this to hear three notes climb. Change the numbers to change the tune — try making it go down instead of up.",
  task: "Write a tune that plays three rising notes — 60, then 64, then 67 — with a short sleep between each.",
  starter: "# play 60, 64, 67 with a sleep between each\n",
  starterExpectation: "runs-clean",
  check: {
    type: "calls",
    calls: [{ fn: "play", note: 60 }, { fn: "play", note: 64 }, { fn: "play", note: 67 }],
  },
  hints: [
    "Start with play(60) to sound the first note.",
    "Put sleep(0.5) between the notes so they play one after another.",
    "Write play(60), sleep(0.5), play(64), sleep(0.5), play(67) on separate lines.",
  ],
  solution: "play(60)\nsleep(0.5)\nplay(64)\nsleep(0.5)\nplay(67)\n",
  codex: { topic: "sound", pattern: "play(note); sleep(beats)", note: "play sounds a note; sleep waits so notes play in order, not at once." },
  styleRequired: false,
});
