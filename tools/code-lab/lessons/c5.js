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

/* ── Lesson 5.2 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c5s2",
  chapter: 5,
  strand: "core",
  lang: "py",
  timeBudgetMin: 22,
  title: "Generalizing Repetition",
  glossary: {
    "near-duplicate": "Two blocks of code that are not identical text but do the same job in the same way, differing only in one or two values.",
  },
  content: [
    {
      type: "text",
      md: "**You already know DRY — here's the version that's easy to miss.** Since Lesson 3.1's `repeat_line`, you've spotted repetition when it was **identical** copy-pasted text. That's the easy case. The harder case is a **[[near-duplicate]]**: two functions that don't look alike at a glance — different variable names, maybe a different accumulator — but do the exact same job with one number swapped out. Near-duplicates hide from a quick read, which is exactly why they're worth training your eye for.",
    },
    {
      type: "text",
      md: "**The technique: find what varies, make it a parameter.** Line up the two blocks and ask: what's the ONE thing that's different between them? Usually it's a single value — a threshold, a label, a count. Write one function that takes that value as a parameter instead of hardcoding it, and both original blocks become one call each with a different argument.",
    },
    {
      type: "example",
      note: "count_above_100 and count_above_130 are near-duplicates — same loop, different number. count_above(tracks, threshold) replaces both.",
      code: "bpm = [80, 120, 140, 96]\n\n# Near-duplicates:\ndef count_above_100(tracks):\n    count = 0\n    for t in tracks:\n        if t > 100:\n            count += 1\n    return count\n\ndef count_above_130(tracks):\n    count = 0\n    for t in tracks:\n        if t > 130:\n            count += 1\n    return count\n\n# One generalized function replaces both:\ndef count_above(tracks, threshold):\n    count = 0\n    for t in tracks:\n        if t > threshold:\n            count += 1\n    return count\n\nprint(count_above(bpm, 100))\nprint(count_above(bpm, 130))\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Trace the two calls to `count_above` above. Predict what each one prints before running it.",
      starter: "bpm = [80, 120, 140, 96]\n\ndef count_above(tracks, threshold):\n    count = 0\n    for t in tracks:\n        if t > threshold:\n            count += 1\n    return count\n\nprint(count_above(bpm, 100))\nprint(count_above(bpm, 130))\n",
      check: { type: "output", expected: "2\n1" },
      hints: [
        "For the first call, threshold is 100 — count how many of 80, 120, 140, 96 are greater than 100.",
        "120 and 140 are both above 100. Only 140 is above 130.",
        "First call prints 2, second call prints 1.",
      ],
      solution: "bpm = [80, 120, 140, 96]\n\ndef count_above(tracks, threshold):\n    count = 0\n    for t in tracks:\n        if t > threshold:\n            count += 1\n    return count\n\nprint(count_above(bpm, 100))\nprint(count_above(bpm, 130))\n",
    },
    {
      type: "example",
      note: "The same near-duplicate shape shows up on a fresh dataset — count_above_80 and count_above_90 differ only in one number.",
      code: "scores = [88, 72, 95, 61, 84]\n\ndef count_above_80(values):\n    count = 0\n    for v in values:\n        if v > 80:\n            count += 1\n    return count\n\ndef count_above_90(values):\n    count = 0\n    for v in values:\n        if v > 90:\n            count += 1\n    return count\n\nprint(count_above_80(scores))\nprint(count_above_90(scores))\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Combine `count_above_80` and `count_above_90` above into one function, `count_above(values, cutoff)`, using the same generalize-and-parameterize move from the bpm example. Call it twice with the two cutoffs.",
      starter: "scores = [88, 72, 95, 61, 84]\n\ndef count_above(values, cutoff):\n    pass  # combine count_above_80 and count_above_90 into one function\n\nprint(count_above(scores, 80))\nprint(count_above(scores, 90))\n",
      check: { type: "output", expected: "3\n1" },
      hints: [
        "The loop body is identical to count_above_80 and count_above_90 — only the compared number changes.",
        "Replace the hardcoded 80 or 90 with the cutoff parameter.",
        "count = 0, loop over values, if v > cutoff: count += 1, then return count.",
      ],
      solution: "scores = [88, 72, 95, 61, 84]\n\ndef count_above(values, cutoff):\n    count = 0\n    for v in values:\n        if v > cutoff:\n            count += 1\n    return count\n\nprint(count_above(scores, 80))\nprint(count_above(scores, 90))\n",
    },
    {
      type: "text",
      md: "**Near-identical code invites a different kind of bug.** When you build the \"other half\" of a near-duplicate by copying one block and editing it, it's easy to change the number but forget to change something else — like the message the block prints. The two blocks looked so alike that the mistake is hard to spot just by reading.",
    },
    {
      type: "example",
      note: "Bug: the loss branch was copy-pasted from the win branch, and the text never got updated.",
      code: "def announce_result(name, won):\n    if won:\n        print(name, \"wins!\")\n        print(\"Great game!\")\n    else:\n        print(name, \"wins!\")   # copy-paste slip -- this is the losing branch\n        print(\"Nice try -- practice makes perfect.\")\n\nannounce_result(\"Ravi\", True)\nannounce_result(\"Mia\", False)\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "The losing branch of `announce_result` was copy-pasted from the winning branch, and the message never got updated — it says \"wins!\" even when `won` is `False`. Fix the copy-pasted line so the losing branch prints `\"<name> didn't win this time.\"`",
      starter: "def announce_result(name, won):\n    if won:\n        print(name, \"wins!\")\n        print(\"Great game!\")\n    else:\n        print(name, \"wins!\")\n        print(\"Nice try -- practice makes perfect.\")\n\nannounce_result(\"Ravi\", True)\nannounce_result(\"Mia\", False)\n",
      check: { type: "output", expected: "Ravi wins!\nGreat game!\nMia didn't win this time.\nNice try -- practice makes perfect." },
      hints: [
        "The else branch is supposed to run when won is False — a losing message, not a winning one.",
        "Both branches currently print the same first line — that's the copy-paste slip.",
        "Change the else branch's first print to name, \"didn't win this time.\"",
      ],
      solution: "def announce_result(name, won):\n    if won:\n        print(name, \"wins!\")\n        print(\"Great game!\")\n    else:\n        print(name, \"didn't win this time.\")\n        print(\"Nice try -- practice makes perfect.\")\n\nannounce_result(\"Ravi\", True)\nannounce_result(\"Mia\", False)\n",
    },
    {
      type: "text",
      md: "**True duplication has a sharper cost: the two copies quietly drift apart.** `grade_math` and `grade_science` below started as identical copies of the same formula. Then a 5-point curve was added to fix low math grades — but only the math copy got the edit. Nothing crashes. The science grade is just wrong, silently, because the two copies no longer agree on what \"grade\" means.",
    },
    {
      type: "example",
      note: "grade_math and grade_science started identical. Only grade_math got the curve fix -- the bug is that they've drifted apart, not that either one crashes.",
      code: "math_scores = [70, 82, 91]\nscience_scores = [65, 78, 88]\n\ndef grade_math(scores):\n    curved = [s + 5 for s in scores]   # a 5-point curve, added after complaints\n    return sum(curved) / len(curved)\n\ndef grade_science(scores):\n    return sum(scores) / len(scores)   # never got the same curve\n\nprint(grade_math(math_scores))\nprint(grade_science(science_scores))\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "`grade_math` and `grade_science` were identical until a 5-point curve was added to `grade_math` only. Replace both with one shared function, `grade(scores)`, that applies the curve, so a future curve change only has to happen in one place. Call it once for each subject.",
      starter: "math_scores = [70, 82, 91]\nscience_scores = [65, 78, 88]\n\ndef grade_math(scores):\n    curved = [s + 5 for s in scores]\n    return sum(curved) / len(curved)\n\ndef grade_science(scores):\n    return sum(scores) / len(scores)\n\nprint(grade_math(math_scores))\nprint(grade_science(science_scores))\n",
      check: { type: "output", expected: "86.0\n82.0" },
      hints: [
        "Write one function, grade(scores), using grade_math's body (the one with the curve) since that's the intended behavior.",
        "Delete grade_math and grade_science entirely — there should be only one function left.",
        "Call grade(math_scores) then grade(science_scores).",
      ],
      solution: "math_scores = [70, 82, 91]\nscience_scores = [65, 78, 88]\n\ndef grade(scores):\n    curved = [s + 5 for s in scores]\n    return sum(curved) / len(curved)\n\nprint(grade(math_scores))\nprint(grade(science_scores))\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "The teacher changes the curve from +5 to +8 points. Because `grade` is now one shared function, you only need to change the curve in one place and both subjects update. Make that change.",
      starter: "math_scores = [70, 82, 91]\nscience_scores = [65, 78, 88]\n\ndef grade(scores):\n    curved = [s + 5 for s in scores]\n    return sum(curved) / len(curved)\n\nprint(grade(math_scores))\nprint(grade(science_scores))\n",
      check: { type: "output", expected: "89.0\n85.0" },
      hints: [
        "There is exactly one line with a +5 on it now, since the two functions were merged.",
        "Change + 5 to + 8 inside grade.",
        "Both print lines use the same grade function, so both update from this one change.",
      ],
      solution: "math_scores = [70, 82, 91]\nscience_scores = [65, 78, 88]\n\ndef grade(scores):\n    curved = [s + 8 for s in scores]\n    return sum(curved) / len(curved)\n\nprint(grade(math_scores))\nprint(grade(science_scores))\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write `count_moons_above(data, threshold)` using the same generalize-and-parameterize move as `count_above` earlier in this lesson — it should count how many planets in the `moons` dictionary have more moons than `threshold`. Call it twice: once with threshold 50, once with threshold 20.",
      starter: "moons = {\"Saturn\": 146, \"Jupiter\": 95, \"Uranus\": 27, \"Neptune\": 16, \"Mars\": 2, \"Earth\": 1}\n\n# write count_moons_above here, then call it with 50 and with 20\n",
      check: { type: "output", expected: "2\n3" },
      hints: [
        "Loop over the dictionary's values with moons.values(), or over the keys and look up data[key].",
        "count = 0; for v in data.values(): if v > threshold: count += 1; return count.",
        "count_moons_above(moons, 50) counts Saturn and Jupiter. count_moons_above(moons, 20) also includes Uranus.",
      ],
      solution: "moons = {\"Saturn\": 146, \"Jupiter\": 95, \"Uranus\": 27, \"Neptune\": 16, \"Mars\": 2, \"Earth\": 1}\n\ndef count_moons_above(data, threshold):\n    count = 0\n    for v in data.values():\n        if v > threshold:\n            count += 1\n    return count\n\nprint(count_moons_above(moons, 50))\nprint(count_moons_above(moons, 20))\n",
    },
  ],
  codex: {
    topic: "generalizing repetition",
    pattern: "def count_above(tracks, threshold):\n    count = 0\n    for t in tracks:\n        if t > threshold:\n            count += 1\n    return count",
    note: "A near-duplicate is two blocks that do the same job with one value different — find that value, make it a parameter. True duplication is sharper: two copies quietly drift apart the moment only one gets updated.",
  },
});

/* ── Lesson 5.3 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c5s3",
  chapter: 5,
  strand: "core",
  lang: "py",
  timeBudgetMin: 18,
  title: "Reading Someone Else's Code",
  glossary: {
    "magic number": "A literal number embedded directly in code with no explanation of what it means or why that value was chosen.",
    "code smell": "A pattern in working code that isn't necessarily wrong, but makes the code harder to read or trust — a signal worth investigating, not an automatic bug.",
  },
  content: [
    {
      type: "text",
      md: "**Every exercise so far handed you code you'd already seen built.** Lesson 5.6's checkpoint hands you a program someone else wrote — messy, undocumented, and unfamiliar. That's a different skill from writing your own: **reading cold**. The process is two passes, not one. First, skim for the shape: what functions exist, what do their names suggest they do? Second, pick concrete values and trace the code line by line, the same way you traced your own programs since Chapter 1 — just without the comfort of having written it yourself.",
    },
    {
      type: "example",
      note: "Skim first: two functions, tempo_shift sounds like it counts something about tempo changing. Then trace with real values.",
      code: "def tempo_shift(tracks):\n    shifts = 0\n    for i in range(1, len(tracks)):\n        if tracks[i] > tracks[i - 1]:\n            shifts += 1\n    return shifts\n\nbpm = [80, 120, 140, 96]\nprint(tempo_shift(bpm))\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Trace `tempo_shift(bpm)` by hand: for each pair of neighboring tracks, is the second one faster than the first? Count how many times that's true, then predict the output.",
      starter: "def tempo_shift(tracks):\n    shifts = 0\n    for i in range(1, len(tracks)):\n        if tracks[i] > tracks[i - 1]:\n            shifts += 1\n    return shifts\n\nbpm = [80, 120, 140, 96]\nprint(tempo_shift(bpm))\n",
      check: { type: "output", expected: "2" },
      hints: [
        "range(1, len(tracks)) starts at index 1, so the first comparison is tracks[1] vs tracks[0].",
        "80→120 is faster (shift). 120→140 is faster (shift). 140→96 is slower (no shift).",
        "Two of the three neighboring pairs got faster, so shifts ends at 2.",
      ],
      solution: "def tempo_shift(tracks):\n    shifts = 0\n    for i in range(1, len(tracks)):\n        if tracks[i] > tracks[i - 1]:\n            shifts += 1\n    return shifts\n\nbpm = [80, 120, 140, 96]\nprint(tempo_shift(bpm))\n",
    },
    {
      type: "text",
      md: "**Code smell #1: the [[magic number]].** `bpm > 110` runs fine, but nothing in the code says why 110 is the line between slow and fast. Is it a music-industry standard? Someone's guess? A value that used to make sense but never got updated? A **[[code smell]]** isn't a bug — the code above is completely correct — it's a warning sign that makes the code harder to trust, because you can't tell if 110 is important or arbitrary without asking whoever wrote it.",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "The 110 here is a magic number — the code never explains why that's the cutoff. Trace `is_dance_tempo` on each track in `bpm` anyway, and predict the four printed lines.",
      starter: "def is_dance_tempo(bpm):\n    return bpm > 110\n\nfor t in [80, 120, 140, 96]:\n    print(is_dance_tempo(t))\n",
      check: { type: "output", expected: "False\nTrue\nTrue\nFalse" },
      hints: [
        "The function returns True when the track's bpm is above 110, False otherwise.",
        "80 and 96 are both 110 or under. 120 and 140 are both above 110.",
        "In list order: 80 → False, 120 → True, 140 → True, 96 → False.",
      ],
      solution: "def is_dance_tempo(bpm):\n    return bpm > 110\n\nfor t in [80, 120, 140, 96]:\n    print(is_dance_tempo(t))\n",
    },
    {
      type: "text",
      md: "**Code smell #2: deep nesting.** An `if` inside an `if` inside an `if` forces you to hold every outer condition in your head while reading the innermost line — the same **flat-is-better-than-nested** principle from Lesson 2.3, now showing up as a reading cost instead of a writing one. It isn't wrong, and you can still trace it — it just takes more concentration than flat code asks for.",
    },
    {
      type: "example",
      note: "Two levels of nesting. Trace both conditions for each call before deciding which branch runs.",
      code: "def categorize(plays, bpm):\n    if plays > 2000:\n        if bpm > 110:\n            return \"dance hit\"\n        else:\n            return \"hit\"\n    else:\n        if bpm > 110:\n            return \"dance track\"\n        else:\n            return \"track\"\n\nprint(categorize(3200, 120))\nprint(categorize(1000, 90))\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Trace both calls to `categorize` above. For each one, check the outer condition first, then the inner one, to find which of the four return lines runs.",
      starter: "def categorize(plays, bpm):\n    if plays > 2000:\n        if bpm > 110:\n            return \"dance hit\"\n        else:\n            return \"hit\"\n    else:\n        if bpm > 110:\n            return \"dance track\"\n        else:\n            return \"track\"\n\nprint(categorize(3200, 120))\nprint(categorize(1000, 90))\n",
      check: { type: "output", expected: "dance hit\ntrack" },
      hints: [
        "First call: plays=3200 is over 2000, so you're in the top branch. bpm=120 is over 110, so it's the first return.",
        "Second call: plays=1000 is not over 2000, so you're in the bottom branch. bpm=90 is not over 110.",
        "First call returns \"dance hit\". Second call returns \"track\".",
      ],
      solution: "def categorize(plays, bpm):\n    if plays > 2000:\n        if bpm > 110:\n            return \"dance hit\"\n        else:\n            return \"hit\"\n    else:\n        if bpm > 110:\n            return \"dance track\"\n        else:\n            return \"track\"\n\nprint(categorize(3200, 120))\nprint(categorize(1000, 90))\n",
    },
    {
      type: "text",
      md: "**Before you touch someone else's code, assess it first.** Trace what each function does and summarize it in one sentence. Note every smell you spot — magic numbers, deep nesting, or a function doing more than one job (Lesson 5.1's single-responsibility test still applies when you're reading, not just writing). Only after that pass do you start changing anything. This is exactly the pass you'll run at the start of Lesson 5.6's refactor.",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Two functions, one calling the other. Trace `average_bpm(bpm)` first, then use that result to trace `is_upbeat(bpm)`. Predict both printed lines.",
      starter: "def average_bpm(tracks):\n    total = 0\n    for t in tracks:\n        total = total + t\n    return total / len(tracks)\n\ndef is_upbeat(tracks):\n    avg = average_bpm(tracks)\n    if avg > 100:\n        return True\n    else:\n        return False\n\nbpm = [80, 120, 140, 96]\nprint(average_bpm(bpm))\nprint(is_upbeat(bpm))\n",
      check: { type: "output", expected: "109.0\nTrue" },
      hints: [
        "80 + 120 + 140 + 96 = 436. Divide by 4 tracks.",
        "average_bpm(bpm) is 109.0 — that's what is_upbeat compares against 100.",
        "109.0 is greater than 100, so is_upbeat returns True.",
      ],
      solution: "def average_bpm(tracks):\n    total = 0\n    for t in tracks:\n        total = total + t\n    return total / len(tracks)\n\ndef is_upbeat(tracks):\n    avg = average_bpm(tracks)\n    if avg > 100:\n        return True\n    else:\n        return False\n\nbpm = [80, 120, 140, 96]\nprint(average_bpm(bpm))\nprint(is_upbeat(bpm))\n",
    },
  ],
  codex: {
    topic: "reading unfamiliar code",
    pattern: "# 1. Skim: what functions exist, what do their names suggest?\n# 2. Trace: pick real values, follow the code line by line.\n# 3. Note smells: magic numbers, deep nesting, functions doing >1 job.",
    note: "Reading cold is a different skill from writing — skim for shape first, then trace with real values. A code smell (magic number, deep nesting) makes code harder to trust, but it's not automatically a bug.",
  },
});

/* ── Lesson 5.4 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c5s4",
  chapter: 5,
  strand: "core",
  lang: "py",
  timeBudgetMin: 24,
  title: "Debugging: Reading the Crime Scene",
  glossary: {
    "AttributeError": "Raised when you call a method on a value that doesn't have it — very often because a variable holds None instead of the object you expected, usually from a function that forgot to return.",
  },
  content: [
    {
      type: "text",
      md: "**You already know what a traceback is showing you.** Lesson 3.4 taught that every function call opens its own [[frame]] — a private whiteboard that Python erases when the call returns. A traceback is a printout of the frames that were still open when something went wrong: the outermost call first, the crash site last. You've been reading call stacks since Chapter 2's first error message. This lesson makes that reading deliberate.",
    },
    {
      type: "example",
      note: "Three frames deep: track_length_estimate calls seconds_for_beats, which calls to_beats_per_second. Trace outward to inward.",
      code: "def to_beats_per_second(bpm):\n    return bpm / 60\n\ndef seconds_for_beats(bpm, beats):\n    per_second = to_beats_per_second(bpm)\n    return beats / per_second\n\ndef track_length_estimate(bpm, total_beats):\n    seconds = seconds_for_beats(bpm, total_beats)\n    return round(seconds, 1)\n\nprint(track_length_estimate(120, 240))\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Trace all three frames: to_beats_per_second first (it's called first), then seconds_for_beats, then track_length_estimate. Predict the printed value.",
      starter: "def to_beats_per_second(bpm):\n    return bpm / 60\n\ndef seconds_for_beats(bpm, beats):\n    per_second = to_beats_per_second(bpm)\n    return beats / per_second\n\ndef track_length_estimate(bpm, total_beats):\n    seconds = seconds_for_beats(bpm, total_beats)\n    return round(seconds, 1)\n\nprint(track_length_estimate(120, 240))\n",
      check: { type: "output", expected: "120.0" },
      hints: [
        "to_beats_per_second(120) returns 120 / 60.",
        "seconds_for_beats divides total_beats (240) by that result.",
        "240 / 2.0 is 120.0, and round(120.0, 1) doesn't change it.",
      ],
      solution: "def to_beats_per_second(bpm):\n    return bpm / 60\n\ndef seconds_for_beats(bpm, beats):\n    per_second = to_beats_per_second(bpm)\n    return beats / per_second\n\ndef track_length_estimate(bpm, total_beats):\n    seconds = seconds_for_beats(bpm, total_beats)\n    return round(seconds, 1)\n\nprint(track_length_estimate(120, 240))\n",
    },
    {
      type: "text",
      md: "**The crash line is where Python noticed the problem — not necessarily where the mistake happened.** A function that quietly returns `None` doesn't crash itself. The crash surfaces one frame up, wherever the caller tries to use that `None` as if it were a real value. Reading a traceback means walking backward through the frames until you find the one that actually did something wrong — which is often not the frame named at the bottom.",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This crashes with `TypeError: unsupported operand type(s) for /: 'int' and 'NoneType'`, reported inside `seconds_for_beats`. But `seconds_for_beats` didn't cause the mistake — it just tried to use a bad value. Walk back one frame to find where that `None` came from, and fix it there.",
      starter: "def to_beats_per_second(bpm):\n    result = bpm / 60\n\ndef seconds_for_beats(bpm, beats):\n    per_second = to_beats_per_second(bpm)\n    return beats / per_second\n\ndef track_length_estimate(bpm, total_beats):\n    seconds = seconds_for_beats(bpm, total_beats)\n    return round(seconds, 1)\n\nprint(track_length_estimate(120, 240))\n",
      check: { type: "output", expected: "120.0" },
      hints: [
        "seconds_for_beats calls to_beats_per_second and expects a number back — but to_beats_per_second never returns anything.",
        "A function with no return statement returns None. That None is what crashes the division one frame up.",
        "Add return in front of the calculation inside to_beats_per_second.",
      ],
      solution: "def to_beats_per_second(bpm):\n    return bpm / 60\n\ndef seconds_for_beats(bpm, beats):\n    per_second = to_beats_per_second(bpm)\n    return beats / per_second\n\ndef track_length_estimate(bpm, total_beats):\n    seconds = seconds_for_beats(bpm, total_beats)\n    return round(seconds, 1)\n\nprint(track_length_estimate(120, 240))\n",
    },
    {
      type: "text",
      md: "**Each exception class points at a different family of mistake.** You've met most of these since Chapter 1 — here's what each one means and the first move to make when you see it.",
    },
    {
      type: "table",
      title: "Error class → first move",
      head: ["Error", "Usually means", "First move"],
      rows: [
        ["`NameError`", "A name was used before it was assigned, or misspelled.", "Check the spelling, and check it was assigned before this line ran."],
        ["`TypeError`", "An operation got a value of the wrong type — often `None` from a forgotten `return`.", "Check what the value actually is with `print(type(x))` right before the crash."],
        ["`IndexError`", "A list index is out of range.", "Print `len(the_list)` and the index right before the access."],
        ["`KeyError`", "A dictionary key doesn't exist — often a typo.", "Print the dictionary's actual keys and compare, character by character."],
        ["`ValueError`", "The type is right but the value can't be used this way (`int(\"abc\")`).", "Print the raw value right before the conversion."],
        ["`ZeroDivisionError`", "Dividing by zero — usually a symptom of a count being empty somewhere upstream.", "Trace back to why the denominator ended up at zero."],
        ["`[[AttributeError]]`", "Calling a method on a value that doesn't have it — very often `None` again.", "Same move as TypeError: print the value's type right before the crash."],
      ],
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This crashes with `KeyError: 'Blinding Lights'`, reported inside `lookup`. But the dictionary itself was built with the wrong capitalization — walk back to `build_bpm_table` and fix the typo there.",
      starter: "def build_bpm_table():\n    return {\"Blinding lights\": 171, \"Dance Monkey\": 98}\n\ndef lookup(title, table):\n    return table[title]\n\ndef describe(title, table):\n    bpm = lookup(title, table)\n    return title + \": \" + str(bpm) + \" bpm\"\n\ntable = build_bpm_table()\nprint(describe(\"Blinding Lights\", table))\n",
      check: { type: "output", expected: "Blinding Lights: 171 bpm" },
      hints: [
        "lookup only reads the dictionary — it can't be the source of a wrong key. The dictionary was built wrong somewhere earlier.",
        "Compare the key inside build_bpm_table letter by letter against \"Blinding Lights\" in the print call.",
        "\"Blinding lights\" has a lowercase l — change it to match \"Blinding Lights\".",
      ],
      solution: "def build_bpm_table():\n    return {\"Blinding Lights\": 171, \"Dance Monkey\": 98}\n\ndef lookup(title, table):\n    return table[title]\n\ndef describe(title, table):\n    bpm = lookup(title, table)\n    return title + \": \" + str(bpm) + \" bpm\"\n\ntable = build_bpm_table()\nprint(describe(\"Blinding Lights\", table))\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This crashes with `IndexError: list index out of range`, reported inside `announce_top`. `top_three_titles` correctly returns 3 titles (indexes 0, 1, 2) — the mistake is that `announce_top` asks for index 3, which was never intended to mean \"the winner.\" Fix the index.",
      starter: "def top_three_titles(titles):\n    return titles[0:3]\n\ndef announce_top(titles):\n    top = top_three_titles(titles)\n    return \"Winner: \" + top[3]\n\ntitles = [\"Dance Monkey\", \"Blinding Lights\", \"Shape of You\"]\nprint(announce_top(titles))\n",
      check: { type: "output", expected: "Winner: Dance Monkey" },
      hints: [
        "top_three_titles never touches index 3 — it always returns exactly 3 items, at indexes 0, 1, 2.",
        "\"The winner\" means the first title in the top three, not the fourth.",
        "Change top[3] to top[0].",
      ],
      solution: "def top_three_titles(titles):\n    return titles[0:3]\n\ndef announce_top(titles):\n    top = top_three_titles(titles)\n    return \"Winner: \" + top[0]\n\ntitles = [\"Dance Monkey\", \"Blinding Lights\", \"Shape of You\"]\nprint(announce_top(titles))\n",
    },
  ],
  codex: {
    topic: "reading the crime scene",
    pattern: "# A traceback lists frames outermost-first, crash site last.\n# The crash line is where Python NOTICED the problem --\n# walk backward through the frames to find where it started.",
    note: "A traceback is the call stack from Lesson 3.4, printed out. The reported line is the symptom; the actual mistake is often one or more frames away — especially when a forgotten return lets None quietly propagate upward.",
  },
});
