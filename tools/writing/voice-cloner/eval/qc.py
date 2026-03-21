#!/usr/bin/env python3
"""QC: does SKILL.md make Claude write closer to the target author?

Standalone script. No dependency on run_eval.py or scoring.py.

Usage:
    python eval/qc.py --all                # full run (cloner + generate + score)
    python eval/qc.py --all --skip-cloner  # reuse existing SKILL.md
    python eval/qc.py --all --skip-generate # reuse all, just re-score
"""

import argparse
import os
import shutil
import statistics
import subprocess
import sys
import tempfile
import time
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent.parent))

from reader import collect_samples, read_sample
from metrics import compute_metrics, compute_metrics_multi, FEATURE_WEIGHTS

EVAL_DIR = Path(__file__).parent
TOOL_DIR = EVAL_DIR.parent
TRAIN_COUNT = 3
STYLED_RUNS = 2  # generate multiple styled texts and average to reduce variance
CV_THRESHOLD = 50  # drop features with coefficient of variation > 50%

AUTHOR_GENRES = {
    "hemingway": "fiction",
    "darwin": "scientific",
    "paul-graham": "essay",
}


def _call_claude(prompt: str, max_retries: int = 5) -> str:
    """Call claude -p and return stdout."""
    cmd = ["claude", "-p", "--tools", ""]
    env = {k: v for k, v in os.environ.items() if k != "CLAUDECODE"}
    for attempt in range(max_retries):
        result = subprocess.run(
            cmd, input=prompt, capture_output=True, text=True, timeout=300, env=env
        )
        if result.returncode == 0:
            return result.stdout.strip()
        if attempt < max_retries - 1:
            wait = 10 * (attempt + 1)
            print(f"    claude -p failed (attempt {attempt+1}), retrying in {wait}s...")
            time.sleep(wait)
    raise RuntimeError(f"claude -p failed after {max_retries} attempts: {result.stderr[:300]}")


def run_voice_cloner(samples_dir: Path, output_dir: Path, name: str) -> Path:
    """Run cli.py analyze on samples 1-3 → SKILL.md."""
    all_paths = sorted(collect_samples(str(samples_dir)))
    train_paths = all_paths[:TRAIN_COUNT]

    with tempfile.TemporaryDirectory(prefix="qc-train-") as tmpdir:
        for p in train_paths:
            shutil.copy2(p, tmpdir)
        cmd = [
            sys.executable, str(TOOL_DIR / "cli.py"),
            "analyze", tmpdir,
            "-o", str(output_dir),
            "--name", name,
            "--min-samples", "3",
            "--skip-validation",
        ]
        print(f"  Running voice-cloner on {len(train_paths)} training samples...")
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=1200)
        if result.returncode != 0:
            print(f"  FAILED: {result.stderr[-300:]}")
            raise RuntimeError("voice-cloner failed")

    skill_path = output_dir / name / "SKILL.md"
    if not skill_path.exists():
        raise RuntimeError(f"SKILL.md not found at {skill_path}")
    print(f"  SKILL.md ready: {skill_path}")
    return skill_path


def generate_texts(topic: str, skill_path: Path, n_styled: int = 1) -> tuple[list[str], str]:
    """Generate styled (with SKILL.md) + baseline (without) texts.

    Returns (list_of_styled_texts, baseline_text).
    """
    skill_content = skill_path.read_text(encoding="utf-8")

    styled_prompt = f"""Follow the voice and style directives below EXACTLY when writing.

<voice_skill>
{skill_content}
</voice_skill>

{topic}

Write 400-600 words. Write ONLY the text. No preamble."""

    baseline_prompt = f"""{topic}

Write 400-600 words. Write ONLY the text. No preamble."""

    styled_texts = []
    for i in range(n_styled):
        styled_texts.append(_call_claude(styled_prompt))
    baseline = _call_claude(baseline_prompt)
    return styled_texts, baseline


def extract_topic(text: str) -> str:
    """Extract a 1-sentence writing prompt from a text excerpt."""
    excerpt = text[:500]
    prompt = f"""Read this text excerpt and describe its topic/scene in 1-2 sentences as a writing prompt. Do not mention the author or style. Do not describe how it's written, only what it's about.

<excerpt>
{excerpt}
</excerpt>

Reply with ONLY the writing prompt, nothing else."""
    return _call_claude(prompt)


def stable_features(train_metrics: list[dict]) -> list[str]:
    """Return features that are stable (CV <= threshold) across training samples."""
    stable = []
    for f in sorted(FEATURE_WEIGHTS.keys()):
        vals = [m.get(f, 0) for m in train_metrics]
        mean = sum(vals) / len(vals) if vals else 0
        if mean < 0.01:
            # Near-zero mean — only stable if all values are near zero
            if all(v < 0.05 for v in vals):
                continue  # skip — zero-valued feature, not diagnostic
            else:
                continue  # skip — sporadic
        std = statistics.stdev(vals) if len(vals) > 1 else 0
        cv = (std / mean) * 100
        if cv <= CV_THRESHOLD:
            stable.append(f)
    return stable


def compare_features(
    ground: dict, styled: dict, baseline: dict, features: list[str]
) -> list[tuple]:
    """Compare per-feature: is styled or baseline closer to ground truth?

    Returns list of (feature, ground_val, styled_val, base_val, winner).
    """
    rows = []
    for f in features:
        gt = ground.get(f, 0)
        s = styled.get(f, 0)
        b = baseline.get(f, 0)
        # Skip dict-valued metrics
        if isinstance(gt, dict) or isinstance(s, dict) or isinstance(b, dict):
            continue
        s_err = abs(gt - s)
        b_err = abs(gt - b)
        if s_err < b_err:
            winner = "STYLED"
        elif b_err < s_err:
            winner = "baseline"
        else:
            winner = "tie"
        rows.append((f, gt, s, b, winner))
    return rows


def print_author_table(
    author: str, genre: str, rows: list[tuple], dropped: list[str]
) -> tuple[int, int]:
    """Print per-author feature table. Returns (styled_wins, contested)."""
    styled_wins = sum(1 for *_, w in rows if w == "STYLED")
    ties = sum(1 for *_, w in rows if w == "tie")
    contested = len(rows) - ties

    print(f"\n{'='*60}")
    print(f"  {author} ({genre})")
    print(f"{'='*60}")
    if dropped:
        print(f"  Dropped {len(dropped)} unstable features: {', '.join(dropped)}")
    print(f"  {'Feature':<30} {'Ground':>8} {'Styled':>8} {'Base':>8}  Winner")
    print(f"  {'-'*66}")
    for f, gt, s, b, winner in rows:
        print(f"  {f:<30} {gt:8.2f} {s:8.2f} {b:8.2f}  {winner}")
    print(f"  {'-'*66}")
    print(f"  Styled wins: {styled_wins}/{contested}")
    return styled_wins, contested


def evaluate_author(
    author: str,
    skip_cloner: bool = False,
    skip_generate: bool = False,
) -> dict:
    """Full QC pipeline for one author."""
    genre = AUTHOR_GENRES.get(author, "unknown")
    samples_dir = EVAL_DIR / author / "samples"
    skill_name = f"{author}-voice"
    output_dir = EVAL_DIR / "output"
    out_dir = output_dir / skill_name
    gen_dir = out_dir / "generated"
    gen_dir.mkdir(parents=True, exist_ok=True)

    all_paths = sorted(collect_samples(str(samples_dir)))
    if len(all_paths) < TRAIN_COUNT + 1:
        raise RuntimeError(f"{author}: need {TRAIN_COUNT+1}+ samples, found {len(all_paths)}")

    skill_path = out_dir / "SKILL.md"

    # Step 1: Voice cloner
    if skip_cloner:
        if not skill_path.exists():
            raise RuntimeError(f"--skip-cloner but no SKILL.md at {skill_path}")
        print(f"\n  [{author}] Reusing existing SKILL.md")
    else:
        print(f"\n  [{author}] Running voice cloner...")
        skill_path = run_voice_cloner(samples_dir, output_dir, skill_name)

    # Ground truth = averaged training samples (not a single held-out sample)
    train_paths = all_paths[:TRAIN_COUNT]
    train_texts = [read_sample(p) for p in train_paths]
    train_metrics = [compute_metrics(t) for t in train_texts]
    gt_metrics = compute_metrics_multi(train_texts)

    # Determine which features are stable across this author's training samples
    features = stable_features(train_metrics)
    all_features = sorted(FEATURE_WEIGHTS.keys())
    dropped = [f for f in all_features if f not in features]

    # Use a held-out sample's topic for generation
    held_out_path = all_paths[TRAIN_COUNT]
    held_out_text = read_sample(held_out_path)

    if skip_generate:
        # Load all existing styled texts
        styled_texts = []
        for i in range(1, STYLED_RUNS + 1):
            sp = gen_dir / f"styled-{i}.txt"
            if sp.exists():
                styled_texts.append(sp.read_text(encoding="utf-8"))
        if not styled_texts:
            raise RuntimeError(f"--skip-generate but no styled texts in {gen_dir}")
        baseline_path = gen_dir / "baseline-1.txt"
        if not baseline_path.exists():
            raise RuntimeError(f"--skip-generate but missing baseline in {gen_dir}")
        baseline_text = baseline_path.read_text(encoding="utf-8")
        print(f"  [{author}] Reusing {len(styled_texts)} styled + 1 baseline texts")
    else:
        print(f"  [{author}] Extracting topic from held-out sample...")
        topic = extract_topic(held_out_text)
        print(f"  [{author}] Topic: {topic[:80]}...")
        print(f"  [{author}] Generating {STYLED_RUNS} styled + 1 baseline texts...")
        styled_texts, baseline_text = generate_texts(topic, skill_path, n_styled=STYLED_RUNS)
        for i, st in enumerate(styled_texts, 1):
            (gen_dir / f"styled-{i}.txt").write_text(st, encoding="utf-8")
            print(f"  [{author}] Styled-{i}: {len(st.split())}w")
        (gen_dir / "baseline-1.txt").write_text(baseline_text, encoding="utf-8")
        print(f"  [{author}] Baseline: {len(baseline_text.split())}w")

    # Score: average metrics across all styled runs to reduce variance
    styled_metrics = compute_metrics_multi(styled_texts)
    baseline_metrics = compute_metrics(baseline_text)

    rows = compare_features(gt_metrics, styled_metrics, baseline_metrics, features)
    styled_wins, contested = print_author_table(author, genre, rows, dropped)
    passed = contested > 0 and styled_wins > contested / 2

    return {
        "author": author,
        "genre": genre,
        "styled_wins": styled_wins,
        "total": contested,
        "passed": passed,
    }


def main():
    parser = argparse.ArgumentParser(description="QC: SKILL.md feature-by-feature check")
    parser.add_argument("--all", action="store_true", help="Run all authors")
    parser.add_argument("--author", default=None, help="Single author to test")
    parser.add_argument("--skip-cloner", action="store_true", help="Reuse existing SKILL.md")
    parser.add_argument("--skip-generate", action="store_true", help="Reuse generated texts")
    args = parser.parse_args()

    if not args.all and not args.author:
        parser.print_help()
        sys.exit(1)

    if args.author:
        authors = [args.author]
    else:
        authors = sorted(
            d.name for d in EVAL_DIR.iterdir()
            if d.is_dir() and (d / "samples").is_dir()
        )

    results = []
    for author in authors:
        try:
            result = evaluate_author(author, args.skip_cloner, args.skip_generate)
            results.append(result)
        except Exception as e:
            print(f"\n  ERROR — {author}: {e}")
            import traceback
            traceback.print_exc()

    # Summary
    if results:
        print(f"\n{'='*60}")
        print(f"  SUMMARY")
        print(f"{'='*60}")
        print(f"  {'Author':<20} {'Features':>10}  Verdict")
        for r in results:
            verdict = "PASS" if r["passed"] else "FAIL"
            print(f"  {r['author']:<20} {r['styled_wins']:>2}/{r['total']:<5}  {verdict}")
        passed = sum(1 for r in results if r["passed"])
        print(f"  {'-'*40}")
        print(f"  Overall: {passed}/{len(results)} PASS")


if __name__ == "__main__":
    main()
