/* gen-pwa-icon.js — generate the home-screen icon for the installable web app.

   Produces a 180x180 RGBA PNG (a white "run" play-triangle on dark navy) with a
   hand-rolled PNG encoder (no image deps). Writes two things:
     - src/pwa/apple-touch-icon.png  (a real file — the RELIABLE way to give iOS
       an icon: host it beside course.html)
     - build/.pwa-icon-datauri       (the same PNG as a data: URI, inlined into
       template.html as a best-effort fallback)
   Re-run: node build/gen-pwa-icon.js */

const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const W = 180, H = 180;
const BG = [18, 32, 58, 255];    // #12203a navy
const FG = [245, 246, 250, 255]; // near-white

// right-pointing "play" triangle, centred
const A = [60, 48], B = [60, 132], C = [134, 90];
function edge(px, py, a, b) { return (px - b[0]) * (a[1] - b[1]) - (a[0] - b[0]) * (py - b[1]); }
function inTri(x, y) {
  const d1 = edge(x, y, A, B), d2 = edge(x, y, B, C), d3 = edge(x, y, C, A);
  const neg = d1 < 0 || d2 < 0 || d3 < 0, pos = d1 > 0 || d2 > 0 || d3 > 0;
  return !(neg && pos);
}

const raw = Buffer.alloc(H * (1 + W * 4));
let o = 0;
for (let y = 0; y < H; y++) {
  raw[o++] = 0; // filter: none
  for (let x = 0; x < W; x++) {
    const c = inTri(x, y) ? FG : BG;
    raw[o++] = c[0]; raw[o++] = c[1]; raw[o++] = c[2]; raw[o++] = c[3];
  }
}

const CRC = (function () {
  const t = [];
  for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; }
  return t;
})();
function crc32(buf) { let c = 0xFFFFFFFF; for (let i = 0; i < buf.length; i++) c = CRC[(c ^ buf[i]) & 0xFF] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; }
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length, 0);
  const t = Buffer.from(type, "ascii");
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(Buffer.concat([t, data])), 0);
  return Buffer.concat([len, t, data, crc]);
}

const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(W, 0); ihdr.writeUInt32BE(H, 4);
ihdr[8] = 8; ihdr[9] = 6; // 8-bit, RGBA
const idat = zlib.deflateSync(raw, { level: 9 });
const png = Buffer.concat([sig, chunk("IHDR", ihdr), chunk("IDAT", idat), chunk("IEND", Buffer.alloc(0))]);

fs.mkdirSync(path.join(__dirname, "..", "src", "pwa"), { recursive: true });
fs.writeFileSync(path.join(__dirname, "..", "src", "pwa", "apple-touch-icon.png"), png);
const dataUri = "data:image/png;base64," + png.toString("base64");
fs.writeFileSync(path.join(__dirname, ".pwa-icon-datauri"), dataUri);
console.log("icon " + W + "x" + H + ": png " + png.length + " bytes, data-uri " + dataUri.length + " chars");
