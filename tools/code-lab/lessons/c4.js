/* Chapter 4 — Collections
   Lessons: c4s1 Lists · c4s2 Indexing & Slicing · c4s3 Looping over Lists
            c4s4 Tuples & Sets · c4s5 Dictionaries · c4s6 Nesting
            c4s7 Data into Charts · c4s8 Lists as Music */

/* ── Lesson 4.1 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c4s1",
  chapter: 4,
  strand: "data",
  lang: "py",
  timeBudgetMin: 18,
  title: "Lists: One Name for Many Values",
  glossary: {
    list: "A single value that holds many values in order, written with square brackets and commas between items.",
    element: "One item stored inside a list — the list can hold as many elements as you need.",
    index: "A number that identifies an element's position in a list, counting from zero at the left end.",
    append: "A list method that adds one new element to the end of an existing list, changing it in place.",
    len: "A built-in function that tells you how many elements are currently in a list.",
  },
  content: [
    {
      type: "text",
      md: "**Five scores, five variables — and a problem.** Suppose you are tracking quiz scores for your class. You could write `score1 = 88`, `score2 = 72`, `score3 = 95`, `score4 = 61`, `score5 = 84`. That is five separate names for five separate values. Now imagine 50 scores. You would need 50 variable names, 50 assignment lines, and every time you wanted to do something with all of them — print them, add them up, find the highest — you would have to write each name out by hand. This is the **failure mode of separate variables**: the code grows with the data, and that is a losing battle.",
    },
    {
      type: "text",
      md: "**The list is the cure.** A [[list]] gives you one name for as many values as you need. You write the values between square brackets, separated by commas: `scores = [88, 72, 95, 61, 84]`. Now `scores` is a single object that holds all five numbers in order. The CS principle here is sometimes called **one name for many values** — you describe a collection, not each member separately. When you have 50 scores, the list still has one name and the code stays the same length.",
    },
    {
      type: "example",
      note: "A list is one object. len() counts its elements.",
      code: "scores = [88, 72, 95]\nprint(scores)\nprint(len(scores))",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Read this code and predict what it prints — then run it to check. The list holds BPM (beats per minute) for four tracks.",
      starter: "bpm = [80, 120, 140, 96]\nprint(bpm[0])\nprint(bpm[-1])\nprint(len(bpm))",
      check: { type: "output", expected: "80\n96\n4" },
      hints: [
        "Index 0 is the first item — the leftmost.",
        "Index -1 is always the last item, counting from the right.",
        "len() returns how many items are in the list.",
      ],
      solution: "bpm = [80, 120, 140, 96]\nprint(bpm[0])\nprint(bpm[-1])\nprint(len(bpm))",
    },
    {
      type: "text",
      md: "**Mental model: a row of labelled slots.** Picture a list as a strip of sticky notes lined up in a row. Each sticky note holds one value. The strip itself has one name — `scores`. When you print the whole list, Python prints all the sticky notes together, with square brackets around them. `len(scores)` counts how many sticky notes are on the strip. Adding a new value means sticking one more note on the right end.",
    },
    {
      type: "text",
      md: "**Growing a list with [[append]].** Lists are not fixed in size. You can add a new [[element]] to the end at any time with the `.append()` method. This changes the list **in place** — no new list is created, the original strip of sticky notes just gets one more note glued on. This is called the **mutation pattern**: the object itself changes, rather than producing a new object. A crucial detail: `append` returns `None`, not the updated list. If you write `friends = friends.append('Dana')` you will silently replace your list with `None` and lose everything.",
    },
    {
      type: "example",
      note: "append() changes the list in place. The anti-pattern loses the list.",
      code: "friends = [\"Ana\", \"Ben\", \"Cal\"]\nfriends.append(\"Dana\")\nprint(friends)\nprint(len(friends))\n\n# Anti-pattern — do NOT do this:\n# friends = friends.append(\"Eve\")  # friends becomes None!",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This code should build a playlist with three songs and print 3, but it always prints a TypeError instead. Find and fix the bug — change the minimum number of lines.",
      starter: "playlist = []\nplaylist = playlist.append(\"Blinding Lights\")\nplaylist = playlist.append(\"Shape of You\")\nplaylist = playlist.append(\"Dance Monkey\")\nprint(len(playlist))",
      check: { type: "output", expected: "3" },
      hints: [
        "What does append() return? Check the example above — it says 'returns None'.",
        "Assigning the return value of append() back to playlist replaces the list with None.",
        "Remove the `playlist =` part from each append line so the list grows in place.",
      ],
      solution: "playlist = []\nplaylist.append(\"Blinding Lights\")\nplaylist.append(\"Shape of You\")\nplaylist.append(\"Dance Monkey\")\nprint(len(playlist))",
    },
    {
      type: "text",
      md: "**What about `lst + [item]`?** You can combine two lists with `+`, like `friends + [\"Eve\"]`. This works, but it creates a brand-new list and leaves the original untouched. If you do not capture the result (`friends = friends + [\"Eve\"]`) nothing changes. `append` is usually what you want when growing a list one item at a time — it is faster and more direct. Use `+` when you need to build a new list without touching the old one.",
    },
    {
      type: "example",
      note: "Accumulate in a loop — the first five square numbers.",
      code: "squares = []\nfor n in range(1, 6):\n    squares.append(n * n)\nprint(squares)",
    },
    {
      type: "exercise",
      rung: 2,
      prompt: "Arrange these lines to build a list of the top three chart artists in order and print the first one.",
      starter: "",
      check: {
        type: "parsons",
        lines: [
          "top_3 = []",
          "top_3.append(\"Billie Eilish\")",
          "top_3.append(\"Taylor Swift\")",
          "top_3.append(\"Drake\")",
          "print(top_3[0])",
        ],
        distractors: ["print(top_3[1])", "top_3 = [\"Billie Eilish\"]"],
      },
      hints: [
        "Create the empty list before you append anything to it.",
        "append() adds items to the end one at a time.",
        "top_3[0] accesses the first item — the one you appended first.",
      ],
      solution: "top_3 = []\ntop_3.append(\"Billie Eilish\")\ntop_3.append(\"Taylor Swift\")\ntop_3.append(\"Drake\")\nprint(top_3[0])",
    },
    {
      type: "text",
      md: "**The accumulator pattern.** Starting with an empty list and building it up inside a loop is one of the most common patterns in all of programming. It has a name: the **accumulator pattern**. You create an empty container, loop over your data, and keep appending results. The `for` loop you learned in Chapter 2 works perfectly here — `range(1, 6)` gives you the numbers 1 through 5, and inside the loop you compute each square and append it. By the end, `squares` holds all five results.",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "You have a small grocery list. Add two more items using `append`, then print the updated list.",
      starter: "inventory = [\"apple\", \"bread\", \"milk\"]\n# Add \"eggs\" and \"cheese\" with append\n\nprint(inventory)",
      check: { type: "output", expected: "['apple', 'bread', 'milk', 'eggs', 'cheese']" },
      hints: [
        "Call inventory.append(...) once for each new item.",
        "append takes exactly one argument — the value to add.",
        "Do not assign the result of append back to inventory — that would set it to None.",
      ],
      solution: "inventory = [\"apple\", \"bread\", \"milk\"]\ninventory.append(\"eggs\")\ninventory.append(\"cheese\")\nprint(inventory)",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete `make_evens(n)` so it returns a list of even numbers from 2 up to and including `n`. The function header and an empty result list are already given — fill in the loop and the return.",
      starter: "def make_evens(n):\n    result = []\n    # loop from 2 to n, step 2\n    # append each even number\n    pass\n\nprint(make_evens(8))",
      check: { type: "output", expected: "[2, 4, 6, 8]" },
      hints: [
        "range(start, stop, step) lets you count by twos: range(2, n+1, 2).",
        "Inside the loop, append each number to result.",
        "After the loop, return result — not inside the loop.",
        "Remove the pass line once you have written the real code.",
      ],
      solution: "def make_evens(n):\n    result = []\n    for i in range(2, n + 1, 2):\n        result.append(i)\n    return result\n\nprint(make_evens(8))",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write a program from scratch. Ask the user for three quiz scores one at a time using `input()`. Store them in a list as integers. Then print the list and its length on separate lines.",
      starter: "",
      mockInput: ["88", "72", "95"],
      check: { type: "output", expected: "[88, 72, 95]\n3" },
      hints: [
        "Call input() three times and convert each result to int().",
        "You can build the list with append, or write all three values into a literal list.",
        "print(len(scores)) gives the count on its own line.",
        "Python prints a list with square brackets automatically — no formatting needed.",
      ],
      solution: "scores = []\nscores.append(int(input()))\nscores.append(int(input()))\nscores.append(int(input()))\nprint(scores)\nprint(len(scores))",
    },
  ],
  codex: {
    topic: "lists and append",
    pattern: "items = []\nitems.append(x)   # grows in place\nprint(len(items))  # count",
    note: "A list holds many values under one name. append() mutates the list in place and returns None — never assign its result back.",
  },
});

/* ── Lesson 4.2 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c4s2",
  chapter: 4,
  strand: "data",
  lang: "py",
  timeBudgetMin: 22,
  title: "Indexing and Slicing",
  glossary: {
    index: "A whole number that identifies one element's position, counting from zero at the left end and from -1 at the right end.",
    slice: "A way to extract a portion of a list or string by writing [start:stop], where stop is the first position not included.",
    mutate: "To change an object directly in place, without creating a new one — lists support mutation but strings do not.",
    IndexError: "The error Python raises when you use an index that does not exist in the list, such as position 10 in a five-item list.",
    ValueError: "The error Python raises when a value is not found by methods like .index() or .remove() that search by value rather than position.",
  },
  content: [
    {
      type: "text",
      md: "**Reaching inside a sequence.** A list gives you many values under one name. But sometimes you need just one of them — the first score, the last name, the middle item. Python lets you reach inside any sequence with an **[[index]]**: a number in square brackets that picks out one position. You already know strings from Chapter 1. Strings and lists use exactly the same indexing syntax, so we will look at both side by side.",
    },
    {
      type: "example",
      note: "Strings and lists share the same index rules.",
      code: "word = \"Python\"\nprint(word[0])    # P  — first character\nprint(word[-1])   # n  — last character\nprint(word[1:4])  # yth — stop is exclusive\n\ncolours = [\"red\", \"green\", \"blue\", \"yellow\"]\nprint(colours[0])    # red\nprint(colours[-1])   # yellow\nprint(colours[1:4])  # ['green', 'blue', 'yellow'] — stop is exclusive",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Predict what this code prints, then run it to check. The variable holds a song title.",
      starter: "song = \"Imagine\"\nprint(song[0])\nprint(song[-1])\nprint(len(song))",
      check: { type: "output", expected: "I\ne\n7" },
      hints: [
        "Index 0 is the very first character.",
        "Index -1 is the very last character.",
        "len() counts characters in a string, just like items in a list.",
      ],
      solution: "song = \"Imagine\"\nprint(song[0])\nprint(song[-1])\nprint(len(song))",
    },
    {
      type: "text",
      md: "**Zero-based counting — and why.** The first element is at index 0, not 1. This surprises almost everyone at first. The reason is that an index measures how far an element is from the start: the first item is zero steps away, the second is one step away, and so on. Most programming languages, including JavaScript and C, count this way. Negative indexes count from the right: `-1` is the last element, `-2` is second-to-last. Crucially, `-1` is never an error — it is a perfectly valid shortcut for `len(lst) - 1`.",
    },
    {
      type: "text",
      md: "**Stop is exclusive — the off-by-one trap.** When you write `word[1:4]` you get characters at positions 1, 2, and 3 — position 4 is **not included**. This trips up beginners constantly and is considered one of the most common bugs in all of programming. The rule sounds odd until you notice that it matches `range`: `range(1, 4)` gives 1, 2, 3 — the same three numbers, the stop never included. Python chose this rule for consistency: slicing and range both work the same way, so once you know one you know the other. A useful check: `lst[a:b]` always gives exactly `b - a` elements when a and b are non-negative.",
    },
    {
      type: "text",
      md: "**Strings are immutable; lists are not.** Both types support reading by index, but only lists let you **[[mutate]]** — change a value in place by assigning to an index. If you try `word[0] = 'X'` on a string, Python raises a `TypeError` immediately. Strings are fixed text objects; Python stores them efficiently because it knows they will never change. Lists are designed to change, so `colours[0] = 'pink'` works fine and updates the first slot without creating a new list.",
    },
    {
      type: "example",
      note: "Mutation on a list works; the same syntax on a string raises TypeError.",
      code: "colours = [\"red\", \"green\", \"blue\", \"yellow\"]\ncolours[0] = \"pink\"   # mutation — list changes in place\nprint(colours)\n\nword = \"Python\"\n# word[0] = \"X\"  # TypeError: 'str' object does not support item assignment",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "The code below prints the first two albums. Change the slice so it prints the **last two** albums instead — change only the `[...]` part.",
      starter: "albums = [\"Abbey Road\", \"Thriller\", \"Kind of Blue\", \"Rumours\", \"Purple Rain\"]\nfirst_two = albums[0:2]\nprint(first_two)",
      check: { type: "output", expected: "['Rumours', 'Purple Rain']" },
      hints: [
        "There are 5 albums. The last two are at positions 3 and 4.",
        "albums[3:5] gives positions 3 and 4. Or use a negative start: albums[-2:].",
        "Omitting the stop in a slice means 'go to the end': albums[-2:] works.",
      ],
      solution: "albums = [\"Abbey Road\", \"Thriller\", \"Kind of Blue\", \"Rumours\", \"Purple Rain\"]\nfirst_two = albums[-2:]\nprint(first_two)",
    },
    {
      type: "text",
      md: "**IndexError — the most common list mistake.** Every list has a fixed number of elements at any moment. If you ask for `temps[10]` but `temps` only has five elements, Python raises an `[[IndexError]]`. The anti-pattern is assuming a list is longer than it is, usually from an off-by-one error: writing `lst[len(lst)]` instead of `lst[len(lst) - 1]`. The safe guard is to check before you reach in: `if 0 <= i < len(lst):` before using `lst[i]`. Alternatively, use the negative index `-1` to reach the last element without ever computing the length.",
    },
    {
      type: "example",
      note: "IndexError, how to guard against it, and list surgery methods.",
      code: "colours = [\"red\", \"green\", \"blue\", \"yellow\"]\n\n# Index methods\nprint(colours.index(\"green\"))  # 1 — raises ValueError if not found\nprint(colours.count(\"red\"))    # 1\n\ncolours.remove(\"blue\")         # removes by value — raises ValueError if absent\nprint(colours)\n\ncolours.extend([\"purple\", \"orange\"])  # add many at once\nprint(colours)\n\ncolours.insert(1, \"black\")     # insert at position 1\nprint(colours)",
    },
    {
      type: "text",
      md: "**[[ValueError]] from .index() and .remove().** Both methods search the list by value. If the value is not found, Python raises a `ValueError` — not an `IndexError`. These are different errors for a reason: `IndexError` means you used a position that does not exist; `ValueError` means you asked for a value that does not exist. Contrast with `pop(i)` and `del lst[i]`, which remove by position and raise `IndexError` if the position is out of range. Knowing which error to expect tells you exactly what went wrong.",
    },
    {
      type: "text",
      md: "**Slices return a new list.** When you write `colours[1:3]` you get a brand-new list containing copies of those two elements. The original list is untouched. This is different from index assignment, which mutates in place. A handy pattern: `lst[:]` (no start, no stop) copies the whole list. The function `middle(lst)` below shows a clean use of slicing to remove the first and last elements without touching the original.",
    },
    {
      type: "example",
      note: "middle() uses a slice to return everything except first and last.",
      code: "def middle(lst):\n    return lst[1:-1]\n\nprint(middle([10, 20, 30, 40, 50]))  # [20, 30, 40]",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Read the program below carefully. Predict what each print line will output, then run it to check.",
      starter: "temps = [21, 19, 23, 18, 25]\nprint(temps[0])\nprint(temps[-1])\nprint(temps[1:3])",
      check: { type: "output", expected: "21\n25\n[19, 23]" },
      hints: [
        "Index 0 is the very first item in the list.",
        "Index -1 is always the last item — count from the right.",
        "temps[1:3] gives positions 1 and 2. Position 3 is not included.",
      ],
      solution: "temps = [21, 19, 23, 18, 25]\nprint(temps[0])\nprint(temps[-1])\nprint(temps[1:3])",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This function is supposed to return only the first half of a list, but it returns the whole list instead. Find and fix the bug.",
      starter: "def first_half(lst):\n    return lst[0:len(lst)]\n\nprint(first_half([10, 20, 30, 40]))",
      check: { type: "output", expected: "[10, 20]" },
      hints: [
        "lst[0:len(lst)] goes all the way to the end. That is the whole list.",
        "You want to stop halfway. What is halfway through a four-item list?",
        "Integer division // gives you a whole number — len(lst) // 2 is the midpoint.",
        "Change the stop index to len(lst) // 2.",
      ],
      solution: "def first_half(lst):\n    return lst[0:len(lst) // 2]\n\nprint(first_half([10, 20, 30, 40]))",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete `clamp(lst, lo, hi)` so it returns a new list where every value below `lo` is replaced by `lo` and every value above `hi` is replaced by `hi`. Values already in range stay unchanged.",
      starter: "def clamp(lst, lo, hi):\n    result = []\n    for v in lst:\n        pass  # append the clamped version of v\n    return result\n\nprint(clamp([5, 10, 15, 20, 25], 8, 18))",
      check: { type: "output", expected: "[8, 10, 15, 18, 18]" },
      hints: [
        "For each value v, you need to decide: is it below lo, above hi, or in range?",
        "An if/elif/else with three branches handles all three cases.",
        "Alternatively, max(lo, min(hi, v)) clamps in one expression.",
        "Replace the pass line with result.append(...) using the clamped value.",
      ],
      solution: "def clamp(lst, lo, hi):\n    result = []\n    for v in lst:\n        if v < lo:\n            result.append(lo)\n        elif v > hi:\n            result.append(hi)\n        else:\n            result.append(v)\n    return result\n\nprint(clamp([5, 10, 15, 20, 25], 8, 18))",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write a function `last_two(lst)` that returns the last two items of any list. If the list has fewer than two items, return the whole list unchanged. Test it on `[\"Bohemian Rhapsody\", \"Stairway to Heaven\", \"Hotel California\", \"Imagine\"]`.",
      starter: "",
      check: { type: "output", expected: "['Hotel California', 'Imagine']" },
      hints: [
        "A slice with a negative start works on any list: lst[-2:] gives the last two items.",
        "Use len(lst) < 2 to handle the short-list case — return lst as-is.",
        "Call the function with the four-song list and print the result.",
      ],
      solution: "def last_two(lst):\n    if len(lst) < 2:\n        return lst\n    return lst[-2:]\n\nprint(last_two([\"Bohemian Rhapsody\", \"Stairway to Heaven\", \"Hotel California\", \"Imagine\"]))",
    },
  ],
  codex: {
    topic: "indexing and slicing",
    pattern: "lst[0]      # first element\nlst[-1]     # last element\nlst[1:3]    # positions 1 and 2 (stop excluded)\nlst[i] = x  # mutate in place",
    note: "Zero-based, stop-exclusive — same rule as range(). IndexError means the position does not exist; ValueError means the value was not found by .index() or .remove().",
  },
});

/* ── Lesson 4.3 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c4s3",
  chapter: 4,
  strand: "numbers",
  lang: "py",
  timeBudgetMin: 22,
  title: "Looping Over Lists",
  glossary: {
    enumerate: "A built-in function that wraps a list and yields each item paired with its position number, starting at zero.",
    accumulator: "A variable set to a starting value before a loop, updated inside every iteration, and read after the loop ends.",
    sorted: "A built-in function that returns a new sorted list from any iterable, leaving the original unchanged.",
  },
  content: [
    {
      type: "text",
      md: "**Lists become powerful when you loop over them.** A list on its own just holds values. A loop visits every value one by one so you can do something with each one. Together, lists and loops are the workhorse combination behind almost every real program.",
    },
    {
      type: "text",
      md: "**Subsection A: traversal and accumulation.** The next three examples cover the core loop patterns for lists. Work through them and complete the gate exercise before moving to Subsection B.",
    },
    {
      type: "text",
      md: "**Two ways to loop — and why one is better.** Python gives you two ways to visit every item in a list. The first uses `for item in lst`, which hands you each value directly. The second uses `for i in range(len(lst))`, which gives you an index number and then makes you write `lst[i]` every time you need the value. The index form is longer, harder to read, and — critically — easy to get wrong.",
    },
    {
      type: "example",
      note: "The clean way: for item in lst hands you each value directly.",
      code: "names = [\"Ada\", \"Grace\", \"Linus\"]\nfor name in names:\n    print(name)\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Predict what this loop prints — it combines looping from Chapter 2 with string indexing from Chapter 1. Trace it step by step before running.",
      starter: "tracks = [\"Imagine\", \"Bohemian Rhapsody\", \"Stairway\"]\nfor track in tracks:\n    print(track[0])",
      check: { type: "output", expected: "I\nB\nS" },
      hints: [
        "The loop visits each string in tracks one at a time.",
        "track[0] gives the first character of whatever string track currently holds.",
        "Three strings → three iterations → three lines of output.",
      ],
      solution: "tracks = [\"Imagine\", \"Bohemian Rhapsody\", \"Stairway\"]\nfor track in tracks:\n    print(track[0])",
    },
    {
      type: "example",
      note: "The index-based way — and its failure mode. Adding 1 to len() causes an IndexError on the last step.",
      code: "names = [\"Ada\", \"Grace\", \"Linus\"]\nfor i in range(len(names) + 1):  # BUG: one step too many\n    print(names[i])              # IndexError on the last iteration\n",
    },
    {
      type: "text",
      md: "**Why Python prefers `for item in lst`.** An `IndexError` is the classic failure mode of the index form: write `range(len(lst) + 1)` by mistake and Python crashes on the step after the last real item. The direct form cannot crash that way because Python stops automatically when it runs out of items. Python's design philosophy says code should be readable and safe by default, so `for item in lst` is the idiomatic choice. Use `range(len(lst))` only when you actually need the index number — for example to modify the original list in place. One warning: assigning to the loop variable (`name = \"Bob\"`) does **not** change the list. The loop variable is a local copy each iteration.",
    },
    {
      type: "text",
      md: "**The accumulator pattern — you have used it before.** In Chapter 2 you totalled values with a counter variable. That technique has a name: the **accumulator pattern**. It has exactly three steps: **initialise** a variable to a safe starting value before the loop; **update** it inside the loop each iteration; **read** it after the loop ends. Get the steps out of order and you get the wrong answer every time.",
    },
    {
      type: "example",
      note: "Accumulator pattern: total starts at 0, grows inside the loop, is read after.",
      code: "scores = [72, 88, 95, 60]\ntotal = 0          # step 1: initialise BEFORE the loop\nfor score in scores:\n    total += score  # step 2: update INSIDE the loop\nprint(total)       # step 3: read AFTER the loop — prints 315\n",
    },
    {
      type: "example",
      note: "Python's shortcut: sum() does the same thing in one line.",
      code: "scores = [72, 88, 95, 60]\nprint(sum(scores))  # 315\n",
    },
    {
      type: "exercise",
      rung: 2,
      prompt: "Arrange these lines to compute the total listening time for a playlist and print it.",
      starter: "",
      check: {
        type: "parsons",
        lines: [
          "durations = [3.5, 4.2, 2.8, 5.1, 3.9]",
          "total = 0",
          "for mins in durations:",
          "    total = total + mins",
          "print(round(total, 1))",
        ],
        distractors: ["    print(total)", "total = total + durations"],
      },
      hints: [
        "The accumulator must start at 0 before the loop.",
        "The update line goes inside the loop — it must be indented.",
        "Print after the loop ends, not inside it.",
      ],
      solution: "durations = [3.5, 4.2, 2.8, 5.1, 3.9]\ntotal = 0\nfor mins in durations:\n    total = total + mins\nprint(round(total, 1))",
    },
    {
      type: "text",
      md: "**Computing an average — and handling the empty-list crash.** An average is the total divided by the count: `sum(lst) / len(lst)`. If `lst` is empty, `len(lst)` is zero and Python raises a `ZeroDivisionError` — the same error you saw in Chapter 2. Always guard against it. After computing the average, format it to two decimal places with the `:.2f` format code inside an f-string, which you used in Chapter 1.",
    },
    {
      type: "example",
      note: "Average with empty-list guard and :.2f formatting.",
      code: "scores = [80, 70, 90, 60]\nif len(scores) == 0:\n    print(\"No scores.\")\nelse:\n    avg = sum(scores) / len(scores)\n    print(f\"Average: {avg:.2f}\")  # Average: 75.00\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "The loop below has a bug: it always adds 0 instead of the current temperature. Fix the one wrong line so that `print(total)` prints `112`.",
      starter: "temps = [18, 22, 15, 30, 27]\ntotal = 0\nfor temp in temps:\n    total += 0  # BUG: fix this line\nprint(total)\n",
      check: { type: "output", expected: "112" },
      hints: [
        "Look at what is being added on the `total +=` line.",
        "The accumulator pattern says: update using the loop variable, not a fixed number.",
        "The loop variable is called `temp`. That is what you should add each time.",
      ],
      solution: "temps = [18, 22, 15, 30, 27]\ntotal = 0\nfor temp in temps:\n    total += temp\nprint(total)\n",
    },
    {
      type: "text",
      md: "**Gate exercise — complete `average()` before moving on.** The next section builds on the average function. Finish this exercise before scrolling down.",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete the `average` function. It must return `0` when the list is empty and the correct float average otherwise. The `if` guard is already in place.",
      starter: "def average(lst):\n    if len(lst) == 0:\n        return 0\n    pass  # compute and return the average\n\nprint(average([80, 70, 90, 60]))\n",
      check: { type: "output", expected: "75.0" },
      hints: [
        "You need two things: the total and the count. Python has a built-in for each.",
        "`sum(lst)` gives you the total; `len(lst)` gives you the count.",
        "Divide them and return the result. No formatting needed — just return the number.",
      ],
      solution: "def average(lst):\n    if len(lst) == 0:\n        return 0\n    return sum(lst) / len(lst)\n\nprint(average([80, 70, 90, 60]))\n",
    },
    {
      type: "text",
      md: "**Subsection B: enumerate and sorted.** You can now loop over a list and add up values. Next, learn two more tools: `enumerate` gives you the index and the value on each step, and `sorted` returns a new sorted list while leaving the original as it was.",
    },
    {
      type: "text",
      md: "**`enumerate` — index and value at the same time.** Sometimes you need both the position of an item and its value. You could use `range(len(lst))` and then write `lst[i]`, but that brings back the IndexError risk. The better tool is `enumerate(lst)`, which hands you a pair `(index, item)` each iteration. Unpack the pair in the `for` line itself with `for i, item in enumerate(lst)`.",
    },
    {
      type: "example",
      note: "enumerate yields (index, value) pairs — no manual indexing needed.",
      code: "scores = [72, 88, 95, 60]\nfor i, score in enumerate(scores):\n    print(i, score)\n# 0 72\n# 1 88\n# 2 95\n# 3 60\n",
    },
    {
      type: "text",
      md: "**`sorted()` vs `.sort()` — create vs mutate.** Python gives you two ways to sort a list. `sorted(lst)` returns a **new** sorted list and leaves the original untouched. `lst.sort()` sorts the list **in place** and returns `None`. The rule is simple: **`sorted` creates; `.sort()` mutates.** The common trap is writing `result = lst.sort()` — you get `None` because `.sort()` does not return the sorted list. Also note: `sorted()` works on any iterable, not just lists.",
    },
    {
      type: "example",
      note: "sorted() leaves the original unchanged. .sort() mutates in place and returns None.",
      code: "scores = [72, 88, 95, 60]\nranked = sorted(scores)   # new list — scores is unchanged\nprint(ranked)             # [60, 72, 88, 95]\nprint(scores)             # [72, 88, 95, 60] — still original order\n\nscores.sort()             # mutates scores in place\nprint(scores)             # [60, 72, 88, 95]\n\n# Common trap:\nbad = scores.sort()       # .sort() returns None!\nprint(bad)                # None — this is almost never what you want\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "The code below prints album lengths from shortest to longest. Change it to print from **longest to shortest** — one small change.",
      starter: "lengths = [47, 52, 43, 38, 61]  # album lengths in minutes\nranked = sorted(lengths)\nprint(ranked)",
      check: { type: "output", expected: "[61, 52, 47, 43, 38]" },
      hints: [
        "sorted() accepts a keyword argument that reverses the order.",
        "Try sorted(lengths, reverse=True).",
      ],
      solution: "lengths = [47, 52, 43, 38, 61]\nranked = sorted(lengths, reverse=True)\nprint(ranked)",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write a complete grade-average program. Read five scores from `input()`, store them in a list, compute the average, and print `Average: X.XX` and a grade letter on the next line. Grade rules: A if average >= 90, B if >= 80, C if >= 70, D if >= 60, otherwise F.",
      starter: "",
      mockInput: ["85", "90", "78", "92", "88"],
      check: { type: "output", expected: "Average: 86.60\nGrade: B" },
      hints: [
        "Read each score with `input()` and convert to a number with `int()`. Append each to a list.",
        "Use `sum(lst) / len(lst)` for the average and `f'{avg:.2f}'` for two decimal places.",
        "Use an `if / elif / else` chain for the letter grade — check from highest to lowest.",
        "Print the two lines in order: average first, then grade.",
      ],
      solution: "scores = []\nfor _ in range(5):\n    scores.append(int(input()))\navg = sum(scores) / len(scores)\nif avg >= 90:\n    grade = \"A\"\nelif avg >= 80:\n    grade = \"B\"\nelif avg >= 70:\n    grade = \"C\"\nelif avg >= 60:\n    grade = \"D\"\nelse:\n    grade = \"F\"\nprint(f\"Average: {avg:.2f}\")\nprint(f\"Grade: {grade}\")\n",
    },
  ],
  codex: {
    topic: "looping over lists",
    pattern: "for item in lst:\n    total += item\navg = sum(lst) / len(lst)\nranked = sorted(lst)  # new list\nlst.sort()            # mutates in place",
    note: "Use `for item in lst` not `range(len)` — it is safer and cleaner. The accumulator pattern: initialise before, update inside, read after. `sorted` creates a new list; `.sort()` mutates and returns None.",
  },
});

/* ── Lesson 4.4 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c4s4",
  chapter: 4,
  strand: "data",
  lang: "py",
  timeBudgetMin: 20,
  title: "Tuples and Sets",
  glossary: {
    tuple: "An ordered, immutable sequence written with parentheses. Its values cannot be changed after creation, which lets Python use it as a dictionary key.",
    set: "An unordered collection that stores each value only once. Sets are fast at checking membership and support union, intersection, and difference operations.",
    immutable: "Cannot be changed after creation. Strings and tuples are immutable; lists are not.",
    unpack: "Assigning the items of a tuple or list to individual variables in one line, such as a, b = (1, 2).",
  },
  content: [
    {
      type: "text",
      md: "**Right container for the job.** Python gives you four built-in collection types: lists, tuples, sets, and dictionaries. You already know lists. This lesson covers tuples and sets. Picking the right container is not just style — it prevents whole categories of bugs and unlocks Python features that only work with certain types.",
    },
    {
      type: "text",
      md: "**Tuples — ordered and frozen.** A [[tuple]] looks like a list but uses parentheses: `(3, 4)`. The key difference is that tuples are [[immutable]]: once you create one, its contents cannot change. Try to assign to a position and Python raises a `TypeError`. That sounds like a limitation, but it is actually a guarantee: if you pass a tuple to a function, you know for certain the function cannot accidentally modify it.",
    },
    {
      type: "example",
      note: "Tuples are immutable. Attempting to change a value raises TypeError.",
      code: "point = (3, 4)\nprint(point[0])   # 3 — reading is fine\n\npoint[0] = 99     # TypeError: tuple does not support item assignment\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Predict what this code prints. Tuple unpacking assigns each item to a named variable in one line.",
      starter: "title, plays = (\"Blinding Lights\", 3200)\nprint(title)\nprint(plays * 2)",
      check: { type: "output", expected: "Blinding Lights\n6400" },
      hints: [
        "Tuple unpacking assigns left-to-right: title gets the first item, plays gets the second.",
        "plays is 3200, and 3200 * 2 = 6400.",
      ],
      solution: "title, plays = (\"Blinding Lights\", 3200)\nprint(title)\nprint(plays * 2)",
    },
    {
      type: "example",
      note: "A list is mutable — the same assignment works fine.",
      code: "coords = [3, 4]\ncoords[0] = 99    # fine — lists are mutable\nprint(coords)     # [99, 4]\n",
    },
    {
      type: "text",
      md: "**Why tuples can be dictionary keys — and lists cannot.** Python uses a technique called **hashing** to find keys in a dictionary instantly. To hash something, Python needs a stable fingerprint: a number that will never change. A tuple's contents are frozen, so Python can compute a reliable fingerprint and use the tuple as a key. A list's contents can change at any moment, so Python cannot compute a stable fingerprint — which is why using a list as a dict key raises a `TypeError`. This is the deepest reason tuples exist: they give you an ordered, fixed record that can be indexed into a dictionary.",
    },
    {
      type: "example",
      note: "Tuples as dictionary keys — useful for grids, coordinates, and records.",
      code: "d = {(0, 0): \"origin\", (1, 0): \"right\", (0, 1): \"up\"}\nprint(d[(1, 0)])  # right\n\n# A list as key raises TypeError:\n# d[[0, 0]] = \"origin\"  # TypeError: unhashable type: list\n",
    },
    {
      type: "text",
      md: "**One-element tuples need a trailing comma.** This surprises almost everyone. `(5)` is just the number 5 in parentheses — Python reads it as arithmetic grouping. To make a one-element tuple you must write `(5,)` with a trailing comma. The comma is what makes it a tuple, not the parentheses.",
    },
    {
      type: "example",
      note: "The trailing comma is what makes a single-element tuple.",
      code: "not_a_tuple = (5)\nprint(type(not_a_tuple))   # <class 'int'>\n\nis_a_tuple = (5,)\nprint(type(is_a_tuple))    # <class 'tuple'>\n",
    },
    {
      type: "text",
      md: "**[[unpack|Tuple unpacking]] — assign multiple variables at once.** Python lets you unpack a tuple directly into named variables: `a, b = (10, 20)` sets `a = 10` and `b = 20` in one line. The count on the left must match the count on the right exactly — otherwise Python raises a `ValueError`. Unpacking is how Python achieves the clean variable-swap idiom.",
    },
    {
      type: "example",
      note: "Old-school swap uses a temp variable. The tuple swap is cleaner and Pythonic.",
      code: "# Old way — three lines, one extra variable\nx = 5\ny = 10\ntemp = x\nx = y\ny = temp\nprint(x, y)  # 10 5\n\n# Pythonic way — one line, no temp variable\nx = 5\ny = 10\nx, y = y, x   # Python packs the right side into a tuple, then unpacks it\nprint(x, y)  # 10 5\n",
    },
    {
      type: "text",
      md: "**Sets — unique, unordered, fast.** A [[set]] stores each value exactly once, in no guaranteed order. You create one with `set()` or curly braces with values: `{1, 2, 3}`. Sets have no index — you cannot write `my_set[0]`. What they are great at is membership testing (`5 in my_set` is very fast even with millions of items) and set operations: union `|`, intersection `&`, and difference `-`.",
    },
    {
      type: "text",
      md: "**`{}` creates a dict, not a set.** Python chose `{}` for empty dictionaries historically — dicts came first in the language. Sets were added later and had to use `set()` for the empty form. So `{}` is an empty dict; `set()` is an empty set. This trips up almost everyone at least once. With items inside, `{1, 2, 3}` is a set; `{'a': 1}` is a dict.",
    },
    {
      type: "example",
      note: "Set operators: union, intersection, difference. add() inserts one item.",
      code: "set_a = {1, 2, 3}\nset_b = {2, 3, 4}\n\nprint(set_a & set_b)  # {2, 3}      intersection: items in both\nprint(set_a | set_b)  # {1, 2, 3, 4} union: all items\nprint(set_a - set_b)  # {1}          difference: in A but not B\n\nset_a.add(5)\nprint(set_a)  # {1, 2, 3, 5}\n",
    },
    {
      type: "example",
      note: "Building a set from a list automatically removes duplicates.",
      code: "rolls = [3, 6, 3, 1, 6, 2]\nrolls_set = set(rolls)\nprint(rolls_set)        # {1, 2, 3, 6} — each value once, any order\nprint(5 in rolls_set)   # False\nprint(3 in rolls_set)   # True\n",
    },
    {
      type: "exercise",
      rung: 2,
      prompt: "Arrange these lines to find songs that appear in both playlists and print them in alphabetical order.",
      starter: "",
      check: {
        type: "parsons",
        lines: [
          "spotify = {\"Hey Jude\", \"Let It Be\", \"Come Together\"}",
          "apple = {\"Let It Be\", \"Yesterday\", \"Hey Jude\"}",
          "both = spotify & apple",
          "print(sorted(both))",
        ],
        distractors: ["both = spotify | apple", "print(both)"],
      },
      hints: [
        "You need both sets defined before you can intersect them.",
        "The `&` operator finds items in both sets.",
        "sorted() turns the set into a sorted list for a consistent output.",
      ],
      solution: "spotify = {\"Hey Jude\", \"Let It Be\", \"Come Together\"}\napple = {\"Let It Be\", \"Yesterday\", \"Hey Jude\"}\nboth = spotify & apple\nprint(sorted(both))",
    },
    {
      type: "text",
      md: "**Tuple unpacking inside a `for` loop.** When a list contains tuples, you can unpack each tuple directly in the `for` line: `for a, b in [(1, 'x'), (2, 'y')]:`. Python unpacks each pair as the loop runs. This pattern appears constantly in real code — and in the next lesson you will use it with `dict.items()` as `for k, v in d.items():`.",
    },
    {
      type: "example",
      note: "Unpacking tuples inside a for loop — bridge to dictionary iteration in 4.5.",
      code: "pairs = [(1, \"x\"), (2, \"y\"), (3, \"z\")]\nfor a, b in pairs:\n    print(a, b)\n# 1 x\n# 2 y\n# 3 z\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "Given `colours = ['red', 'blue', 'red', 'green', 'blue']`, write one line that builds a set from the list and then print how many unique colours there are. Expected output: `3`.",
      starter: "colours = ['red', 'blue', 'red', 'green', 'blue']\n# write your one line below\n",
      check: { type: "output", expected: "3" },
      hints: [
        "`set(colours)` removes the duplicates. Store it in a variable.",
        "`len()` counts how many items are in the set.",
        "Put them together: `print(len(set(colours)))`.",
      ],
      solution: "colours = ['red', 'blue', 'red', 'green', 'blue']\nprint(len(set(colours)))\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "The function below is supposed to return items that appear in both lists, with no duplicates. It uses a loop and a list instead of a set, so it produces duplicates. Fix it using set intersection, then return the result as a sorted list.",
      starter: "def shared_items(a, b):\n    result = []\n    for item in a:\n        if item in b:\n            result.append(item)  # adds duplicates if item appears twice\n    return result\n\nprint(shared_items(['apple', 'bread', 'milk'], ['milk', 'eggs', 'apple']))\n",
      check: { type: "output", expected: "['apple', 'milk']" },
      hints: [
        "Convert both lists to sets with `set(a)` and `set(b)`.",
        "Use `&` to find items in both: `set(a) & set(b)`.",
        "Wrap the result in `sorted()` to get a sorted list back.",
      ],
      solution: "def shared_items(a, b):\n    return sorted(set(a) & set(b))\n\nprint(shared_items(['apple', 'bread', 'milk'], ['milk', 'eggs', 'apple']))\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete `unique_count(lst)` so it returns the number of unique elements in the list. Use a set.",
      starter: "def unique_count(lst):\n    pass  # use a set\n\nprint(unique_count([1, 2, 2, 3, 3, 3]))\n",
      check: { type: "output", expected: "3" },
      hints: [
        "`set(lst)` removes all duplicates automatically.",
        "`len()` tells you how many items the set contains.",
        "Combine: `return len(set(lst))`.",
      ],
      solution: "def unique_count(lst):\n    return len(set(lst))\n\nprint(unique_count([1, 2, 2, 3, 3, 3]))\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write `shared_items(basket_a, basket_b)` from scratch. It should return a sorted list of items that appear in both baskets. Use set intersection and `sorted()`.",
      starter: "",
      check: { type: "output", expected: "['eggs', 'milk']" },
      hints: [
        "Convert each basket to a set, then use `&` to intersect them.",
        "`sorted()` turns the resulting set into a sorted list.",
        "Return that sorted list. Then call the function and print the result.",
      ],
      solution: "def shared_items(basket_a, basket_b):\n    return sorted(set(basket_a) & set(basket_b))\n\nprint(shared_items(['apple', 'bread', 'milk', 'eggs'], ['milk', 'eggs', 'butter']))\n",
    },
  ],
  codex: {
    topic: "tuples and sets",
    pattern: "point = (3, 4)          # tuple: ordered, immutable\na, b = point           # unpack\na, b = b, a            # swap\nunique = set(lst)      # deduplicate\ncommon = set_a & set_b # intersection",
    note: "Tuples are immutable so Python can hash them as dict keys; lists cannot be keys. `{}` is an empty dict — use `set()` for an empty set. `sorted` creates a new list; sets have no guaranteed order and cannot be indexed.",
  },
});

/* ── Lesson 4.5 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c4s5",
  chapter: 4,
  strand: "data",
  lang: "py",
  timeBudgetMin: 22,
  title: "Look It Up: Dictionaries",
  glossary: {
    dict: "A Python container that stores pairs of keys and values, letting you look up any value instantly by its key instead of by a position number.",
    key: "The label you use to store and retrieve a value in a dict — like a word in a real dictionary that leads you to its definition.",
    value: "The data stored in a dict that belongs to a particular key — the definition that goes with the word.",
    KeyError: "The crash Python raises when you try to access a key that does not exist in a dict, similar to looking up a word that is not in the dictionary.",
  },
  content: [
    {
      type: "text",
      md: "**Lists use numbers. Dicts use words.** You already know that `lst[2]` gives you the third item in a list. But what if you want to look up someone's phone number by their name? You would have to remember that Alice is at index 0, Bob at index 1, and so on. That gets painful fast. A [[dict]] solves this by letting you use any label you like — a string, a number, anything — as the [[key]]. You write `tel['Alice']` and Python fetches Alice's number directly, no counting required.",
    },
    {
      type: "text",
      md: "**Why Python chose this design.** The underlying structure is called a hash table. Python converts your key into a number (a hash) and uses it to find the slot where the [[value]] lives. Lookup is nearly instant no matter how big the dict is — whether it holds five entries or five million. A list lookup by index is also instant, but lookup by value is slow because Python has to scan every item. Dicts trade a bit of memory for the ability to label data meaningfully.",
    },
    {
      type: "example",
      note: "A phone-book dict. Curly braces, colon separates key from value, comma between pairs.",
      code: "tel = {'Alice': '555-1234', 'Bob': '555-5678'}\n\nprint(tel['Alice'])   # '555-1234'\n\ntel['Charlie'] = '555-9999'   # add a new entry\nprint(tel['Charlie'])         # '555-9999'\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Predict what this code prints. A dict stores stream counts, then adds a new entry.",
      starter: "plays = {'Billie Eilish': 45, 'Taylor Swift': 67}\nplays['Olivia Rodrigo'] = 38\nprint(plays['Taylor Swift'])\nprint(len(plays))",
      check: { type: "output", expected: "67\n3" },
      hints: [
        "plays['Taylor Swift'] looks up the value for that key.",
        "After adding 'Olivia Rodrigo' the dict has three entries.",
        "len() on a dict counts key-value pairs.",
      ],
      solution: "plays = {'Billie Eilish': 45, 'Taylor Swift': 67}\nplays['Olivia Rodrigo'] = 38\nprint(plays['Taylor Swift'])\nprint(len(plays))",
    },
    {
      type: "text",
      md: "**The [[KeyError]] crash.** What happens if you ask for a key that does not exist? Python raises a `KeyError` — the dict equivalent of \"word not found\". This is not a bug in Python; it is honest feedback. The anti-pattern is to assume the key is always there and let the program crash on real data.",
    },
    {
      type: "example",
      note: "KeyError in action, then the safe fix using .get().",
      code: "tel = {'Alice': '555-1234', 'Bob': '555-5678'}\n\n# This crashes:\n# print(tel['Diana'])  # KeyError: 'Diana'\n\n# Safe version with a default:\nprint(tel.get('Diana', 'Not found'))  # 'Not found'\nprint(tel.get('Alice', 'Not found'))  # '555-1234'\n",
    },
    {
      type: "text",
      md: "**EAFP vs the dict shortcut.** The proper Python way to handle missing data is EAFP — try the action and catch the error with `try/except KeyError`. But `.get(key, default)` is the dict-idiomatic shortcut that covers the common case in one line. Both approaches are correct. Use `.get()` when you just want a fallback value; use `try/except` when you need to do something different for each error type. The key mistake to avoid: catching a bare `except` that swallows every possible error and hides real bugs.",
    },
    {
      type: "text",
      md: "**Iterating: for k, v in d.items().** Python 3.7 and later guarantees that a dict remembers the order you inserted keys. So when you loop over a dict, entries come out in insertion order. The `.items()` method gives you each key-value pair as a tuple, and you can unpack it directly with `for name, number in tel.items()`. This is the clean, readable way to visit every entry. The anti-pattern is looping over `.keys()` and then doing `d[k]` inside the loop — that is two lookups where one is enough.",
    },
    {
      type: "example",
      note: "Iterate over every key-value pair with .items().",
      code: "tel = {'Alice': '555-1234', 'Bob': '555-5678', 'Charlie': '555-9999'}\n\nfor name, number in tel.items():\n    print(name, number)\n",
    },
    {
      type: "text",
      md: "**The frequency counter — a classic pattern.** One of the most useful dict patterns is counting how often something appears. Loop over a string (or list), and for each character use `counts[ch] = counts.get(ch, 0) + 1`. The `.get(ch, 0)` part handles the first time you see a character: it returns 0 instead of crashing with a `KeyError`, then you add 1 to get the count of 1. Without `.get()`, the first occurrence of any character crashes the program. This pattern is called a frequency map and appears everywhere in data analysis.",
    },
    {
      type: "example",
      note: "Letter-frequency counter. Without .get() the first new letter raises KeyError.",
      code: "word = 'banana'\ncounts = {}\n\nfor ch in word:\n    # Wrong (crashes on first new letter):\n    # counts[ch] = counts[ch] + 1\n\n    # Right — .get(ch, 0) returns 0 if ch not seen yet:\n    counts[ch] = counts.get(ch, 0) + 1\n\nprint(counts)   # {'b': 1, 'a': 3, 'n': 2}\n",
    },
    {
      type: "exercise",
      rung: 2,
      prompt: "Arrange these lines to count how many times each letter appears in \"mississippi\" and print the count for 's'.",
      starter: "",
      check: {
        type: "parsons",
        lines: [
          "text = \"mississippi\"",
          "counts = {}",
          "for ch in text:",
          "    counts[ch] = counts.get(ch, 0) + 1",
          "print(counts['s'])",
        ],
        distractors: ["    counts[ch] = counts[ch] + 1", "print(counts['m'])"],
      },
      hints: [
        "The empty dict must come before the loop.",
        "The update line goes inside the loop — it must be indented.",
        "Print after the loop, using the key 's' to look up its count.",
      ],
      solution: "text = \"mississippi\"\ncounts = {}\nfor ch in text:\n    counts[ch] = counts.get(ch, 0) + 1\nprint(counts['s'])",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This code should print the total stream count across all songs, but it crashes with a TypeError. Find and fix the one wrong line.",
      starter: "song_plays = {'Blinding Lights': 3200, 'Shape of You': 2800, 'Dance Monkey': 2500}\ntotal = 0\nfor song in song_plays:\n    total = total + song\nprint(total)",
      check: { type: "output", expected: "8500" },
      hints: [
        "When you write `for song in song_plays`, what does `song` hold on each step?",
        "`song` is the key — a string like 'Blinding Lights', not the number.",
        "You need the value: `song_plays[song]` gives you the integer play count.",
      ],
      solution: "song_plays = {'Blinding Lights': 3200, 'Shape of You': 2800, 'Dance Monkey': 2500}\ntotal = 0\nfor song in song_plays:\n    total = total + song_plays[song]\nprint(total)",
    },
    {
      type: "text",
      md: "**`in` checks keys, not values.** Writing `'Alice' in tel` returns `True` if `'Alice'` is a key. It does NOT search the values. If you want to check whether a phone number is stored anywhere, you need `'555-1234' in tel.values()`. Mixing these up is one of the most common dict bugs. Also remember: `del d[key]` removes a key and returns nothing, while `d.pop(key)` removes it and returns the value — use `pop` when you need the value back.",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "You have a small inventory dict. Add two new items, check if a key is in the dict, then print how many items it has. Fill in the three missing lines.",
      starter: "inventory = {'apples': 5, 'bread': 2}\n# add 'milk' with value 3\n\n# add 'eggs' with value 12\n\n# print True if 'milk' is in inventory\n\n# print the number of items in inventory\n",
      check: { type: "output", expected: "True\n4" },
      hints: [
        "To add a key: inventory['milk'] = 3",
        "The 'in' operator checks keys: 'milk' in inventory",
        "len() works on dicts the same way it works on lists.",
        "Make sure you print() both results — just computing them won't show output.",
      ],
      solution: "inventory = {'apples': 5, 'bread': 2}\ninventory['milk'] = 3\ninventory['eggs'] = 12\nprint('milk' in inventory)\nprint(len(inventory))\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete `item_total`. It receives a price dict and a shopping cart (a list of item names). It should return the total cost. Use `.get(item, 0)` so that items missing from the price list contribute 0 instead of crashing.",
      starter: "def item_total(prices, cart):\n    total = 0\n    for item in cart:\n        pass  # add the price for this item to total\n    return total\n\nprint(item_total({'apple': 1.5, 'bread': 2.0, 'milk': 1.2}, ['apple', 'bread', 'butter']))\n",
      check: { type: "output", expected: "3.5" },
      hints: [
        "Replace `pass` with a line that updates `total`.",
        "prices.get(item, 0) gives you the price, or 0 if the item is not listed.",
        "total += prices.get(item, 0) is the whole line you need.",
        "butter is not in prices, so .get returns 0 — that is correct, not a bug.",
      ],
      solution: "def item_total(prices, cart):\n    total = 0\n    for item in cart:\n        total += prices.get(item, 0)\n    return total\n\nprint(item_total({'apple': 1.5, 'bread': 2.0, 'milk': 1.2}, ['apple', 'bread', 'butter']))\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write a shopping-list manager from scratch. Use a `while True` loop with `input()`. Support four commands: `add item qty` stores the item with the given quantity; `get item` prints the quantity or `Not found`; `show` prints every item and quantity as `item: qty`; `quit` exits. When adding an item, print `Added: item`. Use the mock inputs provided to test your solution.",
      starter: "",
      mockInput: ["add milk 3", "add eggs 12", "get milk", "get butter", "show", "quit"],
      check: { type: "output", expected: "Added: milk\nAdded: eggs\n3\nNot found\nmilk: 3\neggs: 12" },
      hints: [
        "Start with: shop = {} then while True: cmd = input().split()",
        "cmd[0] is the command word. Use if/elif to check it.",
        "For 'add': shop[cmd[1]] = int(cmd[2]) then print('Added: ' + cmd[1])",
        "For 'get': use shop.get(cmd[1]) and check if the result is None before printing.",
      ],
      solution: "shop = {}\nwhile True:\n    cmd = input().split()\n    if cmd[0] == 'add':\n        shop[cmd[1]] = int(cmd[2])\n        print('Added: ' + cmd[1])\n    elif cmd[0] == 'get':\n        result = shop.get(cmd[1])\n        if result is None:\n            print('Not found')\n        else:\n            print(result)\n    elif cmd[0] == 'show':\n        for k, v in shop.items():\n            print(k + ': ' + str(v))\n    elif cmd[0] == 'quit':\n        break\n",
    },
  ],
  codex: {
    topic: "dict lookup and iteration",
    pattern: "d = {'a': 1}\nd['b'] = 2\nval = d.get('c', 0)\nfor k, v in d.items():\n    print(k, v)",
    note: "Dicts give instant lookup by label instead of by position. Use .get(key, default) to avoid KeyError on missing keys — the most common dict bug.",
  },
});

/* ── Lesson 4.6 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c4s6",
  chapter: 4,
  strand: "data",
  lang: "py",
  timeBudgetMin: 22,
  title: "Containers Inside Containers",
  glossary: {
    nesting: "Putting one container inside another, such as a list of lists or a dict whose values are lists, so you can organize data in rows and columns or groups.",
    aliasing: "When two variable names point at the same list in memory, so changing the list through one name also changes what you see through the other name.",
    reference: "The connection between a variable name and the actual list or dict it points to in memory — in Python, assignment copies the reference, not the data itself.",
  },
  content: [
    {
      type: "text",
      md: "**What if a list item IS a list?** You already know `lst[2]` gives you one item. Now imagine that item is itself a list. Then `lst[2]` gives you that inner list, and `lst[2][1]` picks the second item from it. This is not special syntax — it is just two separate `[]` operations chained together. The first bracket runs first and returns an inner list; the second bracket then indexes into that result. [[Nesting]] is what happens when you stack containers this way.",
    },
    {
      type: "text",
      md: "**Rows and columns with a list of lists.** A seating chart is a natural fit: three rows, each row a list of seat labels. The outer list holds rows; each inner list holds seats in that row. To get seat B3 you pick row 1 (B), then column 2 (third seat). This `grid[row][col]` pattern appears everywhere in games, spreadsheets, and image processing. Remember: it is always outer bracket first, inner bracket second.",
    },
    {
      type: "example",
      note: "A seating chart as a list of lists. Outer index picks the row, inner picks the seat.",
      code: "seats = [\n    ['A1', 'A2', 'A3'],\n    ['B1', 'B2', 'B3'],\n    ['C1', 'C2', 'C3'],\n]\n\nprint(seats[1][2])   # 'B3' — row 1, column 2\n",
    },
    {
      type: "exercise",
      rung: 2,
      prompt: "Arrange these lines to build a 3×3 score grid and print the value in the middle of the grid.",
      starter: "",
      check: {
        type: "parsons",
        lines: [
          "scores = [[10, 20, 30], [40, 50, 60], [70, 80, 90]]",
          "mid_row = len(scores) // 2",
          "mid_col = len(scores[0]) // 2",
          "print(scores[mid_row][mid_col])",
        ],
        distractors: ["print(scores[0][0])", "mid_row = len(scores) / 2"],
      },
      hints: [
        "The grid has 3 rows and 3 columns, so the middle row and column are both at index 1.",
        "Integer division of 3//2 = 1.",
        "scores[1][1] is the centre cell.",
      ],
      solution: "scores = [[10, 20, 30], [40, 50, 60], [70, 80, 90]]\nmid_row = len(scores) // 2\nmid_col = len(scores[0]) // 2\nprint(scores[mid_row][mid_col])",
    },
    {
      type: "text",
      md: "**Nested loops traverse nested data.** To visit every seat you need two `for` loops: one for the rows, one for the seats inside each row. The outer loop gives you a row (a list); the inner loop gives you each item in that row. This mirrors the structure of the data exactly. A common mistake is writing a single loop and wondering why you get lists instead of seat labels — one loop only unwraps one layer.",
    },
    {
      type: "example",
      note: "Nested for loops print every seat. The outer loop gives each row-list; the inner loop gives each seat string.",
      code: "seats = [\n    ['A1', 'A2', 'A3'],\n    ['B1', 'B2', 'B3'],\n    ['C1', 'C2', 'C3'],\n]\n\nfor row in seats:\n    for seat in row:\n        print(seat, end=' ')\n    print()   # newline after each row\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "The code below prints every seat in the grid. Change it so it prints only the **last seat in each row**, one per line (`A3`, `B3`, `C3`).",
      starter: "seats = [\n    ['A1', 'A2', 'A3'],\n    ['B1', 'B2', 'B3'],\n    ['C1', 'C2', 'C3'],\n]\nfor row in seats:\n    for seat in row:\n        print(seat)",
      check: { type: "output", expected: "A3\nB3\nC3" },
      hints: [
        "You do not need the inner loop at all — just access one item from each row.",
        "row[-1] gives you the last element of any list.",
        "Replace the inner for loop with a single print(row[-1]).",
      ],
      solution: "seats = [\n    ['A1', 'A2', 'A3'],\n    ['B1', 'B2', 'B3'],\n    ['C1', 'C2', 'C3'],\n]\nfor row in seats:\n    print(row[-1])",
    },
    {
      type: "text",
      md: "**[[Aliasing]]: the sneaky trap.** In Python, a variable holds a [[reference]] — an arrow pointing at the actual list in memory. When you write `inner = grid[0]`, Python does NOT copy the list. It makes a second arrow pointing at the same list. So if you change `inner[0]`, you also change `grid[0][0]` — they are the same object. Python chose reference semantics for efficiency: copying a large list on every assignment would be extremely slow. But it means you must be careful whenever you store a reference to an inner list and then modify it.",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Before you run this code, predict what it prints. Think about what `inner = grid[0]` actually does — does it copy the list or point at it?",
      starter: "grid = [[1, 2], [3, 4]]\ninner = grid[0]\ninner[0] = 99\nprint(grid)\n",
      check: { type: "output", expected: "[[99, 2], [3, 4]]" },
      hints: [
        "inner = grid[0] does NOT make a copy. Both names point at the same inner list.",
        "Changing inner[0] changes the very same list that grid[0] also points at.",
        "So grid[0][0] becomes 99, even though you wrote inner[0] = 99.",
      ],
      solution: "grid = [[1, 2], [3, 4]]\ninner = grid[0]\ninner[0] = 99\nprint(grid)\n",
    },
    {
      type: "text",
      md: "**Safe copy with `[:]`.** If you want a separate copy of an inner list so that changes do not affect the original, use the slice `[:]`. Writing `row_copy = grid[0][:]` creates a brand-new list with the same items. Now `row_copy` and `grid[0]` are independent. Changing `row_copy[0]` leaves `grid[0][0]` untouched. This is called a shallow copy — it copies one level deep. For a list of lists, the inner lists themselves are still shared, but at least the row you copied is safe. Note: strings cannot alias because they are immutable — Python never needs to copy them.",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Fill in the one missing line to make a safe copy of row 0. After filling it in, `row_copy[0] = 999` should NOT change `grid[0][0]`, so the final print should show `10`.",
      starter: "grid = [[10, 20], [30, 40]]\nrow_copy = pass  # make a safe copy of grid[0]\nrow_copy[0] = 999\nprint(grid[0][0])\n",
      check: { type: "output", expected: "10" },
      hints: [
        "You need to replace `pass` with an expression that creates a new list.",
        "The slice [:] on a list makes a shallow copy: grid[0][:]",
        "row_copy = grid[0][:] is the whole replacement for `pass`.",
        "If you just wrote row_copy = grid[0], the print would show 999, not 10.",
      ],
      solution: "grid = [[10, 20], [30, 40]]\nrow_copy = grid[0][:]\nrow_copy[0] = 999\nprint(grid[0][0])\n",
    },
    {
      type: "text",
      md: "**Dict of lists.** Nesting works with any combination of containers. A common pattern is a dict whose values are lists — for example, a score sheet where each student name maps to a list of scores. You access individual scores with `scores['Alice'][1]`: first `['Alice']` looks up the list, then `[1]` picks the second score. A missing dict key raises `KeyError`; a valid key but out-of-range index raises `IndexError`. Python's error message does not tell you which bracket failed, so isolate each access when debugging.",
    },
    {
      type: "example",
      note: "Dict of lists: two bracket operations, outer dict lookup then inner list index.",
      code: "scores = {'Alice': [88, 72, 95], 'Bob': [70, 85, 90]}\n\nprint(scores['Alice'][1])   # 72 — Alice's second score\n\nfor name, results in scores.items():\n    avg = sum(results) / len(results)\n    print(name, round(avg, 1))\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This `row_total` function has a bug: it calls `.pop()` on the row, which destroys the original grid. Fix it so that it returns the correct sum without modifying the grid at all.",
      starter: "def row_total(grid, row_index):\n    row = grid[row_index]\n    total = 0\n    while row:           # bug: pop() empties the real inner list\n        total += row.pop()\n    return total\n\nmy_grid = [[1, 2, 3], [4, 5, 6]]\nprint(row_total(my_grid, 1))\nprint(my_grid)   # should still be [[1, 2, 3], [4, 5, 6]]\n",
      check: { type: "output", expected: "15\n[[1, 2, 3], [4, 5, 6]]" },
      hints: [
        "The bug is that row = grid[row_index] creates an alias, not a copy, so .pop() changes the original.",
        "You do not need a while loop at all — Python's sum() adds up a list in one step.",
        "Replace the entire function body with: return sum(grid[row_index])",
        "sum() does not modify the list, so the grid stays intact.",
      ],
      solution: "def row_total(grid, row_index):\n    return sum(grid[row_index])\n\nmy_grid = [[1, 2, 3], [4, 5, 6]]\nprint(row_total(my_grid, 1))\nprint(my_grid)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write a function `transpose(grid)` that returns a new grid with rows and columns swapped. The input is always a square grid. Do not modify the original. For example, the first column of the input becomes the first row of the output.",
      starter: "",
      check: { type: "output", expected: "[[1, 4, 7], [2, 5, 8], [3, 6, 9]]" },
      hints: [
        "Start by finding the size: n = len(grid). A square grid has n rows and n columns.",
        "Build a new grid row by row. The new row i contains grid[0][i], grid[1][i], grid[2][i]...",
        "Use a nested loop: for i in range(n): new_row = [grid[j][i] for j in range(n)]",
        "Append each new_row to a result list, then return that list.",
      ],
      solution: "def transpose(grid):\n    n = len(grid)\n    result = []\n    for i in range(n):\n        new_row = [grid[j][i] for j in range(n)]\n        result.append(new_row)\n    return result\n\nprint(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))\n",
    },
  ],
  codex: {
    topic: "nesting and aliasing",
    pattern: "grid = [[1, 2], [3, 4]]\nprint(grid[1][0])   # 3\nsafe = grid[0][:]   # copy, not alias\nfor row in grid:\n    for val in row:\n        print(val)",
    note: "data[outer][inner] is two separate [] operations. Assignment copies the reference, not the data — use [:] for a safe shallow copy of an inner list.",
  },
});

/* ── Lesson 4.7 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c4s7",
  chapter: 4,
  strand: "plot",
  lang: "py",
  timeBudgetMin: 20,
  title: "Data into Charts",
  glossary: {
    module: "A separate file of Python code that adds extra tools to your program. You load it with import before you can use what is inside.",
    import: "The keyword that tells Python to load a module so your program can use its tools.",
    random: "A built-in Python module that produces unpredictable numbers and choices, useful for simulating dice, shuffles, and experiments.",
    frequency: "How many times a particular value appears in a collection. A frequency count tells you which outcomes happened most often.",
  },
  content: [
{
      type: "text",
      md: "**Why import?** Python keeps its standard library in separate modules that are not loaded unless you ask. This is a deliberate design choice: a program that only does maths should not pay the startup cost of loading audio, network, or statistics code. The keyword `import` is your request — it tells Python exactly which toolbox to open.\n\nOnce you write `import random`, Python loads the `random` module and binds it to the name `random`. Every tool inside is then available with **dot notation**: the part before the dot names the toolbox, the part after names the tool inside it. `random.randint(1, 6)` means *go into the `random` toolbox and use its `randint` tool*. Writing `random.randint(...)` rather than just `randint(...)` keeps the toolbox name visible in every call — in Chapter 7 you will see exactly why that matters.",
    },
{
      type: "example",
      note: "Import random, then roll one die ten times. randint(1, 6) includes both 1 and 6 — unlike range, which stops before the last number.",
      code: "import random\n\nrolls = []\nfor _ in range(10):\n    face = random.randint(1, 6)\n    rolls.append(face)\n\nprint(rolls)\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "This code builds a frequency dict from a fixed list of rolls (no randomness). Predict what it prints.",
      starter: "rolls = [3, 1, 4, 1, 5, 9, 2, 6]\ncounts = {}\nfor face in rolls:\n    counts[face] = counts.get(face, 0) + 1\nprint(counts[1])\nprint(len(counts))",
      check: { type: "output", expected: "2\n7" },
      hints: [
        "Trace which number appears twice: 1 appears at index 1 and index 3.",
        "Count the unique values: {1, 2, 3, 4, 5, 6, 9} — that is 7 distinct faces.",
        "counts[1] looks up the count for the key 1.",
      ],
      solution: "rolls = [3, 1, 4, 1, 5, 9, 2, 6]\ncounts = {}\nfor face in rolls:\n    counts[face] = counts.get(face, 0) + 1\nprint(counts[1])\nprint(len(counts))",
    },
{
      type: "text",
      md: "**randint vs range — the off-by-one trap.** `range(1, 6)` stops at 5, never reaching 6. That is the design of `range`. `random.randint(1, 6)` is **inclusive on both ends** — it can return 1, 2, 3, 4, 5, or 6. Python made this choice because dice, card ranks, and real-world ranges are almost always stated inclusively. The anti-pattern is writing `random.randint(1, 5)` when you mean a six-sided die: you will never roll a 6 and your data will look wrong for reasons that are hard to spot.\n\n`random.choice(seq)` is the companion tool: give it any sequence and it picks one item at random. `random.choice(['red', 'blue', 'green'])` returns one colour. Use `randint` when you want a number in a range; use `choice` when you already have a list of options.",
    },
{
      type: "example",
      note: "Count how many times each face appeared. This is the frequency counter pattern — the same pattern used in the letter counter in Lesson 4.5.",
      code: "import random\n\ncounts = {}\nfor _ in range(10):\n    face = random.randint(1, 6)\n    counts[face] = counts.get(face, 0) + 1\n\nprint(counts)\n",
    },
    {
      type: "exercise",
      rung: 2,
      prompt: "Arrange these lines to count how many times each face appeared in a list of rolls and print the total number of distinct faces rolled.",
      starter: "",
      check: {
        type: "parsons",
        lines: [
          "rolls = [3, 6, 3, 1, 6, 2, 3]",
          "counts = {}",
          "for face in rolls:",
          "    counts[face] = counts.get(face, 0) + 1",
          "print(len(counts))",
        ],
        distractors: ["    counts[face] = counts[face] + 1", "print(sum(counts))"],
      },
      hints: [
        "The empty dict must come before the loop.",
        "The update line is indented one level inside the for loop.",
        "After the loop, len(counts) counts distinct keys — four faces appeared: {1, 2, 3, 6}.",
      ],
      solution: "rolls = [3, 6, 3, 1, 6, 2, 3]\ncounts = {}\nfor face in rolls:\n    counts[face] = counts.get(face, 0) + 1\nprint(len(counts))",
    },
{
      type: "text",
      md: "**The frequency counter pattern.** The line `counts[face] = counts.get(face, 0) + 1` is doing three things at once. `counts.get(face, 0)` safely reads the current count for `face`, returning 0 if the key does not exist yet — this avoids the `KeyError` you would get with `counts[face] += 1` on a missing key. Then it adds 1 and stores the result back. This is the [[accumulator pattern]] applied to a dictionary instead of a single variable. Name it, remember it: every time you want to count things, reach for this pattern.\n\nThe anti-pattern is `counts[face] += 1` without the `.get` guard. Python raises a `KeyError` the first time it sees a new face because the key does not exist yet. The fix is always `.get(key, 0)`.",
    },
{
      type: "exercise",
      rung: 5,
      prompt: "Complete `roll_stats(n, sides)` so it rolls an `n`-sided die `n` times and returns a frequency dict. The check calls `roll_stats(100, 6)` and prints the total number of rolls recorded — it should always be 100 regardless of which faces came up.",
      starter: "import random\n\ndef roll_stats(n, sides):\n    counts = {}\n    for _ in range(n):\n        face = random.randint(1, sides)\n        pass  # update counts for this face\n    return counts\n\nresult = roll_stats(100, 6)\nprint(sum(result.values()))\n",
      check: { type: "output", expected: "100" },
      hints: [
        "Replace `pass` with the frequency counter update: `counts[face] = counts.get(face, 0) + 1`.",
        "After the loop, `return counts` is already there — you only need to fill in the update line.",
        "`sum(result.values())` adds up all the counts. If you rolled 100 times, the total must be 100.",
      ],
      solution: "import random\n\ndef roll_stats(n, sides):\n    counts = {}\n    for _ in range(n):\n        face = random.randint(1, sides)\n        counts[face] = counts.get(face, 0) + 1\n    return counts\n\nresult = roll_stats(100, 6)\nprint(sum(result.values()))\n",
    },
{
      type: "example",
      note: "Build labels and values lists from the counts dict, then plot a bar chart. Change 10 to 1000 to see the law of large numbers smooth out the bars.",
      code: "import random\n\ncounts = {}\nfor _ in range(10):\n    face = random.randint(1, 6)\n    counts[face] = counts.get(face, 0) + 1\n\nlabels = []\nfor i in range(1, 7):\n    labels.append(str(i))\n\nvalues = []\nfor i in range(1, 7):\n    values.append(counts.get(i, 0))\n\nbar(labels, values)\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This code builds a bar chart but crashes with a `KeyError`. The bug is on the values-building line. Fix it so the chart works even if a face never appeared.",
      starter: "counts = {1: 3, 3: 5, 5: 2}  # only odd faces rolled\nlabels = []\nfor i in range(1, 7):\n    labels.append(str(i))\nvalues = []\nfor i in range(1, 7):\n    values.append(counts[i])  # bug: KeyError if face never appeared\nbar(labels, values)\nprint(len(values))",
      check: { type: "output", expected: "6" },
      hints: [
        "counts[i] crashes if key i is not in the dict — faces 2, 4, 6 are missing here.",
        "The safe version uses .get(i, 0): returns the count or 0 if never rolled.",
        "Change counts[i] to counts.get(i, 0).",
      ],
      solution: "counts = {1: 3, 3: 5, 5: 2}\nlabels = []\nfor i in range(1, 7):\n    labels.append(str(i))\nvalues = []\nfor i in range(1, 7):\n    values.append(counts.get(i, 0))\nbar(labels, values)\nprint(len(values))",
    },
{
      type: "text",
      md: "**Why build labels and values separately?** `bar` wants two parallel lists: one of strings for the axis labels, one of numbers for the bar heights. You could pass any strings you like — `['one','two','three','four','five','six']` would work too. The key point is that `labels[0]` must describe `values[0]`, `labels[1]` must describe `values[1]`, and so on. This parallel-lists design comes up constantly in data visualisation and in the `zip` function you will meet in Lesson 4.8.\n\nTry increasing the roll count from 10 to 1000. With only 10 rolls the bars are lumpy and uneven. With 1000 rolls each face appears roughly 167 times and the bars nearly level out. This is the law of large numbers: more data, more predictable averages.",
    },
{
      type: "exercise",
      rung: 3,
      prompt: "The program below rolls 20 dice and builds a frequency dict. Do two things: change the roll count from 20 to 100, then fill in the `pass` line so the values list gets the count for each face (use `counts.get(i, 0)`). The check prints the length of the values list.",
      starter: "import random\ncounts = {}\nfor _ in range(20):\n    face = random.randint(1, 6)\n    counts[face] = counts.get(face, 0) + 1\n# Change N to 100 by editing range(20) above\n# Build labels list\nlabels = []\nfor i in range(1, 7):\n    labels.append(str(i))\n# Build values list — count of each face (0 if none rolled)\nvalues = []\nfor i in range(1, 7):\n    pass  # replace this: append counts.get(i, 0) to values\nprint(len(values))\n",
      check: { type: "output", expected: "6" },
      hints: [
        "The `pass` line is a placeholder. Replace it with `values.append(...)` — keeping the same indentation.",
        "`counts.get(i, 0)` returns the roll count for face `i`, or 0 if that face never appeared.",
        "After the fix, `values` should have one entry per face: six entries total. `len(values)` prints `6`.",
        "To change the roll count, find `range(20)` in the for loop near the top and change 20 to 100.",
      ],
      solution: "import random\ncounts = {}\nfor _ in range(100):\n    face = random.randint(1, 6)\n    counts[face] = counts.get(face, 0) + 1\nlabels = []\nfor i in range(1, 7):\n    labels.append(str(i))\nvalues = []\nfor i in range(1, 7):\n    values.append(counts.get(i, 0))\nprint(len(values))\n",
    },
{
      type: "exercise",
      rung: 6,
      prompt: "A dataset of 100 dice rolls has already been summarised for you as `counts = {1:18, 2:15, 3:17, 4:16, 5:19, 6:15}`. Write a program that builds the `labels` and `values` lists (using for loops, no shortcuts), calls `bar(labels, values)` to draw the chart, and then prints the total number of rolls. The check expects the total to print as `100`.",
      starter: "",
      check: { type: "output", expected: "100" },
      hints: [
        "Start by writing `counts = {1:18, 2:15, 3:17, 4:16, 5:19, 6:15}` — the data is given to you.",
        "Build `labels` with a for loop over `range(1, 7)`, appending `str(i)` each time.",
        "Build `values` with a second for loop over `range(1, 7)`, appending `counts.get(i, 0)` each time.",
        "Call `bar(labels, values)`. Then print `sum(values)` to show the total rolls.",
      ],
      solution: "counts = {1:18, 2:15, 3:17, 4:16, 5:19, 6:15}\n\nlabels = []\nfor i in range(1, 7):\n    labels.append(str(i))\n\nvalues = []\nfor i in range(1, 7):\n    values.append(counts.get(i, 0))\n\nbar(labels, values)\nprint(sum(values))\n",
    },
],
  codex: {
    topic: "import and frequency",
    pattern: "import random\ncounts = {}\nfor _ in range(n):\n    k = random.randint(1, sides)\n    counts[k] = counts.get(k, 0) + 1",
    note: "import loads a module once; dot notation keeps the source visible. Use .get(k, 0) to avoid KeyError when building a frequency dict.",
  },
});

/* ── Lesson 4.8 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c4s8",
  chapter: 4,
  strand: "sound",
  lang: "py",
  timeBudgetMin: 20,
  title: "Lists as Music",
  glossary: {
    pattern: "A list of values that describes a musical sequence step by step, such as which beats have a drum hit and which are silent.",
    beat: "One step in a musical pattern. In a drum grid, a beat is either active (1) or silent (0).",
    zip: "A built-in Python function that pairs elements from two lists one by one, stopping when the shorter list runs out.",
  },
  content: [
{
      type: "text",
      md: "**From loops to lists.** In Lesson 2.7 you made a four-on-the-floor kick pattern by writing four `sample('kick')` calls inside a loop. That works, but the rhythm is hard-coded into the loop structure — to change the pattern you have to change the code. Today you store the whole [[pattern]] in a list first, then loop over it. Change the list, change the music. The code stays the same.\n\nThis is the [[DRY]] principle again, now applied to music. Instead of writing out every hit individually, you write the pattern once as data and let the loop do the work. A list of 1s and 0s is a drum grid — exactly what a real DAW uses under the hood.",
    },
{
      type: "example",
      note: "Store a melody in a list and play each note. Change melody[0] to 59 and only that one note shifts — everything else stays the same.",
      code: "melody = [60, 62, 64, 65, 67]\n\nfor note in melody:\n    play(note)\n    sleep(0.5)\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Predict what this code prints before running it.",
      starter: "melody = [60, 62, 64, 65, 67]\nprint(len(melody))\nprint(melody[2])",
      check: { type: "output", expected: "5\n64" },
      hints: [
        "len() counts items in the list.",
        "melody[2] is the third item — index 2 counts from 0.",
      ],
      solution: "melody = [60, 62, 64, 65, 67]\nprint(len(melody))\nprint(melody[2])",
    },
{
      type: "text",
      md: "**Lists as sheet music.** When you write `melody = [60, 62, 64, 65, 67]`, you are writing sheet music as data. `for note in melody` reads it left to right, one note at a time. You can now pass `melody` to a function, store it in a file, or reverse it — all without rewriting the play/sleep calls. This is the power of separating *what to play* from *how to play it*.\n\nThe anti-pattern is writing `play(60); play(62); play(64); play(65); play(67)` directly. Try adding a note. You edit five lines instead of one list. Worse, if you want to play the melody backwards later you have to rewrite everything again.",
    },
{
      type: "example",
      note: "A drum pattern as a list. enumerate gives you both the step index and the beat value — use the index when you need to know which step you are on.",
      code: "kick = [1, 0, 0, 0, 1, 0, 0, 0]\n\nfor i, beat in enumerate(kick):\n    if beat == 1:\n        sample('kick')\n    sleep(0.25)\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This code should print how many active beats are in a steady hi-hat pattern (all 8 should fire), but it prints 0. Fix the one wrong comparison.",
      starter: "hihat = [1, 1, 1, 1, 1, 1, 1, 1]\ncount = 0\nfor i, beat in enumerate(hihat):\n    if beat == 0:  # bug\n        count += 1\nprint(count)",
      check: { type: "output", expected: "8" },
      hints: [
        "A beat fires when its value is 1, not 0.",
        "Change the comparison from `== 0` to `== 1`.",
      ],
      solution: "hihat = [1, 1, 1, 1, 1, 1, 1, 1]\ncount = 0\nfor i, beat in enumerate(hihat):\n    if beat == 1:\n        count += 1\nprint(count)",
    },
{
      type: "exercise",
      rung: 3,
      prompt: "The snare list below has all zeros. Change exactly two values to `1` so the snare falls on beats 3 and 7 (index 2 and index 6 in zero-based counting). The check verifies that exactly two `sample('snare')` calls are made.",
      starter: "snare = [0, 0, 0, 0, 0, 0, 0, 0]\n# Change two values in snare to 1 — beats 3 and 7 (index 2 and 6)\nfor i, beat in enumerate(snare):\n    if beat == 1:\n        sample('snare')\n    sleep(0.25)\n",
      check: { type: "calls", calls: [{ fn: "sample", name: "snare" }, { fn: "sample", name: "snare" }] },
      hints: [
        "Beat 3 is index 2 (counting from zero: beat 1 = index 0, beat 2 = index 1, beat 3 = index 2).",
        "Beat 7 is index 6. Change `snare[2]` to `1` and `snare[6]` to `1` in the list literal.",
        "Do not touch the for loop — just edit the two values inside the square brackets.",
      ],
      solution: "snare = [0, 0, 1, 0, 0, 0, 1, 0]\nfor i, beat in enumerate(snare):\n    if beat == 1:\n        sample('snare')\n    sleep(0.25)\n",
    },
{
      type: "text",
      md: "**Why enumerate?** `for beat in kick` gives you the value but not its position. `for i, beat in enumerate(kick)` gives you both. Use `for beat in` when the position does not matter; use `enumerate` when you need to know *which* step you are on — for example, to print `'Beat 3 is active'` or to compare two patterns at the same index.\n\nCritical: inside `for i, beat in enumerate(kick)`, assigning `beat = 1` changes the local variable, not the list. To actually change the list you must write `kick[i] = 1`. This is one of the most common beginner mistakes with `enumerate`.",
    },
{
      type: "example",
      note: "zip pairs two lists step by step — like threading two needles at once. It stops when the shorter list runs out.",
      code: "melody = [60, 62, 64, 65, 67]\nkick   = [1,  0,  1,  0,  1]\n\nfor note, beat in zip(melody, kick):\n    play(note)\n    if beat == 1:\n        sample('kick')\n    sleep(0.5)\n",
    },
{
      type: "exercise",
      rung: 5,
      prompt: "Complete `play_melody` so it uses `zip` to pair each note with its duration, then calls `play(note)` and `sleep(dur)` for each pair. The check verifies the four play calls.",
      starter: "def play_melody(notes, durations):\n    for note, dur in zip(notes, durations):\n        pass  # play note then sleep dur\n\nplay_melody([60, 62, 64, 65], [1, 1, 2, 1])\n",
      check: { type: "calls", calls: [{ fn: "play", note: 60 }, { fn: "play", note: 62 }, { fn: "play", note: 64 }, { fn: "play", note: 65 }] },
      hints: [
        "Replace `pass` with two lines: `play(note)` on one line, then `sleep(dur)` on the next.",
        "Both lines go inside the for loop — keep the same indentation as `pass`.",
        "`zip(notes, durations)` already pairs them; you just need to use `note` and `dur` in your two calls.",
      ],
      solution: "def play_melody(notes, durations):\n    for note, dur in zip(notes, durations):\n        play(note)\n        sleep(dur)\n\nplay_melody([60, 62, 64, 65], [1, 1, 2, 1])\n",
    },
{
      type: "text",
      md: "**zip stops at the shorter list — always.** If `melody` has 5 notes and `kick` has 8 steps, `zip` produces only 5 pairs and silently drops the last 3 kick steps. This is a deliberate Python design choice: zip never pads or crashes, it just stops. The failure mode is when your two lists are different lengths by accident — you lose data without an error message. Good practice: make sure both lists are the same length before you zip them, or print `len(melody), len(kick)` to verify.\n\n`zip` is a CS concept called a **parallel traversal** — moving through two sequences in lockstep. You will use it any time you have two lists that are meant to go together: notes and durations, x-coordinates and y-coordinates, labels and values.",
    },
{
      type: "text",
      md: "**Reversing a list safely.** Python gives you two ways to reverse a list. `kick.reverse()` mutates the list in place and returns `None` — so `new = kick.reverse()` gives you `None`, not a reversed list. That is the trap. `list(reversed(kick))` creates a brand-new reversed list and leaves `kick` untouched. Use `list(reversed(...))` whenever you need the original and the reversed version to both exist.",
    },
{
      type: "exercise",
      rung: 5,
      prompt: "Complete `reverse_pattern` so it returns a new reversed list without changing the original. Use `list(reversed(pattern))`. The check prints the result.",
      starter: "def reverse_pattern(pattern):\n    pass  # return a new reversed list without mutating pattern\n\nprint(reverse_pattern([1, 2, 3, 4]))\n",
      check: { type: "output", expected: "[4, 3, 2, 1]" },
      hints: [
        "`pattern.reverse()` returns `None` and mutates the original — do not use that here.",
        "`reversed(pattern)` gives you an iterator. Wrap it in `list(...)` to get an actual list.",
        "The whole function body is one line: `return list(reversed(pattern))`.",
      ],
      solution: "def reverse_pattern(pattern):\n    return list(reversed(pattern))\n\nprint(reverse_pattern([1, 2, 3, 4]))\n",
    },
{
      type: "exercise",
      rung: 6,
      prompt: "Write a complete program that defines `melody = [60, 64, 67, 72, 67, 64, 60, 64]` and plays each note with `sleep(0.5)` between notes. Then play the same melody reversed (use `list(reversed(melody))`). Print `'Done'` at the end. The check verifies the final print.",
      starter: "",
      check: { type: "output", expected: "Done" },
      hints: [
        "Start with `melody = [60, 64, 67, 72, 67, 64, 60, 64]`. Then write a for loop: `for note in melody: play(note); sleep(0.5)`.",
        "For the reversed version: `rev = list(reversed(melody))` then loop over `rev` the same way.",
        "After both loops, add `print('Done')` at the end.",
        "Make sure `print('Done')` is at the top level (no indentation) so it runs after both loops finish.",
      ],
      solution: "melody = [60, 64, 67, 72, 67, 64, 60, 64]\n\nfor note in melody:\n    play(note)\n    sleep(0.5)\n\nrev = list(reversed(melody))\nfor note in rev:\n    play(note)\n    sleep(0.5)\n\nprint('Done')\n",
    },
],
  codex: {
    topic: "list as pattern",
    pattern: "pattern = [1, 0, 0, 0, 1, 0, 0, 0]\nfor i, beat in enumerate(pattern):\n    if beat == 1:\n        sample('kick')\n    sleep(0.25)",
    note: "Store musical sequences in lists so one edit changes the whole pattern. Use enumerate when you need the index; use zip to pair two lists in lockstep; use list(reversed()) to avoid mutating the original.",
  },
});

/* ── Lesson 4.9 ─────────────────────────────────────────────────────── */
window.CODELAB.lessons.push({
  id: "c4s9",
  chapter: 4,
  strand: "plot",
  lang: "py",
  timeBudgetMin: 25,
  title: "Collect, Process, Chart",
  glossary: {
    "pipeline": "A series of steps where the output of one step becomes the input of the next. A data pipeline takes raw input, processes it into a structure, and produces output — like a bar chart.",
    "frequency map": "A dict where each key is an item and each value is how many times that item appeared. It is the standard way to count things in Python.",
    "letter frequency": "How often each letter of the alphabet appears in a piece of text. In English, 'e' is always the most common letter — a fact codebreakers use to crack substitution ciphers.",
  },
  content: [
{
      type: "text",
      md: "**Raw data is useless until you process and show it.** Real programs follow a [[pipeline]]: take raw input, collect it into a structure, then visualise the result. In Lesson 4.7 you called `bar()` with lists you wrote by hand. Now you will build those lists yourself from real data. The three steps are always the same: collect into a [[frequency map]], sort the keys into a labels list, pull the matching counts into a values list, call `bar(labels, values)`.",
    },
{
      type: "text",
      md: "**Step 1 — collect.** `text.split()` splits text into a list of words (Lesson 1.5). Loop and count each word into a dict using `counts.get(word, 0) + 1` — the accumulator pattern from Lesson 4.5. Every new word starts at 0; every repeat adds 1. No KeyErrors, no special cases. The same pattern counts words, characters, dice rolls, or anything else.",
    },
{
      type: "example",
      note: "Anti-pattern: counts[word] += 1 crashes with KeyError the first time any word appears.",
      code: "counts = {}\nfor word in \"we will rock you\".split():\n    counts[word] += 1   # KeyError: 'we'\n                        # key doesn't exist yet on the first pass",
    },
{
      type: "text",
      md: "**Steps 2 and 3 — sort, then chart.** `sorted(counts)` returns keys in alphabetical order. A list comprehension `[counts[w] for w in labels]` pulls the matching count for each label. Pass both to `bar(labels, values)`. **Visualise, don't dump** — the human eye reads a bar chart far faster than a dict printed to the screen. But count individual characters instead of words and the pipeline reveals something surprising.",
    },
{
      type: "example",
      note: "Letter frequency on a real sentence — 'o' tops this pangram; on any large English text, 'e' always wins.",
      code: "def letter_freq(text):\n    counts = {}\n    for ch in text.lower():\n        if ch.isalpha():          # skip spaces, digits, punctuation\n            counts[ch] = counts.get(ch, 0) + 1\n    labels = sorted(counts, key=counts.get, reverse=True)\n    values = [counts[c] for c in labels]\n    bar(labels, values)\n    print(labels[0])\n\nletter_freq(\"the quick brown fox jumps over the lazy dog\")\n# 'o' appears 4 times here — try it on a paragraph of any English book and 'e' takes first",
    },
{
      type: "exercise",
      rung: 1,
      prompt: "What does this code print? Trace which letter appears more than once in 'the quick brown fox', then count the distinct letters — .isalpha() skips spaces.",
      starter: "text = \"the quick brown fox\"\ncounts = {}\nfor ch in text.lower():\n    if ch.isalpha():\n        counts[ch] = counts.get(ch, 0) + 1\nlabels = sorted(counts, key=counts.get, reverse=True)\nprint(len(counts))\nprint(labels[0])",
      check: { type: "output", expected: "15\no" },
      hints: [
        ".isalpha() skips spaces and punctuation — count only the actual letters.",
        "Scan the text carefully for a repeated letter. Only one letter appears more than once.",
        "sorted(counts, key=counts.get, reverse=True) puts the highest count first — that repeated letter is labels[0].",
      ],
      solution: "text = \"the quick brown fox\"\ncounts = {}\nfor ch in text.lower():\n    if ch.isalpha():\n        counts[ch] = counts.get(ch, 0) + 1\nlabels = sorted(counts, key=counts.get, reverse=True)\nprint(len(counts))\nprint(labels[0])",
    },
{
      type: "exercise",
      rung: 2,
      prompt: "Arrange these lines into letter_freq — the letter frequency function from the lesson. It counts every alpha character, sorts by frequency, draws a bar chart, and prints the most common letter.",
      starter: "",
      check: {
        type: "parsons",
        lines: [
          "def letter_freq(text):",
          "    counts = {}",
          "    for ch in text.lower():",
          "        if ch.isalpha():",
          "            counts[ch] = counts.get(ch, 0) + 1",
          "    labels = sorted(counts, key=counts.get, reverse=True)",
          "    values = [counts[c] for c in labels]",
          "    bar(labels, values)",
          "    print(labels[0])",
          "letter_freq(\"we will rock you\")",
        ],
        distractors: [
          "        if ch.isdigit():",
          "    bar(values, labels)",
        ],
      },
      hints: [
        "The dict must be ready before the loop counts into it.",
        "isdigit() returns True for numbers — isalpha() returns True for letters. You want letters.",
        "bar() needs labels first, values second — the order matters.",
      ],
      solution: "def letter_freq(text):\n    counts = {}\n    for ch in text.lower():\n        if ch.isalpha():\n            counts[ch] = counts.get(ch, 0) + 1\n    labels = sorted(counts, key=counts.get, reverse=True)\n    values = [counts[c] for c in labels]\n    bar(labels, values)\n    print(labels[0])\nletter_freq(\"we will rock you\")",
    },
{
      type: "exercise",
      rung: 3,
      prompt: "letter_freq currently sorts letters in alphabet order, so the first bar is 'b' not the most common letter. Change the one sort line to sort by frequency instead. After your fix the function prints labels[0] — it should be 'o', not 'b'.",
      starter: "def letter_freq(text):\n    counts = {}\n    for ch in text.lower():\n        if ch.isalpha():\n            counts[ch] = counts.get(ch, 0) + 1\n    labels = sorted(counts)          # change this line only\n    values = [counts[c] for c in labels]\n    bar(labels, values)\n    print(labels[0])\n\nletter_freq(\"the quick brown fox\")",
      check: { type: "output", expected: "o" },
      hints: [
        "sorted(counts) sorts by key name — 'b' (for 'brown') is first alphabetically.",
        "sorted() accepts a key= argument. key=counts.get sorts by each letter's count.",
        "Add reverse=True so the highest count comes first. Which letter in 'the quick brown fox' appears twice?",
      ],
      solution: "def letter_freq(text):\n    counts = {}\n    for ch in text.lower():\n        if ch.isalpha():\n            counts[ch] = counts.get(ch, 0) + 1\n    labels = sorted(counts, key=counts.get, reverse=True)\n    values = [counts[c] for c in labels]\n    bar(labels, values)\n    print(labels[0])\n\nletter_freq(\"the quick brown fox\")",
    },
{
      type: "text",
      md: "**[[Letter frequency]] unlocks secrets.** Every language has a fingerprint. In English, 'e' is the most common letter in any large text. Codebreakers used this to crack shift ciphers: shift every letter by the same amount, and the most common letter in the coded result is almost surely 'e'. The same counter loop works on any sequence — words, letters, or numbers.",
    },
{
      type: "text",
      md: "**The same pattern works on any numeric dict.** When the dict already maps names to numbers — planet moon counts, game high scores, country populations — there is no counting loop. `sorted(data, key=data.get, reverse=True)[:n]` gives the top n keys by value. Alphabetical sort would put Earth first; sort by value puts Saturn first. This is how every leaderboard and ranking chart works.",
    },
{
      type: "example",
      note: "Planet moon counts — Saturn leads with 146 moons. Sorted by value, not by name.",
      code: "moons = {\n    'Saturn':  146,\n    'Jupiter': 95,\n    'Uranus':  27,\n    'Neptune': 16,\n    'Mars':    2,\n    'Earth':   1,\n}\nnames = sorted(moons, key=moons.get, reverse=True)\nvalues = [moons[n] for n in names]\nbar(names, values)\nprint(names[0])  # planet with the most moons",
    },
{
      type: "exercise",
      rung: 4,
      prompt: "This planet chart crashes with a NameError before it draws anything. Find the wrong variable name and fix it — one word needs to change.",
      starter: "moons = {\n    'Saturn':  146,\n    'Jupiter': 95,\n    'Uranus':  27,\n}\ntop = sorted(moons, key=moons.get, reverse=True)[:2]\nvalues = [counts[n] for n in top]   # NameError: name 'counts' is not defined\nbar(top, values)\nprint(top[0])",
      check: { type: "output", expected: "Saturn" },
      hints: [
        "Run the code and read the NameError — it names the variable that doesn't exist.",
        "The dict holding the moon counts is called moons, not counts.",
        "Replace counts[n] with moons[n] in the list comprehension.",
      ],
      solution: "moons = {\n    'Saturn':  146,\n    'Jupiter': 95,\n    'Uranus':  27,\n}\ntop = sorted(moons, key=moons.get, reverse=True)[:2]\nvalues = [moons[n] for n in top]\nbar(top, values)\nprint(top[0])",
    },
{
      type: "exercise",
      rung: 5,
      prompt: "Complete giant_moons: (1) replace avg = 0 with the real average (sum of all moon counts divided by the number of planets); (2) replace 0 in the values list with each planet's actual moon count. The function charts above-average planets and prints how many there are. Saturn (146) and Jupiter (95) beat the average — the answer is 2.",
      starter: "moons = {\n    'Saturn':  146,\n    'Jupiter': 95,\n    'Uranus':  27,\n    'Neptune': 16,\n    'Mars':    2,\n    'Earth':   1,\n}\n\ndef giant_moons(data):\n    avg = 0             # replace: sum(data.values()) / len(data)\n    giants = sorted([k for k in data if data[k] > avg], key=data.get, reverse=True)\n    values = [0 for k in giants]  # replace 0 with data[k]\n    bar(giants, values)\n    print(len(giants))\n\ngiant_moons(moons)",
      check: { type: "output", expected: "2" },
      hints: [
        "sum(data.values()) totals all moon counts. len(data) is the number of planets.",
        "With avg = 0, every planet qualifies (all moon counts > 0) — output is 6, not 2.",
        "In [0 for k in giants], k holds each planet name. Replace 0 with data[k] to get its moon count.",
      ],
      solution: "moons = {\n    'Saturn':  146,\n    'Jupiter': 95,\n    'Uranus':  27,\n    'Neptune': 16,\n    'Mars':    2,\n    'Earth':   1,\n}\n\ndef giant_moons(data):\n    avg = sum(data.values()) / len(data)\n    giants = sorted([k for k in data if data[k] > avg], key=data.get, reverse=True)\n    values = [data[k] for k in giants]\n    bar(giants, values)\n    print(len(giants))\n\ngiant_moons(moons)",
    },
{
      type: "text",
      md: "**Sort by count, not by name.** `sorted(counts)` gives alphabetical order — it puts 'fantasy' at the top of Bohemian Rhapsody's opening line, even though 'is' and 'this' both appear twice while 'fantasy' appears once. Use `sorted(counts, key=counts.get, reverse=True)` to sort by value, highest first. Then slice `[:n]` to keep only the top n. The most important bar is now on the left, where the eye looks first.",
    },
{
      type: "example",
      note: "Anti-pattern: alphabetical sort buries the most common word — 'fantasy' leads even though 'is' appears twice.",
      code: "# Bohemian Rhapsody opening — 'is' and 'this' both appear twice\ncounts = {'is': 2, 'this': 2, 'the': 1, 'real': 1, 'life': 1, 'just': 1, 'fantasy': 1}\nlabels = sorted(counts)            # alphabetical: 'fantasy' is first\nprint(labels[0])                   # 'fantasy' — but 'is' is more common!",
    },
{
      type: "example",
      note: "top_words on a real song — 'you' dominates 'We Will Rock You' because the song is literally about rocking you.",
      code: "def top_words(text, n):\n    counts = {}\n    for word in text.split():\n        counts[word] = counts.get(word, 0) + 1\n    top = sorted(counts, key=counts.get, reverse=True)[:n]\n    values = [counts[w] for w in top]\n    bar(top, values)\n    print(top[0])\n\nverse = \"buddy youre a boy make a big noise playing in the street gonna be a big man someday you got mud on your face you big disgrace kicking your can all over the place we will rock you we will rock you\"\ntop_words(verse, 5)\n# you(4)  a(3)  big(3)  your(2)  we(2)",
    },
{
      type: "exercise",
      rung: 6,
      prompt: "Write letter_vs_word(text) that runs two bar chart analyses on the same text: (1) count letters with .isalpha(), sort alphabetically, and call bar() with the letter names and counts; (2) count words, sort by frequency highest first, take the top 5, call bar() with those words and counts; (3) print the number of unique letters then the number of unique words. Call it on 'we will rock you we will rock you'.",
      starter: "",
      check: { type: "output", expected: "10\n4" },
      hints: [
        "Two dicts: counts_ch for letters (loop over text.lower(), if ch.isalpha()), counts_w for words (loop over text.split()).",
        "For letters: alpha = sorted(counts_ch) gives alphabet order. bar(alpha, [counts_ch[c] for c in alpha]).",
        "For words: top5 = sorted(counts_w, key=counts_w.get, reverse=True)[:5]. bar(top5, [counts_w[w] for w in top5]).",
        "print(len(counts_ch)) then print(len(counts_w)) at the end.",
      ],
      solution: "def letter_vs_word(text):\n    counts_ch = {}\n    for ch in text.lower():\n        if ch.isalpha():\n            counts_ch[ch] = counts_ch.get(ch, 0) + 1\n    alpha = sorted(counts_ch)\n    bar(alpha, [counts_ch[c] for c in alpha])\n    counts_w = {}\n    for word in text.split():\n        counts_w[word] = counts_w.get(word, 0) + 1\n    top5 = sorted(counts_w, key=counts_w.get, reverse=True)[:5]\n    bar(top5, [counts_w[w] for w in top5])\n    print(len(counts_ch))\n    print(len(counts_w))\n\nletter_vs_word(\"we will rock you we will rock you\")",
    },
{
      type: "exercise",
      rung: 6,
      prompt: "Write word_trend(text, keyword) that scans the text word by word, keeping a running count of how many times keyword has appeared so far. At every position, append the current count to a list called running — whether or not the word matched. After scanning, call plot() with position indices and running as the x and y lists. Print the final count. Call it with 'we will rock you we will rock you' and keyword='rock'. 'rock' is at positions 2 and 6, so running = [0, 0, 1, 1, 1, 1, 2, 2] and the output is '2'.",
      starter: "",
      check: { type: "output", expected: "2" },
      hints: [
        "words = text.split(). Start with count = 0 and running = [].",
        "In the loop: if word == keyword: count += 1. Then running.append(count) on every iteration.",
        "After the loop: plot(list(range(len(words))), running) draws the trend. print(count) prints the total.",
      ],
      solution: "def word_trend(text, keyword):\n    words = text.split()\n    count = 0\n    running = []\n    for word in words:\n        if word == keyword:\n            count += 1\n        running.append(count)\n    plot(list(range(len(words))), running)\n    print(count)\n\nword_trend(\"we will rock you we will rock you\", \"rock\")",
    },
],
  codex: {
    topic: "data pipeline: collect → sort → chart",
    pattern: "counts = {}\nfor item in data:\n    counts[item] = counts.get(item, 0) + 1\nlabels = sorted(counts, key=counts.get, reverse=True)\nvalues = [counts[k] for k in labels]\nbar(labels, values)",
    note: "Collect with .get(k, 0)+1, sort by value with key=counts.get and reverse=True, then bar(). The same pattern counts words, letters, dice rolls, or song plays from any numeric dict.",
  },
});

/* ── Lesson 4.10 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c4s10",
  chapter: 4,
  strand: "sound",
  lang: "py",
  timeBudgetMin: 25,
  title: "Art and Music: Ch1+Ch2+Ch3+Ch4",
  glossary: {
    "data-driven": "When a program's behaviour is controlled by data rather than hardcoded formulas. Change the data, change the output, without rewriting the logic.",
    "interval": "The distance in semitones between two notes. A major scale uses intervals [0, 2, 4, 5, 7, 9, 11] above the root.",
    "melodic contour": "The rise and fall of a melody's pitches over time. Plot it with plot(steps, intervals) where steps = [0, 1, 2, ...] and intervals are the pitch values — a high interval makes the line climb, a low one makes it drop.",
  },
  content: [
{
      type: "text",
      md: "**Four chapters, one stack.** In Chapter 1 you learned primitives: `play()`, `forward()`, `print()`. Chapter 2 gave you loops to repeat them. Chapter 3 gave you functions to name and reuse them. Chapter 4 gives you collections — and collections change everything. In c3s9 the melody was `play(root + i)`: a formula produced every note. Now the melody IS a list. Write `play(root + interval) for interval in intervals`. Change the list, change the music. No new function, no rewriting. That is [[data-driven]] programming: behaviour controlled by data.",
    },
{
      type: "text",
      md: "**Lists as drawing instructions.** In c3s9, `draw_spiral` used `start + i * 10` to grow the distance — a formula defined the shape. Now store the distances in a list: `lengths = [10, 20, 40, 80, 160]`. Loop over it with `for length in lengths`. The shape is data now, not a formula. Swap the list, swap the drawing — same function, different art. CS principle: **DRY** — one function that takes data is better than five hardcoded calls.",
    },
{
      type: "example",
      note: "Anti-pattern: five separate forward() calls — changing the shape means rewriting all five.",
      code: "pencolor(\"red\")\nforward(10)\nright(90)\npencolor(\"orange\")\nforward(20)\nright(90)\npencolor(\"yellow\")\nforward(40)\nright(90)\n# ... and so on",
    },
{
      type: "text",
      md: "**Pair two lists with zip.** `zip(colours, lengths)` pairs up one colour and one length at a time, giving you a `(colour, length)` tuple each iteration. Use both in one loop body. This is the `zip` pattern from Lesson 4.6 — here it lets you describe the full drawing as two lists of data. Change any value in either list and exactly that step of the drawing changes; nothing else does.",
    },
{
      type: "example",
      note: "Data-driven art: two lists, one loop, one function — change the data, change the drawing.",
      code: "def draw_palette(colours, lengths):\n    for colour, length in zip(colours, lengths):\n        pencolor(colour)\n        forward(length)\n        right(60)\n\ncolours = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']\nlengths = [20, 40, 60, 80, 100, 80]\ndraw_palette(colours, lengths)",
    },
{
      type: "exercise",
      rung: 3,
      prompt: "draw_palette uses right(60), which closes into a hexagon after six steps. Change the turn angle to 91 so the path spirals outward instead. The first three turtle calls should be: set colour 'red', move 20, turn 91.",
      starter: "def draw_palette(colours, lengths):\n    for colour, length in zip(colours, lengths):\n        pencolor(colour)\n        forward(length)\n        right(60)   # change to 91\n\ncolours = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']\nlengths = [20, 40, 60, 80, 100, 80]\ndraw_palette(colours, lengths)",
      mockInput: [],
      check: {
        type: "calls",
        calls: [
          {fn:"color",val:"red"},{fn:"forward",val:20},{fn:"right",val:91},
          {fn:"color",val:"orange"},{fn:"forward",val:40},{fn:"right",val:91},
        ],
      },
      hints: [
        "Only one number needs to change — the argument to right().",
        "right(60) divides a circle into 6 equal steps (360 ÷ 60 = 6). right(91) never closes, so it spirals.",
        "Change right(60) to right(91) inside the loop.",
      ],
      solution: "def draw_palette(colours, lengths):\n    for colour, length in zip(colours, lengths):\n        pencolor(colour)\n        forward(length)\n        right(91)\n\ncolours = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']\nlengths = [20, 40, 60, 80, 100, 80]\ndraw_palette(colours, lengths)",
    },
{
      type: "text",
      md: "**The [[interval]] list defines the scale.** In c3s9 you played `play(root + i)` — every note was one semitone above the last. Real scales skip unevenly. A major scale goes `[0, 2, 4, 5, 7, 9, 11]` — the gaps between notes are 2, 2, 1, 2, 2, 2, 1 semitones. A pentatonic scale goes `[0, 2, 4, 7, 9]` — only five notes, spaced differently. Store the intervals in a list and loop over it: `play(root + interval)`. One function. Swap the list, swap the scale.",
    },
{
      type: "example",
      note: "Anti-pattern: hardcoded MIDI numbers — to play Happy Birthday in G instead of C, every single number must change.",
      code: "# Happy Birthday in C — hardcoded absolute MIDI notes\nplay(60)  # C\nplay(60)  # C\nplay(62)  # D\nplay(60)  # C\nplay(65)  # F\nplay(64)  # E\n# To play in G instead: all six numbers change to 67, 67, 69, 67, 72, 71",
    },
{
      type: "text",
      md: "**One function, any scale.** Write `play_scale(root, intervals)` and call it with different lists. `major = [0, 2, 4, 5, 7]` and `pentatonic = [0, 2, 4, 7, 9]` give completely different sounds from the same function. The list IS the scale. This is **separation of concerns**: the function knows how to play; the list knows which notes. Changing the scale never touches the function — only the data changes.",
    },
{
      type: "example",
      note: "play_scale works with any list of intervals — change the list, change the scale.",
      code: "def play_scale(root, intervals):\n    for interval in intervals:\n        play(root + interval)\n        sleep(0.25)\n\nmajor = [0, 2, 4, 5, 7]\nplay_scale(60, major)   # plays C major fragment",
    },
{
      type: "text",
      md: "**Zip melody and rhythm.** A melody is a list of intervals; a rhythm is a list of durations. `zip(intervals, durations)` pairs them step by step: each loop gives you one note and one duration. Play the note then sleep for its duration. This gives full control over both pitch and timing from data — the same structure real music software uses internally. Change a duration in the list and that note gets longer; no other note changes.",
    },
{
      type: "example",
      note: "Smoke on the Water as data — change any interval to transpose the riff, any duration to change the feel.",
      code: "def play_melody(root, intervals, durations):\n    for interval, dur in zip(intervals, durations):\n        play(root + interval)\n        sleep(dur)\n\n# Smoke on the Water — Deep Purple (G Bb C  G Bb C# C)\nsmoke = [0, 3, 5, 0, 3, 6, 5]\ntiming = [0.5, 0.5, 1.0, 0.5, 0.5, 0.25, 1.5]\nplay_melody(55, smoke, timing)  # root 55 = G3",
    },
{
      type: "exercise",
      rung: 5,
      prompt: "Complete play_melody so it plays each interval (as root + interval) and sleeps for the matching duration. zip pairs the two lists step by step. With Smoke on the Water [0,3,5,...] at root=55, the first note is 55, the second is 58.",
      starter: "def play_melody(root, intervals, durations):\n    for interval, dur in zip(intervals, durations):\n        pass  # play(root + interval), then sleep(dur)\n\nsmoke = [0, 3, 5, 0, 3, 6, 5]\ntiming = [0.5, 0.5, 1.0, 0.5, 0.5, 0.25, 1.5]\nplay_melody(55, smoke, timing)",
      mockInput: [],
      check: {
        type: "calls",
        calls: [
          {fn:"play",note:55},
          {fn:"play",note:58},
        ],
      },
      hints: [
        "zip(intervals, durations) gives you one (interval, dur) pair per loop — already unpacked for you.",
        "smoke[0] = 0, root = 55. play(55 + 0) = play(55). smoke[1] = 3. play(55 + 3) = play(58).",
        "sleep(dur) uses the duration from the timing list — it changes each note.",
      ],
      solution: "def play_melody(root, intervals, durations):\n    for interval, dur in zip(intervals, durations):\n        play(root + interval)\n        sleep(dur)\n\nsmoke = [0, 3, 5, 0, 3, 6, 5]\ntiming = [0.5, 0.5, 1.0, 0.5, 0.5, 0.25, 1.5]\nplay_melody(55, smoke, timing)",
    },
{
      type: "text",
      md: "**A dict can hold the whole drumkit.** In Lesson 4.8 you stored one beat pattern in a list. A drum machine has many instruments. Store each pattern as a value in a dict: `beats = {'kick': [1,0,0,0,1,0,0,0], 'hihat': [1,1,1,1,1,1,1,1]}`. Loop over `beats.items()`: for each instrument name and its pattern, loop through the hits and call `sample(instrument)` when the hit is 1. Adding a new instrument is one new line in the dict — no new variable, no new loop. CS principle: **one data structure over many variables**.",
    },
{
      type: "example",
      note: "Anti-pattern: a separate variable and loop per instrument — adding a third means more copy-paste.",
      code: "kick  = [1, 0, 0, 0, 1, 0, 0, 0]\nhihat = [1, 1, 1, 1, 1, 1, 1, 1]\nfor hit in kick:\n    if hit: sample('kick')\nfor hit in hihat:     # another loop — grows every time you add an instrument\n    if hit: sample('hihat')",
    },
{
      type: "example",
      note: "Dict-driven drumkit: one loop over .items(), any number of instruments — just add a line. Here it's the We Will Rock You stomp-stomp-CLAP pattern.",
      code: "def play_kit(beats):\n    for instrument, pattern in beats.items():\n        for hit in pattern:\n            if hit:\n                sample(instrument)\n\nwwry = {\n    'kick':  [1, 1, 0, 0, 1, 1, 0, 0],  # stomp stomp\n    'snare': [0, 0, 1, 0, 0, 0, 1, 0],  # CLAP\n    'hihat': [1, 1, 1, 1, 1, 1, 1, 1],  # steady 8ths\n}\nplay_kit(wwry)",
    },
{
      type: "exercise",
      rung: 5,
      prompt: "Complete play_kit so it plays the WWRY stomp-stomp-CLAP pattern — sample() the instrument name for every hit of 1 in its pattern.",
      starter: "def play_kit(beats):\n    for instrument, pattern in beats.items():\n        for hit in pattern:\n            if hit:\n                pass   # call sample() with the instrument name\n\nwwry = {\n    'kick':  [1, 1, 0, 0, 1, 1, 0, 0],  # stomp stomp\n    'snare': [0, 0, 1, 0, 0, 0, 1, 0],  # CLAP\n    'hihat': [1, 1, 1, 1, 1, 1, 1, 1],  # steady 8ths\n}\nplay_kit(wwry)",
      mockInput: [],
      check: {
        type: "calls",
        calls: [
          {fn:"sample",name:"kick"},
          {fn:"sample",name:"kick"},
          {fn:"sample",name:"kick"},
          {fn:"sample",name:"kick"},
          {fn:"sample",name:"snare"},
          {fn:"sample",name:"snare"},
          {fn:"sample",name:"hihat"},
          {fn:"sample",name:"hihat"},
          {fn:"sample",name:"hihat"},
          {fn:"sample",name:"hihat"},
        ],
      },
      hints: [
        "The outer loop gives you instrument (a string) and pattern (a list) for each instrument.",
        "When hit is 1 (truthy), that beat should sound — the if hit: check is already there.",
        "sample(instrument) plays the sound named by the string key.",
      ],
      solution: "def play_kit(beats):\n    for instrument, pattern in beats.items():\n        for hit in pattern:\n            if hit:\n                sample(instrument)\n\nwwry = {\n    'kick':  [1, 1, 0, 0, 1, 1, 0, 0],\n    'snare': [0, 0, 1, 0, 0, 0, 1, 0],\n    'hihat': [1, 1, 1, 1, 1, 1, 1, 1],\n}\nplay_kit(wwry)",
    },
{
      type: "exercise",
      rung: 6,
      prompt: "Write a We Will Rock You drum machine program. play_kit is already defined. Define the wwry dict with three instruments (kick, snare, hihat) using the stomp-stomp-CLAP pattern. Call play_kit(wwry). Then count the total hits for each instrument (sum of 1s in each pattern), chart them with bar() sorted alphabetically, and print the total number of hits across all three instruments. Total should be 14.",
      starter: "def play_kit(beats):\n    for instrument, pattern in beats.items():\n        for hit in pattern:\n            if hit:\n                sample(instrument)\n\n# define wwry dict and complete the rest here",
      check: { type: "output", expected: "14" },
      hints: [
        "wwry = {'kick': [1,1,0,0,1,1,0,0], 'snare': [0,0,1,0,0,0,1,0], 'hihat': [1,1,1,1,1,1,1,1]}",
        "Call play_kit(wwry) to play all three patterns.",
        "hits = {} then for instrument, pattern in wwry.items(): hits[instrument] = sum(pattern)",
        "names = sorted(hits) then bar(names, [hits[n] for n in names]). print(sum(hits.values())) for the total.",
      ],
      solution: "def play_kit(beats):\n    for instrument, pattern in beats.items():\n        for hit in pattern:\n            if hit:\n                sample(instrument)\n\nwwry = {\n    'kick':  [1, 1, 0, 0, 1, 1, 0, 0],\n    'snare': [0, 0, 1, 0, 0, 0, 1, 0],\n    'hihat': [1, 1, 1, 1, 1, 1, 1, 1],\n}\nplay_kit(wwry)\nhits = {}\nfor instrument, pattern in wwry.items():\n    hits[instrument] = sum(pattern)\nnames = sorted(hits)\nbar(names, [hits[n] for n in names])\nprint(sum(hits.values()))",
    },
{
      type: "text",
      md: "**One list, two outputs.** A list of intervals drives a melody. The same list can drive a spiral: use `interval * 8 + 16` as the forward distance and `right(45)` for the turn. A higher note means a longer step, so the shape changes with the tune. The art and the music come from the same data. Change one number in the list and both outputs change together. This is the deepest level of [[data-driven]] thinking: the data IS the program.",
    },
{
      type: "example",
      note: "Ode to Joy drives both sound and spiral — higher notes make longer steps, so the arch of the melody becomes an arch in the drawing.",
      code: "def art_and_music(root, intervals):\n    for interval in intervals:\n        play(root + interval)\n        forward(interval * 8 + 16)\n        right(45)\n        sleep(0.25)\n\n# Ode to Joy — E E F G G F E D (from C root)\n# spiral widens as melody climbs to G (interval 7), tightens as it falls back\node_to_joy = [4, 4, 5, 7, 7, 5, 4, 2]\nart_and_music(60, ode_to_joy)",
    },
{
      type: "exercise",
      rung: 4,
      prompt: "art_and_music has a bug — it plays the root note every time instead of moving up the melody. Fix it so each note is root + interval. With Ode to Joy [4,4,5,7,7,5,4,2] at root=60, the first three notes should be 64, 64, 65.",
      starter: "def art_and_music(root, intervals):\n    for interval in intervals:\n        play(root)              # bug: missing + interval\n        forward(interval * 8 + 16)\n        right(45)\n        sleep(0.25)\n\node_to_joy = [4, 4, 5, 7, 7, 5, 4, 2]\nart_and_music(60, ode_to_joy)",
      mockInput: [],
      check: {
        type: "calls",
        calls: [
          {fn:"play",note:64},{fn:"forward",val:48},{fn:"right",val:45},
          {fn:"play",note:64},{fn:"forward",val:48},{fn:"right",val:45},
          {fn:"play",note:65},{fn:"forward",val:56},{fn:"right",val:45},
        ],
      },
      hints: [
        "play(root) always plays the same note — root never changes in the loop.",
        "The variable interval holds the current offset from root. You need to add it.",
        "Change play(root) to play(root + interval).",
      ],
      solution: "def art_and_music(root, intervals):\n    for interval in intervals:\n        play(root + interval)\n        forward(interval * 8 + 16)\n        right(45)\n        sleep(0.25)\n\node_to_joy = [4, 4, 5, 7, 7, 5, 4, 2]\nart_and_music(60, ode_to_joy)",
    },
{
      type: "text",
      md: "**A line chart reveals the [[melodic contour]].** Lesson 4.9 used `bar()` to answer 'which notes appear most?' A line chart answers a different question: 'how does the melody move over time?' Build the x-axis with `steps = list(range(len(melody)))` — that gives positions 0, 1, 2, … Pass the melody list as the y-axis. Call `plot(steps, melody)`. The line climbs on high intervals and drops on low ones — you can read the arc of the tune at a glance. `bar()` shows frequency; `plot()` shows contour. Same list, completely different insight.",
    },
{
      type: "example",
      note: "Melodic contour as a line chart — the line climbs on high intervals and drops on low ones.",
      code: "def melody_contour(melody):\n    steps = list(range(len(melody)))\n    plot(steps, melody)\n\n# Twinkle Twinkle Little Star — C C G G A A G\ntwinkle = [0, 0, 7, 7, 9, 9, 7]\nmelody_contour(twinkle)\n# flat at 0 (CC), leaps to 7 (GG) at 'little', climbs to 9 (AA) at 'star', settles at 7",
    },
{
      type: "text",
      md: "**Song structure is just list arithmetic.** A verse is a list of intervals; a chorus is a different list; a bridge is a third. Python's `+` concatenates lists: `verse + bridge + verse` gives ABA form — 21 notes from two short motifs. `verse * 2` repeats it twice without retyping. Change one note in the verse and every repetition updates. The whole song is data; the loop stays untouched.",
    },
{
      type: "example",
      note: "ABA song form from list concatenation — verse + bridge + verse, 7+7+7 = 21 notes.",
      code: "verse  = [0, 0, 7, 7, 9, 9, 7]    # Twinkle Twinkle: C C G G A A G\nbridge = [5, 5, 4, 4, 2, 2, 0]    # descending phrase: F F E E D D C\nsong   = verse + bridge + verse    # ABA structure — 21 notes\nprint(len(song))\nfor interval in song:\n    play(60 + interval)\n    sleep(0.3)",
    },
{
      type: "exercise",
      rung: 1,
      prompt: "Predict what this prints. The verse and bridge are each 7-note fragments. How long is ABA form, and what interval sits at index 7?",
      starter: "verse  = [0, 0, 7, 7, 9, 9, 7]\nbridge = [5, 5, 4, 4, 2, 2, 0]\nsong   = verse + bridge + verse\nprint(len(song))\nprint(song[7])",
      check: { type: "output", expected: "21\n5" },
      hints: [
        "Each fragment has 7 notes. ABA form is verse + bridge + verse — three fragments concatenated.",
        "7 + 7 + 7 = 21.",
        "Index 7 is the first element after the verse ends — that's where the bridge starts. bridge[0] is 5.",
      ],
      solution: "verse  = [0, 0, 7, 7, 9, 9, 7]\nbridge = [5, 5, 4, 4, 2, 2, 0]\nsong   = verse + bridge + verse\nprint(len(song))\nprint(song[7])",
    },
{
      type: "text",
      md: "**BPM controls the feel.** `step = 60 / bpm` converts beats per minute to seconds per step: 60 BPM = 1 second, 90 BPM = 0.67 s, 180 BPM = 0.33 s. One number resets the energy of the entire piece. Play Ode to Joy at 90 BPM and it sounds solemn; at 180 BPM the same notes sound frantic. This is **separation of concerns**: the play loop is behaviour; the tempo is data that controls that behaviour.",
    },
{
      type: "example",
      note: "play_at_bpm on Ode to Joy — 90 BPM sounds solemn; 180 BPM sounds frantic. Same notes, different energy.",
      code: "def play_at_bpm(melody, root, bpm):\n    step = 60 / bpm\n    for interval in melody:\n        play(root + interval)\n        sleep(step)\n\n# Ode to Joy — E E F G G F E D (from C root)\node = [4, 4, 5, 7, 7, 5, 4, 2]\nplay_at_bpm(ode, 60, 90)    # solemn and measured\nplay_at_bpm(ode, 60, 180)   # frantic — same melody, completely different feel",
    },
{
      type: "exercise",
      rung: 5,
      prompt: "Complete play_at_bpm. Two things need fixing: replace step = 0 with the correct BPM formula, then replace pass with the two lines that play the note and sleep. Call it with Ode to Joy at root=60, bpm=120.",
      starter: "def play_at_bpm(melody, root, bpm):\n    step = 0          # replace: 60 / bpm\n    for interval in melody:\n        pass          # play(root + interval), then sleep(step)\n\node = [4, 4, 5, 7, 7, 5, 4, 2]\nplay_at_bpm(ode, 60, 120)",
      mockInput: [],
      check: {
        type: "calls",
        calls: [
          {fn:"play",note:64},
          {fn:"play",note:64},
          {fn:"play",note:65},
        ],
      },
      hints: [
        "At 120 BPM there are 120 beats per minute. 60 seconds ÷ 120 beats = 0.5 seconds per beat. So step = 60 / bpm.",
        "ode[0] = 4, root = 60. play(60 + 4) = play(64).",
        "sleep(step) uses the variable you computed at the top of the function — not a fixed number.",
      ],
      solution: "def play_at_bpm(melody, root, bpm):\n    step = 60 / bpm\n    for interval in melody:\n        play(root + interval)\n        sleep(step)\n\node = [4, 4, 5, 7, 7, 5, 4, 2]\nplay_at_bpm(ode, 60, 120)",
    },
{
      type: "text",
      md: "**Three outputs from one list.** `song_analysis` is the deepest idea in this chapter. One melody list drives three things at once: `play()` so you hear the notes, `plot()` so you see the melodic contour as a line chart, and `bar()` so you see which intervals appear most often. Change one interval in the list and all three outputs update. **The data IS the program.** This is what data-driven means at its fullest.",
    },
{
      type: "example",
      note: "song_analysis on Twinkle Twinkle — one list drives sound, shape, and frequency chart simultaneously.",
      code: "def song_analysis(melody, root, bpm=120):\n    step = 60 / bpm\n    steps = list(range(len(melody)))\n    for interval in melody:\n        play(root + interval)\n        sleep(step)\n    plot(steps, melody)   # melodic contour as line chart\n    counts = {}\n    for n in melody:\n        counts[str(n)] = counts.get(str(n), 0) + 1\n    labels = sorted(counts, key=counts.get, reverse=True)\n    bar(labels, [counts[k] for k in labels])\n    print(labels[0])      # most common interval\n\ntwinkle = [0, 0, 7, 7, 9, 9, 7]\nsong_analysis(twinkle, 60, 120)\n# prints '7' — G (interval 7) appears 3 times in Twinkle Twinkle",
    },
{
      type: "exercise",
      rung: 5,
      prompt: "Complete song_analysis — the play loop and plot call are done. Add the frequency count: count how many times each interval appears (use str(n) as the key), sort by count highest first, call bar(), and print the most common interval then its count on the next line. With Ode to Joy [4,4,5,7,7,5,4,2] the answer is '4' appearing 3 times.",
      starter: "def song_analysis(melody, root, bpm=120):\n    step = 60 / bpm\n    steps = list(range(len(melody)))\n    for interval in melody:\n        play(root + interval)\n        sleep(step)\n    plot(steps, melody)\n    pass  # add: count frequencies, sort by count desc, bar(), print most common + its count\n\node_to_joy = [4, 4, 5, 7, 7, 5, 4, 2]\nsong_analysis(ode_to_joy, 60, 90)",
      mockInput: [],
      check: { type: "output", expected: "4\n3" },
      hints: [
        "counts = {} then for n in melody: counts[str(n)] = counts.get(str(n), 0) + 1",
        "labels = sorted(counts, key=counts.get, reverse=True) gives intervals by frequency, highest first.",
        "bar(labels, [counts[k] for k in labels]) charts them.",
        "print(labels[0]) prints the most common interval; print(counts[labels[0]]) prints how many times it appears.",
      ],
      solution: "def song_analysis(melody, root, bpm=120):\n    step = 60 / bpm\n    steps = list(range(len(melody)))\n    for interval in melody:\n        play(root + interval)\n        sleep(step)\n    plot(steps, melody)\n    counts = {}\n    for n in melody:\n        counts[str(n)] = counts.get(str(n), 0) + 1\n    labels = sorted(counts, key=counts.get, reverse=True)\n    bar(labels, [counts[k] for k in labels])\n    print(labels[0])\n    print(counts[labels[0]])\n\node_to_joy = [4, 4, 5, 7, 7, 5, 4, 2]\nsong_analysis(ode_to_joy, 60, 90)",
    },
{
      type: "exercise",
      rung: 6,
      prompt: "Write song_analysis(melody, root, bpm) from scratch — all three outputs. It should: compute step = 60 / bpm, play each note, plot the melodic contour, count interval frequencies (str(n) key), sort by count desc, call bar(), and print the most common interval then its count. Call it with twinkle = [0, 0, 7, 7, 9, 9, 7] at root=60, bpm=120. The most common interval is '7' (G appears 3 times in Twinkle Twinkle).",
      starter: "twinkle = [0, 0, 7, 7, 9, 9, 7]\n# write song_analysis(melody, root, bpm) here, then call song_analysis(twinkle, 60, 120)",
      check: { type: "output", expected: "7\n3" },
      hints: [
        "step = 60 / bpm converts BPM to seconds per step. steps = list(range(len(melody))).",
        "Play loop: for interval in melody: play(root + interval), sleep(step). Then plot(steps, melody).",
        "Count: for n in melody: counts[str(n)] = counts.get(str(n), 0) + 1",
        "labels = sorted(counts, key=counts.get, reverse=True). bar(labels, [counts[k] for k in labels]). Then print labels[0] and counts[labels[0]].",
      ],
      solution: "def song_analysis(melody, root, bpm):\n    step = 60 / bpm\n    steps = list(range(len(melody)))\n    for interval in melody:\n        play(root + interval)\n        sleep(step)\n    plot(steps, melody)\n    counts = {}\n    for n in melody:\n        counts[str(n)] = counts.get(str(n), 0) + 1\n    labels = sorted(counts, key=counts.get, reverse=True)\n    bar(labels, [counts[k] for k in labels])\n    print(labels[0])\n    print(counts[labels[0]])\n\ntwinkle = [0, 0, 7, 7, 9, 9, 7]\nsong_analysis(twinkle, 60, 120)",
    },
],
  codex: {
    topic: "data-driven art, music, and analysis",
    pattern: "# BPM-driven playback\nstep = 60 / bpm\nfor interval in melody:\n    play(root + interval)\n    sleep(step)\n\n# song_analysis: one list → play + plot + bar\nplot(list(range(len(melody))), melody)\ncounts = {}\nfor n in melody:\n    counts[str(n)] = counts.get(str(n), 0) + 1",
    note: "Store melody as intervals. step = 60/bpm controls tempo. song_analysis drives play(), plot(), and bar() from the same list — the deepest form of data-driven programming. Drum patterns are dicts of lists: one loop over .items() plays any number of instruments.",
  },
});
