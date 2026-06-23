/* Chapter 0 — First Sound, Then Think Like a Computer.
   Phase 1 ships sample lessons here to prove the pipelines; the full world is
   authored in Phase 2. Format per lessons/schema.md. Chapter 0 lessons are
   codex-exempt and the hook runs real code from the first minute. */

window.CODELAB.lessons.push({
  id: "w0l1",
  chapter: 0,
  title: "First Sound",
  lang: "py",
  strand: "sound",
  rung: 4,
  concepts: ["play", "sleep"],
  misconceptions: ["pitch-direction"],
  warmup: [],
  timeBudgetMin: 15,
  explain:
    "Code can make sound. The play command plays a note. The number picks the note: a bigger number is a higher note. The sleep command waits between notes. Run this to hear three notes. The last note is too low. Make it go up.",
  starter: "play(60)\nsleep(0.5)\nplay(64)\nsleep(0.5)\nplay(62)\n",
  starterExpectation: "runs-clean",
  check: {
    type: "calls",
    calls: [{ fn: "play", note: 60 }, { fn: "play", note: 64 }, { fn: "play", note: 67 }],
  },
  hints: [
    "Listen to the three notes. The last one should be the highest, but it dips down.",
    "A bigger number is a higher note. 62 is lower than 64, so the third note drops.",
    "Change the last play(62) to play(67) so the notes go up: 60, 64, 67.",
  ],
  solution: "play(60)\nsleep(0.5)\nplay(64)\nsleep(0.5)\nplay(67)\n",
  styleRequired: false,
});

window.CODELAB.lessons.push({
  id: "w0l2",
  chapter: 0,
  title: "Say Hello",
  lang: "py",
  strand: "words",
  rung: 4,
  concepts: ["print", "strings"],
  misconceptions: [],
  warmup: [],
  timeBudgetMin: 15,
  explain:
    "The print command shows words on the screen. The words go inside quotes. Right now it prints the wrong thing. Make it print these exact words: Hello, world!",
  starter: 'print("Hello!")\n',
  starterExpectation: "runs-clean",
  check: { type: "output", expected: "Hello, world!" },
  hints: [
    "Look at what print shows now, and what the task asks for.",
    "The words must match exactly, including the comma and the word world.",
    'Change it to print("Hello, world!").',
  ],
  solution: 'print("Hello, world!")\n',
  styleRequired: false,
});
