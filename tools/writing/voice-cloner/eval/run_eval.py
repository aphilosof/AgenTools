#!/usr/bin/env python3
"""Ground-truth based evaluation pipeline for voice-cloner.

Uses a train/test split: samples 1-3 train the voice-cloner, samples 4-5
are held out as ground truth. For each held-out sample, extracts a topic
prompt, generates styled + baseline texts, then scores with:
  1. Stylometric distance (WMAPE) — styled vs ground truth
  2. LLM blind A/B test — which text matches the author better?

Usage:
    python eval/run_eval.py --all                     # full run
    python eval/run_eval.py --all --skip-cloner       # reuse SKILL.md
    python eval/run_eval.py --all --skip-generate     # reuse texts, re-score
    python eval/run_eval.py eval/hemingway/samples/   # single author
"""

import json
import os
import re
import subprocess
import sys
import time
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent.parent))

from reader import collect_samples, read_sample
from metrics import compute_metrics, compute_metrics_multi
from eval.scoring import (
    blind_ab_test,
    compute_verdict,
    compute_overall_verdict,
    format_report,
)

EVAL_DIR = Path(__file__).parent
TOOL_DIR = EVAL_DIR.parent

AUTHOR_GENRES = {
    "hemingway": "fiction",
    "darwin": "scientific",
    "paul-graham": "essay",
}

# How many samples to use for training vs held-out
TRAIN_COUNT = 3  # samples 1-3
# Remaining samples are held-out ground truth


def _call_claude(prompt: str, model: str | None = None, max_retries: int = 5) -> str:
    """Call claude -p and return stdout, with retries."""
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


def _detect_pov(skill_content: str) -> str:
    """Detect POV from SKILL.md content."""
    text_lower = skill_content.lower()
    if "first-person" in text_lower or "first person" in text_lower:
        return "first-person"
    elif "second-person" in text_lower or "second person" in text_lower:
        return "second-person"
    elif "third-person" in text_lower or "third person" in text_lower:
        return "third-person"
    return ""


# ---------------------------------------------------------------------------
# Step 1: Run voice-cloner on training samples
# ---------------------------------------------------------------------------

def step1_run_voice_cloner(
    samples_dir: str, output_dir: str, name: str, model: str | None = None
) -> Path:
    """Run cli.py analyze on training samples (1-3) → SKILL.md."""
    # Collect all samples, take first TRAIN_COUNT
    all_paths = sorted(collect_samples(samples_dir))
    train_paths = all_paths[:TRAIN_COUNT]

    if len(train_paths) < TRAIN_COUNT:
        raise RuntimeError(
            f"Need at least {TRAIN_COUNT} samples for training, found {len(train_paths)}"
        )

    # Create a temp dir with just training samples
    import tempfile
    import shutil

    with tempfile.TemporaryDirectory(prefix="vc-train-") as tmpdir:
        for p in train_paths:
            shutil.copy2(p, tmpdir)

        cmd = [
            sys.executable, str(TOOL_DIR / "cli.py"),
            "analyze", tmpdir,
            "-o", output_dir,
            "--name", name,
            "--min-samples", "3",
        ]
        if model:
            cmd.extend(["--model", model])

        print(f"\n[Step 1] Running voice-cloner on {len(train_paths)} training samples...")
        for p in train_paths:
            print(f"  Training: {Path(p).name}")

        result = subprocess.run(cmd, capture_output=True, text=True, timeout=1200)
        if result.returncode != 0:
            print(f"  stdout: {result.stdout[-500:]}")
            print(f"  stderr: {result.stderr[-500:]}")
            raise RuntimeError("voice-cloner failed")

    skill_path = Path(output_dir) / name / "SKILL.md"
    if not skill_path.exists():
        raise RuntimeError(f"SKILL.md not found at {skill_path}")

    print(f"  ✓ SKILL.md: {skill_path}")
    return skill_path


# ---------------------------------------------------------------------------
# Step 2: Extract topic prompts from held-out samples
# ---------------------------------------------------------------------------

def step2_extract_topics(held_out_texts: list[str], model: str | None = None) -> list[str]:
    """Extract topic prompts from held-out samples via claude -p."""
    print(f"\n[Step 2] Extracting topic prompts from {len(held_out_texts)} held-out samples...")
    topics = []

    for i, text in enumerate(held_out_texts, 1):
        excerpt = text[:500]
        prompt = f"""Read this text excerpt and describe its topic/scene in 1-2 sentences as a writing prompt. Do not mention the author or style. Do not describe how it's written, only what it's about.

<excerpt>
{excerpt}
</excerpt>

Reply with ONLY the writing prompt, nothing else."""

        print(f"  [{i}/{len(held_out_texts)}] Extracting topic...")
        topic = _call_claude(prompt, model)
        topics.append(topic)
        print(f"  [{i}/{len(held_out_texts)}] Topic: {topic[:80]}...")

    return topics


# ---------------------------------------------------------------------------
# Step 3: Generate styled + baseline texts
# ---------------------------------------------------------------------------

def step3_generate_texts(
    topics: list[str],
    skill_path: Path,
    model: str | None = None,
) -> tuple[list[str], list[str]]:
    """Generate styled (with SKILL.md) and baseline (without) texts."""
    skill_content = skill_path.read_text(encoding="utf-8")
    pov = _detect_pov(skill_content)
    pov_instruction = f"Write in {pov} point of view. " if pov else ""

    styled_texts = []
    baseline_texts = []

    print(f"\n[Step 3] Generating {len(topics)} styled + baseline text pairs...")
    if pov:
        print(f"  Detected POV: {pov}")

    for i, topic in enumerate(topics, 1):
        # Styled
        styled_prompt = f"""Follow the voice and style directives below EXACTLY when writing.

<voice_skill>
{skill_content}
</voice_skill>

{pov_instruction}{topic}

Write 400-600 words. Write ONLY the text. No preamble."""

        print(f"  [{i}/{len(topics)}] Generating styled text...")
        try:
            styled = _call_claude(styled_prompt, model)
            styled_texts.append(styled)
            print(f"    Styled: {len(styled.split())} words")
        except Exception as e:
            print(f"    Styled FAILED: {e}")
            styled_texts.append("")

        # Baseline
        baseline_prompt = f"""{pov_instruction}{topic}

Write 400-600 words. Write ONLY the text. No preamble."""

        print(f"  [{i}/{len(topics)}] Generating baseline text...")
        try:
            baseline = _call_claude(baseline_prompt, model)
            baseline_texts.append(baseline)
            print(f"    Baseline: {len(baseline.split())} words")
        except Exception as e:
            print(f"    Baseline FAILED: {e}")
            baseline_texts.append("")

    return styled_texts, baseline_texts


# ---------------------------------------------------------------------------
# Step 4: Score
# ---------------------------------------------------------------------------

def step4_score(
    held_out_texts: list[str],
    styled_texts: list[str],
    baseline_texts: list[str],
    model: str | None = None,
) -> dict:
    """Score: feature-by-feature comparison against ground truth + blind A/B test."""
    print(f"\n[Step 4] Scoring...")

    # Compute profiles
    gt_profile = compute_metrics_multi(held_out_texts)
    styled_profile = compute_metrics_multi([t for t in styled_texts if t])
    baseline_profile = compute_metrics_multi([t for t in baseline_texts if t])

    # Feature-by-feature comparison
    from metrics import FEATURE_WEIGHTS
    features = sorted(FEATURE_WEIGHTS.keys())

    styled_wins = 0
    baseline_wins = 0
    ties = 0
    feature_rows = []

    for f in features:
        gt = gt_profile.get(f, 0)
        s = styled_profile.get(f, 0)
        b = baseline_profile.get(f, 0)
        s_err = abs(gt - s)
        b_err = abs(gt - b)
        if s_err < b_err:
            winner = "STYLED"
            styled_wins += 1
        elif b_err < s_err:
            winner = "baseline"
            baseline_wins += 1
        else:
            winner = "tie"
            ties += 1
        feature_rows.append((f, gt, s, b, s_err, b_err, winner))

    total_features = styled_wins + baseline_wins + ties

    # Print feature table
    print(f"\n  {'Feature':<30} {'Ground':>8} {'Styled':>8} {'Base':>8} {'Winner':>8}")
    print(f"  {'-'*66}")
    for f, gt, s, b, s_err, b_err, winner in feature_rows:
        print(f"  {f:<30} {gt:8.2f} {s:8.2f} {b:8.2f} {winner:>8}")
    print(f"  {'-'*66}")
    print(f"  Styled closer: {styled_wins}/{total_features}  "
          f"Baseline closer: {baseline_wins}/{total_features}  "
          f"Ties: {ties}/{total_features}")

    # Blind A/B test
    print(f"\n  Running blind A/B tests ({len(held_out_texts)} samples x 3 votes)...")
    total_blind_styled = 0
    total_blind_tests = 0

    for i, gt_text in enumerate(held_out_texts):
        styled = styled_texts[i] if i < len(styled_texts) and styled_texts[i] else None
        baseline = baseline_texts[i] if i < len(baseline_texts) and baseline_texts[i] else None
        if not styled or not baseline:
            continue

        ab = blind_ab_test(gt_text, styled, baseline, model, num_votes=3)
        if ab["styled_wins"]:
            total_blind_styled += 1
        total_blind_tests += 1
        print(f"    Sample {i+1}: styled={ab['votes_styled']} baseline={ab['votes_baseline']} "
              f"-> {'styled' if ab['styled_wins'] else 'baseline'}")

    print(f"  Blind test: styled won {total_blind_styled}/{total_blind_tests}")

    return {
        "feature_wins_styled": styled_wins,
        "feature_wins_baseline": baseline_wins,
        "feature_total": total_features,
        "blind_wins": total_blind_styled,
        "blind_total": total_blind_tests,
        "feature_rows": feature_rows,
    }


# ---------------------------------------------------------------------------
# Main pipeline
# ---------------------------------------------------------------------------

def evaluate_author(
    samples_dir: str,
    author_name: str | None = None,
    model: str | None = None,
    output_base: str | None = None,
    skip_cloner: bool = False,
    skip_generate: bool = False,
) -> dict:
    """Full eval pipeline for one author."""
    samples_path = Path(samples_dir)
    if author_name is None:
        author_name = samples_path.parent.name

    genre = AUTHOR_GENRES.get(author_name, "unknown")
    skill_name = f"{author_name}-voice"

    if output_base is None:
        output_base = str(EVAL_DIR / "output")

    out_dir = Path(output_base) / skill_name
    out_dir.mkdir(parents=True, exist_ok=True)
    gen_dir = out_dir / "generated"
    gen_dir.mkdir(exist_ok=True)

    skill_path = out_dir / "SKILL.md"

    # Collect and split samples
    all_paths = sorted(collect_samples(samples_dir))
    if len(all_paths) < TRAIN_COUNT + 1:
        raise RuntimeError(
            f"Need at least {TRAIN_COUNT + 1} samples, found {len(all_paths)}"
        )

    train_paths = all_paths[:TRAIN_COUNT]
    held_out_paths = all_paths[TRAIN_COUNT:]

    print(f"\n{'='*60}")
    print(f"  {author_name} ({genre})")
    print(f"  Training: {len(train_paths)} samples | Held-out: {len(held_out_paths)} samples")
    print(f"{'='*60}")

    held_out_texts = [read_sample(p) for p in held_out_paths]

    # Step 1: Voice cloner
    if skip_cloner:
        if not skill_path.exists():
            raise RuntimeError(f"--skip-cloner but no SKILL.md at {skill_path}")
        print(f"\n[Step 1] Skipping cloner (reusing {skill_path})")
    else:
        skill_path = step1_run_voice_cloner(
            samples_dir, output_base, skill_name, model
        )

    # Steps 2+3: Extract topics and generate texts
    if skip_generate:
        print(f"\n[Steps 2-3] Skipping generation (reusing existing texts)")
        styled_texts = []
        baseline_texts = []
        for i in range(len(held_out_texts)):
            sp = gen_dir / f"styled-{i+1}.txt"
            bp = gen_dir / f"baseline-{i+1}.txt"
            styled_texts.append(sp.read_text(encoding="utf-8") if sp.exists() else "")
            baseline_texts.append(bp.read_text(encoding="utf-8") if bp.exists() else "")
    else:
        topics = step2_extract_topics(held_out_texts, model)
        styled_texts, baseline_texts = step3_generate_texts(topics, skill_path, model)

        # Save generated texts
        for i, t in enumerate(styled_texts):
            (gen_dir / f"styled-{i+1}.txt").write_text(t, encoding="utf-8")
        for i, t in enumerate(baseline_texts):
            (gen_dir / f"baseline-{i+1}.txt").write_text(t, encoding="utf-8")

        # Save topics
        (out_dir / "topics.json").write_text(
            json.dumps(topics, indent=2), encoding="utf-8"
        )

    # Step 4: Score
    scores = step4_score(held_out_texts, styled_texts, baseline_texts, model)
    verdict = compute_verdict(
        scores["feature_wins_styled"], scores["feature_total"],
        scores["blind_wins"], scores["blind_total"],
    )

    result = {
        "author": author_name,
        "genre": genre,
        "feature_wins_styled": scores["feature_wins_styled"],
        "feature_wins_baseline": scores["feature_wins_baseline"],
        "feature_total": scores["feature_total"],
        "blind_wins": scores["blind_wins"],
        "blind_total": scores["blind_total"],
        "verdict": verdict,
    }

    # Save results (exclude non-serializable feature_rows)
    (out_dir / "eval-results.json").write_text(
        json.dumps(result, indent=2), encoding="utf-8"
    )

    print(f"\n  → {author_name}: Features={scores['feature_wins_styled']}/{scores['feature_total']}  "
          f"Blind={scores['blind_wins']}/{scores['blind_total']}  "
          f"Verdict={verdict}")

    return result


def run_all(
    model: str | None = None,
    skip_cloner: bool = False,
    skip_generate: bool = False,
):
    """Run eval for all authors in eval/*/samples/."""
    author_dirs = sorted(EVAL_DIR.glob("*/samples"))
    if not author_dirs:
        print("No author directories found in eval/*/samples/")
        sys.exit(1)

    results = []
    for samples_dir in author_dirs:
        author = samples_dir.parent.name
        sample_files = collect_samples(str(samples_dir))
        if len(sample_files) < TRAIN_COUNT + 1:
            print(f"\nSkipping {author}: {len(sample_files)} samples "
                  f"(need {TRAIN_COUNT + 1}+)")
            continue
        try:
            result = evaluate_author(
                str(samples_dir), author, model,
                skip_cloner=skip_cloner,
                skip_generate=skip_generate,
            )
            results.append(result)
        except Exception as e:
            print(f"\nERROR — {author}: {e}")
            import traceback
            traceback.print_exc()

    # Summary
    if results:
        report = format_report(results)
        print(report)

        # Save summary
        out_path = EVAL_DIR / "output" / "eval-summary.txt"
        out_path.parent.mkdir(parents=True, exist_ok=True)
        out_path.write_text(report, encoding="utf-8")
        print(f"\nSaved to {out_path}")


if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description="Voice Cloner Evaluation (Ground Truth)")
    parser.add_argument("samples_dir", nargs="?", help="Samples directory for single author")
    parser.add_argument("--author", default=None, help="Author name override")
    parser.add_argument("--model", default=None, help="Model for claude -p")
    parser.add_argument("--all", action="store_true", help="Run all authors")
    parser.add_argument("--skip-cloner", action="store_true",
                        help="Reuse existing SKILL.md")
    parser.add_argument("--skip-generate", action="store_true",
                        help="Reuse generated texts, re-score only")
    args = parser.parse_args()

    if args.all:
        run_all(args.model, args.skip_cloner, args.skip_generate)
    elif args.samples_dir:
        result = evaluate_author(
            args.samples_dir,
            author_name=args.author,
            model=args.model,
            skip_cloner=args.skip_cloner,
            skip_generate=args.skip_generate,
        )
        report = format_report([result])
        print(report)
    else:
        parser.print_help()
        sys.exit(1)
