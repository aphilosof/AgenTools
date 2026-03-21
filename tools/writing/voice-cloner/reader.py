"""Read writing samples from various file formats."""

from pathlib import Path

SUPPORTED_EXTENSIONS = {".md", ".txt", ".docx", ".pdf"}


def collect_samples(directory: str | Path) -> list[Path]:
    """Find all supported writing sample files in a directory (non-recursive)."""
    directory = Path(directory)
    if not directory.is_dir():
        raise FileNotFoundError(f"Directory not found: {directory}")

    samples = []
    for path in sorted(directory.iterdir()):
        if path.is_file() and path.suffix.lower() in SUPPORTED_EXTENSIONS:
            samples.append(path)
    return samples


def read_sample(path: str | Path) -> str:
    """Read a writing sample from any supported format. Returns plain text."""
    path = Path(path)
    suffix = path.suffix.lower()

    if suffix in (".md", ".txt"):
        return _read_text(path)
    elif suffix == ".docx":
        return _read_docx(path)
    elif suffix == ".pdf":
        return _read_pdf(path)
    else:
        raise ValueError(f"Unsupported file format: {suffix}")


def _read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def _read_docx(path: Path) -> str:
    try:
        import docx
    except ImportError:
        raise ImportError(
            "python-docx is required for .docx files. Install it: pip install python-docx"
        )

    doc = docx.Document(str(path))
    paragraphs = [p.text for p in doc.paragraphs if p.text.strip()]
    return "\n\n".join(paragraphs)


def _read_pdf(path: Path) -> str:
    try:
        import pymupdf
    except ImportError:
        raise ImportError(
            "pymupdf is required for .pdf files. Install it: pip install pymupdf"
        )

    doc = pymupdf.open(str(path))
    pages = []
    for page in doc:
        text = page.get_text()
        if text.strip():
            pages.append(text.strip())
    doc.close()
    return "\n\n".join(pages)
