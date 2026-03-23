# AgenTools

Reusable agents, skills, and tools for Claude Code.

## Available

### Agents

| Name | Description |
|------|-------------|
| [pre-commit-review](agents/quality/pre-commit-review/) | Reviews staged git changes for common issues — unused imports, phantom CLI flags, missing docs, interface drift. |

### Tools

| Name | Description |
|------|-------------|
| [voice-cloner](tools/writing/voice-cloner/) | Analyzes writing samples and generates a Claude Code skill capturing the author's voice. |

## Usage

Add any item to your project's CLAUDE.md:

```markdown
@/path/to/AgenTools/agents/quality/pre-commit-review/README.md
```

See each item's README for detailed instructions.

## Structure

```
agents/<category>/<name>/    — Autonomous multi-step agents
skills/<category>/<name>/    — Prompt-based capabilities (slash commands)
tools/<category>/<name>/     — Discrete utilities and scripts
```

See [CLAUDE.md](CLAUDE.md) for contributor guide.
