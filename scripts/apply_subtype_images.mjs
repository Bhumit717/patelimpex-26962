// Applies the verified image matches to public/site/products/subtypes.json.
//
// Only images Gemini marked confident are attached. A "none" verdict is never
// overridden here: an image that cannot be attributed to a specific form stays
// off the site rather than being forced onto a variety.
//
//   node scripts/apply_subtype_images.mjs
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { execFileSync } from "node:child_process";

const ROOT = process.cwd();
const DOWNLOADS = path.join(os.homedir(), "Downloads");
const CACHE = path.join(ROOT, "scripts/.image-classification.json");
const SUBTYPES = path.join(ROOT, "public/site/products/subtypes.json");
const OUT_DIR = path.join(ROOT, "public/images/products/subtypes");
const FFMPEG = "ffmpeg";

const cache = JSON.parse(fs.readFileSync(CACHE, "utf8"));
const subtypes = JSON.parse(fs.readFileSync(SUBTYPES, "utf8"));

// Group the accepted images by the subtype they were matched to.
const bySubtype = new Map();
for (const [file, verdict] of Object.entries(cache)) {
  if (!verdict.key || !verdict.confident) continue;
  if (!bySubtype.has(verdict.key)) bySubtype.set(verdict.key, []);
  bySubtype.get(verdict.key).push(file);
}

const convert = (input, output) => {
  execFileSync(
    FFMPEG,
    ["-y", "-loglevel", "error", "-i", input, "-c:v", "libwebp", "-quality", "82", "-compression_level", "6", output],
    { stdio: ["ignore", "ignore", "pipe"] },
  );
};

let attached = 0;
let written = 0;
const report = [];

for (const [key, files] of bySubtype) {
  const [productSlug, subtypeSlug] = key.split("/");
  const list = subtypes[productSlug];
  if (!list) {
    report.push(`SKIP  ${key} - no such product in subtypes.json`);
    continue;
  }
  const entry = list.find((s) => s.slug === subtypeSlug);
  if (!entry) {
    report.push(`SKIP  ${key} - no such subtype in subtypes.json`);
    continue;
  }

  const dir = path.join(OUT_DIR, productSlug);
  fs.mkdirSync(dir, { recursive: true });

  const paths = [];
  files.forEach((file, index) => {
    // One file per subtype is the page image; any extras become a gallery.
    const name = index === 0 ? `${subtypeSlug}.webp` : `${subtypeSlug}-${index + 1}.webp`;
    const src = path.join(DOWNLOADS, file);
    const dest = path.join(dir, name);
    if (!fs.existsSync(src)) {
      report.push(`MISS  ${key} - source not found: ${file}`);
      return;
    }
    convert(src, dest);
    written += 1;
    const rel = `/images/products/subtypes/${productSlug}/${name}`;
    paths.push(rel);
    report.push(`SET   ${key}  <- ${file}  (${(fs.statSync(dest).size / 1024).toFixed(0)} kB)`);
  });

  if (!paths.length) continue;
  entry.image = paths[0];
  if (paths.length > 1) entry.gallery = paths.slice(1);
  attached += 1;
}

fs.writeFileSync(SUBTYPES, `${JSON.stringify(subtypes, null, 2)}\n`);

console.log(report.join("\n"));
console.log(`\nsubtypes given an image: ${attached}`);
console.log(`webp files written: ${written}`);
console.log(`remaining subtypes without an image: ${Object.values(subtypes).flat().filter((s) => !s.image).length}`);
