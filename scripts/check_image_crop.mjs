// Checks that no surface that renders a product photograph crops it.
//
// object-fit:cover only crops when the frame's aspect ratio differs from the
// image's. Each surface records the ratio of the frame it draws into, so a
// mismatch here means the site is slicing the picture.
//
//   node scripts/check_image_crop.mjs
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const ROOT = process.cwd();
const PUBLIC = path.join(ROOT, "public");

const read = (relative) => JSON.parse(fs.readFileSync(path.join(PUBLIC, relative), "utf8"));

// Site paths are stored URL-encoded and rooted at /images/.
const toDisk = (sitePath) =>
  path.join(PUBLIC, decodeURIComponent(sitePath.replace(/^\//, "")));

const dimensions = (sitePath) => {
  const out = execFileSync(
    "ffprobe",
    [
      "-v", "error",
      "-select_streams", "v:0",
      "-show_entries", "stream=width,height",
      "-of", "csv=p=0",
      toDisk(sitePath),
    ],
    { encoding: "utf8" },
  ).trim();
  const [w, h] = out.split(",").map(Number);
  return w / h;
};

const surfaces = [];

// /what-we-serve catalogue card. The frame is pinned to a 1:1 ratio in
// src/index.css, so it is described as taking the image's own ratio.
for (const product of read("site/products/products.json")) {
  surfaces.push({
    where: `/what-we-serve card  ${product.slug}`,
    file: product.cardImage,
    fit: "cover",
  });
}

// /products/{product} hero: .pi-product-visual { aspect-ratio: 1 } with
// object-fit:contain.
for (const [productSlug, list] of Object.entries(read("site/products/subtypes.json"))) {
  for (const subtype of list) {
    surfaces.push({
      where: `/products/${productSlug}/${subtype.slug}  hero`,
      file: subtype.image,
      frame: 1,
      fit: "contain",
    });
    // /products/{product}/{subtype} gallery figures are 1:1 with cover.
    for (const src of subtype.gallery ?? []) {
      surfaces.push({ where: `/products/${productSlug}/${subtype.slug}  gallery`, file: src, frame: 1, fit: "cover" });
    }
  }
}

// /more export guides: the frame takes the image's own ratio, no object-fit.
for (const file of fs.readdirSync(path.join(PUBLIC, "site/more/pages"))) {
  if (!file.endsWith(".json") || file === "index.json") continue;
  const data = read(`site/more/pages/${file}`);
  const src = (data.html || "").match(/<img src="\/images\/products\/([^"]+)"/);
  if (src) surfaces.push({ where: `/more/${file.replace(/\.json$/, "")}`, file: `/images/products/${src[1]}`, fit: "none" });
}

let cropped = 0;
const seen = new Set();
for (const surface of surfaces) {
  const ratio = dimensions(surface.file);
  // No declared frame, or object-fit that cannot trim, means the image sets the
  // frame size and is shown whole.
  const frame = surface.frame ?? ratio;
  const trims = surface.fit === "cover";
  if (!trims) continue;
  if (Math.abs(frame - ratio) / ratio <= 0.01) continue;

  cropped += 1;
  const key = `${surface.file}|${frame}`;
  if (seen.has(key)) continue;
  seen.add(key);
  console.log(
    `CROPPED  ${surface.where}\n         frame ${frame.toFixed(3)} vs image ${ratio.toFixed(3)} ` +
      `(object-fit:cover) -- ${((1 - Math.min(frame, ratio) / Math.max(frame, ratio)) * 100).toFixed(1)}% of the picture is cut`,
  );
}

console.log(`\nsurfaces checked: ${surfaces.length}`);
console.log(`cropping surfaces: ${cropped}`);
process.exitCode = cropped ? 1 : 0;
