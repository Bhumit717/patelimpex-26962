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
    members(key).forEach((el) => {
      el.classList.toggle("pi-hidden", !open);
    });
  };

  heads.forEach((head) => {
    setOpen(head, false);
    head.addEventListener("click", () => {
      setOpen(head, !head.classList.contains("is-open"));
    });
  });
};
