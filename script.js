document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  document.querySelectorAll("[data-course]").forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Thanks for your interest in: " + btn.dataset.course + "\n(Next we can add a real signup form.)");
    });
  });
});

