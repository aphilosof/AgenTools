# Code Lab Capstone — Part 0: Leaving the Sandbox

Everything in Chapters 1–8 ran inside Code Lab, in the browser. That was on purpose — no setup, instant feedback. But a few things were *faked*: saving a file, loading it back, reading from the keyboard. On a real computer, those are real. This is where you stop practicing and start building programs that live on your own machine, in your own folder, that you can run any time and show anyone.

This guide gets you set up once. Then you pick one of three capstone projects and build it for real.

---

## 1. Get Python onto your computer

The friendliest way to start on a Mac is **Thonny** — a free app that bundles its own Python, a code editor, and a big green **Run** button in one window. That bundled Python matters here: it sidesteps the old system Python that macOS ships with, so you don't have to think about versions. Download the `.dmg` from `thonny.org`, drag Thonny into your **Applications** folder, and open it. The first time, macOS may warn that it's from an "unidentified developer" — **right-click the app and choose Open**, then click Open again, and it'll trust it from then on.

**Check it worked.** In Thonny, the bottom panel (the "Shell") shows the Python version when it starts. To check from the Terminal, type:

```
python3 --version
```

You should see something like `Python 3.12.x`. On a Mac, always use `python3` (and `pip3`), never plain `python` — that older name may be missing or point at an ancient Python 2. If you see a 3.x version, you're ready.

---

## 2. Make a workspace

Create a folder for your projects — call it `code-lab` — somewhere easy to find (your Desktop or Documents). Every program you write goes in here as a `.py` file. Keeping one folder means your programs and the files they save all stay together.

---

## 3. Meet the terminal

The terminal is a window where you type commands to your computer directly. It's how real programmers run programs. You don't need it to *write* code (the editor does that), but you do need it to *run* code the way real users would.

Open it with **Cmd+Space**, type "Terminal", and press Enter. The one command to learn first is `cd` ("change directory") — it moves the terminal into a folder:

```
cd Desktop/code-lab
```

Now the terminal is "standing inside" your project folder, and it can run the files there.

---

## 4. Your first real program

In Thonny (or any editor), type this and save it as `hello.py` in your `code-lab` folder:

```python
print("Hello from my own computer!")
name = input("What's your name? ")
print("Nice to meet you,", name)
```

Run it **two ways**, so you know both:

- **In Thonny:** press the green **Run** button. The Shell at the bottom runs it and waits for you to type your name.
- **In the terminal:** `cd` into `code-lab`, then type `python3 hello.py` and press Enter. It runs, and — this is the real thing — `input()` actually pauses and waits for you to type. No more pretend inputs.

That pause is the difference between the sandbox and the real world. Your program is now talking to a real keyboard.

---

## 5. The loop you'll live in

Real programming is a loop, and you already know its shape from Chapter 5:

**Edit → Run → Read the error → Fix → Run again.**

When something breaks, the terminal prints a **traceback** — the exact same kind you learned to read in Chapters 5 and 8. The last line names the error (`ValueError`, `KeyError`, `TypeError`…), and the lines above it show which function called which, ending at the line that broke. Reading it is a skill you already have. Change a program to break it on purpose once, run it, and read the traceback — so a real one never scares you.

Build in small steps: write one function, run it, make sure it works, then write the next. If you write fifty lines and *then* run it, a bug could be anywhere. If you run after every function, you always know where you are.

---

## 6. Real files (this is the part Code Lab faked)

On a real computer, `open()` and `json` actually write files you can see in your folder. Try this as `save_test.py`:

```python
import json

data = {"name": "Alex", "level": 7}
with open("save.json", "w") as f:
    json.dump(data, f)

with open("save.json", "r") as f:
    loaded = json.load(f)

print("Loaded back:", loaded)
```

Run it, then open your `code-lab` folder — there's a new file called `save.json`. Open it in any text editor and you'll see your data as text. Run the program again tomorrow and it's still there. That's persistence, for real. Remember from Chapter 7: the path `"save.json"` is relative to the folder your terminal is standing in, so run your program from its own folder.

---

## 7. Installing extra tools (for later)

Python comes with a lot built in, but a couple of "level up" stretch goals want extra tools you install with **pip**. You won't need this to start any capstone. On a Mac the command is:

```
pip3 install matplotlib
```

On a recent Mac this sometimes fails with an "externally-managed-environment" message — that's macOS protecting its system Python, not you doing anything wrong. The easy, kid-proof fix is to install through **Thonny** instead: go to **Tools → Manage Packages**, search for the package (like `matplotlib`), and click **Install**. Thonny puts it in its own environment and the error never comes up. That's the reliable way to get any package a stretch goal needs.

---

## 8. Pick your capstone

You're set up. Now choose one project (or do more than one) and build it in a `.py` file in your `code-lab` folder, running it from the terminal as you go. Each project comes with a spec, milestones that start scaffolded and get freer, a full reference program you can check yourself against *after* trying, and stretch goals.

- **Beat Machine** (`CAPSTONE_BEAT_MACHINE.md`) — a step sequencer / drum machine you program, play, and save. Most music, most classes and data structures.
- **Data Dashboard** (`CAPSTONE_DATA_DASHBOARD.md`) — a weather or solar-system dashboard that owns a real dataset and shows it three ways. Most charts and analysis.
- **Data Analyzer** (`CAPSTONE_DATA_ANALYZER.md`) — point it at numbers *you* care about; it computes stats, charts them, and flags what stands out. Most open-ended, most "design it yourself."

Every one of them uses the whole course: variables and strings (Ch1), loops and `if` and `try`/`except` (Ch2), functions and decomposition (Ch3, Ch5), lists and dicts (Ch4), classes (Ch6), files and JSON (Ch7), and comprehensions and robust programs (Ch8). This is where all of it comes together into something that's yours.
