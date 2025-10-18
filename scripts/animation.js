// GSAP-powered landing page intro animation using a custom overlay
// Overlay shrinks to nav height, then nav content animates in

export function initAnimation() {
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";

  if (sessionStorage.getItem("landingAnimationPlayed")) {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
    document.querySelector(".top-nav").style.opacity = "1";
    return;
  }

  // hide nav while intro runs
  const nav = document.querySelector(".top-nav");
  if (!nav) return;
  nav.style.opacity = "0";
  nav.style.transform = "translateY(-100%)";

  // create the overlay (sits above the welcome)
  const overlay = document.createElement("div");
  overlay.className = "intro-overlay";
  Object.assign(overlay.style, {
    position: "fixed",
    inset: "0 0 0 0",
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255,218,181,0.12)",
    backdropFilter: "blur(8px)",
    zIndex: "2000", // above welcome and above nav
    pointerEvents: "auto",
    overflow: "hidden",
    transform: "translateY(0)", // will animate this
  });
  const isMobile = window.innerWidth < 768;

  // --- Invisible curtain approach: clip wrapper + inner element ---
  const clip = document.createElement("div");
  Object.assign(clip.style, {
    overflow: "hidden", // the "invisible curtain"
    display: "inline-block",
    width: "88%",
    maxWidth: isMobile ? "320px" : "820px",
    textAlign: "center",
  });

  // Centered welcome text
  const welcome = document.createElement("div");
  welcome.className = "intro-welcome-text";
  welcome.textContent = "Welcome";
  Object.assign(welcome.style, {
    fontFamily: "'Sora', Arial, sans-serif",
    fontSize: isMobile ? "3.5rem" : "clamp(7rem, 6vw, 10rem)",
    letterSpacing: "2px",
    color: "#5d3136",
    textShadow: "0 2px 16px rgba(93,49,54,0.08)",
    opacity: "1", // keep visible but initially translated out of view
    display: "inline-block",
    transformOrigin: "50% 50%",
    willChange: "transform, opacity",
  });

  clip.appendChild(document.createElement("div")); // placeholder so overlay center doesn't collapse
  clip.appendChild(welcome);
  overlay.appendChild(clip);
  document.body.appendChild(overlay);

  sessionStorage.setItem("landingAnimationPlayed", "true");

  // initial states: welcome sits just below center (will slide up into view)
  gsap.set(welcome, { y: 100, opacity: 1 });

  // Animate sequence
  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  tl.to(welcome, { y: 0, duration: 1.05, ease: "power3.out" })
    // subtle accent: tiny "pop" up + settle to add character without stealing attention
    .to(
      welcome,
      {
        scale: 1.02,
        duration: 0.14,
        ease: "power1.out",
        yoyo: true,
        repeat: 1,
      },
      "+=0.04"
    )
    .to({}, { duration: 0.3 }) // readable pause
    .addLabel("exit")
    // animate welcome down behind the overlay
    .to(
      welcome,
      {
        y: 80, // move welcome down (bigger value = sinks more behind overlay)
        duration: 0.7,
        ease: "power2.in",
      },
      "exit"
    )
    // slide the overlay itself down off-screen (start almost same time)
    .to(
      overlay,
      {
        y: "100vh", // move overlay off the viewport downward
        duration: 0.9,
        ease: "power3.inOut",
      },
      "exit+=0.05"
    )
    // reveal nav as overlay lifts away (start a bit into overlay exit)
    .to(
      nav,
      {
        opacity: 1,
        transform: "translateY(0)",
        duration: 0.9,
        ease: "power3.inOut",
      },
      "exit+=0.22"
    )
    // Cleanup
    .add(() => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      nav.style.opacity = "";
      nav.style.transform = "";
      if (overlay && overlay.parentNode)
        overlay.parentNode.removeChild(overlay);
    });
}
