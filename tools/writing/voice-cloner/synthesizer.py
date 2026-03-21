"""Phase 3: Cross-sample synthesis via `claude -p` subprocess.

Takes per-sample analyses and produces a unified voice profile.
Uses the exact same 6 dimension names as Phase 1 (no remapping).
Strict no-numbers constraint — all quantitative data handled by code.
"""

import json
import re
import time
from pathlib import Path

from llm import call_claude, extract_json

SPEC_PATH = Path(__file__).parent / "analysis-spec.md"
MAX_RETRIES = 5


def load_phase2_spec() -> str:
    """Load Phase 2 section from analysis-spec.md."""
    spec_text = SPEC_PATH.read_text(encoding="utf-8")
    match = re.search(r"(## Phase 2: Cross-Sample Synthesis.*)", spec_text, re.DOTALL)
    if not match:
        raise RuntimeError("Could not find Phase 2 section in analysis-spec.md")
    return match.group(1).strip()


def _build_prompt(spec: str, analyses: list[dict], corpus_metrics: dict | None = None) -> str:
    """Build the synthesis prompt.

    Strips _metrics from analyses before sending to LLM (metrics are
    code-only context, not for synthesis).
    """
    # Strip _metrics from analyses to avoid confusing the LLM
    clean_analyses = []
    for a in analyses:
        clean = {k: v for k, v in a.items() if not k.startswith("_")}
        clean_analyses.append(clean)

    analyses_text = json.dumps(clean_analyses, indent=2)

    # Build data-driven structural guardrails from actual metrics
    metric_block = ""
    structural_warnings = []
    if corpus_metrics:
        pct_short = corpus_metrics.get("sent_pct_short", 0)
        pct_medium = corpus_metrics.get("sent_pct_medium", 0)
        pct_long = corpus_metrics.get("sent_pct_long", 0)
        pct_single = corpus_metrics.get("para_pct_single_sent", 0)
        avg_sents = corpus_metrics.get("para_avg_sentences", 0)
        open_art = corpus_metrics.get("open_article_pct", 0)
        open_pron = corpus_metrics.get("open_pronoun_pct", 0)
        open_sub = corpus_metrics.get("open_subordinate_pct", 0)
        open_adv = corpus_metrics.get("open_adverb_pct", 0)

        metric_block = f"""
<metric_context>
The code has measured these structural features from the author's actual text:
- Sentence length: {pct_short:.0f}% short (≤10w), {pct_medium:.0f}% medium (11-25w), {pct_long:.0f}% long (>25w)
- Paragraphs: avg {avg_sents:.1f} sentences/paragraph, {pct_single:.0f}% single-sentence paragraphs
- Sentence openers: {open_art:.0f}% article, {open_pron:.0f}% pronoun, {open_sub:.0f}% subordinate, {open_adv:.0f}% adverb
These numbers are injected by code. Your rules must NOT contradict them.
</metric_context>
"""
        if pct_short < 35:
            structural_warnings.append(
                f"The author's short-sentence rate is only {pct_short:.0f}%. Do NOT write rules emphasizing fragments, brevity, punchy sentences, or staccato rhythm."
            )
        if pct_single < 40:
            structural_warnings.append(
                f"Only {pct_single:.0f}% of the author's paragraphs are single-sentence. Do NOT write rules encouraging standalone sentences or paragraph breaks for emphasis."
            )

    warnings_text = "\n".join(structural_warnings) if structural_warnings else ""

    return f"""{spec}

---

Below are the per-sample analyses for {len(analyses)} writing samples by the same author.
{metric_block}
<per_sample_analyses>
{analyses_text}
</per_sample_analyses>

REMINDER: Do NOT include any numbers, percentages, averages, or ranges in your rules.
Quantitative targets are computed by code and injected separately.

{warnings_text}

Synthesize these into a single voice profile following the Phase 2 Output Schema above.
Return ONLY the JSON object. No other text."""


def synthesize(
    analyses: list[dict],
    model: str | None = None,
    corpus_metrics: dict | None = None,
) -> dict:
    """Synthesize multiple per-sample analyses into a unified voice profile.

    Args:
        analyses: List of Phase 1 analysis dicts.
        model: Optional model name (e.g. "sonnet", "opus").
        corpus_metrics: Averaged corpus metrics from Phase 1 (used for guardrails).

    Returns:
        Synthesized voice profile dict.
    """
    spec = load_phase2_spec()
    prompt = _build_prompt(spec, analyses, corpus_metrics)

    print("  Synthesizing voice profile across all samples...")
    for attempt in range(MAX_RETRIES):
        try:
            response = call_claude(prompt, model)
            result = extract_json(response)
            print("  Synthesis complete.")
            return result
        except (json.JSONDecodeError, ValueError, RuntimeError) as e:
            if attempt < MAX_RETRIES - 1:
                print(f"    Retry {attempt + 1}/{MAX_RETRIES} for synthesis: {e}")
                time.sleep(10 * (attempt + 1))
            else:
                raise RuntimeError(f"Failed for synthesis after {MAX_RETRIES} attempts: {e}")
