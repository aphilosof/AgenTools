# Deep review (round 2) brief — READ THIS FIRST

These chapter plans were already reviewed once and **revised**. Your job is a
**second, deeper, adversarial pass** on the CURRENT (revised) plan. Assume nothing
is correct until you have verified it yourself. A first review already caught the
obvious errors — your value is finding what survived, what the revision broke, and
the subtle things. You are a CS educator + professional Python developer reviewing
material for a **strong 11-year-old**. Working dir: `code-lab` root.

## Read
- Your assigned **current** chapter plan `lessons/chapter-plans/<stem>.md`.
- Its **round-1 review** `lessons/chapter-plans/reviews/<stem>-review.md` (so you
  can confirm each prior finding is actually fixed — not just claimed fixed).
- `CURRICULUM-STRUCTURE.md` (locked structure: arc §C, lesson §B, subsection §A,
  spine §D incl. the cross-cutting ownership decisions, rules §E) and `AUTHORING.md`.
- Skim adjacent chapter plans for boundary checks (concept used before taught / twice).

## Dig deep — verify, don't trust
1. **Run `python3` on EVERY checkable claim.** Operator results, precedence,
   `//` flooring on negatives, truthiness, exact **error classes AND messages**,
   string/list/dict method return values and edge cases, conversions, JSON/sqlite
   behaviour, `is_prime` correctness across 0/1/2/negatives/primes, etc. Paste the
   snippet + output as evidence for anything you assert.
2. **Round-1 fixes audit.** For each finding in the round-1 review, state
   CONFIRMED-FIXED / STILL-BROKEN / NEW-PROBLEM-INTRODUCED, with evidence.
3. **Every example and exercise**: is it technically correct? Solvable with ONLY
   the concepts taught so far (list any use-before-taught)? Correctly matched to its
   stated rung? Does the easy→hard gradient actually hold? Does the "blank editor"
   hard one truly need from-scratch work?
4. **Pedagogy & scope**: are the misconceptions complete and correctly described
   (verify the Python behind each)? Is anything too advanced or too thin for an
   11-year-old? Is difficulty monotonic? Is spiral-weaving real (examples/exercises
   reuse prior concepts)? Warm-up + recap present per lesson? Debugging woven?
5. **Boundary & ownership**: does the chapter honour the §D ownership decisions
   (string indexing/slicing/`split` from Ch.1; comprehensions only Ch.8; no
   `global`; built-ins homed; abstraction named in Ch.3)?

## Output — write to `lessons/chapter-plans/reviews/<stem>-review2.md`
```
# Deep Review (round 2) — Chapter N (<theme>)
**Verdict:** Clean | Needs fixes | Major gaps
**Python verified on:** <version>

## Round-1 fixes audit
- finding 1: CONFIRMED-FIXED / STILL-BROKEN / NEW-PROBLEM — evidence
- ...

## New / remaining findings
1. [BLOCKER|MAJOR|MINOR] <location> — <problem> (python3 evidence) → <fix>
2. ...

## Verified-correct (so we know it was actually checked)
<a few key claims you ran and confirmed true>

## Verdict notes
```
Run `python3` for real. Touch ONLY your review2 file. Return a 4-line summary:
verdict + round-1 audit result + top remaining issues.
