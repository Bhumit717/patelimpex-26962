import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { initSiteForms } from "@/lib/siteForms";
import { initMoreReveal } from "@/lib/moreReveal";
import { initProductGroups } from "@/lib/productGroups";



type Entry = { route: string; file: string; title: string; description: string };
type Product = {
  slug: string;
  name: string;
  category: string;
  eyebrow: string;
  intro: string;
  overview: string;
  varieties: string[];
  specs: [string, string][];
  physical: string;
  applications: string[];
  processing: string;
  packaging: string;
  storage: string;
  quality: string;
  faq: [string, string][];
  image: string;
  alt: string;
  title: string;
  description: string;
};

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

const list = (items: string[]) =>
  `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;

const renderProductBody = (product: Product) => `
  <div class="pi-product-overview">
    <div class="pi-product-section-label">Product overview</div>
    <div><h2>${escapeHtml(product.name)} for international buyers</h2><p>${escapeHtml(product.overview)}</p></div>
  </div>
  <div class="pi-product-spec-layout">
    <div class="pi-product-section-label">Indicative specification</div>
    <div class="pi-product-spec-table">${product.specs
      .map(
        ([label, value]) =>
          `<div class="pi-product-spec-row"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`,
      )
      .join("")}</div>
  </div>
  <div class="pi-product-content-grid">
    <article><div class="pi-product-section-label">Varieties / grades</div>${list(product.varieties)}</article>
    <article><div class="pi-product-section-label">Physical characteristics</div><p>${escapeHtml(product.physical)}</p></article>
    <article><div class="pi-product-section-label">Applications</div>${list(product.applications)}</article>
    <article><div class="pi-product-section-label">Processing</div><p>${escapeHtml(product.processing)}</p></article>
    <article><div class="pi-product-section-label">Packaging & bulk supply</div><p>${escapeHtml(product.packaging)}</p></article>
    <article><div class="pi-product-section-label">Storage</div><p>${escapeHtml(product.storage)}</p></article>
  </div>
  <div class="pi-product-quality"><div class="pi-product-section-label">Quality note</div><p>${escapeHtml(product.quality)}</p></div>
  <div class="pi-product-faq"><div class="pi-product-section-label">Frequently asked questions</div><div>${product.faq
    .map(
      ([question, answer]) =>
        `<details><summary>${escapeHtml(question)}</summary><p>${escapeHtml(answer)}</p></details>`,
    )
    .join("")}</div></div>
  <div class="pi-product-related"><div class="pi-product-section-label">Explore products</div><p><a href="/what-we-serve">View the full product range</a> or <a href="/contact?product=${encodeURIComponent(product.slug)}">send a product inquiry</a>.</p></div>
`;

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
};

// Retired URLs (old product routes still in Google's index) render the
// not-found state; tag them noindex so Search Console stops reporting them
// as soft 404s and drops them on the next crawl.
const setNoindex = (on: boolean) => {
  let tag = document.querySelector<HTMLMetaElement>('meta[name="robots"][data-notfound]');
  if (on) {
    if (!tag) {
      tag = document.createElement("meta");
      tag.name = "robots";
      tag.dataset.notfound = "true";
      document.head.appendChild(tag);
    }
    tag.content = "noindex, follow";
  } else if (tag) {
    tag.remove();
  }
};

const labelMoreMenuLinks = (root: HTMLElement) => {
  root.querySelectorAll<HTMLAnchorElement>('header a[href="/more"]').forEach((link) => {
    const walker = document.createTreeWalker(link, NodeFilter.SHOW_TEXT);
    let node = walker.nextNode();
    while (node) {
      if (node.textContent?.trim().toLowerCase() === "export guides") {
        node.textContent = "More";
      }
      node = walker.nextNode();
    }
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

      if (isCatalogueProduct) {
        const slug = path.slice("/products/".length);
        const [template, products] = await Promise.all([
          fetch("/site/products/_template.html").then((r) => r.text()),
          loadProducts(),
        ]);
        const product = products.find((item) => item.slug === slug);
        if (!product) {
          if (!cancelled) {
            setStatus("missing");
            setNoindex(true);
          }
          return;
        }
        html = template;
        const replacements: [string, string][] = [
          ["__PAGE_TITLE__", escapeHtml(product.name)],
          ["__PAGE_BODY__", renderProductBody(product)],
          ["__CATEGORY__", escapeHtml(product.category)],
          ["__EYEBROW__", escapeHtml(product.eyebrow)],
          ["__INTRO__", escapeHtml(product.intro)],
          ["__PRODUCT_SLUG__", encodeURIComponent(product.slug)],
          ["__PRODUCT_IMAGE__", escapeHtml(product.image)],
          ["__PRODUCT_ALT__", escapeHtml(product.alt)],
          ["__PRODUCT_EMAIL__", encodeURIComponent(product.name)],
        ];
        replacements.forEach(([search, replacement]) => {
          html = replaceEvery(html, search, replacement);
        });
        title = product.title;
        description = product.description;
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
      labelMoreMenuLinks(hostRef.current);
      setPageMetadata(title, description, path);
      const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (canonical) canonical.href = `https://patelimpex.com${path === "/" ? "/" : path}`;


      window.scrollTo(0, 0);
      setStatus("ready");
      initSiteForms(hostRef.current);
      if (isMore) initMoreReveal(hostRef.current);
      initProductGroups(hostRef.current);
      requestAnimationFrame(() => {
        void startRuntime();
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
