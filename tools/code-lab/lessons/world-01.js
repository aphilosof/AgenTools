/* World 1 — Python: First Words.
   print, numbers, variables, strings, and the first sounds. Code-based lessons
   verified by the harness (each solution is executed and must pass its check).
   Format per lessons/schema.md: explain teaches the concept, example is a
   runnable demo to tinker with, task states the challenge. Written for a
   grade-6 reader — full sentences and real vocabulary, not baby-talk. */

window.CODELAB.lessons.push({
  id: "w1l1",
  world: 1,
  title: "Telling the Computer to Speak",
  lang: "py",
  strand: "words",
  rung: 5,
  concepts: ["print", "strings"],
  misconceptions: [],
  warmup: [],
  timeBudgetMin: 15,
  explain:
    "A program does nothing on screen until you ask it to. The print command is how you tell Python to display something. Whatever you put between its brackets gets shown. Text has to sit inside quotation marks so Python treats it as words to display, not as commands to obey. The quotation marks themselves never appear in the output — they only mark where your text starts and ends. You can print a single word, a full sentence, or several lines by using print more than once.",
  example: 'print("Hello, world!")\nprint("I am learning to code.")\n',
  exampleNote:
    "Run this to see two lines appear. Then change the words, or add a third print line of your own, and run it again.",
  task: "Make the program print these two lines, exactly:\nReady to code\nLet's go",
  starter: "# print the two lines from the task\n",
  starterExpectation: "runs-clean",
  check: { type: "output", expected: "Ready to code\nLet's go" },
  hints: [
    "You need two separate print commands, one for each line.",
    "Each piece of text goes inside quotation marks, like print(\"Ready to code\").",
    "Write print(\"Ready to code\") on the first line and print(\"Let's go\") on the second.",
  ],
  solution: 'print("Ready to code")\nprint("Let\'s go")\n',
  codex: { topic: "printing", pattern: 'print("text")', note: "Displays text on the screen. Use it once per line." },
  styleRequired: false,
});

window.CODELAB.lessons.push({
  id: "w1l2",
  world: 1,
  title: "Python as a Calculator",
  lang: "py",
  strand: "numbers",
  rung: 5,
  concepts: ["math", "print"],
  misconceptions: ["string-vs-number"],
  warmup: [],
  timeBudgetMin: 18,
  explain:
    "Python can do maths far faster than you can by hand. It uses + to add and - to subtract. Multiply is a star (*) and divide is a slash (/), because keyboards have no × or ÷ key. Write numbers on their own, with no quotation marks. Quotes would turn a number into text, and you cannot do maths on text. To see a result, put the calculation inside print. Python then prints the answer, not the sum you typed.",
  example: "print(10 + 5)\nprint(10 * 5)\nprint(10 / 5)\n",
  exampleNote:
    "Run this and watch Python work out each line. Try swapping the numbers or the symbols to see what happens.",
  task: "Print the answer to 7 times 6. Let Python do the multiplying — don't just print the number 42.",
  starter: "# print the result of 7 times 6\n",
  starterExpectation: "runs-clean",
  check: { type: "output", expected: "42" },
  hints: [
    "Use the star (*) for multiply, not the letter x.",
    "Put the whole calculation inside print so the answer shows.",
    "Write print(7 * 6) and run it.",
  ],
  solution: "print(7 * 6)\n",
  codex: { topic: "math", pattern: "a + b   a * b   a / b", note: "+ - * / do arithmetic. Wrap it in print to see the result." },
  styleRequired: false,
});

window.CODELAB.lessons.push({
  id: "w1l3",
  world: 1,
  title: "Storing Values in Variables",
  lang: "py",
  strand: "numbers",
  rung: 5,
  concepts: ["variables", "print"],
  misconceptions: ["assignment-vs-equality"],
  warmup: [],
  timeBudgetMin: 18,
  explain:
    "A variable is a name that remembers a value for you, like a labelled box you can open later. You create one with a single equals sign: the name goes on the left, and the value you want to store goes on the right. From then on, writing the name gives you back the value. The single equals sign means 'put this value into this name' — it is an instruction, not a question about whether two things are equal. Once a value is stored, you can print it or use it in maths.",
  example: "score = 10\nbonus = 5\nprint(score + bonus)\n",
  exampleNote:
    "Run this. score holds 10 and bonus holds 5, so the program prints their total. Try changing the stored numbers.",
  task: "Create a variable called score that holds the value 10, then print score on the next line.",
  starter: "# store 10 in score, then print score\n",
  starterExpectation: "runs-clean",
  check: { type: "output", expected: "10" },
  hints: [
    "First store the value: score = 10.",
    "The equals sign puts the value 10 into the name score.",
    "Write score = 10 on one line, then print(score) on the next.",
  ],
  solution: "score = 10\nprint(score)\n",
  codex: { topic: "variables", pattern: "name = value", note: "Stores a value under a name so you can use it again later." },
  styleRequired: false,
});

window.CODELAB.lessons.push({
  id: "w1l4",
  world: 1,
  title: "Joining Words Together",
  lang: "py",
  strand: "words",
  rung: 5,
  concepts: ["strings", "print"],
  misconceptions: ["string-vs-number"],
  warmup: [],
  timeBudgetMin: 18,
  explain:
    "The plus sign does more than add numbers. When it sits between two pieces of text, it joins them into one longer piece — programmers call this 'joining' or concatenation. \"Sky\" + \"walker\" becomes \"Skywalker\", with no space added unless you include one yourself inside the quotation marks. Each piece of text keeps its own quotes; the plus sign goes between them, outside the quotes. This is how programs build names, messages, and sentences out of smaller parts.",
  example: 'first = "Ada"\nlast = "Lovelace"\nprint(first + " " + last)\n',
  exampleNote:
    "Run this to see a full name built from two variables and a space. Try removing the \" \" in the middle and see what changes.",
  task: 'Join the two words "Sky" and "walker" into one and print the result. It should read Skywalker, with no space.',
  starter: "# join Sky and walker, then print the result\n",
  starterExpectation: "runs-clean",
  check: { type: "output", expected: "Skywalker" },
  hints: [
    "Put a plus sign between the two pieces of text.",
    "Keep each word inside its own quotation marks; the plus goes between them.",
    'Write print("Sky" + "walker").',
  ],
  solution: 'print("Sky" + "walker")\n',
  codex: { topic: "strings", pattern: '"a" + "b"', note: "Joins two pieces of text into one. Add a space yourself if you want one." },
  styleRequired: false,
});

window.CODELAB.lessons.push({
  id: "w1l5",
  world: 1,
  title: "Writing a Tune",
  lang: "py",
  strand: "sound",
  rung: 6,
  concepts: ["play", "sleep"],
  misconceptions: ["pitch-direction"],
  warmup: [],
  timeBudgetMin: 20,
  explain:
    "Code can make music, not just text. The play command plays a note, and the number you give it chooses the pitch: higher numbers are higher notes, lower numbers are lower notes. The sleep command pauses for a number of beats, so notes do not all sound at once. If you call play several times with a sleep between each, you build a short tune that plays in order, exactly like reading music from left to right.",
  example: "play(60)\nsleep(0.5)\nplay(62)\nsleep(0.5)\nplay(64)\n",
  exampleNote:
    "Run this to hear three notes climb. Change the numbers to change the tune — try making it go down instead of up.",
  task: "Write a tune from scratch that plays three rising notes — 60, then 64, then 67 — with a short sleep between each.",
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
  codex: { topic: "sound", pattern: "play(note); sleep(beats)", note: "play sounds a note; sleep waits so notes play in order." },
  styleRequired: false,
});
