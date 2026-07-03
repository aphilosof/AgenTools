/* profile-isolation-test.js — the core guarantee of the profiles feature:
   each profile's progress/code/theme is stored under its own key, so switching
   players never mixes saves. Drives the REAL storage.js against a fake
   localStorage (the browser DOM/UI in profile-panel.js is separate).

   storage.js scopes its key by localStorage "codelab.currentProfile" at load;
   the "default" profile keeps the legacy un-suffixed key (progress migration).

   Run: node tests/profile-isolation-test.js */

const fs = require("fs");
const path = require("path");

const src = fs.readFileSync(path.join(__dirname, "..", "src", "js", "storage.js"), "utf8");

// One shared backing store across "page loads"; a fresh window.CL each load.
const store = {};
function fakeLS() {
  return {
    getItem: function (k) { return Object.prototype.hasOwnProperty.call(store, k) ? store[k] : null; },
    setItem: function (k, v) { store[k] = String(v); },
    removeItem: function (k) { delete store[k]; },
  };
}
// Load storage.js as if the page (re)loaded with `profileId` active.
function loadWith(profileId) {
  if (profileId === undefined) delete store["codelab.currentProfile"];
  else store["codelab.currentProfile"] = profileId;
  const window = { localStorage: fakeLS() };
  new Function("window", src)(window); // storage.js is an IIFE that sets window.CL.storage
  return window.CL.storage;
}

let pass = 0, fail = 0;
function ok(name, cond) {
  if (cond) { pass++; console.log("  PASS  " + name); }
  else { fail++; console.log("  FAIL  " + name); }
}

// 1. Legacy migration: pre-profiles progress becomes the default profile.
store["codelab.save.v2"] = JSON.stringify({ solved: { legacyLesson: true }, theme: "magazine" });
let sDef = loadWith(undefined);
ok("default profile id when none set", sDef.currentProfile() === "default");
ok("default keeps legacy un-suffixed key", sDef.profileSaveKey("default") === "codelab.save.v2");
ok("named profile gets a suffixed key", sDef.profileSaveKey("p2") === "codelab.save.v2.p2");
ok("legacy progress adopted by default profile", sDef.isSolved("legacyLesson") === true);

// 2. Default player makes progress + picks a theme.
sDef.markSolved("l1");
sDef.setTheme("c64");
ok("default sees its own solve", sDef.isSolved("l1") === true);

// 3. Switch to a second player: must start clean (isolation).
let sP2 = loadWith("p2");
ok("p2 does NOT see default's solve", sP2.isSolved("l1") === false);
ok("p2 does NOT see legacy progress", sP2.isSolved("legacyLesson") === false);
ok("p2 gets its own default theme", sP2.getTheme() === "magazine");
sP2.markSolved("l2");
sP2.setTheme("terminal");
ok("p2 sees its own solve", sP2.isSolved("l2") === true);

// 4. Switch back to default: its progress + theme survived untouched.
let sDef2 = loadWith("default");
ok("default still has its solve", sDef2.isSolved("l1") === true);
ok("default did NOT gain p2's solve", sDef2.isSolved("l2") === false);
ok("default kept its theme", sDef2.getTheme() === "c64");

// 5. The two saves live under distinct keys.
ok("distinct save keys exist", "codelab.save.v2" in store && "codelab.save.v2.p2" in store);

// 6. Reset is per-profile (wipes p2 only).
sP2 = loadWith("p2");
sP2.reset();
ok("reset clears p2's solve", loadWith("p2").isSolved("l2") === false);
ok("reset left default's solve intact", loadWith("default").isSolved("l1") === true);

console.log("\nprofile-isolation: " + pass + " passed, " + fail + " failed");
process.exit(fail ? 1 : 0);
