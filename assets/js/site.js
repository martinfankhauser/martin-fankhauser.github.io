(() => {
  const nodes = document.querySelectorAll(".reveal");
  if (!nodes.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    nodes.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );

  nodes.forEach((el) => observer.observe(el));
})();

(() => {
  document.querySelectorAll(".paper__presented-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const presented = btn.closest(".paper__presented");
      const rest = presented && presented.querySelector(".paper__presented-rest");
      if (!rest) return;
      const expanded = btn.getAttribute("aria-expanded") === "true";
      if (expanded) {
        rest.hidden = true;
        btn.setAttribute("aria-expanded", "false");
        btn.textContent = "…More";
      } else {
        rest.hidden = false;
        btn.setAttribute("aria-expanded", "true");
        btn.textContent = "…Less";
      }
    });
  });
})();
