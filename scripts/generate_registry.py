#!/usr/bin/env python3
"""Scans all manifest.yaml files and generates registry.yaml."""

import os
import sys
from datetime import datetime, timezone
from pathlib import Path

try:
    import yaml
except ImportError:
    print("PyYAML is required. Install it with: pip install pyyaml")
    sys.exit(1)

REPO_ROOT = Path(__file__).resolve().parent.parent
ITEM_DIRS = ["agents", "skills", "tools"]
REGISTRY_PATH = REPO_ROOT / "registry.yaml"


def find_manifests():
    """Find all manifest.yaml files under item directories."""
    manifests = []
    for item_dir in ITEM_DIRS:
        base = REPO_ROOT / item_dir
        if not base.exists():
            continue
        for manifest_path in sorted(base.rglob("manifest.yaml")):
            rel_path = manifest_path.parent.relative_to(REPO_ROOT)
            manifests.append((manifest_path, str(rel_path)))
    return manifests


def load_manifest(path):
    """Load and validate a manifest.yaml file."""
    with open(path) as f:
        data = yaml.safe_load(f)

    required = ["name", "type", "version", "description"]
    missing = [field for field in required if field not in data]
    if missing:
        print(f"  WARNING: {path} missing required fields: {missing}")
        return None

    return data


def generate_registry():
    """Generate registry.yaml from all manifests."""
    manifests = find_manifests()
    items = []

    print(f"Scanning for manifests in: {', '.join(ITEM_DIRS)}")

    for manifest_path, rel_path in manifests:
        print(f"  Found: {rel_path}/manifest.yaml")
        data = load_manifest(manifest_path)
        if data is None:
            continue

        entry = {
            "name": data["name"],
            "type": data["type"],
            "version": data["version"],
            "path": rel_path,
            "description": data.get("description", "").strip(),
            "tags": data.get("tags", []),
        }

        compatibility = data.get("compatibility", {})
        if compatibility:
            entry["compatibility"] = {
                "languages": compatibility.get("languages", []),
            }

        items.append(entry)

    registry = {
        "generated_at": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "total_items": len(items),
        "items": items,
    }

    with open(REGISTRY_PATH, "w") as f:
        yaml.dump(registry, f, default_flow_style=False, sort_keys=False, allow_unicode=True)

    print(f"\nRegistry written to {REGISTRY_PATH} ({len(items)} items)")


if __name__ == "__main__":
    generate_registry()
