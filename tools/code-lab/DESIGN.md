# DESIGN.md

One shared layout and type system, three themes. A theme switch swaps tokens and display fonts only; structure, spacing logic, and component anatomy never change. Themes: `magazine` (light, default), `c64` (dark, default dark), `terminal` (dark, locked until Real Tools I completion, then user-selectable).

## Shared system

**Page anatomy (lesson screen):**
1. Top bar: world and lesson title (left), progress cells and lesson counter (right)
2. Prompt block: the challenge text
3. Editor panel: header strip with filename, line-numbered CodeMirror editor
4. Action row: primary (run), secondary (hint), ghost (sandbox / solution)
5. Output panel: header strip, output lines with semantic states (info, success, error)
6. App navigation: Lessons, Knowledge Map, Codex, Arena, Sandbox (persistent tabs or sidebar; "Knowledge Map" is the learner-facing name everywhere, `map.js` internally)

**Global rules (all themes):**
- Flat surfaces only. No gradients, shadows, glows, or blur.
- Progress is always discrete cells, never a smooth bar.
- Output success lines always carry the theme success color; errors the error color.
- Readability floors: Press Start 2P never below 11px; VT323 never below 18px; IBM Plex Mono never below 12px.
- Theme implemented as CSS custom properties under `[data-theme="..."]` on `<html>`. Components reference only the custom properties below, never raw hex.

**Custom property contract (every theme defines all of these):**
`--bg, --frame, --panel, --panel-header, --border, --border-w, --radius, --text, --text-soft, --muted, --lineno, --accent, --accent-contrast, --literal, --success, --error, --font-display, --font-body, --font-code, --size-body, --size-code, --size-display`

**Syntax highlighting roles:** keyword, literal (strings and numbers share one color), comment, lineno, base. Mapped per theme below.

**Fonts (Google Fonts CDN):** Archivo 400/500, IBM Plex Mono 400/500, Press Start 2P, VT323.

---

## Theme: magazine (light)

The 80s computer-magazine type-in listing. Cream paper, rainbow manual stripe, printed listings, keycap buttons, printout output.

| Token | Value |
|---|---|
| --bg | #F5EEDD |
| --frame | none |
| --panel | #FFFCF2 |
| --panel-header | #EFE6CE |
| --border | #DCD2B8 |
| --border-w | 1px |
| --radius | 6px |
| --text | #2A2517 |
| --text-soft | #4A4334 |
| --muted | #7A6F52 |
| --lineno | #B0A37F |
| --accent | #C8491F |
| --accent-contrast | #F5EEDD |
| --literal | #4E7A1B |
| --success | #4E7A1B |
| --error | #A32D2D |
| --font-display | Archivo |
| --font-body | Archivo |
| --font-code | IBM Plex Mono |
| --size-body | 15px |
| --size-code | 14px |
| --size-display | 25px |

**Signature elements:**
- Rainbow stripe at top of page: equal-width solid blocks of #D85A30, #EF9F27, #639922, #1D9E75, #378ADD, 7px tall.
- Buttons as keycaps: 1px border #C9BC9C, border-bottom 3px #B3A37D, radius 6px, mono 13px. Primary keycap inverts: bg #2A2517, text #F5EEDD, border-bottom 3px #000.
- Editor panel styled as "listing W-N · filename.py" in the header strip.
- Output panel labeled "printout"; pass state is a stamped outline badge: 1.5px border --success, --success text, radius 4px.
- Syntax: keyword #C8491F, literal #4E7A1B, comment #9A8F6E, base --text.

---

## Theme: c64 (dark)

The Commodore 64 boot screen. Blue on blue, thick light-blue screen frame, pixel headings, terminal body face, READY-prompt output.

| Token | Value |
|---|---|
| --bg | #40318D |
| --frame | #7869C4 (24px page frame around the app) |
| --panel | #332478 |
| --panel-header | #332478 |
| --border | #7869C4 |
| --border-w | 2px |
| --radius | 0 |
| --text | #FFFFFF |
| --text-soft | #CFC9F2 |
| --muted | #A9A1E3 |
| --lineno | #7B6FD0 |
| --accent | #7BD7D0 |
| --accent-contrast | #1B1145 |
| --literal | #F0E97C |
| --success | #94E089 |
| --error | #F09A8C |
| --font-display | Press Start 2P |
| --font-body | VT323 |
| --font-code | VT323 |
| --size-body | 20px |
| --size-code | 20px |
| --size-display | 13px |

**Signature elements:**
- Boot header centered above the app: `**** code lab 64 ****` in Press Start 2P 11px --muted, with a VT323 status line beneath (lessons free, ready.).
- Buttons as solid blocks, square corners, Press Start 2P 11px: primary bg --accent text --accent-contrast; secondary bg #7869C4 text #1B1145; ghost transparent with 2px --border and --muted text.
- Progress as block characters: filled and hollow squares.
- Output panel ends with a `ready.` line and a solid block cursor.
- All text lowercase by default (modern twist on the C64 face).
- Syntax: keyword #7BD7D0, literal #F0E97C, comment #7B6FD0, base #FFFFFF.

---

## Theme: terminal (dark, unlockable)

Green phosphor terminal with amber actions. Unlocks on completing Real Tools I; the unlock notice frames it as earning the terminal look by learning the terminal.

| Token | Value |
|---|---|
| --bg | #0B0F0B |
| --frame | none |
| --panel | transparent |
| --panel-header | transparent |
| --border | #24402A |
| --border-w | 1px |
| --radius | 0 |
| --text | #DCFFE6 |
| --text-soft | #9FE8B6 |
| --muted | #4E7A58 |
| --lineno | #3A5C42 |
| --accent | #FFB454 |
| --accent-contrast | #3D2A05 |
| --literal | #FFB454 |
| --success | #5BE08A |
| --error | #FF7B6B |
| --font-display | IBM Plex Mono |
| --font-body | IBM Plex Mono |
| --font-code | IBM Plex Mono |
| --size-body | 14px |
| --size-code | 14px |
| --size-display | 13px |

**Signature elements:**
- Status bar at top (bg #131D13): app name, world/lesson position, language indicator in --accent.
- Panels are bordered boxes with a small header strip naming the panel (editor, output) in --muted 12px.
- Buttons as bracketed commands: `[ run ]` with 1px --accent border and --accent text; secondary `[ hint ]` with #4E7A58 border and --success text; ghost with --border and --muted.
- Output opens with a `$ run filename.py` line in --muted; pass state is a solid tag: bg --accent, text --accent-contrast.
- Footer key-hints line: `f5 run · f1 hint · f8 solution` in --muted 12px, with block-character progress on the right.
- Syntax: keyword #5BE08A, literal #FFB454, comment #3A5C42, base #DCFFE6.

---

## Theme switching and unlock logic

- Default follows a manual toggle (sun/moon equivalent rendered in-theme), persisted in localStorage. magazine is the light option, c64 the dark option.
- terminal appears in the theme picker as a locked silhouette with the unlock condition stated. After Real Tools I completion it becomes selectable as an alternative dark theme.
- CodeMirror receives a per-theme style layer mapping the five syntax roles to the colors above. One mapping file, three role tables.
