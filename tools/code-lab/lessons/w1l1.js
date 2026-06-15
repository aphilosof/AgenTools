/* World 1 · Lesson 1 — Output and the print command.
   Paged lesson data built from lessons/plans/w1l1-output-and-print.md and
   rendered by player.js. Pushed to window.CODELAB.pagedLessons (the new paged
   format, separate from the old single-screen lessons during the transition). */

window.CODELAB.pagedLessons = window.CODELAB.pagedLessons || [];

window.CODELAB.pagedLessons.push({
  id: "w1l1",
  world: 1,
  title: "Output and the print Command",
  lang: "py",
  pages: [
    {
      type: "concept",
      title: "Warm-up",
      md:
        "In World 0 you ran real code and changed a number to change a sound — you were already telling a computer exactly what to do. Now you start writing that code yourself, and the first thing any program needs to do is *show* you something. This lesson is about output: getting words and numbers onto the screen.",
    },
    {
      type: "concept",
      title: "The print command",
      md:
        "A program does nothing you can see unless you tell it to. **print** is the command for that: it takes whatever you put between its brackets and displays it on the screen. The thing inside the brackets is called the **argument** — it is what print works on. One print shows one thing.",
    },
    {
      type: "example",
      title: "Your first output",
      md: "Run this. The words appear, but the quotation marks do not — they are not part of the message. Change the words inside the quotes and run it again.",
      code: 'print("Hello!")\n',
    },
    {
      type: "concept",
      title: "Text goes in quotes",
      md:
        "Text — letters, words, sentences — must sit inside quotation marks so Python knows it is text to display, not a command to run. You can use single quotes `'…'` or double quotes `\"…\"`; they work the same way. The quotes mark where your text begins and ends, and they are never shown. If your text contains a quote, use the other kind around it — `\"It's fine\"` or `'She said \"hi\"'`.",
    },
    {
      type: "example",
      title: "Comments: notes for humans",
      md: "Anything after a `#` is a **comment**: Python ignores it completely. Comments are notes for whoever reads the code. Run this — only the print line does anything.",
      code: '# this line is a note; Python skips it\nprint("This line runs.")   # you can comment at the end of a line too\n',
    },
    {
      type: "example",
      title: "Printing more than one thing",
      md: "You can give print several arguments, separated by commas, and it shows them on one line with a space between each. Run it: the first line prints a greeting, the second prints a label and a number together.",
      code: 'print("Hello", "world")\nprint("Score:", 100)\n',
    },
    {
      type: "example",
      title: "Numbers and expressions",
      md: "You do not put quotes around numbers, and you can print the result of a calculation — Python works it out first. Notice the second line prints `5`, not `2 + 3`.",
      code: "print(7)\nprint(2 + 3)\n",
    },
    {
      type: "concept",
      title: "Every print is a new line",
      md:
        "Each print puts its output on its own line, so several prints stack up top to bottom. A `print()` with nothing in the brackets prints an empty line — handy for spacing. (There is also a way to *not* start a new line, but you will rarely need it yet.)",
    },
    {
      type: "example",
      title: "Predict, then run",
      md:
        "Read these three lines and **predict what each one prints** before you run anything — predicting first is how you build a real picture of what Python does. Then run it and check yourself.",
      code: 'print("Code")\nprint("Code", "Lab")\nprint(3 * 4)\n',
    },
    {
      type: "errordemo",
      title: "When you forget the quotes",
      md:
        "Here is the most common first mistake, shown on purpose so you learn to read it. Run it and read the error: without quotes, Python thinks `Hello` is the **name** of something you made earlier, goes looking, finds nothing, and reports a `NameError`. The fix is to put the text in quotes.",
      code: "print(Hello)\n",
    },
    {
      type: "exercise",
      title: "Fix it",
      prompt:
        "This program is meant to print the word `Python`, but it crashes. Make it print `Python`. Read the error first to see *why* it breaks, then fix it.",
      starter: "print(Python)\n",
      check: { type: "output", expected: "Python" },
      hints: [
        "Read the error — Python is looking for a name called Python.",
        "You want the word, not a name. How do you tell Python something is text?",
        "Put the word in quotes.",
      ],
      solution: 'print("Python")\n',
    },
    {
      type: "exercise",
      title: "Build it",
      prompt:
        "Starting from an empty editor, write a program that prints these two lines, exactly:\n\n```\nWelcome to Code Lab\nLessons: 12\n```\n\nUse a separate print for each line, and on the second line print the label and the number together.",
      starter: "",
      check: { type: "output", expected: "Welcome to Code Lab\nLessons: 12" },
      hints: [
        "Two lines means two print commands.",
        "The first line is one piece of text in quotes.",
        "On the second line, give print two arguments: the text \"Lessons:\" and the number 12, separated by a comma.",
      ],
      solution: 'print("Welcome to Code Lab")\nprint("Lessons:", 12)\n',
    },
    {
      type: "concept",
      title: "Common mistakes",
      md:
        "- **Forgetting the quotes.** `print(Hello)` is a `NameError`; `print(\"Hello\")` is the text.\n- **Thinking the quotes show up.** They do not — they only mark the text.\n- **Expecting numbers to need quotes.** They do not: `print(7)` is fine, and `print(\"7\")` prints the same thing but is text, not a number (more on that next lesson).",
    },
    {
      type: "recap",
      title: "Recap",
      md:
        "- `print(...)` shows its **argument** on the screen; one print makes one line.\n- **Text** goes in quotes (single or double); the quotes are not shown.\n- `#` starts a **comment** — Python ignores it.\n- Several arguments separated by commas print on one line, space-separated.\n- Numbers need no quotes, and print shows the **result** of a calculation.\n- Forgetting quotes around text gives a `NameError`.\n\nNice work — that is your first real Python lesson done.",
    },
  ],
});
