export default [
  {
    "slug": "give-your-best",
    "title": "Give Your Best",
    "website": "https://giveyourbest.uk/",
    "date": "2023-2026",
    "summary": "A charity webshop where refugees choose donated clothes for free. Features, reporting and upkeep, first as a contractor and later as a volunteer.",
    "sections": [
      {
        "title": "OVERVIEW",
        "content": "<p>Give Your Best is a UK charity whose webshop lets refugees choose and order donated clothes for free. I joined as a contractor to extend the platform during a period of growth, and have kept working on it since, in paid projects and as a volunteer. The platform has handled over 60,000 donated items and supported more than 5,500 people.</p>   <div class=\"tcf-links\">\n          <a href=\"https://shop.giveyourbest.uk/\" class=\"project-link\" target=\"_blank\" rel=\"noopener noreferrer\">GYB</a>\n        </div>"
      },
      {
        "title": "MY ROLE",
        "content": "\n          <ul>\n            <li><strong>Bulk donations:</strong> a new data model and API so donors can list one item in many sizes and quantities, with ordering rules and stock limits.</li>\n            <li><strong>Reporting:</strong> the original report ran inside the web request and took the production server down, so I rebuilt it as a background job that generates an Excel workbook and emails it to staff, along with database indexes and some query optimisation.</li>\n            <li><strong>Automated reports:</strong> recurring CSV reports emailed to staff, such as a weekly list of London shoppers that staff used to ask developers to pull from the database.</li>\n            <li><strong>Donor privacy and safety:</strong> items from donors who aren't yet trusted go via the charity's office to be checked first, and donor emails no longer appear in API responses.</li>\n          </ul>\n        "
      },
      {
        "title": "EXAMPLE FEATURE",
        "content": "\n          <p>The shop had grown organically and only really supported womenswear: navigation, category rules and legacy data behaviour were hard-wired. Adding Menswear meant either duplicating everything or restructuring.</p>\n          <p>I restructured it around one configuration model shared across the app, covering routing, navigation, breadcrumbs and API filtering, with one shared section component for the Womenswear, Menswear and Children's pages.</p>\n          <p>Menswear launched without duplicated code, the navigation became consistent across sections, and older items without the new data still show up.</p>\n        "
      },
      {
        "title": "TECH",
        "content": [
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "Mongoose",
          "Heroku",
          "GitHub Actions",
          "Ant Design",
          "Sass"
        ]
      }
    ]
  },
  {
    "slug": "startinblox",
    "title": "Startin'Blox",
    "website": "https://startinblox.com/",
    "date": "2024-2025",
    "summary": "EU-funded dataspace research, part-time. I owned the connector: the component organisations run to share data without a central platform.",
    "sections": [
      {
        "title": "OVERVIEW",
        "content": "\n          <p>Startin'Blox builds dataspaces: networks where organisations share data with each other without handing it over to a central platform. I worked with them part-time on EU-funded research projects, mainly for the European Media Data Space (TEMS), where media organisations can search what others offer, such as 3D models, subtitles and fact-checks, and then negotiate access. My part was the connector, built on the open-source <a href='https://github.com/eclipse-edc/Connector' class='hover-link' target='_blank' rel='noopener noreferrer'>Eclipse Dataspace Components (EDC)</a>.</p>\n        "
      },
      {
        "title": "MY ROLE",
        "content": "\n          <ul>\n            <li>Owned the connector side: the component each organisation runs to publish its data catalogue, prove who it is and negotiate usage contracts before any data moves.</li>\n            <li>Compared the two main open-source connectors (Eclipse EDC and FIWARE) and documented the trade-offs for the team.</li>\n            <li>Assembled our connector from EDC's Java modules with Gradle, containerised it with Docker and deployed it to Linux VMs behind Nginx.</li>\n            <li>Ran Eclipse's reference dataspace on Kubernetes (KinD, deployed with Terraform) and built a demo of catalogue requests and contract negotiation.</li>\n            <li>Wrote the team's technical documentation on connectors, the EDC control plane and the reference setup.</li>\n          </ul>\n        "
      },
      {
        "title": "OUTCOMES",
        "content": "<p>Working proofs of concept and documentation that fed into the project's research on searching across dataspaces.</p>"
      },
      {
        "title": "TECH",
        "content": [
          "Java",
          "Gradle",
          "Eclipse EDC",
          "Docker",
          "Nginx",
          "Linux",
          "Kubernetes (KinD)",
          "Terraform",
          "JSON-LD / Semantic Web"
        ]
      }
    ]
  },
  {
    "slug": "the-computer-firm",
    "title": "The Computer Firm (TCF)",
    "website": "https://thecomputerfirm.com/en/",
    "date": "2024-2025",
    "summary": "Main developer on two academic journal platforms, then the local speech features of an offline desktop app for surgeons.",
    "sections": [
      {
        "title": "OVERVIEW",
        "content": "\n        <p>TCF is a small Swiss software firm. I worked with them from 2024 to 2025, mainly on academic publishing platforms and research tools in health.</p>\n      "
      },
      {
        "title": "PROJECT 1",
        "content": "\n        <p>Main developer on two academic journal platforms in musculoskeletal research, working closely with TCF's lead developer.</p>\n        <ul>\n          <li>Editorial back-office: a submission and peer-review workflow with a history timeline and email notifications at each step, plus article, issue, author and user management.</li>\n          <li>Word (.docx) import that turns manuscripts into structured articles, including the reference list and links from in-text citations.</li>\n          <li>PDF generation for articles and whole issues (Puppeteer), and machine translation into six languages.</li>\n          <li>The public reading site, with search and social sharing.</li>\n        </ul>\n        <div class=\"tcf-links\">\n          <a href=\"https://thehive-musculoskeletal.com/\" class=\"project-link\" target=\"_blank\" rel=\"noopener noreferrer\">THE HIVE</a>\n          <a href=\"https://aga-journal.com/\" class=\"project-link\" target=\"_blank\" rel=\"noopener noreferrer\">AGA JOURNAL</a>\n        </div>\n      "
      },
      {
        "title": "PROJECT 2",
        "content": "\n        <p>\n          A desktop note-taking app for surgeons (Electron and React) that runs entirely offline, for patient privacy. I built the local speech features: a small Python (FastAPI) text-to-speech service using Piper, packaged into the app, and local Whisper for dictation.<br>\n          <em>Further details under NDA.</em>\n        </p>\n      "
      },
      {
        "title": "TECH",
        "content": [
          "React",
          "Redux Toolkit",
          "Node.js",
          "Express",
          "MongoDB",
          "Puppeteer",
          "Google Cloud Storage",
          "Electron",
          "Python (FastAPI)",
          "Ant Design"
        ]
      }
    ]
  },
  {
    "slug": "carbon-coop",
    "title": "Carbon Co-op",
    "website": "https://carbon.coop/",
    "date": "2023",
    "summary": "A small Home Assistant integration that polls an energy co-op's data API, so households can follow their energy use.",
    "sections": [
      {
        "title": "OVERVIEW",
        "content": "<p>Carbon Co-op is a UK co-operative helping households cut their carbon emissions. In a short engagement, I built a Python integration for the open-source Home Assistant platform that polls their energy-data API at intervals, so households can monitor their energy use. It was part of a larger project with an EU consortium of energy initiatives.</p>"
      },
      {
        "title": "MY ROLE",
        "content": "\n          <ul>\n            <li>Designed and built the integration, which ran on a small home energy box that Carbon Co-op was producing.</li>\n          </ul>\n        "
      },
      {
        "title": "TECH",
        "content": [
          "Python",
          "Home Assistant",
          "REST APIs",
          "Git"
        ]
      }
    ]
  },
  {
    "slug": "answer-digital",
    "title": "Answer Digital",
    "website": "https://answerdigital.com/",
    "date": "2019-2022",
    "summary": "Consultant developer, mainly on NHS projects: Java/Spring Boot services that help hospital trusts apply the national data opt-out.",
    "sections": [
      {
        "title": "OVERVIEW",
        "content": "\n        <p>\n          At Answer Digital (a consultancy of about 80 people), I worked as a consultant developer for three years, mainly in the health sector, starting as a Java developer and moving towards Node.js and full-stack JavaScript. I alternated between agile teams of 10-15 people and working on my own directly with clients, including several NHS trusts in Manchester and London and a Chinese bank. I was also part of the Answer Academy, mentoring junior developers through workshops and code reviews.\n        </p>\n      "
      },
      {
        "title": "HIGHLIGHTED PROJECT",
        "content": "\n        <p>National data opt-out system. In England, patients can opt out of their data being used for research and planning, and hospital trusts have to remove them from datasets before sharing. The system sends NHS numbers to NHS Digital through its secure messaging service (MESH) and filters the trust's datasets with the result.</p>\n        <ul>\n          <li>Took over a system a senior colleague had built for one trust and adapted it for a new London hospital trust: configuration, new backend features and JUnit tests.</li>\n          <li>Deployed it on the trust's own servers: Spring Boot services running as Windows services behind an IIS reverse proxy, connected to NHS Digital's MESH API.</li>\n          <li>Worked with patient lists of hundreds of thousands of records, and with the trust's staff and IT team on requirements and rollout.</li>\n          <li>Documented the setup and onboarded two junior developers before moving on.</li>\n        </ul>\n      "
      },
      {
        "title": "OUTCOME",
        "content": "\n        <p>Delivered on time. The trust still uses it.</p>\n      "
      },
      {
        "title": "TECH",
        "content": [
          "Java",
          "Spring Boot",
          "JUnit",
          "SQL Server",
          "Microservices",
          "REST APIs",
          "IIS",
          "React",
          "Node.js",
          "Docker"
        ]
      },
      {
        "title": "MENTORING (ANSWER ACADEMY)",
        "content": "\n        <ul>\n          <li>Ran technical workshops for junior Java developers.</li>\n          <li>Supported their progress with code reviews and Agile ceremonies.</li>\n          <li>Helped developers become project-ready with modern Java/Spring practices.</li>\n        </ul>\n      "
      }
    ]
  }
];
