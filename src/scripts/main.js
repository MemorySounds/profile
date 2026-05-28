// main.js
import { initProjects } from "./projects.js";
import { initSmoothScroll } from "./smooth-scroll.js";
import { initContactValidation } from "./contact-validation.js";
import { initCVToggle } from "./cv-toggle.js";
import { initAnimation } from "./animation.js";

document.addEventListener("DOMContentLoaded", () => {
  const url = new URL(window.location.href);
  const isReturningFromProject = url.searchParams.get("from") === "project";

  const finalizeProjectReturn = () => {
    const selectedWorksHeading = document.getElementById("selected-works");
    if (!selectedWorksHeading) {
      document.documentElement.classList.remove("project-returning");
      return;
    }

    const alignSelectedWorks = () => {
      const navHeight = 64;
      const top =
        selectedWorksHeading.getBoundingClientRect().top +
        window.scrollY -
        navHeight;
      window.scrollTo({ top: Math.max(0, top), behavior: "auto" });
    };

    requestAnimationFrame(alignSelectedWorks);
    if (document.readyState === "complete") {
      setTimeout(alignSelectedWorks, 0);
    } else {
      window.addEventListener("load", alignSelectedWorks, { once: true });
    }
    setTimeout(() => {
      alignSelectedWorks();
      document.documentElement.classList.remove("project-returning");
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}#selected-works`,
      );
    }, 120);

    // Safety fallback so the page is never left hidden.
    setTimeout(() => {
      document.documentElement.classList.remove("project-returning");
    }, 1200);
  };

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
    if (!isReturningFromProject) {
      initAnimation();
    }

    initProjects();
    initContactValidation();

    if (isReturningFromProject) {
      finalizeProjectReturn();
    }
  }
});
