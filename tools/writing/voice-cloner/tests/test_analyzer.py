"""Tests for analyzer.py — prompt construction and spec loading."""

import pytest
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent.parent))
from analyzer import load_phase1_spec, _build_prompt
from llm import extract_json


class TestExtractJson:
    def test_json_in_code_block(self):
        text = 'Here is the analysis:\n```json\n{"key": "value", "num": 42}\n```\nDone.'
        result = extract_json(text)
        assert result == {"key": "value", "num": 42}

    def test_json_in_code_block_no_lang(self):
        text = 'Result:\n```\n{"key": "value"}\n```'
        result = extract_json(text)
        assert result == {"key": "value"}

    def test_raw_json(self):
        text = 'Here is the result: {"key": "value", "nested": {"a": 1}}'
        result = extract_json(text)
        assert result == {"key": "value", "nested": {"a": 1}}

    def test_no_json(self):
        with pytest.raises(ValueError, match="No JSON object found"):
            extract_json("This has no JSON at all.")

    def test_nested_braces(self):
        text = '{"outer": {"inner": {"deep": true}}, "list": [1, 2]}'
        result = extract_json(text)
        assert result["outer"]["inner"]["deep"] is True
        assert result["list"] == [1, 2]

    def test_json_with_surrounding_text(self):
        text = 'Analysis complete.\n\n{"sample_id": "test.md", "word_count": 500}\n\nEnd.'
        result = extract_json(text)
        assert result["sample_id"] == "test.md"
        assert result["word_count"] == 500


class TestBuildPrompt:
    def test_includes_spec_and_sample(self):
        spec = "## Phase 1: Per-Sample Analysis\n\nAnalyze dimensions..."
        metrics = {"sent_avg_length": 15.0, "word_avg_length": 4.5}
        prompt = _build_prompt(spec, "Sample text here.", "test.md", metrics)
        assert "Phase 1" in prompt
        assert "Sample text here." in prompt
        assert "test.md" in prompt
        assert "<writing_sample>" in prompt

    def test_includes_metrics_context(self):
        spec = "spec"
        metrics = {"sent_avg_length": 15.0, "punct_commas_per_sent": 1.2}
        prompt = _build_prompt(spec, "text", "file.md", metrics)
        assert "<measured_metrics>" in prompt
        assert "sent_avg_length" in prompt

    def test_includes_json_instruction(self):
        spec = "spec"
        metrics = {}
        prompt = _build_prompt(spec, "text", "file.md", metrics)
        assert "JSON" in prompt


class TestLoadPhase1Spec:
    def test_loads_spec(self):
        spec = load_phase1_spec()
        assert "Phase 1" in spec
        assert "sentence_architecture_and_rhythm" in spec
        assert "voice_register_and_stance" in spec
        assert "Phase 2" not in spec
