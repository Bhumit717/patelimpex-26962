// Fails if any product or subtype photograph referenced by the site is missing
// from public/, or is an empty placeholder.
//
//   node scripts/check_product_images.mjs
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const PUBLIC = path.join(ROOT, "public");

const read = (relative) => JSON.parse(fs.readFileSync(path.join(PUBLIC, relative), "utf8"));

// A 1x1 transparent PNG is the placeholder the manual shoot was seeded with; it
// decodes to an 11-byte IDAT and renders as nothing.
const isPlaceholder = (file) => {
  const handle = fs.openSync(file, "r");
  const header = Buffer.alloc(26);
  fs.readSync(handle, header, 0, 26, 0);
  fs.closeSync(handle);
  return header.subarray(16, 24).toString("hex") === "0000000000000001" && fs.statSync(file).size < 512;
};

const check = (reference, where) => {
  const file = path.join(PUBLIC, decodeURIComponent(reference.replace(/^\//, "")));
  if (!fs.existsSync(file)) {
    console.log(`MISSING  ${where} -> ${reference}`);
    return false;
  }
  if (isPlaceholder(file)) {
    console.log(`EMPTY    ${where} -> ${reference} (${fs.statSync(file).size} bytes)`);
    return false;
  }
  return true;
};

let ok = 0;
let broken = 0;

const products = read("site/products/products.json");
for (const product of products) {
  for (const field of ["image", "heroImage", "cardImage"]) {
    const reference = product[field];
    if (!reference) {
      console.log(`ABSENT   ${product.slug}.${field}`);
      broken += 1;
      continue;
    }
    // Every product must expose all three fields so the detail page and the
    // catalogue card can never disagree about which picture to show.
    if (check(reference, `${product.slug}.${field}`)) ok += 1;
    else broken += 1;
  }
}

const subtypes = read("site/products/subtypes.json");
for (const [productSlug, list] of Object.entries(subtypes)) {
  for (const subtype of list) {
    const references = [subtype.image, ...(subtype.gallery ?? [])].filter(Boolean);
    if (!references.length) {
      console.log(`ABSENT   ${productSlug}/${subtype.slug} (no image, no gallery)`);
      broken += 1;
    }
    for (const reference of references) {
      if (check(reference, `${productSlug}/${subtype.slug}`)) ok += 1;
      else broken += 1;
    }
  }
}

console.log(`\nimages resolving: ${ok}`);
console.log(`problems: ${broken}`);
process.exitCode = broken ? 1 : 0;
