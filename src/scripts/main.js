// main.js
import { initProjects } from "./projects.js";
import { initSmoothScroll } from "./smooth-scroll.js";
import { initContactValidation } from "./contact-validation.js";

document.addEventListener("DOMContentLoaded", () => {
  initProjects();
  initSmoothScroll();
  initContactValidation();
});
