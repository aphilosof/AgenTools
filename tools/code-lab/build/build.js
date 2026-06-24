#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "src");
const DIST = path.join(ROOT, "dist");

const JS_ORDER = [
  "storage.js",
  "runtime-python.js",
  "runtime-js.js",
  "music.js",
  "turtle.js",
  "plot.js",
  "errors.js",
  "style.js",
  "checker.js",
  "codex.js",
  "map.js",
  "arena.js",
  "engine.js",
];

function readAll(dir, order) {
  if (!fs.existsSync(dir)) return "";
  let files = fs.readdirSync(dir).filter((f) => f.endsWith(".js") || f.endsWith(".css"));
  if (order) {
    const ranked = (f) => {
      const i = order.indexOf(f);
      return i === -1 ? order.length : i;
    };
    files.sort((a, b) => ranked(a) - ranked(b) || a.localeCompare(b));
  } else {
    files.sort();
  }
  return files
    .map((f) => `\n/* ===== ${f} ===== */\n` + fs.readFileSync(path.join(dir, f), "utf8"))
    .join("\n");
}

function build() {
  const template = fs.readFileSync(path.join(SRC, "template.html"), "utf8");
  const css = readAll(path.join(SRC, "css"));
  const js = readAll(path.join(SRC, "js"), JS_ORDER);
  const lessons = readAll(path.join(ROOT, "lessons"));
  const arena = readAll(path.join(ROOT, "arena"));

  const out = template
    .replace("{{CSS}}", () => css)
    .replace("{{LESSONS}}", () => lessons)
    .replace("{{ARENA}}", () => arena)
    .replace("{{JS}}", () => js)
    .replace("{{BUILD_DATE}}", () => new Date().toISOString().slice(0, 10));

  const leftover = out.match(/\{\{[A-Z_]+\}\}/);
  if (leftover) {
    console.error(`build failed: unfilled slot ${leftover[0]}`);
    process.exit(1);
  }

  fs.mkdirSync(DIST, { recursive: true });
  const outArg = process.argv.find((a) => a.startsWith("--out="));
  const filename = outArg ? outArg.slice("--out=".length) : "course.html";
  const target = path.join(DIST, filename);
  fs.writeFileSync(target, out);
  console.log(`built ${target} (${(out.length / 1024).toFixed(0)} KB)`);
}

build();
