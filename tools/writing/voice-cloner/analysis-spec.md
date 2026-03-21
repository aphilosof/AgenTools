# Voice Analysis Specification v2

This document defines the analysis framework used by the voice-cloner tool. It is read at runtime and passed to the Claude API. Do not move or rename this file.

---

## Phase 1: Per-Sample Analysis

You are analyzing a writing sample to extract the author's voice. Your goal is to produce **concrete, actionable directives** that another writer (or AI) could follow to replicate this style.

### CRITICAL RULES — read before analyzing

1. **NO NUMBERS.** Do not count anything. Do not estimate percentages, averages, frequencies, or ratios. All quantitative data is provided to you as `<measured_metrics>` — treat those as read-only context. Your job is ONLY to describe qualitative patterns, choices, and preferences.
2. **DIRECTIVES, not descriptions.** Every rule must be something a writer can act on. Bad: "The author uses compound sentences." Good: "Build long sentences by chaining clauses with commas and coordinating conjunctions."
3. **DO and DO NOT.** For each dimension, state what to do AND what to never do. At least 2 anti-patterns per dimension.
4. **EVIDENCE.** Quote 1-3 short verbatim excerpts per dimension to illustrate the pattern.
5. **N/A is fine.** If a dimension doesn't apply to this genre, write "N/A — not applicable to this genre."

### The 6 Dimensions

#### 1. sentence_architecture_and_rhythm
How sentences are built and how they flow together. Focus on:
- Dominant sentence structures (simple, compound, complex, compound-complex)
- Dominant sentence length range and how it shapes the default reading tempo
- How the author varies sentence length — what triggers a longer or shorter sentence
- Clause-chaining preferences (coordinating, subordinating, participial)
- Parallel structure habits

IMPORTANT: Sentence length distribution is measured by code. Describe the qualitative CHARACTER of the rhythm and STRUCTURAL patterns (clause chaining, sentence shapes), but do NOT write rules about using more short sentences, fragments, or "punchy" brevity — those frequencies are numbers controlled elsewhere.

The `<measured_metrics>` block contains exact sentence length data. Do NOT restate those numbers — instead describe the *feel* and *pattern* of the rhythm.

#### 2. voice_register_and_stance
The author's relationship with the reader and subject. Focus on:
- Person (I/we/you/impersonal) and how it shifts
- Tone (authoritative, tentative, irreverent, earnest, sardonic, warm, clinical)
- Distance from reader (intimate, collegial, professorial, detached)
- Confidence signaling: how certainty vs. uncertainty is expressed
- Humor style if present (dry, self-deprecating, absurdist, none)
- Contraction patterns (when used, when avoided)

The `<measured_metrics>` block contains contraction rate and pronoun frequencies. Do NOT restate those — describe the qualitative pattern.

#### 3. argument_and_logic_flow
How the author constructs and connects ideas. Focus on:
- How claims are introduced (bold assertion, question, anecdote, data, hypothesis)
- Evidence patterns (personal experience, citations, analogies, examples, thought experiments)
- How counterarguments or limitations are handled (preemptive, dismissed, steel-manned, acknowledged)
- Logical flow (linear, recursive, dialectical, associative, problem-solution)
- Hedging patterns: specific hedge phrases used and when

This dimension is purely qualitative — no metrics are provided for it.

#### 4. paragraph_organization
How paragraphs are structured internally and connect to each other. Focus on:
- Opening patterns (topic sentence, hook, continuation, question, data/result)
- Closing patterns (conclusion, cliffhanger, pivot, trailing thought, forward reference)
- Transition style between paragraphs (explicit connectives, implicit, abrupt)
- How ideas within a paragraph are sequenced

IMPORTANT: Paragraph length and single-sentence paragraph frequency are measured by code. Describe how ideas are organized WITHIN paragraphs and how paragraphs CONNECT, but do NOT write rules about making paragraphs shorter or using more standalone sentences.

The `<measured_metrics>` block contains paragraph length data. Describe the organizational pattern, not the numbers.

#### 5. rhetorical_devices
The author's figurative and persuasive toolkit. Focus on:
- Dominant devices (metaphor, analogy, repetition, rhetorical questions, lists, antithesis, parallel structure)
- Type of analogies preferred (everyday, scientific, literary, pop culture, cross-domain)
- Direct address or imperatives ("consider", "note that", "imagine")
- Repetition strategies (anaphora, epistrophe, deliberate word reuse vs. synonym variation)

The `<measured_metrics>` block contains question/exclamation rates. Describe usage patterns, not frequencies.

#### 6. openings_closings_and_genre
How pieces begin and end, plus genre-specific patterns. Focus on:
- Opening technique (thesis, anecdote, question, provocation, scene-setting, in medias res)
- First-sentence patterns and how context is established
- Closing technique (summary, call to action, open question, callback, future-looking, abrupt)
- Whether endings mirror openings
- Genre conventions followed and deliberately broken
- Formatting patterns (headers, lists, emphasis, parentheticals, em dashes)

This dimension is purely qualitative — no metrics are provided for it.

### Phase 1 Output Schema

Return a JSON object with exactly this structure:

```json
{
  "sample_id": "<filename>",
  "word_count": "<number>",
  "detected_genre": "<scientific_paper|business_document|blog_post|essay|fiction|technical_docs|other>",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "<directive about sentence construction>",
      "<directive about rhythm pattern>"
    ],
    "do_not": [
      "<anti-pattern>",
      "<anti-pattern>"
    ],
    "evidence": ["<quoted excerpt>"]
  },
  "voice_register_and_stance": {
    "rules": [
      "<directive about voice and register>"
    ],
    "do_not": [
      "<anti-pattern>",
      "<anti-pattern>"
    ],
    "evidence": ["<quoted excerpt>"]
  },
  "argument_and_logic_flow": {
    "rules": [
      "<directive about argument construction>"
    ],
    "do_not": [
      "<anti-pattern>",
      "<anti-pattern>"
    ],
    "evidence": ["<quoted excerpt>"]
  },
  "paragraph_organization": {
    "rules": [
      "<directive about paragraph structure>"
    ],
    "do_not": [
      "<anti-pattern>",
      "<anti-pattern>"
    ],
    "evidence": ["<quoted excerpt>"]
  },
  "rhetorical_devices": {
    "rules": [
      "<directive about rhetorical device usage>"
    ],
    "do_not": [
      "<anti-pattern>",
      "<anti-pattern>"
    ],
    "evidence": ["<quoted excerpt>"]
  },
  "openings_closings_and_genre": {
    "rules": [
      "<directive about opening/closing patterns>"
    ],
    "do_not": [
      "<anti-pattern>",
      "<anti-pattern>"
    ],
    "evidence": ["<quoted excerpt>"]
  }
}
```

---

## Phase 2: Cross-Sample Synthesis

You are given per-sample analyses of multiple writing samples by the same author. Your job is to produce a **unified style guide for another AI** that will generate text in this author's voice.

### CRITICAL RULES — read before synthesizing

1. **ABSOLUTELY NO NUMBERS.** Do not include any counts, percentages, averages, ranges, or numeric estimates in your rules. Quantitative targets are computed separately by code and injected automatically. Your rules describe WHAT to do qualitatively, not HOW MUCH. Bad: "Start 60% of sentences with a pronoun." Good: "Start many sentences with a subject pronoun (I/He/She/They)." Bad: "Average sentence: 18 words." Good: "Alternate long compound-complex sentences with short emphatic declarations."
2. **DIRECTIVES, not descriptions.** Every rule must be a concrete instruction a writer can follow.
3. **DO and DO NOT.** For each dimension, include both positive rules and anti-patterns (things to NEVER do). The anti-patterns are critical — they prevent caricature.
4. **80% threshold.** A rule is included only if the pattern appears in ≥80% of samples. Variable patterns become conditional rules.
5. **One line per rule.** No multi-sentence explanations.
6. **Word inventories.** Include specific words and phrases the author uses — and words they never use.
7. **Same dimension names.** Use the exact same 6 dimension names as Phase 1.

### Phase 2 Output Schema

Return a JSON object with exactly this structure. Use the SAME 6 dimension names:

```json
{
  "author_name": "<name if identifiable, otherwise 'Unknown'>",
  "sample_count": "<number>",
  "detected_genre": "<dominant genre>",
  "one_line_description": "<register-space descriptor, e.g. 'informal, involved, explicit — conversational authority with technical precision'>",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "<qualitative directive — NO NUMBERS>"
    ],
    "do_not": [
      "<anti-pattern — thing to NEVER do>"
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "<qualitative directive — NO NUMBERS>"
    ],
    "do_not": [
      "<anti-pattern>"
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "<qualitative directive — NO NUMBERS>"
    ],
    "do_not": [
      "<anti-pattern>"
    ]
  },
  "paragraph_organization": {
    "rules": [
      "<qualitative directive — NO NUMBERS>"
    ],
    "do_not": [
      "<anti-pattern>"
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "<qualitative directive — NO NUMBERS>"
    ],
    "do_not": [
      "<anti-pattern>"
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "<qualitative directive — NO NUMBERS>"
    ],
    "do_not": [
      "<anti-pattern>"
    ]
  },
  "signature_phrases": {
    "use": ["<phrases/words the author frequently uses>"],
    "never_use": ["<phrases/words alien to the author's voice>"]
  },
  "revision_guidance": [
    "<transformation rule for revising existing text to match this voice, e.g. 'Replace furthermore with but'>",
    "<e.g. 'Break any sentence longer than the author's typical maximum'>",
    "<e.g. 'Convert passive constructions to active where possible'>"
  ]
}
```
