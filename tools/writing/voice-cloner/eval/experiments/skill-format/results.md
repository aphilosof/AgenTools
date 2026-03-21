# SKILL.md Format Experiment Results

**Date**: 2026-03-19
**Author**: Paul Graham (essay genre)
**Samples**: 5 training samples, 2 test passages generated per variant

## Variants

| Variant | Description | Flagged (>40%) | Verdict |
|---------|-------------|:--------------:|---------|
| A | Baseline: quant bullets at top + bottom, full rules, no examples | **14** | FAIL |
| B | Quant table at END, calibration examples, stronger enforcement | **11** | PASS |
| C | 2 rules/dimension max, 5 calibration examples, quant table at top | **10** | PASS |
| D | Two-pass: write naturally then revise with metric checklist | **11** | PASS |

## Summary Metrics

| Metric | A | B | C | D |
|--------|---|---|---|---|
| Flagged features | 14 | 11 | 10 | 11 |
| Average deviation % | 39.4 | 39.3 | 39.4 | 40.0 |
| Feature-closest wins | 5 | 10 | 8 | 8 |

## Conclusion: No clear winner — format alone isn't the lever

The difference between 10 and 11 flags is noise at n=2. All three non-baseline variants perform similarly. The real finding: **calibration examples + fewer rules** helped (A→B/C/D), but format changes plateau fast.

Average deviation stayed ~39-40% across all variants. We're rearranging the same information and hoping Claude reads it differently, but the bottleneck is elsewhere.

## The actual 8 problems and how to fix each

These 8 features fail across ALL 4 variants. They cluster into 3 root causes with specific solutions mixing SKILL.md changes and Python-side interventions.

### Problem 1: Sentence length distribution is inverted

| Feature | Target | Actual (all variants) |
|---------|--------|-----------------------|
| sent_pct_short (≤10w) | 26% | 46-54% |
| sent_pct_long (>25w) | 16% | 2-7% |

The generated text has 2x too many short sentences and barely any long ones. Average sentence is ~12w instead of 17w.

**Why**: The calibration examples + PG's famous short punchy sentences ("There isn't.", "Not one.") are overweighted. Claude learns "PG = short sentences" from the examples and overshoots. The qualitative rules about fragments reinforce this.

**Fix (SKILL.md)**: The calibration examples need to be *structurally representative*, not just metrically close. Current excerpt selector (excerpts.py) picks by WMAPE distance to corpus average — but it should also verify the excerpt's own sentence length distribution is close to target. An excerpt full of short fragments skews the entire voice.

**Fix (SKILL.md)**: Reframe the short-sentence rules. Instead of "Use short fragments as standalone paragraphs for dramatic emphasis", say "Only ~24% of sentences should be 10 words or fewer. Most sentences should be 11-25 words. Vary sharply but always return to medium-length compound sentences as the default."

**Fix (Python - generator.py)**: When building qualitative rules, auto-annotate sentence architecture rules with the quantitative constraint inline: "Alternate between short punchy sentences (24% of total) and medium compound-complex ones (60% of total)."

### Problem 2: Paragraphs are too dense / no single-sentence paragraphs

| Feature | Target | Actual (all variants) |
|---------|--------|-----------------------|
| para_pct_single_sent | 33% | 0-4% |
| para_avg_sentences | 2.7 | 4.9-5.1 |

PG puts ~1 in 3 paragraphs as a standalone sentence. Claude writes wall-of-text paragraphs with 5+ sentences.

**Why**: The rules say "Use single-sentence paragraphs frequently" but this is drowned by the many other paragraph rules and the overall essay prompt. When Claude writes essays, it naturally clusters ideas into multi-sentence paragraphs. A qualitative rule alone isn't strong enough to override this.

**Fix (SKILL.md)**: Make it explicit and structural: "About 1 in 3 paragraphs should be a single sentence standing alone. After a 3-4 sentence paragraph, pull out the punchline or the transitional sentence and give it its own paragraph. Examples from the author: 'I know mine does.', 'There isn't.', 'That seems so obvious.', 'Perhaps something changes at adolescence.'"

**Fix (SKILL.md)**: In calibration examples, specifically select excerpts that DEMONSTRATE single-sentence paragraph patterns. Current excerpt selector doesn't consider paragraph structure.

**Fix (Python - excerpts.py)**: Add a diversity constraint: at least 1 of the N excerpts must contain a single-sentence paragraph, so Claude sees the pattern in action.

### Problem 3: Opener distribution (article/pronoun overuse)

| Feature | Target | Actual (all variants) |
|---------|--------|-----------------------|
| open_article_pct | 9% | 20-26% |
| open_pronoun_pct | 13% | 21-25% |

Claude starts too many sentences with "The" and "It". PG starts more sentences with subordinating conjunctions (When/If/Although — 8% target vs 0-5% actual), adverbs, and other varied openers.

**Why**: The SKILL.md has explicit rules about conjunction starters (which Claude hits ~OK) but says nothing specific about limiting article or pronoun openers. The rules about opener diversity are qualitative ("Favor SVO order") which Claude interprets as "start with The [noun] [verb]."

**Fix (SKILL.md)**: Add explicit anti-target: "No more than ~10% of sentences should start with 'The'. Vary openers: subordinating clauses ('When you...', 'If you...', 'Although...'), adverbs, prepositional phrases. PG opens ~8% of sentences with subordinating conjunctions — match that."

**Fix (Python - generator.py)**: Include `open_article_pct` and `open_subordinate_pct` in the quantitative targets table. Currently the table includes conjunction-start and pronoun-start but NOT article-start or subordinate-start.

### Smaller issues

**fw_hedges** (target 1.53, actual 0.5-0.75): The SKILL.md lists hedging words in signature phrases but doesn't quantify frequency. **Fix**: Add to quant table: "Hedging words (could/may/probably/often/perhaps): 1.5 per 1000 words."

**punct_colons_per_100w** (target 0.35, actual 0-0.17): Not in the quant table at all. **Fix**: Add to quant table. Add to qualitative rules: "Use colons to introduce explanations — about 1 colon per 3 paragraphs."

## Action Items

### SKILL.md generator (generator.py) changes:
1. Add `open_article_pct`, `open_subordinate_pct` to the quantitative table
2. Add `fw_hedges` rate to the quantitative table
3. Add `punct_colons_per_100w` to the quantitative table
4. When emitting sentence architecture rules, inline the distribution: "short (24%), medium (60%), long (16%)" rather than having separate quant and qualitative sections that contradict
5. Use variant C's approach: max 2-3 rules per dimension, more calibration examples

### Excerpt selector (excerpts.py) changes:
6. Add paragraph structure to excerpt scoring — penalize excerpts with no single-sentence paragraphs
7. Add sentence length distribution check — reject excerpts where sent_pct_short > target + 20%
8. Require at least 1 excerpt that demonstrates single-sentence paragraph patterns

### Synthesizer (synthesizer.py) changes:
9. In the synthesis prompt, add explicit instruction: "Do NOT write rules that encourage short/fragment sentences without balancing them with medium-length sentence rules. The most common sentence should be medium (11-25 words), not short."

### Validation (validator.py) changes:
10. The current validator generates 2 passages at 400-600 words. This is a small sample. Consider increasing to 3-4 passages for more stable metrics.
