# AgenTools — Contributor Guide

This is a central repository of reusable Claude Code **agents**, **skills**, and **tools**. Read SPEC.md for the full specification.

## Repository Structure

```
agents/<category>/<name>/    — Autonomous multi-step agents
skills/<category>/<name>/    — Prompt-based capabilities (slash commands)
tools/<category>/<name>/     — Discrete utilities and scripts
templates/{agent,skill,tool}/ — Scaffolding templates
scripts/                      — Repo tooling (registry generator, etc.)
```

## Creating a New Item

### Step 1: Determine the type and category

- **Agent**: Handles complex, multi-step tasks autonomously
- **Skill**: A reusable prompt invoked via slash commands or includes
- **Tool**: A discrete utility (script, MCP server, function spec)

Pick or create a category folder (e.g. `git`, `testing`, `refactoring`, `docs`, `devops`).

### Step 2: Scaffold from template

Copy the appropriate template:

```bash
cp -r templates/agent/ agents/<category>/<name>/
# or
cp -r templates/skill/ skills/<category>/<name>/
# or
cp -r templates/tool/ tools/<category>/<name>/
```

### Step 3: Fill in the manifest

Edit `manifest.yaml` — replace all `{{placeholders}}`:

- **name**: kebab-case identifier (e.g. `commit-formatter`)
- **type**: `agent`, `skill`, or `tool`
- **version**: Start at `"0.1.0"`
- **description**: One clear paragraph
- **tags**: Searchable keywords
- **compatibility**: Target languages/frameworks
- **dependencies**: Paths to other items in this repo (if any)
- **usage.examples**: At least one concrete example showing how to include/use the item

All of `name`, `type`, `version`, `description` are required. The rest are optional but encouraged.

### Step 4: Write the README

The README is the **interface contract** — it's what gets included in other projects' CLAUDE.md files. Write it as instructions for Claude:

- Clear description of what the item does
- When to use it (and when not to)
- Step-by-step instructions Claude should follow
- Any prerequisites or configuration

### Step 5: Update the registry

```bash
python3 scripts/generate_registry.py
```

This scans all `manifest.yaml` files and regenerates `registry.yaml`.

### Step 6: Version bump checklist

When modifying an existing item:
- PATCH (`0.1.0` → `0.1.1`): Bug fixes, minor tweaks
- MINOR (`0.1.0` → `0.2.0`): New capabilities, backward compatible
- MAJOR (`0.1.0` → `1.0.0`): Breaking changes to the interface
- Update the Changelog section in the item's README

## Conventions

- Use **kebab-case** for item names and folder names
- Each item MUST have both `manifest.yaml` and `README.md`
- Keep items self-documenting — the README should be enough for Claude to use it
- When an item depends on another item, list it in `dependencies` in the manifest
- Dependencies always reference HEAD (no version pinning within this repo)

## How Other Projects Consume Items

In a target project's CLAUDE.md, add an include:

```markdown
@/Users/alonphilosof/Dropbox/AgenTools/tools/git/commit-formatter/README.md
```

The README contains all the instructions Claude needs.

## Registry

`registry.yaml` at the repo root is auto-generated. Never edit it by hand. Always run `python3 scripts/generate_registry.py` after adding or modifying items.
