# Holistic Review — Python Arc (Ch.0–8)

**Scope:** cross-chapter soundness of the whole Python arc, read together.
**Reviewed against:** Python 3 (verified by running `python3`), CURRICULUM-STRUCTURE.md (concept spine §D, rules §E), AUTHORING.md, and all nine chapter plans `ch-0…ch-8`.

**Verdict: Needs fixes.**

The arc is well-designed at the chapter level — consistent six-part arc, sound dependency order for the *named* concepts, genuine spiral weaving, a credible difficulty ramp, and the no-inheritance / grade-7–9 constraints honoured throughout. But read end-to-end it has **one real coverage gap (string indexing/slicing/methods has no clear owner, yet later chapters claim it was already taught)**, **one ownership ambiguity (comprehensions claimed by both Ch.7 recalls and Ch.8 "owns")**, and **several "used-before-owned" built-ins** (`split`, `len`, `round`, `sum`/`enumerate`/`zip`/`sorted`) that the spine treats as in-scope but no chapter formally introduces. These are fixable with small re-scoping edits, not a redesign.

---

## Coverage matrix (spine §D concept → owning chapter → recalled in)

| Spine concept cluster | Owner | Recalled / spiraled in | Status |
|---|---|---|---|
| I/O & comments (`print` args/`sep`/`end`, `input`→str, `#`) | Ch.1 (1.1, 1.6) | every later chapter | OK |
| Values & types (int/float/str/bool/None, `type()`, conversion, truthiness) | Ch.1 (1.2) | Ch.2 (truthiness deepened), Ch.3, Ch.4, Ch.8 | OK |
| Operators (arith, precedence, comparison, boolean, by-type) | arith=Ch.1 (1.4); comparison+boolean=Ch.2 (2.1) | Ch.3–8 throughout | OK (split owner, but clean: arithmetic vs logical) |
| Variables & state (assign, reassign, naming, scope) | assign/naming=Ch.1 (1.3); **local** scope=Ch.3 (3.4) | Ch.5 naming deepened; Ch.6 `self` | **`global` never owned** (see F4) |
| Control flow (`if/elif/else`, `while`, `for`, `range`, `break`/`continue`, nesting) | Ch.2 (2.2–2.5) | Ch.3–8 throughout | OK |
| Functions (`def`, params, `return`, defaults, scope, docstrings, decomposition) | Ch.3 | Ch.5 (decomposition deepened), Ch.6 (methods), Ch.7–8 | OK |
| **Strings (deep): indexing, slicing, methods, f-strings, immutability, split/join** | **SPLIT & PARTIAL** — f-strings/concat/immutability=Ch.1 (1.5); methods (split/strip/join/find)=Ch.7 (7.5); **indexing & slicing = NO OWNER** | Ch.4 *claims* Ch.1 taught slicing | **GAP (F1)** |
| Collections (lists/tuples/dicts/sets, nesting; comprehensions late) | lists/tuples/sets/dicts/nesting=Ch.4; **comprehensions=Ch.8 (8.4)** | Ch.5–8 | comprehensions **double-claimed** (F2) |
| Errors & debugging (traceback reading; NameError…AttributeError; protocol) | classes seeded Ch.1–2; protocol=Ch.5 (5.4) | provoked every chapter; caught with try/except=Ch.8 | OK (one missing class, F6) |
| Modules & data (`import`, std lib, API, docs, writing a module; files, JSON, SQLite; `random`) | Ch.7; **`random` first used Ch.4 (4.6), owned Ch.7** | Ch.8 | OK (random use-before-own is intentional & flagged) |
| OOP (class, `__init__`, attributes, methods, instances, `self`; no inheritance) | Ch.6 | Ch.7 (`sqlite3` rows), Ch.8 (optional `Note`) | OK |
| Code design (decomposition, naming, DRY, function length, magic numbers) | Ch.5 | Ch.6–8 | OK |
| CT foundations (sequence, selection, iteration, decomposition, abstraction, debugging — unplugged) | Ch.0 | Ch.1 (syntax for the ideas), Ch.5 (decomposition formal) | OK (abstraction only named, see F5) |
| Try/except, comprehensions, assert/testing | Ch.8 | — (terminal Python chapter) | OK |
| JavaScript / TypeScript / Real tools | out of arc (Ch.9+) | — | n/a for this review |

---

## Findings (severity · chapters · problem · fix)

**F1 · BLOCKER · Ch.1 ↔ Ch.4 (and Ch.7) — string indexing & slicing has no owner, yet Ch.4 asserts Ch.1 taught it.**
The spine's "Strings (deep)" cluster includes *indexing* and *slicing*. Ch.1's strings lesson (1.5) covers only concatenation, `*` repetition, f-strings, and immutability — **never `word[0]` or `word[1:3]`**. Yet:
- Ch.4 L4.2 warm-up: *"In Ch.1 you sliced a string — `word[1:3]`. What does that give for `word = 'Python'`?"*
- Ch.4 L4.2 recalls line: *"string slicing (Ch.1/Ch.3)"*; concept map: *"str indexing/slicing → list indexing/slicing (same rules)"*.
- Ch.3 never teaches string slicing either.
So Ch.4 leans its entire "lists mirror strings" cognitive-load strategy on a prerequisite that was never delivered. This is a genuine gap *and* an internal contradiction.
**Fix (pick one):** (a) Add a string-indexing/slicing subsection to Ch.1 L1.5 (preferred — it pays off immediately in Ch.4 and matches the spine's "Strings (deep)" owner intent), and update Ch.4's recalls to "Ch.1 L1.5"; or (b) if Ch.1 is to stay slice-free, teach list indexing/slicing **without** the "you already did this on strings" framing, and move the string-slice claim out of Ch.4's warm-up/recalls. Whichever is chosen, make the spine note which chapter owns string indexing/slicing.

**F2 · MAJOR · Ch.4 ↔ Ch.7 ↔ Ch.8 — list comprehensions are claimed by three chapters; ownership is contradictory.**
- Ch.4 explicitly *defers* comprehensions to Ch.7 (overview, 3-line summary, coverage concern).
- Ch.8 L8.4 *owns* list **and** dict comprehensions (concepts-owned list, lesson 8.4).
- But Ch.7 L7.6 worked-example 3 **uses** a comprehension as a "Ch.4 recall": *"filter by artist using a list comprehension (Ch.4 recall)"* — and Ch.7's text-extraction lessons would naturally reach for them.
So three different chapters point at three different owners (Ch.4 says Ch.7; Ch.8 says itself; Ch.7 says Ch.4). The spine lists comprehensions "(late)" under Collections without naming the chapter.
**Fix:** Make **Ch.8 (8.4) the sole owner** (it is the best-motivated spot — "shorthand for a pattern you now know cold"). Then: in Ch.4, change "deferred to Ch.7" → "deferred to Ch.8"; in Ch.7 L7.6, replace the comprehension in worked-example 3 with the `for`/`append` filter loop the learner already knows (or add an explicit "comprehensions arrive in Ch.8" note and keep it loop-based). Record the owner in the spine.

**F3 · MAJOR · Ch.2, Ch.4, Ch.5 → Ch.7 — `str.split()` is used to drive whole exercises three chapters before Ch.7 owns it.**
`.split()` is in the spine's "Strings (deep)" cluster, owned by Ch.7 L7.5. But it is required earlier, un-taught:
- Ch.2 Challenge ex.5 (rung 6, *blank editor*): *"split it into words (use `sentence.split()`)"*.
- Ch.4 Challenge ex.4: `word_count` — *"split the sentence into words"*.
- Ch.5 L5.1 ex.3 (blank): *"counts words with `.split()`"*; Ch.5 L5.5 Project B uses `.split()`.
A blank-editor exercise that *names* a method the learner has never been taught violates the scaffolding-fade and prerequisite rules.
**Fix:** Either (a) introduce `.split()` (no-arg form only) as a small recalled tool the first time it's needed (Ch.2 L2.7 or a Ch.2 strand aside), and list it as "introduced early, deepened Ch.7"; or (b) provide `.split()` as given boilerplate in those pre-Ch.7 exercises rather than asking the student to produce it blank. Note the early introduction in the spine and in Ch.7's "recalls."

**F4 · MAJOR · spine ↔ Ch.3/Ch.6 — `global` / variable scope (global) is in the spine but never owned.**
Spine §D Variables: "scope (local/global)". Ch.3 L3.4 teaches **local** scope and explicitly excludes `global` ("`global` is spiraled in Ch.6 (Modules)"). But **Ch.6 is the Classes chapter, not Modules** (modules is Ch.7), and neither Ch.6 nor Ch.7 actually teaches `global`. So the global half of the spine concept is dropped.
**Fix:** Decide deliberately: either (a) own `global`/module-level state in Ch.7 L7.2 (module namespaces are the natural home) and correct Ch.3's forward-reference from "Ch.6" to "Ch.7"; or (b) if `global` is intentionally cut for this age level (defensible — it's an anti-pattern), strike "global" from the spine §D entry so the matrix has no orphan. Ch.3's pointer to "Ch.6 (Modules)" is wrong either way and must be fixed.

**F5 · MINOR · Ch.0 ↔ Ch.5 — "abstraction" is named in Ch.0 and assigned to Ch.5, but Ch.5 never lists it as an owned concept.**
Ch.0 says abstraction "will be owned properly in Ch.5 (code design)." Ch.5's concepts-owned list is decomposition, naming, DRY, magic numbers, function length, debugging protocol — **abstraction is not named**, though "name a group of statements / hide detail behind a function" is arguably abstraction in practice.
**Fix:** Add one explicit sentence in Ch.5 L5.1 naming "abstraction" as what decomposition-behind-a-function-name *is*, and add it to Ch.5's owned-concepts list so the Ch.0 forward-promise is kept. Low effort, closes the loop.

**F6 · MINOR · Ch.4 ↔ Ch.5 — `AttributeError` and `ZeroDivisionError` ownership/first-meeting is fuzzy across chapters.**
- `ZeroDivisionError` is "previewed" in Ch.1 L1.4, "provoked" in Ch.4 L4.3, and Ch.5 L5.4 says it "introduces `ZeroDivisionError` if not yet met" — three chapters each hedging on whether it's been met. Pick a first-meeting (Ch.1 preview is fine; then it's *recalled*, not "introduced," everywhere after).
- `AttributeError` is owned by Ch.6 (classes) but Ch.5 L5.4 introduces it ("calling a method on `None`") and Ch.7 raises it on bad dot-access. Since Ch.5 precedes Ch.6, **`AttributeError` is first met in Ch.5, not Ch.6** — the spine/Codex first-registration should say Ch.5.
**Fix:** In the chapter plans' error tables, change "introduces X if not yet met" to a definite "first met in Ch.N (preview) → recalled here." Set `AttributeError` first-meeting = Ch.5 L5.4, deepened Ch.6.

**F7 · MINOR · Ch.1–Ch.4 — several built-ins are used without ever being owned: `len`, `round`, `sum`, `enumerate`, `zip`, `sorted`.**
These aren't named spine concepts, but the rule is "an item no lesson covers is a gap to fix, not to drop" (AUTHORING.md). Current state: `len()` first used Ch.2 L2.2 "briefly," `round()` first used Ch.3 L3.2 unintroduced, `sum`/`enumerate` named in Ch.4 L4.3 as "vocabulary not owned," `zip` in Ch.4 L4.7, `sorted(key=)` in Ch.8 L8.6a. Each is fine *as introduced where needed*, but no plan records them in a coverage ledger, so the harness concept-coverage check (a stated build task) will flag orphans.
**Fix:** Add a short "built-ins introduced in passing" ledger to the spine (or each chapter's metadata) listing `len`/`round`/`sum`/`enumerate`/`zip`/`sorted` and their first-use lesson, so coverage is auditable. No teaching change required.

**F8 · MINOR · Ch.3 self-flagged prerequisite risk is real — `for`/`range`/`%` fluency for `is_prime` in L3.3.**
Ch.3's own summary flags that L3.3's `is_prime` demands `for`+`range`+`%` from Ch.2. Reading Ch.2: `for`/`range` land in L2.5 (one lesson), prime-checker is the L2.5 hard exercise and the nested-loop practice is pushed to the Ch.2 Challenge. So a student could reach Ch.3 with thin `for`-loop reps.
**Fix:** Honour Ch.3's own mitigation — make the L3.3 warm-up a `for`+`%` retrieval — and consider adding one more guided `for`-loop exercise in Ch.2 L2.5 before the blank-editor prime checker.

**F9 · MINOR · "write-from-scratch by Ch.3" milestone — realistic, with one caveat.** PROGRESSION CHECK.
The ramp is sound: Ch.0 rungs 1–2, Ch.1 reaches rung 6 per-concept (with full scaffold on first contact), Ch.2 makes blank-editor the default by L2.5, Ch.3 makes it the global default. This is monotonic and credible for a strong 11-year-old. The only caveat is F3/F1: a blank-editor exercise is only fair if every tool it names was taught — the `.split()` and string-slice gaps undercut specific "from scratch" tasks, not the milestone itself.

---

## Progression & spiral verdict (the two axes that pass)

- **Monotonic difficulty:** holds across the arc. Rung ranges climb Ch.0 (1–2) → Ch.1 (1–6, scaffolded) → Ch.2 (blank by L2.5) → Ch.3 (blank default) → Ch.4–8 (rung 6 strand projects). No chapter is easier than its predecessor; the style channel adds monotonic pressure from Ch.5. Good.
- **Spiral weaving:** genuinely present, not isolated teaching. Every chapter's "recalls" lists are concrete (Ch.4 reuses Ch.3 functions in strand lessons; Ch.6 builds methods on Ch.3 `def` and holds Ch.4 lists/dicts as attributes; Ch.7 reuses the Ch.4 dict-accumulator and the Ch.6 data; Ch.8 recalls all prior). Warm-ups are retrieval from earlier lessons as required. The sound strand threads cleanly: `play/sleep` (Ch.0) → variable-driven motif (Ch.1) → loop beats (Ch.2) → function grooves (Ch.3) → list patterns (Ch.4) → `Note`/`Synth` objects (Ch.6) → generative piece (Ch.8). This is the arc's strongest feature.
- **Consistency:** all nine chapters follow the same six-part arc, same metadata, same misconception/error-class tables, same sourcing discipline. Boundary "owns vs recalls" lines are mostly clean; the contradictions are confined to F1–F4 above.

---

## What's strong
- Concept spine is almost fully covered with single owners; the dependency order (types→vars→operators→control→functions→collections→design→OOP→modules→integration) is correct, and prerequisites are satisfied for every *named* concept.
- Spiral weaving and the five-strand interleave are concrete and consistent, not aspirational.
- All spot-checked Python claims are correct: `int(3.9)`→3 and `int(-3.9)`→-3 (truncate toward zero), `7//2`→3 / `-7//2`→-4 (floor), `-2**2`→-4, `range(…,0)`→`ValueError`, extra-`self` method call → `TypeError: takes 1 positional argument but 2 were given`. Misconception lists are accurate and well-keyed.
- No-inheritance constraint is respected everywhere, including the hard cap stated explicitly in Ch.6.

## Top fixes to make before authoring
1. **F1 (BLOCKER):** give string indexing/slicing an owner (add to Ch.1 L1.5) — Ch.4's whole "lists mirror strings" hinge depends on it and currently references a lesson that doesn't teach it.
2. **F2 (MAJOR):** make Ch.8 the single owner of comprehensions; fix Ch.4's "defer to Ch.7" and Ch.7 L7.6's comprehension-as-recall.
3. **F3 (MAJOR):** introduce or pre-supply `.split()` before the Ch.2/4/5 blank-editor tasks that name it.
4. **F4 (MAJOR):** resolve `global` — own it in Ch.7 or strike it from the spine; fix Ch.3's wrong "Ch.6 (Modules)" pointer.
