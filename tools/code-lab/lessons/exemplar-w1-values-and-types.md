# EXEMPLAR LESSON — the locked model

World 1 · Lesson 2 · **Values and Types**. Canonical target for every lesson.

- **Paged**: an ordered list of pages, shown one at a time, with a counter
  ("4 / 13"), a back button, and a `Next →` that gates on exercise pages.
- **Voice**: modelled on *Think Python* (Downey) / *How to Think Like a Computer
  Scientist* — the tradition PLAN.md names. Flowing complete sentences, precise
  definitions, concrete examples woven in, the small "why" that makes a term
  stick. Not chatty, not robotic, not choppy. Grade ~7–9.
- **Precise**: a concept and its Python type are named separately (an *integer*
  is a whole number; its Python type is `int`). Every claim is checked against
  real Python behaviour.
- **Click-to-expand terms** marked `⟦like this⟧`, defined indented, feeding the
  Codex glossary.

Page types: concept · example · exercise · error-demo · mistakes · recap.

---

### Page 1 / 13 — concept · What a value is
A **⟦value⟧** is one of the basic things a program works with — a number, a
letter, a word. You have already made several without thinking about it: when you
wrote `print("Hello!")`, the text `"Hello!"` was a value, and so are `7` and
`3.14`. Almost everything a program does is some action performed on values:
showing them, comparing them, combining them, doing arithmetic with them.

> ⟦value⟧ — **value**: a single piece of data that a program works with, such as
> `7` or `"hello"`. *More: in Python every value is an object, which is why even a
> plain number carries a type and its own behaviour.*

`[ Next → ]`

### Page 2 / 13 — concept · Values come in types
Values belong to different **⟦types⟧**, where a type is simply the category a
value falls into. Three of them will come up constantly, and it is worth being
careful about the difference between the everyday name and the name Python uses:

- A whole number, like `7` or `-20`, is an **integer**. Python's name for that
  type is **`int`**.
- A number with a fractional part, like `3.14`, is a **floating-point number**.
  Its type is called **`float`**.
- Text, like `"Hello!"`, is a **string** — a row of characters strung together.
  Its type is called **`str`**, and it is always written inside quotation marks.

So `7` *is* an integer, and `int` is the name of the type it belongs to. Keeping
the idea and the type-name straight will save you confusion later.

> ⟦type⟧ — **type**: the category a value belongs to, such as integer, float, or
> string. A value's type determines what you can do with it. *More: Python's
> type names — `int`, `float`, `str` — are themselves things you can use, for
> example to convert one type into another.*

`[ Next → ]`

### Page 3 / 13 — example · Ask Python the type
You do not have to memorise which value is which type — Python will tell you.
The `type()` function reports the type of any value. Run this and read the
replies.

```python
print(type(7))
print(type(3.14))
print(type("Hello!"))
```

Python answers `<class 'int'>`, `<class 'float'>`, and `<class 'str'>`. The word
after `class` is the type's name; "class" here just means *category*. Now add one
more line, `print(type("7"))`, and look carefully: the answer is `str`, not
`int`. The quotation marks alone changed the type, and the next page is about why
that matters more than it looks.

`[ Next → ]`

### Page 4 / 13 — concept · Why `7` and `"7"` are different
`7` and `"7"` look the same, but they are not. `7` is the number seven, an `int`.
`"7"` is a string one character long that happens to be the digit seven, and the
quotation marks are what make it text instead of a number. The difference is not
fussiness — it changes what an operator actually does, because some operators are
defined differently for different types:

- Between two numbers, `+` **adds**: `7 + 7` is `14`.
- Between two strings, `+` **joins** them end to end — an operation called
  **⟦concatenation⟧**: `"7" + "7"` is `"77"`.

The symbol is identical; the types of the values on each side decide what it
means.

> ⟦concatenation⟧ — **concatenation**: joining two strings into one, end to end.
> `"foot" + "ball"` is `"football"`. *More: Python adds no space between them — if
> you want one, include it inside the quotation marks yourself.*

`[ Next → ]`

### Page 5 / 13 — exercise (predict) · One symbol, two jobs
Before running it, work out what each line will print, then run it to check.

```python
print(3 + 4)
print("3" + "4")
```

**Your turn:** make the program print `7` on the first line and `34` on the
second, exactly as above. *(graded: output is `7` then `34`)*

`[ Next unlocks when it passes ]`

### Page 6 / 13 — error-demo · When the types don't match
What happens if the two sides of `+` have different types? Try it on purpose —
reading the failure is part of learning the language.

```python
print(7 + "7")
```

Python stops and reports:

```
TypeError: unsupported operand type(s) for +: 'int' and 'str'
```

Read it as a sentence: `+` is not supported between an `int` and a `str`, because
Python cannot tell whether you mean to add (`14`) or to concatenate (`"77"`).
Rather than guess and quietly do the wrong thing, it raises a **⟦TypeError⟧** and
stops.

> ⟦TypeError⟧ — **TypeError**: the error Python reports when an operation is given
> a value of the wrong type. *More: the message names the operator and both
> types, which usually points straight at the fix.*

`[ Next → ]`

### Page 7 / 13 — concept · Where this catches you: `input()`
This stops being abstract the moment you ask the user a question. The `input()`
function always returns the answer as a **string**, even when the person types
digits. So suppose you read someone's age and then try to add to it:

```python
answer = input("Your age? ")
print(answer + 1)
```

This raises a `TypeError`, because `answer` is a string and `1` is a number, and
`+` will not mix them. (It would not help to multiply instead: `answer * 1`
actually *works*, but it does string-repetition, not arithmetic — a wrong answer
rather than an error, which is worse.) Either way, the lesson is the same: before
you can do maths with something the user typed, you must turn it into a number.

`[ Next → ]`

### Page 8 / 13 — concept · Converting between types
To turn a value into a different type, use the type's name as a function. Each
one builds a **new** value of that type from whatever you give it:

- `int("7")` produces the number `7`. (`int(3.9)` produces `3`; it drops the
  fractional part rather than rounding.)
- `float("3.5")` produces the number `3.5`.
- `str(7)` produces the text `"7"`.

The original value is never changed — conversion hands you back a new one. This
is why `int(input(...))` is the usual way to read in a number: `input()` gives
you a string, and `int()` turns it into something you can calculate with.

`[ Next → ]`

### Page 9 / 13 — example · Watch the type change
Run this, then use the stepper to watch `age` change type at line 2.

```python
age_text = "11"
age = int(age_text)
print(age + 1)
```

It prints `12`, because by the third line `age` is a real number. Now change
`int` to `str` on the second line and run it again: `age + 1` fails, because you
are back to a string and a number. Breaking it on purpose is the quickest way to
make the rule stick.

`[ Next → ]`

### Page 10 / 13 — exercise (write) · Convert, then calculate
You are given the text `"20"`. Turn it into a number, add `5`, and print the
result.

**Your turn:** write a program that prints `25`. *(graded: output is `25`)*

`[ Next unlocks when it passes ]`

### Page 11 / 13 — mistakes · The traps for this idea
- **Quoting a number you mean to calculate with.** `"5" + "5"` is `"55"`, not
  `10`; the quotes make it text.
- **Forgetting that `input()` returns a string.** Convert with `int()` before
  doing arithmetic, or you will meet that `TypeError`.
- **Joining a string and a number.** `"Score: " + 5` fails; write
  `"Score: " + str(5)`.

`[ Next → ]`

### Page 12 / 13 — recap · What to carry forward
- A **value** is a piece of data; every value has a **type**.
- An *integer* (`int`) is a whole number, a *float* is a decimal number, a
  *string* (`str`) is text in quotes.
- `"7"` (a string) is not `7` (an integer): `+` **adds** numbers but
  **concatenates** strings.
- Convert with `int()`, `float()`, `str()`; check a type with `type()`.
- `input()` always returns a string — convert before you calculate.

> **Added to your Codex:** `type(x)`, `int(x)`, `float(x)`, `str(x)`, and the
> glossary terms *value, type, integer/int, float, string/str, concatenation,
> TypeError*.

`[ Next → ]`

### Page 13 / 13 — exercise (write) · End-of-lesson challenge
Take the text `"7"`, turn it into a number, multiply it by `6`, and print the
result.

**Your turn:** write a program that prints `42`. *(graded: output is `42`)*

`[ Finish lesson ]`
