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

## Rules (MANDATORY — read before writing any code)

### No paid API calls — STRICTLY ENFORCED

- **NEVER** import or use the `anthropic` SDK, OpenAI SDK, or any other paid LLM API in any tool, agent, or skill in this repo.
- **NEVER** install `anthropic`, `openai`, or similar packages as dependencies.
- **NEVER** make HTTP requests to `api.anthropic.com`, `api.openai.com`, or any paid API endpoint.
- When a tool needs LLM capabilities, it MUST call `claude -p` as a subprocess. This uses the user's Claude Max plan at no extra token cost.
- Example of the ONLY allowed pattern for LLM calls:
  ```python
  import subprocess
  result = subprocess.run(
      ["claude", "-p", "--tools", ""],
      input=prompt,
      capture_output=True, text=True,
  )
  response = result.stdout
  ```
- This rule applies to ALL code: tools, tests, evaluation scripts, helper scripts — everything.

### Tools are self-contained

- All functionality — including testing and evaluation — must go through the tool's own CLI interface.
- If the tool doesn't support something, add it to the tool rather than working around it.

### Stop and escalate when an approach isn't working

- If you try something and it produces inconsistent, unreliable, or confusing results — STOP. Do not iterate on a broken approach.
- Tell the user: what you tried, why it's not working, and what you think the alternative is. Let them decide.
- Two failed attempts at the same approach = mandatory escalation. Do not silently try a third time.
- Never hide problems hoping the next tweak will fix them.

### Think before you code — is this the right approach?

- Before writing any implementation, ask: "Can this be solved with deterministic code?" If yes, do NOT use an LLM.
- LLM calls are non-deterministic. Never use them for validation, testing, or quality checks where reproducibility matters.
- Before adding a feature, ask: "Did the user ask for this? Does this solve a real problem?" If the answer to both is no, don't build it.
- Before assuming a platform capability exists (directories, APIs, conventions), verify it. If unsure, ask.

### READMEs are user manuals

- Every README must start with a Quick Start: minimal steps from zero to working result.
- Write for a first-time user. Answer "how do I use this end-to-end?" before "how does it work internally?"
- Include concrete commands with realistic paths, not just flag tables.
- If the tool produces output, explain exactly how to use that output (where to put it, what to do with it).

### Keep implementation and interface in sync

- When replacing an implementation, remove ALL dead code in the same change: unused flags, imports, parameters, helpers.
- Don't keep unused parameters "for compatibility" unless there's a verified external caller.
- If you change a CLI interface, update the README in the same commit. Never let docs describe something the code doesn't do.

### Be transparent about what you're doing and why

- When starting a non-trivial task, state your approach briefly before coding.
- When something fails or produces unexpected results, report it immediately — don't silently retry.
- When you realize a past decision was wrong, say so explicitly. "I was wrong about X, here's why, here's the fix."
- Never add complexity (prompt engineering, workarounds, special cases) without explaining why it's necessary.

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
