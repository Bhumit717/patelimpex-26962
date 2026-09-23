// Collapsible product groups (Agriculture / Packaging) on /what-we-serve.
// The markup is generated into the imported Webflow list, so the toggle is
// wired up at runtime after the HTML is injected.

export const initProductGroups = (root: HTMLElement) => {
  const heads = Array.from(root.querySelectorAll<HTMLElement>("[data-pi-group]"));
  if (!heads.length) return;

  const members = (key: string) =>
    Array.from(root.querySelectorAll<HTMLElement>(`[data-pi-member="${key}"]`));

  const setOpen = (head: HTMLElement, open: boolean) => {
    const key = head.dataset.piGroup ?? "";
    head.classList.toggle("is-open", open);
    head.setAttribute("aria-expanded", String(open));
    members(key).forEach((el) => {
      el.classList.toggle("pi-hidden", !open);
    });
  };

  heads.forEach((head) => {
    setOpen(head, false);
    const toggle = () => {
      setOpen(head, !head.classList.contains("is-open"));
    };
    head.addEventListener("click", toggle);
    head.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      toggle();
    });
  });

  root.querySelectorAll<HTMLElement>("[data-pi-product-link]").forEach((card) => {
    const openProduct = () => {
      const href = card.dataset.piProductLink;
      if (href) window.location.assign(href);
    };

    card.addEventListener("click", (event) => {
      if ((event.target as HTMLElement).closest("a")) return;
      openProduct();
    });
    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      if ((event.target as HTMLElement).closest("a")) return;
      event.preventDefault();
      openProduct();
    });
  });
};
