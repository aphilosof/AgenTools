"""Deterministic stylometric metrics — ~50 features, zero LLM.

Replaces quantitative.py with comprehensive measurements organized in 6
categories. All numbers come from code — the LLM never produces numbers.

Categories:
    1. Sentence Structure (8)
    2. Word-Level (7)
    3. Punctuation (10)
    4. Function Word Groups (9 groups + top-50 dict)
    5. Sentence Openers (5)
    6. Paragraph Structure (6)
"""

import math
import re
from collections import Counter
from pathlib import Path

# ---------------------------------------------------------------------------
# Abbreviation exceptions for sentence splitting
# ---------------------------------------------------------------------------
_ABBREV_PATH = Path(__file__).parent / "data" / "abbreviations.txt"

def _load_abbreviations() -> set[str]:
    """Load abbreviation list (e.g. Mr. Dr. U.S.) for sentence splitting."""
    if not _ABBREV_PATH.exists():
        return set()
    raw = _ABBREV_PATH.read_text(encoding="utf-8")
    return {a.strip().rstrip(".").lower() for a in raw.splitlines() if a.strip()}

_ABBREVIATIONS = _load_abbreviations()

# ---------------------------------------------------------------------------
# Function word groups (POV-independent — pronouns excluded)
# ---------------------------------------------------------------------------
FW_GROUPS = {
    "articles": {"the", "a", "an"},
    "conjunctions": {"and", "but", "or", "so", "yet", "for", "nor"},
    "prepositions": {
        "to", "of", "in", "on", "with", "at", "by", "from", "about",
        "into", "through", "during", "before", "after", "between", "without",
    },
    "demonstratives": {"this", "that", "these", "those"},
    "modals_aux": {
        "is", "was", "are", "were", "do", "does", "did",
        "would", "will", "shall", "should", "could", "can", "may", "might",
        "had", "has", "have", "been", "being",
    },
    "relatives": {"who", "whom", "which", "what", "where", "when", "how", "whose"},
    "negation": {"not", "no", "never", "neither", "nor", "nothing", "none"},
    "hedges": {
        "if", "would", "could", "might", "perhaps", "maybe", "somewhat",
        "possibly", "probably", "likely", "apparently", "seemingly",
    },
    "intensifiers": {
        "very", "really", "quite", "rather", "so", "all", "there",
        "extremely", "absolutely", "certainly", "definitely", "entirely",
    },
}

# Feature weight tiers for evaluation scoring
FEATURE_WEIGHTS = {
    # CORE (3.0)
    "sent_avg_length": 3.0,
    "sent_length_stddev": 3.0,
    "word_avg_length": 3.0,
    "punct_commas_per_sent": 3.0,
    "open_conjunction_pct": 3.0,
    "para_avg_sentences": 3.0,
    # SECONDARY (1.5)
    "sent_pct_short": 1.5,
    "sent_pct_long": 1.5,
    "word_pct_short": 1.5,
    "word_pct_long": 1.5,
    "punct_semicolons_per_sent": 1.5,
    "punct_dashes_per_100w": 1.5,
    "open_pronoun_pct": 1.5,
    "fw_articles": 1.5,
    "fw_conjunctions": 1.5,
    "fw_prepositions": 1.5,
    "contraction_rate": 1.5,
    # TERTIARY (1.0)
    "sent_median_length": 1.0,
    "word_pct_monosyllable": 1.0,
    "type_token_ratio": 1.0,
    "punct_colons_per_100w": 1.0,
    "punct_exclamations_per_100w": 1.0,
    "punct_questions_per_100w": 1.0,
    "punct_ellipses_per_100w": 1.0,
    "punct_quotes_per_100w": 1.0,
    "open_article_pct": 1.0,
    "open_adverb_pct": 1.0,
    "open_subordinate_pct": 1.0,
    "para_avg_words": 1.0,
    "para_pct_single_sent": 1.0,
    "polysyndeton_pct": 1.0,
    "fw_demonstratives": 1.0,
    "fw_modals_aux": 1.0,
    "fw_relatives": 1.0,
    "fw_negation": 1.0,
    "fw_hedges": 1.0,
    "fw_intensifiers": 1.0,
}


# ---------------------------------------------------------------------------
# Tokenization helpers
# ---------------------------------------------------------------------------

def _tokenize(text: str) -> list[str]:
    """Word tokenization — letters and apostrophes."""
    return re.findall(r"[a-zA-Z']+", text.lower())


def _split_sentences(text: str) -> list[str]:
    """Split text into sentences with abbreviation-aware rules.

    Handles: Mr., Dr., U.S., etc. — won't split on abbreviated periods.
    """
    # Normalize whitespace
    text = re.sub(r'\s+', ' ', text.strip())
    if not text:
        return []

    sentences = []
    current = []
    tokens = text.split()

    for i, token in enumerate(tokens):
        current.append(token)

        # Check if token ends with sentence-ending punctuation
        if not re.search(r'[.!?]["\')\]]?$', token):
            continue

        # Check abbreviation exception
        # Strip trailing quotes/parens to get the core word
        core = re.sub(r'["\')\]]+$', '', token)
        base = core.rstrip('.').lower()

        if base in _ABBREVIATIONS and token.endswith('.'):
            continue  # abbreviation — don't split

        # Single uppercase letter followed by period (initials like "J.")
        if re.match(r'^[A-Z]\.$', core):
            continue

        # We have a sentence boundary
        sent = ' '.join(current).strip()
        if len(_tokenize(sent)) >= 2:
            sentences.append(sent)
        current = []

    # Remaining text
    if current:
        sent = ' '.join(current).strip()
        if len(_tokenize(sent)) >= 2:
            sentences.append(sent)

    return sentences


def _split_paragraphs(text: str) -> list[str]:
    """Split text into paragraphs on blank lines."""
    paras = re.split(r'\n\s*\n', text.strip())
    return [p.strip() for p in paras if p.strip()]


def _count_syllables(word: str) -> int:
    """Rough syllable count for English words."""
    word = word.lower().rstrip("e")
    if not word:
        return 1
    count = len(re.findall(r'[aeiouy]+', word))
    return max(1, count)


def _windowed_ttr(words: list[str], window: int = 100) -> float:
    """Compute windowed type-token ratio (MATTR) to control for text length."""
    if len(words) <= window:
        unique = len(set(words))
        return unique / len(words) if words else 0.0

    ratios = []
    for start in range(0, len(words) - window + 1, window // 2):
        chunk = words[start:start + window]
        ratios.append(len(set(chunk)) / len(chunk))
    return sum(ratios) / len(ratios) if ratios else 0.0


# ---------------------------------------------------------------------------
# Contraction detection
# ---------------------------------------------------------------------------
_CONTRACTION_PATTERN = re.compile(
    r"\b\w+(n't|'re|'ve|'ll|'d|'s|'m)\b", re.IGNORECASE
)


# ---------------------------------------------------------------------------
# Common adverbs and subordinating conjunctions for opener detection
# ---------------------------------------------------------------------------
_ADVERB_OPENERS = {
    "however", "moreover", "furthermore", "nevertheless", "meanwhile",
    "consequently", "subsequently", "unfortunately", "fortunately",
    "naturally", "obviously", "clearly", "certainly", "indeed",
    "perhaps", "suddenly", "slowly", "quickly", "often", "sometimes",
    "rarely", "always", "never", "here", "now", "then", "still",
    "also", "instead", "otherwise", "finally", "first", "second",
    "third", "next", "eventually", "recently", "currently", "typically",
    "generally", "usually", "apparently", "essentially", "importantly",
}

_SUBORDINATE_OPENERS = {
    "if", "when", "while", "although", "though", "because", "since",
    "unless", "until", "where", "whereas", "whenever", "wherever",
    "after", "before", "as", "once",
}

_PRONOUN_OPENERS = {"i", "he", "she", "they", "we", "it", "you"}
_ARTICLE_OPENERS = {"the", "a", "an"}
_CONJUNCTION_OPENERS = {"and", "but", "or", "so", "yet", "for", "nor"}

# ---------------------------------------------------------------------------
# Oxford comma detection
# ---------------------------------------------------------------------------

def _detect_oxford_comma(text: str) -> float:
    """Detect Oxford comma usage. Returns ratio of lists using Oxford comma.

    Looks for patterns like "X, Y, and Z" (Oxford) vs "X, Y and Z" (no Oxford).
    Returns -1.0 if no list patterns found.
    """
    oxford = len(re.findall(r',\s+\w+,\s+and\s+', text, re.IGNORECASE))
    no_oxford = len(re.findall(r',\s+\w+\s+and\s+', text, re.IGNORECASE))
    total = oxford + no_oxford
    if total == 0:
        return -1.0  # no data
    return oxford / total


# ---------------------------------------------------------------------------
# Main compute function
# ---------------------------------------------------------------------------

def compute_metrics(text: str) -> dict:
    """Compute ~50 deterministic stylometric features from text.

    Returns a flat dict of metric_name -> float value.
    """
    sentences = _split_sentences(text)
    words = _tokenize(text)
    total_words = len(words)
    n_sents = len(sentences)

    if total_words < 10 or n_sents < 2:
        return {}

    metrics = {}
    word_counts = Counter(words)

    # ===================================================================
    # 1. SENTENCE STRUCTURE (8)
    # ===================================================================
    sentence_lengths = [len(_tokenize(s)) for s in sentences]
    sl_mean = sum(sentence_lengths) / n_sents

    metrics["sent_avg_length"] = sl_mean

    sorted_lengths = sorted(sentence_lengths)
    mid = n_sents // 2
    if n_sents % 2 == 0:
        metrics["sent_median_length"] = (sorted_lengths[mid - 1] + sorted_lengths[mid]) / 2
    else:
        metrics["sent_median_length"] = float(sorted_lengths[mid])

    if n_sents > 1:
        variance = sum((x - sl_mean) ** 2 for x in sentence_lengths) / n_sents
        metrics["sent_length_stddev"] = math.sqrt(variance)
    else:
        metrics["sent_length_stddev"] = 0.0

    metrics["sent_length_min"] = float(min(sentence_lengths))
    metrics["sent_length_max"] = float(max(sentence_lengths))
    metrics["sent_pct_short"] = sum(1 for sl in sentence_lengths if sl <= 10) / n_sents * 100
    metrics["sent_pct_medium"] = sum(1 for sl in sentence_lengths if 11 <= sl <= 25) / n_sents * 100
    metrics["sent_pct_long"] = sum(1 for sl in sentence_lengths if sl > 25) / n_sents * 100

    # ===================================================================
    # 2. WORD-LEVEL (7)
    # ===================================================================
    word_lengths = [len(w) for w in words]
    metrics["word_avg_length"] = sum(word_lengths) / total_words
    metrics["word_pct_short"] = sum(1 for wl in word_lengths if wl <= 4) / total_words * 100
    metrics["word_pct_long"] = sum(1 for wl in word_lengths if wl >= 8) / total_words * 100
    metrics["word_pct_monosyllable"] = (
        sum(1 for w in words if _count_syllables(w) == 1) / total_words * 100
    )
    metrics["type_token_ratio"] = _windowed_ttr(words)
    # Hapax ratio: words appearing exactly once
    hapax = sum(1 for w, c in word_counts.items() if c == 1)
    metrics["hapax_ratio"] = hapax / total_words * 100
    # Contraction rate per 100 words
    contraction_count = len(_CONTRACTION_PATTERN.findall(text))
    metrics["contraction_rate"] = (contraction_count / total_words) * 100

    # ===================================================================
    # 3. PUNCTUATION (10)
    # ===================================================================
    metrics["punct_commas_per_sent"] = text.count(",") / n_sents
    metrics["punct_semicolons_per_sent"] = text.count(";") / n_sents
    metrics["punct_colons_per_100w"] = (text.count(":") / total_words) * 100
    # Dashes: em dash (—) and en dash (–) and double hyphen (--)
    dash_count = text.count("—") + text.count("–") + text.count("--")
    metrics["punct_dashes_per_100w"] = (dash_count / total_words) * 100
    # Parentheses (count opening parens)
    metrics["punct_parens_per_100w"] = (text.count("(") / total_words) * 100
    metrics["punct_exclamations_per_100w"] = (text.count("!") / total_words) * 100
    metrics["punct_questions_per_100w"] = (text.count("?") / total_words) * 100
    # Ellipses: both … and ...
    ellipsis_count = text.count("…") + len(re.findall(r'\.{3}', text))
    metrics["punct_ellipses_per_100w"] = (ellipsis_count / total_words) * 100
    # Quotes: both " " and " "
    quote_count = (
        text.count('"') + text.count('"') + text.count('"') + text.count("'") + text.count("'")
    ) // 2  # pairs
    metrics["punct_quotes_per_100w"] = (quote_count / total_words) * 100
    # Oxford comma signal
    metrics["punct_comma_before_conj"] = _detect_oxford_comma(text)

    # ===================================================================
    # 4. FUNCTION WORD GROUPS (9 groups + top-50 dict)
    # ===================================================================
    for group_name, group_words in FW_GROUPS.items():
        count = sum(word_counts.get(w, 0) for w in group_words)
        metrics[f"fw_{group_name}"] = (count / total_words) * 100

    # Top-50 most frequent words with per-1000 rates
    top50 = word_counts.most_common(50)
    metrics["fw_top50"] = {w: round((c / total_words) * 1000, 2) for w, c in top50}

    # ===================================================================
    # 5. SENTENCE OPENERS (5)
    # ===================================================================
    first_words = []
    for s in sentences:
        tokens = _tokenize(s)
        if tokens:
            first_words.append(tokens[0])

    n_first = len(first_words)
    if n_first > 0:
        metrics["open_conjunction_pct"] = (
            sum(1 for w in first_words if w in _CONJUNCTION_OPENERS) / n_first * 100
        )
        metrics["open_pronoun_pct"] = (
            sum(1 for w in first_words if w in _PRONOUN_OPENERS) / n_first * 100
        )
        metrics["open_article_pct"] = (
            sum(1 for w in first_words if w in _ARTICLE_OPENERS) / n_first * 100
        )
        metrics["open_adverb_pct"] = (
            sum(1 for w in first_words if w in _ADVERB_OPENERS) / n_first * 100
        )
        metrics["open_subordinate_pct"] = (
            sum(1 for w in first_words if w in _SUBORDINATE_OPENERS) / n_first * 100
        )
    else:
        for key in ("open_conjunction_pct", "open_pronoun_pct", "open_article_pct",
                     "open_adverb_pct", "open_subordinate_pct"):
            metrics[key] = 0.0

    # ===================================================================
    # 6. PARAGRAPH STRUCTURE (6)
    # ===================================================================
    paragraphs = _split_paragraphs(text)
    if paragraphs:
        para_sent_counts = []
        para_word_counts = []
        for para in paragraphs:
            p_sents = _split_sentences(para)
            p_words = _tokenize(para)
            para_sent_counts.append(len(p_sents) if p_sents else 1)
            para_word_counts.append(len(p_words))

        n_para = len(paragraphs)
        avg_para_sents = sum(para_sent_counts) / n_para
        metrics["para_avg_sentences"] = avg_para_sents
        metrics["para_avg_words"] = sum(para_word_counts) / n_para

        if n_para > 1:
            var = sum((x - avg_para_sents) ** 2 for x in para_sent_counts) / n_para
            metrics["para_stddev_sentences"] = math.sqrt(var)
        else:
            metrics["para_stddev_sentences"] = 0.0

        metrics["para_pct_single_sent"] = (
            sum(1 for c in para_sent_counts if c == 1) / n_para * 100
        )
        metrics["para_pct_long"] = (
            sum(1 for c in para_sent_counts if c >= 6) / n_para * 100
        )
    else:
        metrics["para_avg_sentences"] = 0.0
        metrics["para_avg_words"] = 0.0
        metrics["para_stddev_sentences"] = 0.0
        metrics["para_pct_single_sent"] = 0.0
        metrics["para_pct_long"] = 0.0

    # Polysyndeton ratio (3+ "and" in one sentence)
    polysyndeton_count = sum(
        1 for s in sentences
        if len(re.findall(r'\band\b', s, re.IGNORECASE)) >= 3
    )
    metrics["polysyndeton_pct"] = (polysyndeton_count / n_sents) * 100

    return metrics


def compute_metrics_multi(texts: list[str]) -> dict:
    """Compute averaged metrics across multiple texts.

    The fw_top50 dict is averaged per-word across texts.
    All other numeric metrics are simple averages.
    """
    all_metrics = [compute_metrics(t) for t in texts]
    all_metrics = [m for m in all_metrics if m]

    if not all_metrics:
        return {}

    # Separate scalar keys from dict keys
    scalar_keys = [k for k in all_metrics[0] if not isinstance(all_metrics[0][k], dict)]
    averaged = {}

    for key in scalar_keys:
        values = [m[key] for m in all_metrics if key in m]
        averaged[key] = sum(values) / len(values) if values else 0.0

    # Average fw_top50 dicts
    if "fw_top50" in all_metrics[0]:
        all_words = set()
        for m in all_metrics:
            all_words.update(m.get("fw_top50", {}).keys())
        top50_avg = {}
        for word in all_words:
            vals = [m.get("fw_top50", {}).get(word, 0) for m in all_metrics]
            top50_avg[word] = round(sum(vals) / len(vals), 2)
        # Keep only top 50 by averaged rate
        sorted_words = sorted(top50_avg.items(), key=lambda x: -x[1])[:50]
        averaged["fw_top50"] = dict(sorted_words)

    return averaged


def format_metrics_table(metrics: dict) -> str:
    """Format metrics as a readable table (for CLI output and reports)."""
    lines = []
    lines.append(f"{'Metric':<35} {'Value':>10}")
    lines.append("-" * 47)
    for key, val in sorted(metrics.items()):
        if key == "fw_top50":
            continue  # skip dict in table
        if key == "punct_comma_before_conj" and val < 0:
            lines.append(f"{key:<35} {'N/A':>10}")
        else:
            lines.append(f"{key:<35} {val:>10.2f}")
    return "\n".join(lines)
