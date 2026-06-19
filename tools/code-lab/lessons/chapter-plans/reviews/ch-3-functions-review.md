# Review — Chapter 3 (Functions)
**Verdict:** Needs fixes
**Reviewed against:** Python 3.14.5, CURRICULUM-STRUCTURE.md, AUTHORING.md, ch-2-decisions-loops.md, ch-4-collections.md

---

## Findings

### BLOCKER

**1. [BLOCKER] L3.7 — Mutable default in worked example contradicts L3.5's teaching**

`def bassline(root, pattern=[1,1,5,5]):` is a mutable-default list argument — exactly the trap L3.5 explicitly defers with "no mutable-default trap yet, just a mention." Presented as a live worked example in L3.7, students will call `bassline` repeatedly in the groove-building exercises and likely never trigger the bug (the body reads but doesn't mutate `pattern`). But the example normalises the `list=[]` default pattern, and the next time a student uses it and mutates the list they'll have no framework for why it breaks. Either change the default to `None` with an explicit guard, or change `pattern` to a tuple (immutable, works identically here), or move the mutable-default trap into this lesson so the example is actually educational.

Verification:
```python
def bassline_bad(root, pattern=[1,1,5,5]):
    pattern.append(8)   # mutates shared default
    return pattern

print(bassline_bad(60))  # [1, 1, 5, 5, 8]
print(bassline_bad(60))  # [1, 1, 5, 5, 8, 8]  ← silent bug
```

Fix: change `pattern=[1,1,5,5]` to `pattern=(1,1,5,5)` in the worked example. Tuple unpacks the same way; teaches immutability as a bonus; and no conceptual exception is needed.

---

### MAJOR

**2. [MAJOR] L3.0 — Flow-of-execution misconception is itself incorrect**

The plan states as fact: "Python reads the whole file before running `__main__`." This is wrong. Python compiles the module to bytecode, then executes top-to-bottom. A `def` statement runs at execution time and binds the function object to the name; it does NOT pre-register all functions before any line runs. Proof:

```python
# script.py
greet()          # NameError: name 'greet' is not defined

def greet():
    print("hi")
```

The common pattern that seems to confirm the myth (def `main` at top, call at bottom) works only because both `def` statements execute before either call does. The misconception listed ("I have to read the def before I call it") is real and worth addressing, but the rebuttal given is false and will produce confused students the first time they call a function before its `def` at module level.

Fix: Replace "Python reads the whole file before running `__main__`" with the correct model: "Python runs your file line by line. When it reaches a `def` line, it learns the recipe but doesn't cook it yet. By the time your call runs, the def above it has already been processed."

**3. [MAJOR] L3.3 — `is_prime` silently gives wrong answers for inputs ≤ 1**

The plan's implementation (`for i in range(2, n): if n % i == 0: return False; return True`) returns `True` for `n = 1`, `n = 0`, and any negative integer. None of these are prime. The exercises do not call out these edge cases, and the blank exercise invites students to test "a few numbers" without specifying which.

```python
def is_prime(n):
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

print(is_prime(1))   # True  ← wrong
print(is_prime(0))   # True  ← wrong
print(is_prime(-5))  # True  ← wrong
```

This is doubly problematic because L2.5's hard exercise already had students write a prime checker for 1–20, so they have a prior (also-probably-broken) version to compare against. The checker in the course engine will catch this if test cases include 1, but the plan itself should model the correct guard.

Fix: Add `if n < 2: return False` as the first line of the `is_prime` function in all worked-example and exercise references. This is a natural first-lesson teaching moment about guard clauses — reinforces the early-return pattern the lesson is already building.

**4. [MAJOR] Difficulty ramp — L3.4 dips below L3.3, violating the monotonic rule**

The progression table shows:

| Lesson | Max rung |
|--------|----------|
| 3.3 | 6 (blank — two cooperating functions) |
| 3.4 | 5 (complete/blank) |
| 3.5 | 6 (blank) |

CURRICULUM-STRUCTURE.md §E requires "each lesson is harder than the previous lesson in the chapter." L3.4's max rung of 5 after L3.3's rung 6 breaks this rule. Scope is genuinely harder conceptually than return values, so there is no pedagogical reason to reduce the rung ceiling.

Fix: Upgrade L3.4's hard exercise to rung 6. The restructure-a-function-to-take-discount-as-a-parameter exercise described in the plan is already effectively rung 6 in cognitive demand (requires understanding why the bug exists AND rewriting the signature); just remove the scaffolding label of "complete/blank" and label it rung 6 with no starter.

**5. [MAJOR] L3.2 — Stub exercise uses default arg before default args are taught**

The exercise list for L3.2 (Parameters) includes:

> `def cm_to_inches(cm, cm_to_inches=2.54):` — wait, default args come later; stub is just a `# TODO`

The plan's own parenthetical acknowledges this but still lists the stub header with the default arg. A student who reads the stub before the `# TODO` note — or an author who implements the lesson directly from this plan — will introduce default args syntax two lessons early. The function name also collides with its own parameter name (`cm_to_inches` the function has `cm_to_inches=2.54` as a parameter), which is syntactically valid but a style catastrophe in teaching material.

Fix: Replace the stub with `def cm_to_inches(cm):` and `FACTOR = 2.54` as a module-level constant. Consistent with the scope lesson in L3.4 (reading a module constant from inside a function). Remove the confusing parameter-name-collision entirely.

---

### MINOR

**6. [MINOR] L3.5 — Misconception wording for default evaluation is imprecise**

"The default is recalculated on each call. (False for immutable types like `int`/`str`.)" The qualifier "for immutable types" is misleading: the statement is false for ALL types. For mutable types the default isn't recalculated either — it is the same object on every call, which is precisely why mutating it persists. The imprecision here could entrench a half-understanding just before the mutable-default trap becomes relevant.

Fix: "The default value is created once, when the `def` line runs, and reused on every call."

**7. [MINOR] L3.5 — SyntaxError message is Python-version-dependent**

The error classes list says `SyntaxError (non-default argument follows default argument)`. On Python 3.12+ (including Python 3.14 tested here), the actual message is `parameter without a default follows parameter with a default`. Students on modern Python will see a different string than what the lesson quotes.

```python
import ast
ast.parse("def f(a=1, b): pass")
# SyntaxError: parameter without a default follows parameter with a default
```

Fix: Refer to the concept rather than the exact string: `SyntaxError: a required parameter cannot follow a parameter that has a default value`. Optionally note both message variants in the Codex entry.

**8. [MINOR] L3.1 — "NameError (calling before defining in interactive mode — note: rare in script context)" is incorrect**

NameError from calling before def is not rare in script context; it happens any time a call appears above its `def` at module level. The interactive-mode framing is too narrow and will produce a wrong mental model ("it only happens in the REPL"). The note is also irrelevant because the course teaches scripts, not the REPL.

```python
# In a script:
greet()           # NameError: name 'greet' is not defined
def greet(): print("hi")
```

Fix: Replace the parenthetical with: "calling a function whose `def` has not yet been reached in execution order."

**9. [MINOR] L3.3 — NameError description under error classes is unclear**

"NameError (variable used after function returned it but before assignment)" is ambiguous. It seems to describe the scope-confusion scenario where a student thinks a local variable inside a function is accessible after the call. That scenario is better labeled and taught in L3.4 (Scope). Keeping it in L3.3's error-classes list without a clearer description may confuse authors implementing the lesson.

Fix: Either remove it from L3.3 (it is fully covered in L3.4) or rewrite it as: "NameError: accessing a name that only existed inside a function after the function has returned (a scope preview; covered fully in L3.4)."

**10. [MINOR] Ch. Challenge Q7 — tip-splitter uses both `input` loop and four helper functions (scope creep)**

Challenge exercise 7 asks students to read items from `input` in a loop until blank, compute four values, use four named functions, and format all output. This compounds: `while True` sentinel loop (Ch.2), `float()` conversion, list accumulation (not yet taught — lists arrive in Ch.4), and four functions. A student at Ch.3 who doesn't yet know lists has no natural container for the items read from input. The tip-splitter in L3.7 uses a pre-given items list; the Challenge version adds the input loop and accumulation.

Fix: Either provide `items = [10.00, 15.50, 8.75]` as a given constant and focus the exercise on the four functions, or move the input-loop version to Ch.4 where `list.append` is in scope.

---

## What's strong

- The sequencing within the function concept cluster (no-params → params → return → scope → defaults) is exactly the right teaching order and matches both Think Python Ch.3/Ch.6 and HTTLACS Ch.6.
- The scaffolding ladder within the chapter is well-designed: each lesson introduces blank-editor at the hard exercise level while medium exercises still provide stubs, giving a genuine ramp rather than a cliff.
- The decomposition through-line (decomposition as a design tool, not just "how to write a function") is woven explicitly through L3.3's two-function blank exercise, L3.6's scene, L3.7's tip-splitter, and the Challenge. This is the chapter's strongest pedagogical choice.
- The misconception list is comprehensive and accurate for the concepts covered; most misconceptions have concrete exercises designed to provoke and address them.

---

## Coverage check

**Well covered:**
- `def`, parameters/arguments distinction, `return`, fruitful vs. void, `None` from void, local scope, `UnboundLocalError`, default arguments, docstrings, decomposition. All spine concepts for "Functions" are present.

**Thin:**
- Docstrings: introduced in L3.5 but `.__doc__` is the only access method shown; `help()` is a common next step and a natural breadcrumb toward the REPL/Codex but is not mentioned.
- The early-return pattern is described in L3.3's concept list but not explicitly named as a pattern — it appears only in the `is_prime` example. A one-sentence label ("early return: exit as soon as you know the answer") would help students recognise it when they see it in Ch.4+.

**Not missing but deliberately deferred (correctly):**
- `global` keyword (Ch.6 Modules — correct deferral, noted in plan).
- Mutable default trap as a drilled concept (should be Ch.4 Collections given the list examples there — the L3.7 collision must be fixed per Finding #1).
- Keyword argument full syntax (Ch.5 Strings deep — correct, shown once in L3.5 for breadth only).
- `*args`/`**kwargs`, lambdas, closures — none of these belong here.
