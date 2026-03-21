"""Tests for reader.py — file collection and reading."""

import pytest
from pathlib import Path
import sys

sys.path.insert(0, str(Path(__file__).parent.parent))
from reader import collect_samples, read_sample, SUPPORTED_EXTENSIONS


@pytest.fixture
def sample_dir(tmp_path):
    """Create a temporary directory with sample files."""
    (tmp_path / "essay.md").write_text("# My Essay\n\nThis is a markdown essay.")
    (tmp_path / "story.txt").write_text("Once upon a time, there was a story.")
    (tmp_path / "notes.md").write_text("Some notes here.")
    (tmp_path / "image.png").write_bytes(b"\x89PNG\r\n")
    (tmp_path / "data.csv").write_text("a,b,c\n1,2,3")
    return tmp_path


def test_collect_samples_finds_supported_files(sample_dir):
    samples = collect_samples(sample_dir)
    names = {p.name for p in samples}
    assert names == {"essay.md", "story.txt", "notes.md"}


def test_collect_samples_ignores_unsupported(sample_dir):
    samples = collect_samples(sample_dir)
    for p in samples:
        assert p.suffix.lower() in SUPPORTED_EXTENSIONS


def test_collect_samples_returns_sorted(sample_dir):
    samples = collect_samples(sample_dir)
    names = [p.name for p in samples]
    assert names == sorted(names)


def test_collect_samples_nonexistent_dir():
    with pytest.raises(FileNotFoundError):
        collect_samples("/nonexistent/path")


def test_collect_samples_empty_dir(tmp_path):
    samples = collect_samples(tmp_path)
    assert samples == []


def test_read_sample_md(tmp_path):
    f = tmp_path / "test.md"
    f.write_text("# Hello\n\nWorld")
    assert read_sample(f) == "# Hello\n\nWorld"


def test_read_sample_txt(tmp_path):
    f = tmp_path / "test.txt"
    f.write_text("Plain text content.")
    assert read_sample(f) == "Plain text content."


def test_read_sample_unsupported(tmp_path):
    f = tmp_path / "test.xyz"
    f.write_text("data")
    with pytest.raises(ValueError, match="Unsupported file format"):
        read_sample(f)


def test_supported_extensions():
    assert ".md" in SUPPORTED_EXTENSIONS
    assert ".txt" in SUPPORTED_EXTENSIONS
    assert ".docx" in SUPPORTED_EXTENSIONS
    assert ".pdf" in SUPPORTED_EXTENSIONS
