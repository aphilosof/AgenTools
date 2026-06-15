<!--
LESSON PLAN — the single source of truth for one lesson.
Contains: metadata, researched scope + sources, the full page-by-page content
(text, examples, challenges with expected output + hints + model solution), and
build instructions for rendering it on the site. A developer/engine can build
the lesson from this file alone. Author per AUTHORING.md; this is the template
for all lesson plans.
-->

# Lesson Plan — World 1 · Lesson 1: Output and the `print` Command

## 1. Metadata
- **id:** `w1l1`
- **world / lesson:** 1 / 1
- **title:** Output and the `print` Command
- **strand:** words
- **concepts (tags):** `print`, `output`, `strings`, `comments`
- **prerequisites:** none (first Python-writing lesson; follows World 0)
- **time budget:** 15–18 min
- **rung focus:** predict (1), fix (4), write (6)
- **error classes introduced:** `NameError`, `SyntaxError`
- **misconceptions addressed:** `english-not-code` (Python reads any word as a
  command/name), `quotes-in-output` (thinks the quotation marks are printed)

## 2. Scope & sources (research record)

**Sources** (per AUTHORING.md):
- Ground truth: Python docs — [`print()`](https://docs.python.org/3/library/functions.html#print);
  behaviours verified by running CPython (multi-arg spacing, `sep`/`end`,
  `print()` blank line, unquoted-name → `NameError`).
- Canonical treatment + voice: *Think Python* §1.3 (the first program / print);
  HTTLACS ch.2 (output).
- Scope cross-check: *Python for Everybody* ch.1–2; common AP-CSP/intro scope.

**Complete concept inventory** (everything this topic includes at this level):
1. **Output** — a program shows nothing unless told to; `print` is how.
2. **`print()` is a function**; the thing in the brackets is its **argument**.
3. **Strings need quotes** — single `'…'` or double `"…"`; the quotes mark the
   text's boundaries and are **not** shown in the output.
4. **Mixing quote styles** to include a quote character: `"It's fine"`,
   `'She said "hi"'`.
5. **Comments** — `#` to end of line; Python ignores them; notes for humans.
6. **Multiple arguments** — `print("Hello", "world")` → `Hello world`
   (Python inserts a space between them). The `sep=` parameter changes the
   separator.
7. **Printing numbers and expression results** — `print(7)`, `print(2 + 3)` → `5`
   (Python evaluates the expression first). Ties forward to *values*.
8. **Each `print` is a new line**; `print()` with no argument → a blank line.
   The `end=` parameter changes what's added after (default newline).
9. **Forgetting quotes → `NameError`** — `print(Hello)` makes Python look for a
   *name* called Hello (errors-as-curriculum).

**Deferred (named so it isn't lost):** f-strings and escape sequences like `\n`
→ World 1 strings lesson; printing to files → much later.

## 3. Lesson pages (content, in order)

> Format note: each numbered section is one page. `[type]` tags the page.
> Exercises give the student a **prompt only**; the `expected`, `hints`, and
> `solution` below are build data (checker + compare step), **not** shown in the
> prompt. Voice = Think Python / HTTLACS, grade 7–9.

### Page 1 — Warm-up  `[concept]`
In World 0 you ran real code and changed a number to change a sound — you were
already telling a computer exactly what to do. Now you start writing that code
yourself, and the first thing any program needs to do is *show* you something.
This lesson is about output: getting words and numbers onto the screen.

### Page 2 — The `print` command  `[concept]`
A program does nothing you can see unless you tell it to. **`print`** is the
command for that: it takes whatever you put between its brackets and displays it
on the screen. The thing inside the brackets is called the **argument** — it is
what `print` works on. One `print` shows one thing.

### Page 3 — Example: your first output  `[example]`
```python
print("Hello!")
```
**Notice:** the words appear on the screen, but the quotation marks do not — they
are not part of the message. Change the words inside the quotes and run it again.

### Page 4 — Text goes in quotes  `[concept]`
Text — letters, words, sentences — must sit inside quotation marks so Python
knows it is text to display, not a command to run. You can use single quotes
`'…'` or double quotes `"…"`; they work the same way. The one rule that matters:
the quotes mark where your text begins and ends, and they are never shown. If
your text *contains* a quote, use the other kind around it — `"It's fine"` or
`'She said "hi"'`.

### Page 5 — Comments: notes for humans  `[concept]`
Anything after a `#` on a line is a **comment**: Python ignores it completely.
Comments are notes to yourself or whoever reads your code — what a line is for,
or a reminder. They never run and never print.
```python
# this line is a note; Python skips it
print("This line runs.")   # you can also comment at the end of a line
```

### Page 6 — Printing more than one thing  `[example]`
You can give `print` several arguments, separated by commas, and it shows them
on one line with a space between each.
```python
print("Hello", "world")
print("Score:", 100)
```
**Notice:** the first line prints `Hello world` (Python adds the space), and the
second prints `Score: 100` — text and a number together on one line.

### Page 7 — Printing numbers and expressions  `[example]`
You do not put quotes around numbers, and you can print the result of a
calculation — Python works it out first, then prints the answer.
```python
print(7)
print(2 + 3)
```
**Notice:** the second line prints `5`, not `2 + 3`. `print` shows the *value* of
what is inside the brackets.

### Page 8 — Every `print` is a new line  `[concept]`
Each `print` puts its output on its own line, so several `print`s stack up top to
bottom. A `print()` with nothing in the brackets prints an empty line — handy for
spacing. (There is also a way to *not* start a new line, using `end=`, but you
will rarely need it yet.)

### Page 9 — Predict the output  `[exercise · predict]`
Read these three lines and **predict what each one prints** before running
anything. Predicting first is how you build a real picture of what Python does.
```python
print("Code")
print("Code", "Lab")
print(3 * 4)
```
**Your turn:** for each line, write down exactly what it prints. Then run it to
check yourself.
- **check:** `{ type: "output", expected: "Code\nCode Lab\n12" }`
- **hints (nudges, on demand):**
  1. One argument prints just that text.
  2. Two arguments print on one line with a space between them.
  3. `3 * 4` is a calculation — `print` shows its result, not the symbols.
- **model solution / answer:** `Code`, then `Code Lab`, then `12`.

### Page 10 — When you forget the quotes  `[error-demo]`
Here is the most common first mistake, shown on purpose so you learn to read it:
```python
print(Hello)
```
Python stops with:
```
NameError: name 'Hello' is not defined
```
Without quotes, Python thinks `Hello` is the **name** of something you made
earlier — a variable — and goes looking for it. It finds nothing, so it reports a
`NameError`. The fix is to put the text in quotes so Python treats it as words.

### Page 11 — Fix it  `[exercise · fix]`
This program is meant to print the word `Python`, but it crashes:
```python
print(Python)
```
**Your turn:** make it print `Python`. Read the error first to see *why* it
breaks, then fix it.
- **starter (shown in editor):** `print(Python)`
- **check:** `{ type: "output", expected: "Python" }`
- **hints (nudges, on demand):**
  1. Read the error — Python is looking for a *name* called Python.
  2. You want the *word*, not a name. How do you tell Python something is text?
  3. Put the word in quotes.
- **model solution:** `print("Python")`

### Page 12 — Build it  `[exercise · write]`
**Your turn:** Starting from an empty editor, write a program that prints these
two lines, exactly:
```
Welcome to Code Lab
Lessons: 12
```
Use a separate `print` for each line, and on the second line print the label and
the number together.
- **check:** `{ type: "output", expected: "Welcome to Code Lab\nLessons: 12" }`
- **hints (nudges, on demand):**
  1. Two lines means two `print` commands.
  2. The first line is one piece of text in quotes.
  3. On the second line, give `print` two arguments: the text `"Lessons:"` and
     the number `12`, separated by a comma.
- **model solution:**
  ```python
  print("Welcome to Code Lab")
  print("Lessons:", 12)
  ```

### Page 13 — Common mistakes  `[concept]`
- **Forgetting the quotes.** `print(Hello)` is a `NameError`; `print("Hello")` is
  the text.
- **Thinking the quotes show up.** They do not — they only mark the text.
- **Expecting numbers to need quotes.** They do not: `print(7)` is fine, and
  `print("7")` prints the same thing but is text, not a number (more on that next
  lesson).

### Page 14 — Recap  `[recap]`
- `print(...)` shows its **argument** on the screen; one `print` makes one line.
- **Text** goes in quotes (single or double); the quotes are not shown.
- **`#`** starts a **comment** — Python ignores it.
- Several arguments separated by commas print on one line, space-separated.
- Numbers need no quotes, and `print` shows the **result** of a calculation.
- Forgetting quotes around text → `NameError`.

**Codex entry added:** `print("text")`, `print(a, b)`, `# comment`; glossary
terms *output, print, argument, string, comment, NameError*.

## 4. Build instructions (how the site renders & checks this lesson)

**Lesson container.** Render one page at a time from the ordered list above. Show
a page counter ("3 / 14"), a **Back** button, and a **Next** button. Persist the
current page and the learner's editor contents per page.

**Per page type:**
- `concept` / `recap`: render the prose (markdown). **Next** always enabled.
  Bold terms that appear in the glossary are clickable → open the term's
  definition (from the Codex glossary).
- `example`: render the code in an editable, runnable editor with a **Run
  example** button; show output/sound/canvas below. Not graded; **Next** always
  enabled. Pre-fill the editor with the code shown.
- `exercise`: render the **prompt only** (never the `expected`/`hints`/
  `solution`). Provide an editor — empty for a `write` rung, pre-filled with the
  `starter` for a `fix`/`modify` rung. Buttons: **Run** (runs, shows output),
  **Check** (runs, then grades against `check`), **Hint** (reveals the next nudge
  from `hints`, one at a time). **Next unlocks only when Check passes.** On pass,
  reveal the `model solution` beneath (the compare step) and mark the page done.
- `error-demo`: render the code with a **Run** button; the real traceback shows,
  with the friendly annotation beneath it per the World-based fading schedule.

**Checking.** Use the existing tolerant checker (`check.type`): `output` compares
whitespace-normalized stdout to `expected`; `calls` matches recorded
music/turtle/plot events. Diagnostics on fail, never a bare fail.

**Progress.** The lesson is complete when every `exercise` page has passed. Mark
the lesson solved in storage; award the Codex entry and glossary terms; surface
on the knowledge map.

**Harness.** Each `exercise`'s `model solution` must execute under the runner and
pass its own `check`; each example must run clean; reading level ≤ ceiling; all
checked by `npm test` before the lesson ships.
