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


# ─── STAGE 1 PROMPT ─────────────────────────────────────────────────────────

STAGE1_SYSTEM = """You are a forensic writing analyst performing QUANTITATIVE and QUALITATIVE stylometric analysis. Be exhaustive. Use ACTUAL COUNTS from the text — never estimate or approximate.

## QUANTITATIVE METRICS (count everything)

### Sentence Metrics
- Count every sentence. List each sentence's word count.
- Calculate: minimum, maximum, mean, median sentence length.
- Distribution: what % are short (1-8 words), medium (9-20), long (21-35), very long (36+)?
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

Group into: SENTENCE RULES, PUNCTUATION RULES, PARAGRAPH RULES, VOCABULARY RULES, TONE RULES, STRUCTURE RULES.

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

CRITICAL: Every rule traces to actual analysis numbers. Every example is an EXACT QUOTE. Every generic_ai_version shows the contrast clearly."""


# ─── HELPERS ─────────────────────────────────────────────────────────────────

def check_claude_cli():
    """Verify claude CLI is available."""
    if not shutil.which("claude"):
        print("ERROR: 'claude' command not found.")
        print("  Install Claude Code: https://docs.anthropic.com/en/docs/claude-code")
        print("  Or: npm install -g @anthropic-ai/claude-code")
        sys.exit(1)


def load_samples(args):
    """Load writing samples from files, directory, or interactive input."""
    samples = []

    if args.samples_dir:
        d = Path(args.samples_dir)
        if not d.is_dir():
            print(f"ERROR: Directory not found: {d}")
            sys.exit(1)
        exts = {".txt", ".md", ".tex", ".rst", ".text"}
        for f in sorted(d.iterdir()):
            if f.suffix.lower() in exts and f.is_file():
                text = f.read_text(encoding="utf-8", errors="replace").strip()
                if text:
                    samples.append({"label": f.name, "text": text})
                    print(f"  Loaded: {f.name} ({len(text.split())} words)")

    elif args.samples_file:
        for fp in args.samples_file:
            p = Path(fp)
            if not p.is_file():
                print(f"  WARNING: File not found, skipping: {p}")
                continue
            text = p.read_text(encoding="utf-8", errors="replace").strip()
            if text:
                samples.append({"label": p.name, "text": text})
                print(f"  Loaded: {p.name} ({len(text.split())} words)")

    elif args.interactive:
        print("\n--- Paste your writing samples below ---")
        print("--- Type END on a new line when done ---\n")
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
            samples.append({"label": "interactive-input", "text": text})

    if not samples:
        print("ERROR: No writing samples loaded.")
        print("  Use --samples-dir, --samples-file, or --interactive")
        sys.exit(1)

    total_words = sum(len(s["text"].split()) for s in samples)
    print(f"\n  Total: {len(samples)} sample(s), {total_words} words")
    if total_words < 200:
        print("  WARNING: Less than 200 words. Results will be thin. Aim for 500+.")
    elif total_words < 500:
        print("  NOTE: Under 500 words. More text = sharper rules.")
    else:
        print("  Good volume for analysis.")

    return samples


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
            ["claude", "-p", prompt, "--no-input"],
            capture_output=True,
            text=True,
            timeout=300,
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
        print(f"  TIMEOUT after 5 minutes. Try shorter samples or --single-stage.")
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
    parser.add_argument("--output-dir", default="./voice-output",
                        help="Output directory (default: ./voice-output)")
    parser.add_argument("--single-stage", action="store_true",
                        help="Single call instead of two stages (faster, slightly less thorough)")

    args = parser.parse_args()
    check_claude_cli()

    print("\n╔══════════════════════════════════════╗")
    print("║        VOICE EXTRACTOR v2.0          ║")
    print("╚══════════════════════════════════════╝")
    print(f"\n  Category:  {args.category}")
    print(f"  Cost:      $0 (uses claude -p, your existing subscription)")

    # Load samples
    print("\n── Loading samples ──")
    samples = load_samples(args)

    samples_block = "\n\n".join(
        f"--- SAMPLE {i+1} ({s['label']}) ---\n{s['text']}"
        for i, s in enumerate(samples)
    )
    total_words = sum(len(s["text"].split()) for s in samples)

    # Output dir
    out_dir = Path(args.output_dir)
    out_dir.mkdir(parents=True, exist_ok=True)

    if args.single_stage:
        prompt = f"""{STAGE1_SYSTEM}

---

After completing the analysis, ALSO produce these synthesis outputs:

{STAGE2_SYSTEM}

---

WRITING CATEGORY: {args.category}
SAMPLES: {len(samples)} | WORDS: ~{total_words}

{samples_block}

Perform forensic analysis with actual counts, then synthesize all three outputs."""

        result = call_claude(prompt, "COMBINED ANALYSIS + SYNTHESIS")
        synthesis = result
    else:
        # Stage 1
        s1_prompt = f"""{STAGE1_SYSTEM}

---

WRITING CATEGORY: {args.category}
SAMPLES: {len(samples)} | WORDS: ~{total_words}

{samples_block}

Perform complete forensic analysis. Every metric must use actual counts."""

        analysis = call_claude(s1_prompt, "STAGE 1: FORENSIC ANALYSIS")
        (out_dir / "raw-analysis.txt").write_text(analysis, encoding="utf-8")
        print(f"  Saved: raw-analysis.txt")

        # Stage 2
        s2_prompt = f"""{STAGE2_SYSTEM}

---

WRITING CATEGORY: {args.category}

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
