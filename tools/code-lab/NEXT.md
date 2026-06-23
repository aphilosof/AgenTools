# NEXT — where things stand

## LOCKED STANDARD (2026-06-22): Chapter 1, Lesson 1

Chapter 1 Lesson 1 "Output and print" renders correctly on the working site and
is **the approved standard we build everything else on.** Do not replace the
renderer or invent a new lesson screen — build to this.

### The render standard
- The **original lesson player** in `src/js/engine.js` renders every lesson.
  There is no separate renderer. (An earlier new renderer, `lesson-v2.js`, was a
  mistake and was removed.)
- Fonts: Archivo / IBM Plex Mono via the Google Fonts `<link>` in
  `src/template.html` (the working setup).
- Readability fix that made it land: inline `code` in teaching prose is styled
  in `src/css/layout.css` as a small tinted chip (0.82em), and `.prompt p`
  line-height is 1.65. Code-dense paragraphs read evenly because of this — keep it.

### The lesson data format (what the site renders)
One **concept per section**, flat — same shape as `lessons/chapter-01.js` /
`lessons/c1.js`:
`{ id, chapter, title, lang, strand, rung, concepts, misconceptions, warmup:[],
   timeBudgetMin, explain (with [[term]], code, **bold**), glossary, moreInfo:[{label,body}],
   example, exampleNote, task, starter, starterExpectation, check:{type,expected},
   hints:[], solution, codex:{topic,pattern,note}, styleRequired }`
The player shows: teaching card -> read-only worked example ("run it") -> "Your
turn" editor (run/check/hint/solution) -> output -> Back / Next section nav.

### Lesson 1 itself
- `lessons/c1.js` — 4 sections: print shows output | combining text | comments |
  sep & end. Verified: renders cleanly; all 4 solutions print their expected
  output on Python 3.13.
- The **rich authored source** (more examples/exercises per concept than the
  one-per-section site shows) is `lessons/ch-1/c1l1.reviewed.js` (subsection
  format) plus the factory artifacts in `lessons/ch-1/`. Agents author in that
  rich format; it is then converted down to the flat section format for the site.
- Parked (superseded, preserved): `lessons/_parked/chapter-00.js` (First Sound
  intro), `lessons/_parked/chapter-01.js` (older Chapter 1).

## Open decision before mass-building
The working player shows **one example + one exercise per section**. The authored
lessons have several of each. Decide whether to (a) keep one-per-section, or
(b) extend the player to show multiple — **before** building the rest, so the
whole curriculum is consistent.

## Next step
Point the lesson factory (`LESSON-FACTORY.md`) at the rest of Chapter 1, then
Chapters 0 and 2+. For each lesson: agents author + review, convert to the flat
section format, verify (renders + every solution passes on Python 3.13) **before**
adding it. One lesson reaches a clean, verified state before the next starts.
