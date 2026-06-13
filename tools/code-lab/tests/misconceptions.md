# Misconception registry

Every id used in a lesson's `misconceptions` field must exist here, with a one-line
description and the hint angle that addresses it. Populated alongside content in
Phases 2-4. Seed entries:

- off-by-one-range: believes range(8) includes 8. Hint angle: count the printed values.
- loop-var-confusion: believes the loop variable persists or controls the loop body magically.
- assignment-vs-equality: uses = where == is meant (or vice versa).
- indentation-scope: does not connect indentation to what is inside the loop/function/if.
- string-vs-number: adds "5" + 5, or expects input() to return a number.
- call-vs-reference: writes f instead of f(), or the reverse.
