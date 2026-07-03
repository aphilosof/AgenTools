/* Chapter 5 — Thinking in Code
   Rebuilt to CODELAB_FULL_REPORT.md + CODELAB_CH5_REBUILT.md.
   Lessons: c5s1 Decomposition · c5s2 Naming · c5s3 Generalizing repetition ·
            c5s4 Reading code · c5s5 Debugging: the traceback ·
            c5s6 Debugging: the scientist's method · c5s7 Finale: the playlist analyst
   No new syntax — leans on Chapters 1-4. Uses the recurring datasets. */

/* ── Lesson 5.1 — Decomposition ──────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c5s1",
  chapter: 5,
  strand: "core",
  lang: "py",
  timeBudgetMin: 16,
  title: "Decomposition",
  content: [
    {
      type: "text",
      md: "In Chapter 3, the split was done for you — `draw_house` already called `draw_square`. Real problems don't arrive pre-split. Someone hands you \"report on a playlist,\" and your first job is deciding where the function boundaries go.",
    },
    {
      type: "text",
      md: "The move: read the description and pull out the **verbs**. \"Report on a playlist\" hides three — *total* the plays, find the *most-played*, *average* them. Each verb becomes a function. The test for a good boundary: can you say what the function does in one sentence starting with a verb? If it needs an \"and,\" it's two functions.",
    },
    {
      type: "example",
      note: "Three small functions, each one job, composed by a fourth.",
      code: "song_plays = {\"Blinding Lights\": 3200, \"Shape of You\": 2800, \"Dance Monkey\": 2500, \"Bad Guy\": 1900, \"Someone Like You\": 1600, \"Rolling in the Deep\": 1200}\n\ndef total_plays(p):\n    return sum(p.values())\n\ndef most_played(p):\n    return max(p, key=p.get)\n\ndef average_plays(p):\n    return round(total_plays(p) / len(p), 1)\n\ndef report(p):\n    print(\"Total plays:\", total_plays(p))\n    print(\"Most played:\", most_played(p))\n    print(\"Average plays:\", average_plays(p))\n\nreport(song_plays)\n",
    },
    {
      type: "text",
      md: "And build it one piece at a time. `total_plays` was written and tested alone first, then `most_played`, then `average_plays`, then `report` wired them together. Never write more than a few lines without running them. If the whole thing breaks at the end, the bug could be anywhere. If you test each piece, you know exactly where it isn't.",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Trace `report`. Each helper runs on the six-song dictionary. Predict the three printed lines.",
      starter: "song_plays = {\"Blinding Lights\": 3200, \"Shape of You\": 2800, \"Dance Monkey\": 2500, \"Bad Guy\": 1900, \"Someone Like You\": 1600, \"Rolling in the Deep\": 1200}\n\ndef total_plays(p):\n    return sum(p.values())\n\ndef most_played(p):\n    return max(p, key=p.get)\n\ndef average_plays(p):\n    return round(total_plays(p) / len(p), 1)\n\ndef report(p):\n    print(\"Total plays:\", total_plays(p))\n    print(\"Most played:\", most_played(p))\n    print(\"Average plays:\", average_plays(p))\n\nreport(song_plays)\n",
      check: { type: "output", expected: "Total plays: 13200\nMost played: Blinding Lights\nAverage plays: 2200.0" },
      hints: [
        "Sum the six values.",
        "Most-played is the biggest.",
        "13200, Blinding Lights, 2200.0.",
      ],
      solution: "song_plays = {\"Blinding Lights\": 3200, \"Shape of You\": 2800, \"Dance Monkey\": 2500, \"Bad Guy\": 1900, \"Someone Like You\": 1600, \"Rolling in the Deep\": 1200}\n\ndef total_plays(p):\n    return sum(p.values())\n\ndef most_played(p):\n    return max(p, key=p.get)\n\ndef average_plays(p):\n    return round(total_plays(p) / len(p), 1)\n\ndef report(p):\n    print(\"Total plays:\", total_plays(p))\n    print(\"Most played:\", most_played(p))\n    print(\"Average plays:\", average_plays(p))\n\nreport(song_plays)\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Test one piece alone before combining. Complete `average(values)` so it returns the sum divided by the count.",
      starter: "def average(values):\n    # return sum / count\n    pass\n\nprint(average([80, 70, 90, 60]))\n",
      check: { type: "output", expected: "75.0" },
      hints: [
        "`sum(values) / len(values)`.",
        "Test it on a tiny input you can check.",
        "80+70+90+60 = 300, /4 = 75.0.",
      ],
      solution: "def average(values):\n    return sum(values) / len(values)\n\nprint(average([80, 70, 90, 60]))\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch, decompose a moons report. Write `chart_moons(data)` (charts the dictionary with `bar()`), `total_moons(data)` (returns the sum of all moon counts), and `summarize_moons(data)` (calls both and prints `Total moons: N`). Call `summarize_moons` on the moons dictionary.",
      starter: "moons = {\"Saturn\": 146, \"Jupiter\": 95, \"Uranus\": 27, \"Neptune\": 16, \"Mars\": 2, \"Earth\": 1}\n# write the three functions, then call summarize_moons(moons)\n",
      check: { type: "output", expected: "Total moons: 287" },
      hints: [
        "One function charts, one totals, one combines.",
        "`sum(data.values())` is 287.",
        "`summarize_moons` calls both.",
      ],
      solution: "moons = {\"Saturn\": 146, \"Jupiter\": 95, \"Uranus\": 27, \"Neptune\": 16, \"Mars\": 2, \"Earth\": 1}\n\ndef chart_moons(data):\n    bar(list(data.keys()), list(data.values()))\n\ndef total_moons(data):\n    return sum(data.values())\n\ndef summarize_moons(data):\n    chart_moons(data)\n    print(\"Total moons:\", total_moons(data))\n\nsummarize_moons(moons)\n",
    },
  ],
  codex: {
    topic: "decomposition",
    pattern: "def total(p): ...\ndef top(p): ...\ndef report(p): total(p); top(p)",
    note: "Split a problem by its verbs — each verb is a function you can name in one sentence. Build and test one piece at a time so a bug has nowhere to hide.",
  },
});

/* ── Lesson 5.2 — Naming ─────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c5s2",
  chapter: 5,
  strand: "core",
  lang: "py",
  timeBudgetMin: 22,
  title: "Naming",
  content: [
    {
      type: "text",
      md: "Every name is something a reader has to hold in their head — often future you, debugging late at night. A name that says what the value *is* (`counts`) costs nothing. A name that says nothing (`x`, `data`, `temp`) costs real attention. So does one that looks almost like another (`count` vs `counts`) — and that cost shows up as bugs, because it's easy to type the wrong one and Python won't stop you.",
    },
    {
      type: "example",
      note: "segment and segments are one letter apart and mean different things — the return grabbed the wrong one.",
      code: "def draw_spiral(steps):\n    segments = []      # every length drawn so far\n    segment = 5        # the current length\n    for i in range(steps):\n        forward(segment)\n        segments.append(segment)\n        right(20)\n        segment += 5\n    return len(segment)   # TypeError: int has no len()\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This crashes with `TypeError: object of type 'int' has no len()`. Two variables are one letter apart — `segment` and `segments` — and the return grabbed the wrong one. Fix it so the function returns how many lines it drew (`4`).",
      starter: "def draw_spiral(steps):\n    segments = []\n    segment = 5\n    for i in range(steps):\n        forward(segment)\n        segments.append(segment)\n        right(20)\n        segment += 5\n    return len(segment)\n\nprint(draw_spiral(4))\n",
      check: { type: "output", expected: "4" },
      hints: [
        "`segment` is one number; `segments` is the list.",
        "You can't `len` a number.",
        "return len(segments)",
      ],
      solution: "def draw_spiral(steps):\n    segments = []\n    segment = 5\n    for i in range(steps):\n        forward(segment)\n        segments.append(segment)\n        right(20)\n        segment += 5\n    return len(segments)\n\nprint(draw_spiral(4))\n",
    },
    {
      type: "text",
      md: "Name booleans like yes/no questions. `is_passed`, `has_won`, `is_downbeat` read naturally after `if`. `flag` and `check` don't — they tell you a boolean exists but not what it answers.",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "`check_beat` answers 'is this the downbeat — the first beat of a 4-beat bar?' Rename `flag` to a name that reads like that question. Don't change what it returns or how it's called.",
      starter: "def check_beat(beat_number):\n    flag = beat_number % 4 == 1\n    return flag\n\nprint(check_beat(1))\nprint(check_beat(2))\n",
      check: { type: "output", expected: "True\nFalse" },
      hints: [
        "Pick a name that reads like a yes/no question.",
        "`is_downbeat`.",
        "Rename both lines.",
      ],
      solution: "def check_beat(beat_number):\n    is_downbeat = beat_number % 4 == 1\n    return is_downbeat\n\nprint(check_beat(1))\nprint(check_beat(2))\n",
    },
    {
      type: "text",
      md: "Some names are already taken. Python ships with `list`, `sum`, `str`. Naming your own variable `list` doesn't error at first — but it hides the real `list()` function for the rest of the program, and calling `list(...)` later crashes far from the line that caused it.",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This crashes with `TypeError: 'list' object is not callable`. A variable named `list` has hidden the built-in `list()` the last line needs. Rename the variable (not the built-in) so it prints the average and a copy.",
      starter: "list = [88, 72, 95, 61, 84]\naverage = sum(list) / len(list)\nprint(average)\ncopy = list(list)\nprint(copy)\n",
      check: { type: "output", expected: "80.0\n[88, 72, 95, 61, 84]" },
      hints: [
        "`list` shadows the built-in.",
        "Rename the variable to `scores`.",
        "Now `list(scores)` works.",
      ],
      solution: "scores = [88, 72, 95, 61, 84]\naverage = sum(scores) / len(scores)\nprint(average)\ncopy = list(scores)\nprint(copy)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch, with clear names: write `most_moons(data)` and `fewest_moons(data)` (each returns the planet with the most / fewest moons, using `max`/`min` with `key=data.get`), and `describe_moons(data)` that prints `Most moons: <planet> (<count>)` then `Fewest moons: <planet> (<count>)`. Call it on the moons dictionary.",
      starter: "moons = {\"Saturn\": 146, \"Jupiter\": 95, \"Uranus\": 27, \"Neptune\": 16, \"Mars\": 2, \"Earth\": 1}\n# write the three functions, then call describe_moons(moons)\n",
      check: { type: "output", expected: "Most moons: Saturn (146)\nFewest moons: Earth (1)" },
      hints: [
        "`max`/`min` with `key=data.get` return the planet.",
        "Look up its count for the parentheses.",
        "Saturn (146), Earth (1).",
      ],
      solution: "moons = {\"Saturn\": 146, \"Jupiter\": 95, \"Uranus\": 27, \"Neptune\": 16, \"Mars\": 2, \"Earth\": 1}\n\ndef most_moons(data):\n    return max(data, key=data.get)\n\ndef fewest_moons(data):\n    return min(data, key=data.get)\n\ndef describe_moons(data):\n    top = most_moons(data)\n    bottom = fewest_moons(data)\n    print(\"Most moons:\", top, \"(\" + str(data[top]) + \")\")\n    print(\"Fewest moons:\", bottom, \"(\" + str(data[bottom]) + \")\")\n\ndescribe_moons(moons)\n",
    },
  ],
  codex: {
    topic: "naming",
    pattern: "counts   not  x\nis_downbeat = beat % 4 == 1   # boolean\nscores   not  list  (a built-in)",
    note: "Name a value for what it is. Keep near-identical names apart (count vs counts). Name booleans like questions (is_, has_). Don't reuse built-in names like list or sum.",
  },
});

/* ── Lesson 5.3 — Generalizing repetition ────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c5s3",
  chapter: 5,
  strand: "core",
  lang: "py",
  timeBudgetMin: 18,
  title: "Generalizing repetition",
  glossary: {
    "near-duplicate": "Two pieces of code that do the same job with one value swapped — usually copy-pasted and lightly edited. Replace both with one function that takes that value as a parameter.",
  },
  content: [
    {
      type: "text",
      md: "You already remove *identical* copy-pasted code with a function. The harder case is a [[near-duplicate]]: two functions that look a bit different — different names, maybe — but do the same job with one value swapped. The move: line them up, find the one thing that differs, and make it a parameter.",
    },
    {
      type: "example",
      note: "count_above_100 and count_above_130 differ by one number. One parameterized function replaces both.",
      code: "bpm = [80, 120, 140, 96]\n\ndef count_above(tracks, threshold):\n    count = 0\n    for t in tracks:\n        if t > threshold:\n            count += 1\n    return count\n\nprint(count_above(bpm, 100))   # 2\nprint(count_above(bpm, 130))   # 1\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Predict both calls.",
      starter: "bpm = [80, 120, 140, 96]\n\ndef count_above(tracks, threshold):\n    count = 0\n    for t in tracks:\n        if t > threshold:\n            count += 1\n    return count\n\nprint(count_above(bpm, 100))\nprint(count_above(bpm, 130))\n",
      check: { type: "output", expected: "2\n1" },
      hints: [
        "Above 100: 120, 140.",
        "Above 130: just 140.",
        "2, then 1.",
      ],
      solution: "bpm = [80, 120, 140, 96]\n\ndef count_above(tracks, threshold):\n    count = 0\n    for t in tracks:\n        if t > threshold:\n            count += 1\n    return count\n\nprint(count_above(bpm, 100))\nprint(count_above(bpm, 130))\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "`count_above_80` and `count_above_90` are near-duplicates. Complete `count_above(values, cutoff)` to replace both, then it's called with each cutoff.",
      starter: "scores = [88, 72, 95, 61, 84]\ndef count_above(values, cutoff):\n    # combine the two into one\n    pass\n\nprint(count_above(scores, 80))\nprint(count_above(scores, 90))\n",
      check: { type: "output", expected: "3\n1" },
      hints: [
        "The only difference is the number — make it `cutoff`.",
        "Above 80: 88, 95, 84.",
        "3, then 1.",
      ],
      solution: "scores = [88, 72, 95, 61, 84]\ndef count_above(values, cutoff):\n    count = 0\n    for v in values:\n        if v > cutoff:\n            count += 1\n    return count\n\nprint(count_above(scores, 80))\nprint(count_above(scores, 90))\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "`draw_result` was built by copy-pasting the win branch into the loss branch and editing one line — but the message never got updated, so a loss still prints `You win!`. Fix the else branch so a loss prints `You lose!`.",
      starter: "def draw_result(won):\n    if won:\n        print(\"You win!\")\n    else:\n        print(\"You win!\")  # copy-paste bug\n\ndraw_result(False)\n",
      check: { type: "output", expected: "You lose!" },
      hints: [
        "The else was copied and not edited.",
        "A loss should say lose.",
        "print(\"You lose!\")",
      ],
      solution: "def draw_result(won):\n    if won:\n        print(\"You win!\")\n    else:\n        print(\"You lose!\")\n\ndraw_result(False)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: write one function `loudest_over(plays, cutoff)` that returns how many songs have more than `cutoff` plays. Call it on `[2100, 4300, 3100, 2600, 1900]` with cutoff 2500, then 4000. (Answers: 3, then 1.)",
      starter: "",
      check: { type: "output", expected: "3\n1" },
      hints: [
        "One function, a `cutoff` parameter.",
        "Over 2500: 4300, 3100, 2600.",
        "3, then 1.",
      ],
      solution: "def loudest_over(plays, cutoff):\n    count = 0\n    for p in plays:\n        if p > cutoff:\n            count += 1\n    return count\n\nprint(loudest_over([2100, 4300, 3100, 2600, 1900], 2500))\nprint(loudest_over([2100, 4300, 3100, 2600, 1900], 4000))\n",
    },
  ],
  codex: {
    topic: "generalizing repetition",
    pattern: "def count_above(values, cutoff):\n    ...\ncount_above(x, 80)\ncount_above(x, 90)",
    note: "Two near-duplicate functions that differ by one value become one function with that value as a parameter. Line them up, find the difference, parameterize it.",
  },
});

/* ── Lesson 5.4 — Reading code ───────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c5s4",
  chapter: 5,
  strand: "core",
  lang: "py",
  timeBudgetMin: 14,
  title: "Reading code",
  content: [
    {
      type: "text",
      md: "Before you touch code you didn't write, read it. Trace what each function does and say it in one sentence. With nested conditions, check the outer one first, then the inner. Only after that pass do you change anything.",
    },
    {
      type: "example",
      note: "Two levels of nesting. Trace outer, then inner, to find which label comes back.",
      code: "def describe_and_draw(sides, size):\n    if sides > 4:\n        if size > 50:\n            label = \"big polygon\"\n        else:\n            label = \"small polygon\"\n    else:\n        if size > 50:\n            label = \"big basic shape\"\n        else:\n            label = \"small basic shape\"\n    for i in range(sides):\n        forward(size)\n        right(360 / sides)\n    return label\n\nprint(describe_and_draw(6, 80))\nprint(describe_and_draw(3, 20))\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Trace both calls — outer condition first, then inner. Predict both labels.",
      starter: "def describe_and_draw(sides, size):\n    if sides > 4:\n        if size > 50:\n            label = \"big polygon\"\n        else:\n            label = \"small polygon\"\n    else:\n        if size > 50:\n            label = \"big basic shape\"\n        else:\n            label = \"small basic shape\"\n    for i in range(sides):\n        forward(size)\n        right(360 / sides)\n    return label\n\nprint(describe_and_draw(6, 80))\nprint(describe_and_draw(3, 20))\n",
      check: { type: "output", expected: "big polygon\nsmall basic shape" },
      hints: [
        "(6, 80): sides > 4 and size > 50.",
        "(3, 20): neither.",
        "big polygon, small basic shape.",
      ],
      solution: "def describe_and_draw(sides, size):\n    if sides > 4:\n        if size > 50:\n            label = \"big polygon\"\n        else:\n            label = \"small polygon\"\n    else:\n        if size > 50:\n            label = \"big basic shape\"\n        else:\n            label = \"small basic shape\"\n    for i in range(sides):\n        forward(size)\n        right(360 / sides)\n    return label\n\nprint(describe_and_draw(6, 80))\nprint(describe_and_draw(3, 20))\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "One function calls another. Trace `average_bpm` first, then `is_upbeat`. Predict both lines.",
      starter: "def average_bpm(tracks):\n    total = 0\n    for t in tracks:\n        total = total + t\n    return total / len(tracks)\n\ndef is_upbeat(tracks):\n    avg = average_bpm(tracks)\n    if avg > 100:\n        return True\n    else:\n        return False\n\nbpm = [80, 120, 140, 96]\nprint(average_bpm(bpm))\nprint(is_upbeat(bpm))\n",
      check: { type: "output", expected: "109.0\nTrue" },
      hints: [
        "Sum is 436, over 4.",
        "109 > 100.",
        "109.0, then True.",
      ],
      solution: "def average_bpm(tracks):\n    total = 0\n    for t in tracks:\n        total = total + t\n    return total / len(tracks)\n\ndef is_upbeat(tracks):\n    avg = average_bpm(tracks)\n    if avg > 100:\n        return True\n    else:\n        return False\n\nbpm = [80, 120, 140, 96]\nprint(average_bpm(bpm))\nprint(is_upbeat(bpm))\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "`play_and_report` plays a note for every `1` in the pattern, then reports how many fired. Predict the printed line for `[1, 0, 1, 0, 1, 1]`.",
      starter: "def beats_in_bar(pattern):\n    count = 0\n    for beat in pattern:\n        if beat == 1:\n            count += 1\n    return count\n\ndef play_and_report(pattern):\n    for beat in pattern:\n        if beat == 1:\n            play(60)\n        sleep(0.25)\n    print(\"Beats:\", beats_in_bar(pattern))\n\nplay_and_report([1, 0, 1, 0, 1, 1])\n",
      check: { type: "output", expected: "Beats: 4" },
      hints: [
        "Count the 1s in the pattern.",
        "There are four.",
        "Beats: 4",
      ],
      solution: "def beats_in_bar(pattern):\n    count = 0\n    for beat in pattern:\n        if beat == 1:\n            count += 1\n    return count\n\ndef play_and_report(pattern):\n    for beat in pattern:\n        if beat == 1:\n            play(60)\n        sleep(0.25)\n    print(\"Beats:\", beats_in_bar(pattern))\n\nplay_and_report([1, 0, 1, 0, 1, 1])\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: write `is_upbeat(tracks)` that returns True if the average BPM is above 100, using an `average` helper you also write. Test on `[80, 120, 140, 96]` (True) and `[60, 70, 80]` (False).",
      starter: "",
      check: { type: "output", expected: "True\nFalse" },
      hints: [
        "A helper computes the average.",
        "`is_upbeat` returns `average(tracks) > 100`.",
        "109 → True, 70 → False.",
      ],
      solution: "def average(tracks):\n    return sum(tracks) / len(tracks)\n\ndef is_upbeat(tracks):\n    return average(tracks) > 100\n\nprint(is_upbeat([80, 120, 140, 96]))\nprint(is_upbeat([60, 70, 80]))\n",
    },
  ],
  codex: {
    topic: "reading code",
    pattern: "# say each function in one sentence\n# nested if: outer first, then inner\n# then change anything",
    note: "Read before you edit: trace each function to a one-sentence summary, and for nested conditions check the outer test before the inner. Understand it, then change it.",
  },
});

/* ── Lesson 5.5 — Debugging: the traceback ───────────────────────────── */

window.CODELAB.lessons.push({
  id: "c5s5",
  chapter: 5,
  strand: "core",
  lang: "py",
  timeBudgetMin: 16,
  title: "Debugging: the traceback",
  glossary: {
    IndexError: "The error Python gives when you ask for a list position that doesn't exist — like item 3 of a 3-item list (whose positions are 0, 1, 2).",
    traceback: "The list of function calls that were open when the program broke, outermost first and the crash site last. It shows where Python noticed the problem, not always where the mistake is.",
  },
  content: [
    {
      type: "text",
      md: "A [[traceback]] lists the function calls that were open when something broke — outermost first, the crash site last. But the crash line is where Python *noticed* the problem, not always where the mistake is. A function that quietly returns `None` doesn't crash itself. The crash surfaces one frame up, where the caller tries to use that `None`. Walk backward until you find the frame that actually did something wrong.",
    },
    {
      type: "example",
      note: "Three frames deep. Trace inward: beat_duration finishes first.",
      code: "def beat_duration(bpm):\n    return 60 / bpm\n\ndef play_click_track(bpm, beats):\n    duration = beat_duration(bpm)\n    for i in range(beats):\n        play(72)\n        sleep(duration)\n    return duration\n\ndef track_report(bpm, beats):\n    duration = play_click_track(bpm, beats)\n    return round(duration, 2)\n\nprint(track_report(120, 4))\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Trace the three frames. Predict the printed value.",
      starter: "def beat_duration(bpm):\n    return 60 / bpm\n\ndef play_click_track(bpm, beats):\n    duration = beat_duration(bpm)\n    for i in range(beats):\n        play(72)\n        sleep(duration)\n    return duration\n\ndef track_report(bpm, beats):\n    duration = play_click_track(bpm, beats)\n    return round(duration, 2)\n\nprint(track_report(120, 4))\n",
      check: { type: "output", expected: "0.5" },
      hints: [
        "60 / 120 is 0.5.",
        "It's passed all the way up.",
        "0.5.",
      ],
      solution: "def beat_duration(bpm):\n    return 60 / bpm\n\ndef play_click_track(bpm, beats):\n    duration = beat_duration(bpm)\n    for i in range(beats):\n        play(72)\n        sleep(duration)\n    return duration\n\ndef track_report(bpm, beats):\n    duration = play_click_track(bpm, beats)\n    return round(duration, 2)\n\nprint(track_report(120, 4))\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This crashes on `sleep(duration)` inside `play_click_track` — but that frame didn't cause it. Walk back one frame: `beat_duration` computes a value but forgets to return it, so `duration` is None. Fix it there so it prints `0.5`.",
      starter: "def beat_duration(bpm):\n    result = 60 / bpm\n\ndef play_click_track(bpm, beats):\n    duration = beat_duration(bpm)\n    for i in range(beats):\n        play(72)\n        sleep(duration)\n    return duration\n\ndef track_report(bpm, beats):\n    duration = play_click_track(bpm, beats)\n    return round(duration, 2)\n\nprint(track_report(120, 4))\n",
      check: { type: "output", expected: "0.5" },
      hints: [
        "`beat_duration` computes but never returns.",
        "It hands back None.",
        "return 60 / bpm",
      ],
      solution: "def beat_duration(bpm):\n    return 60 / bpm\n\ndef play_click_track(bpm, beats):\n    duration = beat_duration(bpm)\n    for i in range(beats):\n        play(72)\n        sleep(duration)\n    return duration\n\ndef track_report(bpm, beats):\n    duration = play_click_track(bpm, beats)\n    return round(duration, 2)\n\nprint(track_report(120, 4))\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This crashes with `KeyError: 'Blinding Lights'` inside `lookup` — but the dictionary was built with the wrong capitalization. Walk back to `build_bpm_table` and fix the typo so it prints `Blinding Lights: 171 bpm`.",
      starter: "def build_bpm_table():\n    return {\"Blinding lights\": 171, \"Dance Monkey\": 98}\n\ndef lookup(title, table):\n    return table[title]\n\ndef describe(title, table):\n    bpm = lookup(title, table)\n    return title + \": \" + str(bpm) + \" bpm\"\n\ntable = build_bpm_table()\nprint(describe(\"Blinding Lights\", table))\n",
      check: { type: "output", expected: "Blinding Lights: 171 bpm" },
      hints: [
        "The KeyError is real — the key doesn't match.",
        "The table has `Blinding lights` (lowercase l).",
        "Fix the capitalization where the dict is built.",
      ],
      solution: "def build_bpm_table():\n    return {\"Blinding Lights\": 171, \"Dance Monkey\": 98}\n\ndef lookup(title, table):\n    return table[title]\n\ndef describe(title, table):\n    bpm = lookup(title, table)\n    return title + \": \" + str(bpm) + \" bpm\"\n\ntable = build_bpm_table()\nprint(describe(\"Blinding Lights\", table))\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This crashes with [[IndexError]] inside `draw_winner`. `top_three_sides` correctly returns three items (indexes 0, 1, 2) — the bug is that `draw_winner` asks for index 3. The winner is the first one. Fix the index so it draws the winning shape and returns `6`.",
      starter: "def top_three_sides(polygon_sides):\n    return polygon_sides[0:3]\n\ndef draw_winner(polygon_sides):\n    top = top_three_sides(polygon_sides)\n    winner = top[3]\n    for i in range(winner):\n        forward(50)\n        right(360 / winner)\n    return winner\n\nsides_list = [6, 4, 3]\nprint(draw_winner(sides_list))\n",
      check: { type: "output", expected: "6" },
      hints: [
        "Three items means indexes 0, 1, 2.",
        "Index 3 is out of range.",
        "The winner is `top[0]`.",
      ],
      solution: "def top_three_sides(polygon_sides):\n    return polygon_sides[0:3]\n\ndef draw_winner(polygon_sides):\n    top = top_three_sides(polygon_sides)\n    winner = top[0]\n    for i in range(winner):\n        forward(50)\n        right(360 / winner)\n    return winner\n\nsides_list = [6, 4, 3]\nprint(draw_winner(sides_list))\n",
    },
  ],
  codex: {
    topic: "reading a traceback",
    pattern: "# outermost call first ... crash line last\n# a function returning None crashes\n# one frame UP, in the caller",
    note: "A traceback lists open calls, crash site last. The crash line is where Python noticed, not always the mistake. Walk back to the frame that returned the wrong thing.",
  },
});

/* ── Lesson 5.6 — Debugging: the scientist's method ──────────────────── */

window.CODELAB.lessons.push({
  id: "c5s6",
  chapter: 5,
  strand: "core",
  lang: "py",
  timeBudgetMin: 16,
  title: "Debugging: the scientist's method",
  glossary: {
    "minimal example": "The smallest input you can check by hand, with a known answer — used to test a suspect function on its own.",
    "silent bug": "A bug that doesn't crash — the program runs cleanly but prints a wrong answer. You catch it by comparing the output against a value you worked out another way.",
  },
  content: [
    {
      type: "text",
      md: "Debugging is a loop, not a one-shot. Observe the wrong behavior. Form **one** specific guess (\"I think X because Y\"). Predict what a small test would show. Run it. Wrong is fine — it's information. Revise and go again.",
    },
    {
      type: "example",
      note: "Guess 1 (len is wrong) is tested and rejected; guess 2 (the loop total) is confirmed.",
      code: "song_plays = {\"Dance Monkey\": 2500, \"Shape of You\": 2800, \"Blinding Lights\": 3200, \"Bad Guy\": 1900, \"Someone Like You\": 1600, \"Rolling in the Deep\": 1200}\n\ndef average_plays(plays):\n    total = 0\n    for song in plays:\n        total = total + 1     # bug: counts songs instead of adding plays\n    return round(total / len(plays), 1)\n\nprint(len(song_plays))            # 6 — guess 1 rejected\nprint(average_plays(song_plays))  # 1.0 — far too low, this is the bug\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "`average_plays` returns a tiny number. `len` checks out (it's 6), so that's ruled out. The bug is in the loop: `total` counts the songs instead of adding their plays. Fix the loop body so it prints `2200.0`.",
      starter: "song_plays = {\"Dance Monkey\": 2500, \"Shape of You\": 2800, \"Blinding Lights\": 3200, \"Bad Guy\": 1900, \"Someone Like You\": 1600, \"Rolling in the Deep\": 1200}\ndef average_plays(plays):\n    total = 0\n    for song in plays:\n        total = total + 1\n    return round(total / len(plays), 1)\n\nprint(average_plays(song_plays))\n",
      check: { type: "output", expected: "2200.0" },
      hints: [
        "`+ 1` counts songs.",
        "Add the play count instead.",
        "total = total + plays[song]",
      ],
      solution: "song_plays = {\"Dance Monkey\": 2500, \"Shape of You\": 2800, \"Blinding Lights\": 3200, \"Bad Guy\": 1900, \"Someone Like You\": 1600, \"Rolling in the Deep\": 1200}\ndef average_plays(plays):\n    total = 0\n    for song in plays:\n        total = total + plays[song]\n    return round(total / len(plays), 1)\n\nprint(average_plays(song_plays))\n",
    },
    {
      type: "text",
      md: "Test the suspect alone, on the smallest input you can check by hand — a [[minimal example]]. Pick numbers where you already know the answer. A tiny input tells you instantly whether the function is wrong. A strange number on the real dataset might be a bug, or just surprising data.",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Trace `average_plays` on a tiny 2-item dictionary you can check by hand. Predict the output.",
      starter: "def average_plays(plays):\n    total = 0\n    for song in plays:\n        total = total + plays[song]\n    return round(total / len(plays), 1)\n\ntiny = {\"A\": 2, \"B\": 4}\nprint(average_plays(tiny))\n",
      check: { type: "output", expected: "3.0" },
      hints: [
        "2 + 4 = 6.",
        "Over 2 items.",
        "3.0.",
      ],
      solution: "def average_plays(plays):\n    total = 0\n    for song in plays:\n        total = total + plays[song]\n    return round(total / len(plays), 1)\n\ntiny = {\"A\": 2, \"B\": 4}\nprint(average_plays(tiny))\n",
    },
    {
      type: "text",
      md: "Not every bug crashes. A [[silent bug]] runs cleanly and prints a wrong number — no red text to anchor on. You have to notice something's off first, usually by checking the output against a value you worked out another way. Read what's actually written, not what the name suggests.",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Read this exactly as written, not as a function named `count_dance_tracks` might behave. Predict what it prints for `[80, 110, 140, 96]`.",
      starter: "def count_dance_tracks(tracks):\n    count = 0\n    for t in tracks:\n        if t >= 110:\n            play(72)\n            count += 1\n        sleep(0.1)\n    return count\n\nbpm = [80, 110, 140, 96]\nprint(count_dance_tracks(bpm))\n",
      check: { type: "output", expected: "2" },
      hints: [
        "`>= 110` includes 110 itself.",
        "110 and 140 qualify.",
        "2.",
      ],
      solution: "def count_dance_tracks(tracks):\n    count = 0\n    for t in tracks:\n        if t >= 110:\n            play(72)\n            count += 1\n        sleep(0.1)\n    return count\n\nbpm = [80, 110, 140, 96]\nprint(count_dance_tracks(bpm))\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "`total_medals` always returns 0 — a silent bug. `totals` (the accumulator) is never updated; `total` (no s) is a throwaway made fresh each loop. Fix it so it returns `126`.",
      starter: "medals = {\"USA\": 39, \"China\": 38, \"Japan\": 27, \"Great Britain\": 22}\ndef total_medals(data):\n    totals = 0\n    for country in data:\n        total = data[country]\n    return totals\n\nprint(total_medals(medals))\n",
      check: { type: "output", expected: "126" },
      hints: [
        "`total` (no s) is thrown away each loop.",
        "Add into `totals` instead.",
        "totals += data[country]",
      ],
      solution: "medals = {\"USA\": 39, \"China\": 38, \"Japan\": 27, \"Great Britain\": 22}\ndef total_medals(data):\n    totals = 0\n    for country in data:\n        totals += data[country]\n    return totals\n\nprint(total_medals(medals))\n",
    },
  ],
  codex: {
    topic: "the debugging loop",
    pattern: "# guess one cause, test it small\ntiny = {\"A\": 2, \"B\": 4}   # known answer\n# silent bug: runs, prints wrong",
    note: "Debug in a loop: one guess, a small test with a known answer, revise. Test a suspect on a minimal input. Silent bugs don't crash — check the output against a value you found another way.",
  },
});

/* ── Lesson 5.7 — Finale: the playlist analyst (cumulative) ──────────── */

window.CODELAB.lessons.push({
  id: "c5s7",
  chapter: 5,
  strand: "data",
  lang: "py",
  timeBudgetMin: 30,
  title: "Finale: the playlist analyst",
  content: [
    {
      type: "text",
      md: "No new skills — this is the job. Decompose a report into functions, catch a silent bug, and turn real data into the right chart: a line over the week, a dot plot to see whether two things relate, a bar across the whole playlist. Read the worked example, then build four of your own.",
    },
    {
      type: "example",
      note: "A small report, decomposed. Each function does one job.",
      code: "song_plays = {\"Blinding Lights\": 3200, \"Shape of You\": 2800, \"Dance Monkey\": 2500, \"Bad Guy\": 1900}\n\ndef total_plays(p):\n    return sum(p.values())\n\ndef most_played(p):\n    return max(p, key=p.get)\n\ndef report(p):\n    print(\"Total:\", total_plays(p))\n    print(\"Top:\", most_played(p))\n\nreport(song_plays)\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This weather summary has a silent bug: `hot_days` counts *all* days instead of only the hot ones (it never checks the temperature). Fix it so it prints `3` (days above 74).",
      starter: "week = [72, 75, 68, 80, 77, 71, 74]\ndef hot_days(temps):\n    count = 0\n    for t in temps:\n        count += 1\n    return count\n\nprint(hot_days(week))\n",
      check: { type: "output", expected: "3" },
      hints: [
        "It counts every day.",
        "Add `if t > 74`.",
        "Days above 74: 75, 80, 77 — that's 3.",
      ],
      solution: "week = [72, 75, 68, 80, 77, 71, 74]\ndef hot_days(temps):\n    count = 0\n    for t in temps:\n        if t > 74:\n            count += 1\n    return count\n\nprint(hot_days(week))\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: given `song_plays = {\"Blinding Lights\": 3200, \"Shape of You\": 2800, \"Dance Monkey\": 2500, \"Bad Guy\": 1900}`, write `total_plays(p)` (returns the sum of the values) and `top_song(p)` (returns the key with the most plays), then a `report(p)` that prints `Total: N` then `Top: title`. Call `report(song_plays)`.",
      starter: "",
      check: { type: "output", expected: "Total: 10400\nTop: Blinding Lights" },
      hints: [
        "`sum(p.values())` for the total.",
        "`max(p, key=p.get)` for the top.",
        "Total 10400, Top Blinding Lights.",
      ],
      solution: "song_plays = {\"Blinding Lights\": 3200, \"Shape of You\": 2800, \"Dance Monkey\": 2500, \"Bad Guy\": 1900}\n\ndef total_plays(p):\n    return sum(p.values())\n\ndef top_song(p):\n    return max(p, key=p.get)\n\ndef report(p):\n    print(\"Total:\", total_plays(p))\n    print(\"Top:\", top_song(p))\n\nreport(song_plays)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: given the full week `week = {\"Mon\": 72, \"Tue\": 75, \"Wed\": 68, \"Thu\": 80, \"Fri\": 77, \"Sat\": 71, \"Sun\": 74}`, write `chart_week(data)` (a **line** chart with `plot`, since days are an ordered sequence) and `hottest_day(data)` (returns the day with the highest temp). Write `describe(data)` that calls both and prints `Hottest: Thu`. Call `describe(week)`.",
      starter: "",
      check: { type: "output", expected: "Hottest: Thu" },
      hints: [
        "Days are ordered → a line, so `plot`.",
        "`max(data, key=data.get)` for the hottest day.",
        "Thu is hottest at 80.",
      ],
      solution: "week = {\"Mon\": 72, \"Tue\": 75, \"Wed\": 68, \"Thu\": 80, \"Fri\": 77, \"Sat\": 71, \"Sun\": 74}\n\ndef chart_week(data):\n    plot(list(range(len(data))), list(data.values()))\n\ndef hottest_day(data):\n    return max(data, key=data.get)\n\ndef describe(data):\n    chart_week(data)\n    print(\"Hottest:\", hottest_day(data))\n\ndescribe(week)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch — the interesting question: *do faster songs get more plays?* Given the whole playlist's `bpm` and `plays` (twelve songs each), draw a **dot plot** of BPM against plays with `dotplot(bpm, plays)` — points only, no line, because the songs aren't in any order. Then find the single fastest song and print its play count. (Fastest BPM is 174; that song has 3100 plays.)",
      starter: "",
      check: { type: "output", expected: "3100" },
      hints: [
        "Two paired measurements per song, no real order → a dot plot.",
        "Track the index of the biggest BPM.",
        "The fastest song (174 BPM) has 3100 plays.",
      ],
      solution: "bpm   = [103, 171, 174, 135, 95, 96, 115, 110, 98, 90, 170, 81]\nplays = [2100, 4300, 3100, 2600, 1900, 3600, 2400, 2800, 2500, 2200, 2000, 1800]\n\ndotplot(bpm, plays)\n\nfastest_i = 0\nfor i in range(len(bpm)):\n    if bpm[i] > bpm[fastest_i]:\n        fastest_i = i\nprint(plays[fastest_i])\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch — the analyst, on the whole 12-song playlist. Given `plays` as a dictionary of all twelve titles to play counts, write `chart_plays(p)` (a **bar** chart, since titles are separate categories), `average_plays(p)` (returns the average, rounded to 1 decimal), and `studio_report(p)` that charts the plays, then prints `Top: title` and `Average: N`. Call `studio_report(plays)`.",
      starter: "",
      check: { type: "output", expected: "Top: Blinding Lights\nAverage: 2608.3" },
      hints: [
        "Titles are categories → a bar chart, all twelve.",
        "Average is sum of values over count, rounded.",
        "Sum 31300 / 12 = 2608.3, top Blinding Lights.",
      ],
      solution: "plays = {\"Levitating\": 2100, \"Blinding Lights\": 4300, \"As It Was\": 3100, \"Bad Guy\": 2600,\n         \"Watermelon Sugar\": 1900, \"Shape of You\": 3600, \"Uptown Funk\": 2400, \"Someone You Loved\": 2800,\n         \"Dance Monkey\": 2500, \"Sunflower\": 2200, \"Stay\": 2000, \"Heat Waves\": 1800}\n\ndef chart_plays(p):\n    bar(list(p.keys()), list(p.values()))\n\ndef average_plays(p):\n    return round(sum(p.values()) / len(p), 1)\n\ndef studio_report(p):\n    chart_plays(p)\n    print(\"Top:\", max(p, key=p.get))\n    print(\"Average:\", average_plays(p))\n\nstudio_report(plays)\n",
    },
  ],
  codex: {
    topic: "the playlist analyst",
    pattern: "def report(p): total(p); top(p)\nplot(...)   # ordered → line\ndotplot(...) # paired → dots\nbar(...)     # categories → bars",
    note: "The whole chapter at once: decompose a report into named functions, watch for silent bugs, and pick the chart by the data's shape — line for order, dot plot for a relationship, bar for categories.",
  },
});
