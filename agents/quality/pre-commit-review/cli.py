"""Pre-Commit Review Agent — catch common issues before committing.

Runs deterministic checks (unused imports, README structure, flag sync)
and an optional LLM check for interface/doc drift.

Uses `claude -p` for LLM checks (bills against Claude Max plan, no API key).
"""

import json
import subprocess
import sys
from pathlib import Path

import click

from checks import (
    check_interface_sync,
    check_readme_has_quickstart,
    cross_reference_flags,
    find_unused_imports,
)


def _get_diff(diff_mode: str | None, all_changes: bool) -> str:
    """Get the git diff to review."""
    if diff_mode:
        cmd = ["git", "diff", diff_mode]
    elif all_changes:
        cmd = ["git", "diff", "HEAD"]
    else:
        cmd = ["git", "diff", "--cached"]

    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        click.echo(f"Error running git diff: {result.stderr}", err=True)
        sys.exit(1)
    return result.stdout


def _get_changed_files(diff_mode: str | None, all_changes: bool) -> list[str]:
    """Get list of changed file paths."""
    if diff_mode:
        cmd = ["git", "diff", "--name-only", diff_mode]
    elif all_changes:
        cmd = ["git", "diff", "--name-only", "HEAD"]
    else:
        cmd = ["git", "diff", "--cached", "--name-only"]

    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        return []
    return [f.strip() for f in result.stdout.strip().split("\n") if f.strip()]


def _format_issue(iss: dict) -> str:
    """Format a single issue for terminal output."""
    tag = f"[{iss['check']}]"
    loc = iss["file"]
    if iss.get("line"):
        loc += f":{iss['line']}"
    return f"  {tag:<20s} {loc} — {iss['message']}"


def _format_json(issues: list[dict], file_count: int, check_count: int) -> str:
    """Format issues as JSON."""
    return json.dumps({
        "checks": check_count,
        "files": file_count,
        "issues": issues,
        "passed": len(issues) == 0,
    }, indent=2)


@click.command()
@click.option("--all", "all_changes", is_flag=True, default=False,
              help="Review all uncommitted changes (not just staged).")
@click.option("--diff", "diff_ref", default=None,
              help="Review changes vs a git ref (e.g. main, HEAD~3).")
@click.option("--format", "fmt", type=click.Choice(["text", "json"]),
              default="text", help="Output format.")
@click.option("--model", default=None,
              help="Model for LLM checks (e.g. 'sonnet', 'haiku').")
@click.option("--no-llm", is_flag=True, default=False,
              help="Skip LLM checks (deterministic only).")
def review(all_changes, diff_ref, fmt, model, no_llm):
    """Review staged changes for common issues before committing."""
    diff = _get_diff(diff_ref, all_changes)
    if not diff.strip():
        if fmt == "json":
            click.echo(_format_json([], 0, 0))
        else:
            click.echo("No changes to review.")
        sys.exit(0)

    changed_files = _get_changed_files(diff_ref, all_changes)
    git_root = subprocess.run(
        ["git", "rev-parse", "--show-toplevel"],
        capture_output=True, text=True,
    ).stdout.strip()

    issues: list[dict] = []
    checks_run = 0

    # Separate files by type
    py_files: list[tuple[str, str]] = []
    readme_path: str | None = None
    readme_content: str | None = None
    readme_changed = False

    for fpath in changed_files:
        full = Path(git_root) / fpath
        if not full.exists():
            continue

        if fpath.endswith(".py"):
            try:
                source = full.read_text(encoding="utf-8")
                py_files.append((fpath, source))
            except Exception:
                pass

        if full.name.lower() == "readme.md":
            readme_changed = True

    # Find README in the directory of changed files (if not already changed)
    if not readme_changed:
        dirs_seen: set[str] = set()
        for fpath in changed_files:
            parent = str(Path(fpath).parent)
            if parent in dirs_seen:
                continue
            dirs_seen.add(parent)
            candidate = Path(git_root) / parent / "README.md"
            if candidate.exists():
                readme_path = str(Path(parent) / "README.md")
                try:
                    readme_content = candidate.read_text(encoding="utf-8")
                except Exception:
                    pass
                break

    # Also load README if it was changed
    if readme_changed:
        for fpath in changed_files:
            if Path(fpath).name.lower() == "readme.md":
                full = Path(git_root) / fpath
                if full.exists():
                    readme_path = fpath
                    try:
                        readme_content = full.read_text(encoding="utf-8")
                    except Exception:
                        pass
                break

    # --- Check 1: Unused imports ---
    for fpath, source in py_files:
        issues.extend(find_unused_imports(fpath, source))
    checks_run += 1

    # --- Check 2: README Quick Start ---
    if readme_content and readme_path:
        issues.extend(check_readme_has_quickstart(readme_path, readme_content))
    checks_run += 1

    # --- Check 3: Flag cross-reference ---
    if readme_content and readme_path and py_files:
        issues.extend(cross_reference_flags(readme_path, readme_content, py_files))
    checks_run += 1

    # --- Check 4: LLM interface sync ---
    if (
        not no_llm
        and py_files
        and readme_content
        and not readme_changed
    ):
        issues.extend(check_interface_sync(diff, readme_content, model=model))
    checks_run += 1

    # --- Output ---
    file_count = len(changed_files)
    if fmt == "json":
        click.echo(_format_json(issues, file_count, checks_run))
    else:
        click.echo(f"\nPre-Commit Review ({checks_run} checks, {file_count} files)\n")
        if issues:
            for iss in issues:
                click.echo(_format_issue(iss))
            click.echo(f"\nFAIL ({len(issues)} issues)")
        else:
            click.echo("  All checks passed.")
            click.echo("\nPASS")

    sys.exit(1 if issues else 0)


if __name__ == "__main__":
    review()
