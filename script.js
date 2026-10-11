
/* ==================================
   ANV PUBLIC SCHOOL - JAVASCRIPT
================================== */

document.addEventListener("DOMContentLoaded", () => {
  // Animated logo intro
  const intro = document.getElementById("schoolIntro");

  if (intro) {
    const hideIntro = () => {
      intro.classList.add("is-hidden");
    };

    // Show the intro briefly, then reveal the website.
    window.setTimeout(hideIntro, 2800);

    // Allow visitors to skip the intro by tapping it.
    intro.addEventListener("click", hideIntro, { once: true });
  }

  // Mobile navigation
  const menuToggle = document.getElementById("menuToggle");
  const primaryNav = document.getElementById("primaryNav");

  if (menuToggle && primaryNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = primaryNav.classList.toggle("is-open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
      );

      menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // Close the menu after a navigation link is selected.
    primaryNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        primaryNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        menuToggle.textContent = "☰";
      });
    });

    // Close the menu when switching back to desktop layout.
    window.addEventListener("resize", () => {
      if (window.innerWidth > 680) {
        primaryNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
      }
    });
  }

  // Automatically update the copyright year.
  const yearElement = document.getElementById("currentYear");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Smooth scrolling for internal navigation links.
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches ? "auto" : "smooth",
          block: "start"
        });

        history.replaceState(null, "", targetId);
      }
    });
  });

  // Helpful console message while testing the website.
  console.info("ANV Public School website initialized.");
});
