# Capstone Project — The Data Analyzer

Build a tool that analyzes numbers **you** care about — your daily screen time, steps, hours of sleep, minutes practicing an instrument, a game's high scores. You type them in, and the program computes the stats, charts them, and flags what stands out. This is the most open-ended capstone: it's mostly *your* design, using the planning workflow from Chapter 8 for real.

Set up first with `CAPSTONE_00_SETUP.md`. Build this in `analyzer.py` and run it with `python3 analyzer.py`.

---

## Plan before you type (this is the point)

Chapter 8 taught: read the spec, pull out the **verbs**, make each a function. The spec here is "read some numbers, analyze them, show the result." Three verbs, three functions:

- `read_numbers()` — collects the data from the user
- `analyze(data)` — computes the stats (returns them; doesn't print)
- `display(data)` — shows the summary, the chart, and the outliers

That's your whole call graph: `main` calls `read_numbers`, hands the result to `display`, which uses `analyze`. Write the three stubs *first*, then fill them one at a time, running after each. Don't type the whole thing and hope.

---

## Milestones (build in this order, run after each)

**1 — Read the data robustly.** Write `read_numbers()`: a `while True` loop that reads a line, stops on `"done"`, converts each entry with `float(...)`, and catches a non-number with `try`/`except ValueError` so a typo doesn't crash the whole session — it just says "try again." If nothing was entered, `raise ValueError("No data entered.")` (Ch8). *Uses:* the input loop (Ch2/Ch8), `try`/`except`, `raise`, a list accumulator (Ch4).

**2 — Analyze.** Write `analyze(data)` that **returns** a dict of `count`, `mean`, `min`, `max` (returns, doesn't print — that's `display`'s job). *Uses:* `sum`/`len`/`min`/`max` (Ch4), `round`, a returned dict.

**3 — Chart it.** Write `bar_chart(data)` that prints one `#`-bar per value, scaled to the biggest (same trick as the Dashboard). *Uses:* `enumerate` to number the rows (Ch4), string repetition, arithmetic.

**4 — Flag the outliers.** Write `outliers(data)` that returns the values sitting far from the average — more than 40% of the data's spread away from the mean. *Uses:* the mean, `max - min` for the spread, a `for`+`if` filter (or a comprehension, Ch8).

**5 — Put it together.** Write `display(data)` (prints the summary line, the chart, and any outliers) and `main()` (reads, catches the empty-data error, displays). *Uses:* function composition (Ch3/Ch5), `try`/`except` at the top level.

**6 — Make it yours.** Run it on real numbers from your own life for a week and see what the chart and the outliers tell you. That's data analysis — on data that's actually yours.

---

## Reference program (check yourself against this *after* you've tried)

```python
def read_numbers():
    print("Enter numbers, one per line. Type 'done' to finish.")
    data = []
    while True:
        line = input("> ").strip()
        if line == "done":
            break
        try:
            data.append(float(line))
        except ValueError:
            print("Not a number — try again.")
    if not data:
        raise ValueError("No data entered.")
    return data

def analyze(data):
    return {"count": len(data),
            "mean": round(sum(data) / len(data), 1),
            "min": min(data),
            "max": max(data)}

def outliers(data):
    m = sum(data) / len(data)
    spread = max(data) - min(data)
    return [x for x in data if spread and abs(x - m) > spread * 0.4]

def bar_chart(data, width=20):
    hi = max(data)
    for i, v in enumerate(data):
        n = round(v / hi * width)
        print(f"{i:3} {'#' * n} {v}")

def display(data):
    s = analyze(data)
    print(f"\nCount {s['count']}  Mean {s['mean']}  Min {s['min']}  Max {s['max']}")
    bar_chart(data)
    outs = outliers(data)
    if outs:
        print("Outliers:", outs)

def main():
    try:
        data = read_numbers()
    except ValueError as e:
        print(e.args[0])
        return
    display(data)

if __name__ == "__main__":
    main()
```

*(Verified under `python3`: entering `30, 32, 31, 95, nope, 29, 33, done` rejects `nope`, reports `Count 6  Mean 41.7  Min 29.0  Max 95.0`, draws the bars, and flags `Outliers: [95.0]`.)*

---

## Stretch goals (each a real "level up")

- **Test it (Ch8).** Write `test_analyze()` with a few `assert` checks on a known list (`analyze([2, 4, 6])["mean"] == 4.0`, with the message form). Run it before trusting the tool.
- **Save your data (Ch7).** Add `save`/`load` with JSON so you can add to the same dataset day after day instead of re-typing it.
- **Read a CSV file.** Keep your numbers in `data.csv`, read the file line by line (Ch7), split on commas, and analyze — so the tool works on data you exported from somewhere else.
- **More statistics.** Add the *median* (sort the list, take the middle) and a count of values above a threshold you ask the user for.
- **Real graphs (needs an install).** Install matplotlib through Thonny (**Tools → Manage Packages → `matplotlib` → Install** — more reliable on a Mac than `pip3 install matplotlib`, which can hit the "externally-managed-environment" error), then draw a real bar or line chart with `plt.bar(...)` / `plt.plot(...)` / `plt.show()`. Same numbers, real picture.

## Done when

Your program reads numbers without crashing on a typo, refuses to run on empty input with a clear message, reports the stats, charts them, flags the outliers, and does it on data you chose. You planned it into three functions before writing logic — which is exactly how real programs get built.
