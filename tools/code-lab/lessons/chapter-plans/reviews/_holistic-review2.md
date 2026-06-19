# Holistic Review (round 2) — Python Arc (Ch.0–8)

**Scope:** cross-chapter soundness of the whole *revised* Python arc, read end-to-end.
**Reviewed against:** Python 3.14.5 (claims re-run with `python3`), CURRICULUM-STRUCTURE.md (spine §D incl. cross-cutting ownership decisions, rules §E), AUTHORING.md, and all nine revised chapter plans `ch-0…ch-8`.

**Verdict: Needs minor fixes.**

The round-1 blocker and all four MAJOR findings are **closed** — verified against the revised plans, not just claimed. The arc now has clean single-owner coverage for the contested concepts (string indexing/slicing, `.split()`/`.join()`, comprehensions, the `len`/`round`/`sum`/`enumerate`/`zip`/`sorted` built-ins), `global` is struck everywhere, the Ch.3 modules pointer is corrected, abstraction is named in Ch.3, and `AttributeError` first-meeting is fixed to Ch.5. What remains are **four small use-before-taught / dropped-promise items** the round-1 pass did not surface (they are one method/notch further along the same fault lines it found), plus minor consistency polish. None require a redesign.

---

## Round-1 findings audit (with evidence)

**F1 · string indexing & slicing owner — CONFIRMED-FIXED.**
Ch.1 §"Concepts owned" now lists *"string indexing & slicing — `s[0]`, `s[-1]`, `s[1:3]`, `s[:3]`"* and L1.5 has a dedicated **"Indexing and slicing"** subsection (`word="Python"` → `word[0]`/`word[-1]`/`word[0:3]`/`word[3:]`/`word[:2]`), with `IndexError` on `"Python"[6]` and the immutability/exclusive-stop misconceptions. Ch.4 L4.2 warm-up *"In Ch.1 you sliced a string — `word[1:3]`"* and the concept map *"str indexing/slicing → list indexing/slicing (same rules)"* now reference a lesson that actually delivers it. The spine §D Strings entry reads *"indexing, slicing, `split`/`join`, immutability (Ch.1)"*. No contradiction remains.

**F2 · comprehensions owner — CONFIRMED-FIXED (single owner = Ch.8).**
- Spine §D Collections: *"comprehensions (**Ch.8** — they need prior loop + list/dict fluency)"*.
- Ch.4 L4.0 overview: *"No comprehensions (deferred to Ch.8)"*; 3-line summary decision #5 *"Comprehensions are deferred to **Ch.8** (not Ch.7)."*
- Ch.7 L7.6 worked-example 3 (the old offender) now uses a plain `for`/`if`/`append` filter loop with an explicit *"(No list comprehensions — those are Ch.8.)"*; L7.5 ex.2's one-line comprehension is confined to *teacher notes* with *"the student exercise uses a plain loop, per Ch.8 scope."*
- Ch.8 §"Concepts owned" owns list **and** dict comprehensions; L8.4 is the owning lesson. No triple-claim survives.

**F3 · `.split()` used before owned — CONFIRMED-FIXED.**
`.split()`/`.join()` are now **owned in Ch.1 L1.5** (own subsection + spine §D). Every later use is labelled a recall:
- Ch.2 Challenge ex.5: *"`str.split()` is a **recalled** concept from Ch.1 (owned by Ch.1 Strings lesson — used here without re-teaching)."*
- Ch.4 Challenge ex.4 `word_count` splits a sentence — split owned upstream, no re-teach needed.
- Ch.5 L5.1 ex.3: *"counts words with `.split()` *(recall Ch.1 — Strings)*"*.
- Ch.7 L7.5 header: *"`str.split(sep)`… **Recalled from Ch.1**"*. Clean.

**F4 · `global` / scope-global — CONFIRMED-FIXED.**
- Spine §D Variables: *"`global` is **excluded** — share state via parameters/return, then objects"*.
- Ch.3 L3.4 role line: *"the `global` keyword is struck from the curriculum — not taught here or elsewhere"*; the outer-mutation fix is *"always to pass it as a parameter"*; the UnboundLocalError trap is taught instead (verified: `discount = discount - 0.01` against a module-level `discount` → `UnboundLocalError`).
- The wrong *"Ch.6 (Modules)"* pointer is gone; Ch.3's 3-line summary closes with *"Modules are Ch.7 (not Ch.6)."* No orphan in the matrix.

**F5 · abstraction named in Ch.3 — CONFIRMED-FIXED.**
Ch.3 §"Concepts owned" now has *"**abstraction (named here)** — a function hides the details… Ch.3 is where this idea gets its name for the first time (Ch.0 modelled it silently, Ch.5 deepens it)"*. Ch.0 explicitly disclaims ownership (*"Ch.0 does not claim to own abstraction"*). Ch.5 overview: *"Abstraction — named in Ch.3… — is deepened here."* Spine §D CT-foundations entry matches: *"**Abstraction** is practiced unnamed in Ch.0, named in Ch.3… deepened in Ch.5."* Loop closed across all three chapters.

**F6 · AttributeError / ZeroDivisionError first-meeting — CONFIRMED-FIXED.**
`AttributeError` is now stated as **first taught in Ch.5 L5.4B** (*"first taught in 5.4B as the result of a function that forgets `return`"*; verified `f().upper()` → `AttributeError: 'NoneType' object has no attribute 'upper'`), and Ch.6 *deepens* it (its error table no longer claims first meeting). `ZeroDivisionError` is consistently *previewed Ch.1 L1.4 → provoked/recalled* thereafter (Ch.4 L4.3 "recall Ch.1", Ch.5 "recalled from Ch.4 (introduced in Ch.4.3)"); the earlier "introduces if not yet met" hedging is gone.

**F7 · ungoverned built-ins — CONFIRMED-FIXED.**
Spine §D now has an explicit **Common built-ins** line: *"`len`, `round` (Ch.1); `sum`, `enumerate`, `zip`, `sorted` (Ch.4)."* Ch.1 L1.5 owns `len`/`round` (own subsection); Ch.4 owns `sum`/`enumerate`/`zip`/`sorted` (§"Concepts owned" + 3-line summary decision #3: *"`enumerate`/`zip`/`sum`/`sorted` are owned by Ch.4"*). Every first-use is now homed.

**F8 · `is_prime` prerequisite (`for`/`range`/`%`) — CONFIRMED-FIXED (mitigation adopted).**
Ch.3's 3-line summary keeps the flag and adopts the fix: *"the warm-up in 3.3 should reinforce it before the lesson proper."* Ch.2 also strengthens `for`-loop reps before the blank prime-checker (L2.5 ex.3 plus the Challenge nested-loop work). Acceptable.

**F9 · write-from-scratch-by-Ch.3 milestone — CONFIRMED-FIXED.**
The ramp holds and the caveat that undercut it (F1/F3) is resolved, so the named-tool fairness condition for blank-editor tasks is now met. Ch.2 reaches blank-by-default at L2.5; Ch.3 makes it the global default by L3.3. Monotonic and credible.

---

## Rebuilt coverage matrix (spine §D concept → owning chapter → recalled in)

| Spine concept cluster | Owner | Recalled / spiraled in | Status |
|---|---|---|---|
| I/O & comments (`print`/`sep`/`end`, `input`→str, `#`) | Ch.1 (1.1, 1.6) | every later chapter | OK |
| Values & types (int/float/str/bool/None, `type()`, conversion, truthiness) | Ch.1 (1.2) | Ch.2 (truthiness deepened), Ch.3–8 | OK |
| Operators (arith, precedence) | Ch.1 (1.4) | Ch.2–8 | OK |
| Operators (comparison, boolean, short-circuit) | Ch.2 (2.1) | Ch.3–8 | OK |
| Variables & state (assign, reassign, naming, **local** scope) | assign/naming Ch.1 (1.3); local scope Ch.3 (3.4) | Ch.5 naming deepened; Ch.6 `self` | OK — `global` struck from spine, no orphan |
| Control flow (`if/elif/else`, `while`, `for`, `range`, `break`/`continue`, nesting) | Ch.2 (2.1–2.7) | Ch.3–8 | OK |
| Functions (`def`, params, `return`, defaults, scope, docstrings, decomposition) | Ch.3 | Ch.5 (decomp deepened), Ch.6 (methods), Ch.7–8 | OK |
| Common built-ins `len`/`round` | Ch.1 (1.5) | Ch.2 L2.2, Ch.4+ | OK |
| Common built-ins `sum`/`enumerate`/`zip`/`sorted` | Ch.4 (4.3, 4.4, 4.8) | Ch.8 (`sorted(key=)`) | OK |
| Strings: concat, repetition, **indexing, slicing**, `split`/`join`, f-strings, immutability | Ch.1 (1.5) | Ch.4 (lists mirror), Ch.5, Ch.7 | OK |
| Strings deeper: `strip`/`replace`/`find`/`startswith`/`endswith` | Ch.7 (7.5) | Ch.8 | **F10 — `strip` used in Ch.5 Challenge before Ch.7** |
| String case: `.lower()`/`.upper()` (as methods) | **NO OWNER** | used in Ch.8 8.6a | **F11 — used, never taught** |
| Display formatting `:.2f` (format-spec mini-language) | Ch.7 (deferred there by Ch.1 L1.5) | — | **F12 — required by Ch.3 tip-splitter, 4 chapters early** |
| Collections (lists/tuples/dicts/sets, nesting; methods) | Ch.4 | Ch.5–8 | OK |
| Comprehensions (list + dict) | Ch.8 (8.4) | — (terminal Python chapter) | OK — single owner |
| Errors & debugging (tracebacks; NameError…AttributeError; protocol) | classes seeded Ch.1–2; **AttributeError Ch.5**; protocol Ch.5 (5.4); try/except Ch.8 | provoked every chapter | OK |
| Modules & data (`import`, std lib, API, docs, own module; files, JSON, SQLite; `random`) | Ch.7; `random` first used Ch.4 (flagged), owned Ch.7 | Ch.8 | OK |
| OOP (class, `__init__`, attributes, methods, instances, `self`; no inheritance) | Ch.6 | Ch.7 (sqlite rows), Ch.8 (optional `Note`) | OK |
| Code design (decomposition, naming, DRY, function length, magic numbers, abstraction-deepened) | Ch.5 | Ch.6–8 | OK |
| try/except, assert/testing | Ch.8 | — | OK |
| CT foundations (sequence/selection/iteration/decomposition/debugging; abstraction unnamed) | Ch.0 | Ch.1 (syntax), Ch.3 (abstraction named), Ch.5 (decomp formal) | OK |

---

## New / remaining findings

**F10 · MAJOR · Ch.5 Challenge ex.3 → Ch.7 — `str.strip()` is used to drive a fix-exercise two chapters before Ch.7 owns it.**
This is the *same fault line* as the old F3 (`.split()`), one method further along. Ch.7 L7.5 newly owns `str.strip()` (*"`str.strip()` to remove whitespace"*, listed under "Concepts newly owned here" and in the spine's "deeper methods… (Ch.7)"). But Ch.5 Challenge ex.3 (data strand) already requires it: *"a copy-paste drift: two versions of the same 'clean a string' block, one with `.strip()` and one without. Identify, extract, and fix."* A student in Ch.5 has never met `.strip()`. Ch.5 neither teaches nor labels it as a recall (grep: the only `strip` hit in ch-5 is this exercise). Verified `.strip()` is a real method, not derivable from Ch.1 tools.
**Fix (pick one):** (a) supply both `.strip()` variants as *given* code the student only has to compare/extract (the exercise tests DRY/copy-drift, not authoring `.strip()`), and add an aside *"`.strip()` removes surrounding whitespace — you'll own it in Ch.7"*; or (b) swap the "clean a string" block for a duplication the student already owns (e.g. a repeated `round(x, 2)` or f-string). Then add `.strip()` to Ch.7's "recalls/early-use" note.

**F11 · MAJOR · Ch.8 L8.6a — `.lower()` (case-folding) is required but is owned by no chapter.**
8.6a's word-frequency spec is *"ignores punctuation and is case-insensitive"* and the concepts line names *"string methods (`.lower()`, `.strip()`, `.split()`)."* `.split()` is Ch.1, `.strip()` is Ch.7 — but **`.lower()`/`.upper()` are never taught anywhere in the arc** (grep: `.upper()` appears only inside Ch.5's `AttributeError` demo `f().upper()`, never as a taught string method; `.lower()` appears only here). Case-insensitive counting cannot be done without it. This is a genuine spine gap: the "Strings deeper" cluster (Ch.7 L7.5) lists `strip`/`replace`/`find`/`startswith`/`endswith` but **omits `lower`/`upper`/`title`/`capitalize`**.
**Fix:** add `str.lower()` / `str.upper()` to Ch.7 L7.5's owned-methods set (they belong with the other "clean/normalize text" methods and the game-log extractor would naturally use them), list them in the spine's Ch.7 string-methods line, and mark Ch.8 8.6a's `.lower()` as a Ch.7 recall.

**F12 · MAJOR · Ch.1 L1.5 ↔ Ch.3 — two-decimal *display* formatting (`:.2f`) is explicitly deferred to Ch.7 but demanded by Ch.3's tip-splitter.**
Ch.1 L1.5 states: *"`:.2f` is deferred to Ch.7 Strings Deep where it gets a full concept page."* But Ch.3 requires money formatting three times before Ch.7: L3.7 ex (*"Print the per-person amount formatted to two decimal places"*) and Challenge ex.7 (*"Format all output to two decimal places"*). `round(x, 2)` (owned Ch.1) is **not** equivalent for display — verified: `round(2.5, 2)` → `2.5`, `round(10.0/3, 2)` → `3.33`, but `f"{2.5:.2f}"` → `2.50`. A tip-splitter that prints `$2.5` instead of `$2.50` either looks wrong or silently relies on `:.2f` the student was told they won't see until Ch.7.
**Fix (pick one):** (a) move the `:.2f` format-spec to **Ch.3 L3.5** (it sits naturally with f-strings + defaults and pays off immediately in the tip-splitter), and change Ch.1's deferral target from "Ch.7" to "Ch.3 L3.5"; Ch.7 then *recalls/deepens* the format mini-language (`,`, alignment, padding). Or (b) keep `:.2f` in Ch.7 and rewrite the Ch.3 tip-splitter specs to *"round to two decimal places with `round(amount, 2)`"* and drop the "formatted" wording, accepting trailing-zero loss. Option (a) is preferred — money output without `:.2f` reads as broken to an 11-year-old.

**F13 · MINOR · Ch.2 → Ch.3 / Ch.5 — two deferral promises are made but never honoured downstream.**
Ch.2's coverage note defers *"loop `else` to Ch.3 (Functions)"* and *"De Morgan's to Ch.5 (code design)"*, with both *"flagged in the Codex as 'coming soon.'"* But grep shows **neither Ch.3 nor Ch.5 owns the promised concept** (no `for…else`/`while…else` lesson in Ch.3; no De Morgan content in Ch.5). Neither is a spine concept, so this is not a coverage gap — but a "coming soon" Codex flag that never resolves is a broken forward-promise the student can see.
**Fix:** either add the one promised subsection in each target chapter (loop-`else` fits Ch.3's early-return material; De Morgan fits Ch.5's readable-conditions material) **or** soften Ch.2's note from "deferred to Ch.N" to "out of scope for this course / optional Codex aside," and don't emit a "coming soon" flag. Pick one so the promise and the delivery agree.

**F14 · MINOR · Ch.3 L3.6 — turtle-ownership reference is vague.**
Turtle is owned in **Ch.1 L1.7** (`forward`/`right`/`penup`/`pendown`), and Ch.2 L2.7 correctly recalls *"turtle `forward`/`right` (Ch.1 L1.7)"*. But Ch.3 L3.6 recalls line says *"turtle basics (Ch.2 or earlier)"* — imprecise and slightly wrong (turtle is Ch.1, applied again in Ch.2). Cosmetic, but the arc is otherwise precise about owners.
**Fix:** change to *"turtle basics (Ch.1 L1.7; applied Ch.2 L2.7)."*

**F15 · MINOR · Ch.4 self-flagged coverage gap is real but unresolved.**
Ch.4's own 3-line summary flags: *"`del` and `list.index()`/`list.count()` are mentioned in the methods inventory but not given their own exercises — flag for harness concept-coverage check."* They appear in the §"Concepts owned" list (`index`, `count`, `del d[key]`) but no worked example or exercise exercises them. Per AUTHORING.md (*"an item no lesson covers is a gap to fix, not to drop"*), this will trip the concept-coverage check at authoring time.
**Fix:** either add a small exercise touching `index`/`count`/`del` (a one-line "find the position of X / count occurrences / remove a key" task fits 4.2 or 4.5), or demote them from "owned" to a "mentioned in passing" ledger line. The flag is already in the plan; just resolve it before authoring.

---

## Verified-correct (re-run on python3 3.14.5, so we know it was actually checked)

- `def f(): x = 1` then `f().upper()` → `AttributeError: 'NoneType' object has no attribute 'upper'` (Ch.5 F6 claim) — correct.
- `next([1,2,3])` → `TypeError: 'list' object is not an iterator`; exhausting `iter([1])` → `StopIteration` (Ch.8 8.6a — two *distinct* errors, as the plan states) — correct.
- `json.loads(json.dumps((1,2,3)))` → `[1, 2, 3]`, type `list` (Ch.7 tuple-round-trip misconception) — correct.
- `sorted(freq, key=freq.get, reverse=True)` sorts keys by value, no lambda (Ch.8 8.6a) — correct.
- `p.describe(p)` with `def describe(self)` → `TypeError: Pet.describe() takes 1 positional argument but 2 were given` (Ch.6 6.3 explicit-`self` demo) — exact message correct.
- Module-level `discount` reassigned inside a function → `UnboundLocalError` (Ch.3 3.4) — correct.
- `round(2.5, 2)` → `2.5` ≠ `f"{2.5:.2f}"` → `2.50` (the basis of F12) — confirmed.

---

## Progression, spiral & consistency verdict

- **Monotonic difficulty:** holds across the arc. Ch.0 (rungs 1–2) → Ch.1 (1–6, full scaffold on first contact) → Ch.2 (blank-by-default by L2.5) → Ch.3 (blank the global default by L3.3) → Ch.4–8 (rung-6 strand projects, style-channel pressure additive from Ch.5, max-scale integration in Ch.8). No chapter is easier than its predecessor; no flat repetition.
- **Spiral weaving:** genuinely present, not aspirational. Concrete recall chains verified: strings (Ch.1) → list mechanics (Ch.4) → text extraction (Ch.7) → text tool (Ch.8); functions (Ch.3) → methods (Ch.6) → modules (Ch.7); the dict-accumulator `freq.get(k,0)+1` threads Ch.4 → Ch.7 → Ch.8 with the comprehension explicitly *excluded* from the accumulate case (a subtle, correct distinction). The five-strand sound spine (`play`/`sleep` Ch.0 → variable motif Ch.1 → loop beats Ch.2 → function grooves Ch.3 → list patterns Ch.4 → `Note`/`Synth` Ch.6 → generative piece Ch.8) is unbroken. Warm-ups are retrieval from earlier lessons throughout.
- **Consistency:** all nine chapters share the six-part arc, the metadata block, the misconception/error-class tables, and sourced scope. Owner-vs-recall labelling is now clean for the F1–F4 concepts. The residual issues (F10–F12) are confined to three string-handling tools that sit one notch ahead of where they're first needed, plus two cosmetic items (F13–F15).

## What's strong (unchanged from round 1, re-confirmed)

- Single-owner spine with a correct dependency order (types → vars → operators → control → functions → collections → design → OOP → modules → integration); prerequisites satisfied for every named concept.
- No-inheritance cap respected everywhere, stated explicitly in Ch.6.
- Misconception lists are technically accurate (all spot-checked claims re-ran true).
- Errors-as-curriculum is consistent: every class is provoked, read, and registered to the Codex; first-meeting now unambiguous.

## Top fixes before authoring
1. **F12 (MAJOR):** decide where `:.2f` lives — move to Ch.3 L3.5 (preferred) or rewrite Ch.3's "two decimal places" specs to `round()`; Ch.1's deferral target must match.
2. **F11 (MAJOR):** give `str.lower()`/`str.upper()` an owner (Ch.7 L7.5) so Ch.8 8.6a's case-insensitive spec is satisfiable.
3. **F10 (MAJOR):** make Ch.5 Challenge ex.3 not *author* `.strip()` before Ch.7 owns it (pre-supply it, or swap to an owned duplication).
4. **F13–F15 (MINOR):** resolve the two unhonoured Ch.2 deferral promises; fix the Ch.3 turtle-owner reference; close Ch.4's self-flagged `del`/`index`/`count` coverage.
