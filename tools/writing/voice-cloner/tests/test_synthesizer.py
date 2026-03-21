"""Tests for synthesizer.py — prompt construction and spec loading."""

import pytest
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent.parent))
from synthesizer import load_phase2_spec, _build_prompt
from llm import extract_json


MOCK_ANALYSES = [
    {
        "sample_id": "essay1.md",
        "word_count": 1200,
        "sentence_architecture_and_rhythm": {
            "rules": ["Alternate long and short sentences"],
            "do_not": ["Never chain 3+ short sentences"],
            "evidence": ["The quick brown fox jumped."],
        },
        "_metrics": {"sent_avg_length": 15.0},  # should be stripped
    },
    {
        "sample_id": "essay2.md",
        "word_count": 800,
        "sentence_architecture_and_rhythm": {
            "rules": ["Use compound sentences with coordinating conjunctions"],
            "do_not": ["Avoid passive voice in opening sentences"],
            "evidence": ["Quickly, he moved on."],
        },
        "_metrics": {"sent_avg_length": 18.0},
    },
]


class TestExtractJson:
    def test_json_in_code_block(self):
        text = '```json\n{"author_name": "test"}\n```'
        result = extract_json(text)
        assert result == {"author_name": "test"}

    def test_raw_json(self):
        text = '{"author_name": "direct"}'
        result = extract_json(text)
        assert result["author_name"] == "direct"

    def test_no_json(self):
        with pytest.raises(ValueError):
            extract_json("No JSON here.")


class TestBuildPrompt:
    def test_includes_spec_and_analyses(self):
        spec = "## Phase 2: Cross-Sample Synthesis\n\nSynthesize..."
        prompt = _build_prompt(spec, MOCK_ANALYSES)
        assert "Phase 2" in prompt
        assert "essay1.md" in prompt
        assert "essay2.md" in prompt
        assert "<per_sample_analyses>" in prompt
        assert "2 writing samples" in prompt

    def test_strips_metrics_from_analyses(self):
        spec = "## Phase 2: Cross-Sample Synthesis\n\nSynthesize..."
        prompt = _build_prompt(spec, MOCK_ANALYSES)
        assert "_metrics" not in prompt

    def test_includes_no_numbers_reminder(self):
        spec = "spec"
        prompt = _build_prompt(spec, MOCK_ANALYSES)
        assert "NO NUMBERS" in prompt or "numbers" in prompt.lower()

    def test_includes_json_instruction(self):
        spec = "spec"
        prompt = _build_prompt(spec, MOCK_ANALYSES)
        assert "JSON" in prompt


class TestLoadPhase2Spec:
    def test_loads_spec(self):
        spec = load_phase2_spec()
        assert "Phase 2" in spec
        assert "80%" in spec or "threshold" in spec.lower()
