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


# ---------------------------------------------------------------------------
# Noise stripping — remove non-voice content from passages
# ---------------------------------------------------------------------------

# Patterns that are document scaffolding, not writing voice
_NOISE_PATTERNS = [
    # Email addresses
    re.compile(r'\S+@\S+\.\S+'),
    # URLs
    re.compile(r'https?://\S+'),
    # Phone numbers
    re.compile(r'\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}'),
    # Dates at line start (e.g. "February 6, 2026" or "December 16, 2025")
    re.compile(r'^(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},?\s+\d{4}\s*$', re.MULTILINE),
    # Citation brackets like [1], [2, 3], [Smith et al., 2020]
    re.compile(r'\[[\d,;\s]+\]'),
    re.compile(r'\[[A-Z][a-z]+ et al\.?,?\s*\d{4}\]'),
    # Parenthetical citations like (Friess et al., 2022, PLoS Climate)
    re.compile(r'\([A-Z][a-z]+ et al\.?,?\s*\d{4}[^)]*\)'),
    # Parenthetical single citations like (Smith, 2020) or (90) (91)
    re.compile(r'\(\d{1,3}\)'),
    re.compile(r'\([A-Z][a-z]+(?:\s+(?:&|and)\s+[A-Z][a-z]+)?,\s*\d{4}\)'),
    # Inline citations like "Suttle & Chan, 1993" or "Wilson et al., 1993"
    # (only when in parenthetical context — handled above)
    # LinkedIn / Github / Google Scholar links as text
    re.compile(r'\b(?:LinkedIn|Github|Google Scholar)\b'),
    # "RE:" subject lines
    re.compile(r'^RE:.*$', re.MULTILINE),
    # Salutation lines ("Dear X," or "Dear X Hiring Team,")
    re.compile(r'^Dear\s+.{3,60},?\s*$', re.MULTILINE),
    # Sign-off lines
    re.compile(r'^(?:Sincerely|Regards|Best regards|Thank you for your consideration)[,.]?\s*$', re.MULTILINE),
    # Author name/credential lines (Name, Ph.D. or Name, PhD on their own line)
    re.compile(r'^[A-Z][a-z]+ [A-Z][a-z]+,?\s*(?:Ph\.?D\.?|M\.?S\.?|M\.?D\.?)\s*$', re.MULTILINE),
    # Author bylines like "G. Hevroni and A. Philosof" or "J. Smith"
    re.compile(r'^[A-Z]\.\s+[A-Z][a-z]+(?:\s+and\s+[A-Z]\.\s+[A-Z][a-z]+)?\s*$', re.MULTILINE),
    # Address lines (City, ST ZIP)
    re.compile(r'^[A-Z][a-z]+(?:\s[A-Z][a-z]+)?,\s*[A-Z]{2}\s+\d{5}\s*$', re.MULTILINE),
    # Page numbers on their own line
    re.compile(r'^\d{1,3}\s*$', re.MULTILINE),
    # Section numbers on their own line (e.g. "2.2" or "3.1.1")
    re.compile(r'^\d+\.\d+(?:\.\d+)?\s*$', re.MULTILINE),
    # Pipe-separated contact info lines
    re.compile(r'^.*\|.*\|.*$', re.MULTILINE),
    # Markdown headers (# Header, ## Header, ### Header)
    re.compile(r'^#{1,6}\s+.*$', re.MULTILINE),
    # Markdown horizontal rules (---, ***, ___)
    re.compile(r'^[-*_]{3,}\s*$', re.MULTILINE),
    # Figure/table captions ("Fig. 3 ...", "Figure 3:", "Table 1:")
    re.compile(r'^(?:Fig\.?\s*\d|Figure\s+\d|Table\s+\d).*$', re.MULTILINE),
    # Stray formatting artifacts from PDF extraction (e.g. "****", "(a)", "(b)")
    re.compile(r'^\*{2,}\s*$', re.MULTILINE),
    re.compile(r'^\([a-z]\)\s*$', re.MULTILINE),
    # Application/form question prompts ("Question 3: Please provide...")
    re.compile(r'^(?:Question|Q)\s*\d+[.:]\s+.*$', re.MULTILINE),
    # Orphan citation labels on their own line ("Jia 2010", "Smith 2015")
    re.compile(r'^[A-Z][a-z]+\s+\d{4}\s*$', re.MULTILINE),
]


def _clean_passage(text: str) -> str:
    """Strip non-voice noise from a passage (headers, emails, citations, etc.)."""
    for pattern in _NOISE_PATTERNS:
        text = pattern.sub('', text)
    # Collapse multiple blank lines
    text = re.sub(r'\n{3,}', '\n\n', text)
    # Strip leading/trailing whitespace per line and drop short non-prose debris
    cleaned_lines = []
    for line in text.split('\n'):
        line = line.strip()
        if not line:
            cleaned_lines.append('')
            continue
        # Drop lines that are just 1-2 words (debris from stripping patterns)
        # unless they're blank-line separators
        words_in_line = len(line.split())
        if words_in_line <= 2 and not line.endswith('.'):
            continue
        cleaned_lines.append(line)
    # Remove empty lines at start/end
    while cleaned_lines and not cleaned_lines[0]:
        cleaned_lines.pop(0)
    while cleaned_lines and not cleaned_lines[-1]:
        cleaned_lines.pop()
    return '\n'.join(cleaned_lines)


def _truncate_at_sentence(text: str, max_words: int) -> str:
    """Truncate text at a sentence boundary to stay within max_words."""
    sentences = _split_sentences(text)
    result = []
    word_count = 0
    for sent in sentences:
        sent_words = len(_tokenize(sent))
        if word_count + sent_words > max_words and word_count > 0:
            break
        result.append(sent)
        word_count += sent_words
    return ' '.join(result)


def _split_into_passages(
    text: str,
    source_id: str,
    target_words: int = 150,
    min_words: int = 80,
    max_words: int = 200,
) -> list[dict]:
    """Split a text into ~target_words passages at paragraph boundaries.

    Returns list of {"text": str, "source": str, "word_count": int}.
    Hard-caps passages at max_words by truncating at sentence boundaries.
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
            wc = len(_tokenize(passage_text))
            if wc > max_words:
                passage_text = _truncate_at_sentence(passage_text, max_words)
                wc = len(_tokenize(passage_text))
            if wc >= min_words:
                passages.append({
                    "text": passage_text,
                    "source": source_id,
                    "word_count": wc,
                })
            current_paras = [para]
            current_words = para_words
        else:
            current_paras.append(para)
            current_words += para_words

    # Emit remaining
    if current_paras and current_words >= min_words:
        passage_text = "\n\n".join(current_paras)
        wc = len(_tokenize(passage_text))
        if wc > max_words:
            passage_text = _truncate_at_sentence(passage_text, max_words)
            wc = len(_tokenize(passage_text))
        if wc >= min_words:
            passages.append({
                "text": passage_text,
                "source": source_id,
                "word_count": wc,
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

    # Clean noise from selected passages before returning
    cleaned = []
    for p in selected:
        text = _clean_passage(p["text"])
        if len(_tokenize(text)) >= 40:  # skip if cleaning gutted it
            cleaned.append(text)
    return cleaned
