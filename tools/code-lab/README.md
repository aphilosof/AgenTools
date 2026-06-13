# Code Lab

A self-contained coding course for an 11-year-old: Python, then JavaScript, then TypeScript, taught through hands-on exercises in five strands (numbers, words, data, plotting, sound) that converge on electronic music capstone projects. The deliverable is one file, `dist/course.html`, which runs by double-clicking in any browser.

## Start here

Open Claude Code in this folder and say:

> Read CLAUDE.md, then PLAN.md and DESIGN.md. Execute Phase 1 per the build plan.

## Structure

| Path | Purpose |
|---|---|
| `PLAN.md` | The spec: curriculum, architecture decisions, pedagogy, build phases |
| `DESIGN.md` | Three themes with full token sets, shared layout system |
| `CLAUDE.md` | Working rules for Claude Code, including review gates and budget discipline |
| `NEXT.md` | Live state: what is done, what is next |
| `COACH.md` | One-page parent guide: the weekly ritual, the stuck protocol |
| `REVIEW.md` | The curriculum review whose amendments are folded into PLAN.md (reference only) |
| `src/template.html` | Page skeleton with CDN tags and build slots |
| `src/css/` | Styles; `themes.css` carries all theme tokens (already populated) |
| `src/js/` | One module per responsibility, concatenated by the build |
| `lessons/` | One data file per world (`schema.md` defines the format) |
| `arena/` | Challenge Arena bank |
| `build/build.js` | Inlines everything into `dist/course.html` (functional) |
| `tests/` | Checker harness (to be implemented in Phase 1) |

## Commands

```
npm run build   # writes dist/course.html
npm test        # runs the checker harness
```

## Build phases

1. The shell: engines, themes, knowledge map, Codex, Arena with coach mode, 5 sample lessons. Gate: tested with the kid.
2. Python worlds 0 through 7 plus Real Tools I, world by world.
3. JavaScript and sound worlds 8 through 10.
4. Projects, World 12, Real Tools II, polish.

Never skip a review gate. Details in PLAN.md Section 6.
