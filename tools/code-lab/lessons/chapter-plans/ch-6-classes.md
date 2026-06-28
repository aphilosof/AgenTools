# Chapter 6 — Classes and Objects

## Overview

Chapter 6 is the OOP chapter. Students have been building programs by combining functions (Ch.3) and data collections (Ch.4); now they learn to package data and the functions that act on it into a single unit called an **object**. The central motivation, introduced in 6.1, is the answer to "why not just use a dict?" — a comparison students can make because they built dicts in Ch.4. The through-line is the idea that a class is a factory — one definition, unlimited individual things — and that each thing carries its own state. The CS principle is **encapsulation**: data and the behavior that acts on it live together in the same object. By the end, the student can define a class with `__init__` and several methods, create multiple independent instances, read and modify their attributes, and apply these skills to a music domain object (`Synth`). Hard cap: no inheritance, no class methods, no `@property`, no dunder beyond `__init__`. Every lesson stays inside attributes / methods / instances.

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
class-vs-dict motivation (6.1 hook) → encapsulation named
    └─► class keyword + attribute (dot notation; read an attribute)
            └─► __init__ (two-phase creation; parameters → self.x; name = name anti-pattern)
                    └─► method (function inside class; self mechanical translation; encapsulation named)
                            └─► multiple instances (two objects from same class are independent; class-level mutable trap)
                                    └─► strand application: Note class (pitch + duration; LEGB recall; Ch.5 debug protocol)
                                                └─► Synth class (settings; two instances play a duet; class-level trap recycled)
```

**Spiral weaving — recalled from earlier chapters:**
- Ch.1 variables / assignment: `self.name = name` is the same assignment operation; f-strings in method bodies.
- Ch.3 functions: `def`, parameters, `return`, calling a function — methods are functions with `self`; LEGB rule recalled in 6.5.
- Ch.4 collections: lists and dicts as attribute values (`self.inventory = []`, `self.stats = {}`); `'hello'.upper()` and `list.append()` as prior method calls (bridge in 6.3).
- Ch.2 loops + Ch.4 iteration: looping over a list held in an attribute.
- Ch.5 debugging protocol: four-step protocol applied explicitly in 6.5 debug exercise.

**What is explicitly NOT introduced here:** inheritance (`class Foo(Bar)`), class methods / static methods, `@property`, `__str__` / `__repr__`, `__eq__`, class variables (shared across instances — the shared-mutable-list trap from Python docs §9.3.5 is noted as a misconception but not taught as a feature). The `print(instance)` memory-address output is acknowledged with a one-sentence callout in 6.1 ("you will learn to fix this in a later chapter") rather than deferred silently.

---

## Lessons

### 6.1 — Objects Have Properties
- **Arc role:** Hook lesson. Open with a motivating "why not just use a dict?" comparison that students can make from Ch.4 experience; then run and modify a working `Pet` class. The lesson introduces one concrete minimum-viable fact about `self` so the magic-keyword model does not harden.
- **Concepts:** why a class beats a dict (the motivation); class as a factory metaphor; instance as an individual thing; attribute as a named property; dot notation to read an attribute. *(Note: `__init__` body filling is NOT taught here — that is 6.2's territory. All exercises keep the `__init__` header and body pre-written.)*
- **Rung(s):** 1 Predict → 3 Modify.
- **Strand:** core.
- **Warm-up (recall):** "What does a function return if it has no `return` statement?" (Recalls Ch.3; answer: `None`. Sets up the contrast with methods that can return values.)
- **Opening — class-vs-dict comparison (before any class syntax):**
  *(Author note: This is the hook's first screen. Show both approaches for the same Pet data.)*
  - *Dict version:* `pet = {"name": "Rex", "species": "dog"}` + `def describe(p): print(p["name"])`. Works at first.
  - *Dict failure modes:* a typo in a key (`pet["naem"]`) raises a `KeyError` that points nowhere useful; `describe` has no natural home next to the data — it floats loose; adding a second pet means passing the right dict to the right function manually.
  - *Class version:* `my_pet = Pet("Rex", "dog")` + `my_pet.describe()`. The method lives inside the class; a typo in an attribute name is a fixable `AttributeError` with a clear class name in the message. One class definition, unlimited pets, each independent.
  - One sentence to name the principle: "The CS word for bundling data and the functions that act on it is **encapsulation** — you will see it again in 6.3."
- **`self` anchor (placed at first appearance, not deferred):**
  *(Author note: Give this one sentence before students encounter `self` in the worked example: "`self` is the object on the left side of the dot — when you write `my_pet.describe()`, Python automatically passes `my_pet` in as `self`. Lesson 6.2 explains the full mechanics.")*
- **Worked-example ideas (easy → harder):**
  1. *Predict first (Rung 1):* A complete, runnable `Pet` class (2 attributes, 1 `describe` method) and two creation lines. Before running: "What do you think `my_pet.name` prints? What does `your_pet.name` print?" Run to confirm. Reveals instance independence immediately.
  2. Add a `colour` attribute to the pre-written `Pet` class; update `describe()` to include it; print using an f-string. Reuses Ch.1 f-strings. *(Rung 3 Modify)*
  3. Two `Pet` instances (`cat` and `dog`); show that modifying `cat.name = "Mittens"` does not affect `dog.name`. Reuses Ch.1 reassignment. *(Rung 3 Modify)*
  *(Note to author: A one-line callout belongs after example 1: "If you type `print(my_pet)` you will see something like `<__main__.Pet object at 0x1050c6120>` — Python shows a memory address, not the attributes. You will learn to fix this in a later chapter.")*
- **Exercise ideas (scaffolding fade):**
  1. *Predict (Rung 1):* `Pet` class given with `name`, `species`, `age`; four attribute reads and one modify. Student fills in an attribute table: what value does each `print` produce? Run to verify.
  2. *Modify (Rung 3):* `Pet` class given with `name` and `species`; the `__init__` header and body are fully written. Add an `age` attribute: (a) the author adds `age` as a parameter to `__init__` and assigns `self.age = age` — both lines pre-written; student only adds the print line that reads `my_pet.age`.
  3. *Fix (Rung 4):* `my_pet.colour` raises `AttributeError` (attribute never set in `__init__`). The `__init__` body is shown — student spots the missing line, fixes it.
- **Misconceptions:** "the class IS the object" (blueprint vs. instance); dot notation feels like a dict key (no quotes, no brackets); `self` is a magic reserved word (correct the minimum-viable model above: it is the object on the left side of the dot).
- **Error classes:** `AttributeError` (accessing an attribute that was never set).
- **Recalls:** Ch.1 variables, Ch.1 f-strings, Ch.4 dicts (the comparison), Ch.3 `def` (student has seen `def` before, sets up method introduction in 6.3).

---

### 6.2 — `__init__`
- **Arc role:** Concept lesson 1. Explains `__init__` precisely: when it runs, what parameters do, why `self.x = x` is the pattern. Opens with the two-phase creation model as the first concept sentence, not a footnote.
- **Concepts:** two-phase creation (Python allocates the object first, then `__init__` initializes it); `__init__` signature; parameters passed at construction; `self` as "the new object being set up"; attributes spring into existence when first assigned; the `name = name` anti-pattern (delayed crash).
- **Rung(s):** 4 Fix → 5 Complete.
- **Strand:** core.
- **Warm-up (recall):** "What is the difference between a *parameter* and an *argument*?" (Recalls Ch.3; answer: parameter is the name in the `def` line; argument is the value you pass when calling. Sets up `__init__(self, name, species)` vs `Pet('Rex', 'dog')`.)
- **Opening concept sentence (two-phase creation — promote from misconception footnote):**
  *(Author note: Lead the lesson with this, not with `__init__` syntax. When you write `Pet('Rex', 'dog')`, Python does two things in order: (1) allocates a new empty object in memory; (2) calls `__init__` to fill it in. `__init__` initializes — it does not create. This distinction matters because `__init__` can assume the object already exists, which is why `self` is always there first.)*
- **Attribute table exercise (Rung 1 — predict):**
  *(Author note: Place a small predict-the-table exercise early in 6.2. Show `__init__(self, title, author)` with `self.title = title; self.author = author`; create one `Book`. Ask the student to fill in a two-row table: attribute → value after `__init__` completes. This makes the `self.x = x` pattern observable, not just verbal, and connects to the stepper's live variable table.)*
- **Worked-example ideas:**
  1. A `Point` class: `__init__(self, x, y)` → `self.x = x; self.y = y`. Create two points, print coordinates. Simple, no methods yet.
  2. A `Book` class: `__init__(self, title, author, pages)`. Create two books with different values. Reuses Ch.1 string variables. *(Same `Book` class is used as the attribute-table predict exercise above.)*
  3. **The `name = name` anti-pattern (runnable demo — Rung 3):** A `Pet` class where `__init__` accidentally writes `name = name` instead of `self.name = name`. The object is created without error (the local variable vanishes silently). Then `my_pet.describe()` crashes with `AttributeError: 'Pet' object has no attribute 'name'`. Student traces back from the method to the `__init__` assignment to find the root cause. *(Verified with python3: object creation succeeds; AttributeError raised in the method, not in `__init__`.)*
- **Exercise ideas:**
  1. *Predict (Rung 1):* `Book` class given with `__init__(self, title, author, pages)`; fill in the attribute table for a specific `Book('Dune', 'Herbert', 412)` call. What is `b.title`? `b.pages`?
  2. *Complete (Rung 5):* `__init__` header given with three params; fill in three `self.x = x` lines.
  3. *Complete (Rung 5):* `__init__` stub with `pass`; write the whole body (3 attributes).
  4. *Fix (Rung 4):* `__init__` sets `self.nme = name` (typo); later code reads `self.name` → `AttributeError`. Find the bug in `__init__`, fix it. The bug and the error site are different lines — note this.
- **Misconceptions:** "`__init__` creates the object" — Python allocates first, `__init__` initializes (two-phase model, leading concept, not footnote); forgetting `self.` before an attribute name — `name = name` sets a local variable that vanishes; `__init__` runs without error; the crash appears later in the method that tries to read the attribute (the delayed-crash pattern); double underscores — why they exist: Python uses `__dunder__` names to mark methods the interpreter calls automatically in response to built-in operations (object creation, string conversion, arithmetic, comparison). A single underscore (`_x`) is just a convention for "internal, don't touch." Double underscores are reserved for Python's own machinery. Without this convention, a user method named `init` could silently shadow the constructor if Python searched for it. One sentence for students: "The double underscores tell Python that this method is special — Python calls it automatically, and the underscores protect it from clashing with any method you might happen to call `init`."
- **Error classes:** `AttributeError` (typo in attribute name; attribute read before `self.` assignment; delayed crash from `name = name` anti-pattern).
- **Recalls:** Ch.3 function parameters/arguments; Ch.1 assignment.

---

### 6.3 — Methods
- **Arc role:** Concept lesson 2. Shows that methods are functions that belong to an object and act on `self`'s data. Delivers the mechanical `self` translation that unifies all three partial framings from 6.1 and 6.2. Names encapsulation explicitly.
- **Concepts:** method definition syntax (inside the class, first param is `self`); calling a method with dot notation; method reading an attribute; method mutating an attribute; method returning a value; the mechanical `self` translation (`my_pet.describe()` = `Pet.describe(my_pet)`); encapsulation as a named CS principle; why the caller does not pass `self`.
- **Rung(s):** 5 Complete → 6 Write.
- **Strand:** core.
- **Warm-up (recall):** "When Python sees a `def` block, does it run the body immediately? What happens when Python reaches a call like `greet(name)`?" (Recalls Ch.3; answer: `def` saves the recipe, does not run it; the call triggers execution. Primes the parallel with method calls. This is a retrieval question, not a write task.)
- **Opening — bridge to prior experience:**
  *(Author note: Open with one sentence: "You have been calling methods since Chapter 1 — `'hello'.upper()` and `scores.append(item)` are both method calls. Now you define your own.")*
- **`self` mechanical translation (worked example — place in first or second subsection):**
  *(Author note: Show both call forms side by side with a comment. Example:*
  ```python
  my_pet.describe()          # what you write
  Pet.describe(my_pet)       # what Python does internally — same thing
  ```
  *Add: "Python rewrites the first form as the second. That is why you never pass `self` yourself — Python already passed the object for you." This one equivalence explains: why `self` appears in the `def` line, why you do not pass it when calling, and why `pet.describe(self)` raises a TypeError (it would pass two arguments where one is expected). Verified with python3.)*
- **Why Python requires explicit `self` (design rationale — one paragraph alongside the mechanical translation):**
  *(Author note: A curious student will ask: "Other languages hide this — Java uses `this` implicitly, you never write it in the `def` line. Why does Python make you write `self` every time?" Answer: the Zen of Python, Rule 2 — "Explicit is better than implicit." Python's choice makes the mechanical translation above legible: you can read any method `def` and immediately see that the first parameter is the receiver. There is no hidden magic, no special-cased syntax, no second way to name it — the parameter is just a parameter, and the caller happens to be the first one. This also means the mechanical translation (`my_pet.describe()` = `Pet.describe(my_pet)`) is not a metaphor; it is literally what Python does. One sentence: "Python requires you to name `self` explicitly because 'explicit is better than implicit' — you can see the receiver right in the `def` line, with no hidden machinery.")*
- **Encapsulation named:**
  *(Author note: After the first method worked example, add: "The CS principle here is **encapsulation** — the data (`self.name`, `self.species`) and the behavior that acts on it (`describe`) live inside the same object. You saw this comparison in 6.1 with the dict; now you have the vocabulary for it.")*
- **Worked-example ideas:**
  1. Add a `describe()` method to `Pet` that returns an f-string using `self.name` and `self.species`. Call it. Reuses Ch.1 f-strings and Ch.3 `return`. *(f-string inside a method body, per m12.)*
  2. Add a `birthday()` method that increments `self.age` by 1. Call it twice, print `age` before and after. Reuses Ch.1 reassignment.
  3. A `Counter` class: `__init__` sets `self.count = 0`; `increment()` adds 1; `reset()` sets back to 0; `value()` returns `self.count`. Reuses Ch.3 `return`.
- **Exercise ideas:**
  1. *Easy (boilerplate):* Class given with `__init__`; method header given (`def greet(self):`); fill in one-line body using `self.name` inside an f-string.
  2. *Medium (stub):* Class given with `__init__` and two method headers; write the two method bodies from a description (`add_hp`, `is_alive` returning a bool). *(This is the intermediate rung between boilerplate and blank, addressing m10.)*
  3. *Hard (blank):* Define a `Timer` class with `__init__(self, seconds)`, a `tick()` method (subtract 1), and `is_done()` returning whether seconds ≤ 0. Write from scratch.
  4. *Fix (Rung 4):* A `Pet` class is given. The student's script calls `pet.describe(pet)` — passing the instance as an explicit argument. Running it raises `TypeError: Pet.describe() takes 1 positional argument but 2 were given`. Explain using the mechanical translation why this happens, and write the correct call. *(Verified with python3.)*
- **Misconceptions:** passing `self` explicitly when calling (`pet.describe(self)` → TypeError — self-evident once the mechanical translation is shown); thinking a method is just a function attached to a dict key; calling a method as `describe(pet)` (function style) instead of `pet.describe()`.
- **Error classes:** `TypeError` (calling a method and accidentally passing `self`); `AttributeError` (method references `self.x` but attribute was never set in `__init__`); `NameError` (calling a method in function style — `describe(pet)` instead of `pet.describe()` — raises `NameError: name 'describe' is not defined` because `describe` does not exist in the module namespace). Verified with python3.
- **Recalls:** Ch.1 f-strings; Ch.3 `def`, parameters, `return`; Ch.1 assignment; `'hello'.upper()` and `list.append()` as prior method use (bridge).

---

### 6.4 — Many Instances
- **Arc role:** Concept lesson 3. The factory metaphor pays off: one class definition, many independent objects.
- **Concepts:** multiple instances from one class; each instance has its own attribute namespace; attributes on one instance do not affect another; attributes holding lists and dicts (spiral from Ch.4); iterate over a list of instances.
- **Rung(s):** 5 Complete → 6 Write.
- **Strand:** core.
- **Warm-up (recall):** "How do you append an item to a list? What does `append` return?" (Recalls Ch.4; answer: `my_list.append(item)`, returns `None`. Sets up `self.inventory.append(item)` in worked examples.)
- **Attribute-table predict exercise (Rung 1):**
  *(Author note: Open 6.4 with a short Rung 1 exercise: two `Creature` instances are created with different `name` and `hp` values. Show a four-cell table — two attributes, two instances — and ask the student to fill it in before running. This makes instance independence concrete and observable, and connects to the stepper's live variable table.)*
- **Worked-example ideas:**
  1. Create three `Pet` instances; show that modifying `cat.name` does not affect `dog.name`. Reuses Ch.1 variables.
  2. A `Creature` class: `__init__(self, name, hp, attack)` plus `self.inventory = []`; `pick_up(self, item)` appends to `self.inventory`; `show_stats(self)` prints all using an f-string. Create two Creatures; have each pick up different items; show inventories are separate. Reuses Ch.4 list methods (`append`) and Ch.1 f-strings.
  3. A list of three `Creature` instances; loop over them and call `show_stats()` on each. Reuses Ch.4 `for` + list iteration.
- **Exercise ideas:**
  1. *Predict (Rung 1):* Attribute-table exercise described above.
  2. *Easy (Rung 3):* Two `Creature` instances given; call `pick_up` on each with different items; print both inventories.
  3. *Medium (Rung 5):* Write the `Creature` class `__init__` and two methods from a description.
  4. *Hard (Rung 6, blank):* Define a `Player` class with `name`, `score` (starts 0), and an `items` list; add `earn_points(n)` and `add_item(item)` methods; create two players and play a short scripted game.
  5. *Fix (Rung 4):* A `Creature` class is given where `inventory = []` appears at class level (not inside `__init__`). Two creatures are created; each picks up a different item; both inventories print the same two items. Explain why, then move `self.inventory = []` into `__init__` and verify the lists are independent. *(Verified with python3: class-level mutable is shared — Python docs §9.3.5 trap.)*
- **Misconceptions:** shared mutable class-level variable (the Python docs §9.3.5 trap — `tricks = []` at class level vs. `self.tricks = []` in `__init__`; show the broken version, explain why, fix it); thinking instances share state.
- **Error classes:** `AttributeError` (accessing attribute before `__init__` runs; typo in attribute name).
- **Recalls:** Ch.4 lists and `append`; Ch.4 dicts; Ch.2 `for` loops; Ch.1 f-strings.

---

### 6.5 — A `Note` Class
- **Arc role:** Strand-application lesson (sound). Apply classes to model music: a `Note` has pitch and duration; methods play it, transpose it, and describe it. The debug exercise applies the Ch.5 four-step debugging protocol explicitly.
- **Concepts:** (no new concepts — pure application) attributes to hold domain data; methods to compute with that data; method calling `play()` (the course's sound API) using `self` attributes; returning a new `Note` from a method.
- **Rung(s):** 5 Complete → 6 Write.
- **Strand:** sound.
- **Warm-up (recall):** "Write a `for` loop that iterates over a list called `notes` and prints each item." (Recalls Ch.2 + Ch.4; directly previews the melody-loop worked example.)
- **Worked-example ideas:**
  1. `Note` class: `__init__(self, pitch, duration)` → `self.pitch = pitch; self.duration = duration`. `play(self)` calls `play(self.pitch, self.duration)`. Create a note and play it. *(Scope note for the author: the method is named `play` and it calls the global API function also named `play`. The LEGB rule from Ch.3 applies: Python searches local scope first, then the global/module scope — it does NOT search `self`. So bare `play(…)` in the method body reaches the API function; `self.play()` would call the method. One sentence to connect this to prior learning: "Remember the LEGB rule from Chapter 3 — Python searches local scope first, then the module/global scope, never on `self`. That is why bare `play(…)` here reaches the sound API, not the method." Move this explanation to a sidebar or "Things to know" box — it should not be the first thing students read. Verified with python3: no recursion occurs.)*
  2. Add `transpose(self, semitones)` returning a new `Note` with `self.pitch + semitones`. Play the original and the transposed note. Reuses Ch.3 `return`.
  3. A list of `Note` objects forming a melody; loop and call `.play()` on each. Reuses Ch.4 list iteration + Ch.2 `for`.
- **Exercise ideas:**
  1. *Easy:* `Note` class given with `play`; add `double_duration()` method that returns a new `Note` with `self.duration * 2`.
  2. *Medium:* `Note` stub given; write `transpose` and a `describe()` method that returns an f-string with pitch and duration. Reuses Ch.1 f-strings.
  3. *Hard (blank):* Build a `Melody` class: `__init__` takes a list of `Note` objects; `play_all()` loops and plays each; `transpose_all(n)` returns a new `Melody` with each note transposed. Write from scratch.
  4. *Fix (Rung 4) — four-step protocol:* A `Note` class is given where `__init__` accidentally sets `self.ptich = pitch` (typo). A call to `n.play()` raises `AttributeError: 'Note' object has no attribute 'pitch'. Did you mean: 'ptich'?` *(Note to author: Python 3.10+ DOES show "Did you mean: 'ptich'?" for this case — `ptich` is stored on the object, so Python finds a similarly-named attribute and suggests it. The suggestion names the attribute that IS stored (the typo), not a corrected spelling. It tells the student where the bug lives — in `__init__` — not how to spell `pitch`. For the `name = name` anti-pattern, no suggestion appears because nothing is stored on `self` to find. These are distinct cases; do not conflate them.)* The exercise asks: "Apply the Ch.5 four-step protocol before you fix anything — write each step as a comment: (1) exception + message, (2) line that raised it, (3) trace back through the stack — where was the attribute supposed to be set?, (4) hypothesis and fix." This is the highest-reasoning-distance debug scenario in the chapter: the error site (`play()`) is not the bug site (`__init__`). The "Did you mean" suggestion confirms the typo is stored — but finding it requires tracing back to `__init__`, not just reading the suggestion.
- **Misconceptions:** confusing `play(self.pitch, …)` (calling the global sound API function) with `self.play()` (calling the method on self) — recall LEGB from Ch.3; this is a spiral, not a new rule. Returning a new object from a method (students may try to mutate in place instead). Misreading the "Did you mean" suggestion: the suggestion names the attribute that IS stored (the typo in `__init__`), not the corrected spelling — it points to the bug site, not the fix. For the `name = name` anti-pattern, no suggestion appears because nothing is stored on `self`.
- **Error classes:** `AttributeError` (misspelled `self.ptich` or `self.durtion`; error surface is the method, bug source is `__init__`).
- **Recalls:** Ch.4 lists; Ch.3 `return`; Ch.3 LEGB rule (scope); Ch.2 `for`; Ch.5 four-step debugging protocol; Ch.1 f-strings; sound API from Ch.0 / 1.7 / 4.6.

---

### 6.6 — A `Synth` Class *(Strand — Chapter Checkpoint)*
- **Arc role:** Strand-application lesson (sound) + chapter checkpoint. Two `Synth` instances play a duet; demonstrates that objects with different settings produce independent, simultaneous musical voices.
- **Concepts:** (application) multiple instances holding different settings; methods that use `self` attributes to configure sound output; composing two objects together in a script.
- **Rung(s):** 6 Write (checkpoint).
- **Strand:** sound.
- **Time-budget note (author):** 6.6 contains 3 worked examples + 5 exercises, one of which (Ex 3, Drumkit from blank) is a full design-and-build checkpoint. The Drumkit exercise alone is plausibly 15 minutes at Rung 6. Time-budget carefully: exercises 4 and 5 (fix + predict-explain) can be compressed into a single compound exercise, or the checkpoint can be split onto a separate page, to stay within the 25-minute cap.
- **Warm-up (recall):** "Write one line that creates a `Synth` instance with `waveform='sine'` and `volume=0.8`, and one line that creates a second independent `Synth` with different settings." (Directly primes instance-independence thinking for the checkpoint; recall from 6.4–6.5 rather than Ch.4 list mechanics.)
- **Worked-example ideas:**
  1. `Synth` class: `__init__(self, waveform, volume)` → stores both. `play_note(self, pitch, duration)` calls the sound API with `self.waveform`, `self.volume`, pitch, duration. Create one `Synth` and play a note.
  2. Two `Synth` instances (e.g. `bass` and `lead`); each plays a different note sequence alternating to form a duet. Reuses Ch.4 list iteration.
  3. Add `set_volume(self, v)` that updates `self.volume`; show that changing one synth's volume does not affect the other. Reuses attribute mutation from 6.3.
- **Exercise ideas:**
  1. *Easy (Rung 3):* `Synth` class and two instances given; add a `mute()` method that sets `self.volume = 0`.
  2. *Medium (Rung 5):* Add `transpose_and_play(self, notes, offset)` that plays each note in a list shifted by `offset`. Reuses 6.5 transpose logic.
  3. *Hard (Rung 6, checkpoint, blank):* Design and build a `Drumkit` class: `__init__` takes a `pattern` list and a `tempo`; `play_pattern()` iterates and plays hits vs. silences. Then create two `Drumkit` instances with different patterns and play both. Full write from scratch; no starter.
  4. *Fix (Rung 4):* A `Synth` class is given where `volume = 0.6` appears at class level (not in `__init__`). A `mute()` method sets `Synth.volume = 0` (mutating the class attribute). Two instances are created; calling `bass.mute()` silences `lead` as well. Move `self.volume = volume` into `__init__` and verify the instances are independent. *(Verified with python3: class-level volume mutation affects all instances; instance-level does not.)*
  5. *Predict + explain (Rung 1, companion to fix):* Two `Synth` instances are created with different volumes. The student predicts what `lead.volume` will be after `bass.set_volume(0)` — then explains why using the mechanical translation from 6.3: `set_volume` updates `self.volume` on the instance it is called on only. *(Verified with python3.)*
- **Misconceptions:** expecting `synth1.set_volume(0)` to silence `synth2` — each instance holds its own `volume` attribute; `set_volume` only updates the instance it is called on (`self`); class-level `volume = 0.6` creates a shared attribute, not per-instance state (recycled from 6.4 in the fix exercise).
- **Error classes:** `AttributeError`; revisit `TypeError` (passing `self` explicitly).
- **Recalls:** everything in the chapter; Ch.4 lists; sound API.

---

## Progression / difficulty ramp

| Lesson | Peak rung | What student writes from scratch | Debug / fix exercise |
|--------|-----------|----------------------------------|----------------------|
| 6.1 | 4 Fix | Add an attribute read/print line | Fix missing attribute → AttributeError |
| 6.2 | 5 Complete | Write full `__init__` body; predict attribute table | Fix typo in `__init__` → delayed AttributeError in method |
| 6.3 | 6 Write | A complete 3-method class (Timer) | Fix wrong call `pet.describe(pet)` → TypeError |
| 6.4 | 6 Write | A `Player` class with list attribute + 2 methods | Fix class-level list trap → instances share inventory |
| 6.5 | 6 Write | A `Melody` class wrapping a list of `Note` objects | Fix attribute typo `self.ptich` → AttributeError in `play()`; apply Ch.5 four-step protocol |
| 6.6 | 6 Write | A `Drumkit` class from blank (checkpoint) | Fix class-level `volume` trap + predict-and-explain instance independence |

Scaffolding fade across the chapter: 6.1 exercises keep `__init__` fully pre-written (Rungs 1–3 only); 6.2 introduces completing an `__init__` body (Rung 5); 6.3 hard exercise writes a whole class from blank; by 6.6 the checkpoint is a full blank. The ramp is: Predict (6.1, 6.2, 6.4) → Fix (6.1, 6.2, 6.3, 6.4, 6.5, 6.6) → Complete (6.2, 6.3) → Write (6.3–6.6).

Debugging thread: a fix exercise appears in every lesson (6.1 through 6.6), in escalating complexity — simple missing attribute (6.1) → delayed-crash `name = name` anti-pattern (6.2) → wrong-call `TypeError` (6.3) → class-level-list trap (6.4) → attribute typo surfacing in a different method with Ch.5 four-step protocol applied (6.5) → class-level attribute trap recycled in a new sound domain, plus predict-and-explain (6.6).

---

## Chapter Challenge (outline)

Six to eight exercises, ordered easy → hard, mixing the chapter's concepts and strands. Scaffolding fades to blank by exercise 5.

1. *Predict (rung 1):* Given a short class definition and two method calls, predict what each `print` outputs — tests understanding of `self` and instance independence.
2. *Arrange (rung 2):* Parsons — reassemble a `Dog` class: `__init__`, two methods, two instance creations in the right order.
3. *Fix (rung 4):* A broken `BankAccount` class — `__init__` sets `self.blnce` (typo); `deposit` reads `self.balance`; `AttributeError` on run. Find the typo in `__init__` that causes the `AttributeError` in `deposit`, and fix it. (One bug, one fix — the typo is the root cause; the error surfaces later.)
4. *Complete (rung 5, core):* A `Scoreboard` class with `__init__` and `add_score(name, points)` (updates a dict attribute); write `top_scorer()` returning the name with the highest points. Reuses Ch.4 dict iteration. *(Scaffolding note: use a for loop and a running-max variable — `max(key=...)` has not been taught and is out of scope here.)*
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
- **`self` is a magic keyword:** `self` is the object on the left of the dot — `my_pet.describe()` passes `my_pet` as `self`. Give this one-sentence anchor in 6.1; deliver the full mechanical translation (`my_pet.describe()` = `Pet.describe(my_pet)`) in 6.3.
- **Forgetting `self.` in `__init__` (the `name = name` anti-pattern):** sets a local variable that vanishes; `__init__` runs without error; the crash comes later when a method tries to read the attribute. This delayed-crash pattern is the hardest OOP debugging scenario for novices. Demo in 6.2 (worked example 3) and exercise 4.
- **`__init__` creates the object:** it initializes, it does not allocate. Python allocates the object first; `__init__` fills it in (two-phase model). Lead concept in 6.2.
- **Passing `self` explicitly when calling:** `pet.describe(self)` → TypeError; self-evident once the mechanical translation is shown. Demo in 6.3.
- **Shared mutable class variable (the tricks trap):** placing `inventory = []` at class level means all instances share one list. Demo in 6.4 (debug exercise) and recycled in 6.6.
- **Instances share state:** modifying one instance's attribute silently changes another's (only true for class-level mutables). In 6.4 and 6.6, explicitly demonstrate independence.
- **Method ≠ regular function:** students try to call a method as `describe(pet)` (function style) instead of `pet.describe()`. Shown in 6.3.
- **Misreading the "Did you mean" suggestion for instance attribute typos:** Python 3.10+ DOES show "Did you mean: 'ptich'?" when `self.ptich` is stored and `self.pitch` is read — it searches all attributes on the object and suggests close matches. The suggestion names the attribute that IS stored (the misspelled one), not the corrected spelling. Students should read it as "the typo you stored is `ptich`" and trace back to `__init__` to fix it. The suggestion does NOT appear for the `name = name` anti-pattern because nothing is stored on `self` — there is no attribute to suggest.

### Error classes
- **`AttributeError`:** accessing `self.x` where `x` was never assigned (typo, wrong name, attribute set conditionally and method called before the condition ran; or `name = name` anti-pattern in `__init__`). Appears in every lesson. Error message format: `'ClassName' object has no attribute 'x'`. When a similarly-named attribute IS stored on the object (e.g. `self.ptich` stored, `self.pitch` read), Python 3.10+ appends "Did you mean: 'ptich'?" — the suggestion names the stored typo, not the fix. When nothing similar is stored (the `name = name` case), no suggestion appears. Write checker copy against the bare message only; do not assert presence or absence of the suggestion.
- **`TypeError` (wrong arg count):** calling `pet.describe(self)` passes two arguments where one is expected; Python counts the hidden `self` plus the explicit one. Shown in 6.3; revisited in 6.6.
- **`NameError`:** referencing `self` outside a method (in top-level code). Rare but worth one mention.

---

## Sources

- Python docs — tutorial §9 "Classes": [https://docs.python.org/3/tutorial/classes.html](https://docs.python.org/3/tutorial/classes.html) — authoritative syntax, `__init__`, `self`, `AttributeError`, the shared-mutable-variable trap (§9.3.5).
- *Think Python* (Downey), 2nd ed., ch.15 "Classes and objects", ch.16 "Classes and functions", ch.17 "Classes and methods": [https://greenteapress.com/thinkpython2/html/thinkpython2016.html](https://greenteapress.com/thinkpython2/html/thinkpython2016.html) — factory metaphor; teaching order (attributes before methods); the conceptual shift "objects are the active agents" for `self` (ch.17); positional-arg confusion when calling methods.
- *How to Think Like a Computer Scientist* (HTTLACS), 3rd ed., ch.15 "Classes and objects I" & ch.16 "Classes and objects II": [https://openbookproject.net/thinkcs/python/english3e/classes_and_objects_I.html](https://openbookproject.net/thinkcs/python/english3e/classes_and_objects_I.html) — factory metaphor; `__init__` initializes (does not create); `self` is the new object being set up; `Rectangle` example for multiple instances; `AttributeError` in context.
- *Python for Everybody* (Severance), ch.14 "Objects": [https://www.py4e.com/html3/14-objects](https://www.py4e.com/html3/14-objects) — scope cross-check; `__init__` as optional constructor convention; `dir()` for attribute inspection; `AttributeError` on missing attribute; confirms this chapter's scope is right for the level.
- CSTA K-12 CS Standards (2017 revised), Level 2 (grades 6-8), Algorithms & Programming strand: [https://csteachers.org/k12standards/](https://csteachers.org/k12standards/) — confirms that decomposing problems into objects with state and behavior is a level-2 expectation; no inheritance required at this level.
