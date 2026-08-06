import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

type Entry = { route: string; file: string; title: string; description: string };

let manifestCache: Entry[] | null = null;

const loadManifest = async () => {
  if (manifestCache) return manifestCache;
  const res = await fetch("/site/manifest.json");
  manifestCache = (await res.json()) as Entry[];
  return manifestCache;
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
  const wf = (window as unknown as { Webflow?: any }).Webflow;
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

const SitePage = () => {
  const location = useLocation();
  const hostRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "missing">("loading");

  useEffect(() => {
    let cancelled = false;
    const path = location.pathname.replace(/\/$/, "") || "/";

    (async () => {
      setStatus("loading");
      const manifest = await loadManifest();
      const entry = manifest.find((e) => e.route === path);
      if (!entry) {
        if (!cancelled) setStatus("missing");
        return;
      }
      const html = await fetch(entry.file).then((r) => r.text());
      if (cancelled || !hostRef.current) return;

      hostRef.current.innerHTML = html;
      document.title = entry.title;
      const meta = document.querySelector('meta[name="description"]');
      if (meta && entry.description) meta.setAttribute("content", entry.description);

      window.scrollTo(0, 0);
      setStatus("ready");
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
