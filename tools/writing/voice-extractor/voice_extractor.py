#!/usr/bin/env python3
"""
Voice Extractor — Extract your writing style into a bulletproof Claude prompt.

Uses `claude -p` (Claude Code CLI) — NO API key needed, NO extra charges.
Runs through your existing Claude subscription.

Usage:
  python voice_extractor.py --samples-dir ./my-writing/ --category "Academic Writing"
  python voice_extractor.py --samples-file letter.txt proposal.txt --category "Job Applications"
  python voice_extractor.py --interactive --category "General"

Requirements:
  - Claude Code installed (provides the `claude` CLI command)
  - No API key needed
  - No pip installs needed
"""

import argparse
import json
import os
import sys
import subprocess
import time
import re
import shutil
from collections import Counter
from pathlib import Path


# ─── CATEGORY PROFILES ──────────────────────────────────────────────────────

CATEGORY_PROFILES = {
    "Academic Writing": {
        "analyze": [
            "citation patterns (inline, parenthetical, numbered) — how citations are woven into sentences",
            "passive vs active voice ratio — passive is legitimate in academic writing, analyze as stylistic choice not flaw",
            "hedging patterns — where and how the author qualifies claims",
            "section-level structure (intro→methods→results→discussion flow)",
            "technical jargon density and how domain terms are introduced",
            "sentence complexity and clause nesting — academic writing tolerates higher density",
        ],
        "skip": [
            "do NOT generate rules about first-person restrictions unless the samples confirm avoidance — many academic fields use 'we' freely",
            "do NOT penalize long sentences — academic writing naturally runs longer",
        ],
    },
    "Job Applications": {
        "analyze": [
            "first-person usage patterns — 'I/my' is expected, analyze HOW the author uses it (every sentence? sparingly? only for claims?)",
            "how the author balances personal narrative with professional evidence",
            "opening and closing patterns — how letters begin and end",
            "how the author connects their experience to the target role/company",
            "formality level — typically 7-8/10, not 9-10",
        ],
        "skip": [
            "do NOT restrict first-person — it is the natural voice for this category",
            "do NOT enforce third-person or impersonal constructions",
        ],
    },
    "Professional Email": {
        "analyze": [
            "sentence brevity patterns — emails tend toward shorter sentences",
            "opening directness — how quickly the author gets to the point",
            "second-person usage ('you/your') — natural in email",
            "contraction patterns — may be acceptable depending on author",
            "paragraph brevity — email paragraphs are typically 1-3 sentences",
            "sign-off patterns and tone",
        ],
        "skip": [
            "do NOT enforce long sentence targets from other categories",
            "do NOT restrict contractions unless the samples confirm avoidance",
            "do NOT restrict second-person",
        ],
    },
    "Grant / Proposal Writing": {
        "analyze": [
            "problem-solution-impact structure — how the author frames the case",
            "'we/our' usage for the team — standard in proposals",
            "quantification patterns — how numbers and data are deployed for persuasion",
            "future tense for proposed work vs past tense for completed work",
            "how the author escalates stakes and frames significance",
            "citation and evidence integration patterns",
        ],
        "skip": [
            "do NOT restrict 'we/our' — it is standard in proposals",
        ],
    },
    "Technical Documentation": {
        "analyze": [
            "imperative mood usage — 'Run the command,' 'Set the value'",
            "step-by-step structural patterns",
            "second-person ('you') for instructions — standard in docs",
            "code/command formatting conventions",
            "sentence clarity and brevity — docs favor short direct sentences",
            "jargon handling — defined on first use or assumed known?",
        ],
        "skip": [
            "do NOT restrict imperative mood or second-person",
            "do NOT enforce long sentence targets",
        ],
    },
    "Creative Writing": {
        "analyze": [
            "sentence length VARIATION — the range and rhythm matter more than the average",
            "fragment usage — intentional fragments are a stylistic choice",
            "metaphor and imagery patterns",
            "emotional register shifts — when and how tone changes",
            "dialogue patterns if present",
            "paragraph length variation for pacing",
        ],
        "skip": [
            "do NOT restrict fragments, varied punctuation, or emotional language",
            "do NOT enforce formal vocabulary rules",
        ],
    },
    "General / Personal": {
        "analyze": [
            "all dimensions with equal weight — let the samples fully determine the rules",
        ],
        "skip": [
            "do NOT impose any category-specific constraints — derive everything from the data",
        ],
    },
}


# ─── SYNTHESIS PROMPT (single Claude call) ──────────────────────────────────

SYNTHESIS_SYSTEM = """You are a writing style analyst and prompt engineer. You receive:
1. AUTOMATED METRICS from Python — exact punctuation counts, word frequencies, verb frequencies, contraction lists, pronoun counts, hyphenated compounds, paragraph counts. These are DETERMINISTIC and CORRECT. Trust them.
2. RAW WRITING SAMPLES — the author's actual text.

Your job has TWO parts:

## PART A: QUALITATIVE ANALYSIS (things Python cannot do)
Using the raw samples, analyze:
- Sentence boundaries, sentence count, average/median sentence length, length distribution
- Sentence opener classification (subject-first, adverbial, conjunction, "This [noun]", etc.) with counts and percentages
- Passive vs active voice instances with examples
- Clause nesting depth (typical and maximum)
- Tone and register (formality scale, authoritative vs tentative, emotional register)
- Rhetorical patterns (argument structure, analogies/metaphors, how examples are introduced, transitions)
- Whether the author editorializes (uses superlatives/evaluative adjectives) or lets specifics speak
- Whether the author makes standalone philosophical declarations or always backs assertions with evidence
- Register splitting (different vocabulary for different content types within the same document?)
- Distinctive quirks that make this voice recognizable

IMPORTANT: The automated metrics give you exact punctuation, word, verb, and pronoun counts. Do NOT recount these. Use them directly. Focus your effort on the qualitative dimensions listed above that require language understanding.

PARAGRAPH METRICS NOTE: If the automated metrics include a "paragraph_warning" field, do NOT use the automated paragraph_count or paragraph_word_counts. Instead, determine paragraph structure yourself from the raw writing samples. The automated paragraph detection failed due to formatting issues in the input (e.g., line-wrapped text without clear paragraph delimiters).

## PART B: SYNTHESIS
Combine the automated metrics + your qualitative analysis + the raw samples to produce three outputs.

### OUTPUT 1: RULES + SELF-CHECK (===RULES_START=== / ===RULES_END===)

Begin the rules with a "HOW TO APPLY THESE RULES" section BEFORE Rule 1. This section must instruct the reader to internalize the voice and write naturally, not to audit mechanically. Include this block verbatim (or adapt wording to fit the category while preserving the core instructions):

```
### HOW TO APPLY THESE RULES

Internalize the voice, then write. Do not audit mechanically.

These rules describe a writing voice. They are not a compliance checklist to run against existing text line by line. When applying this style guide:

1. Read the rules and examples to absorb the voice.
2. Write or rewrite the content in that voice — by feel, not by formula.
3. Use the self-check AFTER writing to catch anything you missed.

Do NOT: make tables of "violations," count words per sentence and report averages, narrate your compliance process, mechanically merge or split sentences to hit a word count target, or treat each rule as an independent constraint to satisfy. The rules work together to produce a voice. A sentence outside the target range is fine if it sounds right. A sentence inside the range is bad if it sounds strained. The numbers are guides, not laws.

When revising an existing document: read it, absorb what it is trying to say, then rewrite each section in this voice. Do not perform surgery on individual sentences while narrating the procedure. The output should be a clean rewritten document, not a log of changes.

If you find yourself making a spreadsheet of rule compliance metrics, you have misunderstood the assignment. Write naturally within the voice. Then check.
```

Then the hard rules follow:

HARD, NUMBERED, VERIFIABLE rules. Not vague — specific and measurable.
BAD: "Write conversationally" GOOD: "Average sentence length: 14-20 words. No sentence exceeds 35. Use em dashes for asides, never parentheses."
BAD verb rule: "Use Latinate vocabulary: 'leverage' not 'use,' 'demonstrate' not 'show.'" GOOD verb rule: "Verb register (from samples): 'leverage' (4 occurrences) not 'use,' 'demonstrate' (3 occurrences) not 'show,' 'address' (5 occurrences) not 'fix.' Do NOT substitute verbs the author never uses — if a verb does not appear in the samples, do not recommend it."
BAD: "Use credential-stack sentences in every paragraph" GOOD: "Use credential-stack sentences (40-57 words, comma-separated participial phrases) in opening and qualification paragraphs. Do not use them in personal narrative or values paragraphs."
BAD: "Use specific language" GOOD: "Never evaluate — specify. Replace 'some of the most extreme environments' with 'methane seeps and deep-sea sediments.' Replace 'significant experience' with '15+ expeditions over 7 years.' If you cannot name it or number it, cut the adjective."

Group into: SENTENCE RULES, PUNCTUATION RULES, PARAGRAPH RULES, VOCABULARY RULES (including a VERB REGISTER sub-section with per-verb evidence), TONE RULES, STRUCTURE RULES.

Then SELF-CHECK RUBRIC: numbered yes/no checklist Claude must verify before outputting.

The self-check rubric MUST include these three items regardless of category:

1. A hard em-dash count check: "Does the entire document contain at most [N] em dashes? If more, rewrite using the author's primary packing construction."

2. A vocabulary boundary check: "Does every word in the output appear in the author's samples, the verb register, or common English? Flag any word that sounds like jargon, theory language, or buzzwords not in the samples."

3. A construction method check: "Are information-dense sentences built using the author's primary construction method (specified in the rules), not using em-dash insertions or other constructions the author avoids?"

### OUTPUT 2: ANNOTATED EXAMPLES (===EXAMPLES_START=== / ===EXAMPLES_END===)

Most critical component. Select 4-6 strongest passages from the ORIGINAL samples. For EACH:

<example>
<label>[short label]</label>
<passage>[EXACT quote — zero modifications]</passage>
<why_this_works>[Forensic annotation referencing rule numbers. Point to exact words, punctuation, structure, rhythm.]</why_this_works>
<generic_ai_version>[Same content rewritten as flat generic AI. Correct but lifeless. Shows what NOT to do.]</generic_ai_version>
</example>

EXCEPTION PATTERN WARNING: When selecting annotated examples, check whether any example uses a construction that is RARE or EXCEPTIONAL for the author. If so, the annotation MUST explicitly warn that this pattern is the exception, not the norm. For example, if the author rarely uses em dashes but one selected passage happens to contain one, the annotation must say: "NOTE: The em dash in this passage is an exception — the author's primary method is [X]. When writing in this voice, use [X] instead. This example is included to show [the other patterns it demonstrates], not the em dash usage."

Never let an example teach a rare pattern without flagging it as rare. Claude will replicate whatever the examples show — if an example uses an em dash without warning, Claude will use em dashes everywhere.

### OUTPUT 3: SKILL.md (===SKILL_START=== / ===SKILL_END===)

Complete self-contained SKILL.md:
---
name: [category-slug]-voice-style
description: [one line about what this does and when to use it]
---
# Voice Style: [Category]
## How to Use This Skill
### HOW TO APPLY THESE RULES [the meta-instruction block from OUTPUT 1 — include it here too, under "How to Use This Skill", before any rules]
## Mandatory Rules [all rules]
## Reference Examples [all examples with good/bad]
## Self-Check Protocol [complete checklist]
## Quick Reference Card [top 10 most important rules]

## CATEGORY-AWARE RULE GENERATION
The user message includes a CATEGORY section with specific analysis focus items and constraints. Follow these strictly:
- Only generate rules for the dimensions listed under ANALYSIS FOCUS
- Respect all items under CONSTRAINTS — if it says "do NOT restrict first-person," then do not generate rules limiting first-person usage even if the samples happen to use it sparingly
- The category tells you WHICH rules are relevant. The forensic data tells you WHAT VALUES those rules should have. Category controls scope; data controls content.
- When generating the self-check rubric, only include checks for rules that were actually generated. Do not add checks for dimensions the category said to skip.

## CRITICAL RULE-GENERATION CONSTRAINTS

### Punctuation rules must specify WHAT, not just HOW OFTEN
When generating punctuation frequency rules, always specify WHAT content belongs inside the punctuation mark, not just how often to use it. For example, don't just say "use parentheses 1 per 4 sentences" — say "use parentheses for [specific purposes found in the samples, e.g., citations, abbreviations, company names] and NEVER for [things that belong in the main clause, e.g., taxonomic lists, substrate names, numerical ranges, pathway descriptions]." Examine the samples to determine exactly what the author puts inside parentheses, em dashes, colons, etc.

### Em dash rules must be RESTRICTIVE by default
When generating punctuation rules for em dashes, default to RESTRICTIVE. Most authors use em dashes rarely or never in the category being analyzed. If the forensic analysis shows fewer than 1 em dash per 300 words, generate the rule as: "Em dashes: ALMOST NEVER. Maximum 1 per entire document." If em dashes are more frequent, still specify that the author's PRIMARY information-packing method (comma-separated participial phrases, colon-then-list, parallel constructions, etc.) should be used INSTEAD of em dashes in most cases. Explicitly state what construction to use instead — do not just say "em dashes are rare," say "use [author's actual construction method] instead of em dashes."

The anti-rule for em dashes must say: "If a draft contains more than [threshold], rewrite ALL em-dash sentences using the author's primary packing construction. This is non-negotiable."

### Vocabulary rules must include clarity constraints and a Claude-ism blacklist
Every vocabulary rule must include a clarity constraint. Dense ≠ baroque. If the author's vocabulary is Latinate, the rule must also include a BLACKLIST of Claude-isms that sound similar but are NOT in the author's actual vocabulary. Scan the samples and ONLY include words the author ACTUALLY USES. Common Claude-isms to check against the samples (EXCLUDE unless found verbatim): "wherein," "thereof," "exquisitely," "renders," "obligate," "aforementioned," "pertaining to," "in the context of," "it is important to note that," "it should be noted," "underscores," "facilitates," "encompasses," "paradigm." If a word is not in the samples, it goes on the blacklist.

### Verb guidance must be evidence-based, not blacklist-style
The word blacklist above is for FILLER WORDS and CLAUDE-ISMS — phrases Claude inserts that no human would write. Verb guidance is DIFFERENT. Do NOT blacklist common verbs like "use," "show," "include" — the author may use them sometimes. Instead, generate a VERB REGISTER table showing the author's PREFERRED verbs with occurrence counts from the AUTOMATED METRICS. Format: "Prefer '[author's verb]' (N occurrences) over '[generic verb]' when describing [context]." If the metrics show the author uses BOTH "leverage" and "use," say so — do not pretend one is forbidden. The goal is frequency-weighted guidance, not absolute prohibition.

### Every positive rule needs a corresponding ANTI-RULE
For every positive rule, consider what Claude is likely to do wrong when following it, and generate a corresponding ANTI-RULE (prefix with "ANTI-RULE:"). Examples:
- If the rule says "pack multiple ideas into sentences" → ANTI-RULE: "Never nest more than 2 levels of clauses. Density comes from information packed into a simple structure, not from syntactic recursion. If a sentence requires re-reading to parse its structure, it has too many nested clauses."
- If the rule says "use Latinate vocabulary" → ANTI-RULE: "Every sentence must be understandable on first read. No word should call attention to itself as unusually formal. If you wouldn't encounter the word in a Nature or Science paper, don't use it."
- If the rule says "use parentheses for X" → ANTI-RULE: "Never put content in parentheses that carries the main argument. Parenthetical content must be supplementary — removable without losing the sentence's core meaning."

### Mandatory first-read clarity rule
Always generate this rule regardless of the writing category: "MANDATORY: Every sentence must be parseable on first read. Complexity comes from the IDEAS packed into a sentence, not from syntactic nesting or vocabulary obscurity. If a reader needs to re-read a sentence to understand its grammatical structure, rewrite it. The test: cover everything after the main verb — can you identify the subject and verb instantly? If not, simplify the structure."

### Information-dense sentence rules must specify CONSTRUCTION METHOD with templates
When generating rules about information-dense sentences (credential stacks, evidence packing, multi-part claims), specify the CONSTRUCTION METHOD the author uses, not just the frequency. Analyze HOW the author packs information: comma-separated participial phrases ("With X, combined with Y, I am...")? Em-dash insertions? "Both X and Y while Z" constructions? Colon-then-list? The construction method matters as much as the frequency. Generate an anti-rule specifying which packing constructions are NOT in the author's samples.

Provide EXPLICIT CONSTRUCTION TEMPLATES with examples from the samples. Do not just say "the author uses information-dense sentences." Show the exact pattern:

For credential stacking, specify: "Construction: With [credential 1], [credential 2], and [credential 3], I am [claim]." or "As a [identity] with [credential 1], [credential 2], and [credential 3], I am [claim]."

For evidence bridging, specify: "Construction: My [experience] at [institution] [verb — provides/demonstrates/aligns with] [specific institutional need]."

For parallel lists, specify: "Construction: [item 1], [item 2], and [item 3]" with Oxford comma.

Provide both the template AND an actual example from the author's samples for each construction. Then specify what NOT to do — show the construction the author avoids (e.g., em-dash insertion) alongside the one they use (e.g., comma-separated participial phrases).

### Recurring sentence patterns must be scoped to PARAGRAPH TYPES
When generating rules about recurring sentence patterns (credential stacks, topic sentences, evidence sentences), scope them to the PARAGRAPH TYPES where they actually appear. Not every paragraph serves the same function. If the author uses credential stacks in opening and qualification paragraphs but not in personal narrative or values paragraphs, say so. Never write a rule like "at least 1 credential stack per paragraph" if the pattern only applies to certain paragraph types.

### Anti-editorializing rule with REPLACEMENT INSTRUCTIONS
Always generate an ANTI-EDITORIALIZING rule. Check the samples: does the author use superlative-adjacent phrases ("most important," "most extreme," "truly remarkable") or let specifics speak without evaluative overlay? If the author relies on naming things and giving numbers instead of evaluating them, generate an anti-editorializing rule that includes REPLACEMENT INSTRUCTIONS, not just prohibitions. Do not just say "avoid superlatives." Say: "Replace every evaluative adjective with the specific fact it is trying to convey. Instead of 'extensive experience,' write 'seven years at Caltech.' Instead of 'outstanding teaching,' write 'two Excellence in Teaching Awards (2010, 2013), student evaluations at 9.5 out of 10.' Instead of 'significant impact,' write the specific impact with a number. If you cannot replace an evaluative adjective with a specific fact, cut the adjective entirely — do not keep it."

Draw replacement examples from the ACTUAL SAMPLES — show what the author writes instead of evaluative language. The replacement instruction must make it impossible for Claude to fall back on vague evaluative adjectives.

### Genre cliché list
Generate a GENRE CLICHÉ list separate from the Claude-ism blacklist. Check the samples against common clichés of the writing category. For job applications: "next generation," "hit the ground running," "passionate about," "unique opportunity," "proven track record," "leverage my skills," "uniquely positioned." For academic writing: "paradigm shift," "gap in the literature," "sheds light on," "paves the way." For grant proposals: "transformative," "cutting-edge," "novel approach," "interdisciplinary synergy." If the author avoids genre clichés and uses specific language instead, generate a rule enforcing that.

### STRICT vocabulary boundary rule — ALWAYS generate this
ALWAYS generate a STRICT VOCABULARY BOUNDARY rule, regardless of category. This rule states: "Do not introduce words or phrases the author does not use in the samples. If a word does not appear in the writing samples or the verb register, do not use it. When in doubt, use a simpler word the author demonstrably uses."

In addition to the Claude-ism blacklist (words Claude defaults to) and the genre cliché blacklist (category-specific clichés), generate a JARGON BOUNDARY instruction: "Any word that sounds like educational theory jargon, DEI policy language, management consulting vocabulary, or academic buzzwords that is not in the author's samples must not appear in the output. Test: can you point to this exact word in the author's writing? If not, do not use it."

Provide specific examples of the kind of jargon to avoid, drawn from the writing category. For job applications: "scientific identity," "scientific agency," "credentialing," "positionality," "intentionality," "praxis," "equity-minded," "productive struggle," "asset-based." For academic writing: "paradigm shift," "problematize," "unpack," "interrogate" (non-literal). For professional writing: "synergy," "thought leadership," "stakeholder engagement," "catalyze," "operationalize." For grant proposals: "capacity building," "theory of change," "impact framework," "scaling pathways." These are examples — the rule applies GENERALLY to any jargon not in the samples.

### Institutional language — distinguish adoption from buzzwords
When generating rules about institutional language, distinguish two types: (a) INSTITUTIONAL VOCABULARY ADOPTION — using the target institution's specific program names, frameworks, and terminology. This is good and should be encouraged. (b) INSTITUTIONAL BUZZWORDS — generic policy language that appears everywhere ("broadening participation," "inclusive excellence," "transformative impact"). Check the samples: does the author use these generic terms or express the same ideas through concrete actions and stories? Generate rules accordingly.

### Unsupported philosophical claims
Check whether the author makes standalone philosophical declarations ("X and Y are inseparable," "education is fundamentally about Z"). If the author does NOT — if every assertion is backed by evidence in the same paragraph — generate: "Never make an unsupported philosophical claim. Every assertion needs specific evidence in the same paragraph: a number, a name, a concrete experience, or a citation. If you cannot immediately support a claim, rewrite it as a transition to evidence."

## METRICS INTEGRATION
When generating rules, express quantitative targets as RANGES not point values. The automated metrics give exact counts; convert them to ranges that absorb natural variation:
- If automated metrics show 47 commas across 32 sentences (1.47/sentence), write the rule as "1.2-1.7 commas per sentence" not "1.47 commas per sentence"
- If verb "align" appears 8 times, write "align (frequent — 8x in samples)" not "use align exactly 8 times"
- Ranges should be tight enough to be useful but loose enough to handle natural variation

When generating the Self-Check Rubric, frame checks against the ranges: "Is the comma rate between 1.2-1.7 per sentence?" not "Is the comma rate exactly 1.47?"

NOTE about [...] markers: If the samples contain [...] markers, these indicate paragraphs were omitted during smart sampling. Do not analyze transitions across [...] gaps. All other analysis should proceed normally.

CRITICAL: Every rule traces to actual metrics or qualitative analysis. Every example is an EXACT QUOTE. Every generic_ai_version shows the contrast clearly.

Format outputs with these delimiters:
===RULES_START=== / ===RULES_END===
===EXAMPLES_START=== / ===EXAMPLES_END===
===SKILL_START=== / ===SKILL_END===
"""


# ─── METRICS ─────────────────────────────────────────────────────────────────

def compute_metrics(samples):
    """Compute deterministic metrics Python can handle reliably.

    Does NOT attempt: sentence boundaries, sentence openers,
    passive voice, tone, rhetoric, clause nesting.
    Those go to Claude.
    """
    all_text = " ".join(s["text"] for s in samples)
    all_words = all_text.split()
    total_words = len(all_words)

    metrics = {}

    # ── Word-level metrics ──
    word_freq = Counter(w.lower().strip(".,;:!?()[]\"'—–-") for w in all_words)
    word_freq = {k: v for k, v in word_freq.items() if len(k) > 1}

    stop_words = {
        "the", "of", "and", "in", "to", "is", "are", "was", "were", "be",
        "been", "being", "have", "has", "had", "do", "does", "did", "will",
        "would", "could", "should", "may", "might", "shall", "can", "a",
        "an", "this", "that", "these", "those", "it", "its", "for", "with",
        "on", "at", "by", "from", "as", "or", "but", "not", "no", "if",
        "than", "into", "through", "about", "between", "after", "before",
        "which", "who", "whom", "their", "there", "they", "them", "we",
        "our", "my", "your", "his", "her", "he", "she", "also", "more",
        "such", "each", "other", "how", "what", "when", "where", "while",
        "both", "all", "any", "most", "some",
    }
    content_words = {k: v for k, v in word_freq.items() if k not in stop_words}
    metrics["top_15_content_words"] = dict(Counter(content_words).most_common(15))

    unique_words = len(set(w.lower().strip(".,;:!?()[]\"'—–-") for w in all_words if len(w) > 1))
    metrics["type_token_ratio"] = round(unique_words / total_words, 3) if total_words > 0 else 0
    metrics["total_words"] = total_words
    metrics["unique_words"] = unique_words

    # ── Repeated phrases (2-3 word ngrams appearing 3+ times) ──
    bigrams = [" ".join(all_words[i:i+2]).lower().strip(".,;:!?()") for i in range(len(all_words)-1)]
    trigrams = [" ".join(all_words[i:i+3]).lower().strip(".,;:!?()") for i in range(len(all_words)-2)]
    bigram_freq = {k: v for k, v in Counter(bigrams).items() if v >= 3 and not all(w in stop_words for w in k.split())}
    trigram_freq = {k: v for k, v in Counter(trigrams).items() if v >= 3 and not all(w in stop_words for w in k.split())}
    metrics["repeated_bigrams"] = dict(Counter(bigram_freq).most_common(10))
    metrics["repeated_trigrams"] = dict(Counter(trigram_freq).most_common(10))

    # ── Punctuation counts (character-level — bulletproof) ──
    metrics["punctuation"] = {
        "commas": all_text.count(","),
        "semicolons": all_text.count(";"),
        "colons": all_text.count(":"),
        "em_dashes": all_text.count("\u2014"),
        "en_dashes": all_text.count("\u2013"),
        "hyphens": all_text.count("-") - all_text.count("\u2014") - all_text.count("\u2013"),
        "open_parens": all_text.count("("),
        "close_parens": all_text.count(")"),
        "exclamation_marks": all_text.count("!"),
        "question_marks": all_text.count("?"),
        "ellipses": all_text.count("...") + all_text.count("\u2026"),
    }

    # ── Contraction detection ──
    # Unambiguous contraction patterns (not 's, which overlaps with possessives)
    unambiguous_patterns = [
        r"\b\w+n't\b",   # don't, can't, won't, isn't, aren't, doesn't, hasn't, wouldn't
        r"\b\w+'re\b",   # we're, they're, you're
        r"\b\w+'ve\b",   # I've, we've, they've, could've, should've, would've
        r"\b\w+'ll\b",   # I'll, we'll, they'll, he'll, she'll, it'll
        r"\b[Ii]'m\b",   # I'm
        r"\b\w+'d\b",    # I'd, we'd, they'd, he'd, she'd, it'd
    ]
    # 's is ambiguous — only count known contraction forms, not possessives
    known_s_contractions = {
        "it's", "that's", "he's", "she's", "what's", "there's",
        "here's", "where's", "who's", "how's", "let's",
        "everything's", "everyone's", "something's", "nothing's",
    }
    contractions_found = []
    for pattern in unambiguous_patterns:
        matches = re.findall(pattern, all_text, re.IGNORECASE)
        contractions_found.extend(matches)
    # Pass 2: 's — only count known contractions, skip possessives
    s_matches = re.findall(r"\b\w+'s\b", all_text, re.IGNORECASE)
    for match in s_matches:
        if match.lower() in known_s_contractions:
            contractions_found.append(match)
    metrics["contractions"] = {
        "total_count": len(contractions_found),
        "instances": dict(Counter(c.lower() for c in contractions_found).most_common()),
    }

    # ── Hyphenated compound modifiers ──
    compounds = re.findall(r'\b[a-zA-Z]+-[a-zA-Z]+\b', all_text)
    compounds = [c for c in compounds if len(c) > 3]
    metrics["hyphenated_compounds"] = dict(Counter(c.lower() for c in compounds).most_common(20))

    # ── Person/pronoun counts ──
    first_person_singular = len(re.findall(r'\bI\b', all_text))
    first_person_singular += len(re.findall(r'\b[Mm]y\b', all_text))
    first_person_plural = len(re.findall(r'\b[Ww]e\b', all_text))
    first_person_plural += len(re.findall(r'\b[Oo]ur\b', all_text))
    second_person = len(re.findall(r'\b[Yy]ou\b', all_text))
    second_person += len(re.findall(r'\b[Yy]our\b', all_text))

    metrics["person"] = {
        "first_singular_I_my": first_person_singular,
        "first_plural_we_our": first_person_plural,
        "second_you_your": second_person,
    }

    # ── Verb extraction (frequency-based, not POS-tagged) ──
    common_verbs = [
        "align", "aligns", "aligned", "aligning",
        "provide", "provides", "provided", "providing",
        "demonstrate", "demonstrates", "demonstrated", "demonstrating",
        "investigate", "investigates", "investigated", "investigating",
        "develop", "develops", "developed", "developing",
        "establish", "establishes", "established", "establishing",
        "create", "creates", "created", "creating",
        "build", "builds", "built", "building",
        "apply", "applies", "applied", "applying",
        "leverage", "leverages", "leveraged", "leveraging",
        "address", "addresses", "addressed", "addressing",
        "enable", "enables", "enabled", "enabling",
        "require", "requires", "required", "requiring",
        "support", "supports", "supported", "supporting",
        "contribute", "contributes", "contributed", "contributing",
        "integrate", "integrates", "integrated", "integrating",
        "connect", "connects", "connected", "connecting",
        "transform", "transforms", "transformed", "transforming",
        "shape", "shapes", "shaped", "shaping",
        "foster", "fosters", "fostered", "fostering",
        "characterize", "characterizes", "characterized", "characterizing",
        "use", "uses", "used", "using",
        "show", "shows", "showed", "showing",
        "include", "includes", "included", "including",
        "work", "works", "worked", "working",
        "lead", "leads", "led", "leading",
        "serve", "serves", "served", "serving",
        "teach", "teaches", "taught", "teaching",
        "drive", "drives", "drove", "driving",
        "remain", "remains", "remained", "remaining",
        "identify", "identifies", "identified", "identifying",
        "analyze", "analyzes", "analyzed", "analyzing",
        "manage", "manages", "managed", "managing",
        "predict", "predicts", "predicted", "predicting",
        "validate", "validates", "validated", "validating",
        "assess", "assesses", "assessed", "assessing",
        "evaluate", "evaluates", "evaluated", "evaluating",
        "secure", "secures", "secured", "securing",
        "translate", "translates", "translated", "translating",
        "understand", "understands", "understood", "understanding",
        "design", "designs", "designed", "designing",
    ]

    verb_lemmas = {}
    words_lower = [w.lower().strip(".,;:!?()[]\"'—–-") for w in all_words]
    for i in range(0, len(common_verbs), 4):
        lemma = common_verbs[i]
        forms = common_verbs[i:i+4]
        count = sum(words_lower.count(f) for f in forms)
        if count > 0:
            verb_lemmas[lemma] = count

    metrics["verb_frequency"] = dict(sorted(verb_lemmas.items(), key=lambda x: -x[1])[:25])

    # ── Paragraph detection ──
    # After preprocessing, text should have double newlines between paragraphs
    # (unwrap_lines() handles line-wrapped input). Just split on double newlines.
    all_paragraphs = []
    for s in samples:
        text = s["text"]
        paras = [p.strip() for p in re.split(r'\n\s*\n', text) if p.strip()]
        all_paragraphs.extend(paras)

    para_word_counts = [len(p.split()) for p in all_paragraphs]
    metrics["paragraph_count"] = len(all_paragraphs)
    metrics["paragraph_word_counts"] = para_word_counts

    # Flag if paragraph detection likely failed
    max_para_words = max(para_word_counts) if para_word_counts else 0
    total_words = metrics["total_words"]
    avg_para_words = total_words / max(len(all_paragraphs), 1)
    if max_para_words > 300 or (avg_para_words > 150 and total_words > 500):
        metrics["paragraph_warning"] = (
            f"Largest paragraph is {max_para_words} words — paragraph breaks were not "
            f"detected correctly in the input. Paragraph-level metrics are unreliable. "
            f"Determine paragraph structure directly from the raw writing samples."
        )

    # ── Oxford comma detection ──
    # Oxford: ", word, and" (comma before "and")
    oxford_present = len(re.findall(r',\s+\w+,\s+and\s+', all_text))
    # Non-oxford: ", word and" — the broader pattern also matches oxford cases,
    # so subtract oxford hits to get genuine non-oxford instances
    no_oxford = max(0, len(re.findall(r',\s+\w+\s+and\s+', all_text)) - oxford_present)
    metrics["oxford_comma"] = {
        "oxford_instances": oxford_present,
        "non_oxford_instances": no_oxford,
        "assessment": "consistently used" if oxford_present > 0 and no_oxford == 0
                      else "consistently absent" if oxford_present == 0 and no_oxford > 0
                      else "not enough lists to determine" if oxford_present == 0 and no_oxford == 0
                      else "mixed"
    }

    return metrics


# ─── HELPERS ─────────────────────────────────────────────────────────────────

def build_category_context(category, description=None):
    """Build category-specific instructions for the analysis prompts."""
    profile = CATEGORY_PROFILES.get(category)

    if profile:
        analyze = "\n".join(f"  - {item}" for item in profile["analyze"])
        skip = "\n".join(f"  - {item}" for item in profile["skip"])
        context = f"""CATEGORY: {category}

CATEGORY-SPECIFIC ANALYSIS FOCUS:
{analyze}

CATEGORY-SPECIFIC CONSTRAINTS:
{skip}"""
    elif description:
        context = f"""CATEGORY: Custom
CATEGORY DESCRIPTION: {description}

Derive which rules are relevant from this description. Do not impose constraints from standard categories."""
    else:
        context = f"""CATEGORY: {category}

No preset profile for this category. Derive all rules entirely from the writing samples with no category-imposed constraints."""

    if description and profile:
        context += f"\n\nADDITIONAL CONTEXT FROM USER: {description}"

    return context


def check_claude_cli():
    """Verify claude CLI is available."""
    if not shutil.which("claude"):
        print("ERROR: 'claude' command not found.")
        print("  Install Claude Code: https://docs.anthropic.com/en/docs/claude-code")
        print("  Or: npm install -g @anthropic-ai/claude-code")
        sys.exit(1)


def unwrap_lines(text):
    """Join line-wrapped text into continuous paragraphs.

    Line-wrapped text (from PDFs, terminal paste, etc.) has single newlines
    at ~80-100 char boundaries regardless of sentence structure. This joins
    those wrapped lines back into continuous text, preserving only blank-line
    paragraph breaks.

    If the text already has double newlines, those are preserved as paragraph
    boundaries and single newlines within each block are treated as line wraps.
    """
    # Split on blank lines (double+ newlines) to get paragraph blocks
    blocks = re.split(r'\n\s*\n', text)
    unwrapped_blocks = []
    for block in blocks:
        block = block.strip()
        if not block:
            continue
        # Replace single newlines with spaces (they're just line wraps)
        continuous = re.sub(r'\n', ' ', block)
        # Clean up multiple spaces
        continuous = re.sub(r'  +', ' ', continuous).strip()
        if continuous:
            unwrapped_blocks.append(continuous)
    return '\n\n'.join(unwrapped_blocks)


def preprocess_sample(text):
    """Strip non-body content. Returns (cleaned_text, removal_summary)."""
    lines = text.split('\n')
    processed = []
    signoff_countdown = 0
    references_countdown = 0
    acknowledgment_countdown = 0
    removed = {
        "salutations": [],
        "sign_offs": [],
        "letterhead_lines": [],
        "reference_lines": 0,
        "acknowledgment_lines": 0,
        "latex_commands": 0,
        "figure_captions": [],
    }

    # Pattern that signals a new document is starting (breaks out of any skip zone)
    _NEW_DOC_RE = re.compile(
        r'^(Dear\s|I am writing|RE:|Application for|To whom|'
        r'Hello[,\s]|Hi[,\s]|'
        r'\\section|\\chapter)',
        re.IGNORECASE,
    )

    for line in lines:
        stripped = line.strip()

        # Preserve paragraph breaks (but not inside skip zones)
        if not stripped:
            if references_countdown <= 0 and signoff_countdown <= 0 and acknowledgment_countdown <= 0:
                processed.append("")
            continue

        # --- Sign-off countdown zone ---
        if signoff_countdown > 0:
            # Check if a new document is starting
            if _NEW_DOC_RE.match(stripped):
                signoff_countdown = 0
                # Fall through to process this line normally
            else:
                signoff_countdown -= 1
                removed["sign_offs"].append(stripped)
                continue

        # --- References countdown zone ---
        if references_countdown > 0:
            # Check if a new document is starting
            if _NEW_DOC_RE.match(stripped):
                references_countdown = 0
                # Fall through to process this line normally
            else:
                references_countdown -= 1
                removed["reference_lines"] += 1
                continue

        # --- Acknowledgment countdown zone ---
        if acknowledgment_countdown > 0:
            # Resume at next section heading or new document
            if _NEW_DOC_RE.match(stripped) or \
               (re.match(r'^[A-Z]', stripped) and len(stripped.split()) <= 5 and not stripped.endswith('.')):
                acknowledgment_countdown = 0
                # Fall through to process this line
            else:
                acknowledgment_countdown -= 1
                removed["acknowledgment_lines"] += 1
                continue

        # Detect reference/bibliography section — skip up to 200 lines
        if re.match(r'^(References|Bibliography|Works Cited)\s*$', stripped, re.IGNORECASE) or \
           stripped.startswith("\\begin{thebibliography}"):
            references_countdown = 200
            removed["reference_lines"] += 1
            continue

        # Detect acknowledgments section — skip up to 50 lines
        if re.match(r'^(Acknowledgm?ents?)\s*$', stripped, re.IGNORECASE) or \
           re.match(r'^\\section\*?\{Acknowledgm?ents?\}', stripped):
            acknowledgment_countdown = 50
            continue

        # Detect sign-off — skip at most 5 lines after (name, title, contact)
        if re.match(r'^(Sincerely|Best regards|Thank you for (considering|your)|Regards|Best,|Cheers|Yours truly|Respectfully|Kind regards|Warm regards)', stripped, re.IGNORECASE):
            removed["sign_offs"].append(stripped)
            signoff_countdown = 5
            continue

        # Skip salutations
        if re.match(r'^(Dear\s|Hello[,\s]|Hi[,\s]|To whom)', stripped, re.IGNORECASE):
            removed["salutations"].append(stripped)
            continue

        # Skip letterhead/contact lines (short lines near top with email/phone/URL)
        if len(processed) < 10 and len(stripped.split()) <= 6:
            if re.search(r'[@|+\d{3}]|\.com|\.edu|\.org|linkedin|github|orcid', stripped, re.IGNORECASE):
                removed["letterhead_lines"].append(stripped)
                continue

        # Skip figure/table captions
        if re.match(r'^(Figure|Fig\.|Table|Supplementary Figure|Supplementary Table)\s*\d', stripped, re.IGNORECASE):
            removed["figure_captions"].append(stripped)
            continue

        # Skip pure LaTeX structural commands (no content to salvage)
        if re.match(r'^\\(documentclass|usepackage|begin\{document\}|end\{document\}|maketitle|newpage|geometry|setlength|pagestyle|fancyhead|fancyfoot|bibliographystyle|bibliography\{|title\{|author\{|date\{|begin\{(enumerate|itemize)\}|end\{(enumerate|itemize)\})', stripped):
            removed["latex_commands"] += 1
            continue

        # Strip LaTeX formatting commands but keep content inside
        stripped = re.sub(r'\\textbf\{([^}]*)\}', r'\1', stripped)
        stripped = re.sub(r'\\textit\{([^}]*)\}', r'\1', stripped)
        stripped = re.sub(r'\\emph\{([^}]*)\}', r'\1', stripped)
        stripped = re.sub(r'\\href\{[^}]*\}\{([^}]*)\}', r'\1', stripped)
        stripped = re.sub(r'\\url\{([^}]*)\}', r'\1', stripped)
        stripped = re.sub(r'\\section\*?\{([^}]*)\}', r'\1', stripped)
        stripped = re.sub(r'\\subsection\*?\{([^}]*)\}', r'\1', stripped)
        stripped = re.sub(r'\\subsubsection\*?\{([^}]*)\}', r'\1', stripped)
        stripped = re.sub(r'\\item\s*', '', stripped)
        stripped = re.sub(r'\\citep?\{[^}]*\}', '', stripped)
        stripped = re.sub(r'\\ref\{[^}]*\}', '', stripped)
        stripped = re.sub(r'\\label\{[^}]*\}', '', stripped)

        # Skip if line is now empty after stripping
        stripped = stripped.strip()
        if not stripped:
            continue

        processed.append(stripped)

    # Unwrap line-wrapped text into continuous paragraphs
    result = '\n'.join(processed)
    result = unwrap_lines(result)
    # Clean up excessive blank lines
    result = re.sub(r'\n{3,}', '\n\n', result)
    cleaned = result.strip()

    # Build summary
    original_words = len(text.split())
    cleaned_words = len(cleaned.split()) if cleaned else 0

    summary_parts = []
    if removed["salutations"]:
        summary_parts.append(f'{len(removed["salutations"])} salutation(s): {", ".join(repr(s) for s in removed["salutations"])}')
    if removed["sign_offs"]:
        summary_parts.append(f'{len(removed["sign_offs"])} sign-off line(s): {", ".join(repr(s) for s in removed["sign_offs"][:3])}')
    if removed["letterhead_lines"]:
        summary_parts.append(f'{len(removed["letterhead_lines"])} letterhead/contact line(s)')
    if removed["reference_lines"]:
        summary_parts.append(f'{removed["reference_lines"]} reference/bibliography line(s)')
    if removed["acknowledgment_lines"]:
        summary_parts.append(f'{removed["acknowledgment_lines"]} acknowledgment line(s)')
    if removed["latex_commands"]:
        summary_parts.append(f'{removed["latex_commands"]} LaTeX structural command(s)')
    if removed["figure_captions"]:
        summary_parts.append(f'{len(removed["figure_captions"])} figure/table caption(s)')

    summary = {
        "original_words": original_words,
        "cleaned_words": cleaned_words,
        "removed_words": original_words - cleaned_words,
        "details": summary_parts,
    }

    return cleaned, summary


def read_file(filepath):
    """Read text from .txt, .md, .tex, .pdf, or .docx files."""
    ext = filepath.suffix.lower()

    if ext in (".txt", ".md", ".tex", ".rst", ".text"):
        return filepath.read_text(encoding="utf-8", errors="replace").strip()

    elif ext == ".pdf":
        try:
            from pdfminer.high_level import extract_text as pdf_extract
            return pdf_extract(str(filepath)).strip()
        except ImportError:
            try:
                from PyPDF2 import PdfReader
                reader = PdfReader(str(filepath))
                return "\n".join(page.extract_text() or "" for page in reader.pages).strip()
            except ImportError:
                print(f"  WARNING: Skipping {filepath.name} — need pdfminer.six or PyPDF2")
                print(f"           pip install pdfminer.six")
                return ""

    elif ext == ".docx":
        try:
            from docx import Document
            doc = Document(str(filepath))
            return "\n".join(p.text for p in doc.paragraphs).strip()
        except ImportError:
            print(f"  WARNING: Skipping {filepath.name} — need python-docx")
            print(f"           pip install python-docx")
            return ""

    return ""


def load_samples(args):
    """Load writing samples from files, directory, or interactive input.
    Returns (samples, summaries) where summaries is a list of (label, summary_dict) tuples."""
    raw_samples = []

    if args.samples_dir:
        d = Path(args.samples_dir)
        if not d.is_dir():
            print(f"ERROR: Directory not found: {d}")
            sys.exit(1)
        exts = {".txt", ".md", ".tex", ".rst", ".text", ".pdf", ".docx"}
        for f in sorted(d.iterdir()):
            if f.suffix.lower() in exts and f.is_file():
                text = read_file(f)
                if text:
                    raw_samples.append({"label": f.name, "text": text})

    elif args.samples_file:
        for fp in args.samples_file:
            p = Path(fp)
            if not p.is_file():
                print(f"  WARNING: File not found, skipping: {p}")
                continue
            text = read_file(p)
            if text:
                raw_samples.append({"label": p.name, "text": text})

    elif args.interactive:
        print("\n--- Paste your writing samples below ---")
        print("--- Separate different samples with a line containing only three dashes: ---")
        print("--- Type END on a new line when you're done ---\n")
        lines = []
        while True:
            try:
                line = input()
                if line.strip() == "END":
                    break
                lines.append(line)
            except EOFError:
                break
        text = "\n".join(lines).strip()
        if text:
            chunks = re.split(r'\n\s*---\s*\n', text)
            for i, chunk in enumerate(chunks):
                chunk = chunk.strip()
                if chunk:
                    raw_samples.append({"label": f"sample-{i+1}", "text": chunk})

    if not raw_samples:
        print("ERROR: No writing samples loaded.")
        print("  Use --samples-dir, --samples-file, or --interactive")
        sys.exit(1)

    # Apply preprocessing
    samples = []
    summaries = []
    do_preprocess = not args.no_preprocess

    if do_preprocess:
        print("  Preprocessing: stripping headers, sign-offs, references, LaTeX commands")
        print("  (use --no-preprocess to skip)")

    for raw in raw_samples:
        if do_preprocess:
            cleaned, summary = preprocess_sample(raw["text"])
            summaries.append((raw["label"], summary))
            if cleaned:
                samples.append({"label": raw["label"], "text": cleaned})
                print(f"  Loaded: {raw['label']} ({summary['original_words']} → {summary['cleaned_words']} words)")
            else:
                print(f"  WARNING: {raw['label']} was empty after preprocessing, skipping")
        else:
            samples.append(raw)
            print(f"  Loaded: {raw['label']} ({len(raw['text'].split())} words)")

    if not samples:
        print("ERROR: No writing samples loaded (all empty after preprocessing?).")
        sys.exit(1)

    total_words = sum(len(s["text"].split()) for s in samples)
    print(f"\n  Total: {len(samples)} sample(s), {total_words} words")
    if total_words < 200:
        print("  WARNING: Less than 200 words. Results will be thin. Aim for 500+.")
    elif total_words < 500:
        print("  NOTE: Under 500 words. More text = sharper rules.")
    else:
        print("  Good volume for analysis.")

    return samples, summaries


def extract_block(text, start_tag, end_tag):
    """Extract content between delimiters."""
    pattern = re.escape(start_tag) + r"([\s\S]*?)" + re.escape(end_tag)
    match = re.search(pattern, text)
    return match.group(1).strip() if match else ""


def call_claude(prompt, stage_name):
    """Call claude -p. Uses your subscription — no API charges."""
    print(f"\n{'='*60}")
    print(f"  {stage_name}")
    print(f"{'='*60}")
    print(f"  Running... (typically 30-90 seconds)")
    start = time.time()

    try:
        result = subprocess.run(
            ["claude", "-p", prompt],
            capture_output=True,
            text=True,
            timeout=900,
        )
        elapsed = time.time() - start

        if result.returncode != 0:
            stderr = result.stderr.strip()
            print(f"  FAILED after {elapsed:.1f}s")
            if stderr:
                print(f"  Error: {stderr}")
            sys.exit(1)

        output = result.stdout.strip()
        print(f"  Completed in {elapsed:.1f}s ({len(output)} chars)")
        return output

    except subprocess.TimeoutExpired:
        print(f"  TIMEOUT after 15 minutes. Try shorter samples.")
        sys.exit(1)
    except Exception as e:
        print(f"  ERROR: {e}")
        sys.exit(1)


# ─── MAIN ────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(
        description="Voice Extractor — Extract your writing style into a bulletproof Claude prompt.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python voice_extractor.py --samples-dir ./my-writing/ --category "Academic Writing"
  python voice_extractor.py --samples-file letter.txt proposal.txt --category "Job Applications"
  python voice_extractor.py --interactive --category "General"
        """,
    )

    input_group = parser.add_mutually_exclusive_group(required=True)
    input_group.add_argument("--samples-dir", help="Directory of .txt/.md files with your writing")
    input_group.add_argument("--samples-file", nargs="+", help="One or more files with your writing")
    input_group.add_argument("--interactive", action="store_true", help="Paste samples interactively")

    parser.add_argument("--category", required=True,
                        help='Writing category, e.g., "Academic Writing", "Job Applications", "Professional Email"')
    parser.add_argument("--category-description", default=None,
                        help="Custom description of writing context when no preset fits. "
                             "E.g., 'Investor pitch narratives, persuasive but evidence-backed, we/our voice'")
    parser.add_argument("--output-dir", default="./voice-output",
                        help="Output directory (default: ./voice-output)")
    parser.add_argument("--no-preprocess", action="store_true",
                        help="Skip text preprocessing (keep headers, sign-offs, references, LaTeX commands)")

    args = parser.parse_args()
    check_claude_cli()

    print("\n╔══════════════════════════════════════╗")
    print("║        VOICE EXTRACTOR v2.0          ║")
    print("╚══════════════════════════════════════╝")
    print(f"\n  Category:  {args.category}")
    print(f"  Cost:      $0 (uses claude -p, your existing subscription)")

    # Load samples
    print("\n── Loading samples ──")
    samples, summaries = load_samples(args)

    samples_block = "\n\n".join(
        f"--- SAMPLE {i+1} ({s['label']}) ---\n{s['text']}"
        for i, s in enumerate(samples)
    )
    total_words = sum(len(s["text"].split()) for s in samples)

    # Build category context
    category_context = build_category_context(args.category, args.category_description)

    # Output dir
    out_dir = Path(args.output_dir)
    out_dir.mkdir(parents=True, exist_ok=True)

    # Save preprocessing report
    if not args.no_preprocess and summaries:
        report_lines = []
        for label, summary in summaries:
            report_lines.append(f"--- {label} ---")
            report_lines.append(f"  Original: {summary['original_words']} words")
            report_lines.append(f"  After preprocessing: {summary['cleaned_words']} words")
            report_lines.append(f"  Removed: {summary['removed_words']} words")
            if summary["details"]:
                for detail in summary["details"]:
                    report_lines.append(f"    - {detail}")
            else:
                report_lines.append(f"    (nothing removed)")
            report_lines.append("")
        (out_dir / "preprocessing-report.txt").write_text("\n".join(report_lines), encoding="utf-8")
        print(f"  Saved: preprocessing-report.txt")

    # Save processed input (what Claude will actually analyze)
    input_dump = "\n\n".join(
        f"--- SAMPLE {i+1} ({s['label']}) [{len(s['text'].split())} words] ---\n{s['text']}"
        for i, s in enumerate(samples)
    )
    (out_dir / "processed-input.txt").write_text(input_dump, encoding="utf-8")
    print(f"  Saved: processed-input.txt ({len(input_dump)} chars)")
    print(f"    ^ This is exactly what the tool sends to Claude for analysis")

    # ── Compute deterministic metrics (instant) ──
    print("\n── Computing metrics ──")
    metrics = compute_metrics(samples)
    metrics_summary = json.dumps(metrics, indent=2)
    (out_dir / "metrics.json").write_text(metrics_summary, encoding="utf-8")
    print(f"  Saved: metrics.json ({len(metrics_summary)} chars)")
    print(f"    ^ Automated counts: punctuation, vocabulary, verbs, pronouns")

    # ── Single Claude call: qualitative analysis + synthesis ──
    prompt = f"""{SYNTHESIS_SYSTEM}

---

{category_context}

## AUTOMATED METRICS (from Python — these are exact, trust them):
{metrics_summary}

## RAW WRITING SAMPLES (quote passages EXACTLY from these):
SAMPLES: {len(samples)} | WORDS: ~{total_words}

{samples_block}

Perform qualitative analysis on the samples, then synthesize automated metrics + your analysis + the samples into all three outputs (RULES with ranges, EXAMPLES with good/bad contrasts, SKILL.md). Every quantitative rule must use the automated metrics expressed as ranges. Every example must be an EXACT quote from the samples."""

    synthesis = call_claude(prompt, "ANALYSIS + SYNTHESIS")

    # ── Save outputs ──
    print(f"\n── Saving outputs to {out_dir}/ ──")
    (out_dir / "raw-synthesis.txt").write_text(synthesis, encoding="utf-8")

    rules = extract_block(synthesis, "===RULES_START===", "===RULES_END===")
    if rules:
        (out_dir / "rules.txt").write_text(rules, encoding="utf-8")
        print(f"  ✓ rules.txt ({len(rules)} chars)")
    else:
        print("  ✗ Rules block not found — check raw-synthesis.txt")

    examples = extract_block(synthesis, "===EXAMPLES_START===", "===EXAMPLES_END===")
    if examples:
        (out_dir / "examples.txt").write_text(examples, encoding="utf-8")
        print(f"  ✓ examples.txt ({len(examples)} chars)")
    else:
        print("  ✗ Examples block not found — check raw-synthesis.txt")

    skill = extract_block(synthesis, "===SKILL_START===", "===SKILL_END===")
    slug = re.sub(r"[^a-z0-9]+", "-", args.category.lower()).strip("-")
    if skill:
        skill_name = f"{slug}-voice.skill.md"
        (out_dir / skill_name).write_text(skill, encoding="utf-8")
        print(f"  ✓ {skill_name} ({len(skill)} chars)")
    else:
        print("  ✗ SKILL.md block not found — check raw-synthesis.txt")

    if rules and examples:
        combined = f"# VOICE STYLE: {args.category}\n\n## RULES\n\n{rules}\n\n## ANNOTATED EXAMPLES — STUDY THESE\n\n{examples}"
        (out_dir / "paste-ready-prompt.txt").write_text(combined, encoding="utf-8")
        print(f"  ✓ paste-ready-prompt.txt ({len(combined)} chars)")
        print(f"    ^ Paste this into Claude Settings → Profile → User Preferences")

    print(f"\n{'='*60}")
    print(f"  DONE")
    print(f"{'='*60}")
    print(f"\n  Output: {out_dir.resolve()}/")
    print(f"\n  How to use:")
    print(f"    1. Paste paste-ready-prompt.txt → Claude Settings → Profile → User Preferences")
    print(f"    2. OR copy {slug}-voice.skill.md to ~/.claude/skills/ (global)")
    print(f"    3. OR paste paste-ready-prompt.txt at the top of any conversation\n")


if __name__ == "__main__":
    main()
