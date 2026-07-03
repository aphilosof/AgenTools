# Capstone Project — The Data Dashboard

Build a **dashboard** over a real dataset: a program that owns a set of numbers and shows them three ways — a summary, a chart, and a lookup — without crashing on a bad question. This is the most chart-and-analysis capstone, and it's the cleanest bridge toward real data science.

Set up first with `CAPSTONE_00_SETUP.md`. Build this in `dashboard.py` and run it with `python3 dashboard.py`.

---

## What you're building

Pick a dataset you find interesting. Two good starters:

- **A weather week** — each day of the week mapped to its high temperature.
- **The solar system** — each planet mapped to its number of moons.

Your program computes the **mean, min, and max**, draws a **bar chart** out of `#` characters right in the terminal, flags the entries **above average**, and answers **lookups** ("what was Wednesday?") — printing a friendly message instead of crashing when you ask for something that isn't there.

## The data model

One dictionary, name → number (Chapter 4):

```python
WEATHER = {"Mon": 72, "Tue": 75, "Wed": 68, "Thu": 80, "Fri": 77, "Sat": 71, "Sun": 74}
# or:
MOONS = {"Mercury": 0, "Venus": 0, "Earth": 1, "Mars": 2,
         "Jupiter": 95, "Saturn": 146, "Uranus": 28, "Neptune": 16}
```

---

## Milestones (build in this order, run after each)

**1 — Summarize.** Write `mean(xs)` and `summary(data)` that prints the mean, min, and max of the values. *Uses:* `sum`/`len`/`min`/`max` (Ch4), `round`, an f-string (Ch1). `min` and `max` already scan the whole list — don't wrap them in a loop.

**2 — Chart it in text.** Write `bar_chart(data)` that prints one row per entry, where the bar is a run of `#` scaled so the biggest value fills a fixed width (say 20). The length of each bar is `round(value / biggest * 20)`. *Uses:* a dict loop, arithmetic, string repetition `"#" * n` (Ch1). This is your Chapter 4 bar chart, drawn without a graphics library.

**3 — Find what stands out.** Write `hot_days(data)` (or `busy_planets`, etc.) that computes the average and prints every entry above it. *Uses:* the average, a `for`+`if` filter collecting names, `", ".join(...)` to print them (Ch1/Ch7).

**4 — Look it up safely.** Write `lookup(data)` that asks for a key and prints its value — but catches a missing key with `try`/`except KeyError as e` and prints `No data for <key>` using `e.args[0]` for a clean message (Ch8), not a crash.

**5 — The menu.** Write `menu(data)`: a `while True` loop offering summary / bar / above-average / lookup / quit, reading a one-letter choice with `input()` (Ch2/Ch8).

**6 — Make it yours.** Swap in a dataset *you* care about — your game scores over a week, hours of sleep, a sports team's points per game. As long as it's name → number, every function still works.

---

## Reference program (check yourself against this *after* you've tried)

```python
WEATHER = {"Mon": 72, "Tue": 75, "Wed": 68, "Thu": 80, "Fri": 77, "Sat": 71, "Sun": 74}

def mean(xs):
    return round(sum(xs) / len(xs), 1)

def summary(data):
    vals = list(data.values())
    print(f"Mean {mean(vals)}   Min {min(vals)}   Max {max(vals)}")

def bar_chart(data, width=20):
    hi = max(data.values())
    for label, v in data.items():
        n = round(v / hi * width)
        print(f"{label:4} {'#' * n} {v}")

def hot_days(data):
    avg = mean(list(data.values()))
    days = [d for d, v in data.items() if v > avg]
    print(f"Above the {avg} average: {', '.join(days)}")

def lookup(data):
    day = input("Which entry? ").strip()
    try:
        print(f"{day}: {data[day]}")
    except KeyError as e:
        print(f"No data for {e.args[0]}")

def menu(data):
    while True:
        choice = input("\n[s]ummary [b]ar [h]ot [l]ookup [q]uit > ").strip().lower()
        if choice == "q":
            print("Bye!"); break
        elif choice == "s":
            summary(data)
        elif choice == "b":
            bar_chart(data)
        elif choice == "h":
            hot_days(data)
        elif choice == "l":
            lookup(data)
        else:
            print("?")

if __name__ == "__main__":
    menu(WEATHER)
```

*(Verified under `python3`: summary → `Mean 73.9  Min 68  Max 80`; bar chart scales correctly; above-average → `Tue, Thu, Fri, Sun`; lookup `Wed` → `68`, lookup a missing key → `No data for <key>`.)*

---

## Stretch goals (each a real "level up")

- **A relationship view (the interesting one).** Add a second measurement per entry — e.g., each song's BPM *and* its plays — and ask "do they move together?" Print them side by side sorted by one, and find the plays of the fastest song. This is the dot-plot idea from Chapter 4, in the terminal: it turns a table into a *question*.
- **A `Station` class (Ch6).** Wrap the data and all these functions into a class that owns the dataset and has `.summary()`, `.chart()`, `.lookup(key)` methods — the "a class that owns its data" pattern made into a real tool.
- **Save and load (Ch7).** Add `save`/`load` with JSON so you can edit the dataset and keep it between runs.
- **Read a real file.** Put your data in a plain `data.txt` (one `name: value` per line) and parse it with the Chapter 7 text-splitting skills, so you can add entries without touching the code.
- **Real graphs (needs an install).** Install matplotlib — on a Mac the reliable way is through Thonny: **Tools → Manage Packages → search `matplotlib` → Install** (plain `pip3 install matplotlib` can hit the "externally-managed-environment" error). Then `import matplotlib.pyplot as plt` and draw a real bar and line chart in a window with `plt.bar(...)`, `plt.plot(...)`, `plt.show()`. Get the text version working first — the matplotlib version is the same data, just prettier.

## Done when

Your program summarizes a dataset, charts it in the terminal, flags what's above average, answers lookups without crashing on a bad key, and works on data you chose yourself. Add the relationship view or matplotlib and you've built something that genuinely does data analysis.
