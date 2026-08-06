import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Entry = { route: string; file: string; title: string; description: string };

let manifestCache: Entry[] | null = null;

const loadManifest = async () => {
  if (manifestCache) return manifestCache;
  const res = await fetch("/site/manifest.json");
  manifestCache = (await res.json()) as Entry[];
  return manifestCache;
};

const reinitWebflow = () => {
  const wf = (window as unknown as { Webflow?: any }).Webflow;
  if (!wf) return;
  try {
    wf.destroy();
    wf.ready();
    wf.require?.("ix2")?.init?.();
  } catch {
    /* noop */
  }
};

const SitePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
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

      // Re-execute inline styles / run webflow interactions on the fresh DOM.
      window.scrollTo(0, 0);
      setStatus("ready");
      requestAnimationFrame(reinitWebflow);
    })();

    return () => {
      cancelled = true;
    };
  }, [location.pathname]);

  // Client-side routing for internal links inside the imported markup.
  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement)?.closest?.("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("/") || anchor.getAttribute("target") === "_blank") return;
      event.preventDefault();
      navigate(href);
    };
    host.addEventListener("click", onClick);
    return () => host.removeEventListener("click", onClick);
  }, [navigate]);

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
