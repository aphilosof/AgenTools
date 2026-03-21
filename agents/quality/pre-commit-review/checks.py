"""All review checks — deterministic and LLM-based.

Each check function returns a list of Issue dicts:
    {"check": str, "file": str, "line": int|None, "message": str}
"""

import ast
import re
from pathlib import Path

from llm import call_claude, extract_json


# ---------------------------------------------------------------------------
# Issue helper
# ---------------------------------------------------------------------------

def issue(check: str, file: str, message: str, line: int | None = None) -> dict:
    return {"check": check, "file": file, "line": line, "message": message}


# ---------------------------------------------------------------------------
# 1. Unused imports (AST-based, Python only)
# ---------------------------------------------------------------------------

def find_unused_imports(filepath: str, source: str) -> list[dict]:
    """Find imports that are never referenced in the rest of the file."""
    try:
        tree = ast.parse(source)
    except SyntaxError:
        return []

    # Collect imported names and their line numbers
    imports: dict[str, int] = {}  # name -> line
    for node in ast.walk(tree):
        if isinstance(node, ast.Import):
            for alias in node.names:
                name = alias.asname if alias.asname else alias.name
                # For dotted imports like "import os.path", the usable name is "os"
                top_level = name.split(".")[0]
                imports[top_level] = node.lineno
        elif isinstance(node, ast.ImportFrom):
            for alias in node.names:
                if alias.name == "*":
                    continue
                name = alias.asname if alias.asname else alias.name
                imports[name] = node.lineno

    if not imports:
        return []

    # Collect all Name references (excluding the import nodes themselves)
    used_names: set[str] = set()
    for node in ast.walk(tree):
        if isinstance(node, ast.Name):
            used_names.add(node.id)
        elif isinstance(node, ast.Attribute):
            # Walk up to get the root name: e.g. os.path.join -> "os"
            root = node
            while isinstance(root, ast.Attribute):
                root = root.value
            if isinstance(root, ast.Name):
                used_names.add(root.id)

    # Also check __all__ exports — names listed there count as used
    for node in ast.walk(tree):
        if isinstance(node, ast.Assign):
            for target in node.targets:
                if isinstance(target, ast.Name) and target.id == "__all__":
                    if isinstance(node.value, (ast.List, ast.Tuple)):
                        for elt in node.value.elts:
                            if isinstance(elt, ast.Constant) and isinstance(elt.value, str):
                                used_names.add(elt.value)

    issues = []
    for name, lineno in sorted(imports.items(), key=lambda x: x[1]):
        if name not in used_names:
            issues.append(issue(
                "unused-import", filepath,
                f"Unused import: {name}",
                line=lineno,
            ))

    return issues


# ---------------------------------------------------------------------------
# 2. README has Quick Start section
# ---------------------------------------------------------------------------

def check_readme_has_quickstart(readme_path: str, readme_content: str) -> list[dict]:
    """Check that README contains a Quick Start or Usage section."""
    headings = re.findall(r"^#{1,3}\s+(.+)", readme_content, re.MULTILINE)
    heading_lower = [h.strip().lower() for h in headings]

    has_quickstart = any(
        kw in h for h in heading_lower
        for kw in ("quick start", "quickstart", "usage", "getting started")
    )

    if not has_quickstart:
        return [issue(
            "missing-quickstart", readme_path,
            "README has no Quick Start / Usage section",
        )]
    return []


# ---------------------------------------------------------------------------
# 3. Cross-reference CLI flags between README and code
# ---------------------------------------------------------------------------

_FLAG_RE = re.compile(r"--[a-z][a-z0-9-]*")


def _extract_readme_flags(readme: str) -> set[str]:
    """Extract --flags mentioned in README."""
    return set(_FLAG_RE.findall(readme))


def _extract_code_flags(source: str) -> set[str]:
    """Extract --flags defined in Python code (click.option / argparse)."""
    flags = set()

    # click.option("--foo", "--bar", ...)
    for m in re.finditer(r"@\w+\.option\(([^)]+)\)", source, re.DOTALL):
        flags.update(_FLAG_RE.findall(m.group(1)))

    # add_argument("--foo", ...)
    for m in re.finditer(r"add_argument\(([^)]+)\)", source, re.DOTALL):
        flags.update(_FLAG_RE.findall(m.group(1)))

    # Also catch bare click.option strings
    for m in re.finditer(r'["\'](-{2}[a-z][a-z0-9-]*)["\']', source):
        flag = m.group(1)
        if _FLAG_RE.match(flag):
            flags.add(flag)

    return flags


def cross_reference_flags(
    readme_path: str, readme_content: str,
    code_files: list[tuple[str, str]],
) -> list[dict]:
    """Find flags documented in README but missing from code, and vice versa.

    Args:
        readme_path: Path to the README file.
        readme_content: README text.
        code_files: List of (filepath, source_code) tuples.
    """
    readme_flags = _extract_readme_flags(readme_content)
    code_flags: set[str] = set()
    for _, source in code_files:
        code_flags.update(_extract_code_flags(source))

    if not code_flags:
        return []

    # Common flags that appear in READMEs generically
    ignore = {"--help", "--version"}
    readme_flags -= ignore
    code_flags -= ignore

    issues = []
    for flag in sorted(readme_flags - code_flags):
        issues.append(issue(
            "phantom-flag", readme_path,
            f"Documents {flag} but flag not found in code",
        ))
    for flag in sorted(code_flags - readme_flags):
        issues.append(issue(
            "missing-docs", readme_path,
            f"Flag {flag} not documented in README",
        ))

    return issues


# ---------------------------------------------------------------------------
# 4. LLM check: interface changes not reflected in docs
# ---------------------------------------------------------------------------

def check_interface_sync(
    diff: str,
    readme_content: str,
    model: str | None = None,
) -> list[dict]:
    """Use LLM to check if interface changes in the diff are reflected in README.

    Only call this when the diff touches code AND a README exists but wasn't modified.
    """
    prompt = f"""You are a code reviewer. I'll give you a git diff and a README file.

Your task: identify interface changes in the diff (function signatures, CLI flags,
commands, configuration options, environment variables) that are NOT reflected in
the README.

Respond with JSON only:
{{
  "issues": [
    {{"file": "filename", "message": "description of what changed but isn't documented"}}
  ]
}}

If there are no issues, respond with: {{"issues": []}}

--- DIFF ---
{diff}

--- README ---
{readme_content}
"""

    try:
        raw = call_claude(prompt, model=model)
        data = extract_json(raw)
    except Exception:
        return []

    issues = []
    for item in data.get("issues", []):
        issues.append(issue(
            "interface-sync",
            item.get("file", "README.md"),
            item.get("message", "Interface change not reflected in docs"),
        ))
    return issues
