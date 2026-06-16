import { lockScroll, unlockScroll } from "./scroll-lock.js";

const projectDetails = [
  {
    title: "Give Your Best",
    website: "https://giveyourbest.uk/",
    date: "2023-2025",
    sections: [
      {
        title: "OVERVIEW",
        content: `<p>Give Your Best is a charity that enables people to donate clothes directly to refugees via their online webshop platform. I initially had joined their team to support and expand their web platform, but over the past few years have worked on various features, maintenance, and support, both in a paid-freelance and a volunteer capacity.</p>   <div class="tcf-links">
          <a href="https://shop.giveyourbest.uk/" class="project-link" target="_blank" rel="noopener noreferrer">GYB</a>
        </div>`,
      },
      {
        title: "MY ROLE",
        content: `
          <ul>
            <li>Added new features to improve donor and recipient experience.</li>
            <li>Fixed bugs, improved security, and added reporting tools.</li>
            <li>Contributed frontend changes and backend API updates.</li>
          </ul>
        `,
      },
      {
        title: "OUTCOMES",
        content: `<p>Helped strengthen the platform during a period of growth, starting as a contractor and later contributing as a volunteer developer.</p>`,
      },
      {
        title: "EXAMPLE FEATURE",
        content: `
          <p>A key piece of work involved refactoring the platform to support multiple shopping sections (Women, Men, Children) in a consistent and scalable way, without duplicating logic across sections.</p>
          <p>The platform had evolved organically over time, leading to inconsistent navigation structures, category rules, and legacy data behaviours that needed to be unified without breaking existing functionality.</p>
          <p>I introduced a configuration-driven architecture that centralised section-specific behaviour — routing, navigation, breadcrumbs, and API filtering — into reusable logic shared across the application. This resulted in adding a Menswear section (which previously didn't exist), a more cohesive user experience, and a more maintainable codebase.</p>
        `,
      },
      {
        title: "TECH",
        content: `<p>React · Node.js · Express · MongoDB · Heroku · Ant-Design · Sass</p>`,
        content: [
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "Heroku",
          "Ant-Design",
          "Sass",
          "CSS3",
        ],
      },
    ],
  },
  {
    title: "Startin’Blox",
    website: "https://startinblox.com/",
    date: "2024-2026",
    sections: [
      {
        title: "OVERVIEW",
        content: `
          <p>I have worked with Startin'Blox on multiple EU-commissioned semantic web initiatives focused on decentralised data sharing in the context of dataspaces. Utilising the Eclipse Dataspace Components (EDC), namely the <a href='https://github.com/eclipse-edc/Connector' class='hover-link' target='_blank' rel='noopener noreferrer'>EDC connector</a>.</p>
        `,
      },
      {
        title: "MY ROLE",
        content: `
          <ul>
            <li>Researched and applied the EDC Connector within the broader solutions.</li>
            <li>Configured, extended, and tested EDC connectors across multiple use-cases, including a prototype cross-dataspace search engine.</li>
            <li>Collaborated with Startin’Blox and partners on technical design decisions.</li>
            <li>Produced architecture documentation and technical notes for the team.</li>
          </ul>
        `,
      },
      {
        title: "OUTCOMES",
        content: `<p>Contributed working proof-of-concepts that advanced EU research into index-based search within dataspaces and decentralised data exchange.</p>`,
      },
      {
        title: "TECH",
        content: [
          "Semantic Web",
          "EDC Connector",
          "Java",
          "Docker",
          "Kubernetes",
          "Open-Source",
          "Nginx",
          "Distributed Systems",
        ],
      },
    ],
  },
  {
    title: "The Computer Firm (TCF)",
    website: "https://thecomputerfirm.com/en/",
    date: "2024-2025",
    sections: [
      {
        title: "OVERVIEW",
        content: `
        <p>Since 2024, I’ve collaborated with TCF on several projects, mainly centred on academic publishing platforms and research tools in the health sector.</p>
      `,
      },
      {
        title: "PROJECT 1",
        content: `
        <p>Developed two end-to-end secure web applications for academic journals in the field of musculoskeletal research. Platforms launched to support academic communities in digitising journals and expanding access to research.</p>  
        <ul>
          <li>Built full submission/review workflows, editorial tools, and issue/article management.</li>
          <li>Developed frontend platforms for publishing and reading academic content online.</li>
          <li>A full backend with automated PDF generation and multilingual support.</li>
        </ul>
        <div class="tcf-links">
          <a href="https://thehive-musculoskeletal.com/" class="project-link" target="_blank" rel="noopener noreferrer">THE HIVE</a>
          <a href="https://aga-journal.com/" class="project-link" target="_blank" rel="noopener noreferrer">AGA JOURNAL</a>
        </div>
      `,
      },
      {
        title: "PROJECT 2",
        content: `
        <p>
          A surgeon note-taking desktop application built with Electron and React, incorporating AI-assisted note-taking features.<br>
          <em>Further details under NDA (currently work-in-progress)</em>
        </p>
      `,
      },
      {
        title: "TECH",
        content: [
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "Electron",
          "Ant-Design",
          "CSS3",
          "On-Device AI Features",
        ],
      },
    ],
  },
  {
    title: "Carbon Co-op",
    website: "https://carbon.coop/",
    date: "2023",
    sections: [
      {
        title: "OVERVIEW",
        content: `<p>Carbon Co-op is a UK-based co-operative helping households reduce carbon emissions. I contributed as a freelance developer, building an integration to connect their internal energy data API with the open-source Home Assistant platform.</p>`,
      },
      {
        title: "MY ROLE",
        content: `
          <ul>
            <li>Designed and implemented a Home Assistant integration.</li>
          </ul>
        `,
      },
      {
        title: "OUTCOMES",
        content: `<p>Delivered a practical bridge between Carbon Co-op’s systems and Home Assistant as part of a larger project with an EU-consortium of energy initiatives.</p>`,
      },
      {
        title: "TECH",
        content: `<p>Python · Home Assistant · Git</p>`,
        content: ["Python", "Home Assistant", "Git"],
      },
    ],
  },
  {
    title: "Answer Digital",
    website: "https://answerdigital.com/",
    date: "2019-2022",
    sections: [
      {
        title: "OVERVIEW",
        content: `
        <p>
          At Answer Digital (a mid-sized consultancy of ~80 people), I worked as a consultant developer for 3 years, contributing across multiple projects, mainly in the health sector. I alternated between agile teams of up to 10-15 people and working independently with external clients, including a Chinese bank and several NHS trusts in Manchester and London. Alongside project work, I was also part of the Answer Academy, where I mentored junior developers through workshops and code reviews. 
        </p>
      `,
      },
      {
        title: "HIGHLIGHTED PROJECT",
        content: `
        <p>Worked on a Microservices-based Java application to help NHS Trusts comply with national data opt-out regulations:</p>
        <ul>
          <li>Developed and tested full-stack features for a national health data system.</li>
          <li>Integrated the service into NHS infrastructure (Windows Server, MESH API).</li>
          <li>Worked with datasets spanning hundreds of thousands of patient records, ensuring compliance with NHS data standards</li>
          <li>Gathered requirements directly from NHS clients.</li>
          <li>Led and mentored two junior developers.</li>
        </ul>
      `,
      },
      {
        title: "OUTCOME",
        content: `
        <p>
          Successfully delivered a secure and reliable system, meeting NHS deadlines and compliance standards, enabling Trusts to comply with national opt-out regulations.
        </p>
      `,
      },
      {
        title: "TECH",
        content: [
          "React",
          "Java",
          "Spring Boot",
          "SQL Server",
          "Microservices",
          "REST APIs",
          "Docker",
          "Elasticsearch",
        ],
      },
      {
        title: "MENTORING (ANSWER ACADEMY)",
        content: `
        <ul>
          <li>Ran technical workshops for junior Java developers.</li>
          <li>Supported their progress with code reviews and Agile ceremonies.</li>
          <li>Helped developers become project-ready with modern Java/Spring practices.</li>
        </ul>
      `,
      },
    ],
  },
];
const projectSummaries = [
  {
    title: "Give Your Best",
    description:
      "Supported the development of a non-profit clothing web platform enabling direct donations to refugees, delivering new features and performance improvements.",
  },
  {
    title: "Startin’Blox",
    description:
      "Multiple EU-commissioned semantic web projects focused on decentralised data sharing across dataspaces.",
  },
  {
    title: "The Computer Firm (TCF)",
    description:
      "Worked on three full-stack, end-to-end projects — two academic publishing platforms and a desktop note-taking app for surgeons.",
  },
  {
    title: "Carbon Co-op",
    description:
      "Built a Home Assistant integration to connect internal energy data APIs for a UK-based carbon reduction co-operative.",
  },
  {
    title: "Answer Digital",
    description:
      "Consultant developer for health sector projects, including NHS data systems and mentoring junior developers in modern web-development.",
  },
];

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
        const slugs = [
          "give-your-best",
          "startinblox",
          "the-computer-firm",
          "carbon-coop",
          "answer-digital",
        ];
        const targetUrl = `/projects/${slugs[idx]}/`;
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
