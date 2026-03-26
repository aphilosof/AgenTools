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
import os
import sys
import subprocess
import time
import re
import shutil
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


# ─── STAGE 1 PROMPT ─────────────────────────────────────────────────────────

STAGE1_SYSTEM = """You are a forensic writing analyst performing QUANTITATIVE and QUALITATIVE stylometric analysis. Be exhaustive. Use ACTUAL COUNTS from the text — never estimate or approximate.

## QUANTITATIVE METRICS (count everything)

### Sentence Metrics
- Count every sentence. List each sentence's word count.
- Calculate: minimum, maximum, mean, median sentence length.
- Distribution: what % are short (1-8 words), medium (9-20), long (21-35), very long (36+)?
- Clause nesting: for the 5 longest sentences, count the levels of embedded clauses (e.g., a relative clause inside a participial phrase inside a main clause = 3 levels). Report the maximum and typical nesting depth. Note whether density comes from stacked information or from syntactic recursion.
- Sentence openers breakdown: how many start with subject-first, adverbial/prepositional phrase, conjunction (And/But/So/Yet), participial phrase, question, imperative, transition word? Give counts AND percentages.

### Punctuation Inventory
- Count EVERY instance of: commas, semicolons, colons, em dashes, hyphens, parentheses (pairs), ellipses, exclamation marks, question marks.
- Calculate per-sentence averages for commas, em dashes, parentheses.
- Oxford comma: present or absent?
- Any comma splices?

### Paragraph Metrics
- Count sentences per paragraph for EVERY paragraph.
- Calculate: min, max, mean paragraph length (in sentences).
- Single-sentence paragraphs: how many? Where positioned?
- Paragraph opening patterns (assertion, question, transition, anecdote, data) with counts.
- Paragraph closing patterns (summary, declaration, open question, transition) with counts.

### Vocabulary Profile
- Count unique words vs total words (type-token ratio).
- List the 15 most frequent content words (excluding articles/prepositions/conjunctions).
- List any words or phrases that appear 3+ times.
- Latinate vs Germanic word preference with examples FROM the text.
- EVERY contraction found. Count contractions vs opportunities where contraction was avoided.
- All jargon or domain-specific terms.
- Hedging language instances ("perhaps," "somewhat," "might," "tends to," etc.).
- Intensifier instances ("very," "extremely," "clearly," "absolutely," etc.).

#### Verb Register
- List the 20 most frequent verbs in the text (excluding "is/are/was/were/be/been/being/have/has/had").
- For each verb, note: the verb itself, count, and one example sentence where it appears.
- Identify the author's PREFERRED verbs for common actions. For example: does the author write "use" or "leverage" or "employ"? "Show" or "demonstrate" or "reveal"? "Fix" or "address" or "resolve"? List each pair: [generic verb] → [author's actual verb] with count.
- Flag any verbs that appear 0 times but might be expected for the domain (e.g., if a science writer never uses "facilitate" or "utilize," that is a signal).

### Voice & Person
- First person (I/we/my/our): total count, usage pattern.
- Second person (you/your): total count, usage pattern.
- Passive voice: count instances, LIST each one.
- Active voice dominance: approximate %.

## QUALITATIVE ANALYSIS

### Tone & Register
- Formality spectrum (1-10, with justification).
- Authoritative vs tentative.
- Emotional register: detached, measured, passionate, urgent, dry, warm?
- Humor or irony: present? Type? Frequency?
- Directness: gets to point immediately or builds up?

### Rhetorical Patterns
- Argument structure (claim-then-evidence, evidence-then-claim, narrative, hybrid?)
- Analogies/metaphors — list EVERY instance.
- How examples are introduced.
- Repetition as device.
- How qualification/nuance is handled.
- Transitions between ideas (explicit connectors vs implicit logical flow).

### Distinctive Quirks
- Anything idiosyncratic or signature.
- Patterns that would be LOST if a generic AI rewrote this.
- What makes this voice recognizable?

## EXEMPLAR SELECTION

Select 4-6 passages (1-4 sentences each) most characteristic of this voice. For each:
1. Quote EXACTLY as written.
2. Teaching note: what makes it characteristic (specific words, punctuation, structure, rhythm).
3. Style feature tags.

Format each as:
===EXEMPLAR_N===
PASSAGE: "[exact quote]"
TEACHING_NOTE: [annotation]
TAGS: [tags]
===END_EXEMPLAR_N===

Be forensic. Every claim backed by actual counts."""


# ─── STAGE 2 PROMPT ─────────────────────────────────────────────────────────

STAGE2_SYSTEM = """You are a prompt engineer specializing in writing style replication. You receive a forensic analysis and original samples.

Synthesize into THREE outputs:

## OUTPUT 1: RULES + SELF-CHECK (===RULES_START=== / ===RULES_END===)

HARD, NUMBERED, VERIFIABLE rules. Not vague — specific and measurable.
BAD: "Write conversationally" GOOD: "Average sentence length: 14-20 words. No sentence exceeds 35. Use em dashes for asides, never parentheses."
BAD verb rule: "Use Latinate vocabulary: 'leverage' not 'use,' 'demonstrate' not 'show.'" GOOD verb rule: "Verb register (from samples): 'leverage' (4 occurrences) not 'use,' 'demonstrate' (3 occurrences) not 'show,' 'address' (5 occurrences) not 'fix.' Do NOT substitute verbs the author never uses — if a verb does not appear in the samples, do not recommend it."
BAD: "Use credential-stack sentences in every paragraph" GOOD: "Use credential-stack sentences (40-57 words, comma-separated participial phrases) in opening and qualification paragraphs. Do not use them in personal narrative or values paragraphs."
BAD: "Use specific language" GOOD: "Never evaluate — specify. Replace 'some of the most extreme environments' with 'methane seeps and deep-sea sediments.' Replace 'significant experience' with '15+ expeditions over 7 years.' If you cannot name it or number it, cut the adjective."

Group into: SENTENCE RULES, PUNCTUATION RULES, PARAGRAPH RULES, VOCABULARY RULES (including a VERB REGISTER sub-section with per-verb evidence), TONE RULES, STRUCTURE RULES.

Then SELF-CHECK RUBRIC: numbered yes/no checklist Claude must verify before outputting.

## OUTPUT 2: ANNOTATED EXAMPLES (===EXAMPLES_START=== / ===EXAMPLES_END===)

Most critical component. Select 4-6 strongest passages from the ORIGINAL samples. For EACH:

<example>
<label>[short label]</label>
<passage>[EXACT quote — zero modifications]</passage>
<why_this_works>[Forensic annotation referencing rule numbers. Point to exact words, punctuation, structure, rhythm.]</why_this_works>
<generic_ai_version>[Same content rewritten as flat generic AI. Correct but lifeless. Shows what NOT to do.]</generic_ai_version>
</example>

## OUTPUT 3: SKILL.md (===SKILL_START=== / ===SKILL_END===)

Complete self-contained SKILL.md:
---
name: [category-slug]-voice-style
description: [one line about what this does and when to use it]
---
# Voice Style: [Category]
## How to Use This Skill
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

### Vocabulary rules must include clarity constraints and a Claude-ism blacklist
Every vocabulary rule must include a clarity constraint. Dense ≠ baroque. If the author's vocabulary is Latinate, the rule must also include a BLACKLIST of Claude-isms that sound similar but are NOT in the author's actual vocabulary. Scan the samples and ONLY include words the author ACTUALLY USES. Common Claude-isms to check against the samples (EXCLUDE unless found verbatim): "wherein," "thereof," "exquisitely," "renders," "obligate," "aforementioned," "pertaining to," "in the context of," "it is important to note that," "it should be noted," "underscores," "facilitates," "encompasses," "paradigm." If a word is not in the samples, it goes on the blacklist.

### Verb guidance must be evidence-based, not blacklist-style
The word blacklist above is for FILLER WORDS and CLAUDE-ISMS — phrases Claude inserts that no human would write. Verb guidance is DIFFERENT. Do NOT blacklist common verbs like "use," "show," "include" — the author may use them sometimes. Instead, generate a VERB REGISTER table showing the author's PREFERRED verbs with occurrence counts from the analysis. Format: "Prefer '[author's verb]' (N occurrences) over '[generic verb]' when describing [context]." If the analysis shows the author uses BOTH "leverage" and "use," say so — do not pretend one is forbidden. The goal is frequency-weighted guidance, not absolute prohibition.

### Every positive rule needs a corresponding ANTI-RULE
For every positive rule, consider what Claude is likely to do wrong when following it, and generate a corresponding ANTI-RULE (prefix with "ANTI-RULE:"). Examples:
- If the rule says "pack multiple ideas into sentences" → ANTI-RULE: "Never nest more than 2 levels of clauses. Density comes from information packed into a simple structure, not from syntactic recursion. If a sentence requires re-reading to parse its structure, it has too many nested clauses."
- If the rule says "use Latinate vocabulary" → ANTI-RULE: "Every sentence must be understandable on first read. No word should call attention to itself as unusually formal. If you wouldn't encounter the word in a Nature or Science paper, don't use it."
- If the rule says "use parentheses for X" → ANTI-RULE: "Never put content in parentheses that carries the main argument. Parenthetical content must be supplementary — removable without losing the sentence's core meaning."

### Mandatory first-read clarity rule
Always generate this rule regardless of the writing category: "MANDATORY: Every sentence must be parseable on first read. Complexity comes from the IDEAS packed into a sentence, not from syntactic nesting or vocabulary obscurity. If a reader needs to re-read a sentence to understand its grammatical structure, rewrite it. The test: cover everything after the main verb — can you identify the subject and verb instantly? If not, simplify the structure."

### Information-dense sentence rules must specify CONSTRUCTION METHOD
When generating rules about information-dense sentences (credential stacks, evidence packing, multi-part claims), specify the CONSTRUCTION METHOD the author uses, not just the frequency. Analyze HOW the author packs information: comma-separated participial phrases ("With X, combined with Y, I am...")? Em-dash insertions? "Both X and Y while Z" constructions? Colon-then-list? The construction method matters as much as the frequency. Generate an anti-rule specifying which packing constructions are NOT in the author's samples.

### Recurring sentence patterns must be scoped to PARAGRAPH TYPES
When generating rules about recurring sentence patterns (credential stacks, topic sentences, evidence sentences), scope them to the PARAGRAPH TYPES where they actually appear. Not every paragraph serves the same function. If the author uses credential stacks in opening and qualification paragraphs but not in personal narrative or values paragraphs, say so. Never write a rule like "at least 1 credential stack per paragraph" if the pattern only applies to certain paragraph types.

### Anti-editorializing rule
Always generate an ANTI-EDITORIALIZING rule. Check the samples: does the author use superlative-adjacent phrases ("most important," "most extreme," "truly remarkable") or let specifics speak without evaluative overlay? If the author relies on naming things and giving numbers instead of evaluating them, generate: "Never evaluate — specify. Replace superlative phrases with concrete details. Instead of calling something extreme, name it. Instead of calling experience significant, quantify it."

### Genre cliché list
Generate a GENRE CLICHÉ list separate from the Claude-ism blacklist. Check the samples against common clichés of the writing category. For job applications: "next generation," "hit the ground running," "passionate about," "unique opportunity," "proven track record," "leverage my skills," "uniquely positioned." For academic writing: "paradigm shift," "gap in the literature," "sheds light on," "paves the way." For grant proposals: "transformative," "cutting-edge," "novel approach," "interdisciplinary synergy." If the author avoids genre clichés and uses specific language instead, generate a rule enforcing that.

### Institutional language — distinguish adoption from buzzwords
When generating rules about institutional language, distinguish two types: (a) INSTITUTIONAL VOCABULARY ADOPTION — using the target institution's specific program names, frameworks, and terminology. This is good and should be encouraged. (b) INSTITUTIONAL BUZZWORDS — generic policy language that appears everywhere ("broadening participation," "inclusive excellence," "transformative impact"). Check the samples: does the author use these generic terms or express the same ideas through concrete actions and stories? Generate rules accordingly.

### Unsupported philosophical claims
Check whether the author makes standalone philosophical declarations ("X and Y are inseparable," "education is fundamentally about Z"). If the author does NOT — if every assertion is backed by evidence in the same paragraph — generate: "Never make an unsupported philosophical claim. Every assertion needs specific evidence in the same paragraph: a number, a name, a concrete experience, or a citation. If you cannot immediately support a claim, rewrite it as a transition to evidence."

CRITICAL: Every rule traces to actual analysis numbers. Every example is an EXACT QUOTE. Every generic_ai_version shows the contrast clearly."""


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

    # Clean up multiple blank lines
    result = '\n'.join(processed)
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
        print(f"  TIMEOUT after 15 minutes. Try shorter samples or --single-stage.")
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
    parser.add_argument("--single-stage", action="store_true",
                        help="Single API call instead of two stages. Faster but may be less thorough. "
                             "Auto-enabled for inputs over 3000 words unless --two-stage is set.")
    parser.add_argument("--two-stage", action="store_true",
                        help="Force two-stage pipeline even on large inputs (may be slow)")
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

    # Auto-fallback to single-stage for large inputs
    auto_single_stage = False
    if not args.single_stage and not args.two_stage and total_words > 3000:
        print(f"\n  NOTE: {total_words} words is a large input.")
        print(f"  Auto-switching to single-stage mode to avoid timeout.")
        print(f"  (Use --two-stage to force two-stage mode)\n")
        auto_single_stage = True

    use_single_stage = args.single_stage or auto_single_stage

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

    if use_single_stage:
        prompt = f"""{STAGE1_SYSTEM}

---

After completing the analysis, ALSO produce these synthesis outputs:

{STAGE2_SYSTEM}

---

{category_context}
SAMPLES: {len(samples)} | WORDS: ~{total_words}

{samples_block}

Perform forensic analysis with actual counts, then synthesize all three outputs."""

        result = call_claude(prompt, "COMBINED ANALYSIS + SYNTHESIS")
        synthesis = result
    else:
        # Stage 1
        s1_prompt = f"""{STAGE1_SYSTEM}

---

{category_context}
SAMPLES: {len(samples)} | WORDS: ~{total_words}

{samples_block}

Perform complete forensic analysis. Every metric must use actual counts."""

        analysis = call_claude(s1_prompt, "STAGE 1: FORENSIC ANALYSIS")
        (out_dir / "raw-analysis.txt").write_text(analysis, encoding="utf-8")
        print(f"  Saved: raw-analysis.txt")

        # Stage 2
        s2_prompt = f"""{STAGE2_SYSTEM}

---

{category_context}

## FORENSIC ANALYSIS RESULTS:
{analysis}

## ORIGINAL WRITING SAMPLES (quote EXACTLY from these):
{samples_block}

Synthesize into all three outputs. Rules use real numbers. Examples are EXACT QUOTES with generic AI contrast."""

        synthesis = call_claude(s2_prompt, "STAGE 2: SYNTHESIS")

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
