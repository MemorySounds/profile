// const projectDetails = [
//   {
//     title: "Startin’Blox",
//     html: `
//       <h3>
//         <a href="https://startinblox.com/" target="_blank" rel="noopener noreferrer">
//             Startin’Blox
//         </a></h3>
//       <strong>Overview</strong>
//       <p>With Startin’Blox, I contributed to an EU-commissioned semantic web project exploring decentralised data sharing through Dataspace Connectors. The work focused on prototyping an index-based search engine to make querying across the Dataspace faster and more efficient. My role included drafting architecture diagrams, evaluating connector options (with a focus on the EDC Connector), setting up test VMs to integrate with other Startin’Blox components, and documenting the process for future development.</p>
//       <strong>My role</strong>
//       <ul>
//         <li>Explored and applied the EDC Connector within the broader solution.</li>
//         <li>Set up and ran test VMs to deploy and validate connectors.</li>
//         <li>Collaborated with Startin’Blox and partners on technical design decisions.</li>
//         <li>Produced architecture documentation and technical notes for the team.</li>
//       </ul>
//       <strong>Outcome</strong>
//       <p>Contributed working proof-of-concepts that advanced EU research into index-based search within dataspaces and decentralised data exchange.</p>
//       <strong>Tech</strong> Semantic Web · EDC Connector · Java · Docker · Kubernetes
//     `,
//   },
//   {
//     title: "Give Your Best",
//     html: `
//       <h3>
//         <a href="https://giveyourbest.uk/" target="_blank" rel="noopener noreferrer">
//           Give Your Best
//         </a>
//       </h3>
//       <strong>Overview</strong>
//       <p>Give Your Best is a non-profit clothing platform that enables people to donate clothes directly to refugees. I joined their team to support and expand their web platform.</p>
//       <strong>My role</strong>
//       <ul>
//         <li>Added new features to improve donor and recipient experience.</li>
//         <li>Fixed bugs, improved security, and added reporting tools.</li>
//         <li>Contributed frontend changes and backend API updates.</li>
//       </ul>
//       <strong>Outcome</strong>
//       <p>Helped strengthen the platform during a period of growth, starting as a contractor and later contributing as a volunteer developer.</p>
//       <strong>Tech</strong> React · Node.js · Express · MongoDB · Heroku
//     `,
//   },
//   {
//     title: "The Computer Firm (TCF)",
//     html: `
//     <h3>
//         <a href="https://thecomputerfirm.com/" target="_blank" rel="noopener noreferrer">
//             The Computer Firm (TCF)
//         </a>
//     </h3>

//     <strong>Overview</strong>
//     <p>
//         Since 2023, I’ve collaborated with TCF on several projects, mainly centred on academic publishing platforms and research tools in the health sector.
//     </p>

//     <!-- Project 1: Academic Publishing -->
//     <strong>Academic Publishing Systems (AGA, The Hive)</strong>
//     <p>
//         Developed secure platforms for academic journals in the field of musculoskeletal research.
//     </p>
//         <ul>
//             <li>Built full submission/review workflows, editorial tools, and issue/article management.</li>
//             <li>Developed frontend platforms for publishing and reading academic content online.</li>
//             <li>A full backend with automated PDF generation and multilingual support.</li>
//         </ul>
//     <strong>Outcome</strong>
//     <p>
//         Platforms launched to support academic communities in digitising journals and expanding access to research.
//         <a href="https://thehive-musculoskeletal.com/" target="_blank" rel="noopener noreferrer">The Hive</a>
//         <a href="https://aga-journal.com/" target="_blank" rel="noopener noreferrer">AGA Journal</a>
//     </p>
//     <strong>Tech</strong>(MERN stack) - React · Node.js · Express · MongoDB

//     <br /><br />

//     <!-- Project 2: Surgeon Note-Taking App -->
//     <strong>Surgeon Note-Taking App (Work-in-progress)</strong>
//     <p>
//         A desktop application built with Electron and React, incorporating AI-assisted note-taking features.
//         <em>Further details under NDA.</em>
//     </p>
//     <strong>Tech</strong> Electron · React · AI integration
//     `,
//   },
//   {
//     title: "Carbon Co-op",
//     html: `
//       <h3>
//         <a href="https://carbon.coop/" target="_blank" rel="noopener noreferrer">
//           Carbon Co-op
//         </a>
//       </h3>
//       <strong>Overview</strong>
//       <p>Carbon Co-op is a UK-based co-operative helping households reduce carbon emissions. I contributed as a freelance developer, building an integration to connect their internal energy data API with the open-source Home Assistant platform.</p>
//       <strong>My role</strong>
//       <ul>
//         <li>Designed and implemented a Home Assistant integration.</li>
//       </ul>
//       <strong>Outcome</strong>
//       <p>Delivered a practical bridge between Carbon Co-op’s systems and Home Assistant as part of a larger project with an EU-consortium of energy initiatives.</p>
//       <strong>Tech</strong> Python · Home Assistant · Git
//     `,
//   },
//   {
//     title: "Answer Digital",
//     html: `
//     <h3>
//         <a href="https://answerdigital.com/" target="_blank" rel="noopener noreferrer">
//             Answer Digital (2020–2022)
//         </a>
//     </h3>

//     <strong>Overview</strong>
//     <p>
//         At Answer Digital (a mid-sized company ~80 people), I worked as a consultant developer for just under three years, contributing across multiple projects, mainly in the health sector. I alternated between working in agile teams of up to 10 people — participating in full project management processes, ceremonies, and tooling — and working independently with external clients, including data monitoring for a bank and various services for NHS trusts in Manchester and London.
//     </p>

//     <strong>Highlighted Project – NHS National Data Opt-Out Service:</strong>
//     <ul>
//         <li>Developed and tested full-stack features for a national health data system.</li>
//         <li>Integrated the service into NHS infrastructure (Windows Server, MESH API).</li>
//         <li>Gathered requirements directly from NHS clients.</li>
//         <li>Led and mentored two junior developers.</li>
//     </ul>

//     <strong>Outcome</strong>
//     <p>
//         Successfully delivered a secure and reliable system, meeting NHS deadlines and compliance standards.
//     </p>

//     <strong>Tech</strong> JavaScript · React · Java · Spring Boot · SQL Server · Microservices · REST APIs · Docker
//     <br>
//     <strong>Mentoring (Answer Academy):</strong>
//     <ul>
//         <li>Ran technical workshops for junior Java developers.</li>
//         <li>Supported their progress with code reviews and Agile ceremonies.</li>
//         <li>Helped developers become project-ready with modern Java/Spring practices.</li>
//     </ul>
//     `,
//   },
// ];

const projectDetails = [
  {
    title: "Startin’Blox",
    brief:
      "EU semantic web project focused on decentralised data sharing and fast, index-based search across dataspaces.",
    sections: [
      {
        title: "OVERVIEW",
        content: `
          <p>With Startin’Blox, I contributed to an EU-commissioned semantic web project exploring decentralised data sharing through Dataspace Connectors. The work focused on prototyping an index-based search engine to make querying across the Dataspace faster and more efficient.</p>
        `,
      },
      {
        title: "MY ROLE",
        content: `
          <ul>
            <li>Explored and applied the EDC Connector within the broader solution.</li>
            <li>Set up and ran test VMs to deploy and validate connectors.</li>
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
        content: `<p>Semantic Web · EDC Connector · Java · Docker · Kubernetes</p>`,
      },
    ],
  },
  {
    title: "Give Your Best",
    brief:
      "Non-profit clothing platform enabling direct donations to refugees. Supported web platform growth and new features.",
    sections: [
      {
        title: "OVERVIEW",
        content: `<p>Give Your Best is a non-profit clothing platform that enables people to donate clothes directly to refugees. I joined their team to support and expand their web platform.</p>`,
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
        title: "TECH",
        content: `<p>React · Node.js · Express · MongoDB · Heroku</p>`,
      },
    ],
  },
  {
    title: "The Computer Firm (TCF)",
    brief:
      "Collaborated on academic publishing platforms and health sector tools, including secure journal systems and note-taking apps.",
    sections: [
      {
        title: "OVERVIEW",
        content: `<p>Since 2023, I’ve collaborated with TCF on several projects, mainly centred on academic publishing platforms and research tools in the health sector.</p>`,
      },
      {
        title: "MY ROLE",
        content: `
          <ul>
            <li>Built full submission/review workflows, editorial tools, and issue/article management.</li>
            <li>Developed frontend platforms for publishing and reading academic content online.</li>
            <li>Developed a desktop note-taking app for surgeons (Electron + React, AI-assisted features).</li>
          </ul>
        `,
      },
      {
        title: "OUTCOMES",
        content: `<p>Platforms launched to support academic communities in digitising journals and expanding access to research.</p>`,
      },
      {
        title: "TECH",
        content: `<p>MERN stack · Electron · React · AI integration</p>`,
      },
    ],
  },
  {
    title: "Carbon Co-op",
    brief:
      "Built a Home Assistant integration to connect internal energy data APIs for a UK-based carbon reduction co-operative.",
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
      },
    ],
  },
  {
    title: "Answer Digital",
    brief:
      "Consultant developer for health sector projects, including NHS data systems and mentoring junior developers in modern Java/Spring.",
    sections: [
      {
        title: "OVERVIEW",
        content: `<p>At Answer Digital, I worked as a consultant developer for just under three years, contributing across multiple projects, mainly in the health sector.</p>`,
      },
      {
        title: "MY ROLE",
        content: `
          <ul>
            <li>Developed and tested full-stack features for a national health data system.</li>
            <li>Integrated the service into NHS infrastructure (Windows Server, MESH API).</li>
            <li>Gathered requirements directly from NHS clients.</li>
            <li>Led and mentored two junior developers.</li>
          </ul>
        `,
      },
      {
        title: "TECH",
        content: `<p>JavaScript · React · Java · Spring Boot · SQL Server · Microservices · REST APIs · Docker</p>`,
      },
      {
        title: "OUTCOMES",
        content: `<p>Successfully delivered a secure and reliable system, meeting NHS deadlines and compliance standards.</p>`,
      },
    ],
  },
];
const projectSummaries = [
  {
    title: "Startin’Blox",
    description:
      "EU semantic web project focused on decentralised data sharing and fast, index-based search across dataspaces.",
  },
  {
    title: "Give Your Best",
    description:
      "Non-profit clothing platform enabling direct donations to refugees. Supported web platform growth and new features.",
  },
  {
    title: "The Computer Firm (TCF)",
    description:
      "Collaborated on academic publishing platforms and health sector tools, including secure journal systems and note-taking apps.",
  },
  {
    title: "Carbon Co-op",
    description:
      "Built a Home Assistant integration to connect internal energy data APIs for a UK-based carbon reduction co-operative.",
  },
  {
    title: "Answer Digital",
    description:
      "Consultant developer for health sector projects, including NHS data systems and mentoring junior developers in modern Java/Spring.",
  },
];

// Drawing SVG paths
document.addEventListener("DOMContentLoaded", () => {
  const projectsWrapper = document.querySelector(".projects-wrapper");
  const infoBox = document.querySelector(".project-info");
  const connectorPath = document.getElementById("connector-path");
  const projectItems = document.querySelectorAll(".project-list .project");
  const projectTitle = document.getElementById("project-title");
  const projectDesc = document.getElementById("project-desc");

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

  projectItems.forEach((item, idx) => {
    item.addEventListener("click", () => {
      // Remove .active from all projects
      projectItems.forEach((el) => el.classList.remove("active"));
      // Add .active to clicked project
      item.classList.add("active");
      // Update info box and connector line
      updateInfoBox(idx);
      drawConnector(idx, true);
    });
  });

  // Initial state: first project active
  projectItems[0].classList.add("active");
  updateInfoBox(0);
  drawConnector(0, true);

  // MODAL
  let currentModalProjectIdx = 0;
  const totalProjects = projectDetails.length;
  const modal = document.getElementById("project-modal");
  const modalClose = document.getElementById("modal-close");
  const readMore = document.getElementById("read-more");

  function ModalSection({ title, content }) {
    return `
    <section class="modal-section">
      <div class="section-header">
        <span class="section-title">${title}</span>
        <span class="section-line"></span>
      </div>
      <div class="modal-section-content">${content}</div>
    </section>
  `;
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
      <h2 class="modal-title">${projectDetails[idx].title}</h2>
      <p class="modal-brief">${projectDetails[idx].brief}</p>
      <a href="#" id="official-link" class="official-link">Company Website</a>
    </div>
    <div class="modal-nav-links">
      ${prevLink}
      ${nextLink}
    </div>
  `;
  }

  function openModal(idx) {
    currentModalProjectIdx = idx; // Track current modal project
    const modalLeft = document.querySelector(".modal-left");
    const modalRight = document.querySelector(".modal-right");
    if (modalLeft) {
      modalLeft.innerHTML = renderModalLeft(idx);
    }
    if (modalRight) {
      modalRight.innerHTML = projectDetails[idx].sections
        .map((section) => ModalSection(section))
        .join("");
    }
    modal.classList.add("active");
    document.body.classList.add("modal-open");

    // Add event listeners for prev/next links
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
      document.body.classList.remove("modal-open");
      // Restore the project that was last viewed
      projectItems.forEach((el, idx) => {
        el.classList.toggle("active", idx === currentModalProjectIdx);
      });
      updateInfoBox(currentModalProjectIdx);
      drawConnector(currentModalProjectIdx, true);
    });
  }
});
