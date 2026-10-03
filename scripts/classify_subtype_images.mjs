// Classifies each downloaded catalogue image against the real published
// subtype list using Gemini vision, so no image is assigned on guesswork.
//
//   $env:GEMINI_API_KEY = "..."
//   node scripts/classify_subtype_images.mjs
//
// Results are cached per file in scripts/.image-classification.json, so the
// script is resumable and re-running it costs nothing for images already done.
//
// A "none" verdict is a valid and expected outcome: most of these are generic
// "bowl of X" stock photos that genuinely cannot be attributed to one variety.
import fs from "node:fs";
import path from "node:path";
import os from "node:os";

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error("GEMINI_API_KEY is not set. Get one at https://aistudio.google.com/apikey");
  process.exit(1);
}

const ROOT = process.cwd();
const DOWNLOADS = path.join(os.homedir(), "Downloads");
const CACHE = path.join(ROOT, "scripts/.image-classification.json");
const MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

const products = JSON.parse(fs.readFileSync(path.join(ROOT, "public/site/products/products.json"), "utf8"));
const subtypes = JSON.parse(fs.readFileSync(path.join(ROOT, "public/site/products/subtypes.json"), "utf8"));

// Flatten the real published list into the options Gemini is allowed to choose.
const options = [];
for (const [productSlug, forms] of Object.entries(subtypes)) {
  const product = products.find((p) => p.slug === productSlug);
  for (const form of forms) {
    options.push({
      key: `${productSlug}/${form.slug}`,
      product: product?.name ?? productSlug,
      category: product?.category ?? "",
      name: form.name,
      // What a photo of this form should actually look like.
      expect: form.alt,
    });
  }
}

const SYSTEM = `You are matching product photographs to a specific published product form (subtype) for a real agricultural export website.

You are given ONE image and a numbered list of candidate forms. Choose the single form the image genuinely depicts.

Rules:
- Judge only what is VISIBLE. Never guess a variety, cultivar, purity grade or origin from context alone.
- Many images are generic stock photos (e.g. a bowl of rice). If the image cannot be attributed to ONE specific form, answer "none" and set confident=false. This is a correct and valued answer.
- Reject near-misses: cornmeal is NOT raw corn flour; whole grain is NOT refined; a husk is NOT a powder; golden granules are NOT semolina if they are not visibly semolina.
- "confidence" is your certainty that the image is an accurate depiction of that specific form. Use below 0.5 when the match is loose.

Reply with JSON only, no prose:
{"choice": <candidate number or 0>, "confident": <true|false>, "reason": "<one short sentence>"}`;

const listBlock = options
  .map((o, i) => `${i + 1}. [${o.key}] ${o.name} (${o.product} / ${o.category}) — depicts: ${o.expect}`)
  .join("\n");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Free-tier Gemini is throttled hard (per-minute caps, and 503s under load),
// so a fixed pause plus capped backoff keeps the pass moving. Failures are
// dropped rather than retried for minutes: the cache makes a later run cheap.
const DELAY_MS = Number(process.env.CLASSIFY_DELAY_MS || 2500);

async function classify(filePath) {
  const b64 = fs.readFileSync(filePath).toString("base64");
  const body = {
    contents: [
      {
        role: "user",
        parts: [
          { text: `Candidate forms:\n\n${listBlock}\n\nImage filename: ${path.basename(filePath, path.extname(filePath))}\n\nWhich candidate does this image depict?` },
          { inline_data: { mime_type: "image/png", data: b64 } },
        ],
      },
    ],
    system_instruction: { parts: [{ text: SYSTEM }] },
    generationConfig: { responseMimeType: "application/json", temperature: 0 },
  };

  for (let attempt = 0; attempt < 3; attempt += 1) {
    const res = await fetch(`${ENDPOINT}?key=${API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (res.ok) {
      const data = await res.json();
      const text = data?.candidates?.[0]?.content?.parts?.map((p) => p.text).join("") ?? "";
      return JSON.parse(text);
    }
    if (res.status === 429 || res.status >= 500) {
      const wait = Math.min(2 ** attempt * 5000, 25000);
      console.log(`      (${res.status}, retry in ${wait / 1000}s)`);
      await sleep(wait);
      continue;
    }
    throw new Error(`${res.status} ${res.statusText}: ${(await res.text()).slice(0, 200)}`);
  }
  throw new Error("throttled after 3 attempts");
}

const files = fs
  .readdirSync(DOWNLOADS)
  .filter((f) => /\.(png|jpe?g|webp)$/i.test(f))
  .map((f) => ({ name: f, full: path.join(DOWNLOADS, f), mtime: fs.statSync(path.join(DOWNLOADS, f)).mtimeMs }))
  .sort((a, b) => b.mtime - a.mtime)
  .slice(0, 66);

const cache = fs.existsSync(CACHE) ? JSON.parse(fs.readFileSync(CACHE, "utf8")) : {};
let matched = 0;
let none = 0;
let failed = 0;
let lowConfidence = 0;

const done = () => Object.keys(cache).length;
const pct = () => String(Math.round((done() / files.length) * 100)).padStart(3);

console.log(`Subtypes offered: ${options.length}`);
console.log(`Images to classify: ${files.length}`);
console.log(`Already cached: ${done()}\n`);

let started = Date.now();

for (const [i, file] of files.entries()) {
  let r = cache[file.name];
  if (r) {
    // Cached rows are skipped, so show a compact marker instead of a full block.
    console.log(`[${pct()}%] ${i + 1}/${files.length} cached  ${file.name} -> ${r.key || "none"}`);
  } else {
    try {
      const out = await classify(file.full);
      const choice = Number(out.choice) || 0;
      const key = choice >= 1 && choice <= options.length ? options[choice - 1].key : "";
      r = { key, confident: Boolean(out.confident), reason: out.reason ?? "" };
      cache[file.name] = r;
      fs.writeFileSync(CACHE, JSON.stringify(cache, null, 2));
      const m = Object.values(cache).filter((v) => v.key).length;
      const n = done() - m;
      console.log(
        `[${pct()}%] ${i + 1}/${files.length} OK  ${file.name}\n` +
          `      -> ${key || "none"} (confident=${r.confident})\n` +
          `      ${r.reason}\n` +
          `      progress ${done()}/${files.length}  matched=${m}  none=${n}  ` +
          `${((Date.now() - started) / 1000).toFixed(0)}s elapsed`,
      );
      started = Date.now();
    } catch (err) {
      failed += 1;
      const m = Object.values(cache).filter((v) => v.key).length;
      console.log(
        `[${pct()}%] ${i + 1}/${files.length} FAILED  ${file.name}\n` +
          `      ${err.message}  (will retry on a later run)\n` +
          `      progress ${done()}/${files.length}  matched=${m}  none=${done() - m}`,
      );
      await sleep(DELAY_MS);
      continue;
    }
  }
  if (r.key) matched += 1;
  else none += 1;
  if (r.key && !r.confident) lowConfidence += 1;
  await sleep(DELAY_MS);
}

const remaining = files.filter((f) => !cache[f.name]).length;
console.log(`\nmatched: ${matched}   none: ${none}   matched-but-not-confident: ${lowConfidence}   failed: ${failed}`);
console.log(`classified: ${matched + none}/${files.length}${remaining ? `, still to do: ${remaining}` : ""}`);
console.log(`Cache written to ${path.relative(ROOT, CACHE)}`);
process.exit(remaining ? 1 : 0);
