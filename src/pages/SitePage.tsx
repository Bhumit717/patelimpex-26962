import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { initSiteForms } from "@/lib/siteForms";
import { initMoreReveal } from "@/lib/moreReveal";
import { initProductGroups } from "@/lib/productGroups";



type Entry = { route: string; file: string; title: string; description: string };

type ProductRow = [string, string];

// Every product is one page built only from the figures its reference site
// publishes, laid out as the same A-E specification tables. A table the
// reference does not document is simply absent.
type Product = {
  slug: string;
  name: string;
  category: string;
  eyebrow: string;
  intro: string;
  overview: string;
  details?: ProductRow[];
  packing?: ProductRow[];
  physical?: ProductRow[];
  chemical?: ProductRow[];
  grades?: ProductRow[];
  nutrition?: ProductRow[];
  image: string;
  heroImage?: string;
  cardImage?: string;
  alt: string;
  title: string;
  description: string;
  keywords?: string[];
  reference?: string;
};

// A named variety or form of a product, taken from the product's reference site
// and published at /products/{product}/{subtype}. Only the rows that identify
// the form are held here; the B-E specification tables are the parent product's,
// because the reference publishes one set of figures for the product as a whole.
type Subtype = {
  slug: string;
  name: string;
  details: ProductRow[];
  image: string;
  alt: string;
};

type SubtypeMap = Record<string, Subtype[]>;

const WEBFLOW_SITE_ID = "6a44eec1ed1af2c4c403df6b";
type WebflowRuntime = {
  destroy?: () => void;
  ready?: () => void;
  require?: (name: string) => { init?: () => void } | undefined;
};
const WEBFLOW_PAGE_IDS: Record<string, string> = {
  "/": "6a44eec1ed1af2c4c403df38",
  "/about": "6a44eec1ed1af2c4c403df51",
  "/services": "6a44eec1ed1af2c4c403df58",
  "/what-we-serve": "6a44eec1ed1af2c4c403df5e",
  "/insights": "6a44eec1ed1af2c4c403df49",
  "/careers": "6a44eec1ed1af2c4c403df3d",
  "/contact": "6a44eec1ed1af2c4c403df47",
  "/merchandises": "6a44eec1ed1af2c4c403df97",
  "/checkout": "6a44eec1ed1af2c4c403df62",
  "/qhse": "6a44eec1ed1af2c4c403e02d",
  "/privacy-policy": "6a44eec1ed1af2c4c403df65",
  "/terms-conditions": "6a44eec1ed1af2c4c403df48",
  "/delivery-shipping-policy": "6a44eec1ed1af2c4c403e012",
  "/refund-returns-policy": "6a44eec1ed1af2c4c403e02a",
  "/payment-policy": "6a44eec1ed1af2c4c403dfd4",
};

const getWebflowPageId = (path: string) => {
  if (WEBFLOW_PAGE_IDS[path]) return WEBFLOW_PAGE_IDS[path];
  if (path === "/more" || path.startsWith("/more/")) return WEBFLOW_PAGE_IDS["/qhse"];
  if (path.startsWith("/insights/")) return "6a44eec1ed1af2c4c403df4a";
  if (path.startsWith("/ai-news/")) return "6a44eec1ed1af2c4c403df4c";
  if (path.startsWith("/product/")) return "6a44eec1ed1af2c4c403df61";
  return undefined;
};


let manifestCache: Entry[] | null = null;

const loadManifest = async () => {
  if (manifestCache) return manifestCache;
  const res = await fetch("/site/manifest.json");
  manifestCache = (await res.json()) as Entry[];
  return manifestCache;
};

let productsCache: Product[] | null = null;

const loadProducts = async () => {
  if (productsCache) return productsCache;
  const res = await fetch("/site/products/products.json");
  productsCache = (await res.json()) as Product[];
  return productsCache;
};



let subtypesCache: SubtypeMap | null = null;

const loadSubtypes = async () => {
  if (subtypesCache) return subtypesCache;
  const res = await fetch("/site/products/subtypes.json");
  subtypesCache = (await res.json()) as SubtypeMap;
  return subtypesCache;
};

const escapeHtml = (value: string) =>
  value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };
    return entities[character] ?? character;
  });

const replaceEvery = (value: string, search: string, replacement: string) =>
  value.split(search).join(replacement);

// Only values that really are http(s) URLs are treated as absolute; anything
// else is a site-relative asset path.
const isExternalUrl = (value: string | undefined): value is string =>
  typeof value === "string" && /^https?:\/\//i.test(value);

const firstImage = (...values: (string | undefined)[]) => values.find(Boolean) ?? "";

const productImage = (product: Product, subtypes: Subtype[] = []) =>
  firstImage(product.heroImage, product.image, ...subtypes.map((subtype) => subtype.image));

const specRow = ([label, value]: ProductRow) =>
  `<div class="pi-product-spec-row"><span>${escapeHtml(label)}</span><strong>${escapeHtml(
    value,
  )}</strong></div>`;

// One reference table becomes one labelled section. Tables the reference does
// not publish are dropped entirely rather than padded out with placeholder
// rows, so the page only ever shows documented figures.
const renderSpecSection = (heading: string, rows?: ProductRow[]) =>
  rows?.length
    ? `<section class="pi-product-spec-layout pi-product-section">
        <div class="pi-product-section-label">${escapeHtml(heading)}</div>
        <div class="pi-product-spec-table">${rows.map(specRow).join("")}</div>
      </section>`
    : "";

const renderProductBody = (product: Product, allProducts: Product[], subtypes: Subtype[] = []) => {
  // Siblings from the same category are the most useful next step. Categories
  // with a single product would otherwise have no internal product link at all,
  // so fall back to the rest of the catalogue to keep every page connected.
  const siblings = allProducts.filter(
    (item) => item.category === product.category && item.slug !== product.slug,
  );
  const related = siblings.length
    ? siblings
    : allProducts.filter((item) => item.slug !== product.slug).slice(0, 6);
  const relatedLinks = related
    .map(
      (item) =>
        `<li><a href="/products/${encodeURIComponent(item.slug)}">${escapeHtml(item.name)}</a></li>`,
    )
    .join("");

  // The named varieties and forms the reference lists for this product. Each one
  // has its own page, its own image and its own identifying rows.
  const subtypeIndex = subtypes.length
    ? `<section class="pi-product-related pi-product-section">
        <div class="pi-product-section-label">Available ${escapeHtml(
          product.category.toLowerCase(),
        )} types</div>
        <ul class="pi-product-related-list">${subtypes
          .map(
            (subtype) =>
              `<li><a href="/products/${encodeURIComponent(
                product.slug,
              )}/${encodeURIComponent(subtype.slug)}">${escapeHtml(subtype.name)}</a></li>`,
          )
          .join("")}</ul>
      </section>`
    : "";

  return `
  <section class="pi-product-overview pi-product-section">
    <div class="pi-product-section-label">Product overview</div>
    <div><h2>${escapeHtml(product.name)}</h2><p>${escapeHtml(product.overview)}</p></div>
  </section>
  ${subtypeIndex}
  ${renderSpecSection("A. Product Details", product.details)}
  ${renderSpecSection("B. Packing and Shipping Details", product.packing)}
  ${renderSpecSection("C. Physical Specifications", product.physical)}
  ${renderSpecSection("D. Chemical Specifications", product.chemical)}
  ${renderSpecSection("E. Grades / Varieties", product.grades)}
  ${renderSpecSection("Nutritional Information (per 100 g)", product.nutrition)}
  <section class="pi-product-related pi-product-section"><div class="pi-product-section-label">${siblings.length ? `More in ${escapeHtml(product.category)}` : "Other products"}</div><p><a href="/what-we-serve">View the full product range</a> or <a href="/contact?product=${encodeURIComponent(product.slug)}">send a product inquiry</a>.</p>${relatedLinks ? `<ul class="pi-product-related-list">${relatedLinks}</ul>` : ""}</section>
  `;
};

// A subtype page leads with the rows that identify the form, then repeats the
// parent product's B-E tables because the reference publishes a single set of
// figures for the product as a whole rather than per variety.
const renderSubtypeBody = (
  product: Product,
  subtype: Subtype,
  siblings: Subtype[],
  allProducts: Product[],
) => {
  const related = allProducts.filter((item) => item.slug !== product.slug).slice(0, 6);
  const siblingLinks = siblings
    .map(
      (item) =>
        `<li><a href="/products/${encodeURIComponent(
          product.slug,
        )}/${encodeURIComponent(item.slug)}">${escapeHtml(item.name)}</a></li>`,
    )
    .join("");

  return `
  <section class="pi-product-overview pi-product-section">
    <div class="pi-product-section-label">Product overview</div>
    <div><h2>${escapeHtml(subtype.name)}</h2><p>${escapeHtml(
      product.overview,
    )}</p><p><a href="/products/${encodeURIComponent(product.slug)}">Back to ${escapeHtml(
      product.name,
    )}</a></p></div>
  </section>
  ${renderSpecSection("A. Product Details", subtype.details)}
  ${renderSpecSection("B. Packing and Shipping Details", product.packing)}
  ${renderSpecSection("C. Physical Specifications", product.physical)}
  ${renderSpecSection("D. Chemical Specifications", product.chemical)}
  ${renderSpecSection("E. Grades / Varieties", product.grades)}
  ${renderSpecSection("Nutritional Information (per 100 g)", product.nutrition)}
  ${
    siblingLinks
      ? `<section class="pi-product-related pi-product-section"><div class="pi-product-section-label">Other ${escapeHtml(
          product.category.toLowerCase(),
        )} types</div><ul class="pi-product-related-list">${siblingLinks}</ul></section>`
      : ""
  }
  <section class="pi-product-related pi-product-section"><div class="pi-product-section-label">Other products</div><p><a href="/what-we-serve">View the full product range</a> or <a href="/contact?product=${encodeURIComponent(
    product.slug,
  )}">send a product inquiry</a>.</p>${
    related.length
      ? `<ul class="pi-product-related-list">${related
          .map(
            (item) =>
              `<li><a href="/products/${encodeURIComponent(item.slug)}">${escapeHtml(
                item.name,
              )}</a></li>`,
          )
          .join("")}</ul>`
      : ""
  }</section>
  `;
};

const setMetaContent = (selector: string, attribute: "name" | "property", key: string, content: string) => {
  let meta = document.querySelector<HTMLMetaElement>(selector);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }
  meta.content = content;
};

const setPageMetadata = (title: string, description: string, path: string) => {
  document.title = title;
  setMetaContent('meta[name="description"]', "name", "description", description);
  setMetaContent('meta[property="og:title"]', "property", "og:title", title);
  setMetaContent('meta[property="og:description"]', "property", "og:description", description);
  setMetaContent('meta[property="og:url"]', "property", "og:url", `https://patelimpex.com${path}`);
  setMetaContent('meta[name="twitter:title"]', "name", "twitter:title", title);
  setMetaContent('meta[name="twitter:description"]', "name", "twitter:description", description);
};

const SITE_URL = "https://patelimpex.com";

// Product structured data. Prices are not published on this site, so `offers`
// is deliberately omitted rather than publishing a placeholder figure. Every
// documented row across the A-E tables is published as a property.
const productJsonLd = (product: Product, subtypes: Subtype[] = []) => {
  const image = productImage(product, subtypes);
  const origin = product.details?.find(([label]) => label.toLowerCase() === "origin")?.[1];
  const properties = [
    ...(product.details ?? []),
    ...(product.packing ?? []),
    ...(product.physical ?? []),
    ...(product.chemical ?? []),
    ...(product.grades ?? []),
    ...(product.nutrition ?? []),
  ];
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: product.category,
    image: isExternalUrl(image) ? image : `${SITE_URL}${image}`,
    url: `${SITE_URL}/products/${product.slug}`,
    brand: { "@type": "Brand", name: "Patel Impex" },
    ...(origin ? { countryOfOrigin: origin } : {}),
    ...(product.keywords?.length ? { keywords: product.keywords.join(", ") } : {}),
    additionalProperty: properties.map(([name, value]) => ({
      "@type": "PropertyValue",
      name,
      value,
    })),
    ...(subtypes.length
      ? {
          hasVariant: subtypes.map((subtype) => ({
            "@type": "Product",
            name: subtype.name,
            url: `${SITE_URL}/products/${product.slug}/${subtype.slug}`,
            image: isExternalUrl(subtype.image) ? subtype.image : `${SITE_URL}${subtype.image}`,
          })),
        }
      : {}),
  };
};

// A subtype is published as its own Product linked back to the parent range with
// isVariantOf, so the two pages describe one item rather than two products.
const subtypeJsonLd = (product: Product, subtype: Subtype) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: `${subtype.name} – ${product.name}`,
  description: `${subtype.name} from the ${product.name} range. ${product.description}`,
  category: product.category,
  image: isExternalUrl(subtype.image) ? subtype.image : `${SITE_URL}${subtype.image}`,
  url: `${SITE_URL}/products/${product.slug}/${subtype.slug}`,
  brand: { "@type": "Brand", name: "Patel Impex" },
  isVariantOf: {
    "@type": "Product",
    name: product.name,
    url: `${SITE_URL}/products/${product.slug}`,
  },
  additionalProperty: subtype.details.map(([name, value]) => ({
    "@type": "PropertyValue",
    name,
    value,
  })),
});

const setJsonLd = (data: unknown) => {
  let script = document.querySelector<HTMLScriptElement>("script[data-pi-jsonld]");
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.piJsonld = "true";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
};

const clearJsonLd = () => {
  document.querySelector("script[data-pi-jsonld]")?.remove();
};

// Runtime the exported site expects, in strict load order.
const RUNTIME = [
  "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js",
  "https://cdn.prod.website-files.com/6a44eec1ed1af2c4c403df6b/js/webflow.schunk.7a143ecb35f54dba.js",
  "https://cdn.prod.website-files.com/6a44eec1ed1af2c4c403df6b/js/webflow.schunk.8d4f1a8451c26c43.js",
  "https://cdn.prod.website-files.com/6a44eec1ed1af2c4c403df6b/js/webflow.9d979e0d.ce21502f658531f1.js",
];

const loadScript = (src: string, module = false) =>
  new Promise<void>((resolve) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[data-site-runtime="${src}"]`);
    if (existing) return resolve();
    const el = document.createElement("script");
    el.src = src;
    el.async = false;
    if (module) el.type = "module";
    el.dataset.siteRuntime = src;
    el.onload = () => resolve();
    el.onerror = () => resolve();
    document.body.appendChild(el);
  });

let runtimeStarted = false;

const startRuntime = async () => {
  if (runtimeStarted) return;
  runtimeStarted = true;
  for (const src of RUNTIME) await loadScript(src);
  // Webflow interactions on freshly injected DOM.
  const wf = (window as unknown as { Webflow?: WebflowRuntime }).Webflow;
  try {
    wf?.destroy?.();
    wf?.ready?.();
    wf?.require?.("ix2")?.init?.();
  } catch {
    /* noop */
  }
  // GSAP / Three.js / Lenis animation bundle (truck sequence, ocean scene, sliders).
  await loadScript("/site/app/main.js", true);
  keepPageScrollable();
};

// The exported bundle carries a Webflow e-commerce cart guard
// (initCartScrollGuard in chunks/layout-*.js). It watches
// .w-commerce-commercecartcontainerwrapper and, on every attribute change,
// calls lenis.stop() and sets window.__scrollLocked = true whenever that
// wrapper is not display:none. lenis.stop() pins body { overflow: hidden },
// and the companion ScrollGuard has already rewritten window.scrollTo,
// window.scroll, window.scrollBy and Element.prototype.scrollTop into no-ops
// while the flag is set -- so once it trips, the page cannot be scrolled by
// wheel, keyboard or script.
//
// This site has no cart and never opens a merch popup, but the wrapper markup
// ships on all 41 exported pages, so the guard always finds its trigger. Its
// only release path is ScrollGuard.close(), which returns early unless a
// .merchan-popup.active exists to close -- so a single spurious trip leaves
// scrolling dead permanently, which is what shows up as "scroll works for a
// while, then stops".
//
// Two defences: hide the unused wrapper so the guard's own visibility test
// reports "not visible" and it takes its release branch, and re-check on a slow
// interval in case the bundle re-applies an inline style or re-runs the guard
// after a transition.
const keepPageScrollable = () => {
  const w = window as unknown as {
    __scrollLocked?: boolean;
    smoothScroll?: { lenis?: { start?: () => void } };
  };

  const release = () => {
    // Only the cart guard and the merch popup set this flag on a site with no
    // cart, so treat any set value as a false positive.
    if (!w.__scrollLocked) return;
    if (document.querySelector(".merchan-popup.active")) return;
    w.__scrollLocked = false;
    if (document.body.style.overflow === "hidden") {
      document.body.style.overflow = "";
    }
    w.smoothScroll?.lenis?.start?.();
  };

  const hideUnusedCart = () => {
    document
      .querySelectorAll<HTMLElement>(".w-commerce-commercecartcontainerwrapper")
      .forEach((cart) => {
        if (cart.style.display !== "none") {
          cart.style.setProperty("display", "none", "important");
        }
      });
    release();
  };

  hideUnusedCart();
  window.setInterval(hideUnusedCart, 1000);
  window.addEventListener("pageshow", hideUnusedCart);
};

// ScrollTrigger measures every trigger against the document height at the
// moment the animation is created. This page mounts first and injects the
// exported homepage afterwards, and the images below the fold are lazy, so the
// document keeps growing long after the bundle has built its timelines.
// Triggers placed far down the page -- the truck frame sequence in particular
// -- therefore start out mis-measured and sit at the wrong progress until
// something forces a re-measure. That is what reads as the truck lagging until
// the first scroll: scrolling happens to nudge the measurements back into line.
//
// Waiting for the layout to stop moving and then signalling a resize lets the
// runtime re-measure itself, which corrects every trigger at once -- including
// the airplane, which is measured the same way.
const settleLayoutAndRemeasure = async () => {
  try {
    await document.fonts?.ready;
  } catch {
    /* the fonts API is optional */
  }

  await new Promise<void>((resolve) => {
    let lastHeight = document.documentElement.scrollHeight;
    let stableChecks = 0;
    const startedAt = Date.now();
    const interval = window.setInterval(() => {
      const height = document.documentElement.scrollHeight;
      stableChecks = height === lastHeight ? stableChecks + 1 : 0;
      lastHeight = height;
      if (stableChecks >= 4 || Date.now() - startedAt > 5000) {
        window.clearInterval(interval);
        resolve();
      }
    }, 250);
  });

  window.dispatchEvent(new Event("resize"));
};

// The robots directives index.html ships with. Kept as the value to restore
// when a not-found page is replaced by a real one.
const ROBOTS_DEFAULT =
  "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

// Retired URLs (old product routes still in Google's index) render the
// not-found state; tag them noindex so Search Console stops reporting them
// as soft 404s and drops them on the next crawl.
//
// The document already carries a robots tag, so its content is updated in
// place. Appending a second tag would leave two conflicting directives in the
// head, and a crawler is free to honour either one.
const setNoindex = (on: boolean) => {
  let tag = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
  if (!tag) {
    tag = document.createElement("meta");
    tag.name = "robots";
    tag.content = ROBOTS_DEFAULT;
    document.head.appendChild(tag);
  }
  if (tag.dataset.piRobotsDefault === undefined) {
    tag.dataset.piRobotsDefault = tag.content || ROBOTS_DEFAULT;
  }
  tag.content = on ? "noindex, follow" : tag.dataset.piRobotsDefault;
};

// Product URLs that were renamed to the cleaner SEO slugs. These are still in
// Google's index, so they redirect to the canonical product page instead of
// rendering the not-found state.
const PRODUCT_SLUG_ALIASES: Record<string, string> = {
  cumin: "cumin-seeds",
  "cumin-seed": "cumin-seeds",
  peanuts: "peanut-groundnut",
  peanut: "peanut-groundnut",
  "peanut-kernels": "peanut-groundnut",
  "peanut-groundnut-kernels": "peanut-groundnut",
  "psyllium-seed": "psyllium-seeds",
  "psyllium-seed-psyllium-husk": "psyllium-seeds",
  "traditional-wheat": "wheat-flour",
  "pesticide-free-basmati": "pesticide-free-basmati-rice",
  "dehydrated-product": "dehydrated-products",
};

// Top-level header menu. "What we serve?" already leads to the product /
// category section, and "Products" is added next to it so buyers can reach the
// catalogue by either label. "Inquiry" is added after Products so a buyer can
// go straight to a quote request from any page.
const HEADER_MENU_LINKS: { after: string; label: string; href: string }[] = [
  { after: "What we serve?", label: "Products", href: "/what-we-serve" },
  { after: "Products", label: "Inquiry", href: "/contact#inquiry" },
];

// The dropdown is the full site map and was missing the product section.
const HEADER_DROPDOWN_LINKS: { after: string; label: string; href: string }[] = [
  { after: "About", label: "What We Serve", href: "/what-we-serve" },
  { after: "What We Serve", label: "Products", href: "/what-we-serve" },
  { after: "Products", label: "Inquiry", href: "/contact#inquiry" },
];

const navLabel = (el: HTMLElement) =>
  (
    el.querySelector(".link-top .txt")?.textContent ??
    el.querySelector(".txt")?.textContent ??
    ""
  ).trim();

const addHeaderLink = (
  list: HTMLElement,
  after: string,
  label: string,
  href: string,
  isDropdown: boolean,
) => {
  const already = Array.from(list.children).some(
    (el) => el.querySelector<HTMLElement>("a")?.dataset.piNavLabel === label,
  );
  if (already) return;

  const anchor = (Array.from(list.children) as HTMLElement[]).find(
    (el) => navLabel(el).toLowerCase() === after.toLowerCase(),
  );
  if (!anchor) return;

  // Cloning an existing item keeps every Webflow class and text variant intact.
  const clone = anchor.cloneNode(true) as HTMLElement;
  const link = clone.querySelector<HTMLAnchorElement>("a");
  if (!link) return;

  link.setAttribute("href", href);
  link.setAttribute("aria-label", label);
  link.dataset.piNavLabel = label;
  link.removeAttribute("aria-current");
  link.classList.remove("w--current");

  if (isDropdown) {
    clone.querySelectorAll(".link-top .txt, .link-bottom .txt").forEach((el) => {
      el.textContent = label;
    });
  } else {
    const text = link.querySelector(".txt");
    if (text) text.textContent = label;
  }

  anchor.after(clone);
};

// Menu labels the brief asks for, mapped from the labels this site already
// uses. Only an exact text match is rewritten, so no other copy is touched.
const HEADER_RENAMES: { href: string; from: string; to: string }[] = [
  { href: "/more", from: "export guides", to: "More" },
  { href: "/insights", from: "insights", to: "Blog" },
];

const relabelHeaderLinks = (root: HTMLElement) => {
  HEADER_RENAMES.forEach(({ href, from, to }) => {
    root.querySelectorAll<HTMLAnchorElement>(`header a[href="${href}"]`).forEach((link) => {
      const walker = document.createTreeWalker(link, NodeFilter.SHOW_TEXT);
      let node = walker.nextNode();
      while (node) {
        if (node.textContent?.trim().toLowerCase() === from) {
          node.textContent = to;
        }
        node = walker.nextNode();
      }
    });
  });
};

const initHeaderNav = (root: HTMLElement) => {
  relabelHeaderLinks(root);

  const menu = root.querySelector<HTMLElement>(".header-menu-list");
  HEADER_MENU_LINKS.forEach((item) => {
    if (menu) addHeaderLink(menu, item.after, item.label, item.href, false);
  });

  const dropdown = root.querySelector<HTMLElement>(".header-dropdown .header-dropdown-body-inner");
  HEADER_DROPDOWN_LINKS.forEach((item) => {
    if (dropdown) addHeaderLink(dropdown, item.after, item.label, item.href, true);
  });
};

const SitePage = () => {
  const location = useLocation();
  const hostRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "missing">("loading");


  useEffect(() => {
    let cancelled = false;
    const path = location.pathname.replace(/\/$/, "") || "/";
    const isMore = path === "/more" || path.startsWith("/more/");
    const isCatalogueProduct = path.startsWith("/products/");

    (async () => {
      setStatus("loading");
      setNoindex(false);

      let html: string;
      let title: string;
      let description = "";
      let jsonLd: unknown = null;

      if (isCatalogueProduct) {
        // /products/{product} is the range page and /products/{product}/{subtype}
        // is one named variety or form of it. Both are built from the same
        // reference tables; the subtype page leads with the rows that identify
        // that form and inherits the product-wide B-E tables.
        const segments = path.slice("/products/".length).split("/").filter(Boolean);
        const slug = decodeURIComponent(segments[0] ?? "");

        const alias = PRODUCT_SLUG_ALIASES[slug.toLowerCase()];
        if (alias) {
          window.location.replace(`/products/${alias}`);
          return;
        }

        const [template, products, subtypeMap] = await Promise.all([
          fetch("/site/products/_template.html").then((r) => r.text()),
          loadProducts(),
          loadSubtypes(),
        ]);
        const product = products.find((item) => item.slug === slug);
        const subtypes = product ? subtypeMap[product.slug] ?? [] : [];
        if (!product) {
          if (!cancelled) {
            setStatus("missing");
            setNoindex(true);
          }
          return;
        }

        const subtypeSlug = segments[1] ? decodeURIComponent(segments[1]) : undefined;
        const subtype = subtypeSlug
          ? subtypes.find((item) => item.slug === subtypeSlug)
          : undefined;
        // An unknown second segment is a bad URL, not a thin page.
        if (subtypeSlug && !subtype) {
          if (!cancelled) {
            setStatus("missing");
            setNoindex(true);
          }
          return;
        }

        const pageName = subtype ? subtype.name : product.name;
        const pageImage = subtype ? subtype.image : productImage(product, subtypes);
        const pageAlt = subtype ? subtype.alt : product.alt;
        const pageIntro = subtype
          ? `${subtype.name} from the ${product.name} range. ${product.intro}`
          : product.intro;

        html = template;
        const replacements: [string, string][] = [
          ["__PAGE_TITLE__", escapeHtml(pageName)],
          [
            "__PAGE_BODY__",
            subtype
              ? renderSubtypeBody(
                  product,
                  subtype,
                  subtypes.filter((item) => item.slug !== subtype.slug),
                  products,
                )
              : renderProductBody(product, products, subtypes),
          ],
          ["__CATEGORY__", escapeHtml(product.category)],
          ["__EYEBROW__", escapeHtml(product.eyebrow)],
          ["__INTRO__", escapeHtml(pageIntro)],
          ["__PRODUCT_SLUG__", encodeURIComponent(product.slug)],
          ["__PRODUCT_IMAGE__", escapeHtml(pageImage)],
          ["__PRODUCT_ALT__", escapeHtml(pageAlt)],
          ["__PRODUCT_EMAIL__", encodeURIComponent(pageName)],
        ];
        replacements.forEach(([search, replacement]) => {
          html = replaceEvery(html, search, replacement);
        });
        title = subtype
          ? `${subtype.name} | ${product.name} | Patel Impex`
          : product.title;
        description = subtype
          ? `${subtype.name} supplied by Patel Impex. ${product.description}`
          : product.description;
        jsonLd = subtype ? subtypeJsonLd(product, subtype) : productJsonLd(product, subtypes);
      } else if (isMore) {
        const slug = path === "/more" ? "index" : path.slice("/more/".length);
        const [template, data] = await Promise.all([
          fetch("/site/more/_template.html").then((r) => r.text()),
          fetch(`/site/more/pages/${slug}.json`).then((r) => (r.ok ? r.json() : null)),
        ]);
        if (!data) {
          if (!cancelled) {
            setStatus("missing");
            setNoindex(true);
          }
          return;
        }
        html = template
          .replace("__PAGE_TITLE__", data.h1)
          .replace("__PAGE_BODY__", data.html);
        title = data.title;
        description = data.description || "";
      } else {
        const manifest = await loadManifest();
        const entry = manifest.find((e) => e.route === path);
        if (!entry) {
          if (!cancelled) {
            setStatus("missing");
            setNoindex(true);
          }
          return;
        }
        html = await fetch(entry.file).then((r) => r.text());
        title = entry.title;
        description = entry.description;
      }

      if (cancelled || !hostRef.current) return;


      // Webflow uses these document-level values to select the correct page
      // interaction graph. They were lost when only <body> markup was imported.
      const pageId = getWebflowPageId(path);
      document.documentElement.classList.add("w-mod-js");
      document.documentElement.dataset.wfSite = WEBFLOW_SITE_ID;
      if (pageId) document.documentElement.dataset.wfPage = pageId;
      else delete document.documentElement.dataset.wfPage;
      document.body.classList.add("body");

      hostRef.current.innerHTML = html;
      initHeaderNav(hostRef.current);
      setPageMetadata(title, description, path);
      if (jsonLd) setJsonLd(jsonLd);
      else clearJsonLd();
      const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (canonical) canonical.href = `https://patelimpex.com${path === "/" ? "/" : path}`;


      window.scrollTo(0, 0);
      setStatus("ready");
      initSiteForms(hostRef.current);
      if (isMore) initMoreReveal(hostRef.current);
      initProductGroups(hostRef.current);
      requestAnimationFrame(() => {
        void startRuntime().then(() => {
          void settleLayoutAndRemeasure();
        });
      });


    })();

    return () => {
      cancelled = true;
    };
  }, [location.pathname]);

  // The imported bundle binds animations once per document load, so internal
  // links do a real navigation instead of a client-side swap.
  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
      const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement)?.closest?.("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("/") || anchor.getAttribute("target") === "_blank") return;
      if (href.startsWith("/#")) return;
      if (href.startsWith("#")) return;
      event.preventDefault();
      window.location.assign(href);
    };
    host.addEventListener("click", onClick);
    return () => host.removeEventListener("click", onClick);
  }, []);

  // The imported GSAP/Barba runtime owns long-lived timelines and observers.
  // A document reload is required on browser history navigation as well as
  // link clicks, otherwise the next page inherits stale animation bindings.
  useEffect(() => {
    const reloadOnHistoryNavigation = () => window.location.reload();
    window.addEventListener("popstate", reloadOnHistoryNavigation);
    return () => window.removeEventListener("popstate", reloadOnHistoryNavigation);
  }, []);

  return (
    <>
      <div ref={hostRef} />
      {status === "missing" && (
        <div style={{ padding: "6rem 2rem", fontFamily: "Inter, sans-serif", textAlign: "center" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Page not found</h1>
          <a href="/" style={{ color: "#0016cb" }}>
            Back to home
          </a>
        </div>
      )}
    </>
  );
};

export default SitePage;
