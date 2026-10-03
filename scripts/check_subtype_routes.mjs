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
  if (forms.length !== p.varieties.length) {
    fail += 1;
    console.log(`COUNT MISMATCH ${p.slug}: varieties=${p.varieties.length} subtypes=${forms.length}`);
  }
  for (const s of forms) {
    const crumb = `<a href="/products/${esc(p.slug)}">${esc(p.category)}</a><span>/</span><span>${esc(s.name)}</span>`;
    const h = check(`${p.slug}/${s.slug}`, [
      ["__PAGE_TITLE__", esc(s.name)],
      ["__PAGE_BODY__", "<p>y</p>"],
      ["__CATEGORY__", crumb],
      ["__EYEBROW__", esc(s.eyebrow)],
      ["__INTRO__", esc(s.intro)],
      ["__PRODUCT_SLUG__", `${encodeURIComponent(p.slug)}&amp;variant=${encodeURIComponent(s.slug)}`],
      ["__PRODUCT_IMAGE__", esc(s.image || p.heroImage || p.image)],
      ["__PRODUCT_ALT__", esc(s.alt)],
      ["__PRODUCT_EMAIL__", encodeURIComponent(`${p.name} - ${s.name}`)],
    ]);
    // Hero CTA must reach the variant-scoped inquiry URL.
    if (!h.includes(`/contact?product=${encodeURIComponent(p.slug)}&amp;variant=${encodeURIComponent(s.slug)}`)) {
      fail += 1;
      console.log(`VARIANT CTA MISSING ${p.slug}/${s.slug}`);
    }
    if (!h.includes(`href="/products/${esc(p.slug)}"`)) {
      fail += 1;
      console.log(`BACK LINK MISSING ${p.slug}/${s.slug}`);
    }
  }
}

console.log(`routes checked: ${checked}, failures: ${fail}`);
process.exit(fail ? 1 : 0);
