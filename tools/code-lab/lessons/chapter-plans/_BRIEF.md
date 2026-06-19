# Chapter-plan brief (shared) — READ THIS FIRST

You are drafting a **detailed-but-complete plan for ONE chapter** of **Code Lab**,
a self-contained coding course for a **strong 11-year-old reader**, taught
**Python → JavaScript → TypeScript**, delivered as one double-clickable HTML
file. This is a **PLAN, not full lesson content**. Your working directory is the
`code-lab` project root.

## Read first, for consistency (do not skip)
- `CURRICULUM-STRUCTURE.md` — the **LOCKED** structure: the chapter arc, the
  lesson template, the subsection template (one concept + 2–3 examples easy→hard
  + 2–3 exercises with scaffolding fade), the concept spine, and the rules
  (spiral weaving, monotonic difficulty, scaffolding fade, debugging woven in,
  rung ladder, **no inheritance anywhere**, grade 7–9). **Follow it exactly.**
- `AUTHORING.md` — voice (*Think Python* / HTTLACS), reading level, sourcing rules.
- `lessons/exemplar-w1-values-and-types.md` — the quality bar for a lesson.
- `CURRICULUM.md` — the existing syllabus (reference only; the spine supersedes it).

## Research deeply (required — never assert from memory; cite sources)
- **Ground truth:** official Python docs (`docs.python.org` tutorial + language/
  library reference) — verify behaviour and naming.
- **Treatment & voice:** *Think Python* (greenteapress.com/thinkpython2) and
  *How to Think Like a Computer Scientist* (openbookproject.net/thinkcs/python).
- **Scope cross-check:** *Python for Everybody* (py4e.com) and **CSTA K-12
  grades 6–8** / the common **AP CSP** subset — confirm nothing expected at this
  level is missing and the teaching order is sound.
Use web search/fetch. Record the specific refs (with section/chapter) you used.

## Write your plan to the file path you are given, using THIS template

```
# Chapter N — <Theme>

## Overview
Role in the course; what the learner can DO by the end; the chapter's through-line.

## Concepts owned (keywords)
The spine concepts this chapter introduces — one line each.

## Concept map & dependencies
Teaching order; what each concept builds on (within the chapter); what is recalled
from earlier chapters (spiral weaving).

## Lessons  (on the chapter arc: Hook → Concept lessons → Strand-app → Chapter Challenge → Quiz)
For EACH lesson, as bullets (IDEAS, not written-out prose):
- title · arc role · concepts · rung(s) · strand
- 2–3 worked-example IDEAS, easy → harder (later ones reuse a prior concept)
- 2–3 exercise IDEAS with scaffolding fade (boilerplate → stub → blank);
  include at least one debug / spot-the-error / fix
- misconceptions · error classes · what it recalls

## Progression / difficulty ramp
How difficulty climbs across the chapter; where "write from scratch" applies.

## Chapter Challenge (outline)
6–10 exercises, easy → hard, mixing the chapter's concepts and strands.

## Chapter Quiz (outline)
What it must gate on (the must-pass concepts) before the next chapter unlocks.

## Misconceptions & error classes (chapter-wide list)

## Sources
The specific refs used, with section/chapter, as links.
```

## Constraints
- **Detailed plan, NOT content.** Bullets and ideas, ~1.5–2.5 pages. No written-out
  lesson prose or full exercise solutions.
- Adhere to `CURRICULUM-STRUCTURE.md` (arc, rungs, weaving, scaffolding fade,
  debugging woven, no inheritance).
- List concepts recalled from earlier chapters under "recalls" — do **not**
  re-teach them.
- **Touch no code, engine, or build.** Write only your one plan file.
- End by returning a 3-line summary: key decisions + any coverage/ordering concerns.
