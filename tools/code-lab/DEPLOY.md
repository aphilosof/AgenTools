# Deploying Code Lab

The course is a single self-contained file, `dist/course.html`. You can run it
locally by double-clicking, or host it so it installs as an app on an iPhone/iPad.
The live copy is at **https://aphilosof.github.io/AgenTools/**.

---

## 1. Build (always do this first)

```bash
cd tools/code-lab
node build/build.js
```

This inlines the CSS, JS, lessons, and arena data into `src/template.html` and
writes `dist/course.html` (~540 KB). `dist/` is gitignored — it is a build
output, never edited by hand.

**Run it locally:** double-click `dist/course.html`, or `open dist/course.html`.
It needs internet the first time (Pyodide, CodeMirror, and fonts load from a CDN);
after that the browser caches them.

---

## 2. Publish / update the live web app (GitHub Pages)

GitHub Pages serves the repo's **`gh-pages` branch** at
`https://aphilosof.github.io/AgenTools/`. Because `dist/` is gitignored and Pages
can't serve it, we stage the built file into `docs/` and push only those files to
`gh-pages` — without touching your current branch or working tree.

Run this whole block from `tools/code-lab` after a build:

```bash
# 1. build + stage the site into docs/ (index.html, icon, .nojekyll)
node build/build.js
node build/publish-docs.js

# 2. push the staged files to the gh-pages branch root (git plumbing —
#    creates a commit straight from docs/ without a checkout or add)
B_NOJEKYLL=$(git hash-object -w docs/.nojekyll)
B_ICON=$(git hash-object -w docs/apple-touch-icon.png)
B_INDEX=$(git hash-object -w docs/index.html)
TREE=$(printf '100644 blob %s\t.nojekyll\n100644 blob %s\tapple-touch-icon.png\n100644 blob %s\tindex.html\n' \
  "$B_NOJEKYLL" "$B_ICON" "$B_INDEX" | git mktree)
COMMIT=$(git commit-tree "$TREE" -p refs/heads/gh-pages -m "Redeploy Code Lab")
git update-ref refs/heads/gh-pages "$COMMIT"
git push origin gh-pages
```

The live site updates within ~1 minute. Verify it picked up your build:

```bash
curl -s https://aphilosof.github.io/AgenTools/ | wc -c   # size changed = new build is live
```

### Why the plumbing (and not just `git add docs/`)

`commit-tree` / `mktree` build a commit directly from the three staged files and
attach it to `gh-pages`, so deploying never switches branches, never stages files
into your working branch, and never disturbs uncommitted work. You stay on
whatever branch you were on.

### One-time setup (already done — for reference)

- Repo **Settings → Pages → Source: Deploy from a branch → `gh-pages` / root**.
- The `gh-pages` branch was created as an orphan (no shared history with `main`);
  it holds only the three served files.
- `.nojekyll` tells Pages to serve the files as-is (no Jekyll processing).

---

## 3. Install on iPhone / iPad

1. Open **https://aphilosof.github.io/AgenTools/** in **Safari**.
2. Tap the **Share** button → **Add to Home Screen** → **Add**.
3. Launch it from the home-screen icon. It opens fullscreen, like a native app.

**Getting updates:** there is no service worker, so the app is not cached offline
— fully close it (swipe it away in the app switcher) and reopen, and it fetches
the latest deployed build. If an update seems stuck, delete the home-screen icon
and re-add it.

No Apple Developer account, App Store, or build tooling is involved — this is a
Progressive Web App installed straight from Safari.

---

## 4. Profiles are per-device

Each installed copy stores its players and their progress in that browser's
`localStorage`. Profiles do **not** sync between an iPad and an iPhone, or between
Safari and the installed app — they are separate stores. Use the **player pill**
(bottom-right) to add, switch, rename, or delete players on a given device.

---

## Quick reference

| Task | Command |
| --- | --- |
| Build the single file | `node build/build.js` |
| Run locally | `open dist/course.html` |
| Stage for Pages | `node build/publish-docs.js` |
| Deploy update | the plumbing block in §2 |
| Run the test harness | `node tests/run.js` |
