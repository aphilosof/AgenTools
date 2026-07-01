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
      type: "text",
      md: "**The same split works on sound, not just data.** \"Play a short arpeggio, with a bass note underneath\" hides two verbs too: *play the bass* and *play the arpeggio*. Same process as above, applied to Lesson 1.7's `play()`/`sleep()` and Lesson 4.6's melody-as-a-list idea.",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write `play_bass(root, drop)` — it plays one note, `root + drop`, then sleeps 0.4 seconds — and `play_arpeggio(intervals, root)` — it plays every interval in `intervals` transposed by `root`, sleeping 0.4 seconds between notes. `perform` calls both; write it too.",
      starter: "root = 60\nchord = [0, 4, 7, 12]\nbass_drop = -12\n\n# write play_bass(root, drop), play_arpeggio(intervals, root), and\n# perform(intervals, root, drop) here, then call perform(chord, root, bass_drop)\n",
      check: {
        type: "calls",
        calls: [
          { fn: "play", note: 48 },
          { fn: "play", note: 60 }, { fn: "play", note: 64 }, { fn: "play", note: 67 }, { fn: "play", note: 72 },
        ],
      },
      hints: [
        "play_bass is two lines: play(root + drop), then sleep(0.4).",
        "play_arpeggio loops over intervals: for i in intervals: play(root + i); sleep(0.4).",
        "perform should call play_bass first (the bass plays before the arpeggio), then play_arpeggio.",
      ],
      solution: "root = 60\nchord = [0, 4, 7, 12]\nbass_drop = -12\n\ndef play_bass(root, drop):\n    play(root + drop)\n    sleep(0.4)\n\ndef play_arpeggio(intervals, root):\n    for i in intervals:\n        play(root + i)\n        sleep(0.4)\n\ndef perform(intervals, root, drop):\n    play_bass(root, drop)\n    play_arpeggio(intervals, root)\n\nperform(chord, root, bass_drop)\n",
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
      rung: 5,
      prompt: "`highest` and `passed_count` are already tested alone above and correct. Write `average` the same way you'd test it: it should return the sum of `values` divided by how many values there are.",
      starter: "scores = [88, 72, 95, 61, 84]\n\ndef average(values):\n    pass  # return the sum of values divided by how many there are\n\ndef highest(values):\n    return max(values)\n\ndef passed_count(values, cutoff):\n    count = 0\n    for v in values:\n        if v >= cutoff:\n            count += 1\n    return count\n\ndef summarize(values, cutoff):\n    print(\"Average:\", average(values))\n    print(\"Highest:\", highest(values))\n    print(\"Passed:\", passed_count(values, cutoff))\n\nsummarize(scores, 70)\n",
      check: { type: "output", expected: "Average: 80.0\nHighest: 95\nPassed: 4" },
      hints: [
        "Test it in your head first, the way the lesson above did: average([1, 1]) should be 1.0.",
        "average should divide by how many values were actually passed in — not a number you count by hand.",
        "return sum(values) / len(values)",
      ],
      solution: "scores = [88, 72, 95, 61, 84]\n\ndef average(values):\n    return sum(values) / len(values)\n\ndef highest(values):\n    return max(values)\n\ndef passed_count(values, cutoff):\n    count = 0\n    for v in values:\n        if v >= cutoff:\n            count += 1\n    return count\n\ndef summarize(values, cutoff):\n    print(\"Average:\", average(values))\n    print(\"Highest:\", highest(values))\n    print(\"Passed:\", passed_count(values, cutoff))\n\nsummarize(scores, 70)\n",
    },
    {
      type: "text",
      md: "**A name is a debugging tool, not decoration.** Every name you pick is something a reader has to remember while reading the rest of the function — often that reader is future you, debugging late at night. A name that says what the value *is* (`counts`, a dictionary of letter counts) costs nothing to remember. A name that says nothing (`x`, `data`, `temp`) costs real attention. So does a name that looks almost like a different variable (`count` vs `counts`). That cost shows up as bugs. It becomes easy to type the wrong name by accident, and Python will not stop you — it will run the wrong line without complaint, or crash somewhere that doesn't point at the real problem.",
    },
    {
      type: "example",
      note: "Bug: segment and segments are one letter apart and mean very different things — one line, drawn so far, versus every line drawn so far.",
      code: "def draw_spiral(steps):\n    segments = []   # a list: every line length used so far\n    segment = 5     # a single number: the CURRENT line length\n    for i in range(steps):\n        forward(segment)\n        segments.append(segment)\n        right(20)\n        segment += 5\n    return len(segment)  # TypeError: object of type 'int' has no len()",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This crashes with `TypeError: object of type 'int' has no len()`. Two variables have almost the same name, `segment` and `segments`, and the return line grabbed the wrong one. Fix it so the function returns how many lines it drew.",
      starter: "def draw_spiral(steps):\n    segments = []\n    segment = 5\n    for i in range(steps):\n        forward(segment)\n        segments.append(segment)\n        right(20)\n        segment += 5\n    return len(segment)\n\nprint(draw_spiral(4))\n",
      check: { type: "output", expected: "4" },
      hints: [
        "len() needs something with a length, like a list. segment (no s) is a plain number.",
        "segments (with an s) is the list that gets one entry appended per line drawn.",
        "Change len(segment) to len(segments).",
      ],
      solution: "def draw_spiral(steps):\n    segments = []\n    segment = 5\n    for i in range(steps):\n        forward(segment)\n        segments.append(segment)\n        right(20)\n        segment += 5\n    return len(segments)\n\nprint(draw_spiral(4))\n",
    },
    {
      type: "text",
      md: "**Name booleans like yes/no questions.** A variable that holds `True` or `False` should read naturally after `if`. `is_passed`, `has_won`, and `passed` all read like questions; `flag` and `check` do not — they tell you a boolean exists, but not what question it answers. `if flag:` forces the reader to scroll up and find the assignment before the line makes sense. `if passed:` doesn't.",
    },
    {
      type: "example",
      note: "flag tells you a boolean exists, but not what question it answers — you have to scroll up to find out.",
      code: "def check_beat(beat_number):\n    flag = beat_number % 4 == 1\n    return flag\n\nprint(check_beat(1))\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "`check_beat` answers \"is this the downbeat — the first beat of a 4-beat bar?\" Rename `flag` to a name that reads like that yes/no question. Don't change what the function returns or how it's called.",
      starter: "def check_beat(beat_number):\n    flag = beat_number % 4 == 1\n    return flag\n\nprint(check_beat(1))\nprint(check_beat(2))\n",
      check: { type: "output", expected: "True\nFalse" },
      hints: [
        "The function checks whether beat_number is the first beat of the bar — the boolean is answering \"is this the downbeat?\"",
        "A name like is_downbeat reads naturally as if is_downbeat: — flag does not.",
        "Rename every occurrence of flag inside the function, including the return line.",
      ],
      solution: "def check_beat(beat_number):\n    is_downbeat = beat_number % 4 == 1\n    return is_downbeat\n\nprint(check_beat(1))\nprint(check_beat(2))\n",
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
    {
      type: "text",
      md: "**And it works the same way on a chart.** Lesson 4.7 taught `bar()` for charting a dictionary. Decomposing a chart-and-summary report is the same split as everything above: one function draws it, one function computes a number from it, one function calls both.",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write `chart_moons(data)` — it charts the dictionary with `bar()` — and `total_moons(data)` — it returns the sum of every planet's moon count. Write `summarize_moons(data)` too: it calls both and prints `\"Total moons:\", total_moons(data)`.",
      starter: "moons = {\"Saturn\": 146, \"Jupiter\": 95, \"Uranus\": 27, \"Neptune\": 16, \"Mars\": 2, \"Earth\": 1}\n\n# write chart_moons(data), total_moons(data), and summarize_moons(data) here,\n# then call summarize_moons(moons)\n",
      check: { type: "output", expected: "Total moons: 287" },
      hints: [
        "chart_moons: bar(list(data.keys()), list(data.values())).",
        "total_moons: return sum(data.values()).",
        "summarize_moons calls chart_moons(data) then prints \"Total moons:\" and total_moons(data).",
      ],
      solution: "moons = {\"Saturn\": 146, \"Jupiter\": 95, \"Uranus\": 27, \"Neptune\": 16, \"Mars\": 2, \"Earth\": 1}\n\ndef chart_moons(data):\n    bar(list(data.keys()), list(data.values()))\n\ndef total_moons(data):\n    return sum(data.values())\n\ndef summarize_moons(data):\n    chart_moons(data)\n    print(\"Total moons:\", total_moons(data))\n\nsummarize_moons(moons)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write `play_theme(intervals, root, gap)` from scratch — it should play each interval in `intervals` transposed by `root`, with `gap` seconds of sleep between notes. Call it with Ode to Joy's intervals (from Lesson 4.10), root 60, gap 0.4.",
      starter: "ode_to_joy = [4, 4, 5, 7, 7, 5, 4, 2]\n\n# write play_theme(intervals, root, gap) here, then call\n# play_theme(ode_to_joy, 60, 0.4)\n",
      check: {
        type: "calls",
        calls: [
          { fn: "play", note: 64 }, { fn: "play", note: 64 }, { fn: "play", note: 65 }, { fn: "play", note: 67 },
          { fn: "play", note: 67 }, { fn: "play", note: 65 }, { fn: "play", note: 64 }, { fn: "play", note: 62 },
        ],
      },
      hints: [
        "def play_theme(intervals, root, gap): then loop over intervals.",
        "For each interval i, play(root + i), then sleep(gap).",
        "play_theme(ode_to_joy, 60, 0.4) — the function must be defined before this call.",
      ],
      solution: "ode_to_joy = [4, 4, 5, 7, 7, 5, 4, 2]\n\ndef play_theme(intervals, root, gap):\n    for i in intervals:\n        play(root + i)\n        sleep(gap)\n\nplay_theme(ode_to_joy, 60, 0.4)\n",
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
      note: "Bug: draw_result's else branch (the loss shape) was copy-pasted from the if branch (the win shape), and the numbers never got updated.",
      code: "def draw_result(won):\n    if won:\n        forward(50)\n        right(120)\n        forward(50)\n    else:\n        forward(50)   # copy-paste slip -- this is the losing shape\n        right(120)\n        forward(50)\n\ndraw_result(True)\ndraw_result(False)\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "`draw_result`'s losing shape was copy-pasted from the winning shape, and the numbers never got updated — it draws the exact same shape either way. Fix the else branch so a loss draws a shorter, sharper shape: `forward(30)`, `right(150)`, `forward(30)`.",
      starter: "def draw_result(won):\n    if won:\n        forward(50)\n        right(120)\n        forward(50)\n    else:\n        forward(50)\n        right(120)\n        forward(50)\n\ndraw_result(True)\ndraw_result(False)\n",
      check: {
        type: "calls",
        calls: [
          { fn: "forward", val: 50 }, { fn: "right", val: 120 }, { fn: "forward", val: 50 },
          { fn: "forward", val: 30 }, { fn: "right", val: 150 }, { fn: "forward", val: 30 },
        ],
      },
      hints: [
        "The else branch is supposed to run when won is False — a different shape than the win shape, not the same one.",
        "Both branches currently use 50/120/50 — that's the copy-paste slip.",
        "Change the else branch's three values to 30, 150, 30.",
      ],
      solution: "def draw_result(won):\n    if won:\n        forward(50)\n        right(120)\n        forward(50)\n    else:\n        forward(30)\n        right(150)\n        forward(30)\n\ndraw_result(True)\ndraw_result(False)\n",
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
      type: "text",
      md: "**The same move works on sound and on charts.** A warning beeped 3 times, then a different one beeped 5 times — same near-duplicate shape as `count_above`. And Lesson 4.7's `bar()` charts generalize exactly like everything else here: the threshold is the one thing that varies.",
    },
    {
      type: "example",
      note: "play_beeps_3 and play_beeps_5 are near-duplicates — same loop, different repeat count.",
      code: "def play_beeps_3():\n    for i in range(3):\n        play(72)\n        sleep(0.3)\n\ndef play_beeps_5():\n    for i in range(5):\n        play(72)\n        sleep(0.3)\n\nplay_beeps_3()\nplay_beeps_5()\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Combine `play_beeps_3` and `play_beeps_5` into one function, `play_beeps(count)`, using the same generalize-and-parameterize move as `count_above`. Call it with 3, then with 5.",
      starter: "def play_beeps(count):\n    pass  # combine play_beeps_3 and play_beeps_5 into one function\n\nplay_beeps(3)\nplay_beeps(5)\n",
      check: {
        type: "calls",
        calls: [
          { fn: "play", note: 72 }, { fn: "play", note: 72 }, { fn: "play", note: 72 },
          { fn: "play", note: 72 }, { fn: "play", note: 72 }, { fn: "play", note: 72 }, { fn: "play", note: 72 }, { fn: "play", note: 72 },
        ],
      },
      hints: [
        "The loop body is identical in both near-duplicates — only the repeat count changes.",
        "Replace the hardcoded 3 or 5 in range(...) with the count parameter.",
        "for i in range(count): play(72); sleep(0.3)",
      ],
      solution: "def play_beeps(count):\n    for i in range(count):\n        play(72)\n        sleep(0.3)\n\nplay_beeps(3)\nplay_beeps(5)\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete `chart_above(data, threshold)` by combining the pattern from `count_above` with Lesson 4.7's `bar()` — chart every song whose plays are above `threshold`, and return how many qualified.",
      starter: "song_plays = {\"Blinding Lights\": 3200, \"Shape of You\": 2800, \"Dance Monkey\": 2500}\n\ndef chart_above(data, threshold):\n    pass  # names = songs above threshold; bar(names, their values); return len(names)\n\nprint(chart_above(song_plays, 2000))\nprint(chart_above(song_plays, 3000))\n",
      check: { type: "output", expected: "3\n1" },
      hints: [
        "names = [k for k in data if data[k] > threshold] gives you the qualifying keys.",
        "values = [data[k] for k in names], then bar(names, values) to chart them.",
        "return len(names) at the end.",
      ],
      solution: "song_plays = {\"Blinding Lights\": 3200, \"Shape of You\": 2800, \"Dance Monkey\": 2500}\n\ndef chart_above(data, threshold):\n    names = [k for k in data if data[k] > threshold]\n    values = [data[k] for k in names]\n    bar(names, values)\n    return len(names)\n\nprint(chart_above(song_plays, 2000))\nprint(chart_above(song_plays, 3000))\n",
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
      note: "Two levels of nesting, and a real shape gets drawn either way. Trace both conditions for each call before deciding which label and which shape you get.",
      code: "def describe_and_draw(sides, size):\n    if sides > 4:\n        if size > 50:\n            label = \"big polygon\"\n        else:\n            label = \"small polygon\"\n    else:\n        if size > 50:\n            label = \"big basic shape\"\n        else:\n            label = \"small basic shape\"\n    for i in range(sides):\n        forward(size)\n        right(360 / sides)\n    return label\n\nprint(describe_and_draw(6, 80))\nprint(describe_and_draw(3, 20))\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Trace both calls to `describe_and_draw` above. For each one, check the outer condition first, then the inner one, to find which of the four labels comes back.",
      starter: "def describe_and_draw(sides, size):\n    if sides > 4:\n        if size > 50:\n            label = \"big polygon\"\n        else:\n            label = \"small polygon\"\n    else:\n        if size > 50:\n            label = \"big basic shape\"\n        else:\n            label = \"small basic shape\"\n    for i in range(sides):\n        forward(size)\n        right(360 / sides)\n    return label\n\nprint(describe_and_draw(6, 80))\nprint(describe_and_draw(3, 20))\n",
      check: { type: "output", expected: "big polygon\nsmall basic shape" },
      hints: [
        "First call: sides=6 is over 4, so you're in the top branch. size=80 is over 50, so it's the first label.",
        "Second call: sides=3 is not over 4, so you're in the bottom branch. size=20 is not over 50.",
        "First call returns \"big polygon\". Second call returns \"small basic shape\".",
      ],
      solution: "def describe_and_draw(sides, size):\n    if sides > 4:\n        if size > 50:\n            label = \"big polygon\"\n        else:\n            label = \"small polygon\"\n    else:\n        if size > 50:\n            label = \"big basic shape\"\n        else:\n            label = \"small basic shape\"\n    for i in range(sides):\n        forward(size)\n        right(360 / sides)\n    return label\n\nprint(describe_and_draw(6, 80))\nprint(describe_and_draw(3, 20))\n",
    },
    {
      type: "text",
      md: "**Before you touch someone else's code, assess it first.** Trace what each function does and summarize it in one sentence. Note every smell you spot — magic numbers, deep nesting, or a function doing more than one job (Lesson 5.1's single-responsibility test still applies when you're reading, not just writing). Only after that pass do you start changing anything. This is exactly the pass you'll run at the start of Lesson 5.6's refactor.",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Two functions, one calling the other. Trace `average_bpm(bpm)` first, then use that result to trace `is_upbeat(bpm)`. Predict both printed lines.",
      starter: "def average_bpm(tracks):\n    plot(list(range(len(tracks))), tracks)\n    total = 0\n    for t in tracks:\n        total = total + t\n    return total / len(tracks)\n\ndef is_upbeat(tracks):\n    avg = average_bpm(tracks)\n    if avg > 100:\n        return True\n    else:\n        return False\n\nbpm = [80, 120, 140, 96]\nprint(average_bpm(bpm))\nprint(is_upbeat(bpm))\n",
      check: { type: "output", expected: "109.0\nTrue" },
      hints: [
        "80 + 120 + 140 + 96 = 436. Divide by 4 tracks.",
        "average_bpm(bpm) is 109.0 — that's what is_upbeat compares against 100.",
        "109.0 is greater than 100, so is_upbeat returns True.",
      ],
      solution: "def average_bpm(tracks):\n    total = 0\n    for t in tracks:\n        total = total + t\n    return total / len(tracks)\n\ndef is_upbeat(tracks):\n    avg = average_bpm(tracks)\n    if avg > 100:\n        return True\n    else:\n        return False\n\nbpm = [80, 120, 140, 96]\nprint(average_bpm(bpm))\nprint(is_upbeat(bpm))\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Trace `play_and_report` on this drum pattern from Lesson 4.6: it plays a note for every `1` and always sleeps, then reports how many beats fired using `beats_in_bar`. Predict the printed line.",
      starter: "def beats_in_bar(pattern):\n    count = 0\n    for beat in pattern:\n        if beat == 1:\n            count += 1\n    return count\n\ndef play_and_report(pattern):\n    for beat in pattern:\n        if beat == 1:\n            play(60)\n        sleep(0.25)\n    print(\"Beats:\", beats_in_bar(pattern))\n\nplay_and_report([1, 0, 1, 0, 1, 1])\n",
      check: { type: "output", expected: "Beats: 4" },
      hints: [
        "beats_in_bar just counts how many 1s are in the pattern.",
        "The pattern [1, 0, 1, 0, 1, 1] has four 1s.",
        "The play() calls don't affect the printed count — only beats_in_bar does.",
      ],
      solution: "def beats_in_bar(pattern):\n    count = 0\n    for beat in pattern:\n        if beat == 1:\n            count += 1\n    return count\n\ndef play_and_report(pattern):\n    for beat in pattern:\n        if beat == 1:\n            play(60)\n        sleep(0.25)\n    print(\"Beats:\", beats_in_bar(pattern))\n\nplay_and_report([1, 0, 1, 0, 1, 1])\n",
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
      note: "Three frames deep: track_report calls play_click_track, which calls beat_duration. Trace outward to inward — and it genuinely plays a click per beat.",
      code: "def beat_duration(bpm):\n    return 60 / bpm\n\ndef play_click_track(bpm, beats):\n    duration = beat_duration(bpm)\n    for i in range(beats):\n        play(72)\n        sleep(duration)\n    return duration\n\ndef track_report(bpm, beats):\n    duration = play_click_track(bpm, beats)\n    return round(duration, 2)\n\nprint(track_report(120, 4))\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Trace all three frames: beat_duration first (it's called first), then play_click_track, then track_report. Predict the printed value.",
      starter: "def beat_duration(bpm):\n    return 60 / bpm\n\ndef play_click_track(bpm, beats):\n    duration = beat_duration(bpm)\n    for i in range(beats):\n        play(72)\n        sleep(duration)\n    return duration\n\ndef track_report(bpm, beats):\n    duration = play_click_track(bpm, beats)\n    return round(duration, 2)\n\nprint(track_report(120, 4))\n",
      check: { type: "output", expected: "0.5" },
      hints: [
        "beat_duration(120) returns 60 / 120.",
        "play_click_track plays 4 clicks and returns that same duration.",
        "track_report rounds 0.5 to 2 decimal places, which doesn't change it.",
      ],
      solution: "def beat_duration(bpm):\n    return 60 / bpm\n\ndef play_click_track(bpm, beats):\n    duration = beat_duration(bpm)\n    for i in range(beats):\n        play(72)\n        sleep(duration)\n    return duration\n\ndef track_report(bpm, beats):\n    duration = play_click_track(bpm, beats)\n    return round(duration, 2)\n\nprint(track_report(120, 4))\n",
    },
    {
      type: "text",
      md: "**The crash line is where Python noticed the problem — not necessarily where the mistake happened.** A function that quietly returns `None` doesn't crash itself. The crash surfaces one frame up, wherever the caller tries to use that `None` as if it were a real value. Reading a traceback means walking backward through the frames until you find the one that actually did something wrong — which is often not the frame named at the bottom.",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This crashes on the first `sleep(duration)` call, reported inside `play_click_track`. But `play_click_track` didn't cause the mistake — it just tried to use a bad value. Walk back one frame to find where that `None` came from, and fix it there.",
      starter: "def beat_duration(bpm):\n    result = 60 / bpm\n\ndef play_click_track(bpm, beats):\n    duration = beat_duration(bpm)\n    for i in range(beats):\n        play(72)\n        sleep(duration)\n    return duration\n\ndef track_report(bpm, beats):\n    duration = play_click_track(bpm, beats)\n    return round(duration, 2)\n\nprint(track_report(120, 4))\n",
      check: { type: "output", expected: "0.5" },
      hints: [
        "play_click_track calls beat_duration and expects a number back — but beat_duration never returns anything.",
        "A function with no return statement returns None. That None is what crashes sleep() one frame up.",
        "Add return in front of the calculation inside beat_duration.",
      ],
      solution: "def beat_duration(bpm):\n    return 60 / bpm\n\ndef play_click_track(bpm, beats):\n    duration = beat_duration(bpm)\n    for i in range(beats):\n        play(72)\n        sleep(duration)\n    return duration\n\ndef track_report(bpm, beats):\n    duration = play_click_track(bpm, beats)\n    return round(duration, 2)\n\nprint(track_report(120, 4))\n",
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
      prompt: "This crashes with `IndexError: list index out of range`, reported inside `draw_winner`. `top_three_sides` correctly returns 3 side-counts (indexes 0, 1, 2) — the mistake is that `draw_winner` asks for index 3, which was never intended to mean \"the winner.\" Fix the index, then it draws the winning shape and returns its side count.",
      starter: "def top_three_sides(polygon_sides):\n    return polygon_sides[0:3]\n\ndef draw_winner(polygon_sides):\n    top = top_three_sides(polygon_sides)\n    winner = top[3]\n    for i in range(winner):\n        forward(50)\n        right(360 / winner)\n    return winner\n\nsides_list = [6, 4, 3]\nprint(draw_winner(sides_list))\n",
      check: { type: "output", expected: "6" },
      hints: [
        "top_three_sides never touches index 3 — it always returns exactly 3 items, at indexes 0, 1, 2.",
        "\"The winner\" means the first entry in the top three, not the fourth.",
        "Change top[3] to top[0].",
      ],
      solution: "def top_three_sides(polygon_sides):\n    return polygon_sides[0:3]\n\ndef draw_winner(polygon_sides):\n    top = top_three_sides(polygon_sides)\n    winner = top[0]\n    for i in range(winner):\n        forward(50)\n        right(360 / winner)\n    return winner\n\nsides_list = [6, 4, 3]\nprint(draw_winner(sides_list))\n",
    },
  ],
  codex: {
    topic: "reading the crime scene",
    pattern: "# A traceback lists frames outermost-first, crash site last.\n# The crash line is where Python NOTICED the problem --\n# walk backward through the frames to find where it started.",
    note: "A traceback is the call stack from Lesson 3.4, printed out. The reported line is the symptom; the actual mistake is often one or more frames away — especially when a forgotten return lets None quietly propagate upward.",
  },
});

/* ── Lesson 5.5 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c5s5",
  chapter: 5,
  strand: "core",
  lang: "py",
  timeBudgetMin: 24,
  title: "Debugging: The Scientist's Method",
  glossary: {
    "silent bug": "A bug that produces no error message at all — the program runs to completion, but the output is simply wrong. There is no traceback pointing anywhere, so you have to notice the wrongness yourself.",
    "minimal reproducible example": "The smallest, simplest input that still makes a suspected bug show up — used to test a hypothesis without wading through a large program or dataset.",
  },
  content: [
    {
      type: "text",
      md: "**Debugging is a loop, not a checklist you run once.** Observe the wrong behavior. Form ONE specific hypothesis about the cause — not \"something's broken,\" but \"I think X is happening because Y.\" Predict what a small test would show if you're right. Run that test. If you're wrong, that's not failure — it's information, and you revise the hypothesis and go again. A single pass through this loop is normal; needing three or four is normal too.",
    },
    {
      type: "example",
      note: "Hypothesis 1 (len is wrong) is tested and rejected. Hypothesis 2 (the loop total is wrong) is tested and confirmed -- that's the loop, not a straight line.",
      code: "song_plays = {\"Dance Monkey\": 2500, \"Shape of You\": 2800, \"Blinding Lights\": 3200}\n\ndef average_plays(plays):\n    bar(list(plays.keys()), list(plays.values()))\n    total = 0\n    for song in plays:\n        total = total + 1   # bug\n    return round(total / len(plays), 1)\n\n# Hypothesis 1: maybe len(plays) is wrong.\nprint(len(song_plays))            # 3 -- correct, this hypothesis is rejected\n\n# Hypothesis 2, revised: maybe the loop total is wrong.\nprint(average_plays(song_plays))  # 1.0 -- far too low, this IS the bug\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "A first hypothesis — that `len(plays)` is somehow wrong — turned out to be correct on inspection (it's 3, as expected), which rules it out. The real bug is in the loop: `total` is counting how many songs there are, not adding up their play counts. Fix the loop body.",
      starter: "song_plays = {\"Dance Monkey\": 2500, \"Shape of You\": 2800, \"Blinding Lights\": 3200}\n\ndef average_plays(plays):\n    bar(list(plays.keys()), list(plays.values()))\n    total = 0\n    for song in plays:\n        total = total + 1\n    return round(total / len(plays), 1)\n\nprint(average_plays(song_plays))\n",
      check: { type: "output", expected: "2833.3" },
      hints: [
        "total + 1 adds one for every song, regardless of how many plays it had — that's counting songs, not summing plays.",
        "You need each song's actual play count, which is plays[song] inside the loop.",
        "Change total = total + 1 to total = total + plays[song].",
      ],
      solution: "song_plays = {\"Dance Monkey\": 2500, \"Shape of You\": 2800, \"Blinding Lights\": 3200}\n\ndef average_plays(plays):\n    bar(list(plays.keys()), list(plays.values()))\n    total = 0\n    for song in plays:\n        total = total + plays[song]\n    return round(total / len(plays), 1)\n\nprint(average_plays(song_plays))\n",
    },
    {
      type: "text",
      md: "**Test the suspect alone, on the smallest input you can check by hand.** Before trusting `average_plays` on the real 3-song dictionary, run it on a tiny 2-item dictionary instead. Pick numbers where you already know the right answer. This is a **[[minimal reproducible example]]**. A hand-checkable input tells you right away if the function is wrong. The real dataset can't do that — a strange-looking number there might be a bug, or it might just be surprising real data.",
    },
    {
      type: "example",
      note: "2 and 4 average to 3 by hand. If average_plays returned anything else here, you'd know instantly, without touching the real dataset.",
      code: "def average_plays(plays):\n    bar(list(plays.keys()), list(plays.values()))\n    total = 0\n    for song in plays:\n        total = total + plays[song]\n    return round(total / len(plays), 1)\n\ntiny = {\"A\": 2, \"B\": 4}\nprint(average_plays(tiny))\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Trace `average_plays(tiny)` by hand — you should be able to check this one without running it. Predict the output.",
      starter: "def average_plays(plays):\n    bar(list(plays.keys()), list(plays.values()))\n    total = 0\n    for song in plays:\n        total = total + plays[song]\n    return round(total / len(plays), 1)\n\ntiny = {\"A\": 2, \"B\": 4}\nprint(average_plays(tiny))\n",
      check: { type: "output", expected: "3.0" },
      hints: [
        "total adds up every value in the dictionary: 2 + 4.",
        "There are 2 entries, so divide the sum by 2.",
        "6 / 2 is 3.0, and round(3.0, 1) doesn't change it.",
      ],
      solution: "def average_plays(plays):\n    bar(list(plays.keys()), list(plays.values()))\n    total = 0\n    for song in plays:\n        total = total + plays[song]\n    return round(total / len(plays), 1)\n\ntiny = {\"A\": 2, \"B\": 4}\nprint(average_plays(tiny))\n",
    },
    {
      type: "text",
      md: "**Not every bug announces itself.** Every bug this chapter has fixed so far crashed with a traceback pointing somewhere. A **[[silent bug]]** doesn't: the program runs cleanly, prints a number, and stops — and that number is simply wrong. There's no red text to anchor a hypothesis on, which is exactly when it's tempting to start changing lines at random and hoping something works. Resist that. The fix is the same loop as always — you just have to notice something is wrong before you can hypothesize about it, usually by checking the output against a value you computed some other way.",
    },
    {
      type: "example",
      note: "This is supposed to match Lesson 5.3's is_dance_tempo, which used bpm > 110. Read exactly what's written here, not what you'd assume it does.",
      code: "def count_dance_tracks(tracks):\n    count = 0\n    for t in tracks:\n        if t >= 110:\n            play(72)\n            count += 1\n        sleep(0.1)\n    return count\n\nbpm = [80, 110, 140, 96]\nprint(count_dance_tracks(bpm))\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Trace this exactly as written — not as you'd expect a function named count_dance_tracks to behave. Predict what it prints for this list.",
      starter: "def count_dance_tracks(tracks):\n    count = 0\n    for t in tracks:\n        if t >= 110:\n            play(72)\n            count += 1\n        sleep(0.1)\n    return count\n\nbpm = [80, 110, 140, 96]\nprint(count_dance_tracks(bpm))\n",
      check: { type: "output", expected: "2" },
      hints: [
        "The condition is t >= 110, which includes a track at exactly 110.",
        "110 and 140 both satisfy t >= 110. 80 and 96 do not.",
        "Two tracks qualify, so the output is 2 — even though this doesn't crash, it doesn't mean it's correct.",
      ],
      solution: "def count_dance_tracks(tracks):\n    count = 0\n    for t in tracks:\n        if t >= 110:\n            play(72)\n            count += 1\n        sleep(0.1)\n    return count\n\nbpm = [80, 110, 140, 96]\nprint(count_dance_tracks(bpm))\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "You just confirmed this prints 2. But Lesson 5.3's `is_dance_tempo` defined dance tempo as strictly above 110, not 110-or-above — a track at exactly 110 shouldn't count. Fix the comparison so a track at exactly 110 is excluded.",
      starter: "def count_dance_tracks(tracks):\n    count = 0\n    for t in tracks:\n        if t >= 110:\n            play(72)\n            count += 1\n        sleep(0.1)\n    return count\n\nbpm = [80, 110, 140, 96]\nprint(count_dance_tracks(bpm))\n",
      check: { type: "output", expected: "1" },
      hints: [
        ">= includes the boundary value itself; > does not.",
        "Only 140 is strictly greater than 110 in this list.",
        "Change t >= 110 to t > 110.",
      ],
      solution: "def count_dance_tracks(tracks):\n    count = 0\n    for t in tracks:\n        if t > 110:\n            play(72)\n            count += 1\n        sleep(0.1)\n    return count\n\nbpm = [80, 110, 140, 96]\nprint(count_dance_tracks(bpm))\n",
    },
  ],
  codex: {
    topic: "the scientist's method",
    pattern: "# 1. Observe. 2. Hypothesize (one specific, testable claim).\n# 3. Predict what a small test would show. 4. Test it.\n# Wrong? That's data -- revise and repeat.",
    note: "Debugging is a loop that sometimes needs several passes, not a checklist run once. A silent bug has no traceback to anchor on — you have to notice the wrong output yourself, usually by checking against a hand-computed value.",
  },
});

/* ── Lesson 5.6 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c5s6",
  chapter: 5,
  strand: "core",
  lang: "py",
  timeBudgetMin: 25,
  title: "Checkpoint Projects",
  glossary: {},
  content: [
    {
      type: "text",
      md: "**Three projects, one job: use everything this chapter taught.** Each one starts as flat, working code — like the kind you've written since Chapter 2 — and your job is to read it cold (Lesson 5.3), decompose and name it well (5.1), remove its repetition (5.2), and hunt down the bugs seeded inside it (5.4, 5.5). Every project combines skills from at least two earlier chapters, and every bug here is exactly the kind this chapter trained you to find.",
    },
    {
      type: "text",
      md: "**Project 1: the number-guessing game, decomposed.** This is Lesson 2.4's guessing game again — same secret number, same three guesses — but now you'll read it, split it into named functions, and find a bug hiding inside one of them.",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Trace this exactly like Lesson 2.4's version. Predict the four printed lines.",
      starter: "secret = 7\nguesses = [3, 9, 7]\nattempts = 0\nfor guess in guesses:\n    attempts += 1\n    if guess < secret:\n        print(\"Too low!\")\n    elif guess > secret:\n        print(\"Too high!\")\n    else:\n        print(\"Correct!\")\n    if guess == secret:\n        break\nprint(\"Attempts:\", attempts)\n",
      check: { type: "output", expected: "Too low!\nToo high!\nCorrect!\nAttempts: 3" },
      hints: [
        "3 is less than 7. 9 is greater than 7. 7 equals 7.",
        "The loop breaks as soon as guess == secret, after the third guess.",
        "Three guesses ran, so attempts ends at 3.",
      ],
      solution: "secret = 7\nguesses = [3, 9, 7]\nattempts = 0\nfor guess in guesses:\n    attempts += 1\n    if guess < secret:\n        print(\"Too low!\")\n    elif guess > secret:\n        print(\"Too high!\")\n    else:\n        print(\"Correct!\")\n    if guess == secret:\n        break\nprint(\"Attempts:\", attempts)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Decompose the flat game above into two functions from scratch: `check_guess(guess, secret)` returns one of the three messages, and `play_game(guesses, secret)` loops over the guesses, prints what `check_guess` returns each time, counts attempts, and — when the secret is found — draws a small victory flourish (`forward(50)`, `right(144)`, three times) before stopping. Call `play_game` and print the attempt count.",
      starter: "secret = 7\nguesses = [3, 9, 7]\n\n# write check_guess(guess, secret) and play_game(guesses, secret) here,\n# then call play_game(guesses, secret) and print the attempt count\n",
      check: { type: "output", expected: "Too low!\nToo high!\nCorrect!\nAttempts: 3" },
      hints: [
        "check_guess needs the same if/elif/else logic as the flat version, but return each message instead of printing it.",
        "play_game prints check_guess(guess, secret) every time through the loop, and counts attempts the same way the flat version did.",
        "The victory flourish (three forward/right pairs) goes right before break, inside the if guess == secret: block.",
      ],
      solution: "secret = 7\nguesses = [3, 9, 7]\n\ndef check_guess(guess, secret):\n    if guess < secret:\n        return \"Too low!\"\n    elif guess > secret:\n        return \"Too high!\"\n    else:\n        return \"Correct!\"\n\ndef play_game(guesses, secret):\n    attempts = 0\n    for guess in guesses:\n        attempts += 1\n        print(check_guess(guess, secret))\n        if guess == secret:\n            forward(50)\n            right(144)\n            forward(50)\n            right(144)\n            forward(50)\n            break\n    return attempts\n\ntotal = play_game(guesses, secret)\nprint(\"Attempts:\", total)\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This version prints `None` instead of `Correct!` on the last line — a silent bug, not a crash. `check_guess`'s last branch never returns anything. Fix it.",
      starter: "secret = 7\nguesses = [3, 9, 7]\n\ndef check_guess(guess, secret):\n    if guess < secret:\n        return \"Too low!\"\n    elif guess > secret:\n        return \"Too high!\"\n    else:\n        pass\n\ndef play_game(guesses, secret):\n    attempts = 0\n    for guess in guesses:\n        attempts += 1\n        print(check_guess(guess, secret))\n        if guess == secret:\n            forward(50)\n            right(144)\n            forward(50)\n            right(144)\n            forward(50)\n            break\n    return attempts\n\ntotal = play_game(guesses, secret)\nprint(\"Attempts:\", total)\n",
      check: { type: "output", expected: "Too low!\nToo high!\nCorrect!\nAttempts: 3" },
      hints: [
        "A function with no return statement on a code path returns None from that path — that's the source of the None you saw printed.",
        "The else branch runs exactly when guess == secret — that's the \"Correct!\" case.",
        "Replace pass with return \"Correct!\".",
      ],
      solution: "secret = 7\nguesses = [3, 9, 7]\n\ndef check_guess(guess, secret):\n    if guess < secret:\n        return \"Too low!\"\n    elif guess > secret:\n        return \"Too high!\"\n    else:\n        return \"Correct!\"\n\ndef play_game(guesses, secret):\n    attempts = 0\n    for guess in guesses:\n        attempts += 1\n        print(check_guess(guess, secret))\n        if guess == secret:\n            forward(50)\n            right(144)\n            forward(50)\n            right(144)\n            forward(50)\n            break\n    return attempts\n\ntotal = play_game(guesses, secret)\nprint(\"Attempts:\", total)\n",
    },
    {
      type: "text",
      md: "**Project 2: the text-statistics tool.** Same real lyrics you counted letters in back in Lesson 5.1 — now you'll find the most common *word* instead, decomposed into three functions, with a bug that crashes two frames away from where it actually happened.",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write `word_counts(text)` — a dictionary of word to how many times it appeared, the same shape as Lesson 5.1's `letter_variety` — and `most_common_word(text)`, which charts `word_counts(text)` with `bar()` and returns the key with the highest count. Write `report(text)` too: it calls `most_common_word` and prints `\"Most common word:\", top`.",
      starter: "# write word_counts(text), most_common_word(text), and report(text) here,\n# then call report on the lyrics below\nlyrics = \"buddy youre a boy make a big noise playing in the street gonna be a big man someday you got mud on your face you big disgrace kicking your can all over the place we will rock you we will rock you\"\n",
      check: { type: "output", expected: "Most common word: you" },
      hints: [
        "word_counts: counts = {}; for word in text.split(): counts[word] = counts.get(word, 0) + 1; return counts.",
        "max(counts, key=counts.get) returns the KEY with the highest value, not the value itself.",
        "most_common_word: counts = word_counts(text); bar(list(counts.keys()), list(counts.values())); return max(counts, key=counts.get).",
      ],
      solution: "lyrics = \"buddy youre a boy make a big noise playing in the street gonna be a big man someday you got mud on your face you big disgrace kicking your can all over the place we will rock you we will rock you\"\n\ndef word_counts(text):\n    counts = {}\n    for word in text.split():\n        counts[word] = counts.get(word, 0) + 1\n    return counts\n\ndef most_common_word(text):\n    counts = word_counts(text)\n    bar(list(counts.keys()), list(counts.values()))\n    return max(counts, key=counts.get)\n\ndef report(text):\n    top = most_common_word(text)\n    print(\"Most common word:\", top)\n\nreport(lyrics)\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This crashes with `AttributeError: 'NoneType' object has no attribute 'get'`, reported inside `most_common_word`. `word_counts` builds the dictionary correctly but never returns it — walk back one frame to find and fix the real bug.",
      starter: "def word_counts(text):\n    counts = {}\n    for word in text.split():\n        counts[word] = counts.get(word, 0) + 1\n\ndef most_common_word(text):\n    counts = word_counts(text)\n    bar(list(counts.keys()), list(counts.values()))\n    return max(counts, key=counts.get)\n\ndef report(text):\n    top = most_common_word(text)\n    print(\"Most common word:\", top)\n\nreport(\"buddy youre a boy make a big noise playing in the street gonna be a big man someday you got mud on your face you big disgrace kicking your can all over the place we will rock you we will rock you\")\n",
      check: { type: "output", expected: "Most common word: you" },
      hints: [
        "most_common_word only reads what word_counts hands it — it can't be the source of a missing dictionary.",
        "word_counts builds counts correctly inside the loop, but there's no return statement at the end of the function.",
        "Add return counts as the last line of word_counts.",
      ],
      solution: "def word_counts(text):\n    counts = {}\n    for word in text.split():\n        counts[word] = counts.get(word, 0) + 1\n    return counts\n\ndef most_common_word(text):\n    counts = word_counts(text)\n    bar(list(counts.keys()), list(counts.values()))\n    return max(counts, key=counts.get)\n\ndef report(text):\n    top = most_common_word(text)\n    print(\"Most common word:\", top)\n\nreport(\"buddy youre a boy make a big noise playing in the street gonna be a big man someday you got mud on your face you big disgrace kicking your can all over the place we will rock you we will rock you\")\n",
    },
    {
      type: "text",
      md: "**Project 3: refactor a messy song.** Twinkle Twinkle's first two phrases, played as fourteen individual `play()`/`sleep()` calls in a row — the same repetition Lesson 5.2 taught you to spot. Decompose it into one function called twice.",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete `play_phrase(notes, root)` so it plays each note in `notes` transposed by `root`, with a 0.5 second sleep between notes. Then it's called once per phrase instead of fourteen separate play/sleep pairs.",
      starter: "root = 60\nphrase1 = [0, 0, 7, 7, 9, 9, 7]\nphrase2 = [5, 5, 4, 4, 2, 2, 0]\n\ndef play_phrase(notes, root):\n    pass  # play each note transposed by root, with 0.5s sleep between\n\nplay_phrase(phrase1, root)\nplay_phrase(phrase2, root)\n",
      check: {
        type: "calls",
        calls: [
          { fn: "play", note: 60 }, { fn: "play", note: 60 }, { fn: "play", note: 67 }, { fn: "play", note: 67 },
          { fn: "play", note: 69 }, { fn: "play", note: 69 }, { fn: "play", note: 67 },
          { fn: "play", note: 65 }, { fn: "play", note: 65 }, { fn: "play", note: 64 }, { fn: "play", note: 64 },
          { fn: "play", note: 62 }, { fn: "play", note: 62 }, { fn: "play", note: 60 },
        ],
      },
      hints: [
        "Loop over notes with for n in notes:, calling play(root + n) then sleep(0.5) each time.",
        "This is exactly Lesson 5.2's generalize-and-parameterize move — one function replaces many near-identical calls.",
        "Inside the loop: play(root + n), then sleep(0.5) — that's the whole body.",
      ],
      solution: "root = 60\nphrase1 = [0, 0, 7, 7, 9, 9, 7]\nphrase2 = [5, 5, 4, 4, 2, 2, 0]\n\ndef play_phrase(notes, root):\n    for n in notes:\n        play(root + n)\n        sleep(0.5)\n\nplay_phrase(phrase1, root)\nplay_phrase(phrase2, root)\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "Changing `root` to 65 should transpose the whole phrase up — but the notes don't move. `play_phrase` never actually uses its `root` parameter. Find the hardcoded number and fix it.",
      starter: "def play_phrase(notes, root):\n    for n in notes:\n        play(60 + n)\n        sleep(0.5)\n\nroot = 65\nphrase = [0, 0, 7]\nplay_phrase(phrase, root)\n",
      check: { type: "calls", calls: [{ fn: "play", note: 65 }, { fn: "play", note: 65 }, { fn: "play", note: 72 }] },
      hints: [
        "play_phrase takes root as a parameter, but the body never mentions it — it uses the literal number 60 instead.",
        "A parameter that's never used in the function body was pointless to add.",
        "Change play(60 + n) to play(root + n).",
      ],
      solution: "def play_phrase(notes, root):\n    for n in notes:\n        play(root + n)\n        sleep(0.5)\n\nroot = 65\nphrase = [0, 0, 7]\nplay_phrase(phrase, root)\n",
    },
  ],
  codex: {
    topic: "chapter 5 checkpoint",
    pattern: "# Read cold (5.3) -> decompose & name (5.1) -> generalize\n# repetition (5.2) -> hunt bugs with the crime-scene map (5.4)\n# and the scientist's loop (5.5).",
    note: "Every checkpoint bug here is a bug this chapter specifically trained you to find: a silent missing-return, an AttributeError-from-None two frames away, and an unused parameter that quietly does nothing.",
  },
});

/* ── Lesson 5.7 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c5s7",
  chapter: 5,
  strand: "sound",
  lang: "py",
  timeBudgetMin: 25,
  title: "Practice: New Problems, Same Skills",
  glossary: {},
  content: [
    {
      type: "text",
      md: "**Same skills, four new problems.** Decomposition, naming, generalizing repetition, and debugging aren't tied to songs and playlists. They work on any problem. This lesson practices all four on a flower pattern, a musical scale, real medal counts, and a week of real temperatures. It climbs from reading code to writing the whole thing yourself.",
    },
    {
      type: "example",
      note: "draw_flower calls draw_petal once per petal, turning between each one — the same decomposition idea as Lesson 3.6's draw_polygon, one level deeper.",
      code: "def draw_petal(size):\n    for i in range(4):\n        forward(size)\n        right(90)\n\ndef draw_flower(size, petals):\n    for i in range(petals):\n        draw_petal(size)\n        right(360 / petals)\n\ndef count_forward_calls(petals):\n    return petals * 4\n\ndraw_flower(30, 6)\nprint(count_forward_calls(6))\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Trace `count_forward_calls` — each petal is a 4-sided shape, drawn once per petal. Predict the printed number for 6 petals.",
      starter: "def draw_petal(size):\n    for i in range(4):\n        forward(size)\n        right(90)\n\ndef draw_flower(size, petals):\n    for i in range(petals):\n        draw_petal(size)\n        right(360 / petals)\n\ndef count_forward_calls(petals):\n    return petals * 4\n\ndraw_flower(30, 6)\nprint(count_forward_calls(6))\n",
      check: { type: "output", expected: "24" },
      hints: [
        "Each petal calls forward() 4 times (once per side of the petal's square).",
        "6 petals means the pattern repeats 6 times.",
        "6 petals * 4 sides each = 24.",
      ],
      solution: "def draw_petal(size):\n    for i in range(4):\n        forward(size)\n        right(90)\n\ndef draw_flower(size, petals):\n    for i in range(petals):\n        draw_petal(size)\n        right(360 / petals)\n\ndef count_forward_calls(petals):\n    return petals * 4\n\ndraw_flower(30, 6)\nprint(count_forward_calls(6))\n",
    },
    {
      type: "text",
      md: "**Real music theory: a major scale is a fixed pattern of intervals.** `[0, 2, 4, 5, 7, 9, 11, 12]` is the major scale — the same eight-note pattern under any starting note, from Lesson 1.7's MIDI numbers.",
    },
    {
      type: "exercise",
      rung: 2,
      prompt: "Arrange these lines into a working major-scale player. `play_scale` must be defined before it's called, and the loop plays one note per interval.",
      starter: "",
      check: {
        type: "parsons",
        lines: [
          "root = 60",
          "major = [0, 2, 4, 5, 7, 9, 11, 12]",
          "",
          "def play_scale(root, intervals):",
          "    for i in intervals:",
          "        play(root + i)",
          "        sleep(0.3)",
          "",
          "play_scale(root, major)",
        ],
        distractors: ["    for i in root:", "play_scale(major, root)"],
      },
      hints: [
        "play_scale must be defined before the call at the bottom.",
        "The loop goes over intervals, not root — for i in root: is a decoy.",
        "The call is play_scale(root, major), matching the parameter order root, intervals — not the other way round.",
      ],
      solution: "root = 60\nmajor = [0, 2, 4, 5, 7, 9, 11, 12]\n\ndef play_scale(root, intervals):\n    for i in intervals:\n        play(root + i)\n        sleep(0.3)\n\nplay_scale(root, major)\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "A minor scale uses a different interval pattern: `[0, 2, 3, 5, 7, 8, 10, 12]`. Change `major` to that pattern — `play_scale` itself doesn't need to change at all, because it was already generalized (Lesson 5.2's move) to take any interval list.",
      starter: "root = 60\nmajor = [0, 2, 4, 5, 7, 9, 11, 12]\n\ndef play_scale(root, intervals):\n    for i in intervals:\n        play(root + i)\n        sleep(0.3)\n\nplay_scale(root, major)\n",
      check: { type: "calls", calls: [{ fn: "play", note: 60 }, { fn: "play", note: 62 }, { fn: "play", note: 63 }, { fn: "play", note: 65 }, { fn: "play", note: 67 }, { fn: "play", note: 68 }, { fn: "play", note: 70 }, { fn: "play", note: 72 }] },
      hints: [
        "Only the values inside the major list need to change — play_scale stays exactly as it is.",
        "Replace [0, 2, 4, 5, 7, 9, 11, 12] with [0, 2, 3, 5, 7, 8, 10, 12].",
        "You could even rename major to minor for clarity, but it's not required — the values are what's checked.",
      ],
      solution: "root = 60\nmajor = [0, 2, 3, 5, 7, 8, 10, 12]\n\ndef play_scale(root, intervals):\n    for i in intervals:\n        play(root + i)\n        sleep(0.3)\n\nplay_scale(root, major)\n",
    },
    {
      type: "text",
      md: "**Lesson 5.1's naming lesson, one more time, on real data.** `total` and `totals` are one letter apart — and in `total_medals` below, that one letter is the entire bug.",
    },
    {
      type: "example",
      note: "Bug: totals never actually accumulates anything -- total (no s) is a fresh local variable created and thrown away every time through the loop.",
      code: "medals = {\"USA\": 39, \"China\": 38, \"Japan\": 27, \"Great Britain\": 22}\n\ndef total_medals(data):\n    totals = 0\n    for country in data:\n        total = data[country]   # bug: this makes a NEW total, it doesn't add to totals\n    return totals\n\nprint(total_medals(medals))\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "`total_medals` always prints 0. `totals` (the accumulator) is never actually updated — `total` (no s) is a completely different, throwaway variable created fresh on every loop. Fix it so `totals` accumulates the real sum.",
      starter: "medals = {\"USA\": 39, \"China\": 38, \"Japan\": 27, \"Great Britain\": 22}\n\ndef total_medals(data):\n    totals = 0\n    for country in data:\n        total = data[country]\n    return totals\n\nprint(total_medals(medals))\n",
      check: { type: "output", expected: "126" },
      hints: [
        "totals starts at 0 and is supposed to grow — but nothing in the loop ever changes totals.",
        "total = data[country] creates a brand new local variable every iteration, and it's discarded immediately.",
        "Change total = data[country] to totals += data[country].",
      ],
      solution: "medals = {\"USA\": 39, \"China\": 38, \"Japan\": 27, \"Great Britain\": 22}\n\ndef total_medals(data):\n    totals = 0\n    for country in data:\n        totals += data[country]\n    return totals\n\nprint(total_medals(medals))\n",
    },
    {
      type: "text",
      md: "**Not every chart is a bar chart.** `bar()` compares separate categories — good for song titles or planet names, where order doesn't mean anything. `week_temps` is different: Monday through Friday is a real sequence. Lesson 4.7's `plot()` draws that as a line, so you can see the temperature *rise and fall* across the week — the same line-vs-bar choice as the melodic-contour lesson.",
    },
    {
      type: "example",
      note: "plot() takes an x-list and a y-list. list(range(len(data))) gives positions 0, 1, 2... for the x-axis; the temperatures themselves are the y-axis.",
      code: "week_temps = {\"Mon\": 68, \"Tue\": 71, \"Wed\": 74, \"Thu\": 70, \"Fri\": 65}\n\ndef chart_week(data):\n    plot(list(range(len(data))), list(data.values()))\n\nchart_week(week_temps)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write `chart_week(data)` — a line chart of the week's temperatures using `plot()` — and `hottest_day(data)`, which returns the day (key) with the highest temperature. Write `describe_week(data)` too: it calls both and prints `\"Hottest day:\", hottest_day(data)`.",
      starter: "week_temps = {\"Mon\": 68, \"Tue\": 71, \"Wed\": 74, \"Thu\": 70, \"Fri\": 65}\n\n# write chart_week(data), hottest_day(data), and describe_week(data) here,\n# then call describe_week(week_temps)\n",
      check: { type: "output", expected: "Hottest day: Wed" },
      hints: [
        "chart_week: plot(list(range(len(data))), list(data.values())).",
        "hottest_day is the same max-with-key pattern from Lesson 5.1's most_played: return max(data, key=data.get).",
        "describe_week calls chart_week(data) then prints \"Hottest day:\" and hottest_day(data).",
      ],
      solution: "week_temps = {\"Mon\": 68, \"Tue\": 71, \"Wed\": 74, \"Thu\": 70, \"Fri\": 65}\n\ndef chart_week(data):\n    plot(list(range(len(data))), list(data.values()))\n\ndef hottest_day(data):\n    return max(data, key=data.get)\n\ndef describe_week(data):\n    chart_week(data)\n    print(\"Hottest day:\", hottest_day(data))\n\ndescribe_week(week_temps)\n",
    },
    {
      type: "text",
      md: "**Now build both from nothing.** No stubs, no partial functions this time — plan the decomposition yourself, the way Lesson 5.1 taught, before writing a line.",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write `draw_petal(size)` (a 4-sided shape: `forward(size)`/`right(90)`, four times) and `draw_flower(size, petals)` (calls `draw_petal(size)` once per petal, turning `right(360 / petals)` after each one) from scratch. Call `draw_flower(40, 5)`.",
      starter: "# write draw_petal(size) and draw_flower(size, petals) here,\n# then call draw_flower(40, 5)\n",
      check: {
        type: "calls",
        calls: [
          { fn: "forward", val: 40 }, { fn: "right", val: 90 }, { fn: "forward", val: 40 }, { fn: "right", val: 90 },
          { fn: "forward", val: 40 }, { fn: "right", val: 90 }, { fn: "forward", val: 40 }, { fn: "right", val: 90 },
          { fn: "right", val: 72 },
          { fn: "forward", val: 40 }, { fn: "right", val: 90 }, { fn: "forward", val: 40 }, { fn: "right", val: 90 },
          { fn: "forward", val: 40 }, { fn: "right", val: 90 }, { fn: "forward", val: 40 }, { fn: "right", val: 90 },
          { fn: "right", val: 72 },
          { fn: "forward", val: 40 }, { fn: "right", val: 90 }, { fn: "forward", val: 40 }, { fn: "right", val: 90 },
          { fn: "forward", val: 40 }, { fn: "right", val: 90 }, { fn: "forward", val: 40 }, { fn: "right", val: 90 },
          { fn: "right", val: 72 },
          { fn: "forward", val: 40 }, { fn: "right", val: 90 }, { fn: "forward", val: 40 }, { fn: "right", val: 90 },
          { fn: "forward", val: 40 }, { fn: "right", val: 90 }, { fn: "forward", val: 40 }, { fn: "right", val: 90 },
          { fn: "right", val: 72 },
          { fn: "forward", val: 40 }, { fn: "right", val: 90 }, { fn: "forward", val: 40 }, { fn: "right", val: 90 },
          { fn: "forward", val: 40 }, { fn: "right", val: 90 }, { fn: "forward", val: 40 }, { fn: "right", val: 90 },
          { fn: "right", val: 72 },
        ],
      },
      hints: [
        "draw_petal is exactly the earlier example's version: a for loop 4 times, forward(size) then right(90) each time.",
        "draw_flower loops petals times, calling draw_petal(size) then right(360 / petals) each time.",
        "360 / 5 is 72 degrees between petals.",
      ],
      solution: "def draw_petal(size):\n    for i in range(4):\n        forward(size)\n        right(90)\n\ndef draw_flower(size, petals):\n    for i in range(petals):\n        draw_petal(size)\n        right(360 / petals)\n\ndraw_flower(40, 5)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write `temp_melody(data)` from scratch. First chart the week with `plot()`, the same way `chart_week` did. Then, for each day's temperature (in dictionary order), play that temperature as a note, sleeping 0.3 seconds between notes. Finally print the week's average temperature, rounded to 1 decimal place.",
      starter: "week_temps = {\"Mon\": 68, \"Tue\": 71, \"Wed\": 74, \"Thu\": 70, \"Fri\": 65}\n\n# write temp_melody(data) here, then call temp_melody(week_temps)\n",
      check: { type: "output", expected: "69.6" },
      hints: [
        "plot(list(range(len(data))), list(data.values())) charts it, exactly like chart_week did.",
        "Loop over data.values() — each value is both the note to play and a number to include in the average.",
        "play(temp) then sleep(0.3), same shape as play_scale earlier in this lesson. Finish with round(sum(data.values()) / len(data), 1).",
      ],
      solution: "week_temps = {\"Mon\": 68, \"Tue\": 71, \"Wed\": 74, \"Thu\": 70, \"Fri\": 65}\n\ndef temp_melody(data):\n    plot(list(range(len(data))), list(data.values()))\n    for temp in data.values():\n        play(temp)\n        sleep(0.3)\n    print(round(sum(data.values()) / len(data), 1))\n\ntemp_melody(week_temps)\n",
    },
  ],
  codex: {
    topic: "practice across strands",
    pattern: "# Same moves, new domain every time:\n# decompose into named jobs, generalize what varies into a parameter,\n# chart with bar(), play with play(), name it so a bug can't hide.",
    note: "The four skills from this chapter (decompose, name well, generalize repetition, debug systematically) aren't specific to songs or playlists — they're the same moves on a flower, a scale, a medal table, or a week of weather.",
  },
});
