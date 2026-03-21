"""Voice Cloner v2 CLI — analyze writing samples and generate a voice skill.

5-phase pipeline:
    Phase 1: Measure (code only) → metrics + vocabulary + excerpts
    Phase 2: LLM Analyze → per-sample qualitative rules (6 dimensions)
    Phase 3: LLM Synthesize → unified qualitative rules
    Phase 4: Generate (code only) → SKILL.md + report.md
    Phase 5: Validate → generate test text, compare metrics

Uses `claude -p` under the hood (bills against your Claude Max plan).
No API key needed.
"""

import json
import sys
from pathlib import Path

import click

from analyzer import analyze_samples
from excerpts import select_excerpts
from generator import generate_report, generate_skill
from metrics import compute_metrics, compute_metrics_multi, format_metrics_table
from reader import collect_samples, read_sample
from synthesizer import synthesize
from validator import validate, save_validation_report
from vocabulary import compute_vocabulary_profile


@click.group()
def cli():
    """Voice Cloner v2 — capture an author's writing voice as a Claude Code skill."""
    pass


@cli.command()
@click.argument("samples_dir", type=click.Path(exists=True, file_okay=False))
@click.option("-o", "--output", type=click.Path(), default="./output",
              help="Output directory for generated files.")
@click.option("--model", default=None,
              help="Model to use (e.g. 'sonnet', 'opus').")
@click.option("--name", default=None,
              help="Name for the generated skill (kebab-case).")
@click.option("--min-samples", default=3, type=int,
              help="Minimum number of samples required.")
@click.option("--skip-validation", is_flag=True, default=False,
              help="Skip Phase 5 validation.")
def analyze(samples_dir, output, model, name, min_samples, skip_validation):
    """Analyze writing samples and generate a voice-cloning skill.

    SAMPLES_DIR is the path to a directory containing writing samples
    (.md, .txt, .docx, .pdf).
    """
    # Resolve name
    if name is None:
        name = Path(samples_dir).resolve().name + "-voice"

    # Collect samples
    print(f"Scanning {samples_dir} for writing samples...")
    sample_paths = collect_samples(samples_dir)

    if len(sample_paths) < min_samples:
        click.echo(
            f"Error: Found {len(sample_paths)} samples, but {min_samples} are required. "
            f"Use --min-samples to lower the threshold.",
            err=True,
        )
        sys.exit(1)

    print(f"Found {len(sample_paths)} samples:")
    for p in sample_paths:
        print(f"  - {p.name}")

    # Read samples
    print("\nReading samples...")
    samples = []
    for path in sample_paths:
        try:
            text = read_sample(path)
            if text.strip():
                samples.append((path.name, text))
                print(f"  Read: {path.name} ({len(text)} chars)")
            else:
                print(f"  Skipped (empty): {path.name}")
        except Exception as e:
            print(f"  Error reading {path.name}: {e}")

    if len(samples) < min_samples:
        click.echo(
            f"Error: Only {len(samples)} readable samples, but {min_samples} are required.",
            err=True,
        )
        sys.exit(1)

    sample_texts = [text for _, text in samples]

    # ===================================================================
    # Phase 1: Measure (code only — no LLM)
    # ===================================================================
    print(f"\nPhase 1: Computing metrics from source text...")

    # Per-sample metrics
    per_sample_metrics = [compute_metrics(text) for text in sample_texts]
    per_sample_metrics = [m for m in per_sample_metrics if m]

    # Corpus-average metrics
    corpus_metrics = compute_metrics_multi(sample_texts)
    print(f"  Computed {len(corpus_metrics)} metrics across {len(samples)} samples")

    # Vocabulary profile
    vocab_profile = compute_vocabulary_profile(sample_texts)
    print(f"  Register score: {vocab_profile.get('register_score', '?')}")
    print(f"  Absent common words: {len(vocab_profile.get('absent_common_words', []))}")

    # Calibration excerpts
    calibration_excerpts = select_excerpts(samples, corpus_metrics, n=5)
    print(f"  Selected {len(calibration_excerpts)} calibration excerpts")

    # ===================================================================
    # Phase 2: LLM Analyze (per-sample qualitative analysis)
    # ===================================================================
    print(f"\nPhase 2: Analyzing {len(samples)} samples (LLM)...")
    analyses = analyze_samples(samples, model)

    # ===================================================================
    # Phase 3: LLM Synthesize (unified voice profile)
    # ===================================================================
    print(f"\nPhase 3: Synthesizing voice profile (LLM)...")
    synthesis = synthesize(analyses, model, corpus_metrics)

    # ===================================================================
    # Phase 4: Generate (code only — SKILL.md + report)
    # ===================================================================
    print(f"\nPhase 4: Generating skill and report...")
    output_dir = Path(output)

    skill_path = generate_skill(
        synthesis, corpus_metrics, vocab_profile,
        calibration_excerpts, output_dir, name,
    )
    print(f"  Skill:  {skill_path}")

    report_path = generate_report(
        synthesis, analyses, corpus_metrics,
        vocab_profile, output_dir, name,
    )
    print(f"  Report: {report_path}")

    # ===================================================================
    # Phase 5: Validate (optional)
    # ===================================================================
    if not skip_validation:
        print(f"\nPhase 5: Validating SKILL.md...")
        report = validate(
            skill_path, corpus_metrics, per_sample_metrics, model,
        )
        # Save validation report
        val_path = save_validation_report(
            report, output_dir / name / "validation.json"
        )
        print(f"  Validation report: {val_path}")
    else:
        print(f"\nPhase 5: Skipped (--skip-validation)")

    print(f"\nDone! Voice skill '{name}' generated from {len(samples)} samples.")


@cli.command()
@click.argument("samples_dir", type=click.Path(exists=True, file_okay=False))
@click.option("-o", "--output", type=click.Path(), default=None,
              help="Write metrics JSON to file.")
@click.option("--format", "fmt", type=click.Choice(["json", "table"]),
              default="table", help="Output format.")
def measure(samples_dir, output, fmt):
    """Compute deterministic metrics from writing samples (no LLM, instant).

    Phase 1 only — shows quantitative profile without running the full pipeline.
    """
    print(f"Scanning {samples_dir}...")
    sample_paths = collect_samples(samples_dir)
    if not sample_paths:
        click.echo("Error: No samples found.", err=True)
        sys.exit(1)

    print(f"Found {len(sample_paths)} samples")

    texts = []
    for path in sample_paths:
        try:
            text = read_sample(path)
            if text.strip():
                texts.append(text)
        except Exception as e:
            print(f"  Error reading {path.name}: {e}")

    if not texts:
        click.echo("Error: No readable samples.", err=True)
        sys.exit(1)

    # Compute corpus metrics
    metrics = compute_metrics_multi(texts)

    # Vocabulary profile
    vocab = compute_vocabulary_profile(texts)

    if fmt == "table":
        print(f"\n{format_metrics_table(metrics)}")
        print(f"\nRegister score: {vocab.get('register_score', '?')} (0=casual, 1=formal)")
        top_words = vocab.get("top_50_words", [])[:10]
        if top_words:
            print(f"Top 10 words: {', '.join(w for w, _ in top_words)}")
        absent = vocab.get("absent_common_words", [])
        if absent:
            print(f"Absent common words ({len(absent)}): {', '.join(absent[:15])}")
    else:
        combined = {
            "metrics": {k: v for k, v in metrics.items() if not isinstance(v, dict)},
            "fw_top50": metrics.get("fw_top50", {}),
            "vocabulary": vocab,
        }
        result = json.dumps(combined, indent=2)
        print(result)

    if output:
        combined = {
            "metrics": {k: v for k, v in metrics.items() if not isinstance(v, dict)},
            "fw_top50": metrics.get("fw_top50", {}),
            "vocabulary": vocab,
        }
        Path(output).write_text(json.dumps(combined, indent=2), encoding="utf-8")
        print(f"\nWritten to: {output}")


@cli.command(name="validate")
@click.argument("skill_path", type=click.Path(exists=True, dir_okay=False))
@click.argument("samples_dir", type=click.Path(exists=True, file_okay=False))
def validate_cmd(skill_path, samples_dir):
    """Validate a SKILL.md using leave-one-out cross-validation (no LLM, instant).

    Run after generating a skill or after manual edits.
    """
    print(f"Loading samples from {samples_dir}...")
    sample_paths = collect_samples(samples_dir)
    if not sample_paths:
        click.echo("Error: No samples found.", err=True)
        sys.exit(1)

    texts = []
    for path in sample_paths:
        try:
            text = read_sample(path)
            if text.strip():
                texts.append(text)
        except Exception as e:
            print(f"  Error reading {path.name}: {e}")

    if not texts:
        click.echo("Error: No readable samples.", err=True)
        sys.exit(1)

    # Compute target metrics
    per_sample_metrics = [compute_metrics(t) for t in texts]
    per_sample_metrics = [m for m in per_sample_metrics if m]
    target_metrics = compute_metrics_multi(texts)

    print(f"Computed targets from {len(texts)} samples")
    print(f"Validating {skill_path}...\n")

    report = validate(
        skill_path, target_metrics, per_sample_metrics,
    )

    # Save report next to skill
    skill_dir = Path(skill_path).parent
    val_path = save_validation_report(report, skill_dir / "validation.json")
    print(f"\n  Report saved: {val_path}")


if __name__ == "__main__":
    cli()
