// Builds one image per subtype.
//
// Every product's subtypes are named after its reference site, but the manual
// shoot only photographed some of those forms. Rather than force a photo onto a
// form it does not show, a subtype is rendered one of two ways:
//
//   1. Its own photograph, when the shoot actually captured that form.
//   2. The plain product photograph, with no text burned into the picture.
//
// Both produce a distinct file per subtype, which is what the subtype pages and
// the Product structured data need. The subtype name is never drawn into the
// image: it rides along as alt text and as the hover caption on /what-we-serve,
// so the grid stays images only.
//
//   node scripts/build_subtype_images.mjs
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const ROOT = process.cwd();
const PUBLIC = path.join(ROOT, "public");
const PRODUCTS_FILE = path.join(PUBLIC, "site/products/products.json");
const SUBTYPES_FILE = path.join(PUBLIC, "site/products/subtypes.json");
const MANUAL = path.join(PUBLIC, "images/products/manual");
const OUT_ROOT = path.join(PUBLIC, "images/products/subtypes");
const FFMPEG = "ffmpeg";

const SIZE = 1200;
const QUALITY = 82;
const COMPRESSION = 4;

const products = JSON.parse(fs.readFileSync(PRODUCTS_FILE, "utf8"));
const subtypes = JSON.parse(fs.readFileSync(SUBTYPES_FILE, "utf8"));

// Subtypes the manual shoot genuinely photographed, keyed "product/subtype".
// Anything absent from this map falls back to the labelled product image rather
// than borrowing another form's photograph.
const PHOTO = {
  "basmati-rice/1121": "1121-basmati.png",
  "basmati-rice/1401": "1401-basmati.png",
  "basmati-rice/1509": "1509-basmati.png",
  "basmati-rice/pusa-basmati-rice": "pusa-basmati.png",
  "non-basmati-rice/non-basmati-parboiled-rice": "ir-64.png",
  "non-basmati-rice/non-basmati-raw-rice": "swarna.png",
  "non-basmati-rice/non-basmati-steam-rice": "pr-14.png",
  "non-basmati-rice/ir-64-parboiled-rice": "ir-64.png",
  "non-basmati-rice/pr-11-parboiled-rice": "PR 11.png",
  "non-basmati-rice/pr-14-parboiled-rice": "pr-14.png",
  "non-basmati-rice/sona-masoori-parboiled-rice": "sona-masoori.png",
  "non-basmati-rice/swarna-parboiled-rice": "swarna.png",
  "non-basmati-rice/ir-64-raw-rice": "ir-64.png",
  "non-basmati-rice/pr-11-raw-rice": "PR 11.png",
  "non-basmati-rice/pr-14-raw-rice": "pr-14.png",
  "non-basmati-rice/swarna-raw-rice": "swarna.png",
  "non-basmati-rice/pr-11-steam-rice": "PR 11.png",
  "non-basmati-rice/pr-14-steam-rice": "pr-14.png",
  "non-basmati-rice/swarna-steam-rice": "swarna.png",
  "non-basmati-rice/sona-masoori-steam-rice": "sona-masoori.png",
  "pesticide-free-basmati-rice/1121-pesticide-free-basmati-rice": "1121-basmati.png",
  "pesticide-free-basmati-rice/1509-pesticide-free-basmati-rice": "1509-basmati.png",
  "pesticide-free-basmati-rice/sharbati-pesticide-free-rice": "sharbati-basmati.png",
  "pesticide-free-basmati-rice/1121-pesticide-free-steam-basmati-rice": "1121-basmati.png",
  "pesticide-free-basmati-rice/1509-pesticide-free-steam-basmati-rice": "1509-basmati.png",
  "wheat-flour/standard-patent-flour": "standard-patent-flour.png",
  "wheat-flour/bakers-flour": "bakers-flour.png",
  "wheat-flour/hotel-and-restaurant-hr-all-purpose-flour": "all-purpose-flour.png",
  // The semolina and whole wheat shoots are reused here: Ardent lists both
  // semolina / durum flour and whole wheat among its traditional wheat flours.
  "wheat-flour/semolina-durum-flour": "suji-semolina/medium-granulation-semolina.png",
  "wheat-flour/whole-wheat-flour": "whole-wheat-flour/coarse-whole-wheat-flour.png",
  "wheat-flour/atta-flour": "whole-wheat-flour/stone-ground-style-flour.png",
  "peanut-groundnut/bold": "bold-runner-type.png",
  "peanut-groundnut/java": "java-spanish-type.png",
  "peanut-groundnut/tj-tiny-java": "tj-tiny-java.png",
  "psyllium-seeds/premium-grade": "premium-cleaned-seed.png",
  "psyllium-seeds/standard-grade": "standard-cleaned-seed.png",
  "dehydrated-products/onion-powder": "powdered-or-granulated.png",
  "dehydrated-products/onion-flakes": "flaked.png",
  "dehydrated-products/onion-slices": "sliced.png",
};

const run = (args) =>
  execFileSync(FFMPEG, ["-y", "-loglevel", "error", ...args], {
    cwd: ROOT,
    stdio: ["ignore", "ignore", "pipe"],
    timeout: 60000,
  });

// Square pad on white, matching how the hero frame and card thumb crop.
const square = (source, destination) =>
  run([
    "-i", source,
    "-vf",
    `scale=${SIZE}:${SIZE}:force_original_aspect_ratio=decrease,pad=${SIZE}:${SIZE}:(ow-iw)/2:(oh-ih)/2:color=white`,
    "-c:v", "libwebp", "-quality", String(QUALITY), "-compression_level", COMPRESSION,
    destination,
  ]);

let photos = 0;
let fallback = 0;
const missing = [];
const report = [];

// A bare filename is looked up inside the product's own folder; a value with a
// slash is taken relative to manual/, so one product's shoot can serve another
// product's type when the photographed item genuinely is that type.
const photoPath = (productSlug, file) =>
  file.includes("/") ? path.join(MANUAL, file) : path.join(MANUAL, productSlug, file);

for (const product of products) {
  const list = subtypes[product.slug];
  if (!list?.length) continue;

  const dir = path.join(OUT_ROOT, product.slug);
  fs.mkdirSync(dir, { recursive: true });

  const productPhoto = path.join(MANUAL, `${product.slug}.webp`);
  if (!fs.existsSync(productPhoto)) {
    missing.push(`${product.slug} (no product photograph)`);
    continue;
  }

  for (const subtype of list) {
    const key = `${product.slug}/${subtype.slug}`;
    const named = PHOTO[key] ? photoPath(product.slug, PHOTO[key]) : null;
    const destination = path.join(dir, `${subtype.slug}.webp`);

    if (named && fs.existsSync(named)) {
      square(named, destination);
      photos += 1;
      report.push(`PHOTO ${key}`);
    } else {
      square(productPhoto, destination);
      fallback += 1;
      report.push(`FALLBACK ${key}`);
    }
    console.log(`${report.length}/${photos + fallback} ${report.at(-1)}`);

    subtype.image = `/images/products/subtypes/${product.slug}/${subtype.slug}.webp`;
    subtype.alt = `${subtype.name} \u2014 ${product.name}`;
  }
}

fs.writeFileSync(SUBTYPES_FILE, `${JSON.stringify(subtypes, null, 2)}\n`);

console.log(`subtypes with their own photograph: ${photos}`);
console.log(`subtypes falling back to the plain product photo: ${fallback}`);
console.log(`total subtypes imaged: ${photos + fallback}`);
if (missing.length) console.log(`skipped products: ${missing.join(", ")}`);