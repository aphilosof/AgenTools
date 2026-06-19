# Review — Chapter 6 (Classes and Objects)
**Verdict:** Needs fixes
**Reviewed against:** Python 3.14.5, CURRICULUM-STRUCTURE.md, AUTHORING.md

---

## Findings

### BLOCKER

None. No inheritance, no class methods, no `@property`, no dunder beyond `__init__` anywhere in the plan. Hard cap is honoured throughout.

---

### MAJOR

**1. [MAJOR] Debugging thread claim vs. exercise reality (Progression section + lessons 6.3–6.6)**

The plan states: *"an AttributeError exercise appears in every lesson (6.1 through 6.6), in escalating complexity."* This is false for four of the six lessons.

- 6.1 ✓ Exercise 3: spot-the-AttributeError (missing colour attribute)
- 6.2 ✓ Exercise 3: typo AttributeError (self.nme vs self.name)
- 6.3 ✗ No debugging exercise — all three exercises are boilerplate/stub/blank-write
- 6.4 ✗ No debugging exercise — exercises are run-and-observe / write
- 6.5 ✗ No debugging exercise
- 6.6 ✗ No debugging exercise

CURRICULUM-STRUCTURE.md §E requires debugging woven from Ch.2 onward ("spot-the-error / fix-the-code exercises recur from Chapter 2 onward"). The plan's own progression table promises escalating AttributeError exercises in every lesson but doesn't deliver them. The Chapter Challenge partially recovers (exercises 3 and 5 have fixes), but the individual lessons 6.3–6.6 all need one debug exercise each.

**Fix:** Add one fix/debug exercise to 6.3, 6.4, 6.5, and 6.6. Natural candidates:
- 6.3: `pet.describe(self)` → TypeError — matches the misconception already listed
- 6.4: class-level `tricks = []` vs `self.tricks = []` trap — matches the misconception already listed
- 6.5: `self.ptich` typo → AttributeError (misspelled attribute name mentioned in misconceptions)
- 6.6: `synth1.set_volume(0)` silences `synth2` (wrong expectation) → show it does not, explain why

---

**2. [MAJOR] Warm-up retrieval questions absent from all six lessons**

CURRICULUM-STRUCTURE.md §B mandates: "Warm-up — a quick recall question from an earlier lesson (spiral / retrieval)" as the opening beat of every lesson. Ch.5 provides explicit warm-up questions in all five lessons. Ch.6 has none in any lesson.

**Fix:** Add one warm-up question per lesson. Suggestions:
- 6.1: "What does a function return if you forget the `return` statement?" (recalls Ch.3)
- 6.2: "What is the difference between a parameter and an argument?" (recalls Ch.3)
- 6.3: "Write one line that calls `print` inside a `def` block and returns a value." (recalls Ch.3)
- 6.4: "How do you append an item to a list? What does `append` return?" (recalls Ch.4)
- 6.5: "Write a `for` loop that plays each item in a list." (recalls Ch.2 + Ch.4)
- 6.6: "What is the difference between modifying a list with `append` vs reassigning the variable?" (recalls Ch.4)

---

### MINOR

**3. [MINOR] Note.play() name collision is unexplained**

The plan has `Note.play(self)` call the global sound API function also named `play()`. This works correctly in Python (bare `play(...)` in a method body resolves to the global scope, not `self.play()` — verified with Python 3.14). But the plan lists as a misconception "confusing `play(self.pitch, …)` with `self.play()`" without explaining *why* they are different or *how* Python resolves the bare name. An 11-year-old who has just learned about methods will naturally ask: "if I'm inside a method called `play` and I write `play(…)`, doesn't that call itself?" The answer requires understanding name scoping (local → enclosing → global), which is Ch.3 knowledge the student has — but the plan doesn't connect to it.

```python
# Verified: inside Note.play(), bare play() goes to global scope
def play(pitch, duration):  # global sound API
    print(f"API: play({pitch}, {duration})")

class Note:
    def __init__(self, pitch, duration):
        self.pitch = pitch
        self.duration = duration
    def play(self):
        play(self.pitch, self.duration)  # calls global, not self — no recursion

n = Note(60, 0.5)
n.play()
# Output: API: play(60, 0.5)
```

**Fix (pick one):** Either (a) rename the method `sound()` or `emit()` to eliminate the collision, or (b) add a short explanation to the misconception: "Python looks for `play` in local scope first, then the enclosing module scope — not on `self`. So `play(…)` calls the API; `self.play()` would call the method."

---

**4. [MINOR] `self` appears in 6.1 examples without being taught until 6.2**

Lesson 6.1's worked examples show a `Pet` class with `__init__(self, name, species)` and `self.name = name`. The concept list for 6.1 does not include `self`; the plan first teaches `self` in 6.2. A student working through 6.1 will see `self` used without explanation. The PRIMM / run-before-explain pattern justifies this for `__init__`, but `self` is so syntactically unusual (especially the apparent "parameter you never pass") that it needs a one-sentence placeholder in 6.1, not silence.

**Fix:** Add a single sentence in 6.1 — something like "You'll see a special word, `self`, in the class code; we'll unpack exactly what it means in lesson 6.2. For now, just treat it as a required word that every method starts with." This is already implicit in how Think Python/HTTLACS introduce classes but the plan doesn't specify it.

---

**5. [MINOR] Subsection structure absent (inconsistent with ch-5 format)**

Ch.5 breaks every lesson into explicit `Subsection A / B / C` blocks, each teaching one concept and carrying its own worked examples and exercises. Ch.6 does not. CURRICULUM-STRUCTURE.md §A requires "one concept per screen"; §B requires the subsection as the atom. Ch.6 lessons bundle multiple concepts into one block. For example, 6.3 lists six distinct sub-concepts (definition syntax; dot-call; reading attributes; mutating attributes; returning a value; why self isn't passed) with a single worked-example set — too dense for one screen.

Ch.7 also lacks subsection breakdown, so this is a shared format issue. Worth fixing here because ch-6 lesson plans drive content authoring.

**Fix:** Break 6.1–6.4 into 2–4 explicit subsections each, one concept per subsection, carrying their own worked example and exercise trio. 6.5 and 6.6 (pure application) may remain as single-subsection lessons since they introduce no new concepts.

---

**6. [MINOR] Challenge exercise 3 says "find both bugs" but there is one bug**

BankAccount exercise 3: `__init__` sets `self.blnce` (typo); `deposit` reads `self.balance` → `AttributeError`. Verified:

```python
class BankAccount:
    def __init__(self):
        self.blnce = 0        # typo

    def deposit(self, amount):
        self.balance += amount  # reads intended name → AttributeError

acct = BankAccount()
acct.deposit(100)
# AttributeError: 'BankAccount' object has no attribute 'balance'
```

There is one root bug (the typo in `__init__`) that appears in two places (write vs. read of the attribute). Calling this "both bugs" is imprecise and will confuse students who know they need to fix only one character.

**Fix:** Change the description to "find the typo in `__init__` that causes the `AttributeError` in `deposit`" — one bug, one fix, tracing from the error to its source. This is actually a better debugging exercise than implied by "two bugs."

---

**7. [MINOR] Chapter recap absent (consistent with ch-5 and ch-7 but spec-required)**

CURRICULUM-STRUCTURE.md §C lists "Chapter recap — Codex consolidation + a retrieval set for later spiral" as the sixth required chapter-arc element. Ch.5, Ch.6, and Ch.7 all omit it. This is a shared gap across all reviewed plans and is not specific to ch-6, but it should be flagged here for completeness.

---

## Python verification summary

All Python claims verified against Python 3.14.5:

| Claim | Result |
|-------|--------|
| `AttributeError` message: `'ClassName' object has no attribute 'x'` | Confirmed |
| Shared mutable class variable (§9.3.5 tricks trap) | Confirmed: all instances share one list |
| `self.tricks = []` in `__init__` gives each instance its own list | Confirmed |
| `pet.describe(self)` → `TypeError: takes 1 positional argument but 2 were given` | Confirmed |
| Local `name = name` in `__init__` does not set an attribute | Confirmed → AttributeError on access |
| `Note.play()` calling global `play()` does not recurse | Confirmed: name resolves to global |
| `Timer.is_done()` returning `seconds <= 0` | Confirmed: False → True after 2 ticks |
| `Scoreboard.top_scorer()` using `max(dict, key=dict.get)` | Confirmed: returns correct key |

No version-dependent behaviour found in the plan's scope.

---

## What's strong

- **No-inheritance discipline is airtight.** The plan enforces the hard cap in the overview, the concept map, and the misconceptions list, and every exercise stays inside it. This is the single most important constraint for this chapter and it is perfectly held.
- **Shared-mutable-class-variable trap is handled well.** The plan explicitly teaches the `tricks = []` at class level vs. `self.tricks = []` in `__init__` (matching Python docs §9.3.5), names it as a misconception, and places it in a worked-example in 6.4. Many introductory courses omit this entirely.
- **Concept teaching order is sound.** The `class → attribute → __init__ → method → multiple instances → application` chain is correctly sequenced with each concept depending only on what precedes it. Difficulty ramps appropriately from rung 5 in 6.1 to full-blank-editor in 6.6.
- **Chapter Challenge is well-designed.** The eight exercises cover all six chapter concepts with genuine difficulty spread: predict (rung 1), Parsons arrange (rung 2), fix (rung 4), complete (rung 5 ×2), write (rung 6 ×2), and one open-ended narrative-only stretch. The BankAccount debug, Scoreboard dict-attribute, Library list-of-dicts, and Playlist class all apply directly to the stated chapter spine.

---

## Coverage check

| Spine concept | Coverage | Notes |
|---------------|----------|-------|
| `class` keyword | Well covered (6.1 hook + all lessons) | |
| `attribute` | Well covered (6.1–6.2) | |
| `__init__` | Well covered (6.2 dedicated lesson) | |
| `self` | Covered (6.2 explains; 6.3 deepens) | Appears unused in 6.1 without note — see Finding 4 |
| `method` | Well covered (6.3 dedicated) | Debugging exercise missing — see Finding 1 |
| `instance` | Well covered (6.1 + 6.4) | |
| Multiple instances / independence | Well covered (6.4 + 6.6) | |
| `AttributeError` | Covered in 6.1–6.2 exercises; absent in 6.3–6.6 exercises despite plan's claim | See Finding 1 |
| No inheritance / no class methods / no properties / no dunder beyond `__init__` | Fully enforced — CLEAN | |
