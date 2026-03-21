"""Scoring module — ground-truth based evaluation.

Two metrics:
  1. Stylometric distance via WMAPE (weighted mean absolute percentage error)
  2. LLM blind A/B test

Combined pass/fail:
  PASS        = stylometric improvement > 0  OR  blind test win rate > 50%
  STRONG PASS = both
  FAIL        = neither
"""

import json
import os
import re
import subprocess
import time
import sys
from pathlib import Path

_tool_root = str(Path(__file__).parent.parent)
if _tool_root not in sys.path:
    sys.path.insert(0, _tool_root)

from metrics import FEATURE_WEIGHTS


# ---------------------------------------------------------------------------
# Metric 1: WMAPE stylometric distance
# ---------------------------------------------------------------------------

def wmape_distance(profile_a: dict, profile_b: dict) -> float:
    """Weighted mean absolute percentage error between two profiles.

    For each feature shared by both profiles and present in FEATURE_WEIGHTS,
    compute |a - b| / max(|a|, |b|, 1e-6) weighted by the feature weight.
    Returns weighted average (0 = identical, 1 = maximally different).
    """
    keys = sorted(
        set(profile_a.keys()) & set(profile_b.keys()) & set(FEATURE_WEIGHTS.keys())
    )
    if not keys:
        return float("inf")

    weighted_sum = 0.0
    total_weight = 0.0

    for k in keys:
        a = profile_a[k]
        b = profile_b[k]
        denom = max(abs(a), abs(b), 1e-6)
        w = FEATURE_WEIGHTS[k]
        weighted_sum += w * abs(a - b) / denom
        total_weight += w

    return weighted_sum / total_weight


def compute_stylometric_scores(
    ground_truth_profile: dict,
    styled_profile: dict,
    baseline_profile: dict,
) -> dict:
    """Compare styled vs baseline against ground truth using WMAPE.

    Returns dict with distances and improvement ratio.
    """
    dist_styled = wmape_distance(ground_truth_profile, styled_profile)
    dist_baseline = wmape_distance(ground_truth_profile, baseline_profile)

    if dist_baseline == 0:
        improvement = 0.0
    else:
        improvement = (dist_baseline - dist_styled) / dist_baseline

    return {
        "distance_styled": round(dist_styled, 4),
        "distance_baseline": round(dist_baseline, 4),
        "improvement_pct": round(improvement * 100, 1),
    }


# ---------------------------------------------------------------------------
# Metric 2: LLM blind A/B test
# ---------------------------------------------------------------------------

def _call_claude(prompt: str, model: str | None = None, max_retries: int = 5) -> str:
    """Call claude -p and return stdout."""
    cmd = ["claude", "-p", "--tools", ""]
    if model:
        cmd.extend(["--model", model])
    env = {k: v for k, v in os.environ.items() if k != "CLAUDECODE"}

    for attempt in range(max_retries):
        result = subprocess.run(
            cmd, input=prompt, capture_output=True, text=True, timeout=300, env=env
        )
        if result.returncode == 0:
            return result.stdout.strip()
        if attempt < max_retries - 1:
            wait = 10 * (attempt + 1)
            print(f"    claude -p failed (attempt {attempt + 1}), retrying in {wait}s...")
            time.sleep(wait)
        else:
            raise RuntimeError(
                f"claude -p failed after {max_retries} attempts: {result.stderr[:300]}"
            )


def blind_ab_test(
    ground_truth_text: str,
    styled_text: str,
    baseline_text: str,
    model: str | None = None,
    num_votes: int = 3,
) -> dict:
    """Run a blind A/B test: which text was more likely written by the same author?

    Randomly assigns styled/baseline to A/B, asks LLM to pick, repeats
    num_votes times and takes majority vote.

    Returns {"styled_wins": bool, "votes_styled": int, "votes_baseline": int}.
    """
    import random

    gt_excerpt = ground_truth_text[:2000]
    styled_excerpt = styled_text[:2000]
    baseline_excerpt = baseline_text[:2000]

    votes_styled = 0
    votes_baseline = 0

    for _ in range(num_votes):
        # Randomly assign A/B
        if random.random() < 0.5:
            text_a, text_b = styled_excerpt, baseline_excerpt
            styled_is = "A"
        else:
            text_a, text_b = baseline_excerpt, styled_excerpt
            styled_is = "B"

        prompt = f"""You are a literary style analyst. Below is a reference passage by a specific author, and two unlabeled texts (A and B). One was written to imitate the author's style; the other was written without any style guidance.

<reference>
{gt_excerpt}
</reference>

<text_a>
{text_a}
</text_a>

<text_b>
{text_b}
</text_b>

Which text (A or B) was more likely written by the same author as the reference? Consider sentence structure, vocabulary, rhythm, tone, and rhetorical habits.

Reply with ONLY a JSON object: {{"choice": "A"}} or {{"choice": "B"}}"""

        try:
            response = _call_claude(prompt, model)
            match = re.search(r'\{[^}]*\}', response)
            if match:
                data = json.loads(match.group())
                choice = data.get("choice", "").upper().strip()
                if choice == styled_is:
                    votes_styled += 1
                elif choice in ("A", "B"):
                    votes_baseline += 1
        except Exception as e:
            print(f"    Blind test vote failed: {e}")

    return {
        "styled_wins": votes_styled > votes_baseline,
        "votes_styled": votes_styled,
        "votes_baseline": votes_baseline,
    }


# ---------------------------------------------------------------------------
# Combined verdict
# ---------------------------------------------------------------------------

def compute_verdict(feature_wins: int, feature_total: int, blind_wins: int, blind_total: int) -> str:
    """Return STRONG PASS / PASS / FAIL for one author.

    feature_wins: number of stylometric features where styled is closer to ground truth.
    feature_total: total number of features compared.
    """
    stylo_pass = feature_wins > feature_total / 2 if feature_total > 0 else False
    blind_pass = blind_wins > blind_total / 2 if blind_total > 0 else False

    if stylo_pass and blind_pass:
        return "STRONG PASS"
    elif stylo_pass or blind_pass:
        return "PASS"
    else:
        return "FAIL"


def compute_overall_verdict(verdicts: list[str]) -> str:
    """Return overall PASS/FAIL. PASS if >= 2/3 authors pass."""
    passes = sum(1 for v in verdicts if v in ("PASS", "STRONG PASS"))
    return "PASS" if passes >= 2 else "FAIL"


# ---------------------------------------------------------------------------
# Report formatting
# ---------------------------------------------------------------------------

def format_report(results: list[dict]) -> str:
    """Format the final summary table.

    Each entry in results: {author, genre, feature_wins_styled, feature_total,
                            blind_wins, blind_total, verdict}
    """
    lines = []
    lines.append("")
    lines.append("VOICE CLONER EVAL")
    lines.append("=" * 70)
    lines.append(
        f"{'Author':<16} {'Genre':<14} {'Features':>10} {'Blind':>10}    {'Verdict'}"
    )
    lines.append("-" * 70)

    verdicts = []
    for r in results:
        feat_str = f"{r['feature_wins_styled']}/{r['feature_total']}"
        blind_str = f"{r['blind_wins']}/{r['blind_total']}"
        lines.append(
            f"{r['author']:<16} {r['genre']:<14} {feat_str:>10} {blind_str:>10}    {r['verdict']}"
        )
        verdicts.append(r["verdict"])

    lines.append("-" * 70)
    overall = compute_overall_verdict(verdicts)
    pass_count = sum(1 for v in verdicts if v in ("PASS", "STRONG PASS"))
    lines.append(f"Overall: {overall} ({pass_count}/{len(verdicts)} authors passed)")
    lines.append("=" * 70)

    return "\n".join(lines)
