# Voice Extractor

Extract your writing style into a bulletproof Claude prompt — with hard rules, annotated examples from your actual writing, good/bad contrasts, and a self-check rubric.

## Requirements

- **Claude Code** installed (that's it — no API key, no pip install, no extra charges)
- Python 3.8+

## Quick Start

```bash
# 1. Put some of your writing in .txt or .md files in a folder
mkdir my-writing
# (copy your cover letters, papers, emails, proposals, etc. into my-writing/)

# 2. Run it
python voice_extractor.py --samples-dir ./my-writing/ --category "Academic Writing"

# 3. Done — check ./voice-output/ for your files
```

## Usage

### From a directory of files
```bash
python voice_extractor.py --samples-dir ./my-writing/ --category "Academic Writing"
```

### From specific files
```bash
python voice_extractor.py \
  --samples-file cover_letter.txt proposal.md thesis_intro.txt \
  --category "Job Applications"
```

### Paste text directly
```bash
python voice_extractor.py --interactive --category "General"
# Paste your text, then type END on a new line
```

To provide multiple samples in interactive mode, separate them with a line containing only `---`:

```
[paste first sample here]
---
[paste second sample here]
---
[paste third sample here]
END
```

Each section between `---` delimiters is treated as a separate writing sample.

### Options
```
--category        Required. "Academic Writing", "Job Applications", "Professional Email", etc.
--output-dir      Where to save output (default: ./voice-output/)
--single-stage    One call instead of two (faster, slightly less thorough)
```

## What It Produces

Four files in your output directory:

| File | What | Where to use |
|------|------|-------------|
| `paste-ready-prompt.txt` | Rules + annotated examples combined | Claude Settings → Profile → User Preferences |
| `rules.txt` | Hard numbered rules + self-check rubric | System prompts, custom instructions |
| `examples.txt` | Annotated passages with good/bad contrasts | Few-shot examples alongside rules |
| `*-voice.skill.md` | Self-contained SKILL.md | Claude Code skills directory |

## How It Works

Two-stage pipeline, both run through `claude -p` (your subscription, zero extra cost):

**Stage 1 — Forensic Analysis:** Counts every sentence length, punctuation mark, paragraph pattern, vocabulary habit. Actual numbers, not vibes.

**Stage 2 — Synthesis:** Converts those numbers into verifiable rules. Selects your most characteristic passages as few-shot examples. Rewrites each as generic AI to show the contrast. Generates a self-check rubric.

The output has three layers (research shows all three together >> any one alone):
1. Hard rules with real numbers from the analysis
2. Annotated examples from your actual writing with generic AI contrast
3. Self-check rubric Claude must verify before outputting

## How to Use the Output

**Option A — Claude.ai User Preferences (simplest, applies to all chats):**
1. Open claude.ai → Settings → Profile → User Preferences
2. Paste contents of `paste-ready-prompt.txt`

**Option B — Per conversation:**
1. Start a new Claude chat
2. Paste `paste-ready-prompt.txt` at the top of your message

**Option C — Claude Code skill:**
1. Copy the `.skill.md` file to `~/.claude/skills/` (global) or `.claude/skills/` (per-project)

**Option D — Claude Project:**
1. Create a Project, add `paste-ready-prompt.txt` as a knowledge file or paste into Project Instructions

## Using the Generated Skill Files

The `.skill.md` file is a self-contained Claude Code skill. Three ways to use it:

### 1. Global skill (all projects)

```bash
mkdir -p ~/.claude/skills
cp ./voice-output/job-applications-voice.skill.md ~/.claude/skills/
```

Claude Code will automatically load this skill in every project.

### 2. Project-specific skill

```bash
mkdir -p .claude/skills
cp ./voice-output/job-applications-voice.skill.md .claude/skills/
```

The skill only activates when working in that project directory.

### 3. Manual trigger

If the skill doesn't activate automatically, tell Claude Code directly:

```
Read .claude/skills/job-applications-voice.skill.md and follow it when writing.
```

### Multiple voice skills

You can install skill files for different writing categories side by side:

```bash
cp cover-letter-output/job-applications-voice.skill.md ~/.claude/skills/
cp proposal-output/grant-proposal-writing-voice.skill.md ~/.claude/skills/
cp email-output/professional-email-voice.skill.md ~/.claude/skills/
```

Claude Code will pick the right one based on the task — a cover letter request uses the job applications skill, a grant draft uses the proposal skill.

## Tips

- **500+ words** across all samples gives the best results. More is better.
- **Same category.** Don't mix academic papers with casual emails — run separately for each.
- **Your best work.** The tool clones whatever you give it, so give it writing you're proud of.
- **Multiple samples > one long sample.** Three 300-word pieces capture more patterns than one 900-word block.

## Cost

$0. Uses `claude -p` which runs through your existing Claude subscription.
