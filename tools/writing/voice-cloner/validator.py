"""Phase 5: Self-validation — leave-one-out cross-validation on author samples.

Deterministic, instant, no LLM. For N samples: hold out each sample in turn,
compute corpus-average metrics on the remaining N-1, compare against the
held-out sample. Average deviations across all folds.
"""

import json
import statistics
from pathlib import Path

from metrics import FEATURE_WEIGHTS

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
    """Leave-one-out cross-validation on author's own samples.

    For each sample, compute corpus-average from the other N-1 samples,
    then measure deviation of the held-out sample. Average across all folds.

    Args:
        skill_path: Path to SKILL.md (unused, kept for interface compat).
        target_metrics: Corpus-average metrics (unused, kept for interface compat).
        per_sample_metrics: Per-sample metrics list.
        model: Unused, kept for interface compatibility.
        n_samples: Unused, kept for interface compatibility.

    Returns:
        Validation report dict with deviations and pass/fail.
    """
    n = len(per_sample_metrics)
    if n < 3:
        return {"error": f"Need at least 3 samples for LOO validation, got {n}", "passed": False}

    # Determine stable features across all samples
    stable = _stable_features(per_sample_metrics)
    if not stable:
        return {"error": "No stable features found", "passed": False}

    # Leave-one-out: for each fold, accumulate per-feature deviations
    # feature -> list of deviations across folds
    fold_deviations: dict[str, list[float]] = {f: [] for f in stable}

    for hold_idx in range(n):
        held_out = per_sample_metrics[hold_idx]
        train = [per_sample_metrics[i] for i in range(n) if i != hold_idx]

        for feature in stable:
            train_vals = [m.get(feature, 0) for m in train]
            train_mean = sum(train_vals) / len(train_vals)
            held_val = held_out.get(feature, 0)

            if abs(train_mean) < 0.01:
                continue  # skip near-zero to avoid division issues

            deviation = abs(held_val - train_mean) / max(abs(train_mean), 0.01)
            fold_deviations[feature].append(deviation)

    # Average deviations across folds per feature
    deviations = []
    for feature in stable:
        devs = fold_deviations[feature]
        if not devs:
            continue
        avg_dev = sum(devs) / len(devs)
        # Also get the corpus-wide values for reporting
        all_vals = [m.get(feature, 0) for m in per_sample_metrics]
        corpus_mean = sum(all_vals) / len(all_vals)

        deviations.append({
            "feature": feature,
            "target": round(corpus_mean, 2),
            "avg_loo_deviation_pct": round(avg_dev * 100, 1),
            "flagged": avg_dev > DEVIATION_THRESHOLD,
        })

    flagged = [d for d in deviations if d["flagged"]]
    total_checked = len(deviations)
    passed = total_checked > 0 and len(flagged) <= total_checked * 0.4

    report = {
        "method": "leave-one-out cross-validation",
        "n_samples": n,
        "n_folds": n,
        "stable_features_checked": total_checked,
        "flagged_deviations": len(flagged),
        "passed": passed,
        "deviations": deviations,
    }

    # Print summary
    print(f"\n    LOO Cross-Validation ({n} folds, {total_checked} stable features)")
    if flagged:
        print(f"    {len(flagged)} features deviate >40% from LOO mean:")
        for d in flagged:
            print(f"      {d['feature']:<35} corpus_mean={d['target']:>8.2f}  avg_dev={d['avg_loo_deviation_pct']:.0f}%")
    else:
        print("    All stable features within 40% of LOO mean!")

    verdict = "PASS" if passed else "FAIL"
    print(f"    Verdict: {verdict}")

    return report


def save_validation_report(report: dict, output_path: str | Path) -> Path:
    """Save validation report as JSON."""
    output_path = Path(output_path)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(json.dumps(report, indent=2), encoding="utf-8")
    return output_path
