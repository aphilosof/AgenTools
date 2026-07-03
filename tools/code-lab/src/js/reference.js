/* reference.js — the always-available reference chart (report Part 5).

   window.CODELAB.reference is a list of { title, head, rows } tables in the
   exact shape the engine's buildRefTable() already renders (cells accept
   inline `code` and **bold**). The panel/button that surfaces this over every
   lesson is wired separately; this file is just the verified data.

   Every value confirmed against the real engine:
     - music.js: A(69)=440Hz (midiToFreq), one beat = 0.5s at 120 BPM,
       set_tempo default 120, sample() shapes only "kick" and "snare" —
       any other name plays a short generic noise tick.
     - turtle.js: pencolor passes the name straight to the canvas, so any CSS
       colour name or #RRGGBB works; origin is centre, heading 0 = east (right).
     - plot.js: bar / plot / dotplot / piano_roll. */

(function () {
  var CL = (window.CODELAB = window.CODELAB || {});

  CL.reference = [
    {
      title: "Notes (MIDI) — middle C = 60 · +1 = one semitone · +12 = one octave · anchors: 48 low C, 60 middle C, 72 high C, 84 very high C",
      head: ["#", "Note", "#", "Note"],
      rows: [
        ["`60`", "C", "`66`", "F♯ / G♭"],
        ["`61`", "C♯ / D♭", "`67`", "G"],
        ["`62`", "D", "`68`", "G♯ / A♭"],
        ["`63`", "D♯ / E♭", "`69`", "A (440 Hz)"],
        ["`64`", "E", "`70`", "A♯ / B♭"],
        ["`65`", "F", "`71`", "B"],
        ["", "", "`72`", "C (octave up)"],
      ],
    },
    {
      title: "Tempo & beats — `set_tempo(bpm)` (default 120) · `sleep(beats)` · at 120 BPM one beat = 0.5 s",
      head: ["Note value", "beats", "sec @ 120"],
      rows: [
        ["whole", "`4`", "`2.0`"],
        ["half", "`2`", "`1.0`"],
        ["quarter", "`1`", "`0.5`"],
        ["eighth", "`0.5`", "`0.25`"],
        ["sixteenth", "`0.25`", "`0.125`"],
      ],
    },
    {
      title: "Tempo feel (rough BPM)",
      head: ["style", "BPM"],
      rows: [
        ["ballad", "`~70`"],
        ["pop", "`~120`"],
        ["dance", "`~128`"],
        ["drum & bass", "`~174`"],
      ],
    },
    {
      title: "Sound commands",
      head: ["command", "what it does"],
      rows: [
        ["`play(note, dur)`", "play a MIDI note; `dur` is seconds (default `0.4`)"],
        ["`sleep(beats)`", "wait before the next sound; at 120 BPM one beat = 0.5 s"],
        ["`sample(name)`", "play a drum: **kick** (thump) or **snare** (crack). Other names — like `\"hihat\"` — play a short noise tick"],
        ["`play_pattern(notes, gap)`", "play a list of notes, `gap` seconds apart (default `0.5`)"],
        ["`set_tempo(bpm)`", "set the tempo (default `120`)"],
      ],
    },
    {
      title: "Colours — `pencolor(\"name\")` or `pencolor(\"#RRGGBB\")` (any CSS colour name or hex works)",
      head: ["name", "hex", "name", "hex"],
      rows: [
        ["red", "`#FF0000`", "pink", "`#FFC0CB`"],
        ["orange", "`#FFA500`", "purple", "`#800080`"],
        ["yellow", "`#FFFF00`", "cyan", "`#00FFFF`"],
        ["gold", "`#FFD700`", "magenta", "`#FF00FF`"],
        ["green", "`#008000`", "brown", "`#A52A2A`"],
        ["teal", "`#008080`", "gray", "`#808080`"],
        ["blue", "`#0000FF`", "black", "`#000000`"],
        ["navy", "`#000080`", "white", "`#FFFFFF`"],
      ],
    },
    {
      title: "Turtle — starts at the centre, facing right",
      head: ["command", "what it does"],
      rows: [
        ["`forward(n)` · `backward(n)`", "move `n` steps forward or back"],
        ["`right(deg)` · `left(deg)`", "turn in place by `deg` degrees"],
        ["`penup()` · `pendown()`", "stop / start drawing while moving"],
        ["`pencolor(c)`", "set the pen colour (see Colours)"],
        ["`goto(x, y)`", "jump straight to a point"],
        ["`home()`", "return to the centre, facing right"],
      ],
    },
    {
      title: "Polygon turns — a closed shape's turns add up to 360°, so each turn = 360 ÷ sides",
      head: ["shape", "sides", "turn"],
      rows: [
        ["triangle", "`3`", "`120`°"],
        ["square", "`4`", "`90`°"],
        ["pentagon", "`5`", "`72`°"],
        ["hexagon", "`6`", "`60`°"],
      ],
    },
    {
      title: "Charts — pick by the data's shape",
      head: ["command", "use it for"],
      rows: [
        ["`bar(labels, values)`", "comparing separate **categories**"],
        ["`plot(xs, ys)`", "a value over an **ordered sequence** (a line)"],
        ["`dotplot(xs, ys)`", "two **paired measurements** (dots, no line)"],
        ["`piano_roll(notes, starts, durations)`", "a **melody**: pitch up the page, time across"],
      ],
    },
  ];
})();
