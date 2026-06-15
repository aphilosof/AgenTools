# EXEMPLAR LESSON — the locked model (structure, level, voice)

World 1 · Lesson 2 · **Values and Types**. This is the canonical target for
every lesson:

- **Paged.** A lesson is an ordered list of **pages**, shown one at a time, with
  a counter ("4 / 13"), a back button, and a `Next →` that gates on exercise
  pages (Next unlocks once the exercise passes). A guided path, not a scroll.
- **Grade 8–9 writing.** Precise, full sentences, real vocabulary. (Reading
  ceiling rises to ~9; still a ceiling, never a push toward simpler.)
- **Click-to-expand terms.** Words marked `⟦like this⟧` open a rigorous
  definition with a "More:" path and land in the Codex glossary (shown indented).
- **Specific.** Every claim says *why*; every "this breaks" names a *concrete
  case*.
- **Voice: warm mentor.** Talks *to* him, not down to him — direct, a little
  personality, anticipates the confusion and gets ahead of it.

Page types: `concept` · `example` · `exercise` · `error-demo` · `mistakes` ·
`recap`. ~10–14 pages per lesson.

---

### Page 1 / 13 — concept · Why you're about to care about this
Almost every confusing bug you'll hit in your first month comes down to one
thing: you thought a value was one kind of thing, and Python thought it was
another. A calculation crashes for no obvious reason. Two numbers stick together
instead of adding up. It feels random — but it isn't, and after this lesson
you'll see it coming a mile off. The secret is that Python sorts every piece of
data into a **⟦type⟧**, and the type quietly decides what you're allowed to do
with it. Let's make that sharp.

> ⟦type⟧ — **type**: the category a value belongs to (integer, decimal, text,
> and so on). A value's type fixes which operations are legal on it and how each
> one behaves. *More: in Python, types are themselves objects you can inspect
> with `type()`.*

`[ Next → ]`

### Page 2 / 13 — concept · Start with the word "value"
Before "type" means anything, you need "value." A **⟦value⟧** is just a single
piece of data — one thing your program is holding onto. The number `7` is a
value. So is `3.14`, and so is the text `"hello"`. You've already made plenty:
when you wrote `print("Hello, world!")`, that text was a value, and `print`
simply showed it to you. Pretty much everything you'll ever write is some
operation done *to* values — comparing them, joining them, storing them, doing
maths on them. Get comfortable with the word, because the rest of the lesson is
about the rules values have to follow.

> ⟦value⟧ — **value**: a single piece of data that lives in the computer's
> memory while your program runs. *More: in Python every value is an object,
> which is why even a plain `7` carries a type and built-in behaviour.*

`[ Next → ]`

### Page 3 / 13 — concept · Every value carries a type
Here's the key idea: every value has a type, and you can't ignore it, because
the type controls what the value can do. Three of them will show up constantly:

- **⟦int⟧** — a whole number, like `7` or `-20`.
- **⟦float⟧** — a number with a decimal point, like `3.14`.
- **⟦str⟧** — text, like `"hello"`, always wrapped in quotation marks.

Hold onto that list. On the next couple of pages you'll see the same symbol do
two completely different jobs depending only on the types beside it — which is
exactly why you can't predict what your code does until you know the types it's
working with.

> ⟦int⟧ — **int** (integer): a whole number — positive, negative, or zero. *More:
> Python ints have no size limit and stay exact however large they get.*
>
> ⟦float⟧ — **float**: a number that can hold a fractional part, like `3.14`.
> *More: floats trade exactness for range, so `0.1 + 0.2` isn't quite `0.3`.*
>
> ⟦str⟧ — **str** (string): an ordered run of characters — text — between quotes.
> *More: the quotes aren't part of the value; they just mark where it starts and
> ends.*

`[ Next → ]`

### Page 4 / 13 — example · Just ask Python
You don't have to memorise types — Python will tell you. `type()` reports the
type of any value. Run this and read what comes back.

```python
print(type(7))
print(type(3.14))
print(type("hello"))
```

You'll get `<class 'int'>`, `<class 'float'>`, `<class 'str'>` — the word after
`class` is the type. Now add one more line, `print(type("7"))`, and look
closely: the answer is `str`, not `int`. Those quotation marks changed
everything, and the next page is about why that's a bigger deal than it looks.

`[ Next → ]`

### Page 5 / 13 — concept · `7` and `"7"` are not the same value
This is the one I really want you to get, because it catches almost everyone.
`7` and `"7"` look like twins, but they're different values with different types.
`7` is an **int** — an actual number. `"7"` is a **str** — the character "7"
treated as text, just because of the quotes. Why does that matter so much? Because
the `+` symbol does *two different jobs* depending on the types it sits between:

- Between two **ints**, `+` **adds**: `7 + 7` gives `14`.
- Between two **strs**, `+` **⟦concatenates⟧** — glues them together: `"7" + "7"`
  gives `"77"`.

Same symbol, totally different result, and Python isn't guessing what you meant —
it's reading the types and doing exactly what they say.

> ⟦concatenate⟧ — **concatenation**: joining two strings end to end into one.
> `"foot" + "ball"` is `"football"`. *More: Python adds no space for you — if you
> want one, put it inside the quotes yourself.*

`[ Next → ]`

### Page 6 / 13 — exercise (predict) · Catch the two jobs
Before you run it, work out what each line prints — then run it and see if you
were right.

```python
print(3 + 4)
print("3" + "4")
```

**Your turn:** make the program print `7` on the first line and `34` on the
second, exactly like above. *(graded: output is `7` then `34`)*

`[ Next unlocks when it passes ]`

### Page 7 / 13 — error-demo · What happens when you mix them
So what if you put a number and a string together with `+`? Let's find out on
purpose — and reading the crash is half the lesson.

```python
print(7 + "7")
```

Python stops cold and shows you this:

```
TypeError: unsupported operand type(s) for +: 'int' and 'str'
```

Read it like a sentence: `+` isn't supported between an `int` and a `str`,
because Python genuinely can't tell whether you want `14` (add) or `"77"`
(glue). Instead of guessing and quietly doing the wrong thing, it throws a
**⟦TypeError⟧** and stops. Annoying in the moment — but it just saved you from a
bug you'd never have noticed.

> ⟦TypeError⟧ — **TypeError**: the error Python raises when an operation meets a
> value of the wrong type. *More: the message names the operator and both types,
> which usually points you straight at the fix — convert one of them.*

`[ Next → ]`

### Page 8 / 13 — concept · Where this actually bites you
That error probably feels theoretical right now, so let me show you the real
place it'll get you. The moment your program starts using values it *didn't*
write itself — above all, answers from `input()` — types matter for real.
`input()` always hands you a **str**, even when the person types digits. So
picture this: you ask "How old are you?", store the answer, then write
`age * 365` to get their age in days. You're expecting a number times 365 — but
`age` is text, so Python raises a `TypeError` and the program dies before it can
answer. That exact mix-up is behind a huge share of first-week crashes, and
you're about to learn the one-line fix.

`[ Next → ]`

### Page 9 / 13 — concept · Converting from one type to another
When a value is the wrong type for the job, you **convert** it. Each converter
is named after the type it produces:

- `int(x)` — make a whole number: `int("7")` is `7`.
- `float(x)` — make a decimal number: `float("3.5")` is `3.5`.
- `str(x)` — make text: `str(7)` is `"7"`.

So the age-in-days crash from the last page disappears the moment you convert
first: `age = int(input(...))`, and now `age * 365` works because `age` is a
real int. Conversion runs the other way too: to build a message like
`"Score: " + str(5)`, you turn the number into text first, because you already
know you can't glue a str and an int together.

`[ Next → ]`

### Page 10 / 13 — example · Watch the type flip
Run this, then step through it and watch `age` change type on line 2.

```python
age_text = "11"
age = int(age_text)
print(age + 1)
```

It prints `12`, because by line 3 `age` is a real number. Now change `int` to
`str` on line 2 and run it again — `age + 1` blows up, because you're back to
gluing text onto a number. Breaking it on purpose is the fastest way to make the
rule stick.

`[ Next → ]`

### Page 11 / 13 — exercise (write) · Convert, then compute
You're handed the text `"20"`. Turn it into a number, add `5`, and print the
result.

**Your turn:** write a program that prints `25`. *(graded: output is `25`)*

`[ Next unlocks when it passes ]`

### Page 12 / 13 — mistakes · The traps, named
- **Quoting a number you mean to do maths with.** `"5" + "5"` is `"55"`, not
  `10`. Drop the quotes when you want the number.
- **Forgetting `input()` gives you a str.** Convert with `int()` before any
  arithmetic, or you'll meet that `TypeError` again.
- **Gluing a str and an int.** `"Score: " + 5` fails; write `"Score: " + str(5)`.

`[ Next → ]`

### Page 13 / 13 — recap · What to walk away with
- A **value** is a piece of data; every value has a **type**.
- **int** = whole numbers, **float** = decimals, **str** = text in quotes.
- `"7"` (str) isn't `7` (int): `+` **adds** ints but **glues** strs.
- Convert with `int()`, `float()`, `str()`; check with `type()`.
- `input()` always gives you a str — convert before doing maths.

> **Added to your Codex:** `type(x)`, `int(x)`, `float(x)`, `str(x)`, and the
> glossary terms *value, type, int, float, str, concatenation, TypeError*.

**End-of-lesson challenge:** take the text `"7"`, turn it into a number, multiply
it by `6`, and print the result (`42`). *(graded: output is `42`)*
