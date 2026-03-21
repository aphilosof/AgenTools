"""Word frequency fingerprint and register analysis.

Provides vocabulary profiling that goes beyond basic metrics:
- Top 50 words and top 20 bigrams by frequency
- Category-specific word rates (hedging, filler, intensifier)
- Register score (casual ↔ formal)
- Absent common words (top-200 English words the author never uses)
"""

import re
from collections import Counter

# ---------------------------------------------------------------------------
# Common English words (top ~200 by corpus frequency)
# ---------------------------------------------------------------------------
_TOP_200_ENGLISH = {
    "the", "be", "to", "of", "and", "a", "in", "that", "have", "i",
    "it", "for", "not", "on", "with", "he", "as", "you", "do", "at",
    "this", "but", "his", "by", "from", "they", "we", "say", "her", "she",
    "or", "an", "will", "my", "one", "all", "would", "there", "their", "what",
    "so", "up", "out", "if", "about", "who", "get", "which", "go", "me",
    "when", "make", "can", "like", "time", "no", "just", "him", "know", "take",
    "people", "into", "year", "your", "good", "some", "could", "them", "see",
    "other", "than", "then", "now", "look", "only", "come", "its", "over",
    "think", "also", "back", "after", "use", "two", "how", "our", "work",
    "first", "well", "way", "even", "new", "want", "because", "any", "these",
    "give", "day", "most", "us", "is", "are", "was", "were", "been", "has",
    "had", "did", "more", "very", "much", "own", "may", "still", "should",
    "here", "such", "where", "those", "each", "before", "between", "must",
    "through", "being", "same", "too", "long", "made", "many", "thing",
    "might", "right", "great", "old", "every", "never", "while", "last",
    "let", "thought", "life", "world", "man", "another", "down", "under",
    "part", "again", "place", "find", "since", "little", "hand", "high",
    "keep", "put", "large", "small", "end", "does", "next", "why", "help",
    "line", "turn", "need", "house", "point", "number", "call", "head",
    "state", "move", "show", "few", "off", "big", "set", "try", "ask",
    "change", "follow", "came", "left", "went", "tell", "children", "side",
    "night", "without", "begin", "once", "water", "shall", "something",
    "nothing", "however", "yet", "both", "always", "already",
}

# Hedging words
_HEDGING_WORDS = {
    "perhaps", "maybe", "possibly", "probably", "likely", "unlikely",
    "somewhat", "apparently", "seemingly", "suggests", "might", "could",
    "may", "tends", "appears", "arguably", "roughly", "approximately",
    "generally", "typically", "usually", "often", "sometimes",
}

# Filler/discourse markers
_FILLER_WORDS = {
    "essentially", "basically", "actually", "literally", "honestly",
    "frankly", "interestingly", "importantly", "notably", "obviously",
    "clearly", "simply", "really", "just", "well", "anyway", "look",
    "indeed", "certainly", "surely", "naturally", "of course",
}

# Intensifiers
_INTENSIFIER_WORDS = {
    "very", "extremely", "incredibly", "remarkably", "absolutely",
    "utterly", "completely", "totally", "entirely", "thoroughly",
    "deeply", "highly", "particularly", "especially", "significantly",
    "considerably", "substantially", "enormously", "tremendously",
    "profoundly", "vastly", "immensely", "exceedingly", "terribly",
}

# Formality markers
_FORMAL_MARKERS = {
    "furthermore", "moreover", "nevertheless", "notwithstanding",
    "accordingly", "consequently", "henceforth", "thereby", "wherein",
    "whereas", "hereby", "thereof", "pursuant", "heretofore",
    "subsequently", "aforementioned", "hitherto", "thus", "hence",
    "therefore", "shall", "constitute", "pertaining", "regarding",
}

_INFORMAL_MARKERS = {
    "gonna", "wanna", "gotta", "kinda", "sorta", "yeah", "yep",
    "nah", "ok", "okay", "hey", "hi", "wow", "cool", "awesome",
    "stuff", "thing", "things", "lot", "lots", "tons", "bunch",
    "pretty", "super", "totally", "basically", "literally", "like",
}


def _tokenize(text: str) -> list[str]:
    """Word tokenization — consistent with metrics.py."""
    return re.findall(r"[a-zA-Z']+", text.lower())


def compute_vocabulary_profile(texts: list[str]) -> dict:
    """Compute vocabulary fingerprint across multiple texts.

    Args:
        texts: List of writing sample texts.

    Returns:
        dict with:
            top_50_words: [(word, per_1000_rate), ...]
            top_20_bigrams: [(bigram, per_1000_rate), ...]
            hedging_words: {word: per_1000_rate}
            filler_words: {word: per_1000_rate}
            intensifiers: {word: per_1000_rate}
            register_score: 0.0 (casual) to 1.0 (formal)
            absent_common_words: [words from top-200 English the author never uses]
    """
    # Combine all texts for vocabulary analysis
    all_words = []
    for text in texts:
        all_words.extend(_tokenize(text))

    total = len(all_words)
    if total == 0:
        return {
            "top_50_words": [],
            "top_20_bigrams": [],
            "hedging_words": {},
            "filler_words": {},
            "intensifiers": {},
            "register_score": 0.5,
            "absent_common_words": [],
        }

    word_counts = Counter(all_words)

    # Top 50 words with per-1000 rates
    top_50 = [
        (w, round((c / total) * 1000, 2))
        for w, c in word_counts.most_common(50)
    ]

    # Top 20 bigrams
    bigrams = []
    for text in texts:
        tokens = _tokenize(text)
        for i in range(len(tokens) - 1):
            bigrams.append(f"{tokens[i]} {tokens[i+1]}")
    bigram_counts = Counter(bigrams)
    top_20_bigrams = [
        (bg, round((c / total) * 1000, 2))
        for bg, c in bigram_counts.most_common(20)
    ]

    # Category-specific rates
    def _category_rates(category_words: set) -> dict:
        rates = {}
        for word in category_words:
            count = word_counts.get(word, 0)
            if count > 0:
                rates[word] = round((count / total) * 1000, 2)
        return dict(sorted(rates.items(), key=lambda x: -x[1]))

    hedging = _category_rates(_HEDGING_WORDS)
    fillers = _category_rates(_FILLER_WORDS)
    intensifiers = _category_rates(_INTENSIFIER_WORDS)

    # Register score: ratio of formal to (formal + informal) markers
    formal_count = sum(word_counts.get(w, 0) for w in _FORMAL_MARKERS)
    informal_count = sum(word_counts.get(w, 0) for w in _INFORMAL_MARKERS)
    marker_total = formal_count + informal_count
    if marker_total > 0:
        register_score = formal_count / marker_total
    else:
        # Fall back to contraction heuristic: more contractions = less formal
        contraction_count = len(re.findall(
            r"\b\w+(n't|'re|'ve|'ll|'d|'m)\b", " ".join(texts), re.IGNORECASE
        ))
        contraction_rate = contraction_count / total
        # Map: 0 contractions → 0.7, heavy contractions → 0.3
        register_score = max(0.0, min(1.0, 0.7 - contraction_rate * 10))

    # Absent common words: top-200 words the author never uses
    used_words = set(word_counts.keys())
    absent = sorted(_TOP_200_ENGLISH - used_words)

    return {
        "top_50_words": top_50,
        "top_20_bigrams": top_20_bigrams,
        "hedging_words": hedging,
        "filler_words": fillers,
        "intensifiers": intensifiers,
        "register_score": round(register_score, 2),
        "absent_common_words": absent,
    }
