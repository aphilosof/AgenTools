"""Phase 2: Per-sample voice analysis via `claude -p` subprocess.

Analyzes each writing sample across 6 qualitative dimensions.
Receives pre-computed metrics as read-only context so the LLM
describes patterns, not numbers.
"""

import json
import re
import time
from pathlib import Path

from llm import call_claude, extract_json
from metrics import compute_metrics, format_metrics_table

SPEC_PATH = Path(__file__).parent / "analysis-spec.md"
MAX_SAMPLE_CHARS = 30_000
MAX_RETRIES = 5


def load_phase1_spec() -> str:
    """Load Phase 1 section from analysis-spec.md."""
    spec_text = SPEC_PATH.read_text(encoding="utf-8")
    match = re.search(
        r"(## Phase 1: Per-Sample Analysis.*?)(?=## Phase 2:)",
        spec_text,
        re.DOTALL,
    )
    if not match:
        raise RuntimeError("Could not find Phase 1 section in analysis-spec.md")
    return match.group(1).strip()


def _build_prompt(
    spec: str,
    sample_text: str,
    filename: str,
    metrics: dict,
) -> str:
    """Build the analysis prompt for a single sample.

    Includes pre-computed metrics as read-only context so the LLM
    can reference them but is instructed NOT to restate numbers.
    """
    # Format metrics for context (exclude dict values like fw_top50)
    metrics_lines = []
    for key, val in sorted(metrics.items()):
        if isinstance(val, dict):
            continue
        if key == "punct_comma_before_conj" and val < 0:
            metrics_lines.append(f"  {key}: N/A (no data)")
        else:
            metrics_lines.append(f"  {key}: {val:.2f}")
    metrics_block = "\n".join(metrics_lines)

    return f"""{spec}

---

Analyze the following writing sample. The filename is "{filename}".

<measured_metrics>
These are deterministic measurements computed from the text. They are provided
for your reference ONLY. Do NOT restate any of these numbers in your analysis.
Your job is to describe QUALITATIVE patterns, not quantitative ones.

{metrics_block}
</measured_metrics>

<writing_sample>
{sample_text}
</writing_sample>

Return ONLY the JSON object as specified in the Phase 1 Output Schema above. No other text."""


def analyze_sample(
    sample_text: str,
    filename: str,
    model: str | None = None,
) -> dict:
    """Analyze a single writing sample via claude -p. Retries on JSON errors.

    Also computes deterministic metrics and includes them as context for the LLM.
    """
    spec = load_phase1_spec()

    if len(sample_text) > MAX_SAMPLE_CHARS:
        sample_text = sample_text[:MAX_SAMPLE_CHARS] + "\n\n[... truncated at 30,000 characters ...]"

    # Compute deterministic metrics for this sample
    metrics = compute_metrics(sample_text)

    prompt = _build_prompt(spec, sample_text, filename, metrics)

    for attempt in range(MAX_RETRIES):
        try:
            response = call_claude(prompt, model)
            result = extract_json(response)
            result["sample_id"] = filename
            result["_metrics"] = metrics  # attach for downstream use
            return result
        except (json.JSONDecodeError, ValueError, RuntimeError) as e:
            if attempt < MAX_RETRIES - 1:
                print(f"    Retry {attempt + 1}/{MAX_RETRIES} for {filename}: {e}")
                time.sleep(10 * (attempt + 1))
            else:
                raise RuntimeError(f"Failed for {filename} after {MAX_RETRIES} attempts: {e}")


def analyze_samples(
    samples: list[tuple[str, str]],
    model: str | None = None,
) -> list[dict]:
    """Analyze multiple samples sequentially with progress output.

    Args:
        samples: List of (filename, text) tuples.
        model: Optional model name (e.g. "sonnet", "opus").

    Returns:
        List of analysis dicts (each with _metrics attached).
    """
    analyses = []
    total = len(samples)

    for i, (filename, text) in enumerate(samples, 1):
        print(f"  [{i}/{total}] Analyzing: {filename}")
        analysis = analyze_sample(text, filename, model)
        analyses.append(analysis)
        word_count = analysis.get("word_count", "?")
        print(f"  [{i}/{total}] Done ({word_count} words)")

    return analyses
