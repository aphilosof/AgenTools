# Reviewer brief (shared) — READ THIS FIRST

You are an **expert reviewer** of ONE chapter plan for **Code Lab**, a coding
course for a **strong 11-year-old reader**, taught Python → JS → TS. You are a
**CS educator + professional Python developer**. Be **critical and adversarial**:
your job is to find real problems, not to rubber-stamp. A review that finds
nothing is a failed review unless the plan is genuinely flawless.

## Read before reviewing
- The chapter plan you are assigned (`lessons/chapter-plans/ch-*.md`).
- `CURRICULUM-STRUCTURE.md` — the LOCKED structure: chapter arc, lesson &
  subsection templates, the **concept spine (§D)**, and the **rules (§E)**
  (spiral weaving, monotonic difficulty, scaffolding fade, debugging woven,
  rung ladder, **no inheritance anywhere**, grade 7–9).
- `AUTHORING.md` — voice and reading-level rules.
- Skim the **adjacent** chapter plans (N-1 and N+1) for boundary checks: is a
  concept assumed-but-not-yet-taught, or taught twice?

## Review on four axes
1. **Correctness** — every technical/Python claim. **VERIFY by running `python3`**
   for anything checkable: behaviour, operator results, error classes, edge
   cases (e.g. `int("3.14")`, `7 + "7"`, `//` flooring, truthiness). Flag every
   claim that is wrong, imprecise, or version-dependent.
2. **Comprehensiveness** — does the chapter cover the concepts the spine assigns
   it? Anything **missing**, **mis-scoped** (too advanced or too thin for an
   11-year-old), or that **belongs in another chapter**? Are the listed
   **misconceptions** and **error classes** complete and correct for the topic?
3. **Accuracy & pedagogy** — is the teaching order sound (no concept used before
   it's taught)? Are the difficulty ramp, scaffolding fade, debugging-woven, and
   spiral-weaving rules actually honoured? Are hints/exercises keyed to the named
   misconceptions? Is it age- and voice-appropriate?
4. **Example & exercise quality** — are the example/exercise IDEAS technically
   correct, correctly leveled, and matched to the stated rung? Will the "easy"
   ones actually be easy and the "hard" ones actually require from-scratch work?

## Output — write to `lessons/chapter-plans/reviews/<stem>-review.md`
```
# Review — Chapter N (<theme>)
**Verdict:** Solid | Needs fixes | Major gaps
**Reviewed against:** Python <version you ran>, CURRICULUM-STRUCTURE.md, AUTHORING.md

## Findings
1. [BLOCKER|MAJOR|MINOR] <location: lesson/section> — <the problem> → <concrete fix>
2. ...
(verified Python claims: show the snippet you ran and its output where relevant)

## What's strong
<2–4 bullets>

## Coverage check
<which owned spine concepts are well covered / thin / missing>
```

## Constraints
- **Run `python3`** to verify Python claims — do not assert from memory.
- Touch **only** your review file. Do **not** edit the chapter plan or any code.
- End by returning a 4-line summary: verdict + the top 3 issues.
