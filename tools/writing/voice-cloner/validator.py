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
    n_samples: int = 2,
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

    # Extract key targets for inline hints
    t_pct_short = target_metrics.get("sent_pct_short", 0)
    t_pct_long = target_metrics.get("sent_pct_long", 0)
    t_pct_single = target_metrics.get("para_pct_single_sent", 0)
    t_avg_sents = target_metrics.get("para_avg_sentences", 0)
    t_open_art = target_metrics.get("open_article_pct", 0)
    t_open_sub = target_metrics.get("open_subordinate_pct", 0)
    t_open_adv = target_metrics.get("open_adverb_pct", 0)
    t_colons = target_metrics.get("punct_colons_per_100w", 0)

    for i, topic in enumerate(topics, 1):
        print(f"    Generating test passage {i}/{len(topics)}...")
        prompt = f"""Follow the voice and style directives below EXACTLY when writing.

PAY SPECIAL ATTENTION to the "Structural Rules (NON-NEGOTIABLE)" section.
The sentence length distribution, paragraph structure, and sentence opener
targets are measured from the author's real text — match them precisely.

KEY STRUCTURAL TARGETS (memorize these before writing):
- HARD CAP: only ~{t_pct_short:.0f}% of sentences should be ≤10 words. In a 30-sentence piece, at most 8 should be short. Combine short sentences into longer ones if you have too many.
- About ~{t_pct_long:.0f}% of sentences should be >25 words — deliberately write long, clause-heavy sentences with commas
- Average {t_avg_sents:.1f} sentences per paragraph — split any paragraph with 4+ sentences
- About {t_pct_single:.0f}% of paragraphs should be a single standalone sentence
- Article-start sentences ("The/A/An..."): HARD CAP ~{t_open_art:.0f}% — if more than 1 in 10 start with The/A/An, rewrite some
- Pronoun-start sentences: cap at ~13% — don't start too many with I/You/They/It
- Subordinate-clause starts (If/When/Although): ~{t_open_sub:.0f}% — include some
- Adverb starts (Perhaps/Still/Often): ~{t_open_adv:.0f}% — include at least one
- Include exactly 1 colon in the piece to introduce an elaboration — not zero, not three
- Use hedging words (if/would/could/might/perhaps) naturally throughout
- Use intensifiers (very/really/quite/rather/so/certainly) — they add conversational energy
- Use negation (not/don't/doesn't/won't/can't/never) naturally — don't avoid it
- Omit articles (the/a/an) where the sentence reads naturally without them
- CRITICAL: ~{t_pct_single:.0f}% of paragraphs must be single standalone sentences. In a piece with 15+ paragraphs, at least 5 should be just one sentence followed by a blank line.

MANDATORY SELF-EDITING PASS — do this BEFORE outputting your final text:
1. Count your paragraphs. Take every 3rd paragraph and make it a single standalone sentence (one sentence, blank line). You MUST have at least 5 single-sentence paragraphs.
2. Find sentences starting with I/You/They/It/He/She/We — if more than 4, rewrite 2 of them to start differently (use "When...", "If...", "Perhaps...", "And...")
3. You MUST have exactly 1 colon (:) somewhere — if zero, add one ("The reason is simple: X")
4. Count sentences ≤10 words — no more than 8 out of 30. Merge short sentences into longer ones if needed.
5. Count sentences >25 words — you need at least 4. Expand some by adding subordinate clauses ("which means...", "even though...", "because...")
6. Add modal verbs (would/could/should/might/can/will) naturally — aim for 1-2 per paragraph

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
