/* Chapter 6 — Classes & Objects
   Rebuilt to CODELAB_FULL_REPORT.md + CODELAB_CH6_REBUILT.md.
   Lessons: c6s1 Objects bundle data & behavior · c6s2 __init__ ·
            c6s3 Methods & self · c6s4 Comparing & debugging objects ·
            c6s5 Collections of objects · c6s6 A class that owns its data ·
            c6s7 A Note class · c6s8 A drawing class · c6s9 Finale: the synth band
   No inheritance anywhere. Classes sit on top of Chapters 1-5. */

/* ── Lesson 6.1 — Objects bundle data & behavior ─────────────────────── */

window.CODELAB.lessons.push({
  id: "c6s1",
  chapter: 6,
  strand: "sound",
  lang: "py",
  timeBudgetMin: 14,
  title: "Objects bundle data & behavior",
  glossary: {
    "class": "A blueprint that keeps a thing's data and the code that acts on it together under one name — a cookie cutter you stamp out instances with.",
    method: "A function that belongs to a class and acts on `self`, the particular instance it was called on.",
  },
  content: [
    {
      type: "text",
      md: "A dictionary holds a thing's data — `{\"title\": \"Stay\", \"plays\": 2000}` — but the code that *does something* with it lives somewhere else. A [[class]] keeps both together: the data and the behavior, under one name. Think of a class as a cookie cutter and each thing you make with it as a cookie — same shape, different filling.",
    },
    {
      type: "example",
      note: "A dictionary holds the data; describing it happens outside.",
      code: "song = {\"title\": \"Stay\", \"plays\": 2000}\nprint(song[\"title\"] + \" has \" + str(song[\"plays\"]) + \" plays\")\n",
    },
    {
      type: "text",
      md: "The class version bundles the describing right in. `__init__` sets up each song's data when you make it (more on that next lesson). `describe` is a [[method]] — a function that belongs to the class and acts on `self`, the particular song it was called on.",
    },
    {
      type: "example",
      note: "One Song type; stay is one song made from it.",
      code: "class Song:\n    def __init__(self, title, plays):\n        self.title = title\n        self.plays = plays\n\n    def describe(self):\n        return self.title + \": \" + str(self.plays)\n\nstay = Song(\"Stay\", 2000)\nprint(stay.describe())\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Two songs made from the same class. Predict both lines.",
      starter: "class Song:\n    def __init__(self, title, plays):\n        self.title = title\n        self.plays = plays\n\n    def describe(self):\n        return self.title + \": \" + str(self.plays)\n\nprint(Song(\"Stay\", 2000).describe())\nprint(Song(\"Levitating\", 2100).describe())\n",
      check: { type: "output", expected: "Stay: 2000\nLevitating: 2100" },
      hints: [
        "`describe` joins title and plays.",
        "Each song has its own data.",
        "Stay: 2000, Levitating: 2100.",
      ],
      solution: "class Song:\n    def __init__(self, title, plays):\n        self.title = title\n        self.plays = plays\n\n    def describe(self):\n        return self.title + \": \" + str(self.plays)\n\nprint(Song(\"Stay\", 2000).describe())\nprint(Song(\"Levitating\", 2100).describe())\n",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "Change `describe` so it returns `Stay (2000 plays)` instead of `Stay: 2000`.",
      starter: "class Song:\n    def __init__(self, title, plays):\n        self.title = title\n        self.plays = plays\n    def describe(self):\n        return self.title + \": \" + str(self.plays)\n\nprint(Song(\"Stay\", 2000).describe())\n",
      check: { type: "output", expected: "Stay (2000 plays)" },
      hints: [
        "Only the `describe` return changes.",
        "Wrap the plays in parentheses.",
        "self.title + \" (\" + str(self.plays) + \" plays)\"",
      ],
      solution: "class Song:\n    def __init__(self, title, plays):\n        self.title = title\n        self.plays = plays\n    def describe(self):\n        return self.title + \" (\" + str(self.plays) + \" plays)\"\n\nprint(Song(\"Stay\", 2000).describe())\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: write a `Planet` class with `__init__(self, name, moons)` and a `describe(self)` method that returns `Saturn: 146 moons`. Make Saturn (146 moons) and print its description.",
      starter: "",
      check: { type: "output", expected: "Saturn: 146 moons" },
      hints: [
        "`__init__` stores name and moons.",
        "`describe` joins them with ` moons`.",
        "Make one Planet and describe it.",
      ],
      solution: "class Planet:\n    def __init__(self, name, moons):\n        self.name = name\n        self.moons = moons\n\n    def describe(self):\n        return self.name + \": \" + str(self.moons) + \" moons\"\n\nprint(Planet(\"Saturn\", 146).describe())\n",
    },
  ],
  codex: {
    topic: "classes & objects",
    pattern: "class Song:\n    def __init__(self, title):\n        self.title = title\n    def describe(self):\n        return self.title",
    note: "A class bundles data and behavior under one name. __init__ stores each instance's data on self; a method is a function that acts on self.",
  },
});

/* ── Lesson 6.2 — __init__ ───────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c6s2",
  chapter: 6,
  strand: "core",
  lang: "py",
  timeBudgetMin: 13,
  title: "__init__",
  glossary: {
    instance: "One object made from a class. Each instance has its own data on its own `self`, so two of them never share.",
  },
  content: [
    {
      type: "text",
      md: "`__init__` runs automatically the moment you make an [[instance]]. Its job is to store that instance's own data on `self`. Because each instance gets its own `self`, two of them never share — change one and the other is untouched.",
    },
    {
      type: "example",
      note: "Two creatures, each with its own hp.",
      code: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\nember = Creature(\"Ember\", 100)\nblaze = Creature(\"Blaze\", 50)\nprint(ember.hp)   # 100\nprint(blaze.hp)   # 50\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Two creatures from the same class. Predict both lines.",
      starter: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\nember = Creature(\"Ember\", 100)\nblaze = Creature(\"Blaze\", 50)\nprint(ember.name)\nprint(blaze.hp)\n",
      check: { type: "output", expected: "Ember\n50" },
      hints: [
        "Each has its own name and hp.",
        "`ember.name` then `blaze.hp`.",
        "Ember, then 50.",
      ],
      solution: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\nember = Creature(\"Ember\", 100)\nblaze = Creature(\"Blaze\", 50)\nprint(ember.name)\nprint(blaze.hp)\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This crashes with `AttributeError: 'Creature' object has no attribute 'hp'`. `__init__` takes `hp` but never stores it on `self`. Fix it so it prints `100`.",
      starter: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n\nember = Creature(\"Ember\", 100)\nprint(ember.hp)\n",
      check: { type: "output", expected: "100" },
      hints: [
        "`hp` arrives but is thrown away.",
        "Store it on `self`.",
        "self.hp = hp",
      ],
      solution: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\nember = Creature(\"Ember\", 100)\nprint(ember.hp)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: write a `Song` class with `__init__(self, title, plays)`. Make two songs — Stay (2000) and Levitating (2100) — and print each one's plays.",
      starter: "",
      check: { type: "output", expected: "2000\n2100" },
      hints: [
        "`__init__` stores title and plays.",
        "Make two songs.",
        "Print each `.plays`.",
      ],
      solution: "class Song:\n    def __init__(self, title, plays):\n        self.title = title\n        self.plays = plays\n\nstay = Song(\"Stay\", 2000)\nlevitating = Song(\"Levitating\", 2100)\nprint(stay.plays)\nprint(levitating.plays)\n",
    },
  ],
  codex: {
    topic: "__init__",
    pattern: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp",
    note: "__init__ runs when you make an instance and stores its data on self. Each instance is independent — its own self, its own data.",
  },
});

/* ── Lesson 6.3 — Methods & self ─────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c6s3",
  chapter: 6,
  strand: "core",
  lang: "py",
  timeBudgetMin: 16,
  title: "Methods & self",
  glossary: {
    self: "The first parameter of every method — the particular instance the method was called on. Not a keyword; just the name everyone agrees to use.",
  },
  content: [
    {
      type: "text",
      md: "A method is a function that belongs to the class and gets the instance as its first parameter, [[self]]. Some methods **change** the instance — `take_damage` lowers `self.hp`, the way `.append()` changes a list. Some only **report** on it — `is_alive` reads `self.hp` and returns True or False, changing nothing, the way `.upper()` reads a string. Know which kind you're writing before you write it.",
    },
    {
      type: "example",
      note: "take_damage changes the creature; is_alive only reads it.",
      code: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n    def take_damage(self, amount):\n        self.hp -= amount\n\n    def is_alive(self):\n        return self.hp > 0\n\nember = Creature(\"Ember\", 100)\nember.take_damage(90)\nprint(ember.hp)          # 10\nprint(ember.is_alive())  # True\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Trace `take_damage(90)`, then `is_alive()`. Predict both lines.",
      starter: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n    def take_damage(self, amount):\n        self.hp -= amount\n\n    def is_alive(self):\n        return self.hp > 0\n\nember = Creature(\"Ember\", 100)\nember.take_damage(90)\nprint(ember.hp)\nprint(ember.is_alive())\n",
      check: { type: "output", expected: "10\nTrue" },
      hints: [
        "100 - 90 = 10.",
        "10 > 0 is True.",
        "10, then True.",
      ],
      solution: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n    def take_damage(self, amount):\n        self.hp -= amount\n\n    def is_alive(self):\n        return self.hp > 0\n\nember = Creature(\"Ember\", 100)\nember.take_damage(90)\nprint(ember.hp)\nprint(ember.is_alive())\n",
    },
    {
      type: "text",
      md: "`self` is **not** a keyword — it's just the name everyone agrees to use for that first parameter. Rename it to `me` and the class runs exactly the same. Every Python programmer still writes `self`, for the same reason everyone drives on the same side of the road: nothing forces it, but code that breaks the convention is harder to read.",
    },
    {
      type: "exercise",
      rung: 3,
      prompt: "Prove `self` is just a name: rename every `self` in this class to `me` — the parameter in both methods and every `me.` inside them. Don't change what it does.",
      starter: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n    def roar(self):\n        return self.name + \" roars!\"\n\nember = Creature(\"Ember\", 100)\nprint(ember.roar())\n",
      check: { type: "output", expected: "Ember roars!" },
      hints: [
        "Rename `self` to `me` everywhere inside the class.",
        "Both the parameters and the `self.` uses.",
        "The call stays the same.",
      ],
      solution: "class Creature:\n    def __init__(me, name, hp):\n        me.name = name\n        me.hp = hp\n    def roar(me):\n        return me.name + \" roars!\"\n\nember = Creature(\"Ember\", 100)\nprint(ember.roar())\n",
    },
    {
      type: "text",
      md: "Forgetting `self` in a method gives a confusing crash. Say you write `roar()` with no parameters. When you call `ember.roar()`, Python still passes the instance in. So it complains it got one argument for a method that takes zero. Always give a method its `self`.",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This crashes with `TypeError: roar() takes 0 positional arguments but 1 was given`. The method forgot its `self` — Python passes `ember` in anyway. Fix the method definition so it prints `Roar!`.",
      starter: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n    def roar():\n        return \"Roar!\"\n\nember = Creature(\"Ember\", 100)\nprint(ember.roar())\n",
      check: { type: "output", expected: "Roar!" },
      hints: [
        "The method needs `self`.",
        "Every dot-call passes the instance in.",
        "def roar(self):",
      ],
      solution: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n    def roar(self):\n        return \"Roar!\"\n\nember = Creature(\"Ember\", 100)\nprint(ember.roar())\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: write a `Creature` class with `__init__(self, name, hp)`, `take_damage(self, amount)` that subtracts, and `heal(self, amount)` that adds. Make Slate with 100 hp, call `take_damage(30)` then `heal(20)`, and print the final hp.",
      starter: "",
      check: { type: "output", expected: "90" },
      hints: [
        "Two methods: one subtracts, one adds.",
        "100 - 30 + 20.",
        "90.",
      ],
      solution: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n    def take_damage(self, amount):\n        self.hp -= amount\n\n    def heal(self, amount):\n        self.hp += amount\n\nslate = Creature(\"Slate\", 100)\nslate.take_damage(30)\nslate.heal(20)\nprint(slate.hp)\n",
    },
  ],
  codex: {
    topic: "methods & self",
    pattern: "def take_damage(self, amount):\n    self.hp -= amount   # changes\ndef is_alive(self):\n    return self.hp > 0  # reports",
    note: "A method takes self (the instance) as its first parameter. Some methods change self; some only report on it. Forget self in the def and the call crashes.",
  },
});

/* ── Lesson 6.4 — Comparing & debugging objects ──────────────────────── */

window.CODELAB.lessons.push({
  id: "c6s4",
  chapter: 6,
  strand: "core",
  lang: "py",
  timeBudgetMin: 13,
  title: "Comparing & debugging objects",
  glossary: {
    aliasing: "When two names point at the same object, so changing it through one name changes it for both. Assigning one name to another (storm = blaze) never makes a copy.",
  },
  content: [
    {
      type: "text",
      md: "The [[aliasing]] trap from lists applies to objects too. `storm = blaze` does **not** make a second creature — there's no `Creature(...)` on the right side, just an existing name. `storm` becomes a second label on the one creature `blaze` already names. Change one, and \"both\" change, because they're the same object.",
    },
    {
      type: "example",
      note: "No new creature is made — storm and blaze are the same one.",
      code: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\nblaze = Creature(\"Blaze\", 100)\nstorm = blaze        # same object, not a copy\nstorm.hp = 50\nprint(blaze.hp)      # 50\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Does `storm = blaze` copy the creature or point at it? Predict the output.",
      starter: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\nblaze = Creature(\"Blaze\", 100)\nstorm = blaze\nstorm.hp = 50\nprint(blaze.hp)\n",
      check: { type: "output", expected: "50" },
      hints: [
        "No new `Creature(...)` was made.",
        "They're the same object.",
        "50.",
      ],
      solution: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\nblaze = Creature(\"Blaze\", 100)\nstorm = blaze\nstorm.hp = 50\nprint(blaze.hp)\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This should make two separate creatures, but `storm = blaze` makes them the same one — so damaging storm also damages blaze. Fix it so `storm` is its own creature (name 'Storm', 100 hp), leaving blaze at `100`.",
      starter: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n    def take_damage(self, amount):\n        self.hp -= amount\n\nblaze = Creature(\"Blaze\", 100)\nstorm = blaze\nstorm.take_damage(50)\nprint(blaze.hp)\n",
      check: { type: "output", expected: "100" },
      hints: [
        "`storm = blaze` shares one object.",
        "Make a real new one.",
        "storm = Creature(\"Storm\", 100)",
      ],
      solution: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n    def take_damage(self, amount):\n        self.hp -= amount\n\nblaze = Creature(\"Blaze\", 100)\nstorm = Creature(\"Storm\", 100)\nstorm.take_damage(50)\nprint(blaze.hp)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: write a `Creature` class with `__init__` and `take_damage`. Make two separate creatures, Ember (100) and Blaze (100). Damage only Ember by 40. Print both hp, Ember first, to prove they're independent.",
      starter: "",
      check: { type: "output", expected: "60\n100" },
      hints: [
        "Two separate `Creature(...)` calls.",
        "Damage only Ember.",
        "60, then 100.",
      ],
      solution: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n    def take_damage(self, amount):\n        self.hp -= amount\n\nember = Creature(\"Ember\", 100)\nblaze = Creature(\"Blaze\", 100)\nember.take_damage(40)\nprint(ember.hp)\nprint(blaze.hp)\n",
    },
  ],
  codex: {
    topic: "aliasing objects",
    pattern: "storm = blaze          # SAME object\nstorm = Creature(...)  # a NEW object",
    note: "Assigning one name to another shares one object — no copy. To get a separate instance, call the class again with Creature(...).",
  },
});

/* ── Lesson 6.5 — Collections of objects ─────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c6s5",
  chapter: 6,
  strand: "sound",
  lang: "py",
  timeBudgetMin: 14,
  title: "Collections of objects",
  content: [
    {
      type: "text",
      md: "Objects go in lists like anything else, and a loop visits each one. Now Chapter 4's lists and Chapter 6's objects combine: a squad of creatures, a playlist of songs.",
    },
    {
      type: "example",
      note: "A list of creatures, looped by name.",
      code: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\nsquad = [Creature(\"Ember\", 100), Creature(\"Blaze\", 80), Creature(\"Slate\", 60)]\nfor c in squad:\n    print(c.name)\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Predict the three lines.",
      starter: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\nsquad = [Creature(\"Ember\", 100), Creature(\"Blaze\", 80), Creature(\"Slate\", 60)]\nfor c in squad:\n    print(c.name, c.hp)\n",
      check: { type: "output", expected: "Ember 100\nBlaze 80\nSlate 60" },
      hints: [
        "Loop prints each creature's name and hp.",
        "Three creatures.",
        "Ember 100, Blaze 80, Slate 60.",
      ],
      solution: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\nsquad = [Creature(\"Ember\", 100), Creature(\"Blaze\", 80), Creature(\"Slate\", 60)]\nfor c in squad:\n    print(c.name, c.hp)\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete `total_hp(squad)` so it adds up every creature's hp.",
      starter: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\ndef total_hp(squad):\n    total = 0\n    # loop the squad, add each creature's hp\n    return total\n\nsquad = [Creature(\"Ember\", 100), Creature(\"Blaze\", 80), Creature(\"Slate\", 60)]\nprint(total_hp(squad))\n",
      check: { type: "output", expected: "240" },
      hints: [
        "Loop the list of creatures.",
        "Add `c.hp` each time.",
        "100 + 80 + 60 = 240.",
      ],
      solution: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\ndef total_hp(squad):\n    total = 0\n    for c in squad:\n        total += c.hp\n    return total\n\nsquad = [Creature(\"Ember\", 100), Creature(\"Blaze\", 80), Creature(\"Slate\", 60)]\nprint(total_hp(squad))\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: write a `Song` class with `__init__(self, title, plays)`. Make a list of three songs — Blinding Lights (4300), Stay (2000), Sunflower (2200) — then loop to find and print the title with the most plays.",
      starter: "",
      check: { type: "output", expected: "Blinding Lights" },
      hints: [
        "Start `best` as the first song.",
        "Keep the one with more plays.",
        "Blinding Lights wins.",
      ],
      solution: "class Song:\n    def __init__(self, title, plays):\n        self.title = title\n        self.plays = plays\n\nsongs = [Song(\"Blinding Lights\", 4300), Song(\"Stay\", 2000), Song(\"Sunflower\", 2200)]\nbest = songs[0]\nfor s in songs:\n    if s.plays > best.plays:\n        best = s\nprint(best.title)\n",
    },
  ],
  codex: {
    topic: "collections of objects",
    pattern: "squad = [Creature(\"Ember\", 100), ...]\nfor c in squad:\n    total += c.hp",
    note: "Objects go in lists like any value. Loop the list and read each one's attributes with c.attr — lists (Ch4) and objects (Ch6) working together.",
  },
});

/* ── Lesson 6.6 — A class that owns its data ─────────────────────────── */

window.CODELAB.lessons.push({
  id: "c6s6",
  chapter: 6,
  strand: "data",
  lang: "py",
  timeBudgetMin: 15,
  title: "A class that owns its data",
  content: [
    {
      type: "text",
      md: "So far each object held a little data — a creature's hp, a note's pitch. An object can just as easily hold a whole *dataset*, and the methods that analyze and chart it live right there beside it. The object becomes the analyst: it owns the numbers and knows what to do with them.",
    },
    {
      type: "example",
      note: "A Playlist owns its songs and can total and rank them itself.",
      code: "class Playlist:\n    def __init__(self, titles, bpm, plays):\n        self.titles = titles\n        self.bpm = bpm\n        self.plays = plays\n\n    def total_plays(self):\n        return sum(self.plays)\n\n    def top_song(self):\n        best = 0\n        for i in range(len(self.plays)):\n            if self.plays[i] > self.plays[best]:\n                best = i\n        return self.titles[best]\n\nmixtape = Playlist([\"Stay\", \"Blinding Lights\", \"Sunflower\"], [170, 171, 90], [2000, 4300, 2200])\nprint(mixtape.total_plays())   # 8500\nprint(mixtape.top_song())      # Blinding Lights\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Trace `total_plays` and `top_song` on this playlist. Predict both lines.",
      starter: "class Playlist:\n    def __init__(self, titles, bpm, plays):\n        self.titles = titles\n        self.bpm = bpm\n        self.plays = plays\n\n    def total_plays(self):\n        return sum(self.plays)\n\n    def top_song(self):\n        best = 0\n        for i in range(len(self.plays)):\n            if self.plays[i] > self.plays[best]:\n                best = i\n        return self.titles[best]\n\nmixtape = Playlist([\"Stay\", \"Blinding Lights\", \"Sunflower\"], [170, 171, 90], [2000, 4300, 2200])\nprint(mixtape.total_plays())\nprint(mixtape.top_song())\n",
      check: { type: "output", expected: "8500\nBlinding Lights" },
      hints: [
        "Sum the three play counts.",
        "The biggest is 4300.",
        "8500, then Blinding Lights.",
      ],
      solution: "class Playlist:\n    def __init__(self, titles, bpm, plays):\n        self.titles = titles\n        self.bpm = bpm\n        self.plays = plays\n\n    def total_plays(self):\n        return sum(self.plays)\n\n    def top_song(self):\n        best = 0\n        for i in range(len(self.plays)):\n            if self.plays[i] > self.plays[best]:\n                best = i\n        return self.titles[best]\n\nmixtape = Playlist([\"Stay\", \"Blinding Lights\", \"Sunflower\"], [170, 171, 90], [2000, 4300, 2200])\nprint(mixtape.total_plays())\nprint(mixtape.top_song())\n",
    },
    {
      type: "text",
      md: "Because the object owns its data, a chart method needs no arguments — `chart()` reads `self.titles` and `self.plays` and hands them to `bar()` from Chapter 4. The picture lives with the data it draws.",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete the `chart` method so it bars the playlist's titles against its plays. It reads its own data — no parameters.",
      starter: "class Playlist:\n    def __init__(self, titles, bpm, plays):\n        self.titles = titles\n        self.bpm = bpm\n        self.plays = plays\n    def chart(self):\n        pass  # bar the titles against the plays\n\nmixtape = Playlist([\"Levitating\",\"Blinding Lights\",\"As It Was\",\"Bad Guy\",\"Watermelon Sugar\",\"Shape of You\",\"Uptown Funk\",\"Someone You Loved\"], [103,171,174,135,95,96,115,110], [2100,4300,3100,2600,1900,3600,2400,2800])\nmixtape.chart()\n",
      check: { type: "calls", calls: [{ fn: "bar" }] },
      hints: [
        "Use `self.titles` and `self.plays`.",
        "`bar(labels, values)` from Chapter 4.",
        "bar(self.titles, self.plays)",
      ],
      solution: "class Playlist:\n    def __init__(self, titles, bpm, plays):\n        self.titles = titles\n        self.bpm = bpm\n        self.plays = plays\n    def chart(self):\n        bar(self.titles, self.plays)\n\nmixtape = Playlist([\"Levitating\",\"Blinding Lights\",\"As It Was\",\"Bad Guy\",\"Watermelon Sugar\",\"Shape of You\",\"Uptown Funk\",\"Someone You Loved\"], [103,171,174,135,95,96,115,110], [2100,4300,3100,2600,1900,3600,2400,2800])\nmixtape.chart()\n",
    },
    {
      type: "text",
      md: "A method can chart a *relationship*, too. `relate()` draws a dot plot of BPM against plays — points only, since the songs aren't in any order — so you can see whether faster songs tend to get more plays.",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete the `relate` method so it dot-plots the playlist's BPM against its plays — the 'do faster songs get more plays?' picture.",
      starter: "class Playlist:\n    def __init__(self, titles, bpm, plays):\n        self.titles = titles\n        self.bpm = bpm\n        self.plays = plays\n    def relate(self):\n        pass  # dotplot bpm against plays\n\nmixtape = Playlist([\"Levitating\",\"Blinding Lights\",\"As It Was\",\"Bad Guy\",\"Watermelon Sugar\",\"Shape of You\",\"Uptown Funk\",\"Someone You Loved\"], [103,171,174,135,95,96,115,110], [2100,4300,3100,2600,1900,3600,2400,2800])\nmixtape.relate()\n",
      check: { type: "calls", calls: [{ fn: "dotplot" }] },
      hints: [
        "Two paired measurements, no order → a dot plot.",
        "Use `self.bpm` and `self.plays`.",
        "dotplot(self.bpm, self.plays)",
      ],
      solution: "class Playlist:\n    def __init__(self, titles, bpm, plays):\n        self.titles = titles\n        self.bpm = bpm\n        self.plays = plays\n    def relate(self):\n        dotplot(self.bpm, self.plays)\n\nmixtape = Playlist([\"Levitating\",\"Blinding Lights\",\"As It Was\",\"Bad Guy\",\"Watermelon Sugar\",\"Shape of You\",\"Uptown Funk\",\"Someone You Loved\"], [103,171,174,135,95,96,115,110], [2100,4300,3100,2600,1900,3600,2400,2800])\nmixtape.relate()\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: write a `Playlist` class with `__init__(self, titles, plays)`, `total_plays(self)` (returns the sum), `top_song(self)` (returns the most-played title), and `chart(self)` (bars titles against plays). Build it with the whole 12-song playlist below, print the total and the top song, then chart it.\n`titles = [\"Levitating\",\"Blinding Lights\",\"As It Was\",\"Bad Guy\",\"Watermelon Sugar\",\"Shape of You\",\"Uptown Funk\",\"Someone You Loved\",\"Dance Monkey\",\"Sunflower\",\"Stay\",\"Heat Waves\"]`\n`plays = [2100,4300,3100,2600,1900,3600,2400,2800,2500,2200,2000,1800]`",
      starter: "",
      check: { type: "output", expected: "31300\nBlinding Lights" },
      hints: [
        "The class stores the two lists and has three methods.",
        "`total_plays` sums; `top_song` tracks the best index; `chart` bars.",
        "Total 31300, top Blinding Lights.",
      ],
      solution: "class Playlist:\n    def __init__(self, titles, plays):\n        self.titles = titles\n        self.plays = plays\n\n    def total_plays(self):\n        return sum(self.plays)\n\n    def top_song(self):\n        best = 0\n        for i in range(len(self.plays)):\n            if self.plays[i] > self.plays[best]:\n                best = i\n        return self.titles[best]\n\n    def chart(self):\n        bar(self.titles, self.plays)\n\ntitles = [\"Levitating\",\"Blinding Lights\",\"As It Was\",\"Bad Guy\",\"Watermelon Sugar\",\"Shape of You\",\"Uptown Funk\",\"Someone You Loved\",\"Dance Monkey\",\"Sunflower\",\"Stay\",\"Heat Waves\"]\nplays = [2100,4300,3100,2600,1900,3600,2400,2800,2500,2200,2000,1800]\n\nmix = Playlist(titles, plays)\nprint(mix.total_plays())\nprint(mix.top_song())\nmix.chart()\n",
    },
  ],
  codex: {
    topic: "a class that owns its data",
    pattern: "class Playlist:\n    def __init__(self, titles, plays): ...\n    def total_plays(self): return sum(self.plays)\n    def chart(self): bar(self.titles, self.plays)",
    note: "An object can hold a whole dataset, with analyze- and chart-methods beside it. Because it owns the data, those methods need no arguments — they read self.",
  },
});

/* ── Lesson 6.7 — A Note class ───────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c6s7",
  chapter: 6,
  strand: "sound",
  lang: "py",
  timeBudgetMin: 13,
  title: "A Note class",
  content: [
    {
      type: "text",
      md: "A note bundles a pitch and a duration, and it can play itself. A melody is then just a list of `Note` objects — everything from the collections lesson applies.",
    },
    {
      type: "example",
      note: "A Note that plays its own pitch for its own duration.",
      code: "class Note:\n    def __init__(self, pitch, duration):\n        self.pitch = pitch\n        self.duration = duration\n\n    def play_it(self):\n        play(self.pitch)\n        sleep(self.duration)\n\nNote(60, 0.5).play_it()\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "A melody as a list of Notes, looped. Predict the notes that play (as a sequence of pitches).",
      starter: "class Note:\n    def __init__(self, pitch, duration):\n        self.pitch = pitch\n        self.duration = duration\n\n    def play_it(self):\n        play(self.pitch)\n        sleep(self.duration)\n\nmelody = [Note(60, 0.4), Note(64, 0.4), Note(67, 0.4)]\nfor n in melody:\n    n.play_it()\n",
      check: {
        type: "calls",
        calls: [
          { fn: "play", note: 60 },
          { fn: "play", note: 64 },
          { fn: "play", note: 67 },
        ],
      },
      hints: [
        "Each Note plays its own pitch.",
        "60, 64, 67 in order.",
        "A C major chord, one note at a time.",
      ],
      solution: "class Note:\n    def __init__(self, pitch, duration):\n        self.pitch = pitch\n        self.duration = duration\n\n    def play_it(self):\n        play(self.pitch)\n        sleep(self.duration)\n\nmelody = [Note(60, 0.4), Note(64, 0.4), Note(67, 0.4)]\nfor n in melody:\n    n.play_it()\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete `play_it(self)` so it plays the note's pitch, then sleeps its duration.",
      starter: "class Note:\n    def __init__(self, pitch, duration):\n        self.pitch = pitch\n        self.duration = duration\n    def play_it(self):\n        pass  # play the pitch, then sleep the duration\n\nNote(67, 0.5).play_it()\n",
      check: { type: "calls", calls: [{ fn: "play", note: 67 }] },
      hints: [
        "Use `self.pitch` and `self.duration`.",
        "Play, then sleep.",
        "play(self.pitch) then sleep(self.duration).",
      ],
      solution: "class Note:\n    def __init__(self, pitch, duration):\n        self.pitch = pitch\n        self.duration = duration\n    def play_it(self):\n        play(self.pitch)\n        sleep(self.duration)\n\nNote(67, 0.5).play_it()\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: write a `Note` class with `__init__(self, pitch, duration)` and `play_it(self)`. Build the opening of Twinkle as Notes — pitches 60, 60, 67, 67, 69, 69, 67, all duration 0.4 — in a list, and loop to play them.",
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
        ],
      },
      hints: [
        "Seven Notes in a list.",
        "All duration 0.4.",
        "Loop and call `play_it()`.",
      ],
      solution: "class Note:\n    def __init__(self, pitch, duration):\n        self.pitch = pitch\n        self.duration = duration\n\n    def play_it(self):\n        play(self.pitch)\n        sleep(self.duration)\n\nmelody = [Note(60, 0.4), Note(60, 0.4), Note(67, 0.4), Note(67, 0.4), Note(69, 0.4), Note(69, 0.4), Note(67, 0.4)]\nfor n in melody:\n    n.play_it()\n",
    },
  ],
  codex: {
    topic: "a Note class",
    pattern: "class Note:\n    def __init__(self, pitch, duration): ...\n    def play_it(self):\n        play(self.pitch); sleep(self.duration)",
    note: "A Note bundles a pitch and duration and plays itself. A melody is a list of Notes — loop it and call play_it() on each.",
  },
});

/* ── Lesson 6.8 — A drawing class ────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c6s8",
  chapter: 6,
  strand: "plot",
  lang: "py",
  timeBudgetMin: 15,
  title: "A drawing class",
  glossary: {
    "silent bug": "A bug that doesn't crash — the program runs, but the result is quietly wrong. Here: a spiral whose sides never grow because the growth line is missing.",
  },
  content: [
    {
      type: "text",
      md: "An object can **remember** state across calls. A `Spiral` holds its current size. Each `step()` draws one side and then grows the size, so the next side is longer. That memory is what a plain function's locals can't do.",
    },
    {
      type: "example",
      note: "Each step() draws a side and grows — so the spiral coils outward.",
      code: "class Spiral:\n    def __init__(self, size, angle):\n        self.size = size\n        self.angle = angle\n\n    def step(self):\n        forward(self.size)\n        right(self.angle)\n        self.size += 5\n\ns = Spiral(20, 90)\nfor i in range(4):\n    s.step()\nprint(s.size)   # 40\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "`step()` runs 4 times, growing `self.size` by 5 each time. Predict the final printed size.",
      starter: "class Spiral:\n    def __init__(self, size, angle):\n        self.size = size\n        self.angle = angle\n\n    def step(self):\n        forward(self.size)\n        right(self.angle)\n        self.size += 5\n\ns = Spiral(20, 90)\nfor i in range(4):\n    s.step()\nprint(s.size)\n",
      check: { type: "output", expected: "40" },
      hints: [
        "Starts at 20, grows by 5 four times.",
        "20 + 20.",
        "40.",
      ],
      solution: "class Spiral:\n    def __init__(self, size, angle):\n        self.size = size\n        self.angle = angle\n\n    def step(self):\n        forward(self.size)\n        right(self.angle)\n        self.size += 5\n\ns = Spiral(20, 90)\nfor i in range(4):\n    s.step()\nprint(s.size)\n",
    },
    {
      type: "text",
      md: "Forgetting the growth line is a [[silent bug]] — the category from Chapter 5. Nothing crashes: `forward` and `right` still fire every time. The only symptom is that every side is the same length, so a shape meant to grow just draws a plain repeating polygon.",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "Every side of this spiral comes out the same length — it never grows. `step()` draws correctly but forgot to grow `self.size` afterward. Add that line so the sides go 20, 25, 30.",
      starter: "class Spiral:\n    def __init__(self, size, angle):\n        self.size = size\n        self.angle = angle\n    def step(self):\n        forward(self.size)\n        right(self.angle)\n\ns = Spiral(20, 90)\ns.step()\ns.step()\ns.step()\n",
      check: {
        type: "calls",
        calls: [
          { fn: "forward", val: 20 }, { fn: "right", val: 90 },
          { fn: "forward", val: 25 }, { fn: "right", val: 90 },
          { fn: "forward", val: 30 }, { fn: "right", val: 90 },
        ],
      },
      hints: [
        "No crash — just no growth.",
        "Grow `self.size` after drawing.",
        "self.size += 5",
      ],
      solution: "class Spiral:\n    def __init__(self, size, angle):\n        self.size = size\n        self.angle = angle\n    def step(self):\n        forward(self.size)\n        right(self.angle)\n        self.size += 5\n\ns = Spiral(20, 90)\ns.step()\ns.step()\ns.step()\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: write the `Spiral` class (`__init__(self, size, angle)`; `step(self)` draws `forward(self.size)`, `right(self.angle)`, then grows `self.size` by 5). Make `square_spiral = Spiral(15, 90)` and `star_spiral = Spiral(15, 144)`, and call `step()` 12 times on each so they coil out.",
      starter: "",
      check: {
        type: "calls",
        calls: [
          { fn: "forward", val: 15 }, { fn: "right", val: 90 },
          { fn: "forward", val: 20 }, { fn: "right", val: 90 },
          { fn: "forward", val: 25 }, { fn: "right", val: 90 },
          { fn: "forward", val: 30 }, { fn: "right", val: 90 },
          { fn: "forward", val: 35 }, { fn: "right", val: 90 },
          { fn: "forward", val: 40 }, { fn: "right", val: 90 },
          { fn: "forward", val: 45 }, { fn: "right", val: 90 },
          { fn: "forward", val: 50 }, { fn: "right", val: 90 },
          { fn: "forward", val: 55 }, { fn: "right", val: 90 },
          { fn: "forward", val: 60 }, { fn: "right", val: 90 },
          { fn: "forward", val: 65 }, { fn: "right", val: 90 },
          { fn: "forward", val: 70 }, { fn: "right", val: 90 },
          { fn: "forward", val: 15 }, { fn: "right", val: 144 },
          { fn: "forward", val: 20 }, { fn: "right", val: 144 },
          { fn: "forward", val: 25 }, { fn: "right", val: 144 },
          { fn: "forward", val: 30 }, { fn: "right", val: 144 },
          { fn: "forward", val: 35 }, { fn: "right", val: 144 },
          { fn: "forward", val: 40 }, { fn: "right", val: 144 },
          { fn: "forward", val: 45 }, { fn: "right", val: 144 },
          { fn: "forward", val: 50 }, { fn: "right", val: 144 },
          { fn: "forward", val: 55 }, { fn: "right", val: 144 },
          { fn: "forward", val: 60 }, { fn: "right", val: 144 },
          { fn: "forward", val: 65 }, { fn: "right", val: 144 },
          { fn: "forward", val: 70 }, { fn: "right", val: 144 },
        ],
      },
      hints: [
        "One class, two instances with different angles.",
        "Each remembers its own size.",
        "Loop `step()` 12 times on each.",
      ],
      solution: "class Spiral:\n    def __init__(self, size, angle):\n        self.size = size\n        self.angle = angle\n\n    def step(self):\n        forward(self.size)\n        right(self.angle)\n        self.size += 5\n\nsquare_spiral = Spiral(15, 90)\nstar_spiral = Spiral(15, 144)\nfor i in range(12):\n    square_spiral.step()\nfor i in range(12):\n    star_spiral.step()\n",
    },
  ],
  codex: {
    topic: "a drawing class",
    pattern: "class Spiral:\n    def __init__(self, size, angle): ...\n    def step(self):\n        forward(self.size); right(self.angle)\n        self.size += 5   # remembers, grows",
    note: "An object remembers state between calls — a Spiral's size grows each step. Drop the growth line and it's a silent bug: no crash, just a shape that never grows.",
  },
});

/* ── Lesson 6.9 — Finale: the synth band (cumulative) ────────────────── */

window.CODELAB.lessons.push({
  id: "c6s9",
  chapter: 6,
  strand: "sound",
  lang: "py",
  timeBudgetMin: 18,
  title: "Finale: the synth band",
  content: [
    {
      type: "text",
      md: "A `Synth` bundles a name and a root note — the same shape `Creature` used for name and hp, in a new domain. Its `play_note` method doesn't change an attribute and doesn't return a value. Its whole job is to *make a sound happen*. Not every method mutates or reports — some just do. Two synths playing together is a duet; a list of them is a band, driven by a function and a loop from earlier chapters. Read the worked example, then build three of your own.",
    },
    {
      type: "example",
      note: "One synth voice plays Twinkle's opening — root 60, intervals over the melody.",
      code: "class Synth:\n    def __init__(self, name, root):\n        self.name = name\n        self.root = root\n\n    def play_note(self, interval, duration):\n        play(self.root + interval)\n        sleep(duration)\n\nlead = Synth(\"Lead\", 60)\nfor interval in [0, 0, 7, 7, 9, 9, 7]:\n    lead.play_note(interval, 0.4)\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Two voices interleaved: `lead` (root 60) plays interval 0, then `bass` (root 36) plays interval 0; then lead plays 7, bass plays 0. Predict the four pitches that play.",
      starter: "class Synth:\n    def __init__(self, name, root):\n        self.name = name\n        self.root = root\n\n    def play_note(self, interval, duration):\n        play(self.root + interval)\n        sleep(duration)\n\nlead = Synth(\"Lead\", 60)\nbass = Synth(\"Bass\", 36)\nfor interval in [0, 7]:\n    lead.play_note(interval, 0.4)\n    bass.play_note(0, 0.4)\n",
      check: {
        type: "calls",
        calls: [
          { fn: "play", note: 60 },
          { fn: "play", note: 36 },
          { fn: "play", note: 67 },
          { fn: "play", note: 36 },
        ],
      },
      hints: [
        "Lead adds the interval to 60; bass always plays 36.",
        "0 and 7 for lead.",
        "60, 36, 67, 36.",
      ],
      solution: "class Synth:\n    def __init__(self, name, root):\n        self.name = name\n        self.root = root\n\n    def play_note(self, interval, duration):\n        play(self.root + interval)\n        sleep(duration)\n\nlead = Synth(\"Lead\", 60)\nbass = Synth(\"Bass\", 36)\nfor interval in [0, 7]:\n    lead.play_note(interval, 0.4)\n    bass.play_note(0, 0.4)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: write a `Synth` class (`__init__(self, name, root)`; `play_note(self, interval, duration)` plays `root + interval` and sleeps). Make `lead = Synth('Lead', 60)` and play the chord intervals `[0, 4, 7]` with duration 0.4.",
      starter: "",
      check: {
        type: "calls",
        calls: [
          { fn: "play", note: 60 },
          { fn: "play", note: 64 },
          { fn: "play", note: 67 },
        ],
      },
      hints: [
        "`play_note` plays `self.root + interval`.",
        "Loop the three intervals.",
        "60, 64, 67.",
      ],
      solution: "class Synth:\n    def __init__(self, name, root):\n        self.name = name\n        self.root = root\n\n    def play_note(self, interval, duration):\n        play(self.root + interval)\n        sleep(duration)\n\nlead = Synth(\"Lead\", 60)\nfor interval in [0, 4, 7]:\n    lead.play_note(interval, 0.4)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch: same `Synth` class. Make `lead = Synth('Lead', 60)` and `bass = Synth('Bass', 36)`. For each interval in `[0, 7]`, have lead play the interval, then bass play 0 (duration 0.4). Two real, independent voices.",
      starter: "",
      check: {
        type: "calls",
        calls: [
          { fn: "play", note: 60 },
          { fn: "play", note: 36 },
          { fn: "play", note: 67 },
          { fn: "play", note: 36 },
        ],
      },
      hints: [
        "Two separate `Synth(...)` calls — not `bass = lead`.",
        "Lead plays the interval, bass plays 0.",
        "60, 36, 67, 36.",
      ],
      solution: "class Synth:\n    def __init__(self, name, root):\n        self.name = name\n        self.root = root\n\n    def play_note(self, interval, duration):\n        play(self.root + interval)\n        sleep(duration)\n\nlead = Synth(\"Lead\", 60)\nbass = Synth(\"Bass\", 36)\nfor interval in [0, 7]:\n    lead.play_note(interval, 0.4)\n    bass.play_note(0, 0.4)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "From scratch — the whole course in one program. Same `Synth` class. Make a band as a list of three synths — `Synth('Lead', 60)`, `Synth('Harmony', 64)`, `Synth('Bass', 36)`. Write a function `hit(band, interval)` that loops the band and has every synth play that interval (duration 0.4). Call `hit(band, 0)`, then `hit(band, 7)`.",
      starter: "",
      check: {
        type: "calls",
        calls: [
          { fn: "play", note: 60 },
          { fn: "play", note: 64 },
          { fn: "play", note: 36 },
          { fn: "play", note: 67 },
          { fn: "play", note: 71 },
          { fn: "play", note: 43 },
        ],
      },
      hints: [
        "A class (Ch6), a list of objects (Ch4), a function (Ch3), a loop (Ch2).",
        "`hit` loops the band and plays the interval on each.",
        "hit(0): 60, 64, 36; hit(7): 67, 71, 43.",
      ],
      solution: "class Synth:\n    def __init__(self, name, root):\n        self.name = name\n        self.root = root\n\n    def play_note(self, interval, duration):\n        play(self.root + interval)\n        sleep(duration)\n\nband = [Synth(\"Lead\", 60), Synth(\"Harmony\", 64), Synth(\"Bass\", 36)]\n\ndef hit(band, interval):\n    for s in band:\n        s.play_note(interval, 0.4)\n\nhit(band, 0)\nhit(band, 7)\n",
    },
  ],
  codex: {
    topic: "the synth band",
    pattern: "band = [Synth(\"Lead\", 60), ...]   # list of objects\ndef hit(band, interval):          # a function\n    for s in band: s.play_note(interval, 0.4)",
    note: "The whole course at once: a class holding data and behavior, a list of those objects, a function over the list, a loop driving it, and play() making the sound.",
  },
});
