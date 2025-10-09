export function initCVToggle() {
  document.querySelectorAll(".freelance-project").forEach((project) => {
    const header = project.querySelector(".project-header");
    const content = project.querySelector(".project-content");
    if (!header || !content) return;

    // Ensure content has an id for aria-controls
    if (!content.id)
      content.id = `project-content-${Math.random().toString(36).substr(2, 9)}`;

    // Apply initial collapsed state (default to false)
    const initiallyExpanded = header.getAttribute("aria-expanded") === "true";
    if (!initiallyExpanded) {
      project.classList.add("collapsed");
    }

    const toggle = () => {
      const expanded = header.getAttribute("aria-expanded") === "true";
      header.setAttribute("aria-expanded", String(!expanded));
      project.classList.toggle("collapsed", expanded);

      // Scroll simultaneously with the transition (no delay)
      if (!expanded) {
        header.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    // Click handler
    header.addEventListener("click", (e) => {
      e.preventDefault();
      toggle();
    });

    // Keyboard handler (Enter/Space)
    header.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    });
  });
}
