document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const form = document.getElementById("contactForm");
  const statusEl = document.getElementById("formStatus");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (statusEl) statusEl.textContent = "Sending...";

      try {
        const res = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { "Accept": "application/json" }
        });

        if (res.ok) {
          if (statusEl) statusEl.textContent = "✅ Message sent! We will get back to you soon, in shaa Allah.";
          form.reset();
        } else {
          if (statusEl) statusEl.textContent = "❌ Something went wrong. Please try again.";
        }
      } catch {
        if (statusEl) statusEl.textContent = "❌ Network error. Please try again.";
      }
    });
  }
});
