"""Phase 4: Generate SKILL.md and analysis report from synthesis + metrics.

New SKILL.md format:
- Quantitative targets as markdown table (not bullets)
- 6 qualitative sections with inline DO NOT rules
- Word inventory (USE / NEVER USE)
- Revision guidance
- 3 calibration examples (verbatim excerpts)
- Final check checklist
"""

import json
import re
from pathlib import Path


# The 6 dimensions — same names in analysis, synthesis, and generation
DIMENSIONS = {
    "sentence_architecture_and_rhythm": "Sentence Architecture & Rhythm",
    "voice_register_and_stance": "Voice & Stance",
    "argument_and_logic_flow": "Argument & Logic Flow",
    "paragraph_organization": "Paragraph Organization",
    "rhetorical_devices": "Rhetorical Devices",
    "openings_closings_and_genre": "Openings, Closings & Genre",
}


def _format_quant_table(metrics: dict) -> str:
    """Format quantitative metrics as a markdown table.

    Selects the most important metrics and formats with target + range.
    """
    lines = []
    lines.append("| Metric | Target | Range |")
    lines.append("|--------|--------|-------|")

    def _row(label: str, key: str, fmt: str = ".1f", unit: str = "",
             range_fn=None):
        val = metrics.get(key)
        if val is None:
            return None
        if isinstance(val, dict):
            return None
        if val < 0:
            return None  # no data marker

        target = f"{val:{fmt}}{unit}"
        if range_fn:
            lo, hi = range_fn(val)
            range_str = f"{lo:{fmt}}–{hi:{fmt}}{unit}"
        else:
            range_str = ""
        return f"| {label} | {target} | {range_str} |"

    # Sentence structure
    stddev = metrics.get("sent_length_stddev", 0)
    r = _row("Avg sentence length", "sent_avg_length", ".0f", " words",
             lambda v: (max(3, v - 2 * stddev), v + 2 * stddev))
    if r: lines.append(r)

    r = _row("Sentence length stddev", "sent_length_stddev", ".1f")
    if r: lines.append(r)

    r = _row("Short sentences (≤10w)", "sent_pct_short", ".0f", "%")
    if r: lines.append(r)

    r = _row("Medium sentences (11-25w)", "sent_pct_medium", ".0f", "%")
    if r: lines.append(r)

    r = _row("Long sentences (>25w)", "sent_pct_long", ".0f", "%")
    if r: lines.append(r)

    # Word-level
    r = _row("Avg word length", "word_avg_length", ".1f", " chars")
    if r: lines.append(r)

    r = _row("Monosyllable words", "word_pct_monosyllable", ".0f", "%")
    if r: lines.append(r)

    r = _row("Contractions per 100w", "contraction_rate", ".1f")
    if r: lines.append(r)

    # Punctuation
    r = _row("Commas per sentence", "punct_commas_per_sent", ".1f")
    if r: lines.append(r)

    r = _row("Semicolons per sentence", "punct_semicolons_per_sent", ".2f")
    if r and metrics.get("punct_semicolons_per_sent", 0) > 0.01: lines.append(r)

    r = _row("Dashes per 100w", "punct_dashes_per_100w", ".1f")
    if r and metrics.get("punct_dashes_per_100w", 0) > 0.05: lines.append(r)

    r = _row("Parentheses per 100w", "punct_parens_per_100w", ".1f")
    if r and metrics.get("punct_parens_per_100w", 0) > 0.05: lines.append(r)

    r = _row("Questions per 100w", "punct_questions_per_100w", ".1f")
    if r and metrics.get("punct_questions_per_100w", 0) > 0.05: lines.append(r)

    r = _row("Exclamations per 100w", "punct_exclamations_per_100w", ".1f")
    if r and metrics.get("punct_exclamations_per_100w", 0) > 0.05: lines.append(r)

    # Colons (punctuation, conditional)
    r = _row("Colons per 100w", "punct_colons_per_100w", ".1f")
    if r and metrics.get("punct_colons_per_100w", 0) > 0.05: lines.append(r)

    # Sentence openers
    r = _row("Conjunction-start sentences", "open_conjunction_pct", ".0f", "%")
    if r: lines.append(r)

    r = _row("Pronoun-start sentences", "open_pronoun_pct", ".0f", "%")
    if r: lines.append(r)

    r = _row("Article-start sentences (The/A/An)", "open_article_pct", ".0f", "%")
    if r: lines.append(r)

    r = _row("Subordinate-start sentences (If/When/Although)", "open_subordinate_pct", ".0f", "%")
    if r: lines.append(r)

    r = _row("Adverb-start sentences", "open_adverb_pct", ".0f", "%")
    if r: lines.append(r)

    # Paragraph structure
    r = _row("Avg sentences per paragraph", "para_avg_sentences", ".1f")
    if r: lines.append(r)

    r = _row("Single-sentence paragraphs", "para_pct_single_sent", ".0f", "%")
    if r: lines.append(r)

    r = _row("Polysyndeton sentences", "polysyndeton_pct", ".0f", "%")
    if r: lines.append(r)

    # Function words
    r = _row("Articles per 1000w", "fw_articles", ".1f")
    if r: lines.append(r)

    r = _row("Hedging words per 1000w", "fw_hedges", ".1f")
    if r and metrics.get("fw_hedges", 0) > 0.1: lines.append(r)

    return "\n".join(lines)


def _has_number(rule: str) -> bool:
    """Check if a rule contains numeric claims that should be filtered."""
    return bool(re.search(r'\d+%|\d+\.\d|\d+ words|\d+ per |\d+–\d+|\d+\s*sentences', rule))


# Patterns that psychologically encourage short/punchy sentences or fight
# paragraph-break targets.  These override the structural mandate section,
# so we strip them out regardless of which dimension they appear in.
_STRUCTURAL_CONFLICT_RE = re.compile(
    r'(?i)'
    r'(?:short(?:er)?\b.*(?:sentence|declarative|punch|emphasis|fragment|impact))'
    r'|(?:(?:sentence|fragment).*\b(?:punch|impact|emphasis|staccato|rhythm\s*break))'
    r'|(?:fragment.*(?:sparingly|standalone|rhetorical|punch|mic drop))'
    r'|(?:(?:insert|drop in|add)\s+a\s+short)'
    r'|(?:one[- ]?(?:word|sentence)\s+paragraph.*(?:emphasis|punch|impact))'
    r'|(?:shorter\s.*(?:declarative|sentence))'
    r'|(?:replace\s.*with\s.*shorter)'
    r'|(?:break\b.*\brhythm\b.*\bshort)'
)


def _conflicts_with_structure(rule: str) -> bool:
    """Return True if a qualitative rule would fight the structural targets."""
    return bool(_STRUCTURAL_CONFLICT_RE.search(rule))


def _build_skill_body(
    synthesis: dict,
    metrics: dict,
    vocab_profile: dict,
    excerpts: list[str],
) -> str:
    """Build the SKILL.md body from synthesis + computed data."""
    lines = []

    # One-line description (register-space, not personality)
    desc = synthesis.get("one_line_description", "")
    if desc:
        lines.append(f"> {desc}")
        lines.append("")

    # How to use
    lines.append("## How to Use")
    lines.append("- **Generate**: Write new text following these rules exactly.")
    lines.append("- **Revise**: Transform existing text to match this voice using the rules below.")
    lines.append("")

    # ===================================================================
    # Structural rules — directive prose + table
    # ===================================================================
    pct_short = metrics.get("sent_pct_short", 0)
    pct_medium = metrics.get("sent_pct_medium", 0)
    pct_long = metrics.get("sent_pct_long", 0)
    avg_sents = metrics.get("para_avg_sentences", 0)
    pct_single = metrics.get("para_pct_single_sent", 0)
    commas = metrics.get("punct_commas_per_sent", 0)
    open_conj = metrics.get("open_conjunction_pct", 0)
    open_pron = metrics.get("open_pronoun_pct", 0)
    open_art = metrics.get("open_article_pct", 0)
    open_sub = metrics.get("open_subordinate_pct", 0)
    open_adv = metrics.get("open_adverb_pct", 0)
    colons = metrics.get("punct_colons_per_100w", 0)

    hedges = metrics.get("fw_hedges", 0)
    articles = metrics.get("fw_articles", 0)

    lines.append("## Structural Rules (NON-NEGOTIABLE)")
    lines.append("")
    lines.append("These rules override everything else. If any qualitative guidance below conflicts, these numbers win.")
    lines.append("")
    lines.append(f"**Sentence length distribution** — Most sentences (~{pct_medium:.0f}%) must be medium-length (11-25 words). Only ~{pct_short:.0f}% should be short (≤10 words). About ~{pct_long:.0f}% should be long (>25 words). DO NOT default to short punchy sentences — the backbone is medium-length.")
    lines.append(f"- Self-check: at most 1 in 4 sentences should be ≤10 words. If you've written 3 short sentences in a row, the next MUST be 20+ words.")
    lines.append(f"- REQUIRED: ~{pct_long:.0f}% of sentences must be >25 words. In a 30-sentence piece, at least 4-5 must be long clause-heavy sentences with commas, subordinate clauses (\"which...\", \"even though...\", \"because...\").")
    lines.append("")
    lines.append(f"**Paragraph structure** — HARD RULE: average {avg_sents:.1f} sentences per paragraph.")
    lines.append(f"- After drafting, scan every paragraph. If any has 4+ sentences, split it.")
    lines.append(f"- MANDATORY: {pct_single:.0f}% of paragraphs must be a single standalone sentence (one sentence, then a blank line). In a 20-paragraph piece, at least 6-7 should be standalone single sentences. This is a distinctive signature of this voice.")
    lines.append(f"- Self-editing rule: take every 3rd paragraph and make it a single sentence. If a paragraph has a good opening or closing sentence, pull it out as its own paragraph.")
    lines.append(f"- Example structure: 2-sentence para → standalone sentence → 3-sentence para → standalone sentence → 2-sentence para")
    lines.append("")
    lines.append(f"**Punctuation density** — Target {commas:.1f} commas per sentence. Medium and long sentences need commas for subordinate clauses, appositives, and lists.")
    lines.append("")
    if colons > 0.1:
        lines.append(f"**Colons** — MANDATORY: Include exactly 1 colon in every piece to introduce an elaboration. Pattern: \"The reason is simple: X\". You MUST have at least one colon — check before finishing.")
        lines.append("")
    lines.append("**Sentence openers** — Vary how sentences begin:")
    lines.append(f"- ~{open_conj:.0f}% conjunction-start (And/But/So/Yet)")
    lines.append(f"- ~{open_pron:.0f}% pronoun-start (I/You/They/It)")
    lines.append(f"- ~{open_art:.0f}% article-start (The/A/An)")
    lines.append(f"- ~{open_sub:.0f}% subordinate-clause start (If/When/Although)")
    lines.append(f"- ~{open_adv:.0f}% adverb-start (Often/Usually/Sometimes)")
    lines.append("- DO NOT start most sentences with \"The\" or \"I\" — mix openers actively.")
    lines.append(f"- HARD CAP on article-start: No more than ~{open_art:.0f}% of sentences may start with The/A/An. Count yours — if more than 1 in 10, rewrite some.")
    lines.append(f"- HARD CAP on pronoun-start: No more than ~{open_pron:.0f}% of sentences may start with I/You/They/It/He/She/We.")
    lines.append(f"- Replacement templates: Instead of \"The X is Y\", try: \"When X happens…\" / \"If you look at X…\" / \"Perhaps X…\" / \"Still, X…\"")
    lines.append(f"- Required minimums: At least 1 in 12 sentences must start with If/When/While/Although/Because. At least 1 in 30 with an adverb (Perhaps/Still/Often/Sometimes/Clearly).")
    lines.append("")
    lines.append(f"**Hedging language** — Use \"if\", \"would\", \"could\", \"might\", \"perhaps\" roughly every 60-70 words. These reflect genuine intellectual uncertainty, not weakness.")
    lines.append("")
    intensifiers = metrics.get("fw_intensifiers", 0)
    negation = metrics.get("fw_negation", 0)
    lines.append(f"**Intensifiers** — Use words like \"very\", \"really\", \"quite\", \"rather\", \"so\", \"certainly\" at a rate of ~{intensifiers:.1f} per 100 words. These add emphasis and conversational energy.")
    lines.append("")
    lines.append(f"**Negation** — Use negation words (not, don't, doesn't, won't, can't, never, no) at a rate of ~{negation:.1f} per 100 words. Negation is natural in argumentative/explanatory writing — don't avoid it.")
    lines.append("")
    lines.append(f"**Article density** — This author uses fewer articles (the/a/an) than typical. Omit articles where the sentence still reads naturally: \"people\" not \"the people\", \"startups\" not \"the startups\".")
    lines.append("")
    lines.append("### Full Metrics")
    lines.append("")
    lines.append(_format_quant_table(metrics))
    lines.append("")

    # ===================================================================
    # 6 qualitative dimensions
    # ===================================================================
    for key, label in DIMENSIONS.items():
        data = synthesis.get(key, {})
        if not data:
            continue

        rules = data.get("rules", [])
        do_not = data.get("do_not", [])

        # Filter rules that contain numbers or conflict with structural targets
        rules = [r for r in rules if not _has_number(r) and not _conflicts_with_structure(r)]
        do_not = [d for d in do_not if not _conflicts_with_structure(d)]

        # Cap: keep the most actionable (shortest, most specific)
        rules = sorted(rules, key=len)[:3]
        do_not = sorted(do_not, key=len)[:2]

        if not rules and not do_not:
            continue

        lines.append(f"## {label}")
        for r in rules:
            lines.append(f"- {r}")
        for d in do_not:
            if not d.upper().startswith("NEVER") and not d.upper().startswith("DO NOT"):
                d = f"DO NOT: {d}"
            lines.append(f"- {d}")

        lines.append("")

    # ===================================================================
    # Word inventory
    # ===================================================================
    sig = synthesis.get("signature_phrases", {})
    use_phrases = sig.get("use", []) if sig else []
    never_use_phrases = sig.get("never_use", []) if sig else []
    absent_words = vocab_profile.get("absent_common_words", [])
    hedges = vocab_profile.get("hedging_words", {})
    fillers = vocab_profile.get("filler_words", {})

    lines.append("## Word Inventory")

    # USE section
    use_items = []
    if use_phrases:
        use_items.append(f"**Signature phrases**: {', '.join(use_phrases)}")
    if hedges:
        hedge_list = list(hedges.keys())[:10]
        use_items.append(f"**Hedging words**: {', '.join(hedge_list)}")
    if fillers:
        filler_list = list(fillers.keys())[:10]
        use_items.append(f"**Discourse markers**: {', '.join(filler_list)}")
    # Top bigrams as transitions
    top_bigrams = vocab_profile.get("top_20_bigrams", [])
    if top_bigrams:
        bigram_list = [bg for bg, _ in top_bigrams[:10]]
        use_items.append(f"**Common phrases**: {', '.join(bigram_list)}")

    if use_items:
        lines.append("### USE")
        for item in use_items:
            lines.append(f"- {item}")
        lines.append("")

    # NEVER USE section
    never_items = []
    if never_use_phrases:
        never_items.append(f"**Banned phrases**: {', '.join(never_use_phrases)}")
    if absent_words:
        # Show first 20 absent common words
        absent_display = absent_words[:20]
        never_items.append(f"**Absent common words** (author never uses): {', '.join(absent_display)}")

    if never_items:
        lines.append("### NEVER USE")
        for item in never_items:
            lines.append(f"- {item}")
        lines.append("")

    # ===================================================================
    # Revision guidance — filtered for structural conflicts
    # ===================================================================
    revision = synthesis.get("revision_guidance", [])
    if revision:
        revision = [r for r in revision if not _has_number(r) and not _conflicts_with_structure(r)]

        # Add a balancing revision rule based on actual metrics
        if pct_long > 5:
            revision.append(
                f"When you find a run of short sentences, combine some into longer compound structures — about {pct_long:.0f}% of sentences should be >25 words."
            )

        lines.append("## Revision Guidance")
        lines.append("")
        lines.append("When transforming existing text to match this voice:")
        lines.append("")
        for r in revision:
            lines.append(f"- {r}")
        lines.append("")

    # ===================================================================
    # Calibration examples (verbatim excerpts)
    # ===================================================================
    if excerpts:
        lines.append("## Calibration Examples")
        lines.append("")
        lines.append("These are verbatim passages from the author's writing. Use them as")
        lines.append("reference for structural patterns (paragraph breaks, sentence length")
        lines.append("variation, rhythm) as well as tone and feel — your output should")
        lines.append("read like these passages.")
        lines.append("")
        for i, excerpt in enumerate(excerpts, 1):
            lines.append(f"### Example {i}")
            lines.append("")
            # Blockquote each line
            for line in excerpt.split("\n"):
                lines.append(f"> {line}")
            lines.append("")

    # ===================================================================
    # Final check checklist — targets failure modes
    # ===================================================================
    lines.append("## Final Check")
    lines.append("")
    lines.append("Before finishing, re-read your text and count:")
    lines.append("")
    lines.append(f"- [ ] Are most sentences 11-25 words? Short (≤10w) should be only ~{pct_short:.0f}%, not the majority.")
    lines.append(f"- [ ] Do ~{pct_single:.0f}% of paragraphs consist of a single sentence? If zero paragraphs are standalone, break some out.")
    lines.append(f"- [ ] Is average paragraph ~{avg_sents:.1f} sentences? If most are 4+ sentences, split them.")
    lines.append(f"- [ ] Commas present in most medium/long sentences (~{commas:.1f} per sentence)?")
    lines.append("- [ ] Sentence length varies — mix of short, medium, and long?")
    lines.append(f"- [ ] Sentence openers varied? No more than ~{open_art:.0f}% starting with articles, ~{open_pron:.0f}% with pronouns.")
    if colons > 0.1:
        lines.append(f"- [ ] Colons used? Target ~{colons:.1f} per 100 words.")
    lines.append("- [ ] No banned words from NEVER USE list?")
    if excerpts:
        lines.append("- [ ] Voice matches the calibration examples above?")
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

> Write in the voice and style described below. Follow every rule precisely — the quantitative targets are measured from the author's actual text.

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
