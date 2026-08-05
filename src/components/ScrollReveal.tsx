import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Site-wide entrance motion.
 * Tags every top-level section on the current route and reveals it on scroll.
 * Purely presentational — no layout or logic changes.
 */
const ScrollReveal = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.reveal = "in";
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );

    const timer = window.setTimeout(() => {
      // legacy reveal wrappers
      document.querySelectorAll<HTMLElement>(".reveal:not(.active)").forEach((el) => observer.observe(el));

      // auto-tag page sections
      document
        .querySelectorAll<HTMLElement>("main > section, main > div > section, main > article")
        .forEach((el, i) => {
          if (el.dataset.reveal) return;
          if (el.closest(".reveal")) return;
          el.dataset.reveal = i === 0 ? "in" : "out";
          if (i !== 0) observer.observe(el);
        });
    }, 60);

    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
    };
  }, [location.pathname]);

  return null;
};

export default ScrollReveal;
