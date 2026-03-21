"""Tests for generator.py — SKILL.md and report generation."""

import json
import pytest
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent.parent))
from generator import generate_skill, generate_report, _build_skill_body


MOCK_SYNTHESIS = {
    "author_name": "Jane Doe",
    "sample_count": 5,
    "detected_genre": "essay",
    "one_line_description": "informal, involved, explicit — conversational authority with technical precision",
    "sentence_architecture_and_rhythm": {
        "rules": [
            "Alternate long compound-complex sentences with short emphatic declarations",
            "Build long sentences by chaining clauses with commas and coordinating conjunctions",
        ],
        "do_not": [
            "NEVER chain 3+ short sentences in a row",
            "DO NOT start with passive constructions",
        ],
    },
    "voice_register_and_stance": {
        "rules": [
            "First person singular throughout",
            "Collegial tone — write as if explaining to a smart colleague",
        ],
        "do_not": [
            "NEVER use formal hedges like 'it is well known'",
        ],
    },
    "argument_and_logic_flow": {
        "rules": [
            "Lead with the conclusion, then support with evidence",
        ],
        "do_not": [
            "NEVER start with a dictionary definition",
        ],
    },
    "paragraph_organization": {
        "rules": [
            "One idea per paragraph",
        ],
        "do_not": [
            "DO NOT use furthermore, moreover, or in conclusion",
        ],
    },
    "rhetorical_devices": {
        "rules": [
            "Use concrete analogies from everyday life",
        ],
        "do_not": [
            "NEVER use rhetorical questions without answering them",
        ],
    },
    "openings_closings_and_genre": {
        "rules": [
            "Open with a specific concrete observation",
        ],
        "do_not": [
            "NEVER open with a broad platitude",
        ],
    },
    "signature_phrases": {
        "use": ["here's the thing", "let me be clear"],
        "never_use": ["at the end of the day", "it goes without saying"],
    },
    "revision_guidance": [
        "Replace 'furthermore' with 'but'",
        "Convert passive constructions to active where possible",
    ],
}

MOCK_METRICS = {
    "sent_avg_length": 17.0,
    "sent_median_length": 15.0,
    "sent_length_stddev": 8.0,
    "sent_length_min": 3.0,
    "sent_length_max": 45.0,
    "sent_pct_short": 25.0,
    "sent_pct_medium": 55.0,
    "sent_pct_long": 20.0,
    "word_avg_length": 4.5,
    "word_pct_monosyllable": 70.0,
    "contraction_rate": 2.5,
    "punct_commas_per_sent": 1.2,
    "punct_semicolons_per_sent": 0.05,
    "punct_dashes_per_100w": 0.3,
    "open_conjunction_pct": 8.0,
    "open_pronoun_pct": 30.0,
    "para_avg_sentences": 4.0,
    "para_pct_single_sent": 10.0,
    "polysyndeton_pct": 5.0,
    "punct_parens_per_100w": 0.1,
    "punct_questions_per_100w": 0.2,
    "punct_exclamations_per_100w": 0.0,
    "punct_colons_per_100w": 0.1,
    "punct_ellipses_per_100w": 0.0,
    "punct_quotes_per_100w": 0.0,
    "punct_comma_before_conj": 0.5,
}

MOCK_VOCAB = {
    "top_50_words": [("the", 50.0), ("and", 30.0), ("to", 25.0)],
    "top_20_bigrams": [("of the", 5.0), ("in the", 4.0)],
    "hedging_words": {"perhaps": 1.0, "might": 0.5},
    "filler_words": {"actually": 2.0, "basically": 1.0},
    "intensifiers": {"very": 1.5},
    "register_score": 0.4,
    "absent_common_words": ["shall", "whom", "hereby"],
}

MOCK_EXCERPTS = [
    "This is a representative passage from the author. It captures their typical rhythm and tone.",
    "Here is another excerpt showing the author's characteristic style of argumentation.",
]

MOCK_ANALYSES = [
    {
        "sample_id": "post1.md",
        "word_count": 1500,
        "sentence_architecture_and_rhythm": {
            "rules": ["Alternate long and short"],
            "do_not": ["Never chain shorts"],
        },
    },
    {
        "sample_id": "post2.md",
        "word_count": 2000,
        "sentence_architecture_and_rhythm": {
            "rules": ["Use compound sentences"],
            "do_not": ["Avoid passive"],
        },
    },
]


class TestBuildSkillBody:
    def test_includes_description(self):
        body = _build_skill_body(MOCK_SYNTHESIS, MOCK_METRICS, MOCK_VOCAB, MOCK_EXCERPTS)
        assert "informal, involved, explicit" in body

    def test_includes_quantitative_table(self):
        body = _build_skill_body(MOCK_SYNTHESIS, MOCK_METRICS, MOCK_VOCAB, MOCK_EXCERPTS)
        assert "Quantitative Targets (MANDATORY)" in body
        assert "| Metric |" in body
        assert "17" in body  # avg sentence length

    def test_includes_qualitative_dimensions(self):
        body = _build_skill_body(MOCK_SYNTHESIS, MOCK_METRICS, MOCK_VOCAB, MOCK_EXCERPTS)
        assert "Sentence Architecture & Rhythm" in body
        assert "Voice & Stance" in body
        assert "Argument & Logic Flow" in body

    def test_includes_do_not_rules(self):
        body = _build_skill_body(MOCK_SYNTHESIS, MOCK_METRICS, MOCK_VOCAB, MOCK_EXCERPTS)
        assert "NEVER chain 3+" in body
        assert "DO NOT start with passive" in body

    def test_includes_word_inventory(self):
        body = _build_skill_body(MOCK_SYNTHESIS, MOCK_METRICS, MOCK_VOCAB, MOCK_EXCERPTS)
        assert "Word Inventory" in body
        assert "here's the thing" in body
        assert "at the end of the day" in body

    def test_includes_revision_guidance(self):
        body = _build_skill_body(MOCK_SYNTHESIS, MOCK_METRICS, MOCK_VOCAB, MOCK_EXCERPTS)
        assert "Revision Guidance" in body
        assert "furthermore" in body

    def test_includes_calibration_examples(self):
        body = _build_skill_body(MOCK_SYNTHESIS, MOCK_METRICS, MOCK_VOCAB, MOCK_EXCERPTS)
        assert "Calibration Examples" in body
        assert "representative passage" in body

    def test_includes_final_check(self):
        body = _build_skill_body(MOCK_SYNTHESIS, MOCK_METRICS, MOCK_VOCAB, MOCK_EXCERPTS)
        assert "Final Check" in body
        assert "Avg sentence length" in body


class TestGenerateSkill:
    def test_creates_skill_file(self, tmp_path):
        path = generate_skill(MOCK_SYNTHESIS, MOCK_METRICS, MOCK_VOCAB, MOCK_EXCERPTS, tmp_path, "jane-voice")
        assert path.exists()
        assert path.name == "SKILL.md"
        assert path.parent.name == "jane-voice"

    def test_skill_has_frontmatter(self, tmp_path):
        path = generate_skill(MOCK_SYNTHESIS, MOCK_METRICS, MOCK_VOCAB, MOCK_EXCERPTS, tmp_path, "jane-voice")
        content = path.read_text()
        assert content.startswith("---")
        assert "name: jane-voice" in content
        assert "type: skill" in content
        assert "Jane Doe" in content
        assert "voice-cloner-v2" in content

    def test_skill_has_body(self, tmp_path):
        path = generate_skill(MOCK_SYNTHESIS, MOCK_METRICS, MOCK_VOCAB, MOCK_EXCERPTS, tmp_path, "jane-voice")
        content = path.read_text()
        assert "Quantitative Targets" in content
        assert "Sentence Architecture" in content

    def test_creates_output_directory(self, tmp_path):
        out = tmp_path / "new" / "nested"
        generate_skill(MOCK_SYNTHESIS, MOCK_METRICS, MOCK_VOCAB, MOCK_EXCERPTS, out, "test-voice")
        assert (out / "test-voice" / "SKILL.md").exists()


class TestGenerateReport:
    def test_creates_report_file(self, tmp_path):
        path = generate_report(MOCK_SYNTHESIS, MOCK_ANALYSES, MOCK_METRICS, MOCK_VOCAB, tmp_path, "jane-voice")
        assert path.exists()
        assert path.name == "analysis-report.md"
        assert path.parent.name == "jane-voice"

    def test_report_has_header(self, tmp_path):
        path = generate_report(MOCK_SYNTHESIS, MOCK_ANALYSES, MOCK_METRICS, MOCK_VOCAB, tmp_path, "jane-voice")
        content = path.read_text()
        assert "Voice Analysis Report: Jane Doe" in content
        assert "Samples analyzed:** 5" in content

    def test_report_has_per_sample_analyses(self, tmp_path):
        path = generate_report(MOCK_SYNTHESIS, MOCK_ANALYSES, MOCK_METRICS, MOCK_VOCAB, tmp_path, "jane-voice")
        content = path.read_text()
        assert "post1.md" in content
        assert "post2.md" in content
        assert "Per-Sample Analyses" in content

    def test_report_has_raw_synthesis(self, tmp_path):
        path = generate_report(MOCK_SYNTHESIS, MOCK_ANALYSES, MOCK_METRICS, MOCK_VOCAB, tmp_path, "jane-voice")
        content = path.read_text()
        assert "Raw Synthesis Data" in content

    def test_report_has_metrics(self, tmp_path):
        path = generate_report(MOCK_SYNTHESIS, MOCK_ANALYSES, MOCK_METRICS, MOCK_VOCAB, tmp_path, "jane-voice")
        content = path.read_text()
        assert "Corpus Metrics" in content

    def test_report_has_vocabulary(self, tmp_path):
        path = generate_report(MOCK_SYNTHESIS, MOCK_ANALYSES, MOCK_METRICS, MOCK_VOCAB, tmp_path, "jane-voice")
        content = path.read_text()
        assert "Vocabulary Profile" in content
        assert "Register score" in content
