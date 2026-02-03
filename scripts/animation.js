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
    webkitBackdropFilter: "blur(8px)",
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

  // Multilingual welcome words for slot-machine shuffle (last entry is final landing word)
  const welcomeWords = [
    "欢迎", // Chinese (Simplified)
    "Bienvenido", // Spanish
    "स्वागत है", // Hindi
    "مرحبا", // Arabic
    "স্বাগতম", // Bengali
    "Bem-vindo", // Portuguese
    "Bienvenue", // French
    "Karibu", // Swahili
    "Tervetuloa", // Finnish
    "Sveiki", // Lithuanian
    "Բարի\u00A0գալուստ", // Armenian
    "Welcome", // English - final
  ];

  // Slot-like shuffle: cycles through words quickly, then slows and lands on final word
  function slotShuffle(words, el, onComplete) {
    console.log("slotShuffle start", words);
    const steps = [40, 40, 50, 60, 70, 90, 110, 140, 180, 240]; // ms delays to simulate slowing
    let step = 0;
    let idx = 0;

    function tick() {
      if (step >= steps.length) {
        // ensure final word (English) is shown
        el.textContent = words[words.length - 1];
        gsap.fromTo(
          el,
          { y: 10, opacity: 0.85 },
          { y: 0, opacity: 1, duration: 0.18, ease: "power2.out" },
        );
        if (typeof onComplete === "function") onComplete();
        return;
      }

      // pick next word (avoid landing on final until the end)
      idx = (idx + 1) % (words.length - 1);
      el.textContent = words[idx];

      // tiny pop per tick for slot feel
      gsap.fromTo(
        el,
        { y: 8, opacity: 0.85 },
        { y: 0, opacity: 1, duration: 0.12, ease: "power2.out" },
      );

      const delay = steps[step];
      step += 1;
      setTimeout(tick, delay);
    }

    tick();
  }

  // Create cleanup function
  function cleanupOverlay() {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
    nav.style.opacity = "";
    nav.style.transform = "";
    // Defensive cleanup to avoid iOS/WebKit rendering artifacts
    try {
      if (overlay) {
        // disable filters/background first to avoid lingering composited layers
        overlay.style.backdropFilter = "none";
        overlay.style.webkitBackdropFilter = "none";
        overlay.style.background = "transparent";
        overlay.style.pointerEvents = "none";
        overlay.style.zIndex = "-1";

        // force a synchronous reflow/repaint before removing
        // eslint-disable-next-line no-unused-expressions
        overlay.offsetHeight;

        // hide immediately to reduce chance of visual artifact
        overlay.style.display = "none";
      }

      // remove from DOM on next frame to let the browser finish compositing
      requestAnimationFrame(() => {
        if (overlay && overlay.parentNode)
          overlay.parentNode.removeChild(overlay);
        document
          .querySelectorAll(".intro-overlay")
          .forEach((el) => el.remove());
      });
    } catch (e) {
      if (overlay && overlay.parentNode)
        overlay.parentNode.removeChild(overlay);
      document.querySelectorAll(".intro-overlay").forEach((el) => el.remove());
    }

    // mark animation as completed only after cleanup to avoid a stuck overlay
    sessionStorage.setItem("landingAnimationPlayed", "true");
  }

  // initial states: welcome sits just below center (will slide up into view)
  gsap.set(welcome, { y: 100, opacity: 1 });

  // Animate sequence
  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  // kick off the slot-style shuffle as the timeline begins
  tl.add(() => slotShuffle(welcomeWords, welcome), 0);

  tl.to(welcome, { y: 0, duration: 2.05, ease: "power3.out" })
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
      "+=0.04",
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
      "exit",
    )
    // slide the overlay itself down off-screen (start almost same time)
    .to(
      overlay,
      {
        y: "100vh", // move overlay off the viewport downward
        duration: 0.9,
        ease: "power3.inOut",
      },
      "exit+=0.05",
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
      "exit+=0.22",
    )
    // Cleanup
    .add(cleanupOverlay);

  setTimeout(cleanupOverlay, 4000);
}
