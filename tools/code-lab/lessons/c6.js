/* Chapter 6 — Classes and Objects
   Lessons: c6s1 Objects Bundle Data and Behavior · c6s2 __init__ and
   Independent Instances · c6s3 Methods and self · c6s4 Comparing and
   Debugging Instances · c6s5 Instances With Collections · c6s6 A Note Class
   · c6s7 A Drawing Class · c6s8 A Synth Duet (checkpoint)

   Hard cap: attributes, methods, instances. No inheritance anywhere in this
   course. Approved via a 5-reviewer curriculum audit (Downey, Resnick,
   Severance, Guzdial, Ko lenses); see CURRICULUM.md Chapter 6 for the full
   table and rationale. One consistent Creature class runs through 6.1-6.5,
   per the audit's recommendation to avoid a mid-chapter class swap. */

/* ── Lesson 6.1 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c6s1",
  chapter: 6,
  strand: "core",
  lang: "py",
  timeBudgetMin: 20,
  title: "Objects Bundle Data and Behavior",
  glossary: {
    class: "A blueprint for making objects — it names the kind of thing you're creating, before any specific one exists.",
    instance: "One specific object made from a class. Two instances of the same class are separate things with their own attribute values.",
    attribute: "A named piece of data attached to one specific object, read and written with a dot: object.attribute.",
  },
  content: [
    {
      type: "text",
      md: "**You already know how to bundle related data.** Lesson 4.5 used a dictionary to group a creature's facts under one name: `creature = {\"name\": \"Blaze\", \"hp\": 100}`. That still works fine. But a dictionary can only hold data — it can't also hold an action that belongs to that specific creature, like *roar* or *heal*. For that, you need a **[[class]]**: a blueprint that bundles data **and** the actions that act on it, in one place.",
    },
    {
      type: "text",
      md: "**A class is a blueprint; an [[instance]] is a made thing.** Think of a cookie cutter and a cookie. The cutter (the class) is one shape, defined once. Every cookie (an instance) is a separate, real thing stamped out from that shape. You can make as many cookies as you want from one cutter, and eating one doesn't touch the others.",
    },
    {
      type: "example",
      note: "Same data, two ways. The dictionary version and the class version print the exact same thing — dot notation and bracket notation are both just \"look up a named value.\"",
      code: "# As a dictionary:\ncreature_dict = {\"name\": \"Blaze\", \"hp\": 100}\nprint(creature_dict[\"name\"])\n\n# As a class:\nclass Creature:\n    pass\n\nblaze = Creature()\nblaze.name = \"Blaze\"\nblaze.hp = 100\nprint(blaze.name)\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Trace both versions above. Predict the two printed lines.",
      starter: "creature_dict = {\"name\": \"Blaze\", \"hp\": 100}\nprint(creature_dict[\"name\"])\n\nclass Creature:\n    pass\n\nblaze = Creature()\nblaze.name = \"Blaze\"\nblaze.hp = 100\nprint(blaze.name)\n",
      check: { type: "output", expected: "Blaze\nBlaze" },
      hints: [
        "creature_dict[\"name\"] looks up the value stored under the key \"name\".",
        "blaze.name looks up the value stored in the attribute called name — same job, different syntax.",
        "Both were set to \"Blaze\", so both lines print Blaze.",
      ],
      solution: "creature_dict = {\"name\": \"Blaze\", \"hp\": 100}\nprint(creature_dict[\"name\"])\n\nclass Creature:\n    pass\n\nblaze = Creature()\nblaze.name = \"Blaze\"\nblaze.hp = 100\nprint(blaze.name)\n",
    },
    {
      type: "text",
      md: "**`class Creature: pass` makes an empty blueprint.** `pass` just means \"no body yet\" — Python requires *something* inside a block, and `pass` is a placeholder that does nothing. `blaze = Creature()` makes one actual [[instance]] from that blueprint. At that moment `blaze` has no attributes at all — the next two lines create them, one at a time, by assigning to `blaze.name` and `blaze.hp`. This is exactly like assigning to a new dictionary key: the attribute didn't exist before the assignment line ran, and it does after.",
    },
    {
      type: "example",
      note: "Two creatures, each set up by hand, one attribute at a time. Notice how much gets repeated for every new creature.",
      code: "class Creature:\n    pass\n\nblaze = Creature()\nblaze.name = \"Blaze\"\nblaze.hp = 100\n\nstorm = Creature()\nstorm.name = \"Storm\"\nstorm.hp = 80\n\nprint(blaze.name, blaze.hp)\nprint(storm.name, storm.hp)\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Trace both creatures being built and printed. Predict the two printed lines.",
      starter: "class Creature:\n    pass\n\nblaze = Creature()\nblaze.name = \"Blaze\"\nblaze.hp = 100\n\nstorm = Creature()\nstorm.name = \"Storm\"\nstorm.hp = 80\n\nprint(blaze.name, blaze.hp)\nprint(storm.name, storm.hp)\n",
      check: { type: "output", expected: "Blaze 100\nStorm 80" },
      hints: [
        "blaze and storm are two separate Creature instances, each built with its own three lines.",
        "print(blaze.name, blaze.hp) reads blaze's own attributes, not storm's.",
        "First line: Blaze 100. Second line: Storm 80.",
      ],
      solution: "class Creature:\n    pass\n\nblaze = Creature()\nblaze.name = \"Blaze\"\nblaze.hp = 100\n\nstorm = Creature()\nstorm.name = \"Storm\"\nstorm.hp = 80\n\nprint(blaze.name, blaze.hp)\nprint(storm.name, storm.hp)\n",
    },
    {
      type: "text",
      md: "**Attribute names are exact — Python won't guess what you meant.** `blaze.name` and `blaze.Name` are two completely different attributes, the same way `score` and `Score` would be two different variables. If you set `blaze.name` but read `blaze.Name`, Python raises `AttributeError` — it does not know they're \"supposed\" to be the same thing.",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This crashes with `AttributeError: 'Creature' object has no attribute 'Name'`. The attribute was set as `blaze.name` (lowercase) but read as `blaze.Name` (capital N). Fix the read so it matches.",
      starter: "class Creature:\n    pass\n\nblaze = Creature()\nblaze.name = \"Blaze\"\nblaze.hp = 100\n\nprint(blaze.Name, blaze.hp)\n",
      check: { type: "output", expected: "Blaze 100" },
      hints: [
        "blaze.name and blaze.Name are different attributes to Python — capitalization matters.",
        "Only blaze.name was ever set. blaze.Name was never created, so reading it crashes.",
        "Change blaze.Name to blaze.name.",
      ],
      solution: "class Creature:\n    pass\n\nblaze = Creature()\nblaze.name = \"Blaze\"\nblaze.hp = 100\n\nprint(blaze.name, blaze.hp)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write your own two `Creature` instances from scratch. Name them `bolt` and `ash`. Give `bolt` a `name` of \"Bolt\" and an `hp` of 90. Give `ash` a `name` of \"Ash\" and an `hp` of 70. Print `bolt.name`, `bolt.hp` on one line, then `ash.name`, `ash.hp` on the next.",
      starter: "class Creature:\n    pass\n\n# create bolt and ash here, then print both\n",
      check: { type: "output", expected: "Bolt 90\nAsh 70" },
      hints: [
        "bolt = Creature() makes one instance. Then set bolt.name and bolt.hp on their own lines.",
        "Repeat the same three-line pattern for ash, with its own name and hp.",
        "print(bolt.name, bolt.hp) then print(ash.name, ash.hp).",
      ],
      solution: "class Creature:\n    pass\n\nbolt = Creature()\nbolt.name = \"Bolt\"\nbolt.hp = 90\n\nash = Creature()\nash.name = \"Ash\"\nash.hp = 70\n\nprint(bolt.name, bolt.hp)\nprint(ash.name, ash.hp)\n",
    },
  ],
  codex: {
    topic: "classes and instances",
    pattern: "class Creature:\n    pass\n\nblaze = Creature()\nblaze.name = \"Blaze\"\nblaze.hp = 100",
    note: "A class is a blueprint; each instance is a separate made thing with its own attribute values. Unlike a dictionary, a class can also hold actions that belong to it — the next lessons add those.",
  },
});

/* ── Lesson 6.2 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c6s2",
  chapter: 6,
  strand: "core",
  lang: "py",
  timeBudgetMin: 22,
  title: "__init__ and Independent Instances",
  glossary: {
    "__init__": "A special method Python calls automatically the moment you create an instance — it sets up that instance's starting attributes in one step.",
  },
  content: [
    {
      type: "text",
      md: "**`__init__` fixes last lesson's repetition.** Building `blaze` took three separate lines: create it, set `name`, set `hp`. `__init__` (say it \"eye-knit, eye-knit\" or \"dunder init\" — the double underscores are pronounced \"dunder\") lets you write all three in one line: `blaze = Creature(\"Blaze\", 100)`. Python calls `__init__` automatically, the instant `Creature(...)` runs, and hands it whatever values you passed.",
    },
    {
      type: "example",
      note: "__init__ runs once, automatically, the moment Creature(...) is called. self.name = name stores the passed-in value onto this specific instance.",
      code: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\nblaze = Creature(\"Blaze\", 100)\nprint(blaze.name, blaze.hp)\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Trace `Creature(\"Blaze\", 100)`. Predict the printed line.",
      starter: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\nblaze = Creature(\"Blaze\", 100)\nprint(blaze.name, blaze.hp)\n",
      check: { type: "output", expected: "Blaze 100" },
      hints: [
        "__init__ runs automatically with name=\"Blaze\" and hp=100, the arguments you passed to Creature(...).",
        "self.name = name stores \"Blaze\" onto blaze's own name attribute; self.hp = hp stores 100 the same way.",
        "print(blaze.name, blaze.hp) reads them straight back: Blaze 100.",
      ],
      solution: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\nblaze = Creature(\"Blaze\", 100)\nprint(blaze.name, blaze.hp)\n",
    },
    {
      type: "text",
      md: "**Two instances never share their attribute values.** `blaze` and `storm` are both built from the same `Creature` blueprint, but each one is a separate object with its own private `name` and `hp`. Changing `blaze.hp` cannot touch `storm.hp` — they don't know about each other at all.",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Two independent creatures. `blaze.hp` gets changed after both are built. Predict both printed lines — does changing blaze affect storm?",
      starter: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\nblaze = Creature(\"Blaze\", 100)\nstorm = Creature(\"Storm\", 80)\nblaze.hp = 50\nprint(blaze.hp)\nprint(storm.hp)\n",
      check: { type: "output", expected: "50\n80" },
      hints: [
        "blaze and storm are two separate instances, each with its own hp attribute.",
        "blaze.hp = 50 only changes blaze's own hp — storm was never touched.",
        "First line: 50 (blaze, changed). Second line: 80 (storm, untouched).",
      ],
      solution: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\nblaze = Creature(\"Blaze\", 100)\nstorm = Creature(\"Storm\", 80)\nblaze.hp = 50\nprint(blaze.hp)\nprint(storm.hp)\n",
    },
    {
      type: "text",
      md: "**A quick landmine: `print()` on an instance directly.** Try `print(blaze)` and you'll see something like `<__main__.Creature object at 0x7f2a1c0a4d90>` instead of anything useful. Python doesn't know how to show your object as text yet — that's a feature this course doesn't cover. The address (the `0x...` part) is real, though: it's a unique location in memory, different for every instance. `print(blaze)` twice in a row shows the *same* address both times (it's the same object); `print(storm)` shows a *different* address (a different object). Since that address changes every time you run the program, there's no fixed exercise here to check — just something worth trying yourself in the sandbox.",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete `__init__` so it takes `name` and `hp` and stores both as attributes, exactly like the examples above.",
      starter: "class Creature:\n    def __init__(self, name, hp):\n        pass  # store name and hp as attributes on self\n\nash = Creature(\"Ash\", 70)\nprint(ash.name, ash.hp)\n",
      check: { type: "output", expected: "Ash 70" },
      hints: [
        "Replace pass with two lines, one per attribute.",
        "self.name = name stores the name parameter onto this instance.",
        "self.hp = hp stores the hp parameter the same way.",
      ],
      solution: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\nash = Creature(\"Ash\", 70)\nprint(ash.name, ash.hp)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write a `Creature` class with `__init__(self, name, hp)` from scratch. Create two creatures, `nova` (name \"Nova\", hp 60) and `echo` (name \"Echo\", hp 45). Change `nova.hp` to 30. Print `nova.hp` then `echo.hp`, proving they're independent.",
      starter: "# write class Creature with __init__(self, name, hp) here,\n# then create nova and echo, change nova.hp to 30, and print both hp values\n",
      check: { type: "output", expected: "30\n45" },
      hints: [
        "def __init__(self, name, hp): self.name = name; self.hp = hp — the same shape as every example above.",
        "nova = Creature(\"Nova\", 60), echo = Creature(\"Echo\", 45).",
        "nova.hp = 30 only changes nova. print(nova.hp) then print(echo.hp).",
      ],
      solution: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\nnova = Creature(\"Nova\", 60)\necho = Creature(\"Echo\", 45)\nnova.hp = 30\nprint(nova.hp)\nprint(echo.hp)\n",
    },
  ],
  codex: {
    topic: "__init__",
    pattern: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\nblaze = Creature(\"Blaze\", 100)",
    note: "__init__ runs automatically when you call Creature(...), setting up that instance's starting attributes in one step. Every instance gets its own separate copy of those attributes — changing one never touches another.",
  },
});

/* ── Lesson 6.3 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c6s3",
  chapter: 6,
  strand: "core",
  lang: "py",
  timeBudgetMin: 24,
  title: "Methods and self",
  glossary: {
    method: "A function defined inside a class. It works exactly like a Lesson 3 function, except Python automatically passes the instance it was called on as the first argument.",
    self: "The parameter name every method uses for \"the specific instance this call is about.\" It's an ordinary parameter, not a Python keyword — self is just the name everyone uses by convention.",
  },
  content: [
    {
      type: "text",
      md: "**A [[method]] is a function that lives inside a class.** Parameters, `return`, default arguments — everything from Chapter 3 still applies. There's one new rule. A method's first parameter is always the instance it was called on. By convention, that parameter is named **[[self]]**.",
    },
    {
      type: "example",
      note: "blaze.roar() and Creature.roar(blaze) are the exact same call. The dot-call is shorthand Python provides -- it automatically supplies blaze as roar's first argument.",
      code: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n    def roar(self):\n        return self.name + \" roars!\"\n\nblaze = Creature(\"Blaze\", 100)\nprint(blaze.roar())\nprint(Creature.roar(blaze))\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "`blaze.roar()` and `Creature.roar(blaze)` are the same call, spelled two ways. Predict both printed lines.",
      starter: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n    def roar(self):\n        return self.name + \" roars!\"\n\nblaze = Creature(\"Blaze\", 100)\nprint(blaze.roar())\nprint(Creature.roar(blaze))\n",
      check: { type: "output", expected: "Blaze roars!\nBlaze roars!" },
      hints: [
        "roar(self) reads self.name and returns it plus \" roars!\".",
        "blaze.roar() automatically passes blaze as self. Creature.roar(blaze) passes blaze as self explicitly — same result.",
        "Both lines print the identical text: Blaze roars!",
      ],
      solution: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n    def roar(self):\n        return self.name + \" roars!\"\n\nblaze = Creature(\"Blaze\", 100)\nprint(blaze.roar())\nprint(Creature.roar(blaze))\n",
    },
    {
      type: "text",
      md: "**`self` is not a Python keyword — it's just a parameter name everyone agrees to use.** Python does not check that a method's first parameter is spelled `self`. It just uses whatever name is there for the instance. Renaming it still works exactly the same way, which proves there's no magic — but every Python programmer uses `self` by convention, and code that doesn't is harder for anyone else to read.",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "This class uses `me` instead of `self` everywhere. Predict the printed line — does it still work?",
      starter: "class Creature:\n    def __init__(me, name, hp):\n        me.name = name\n        me.hp = hp\n\n    def roar(me):\n        return me.name + \" roars!\"\n\nblaze = Creature(\"Blaze\", 100)\nprint(blaze.roar())\n",
      check: { type: "output", expected: "Blaze roars!" },
      hints: [
        "me is just a parameter name here, doing exactly the job self usually does.",
        "Nothing about how Python calls the method changed — only the name of the first parameter.",
        "The output is identical to using self: Blaze roars!",
      ],
      solution: "class Creature:\n    def __init__(me, name, hp):\n        me.name = name\n        me.hp = hp\n\n    def roar(me):\n        return me.name + \" roars!\"\n\nblaze = Creature(\"Blaze\", 100)\nprint(blaze.roar())\n",
    },
    {
      type: "text",
      md: "**Some methods change the instance; some just report on it.** `take_damage` is a *mutator* — it changes `self.hp`, the same category as Lesson 4.1's `.append()`. `is_alive` is a *query* — it only reads and returns a value, like `.upper()` on a string, without changing anything.",
    },
    {
      type: "example",
      note: "take_damage mutates self.hp. is_alive only reads it and returns a bool -- it changes nothing.",
      code: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n    def take_damage(self, amount):\n        self.hp -= amount\n\n    def is_alive(self):\n        return self.hp > 0\n\nblaze = Creature(\"Blaze\", 100)\nblaze.take_damage(90)\nprint(blaze.hp)\nprint(blaze.is_alive())\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Trace `take_damage(90)` then `is_alive()`. Predict both printed lines.",
      starter: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n    def take_damage(self, amount):\n        self.hp -= amount\n\n    def is_alive(self):\n        return self.hp > 0\n\nblaze = Creature(\"Blaze\", 100)\nblaze.take_damage(90)\nprint(blaze.hp)\nprint(blaze.is_alive())\n",
      check: { type: "output", expected: "10\nTrue" },
      hints: [
        "take_damage(90) does self.hp -= amount: 100 - 90.",
        "blaze.hp is now 10.",
        "is_alive() returns self.hp > 0, which is 10 > 0: True.",
      ],
      solution: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n    def take_damage(self, amount):\n        self.hp -= amount\n\n    def is_alive(self):\n        return self.hp > 0\n\nblaze = Creature(\"Blaze\", 100)\nblaze.take_damage(90)\nprint(blaze.hp)\nprint(blaze.is_alive())\n",
    },
    {
      type: "text",
      md: "**A local variable inside a method still disappears when the method returns — exactly like Lesson 3.4's functions.** `self.hp` is different: it lives on the instance, not in the method's own frame, so it survives after the method call ends. Two separate calls to `take_damage` both see the *same* `self.hp` left over from the call before — that's the opposite of a local variable, and it's the whole reason attributes are useful.",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "`take_damage` is called twice in a row. `note` is a local variable — it's gone the instant each call ends. Predict the final `hp`.",
      starter: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n    def take_damage(self, amount):\n        note = \"ouch\"   # local variable -- gone when this call returns\n        self.hp -= amount\n\nblaze = Creature(\"Blaze\", 100)\nblaze.take_damage(10)\nblaze.take_damage(10)\nprint(blaze.hp)\n",
      check: { type: "output", expected: "80" },
      hints: [
        "note is recreated and thrown away on every call — it never carries over.",
        "self.hp does carry over, since it belongs to the instance, not to any one call.",
        "100 - 10 - 10 = 80.",
      ],
      solution: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n    def take_damage(self, amount):\n        note = \"ouch\"\n        self.hp -= amount\n\nblaze = Creature(\"Blaze\", 100)\nblaze.take_damage(10)\nblaze.take_damage(10)\nprint(blaze.hp)\n",
    },
    {
      type: "text",
      md: "**Forgetting `self` in a method definition crashes with a message that looks like a lie.** `roar()` below is missing its `self` parameter. Python still auto-supplies `blaze` when you call `blaze.roar()` — but `roar` wasn't written to accept anything, so you get `TypeError: roar() takes 0 positional arguments but 1 was given`. You didn't type an argument at the call site. Python is telling you about the *instance* it silently tried to pass in.",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This crashes with `TypeError: roar() takes 0 positional arguments but 1 was given`. `roar` forgot its `self` parameter — Python still tries to pass `blaze` in automatically. Fix the method definition.",
      starter: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n    def roar():\n        return \"Roar!\"\n\nblaze = Creature(\"Blaze\", 100)\nprint(blaze.roar())\n",
      check: { type: "output", expected: "Roar!" },
      hints: [
        "Every method needs self as its first parameter, even if the method's body never uses it.",
        "blaze.roar() always tries to pass blaze in as the first argument — roar's signature must accept it.",
        "Change def roar(): to def roar(self):",
      ],
      solution: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n    def roar(self):\n        return \"Roar!\"\n\nblaze = Creature(\"Blaze\", 100)\nprint(blaze.roar())\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write a `heal(self, amount)` method that adds `amount` to `self.hp`. Create a `Creature` named \"Ash\" with 100 hp. Call `take_damage(30)`, then `heal(20)`. Print the final `hp`.",
      starter: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n    def take_damage(self, amount):\n        self.hp -= amount\n\n    # write heal(self, amount) here\n\nash = Creature(\"Ash\", 100)\nash.take_damage(30)\n# call heal here, then print ash.hp\n",
      check: { type: "output", expected: "90" },
      hints: [
        "heal is a mutator, just like take_damage, but it adds instead of subtracting.",
        "def heal(self, amount): self.hp += amount",
        "100 - 30 + 20 = 90.",
      ],
      solution: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n    def take_damage(self, amount):\n        self.hp -= amount\n\n    def heal(self, amount):\n        self.hp += amount\n\nash = Creature(\"Ash\", 100)\nash.take_damage(30)\nash.heal(20)\nprint(ash.hp)\n",
    },
  ],
  codex: {
    topic: "methods and self",
    pattern: "def take_damage(self, amount):\n    self.hp -= amount\n\nblaze.take_damage(10)  # same as Creature.take_damage(blaze, 10)",
    note: "self is the instance a method was called on — an ordinary parameter, not a keyword. A mutator method changes self's attributes; a query method only reads and returns a value. Attributes persist between calls; local variables don't.",
  },
});

/* ── Lesson 6.4 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c6s4",
  chapter: 6,
  strand: "core",
  lang: "py",
  timeBudgetMin: 24,
  title: "Comparing and Debugging Instances",
  glossary: {},
  content: [
    {
      type: "text",
      md: "**Objects add a new twist to Lesson 5.5's hypothesis loop.** You already know: observe, hypothesize, predict, test, revise. With two instances of the same class, one extra question joins that loop: *which instance*, and what happened to it before now? Both instances run identical code — the bug isn't in the class, it's in the specific sequence of calls made against one particular object.",
    },
    {
      type: "text",
      md: "**The sneakiest instance bug: two names for the same object.** `storm = blaze` doesn't make a new creature. It makes `storm` a second name pointing at the exact same object `blaze` already names — the identical trap Lesson 4.6 called [[aliasing]] for lists. Changing `storm` changes `blaze` too, because there's only one object between them.",
    },
    {
      type: "example",
      note: "Bug: storm = blaze makes storm another name for the SAME object, not a new creature.",
      code: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\nblaze = Creature(\"Blaze\", 100)\nstorm = blaze   # NOT a new creature -- storm IS blaze\nstorm.name = \"Storm\"\nprint(blaze.name)\nprint(storm.name)\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "`storm = blaze` does not create a second creature. Trace what happens to `blaze.name` when `storm.name` is changed. Predict both printed lines.",
      starter: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\nblaze = Creature(\"Blaze\", 100)\nstorm = blaze\nstorm.name = \"Storm\"\nprint(blaze.name)\nprint(storm.name)\n",
      check: { type: "output", expected: "Storm\nStorm" },
      hints: [
        "storm = blaze does not build a new Creature — it makes storm a second name for the same object.",
        "There is only one creature here, with two names pointing at it. Changing it through either name changes the same object.",
        "Both lines print Storm, because blaze and storm are the same object.",
      ],
      solution: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\nblaze = Creature(\"Blaze\", 100)\nstorm = blaze\nstorm.name = \"Storm\"\nprint(blaze.name)\nprint(storm.name)\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "`blaze` and `storm` were meant to be two separate creatures, but `storm = blaze` only made a second name for the same one — that's why renaming `storm` also renamed `blaze`. Fix it so `storm` is a genuinely new `Creature`, named \"Storm\" with 80 hp, independent of `blaze`.",
      starter: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\nblaze = Creature(\"Blaze\", 100)\nstorm = blaze\nprint(blaze.name)\nprint(storm.name)\n",
      check: { type: "output", expected: "Blaze\nStorm" },
      hints: [
        "storm = blaze aliases the same object. You need storm = Creature(...) to build a real second instance.",
        "Give the new Creature its own name (\"Storm\") and hp (80) instead of copying blaze.",
        "storm = Creature(\"Storm\", 80)",
      ],
      solution: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\nblaze = Creature(\"Blaze\", 100)\nstorm = Creature(\"Storm\", 80)\nprint(blaze.name)\nprint(storm.name)\n",
    },
    {
      type: "text",
      md: "**Tracking two instances at once means tracing two separate stories.** Calls on `blaze` and `storm` can happen in any order. Each instance only remembers what happened to *it*. Trace them as two independent timelines, not one shared one.",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "Calls on `blaze` and `storm` are interleaved. Trace each instance's own timeline separately. Predict both final `hp` values.",
      starter: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n    def take_damage(self, amount):\n        self.hp -= amount\n\nblaze = Creature(\"Blaze\", 100)\nstorm = Creature(\"Storm\", 80)\nblaze.take_damage(20)\nstorm.take_damage(10)\nblaze.take_damage(30)\nprint(blaze.hp)\nprint(storm.hp)\n",
      check: { type: "output", expected: "50\n70" },
      hints: [
        "blaze's calls: take_damage(20), then later take_damage(30). storm only gets take_damage(10) in between.",
        "blaze: 100 - 20 - 30. storm: 80 - 10.",
        "blaze.hp ends at 50. storm.hp ends at 70.",
      ],
      solution: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n    def take_damage(self, amount):\n        self.hp -= amount\n\nblaze = Creature(\"Blaze\", 100)\nstorm = Creature(\"Storm\", 80)\nblaze.take_damage(20)\nstorm.take_damage(10)\nblaze.take_damage(30)\nprint(blaze.hp)\nprint(storm.hp)\n",
    },
    {
      type: "text",
      md: "**A misspelled attribute is a silent trap until something finally reads it.** `self.HP` (capital) and `self.hp` (lowercase) are two different attributes to Python. Say `__init__` sets `HP`, but a later method reads `hp`. Nothing goes wrong at first. The method that reads `hp` is where `AttributeError` finally fires — far from where the typo actually happened.",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "This crashes with `AttributeError: 'Creature' object has no attribute 'hp'`, reported inside `is_alive`. But `is_alive` didn't cause the mistake — `__init__` set `self.HP` (capital) instead of `self.hp`. Fix the typo in `__init__`.",
      starter: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.HP = hp\n\n    def is_alive(self):\n        return self.hp > 0\n\nblaze = Creature(\"Blaze\", 100)\nprint(blaze.is_alive())\n",
      check: { type: "output", expected: "True" },
      hints: [
        "is_alive only reads self.hp — it can't be the source of a missing attribute.",
        "__init__ stored the value as self.HP, capital, which is a different attribute from self.hp.",
        "Change self.HP = hp to self.hp = hp.",
      ],
      solution: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n    def is_alive(self):\n        return self.hp > 0\n\nblaze = Creature(\"Blaze\", 100)\nprint(blaze.is_alive())\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write two genuinely independent `Creature` instances: `ivy` (hp 90) and `rex` (hp 110). Damage `ivy` once by 25. Damage `rex` twice, by 40 each time. Print `ivy.hp` then `rex.hp`.",
      starter: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n    def take_damage(self, amount):\n        self.hp -= amount\n\n# create ivy and rex, damage each, then print both hp values\n",
      check: { type: "output", expected: "65\n30" },
      hints: [
        "ivy = Creature(\"Ivy\", 90), rex = Creature(\"Rex\", 110) — two separate Creature(...) calls, not an alias.",
        "ivy.take_damage(25) once. rex.take_damage(40) twice.",
        "90 - 25 = 65. 110 - 40 - 40 = 30.",
      ],
      solution: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n    def take_damage(self, amount):\n        self.hp -= amount\n\nivy = Creature(\"Ivy\", 90)\nrex = Creature(\"Rex\", 110)\nivy.take_damage(25)\nrex.take_damage(40)\nrex.take_damage(40)\nprint(ivy.hp)\nprint(rex.hp)\n",
    },
  ],
  codex: {
    topic: "comparing instances",
    pattern: "storm = blaze          # ALIAS -- same object, not a new one\nstorm = Creature(...)  # a genuinely new, independent instance",
    note: "storm = blaze makes two names for one object — the same aliasing trap as Lesson 4.6's lists. When two instances misbehave differently, trace each one's own call history separately, not as a shared story.",
  },
});

/* ── Lesson 6.5 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c6s5",
  chapter: 6,
  strand: "data",
  lang: "py",
  timeBudgetMin: 22,
  title: "Instances With Collections",
  glossary: {
    "class attribute": "A value written directly inside a class body (not inside __init__). It is created once, when the class is defined, and shared by every instance — unlike an instance attribute, which each object gets its own separate copy of.",
  },
  content: [
    {
      type: "text",
      md: "**Attributes can hold lists, too — including a list every instance builds up over time.** An `inventory` attribute works exactly like `hp`: each instance gets its own list, as long as it's created fresh inside `__init__`.",
    },
    {
      type: "example",
      note: "inventory is created fresh inside __init__, so each instance gets its own separate list.",
      code: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n        self.inventory = []\n\n    def pick_up(self, item):\n        self.inventory.append(item)\n\nblaze = Creature(\"Blaze\", 100)\nstorm = Creature(\"Storm\", 80)\nblaze.pick_up(\"Sword\")\nprint(blaze.inventory)\nprint(storm.inventory)\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "`blaze` picks up a sword. `storm` never does. Predict both printed inventories.",
      starter: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n        self.inventory = []\n\n    def pick_up(self, item):\n        self.inventory.append(item)\n\nblaze = Creature(\"Blaze\", 100)\nstorm = Creature(\"Storm\", 80)\nblaze.pick_up(\"Sword\")\nprint(blaze.inventory)\nprint(storm.inventory)\n",
      check: { type: "output", expected: "['Sword']\n[]" },
      hints: [
        "Each Creature's __init__ runs its own self.inventory = [] — two separate empty lists.",
        "Only blaze.pick_up(\"Sword\") ever runs. storm's inventory is never touched.",
        "blaze.inventory has one item. storm.inventory is still empty.",
      ],
      solution: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n        self.inventory = []\n\n    def pick_up(self, item):\n        self.inventory.append(item)\n\nblaze = Creature(\"Blaze\", 100)\nstorm = Creature(\"Storm\", 80)\nblaze.pick_up(\"Sword\")\nprint(blaze.inventory)\nprint(storm.inventory)\n",
    },
    {
      type: "text",
      md: "**Writing the list in the wrong place shares it across every instance.** A **[[class attribute]]** — written directly inside the `class` body, not inside `__init__` — is created exactly once, the moment the class itself is defined. Every instance that doesn't set its own copy shares that one list. `blaze.pick_up(...)` doesn't create a new list for `blaze`; it appends onto the *one* list every `Creature` is quietly sharing.",
    },
    {
      type: "example",
      note: "Bug: inventory is a class attribute (inside the class body, outside __init__), so every instance shares the exact same list.",
      code: "class Creature:\n    inventory = []   # BUG: one shared list, not one per instance\n\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n    def pick_up(self, item):\n        self.inventory.append(item)\n\nblaze = Creature(\"Blaze\", 100)\nstorm = Creature(\"Storm\", 80)\nblaze.pick_up(\"Sword\")\nprint(blaze.inventory)\nprint(storm.inventory)\n",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "`inventory` is written as a class attribute here, not inside `__init__`. Trace what `storm.inventory` shows even though `storm` never picked anything up. Predict both printed lines.",
      starter: "class Creature:\n    inventory = []\n\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n    def pick_up(self, item):\n        self.inventory.append(item)\n\nblaze = Creature(\"Blaze\", 100)\nstorm = Creature(\"Storm\", 80)\nblaze.pick_up(\"Sword\")\nprint(blaze.inventory)\nprint(storm.inventory)\n",
      check: { type: "output", expected: "['Sword']\n['Sword']" },
      hints: [
        "inventory is written inside the class body, not inside __init__ — that makes it one shared list.",
        "blaze.pick_up(\"Sword\") appends onto that one shared list, which storm also points at.",
        "Both blaze.inventory and storm.inventory show the same list: ['Sword'].",
      ],
      solution: "class Creature:\n    inventory = []\n\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n    def pick_up(self, item):\n        self.inventory.append(item)\n\nblaze = Creature(\"Blaze\", 100)\nstorm = Creature(\"Storm\", 80)\nblaze.pick_up(\"Sword\")\nprint(blaze.inventory)\nprint(storm.inventory)\n",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "`storm.inventory` shows `['Sword']` even though `storm` never picked anything up — every `Creature` is quietly sharing one list. Fix it so each instance gets its own separate inventory.",
      starter: "class Creature:\n    inventory = []\n\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n    def pick_up(self, item):\n        self.inventory.append(item)\n\nblaze = Creature(\"Blaze\", 100)\nstorm = Creature(\"Storm\", 80)\nblaze.pick_up(\"Sword\")\nprint(blaze.inventory)\nprint(storm.inventory)\n",
      check: { type: "output", expected: "['Sword']\n[]" },
      hints: [
        "Move inventory out of the class body and into __init__, as self.inventory.",
        "Each instance's __init__ call then creates its own fresh empty list.",
        "Delete the class-level inventory = [] line; add self.inventory = [] inside __init__.",
      ],
      solution: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n        self.inventory = []\n\n    def pick_up(self, item):\n        self.inventory.append(item)\n\nblaze = Creature(\"Blaze\", 100)\nstorm = Creature(\"Storm\", 80)\nblaze.pick_up(\"Sword\")\nprint(blaze.inventory)\nprint(storm.inventory)\n",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write a `Creature` class with `__init__(self, name, hp)` that also sets up an empty `inventory` list (inside `__init__`, not the class body). Write `pick_up(self, item)`. Create `nova` and `echo`. Have `nova` pick up \"Shield\" and \"Potion\". Print `nova.inventory` then `echo.inventory`.",
      starter: "# write class Creature with __init__ (name, hp, inventory) and pick_up here,\n# then create nova and echo, have nova pick up Shield and Potion, print both inventories\n",
      check: { type: "output", expected: "['Shield', 'Potion']\n[]" },
      hints: [
        "self.inventory = [] must be inside __init__, one line after self.hp = hp.",
        "pick_up(self, item): self.inventory.append(item).",
        "nova.pick_up(\"Shield\"); nova.pick_up(\"Potion\") — echo is never touched.",
      ],
      solution: "class Creature:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n        self.inventory = []\n\n    def pick_up(self, item):\n        self.inventory.append(item)\n\nnova = Creature(\"Nova\", 60)\necho = Creature(\"Echo\", 45)\nnova.pick_up(\"Shield\")\nnova.pick_up(\"Potion\")\nprint(nova.inventory)\nprint(echo.inventory)\n",
    },
  ],
  codex: {
    topic: "class attributes vs instance attributes",
    pattern: "class Creature:\n    def __init__(self, name):\n        self.inventory = []  # correct: one list per instance",
    note: "A mutable value (like a list) written inside __init__ as self.x = [] gives every instance its own copy. The same value written in the class body, outside __init__, is created once and shared by every instance — a real, well-documented Python trap.",
  },
});

/* ── Lesson 6.6 ─────────────────────────────────────────────────────── */

window.CODELAB.lessons.push({
  id: "c6s6",
  chapter: 6,
  strand: "sound",
  lang: "py",
  timeBudgetMin: 22,
  title: "A Note Class",
  glossary: {},
  content: [
    {
      type: "text",
      md: "**A `Note` bundles pitch and duration with the action of playing itself.** `self.pitch` and `self.duration` are just attributes — the new part is `play(self)`, a method that calls the real `play()`/`sleep()` functions from Lesson 1.7. Naming the method `play` doesn't clash with the built-in `play()` function — inside the method, `play(self.pitch)` (no `self.` in front) still means the engine function, not the method itself.",
    },
    {
      type: "example",
      note: "n1.play() calls the real engine — this actually makes sound, not just stores numbers.",
      code: "class Note:\n    def __init__(self, pitch, duration):\n        self.pitch = pitch\n        self.duration = duration\n\n    def play(self):\n        play(self.pitch)\n        sleep(self.duration)\n\nn1 = Note(60, 0.5)\nn1.play()\n",
    },
    {
      type: "exercise",
      rung: 5,
      prompt: "Complete `play(self)` — it should call `play(self.pitch)` then `sleep(self.duration)`.",
      starter: "class Note:\n    def __init__(self, pitch, duration):\n        self.pitch = pitch\n        self.duration = duration\n\n    def play(self):\n        pass  # call play(self.pitch), then sleep(self.duration)\n\nn1 = Note(64, 0.5)\nn1.play()\n",
      check: { type: "calls", calls: [{ fn: "play", note: 64 }] },
      hints: [
        "Two lines: play(self.pitch), then sleep(self.duration).",
        "self.pitch is 64 here — that's the note that should play.",
        "play(self.pitch)\\nsleep(self.duration)",
      ],
      solution: "class Note:\n    def __init__(self, pitch, duration):\n        self.pitch = pitch\n        self.duration = duration\n\n    def play(self):\n        play(self.pitch)\n        sleep(self.duration)\n\nn1 = Note(64, 0.5)\nn1.play()\n",
    },
    {
      type: "text",
      md: "**A melody is a list of `Note` instances.** Lesson 4.6 built melodies as plain lists of numbers. Now each note can also know its own duration, and a list comprehension (Lesson 4.6) builds the whole sequence in one line.",
    },
    {
      type: "exercise",
      rung: 6,
      prompt: "Write the `Note` class from scratch, with `__init__(self, pitch, duration)` and `play(self)`. Build `notes` as a list of `Note` instances from Twinkle Twinkle's intervals `[0, 0, 7, 7, 9, 9, 7]`, each transposed by `root = 60` with duration `0.4`. Play every note in order.",
      starter: "root = 60\nintervals = [0, 0, 7, 7, 9, 9, 7]\n\n# write class Note here, then build notes as a list of Note instances\n# and play each one\n",
      check: {
        type: "calls",
        calls: [
          { fn: "play", note: 60 }, { fn: "play", note: 60 }, { fn: "play", note: 67 }, { fn: "play", note: 67 },
          { fn: "play", note: 69 }, { fn: "play", note: 69 }, { fn: "play", note: 67 },
        ],
      },
      hints: [
        "class Note: def __init__(self, pitch, duration): self.pitch = pitch; self.duration = duration; def play(self): play(self.pitch); sleep(self.duration)",
        "notes = [Note(root + i, 0.4) for i in intervals] — a list comprehension building one Note per interval.",
        "for n in notes: n.play()",
      ],
      solution: "root = 60\nintervals = [0, 0, 7, 7, 9, 9, 7]\n\nclass Note:\n    def __init__(self, pitch, duration):\n        self.pitch = pitch\n        self.duration = duration\n\n    def play(self):\n        play(self.pitch)\n        sleep(self.duration)\n\nnotes = [Note(root + i, 0.4) for i in intervals]\nfor n in notes:\n    n.play()\n",
    },
    {
      type: "text",
      md: "**A method that computes but never acts is a silent bug.** Below, `play(self)` builds a description and returns it, but never actually calls the engine's `play()`/`sleep()`. Nothing crashes. Nothing plays, either — because nobody captures or uses the returned string.",
    },
    {
      type: "exercise",
      rung: 4,
      prompt: "Calling `n1.play()` makes no sound at all — no crash, just silence. `play(self)` builds a description and returns it instead of actually calling the engine. Fix it so it calls `play(self.pitch)` and `sleep(self.duration)`.",
      starter: "class Note:\n    def __init__(self, pitch, duration):\n        self.pitch = pitch\n        self.duration = duration\n\n    def play(self):\n        return \"Playing \" + str(self.pitch)\n\nn1 = Note(67, 0.5)\nn1.play()\n",
      check: { type: "calls", calls: [{ fn: "play", note: 67 }] },
      hints: [
        "return \"Playing \" + str(self.pitch) builds a string but never calls the real play() function.",
        "Nothing prints this returned string either, so right now this method has no visible effect at all.",
        "Replace the return line with play(self.pitch) followed by sleep(self.duration).",
      ],
      solution: "class Note:\n    def __init__(self, pitch, duration):\n        self.pitch = pitch\n        self.duration = duration\n\n    def play(self):\n        play(self.pitch)\n        sleep(self.duration)\n\nn1 = Note(67, 0.5)\nn1.play()\n",
    },
    {
      type: "text",
      md: "**Two notes with identical pitch and duration are still not `==`.** By default, `==` between two instances checks whether they're the *same object* — not whether their attributes match. `n1 == n2` compares identity here, not content, and this course doesn't cover changing that.",
    },
    {
      type: "exercise",
      rung: 1,
      prompt: "`n1` and `n2` have identical pitch and duration, but they're two separate instances. Predict both printed lines.",
      starter: "class Note:\n    def __init__(self, pitch, duration):\n        self.pitch = pitch\n        self.duration = duration\n\nn1 = Note(60, 0.5)\nn2 = Note(60, 0.5)\nprint(n1 == n2)\nprint(n1 == n1)\n",
      check: { type: "output", expected: "False\nTrue" },
      hints: [
        "By default, == between instances checks whether they're the exact same object, not whether their attributes match.",
        "n1 and n2 are two separate Note objects, even with identical pitch and duration.",
        "n1 == n2 is False (different objects). n1 == n1 is True (same object).",
      ],
      solution: "class Note:\n    def __init__(self, pitch, duration):\n        self.pitch = pitch\n        self.duration = duration\n\nn1 = Note(60, 0.5)\nn2 = Note(60, 0.5)\nprint(n1 == n2)\nprint(n1 == n1)\n",
    },
  ],
  codex: {
    topic: "a class that acts",
    pattern: "class Note:\n    def __init__(self, pitch, duration):\n        self.pitch = pitch\n        self.duration = duration\n\n    def play(self):\n        play(self.pitch)\n        sleep(self.duration)",
    note: "A method's job isn't finished just because it computes something — it has to actually call play()/sleep() (or return the right value) to have any effect. By default, == between instances compares identity, not attribute values.",
  },
});
