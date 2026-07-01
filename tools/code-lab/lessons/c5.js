/* Chapter 5 — Thinking in Code
   Lessons: c5s1 Decomposition & Naming · c5s2 Generalizing Repetition
            c5s3 Reading Someone Else's Code · c5s4 Debugging: Reading the
            Crime Scene · c5s5 Debugging: The Scientist's Method
            c5s6 Checkpoint Projects

   No new syntax this chapter — every lesson applies Ch1-4 skills to the
   practice of writing and fixing your own code. Approved via a 5-reviewer
   curriculum audit (Downey, Resnick, Severance, Guzdial, Ko lenses); see
   CURRICULUM.md Chapter 5 for the full table and rationale. */

/* ── Lesson 5.1 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c5s1",
  chapter: 5,
  strand: "core",
  lang: "py",
  timeBudgetMin: 25,
  title: "Decomposition & Naming",
  glossary: {
    "single responsibility": "The idea that a function should do exactly one job, so you can describe what it does in one short sentence that starts with a verb.",
    "incremental development": "Building a program by writing and testing one small piece at a time, instead of writing everything at once and running it for the first time at the end.",
    shadowing: "Naming a variable the same as a built-in function (like `list` or `sum`) or an outer variable, which hides the original and can cause a confusing bug later in the program.",
  },
  content: [
    {
      type: "text",
      md: "**You've been handed the split before — now you make it yourself.** In Chapter 3, `draw_house` already called `draw_square` and `draw_roof` — the [[decomposition]] was done for you, and you just filled in the bodies. Real problems don't arrive pre-split. Someone hands you a paragraph — \"build a program that reports on a playlist\" — and the very first job is deciding *where the function boundaries go*. That decision is [[decomposition]]'s harder half, and it's what this lesson teaches.",
    },
    {
      type: "text",
      md: "**The process: nouns become data, verbs become functions.** Read the description and pull out the separate jobs. \"Report on a playlist\" hides at least three verbs: *total* the plays, find the *most played* song, and *average* the plays per song. Each verb becomes a function name before you write a single line of its body — this is the same wishful-thinking move from Lesson 3.8, just applied from a blank page instead of a filled-in stub. The test for a good boundary is **[[single responsibility]]**: can you say what the function does in one sentence that starts with a verb? \"Finds the most-played song\" is one job. \"Finds the most-played song *and* prints a fancy formatted report *and* saves it to a list\" is three jobs wearing one function's name — split it.",
    },
    {
      type: "example",
      note: "Three small functions, each with one job, composed by a fourth. Built and tested one piece at a time — see the next section for why that order matters.",
      code: "song_plays = {\"Blinding Lights\": 3200, \"Shape of You\": 2800, \"Dance Monkey\": 2500}\n\ndef total_plays(plays):\n    total = 0\n    for song in plays:\n        total += plays[song]\n    return total\n\ndef most_played(plays):\n    return max(plays, key=plays.get)\n\ndef average_plays(plays):\n    return round(total_plays(plays) / len(plays), 1)\n\ndef report(plays):\n    print(\"Total plays:\", total_plays(plays))\n    print(\"Most played:\", most_played(plays))\n    print(\"Average plays:\", average_plays(plays))\n\nreport(song_plays)\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Trace the program above by hand. `report` calls three helpers — figure out what each one returns for this dictionary, then predict the three printed lines. Run it to check.",
      starter: "song_plays = {\"Blinding Lights\": 3200, \"Shape of You\": 2800, \"Dance Monkey\": 2500}\n\ndef total_plays(plays):\n    total = 0\n    for song in plays:\n        total += plays[song]\n    return total\n\ndef most_played(plays):\n    return max(plays, key=plays.get)\n\ndef average_plays(plays):\n    return round(total_plays(plays) / len(plays), 1)\n\ndef report(plays):\n    print(\"Total plays:\", total_plays(plays))\n    print(\"Most played:\", most_played(plays))\n    print(\"Average plays:\", average_plays(plays))\n\nreport(song_plays)\n",
      check: { type: "output", expected: "Total plays: 8500\nMost played: Blinding Lights\nAverage plays: 2833.3" },
      hints: [
        "total_plays adds up every value in the dictionary — do that arithmetic first.",
        "most_played uses max(..., key=plays.get) — that returns the KEY with the biggest value, not the value itself.",
        "average_plays calls total_plays again and divides by len(plays), which is 3.",
      ],
      solution: "song_plays = {\"Blinding Lights\": 3200, \"Shape of You\": 2800, \"Dance Monkey\": 2500}\n\ndef total_plays(plays):\n    total = 0\n    for song in plays:\n        total += plays[song]\n    return total\n\ndef most_played(plays):\n    return max(plays, key=plays.get)\n\ndef average_plays(plays):\n    return round(total_plays(plays) / len(plays), 1)\n\ndef report(plays):\n    print(\"Total plays:\", total_plays(plays))\n    print(\"Most played:\", most_played(plays))\n    print(\"Average plays:\", average_plays(plays))\n\nreport(song_plays)\n",
    },
    {
      type: "exercise",
      rung: 2,
      prompt: "Arrange these lines into a working program — the same two helpers from the example above, wired into a shorter report. `total_plays` and `most_played` must be defined before `report` calls them, and `report` must be defined before it is called.",
      starter: "",
      check: {
        type: "parsons",
        lines: [
          "song_plays = {\"Blinding Lights\": 3200, \"Shape of You\": 2800, \"Dance Monkey\": 2500}",
          "",
          "def total_plays(plays):",
          "    total = 0",
          "    for song in plays:",
          "        total += plays[song]",
          "    return total",
          "",
          "def most_played(plays):",
          "    return max(plays, key=plays.get)",
          "",
          "def report(plays):",
          "    print(total_plays(plays))",
          "    print(most_played(plays))",
          "",
          "report(song_plays)",
        ],
        distractors: ["    return plays.max()", "report(total_plays)"],
      },
      hints: [
        "Both helper functions (total_plays, most_played) must appear before report, since report calls them.",
        "max(plays, key=plays.get) is the real pattern — plays.max() is not real Python, that line is a decoy.",
        "The last line must call report(song_plays), not report(total_plays) — that decoy passes the wrong thing.",
      ],
      solution: "song_plays = {\"Blinding Lights\": 3200, \"Shape of You\": 2800, \"Dance Monkey\": 2500}\n\ndef total_plays(plays):\n    total = 0\n    for song in plays:\n        total += plays[song]\n    return total\n\ndef most_played(plays):\n    return max(plays, key=plays.get)\n\ndef report(plays):\n    print(total_plays(plays))\n    print(most_played(plays))\n\nreport(song_plays)\n",
    },
    {
      type: "text",
      md: "**Build one piece, test it, then add the next.** The worked example above wasn't written top to bottom in one pass. It was built as `total_plays` alone — call it, print the result, check it by hand — *then* `most_played` alone, tested the same way, *then* `average_plays`, *then* finally `report` wiring the three together. This is **[[incremental development]]**: never write more than a few lines without running them. The anti-pattern is writing all four functions in one sitting and running the whole thing for the first time at the end — if `report` prints a wrong number, the bug could be in any of three functions, and you have no evidence pointing at which one.",
    },
    {
      type: "text",
      md: "**Why this matters more than it looks like it should.** A program built and tested one function at a time gives you a search space that shrinks as you go — once `total_plays` is confirmed correct on its own, it can never be the source of a later bug, and you can stop suspecting it. A program written all at once and run for the first time at the end gives you a search space of *every line in the file*, because nothing has been checked yet. This is the same principle that will drive Lesson 5.4's debugging protocol: **a smaller search space is what makes a bug findable.**",
    },
    {
      type: "example",
      note: "Each helper is called alone with a tiny, hand-checkable input before summarize wires them together — that's incremental development in practice.",
      code: "scores = [88, 72, 95, 61, 84]\n\ndef average(values):\n    return sum(values) / len(values)\n\ndef highest(values):\n    return max(values)\n\ndef passed_count(values, cutoff):\n    count = 0\n    for v in values:\n        if v >= cutoff:\n            count += 1\n    return count\n\n# Tested alone, on tiny inputs, before combining them:\nprint(average([1, 1]))              # 1.0 -- correct\nprint(highest([3, 9, 2]))           # 9 -- correct\nprint(passed_count([60, 80], 70))   # 1 -- correct\n\ndef summarize(values, cutoff):\n    print(\"Average:\", average(values))\n    print(\"Highest:\", highest(values))\n    print(\"Passed:\", passed_count(values, cutoff))\n\nsummarize(scores, 70)\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "`summarize` prints a wrong average. `highest` and `passed_count` were each tested alone and are correct — so per the incremental-testing rule, the bug can't be in either of them. Test `average` alone by calling it directly, find the bug, and fix it.",
      starter: "scores = [88, 72, 95, 61, 84]\n\ndef average(values):\n    return sum(values) / 5   # bug: only correct when there are exactly 5 scores\n\ndef highest(values):\n    return max(values)\n\ndef passed_count(values, cutoff):\n    count = 0\n    for v in values:\n        if v >= cutoff:\n            count += 1\n    return count\n\ndef summarize(values, cutoff):\n    print(\"Average:\", average(values))\n    print(\"Highest:\", highest(values))\n    print(\"Passed:\", passed_count(values, cutoff))\n\nsummarize(scores, 70)\n",
      check: { type: "output", expected: "Average: 80.0\nHighest: 95\nPassed: 4" },
      hints: [
        "Call average([1, 1]) by itself in your head — it should return 1.0, but this version returns 0.4. The 5 is hardcoded.",
        "average should divide by how many values were actually passed in, not a fixed number.",
        "Use len(values) instead of the literal 5.",
      ],
      solution: "scores = [88, 72, 95, 61, 84]\n\ndef average(values):\n    return sum(values) / len(values)\n\ndef highest(values):\n    return max(values)\n\ndef passed_count(values, cutoff):\n    count = 0\n    for v in values:\n        if v >= cutoff:\n            count += 1\n    return count\n\ndef summarize(values, cutoff):\n    print(\"Average:\", average(values))\n    print(\"Highest:\", highest(values))\n    print(\"Passed:\", passed_count(values, cutoff))\n\nsummarize(scores, 70)\n",
    },
    {
      type: "text",
      md: "**A name is a debugging tool, not decoration.** Every name you pick is something a reader has to remember while reading the rest of the function — often that reader is future you, debugging late at night. A name that says what the value *is* (`counts`, a dictionary of letter counts) costs nothing to remember. A name that says nothing (`x`, `data`, `temp`) costs real attention. So does a name that looks almost like a different variable (`count` vs `counts`). That cost shows up as bugs. It becomes easy to type the wrong name by accident, and Python will not stop you — it will run the wrong line without complaint, or crash somewhere that doesn't point at the real problem.",
    },
    {
      type: "example",
      note: "Bug: count and counts are one letter apart and mean very different things.",
      code: "def letter_variety(text):\n    counts = {}   # a dictionary: letter -> how many times it appeared\n    count = 0     # a single number: how many letters checked so far\n    for ch in text.lower():\n        if ch.isalpha():\n            counts[ch] = counts.get(ch, 0) + 1\n            count += 1\n    return len(count)  # TypeError: object of type 'int' has no len()",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This crashes with `TypeError: object of type 'int' has no len()`. Two variables have almost the same name, `count` and `counts`, and the return line grabbed the wrong one. Find the line and fix it so the function returns the number of *distinct* letters.",
      starter: "def letter_variety(text):\n    counts = {}\n    count = 0\n    for ch in text.lower():\n        if ch.isalpha():\n            counts[ch] = counts.get(ch, 0) + 1\n            count += 1\n    return len(count)\n\nprint(letter_variety(\"we will rock you\"))\n",
      check: { type: "output", expected: "10" },
      hints: [
        "len() needs something with a length, like a dictionary or list. count is a plain number.",
        "counts (with an s) is the dictionary that holds one entry per distinct letter.",
        "Change len(count) to len(counts).",
      ],
      solution: "def letter_variety(text):\n    counts = {}\n    count = 0\n    for ch in text.lower():\n        if ch.isalpha():\n            counts[ch] = counts.get(ch, 0) + 1\n            count += 1\n    return len(counts)\n\nprint(letter_variety(\"we will rock you\"))\n",
    },
    {
      type: "text",
      md: "**Name booleans like yes/no questions.** A variable that holds `True` or `False` should read naturally after `if`. `is_passed`, `has_won`, and `passed` all read like questions; `flag` and `check` do not — they tell you a boolean exists, but not what question it answers. `if flag:` forces the reader to scroll up and find the assignment before the line makes sense. `if passed:` doesn't.",
    },
    {
      type: "example",
      note: "flag tells you a boolean exists, but not what question it answers — you have to scroll up to find out.",
      code: "def passed_check(score, cutoff):\n    flag = score >= cutoff\n    return flag\n\nprint(passed_check(88, 70))\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "Rename `flag` to a name that reads like a yes/no question about what the function checks. Don't change what the function returns or how it's called.",
      starter: "def passed_check(score, cutoff):\n    flag = score >= cutoff\n    return flag\n\nprint(passed_check(88, 70))\nprint(passed_check(61, 70))\n",
      check: { type: "output", expected: "True\nFalse" },
      hints: [
        "The function checks whether a score passed a cutoff — the boolean is answering \"did it pass?\"",
        "A name like passed or is_passing reads naturally as if passed: — flag does not.",
        "Rename every occurrence of flag inside the function, including the return line.",
      ],
      solution: "def passed_check(score, cutoff):\n    passed = score >= cutoff\n    return passed\n\nprint(passed_check(88, 70))\nprint(passed_check(61, 70))\n",
    },
    {
      type: "text",
      md: "**Some names are already taken.** Python ships with built-in functions like `list`, `sum`, `type`, and `str`. Naming your own variable `list` doesn't cause an error — Python happily lets you reuse the name — but it starts **[[shadowing]]** the real `list()` function for the rest of the program. If you try to call `list(...)` later expecting the built-in, you get `TypeError: 'list' object is not callable`, and the crash site is nowhere near the line that caused it. The fix is always the same: rename the variable to something that isn't a built-in name.",
    },
    {
      type: "example",
      note: "Bug: naming a variable list shadows the built-in list() function.",
      code: "list = [1, 2, 3]\ncopy = list(list)  # TypeError: 'list' object is not callable",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This crashes with `TypeError: 'list' object is not callable`. A variable named `list` has shadowed the built-in `list()` function, which the last line needs to make a copy. Rename the variable (not the built-in) throughout.",
      starter: "list = [88, 72, 95, 61, 84]\naverage = sum(list) / len(list)\nprint(average)\ncopy = list(list)\nprint(copy)\n",
      check: { type: "output", expected: "80.0\n[88, 72, 95, 61, 84]" },
      hints: [
        "list(list) is trying to call the built-in list() function, passing your variable as the argument.",
        "But your variable is ALSO named list, so Python thinks you're trying to call a list object like a function.",
        "Rename the variable to scores everywhere it appears, and leave list(...) as the real built-in call.",
      ],
      solution: "scores = [88, 72, 95, 61, 84]\naverage = sum(scores) / len(scores)\nprint(average)\ncopy = list(scores)\nprint(copy)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write `most_moons(data)` and `fewest_moons(data)` — each takes the `moons` dictionary and returns the planet name with the most (or fewest) moons, using `max`/`min` with `key=data.get` like `most_played` did earlier in this lesson. Then write `describe_moons(data)` that calls both helpers and prints `\"Most moons: <planet> (<count>)\"` then `\"Fewest moons: <planet> (<count>)\"`. Call `describe_moons(moons)`.",
      starter: "moons = {\"Saturn\": 146, \"Jupiter\": 95, \"Uranus\": 27, \"Neptune\": 16, \"Mars\": 2, \"Earth\": 1}\n\n# write most_moons, fewest_moons, and describe_moons here, then call describe_moons(moons)\n",
      check: { type: "output", expected: "Most moons: Saturn (146)\nFewest moons: Earth (1)" },
      hints: [
        "most_moons and fewest_moons are one line each: return max(data, key=data.get) or min(data, key=data.get).",
        "describe_moons should call most_moons(data) and fewest_moons(data), then look up each planet's count with data[planet].",
        "print(\"Most moons:\", top, \"(\" + str(data[top]) + \")\") — or build the string with an f-string if you prefer.",
      ],
      solution: "moons = {\"Saturn\": 146, \"Jupiter\": 95, \"Uranus\": 27, \"Neptune\": 16, \"Mars\": 2, \"Earth\": 1}\n\ndef most_moons(data):\n    return max(data, key=data.get)\n\ndef fewest_moons(data):\n    return min(data, key=data.get)\n\ndef describe_moons(data):\n    top = most_moons(data)\n    bottom = fewest_moons(data)\n    print(\"Most moons:\", top, \"(\" + str(data[top]) + \")\")\n    print(\"Fewest moons:\", bottom, \"(\" + str(data[bottom]) + \")\")\n\ndescribe_moons(moons)\n",
    },
  ],
  codex: {
    topic: "decomposition & naming",
    pattern: "def total_plays(plays):\n    ...\n\ndef most_played(plays):\n    ...\n\ndef report(plays):\n    print(total_plays(plays))\n    print(most_played(plays))",
    note: "Split a problem by its verbs — one function, one job, tested alone before it's wired into the rest. A name should say what a value is or does; two names that look almost alike (count/counts) are a bug waiting to happen.",
  },
});
