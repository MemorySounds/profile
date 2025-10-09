// main.js
import { initProjects } from "./projects.js";
import { initSmoothScroll } from "./smooth-scroll.js";
import { initContactValidation } from "./contact-validation.js";
import { initCVToggle } from "./cv-toggle.js";

document.addEventListener("DOMContentLoaded", () => {
  // Shared across all pages
  initSmoothScroll();

  // Page-specific inits
  const isCVPage =
    window.location.pathname.includes("/cv/") ||
    document.querySelector(".cv-layout");
  if (isCVPage) {
    initCVToggle();
  } else {
    // Assume other pages are for main index
    initProjects();
    initContactValidation();
  }
});
