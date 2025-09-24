let ignoreScroll = false;

document.addEventListener("DOMContentLoaded", () => {
  // === NAV CIRCLES & LOGO CIRCLE ===
  const logo = document.querySelector(".top-nav .logo");
  const logoCircleFill = logo?.querySelector(".circle-fill");
  const navLinks = document.querySelectorAll(".top-nav ul li a");
  const mainScroll = document.querySelector(".main-scroll");
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
  (mainScroll || window).addEventListener("scroll", () => {
    if (ignoreScroll) return;
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
      e.preventDefault();
      ignoreScroll = true;
      navLinks.forEach((l, idx) => {
        l.classList.remove("active");
        fillCircle(navCircleFills[idx], false);
      });
      this.classList.add("active");
      fillCircle(navCircleFills[i], true);

      const targetId = this.getAttribute("href");
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
      hamburger.classList.toggle("open");
      mobileMenu.classList.toggle("open");
      document.body.classList.toggle("menu-open");
    });

    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        hamburger.classList.remove("open");
        document.body.classList.remove("menu-open");
      });
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 767) {
        document.body.classList.remove("menu-open");
        mobileMenu.classList.remove("open");
        hamburger.classList.remove("open");
      }
    });
  }
});
