import { lockScroll, unlockScroll } from "./scroll-lock.js";

export function initSmoothScroll() {
  // cv-like likes:

  let ignoreScroll = false;
  const internalLinks = document.querySelectorAll('a[href^="/profile/"]'); // Target internal links like CV
  const isMobile = window.innerWidth <= 767;

  internalLinks.forEach((link) => {
    if (isMobile) {
      link.removeAttribute("target");
    } else {
      link.setAttribute("target", "_blank");
    }
  });

  // === NAV CIRCLES & LOGO CIRCLE ===
  const logo = document.querySelector(".top-nav .logo");
  const logoCircleFill = logo?.querySelector(".circle-fill");
  const navLinks = document.querySelectorAll(".top-nav ul li a");
  const navCircleFills = Array.from(
    document.querySelectorAll(".top-nav ul li .circle-fill")
  );
  const mobileMenuLinks = document.querySelectorAll(".mobile-menu ul li a");
  const mobileCircleFills = Array.from(
    document.querySelectorAll(".mobile-menu ul li .circle-fill")
  );

  // Fill/unfill nav circles
  function fillCircle(circle, fill = true) {
    if (circle) gsap.to(circle, { opacity: fill ? 1 : 0, duration: 0.3 });
  }

  // Scrollspy: fill active link's circle
  window.addEventListener("scroll", () => {
    if (ignoreScroll) return;

    // Skip scrollspy if modal is open
    if (document.body.classList.contains("modal-open")) return;

    let found = false;
    document.querySelectorAll("section").forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (!found && rect.top <= 80 && rect.bottom > 80) {
        // Desktop nav
        navLinks.forEach((link, i) => {
          const isActive = link.getAttribute("href") === `#${section.id}`;
          link.classList.toggle("active", isActive);
          fillCircle(navCircleFills[i], isActive);
        });
        // Mobile menu
        mobileMenuLinks.forEach((link, i) => {
          const isActive = link.getAttribute("href") === `#${section.id}`;
          link.classList.toggle("active", isActive);
          fillCircle(mobileCircleFills[i], isActive);
        });
        // Logo: fill only on hero
        if (logoCircleFill) fillCircle(logoCircleFill, section.id === "hero");
        found = true;
      }
    });
  });

  if (logo) {
    logo.addEventListener("click", function (e) {
      e.preventDefault();
      const heroSection = document.querySelector("#hero");
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: "smooth" });
      }
      if (
        mobileMenu &&
        mobileMenu.classList.contains("open") &&
        window.innerWidth <= 767
      ) {
        mobileMenu.classList.remove("open");
        hamburger?.classList.remove("open");
        unlockBodyFromMenu();
      }
    });
  }

  // Hover: pre-fill hovered circle
  navLinks.forEach((link, i) => {
    link.addEventListener("mouseenter", () =>
      fillCircle(navCircleFills[i], true)
    );
    link.addEventListener("mouseleave", () => {
      if (!link.classList.contains("active"))
        fillCircle(navCircleFills[i], false);
    });
  });

  // Click: instantly fill clicked circle, smooth scroll, ignore scrollspy during scroll
  navLinks.forEach((link, i) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      // Only handle hash links for smooth scrolling
      if (!targetId.startsWith("#")) {
        return; // Let non-hash links (e.g., /profile/cv/) behave normally
      }

      e.preventDefault();

      // Close modal if open
      const modal = document.getElementById("project-modal");
      if (modal && modal.classList.contains("active")) {
        modal.classList.remove("active");
        document.body.classList.remove("modal-open");
        window.scrollTo(0, window.savedScrollY);
      }

      ignoreScroll = true;
      navLinks.forEach((l, idx) => {
        l.classList.remove("active");
        fillCircle(navCircleFills[idx], false);
      });
      this.classList.add("active");
      fillCircle(navCircleFills[i], true);

      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          ignoreScroll = false;
        }, 600);
      } else {
        ignoreScroll = false;
      }
    });
  });

  // Logo hover: fill only if on hero
  if (logo && logoCircleFill) {
    logo.addEventListener("mouseenter", () => fillCircle(logoCircleFill, true));
    logo.addEventListener("mouseleave", () => {
      const heroSection = document.querySelector("#hero");
      if (
        heroSection &&
        heroSection.getBoundingClientRect().top <= 80 &&
        heroSection.getBoundingClientRect().bottom > 80
      ) {
        fillCircle(logoCircleFill, true);
      } else {
        fillCircle(logoCircleFill, false);
      }
    });
  }

  // Initial state for scrollspy
  setTimeout(() => window.dispatchEvent(new Event("scroll")), 100);

  // === HAMBURGER MENU ===
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const menuLinks = mobileMenu?.querySelectorAll("a") || [];

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.contains("open");
      if (isOpen) {
        mobileMenu.classList.remove("open");
        hamburger.classList.remove("open");
        unlockScroll();
      } else {
        mobileMenu.classList.add("open");
        hamburger.classList.add("open");
        lockScroll({ useFixed: false, allowSelector: ".mobile-menu" });
      }
    });

    menuLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href");

        // Only handle hash links for smooth scrolling
        if (!targetId.startsWith("#")) {
          // For non-hash links (e.g., /profile/cv/), close the menu and let the link open normally
          mobileMenu.classList.remove("open");
          hamburger.classList.remove("open");
          unlockScroll();
          return; // Exit without preventDefault
        }

        e.preventDefault();

        const modal = document.getElementById("project-modal");
        if (modal && modal.classList.contains("active")) {
          modal.classList.remove("active");
          unlockScroll();
          window.scrollTo(0, window.savedScrollY);
        }

        const targetSection = document.querySelector(targetId);
        mobileMenu.classList.remove("open");
        hamburger.classList.remove("open");
        unlockScroll();

        if (targetSection) {
          let offset = 30;
          console.log({ targetSection });
          if (targetSection.id === "contact") {
            offset = 0;
          }
          const top =
            targetSection.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      });
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 767) {
        mobileMenu.classList.remove("open");
        hamburger.classList.remove("open");
        unlockScroll();
      }
    });
  }

  // scrollbar
  const scrollbar = document.getElementById("custom-scrollbar");
  const thumb = document.getElementById("custom-scrollbar-thumb");

  function updateThumb() {
    if (!scrollbar || !thumb) return;
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    const trackHeight = scrollbar.offsetHeight;
    const thumbHeight = Math.max(
      trackHeight * (clientHeight / scrollHeight),
      40
    );

    const maxThumbTop = trackHeight - thumbHeight;
    const percentScrolled = scrollTop / (scrollHeight - clientHeight);
    const thumbTop = percentScrolled * maxThumbTop;

    thumb.style.height = `${thumbHeight}px`;
    thumb.style.top = `${thumbTop}px`;
  }

  function hideScrollbar() {
    if (window.innerWidth <= 767) {
      if (scrollbar) scrollbar.style.display = "none";
    } else {
      if (scrollbar) scrollbar.style.display = "";
    }
  }

  window.addEventListener("scroll", updateThumb);
  window.addEventListener("resize", () => {
    updateThumb();
    hideScrollbar();
  });
  hideScrollbar();
  updateThumb();
}
