# Deep Review (round 2) — Chapter 3 (Functions)
**Verdict:** Clean
**Python verified on:** 3.14.5

---

## Round-1 fixes audit

- **#1 BLOCKER — mutable default `pattern=[1,1,5,5]` in L3.7:** CONFIRMED-FIXED.
  Worked example 2 now reads `def bassline(root, pattern=(1,1,5,5)):` (line 264) with an
  explicit immutability note that doubles as a tuple preview. Tuple iterates identically
  for reading:
  ```python
  def bassline(root, pattern=(1,1,5,5)):
      return [root + p for p in pattern]
  print(bassline(60))  # [61, 61, 65, 65]
  ```
  No mutable-default trap remains anywhere in the chapter.

- **#2 MAJOR — wrong flow-of-execution model ("reads whole file before running"):**
  CONFIRMED-FIXED. L3.0 misconception (line 84) now states the correct line-by-line model
  verbatim ("learns the recipe but doesn't cook it yet… calling before the `def` in the
  file would crash with `NameError`"). Verified the real behaviour:
  ```python
  # greet() ; def greet(): ...  →  NameError: name 'greet' is not defined
  ```

- **#3 MAJOR — `is_prime` wrong for n ≤ 1:** CONFIRMED-FIXED. L3.3 worked example 3
  (line 155) now leads with the guard clause `if n < 2: return False`, names the
  early-return pattern, and lists the correct expected answers (0→False, 1→False, 2→True,
  negatives→False, 3→True, 9→False). All six verified:
  ```
  0 False · 1 False · 2 True · -5 False · 3 True · 9 False · 4 False · 17 True
  ```

- **#4 MAJOR — L3.4 rung dipped to 5 after L3.3 rung 6:** CONFIRMED-FIXED. The blank
  exercise (line 189) is now an explicit rung-6 two-function `UnboundLocalError`
  restructure with no starter code, and the ramp table (line 289) lists L3.4 as
  "6 (blank)". Monotonicity 3.3→3.4→3.5 now holds (all three at rung 6, non-decreasing,
  which satisfies CURRICULUM-STRUCTURE.md §E line 51-52 — "each lesson harder than the
  previous" reads as non-decreasing given scope is conceptually heavier than return).

- **#5 MAJOR — L3.2 stub used a default arg + name collision before defaults taught:**
  CONFIRMED-FIXED. The stub is now `def cm_to_inches(cm):` with `FACTOR = 2.54` as a
  module-level constant (line 131), explicitly flagged as a scope foreshadow. No default
  arg, no parameter-name collision.

- **#6 MINOR — "false for immutable types" imprecision:** CONFIRMED-FIXED. Both the L3.5
  misconception (line 222) and the chapter-wide list (line 343) now read "False for all
  types: the default is created once, when the `def` line runs, and reused on every call."

- **#7 MINOR — version-dependent SyntaxError message:** CONFIRMED-FIXED. L3.5 (line 224)
  now states the concept ("a required parameter cannot follow a parameter that has a
  default value") and explicitly notes the 3.12+ variant for the Codex. Verified the
  actual 3.14 message:
  ```
  parameter without a default follows parameter with a default
  ```

- **#8 MINOR — "NameError… in interactive mode (rare in script context)":** CONFIRMED-FIXED.
  L3.1 error list (line 111) now reads "calling a function whose `def` has not yet been
  reached in execution order." Verified above that this is a real script-level NameError.

- **#9 MINOR — unclear NameError description in L3.3:** CONFIRMED-FIXED. Line 168 now reads
  "accessing a name that only existed inside a function after it has returned (scope
  preview; covered fully in L3.4)."

- **#10 MINOR — Challenge Q7 input-loop + accumulation scope creep:** CONFIRMED-FIXED.
  Q7 (line 308) now gives `items = [10.00, 15.50, 8.75]` as a constant, explicitly defers
  the `input`-loop/`list.append` version to Ch.4, and L3.7's blank version (line 271)
  matches. No list accumulation before Ch.4.

All ten round-1 findings are genuinely fixed in the source, not merely claimed. No
round-1 fix introduced a new problem.

---

## New / remaining findings

1. **[MINOR] L3.5 worked-example header vs. its own fix exercise — `power` example
   conflates two distinct errors.** The fix exercise (line 217) presents
   `def power(base, exp=2, base=10):` as a "`SyntaxError` from duplicate param name;
   and `base` re-defined." That is the correct diagnosis, but it sits in the same lesson
   that teaches the *non-default-after-default* `SyntaxError`, and the two are unrelated
   error classes. Verified the duplicate case raises a *different* message than the
   ordering case:
   ```python
   compile("def power(base, exp=2, base=10): pass", "<s>", "exec")
   # SyntaxError: duplicate argument 'base' in function definition
   ```
   versus
   ```python
   ast.parse("def f(a=1, b): pass")
   # SyntaxError: parameter without a default follows parameter with a default
   ```
   The plan never claims they are the same, so this is not an error — but an author could
   mistakenly expect the "required-after-default" message here. → Add one clause to line 217:
   "(note: this fires `duplicate argument 'base'`, a *different* SyntaxError than the
   non-default-after-default one taught above)." Purely an authoring-clarity nit.

2. **[MINOR] L3.5 misconception "Docstrings slow down the program. (They don't; only
   memory.)" (line 222) is a touch misleading for an 11-year-old.** Docstrings cost a
   negligible, constant amount of memory and can be stripped with `python -O`
   (`__doc__` becomes `None`). The "only memory" phrasing implies a meaningful cost.
   → Soften to "They don't affect speed; they're just text Python keeps so tools can show
   it." Cosmetic.

3. **[MINOR / thin — carried from round 1, not blocking] `help()` still not mentioned.**
   Round-1's "thin" note observed docstrings expose only `.__doc__`; `help(fn)` is the
   natural REPL breadcrumb and the more common real-world access path. Still absent (line
   212 shows only `function.__doc__`). Not a defect — `.__doc__` is correct and sufficient
   for the checker — but a one-line mention would strengthen the spiral toward the Codex.

No BLOCKER or MAJOR findings remain.

---

## Verified-correct (key claims I ran)

- **Reading vs. assigning an outer name** (L3.4 core teaching): reading is fine; assigning
  creates a new local and leaves the outer untouched, and a read-before-assign of that
  same name raises `UnboundLocalError` (line 196):
  ```python
  TAX_RATE = 0.08
  def f(): TAX_RATE = 0.99; return TAX_RATE
  f(), TAX_RATE          # (0.99, 0.08)  ← outer unchanged

  discount = 0.1
  def g(): discount = discount - 0.01     # reads before its own assign
  g()  # UnboundLocalError: cannot access local variable 'discount'
       #                   where it is not associated with a value
  ```
  The L3.4 message text is exact.

- **Void → None → TypeError** (L3.3 fix exercise, line 161): a printing function returns
  `None`; `add_tax(10, 0.1) + 5` raises
  `TypeError: unsupported operand type(s) for +: 'NoneType' and 'int'`. Exact.

- **TypeError call-arity messages** (L3.2, line 139): too few →
  `missing 1 required positional argument: 'greeting'`; too many →
  `takes 1 positional argument but 3 were given`; positional+keyword clash (line 355) →
  `got multiple values for argument 'name'`. All exact.

- **Keyword-arg reorder** (L3.5 worked example, line 210):
  `greet(greeting="Howdy", name="Sam")` → `"Howdy Sam"`. Correct; shown breadth-only.

- **Docstring round-trip** (L3.5, line 212): a single-quoted first-statement string is
  stored verbatim in `__doc__`. Confirmed.

- **`return` at module level** (line 168/348): raises `SyntaxError: 'return' outside
  function` at compile time (note: `ast.parse` alone does *not* flag it — the engine must
  `compile`/run, which it does). Consistent with the plan's framing.

- **Challenge solvability** — `clamp` (`max(low, min(value, high))`), `is_leap_year`
  (`year%4==0 and (year%100!=0 or year%400==0)` → 2000 True, 1900 False, 2024 True), and
  `is_divisible`/`fizz_buzz` are all writable with only Ch.0–3 concepts. No use-before-taught.

- **Boundary/ownership:** `global` is excluded course-wide (the only matches are a benign
  misconception phrasing in L3.2 and a Ch.6 author note about the "global API function" —
  not the keyword); abstraction is **named here** (line 33) and CURRICULUM-STRUCTURE.md
  line 109 confirms "practiced unnamed in Ch.0, named in Ch.3, deepened in Ch.5" with
  ch-5's plan echoing it. No comprehensions appear (deferred to Ch.8 correctly).

---

## Verdict notes

The revision is solid: every round-1 finding is fixed at the source and re-verified, the
`is_prime` guard / tuple default / execution model / L3.4 rung are all correct, and the
boundary rules (`global` struck, abstraction named, comprehensions deferred) hold. The
"write from scratch by Ch.3" expectation is realistic: the from-scratch hard exercises
(`pounds_to_kg`, `is_divisible`+`fizz_buzz_label`, the `apply_discount` restructure,
`repeat_word`, `chorus`, `is_leap_year`, `fizz_buzz`) are each one short function over
arithmetic/conditionals/`return` the learner has drilled across 3.1–3.5, with the heaviest
(two cooperating functions) reached only after a full predict→modify→complete ramp — an
appropriate stretch for a strong 11-year-old, not a cliff. Remaining items are three MINOR
authoring-clarity nits, none blocking. Difficulty is monotonic (rungs non-decreasing
3.0→3.7), spiral weaving and warm-up/recap are present per lesson, and debugging is woven
(fix exercises in every lesson, `UnboundLocalError`/`NoneType` traps named). Ship it.
