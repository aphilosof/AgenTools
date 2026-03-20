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

    # Build targeted hints from metrics
    t_open_art = target_metrics.get("open_article_pct", 0)
    t_open_pron = target_metrics.get("open_pronoun_pct", 0)
    t_open_conj = target_metrics.get("open_conjunction_pct", 0)
    t_avg_sents = target_metrics.get("para_avg_sentences", 0)
    t_pct_single = target_metrics.get("para_pct_single_sent", 0)
    t_contraction = target_metrics.get("contraction_rate", 0)
    t_pct_short = target_metrics.get("sent_pct_short", 0)
    t_pct_long = target_metrics.get("sent_pct_long", 0)
    t_negation = target_metrics.get("fw_negation", 0)
    t_art_max = max(2, round(30 * t_open_art / 100))
    t_pron_max = max(3, round(30 * t_open_pron / 100))
    t_short_max = max(4, round(30 * t_pct_short / 100))
    t_long_min = max(2, round(30 * t_pct_long / 100))

    # Build dynamic critical rules based on what this author needs
    def _build_critical_rules():
        rules = []
        # Pronoun cap — always problematic
        rules.append(f"- PRONOUN OPENERS: At most {t_pron_max}/30 sentences may start with I/You/They/It/He/She/We (target: {t_open_pron:.0f}%). After drafting, COUNT them. If over {t_pron_max}, rewrite the excess by starting with a noun, conjunction, preposition, or subordinate clause instead.")
        # Article cap — always problematic
        rules.append(f"- ARTICLE OPENERS: At most {t_art_max}/30 sentences may start with The/A/An (target: {t_open_art:.0f}%). Replace \"The X\" with \"And X\", \"But X\", \"When X\", or just \"X\".")
        # Contractions
        if t_contraction < 1.0:
            rules.append(f"- CONTRACTIONS: ZERO contractions. Write \"do not\" not \"don't\", \"cannot\" not \"can't\", \"it is\" not \"it's\".")
        # Paragraph structure
        if t_avg_sents >= 3.5:
            rules.append(f"- PARAGRAPHS: Write LONG paragraphs (5-7 sentences) mixed with standalone single sentences. Do NOT write 2-3 sentence paragraphs — that is WRONG for this voice.")
        elif t_pct_single > 20:
            rules.append(f"- STANDALONE SENTENCES: At least {max(3, round(20 * t_pct_single / 100))}/20 paragraphs must be a single standalone sentence. After drafting, count them.")
        # Sentence length
        if t_pct_short < 30:
            rules.append(f"- SENTENCE LENGTH: At most {t_short_max}/30 sentences should be ≤10 words. At least {t_long_min}/30 must be >25 words (long, clause-heavy). The backbone is MEDIUM sentences (11-25 words).")
        # Conjunction minimum
        if t_open_conj >= 5:
            conj_min = max(2, round(30 * t_open_conj / 100))
            rules.append(f"- CONJUNCTION OPENERS: At least {conj_min}/30 sentences must start with And/But/So/Yet — this is signature. Do not exceed {conj_min + 2}.")
        # Negation cap
        if t_negation < 1.5:
            rules.append(f"- NEGATION: Use \"not/no/never/don't\" sparingly — target ~{t_negation:.1f} per 100 words. Do not overuse negative constructions.")
        return "\n".join(rules)

    critical_rules = _build_critical_rules()

    for i, topic in enumerate(topics, 1):
        print(f"    Generating test passage {i}/{len(topics)}...")
        prompt = f"""Follow the voice and style directives below EXACTLY when writing.

Read the ENTIRE voice skill document carefully, especially:
1. The "Structural Rules (NON-NEGOTIABLE)" section — these are measured targets
2. The "Self-Check" section at the bottom — use it to verify your output
3. The calibration examples — match their feel

CRITICAL RULES — LLMs consistently violate these. After drafting, go back and FIX violations:
{critical_rules}

<voice_skill>
{skill_content}
</voice_skill>

{topic}

Write 400-600 words. Write ONLY the text. No preamble, no title, no meta-commentary.

IMPORTANT: After writing your draft, review it against the Self-Check section in the voice skill and the critical rules above. Fix any violations before outputting."""

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
