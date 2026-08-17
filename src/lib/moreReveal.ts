// Scroll-reveal + stagger motion for the /more export-guide pages so they feel
// like the hand-built pages (which use Webflow ix2 timelines we can't reuse on
// dynamically injected markup).

export const initMoreReveal = (host: HTMLElement) => {
  const title = host.querySelector<HTMLElement>(".qhse-main-title");
  const body = host.querySelector<HTMLElement>(".policy-main-content-text");
  if (!body) return;

  const blocks: HTMLElement[] = [];
  if (title) blocks.push(title);
  blocks.push(...Array.from(body.children) as HTMLElement[]);

  blocks.forEach((el) => el.classList.add("more-reveal"));

  // Stagger list items and table rows inside each revealed block.
  blocks.forEach((el) => {
    const kids = Array.from(el.querySelectorAll<HTMLElement>("li, tbody tr"));
    kids.forEach((kid, i) => {
      kid.classList.add("more-reveal-item");
      kid.style.transitionDelay = `${Math.min(i, 8) * 60}ms`;
    });
  });

  if (typeof IntersectionObserver === "undefined") {
    blocks.forEach((el) => el.classList.add("is-in"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        el.classList.add("is-in");
        el.querySelectorAll<HTMLElement>(".more-reveal-item").forEach((kid) =>
          kid.classList.add("is-in"),
        );
        observer.unobserve(el);
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
  );

  blocks.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i, 4) * 50}ms`;
    observer.observe(el);
  });

  // Anything already in view on load reveals immediately.
  requestAnimationFrame(() => {
    blocks.slice(0, 3).forEach((el) => {
      el.classList.add("is-in");
      el.querySelectorAll<HTMLElement>(".more-reveal-item").forEach((kid) =>
        kid.classList.add("is-in"),
      );
    });
  });

  return () => observer.disconnect();
};
