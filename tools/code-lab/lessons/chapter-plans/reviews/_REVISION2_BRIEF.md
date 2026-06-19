# Round-2 revision brief (shared) — READ THIS FIRST

Apply the fixes from the deep (round-2) review to ONE chapter plan. Working dir:
`code-lab` root.

## Do this
1. Read your chapter's **round-2 review** `lessons/chapter-plans/reviews/<stem>-review2.md`
   and your **chapter plan** `lessons/chapter-plans/<stem>.md`.
2. **Fix every finding** in the round-2 review (most are MINOR). For any
   technical/Python fix, **verify with `python3` first**.
3. Apply the two new decisions below wherever they touch your chapter.
4. Edit your chapter plan **in place**; keep the format. Touch nothing else
   (no other chapters, no code, not the review file).

## Two new decisions (now recorded in CURRICULUM-STRUCTURE.md §D)
1. **Chapter 1 owns the everyday string toolkit**: `.lower()`, `.upper()`,
   `.strip()`, and **f-string `:.2f` money formatting** — in addition to indexing,
   slicing, `split`/`join` it already owns. Any later chapter that uses these now
   **recalls** them from Ch.1 (never re-teaches). **Ch.7** keeps only the deeper
   data-wrangling methods: `.replace()`, `.find()`, `.startswith()`, `.endswith()`.
   - Ch.1: ADD `.lower()`/`.upper()`/`.strip()` and `:.2f` to the Strings lesson.
   - Ch.3 (tip-splitter), Ch.5, Ch.8: these now legally **recall** the above from
     Ch.1 — keep the usage, label it recalled, don't defer or re-teach.
   - Ch.7: keep only `.replace()`/`.find()`/`.startswith()`/`.endswith()`.
2. **loop-`else` is dropped entirely.** Remove every mention and any "coming soon /
   taught later" promise for it (it was previously deferred to Ch.3 — that promise
   is void). De Morgan's laws remain owned by **Ch.5**, so a "later in Ch.5" promise
   for De Morgan is fine; loop-`else` is not.

## Runtime note (relevant to error-message claims)
The course now ships **Pyodide 314 = CPython 3.14.2**, and the harness runs
Python 3.14. So 3.14 error-message text (e.g. `AttributeError` adds
"Did you mean…?") is the **correct** target — do not write lesson copy that
hard-matches older 3.12 message strings.

## Output
Return a 3-line summary: what you fixed + anything still open.
