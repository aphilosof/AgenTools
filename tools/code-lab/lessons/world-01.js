/* World 1 — Python: First Words.
   print, numbers, variables, strings, and the first sounds. Code-based lessons
   verified by the harness (each solution is executed and must pass its check).
   Format per lessons/schema.md. Parsons/predict rungs arrive with those engine
   features; these use complete/fix/write rungs. */

window.CODELAB.lessons.push({
  id: "w1l1",
  world: 1,
  title: "Print Words",
  lang: "py",
  strand: "words",
  rung: 5,
  concepts: ["print", "strings"],
  misconceptions: [],
  warmup: [],
  timeBudgetMin: 15,
  explain:
    "The print command shows text on the screen. The text you want goes inside quotes. Finish the line below so it prints the word Hello on its own.",
  starter: "# print the word Hello\n",
  starterExpectation: "runs-clean",
  check: { type: "output", expected: "Hello" },
  hints: [
    "Use the print command, like print(\"...\").",
    "Put the word you want to show inside the quotes.",
    'Write print("Hello").',
  ],
  solution: 'print("Hello")\n',
  codex: { topic: "printing", pattern: 'print("text")', note: "Shows text on the screen." },
  styleRequired: false,
});

window.CODELAB.lessons.push({
  id: "w1l2",
  world: 1,
  title: "Python Does Math",
  lang: "py",
  strand: "numbers",
  rung: 5,
  concepts: ["math", "print"],
  misconceptions: [],
  warmup: [],
  timeBudgetMin: 15,
  explain:
    "Python can do math for you. Use + to add, - to take away, * to times, and / to share. Print the answer to 7 times 6.",
  starter: "# print the answer to 7 times 6\n",
  starterExpectation: "runs-clean",
  check: { type: "output", expected: "42" },
  hints: [
    "The star * means times in Python.",
    "Let Python do the math: print(7 * 6).",
    "Write print(7 * 6) and run it.",
  ],
  solution: "print(7 * 6)\n",
  codex: { topic: "math", pattern: "a * b", note: "+ - * / do math. Print the result to see it." },
  styleRequired: false,
});

window.CODELAB.lessons.push({
  id: "w1l3",
  world: 1,
  title: "Boxes Called Variables",
  lang: "py",
  strand: "numbers",
  rung: 5,
  concepts: ["variables", "print"],
  misconceptions: ["assignment-vs-equality"],
  warmup: [],
  timeBudgetMin: 18,
  explain:
    "A variable is a name that holds a value, like a labelled box. You make one with an equals sign: score = 10. Make a variable called score that holds 10, then print it.",
  starter: "# make score hold 10, then print score\n",
  starterExpectation: "runs-clean",
  check: { type: "output", expected: "10" },
  hints: [
    "First put a value in the box: score = 10.",
    "One equals sign means put this value in the box.",
    "Write score = 10 on one line, then print(score) on the next.",
  ],
  solution: "score = 10\nprint(score)\n",
  codex: { topic: "variables", pattern: "name = value", note: "Stores a value under a name you can use later." },
  styleRequired: false,
});

window.CODELAB.lessons.push({
  id: "w1l4",
  world: 1,
  title: "Name Mashup",
  lang: "py",
  strand: "words",
  rung: 5,
  concepts: ["strings", "print"],
  misconceptions: ["string-vs-number"],
  warmup: [],
  timeBudgetMin: 18,
  explain:
    "You can join two pieces of text with a plus sign. \"Sky\" + \"walker\" makes \"Skywalker\". Join the two names below and print the result.",
  starter: "# join Sky and walker, then print it\n",
  starterExpectation: "runs-clean",
  check: { type: "output", expected: "Skywalker" },
  hints: [
    "Use a plus sign between the two pieces of text.",
    "Keep each word inside its own quotes.",
    'Write print("Sky" + "walker").',
  ],
  solution: 'print("Sky" + "walker")\n',
  codex: { topic: "strings", pattern: '"a" + "b"', note: "Joins two pieces of text into one." },
  styleRequired: false,
});

window.CODELAB.lessons.push({
  id: "w1l5",
  world: 1,
  title: "Three Rising Notes",
  lang: "py",
  strand: "sound",
  rung: 6,
  concepts: ["play", "sleep"],
  misconceptions: ["pitch-direction"],
  warmup: [],
  timeBudgetMin: 20,
  explain:
    "Now write a tune from scratch. Play three notes that go up, with a short wait between each. Use play with a number for the note, and sleep to wait.",
  starter: "# play three notes that rise: 60, 64, 67\n",
  starterExpectation: "runs-clean",
  check: {
    type: "calls",
    calls: [{ fn: "play", note: 60 }, { fn: "play", note: 64 }, { fn: "play", note: 67 }],
  },
  hints: [
    "Use play(60) to play the first note.",
    "Add sleep(0.5) between the notes so they don't all play at once.",
    "Write play(60), sleep(0.5), play(64), sleep(0.5), play(67) on separate lines.",
  ],
  solution: "play(60)\nsleep(0.5)\nplay(64)\nsleep(0.5)\nplay(67)\n",
  codex: { topic: "sound", pattern: "play(note); sleep(beats)", note: "play makes a note; sleep waits between notes." },
  styleRequired: false,
});
