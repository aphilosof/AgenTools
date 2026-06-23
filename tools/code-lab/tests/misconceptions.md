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
- pitch-direction: believes a bigger note number sounds lower (or that order doesn't affect pitch). Hint angle: compare the numbers and which sounds higher.
- quotes-in-output: believes the quotation marks are part of what print shows. Hint angle: run it and look — the quotes only mark where the text starts and ends.
- unquoted-word-as-text: writes print(Hello) expecting the word, not realizing unquoted text is read as a name to look up (NameError). Hint angle: read the real error; text needs quotes.
- comment-runs: believes a line after # still runs (or that code after # on the same line runs). Hint angle: Python ignores everything after # on the line.
- sep-vs-end: confuses sep (between arguments) with end (after the last one). Hint angle: sep goes between the things, end goes after them all.
- join-needs-space: expects + to add a space between pieces of text the way a comma does. Hint angle: + glues text exactly as written — put the space in yourself, as " ".
- comma-vs-plus: treats , and + as interchangeable inside print. Hint angle: a comma separates several things (and adds a space); + joins them into one piece of text (no space unless you add it).
