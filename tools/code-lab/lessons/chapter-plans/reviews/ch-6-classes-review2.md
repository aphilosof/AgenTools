# Deep Review Round 2 — Ch.6 Classes
**Verdict:** Needs fixes
**Python verified on:** Python 3.14.5 (Darwin, Clang 21.0)

---

## Round-1 fixes audit

**B1 — "Did you mean" claim → NEW-PROBLEM-INTRODUCED (blocker)**

The synthesis directed the plan to remove the "Did you mean: 'ptich'?" claim entirely and replace it with "Python cannot tell you what you meant." The revised plan now says, in the 6.5 exercise note: "Python cannot tell you what you meant — it only knows the name you asked for does not exist." And in the chapter misconceptions section: "Python's 'Did you mean' feature (Python 3.10+) covers module-level and class-method lookups, not `self.x` stored at runtime."

Both statements are factually wrong on Python 3.14.5. Verified:

```
$ python3 -c "
class Note:
    def __init__(self, pitch, duration): self.ptich = pitch
    def play(self): return self.pitch
Note(60, 1.0).play()"

AttributeError: 'Note' object has no attribute 'pitch'. Did you mean: 'ptich'?
```

Python 3.14.5 DOES show the suggestion for dynamically-set instance attributes when a similarly-named attribute exists on the object. It also appears for the 6.2 debug exercise: `self.nme` stored + `self.name` read → "Did you mean: 'nme'?" The suggestion does NOT appear in `str(e)` or `e.args` (programmatic access only), but it does appear in the full traceback display that a student sees.

The claim is ALSO wrong about the scope of the feature: on Python 3.14.5, `math.sqrtt(4)` produces "Did you mean: 'sqrt'?" (module lookup) and `Note(60,1.0).play()` with the `ptich` typo produces "Did you mean: 'ptich'?" (instance attribute). Both cases show the suggestion. The "module-level and class-method lookups only" restriction is not accurate.

The one case where no suggestion appears: the `name = name` anti-pattern where nothing is stored on the object — no similar attribute exists, so Python has nothing to suggest. This specific case is correctly handled, but the blanket claim is wrong.

The lesson (error site ≠ bug site) is valid and important. It does not depend on the suggestion being absent. The plan needs a third pass on this specific paragraph. Accurate description: "The traceback shows `Did you mean: 'ptich'?` — Python found `ptich` on the object and guessed you might want it. The suggestion names the typo that IS stored, not a corrected spelling. It confirms where the bug lives: `__init__` stored `ptich` instead of `pitch`. The error site (`play()`) and the bug site (`__init__`) are still two different lines — that is the lesson." For the `name = name` anti-pattern, note separately that no suggestion appears because nothing is stored.

**M1 — self mechanical translation → CONFIRMED-FIXED**
6.3 has the two-form side-by-side code block (`my_pet.describe()` = `Pet.describe(my_pet)`) with the explanation "Python rewrites the first form as the second. That is why you never pass `self` yourself." Verified on Python 3.14.5: both call forms return identical output.

**M2 — class-vs-dict comparison → CONFIRMED-FIXED**
6.1 opens with the dict version and its failure modes (key typo → `KeyError` with no useful context; function floats loose from data) before showing the class version as the improvement. Encapsulation is named on the same screen.

**M3 — encapsulation named → CONFIRMED-FIXED**
Named in 6.1 opening hook and reinforced explicitly after the first 6.3 method worked example. The CS principle name appears in both places.

**M4 — two-phase creation promoted → CONFIRMED-FIXED**
6.2 leads with the two-phase model as its first concept sentence rather than as a misconception footnote.

**M5 — 6.1 exercises do not require writing __init__ bodies → CONFIRMED-FIXED**
6.1 exercise 2 states: "the author adds age as a parameter to `__init__` and assigns `self.age = age` — both lines pre-written; student only adds the print line that reads `my_pet.age`." The `__init__` body is never left blank in 6.1.

**M6 — runnable name=name delayed-crash demo → CONFIRMED-FIXED**
6.2 worked example 3 is the explicit delayed-crash demo. Verified on Python 3.14.5: `name = name` in `__init__` (no `self.`) → object creates without error → `AttributeError: 'Pet' object has no attribute 'name'` raised in the method.

**M7 — self anchor in 6.1 → CONFIRMED-FIXED**
6.1 carries the minimum-viable anchor before deferring: "`self` is the object on the left side of the dot — when you write `my_pet.describe()`, Python automatically passes `my_pet` in as `self`. Lesson 6.2 explains the full mechanics."

**m1 — LEGB link in 6.5 → CONFIRMED-FIXED**
6.5 worked example 1 explicitly invokes "Remember the LEGB rule from Chapter 3." Verified in c3.js that LEGB (L and G layers) is taught. The plan correctly says local first, then module/global, not on `self`. Verified no recursion occurs.

**m2 — 6.6 fix exercise added (not just predict) → CONFIRMED-FIXED**
6.6 now has exercise 4 (class-level volume trap, full code fix: move `self.volume` into `__init__`) and exercise 5 (predict+explain with corrected version). Ordering is correct: fix first, predict with working version second.

**m3 — Ch.5 four-step protocol recalled → CONFIRMED-FIXED**
6.5 exercise 4 explicitly requires applying the four-step protocol as comments before fixing.

**m4 — 6.3 warm-up changed to recall question → CONFIRMED-FIXED**
Now: "When Python sees a `def` block, does it run the body immediately? What happens when Python reaches a call like `greet(name)`?" Retrieval, not production.

**m5 — challenge Ex4 implementation approach specified → CONFIRMED-FIXED**
Scaffolding note: "Use a for loop and a running-max variable — the `key=` argument to `max()` is not yet in scope." Verified the for-loop accumulator approach produces correct output.

**m6 — bridge to prior method calls → CONFIRMED-FIXED**
6.3 opens: "You have been calling methods since Chapter 1 — `'hello'.upper()` and `scores.append(item)` are both method calls. Now you define your own."

**m7 — print(instance) callout → CONFIRMED-FIXED**
6.1 worked example 1 has the callout noting the memory-address output and deferring the fix to a later chapter.

**m8 — 6.4 Creature preview in 6.2 removed → CONFIRMED-FIXED**
6.2 uses Pet, Point, and Book. Creature does not appear until 6.4.

**m9 — 6.6 warm-up realigned → CONFIRMED-FIXED**
Warm-up: "Write one line that creates a `Synth` instance with `waveform='sine'` and `volume=0.8`, and one line that creates a second independent `Synth` with different settings." Primes instance-independence directly.

**m10 — Rung 3→6 jump in 6.3 filled → CONFIRMED-FIXED**
6.3 exercise 2 (medium/stub): class with `__init__` and two method headers given; student writes both bodies. Fills the gap between boilerplate (Ex 1) and blank (Ex 3, Timer).

**m11 — attribute-table predict exercises → CONFIRMED-FIXED**
6.2 has an attribute-table predict exercise. 6.4 opens with a four-cell instance-independence table (two attributes × two instances).

**m12 — f-string in method bodies → CONFIRMED-FIXED**
6.3 exercise 1: fill in a one-line body using `self.name` inside an f-string.

---

## New / remaining findings

### NF1 — B1 replacement claim is wrong in the same dimension (blocker-equivalent)

See B1 audit above. The revision replaced a wrong claim with a different wrong claim about the same behavior. The plan must be corrected a third time with the accurate, nuanced picture. This is the only issue that blocks authoring.

### NF2 — Depth gap: WHY Python requires explicit `self` (AUTHORING.md §2 "the why")

AUTHORING.md mandates: "If you write 'this is how Python works' without explaining why Python chose that design, you have left out the why." The plan explains what `self` is and how it works mechanically, but never answers why Python requires it to be named explicitly in every method signature. Other languages (Java, C++) use an implicit `this`. Python chose explicit `self` because "Explicit is better than implicit" (the Zen of Python). This design choice makes the method-call translation visible and lets the programmer see the receiver in every `def` line, which is also why the mechanical translation (`my_pet.describe()` = `Pet.describe(my_pet)`) is so legible. One paragraph in 6.3 alongside the mechanical translation would answer the question a strong reader will have.

### NF3 — Depth gap: WHY double underscores for `__init__` (AUTHORING.md §2)

The plan notes "double underscores — why they exist (dunder, special to Python)" but provides no explanation of the reason. AUTHORING.md requires the why. The reason: Python uses double underscores to mark methods that the interpreter calls automatically in response to built-in operations (object creation, string conversion, arithmetic, comparison). Single underscore = convention for "internal/private." Double underscore = reserved for Python's own machinery. Without the convention, a user method named `init` could silently shadow the constructor if Python ever chose to look for it. One sentence in 6.2: "The double underscores tell Python that this method is special — Python calls it automatically, and the underscores protect it from clashing with any method you might call `init`."

### NF4 — Progression table: 6.1 peak rung mislabelled (minor)

The progression table row for 6.1 shows "Peak rung: 3 Modify." The exercise list for 6.1 includes a Fix exercise (Rung 4). The table should read "Peak rung: 4 Fix." Minor labeling inconsistency; will confuse the authoring pass.

### NF5 — 6.3 misconceptions: NameError not listed for function-style method call (minor)

The plan lists the misconception "calling a method as `describe(pet)` (function style) instead of `pet.describe()`." Verified on Python 3.14.5: this raises `NameError: name 'describe' is not defined`. The error class list for 6.3 currently only covers `TypeError` and `AttributeError`. `NameError` should be added for this case.

### NF6 — 6.6 content volume may exceed 25-minute budget (minor)

6.6 has 3 worked examples + 5 exercises, one of which (Ex 3, Drumkit from blank) is a full design + implementation checkpoint exercise. AUTHORING.md requires 15–25 minute lesson budgets. The Drumkit exercise alone is plausibly 15 minutes at rung 6. The author should time-budget 6.6 carefully and consider whether exercises 4 and 5 (fix + predict-explain) can be compressed into a single compound exercise, or whether the checkpoint needs a separate page.

---

## Verified-correct claims

All of the following were run on Python 3.14.5 and confirmed:

- `my_pet.describe()` and `Pet.describe(my_pet)` produce identical output. ✓
- `pet.describe(pet)` raises `TypeError: Pet.describe() takes 1 positional argument but 2 were given` — exact wording. ✓
- `name = name` in `__init__` (no `self.`): object creates without error, `AttributeError: 'Pet' object has no attribute 'name'` raised in the method, no suggestion (nothing similar stored). ✓
- Class-level `inventory = []`: `a.inventory is b.inventory` is `True`; both show both items. `self.inventory = []` in `__init__` makes them independent. ✓
- Class-level `volume = 0.6` with `Synth.volume = 0` in `mute()`: both instances go silent. Instance-level `self.volume` + `self.volume = v` in `set_volume()`: only the called instance changes. ✓
- Bare `play(self.pitch, self.duration)` in `Note.play()` body resolves to the global function — no recursion, no `AttributeError`. ✓
- `self` at top-level code raises `NameError: name 'self' is not defined`. ✓
- `append()` returns `None`. ✓
- Function with no `return` returns `None`. ✓
- `__init__` and the caller see the same object ID throughout — two-phase model is accurate. ✓
- `self.nme` stored, `self.name` read: traceback shows `AttributeError: 'Pet' object has no attribute 'name'. Did you mean: 'nme'?`. ✓
- `self.ptich` stored, `self.pitch` read: traceback shows `AttributeError: 'Note' object has no attribute 'pitch'. Did you mean: 'ptich'?`. ✓
- `math.sqrtt(4)`: `AttributeError: module 'math' has no attribute 'sqrtt'. Did you mean: 'sqrt'?`. ✓
- Scoreboard `top_scorer()` via for-loop accumulator: returns correct name without `max(key=…)`. ✓
- `dict.items()` and `.get(key, default)` are both in the ch4 plan — no boundary violation for challenge exercise 4. ✓
