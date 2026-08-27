// Contact form handling for the imported static site.
// The markup comes from the Webflow export, so the handler is attached at
// runtime after the page HTML is injected.

const CALLMEBOT_USERS = ["@Shubham111206"];

// CallMeBot only answers plain GETs and sends no CORS headers, so a fetch()
// response can never be read from the browser. Firing the request through an
// <img> beacon is the reliable way to make the hit land.
const beacon = (url: string) =>
  new Promise<void>((resolve) => {
    const img = new Image();
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      resolve();
    };
    img.onload = finish;
    img.onerror = finish;
    img.referrerPolicy = "no-referrer";
    img.src = url;
    window.setTimeout(finish, 6000);
  });

const notifyCallMeBot = (text: string) => {
  const message = encodeURIComponent(text);
  return Promise.all(
    CALLMEBOT_USERS.map((user) =>
      beacon(
        `https://api.callmebot.com/text.php?source=web&user=${encodeURIComponent(user)}&text=${message}&_=${Date.now()}`,
      ),
    ),
  );
};


const fieldValue = (form: HTMLFormElement, name: string) => {
  const el = form.querySelector<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
    `[name="${name}"]`,
  );
  return el?.value?.trim() ?? "";
};

const setSending = (form: HTMLFormElement, sending: boolean) => {
  const label = form.querySelector<HTMLElement>(".form-submit .btn-txt .txt");
  if (label) {
    if (sending) {
      label.dataset.piLabel = label.dataset.piLabel ?? label.textContent ?? "";
      label.textContent = "Sending...";
    } else {
      label.textContent = label.dataset.piLabel || label.textContent;
    }
  }
  const btn = form.querySelector<HTMLElement>(".form-submit");
  if (btn) btn.style.pointerEvents = sending ? "none" : "";
  const native = form.querySelector<HTMLInputElement>('[type="submit"]');
  if (native) native.disabled = sending;
};

const submitForm = async (form: HTMLFormElement) => {
  if (form.dataset.piSending === "1") return;

  const name = fieldValue(form, "Full-name") || fieldValue(form, "Full name");
  const email = fieldValue(form, "Email");
  const phone = fieldValue(form, "Phone");
  const company = fieldValue(form, "Company");
  const reason = fieldValue(form, "Reason-of-enquiry") || fieldValue(form, "Reason of enquiry");
  const message = fieldValue(form, "Message");

  if (!name || !email) {
    const invalid = !name ? "Full-name" : "Email";
    form.querySelector<HTMLInputElement>(`[name="${invalid}"]`)?.focus();
    return;
  }

  form.dataset.piSending = "1";
  setSending(form, true);

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

  form.dataset.piSending = "0";
  setSending(form, false);

  const wrapper = form.closest(".w-form") ?? form.parentElement;
  const done = wrapper?.querySelector<HTMLElement>(".w-form-done");
  form.reset();
  if (done) {
    form.style.display = "none";
    done.style.display = "block";
    const close = done.querySelector<HTMLElement>(".form-success-close");
    close?.addEventListener("click", () => {
      done.style.display = "none";
      form.style.display = "";
    });
  }
};

export const initSiteForms = (root: HTMLElement) => {
  const forms = Array.from(root.querySelectorAll<HTMLFormElement>("form.form"));
  forms.forEach((form) => {
    if (form.dataset.piBound === "1") return;
    form.dataset.piBound = "1";
    form.setAttribute("novalidate", "novalidate");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      event.stopPropagation();
      void submitForm(form);
    });

    // The Webflow export renders "Send message" as a plain div, so there is no
    // native submit control — wire the click (and Enter) up manually.
    form.querySelectorAll<HTMLElement>(".form-submit, .form-submit .btn").forEach((btn) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        void submitForm(form);
      });
    });

    form.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !(event.target as HTMLElement)?.matches("textarea")) {
        event.preventDefault();
        void submitForm(form);
      }
    });
  });
};

