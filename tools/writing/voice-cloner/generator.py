"""Phase 4: Generate SKILL.md and analysis report from synthesis + metrics.

SKILL.md format (examples-first, rules-second, metrics-as-guardrails):
- Voice rules (qualitative, from synthesis) — primary signal
- Signature phrases (USE / NEVER USE)
- Calibration examples (verbatim excerpts) — strongest style signal
- Guardrails (compact metrics table) — self-check after drafting
"""

import json
import re
from pathlib import Path


# The 6 dimensions — same names in analysis, synthesis, and generation
DIMENSIONS = {
    "sentence_architecture_and_rhythm": "Sentence Architecture",
    "voice_register_and_stance": "Voice & Stance",
    "argument_and_logic_flow": "Argument & Logic",
    "paragraph_organization": "Paragraph Organization",
    "rhetorical_devices": "Rhetorical Devices",
    "openings_closings_and_genre": "Openings, Closings & Genre",
}


def _has_number(rule: str) -> bool:
    """Check if a rule contains numeric claims that should be filtered."""
    return bool(re.search(r'\d+%|\d+\.\d|\d+ words|\d+ per |\d+–\d+|\d+\s*sentences', rule))


def _format_guardrails_table(metrics: dict) -> str:
    """Format a compact guardrails table (max ~10 rows).

    Only includes metrics Claude can realistically self-check after drafting.
    """
    lines = []
    lines.append("| Metric | Target |")
    lines.append("|--------|--------|")

    def _row(label: str, val, fmt: str = ".1f", unit: str = ""):
        if val is None or (isinstance(val, (int, float)) and val < 0):
            return None
        return f"| {label} | {val:{fmt}}{unit} |"

    # Sentence length distribution
    r = _row("Avg sentence length", metrics.get("sent_avg_length"), ".0f", " words")
    if r:
        lines.append(r)
    r = _row("Short sentences (≤10w)", metrics.get("sent_pct_short"), ".0f", "%")
    if r:
        lines.append(r)
    r = _row("Medium sentences (11-25w)", metrics.get("sent_pct_medium"), ".0f", "%")
    if r:
        lines.append(r)
    r = _row("Long sentences (>25w)", metrics.get("sent_pct_long"), ".0f", "%")
    if r:
        lines.append(r)

    # Punctuation
    r = _row("Commas per sentence", metrics.get("punct_commas_per_sent"), ".1f")
    if r:
        lines.append(r)

    colons = metrics.get("punct_colons_per_100w", 0)
    if colons > 0.1:
        lines.append(f"| Colons per 100w | {colons:.1f} |")

    # Contractions
    contraction = metrics.get("contraction_rate")
    if contraction is not None and contraction >= 0:
        lines.append(f"| Contractions per 100w | {contraction:.1f} |")

    # Sentence openers (the two LLMs consistently overshoot)
    r = _row("Pronoun-start %", metrics.get("open_pronoun_pct"), ".0f", "%")
    if r:
        lines.append(r)
    r = _row("Article-start % (The/A/An)", metrics.get("open_article_pct"), ".0f", "%")
    if r:
        lines.append(r)

    return "\n".join(lines)


def _build_skill_body(
    synthesis: dict,
    metrics: dict,
    vocab_profile: dict,
    excerpts: list[str],
) -> str:
    """Build the SKILL.md body: voice rules first, examples second, guardrails last."""
    lines = []

    # One-line description
    desc = synthesis.get("one_line_description", "")
    if desc:
        lines.append(f"> {desc}")
        lines.append("")

    # =================================================================
    # Voice Rules — qualitative, from synthesis (PRIMARY signal)
    # =================================================================
    lines.append("## Voice Rules")
    lines.append("")

    for key, label in DIMENSIONS.items():
        data = synthesis.get(key, {})
        if not data:
            continue

        rules = data.get("rules", [])
        do_not = data.get("do_not", [])

        # Only filter rules with specific numeric claims
        rules = [r for r in rules if not _has_number(r)]
        do_not = [d for d in do_not if not _has_number(d)]

        # Keep up to 4 rules + 2 do_not (sorted by length, higher cap than before)
        rules = sorted(rules, key=len)[:4]
        do_not = sorted(do_not, key=len)[:2]

        if not rules and not do_not:
            continue

        lines.append(f"### {label}")
        for r in rules:
            lines.append(f"- {r}")
        for d in do_not:
            if not d.upper().startswith("NEVER") and not d.upper().startswith("DO NOT"):
                d = f"DO NOT: {d}"
            lines.append(f"- {d}")
        lines.append("")

    # =================================================================
    # Signature Phrases — flat lists
    # =================================================================
    sig = synthesis.get("signature_phrases", {})
    use_phrases = sig.get("use", []) if sig else []
    never_use_phrases = sig.get("never_use", []) if sig else []
    absent_words = vocab_profile.get("absent_common_words", [])

    if use_phrases or never_use_phrases or absent_words:
        lines.append("## Signature Phrases")
        lines.append("")
        if use_phrases:
            lines.append(f"- **USE**: {', '.join(use_phrases)}")
        never_all = list(never_use_phrases)
        if absent_words:
            never_all.extend(absent_words[:15])
        if never_all:
            lines.append(f"- **NEVER USE**: {', '.join(never_all)}")
        lines.append("")

    # =================================================================
    # Calibration Examples — strongest style signal
    # =================================================================
    if excerpts:
        lines.append("## Calibration Examples")
        lines.append("")
        lines.append("Verbatim passages from the author. Your output should read like these.")
        lines.append("")
        for i, excerpt in enumerate(excerpts, 1):
            lines.append(f"### Example {i}")
            lines.append("")
            for line in excerpt.split("\n"):
                lines.append(f"> {line}")
            lines.append("")

    # =================================================================
    # Guardrails — compact metrics for self-check AFTER drafting
    # =================================================================
    lines.append("## Guardrails")
    lines.append("")
    lines.append("These numbers are measured from the author's corpus. Use them to self-check after drafting, not as generation targets.")
    lines.append("")
    lines.append(_format_guardrails_table(metrics))
    lines.append("")

    return "\n".join(lines)


def generate_skill(
    synthesis: dict,
    metrics: dict,
    vocab_profile: dict,
    excerpts: list[str],
    output_dir: str | Path,
    name: str,
) -> Path:
    """Generate a SKILL.md file.

    Args:
        synthesis: Phase 3 synthesis dict.
        metrics: Averaged corpus metrics from compute_metrics_multi.
        vocab_profile: From compute_vocabulary_profile.
        excerpts: List of calibration excerpt texts.
        output_dir: Directory to write output into.
        name: Skill name (kebab-case).

    Returns:
        Path to the generated SKILL.md file.
    """
    output_dir = Path(output_dir) / name
    output_dir.mkdir(parents=True, exist_ok=True)

    body = _build_skill_body(synthesis, metrics, vocab_profile, excerpts)
    author = synthesis.get("author_name", "Unknown")
    sample_count = synthesis.get("sample_count", "?")
    genre = synthesis.get("detected_genre", "general")

    genre_desc = f" for {genre}" if genre and genre != "other" else ""
    frontmatter = f"""---
name: {name}
type: skill
version: "1.0.0"
description: "Write in the voice of {author}{genre_desc}, derived from {sample_count} writing samples."
tags:
  - voice
  - writing-style
  - tone
  - {genre}
generated_by: voice-cloner-v2
---"""

    content = f"""{frontmatter}

# {name}

> Write in the voice and style described below. Follow the voice rules, study the examples, then self-check against the guardrails.

{body}"""

    skill_path = output_dir / "SKILL.md"
    skill_path.write_text(content, encoding="utf-8")
    return skill_path


def generate_report(
    synthesis: dict,
    analyses: list[dict],
    metrics: dict,
    vocab_profile: dict,
    output_dir: str | Path,
    name: str,
) -> Path:
    """Generate a detailed analysis report.

    Args:
        synthesis: Phase 3 synthesis dict.
        analyses: List of Phase 1 per-sample analysis dicts.
        metrics: Averaged corpus metrics.
        vocab_profile: From compute_vocabulary_profile.
        output_dir: Directory to write output into.
        name: Skill name (kebab-case).

    Returns:
        Path to the generated report file.
    """
    output_dir = Path(output_dir) / name
    output_dir.mkdir(parents=True, exist_ok=True)

    lines = []
    author = synthesis.get("author_name", "Unknown")
    sample_count = synthesis.get("sample_count", len(analyses))

    lines.append(f"# Voice Analysis Report: {author}")
    lines.append("")
    lines.append(f"**Samples analyzed:** {sample_count}")
    lines.append(f"**Skill name:** `{name}`")
    lines.append(f"**Generator:** voice-cloner v2")
    lines.append("")

    # One-line description
    desc = synthesis.get("one_line_description", "")
    if desc:
        lines.append(f"**Voice:** {desc}")
        lines.append("")

    # Averaged metrics
    lines.append("## Corpus Metrics (averaged)")
    lines.append("")
    lines.append("```")
    from metrics import format_metrics_table
    lines.append(format_metrics_table(metrics))
    lines.append("```")
    lines.append("")

    # Vocabulary profile
    lines.append("## Vocabulary Profile")
    lines.append("")
    lines.append(f"**Register score:** {vocab_profile.get('register_score', '?')} (0=casual, 1=formal)")
    lines.append("")

    top_words = vocab_profile.get("top_50_words", [])
    if top_words:
        lines.append("**Top 20 words:**")
        for word, rate in top_words[:20]:
            lines.append(f"- {word}: {rate}/1000")
        lines.append("")

    absent = vocab_profile.get("absent_common_words", [])
    if absent:
        lines.append(f"**Absent common words ({len(absent)}):** {', '.join(absent[:30])}")
        lines.append("")

    # Per-sample analyses
    lines.append("## Per-Sample Analyses")
    lines.append("")

    for analysis in analyses:
        sample_id = analysis.get("sample_id", "unknown")
        word_count = analysis.get("word_count", "?")
        # Strip _metrics before dumping
        clean = {k: v for k, v in analysis.items() if not k.startswith("_")}
        lines.append(f"### {sample_id} ({word_count} words)")
        lines.append("")
        lines.append("```json")
        lines.append(json.dumps(clean, indent=2))
        lines.append("```")
        lines.append("")

    # Raw synthesis
    lines.append("## Raw Synthesis Data")
    lines.append("")
    lines.append("```json")
    lines.append(json.dumps(synthesis, indent=2))
    lines.append("```")

    report_path = output_dir / "analysis-report.md"
    report_path.write_text("\n".join(lines), encoding="utf-8")
    return report_path
