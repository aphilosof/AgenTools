# Pre-Commit Review Agent

Catches common issues before you commit: unused imports, phantom CLI flags, missing docs, and interface drift.

## Quick Start

```bash
# Review staged changes (default)
cd /your/project
python3 /path/to/AgenTools/agents/quality/pre-commit-review/cli.py

# Review all uncommitted changes
python3 /path/to/AgenTools/agents/quality/pre-commit-review/cli.py --all

# Review changes vs a branch
python3 /path/to/AgenTools/agents/quality/pre-commit-review/cli.py --diff main
```

Exit code 0 = pass, 1 = issues found.

## What It Checks

### 1. Unused imports (`unused-import`)
AST-based check on changed Python files. Finds imports that are never referenced.

### 2. README Quick Start (`missing-quickstart`)
Checks that README.md has a Quick Start, Usage, or Getting Started section.

### 3. CLI flag sync (`phantom-flag`, `missing-docs`)
Cross-references CLI flags in README against click.option/argparse definitions in code:
- **phantom-flag**: README documents a flag that doesn't exist in code
- **missing-docs**: Code defines a flag not mentioned in README

### 4. Interface sync (`interface-sync`, LLM)
When code changes but README wasn't updated, uses `claude -p` to check if interface changes (signatures, flags, commands) are missing from docs. Skipped if README was also modified or `--no-llm` is set.

## CLI Options

```
--all          Review all uncommitted changes (not just staged)
--diff REF     Review changes vs a git ref (e.g. main, HEAD~3)
--format       Output format: text (default) or json
--model        Model for LLM checks (e.g. 'sonnet', 'haiku')
--no-llm       Skip LLM checks, run deterministic checks only
```

## Output

```text
Pre-Commit Review (4 checks, 2 files)

  [unused-import]      cli.py:3 — Unused import: shutil
  [phantom-flag]       README.md — Documents --install but flag not found in code
  [missing-docs]       README.md — Flag --skip-validation not documented in README

FAIL (3 issues)
```

JSON output (`--format json`):
```json
{
  "checks": 4,
  "files": 2,
  "issues": [
    {"check": "unused-import", "file": "cli.py", "line": 3, "message": "Unused import: shutil"}
  ],
  "passed": false
}
```

## Requirements

- Python 3.10+
- `click` (`pip install click`)
- `claude` CLI on PATH (only needed for LLM checks)
- Must be run inside a git repository

## Using With Claude Code

Add to your project's CLAUDE.md:

```markdown
@/path/to/AgenTools/agents/quality/pre-commit-review/README.md
```

Then ask Claude: "Run the pre-commit review before committing."

## Changelog

### 0.1.0
- Initial release: unused imports, README structure, flag sync, LLM interface sync
