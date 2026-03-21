"""Shared LLM wrapper — calls `claude -p` as subprocess.

All LLM access in this tool goes through this module.
Uses the user's Claude Max plan (no API key needed).
"""

import json
import os
import re
import subprocess
import time

MAX_RETRIES = 5
DEFAULT_TIMEOUT = 300


def call_claude(
    prompt: str,
    model: str | None = None,
    timeout: int = DEFAULT_TIMEOUT,
) -> str:
    """Call `claude -p` with retry + exponential backoff.

    Args:
        prompt: The prompt text to send.
        model: Optional model name (e.g. "sonnet", "opus").
        timeout: Subprocess timeout in seconds.

    Returns:
        Raw stdout from claude.

    Raises:
        RuntimeError: After MAX_RETRIES failures.
    """
    cmd = ["claude", "-p", "--tools", ""]
    if model:
        cmd.extend(["--model", model])

    # Allow running inside a Claude Code session
    env = {k: v for k, v in os.environ.items() if k != "CLAUDECODE"}

    for attempt in range(MAX_RETRIES):
        try:
            result = subprocess.run(
                cmd,
                input=prompt,
                capture_output=True,
                text=True,
                timeout=timeout,
                env=env,
            )
            if result.returncode == 0:
                return result.stdout
            error_msg = result.stderr[:500] if result.stderr else "(no stderr)"
            raise RuntimeError(
                f"claude -p failed (exit {result.returncode}): {error_msg}"
            )
        except (RuntimeError, subprocess.TimeoutExpired) as e:
            if attempt < MAX_RETRIES - 1:
                wait = 10 * (attempt + 1)
                print(f"    Retry {attempt + 1}/{MAX_RETRIES}: {e}")
                time.sleep(wait)
            else:
                raise RuntimeError(
                    f"claude -p failed after {MAX_RETRIES} attempts: {e}"
                )


def extract_json(text: str) -> dict:
    """Extract JSON object from LLM response.

    Tries code block first, then finds outermost brace pair.

    Args:
        text: Raw LLM response text.

    Returns:
        Parsed JSON dict.

    Raises:
        ValueError: If no valid JSON found.
    """
    # Try markdown code block first
    code_block = re.search(r"```(?:json)?\s*\n?(.*?)\n?```", text, re.DOTALL)
    if code_block:
        return json.loads(code_block.group(1).strip())

    # Fall back to brace matching
    brace_start = text.find("{")
    if brace_start == -1:
        raise ValueError("No JSON object found in response")

    depth = 0
    for i in range(brace_start, len(text)):
        if text[i] == "{":
            depth += 1
        elif text[i] == "}":
            depth -= 1
            if depth == 0:
                return json.loads(text[brace_start : i + 1])

    raise ValueError("No complete JSON object found in response")
