# Research Notes: Writing Style Replication with LLMs

Research conducted before building the tool. These findings directly shaped the architecture.

## Key Finding #1: Rules alone don't work

**Source:** Anders Ohrn, "How To Make LLMs Write Stylishly" (Towards AI, Jan 2026)

Ohrn tried to build detailed style descriptions of Bertrand Russell's writing — "a textbook titled 'How Russell Writes.'" He found that "downstream applications were unable to convert the description into text reconstructions in the described style — not anywhere near what few-shot learning could."

He also tried building a cognitive model of the author's mind — when they use analogies, when they use short sentences. That also underperformed vs. simply having examples in the context window.

**What DID work:** A hybrid approach — a "style analyzer" that extracted tagged segments with teaching notes, stored in a segments database, then used as few-shot examples via retrieval. The actual samples in context translated into skill better than any description.

**Implication for our tool:** Rules are necessary but not sufficient. The annotated examples are the critical layer.

## Key Finding #2: Structure preservation matters

**Source:** Abubakar, "Replicate an Author's Writing Style Using Prompt Engineering" (DEV.to, April 2025)

Tested with Steven Pressfield's writing across Claude and GPT-4o:

- Flattened samples (original writing collapsed into neutral paragraphs) FAILED to preserve voice. Both models produced technically correct but emotionally flat output.
- Unaltered original samples with structure intact → significantly better replication.
- "Structure matters — rhythm is part of a writer's voice."
- Claude's Custom Styles feature was "inspiration-driven, not author-driven" — it abstracts tone and theme rather than sentence-level mimicry.

**Implication:** When we select exemplar passages, we must quote them EXACTLY — no paraphrasing, no restructuring. The rhythm, line breaks, and punctuation ARE the style.

## Key Finding #3: Good + bad contrasts teach better

**Source:** Multiple prompt engineering sources, plus the CyberArk Engineering blog on style blending

Providing both "write like this" AND "don't write like this" gives the model clearer decision boundaries. The contrast version should be recognizably "AI" — correct but lifeless.

**Implication:** Every annotated example includes a `generic_ai_version` rewrite showing what flat AI output looks like.

## Key Finding #4: Stylometry features that matter

**Source:** Stylometry literature (Wikipedia overview, Computational Stylometry papers, Programming Historian tutorial)

The field of stylometry (quantitative study of writing style) has identified these as the most distinguishing features:

- **Function word frequency** — the, of, and, in, to, etc. (writer "invariant")
- **Sentence length distribution** — not just average, but the shape of the distribution
- **Punctuation patterns** — comma frequency, semicolon usage, dash preference
- **Vocabulary diversity** — type-token ratio
- **Passive vs. active voice ratio**

Key insight from a classification study: "The highest classification accuracy is obtained when using the combination of ALL stylometric features" (lexical + punctuation + phraseology together).

**Implication:** Stage 1 must measure ALL of these dimensions, not just the obvious ones.

## Key Finding #5: Few-shot > zero-shot > description

**Source:** Multiple (Relevance AI docs, LangChain tutorial, the DEV.to experiment)

Effectiveness ranking for style replication:
1. Few-shot with actual samples in context (best)
2. Zero-shot with known author name ("write like Pressfield")
3. Detailed style description (worst of the three)

The gap between #1 and #3 is significant. Having even 2-3 real passages in the prompt outperforms pages of rules.

**Implication:** The paste-ready-prompt.txt must include the annotated examples, not just rules. The "Copy Rules + Examples" combined output is the primary deliverable.

## Existing Products / Tools

### Writer.com (commercial, enterprise)
- Two dedicated LLMs: "voice extraction" model + "voice generation" model
- Upload samples → builds voice profile → applies to all output
- Most sophisticated commercial solution
- Enterprise pricing

### YourVoiceProfile.com ($20)
- Survey + sample analysis → markdown document
- Drop into Claude/ChatGPT
- Simple but reportedly effective for general content

### Claude Custom Styles (built-in, free)
- Upload writing sample → Claude generates a style
- "Abstracts tone and theme rather than sentence-level mimicry"
- Good for brand voice, not precise enough for author replication

### DIY prompt approaches (free)
- CyberArk blog method: paste samples → ask LLM to extract style description → save and reuse
- Works but produces vague rules ("conversational tone," "varied structures")

### Anti-slop-writing (GitHub, free)
- System prompt that eliminates known AI writing tells
- Focuses on what NOT to do, not on replicating a specific voice
- Complementary to our tool, not a replacement

## What Our Tool Does Differently

1. Quantitative forensic analysis (actual counts, not vibes)
2. Three-layer output (rules + annotated examples + self-check)
3. Good/bad contrast examples
4. Self-check rubric for verification
5. Multiple output formats (paste-ready, SKILL.md, raw analysis)
6. Runs locally via claude -p, no API key needed
