// Progress for the background classification run: percentage, verdict split,
// and whether the worker process is still alive.
const fs = require("fs");
const path = require("path");

const cachePath = path.join(__dirname, ".image-classification.json");
const cache = fs.existsSync(cachePath) ? JSON.parse(fs.readFileSync(cachePath, "utf8")) : {};
const entries = Object.entries(cache);
const matched = entries.filter(([, v]) => v.key);
const unconfident = matched.filter(([, v]) => !v.confident);

const total = 66;
const done = entries.length;
const pct = ((done / total) * 100).toFixed(0);

console.log(`classify: ${pct.padStart(3)}%  (${done}/${total})`);
console.log(`  matched ${matched.length}   none ${done - matched.length}   matched-but-unsure ${unconfident.length}`);

const bySubtype = new Map();
for (const [file, v] of matched) {
  if (!bySubtype.has(v.key)) bySubtype.set(v.key, []);
  bySubtype.get(v.key).push(file);
}
console.log(`  distinct subtypes covered: ${bySubtype.size}`);
for (const [key, files] of [...bySubtype].sort()) {
  const flag = files.some((f) => !cache[f].confident) ? " (unsure)" : "";
  console.log(`    ${key} <- ${files.length}${flag}`);
}

if (done < total) {
  console.log(`  still to classify: ${total - done}`);
}
