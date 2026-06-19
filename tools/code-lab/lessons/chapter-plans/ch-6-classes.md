# Chapter 6 — Classes and Objects

## Overview

Chapter 6 is the OOP chapter. Students have been building programs by combining functions (Ch.3) and data collections (Ch.4); now they learn to package data and the functions that act on it into a single unit called an **object**. The through-line is the idea that a class is a factory — one definition, unlimited individual things — and that each thing carries its own state. By the end, the student can define a class with `__init__` and several methods, create multiple independent instances, read and modify their attributes, and apply these skills to a music domain object (`Synth`). Hard cap: no inheritance, no class methods, no `@property`, no dunder beyond `__init__`. Every lesson stays inside attributes / methods / instances.

**Can-do by end:** Define a class; write `__init__` with parameters; add methods that read and mutate `self` attributes; create many instances from one class; observe that instances are independent; model a musical note and a synthesizer as objects.

---

## Concepts owned (keywords)

- `class` — keyword that begins a class definition; defines a new type.
- **attribute** — a named value stored on an instance (`self.name`); instance state.
- `__init__` — the initializer method called automatically on creation; sets starting attribute values.
- `self` — the conventional first parameter of every instance method; the instance calling the method.
- **method** — a function defined inside a class that receives `self`; acts on the instance's own data.
- **instance** — a single object created from a class; every instance has its own copy of attributes.
- **multiple instances** — many objects from one class, all independent.
- `AttributeError` — raised when code accesses an attribute name that doesn't exist on an object.

---

## Concept map & dependencies

Teaching order within the chapter (each builds on the one before):

```
class keyword (bare class, no methods yet)
    └─► attribute (dot notation; assign on self; read back)
            └─► __init__ (set attributes at creation time; parameters → self.x)
                    └─► method (function inside class; receives self; reads/mutates self.x)
                            └─► multiple instances (two objects from same class are independent)
                                    └─► strand application: Note class (pitch + duration, music domain)
                                                └─► Synth class (settings; two instances play a duet)
```

**Spiral weaving — recalled from earlier chapters:**
- Ch.3 functions: `def`, parameters, `return`, calling a function — methods are functions with `self`.
- Ch.4 collections: lists and dicts as attribute values (`self.inventory = []`, `self.stats = {}`).
- Ch.2 loops + Ch.4 iteration: looping over a list held in an attribute.
- Ch.1 variables / assignment: `self.name = name` is the same assignment operation.

**What is explicitly NOT introduced here:** inheritance (`class Foo(Bar)`), class methods / static methods, `@property`, `__str__` / `__repr__`, `__eq__`, class variables (shared across instances — the shared-mutable-list trap from Python docs §9.3.5 is noted as a misconception but not taught as a feature).

---

## Lessons

### 6.1 — Objects Have Properties
- **Arc role:** Hook lesson. Run and modify a working `Pet` class before any syntax is explained; motivation first.
- **Concepts:** class as a factory metaphor; instances as individual things; attribute as a named property; dot notation to read an attribute.
- **Rung(s):** 3 Modify → 5 Complete.
- **Strand:** core.
- **Warm-up (recall):** "What does a function return if it has no `return` statement?" (Recalls Ch.3; answer: `None`. Sets up the contrast with methods that can return values.)
- **Worked-example ideas (easy → harder):**
  1. A `Pet` class with `name` and `species` assigned inside `__init__` (shown, runnable). Student runs it and reads `my_pet.name`. *(Note to author: the code uses the word `self` throughout. Tell the student: "You'll see a special word, `self`, appearing in the class code — treat it as a required word that every method starts with. Lesson 6.2 will explain exactly what it means.")*
  2. Add a `colour` attribute; print all three attributes with an f-string. Reuses Ch.1 f-strings.
  3. Two `Pet` instances (`cat` and `dog`); show that `cat.name` and `dog.name` are different. Reuses Ch.1 variables.
- **Exercise ideas (scaffolding fade):**
  1. *Easy (boilerplate):* `Pet` class given; add one more attribute (`age`) and print it.
  2. *Medium (stub):* Blank `__init__` body; fill in three attributes from the parameters.
  3. *Debug:* `my_pet.colour` raises `AttributeError` — spot why (attribute never set), fix it.
- **Misconceptions:** "the class IS the object" (confusion between blueprint and instance); dot notation feels like a dict key (remind: no quotes, no brackets).
- **Error classes:** `AttributeError` (accessing an attribute that was never set).
- **Recalls:** Ch.1 variables, Ch.1 f-strings, Ch.3 `def` (student has seen `def` before, sets up method introduction in 6.3).

---

### 6.2 — `__init__`
- **Arc role:** Concept lesson 1. Explains `__init__` precisely: when it runs, what parameters do, why `self.x = x` is the pattern.
- **Concepts:** `__init__` signature; parameters passed at construction; `self` as "the new object being set up"; attributes spring into existence when first assigned.
- **Rung(s):** 5 Complete.
- **Strand:** core.
- **Warm-up (recall):** "What is the difference between a *parameter* and an *argument*?" (Recalls Ch.3; answer: parameter is the name in the `def` line; argument is the value you pass when calling. Sets up `__init__(self, name, species)` vs `Pet('Rex', 'dog')`.)
- **Worked-example ideas:**
  1. A `Point` class: `__init__(self, x, y)` → `self.x = x; self.y = y`. Create two points, print coordinates. Simple, no methods yet.
  2. A `Book` class: `__init__(self, title, author, pages)`. Create two books with different values. Reuses Ch.1 string variables.
  3. A `Creature` stub (previewing 6.4): `__init__` takes `name`, `hp`, `attack`; assign all three. Reuses Ch.4 int values.
- **Exercise ideas:**
  1. *Easy:* `__init__` header given with three params; fill in three `self.x = x` lines.
  2. *Medium:* `__init__` stub with `pass`; write the whole body (3 attributes).
  3. *Debug / Fix:* `__init__` sets `self.nme = name` (typo); later code reads `self.name` → `AttributeError`. Find the bug, fix it.
- **Misconceptions:** "`__init__` creates the object" — clarify: Python allocates the object first, `__init__` initializes it (HTTLACS distinction); forgetting `self.` before an attribute name (just `name = name` sets a local variable, not an attribute); double underscores — why they exist ("dunder," special to Python).
- **Error classes:** `AttributeError` (typo in attribute name; attribute read before `self.` assignment).
- **Recalls:** Ch.3 function parameters/arguments; Ch.1 assignment.

---

### 6.3 — Methods
- **Arc role:** Concept lesson 2. Shows that methods are functions that belong to an object and act on `self`'s data.
- **Concepts:** method definition syntax (inside the class, first param is `self`); calling a method with dot notation; method reading an attribute; method mutating an attribute; method returning a value; why the caller does not pass `self`.
- **Rung(s):** 5 Complete → 6 Write.
- **Strand:** core.
- **Warm-up (recall):** "Write one line that defines a function called `greet` that takes a `name` parameter and returns a string." (Recalls Ch.3 `def`/`return`; primes the parallel with method syntax.)
- **Worked-example ideas:**
  1. Add a `describe()` method to `Pet` that prints a sentence using `self.name` and `self.species`. Call it. Reuses Ch.3 return / print.
  2. Add a `birthday()` method that increments `self.age` by 1. Call it twice, print `age` before and after. Reuses Ch.1 reassignment via `self`.
  3. A `Counter` class: `__init__` sets `self.count = 0`; `increment()` adds 1; `reset()` sets back to 0; `value()` returns `self.count`. Reuses Ch.3 `return`.
- **Exercise ideas:**
  1. *Easy (boilerplate):* Class given with `__init__`; method header given (`def greet(self):`); fill in one-line body using `self.name`.
  2. *Medium (stub):* Class given; write two methods from a description (`add_hp`, `is_alive` returning a bool).
  3. *Hard (blank):* Define a `Timer` class with `__init__(self, seconds)`, a `tick()` method (subtract 1), and `is_done()` returning whether seconds ≤ 0. Write from scratch.
  4. *Debug (fix):* A `Pet` class is given. The student's script calls `pet.describe(pet)` — passing the instance as an explicit argument. Running it raises `TypeError: Pet.describe() takes 1 positional argument but 2 were given`. Explain why this happens and write the correct call (`pet.describe()`). Verified: Python raises this exact message when the caller passes `self` explicitly. (Matches misconception already listed for 6.3.)
- **Misconceptions:** passing `self` explicitly when calling (`pet.describe(self)` → TypeError "takes 1 positional argument but 2 were given" — this is a real and common error, worth showing); thinking a method is just a function attached to a dict key.
- **Error classes:** `TypeError` (calling a method and accidentally passing `self`); `AttributeError` (method references `self.x` but attribute was never set in `__init__`).
- **Recalls:** Ch.3 `def`, parameters, `return`; Ch.1 assignment.

---

### 6.4 — Many Instances
- **Arc role:** Concept lesson 3. The factory metaphor pays off: one class definition, many independent objects.
- **Concepts:** multiple instances from one class; each instance has its own attribute namespace; attributes on one instance do not affect another; attributes holding lists and dicts (spiral from Ch.4); iterate over a list of instances.
- **Rung(s):** 5 Complete → 6 Write.
- **Strand:** core.
- **Warm-up (recall):** "How do you append an item to a list? What does `append` return?" (Recalls Ch.4; answer: `my_list.append(item)`, returns `None`. Sets up `self.inventory.append(item)` in worked examples.)
- **Worked-example ideas:**
  1. Create three `Pet` instances; show that modifying `cat.name` does not affect `dog.name`. Reuses Ch.1 variables.
  2. A `Creature` class: `__init__(self, name, hp, attack)` plus `self.inventory = []`; `pick_up(self, item)` appends to `self.inventory`; `show_stats(self)` prints all. Create two Creatures; have each pick up different items; show inventories are separate. Reuses Ch.4 list methods (`append`).
  3. A list of three `Creature` instances; loop over them and call `show_stats()` on each. Reuses Ch.4 `for` + list iteration.
- **Exercise ideas:**
  1. *Easy:* Two `Creature` instances given; call `pick_up` on each with different items; print both inventories.
  2. *Medium:* Write the `Creature` class `__init__` and two methods from a description.
  3. *Hard (blank):* Define a `Player` class with `name`, `score` (starts 0), and an `items` list; add `earn_points(n)` and `add_item(item)` methods; create two players and play a short scripted game.
  4. *Debug (fix):* A `Creature` class is given where `inventory = []` appears at class level (not inside `__init__`). Two creatures are created; each picks up a different item; both inventories print the same two items. Explain why, then move `self.inventory = []` into `__init__` and verify the lists are independent. Verified: class-level mutable is shared across all instances (Python docs §9.3.5 trap). (Matches misconception already listed for 6.4.)
- **Misconceptions:** shared mutable class-level variable (the Python docs §9.3.5 trap — `tricks = []` at class level vs. `self.tricks = []` in `__init__`; show the broken version, explain why, fix it); thinking instances share state.
- **Error classes:** `AttributeError` (accessing attribute before `__init__` runs; typo in attribute name).
- **Recalls:** Ch.4 lists and `append`; Ch.4 dicts; Ch.2 `for` loops.

---

### 6.5 — A `Note` Class
- **Arc role:** Strand-application lesson (sound). Apply classes to model music: a `Note` has pitch and duration; methods play it, transpose it, and describe it.
- **Concepts:** (no new concepts — pure application) attributes to hold domain data; methods to compute with that data; method calling `play()` (the course's sound API) using `self` attributes; returning a new `Note` from a method.
- **Rung(s):** 5 Complete → 6 Write.
- **Strand:** sound.
- **Warm-up (recall):** "Write a `for` loop that iterates over a list called `notes` and prints each item." (Recalls Ch.2 + Ch.4; directly previews the melody-loop worked example.)
- **Worked-example ideas:**
  1. `Note` class: `__init__(self, pitch, duration)` → `self.pitch = pitch; self.duration = duration`. `play(self)` calls `play(self.pitch, self.duration)`. Create a note and play it. *(Scope note for the author: the method is named `play` and it calls the global API function also named `play`. Python resolves bare `play(…)` in a method body by searching local scope first, then the global/module scope — it does NOT search `self`. So `play(self.pitch, self.duration)` calls the API; `self.play()` would call the method. Verified with python3: no recursion occurs. Tell the student this directly — see Misconceptions below.)*
  2. Add `transpose(self, semitones)` returning a new `Note` with `self.pitch + semitones`. Play the original and the transposed note. Reuses Ch.3 `return`.
  3. A list of `Note` objects forming a melody; loop and call `.play()` on each. Reuses Ch.4 list iteration + Ch.2 `for`.
- **Exercise ideas:**
  1. *Easy:* `Note` class given with `play`; add `double_duration()` method that returns a new `Note` with `self.duration * 2`.
  2. *Medium:* `Note` stub given; write `transpose` and a `describe()` method that prints pitch and duration.
  3. *Hard (blank):* Build a `Melody` class: `__init__` takes a list of `Note` objects; `play_all()` loops and plays each; `transpose_all(n)` returns a new `Melody` with each note transposed. Write from scratch.
  4. *Debug (fix):* A `Note` class is given where `__init__` accidentally sets `self.ptich = pitch` (typo). A call to `n.play()` raises `AttributeError: 'Note' object has no attribute 'pitch'. Did you mean: 'ptich'?` (Python 3.14 form — the suggestion points straight at the typo). Find the typo in `__init__`, fix it, and explain why the error message points to `play()` even though the bug is in `__init__`. Verified with python3 3.14.
- **Misconceptions:** confusing `play(self.pitch, …)` (calling the global sound API function) with `self.play()` (calling the method on self) — explain that Python looks up bare names in local scope first, then the global/module scope, never on `self`; so bare `play(…)` reaches the API and does not recurse. Verified with python3. Returning a new object from a method (students may try to mutate in place instead).
- **Error classes:** `AttributeError` (misspelled `self.ptich` or `self.durtion`).
- **Recalls:** Ch.4 lists; Ch.3 `return`; Ch.2 `for`; sound API from Ch.0 / 1.7 / 4.6.

---

### 6.6 — A `Synth` Class *(Strand — Chapter Checkpoint)*
- **Arc role:** Strand-application lesson (sound) + chapter checkpoint. Two `Synth` instances play a duet; demonstrates that objects with different settings produce independent, simultaneous musical voices.
- **Concepts:** (application) multiple instances holding different settings; methods that use `self` attributes to configure sound output; composing two objects together in a script.
- **Rung(s):** 6 Write (checkpoint).
- **Strand:** sound.
- **Warm-up (recall):** "What is the difference between reassigning a list variable (`inventory = []`) and calling `inventory.append(item)`? Which one changes the list in place?" (Recalls Ch.4; links to the class-level vs instance-level list trap from 6.4; primes instance-independence thinking for this checkpoint.)
- **Worked-example ideas:**
  1. `Synth` class: `__init__(self, waveform, volume)` → stores both. `play_note(self, pitch, duration)` calls the sound API with `self.waveform`, `self.volume`, pitch, duration. Create one `Synth` and play a note.
  2. Two `Synth` instances (e.g. `bass` and `lead`); each plays a different note sequence alternating to form a duet. Reuses Ch.4 list iteration.
  3. Add `set_volume(self, v)` that updates `self.volume`; show that changing one synth's volume does not affect the other. Reuses attribute mutation from 6.3.
- **Exercise ideas:**
  1. *Easy:* `Synth` class and two instances given; add a `mute()` method that sets `self.volume = 0`.
  2. *Medium:* Add `transpose_and_play(self, notes, offset)` that plays each note in a list shifted by `offset`. Reuses 6.5 transpose logic.
  3. *Hard (checkpoint, blank):* Design and build a `Drumkit` class: `__init__` takes a `pattern` list and a `tempo`; `play_pattern()` iterates and plays hits vs. silences. Then create two `Drumkit` instances with different patterns and play both. Full write from scratch; no starter.
  4. *Debug (predict + explain):* Two `Synth` instances are created with different volumes. The student predicts that calling `bass.set_volume(0)` will silence both `bass` and `lead`. Run the code and show that `lead.volume` is unchanged. Explain why: `set_volume` mutates `self.volume` on the instance it is called on, not on all instances. Verified with python3: `bass.volume=0, lead.volume=0.6` after the call. (Matches misconception already listed for 6.6.)
- **Misconceptions:** same as 6.4 (instance independence); expecting `synth1.set_volume(0)` to silence `synth2` — each instance holds its own `volume` attribute; `set_volume` only updates the instance it is called on (`self`).
- **Error classes:** `AttributeError`; revisit `TypeError` (passing `self` explicitly).
- **Recalls:** everything in the chapter; Ch.4 lists; sound API.

---

## Progression / difficulty ramp

| Lesson | Peak rung | What student writes from scratch | Debug exercise |
|--------|-----------|----------------------------------|----------------|
| 6.1 | 5 Complete | Add one attribute | Fix missing attribute → AttributeError |
| 6.2 | 5 Complete | Write full `__init__` body | Fix typo in `__init__` → AttributeError |
| 6.3 | 6 Write | A complete 3-method class (Timer) | Fix wrong call `pet.describe(pet)` → TypeError |
| 6.4 | 6 Write | A `Player` class with list attribute + 2 methods | Fix class-level list trap → instances share inventory |
| 6.5 | 6 Write | A `Melody` class wrapping a list of `Note` objects | Fix attribute typo `self.ptich` → AttributeError in `play()` |
| 6.6 | 6 Write | A `Drumkit` class from blank (checkpoint) | Predict + explain: `set_volume` on one instance doesn't affect another |

Scaffolding fade across the chapter: easy exercises give the class header and `__init__` pre-written; medium exercises give a stub with `pass`; hard exercises start from a blank editor. By 6.3 the "write from scratch" tier is the hard exercise; by 6.6 it is the checkpoint.

Debugging thread: a debug/fix exercise appears in every lesson (6.1 through 6.6), in escalating complexity — from a simple typo (`AttributeError`, 6.1–6.2) to a wrong-call `TypeError` (6.3), to the class-level-list trap (6.4), to an attribute-name typo surfacing in a different method (6.5), to a predict-and-explain instance-independence check (6.6).

---

## Chapter Challenge (outline)

Six to eight exercises, ordered easy → hard, mixing the chapter's concepts and strands. Scaffolding fades to blank by exercise 5.

1. *Predict (rung 1):* Given a short class definition and two method calls, predict what each `print` outputs — tests understanding of `self` and instance independence.
2. *Arrange (rung 2):* Parsons — reassemble a `Dog` class: `__init__`, two methods, two instance creations in the right order.
3. *Fix (rung 4):* A broken `BankAccount` class — `__init__` sets `self.blnce` (typo); `deposit` reads `self.balance`; `AttributeError` on run. Find the typo in `__init__` that causes the `AttributeError` in `deposit`, and fix it. (One bug, one fix — the typo is the root cause; the error surfaces later.)
4. *Complete (rung 5, core):* A `Scoreboard` class with `__init__` and `add_score(name, points)` (updates a dict attribute); write `top_scorer()` returning the name with the highest points. Reuses Ch.4 dict iteration.
5. *Complete (rung 5, sound):* A partial `Note` class; add `is_high(self)` (pitch > 60) and `describe(self)` methods.
6. *Write (rung 6, core):* Define a `Library` class: `__init__` holds an empty list of books; `add_book(title, author)` appends a dict; `find_by_author(author)` returns a filtered list. Write from scratch. Reuses Ch.4 dicts + lists.
7. *Write (rung 6, sound):* Define a `Playlist` class wrapping a list of `Note` objects; `add_note`, `play_all`, `total_duration()` summing durations. Write from scratch.
8. *(Stretch) Write (rung 6):* Given a narrative description only ("a vending machine that tracks stock and dispenses items"), define the class, choose the attributes, write three methods. No hints; graded for correctness only.

---

## Chapter Quiz (outline)

Auto-checked gate; must pass before Chapter 7 unlocks.

**Must-pass concepts:**
- What a class is vs. what an instance is.
- What `__init__` does and when it runs.
- What `self` refers to inside a method.
- How two instances of the same class are independent.
- How to call a method; how to read an attribute.
- `AttributeError`: when it happens and how to read the message.

**Question types:**
1. *Predict-the-output (3 questions):* Short class + method calls; student predicts printed values. Tests `self`, attribute reading, method return.
2. *Spot-the-error (2 questions):* One has a missing `self.` prefix (attribute set as local variable); one calls a method with an explicit `self` argument → TypeError. Identify the bug and the error class.
3. *Short write (2 questions):* (a) "Write one line that creates a `Pet` instance with name `'Rex'` and species `'dog'`." (b) "Write the `__init__` method for a `Circle` class that stores `radius`."

---

## Misconceptions & error classes (chapter-wide list)

### Misconceptions
- **Class IS the object:** students say "the Pet" when they mean "an instance of Pet." Correct with the factory metaphor throughout.
- **Forgetting `self.` in `__init__`:** `name = name` sets a local variable that vanishes; `self.name = name` sets the attribute. Demo the difference in 6.2.
- **Passing `self` explicitly when calling:** `pet.describe(self)` → TypeError; shown as an error-demo in 6.3.
- **Shared mutable class variable (the tricks trap):** placing `inventory = []` at class level means all instances share one list. Demo in 6.4; fix with `self.inventory = []` inside `__init__`.
- **`__init__` creates the object:** it initializes, it does not allocate. Note in 6.2 (HTTLACS ch.15 source).
- **Instances share state:** modifying one instance's attribute silently changes another's (only true for class-level mutables — above). In 6.4, explicitly demonstrate independence.
- **Method ≠ regular function:** students try to call a method as `describe(pet)` (function style) instead of `pet.describe()`. Shown in 6.3.

### Error classes
- **`AttributeError`:** accessing `self.x` where `x` was never assigned (typo, wrong name, attribute set conditionally and method called before the condition ran). Appears in every lesson. Error message format (Python 3.14): `'ClassName' object has no attribute 'x'. Did you mean: 'y'?` — the "Did you mean" suggestion appears when there is a similarly-named attribute on the object (as with the `self.ptich`/`self.pitch` typo in 6.5). Do not write checker copy that hard-matches a bare message without the suggestion.
- **`TypeError` (wrong arg count):** calling `pet.describe(self)` passes two arguments where one is expected; Python counts the hidden `self` plus the explicit one. Shown in 6.3; revisited in 6.6.
- **`NameError`:** referencing `self` outside a method (in top-level code). Rare but worth one mention.

---

## Sources

- Python docs — tutorial §9 "Classes": [https://docs.python.org/3/tutorial/classes.html](https://docs.python.org/3/tutorial/classes.html) — authoritative syntax, `__init__`, `self`, `AttributeError`, the shared-mutable-variable trap (§9.3.5).
- *Think Python* (Downey), 2nd ed., ch.15 "Classes and objects", ch.16 "Classes and functions", ch.17 "Classes and methods": [https://greenteapress.com/thinkpython2/html/thinkpython2016.html](https://greenteapress.com/thinkpython2/html/thinkpython2016.html) — factory metaphor; teaching order (attributes before methods); the conceptual shift "objects are the active agents" for `self` (ch.17); positional-arg confusion when calling methods.
- *How to Think Like a Computer Scientist* (HTTLACS), 3rd ed., ch.15 "Classes and objects I" & ch.16 "Classes and objects II": [https://openbookproject.net/thinkcs/python/english3e/classes_and_objects_I.html](https://openbookproject.net/thinkcs/python/english3e/classes_and_objects_I.html) — factory metaphor; `__init__` initializes (does not create); `self` is the new object being set up; `Rectangle` example for multiple instances; `AttributeError` in context.
- *Python for Everybody* (Severance), ch.14 "Objects": [https://www.py4e.com/html3/14-objects](https://www.py4e.com/html3/14-objects) — scope cross-check; `__init__` as optional constructor convention; `dir()` for attribute inspection; `AttributeError` on missing attribute; confirms this chapter's scope is right for the level.
- CSTA K-12 CS Standards (2017 revised), Level 2 (grades 6-8), Algorithms & Programming strand: [https://csteachers.org/k12standards/](https://csteachers.org/k12standards/) — confirms that decomposing problems into objects with state and behavior is a level-2 expectation; no inheritance required at this level.
