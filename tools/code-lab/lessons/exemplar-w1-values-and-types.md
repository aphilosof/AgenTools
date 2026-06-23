# Values and Types

*Chapter 1 · Lesson 2. Each numbered section below is one page; you move through
them one at a time. A page with a task only lets you move on once your code
passes.*

---

## 1. Warm-up

Last lesson you used `print`. Before we start, one quick question to chew on:
when you run `print("5")`, does Python show you the **number** five, or just the
character `5` printed on the screen? They feel like the same thing. By the end of
this lesson you will know exactly why they are not — and why it matters.

---

## 2. What a value is

A **value** is one of the basic things a program works with — a number, a
letter, a word. You have already made several without noticing: in
`print("Hello!")`, the text `"Hello!"` is a value, and so are `7` and `3.14`.
Almost everything a program does is some action performed on values: showing
them, comparing them, combining them, calculating with them. Values are the raw
material; the rest of programming is what you do with them.

---

## 3. Values come in types

Every value has a **type** — the category it belongs to. The type is not just a
label; it decides what you are allowed to do with the value. Four types will
carry you a long way, and it is worth keeping the everyday word separate from the
name Python uses.

- A whole number like `7` or `-20` is an **integer**; Python's type for it is
  `int`. Python's integers are *exact* and have *no size limit* — you can
  multiply huge numbers and never lose a digit, which is unusual and useful.
- A number with a decimal point like `3.14` is a **floating-point number**; its
  type is `float`. A float trades a little accuracy for a huge range, so a few
  sums come out slightly off: `0.1 + 0.2` gives `0.30000000000000004`, not `0.3`.
  That is normal for floats in every language, and better to know now than to
  trip over later.
- Text like `"Hello!"` is a **string** — a row of characters strung together;
  its type is `str`. Strings sit inside quotes, single or double, and the quotes
  only mark where the text begins and ends — they are not part of the value.
- The answers `True` and `False` are **booleans**, type `bool`. You will use them
  heavily once you start making decisions; for now, just know they are their own
  type.

---

## 4. Ask Python: `type()`

You never have to guess a value's type — `type()` will tell you. Run this:

```python
print(type(7))
print(type(3.14))
print(type("Hello!"))
```

Python replies `<class 'int'>`, `<class 'float'>`, `<class 'str'>`. "Class" here
just means *category*. Now add one more line — `print(type("7"))` — and look
carefully: the answer is `str`, not `int`. The quotation marks alone changed the
type, and the next section is about why that is a bigger deal than it looks.

---

## 5. Why `"7"` is not `7`

`7` and `"7"` look identical, but they are different values of different types.
`7` is the number seven. `"7"` is a string one character long that happens to be
a digit — the quotes make it text. That difference is real, because what an
operator *does* depends on the types beside it.

Look at `+`:

- Between numbers it **adds**: `7 + 7` is `14`.
- Between strings it **joins them end to end** — an operation called
  *concatenation*: `"7" + "7"` is `"77"`.

The symbol is identical; the types choose the meaning.

---

## 6. The `*` operator: multiply, or repeat

`+` is not the only operator that changes its job by type. `*` does too:

- Between numbers it **multiplies**: `7 * 3` is `21`.
- Between a string and a whole number it **repeats** the string: `"ab" * 3` is
  `"ababab"`, and `"-" * 10` is a line of ten dashes. One side has to be the
  string and the other a whole number.

So the same two symbols, `+` and `*`, do four different things depending only on
the types of the values on each side. That is the whole point of types: they
quietly decide what your code means.

---

## 7. Try it: predict the output

Read these three lines and **predict what each one prints** before you run
anything — predicting first is how you build a real model of what Python does.

```python
print(2 + 3)
print("2" + "3")
print("hi" * 3)
```

**Your turn:** for each line, write down what it prints and, in a few words, why
the three results are different. Then run it and check yourself.

---

## 8. When the types don't match

Mixing types does not behave one single way — and that is exactly why you cannot
ignore them. It depends on the operator:

- `7 + 3.14` **works** and gives `10.14`. When you mix an `int` and a `float`,
  Python quietly turns the integer into a float and adds them.
- `7 + "7"` does **not** work. Python cannot tell whether you mean to add (`14`)
  or to join (`"77"`), so rather than guess it stops and reports an error:

  ```
  TypeError: unsupported operand type(s) for +: 'int' and 'str'
  ```

  Read it like a sentence: `+` is not supported between an `int` and a `str`.
  A `TypeError` is Python refusing to guess — which saves you from a silent
  wrong answer.
- `"7" * 3` **works** — it is repetition (`"777"`) — even though you are mixing a
  string and a number.

So "wrong type" is three different outcomes: sometimes Python adapts, sometimes
it refuses, sometimes it does something you did not intend.

---

## 9. Where this catches you: `input()`

This stops being theoretical the moment you ask the user a question. The
`input()` function always hands back the answer as a **string**, even when the
person types digits. So if you read someone's age and try to add to it:

```python
answer = input("Your age? ")
print(answer + 1)
```

it crashes with a `TypeError`, because `answer` is a string and `1` is a number.
Switching to `answer * 1` would not save you either — that would *repeat* the
text instead of doing arithmetic, a wrong answer rather than an error, and harder
to spot. The rule is simple: before you can calculate with something the user
typed, you have to convert it into a number.

---

## 10. Converting between types

To turn a value into another type, use the type's name as a function. Each one
builds a **new** value and leaves the original untouched.

- `int("7")` gives the number `7`. `int(3.9)` gives `3` — it drops the fraction
  rather than rounding. But `int("3.5")` is an error, because `"3.5"` is not a
  whole number; use `float` for that.
- `float("3.5")` gives `3.5`.
- `str(7)` gives the text `"7"`, which is how you put a number into a message:
  `"Score: " + str(7)`.
- `bool(0)` gives `False` and `bool(5)` gives `True`, which becomes useful once
  you start making decisions.

This is why `age = int(input("Your age? "))` is the usual way to read in a
number: `input` gives you text, and `int` turns it into something you can do
maths with.

---

## 11. Fix it

This program is meant to print `10`, but it crashes with a `TypeError`:

```python
print(7 + "3")
```

**Your turn:** make it print `10`. Read the error to see why it breaks, then fix
the type mismatch yourself.

*Stuck? Open these one at a time:* (1) the error says `+` can't combine an `int`
and a `str`. (2) `"3"` is text; you want the number it represents. (3) Decide
whether to remove the quotes or convert the text — then do it.

---

## 12. Build it

**Your turn:** You are given a piece of text — `"20"`. Starting from an empty
editor, write a program that turns it into a number, adds `5` to it, and prints
the result. It should print `25`. Write it yourself, from scratch.

*Stuck? Open these one at a time:* (1) `"20"` is a string — you cannot add a
number to a string directly. (2) `int(...)` turns a string into a number. (3)
Convert first, then add `5`, then print the result.

---

## 13. Common mistakes

- **Quoting a number you mean to calculate with.** `"5" + "5"` is `"55"`, not
  `10`; the quotes make it text.
- **Forgetting `input()` returns a string.** Convert with `int()` before any
  arithmetic, or you will meet that `TypeError`.
- **Joining a string and a number directly.** `"Score: " + 5` fails; write
  `"Score: " + str(5)`.

---

## 14. Recap

- Every **value** has a **type**: `int` (whole numbers), `float` (decimals),
  `str` (text), `bool` (`True`/`False`).
- `"7"` (a string) is not `7` (an integer).
- An operator's meaning depends on the types of its operands: `+` adds numbers
  but concatenates strings; `*` multiplies numbers but repeats a string.
- Mixing types is not one behaviour: `int + float` adapts, `str + int` errors,
  `str * int` repeats.
- Convert with `int()`, `float()`, `str()`, `bool()`; check a type with `type()`.
- `input()` always returns a string — convert before you calculate.

*New in your Codex: `type()`, `int()`, `float()`, `str()`, `bool()`, and the
terms value, type, integer, float, string, boolean, concatenation, TypeError.*
