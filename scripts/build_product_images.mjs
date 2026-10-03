// Promotes a subtype photograph to be the product's main image.
//
// Every product in products.json needs its own hero picture, but the manual
// shoot only produced one photograph per form (variety, granulation, purity
// grade). The flagship subtype -- the first entry for the product, which is
// published in catalogue order -- therefore stands in as the product image.
//
// Two renditions are written so the catalogue list stays cheap:
//
//   manual/<slug>.webp       hero and JSON-LD, 1200px square
//   manual/<slug>-card.webp  catalogue card thumbnail, 560px square
//
// products.json is rewritten to point image/heroImage/cardImage at them, and
// the superseded placeholder at the old path is removed so no product can keep
// resolving to an empty file.
//
//   node scripts/build_product_images.mjs
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const ROOT = process.cwd();
const PUBLIC = path.join(ROOT, "public");
const PRODUCTS_FILE = path.join(PUBLIC, "site/products/products.json");
const SUBTYPES_FILE = path.join(PUBLIC, "site/products/subtypes.json");
const IMAGE_ROOT = path.join(PUBLIC, "images/products/manual");
const FFMPEG = "ffmpeg";

const HERO_SIZE = 1200;
const HERO_QUALITY = 80;
const CARD_SIZE = 560;
const CARD_QUALITY = 76;

const products = JSON.parse(fs.readFileSync(PRODUCTS_FILE, "utf8"));
const subtypes = JSON.parse(fs.readFileSync(SUBTYPES_FILE, "utf8"));

// Site paths are stored URL-encoded; the filesystem copy keeps the raw name.
const toDiskPath = (publicPath) =>
  path.join(PUBLIC, decodeURIComponent(publicPath.replace(/^\//, "")));

const render = (source, size, quality, destination) => {
  execFileSync(
    FFMPEG,
    [
      "-y",
      "-loglevel", "error",
      "-i", source,
      // Square renditions: both the hero frame and the card thumb crop to a
      // fixed aspect ratio, so resizing on the long edge keeps them centred.
      "-vf", `scale=${size}:${size}:force_original_aspect_ratio=decrease,pad=${size}:${size}:(ow-iw)/2:(oh-ih)/2`,
      "-c:v", "libwebp",
      "-quality", String(quality),
      "-compression_level", "6",
      destination,
    ],
    { stdio: ["ignore", "ignore", "pipe"] },
  );
};

// The first subtype whose photograph actually exists on disk is the flagship.
// A product is only skipped when every one of its subtypes is missing a file.
const flagshipSource = (product) => {
  for (const subtype of subtypes[product.slug] ?? []) {
    if (!subtype.image) continue;
    const source = toDiskPath(subtype.image);
    if (fs.existsSync(source)) return source;
  }
  return null;
};

const supersededPaths = new Set();
const report = [];

for (const product of products) {
  const source = flagshipSource(product);
  if (!source) {
    report.push(`SKIP  ${product.slug} - no subtype photograph on disk`);
    continue;
  }

  const heroName = `${product.slug}.webp`;
  const cardName = `${product.slug}-card.webp`;
  const heroPath = path.join(IMAGE_ROOT, heroName);
  const cardPath = path.join(IMAGE_ROOT, cardName);

  render(source, HERO_SIZE, HERO_QUALITY, heroPath);
  render(source, CARD_SIZE, CARD_QUALITY, cardPath);

  const hero = `/images/products/manual/${heroName}`;
  const card = `/images/products/manual/${cardName}`;
  product.image = hero;
  product.heroImage = hero;
  product.cardImage = card;

  [product.image, product.heroImage, product.cardImage].forEach((value) => {
    if (value) supersededPaths.add(value);
  });
  // Whatever the product pointed at before this run is now unreferenced.
  supersededPaths.add(`/images/products/manual/${product.slug}.png`);

  report.push(
    `SET   ${product.slug.padEnd(28)} <- ${path.relative(PUBLIC, source)}  ` +
      `(hero ${(fs.statSync(heroPath).size / 1024).toFixed(0)} kB, card ${(fs.statSync(cardPath).size / 1024).toFixed(0)} kB)`,
  );
}

// Only the flat per-product placeholders are removed. The per-subtype folders
// are the source photography and are never touched.
let removed = 0;
for (const product of products) {
  const stale = path.join(IMAGE_ROOT, `${product.slug}.png`);
  if (supersededPaths.has(`/images/products/manual/${product.slug}.png`) && fs.existsSync(stale)) {
    fs.unlinkSync(stale);
    removed += 1;
  }
}

fs.writeFileSync(PRODUCTS_FILE, `${JSON.stringify(products, null, 2)}\n`);

console.log(report.join("\n"));
console.log(`\nproducts updated: ${report.filter((line) => line.startsWith("SET")).length}`);
console.log(`placeholder files removed: ${removed}`);
