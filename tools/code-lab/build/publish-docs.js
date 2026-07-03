/* publish-docs.js — stage the built course for GitHub Pages under docs/.

   dist/ is gitignored, so GitHub Pages can't serve it. This copies the built
   course.html into docs/index.html (a committed, served location), drops the
   real apple-touch-icon.png beside it, wires the guaranteed relative icon link
   (reliable on iOS, unlike the inlined data-URI), and adds .nojekyll so Pages
   serves the raw files. Run after a build:

       node build/build.js && node build/publish-docs.js

   Then enable Pages once: repo Settings > Pages > Source: main / docs. */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const DOCS = path.join(ROOT, "docs");

let html = fs.readFileSync(path.join(ROOT, "dist", "course.html"), "utf8");

// Add the relative apple-touch-icon link (guaranteed icon when the PNG is
// hosted beside index.html). Anchor on theme-color; idempotent.
const anchor = '<meta name="theme-color" content="#12203a">';
if (html.indexOf('href="apple-touch-icon.png"') === -1 && html.indexOf(anchor) !== -1) {
  html = html.replace(anchor, anchor + '\n<link rel="apple-touch-icon" href="apple-touch-icon.png">');
}

fs.mkdirSync(DOCS, { recursive: true });
fs.writeFileSync(path.join(DOCS, "index.html"), html);
fs.copyFileSync(path.join(ROOT, "src", "pwa", "apple-touch-icon.png"), path.join(DOCS, "apple-touch-icon.png"));
fs.writeFileSync(path.join(DOCS, ".nojekyll"), "");

console.log("docs/ ready: index.html (" + Math.round(html.length / 1024) + " KB) + apple-touch-icon.png + .nojekyll");
