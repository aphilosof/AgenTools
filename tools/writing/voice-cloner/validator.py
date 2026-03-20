"""Phase 5: Self-validation — generate test text and compare metrics.

Generates test passages using the SKILL.md, computes metrics, and compares
against the author's measured targets. Reports deviations.
"""

import json
import math
import statistics
from pathlib import Path

from llm import call_claude
from metrics import compute_metrics, compute_metrics_multi, FEATURE_WEIGHTS

# Default test topics — diverse enough to test style transfer
_TEST_TOPICS = [
    "Write about a person walking through a city at dawn, noticing small details.",
    "Write about why a common belief in your field is wrong, and what the evidence actually shows.",
    "Write about a moment when you realized something you'd been doing for years was completely wrong.",
    "Write about the difference between what people say they value and what they actually do.",
    "Write about a place that changed you, and why you can never go back the same way.",
    "Write about an idea that seems obvious now but was radical when someone first proposed it.",
]

CV_THRESHOLD = 50   # drop features with coefficient of variation > 50%
DEVIATION_THRESHOLD = 0.40  # flag features with >40% deviation


def _stable_features(per_sample_metrics: list[dict]) -> list[str]:
    """Return features that are stable (CV ≤ threshold) across training samples."""
    stable = []
    for f in sorted(FEATURE_WEIGHTS.keys()):
        vals = [m.get(f, 0) for m in per_sample_metrics]
        mean = sum(vals) / len(vals) if vals else 0
        if mean < 0.01:
            continue  # skip near-zero features
        std = statistics.stdev(vals) if len(vals) > 1 else 0
        cv = (std / mean) * 100
        if cv <= CV_THRESHOLD:
            stable.append(f)
    return stable


def validate(
    skill_path: str | Path,
    target_metrics: dict,
    per_sample_metrics: list[dict],
    model: str | None = None,
    n_samples: int = 5,
) -> dict:
    """Generate test text with SKILL.md and compare metrics.

    Args:
        skill_path: Path to SKILL.md.
        target_metrics: Corpus-average metrics (from compute_metrics_multi).
        per_sample_metrics: Per-sample metrics list (for stability analysis).
        model: Optional model name.
        n_samples: Number of test passages to generate.

    Returns:
        Validation report dict with deviations and pass/fail.
    """
    skill_path = Path(skill_path)
    skill_content = skill_path.read_text(encoding="utf-8")

    # Determine stable features
    stable = _stable_features(per_sample_metrics)

    # Generate test passages
    generated_texts = []
    topics = _TEST_TOPICS[:n_samples]

    # Build data-driven structural hints from target metrics
    t_pct_short = target_metrics.get("sent_pct_short", 0)
    t_pct_long = target_metrics.get("sent_pct_long", 0)
    t_pct_single = target_metrics.get("para_pct_single_sent", 0)
    t_avg_sents = target_metrics.get("para_avg_sentences", 0)
    t_open_art = target_metrics.get("open_article_pct", 0)
    t_open_pron = target_metrics.get("open_pronoun_pct", 0)
    t_open_sub = target_metrics.get("open_subordinate_pct", 0)
    t_open_adv = target_metrics.get("open_adverb_pct", 0)
    t_colons = target_metrics.get("punct_colons_per_100w", 0)
    t_contraction = target_metrics.get("contraction_rate", 0)

    hints = []
    # Sentence length
    short_max = max(4, round(30 * t_pct_short / 100))
    long_min = max(2, round(30 * t_pct_long / 100))
    hints.append(f"- Only ~{t_pct_short:.0f}% of sentences should be ≤10 words (at most {short_max} out of 30)")
    hints.append(f"- About ~{t_pct_long:.0f}% should be >25 words (at least {long_min} out of 30) — deliberately write long, clause-heavy sentences")
    # Paragraph structure
    hints.append(f"- Average {t_avg_sents:.1f} sentences per paragraph")
    if t_avg_sents >= 3.5 and t_pct_single > 20:
        # Bimodal pattern
        standalone_n = max(3, round(15 * t_pct_single / 100))
        hints.append(f"- BIMODAL pattern: mix substantial paragraphs (4-7 sentences) with single standalone sentences (~{t_pct_single:.0f}% standalone)")
        hints.append(f"- Multi-sentence paragraphs should have {t_avg_sents:.0f}+ sentences. Do NOT make every paragraph 2-3 sentences.")
        hints.append(f"- Interleave at least {standalone_n} single-sentence paragraphs per 15 paragraphs")
    elif t_avg_sents < 3.5:
        para_max = max(4, round(t_avg_sents + 1.5))
        hints.append(f"- Split any paragraph with {para_max}+ sentences")
        if t_pct_single > 20:
            standalone_n = max(3, round(15 * t_pct_single / 100))
            hints.append(f"- CRITICAL: ~{t_pct_single:.0f}% of paragraphs must be single standalone sentences (at least {standalone_n} in a 15-paragraph piece)")
        elif t_pct_single > 5:
            hints.append(f"- About {t_pct_single:.0f}% of paragraphs should be single standalone sentences — use occasionally for emphasis")
    else:
        hints.append(f"- Write substantial paragraphs of ~{t_avg_sents:.0f} sentences — do NOT over-split")
        if t_pct_single > 5:
            hints.append(f"- About {t_pct_single:.0f}% of paragraphs should be single standalone sentences — use occasionally for emphasis")
    # Openers — always cap pronoun starts (LLM consistently overshoots)
    t_pron_max = max(3, round(30 * t_open_pron / 100))
    hints.append(f"- Pronoun-start sentences (I/You/They/It): HARD CAP ~{t_open_pron:.0f}% (at most {t_pron_max} out of 30). Count yours and rewrite excess.")
    if t_open_art < 15:
        hints.append(f"- Article-start sentences (The/A/An): cap at ~{t_open_art:.0f}% — avoid overusing \"The\"")
    if t_open_sub >= 5:
        hints.append(f"- Subordinate-clause starts (If/When/Although): target ~{t_open_sub:.0f}%")
    if t_open_adv >= 2:
        t_adv_max = max(2, round(30 * t_open_adv / 100) + 1)
        hints.append(f"- Adverb starts (Perhaps/Still/Often): target ~{t_open_adv:.0f}% — include 1-{t_adv_max} but do NOT overuse")
    # Punctuation
    if t_colons > 0.1:
        hints.append("- Include at least 1 colon (:) to introduce an elaboration")
    t_semicolons = target_metrics.get("punct_semicolons_per_sent", 0)
    if t_semicolons >= 0.03:
        hints.append("- Include at least 1 semicolon (;) to join related clauses")
    t_quotes = target_metrics.get("punct_quotes_per_100w", 0)
    if t_quotes < 1.0:
        hints.append(f"- Few quotation marks (~{t_quotes:.1f}/100w) — do NOT invent quoted speech; paraphrase instead")
    # Contractions
    if t_contraction >= 1.5:
        hints.append(f"- Use contractions (don't, can't, it's) — this author writes conversationally (~{t_contraction:.1f} per 100 words)")
    elif t_contraction < 1.0:
        hints.append(f"- AVOID contractions — this author writes formally (~{t_contraction:.1f}/100w). Use \"do not\", \"cannot\", \"it is\"")
    hints_block = "\n".join(hints)

    # Build self-editing steps conditionally
    edits = []
    if t_avg_sents < 3.5:
        edits.append(f"Split any paragraph with {max(4, round(t_avg_sents + 1.5))}+ sentences")
    if t_pct_single > 20:
        edits.append(f"Count single-sentence paragraphs — if fewer than 1 in 3, isolate more sentences as standalone paragraphs")
    edits.append(f"Count sentences starting with I/You/They/It/He/She/We — if more than {t_pron_max}, rewrite some to start with other words")
    edits.append("Ensure varied sentence openers — no more than 2 consecutive sentences starting with the same word")
    if t_pct_long >= 10:
        edits.append(f"Check that at least {long_min} sentences are >25 words")
    if t_colons > 0.1:
        edits.append("Verify you have at least 1 colon")
    if t_semicolons >= 0.03:
        edits.append("Verify you have at least 1 semicolon")
    if t_contraction < 1.0:
        edits.append("Scan for contractions (don't, can't, it's, won't) and expand them to formal forms")
    edit_steps = "\n".join(f"{i+1}. {e}" for i, e in enumerate(edits))

    for i, topic in enumerate(topics, 1):
        print(f"    Generating test passage {i}/{len(topics)}...")
        prompt = f"""Follow the voice and style directives below EXACTLY when writing.

PAY SPECIAL ATTENTION to the "Structural Rules (NON-NEGOTIABLE)" section.
The sentence length distribution, paragraph structure, and sentence opener
targets are measured from the author's real text — match them precisely.

KEY STRUCTURAL TARGETS (memorize these before writing):
{hints_block}

SELF-EDITING PASS — do this BEFORE outputting your final text:
{edit_steps}

<voice_skill>
{skill_content}
</voice_skill>

{topic}

Write 400-600 words. Write ONLY the text. No preamble, no title, no meta-commentary."""

        response = call_claude(prompt, model)
        text = response.strip()
        if text:
            generated_texts.append(text)
            print(f"    Generated: {len(text.split())} words")

    if not generated_texts:
        return {"error": "No test text generated", "passed": False}

    # Compute metrics on generated text
    gen_metrics = compute_metrics_multi(generated_texts)
    if not gen_metrics:
        return {"error": "Could not compute metrics on generated text", "passed": False}

    # Compare against targets on stable features only
    deviations = []
    for feature in stable:
        target = target_metrics.get(feature, 0)
        actual = gen_metrics.get(feature, 0)
        if isinstance(target, dict) or isinstance(actual, dict):
            continue
        if abs(target) < 0.01:
            continue  # skip near-zero

        deviation = abs(actual - target) / max(abs(target), 0.01)
        deviations.append({
            "feature": feature,
            "target": round(target, 2),
            "actual": round(actual, 2),
            "deviation_pct": round(deviation * 100, 1),
            "flagged": deviation > DEVIATION_THRESHOLD,
        })

    flagged = [d for d in deviations if d["flagged"]]
    total_checked = len(deviations)
    passed = total_checked > 0 and len(flagged) <= total_checked * 0.4

    report = {
        "stable_features_checked": total_checked,
        "flagged_deviations": len(flagged),
        "passed": passed,
        "deviations": deviations,
        "generated_word_counts": [len(t.split()) for t in generated_texts],
    }

    # Print summary
    print(f"\n    Validation: {total_checked} stable features checked")
    if flagged:
        print(f"    {len(flagged)} features deviate >40% from target:")
        for d in flagged:
            print(f"      {d['feature']:<35} target={d['target']:>8.2f}  actual={d['actual']:>8.2f}  ({d['deviation_pct']:.0f}% off)")
    else:
        print("    All stable features within 40% of target!")

    verdict = "PASS" if passed else "FAIL"
    print(f"    Verdict: {verdict}")

    return report


def save_validation_report(report: dict, output_path: str | Path) -> Path:
    """Save validation report as JSON."""
    output_path = Path(output_path)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(json.dumps(report, indent=2), encoding="utf-8")
    return output_path
