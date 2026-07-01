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
