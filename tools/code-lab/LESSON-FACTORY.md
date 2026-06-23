# Lesson-building factory — agentic design

How we turn the chapter plans into full, working, on-site lessons — lesson by
lesson — with agents that **critically vet** the plans and **flag questions**
instead of guessing.

## Inputs (the correct sources)
- **Per-lesson source:** the lesson's entry in `lessons/chapter-plans/ch-N.md`.
- **Output shape:** `lessons/schema.md` (which encodes `CURRICULUM-STRUCTURE.md`).
- **Rules / voice / level:** `AUTHORING.md` (grade 7–9, Think Python voice).
- **Quality bar:** `lessons/exemplar-w1-values-and-types.md`.
- **Runtime for all checks:** Python **3.13** (matches the shipping Pyodide 0.29.4).

## Flagged issues from last time → how this design handles them
1. **"Use the chapter plans, not w1l1."** Source is `ch-N.md`, lesson by lesson;
   output is the locked schema. The old `w1l1` format is not used.
2. **"Agents must be critical of the plans, not transcribe."** Stage 1 is a
   Plan-critique pass; Stage 3 stays adversarial. Trivial fixes are folded in and
   noted; substantive scope changes are **flagged**, never silently rewritten.
3. **"Flag any questions."** A typed FLAG mechanism runs through every stage;
   blocking flags **pause** the lesson and surface to you.
4. **Runtime/QC fidelity.** Everything is executed on Python 3.13 (the ESM 3.14
   can't load in the double-click setup — settled).
5. **Panel of writers.** Stage 2 is 2–3 independent authors + a judge.
6. **Foundation first.** Stages 1–4 need only Python + the plans + the schema;
   Stage 5 (integrate) needs the engine + harness (Phase 0.3/0.4).

---

## The pipeline (per lesson; fanned out across a chapter)

### Stage 1 — Plan critique & brief  · 1 critical educator
- **In:** the lesson's `ch-N.md` entry · `CURRICULUM-STRUCTURE.md` · `schema.md` ·
  `AUTHORING.md` · exemplar · the spine.
- **Does:** verify every claim by running Python 3.13; check concept coverage vs
  the spine, prerequisite order, difficulty ramp, age/voice fit, and that the
  lesson maps cleanly onto the schema (subsections, examples, exercises,
  codex/glossary/errorClasses).
- **Out:** a **refined lesson brief** (the concrete spec authors expand) + a
  **FLAGS** list.
- **Rule:** trivial corrections folded into the brief and noted; substantive
  scope/sequencing changes → FLAG (don't edit the chapter plan without your OK).
- **Gate:** any BLOCKER/QUESTION flag pauses this lesson for you; otherwise proceed.

### Stage 2 — Author panel + judge  · 2–3 authors + 1 judge
- **In:** the refined brief · `schema.md` · exemplar (quality bar) · `AUTHORING.md`.
- **Does:** each author independently drafts the **full** lesson to the schema —
  warmup, subsections (concept + 2–3 examples + 2–3 exercises with scaffold fade
  + a debug exercise), recap, codex/glossary/errorClasses, misconception-keyed
  hints, model solutions. The **judge** scores the drafts (fidelity to brief +
  structure, correctness, voice/level, exercise quality) and merges the strongest
  into one draft, grafting better parts where they win.
- **Out:** one lesson draft in schema shape.

### Stage 3 — Review / edit  · 1 adversarial reviewer
- **Does:** coherence, accuracy, breadth, quality, grade 7–9, spiral weaving,
  monotonic difficulty, structure adherence, hints keyed to misconceptions; stays
  critical of the source plan. Bounded loop back to Stage 2 on failure.
- **Out:** verdict + findings; emits FLAGS.

### Stage 4 — QC  · deterministic tester (no LLM judging correctness)
- **Does:** run on Python 3.13 + the music/turtle/plot mocks — **every** example
  `code` (matches its `expect`), **every** `starter` (matches `starterExpectation`),
  **every** `solution` (passes its `check`); reading level; time budget; the
  schema invariants.
- **Out:** evidence-based pass/fail per item. Fail → back to Stage 2 with the
  failing snippet + output.

### Stage 5 — Integrate  · coder  *(needs the foundation: engine + harness)*
- **Does:** encode the approved lesson into the engine's data files; build; run
  the full harness; render-check on the site.
- **Out:** integrated lesson, harness green, renders + navigates, Codex/Quiz
  populate.

---

## FLAGS (so nothing is guessed)
Every stage may emit flags, collected per lesson into a flags report:
- **BLOCKER** — can't proceed correctly (e.g., the plan asks for a concept not yet
  taught). Pauses the lesson.
- **QUESTION** — a judgment call only you should make. Pauses the lesson.
- **NOTE** — a change applied with rationale (e.g., a trivial Python-fact fix).
Blocking flags are surfaced to you at once; the chapter doesn't "complete" with
open BLOCKER/QUESTION flags.

## Gates
critique (no open blockers) → author-panel + judge → review clean → QC green →
integrate (harness green + renders) → **your review at the chapter boundary**.

## Orchestration — the Workflow
One chapter per invocation (billed — you opt in each batch), concurrency-capped,
lessons flow independently:

```js
// per chapter
const lessons = lessonsOf(chapter)                       // from ch-N.md
const built = await pipeline(
  lessons,
  l  => agent(critiquePrompt(l),     {schema: BRIEF_OR_FLAGS}),   // Stage 1
  br => br.blocked ? br                                            // pause on blocker
        : judge(await parallel(authorThunks(br))),                // Stage 2 panel+judge
  dr => agent(reviewPrompt(dr),      {schema: REVIEW}),           // Stage 3 (loops)
  rv => agent(qcPrompt(rv),          {schema: QC_REPORT}),        // Stage 4 (runs python3.13)
  qc => qc.green ? agent(integratePrompt(qc)) : qc,               // Stage 5 (needs foundation)
)
return { built, flags: collectFlags(built) }              // surfaced for your review
```

## What can run now vs. what waits
- **Runnable now** (Python + plans + schema): Stages 1–4 → produces reviewed,
  QC-green lesson drafts (as schema-shaped data), plus a flags report.
- **Waits on the foundation:** Stage 5 (integrate) needs the engine (0.3) +
  harness (0.4) + the finalized schema (0.2 review).

So we can run a **draft factory** (Stages 1–4) on a chapter now to get vetted
drafts + flags, and integrate later — or hold the whole factory until the
foundation lands. (Decision below.)
