"""Calibration excerpt selector.

Picks the most representative ~150-word passages from the author's samples
for inclusion as calibration examples in SKILL.md. Research (EMNLP 2025)
shows 2-3 verbatim excerpts dramatically improve style consistency.

Selection strategy:
    1. Split all samples into ~150-word passages at paragraph boundaries.
    2. Score each passage by WMAPE distance from the corpus-average metrics.
    3. Select the 3 most representative (lowest distance) passages.
    4. Diversity constraint: at least 2 different source samples.
"""

import re
from metrics import compute_metrics, _tokenize, _split_sentences


def _split_into_passages(
    text: str,
    source_id: str,
    target_words: int = 150,
    min_words: int = 80,
) -> list[dict]:
    """Split a text into ~target_words passages at paragraph boundaries.

    Returns list of {"text": str, "source": str, "word_count": int}.
    """
    paragraphs = re.split(r'\n\s*\n', text.strip())
    paragraphs = [p.strip() for p in paragraphs if p.strip()]

    passages = []
    current_paras = []
    current_words = 0

    for para in paragraphs:
        para_words = len(_tokenize(para))
        if current_words + para_words > target_words * 1.3 and current_words >= min_words:
            # Emit current passage
            passage_text = "\n\n".join(current_paras)
            passages.append({
                "text": passage_text,
                "source": source_id,
                "word_count": current_words,
            })
            current_paras = [para]
            current_words = para_words
        else:
            current_paras.append(para)
            current_words += para_words

    # Emit remaining
    if current_paras and current_words >= min_words:
        passage_text = "\n\n".join(current_paras)
        passages.append({
            "text": passage_text,
            "source": source_id,
            "word_count": current_words,
        })

    return passages


def _wmape_distance(metrics_a: dict, metrics_b: dict) -> float:
    """Weighted mean absolute percentage error between two metric dicts.

    Skips dict-valued keys (like fw_top50) and negative values (no data).
    """
    total_weight = 0.0
    total_error = 0.0

    for key in metrics_a:
        if key not in metrics_b:
            continue
        a = metrics_a[key]
        b = metrics_b[key]
        if isinstance(a, dict) or isinstance(b, dict):
            continue
        if a < 0 or b < 0:
            continue  # skip no-data markers
        denom = max(abs(a), abs(b), 0.01)
        error = abs(a - b) / denom
        total_error += error
        total_weight += 1

    if total_weight == 0:
        return float("inf")
    return total_error / total_weight


def _has_single_sent_paragraph(text: str) -> bool:
    """Check if passage contains at least one single-sentence paragraph."""
    paras = re.split(r'\n\s*\n', text.strip())
    for p in paras:
        p = p.strip()
        if not p:
            continue
        sents = _split_sentences(p)
        if len(sents) == 1:
            return True
    return False


def select_excerpts(
    texts: list[tuple[str, str]],
    target_metrics: dict,
    n: int = 3,
    target_words: int = 150,
) -> list[str]:
    """Select the most representative passages as calibration excerpts.

    Args:
        texts: List of (source_id, text) tuples.
        target_metrics: Corpus-average metrics from compute_metrics_multi.
        n: Number of excerpts to select.
        target_words: Target passage length in words.

    Returns:
        List of passage texts, most representative first.
    """
    # Split all samples into passages
    all_passages = []
    for source_id, text in texts:
        passages = _split_into_passages(text, source_id, target_words)
        all_passages.extend(passages)

    if not all_passages:
        return []

    # Score each passage by distance from target metrics
    scored = []
    target_short_pct = target_metrics.get("sent_pct_short", 0)
    for passage in all_passages:
        passage_metrics = compute_metrics(passage["text"])
        if not passage_metrics:
            continue
        # Sentence distribution filter: reject passages with excessive short sentences
        passage_short_pct = passage_metrics.get("sent_pct_short", 0)
        if passage_short_pct > target_short_pct + 20:
            continue
        dist = _wmape_distance(passage_metrics, target_metrics)
        scored.append((dist, passage))

    scored.sort(key=lambda x: x[0])

    if not scored:
        return []

    # Select with diversity constraint: at least 2 different sources
    selected = []
    sources_used = set()

    for dist, passage in scored:
        if len(selected) >= n:
            break
        selected.append(passage)
        sources_used.add(passage["source"])

    # If we only have 1 source and there are others available, swap the last
    if len(sources_used) < 2 and len(selected) >= 2:
        other_source_passages = [
            (d, p) for d, p in scored
            if p["source"] != selected[0]["source"]
        ]
        if other_source_passages:
            selected[-1] = other_source_passages[0][1]

    # Paragraph structure requirement: ensure at least 1 excerpt has a
    # single-sentence paragraph
    has_single = any(_has_single_sent_paragraph(p["text"]) for p in selected)
    if not has_single and len(selected) >= 2:
        selected_set = {id(p) for p in selected}
        for _, passage in scored:
            if id(passage) in selected_set:
                continue
            if _has_single_sent_paragraph(passage["text"]):
                # Swap out the least representative (last) selected passage
                selected[-1] = passage
                break

    return [p["text"] for p in selected]
