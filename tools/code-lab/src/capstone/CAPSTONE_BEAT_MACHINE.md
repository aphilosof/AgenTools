# Capstone Project — The Beat Machine

Build a **step sequencer**: a drum machine you program beat by beat, play back, edit, and save. This is the most music-forward capstone and it exercises the most of the course — nested data, a menu program, functions, files, and (as a stretch) a class and real sound.

Set up first with `CAPSTONE_00_SETUP.md`. Build this in a file called `beat_machine.py` and run it from the terminal with `python3 beat_machine.py`.

---

## What you're building

A beat is a grid. Down the side are **tracks** (kick, snare, hihat). Across the top are **steps** in time. Each cell is on or off:

```
Tempo: 120 BPM
       01234567
kick   #...#...
snare  ..#...#.
hihat  ########
```

Your program shows this grid, **plays** it by stepping across the columns in time, lets you **toggle** any cell on or off, change the **tempo**, and **save/load** the whole beat as a JSON file so it's still there tomorrow.

## The data model

The whole song is one dictionary — a tempo and a dict of tracks, each track a list of 0s and 1s (Chapter 4, all the way):

```python
song = {
    "tempo": 120,
    "tracks": {
        "kick":  [1, 0, 0, 0, 1, 0, 0, 0],
        "snare": [0, 0, 1, 0, 0, 0, 1, 0],
        "hihat": [1, 1, 1, 1, 1, 1, 1, 1],
    },
}
```

A `1` means "hit on this step," a `0` means "rest." That's it — everything else is functions that read and change this one structure.

---

## Milestones (build in this order, run after each)

**1 — Show the grid.** Write `show(song)` that prints the tempo and, for each track, a row of `#` (hit) and `.` (rest). *Uses:* dict looping (Ch4), a `for` loop building a string, an f-string (Ch1). Run it on the starter song and check the grid looks right before doing anything else.

**2 — Play it.** Write `play(song)` that walks the steps `0` to `7`, and on each step prints which tracks have a `1` there, pausing between steps so it plays *in time*. The pause is `60 / tempo / 2` seconds (that spaces the steps as eighth notes). *Uses:* `import time` and `time.sleep(...)`, a loop, a `for`+`if` filter of the tracks. This is your first taste of real timing.

**3 — The menu loop.** Write `menu(song)`: a `while True` loop that shows the grid, reads a one-letter choice with `input()`, and calls the right function — play, edit, tempo, save, load, quit. *Uses:* the `while True` + `input()` menu pattern (Ch2/Ch8), `if`/`elif`/`else`. Wrap the risky parts in `try`/`except` so a wrong key never crashes the program.

**4 — Edit a step.** Write `toggle(song, track, step)` that flips one cell between 0 and 1. Ask the user which track and which step, and guard bad answers (a track that doesn't exist → `KeyError`, a step that's out of range → `IndexError`, a non-number → `ValueError`) with one `except`. *Uses:* dict/list indexing, `try`/`except` with several classes (Ch8).

**5 — Save and load (for real).** Write `save(song, path)` and `load(path)` using `json.dump`/`json.load` inside `with` blocks (Ch7). Now your beat survives closing the program. Handle "no saved song yet" with `except FileNotFoundError`.

**6 — Make it yours.** Change the starter pattern to a beat *you* like. Add a fourth track. Widen the grid to 16 steps. This is the point of the whole thing.

---

## Reference program (check yourself against this *after* you've tried each milestone)

This is a complete, working version. Yours doesn't have to match line for line — if it shows, plays, edits, and saves, it's right.

```python
import json, time

STEPS = 8

def new_song():
    return {"tempo": 120, "tracks": {
        "kick":  [1, 0, 0, 0, 1, 0, 0, 0],
        "snare": [0, 0, 1, 0, 0, 0, 1, 0],
        "hihat": [1, 1, 1, 1, 1, 1, 1, 1]}}

def show(song):
    print(f"\nTempo: {song['tempo']} BPM")
    print("       " + "".join(str(i) for i in range(STEPS)))
    for name, pattern in song["tracks"].items():
        cells = "".join("#" if pattern[i] else "." for i in range(STEPS))
        print(f"{name:6} {cells}")

def play(song):
    seconds = 60 / song["tempo"] / 2
    for i in range(STEPS):
        hits = [name for name, pat in song["tracks"].items() if pat[i]]
        print("  ".join(hits) if hits else "-")
        time.sleep(seconds)
    print("(done)")

def toggle(song, track, step):
    song["tracks"][track][step] ^= 1   # ^= 1 flips 0<->1

def save(song, path):
    with open(path, "w") as f:
        json.dump(song, f)

def load(path):
    with open(path, "r") as f:
        return json.load(f)

def menu():
    song = new_song()
    while True:
        show(song)
        choice = input("\n[p]lay [e]dit [t]empo [s]ave [l]oad [q]uit > ").strip().lower()
        if choice == "q":
            print("Bye!"); break
        elif choice == "p":
            play(song)
        elif choice == "e":
            try:
                track = input("track: ").strip()
                step = int(input(f"step (0-{STEPS - 1}): "))
                toggle(song, track, step)
            except (ValueError, KeyError, IndexError):
                print("Couldn't edit that — check the track name and step.")
        elif choice == "t":
            try:
                song["tempo"] = int(input("new tempo (BPM): "))
            except ValueError:
                print("Tempo must be a number.")
        elif choice == "s":
            save(song, "song.json"); print("Saved to song.json")
        elif choice == "l":
            try:
                song = load("song.json"); print("Loaded song.json")
            except FileNotFoundError:
                print("No saved song yet.")
        else:
            print("Didn't understand that.")

if __name__ == "__main__":
    menu()
```

*(Verified: runs end-to-end under `python3` — shows, plays, toggles a step, changes tempo, saves, loads, quits.)*

---

## Stretch goals (each is a real "level up")

- **A `Track` class (Ch6).** Turn each track into a `Track` object that owns its `name` and `pattern` and has `.toggle(step)` and `.is_hit(step)` methods. The song becomes a list of `Track`s. This is the Chapter 6 "a class that owns its data" idea applied to music.
- **Verse and chorus.** Store several beats and a `Song` that plays them in an order — `verse, verse, chorus` — using a list and a loop.
- **Generative fills.** Use `random.choice([0, 1])` (Ch7) to sprinkle random hits into a track, or `random.choice` on a scale list to add a melody line played with real notes.
- **Real sound (free on a Mac, no install).** macOS has a built-in sound player called `afplay`. Drop three short `.wav` files (`kick.wav`, `snare.wav`, `hihat.wav`) into your folder, then `import subprocess` and, on each hit, launch the sound *without waiting* so the beat keeps its timing:
  ```python
  import subprocess
  subprocess.Popen(["afplay", "kick.wav"])   # fires the sound and moves on
  ```
  Map each track name to its `.wav` file and call this in `play` instead of printing the name — now it actually drums, for free. (Using `Popen` rather than waiting is what lets several drums hit "at once" and keeps the loop on tempo.) Get the silent version working first, then add sound.
- **Wider and longer.** Bump `STEPS` to 16, then to 32, and add a second bar.

## Done when

Your program shows a grid, plays it in time, lets you toggle cells and change tempo without crashing on bad input, and saves and loads a beat you made yourself. That's a real, complete program — the kind that lives in a folder and runs whenever you want it.
