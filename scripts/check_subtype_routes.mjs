// Verifies every /products route fills all template placeholders, that no
// "undefined"/"NaN" leaks into the markup, and that subtype pages cross-link.
import fs from "node:fs";

const tpl = fs.readFileSync("public/site/products/_template.html", "utf8");
const products = JSON.parse(fs.readFileSync("public/site/products/products.json", "utf8"));
const st = JSON.parse(fs.readFileSync("public/site/products/subtypes.json", "utf8"));

const esc = (s) =>
  s.replace(/[&<>'"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[c]);
const rep = (h, a, b) => h.split(a).join(b);

let fail = 0;
let checked = 0;

function check(label, pairs) {
  let h = tpl;
  for (const [a, b] of pairs) h = rep(h, a, b);
  checked += 1;
  const left = [...new Set(h.match(/__[A-Z_]+__/g) ?? [])];
  if (left.length) {
    fail += 1;
    console.log(`LEFTOVER ${label}: ${left.join(",")}`);
  }
  const bad = h.match(/undefined|NaN|\[object Object\]/g);
  if (bad) {
    fail += 1;
    console.log(`BAD VALUE in ${label}: ${[...new Set(bad)].join(",")}`);
  }
  return h;
}

for (const p of products) {
  const forms = st[p.slug] ?? [];
  check(p.slug, [
    ["__PAGE_TITLE__", esc(p.name)],
    ["__PAGE_BODY__", "<p>x</p>"],
    ["__CATEGORY__", esc(p.category)],
    ["__EYEBROW__", esc(p.eyebrow)],
    ["__INTRO__", esc(p.intro)],
    ["__PRODUCT_SLUG__", encodeURIComponent(p.slug)],
    ["__PRODUCT_IMAGE__", esc(p.heroImage || p.image)],
    ["__PRODUCT_ALT__", esc(p.alt)],
    ["__PRODUCT_EMAIL__", encodeURIComponent(p.name)],
  ]);
  if (!(p.slug in st)) {
    console.log(`no subtype entry: ${p.slug}`);
  }
  for (const s of forms) {
    // Mirrors the replacement set SitePage.tsx applies for /products routes.
    const h = check(`${p.slug}/${s.slug}`, [
      ["__PAGE_TITLE__", esc(s.name)],
      ["__PAGE_BODY__", "<p>y</p>"],
      ["__CATEGORY__", esc(p.category)],
      ["__EYEBROW__", esc(p.eyebrow)],
      ["__INTRO__", esc(`${s.name} from the ${p.name} range. ${p.intro}`)],
      ["__PRODUCT_SLUG__", encodeURIComponent(p.slug)],
      ["__PRODUCT_IMAGE__", esc(s.image || p.heroImage || p.image)],
      ["__PRODUCT_ALT__", esc(s.alt)],
      ["__PRODUCT_EMAIL__", encodeURIComponent(s.name)],
    ]);
    // Every product page must offer the catalog route back out to the range list.
    if (!h.includes(`<a href="/what-we-serve">Products</a>`)) {
      fail += 1;
      console.log(`CATALOG LINK MISSING ${p.slug}/${s.slug}`);
    }
    if (!h.includes(`href="/contact?product=${encodeURIComponent(p.slug)}"`)) {
      fail += 1;
      console.log(`INQUIRY CTA MISSING ${p.slug}/${s.slug}`);
    }
  }
}

// A subtype group without a parent product would be an unreachable route.
for (const key of Object.keys(st)) {
  if (!products.some((p) => p.slug === key)) {
    fail += 1;
    console.log(`ORPHAN SUBTYPE GROUP ${key}`);
  }
}

console.log(`routes checked: ${checked}, failures: ${fail}`);
process.exit(fail ? 1 : 0);
