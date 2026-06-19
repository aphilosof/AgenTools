# Revision brief (shared) — READ THIS FIRST

You are revising ONE chapter plan of **Code Lab** to fix everything its expert
review found. Your working dir is the `code-lab` project root.

## Do this
1. **Read your chapter's review** in `lessons/chapter-plans/reviews/<stem>-review.md`
   and **your chapter plan** `lessons/chapter-plans/<stem>.md`.
2. **Fix every finding** in the review — BLOCKER and MAJOR for certain, and MINOR
   where the fix is clear. For any **technical/Python** fix, **verify with
   `python3`** before writing it (do not trust the review or your memory blindly —
   confirm the corrected claim actually runs).
3. **Apply the six cross-cutting decisions below** wherever they touch your chapter.
4. **Edit your chapter plan in place** (`lessons/chapter-plans/<stem>.md`). Keep the
   same template/format. Do **not** touch other chapters, the engine, or any code.
   Do **not** edit the review file.
5. Re-check the structure rules in `CURRICULUM-STRUCTURE.md` §B/§C/§E as you fix:
   every lesson has a **warm-up** (recall) and a **recap+Codex**; difficulty/rung
   is **monotonic** (never drops); **debugging-woven** (≥1 debug/fix exercise per
   lesson where the concept can break); scaffolding-fade present; **no inheritance**.

## The six cross-cutting decisions (already recorded in CURRICULUM-STRUCTURE.md §D)
1. **String indexing/slicing + basic `.split()`/`.join()` are owned by Chapter 1**
   (the Strings lesson). Chapters that use them (2, 4, 5, 7) **recall** them, never
   re-teach. Chapter 7 owns only the **deeper** methods (`strip`/`replace`/`find`).
   - Ch.1: ADD indexing, slicing, and basic `split`/`join` to the Strings lesson.
   - Ch.2/4/5: any exercise using `.split()`/slicing is now a legal **recall**; keep
     but label it as recalled from Ch.1.
   - Ch.7: REMOVE any comprehension-as-recall; keep deeper string methods only.
2. **Comprehensions are owned by Chapter 8 only.** Strip every "Ch.4"/"Ch.7"
   comprehension reference; in Ch.8 they require Ch.1–7 prior knowledge.
3. **`global` is struck from the curriculum.** Remove any mention; scope is taught
   as local-vs-outer (read) in Ch.3; fix Ch.3's stray "Ch.6 Modules" pointer
   (modules is **Ch.7**).
4. **Abstraction**: practiced unnamed in Ch.0, **named in Ch.3** (functions hide
   detail), deepened in Ch.5. Ch.0 must NOT claim to "own" abstraction.
5. **Common built-ins** get homes: `len`/`round` → Ch.1; `sum`/`enumerate`/`zip`/
   `sorted` → Ch.4. Don't use one before its home chapter.
6. **Ch.8**: avoid `lambda` — use `key=freq.get` (or similar) for `sorted`.

## Output
End by returning a 4-line summary: what you fixed (counts by severity) + anything
you could NOT fix or that needs a cross-chapter decision you couldn't make alone.
