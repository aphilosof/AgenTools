# voice-cloner

Analyze writing samples and generate a reusable voice skill (SKILL.md) that makes Claude write in that author's style.

## Quick Start

```bash
cd /Users/alonphilosof/Dropbox/AgenTools/tools/writing/voice-cloner

# 1. Put 3-10 writing samples (.md, .txt, .docx, .pdf) in a folder

# 2. Generate the voice skill
python3 cli.py analyze ~/my-samples/ -o ./output --name my-voice

# 3. Use it — pick one:
#    Claude Code: add this line to your project's CLAUDE.md
#      @/path/to/output/my-voice/SKILL.md
#    Claude.ai: paste SKILL.md contents into Project custom instructions
```

That's it. Claude now writes in that voice.

## Requirements

- Python 3.10+
- `claude` CLI installed and authenticated (Claude Max plan)
- `pip install click`

## Commands

### `analyze` — Generate a voice skill

```bash
python3 cli.py analyze SAMPLES_DIR -o OUTPUT_DIR --name NAME
```

Runs the full 5-phase pipeline:

1. **Measure** (instant) — Computes ~50 stylometric metrics, vocabulary fingerprint, calibration excerpts
2. **Analyze** (LLM) — Qualitative analysis of each sample across 6 dimensions
3. **Synthesize** (LLM) — Merges per-sample analyses into unified voice rules
4. **Generate** (instant) — Produces SKILL.md and analysis-report.md
5. **Validate** (instant) — Leave-one-out cross-validation on the samples

Options:

| Flag | Default | Description |
|------|---------|-------------|
| `-o`, `--output` | `./output` | Where to write output files |
| `--name` | `<dir-name>-voice` | Skill name (kebab-case) |
| `--model` | default | Model for LLM phases (`sonnet`, `opus`) |
| `--min-samples` | `3` | Minimum samples required |
| `--skip-validation` | off | Skip Phase 5 |

Output files in `<output>/<name>/`:

- **SKILL.md** — The voice skill. This is what you use.
- **analysis-report.md** — Detailed breakdown of metrics, vocabulary, and synthesis data.
- **validation.json** — Cross-validation results.

### `measure` — Metrics only (no LLM, instant)

```bash
python3 cli.py measure SAMPLES_DIR
python3 cli.py measure SAMPLES_DIR --format json -o metrics.json
```

Runs Phase 1 only. Useful for inspecting an author's quantitative profile without generating a skill.

### `validate` — Re-validate a SKILL.md (no LLM, instant)

```bash
python3 cli.py validate SKILL.md SAMPLES_DIR
```

Runs leave-one-out cross-validation on the author's samples. For each of N samples, it computes metrics on the other N-1 and measures how well they predict the held-out sample. Features with >40% average deviation are flagged.

Deterministic — same inputs always produce identical results. Run this after manually editing a SKILL.md to check you haven't broken anything.

## Using the Generated Skill

### Claude Code

Add one line to your project's CLAUDE.md:

```markdown
@/absolute/path/to/SKILL.md
```

Claude will follow the voice directives for all writing in that project.

### Claude.ai

Open a Project, go to Project custom instructions, and paste the full contents of SKILL.md. Claude will follow the voice for all conversations in that project.

Alternatively, paste SKILL.md at the start of any conversation.

## How It Works

Code measures all numbers (~50 deterministic metrics). The LLM describes only qualitative patterns (6 dimensions). Zero overlap between the two — no conflicts.

### The 6 Qualitative Dimensions

| Dimension | What the LLM analyzes |
|-----------|----------------------|
| Sentence Architecture & Rhythm | Flow patterns, structure preferences, fragment usage |
| Voice, Register & Stance | Tone, reader distance, humor, confidence signaling |
| Argument & Logic Flow | Claim structure, counterarguments, evidence patterns |
| Paragraph Organization | Opening/closing patterns, transitions, idea structure |
| Rhetorical Devices | Metaphor, analogy, repetition, parallel structure |
| Openings, Closings & Genre | How pieces begin/end, genre conventions |

## Architecture

```
cli.py              — 3 commands: analyze, measure, validate
reader.py           — File collection + format reading (lazy imports for docx/pdf)
metrics.py          — ~50 deterministic stylometric features (6 categories)
vocabulary.py       — Word frequency fingerprint + register score
excerpts.py         — Calibration excerpt selector (WMAPE-based)
llm.py              — Shared claude -p wrapper + JSON extraction
analyzer.py         — Phase 2: per-sample qualitative analysis (6 dimensions)
synthesizer.py      — Phase 3: cross-sample synthesis (aligned schema)
generator.py        — Phase 4: SKILL.md + report generation
validator.py        — Phase 5: LOO cross-validation (deterministic, no LLM)
analysis-spec.md    — LLM prompt specification (6 dimensions, strict no-numbers)
data/
  abbreviations.txt — Sentence splitting exceptions (Mr., Dr., U.S., etc.)
eval/               — Evaluation scripts (decoupled from tool)
```

## Changelog

### 0.3.0 — Deterministic Validation
- Phase 5 replaced: LLM-based generation removed, now uses leave-one-out cross-validation
- Validation is instant, deterministic, and requires no LLM calls
- Removed `--install` flag and `--model`/`--n-samples` from `validate` command

### 0.2.0 — Complete Rewrite
- 5-phase pipeline: Measure → Analyze → Synthesize → Generate → Validate
- ~50 deterministic metrics (up from 9) replacing `quantitative.py`
- 6 qualitative dimensions (down from 12) with strict no-numbers rule
- New SKILL.md format: quantitative table, calibration examples, anti-patterns, final checklist
- Vocabulary profiling: top words, bigrams, register score, absent common words
- Calibration excerpts: 3 representative passages for style consistency
- Shared `llm.py` module (deduplicated claude -p wrapper)
- Decoupled eval/ from tool code
- Three CLI commands: `analyze`, `measure`, `validate`

### 0.1.0
- Initial version
