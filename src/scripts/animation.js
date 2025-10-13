// GSAP-powered landing page intro animation using a custom overlay
// Overlay shrinks to nav height, then nav content animates in

export function initAnimation() {
  //   if (sessionStorage.getItem("landingAnimationPlayed")) {
  //     // Skip animation, show nav immediately
  //     document.querySelector(".top-nav").style.opacity = "1";
  //     return;
  //   }
  //   sessionStorage.setItem("landingAnimationPlayed", "true");

  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";

  const nav = document.querySelector(".top-nav");
  nav.style.opacity = "0";
  nav.style.transform = "translateY(-100%)";

  if (!nav) return;

  // Overlay setup
  const overlay = document.createElement("div");
  overlay.className = "intro-overlay";
  overlay.style.position = "fixed";
  overlay.style.bottom = "0";
  overlay.style.left = "0";
  overlay.style.width = "100vw";
  overlay.style.height = "100vh";
  overlay.style.background = "rgba(255, 218, 181, 0.15)";
  overlay.style.backdropFilter = "blur(8px)";
  overlay.style.borderBottom = "0.5px solid #000";
  overlay.style.zIndex = "2000";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.pointerEvents = "auto";

  const isMobile = window.innerWidth < 768;

  // Centered welcome text
  const welcome = document.createElement("div");
  welcome.className = "intro-welcome-text";
  welcome.textContent = "Welcome";
  welcome.style.fontFamily = "'Sora', Arial, sans-serif";
  welcome.style.fontSize = isMobile ? "3.5rem" : "10rem";
  welcome.style.letterSpacing = "2px";
  welcome.style.color = "#5d3136";
  welcome.style.textShadow = "0 2px 16px rgba(93,49,54,0.08)";
  welcome.style.opacity = "0";
  overlay.appendChild(welcome);

  document.body.appendChild(overlay);

  // Animate sequence
  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  tl.to(welcome, {
    opacity: 1,
    duration: 0.8,
    scale: 1.08,
    delay: 0.2,
  })
    .to(welcome, {
      scale: 1,
      duration: 0.5,
      ease: "power1.inOut",
    })
    .to(
      welcome,
      {
        opacity: 0,
        y: 30,
        duration: 0.5,
        delay: 0.1,
      },
      "+=0.5"
    )
    // Fade in nav content
    .to(
      nav,
      {
        opacity: 1,
        transform: "translateY(0)",
        duration: 1.3,
        ease: "power3.inOut",
      },
      "-=0.3"
    )
    // Shrink overlay to nav height
    .to(
      overlay,
      {
        height: 0,
        duration: 1.1,
        ease: "power3.inOut",
        onUpdate: function () {
          overlay.style.bottom = "0";
        },
      },
      "<"
    )
    // Cleanup
    .add(() => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      nav.style.opacity = "";
      nav.style.transform = "";
      navLinks.forEach((li) => {
        li.style.pointerEvents = "";
        li.style.opacity = "";
        li.style.transform = "";
      });
      if (logo) logo.style.opacity = "";
      if (navLinksWrapper) navLinksWrapper.style.opacity = "";
      if (hamburger) hamburger.style.opacity = "";
    });
}
