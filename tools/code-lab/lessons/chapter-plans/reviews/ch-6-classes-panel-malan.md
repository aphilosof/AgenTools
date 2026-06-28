# Panel Review — Ch.6 Classes — David Malan (CS50)
**Verdict:** Solid

---

## Findings (from my lens)

### 1. [BLOCKER] Lesson 6.5 — The "Did you mean: 'ptich'?" claim is factually wrong

The plan states that when `__init__` sets `self.ptich` (typo) and `play()` reads `self.pitch`, Python 3.14 produces: `'Note' object has no attribute 'pitch'. Did you mean: 'ptich'?`

Verified with python3 3.14.5: the error is `'Note' object has no attribute 'pitch'` — no suggestion. Python's "Did you mean" feature for `AttributeError` (added in CPython 3.12–3.13) covers module-level attributes and class-method names, not instance attributes set dynamically in `__init__`. Because `self.ptich` is created at runtime, CPython has no static knowledge of it at error time and produces no suggestion.

The plan makes this claim explicit: *"Python 3.14 form — the suggestion points straight at the typo"*, and tells authors not to hard-match the message without the suggestion. Both instructions are built on a false premise.

**Fix:** Remove the "Did you mean" framing entirely. The correct teachable point is the opposite: the error fires at `play()` even though the bug is in `__init__`, because the attribute never got created. That is the valuable lesson — *the error site is not the bug site* — and it stands without the suggestion. Rewrite the exercise note to say: "Python reports the error at `play()`, the line that tried to read `self.pitch`. But the bug is in `__init__`, which stored `self.ptich` instead. Python cannot tell you what you meant — it only knows the name you asked for does not exist."

---

### 2. [MAJOR] Lesson 6.1 — `__init__` appears before it is explained; the "treat self as a required word" deferral is weak scaffolding

The hook lesson is correct in philosophy — run something real before explaining it — but the specific advice to students is too vague: *"treat it as a required word that every method starts with. Lesson 6.2 will explain exactly what it means."* Students who see `__init__(self, name, species)` and a body full of `self.name = name` have three unresolved concepts simultaneously: the dunder, `self` in the signature, and `self.` on the left side of assignments. "Treat it as magic for now" works in CS50 for one new mystery at a time. Three at once is too much.

The hook lesson code in the worked examples also uses `__init__` fully, not a simpler "pre-init" form. There is no gentler first rung here.

**Fix (two options):** Either (a) show a bare class with no `__init__` — attributes set directly after instantiation (`my_pet = Pet(); my_pet.name = "Rex"`) — as the genuine first-contact form, then layer `__init__` in 6.2 as the upgrade; or (b) keep the full `__init__` in 6.1 but provide a tighter scaffolded explanation that names all three things immediately and briefly: "`__init__` is the setup method; `self` is the object being set up; `self.name = name` stores the value on the object." Either works. The current "one magic word at a time" instruction is not enough, and the exercises jump straight to filling in `__init__` bodies before `self` is understood.

---

### 3. [MAJOR] Missing mental model: what does `self` *mean* mechanically?

The plan names the correct mental model in the Misconceptions list ("self is the new object being set up") but the lesson sequence does not make this concrete before students write `self.x = x` in exercise bodies. CS50's approach — show the hidden call Python makes, name it — would help enormously here.

Specifically, the plan never explains to students that `my_pet.describe()` is Python shorthand for `Pet.describe(my_pet)`. This is the single most clarifying fact about `self`: it is not magic syntax; it is the instance, passed automatically as the first argument. Without that one sentence, `self` remains an incantation. With it, the TypeError from `pet.describe(pet)` in 6.3 becomes self-explanatory instead of surprising.

**Fix:** Add one worked example in 6.2 or 6.3 that shows both call forms side by side:
```python
my_pet.describe()          # Python rewrites this as:
Pet.describe(my_pet)       # — same call, just explicit
```
This is a one-screen insight that pays off across all of 6.3 and 6.6.

---

### 4. [MINOR] Lesson 6.4 — The `Creature` class appears in 6.2 as a preview, then again in 6.4 as the main worked example

The plan introduces `Creature` in 6.2 (Worked-example idea 3: "A `Creature` stub (previewing 6.4)") and then uses `Creature` again as the central worked example in 6.4. This is good spiral design in principle, but the 6.2 appearance is a preview of 6.4 scope — attributes include `hp`, `attack`, and later `inventory`. Students seeing `hp` and `attack` in 6.2 may reasonably expect to do something with them there. The preview creates cognitive debt.

**Fix:** In 6.2, either (a) use a completely different class for the example (keep `Point` and `Book`, drop `Creature` — the note says to preview 6.4, but the preview isn't doing conceptual work that `Book` can't do), or (b) if `Creature` is kept, make it identical to what appears in 6.4 and note explicitly: "You will add methods to this class in Lesson 6.4." Currently the plan says the 6.2 `Creature` only has `__init__` — no methods — which means students see a class they cannot do anything with. That is a fine first example; just don't also promise it will grow unless you deliver on that promise in 6.4.

---

### 5. [MINOR] Lesson 6.6 — Checkpoint rung escalation is correct but the debug exercise is a predict, not a fix

The rung table shows 6.6's debug exercise as "Predict + explain: `set_volume` on one instance doesn't affect another." The chapter structure (CURRICULUM-STRUCTURE.md §A) requires at least one *fix* exercise per lesson "wherever the concept can plausibly break." A predict-and-explain is valuable but does not substitute for a code-fix exercise at the checkpoint.

**Fix:** Add a companion fix exercise to 6.6 where a student's Synth duet script has a class-level `volume` attribute (the 6.4 trap, applied to Synth) that causes both Synth instances to go silent when one is muted. The student must move the attribute into `__init__`. This closes the chapter by recycling the biggest misconception in a new domain, with a hands-on fix.

---

### 6. [MINOR] No explicit contrast: class vs. dict vs. namedtuple

Students coming from Ch.4 have seen dicts as the natural way to bundle named data. The plan never asks: "why not just use a dict?" This is the most important comparison for an OOP intro chapter — and it's the one CS50 always makes. A dict works fine for `{"name": "Rex", "species": "dog"}`. But when you want `describe()` to be part of the data structure, or when you want Python to enforce the shape, a class is the right tool. Without this comparison, OOP feels like a harder way to do what dicts already do.

**Fix:** Add one paragraph in 6.1 or 6.2 that shows the equivalent dict and asks: "What breaks if you add a `describe()` function that takes the dict as an argument?" Then show how the class bundles the data and its operations together, and names that as **encapsulation** (even without using the word formally — the idea is "the code that acts on the data travels with the data").

---

## Continuity notes

**Well-woven from c1–c3:**
- Ch.3 `def`, params, `return` are used correctly as the bridge to methods. The warm-ups in 6.2 and 6.3 recall exactly the right Ch.3 concepts (parameter vs argument; the `def greet` warmup).
- Ch.1 f-strings and variables appear naturally in `Pet` class examples.
- Ch.1 string immutability is not re-taught, which is correct — it appears as used context.
- The call-stack / frame model from c3 (Lesson 3.4 Scope) is a strong foundation for understanding how `self` gets its own local frame per call. The plan doesn't exploit this explicitly but it's there.

**Missing connections:**
- Ch.3 taught scope with the frame/whiteboard model. That model applies directly to how `self` works in a method call — each `my_pet.describe()` call opens a frame where `self` is bound to `my_pet`. The plan does not make this bridge. It should.
- Ch.2 `try/except` is recalled in c3's exercises. Ch.6 re-introduces `AttributeError` without connecting it to the existing Codex error taxonomy from Ch.5. The plan should note: "students have seen this error class named in 5.4B — recall it, don't re-introduce it as new."
- Ch.4 collections are spiralled in well (inventory list, dict in `Scoreboard`). The dependency on Ch.4 being prerequisite knowledge is correctly assumed.

**Not re-taught (correct):**
- f-strings (Ch.1) — used but not explained again.
- `for` loops (Ch.2) — used in 6.4/6.5 over lists of instances without re-teaching.
- `return` (Ch.3) — methods that return values build on Ch.3 without regression.

---

## What's strong

- **The debugging thread is the best in the course so far.** Six lessons, six debug exercises, escalating from typo → wrong-call TypeError → class-level-list trap → attribute-typo surfacing in a different method → predict-and-explain. This is textbook incremental complexity. Every exercise matches a named misconception. The class-level mutable list trap (6.4) being demonstrated as broken code before the fix is CS50-grade pedagogy — show the failure first.

- **The `Note` → `Melody` → `Synth` strand arc is beautifully sequenced.** The music domain works because pitch and duration are obviously the data, and `play()` is obviously the operation. Students who have used the sound API since Ch.1 will feel the aha moment when those calls move inside an object. The two-Synth duet in 6.6 is a genuinely motivating culmination — two independent voices, controlled by two objects. That is the factory metaphor made audible.

- **The "concepts owned" hard cap is enforced correctly.** No inheritance, no `@property`, no `__str__`, no class variables as a feature. This is a well-scoped chapter. The shared-mutable-list trap is handled as a misconception to avoid, not a feature to teach, which is exactly right at this level.
