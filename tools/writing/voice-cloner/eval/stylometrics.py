"""Stylometric metrics — thin wrapper around metrics.py.

This module re-exports the core metrics functions so eval scripts
can import from eval.stylometrics without changes.

The actual implementation lives in metrics.py at the tool root.
"""

import sys
from pathlib import Path

# Ensure the tool root is on the path
_tool_root = str(Path(__file__).parent.parent)
if _tool_root not in sys.path:
    sys.path.insert(0, _tool_root)

from metrics import (
    compute_metrics,
    compute_metrics_multi,
    FEATURE_WEIGHTS,
    FW_GROUPS,
    format_metrics_table,
)

# Re-export for backward compatibility
SCHEMA_VERSION = "3.0"

__all__ = [
    "compute_metrics",
    "compute_metrics_multi",
    "FEATURE_WEIGHTS",
    "FW_GROUPS",
    "SCHEMA_VERSION",
    "format_metrics_table",
]
