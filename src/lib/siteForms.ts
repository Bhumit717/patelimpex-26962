// Contact form handling for the imported static site.
// The markup comes from the Webflow export, so the handler is attached at
// runtime after the page HTML is injected.

const CALLMEBOT_USERS = ["@Shubham111206"];

const notifyCallMeBot = (text: string) => {
  const message = encodeURIComponent(text);
  return Promise.all(
    CALLMEBOT_USERS.map((user) =>
      fetch(
        `https://api.callmebot.com/text.php?source=web&user=${encodeURIComponent(user)}&text=${message}`,
        { method: "GET", mode: "no-cors" },
      ).catch(() => undefined),
    ),
  );
};

const fieldValue = (form: HTMLFormElement, name: string) => {
  const el = form.querySelector<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
    `[name="${name}"]`,
  );
  return el?.value?.trim() ?? "";
};

export const initSiteForms = (root: HTMLElement) => {
  const forms = Array.from(root.querySelectorAll<HTMLFormElement>("form.form"));
  forms.forEach((form) => {
    if (form.dataset.piBound === "1") return;
    form.dataset.piBound = "1";
    form.setAttribute("novalidate", "novalidate");

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      event.stopPropagation();

      const name = fieldValue(form, "Full-name") || fieldValue(form, "Full name");
      const email = fieldValue(form, "Email");
      const phone = fieldValue(form, "Phone");
      const company = fieldValue(form, "Company");
      const reason =
        fieldValue(form, "Reason-of-enquiry") || fieldValue(form, "Reason of enquiry");
      const message = fieldValue(form, "Message");

      if (!name || !email) {
        const invalid = !name ? "Full-name" : "Email";
        form.querySelector<HTMLInputElement>(`[name="${invalid}"]`)?.focus();
        return;
      }

      const submit = form.querySelector<HTMLInputElement>('[type="submit"]');
      const original = submit?.value;
      if (submit) {
        submit.disabled = true;
        submit.value = submit.dataset.wait || "Sending...";
      }

      await notifyCallMeBot(
        [
          "New Patel Impex enquiry",
          `Name: ${name}`,
          company && `Company: ${company}`,
          `Email: ${email}`,
          phone && `Phone: ${phone}`,
          reason && `Enquiry: ${reason}`,
          message && `Message: ${message}`,
          `Page: ${window.location.pathname}`,
        ]
          .filter(Boolean)
          .join("\n"),
      );

      const wrapper = form.closest(".w-form") ?? form.parentElement;
      const done = wrapper?.querySelector<HTMLElement>(".w-form-done");
      if (done) {
        form.style.display = "none";
        done.style.display = "block";
      } else {
        form.reset();
      }
      if (submit) {
        submit.disabled = false;
        if (original) submit.value = original;
      }
    });
  });
};
