// Lists the images the classifier has not yet produced a verdict for, so they
// can be batched into another AI tool by hand.
const fs = require("fs");
const path = require("path");

const downloads = path.join(process.env.USERPROFILE, "Downloads");
const cache = JSON.parse(fs.readFileSync(path.join(__dirname, ".image-classification.json"), "utf8"));

const files = fs
  .readdirSync(downloads)
  .filter((f) => /\.(png|jpe?g|webp)$/i.test(f))
  .map((f) => ({ name: f, mtime: fs.statSync(path.join(downloads, f)).mtimeMs }))
  .sort((a, b) => b.mtime - a.mtime)
  .slice(0, 66);

const left = files.filter((f) => !cache[f.name]);
console.log(`${left.length} remaining of ${files.length}\n`);
left.forEach((f, i) => console.log(`${i + 1}. ${f.name}`));
