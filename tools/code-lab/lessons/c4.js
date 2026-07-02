/* Chapter 4 — Collections
   Rebuilt to CODELAB_FULL_REPORT.md + CODELAB_CH4_REBUILT.md.
   Lessons: c4s1 Lists · c4s2 Reaching into a list · c4s3 Changing a list ·
            c4s4 Looping over a list · c4s5 Tuples & sets · c4s6 Dictionaries ·
            c4s7 Nesting · c4s8 Data into charts · c4s9 Lists as music ·
            c4s10 Finale: The Playlist Studio
   Recurring real data: the Playlist (12 songs, BPM, plays), the Solar System
   (moon counts), the Weather Week, and the Twinkle melody. */

/* ── Lesson 4.1 — Lists: one name for many values ────────────────────── */

window.CODELAB.lessons.push({
  id: "c4s1",
  chapter: 4,
  strand: "data",
  lang: "py",
  timeBudgetMin: 12,
  title: "Lists: one name for many values",
  glossary: {
    list: "One name that holds many values in order, written in square brackets with commas between the items.",
  },
  content: [
    {
      type: "text",
      md: "So far each value needs its own name. A [[list]] gives one name to as many values as you want — you write them in square brackets, separated by commas.",
    },
    {
      type: "example",
      note: "Four songs' beats-per-minute under one name. max reaches into the whole list at once. Change a number and run again.",
      code: "bpm = [103, 171, 174, 135]\nprint(\"Fastest:\", max(bpm))\n",
    },
    {
      type: "text",
      md: "`bpm[0]` is the first value, `bpm[-1]` is the last, and `len(bpm)` counts them. The first slot is `0`, not `1` — an index is how many steps from the start, and the first is zero steps in.",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "`BPM` holds four songs' beats-per-minute. Predict all three printed lines, then run.",
      starter: "bpm = [103, 171, 174, 135]\nprint(bpm[0])\nprint(bpm[-1])\nprint(len(bpm))\n",
      check: { type: "output", expected: "103\n135\n4" },
      hints: [
        "`[0]` is the first, `[-1]` the last.",
        "`len` counts them.",
        "103, 135, 4.",
      ],
      solution: "bpm = [103, 171, 174, 135]\nprint(bpm[0])\nprint(bpm[-1])\nprint(len(bpm))\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "This prints the first song's play count. Change one thing so it prints the *last* song's play count instead.",
      starter: "plays = [2100, 4300, 3100, 2600]\nprint(plays[0])\n",
      check: { type: "output", expected: "2600" },
      hints: [
        "Change the index.",
        "`-1` is the last item.",
        "plays[-1]",
      ],
      solution: "plays = [2100, 4300, 3100, 2600]\nprint(plays[-1])\n",
    },
    {
      type: "exercise",
      rung: 2,
      prompt: "Arrange these lines to store three song titles and print the middle one. One line is a decoy.",
      starter: "",
      check: {
        type: "parsons",
        lines: [
          "songs = [\"Levitating\", \"Stay\", \"Sunflower\"]",
          "print(songs[1])",
        ],
        distractors: ["print(songs[3])"],
      },
      hints: [
        "The middle of three is index 1.",
        "Index 3 doesn't exist here.",
        "songs[1]",
      ],
      solution: "songs = [\"Levitating\", \"Stay\", \"Sunflower\"]\nprint(songs[1])\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: build the first four songs of the playlist as a list of BPMs (103, 171, 174, 135). Print how many songs are in it, then the fastest one.",
      starter: "",
      check: { type: "output", expected: "4\n174" },
      hints: [
        "Make the list first.",
        "`len` for the count, `max` for the fastest.",
        "Two print lines.",
      ],
      solution: "bpm = [103, 171, 174, 135]\nprint(len(bpm))\nprint(max(bpm))\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: store the weather week `[72, 75, 68, 80, 77, 71, 74]` in a list. Print the hottest day and the coldest day.",
      starter: "",
      check: { type: "output", expected: "80\n68" },
      hints: [
        "`max` for hottest.",
        "`min` for coldest.",
        "Two prints.",
      ],
      solution: "weather = [72, 75, 68, 80, 77, 71, 74]\nprint(max(weather))\nprint(min(weather))\n",
    },
  ],
  codex: {
    topic: "lists",
    pattern: "bpm = [103, 171, 174]\nbpm[0]    # first\nbpm[-1]   # last\nlen(bpm)  # count",
    note: "A list holds many values under one name, in square brackets. Index from 0; [-1] is the last. max/min/len/sum work on the whole list at once.",
  },
});

/* ── Lesson 4.2 — Reaching into a list: indexing & slicing ───────────── */

window.CODELAB.lessons.push({
  id: "c4s2",
  chapter: 4,
  strand: "data",
  lang: "py",
  timeBudgetMin: 13,
  title: "Reaching into a list",
  glossary: {
    index: "A number in square brackets that picks one position in a list or string, counting from 0 at the left.",
    slice: "A range in square brackets like `lst[1:3]` that takes a run of items — from the start up to, but not including, the stop.",
  },
  content: [
    {
      type: "text",
      md: "An [[index]] in square brackets picks one position. Strings and lists index the same way, so `song[0]` is a song's first letter and `titles[0]` is the first title.",
    },
    {
      type: "example",
      note: "Same rules for strings and lists — first, last, and a slice.",
      code: "titles = [\"Levitating\", \"Blinding Lights\", \"As It Was\", \"Bad Guy\", \"Watermelon Sugar\"]\nprint(titles[0])     # Levitating\nprint(titles[-1])    # Watermelon Sugar\nprint(titles[1:3])   # ['Blinding Lights', 'As It Was']\n",
    },
    {
      type: "text",
      md: "A [[slice]] `titles[1:3]` takes a run — positions 1 and 2, but **not** 3. The stop is left out, so you always get `stop - start` items. It matches `range`: `range(1, 3)` is also 1, 2. `-1` is always the last, never an error.",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Predict each line. `TITLES` is the playlist in order.",
      starter: "titles = [\"Levitating\", \"Blinding Lights\", \"As It Was\", \"Bad Guy\", \"Watermelon Sugar\"]\nprint(titles[0])\nprint(titles[-1])\nprint(titles[1:3])\n",
      check: { type: "output", expected: "Levitating\nWatermelon Sugar\n['Blinding Lights', 'As It Was']" },
      hints: [
        "`[0]` first, `[-1]` last.",
        "The slice stops before index 3.",
        "Two names, then a two-item list.",
      ],
      solution: "titles = [\"Levitating\", \"Blinding Lights\", \"As It Was\", \"Bad Guy\", \"Watermelon Sugar\"]\nprint(titles[0])\nprint(titles[-1])\nprint(titles[1:3])\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "This prints the first three songs. Change only the slice so it prints the *last three*.",
      starter: "titles = [\"Levitating\", \"Blinding Lights\", \"As It Was\", \"Bad Guy\", \"Watermelon Sugar\"]\nprint(titles[0:3])\n",
      check: { type: "output", expected: "['As It Was', 'Bad Guy', 'Watermelon Sugar']" },
      hints: [
        "Negative index counts from the end.",
        "`[-3:]` is the last three.",
        "titles[-3:]",
      ],
      solution: "titles = [\"Levitating\", \"Blinding Lights\", \"As It Was\", \"Bad Guy\", \"Watermelon Sugar\"]\nprint(titles[-3:])\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "`first_half` should return the first half of a list, but it returns the whole thing. The bug is the slice's stop value. Fix it.",
      starter: "def first_half(lst):\n    return lst[0:len(lst)]\n\nprint(first_half([2100, 4300, 3100, 2600]))\n",
      check: { type: "output", expected: "[2100, 4300]" },
      hints: [
        "`len(lst)` is the whole length.",
        "Halve it with `// 2`.",
        "lst[0:len(lst) // 2]",
      ],
      solution: "def first_half(lst):\n    return lst[0:len(lst) // 2]\n\nprint(first_half([2100, 4300, 3100, 2600]))\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: given the melody `[60, 60, 67, 67, 69, 69, 67]`, print the first note, the last note, and the middle three notes as a slice (`[2:5]`).",
      starter: "",
      check: { type: "output", expected: "60\n67\n[67, 67, 69]" },
      hints: [
        "`[0]` and `[-1]` for the ends.",
        "`[2:5]` takes positions 2, 3, 4.",
        "Three prints.",
      ],
      solution: "melody = [60, 60, 67, 67, 69, 69, 67]\nprint(melody[0])\nprint(melody[-1])\nprint(melody[2:5])\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: store the weather week `[72, 75, 68, 80, 77, 71, 74]`. Print the weekday highs (the first five days) and the weekend highs (the last two) as two lists.",
      starter: "",
      check: { type: "output", expected: "[72, 75, 68, 80, 77]\n[71, 74]" },
      hints: [
        "`[0:5]` is the first five.",
        "`[-2:]` is the last two.",
        "Two slices.",
      ],
      solution: "weather = [72, 75, 68, 80, 77, 71, 74]\nprint(weather[0:5])\nprint(weather[-2:])\n",
    },
  ],
  codex: {
    topic: "indexing & slicing",
    pattern: "titles[0]     # first\ntitles[-1]    # last\ntitles[1:3]   # items 1,2 (not 3)",
    note: "An index picks one position (from 0). A slice [start:stop] takes a run up to but not including stop, giving stop - start items. [-3:] is the last three.",
  },
});

/* ── Lesson 4.3 — Changing a list ────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c4s3",
  chapter: 4,
  strand: "data",
  lang: "py",
  timeBudgetMin: 14,
  title: "Changing a list",
  content: [
    {
      type: "text",
      md: "Lists can grow and change. `.append(x)` adds an item to the end, changing the list **in place** — it doesn't make a new one, and it hands back `None`.",
    },
    {
      type: "example",
      note: "Start empty, add songs one at a time.",
      code: "playlist = []\nplaylist.append(\"Levitating\")\nplaylist.append(\"Stay\")\nprint(playlist)\n",
    },
    {
      type: "text",
      md: "Write `playlist.append(\"Stay\")`, never `playlist = playlist.append(\"Stay\")` — that second form throws your list away and stores `None`. Other tools: `remove(x)` deletes by value, `insert(i, x)` adds at a position, and assigning `lst[0] = x` replaces one slot.",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Predict the final list and its length.",
      starter: "playlist = [\"Levitating\"]\nplaylist.append(\"Stay\")\nplaylist.append(\"Sunflower\")\nprint(playlist)\nprint(len(playlist))\n",
      check: { type: "output", expected: "['Levitating', 'Stay', 'Sunflower']\n3" },
      hints: [
        "Two appends add two songs.",
        "That makes three total.",
        "The list, then 3.",
      ],
      solution: "playlist = [\"Levitating\"]\nplaylist.append(\"Stay\")\nplaylist.append(\"Sunflower\")\nprint(playlist)\nprint(len(playlist))\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This should build a 3-song playlist and print 3, but it crashes with an AttributeError. The bug is the `= playlist.append(...)` pattern — it stores `None`. Fix all three lines.",
      starter: "playlist = []\nplaylist = playlist.append(\"Levitating\")\nplaylist = playlist.append(\"Stay\")\nplaylist = playlist.append(\"Sunflower\")\nprint(len(playlist))\n",
      check: { type: "output", expected: "3" },
      hints: [
        "`append` returns None, so `playlist` becomes None.",
        "Don't assign the result.",
        "Just `playlist.append(...)`.",
      ],
      solution: "playlist = []\nplaylist.append(\"Levitating\")\nplaylist.append(\"Stay\")\nplaylist.append(\"Sunflower\")\nprint(len(playlist))\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "The DJ dropped one song and added another. Remove `Sunflower`, then append `Heat Waves`. Print the result.",
      starter: "playlist = [\"Levitating\", \"Sunflower\", \"Stay\"]\n# remove Sunflower, then append Heat Waves\nprint(playlist)\n",
      check: { type: "output", expected: "['Levitating', 'Stay', 'Heat Waves']" },
      hints: [
        "`remove` deletes by value.",
        "`append` adds to the end.",
        "Two lines before the print.",
      ],
      solution: "playlist = [\"Levitating\", \"Sunflower\", \"Stay\"]\nplaylist.remove(\"Sunflower\")\nplaylist.append(\"Heat Waves\")\nprint(playlist)\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "The accumulator pattern, building a list: start empty, append in a loop. Complete `make_evens(n)` so it returns even numbers from 2 up to and including `n`.",
      starter: "def make_evens(n):\n    result = []\n    # loop 2 to n step 2, append each\n    return result\n\nprint(make_evens(8))\n",
      check: { type: "output", expected: "[2, 4, 6, 8]" },
      hints: [
        "`range(2, n + 1, 2)` steps by twos.",
        "Append each into `result`.",
        "Return after the loop.",
      ],
      solution: "def make_evens(n):\n    result = []\n    for i in range(2, n + 1, 2):\n        result.append(i)\n    return result\n\nprint(make_evens(8))\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: build a playlist by asking the user for three song titles one at a time with `input()`, appending each. Then print the finished list and its length. (Inputs: Levitating, Stay, Sunflower.)",
      starter: "",
      mockInput: ["Levitating", "Stay", "Sunflower"],
      check: { type: "output", expected: "['Levitating', 'Stay', 'Sunflower']\n3" },
      hints: [
        "Start with an empty list.",
        "Append three inputs.",
        "Print the list, then its length.",
      ],
      solution: "playlist = []\nplaylist.append(input())\nplaylist.append(input())\nplaylist.append(input())\nprint(playlist)\nprint(len(playlist))\n",
    },
  ],
  codex: {
    topic: "changing a list",
    pattern: "lst.append(x)   # add to end, in place\nlst.remove(x)   # delete by value\nlst[0] = x      # replace one slot",
    note: "Lists change in place. append/remove/insert mutate and return None — never write lst = lst.append(x). Build a list with the accumulator: start [], append in a loop.",
  },
});

/* ── Lesson 4.4 — Looping over a list ────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c4s4",
  chapter: 4,
  strand: "data",
  lang: "py",
  timeBudgetMin: 15,
  title: "Looping over a list",
  glossary: {
    accumulator: "A running total you build in a loop: start a variable at 0, add to it each time around, and read it after the loop.",
  },
  content: [
    {
      type: "text",
      md: "To work with every value, loop over the list itself. `for item in lst` hands you each value in turn. You don't need an index, and it can't run off the end.",
    },
    {
      type: "example",
      note: "The clean loop — each name in turn.",
      code: "names = [\"Ada\", \"Grace\", \"Linus\"]\nfor name in names:\n    print(name)\n",
    },
    {
      type: "text",
      md: "The [[accumulator]] pattern, from Chapter 2, works on lists. Start a total at 0, add to it inside the loop, read it after. `sum(lst)` does the same in one step. An average is `sum(lst) / len(lst)` — but guard the empty list, or dividing by `len` of 0 raises a `ZeroDivisionError`.",
    },
    {
      type: "example",
      note: "Accumulate a total, or use sum — same answer.",
      code: "plays = [2100, 4300, 3100]\ntotal = 0\nfor p in plays:\n    total += p\nprint(total)         # 9500\nprint(sum(plays))    # 9500\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Trace the accumulator and predict the printed total.",
      starter: "plays = [2100, 4300, 3100]\ntotal = 0\nfor p in plays:\n    total += p\nprint(total)\n",
      check: { type: "output", expected: "9500" },
      hints: [
        "Add each play count.",
        "2100 + 4300 + 3100.",
        "9500.",
      ],
      solution: "plays = [2100, 4300, 3100]\ntotal = 0\nfor p in plays:\n    total += p\nprint(total)\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "This counts every song. Change the loop so it counts only the songs at 120 BPM or faster.",
      starter: "bpm = [103, 171, 174, 135, 95, 96, 115, 110, 98, 90, 170, 81]\ncount = 0\nfor b in bpm:\n    count += 1\nprint(count)\n",
      check: { type: "output", expected: "4" },
      hints: [
        "Add an `if` before counting.",
        "`b >= 120`.",
        "Four songs qualify.",
      ],
      solution: "bpm = [103, 171, 174, 135, 95, 96, 115, 110, 98, 90, 170, 81]\ncount = 0\nfor b in bpm:\n    if b >= 120:\n        count += 1\nprint(count)\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This should print the total once, at the end, but it prints a running total every loop. The `print` is indented into the loop. Fix it.",
      starter: "plays = [2100, 4300, 3100]\ntotal = 0\nfor p in plays:\n    total += p\n    print(total)\n",
      check: { type: "output", expected: "9500" },
      hints: [
        "The print runs every iteration.",
        "Move it outside the loop.",
        "Dedent the print.",
      ],
      solution: "plays = [2100, 4300, 3100]\ntotal = 0\nfor p in plays:\n    total += p\nprint(total)\n",
    },
    {
      type: "text",
      md: "Two more tools help here. `sorted(lst)` returns a **new** sorted list and leaves the original alone. `enumerate(lst)` hands you the index and the value together, as in `for i, item in enumerate(lst)`.",
    },
    {
      type: "example",
      note: "sorted gives a new order. The original list stays as it was.",
      code: "plays = [2100, 4300, 3100]\nprint(sorted(plays))                 # [2100, 3100, 4300]\nprint(sorted(plays, reverse=True))  # [4300, 3100, 2100]\nprint(plays)                        # unchanged: [2100, 4300, 3100]\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete `above_average(temps)` so it returns how many days were hotter than the week's average.",
      starter: "def above_average(temps):\n    avg = sum(temps) / len(temps)\n    count = 0\n    # loop temps, count days above avg\n    return count\n\nprint(above_average([72, 75, 68, 80, 77, 71, 74]))\n",
      check: { type: "output", expected: "4" },
      hints: [
        "Average is 73.9 here.",
        "Count days where `t > avg`.",
        "Four days beat it.",
      ],
      solution: "def above_average(temps):\n    avg = sum(temps) / len(temps)\n    count = 0\n    for t in temps:\n        if t > avg:\n            count += 1\n    return count\n\nprint(above_average([72, 75, 68, 80, 77, 71, 74]))\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: the playlist's play counts are `[2100, 4300, 3100, 2600, 1900]`. Print the total, then the average per song rounded to the nearest whole number (`round(sum/len)`).",
      starter: "",
      check: { type: "output", expected: "14000\n2800" },
      hints: [
        "`sum` for the total.",
        "`round(sum / len)` for the average.",
        "2800.",
      ],
      solution: "plays = [2100, 4300, 3100, 2600, 1900]\nprint(sum(plays))\nprint(round(sum(plays) / len(plays)))\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: given `plays = [2100, 4300, 3100, 2600, 1900]`, print the play counts sorted from highest to lowest, then print the biggest one. Use `sorted(..., reverse=True)` and `max`.",
      starter: "",
      check: { type: "output", expected: "[4300, 3100, 2600, 2100, 1900]\n4300" },
      hints: [
        "`sorted(plays, reverse=True)` for high-to-low.",
        "`max` for the biggest.",
        "Two prints.",
      ],
      solution: "plays = [2100, 4300, 3100, 2600, 1900]\nprint(sorted(plays, reverse=True))\nprint(max(plays))\n",
    },
  ],
  codex: {
    topic: "looping over a list",
    pattern: "for item in lst:\n    total += item\nsum(lst)          # same total\nsorted(lst)       # new sorted list",
    note: "for item in lst visits each value. Accumulate a total, or use sum/max/min. sorted returns a new list; enumerate gives index and value together.",
  },
});

/* ── Lesson 4.5 — Tuples & sets ──────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c4s5",
  chapter: 4,
  strand: "data",
  lang: "py",
  timeBudgetMin: 12,
  title: "Tuples & sets",
  glossary: {
    tuple: "A list that can't change, written with parentheses like `(\"As It Was\", 174)`. Good for a fixed record whose parts belong together.",
    set: "A collection that keeps only unique values — duplicates disappear. Written with `set(...)` or curly braces.",
  },
  content: [
    {
      type: "text",
      md: "A [[tuple]] is a list that can't change — perfect for a record whose parts belong together, like `(title, bpm)`. You read it by index like a list, but you can't append to it.",
    },
    {
      type: "example",
      note: "A song as a (title, bpm) pair.",
      code: "song = (\"As It Was\", 174)\nprint(song[0], \"is\", song[1], \"BPM\")\n",
    },
    {
      type: "text",
      md: "A [[set]] holds only unique values: `set([\"pop\", \"pop\", \"rock\"])` is `{\"pop\", \"rock\"}`. That makes \"how many *different* things are here?\" a one-liner: `len(set(...))`.",
    },
    {
      type: "example",
      note: "Duplicates vanish in a set.",
      code: "genres = [\"pop\", \"pop\", \"rock\", \"pop\", \"rock\"]\nprint(len(set(genres)))   # 2\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Predict both lines.",
      starter: "song = (\"Stay\", 170)\nprint(song[1])\ngenres = [\"pop\", \"pop\", \"rock\", \"jazz\", \"rock\"]\nprint(len(set(genres)))\n",
      check: { type: "output", expected: "170\n3" },
      hints: [
        "`song[1]` is the BPM.",
        "Distinct genres: pop, rock, jazz.",
        "170, then 3.",
      ],
      solution: "song = (\"Stay\", 170)\nprint(song[1])\ngenres = [\"pop\", \"pop\", \"rock\", \"jazz\", \"rock\"]\nprint(len(set(genres)))\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "This unpacks a song pair and prints the title. Add a line that prints just the BPM, using the same unpacking (`title, bpm = song`).",
      starter: "song = (\"Stay\", 170)\ntitle, bpm = song\nprint(title)\n",
      check: { type: "output", expected: "Stay\n170" },
      hints: [
        "`bpm` already holds the number.",
        "Add one print.",
        "print(bpm)",
      ],
      solution: "song = (\"Stay\", 170)\ntitle, bpm = song\nprint(title)\nprint(bpm)\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete `unique_count(values)` so it returns how many different values there are.",
      starter: "def unique_count(values):\n    # return the number of distinct values\n    pass\n\nprint(unique_count([\"pop\",\"pop\",\"rock\",\"jazz\",\"rock\"]))\n",
      check: { type: "output", expected: "3" },
      hints: [
        "A set drops duplicates.",
        "Count with `len`.",
        "len(set(values))",
      ],
      solution: "def unique_count(values):\n    return len(set(values))\n\nprint(unique_count([\"pop\",\"pop\",\"rock\",\"jazz\",\"rock\"]))\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: make three song records as tuples — `(\"Stay\", 170)`, `(\"Sunflower\", 90)`, `(\"Bad Guy\", 135)` — in a list. Loop it and print each as `Stay: 170`.",
      starter: "",
      check: { type: "output", expected: "Stay: 170\nSunflower: 90\nBad Guy: 135" },
      hints: [
        "A list of `(title, bpm)` tuples.",
        "`for title, bpm in songs:` unpacks each.",
        "Join with `\": \"` and `str(bpm)`.",
      ],
      solution: "songs = [(\"Stay\", 170), (\"Sunflower\", 90), (\"Bad Guy\", 135)]\nfor title, bpm in songs:\n    print(title + \": \" + str(bpm))\n",
    },
  ],
  codex: {
    topic: "tuples & sets",
    pattern: "song = (\"Stay\", 170)   # fixed record\ntitle, bpm = song      # unpack\nlen(set(values))       # distinct count",
    note: "A tuple is a list that can't change — great for a record. A set keeps only unique values, so len(set(...)) counts distinct things.",
  },
});

/* ── Lesson 4.6 — Dictionaries ───────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c4s6",
  chapter: 4,
  strand: "data",
  lang: "py",
  timeBudgetMin: 14,
  title: "Dictionaries",
  glossary: {
    dictionary: "A collection that looks up a value by a name (a \"key\") instead of a position, written with curly braces like `{\"Saturn\": 146}`.",
  },
  content: [
    {
      type: "text",
      md: "A [[dictionary]] looks up a value by a name instead of a position: `moons[\"Saturn\"]` gives `146`. Add or change with `moons[\"Mars\"] = 2`. Loop the keys with `for planet in moons`, and get each value with `moons[planet]`.",
    },
    {
      type: "example",
      note: "Look up by name; count the entries.",
      code: "moons = {\"Earth\": 1, \"Mars\": 2, \"Jupiter\": 95, \"Saturn\": 146}\nprint(moons[\"Saturn\"])   # 146\nprint(len(moons))        # 4\n",
    },
    {
      type: "text",
      md: "Asking for a key that isn't there raises a `KeyError`. `moons.get(\"Pluto\", 0)` returns `0` instead of crashing when the key is missing.",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Predict all three lines. `MOONS` maps a planet to its moon count.",
      starter: "moons = {\"Earth\": 1, \"Mars\": 2, \"Jupiter\": 95, \"Saturn\": 146}\nprint(moons[\"Saturn\"])\nprint(len(moons))\nprint(moons.get(\"Pluto\", 0))\n",
      check: { type: "output", expected: "146\n4\n0" },
      hints: [
        "Look up Saturn.",
        "Four planets.",
        "`.get` gives 0 for the missing key.",
      ],
      solution: "moons = {\"Earth\": 1, \"Mars\": 2, \"Jupiter\": 95, \"Saturn\": 146}\nprint(moons[\"Saturn\"])\nprint(len(moons))\nprint(moons.get(\"Pluto\", 0))\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "This prints one planet's moons. Add Neptune (16 moons) to the dictionary, then print the new number of planets.",
      starter: "moons = {\"Earth\": 1, \"Mars\": 2, \"Jupiter\": 95}\nprint(moons[\"Jupiter\"])\n# add Neptune with 16, then print the count\n",
      check: { type: "output", expected: "95\n4" },
      hints: [
        "Assign `moons[\"Neptune\"] = 16`.",
        "Then `len(moons)`.",
        "Four planets now.",
      ],
      solution: "moons = {\"Earth\": 1, \"Mars\": 2, \"Jupiter\": 95}\nprint(moons[\"Jupiter\"])\nmoons[\"Neptune\"] = 16\nprint(len(moons))\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This crashes with a KeyError because 'Pluto' isn't in the dictionary. Use `.get` so a missing planet counts as 0 instead of crashing.",
      starter: "moons = {\"Earth\": 1, \"Mars\": 2}\nprint(moons[\"Pluto\"])\n",
      check: { type: "output", expected: "0" },
      hints: [
        "`moons[\"Pluto\"]` crashes.",
        "`.get` takes a fallback.",
        "moons.get(\"Pluto\", 0)",
      ],
      solution: "moons = {\"Earth\": 1, \"Mars\": 2}\nprint(moons.get(\"Pluto\", 0))\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete `total_moons(data)` so it adds up every value in the dictionary.",
      starter: "def total_moons(data):\n    total = 0\n    # loop the planets, add each moon count\n    return total\n\nprint(total_moons({\"Earth\":1, \"Mars\":2, \"Jupiter\":95, \"Saturn\":146, \"Uranus\":28, \"Neptune\":16}))\n",
      check: { type: "output", expected: "288" },
      hints: [
        "Loop the keys.",
        "Add `data[planet]` each time.",
        "Total is 288.",
      ],
      solution: "def total_moons(data):\n    total = 0\n    for planet in data:\n        total += data[planet]\n    return total\n\nprint(total_moons({\"Earth\":1, \"Mars\":2, \"Jupiter\":95, \"Saturn\":146, \"Uranus\":28, \"Neptune\":16}))\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: build a dictionary of four songs mapped to plays (Blinding Lights 4300, Shape of You 3600, As It Was 3100, Someone You Loved 2800). Print the plays for 'As It Was', then the total across all four (`sum(dict.values())`).",
      starter: "",
      check: { type: "output", expected: "3100\n13800" },
      hints: [
        "Build the dict.",
        "Look up one, then sum the values.",
        "`sum(plays.values())` is 13800.",
      ],
      solution: "plays = {\"Blinding Lights\": 4300, \"Shape of You\": 3600, \"As It Was\": 3100, \"Someone You Loved\": 2800}\nprint(plays[\"As It Was\"])\nprint(sum(plays.values()))\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: using the moons dictionary `{\"Earth\":1, \"Mars\":2, \"Jupiter\":95, \"Saturn\":146}`, find and print the planet with the most moons using `max(moons, key=moons.get)`.",
      starter: "",
      check: { type: "output", expected: "Saturn" },
      hints: [
        "`max` with `key=moons.get` compares by value.",
        "It returns the key.",
        "Saturn has the most.",
      ],
      solution: "moons = {\"Earth\":1, \"Mars\":2, \"Jupiter\":95, \"Saturn\":146}\nprint(max(moons, key=moons.get))\n",
    },
  ],
  codex: {
    topic: "dictionaries",
    pattern: "moons[\"Saturn\"]        # look up\nmoons[\"Mars\"] = 2       # add/change\nmoons.get(\"Pluto\", 0)   # safe lookup",
    note: "A dictionary maps names (keys) to values. Look up by key; a missing key raises KeyError unless you use .get with a fallback. sum(d.values()) totals them.",
  },
});

/* ── Lesson 4.7 — Nesting ────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c4s7",
  chapter: 4,
  strand: "data",
  lang: "py",
  timeBudgetMin: 14,
  title: "Nesting",
  glossary: {
    aliasing: "When two names point at the same list, so changing it through one name changes it for both. Slice a copy (`row[:]`) to get a separate list.",
  },
  content: [
    {
      type: "text",
      md: "A list item can itself be a list. Then `grid[1]` gives an inner list, and `grid[1][2]` picks an item from it — just two `[]` operations in a row, outer first.",
    },
    {
      type: "example",
      note: "A seating chart as rows of seats. Outer index picks the row, inner picks the seat.",
      code: "seats = [\n    [\"A1\", \"A2\", \"A3\"],\n    [\"B1\", \"B2\", \"B3\"],\n    [\"C1\", \"C2\", \"C3\"],\n]\nprint(seats[1][2])   # B3\n",
    },
    {
      type: "text",
      md: "To visit every item, use one loop per layer: the outer loop gives a row, the inner loop gives each seat.",
    },
    {
      type: "example",
      note: "Nested loops walk nested data.",
      code: "seats = [[\"A1\", \"A2\"], [\"B1\", \"B2\"]]\nfor row in seats:\n    for seat in row:\n        print(seat)\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Predict both lines.",
      starter: "library = [[\"Stay\", 170], [\"Sunflower\", 90]]\nprint(library[1][0])\nprint(library[0][1])\n",
      check: { type: "output", expected: "Sunflower\n170" },
      hints: [
        "`[1][0]` is row 1, item 0.",
        "`[0][1]` is row 0, item 1.",
        "Sunflower, then 170.",
      ],
      solution: "library = [[\"Stay\", 170], [\"Sunflower\", 90]]\nprint(library[1][0])\nprint(library[0][1])\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "This prints every seat. Change it so it prints only the **last seat in each row** (`A3`, `B3`, `C3`).",
      starter: "seats = [[\"A1\", \"A2\", \"A3\"], [\"B1\", \"B2\", \"B3\"], [\"C1\", \"C2\", \"C3\"]]\nfor row in seats:\n    for seat in row:\n        print(seat)\n",
      check: { type: "output", expected: "A3\nB3\nC3" },
      hints: [
        "You only need one loop now.",
        "`row[-1]` is the last seat.",
        "Drop the inner loop.",
      ],
      solution: "seats = [[\"A1\", \"A2\", \"A3\"], [\"B1\", \"B2\", \"B3\"], [\"C1\", \"C2\", \"C3\"]]\nfor row in seats:\n    print(row[-1])\n",
    },
    {
      type: "text",
      md: "The [[aliasing]] trap: `inner = grid[0]` does **not** copy the list — it makes a second arrow to the same list. Change `inner[0]` and you change `grid[0][0]` too. To get a separate copy, slice it: `grid[0][:]`.",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Does `inner = grid[0]` copy the row or point at it? Predict the output.",
      starter: "grid = [[1, 2], [3, 4]]\ninner = grid[0]\ninner[0] = 99\nprint(grid)\n",
      check: { type: "output", expected: "[[99, 2], [3, 4]]" },
      hints: [
        "`inner` points at the same list.",
        "Changing it changes `grid`.",
        "[[99, 2], [3, 4]]",
      ],
      solution: "grid = [[1, 2], [3, 4]]\ninner = grid[0]\ninner[0] = 99\nprint(grid)\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "`row_total` calls `.pop()` on the row, which empties the real grid. Fix it so it returns the sum without changing the grid at all — the grid should still be `[[1, 2, 3], [4, 5, 6]]` after.",
      starter: "def row_total(grid, row_index):\n    row = grid[row_index]\n    total = 0\n    while row:\n        total += row.pop()\n    return total\n\nmy_grid = [[1, 2, 3], [4, 5, 6]]\nprint(row_total(my_grid, 1))\nprint(my_grid)\n",
      check: { type: "output", expected: "15\n[[1, 2, 3], [4, 5, 6]]" },
      hints: [
        "`.pop()` destroys the row.",
        "`sum` reads it without changing it.",
        "return sum(grid[row_index])",
      ],
      solution: "def row_total(grid, row_index):\n    return sum(grid[row_index])\n\nmy_grid = [[1, 2, 3], [4, 5, 6]]\nprint(row_total(my_grid, 1))\nprint(my_grid)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: build a list of three song records as `[title, plays]` lists — Blinding Lights 4300, Shape of You 3600, Stay 2000. Loop them and print the total plays across the list.",
      starter: "",
      check: { type: "output", expected: "9900" },
      hints: [
        "Each record is `[title, plays]`.",
        "`song[1]` is the play count.",
        "Accumulate and print.",
      ],
      solution: "library = [[\"Blinding Lights\", 4300], [\"Shape of You\", 3600], [\"Stay\", 2000]]\ntotal = 0\nfor song in library:\n    total += song[1]\nprint(total)\n",
    },
  ],
  codex: {
    topic: "nesting",
    pattern: "grid[1][2]        # row 1, item 2\nfor row in grid:\n    for x in row: ...\nrow[:]            # a real copy",
    note: "A list can hold lists. Index outer then inner; loop one layer per level. Aliasing: name = grid[0] points at the same list — slice [:] to copy.",
  },
});

/* ── Lesson 4.8 — Data into charts ───────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c4s8",
  chapter: 4,
  strand: "plot",
  lang: "py",
  timeBudgetMin: 15,
  title: "Data into charts",
  content: [
    {
      type: "text",
      md: "Match the chart to the data's shape. `bar(labels, values)` compares categories. `plot(xs, ys)` draws a line for a value moving over an ordered sequence. `dotplot(xs, ys)` shows two paired measurements. Never chart three points when you have twelve — use the whole dataset.",
    },
    {
      type: "example",
      note: "Eight planets, eight bars — a bar chart compares categories.",
      code: "moons = {\"Mercury\":0,\"Venus\":0,\"Earth\":1,\"Mars\":2,\"Jupiter\":95,\"Saturn\":146,\"Uranus\":28,\"Neptune\":16}\nbar(list(moons.keys()), list(moons.values()))\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "This charts the full weather week — a value changing across ordered days. Which is right, `bar` or `plot`? Predict, then run to see the line.",
      starter: "weather = [72, 75, 68, 80, 77, 71, 74]\ndays = [1, 2, 3, 4, 5, 6, 7]\nplot(days, weather)\n",
      check: { type: "calls", calls: [{ fn: "plot" }] },
      hints: [
        "Temperature moves over ordered days.",
        "That's a line.",
        "`plot` is right.",
      ],
      solution: "weather = [72, 75, 68, 80, 77, 71, 74]\ndays = [1, 2, 3, 4, 5, 6, 7]\nplot(days, weather)\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "This bar-charts only three planets. Use the full solar system — all eight planets and their moon counts from `MOONS` — so it isn't three lonely bars.",
      starter: "bar([\"Earth\",\"Mars\",\"Jupiter\"], [1, 2, 95])\n",
      check: { type: "calls", calls: [{ fn: "bar" }] },
      hints: [
        "Use the whole dictionary.",
        "`list(moons.keys())` and `list(moons.values())`.",
        "Eight bars.",
      ],
      solution: "moons = {\"Mercury\":0,\"Venus\":0,\"Earth\":1,\"Mars\":2,\"Jupiter\":95,\"Saturn\":146,\"Uranus\":28,\"Neptune\":16}\nbar(list(moons.keys()), list(moons.values()))\n",
    },
    {
      type: "text",
      md: "`import random` opens Python's random toolbox. `random.randint(1, 6)` gives a whole number from 1 to 6, including both ends. Roll many times, collect the results, and a chart shows the distribution.",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete this so it dotplots every song's BPM against its plays — twelve points, one per song.",
      starter: "bpm   = [103, 171, 174, 135, 95, 96, 115, 110, 98, 90, 170, 81]\nplays = [2100, 4300, 3100, 2600, 1900, 3600, 2400, 2800, 2500, 2200, 2000, 1800]\n# dotplot bpm against plays\n",
      check: { type: "calls", calls: [{ fn: "dotplot" }] },
      hints: [
        "Two paired measurements per song.",
        "That's a dotplot.",
        "dotplot(bpm, plays)",
      ],
      solution: "bpm   = [103, 171, 174, 135, 95, 96, 115, 110, 98, 90, 170, 81]\nplays = [2100, 4300, 3100, 2600, 1900, 3600, 2400, 2800, 2500, 2200, 2000, 1800]\ndotplot(bpm, plays)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: bar-chart the play counts of the whole 12-song playlist. You're given `TITLES` and `PLAYS`. Then print the total plays across all twelve.",
      starter: "",
      check: { type: "output", expected: "31300" },
      hints: [
        "`bar(titles, plays)` for all twelve.",
        "`sum(plays)` for the total.",
        "31300.",
      ],
      solution: "titles = [\"Levitating\",\"Blinding Lights\",\"As It Was\",\"Bad Guy\",\"Watermelon Sugar\",\"Shape of You\",\"Uptown Funk\",\"Someone You Loved\",\"Dance Monkey\",\"Sunflower\",\"Stay\",\"Heat Waves\"]\nplays  = [2100, 4300, 3100, 2600, 1900, 3600, 2400, 2800, 2500, 2200, 2000, 1800]\nbar(titles, plays)\nprint(sum(plays))\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: `import random`, then `random.seed(0)` so your result is reproducible. Roll a six-sided die 30 times into a list (`random.randint(1, 6)`), and print how many rolls were sixes. With seed 0 you'll get 3.",
      starter: "",
      check: { type: "output", expected: "3" },
      hints: [
        "`random.seed(0)` first, then roll in a loop.",
        "`random.randint(1, 6)` per roll; count the 6s.",
        "Print the count — it's 3 with this seed.",
      ],
      solution: "import random\nrandom.seed(0)\nrolls = []\nfor _ in range(30):\n    rolls.append(random.randint(1, 6))\nsixes = 0\nfor r in rolls:\n    if r == 6:\n        sixes += 1\nprint(sixes)\n",
    },
  ],
  codex: {
    topic: "data into charts",
    pattern: "bar(labels, values)   # categories\nplot(xs, ys)          # a line over order\ndotplot(xs, ys)       # paired points",
    note: "Pick the chart by the data's shape: bar for categories, plot for a value over an ordered sequence, dotplot for two paired measurements. Chart the whole dataset. import random gives randint(a, b).",
  },
});

/* ── Lesson 4.9 — Lists as music ─────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c4s9",
  chapter: 4,
  strand: "sound",
  lang: "py",
  timeBudgetMin: 13,
  title: "Lists as music",
  content: [
    {
      type: "text",
      md: "A melody is just a list of MIDI numbers. Because it's a list, everything you know about lists works on music. Loop it to play it. Add 12 to every note to raise it an octave. Slice it to reverse it. And you can **see** it: `piano_roll(notes, starts, durations)` draws each note as a block — pitch up the page, time across it.",
    },
    {
      type: "example",
      note: "Loop a melody and play each note.",
      code: "melody = [60, 62, 64, 65, 67]   # C D E F G\nfor note in melody:\n    play(note)\n    sleep(0.5)\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "This transposes a melody up an octave (`+12` per the reference chart). Predict the printed list.",
      starter: "melody = [60, 62, 64]\nhigher = []\nfor note in melody:\n    higher.append(note + 12)\nprint(higher)\n",
      check: { type: "output", expected: "[72, 74, 76]" },
      hints: [
        "Add 12 to each note.",
        "60→72, 62→74, 64→76.",
        "[72, 74, 76]",
      ],
      solution: "melody = [60, 62, 64]\nhigher = []\nfor note in melody:\n    higher.append(note + 12)\nprint(higher)\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "This plays the melody forward. Change one thing so it plays *backward* (use a slice).",
      starter: "melody = [60, 62, 64, 65, 67]\nfor note in melody:\n    play(note)\n    sleep(0.5)\n",
      check: {
        type: "calls",
        calls: [
          { fn: "play", note: 67 },
          { fn: "play", note: 65 },
          { fn: "play", note: 64 },
          { fn: "play", note: 62 },
          { fn: "play", note: 60 },
        ],
      },
      hints: [
        "A slice can reverse a list.",
        "`melody[::-1]`.",
        "Loop over that.",
      ],
      solution: "melody = [60, 62, 64, 65, 67]\nfor note in melody[::-1]:\n    play(note)\n    sleep(0.5)\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete `transpose(melody, steps)` so it returns a new melody with every note shifted by `steps` semitones.",
      starter: "def transpose(melody, steps):\n    result = []\n    # append each note + steps\n    return result\n\nprint(transpose([60, 64, 67], 5))\n",
      check: { type: "output", expected: "[65, 69, 72]" },
      hints: [
        "Append `note + steps` for each.",
        "60+5, 64+5, 67+5.",
        "[65, 69, 72]",
      ],
      solution: "def transpose(melody, steps):\n    result = []\n    for note in melody:\n        result.append(note + steps)\n    return result\n\nprint(transpose([60, 64, 67], 5))\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: build the Twinkle opening `[60, 60, 67, 67, 69, 69, 67]`, play it with half-beat gaps, then draw it as a piano roll. (Make `starts` with `list(range(len(melody)))` and `durations` as `[1] * len(melody)`, then call `piano_roll(melody, starts, durations)`.)",
      starter: "",
      check: {
        type: "calls",
        calls: [
          { fn: "play", note: 60 },
          { fn: "play", note: 60 },
          { fn: "play", note: 67 },
          { fn: "play", note: 67 },
          { fn: "play", note: 69 },
          { fn: "play", note: 69 },
          { fn: "play", note: 67 },
          { fn: "piano_roll" },
        ],
      },
      hints: [
        "Loop to play, sleep 0.5 between.",
        "`starts` counts 0,1,2,…; `durations` all 1.",
        "Then `piano_roll(...)`.",
      ],
      solution: "melody = [60, 60, 67, 67, 69, 69, 67]\nfor note in melody:\n    play(note)\n    sleep(0.5)\nstarts = list(range(len(melody)))\ndurations = [1] * len(melody)\npiano_roll(melody, starts, durations)\n",
    },
  ],
  codex: {
    topic: "lists as music",
    pattern: "for note in melody: play(note)\nhigher = [n + 12 for feel]  # up an octave\npiano_roll(notes, starts, durations)",
    note: "A melody is a list of MIDI numbers, so list tools transform music: loop to play, + a number to transpose, [::-1] to reverse. piano_roll draws it — pitch up, time across.",
  },
});

/* ── Lesson 4.10 — Finale: The Playlist Studio (cumulative) ──────────── */

window.CODELAB.lessons.push({
  id: "c4s10",
  chapter: 4,
  strand: "data",
  lang: "py",
  timeBudgetMin: 18,
  title: "Finale: The Playlist Studio",
  content: [
    {
      type: "text",
      md: "No new syntax — this is where it comes together. Chapter 3's functions, Chapter 2's loops, and this chapter's lists and dicts, on the real playlist. Read the worked example, then build three of your own.",
    },
    {
      type: "example",
      note: "Three chapters in one screen: a function, a loop-with-if filter, and lists.",
      code: "titles = [\"Levitating\",\"Blinding Lights\",\"As It Was\",\"Bad Guy\",\"Watermelon Sugar\",\"Shape of You\",\"Uptown Funk\",\"Someone You Loved\",\"Dance Monkey\",\"Sunflower\",\"Stay\",\"Heat Waves\"]\nbpm    = [103, 171, 174, 135, 95, 96, 115, 110, 98, 90, 170, 81]\n\ndef workout(titles, bpm):\n    fast = []\n    for i in range(len(titles)):\n        if bpm[i] >= 120:\n            fast.append(titles[i])\n    return fast\n\nprint(\"Workout playlist:\", workout(titles, bpm))\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete `average_bpm(values)` and use it to print the whole playlist's average BPM rounded to one decimal.",
      starter: "bpm = [103, 171, 174, 135, 95, 96, 115, 110, 98, 90, 170, 81]\ndef average_bpm(values):\n    # return the average rounded to 1 decimal\n    pass\n\nprint(average_bpm(bpm))\n",
      check: { type: "output", expected: "119.8" },
      hints: [
        "`sum / len`, then `round(..., 1)`.",
        "The BPMs sum to 1438.",
        "119.8.",
      ],
      solution: "bpm = [103, 171, 174, 135, 95, 96, 115, 110, 98, 90, 170, 81]\ndef average_bpm(values):\n    return round(sum(values) / len(values), 1)\n\nprint(average_bpm(bpm))\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: given `PLAYS` for the 12 songs, write `report(plays)` that prints the total, the average per song (rounded), and the biggest single count. Then call it. (`sum`, `round(sum/len)`, `max`.)",
      starter: "",
      check: { type: "output", expected: "Total: 31300\nAverage: 2608\nMost: 4300" },
      hints: [
        "One function, three prints.",
        "`sum`, `round(sum/len)`, `max`.",
        "Total 31300, average 2608, most 4300.",
      ],
      solution: "plays = [2100, 4300, 3100, 2600, 1900, 3600, 2400, 2800, 2500, 2200, 2000, 1800]\ndef report(p):\n    print(\"Total:\", sum(p))\n    print(\"Average:\", round(sum(p) / len(p)))\n    print(\"Most:\", max(p))\nreport(plays)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: given `TITLES`, `BPM`, `PLAYS`, build a list of the songs at 120+ BPM and the matching plays, print how many made it, then bar-chart those songs against their plays.",
      starter: "",
      check: { type: "output", expected: "4" },
      hints: [
        "Loop with an index so you can read all three lists.",
        "`if bpm[i] >= 120` collects the title and its plays.",
        "Print the count, then `bar(fast_titles, fast_plays)`.",
      ],
      solution: "titles = [\"Levitating\",\"Blinding Lights\",\"As It Was\",\"Bad Guy\",\"Watermelon Sugar\",\"Shape of You\",\"Uptown Funk\",\"Someone You Loved\",\"Dance Monkey\",\"Sunflower\",\"Stay\",\"Heat Waves\"]\nbpm    = [103, 171, 174, 135, 95, 96, 115, 110, 98, 90, 170, 81]\nplays  = [2100, 4300, 3100, 2600, 1900, 3600, 2400, 2800, 2500, 2200, 2000, 1800]\nfast_titles = []\nfast_plays = []\nfor i in range(len(titles)):\n    if bpm[i] >= 120:\n        fast_titles.append(titles[i])\n        fast_plays.append(plays[i])\nprint(len(fast_titles))\nbar(fast_titles, fast_plays)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch — the capstone. Build the Twinkle melody `[60,60,67,67,69,69,67,65,65,64,64,62,62,60]`, play it with half-beat gaps, transpose it up a fifth (add 7 to every note) into a second list, and draw the **original** as a piano roll. (`starts` = `list(range(len(melody)))`, `durations` = `[1] * len(melody)`.) This is the thing you set out to make: music you can hear and see.",
      starter: "",
      check: {
        type: "calls",
        calls: [
          { fn: "play", note: 60 }, { fn: "play", note: 60 }, { fn: "play", note: 67 }, { fn: "play", note: 67 },
          { fn: "play", note: 69 }, { fn: "play", note: 69 }, { fn: "play", note: 67 }, { fn: "play", note: 65 },
          { fn: "play", note: 65 }, { fn: "play", note: 64 }, { fn: "play", note: 64 }, { fn: "play", note: 62 },
          { fn: "play", note: 62 }, { fn: "play", note: 60 },
          { fn: "piano_roll" },
        ],
      },
      hints: [
        "Play the melody in a loop first.",
        "Transpose into a new list with `note + 7`.",
        "Draw the original with `piano_roll`.",
      ],
      solution: "melody = [60,60,67,67,69,69,67,65,65,64,64,62,62,60]\nfor note in melody:\n    play(note)\n    sleep(0.5)\nhigher = []\nfor note in melody:\n    higher.append(note + 7)\nstarts = list(range(len(melody)))\ndurations = [1] * len(melody)\npiano_roll(melody, starts, durations)\n",
    },
  ],
  codex: {
    topic: "playlist studio",
    pattern: "def report(p): print(sum(p), max(p))\nfast = [t for bpm>=120]   # filter\nbar(labels, values); piano_roll(...)",
    note: "Everything together: functions (Ch3), loops and if (Ch2), lists and dicts (Ch4). Filter real data, summarise it, chart it, and turn a melody into sound and a piano roll.",
  },
});
