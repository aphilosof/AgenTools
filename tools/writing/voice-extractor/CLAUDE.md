# Voice Extractor — Claude Code Handoff

## What This Project Is

A CLI tool that takes samples of a user's writing (for a specific purpose like academic, job apps, email, etc.) and produces a **bulletproof prompt/skill** that makes Claude write in that exact voice. Not vibes — actual enforceable rules backed by quantitative analysis, annotated examples from the user's real writing, and a self-check rubric.

## Current State

**Working but untested end-to-end.** The Python script runs, calls `claude -p` for two stages, parses the output, and saves files. It has NOT been validated against real writing samples yet. The prompts that drive the analysis and synthesis are the core intellectual property of this tool — they may need iteration based on test results.

### What exists:
- `voice_extractor.py` — Main CLI script, ~300 lines, pure Python (no dependencies beyond `claude` CLI)
- `README.md` — User-facing docs

### What has been tested:
- File loading (--samples-dir, --samples-file, --interactive) ✓
- Argument parsing ✓
- `claude -p` invocation (fixed a `--no-input` flag bug) ✓

### What has NOT been tested:
- Full two-stage pipeline end-to-end with real samples
- Whether Stage 1 forensic analysis actually counts things correctly
- Whether Stage 2 produces properly delimited output blocks (===RULES_START=== etc.)
- Whether the generated rules are actually specific/measurable vs. vague
- Whether the annotated examples actually quote passages exactly
- Whether the generic AI contrast versions are meaningfully different
- Whether the SKILL.md output is valid and self-contained
- Whether the paste-ready-prompt.txt actually changes Claude's behavior when used
- Edge cases: very short samples, very long samples, non-English text, mixed categories

## Architecture

### Two-stage pipeline:

```
User's writing samples (.txt/.md files)
        │
        ▼
┌─────────────────────────┐
│  STAGE 1: FORENSIC      │  claude -p call #1
│  ANALYSIS                │
│                          │
│  Quantitative:           │
│  - Sentence lengths      │
│  - Punctuation counts    │
│  - Paragraph patterns    │
│  - Vocabulary profile    │
│  - Voice/person usage    │
│                          │
│  Qualitative:            │
│  - Tone & register       │
│  - Rhetorical patterns   │
│  - Distinctive quirks    │
│                          │
│  Exemplar Selection:     │
│  - 4-6 characteristic    │
│    passages with notes   │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  STAGE 2: SYNTHESIS      │  claude -p call #2
│                          │
│  Input: Stage 1 analysis │
│  + original samples      │
│                          │
│  Output 1: RULES         │  Hard numbered rules + self-check rubric
│  Output 2: EXAMPLES      │  Annotated passages + generic AI contrasts
│  Output 3: SKILL.md      │  Self-contained skill file
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  OUTPUT FILES:           │
│  - rules.txt             │
│  - examples.txt          │
│  - *-voice.skill.md      │
│  - paste-ready-prompt.txt│  (rules + examples combined)
│  - raw-analysis.txt      │
│  - raw-synthesis.txt     │
└─────────────────────────┘
```

### Why two stages instead of one:
- Stage 1 needs to focus entirely on counting/measuring without being distracted by rule generation
- Stage 2 gets BOTH the analysis AND the original samples, so it can quote passages exactly
- Separation of concerns → better quality at each step
- `--single-stage` flag exists for faster/cheaper runs but may be less thorough

### The three-layer output (why this matters):
Research showed that:
1. **Rules alone** fail — detailed style descriptions couldn't replicate writing ("not anywhere near what few-shot learning could")
2. **Examples alone** work better — actual passages in context window translated into skill
3. **Rules + annotated examples + self-check** together is the strongest approach

This is NOT my opinion — this comes from Anders Ohrn's Towards AI research, the DEV.to experiment on Pressfield's style, and stylometry literature. See research-notes.md for details.

## Key Design Decisions

### Uses `claude -p` instead of Anthropic API
- No API key needed, no pip install, no extra charges
- Runs through user's existing Claude subscription
- Requires Claude Code to be installed (user already has it)

### No dependencies
- Pure Python stdlib — no pip packages required
- Only external requirement is the `claude` CLI command

### Output format uses delimiter tags
- `===RULES_START===` / `===RULES_END===` etc.
- Parsed with regex in `extract_block()`
- If Claude doesn't produce the delimiters, the raw output is still saved for manual extraction

### Rules must be verifiable
- The prompts explicitly demand specific numbers, not vague guidelines
- BAD: "Write conversationally" — GOOD: "Average sentence length 14-20 words. No sentence exceeds 35."
- This is enforced by examples in the Stage 2 prompt

### Examples include good/bad contrasts
- Each annotated passage includes a "generic AI rewrite" showing what NOT to do
- Research showed this contrast teaches Claude more than positive examples alone

## Known Issues & Risks

1. **Prompt may be too long for `claude -p`**: Stage 2 receives the FULL Stage 1 analysis + original samples. For 1000+ word samples, this could exceed context limits or produce truncated output. May need to summarize Stage 1 before feeding to Stage 2.

2. **Output parsing is fragile**: If Claude doesn't produce the exact delimiter tags (`===RULES_START===` etc.), the regex extraction fails silently. The raw output files are saved as fallback, but the parsed files won't be created.

3. **No validation of rule quality**: The tool produces rules but doesn't verify they're actually specific/measurable. A follow-up validation step would help.

4. **No testing of output effectiveness**: There's no automated way to verify that the generated prompt actually makes Claude write in the user's voice. This would require a test loop: generate text with the prompt → compare to original samples → score similarity.

5. **Single-category design**: The tool handles one writing category at a time. User must run it separately for academic, job apps, email, etc. This is by design (different categories = different voice) but should be documented clearly.

## User Context

- The user (Alon) is a computational biologist with strong Python skills
- Uses Claude Code and VS Code for development
- Has writing samples across academic, job application, policy, and proposal categories
- Values direct communication, dislikes sycophancy
- Wants the tool to work reliably — previous attempt with Claude Code "failed badly and cost a week"
- Key requirement: the output must be "fool-proof, bullet-proof, 100% working"
- The user explicitly asked for the tool to include good examples when building the prompt/skill

## File Descriptions

### voice_extractor.py
Main CLI script. Entry point is `main()`. Key functions:
- `load_samples()` — reads .txt/.md files from dir, file list, or stdin
- `call_claude()` — wraps `subprocess.run(["claude", "-p", prompt])` with timeout and error handling
- `extract_block()` — regex extraction between delimiter tags
- `STAGE1_SYSTEM` — the forensic analysis prompt (long, detailed)
- `STAGE2_SYSTEM` — the synthesis prompt (long, detailed)

### README.md
User-facing documentation. Setup, usage examples, output descriptions, tips.

### research-notes.md
Summary of research findings that informed the design. Key sources and what they found about style replication with LLMs.

## What Needs to Happen Next

1. **Test end-to-end** with real writing samples (user has academic, cover letter, proposal, policy writing)
2. **Examine the output** — are the rules specific enough? Do the examples quote exactly? Are the contrasts meaningful?
3. **Iterate on prompts** — Stage 1 and Stage 2 system prompts are the core of this tool. They may need tuning based on actual output quality.
4. **Add error recovery** — if delimiter parsing fails, try alternate extraction strategies
5. **Consider a validation step** — generate sample text using the output prompt, compare to original
6. **Test the SKILL.md** — install it in Claude Code and see if it actually changes writing output
