# Deep Review (round 2) — Chapter 6 (Classes and Objects)
**Verdict:** Clean (one MINOR wording nit; no blockers, no majors)
**Python verified on:** Python 3.14.5

---

## Round-1 fixes audit

- **Finding 1 (MAJOR — debug exercise missing in 6.3–6.6):** CONFIRMED-FIXED. A `*Debug*` exercise is now present in every lesson 6.1–6.6 (lines 63, 83, 104, 125, 146, 167). All four new ones (6.3 TypeError, 6.4 class-level-list, 6.5 attribute typo, 6.6 predict/explain) match the misconception already listed for that lesson, exactly as the round-1 fix prescribed.

- **Finding 2 (MAJOR — warm-ups absent):** CONFIRMED-FIXED. A `**Warm-up (recall):**` beat now opens all six lessons (lines 55, 75, 95, 116, 137, 158), each a retrieval question from a prior chapter with the answer noted. Spot-checked for correctness: 6.1 "function with no return → `None`" ✓; 6.4 "`append` returns `None`" ✓ (verified below); 6.2 parameter-vs-argument ✓.

- **Finding 3 (MINOR — Note.play() collision unexplained):** CONFIRMED-FIXED. Both remedies were applied (belt and suspenders): an author scope-note in the 6.5 worked example (line 139) and an expanded misconception entry (line 147) explaining that Python resolves a bare `play(…)` local→module, never on `self`, so no recursion. See nit in New findings about one word of phrasing.

- **Finding 4 (MINOR — `self` used in 6.1 before taught):** CONFIRMED-FIXED. Line 57 now carries the exact placeholder sentence the round-1 review suggested ("You'll see a special word, `self` … Lesson 6.2 will explain exactly what it means").

- **Finding 5 (MINOR — no explicit subsection blocks):** STILL-OPEN (by design, not a regression). The round-1 review flagged this as a shared format issue across Ch.5/6/7 and recommended subsection breakdown; the revised Ch.6 keeps the single-block-per-lesson format. This is a structural/authoring-format decision, not a correctness defect, and the round-1 review itself rated it MINOR and shared. Not re-escalating. Noting it remains unaddressed so it isn't lost.

- **Finding 6 (MINOR — "both bugs" imprecise in Challenge ex3):** CONFIRMED-FIXED. Line 197 now reads "Find the typo in `__init__` that causes the `AttributeError` in `deposit`, and fix it. (One bug, one fix — the typo is the root cause; the error surfaces later.)" Matches the round-1 fix verbatim.

- **Finding 7 (MINOR — chapter recap absent):** STILL-OPEN (shared, by design). Round-1 flagged this as a spec-required arc element omitted across all three reviewed chapters, not specific to Ch.6. Unchanged here. Noted, not re-escalated.

---

## New / remaining findings

1. **[MINOR] 6.5 scope explanation — "enclosing module scope" is loose terminology** (lines 139, 147). The text says Python searches "local scope first, then the enclosing **module** scope." Under Python's LEGB rule, module scope is the **Global** tier, not an "Enclosing" one (Enclosing = a wrapping *function*). For a method with no wrapping function, the real chain is Local → Global → Built-in, and crucially the **class namespace is skipped** — which is exactly why no recursion occurs. The operative claim ("it does NOT search `self`; bare `play(…)` reaches the API; no recursion") is correct and verified. Only the label "enclosing" is imprecise; an 11-year-old won't be harmed, but if simplifying, prefer "local scope first, then the module (global) scope." → **Fix:** drop the word "enclosing," or say "then the module's global scope." Non-blocking.

2. **[MINOR / FYI] Python 3.14 appends a "Did you mean: 'ptich'?" suggestion to the 6.5 AttributeError.** The plan quotes the message as `AttributeError: 'Note' object has no attribute 'pitch'` (line 146), which is correct, but on 3.14 the student will actually see `… has no attribute 'pitch'. Did you mean: 'ptich'?`. This is a *help*, not a contradiction — and it nicely reinforces the typo-hunt — but author/checker copy should expect the trailing suggestion so an exact-match assertion doesn't fail. → **Fix:** note in the lesson that the interpreter may add a "Did you mean" hint; don't hard-match the full string.

No BLOCKER and no MAJOR findings.

---

## CRITICAL no-inheritance / scope-cap re-confirmation — CLEAN

Full-text scan of `ch-6-classes.md`:
- `class Foo(Bar)` inheritance syntax: the ONLY `class …(` match is line 44, inside the explicit "NOT introduced here" prohibition. No subclassing anywhere.
- `super()`, `@classmethod`, `@staticmethod`, `@property`, `@abstract`: only appear (as words) in the line-5 hard cap and line-44 exclusion list. Never used or taught.
- Dunder scan (`__[a-z]+__`): every occurrence is `__init__` (allowed) except line 44, which lists `__str__`/`__repr__`/`__eq__` as things NOT taught. No dunder beyond `__init__` is introduced.
- "inherit / subclass / base class / parent class": only in lines 5, 44, 249 — all prohibition/standards-citation context, never as a taught feature.

**Verdict on the hard cap: airtight. No violation. No BLOCKER.**

---

## Verified-correct (ran on python3 3.14.5)

- **6.3 debug TypeError** — `pet.describe(pet)` → `TypeError: Pet.describe() takes 1 positional argument but 2 were given`. Exact match to line 104.
- **6.4 class-level-list trap** — `inventory = []` at class level: both creatures' inventories print `['sword', 'shield']` and `a.inventory is b.inventory` → `True`. Moving to `self.inventory = []` in `__init__` makes them independent. Matches lines 125–126.
- **6.5 attribute-typo debug** — `self.ptich = pitch`, method reads `self.pitch` → `AttributeError: 'Note' object has no attribute 'pitch'` (exact match, line 146). Traceback's deepest frame is the `play` method body, confirming the plan's claim that "the error message points to `play()` even though the bug is in `__init__`."
- **6.5 scope / no recursion** — bare `play(self.pitch, self.duration)` inside `Note.play` calls the global API exactly once (recursion-free); separately confirmed a class-level attribute named `helper` is invisible to a bare `helper` in a method (resolves to global), proving the class namespace is skipped.
- **6.6 instance independence** — `bass.set_volume(0)` → `bass.volume=0, lead.volume=0.6`. Exact match to line 167.
- **6.1 / 6.2 AttributeErrors** — missing `colour` → `'Pet' object has no attribute 'colour'`; `self.nme` typo → `'Pet' object has no attribute 'name'`. Both correct.
- **Model solutions** — Timer (`is_done` False/False/True over 2 ticks), `is_alive` bool, Scoreboard `top_scorer` via `max(dict, key=dict.get)` (returns `'b'`), and a Drumkit `play_pattern` over `[1,0,1,0]` all run correctly.
- **Challenge ex3 BankAccount** — `self.blnce` typo, `deposit` reads `self.balance` → `AttributeError: 'BankAccount' object has no attribute 'balance'`. One root bug, surfaces in `deposit`. Matches revised wording.

---

## Verdict notes

The revision cleanly closed all five actionable round-1 findings (1, 2, 3, 4, 6); the two left open (5 subsection blocks, 7 chapter recap) were explicitly shared-across-chapters format items that round-1 itself rated MINOR and non-chapter-specific — not regressions. No new technical errors were introduced by the revision, and every newly-added debug exercise reproduces the exact error class and message quoted in the plan on Python 3.14.5. The no-inheritance / no-class-method / no-property / no-dunder-beyond-`__init__` cap is held without exception. The only fresh notes are a one-word scope-terminology imprecision in 6.5 and a 3.14 "Did you mean" suggestion the checker copy should anticipate — both MINOR, neither blocking. Chapter 6 is ready to author.
