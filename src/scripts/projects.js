import { lockScroll, unlockScroll } from "./scroll-lock.js";
import projectData from "./project-data.js";

// Generated at build time from src/_data/projects.js (see src/project-data.11ty.js).
const projectDetails = projectData;
const projectSummaries = projectData.map((project) => ({
  title: project.title,
  description: project.summary,
}));

export function initProjects() {
  // Drawing SVG paths
  const LAST_SELECTED_PROJECT_KEY = "lastSelectedProjectIdx";
  const RETURNING_FROM_PROJECT_KEY = "returningFromProject";
  const projectsWrapper = document.querySelector(".projects-wrapper");
  const infoBox = document.querySelector(".project-info");
  const connectorPath = document.getElementById("connector-path");
  const projectItems = document.querySelectorAll(".project-list .project");
  const projectTitle = document.getElementById("project-title");
  const projectDesc = document.getElementById("project-desc");
  let currentProjectIdx = 0;

  function updateInfoBox(idx) {
    projectTitle.textContent = projectSummaries[idx].title;
    projectDesc.textContent = projectSummaries[idx].description;
    const readMore = document.getElementById("read-more");
    if (readMore) readMore.setAttribute("data-project", idx);
  }

  function drawConnector(idx, isActive = false) {
    if (!infoBox || !connectorPath || !projectItems[idx] || !projectsWrapper)
      return;

    const wrapperRect = projectsWrapper.getBoundingClientRect();
    const infoRect = infoBox.getBoundingClientRect();
    const projRect = projectItems[idx].getBoundingClientRect();

    const startX = infoRect.right - wrapperRect.left;
    const startY = infoRect.top + infoRect.height / 2 - wrapperRect.top;
    const endX = projRect.left - wrapperRect.left;
    const endY = projRect.top + projRect.height / 2 - wrapperRect.top;

    const controlX1 = startX + 60;
    const controlY1 = startY;
    const controlX2 = endX - 60;
    const controlY2 = endY;

    const pathStr = `M${startX},${startY} C${controlX1},${controlY1} ${controlX2},${controlY2} ${endX},${endY}`;
    connectorPath.setAttribute("d", pathStr);
    connectorPath.setAttribute("stroke-width", isActive ? 1 : 0.5);
  }

  // On click of the project
  projectItems.forEach((item, idx) => {
    item.addEventListener("click", () => {
      // Remove .active from all projects
      currentProjectIdx = idx;
      sessionStorage.setItem(LAST_SELECTED_PROJECT_KEY, String(idx));
      projectItems.forEach((el) => el.classList.remove("active"));
      // Add .active to clicked project
      item.classList.add("active");
      // Update info box and connector line
      updateInfoBox(idx);
      drawConnector(idx, true);

      // On mobile, navigate to standalone project pages.
      if (window.innerWidth <= 767) {
        sessionStorage.setItem(RETURNING_FROM_PROJECT_KEY, "1");
        const targetUrl = `/projects/${projectDetails[idx].slug}/`;
        if (typeof window.navigateWithTiles === "function") {
          window.navigateWithTiles(targetUrl);
        } else {
          window.location.href = targetUrl;
        }
      }
    });
  });

  // Initial state: restore last selected project when returning from project page.
  const url = new URL(window.location.href);
  const isReturningFromProject =
    url.searchParams.get("from") === "project" ||
    sessionStorage.getItem(RETURNING_FROM_PROJECT_KEY) === "1";
  const storedIdx = Number.parseInt(
    sessionStorage.getItem(LAST_SELECTED_PROJECT_KEY) || "",
    10,
  );
  const hasValidStoredIdx =
    Number.isInteger(storedIdx) &&
    storedIdx >= 0 &&
    storedIdx < projectItems.length;
  const initialProjectIdx =
    isReturningFromProject && hasValidStoredIdx ? storedIdx : 0;

  projectItems[initialProjectIdx].classList.add("active");
  updateInfoBox(initialProjectIdx);
  currentProjectIdx = initialProjectIdx;
  drawConnector(initialProjectIdx, true);

  // MODAL
  let currentModalProjectIdx = 0;
  const totalProjects = projectDetails.length;
  const modal = document.getElementById("project-modal");
  const modalClose = document.getElementById("modal-close");
  const readMore = document.getElementById("read-more");

  function ModalSection({ title, content }) {
    if (title === "TECH" && Array.isArray(content)) {
      return `
      <div class="modal-section">
        <div class="section-header">
          <span class="section-title">${title}</span>
          <span class="section-line"></span>
        </div>
        <div class="modal-section-content tech-list">
          ${content.map((tech) => `<span>${tech}</span>`).join("")}
        </div>
      </div>
    `;
    } else {
      return `
    <div class="modal-section">
      <div class="section-header">
        <span class="section-title">${title}</span>
        <span class="section-line"></span>
      </div>
      <div class="modal-section-content">${content}</div>
    </div>
  `;
    }
  }

  function renderModalLeft(idx) {
    let prevLink = "";
    let nextLink = "";

    if (idx > 0) {
      prevLink = `<a href="#" id="prev-project">← Previous</a>`;
    } else {
      prevLink = `<span></span>`; // Empty placeholder
    }
    if (idx < totalProjects - 1) {
      nextLink = `<a href="#" id="next-project">Next <span class="arrow">→</span></a>`;
    } else {
      nextLink = `<span></span>`; // Empty placeholder
    }

    return `
    <div class="modal-top"> 
      <p>${projectDetails[idx].date}</p>
      <h2 class="modal-title">${projectDetails[idx].title}</h2>
      <a href="${projectDetails[idx].website}" id="official-link" class="official-link" target="_blank" rel="noopener noreferrer">Organisation Website</a>
    </div>
    <div class="modal-nav-links">
      ${prevLink}
      ${nextLink}
    </div>
  `;
  }

  function trapFocus(modal) {
    const focusableSelectors = [
      "a[href]",
      "button:not([disabled])",
      "textarea:not([disabled])",
      "input:not([disabled])",
      '[tabindex]:not([tabindex="-1"])',
    ];
    const focusableElements = modal.querySelectorAll(
      focusableSelectors.join(","),
    );
    if (focusableElements.length === 0) return;

    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];

    modal.addEventListener("keydown", function (e) {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === first) {
            last.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === last) {
            first.focus();
            e.preventDefault();
          }
        }
      }
    });
    first.focus();
  }

  function openModal(idx) {
    currentModalProjectIdx = idx;
    let modalLeft = document.querySelector(".modal-left");
    let modalRight = document.querySelector(".modal-right");
    if (!modalLeft) {
      modalLeft = document.createElement("div");
      modalLeft.className = "modal-left";
      // Insert before modalRight
      if (modalRight && modalRight.parentNode) {
        modalRight.parentNode.insertBefore(modalLeft, modalRight);
      }
    }
    // Now update modalLeft and modalRight as usual
    modalLeft.innerHTML = renderModalLeft(idx);
    if (modalRight) {
      modalRight.innerHTML = projectDetails[idx].sections
        .map((section) => ModalSection(section))
        .join("");
    }

    // Add event listeners for prev/next links (desktop)
    const prevBtn = document.getElementById("prev-project");
    const nextBtn = document.getElementById("next-project");
    if (prevBtn) {
      prevBtn.addEventListener("click", (e) => {
        e.preventDefault();
        openModal(idx - 1);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", (e) => {
        e.preventDefault();
        openModal(idx + 1);
      });
    }

    if (modalRight) {
      modalRight.scrollTop = 0;
    }

    modal.classList.add("active");
    trapFocus(modal);
    lockScroll({ useFixed: false, allowSelector: "#project-modal" });
  }

  if (readMore) {
    readMore.addEventListener("click", (e) => {
      e.preventDefault();
      const idx = parseInt(readMore.getAttribute("data-project", 10));
      openModal(idx);
    });
  }

  if (modalClose) {
    modalClose.addEventListener("click", () => {
      modal.classList.remove("active");
      unlockScroll();
      // Restore the project that was last viewed
      projectItems.forEach((el, idx) => {
        el.classList.toggle("active", idx === currentModalProjectIdx);
      });
      updateInfoBox(currentModalProjectIdx);
      drawConnector(currentModalProjectIdx, true);
      currentProjectIdx = currentModalProjectIdx;
    });
  }

  // Redraw connector line on window resize
  window.addEventListener("resize", () => {
    drawConnector(currentProjectIdx, true);

    // Responsive modal layout switch
    if (modal.classList.contains("active")) {
      openModal(currentModalProjectIdx);
    }
  });
}
