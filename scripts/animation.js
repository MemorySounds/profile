// GSAP-powered landing page intro animation.
//
// The overlay markup lives statically in index.html (.intro-overlay) and is
// shown instantly via CSS (html.intro-pending) so it paints on the very first
// frame — no flash of un-animated content while GSAP/assets download. This
// script only drives the motion and then lifts the overlay to reveal the page.
//
// The motion waits until the page underneath has settled (see whenPageSettled),
// so nothing reflows or repaints behind the overlay mid-animation. If that takes
// a moment, a CSS loading line shows in the meantime (.intro-loader).

// Never hold the intro back longer than this waiting for the page to settle.
const MAX_WAIT_MS = 2500;

// Resolves once the things that would otherwise change under the overlay while
// it animates (the Sora font and the hero portrait) are ready, or after
// MAX_WAIT_MS, whichever comes first. Never rejects.
function whenPageSettled() {
  const tasks = [];
  if (document.fonts && typeof document.fonts.load === "function") {
    tasks.push(document.fonts.load("400 1em Sora"));
    tasks.push(document.fonts.load("700 1em Sora"));
  }
  const portrait = document.querySelector(".hero-image-wrapper img");
  if (portrait && typeof portrait.decode === "function") {
    tasks.push(portrait.decode());
  }
  const timeout = new Promise((resolve) => setTimeout(resolve, MAX_WAIT_MS));
  return Promise.race([Promise.allSettled(tasks), timeout]);
}

// Finishes and fades out the loading line if it had become visible, otherwise
// just removes it. Resolves once it's gone.
function dismissLoader() {
  const loader = document.getElementById("intro-loader");
  if (!loader) return Promise.resolve();

  const isVisible = parseFloat(getComputedStyle(loader).opacity) > 0.05;
  if (!isVisible || typeof loader.getAnimations !== "function") {
    loader.remove();
    return Promise.resolve();
  }

  // Freeze the CSS animations where they are, then let GSAP take over.
  loader.getAnimations({ subtree: true }).forEach((animation) => {
    try {
      animation.commitStyles();
    } catch (_) {
      // Not rendered: nothing to freeze.
    }
    animation.cancel();
  });

  return new Promise((resolve) => {
    gsap
      .timeline({
        onComplete: () => {
          loader.remove();
          resolve();
        },
      })
      .to(loader.firstElementChild, {
        scaleX: 1,
        duration: 0.2,
        ease: "power2.out",
      })
      .to(loader, { opacity: 0, duration: 0.25, ease: "power1.out" }, "-=0.1");
  });
}

export function initAnimation() {
  const html = document.documentElement;
  const nav = document.querySelector(".top-nav");
  const overlay = document.getElementById("intro-overlay");
  const welcome = document.getElementById("intro-welcome");

  // Tears down the intro and leaves the page visible, usable and scrollable.
  // Safe to call multiple times.
  const reveal = () => {
    html.classList.remove("intro-pending");
    document.body.style.overflow = "";
    html.style.overflow = "";
    if (overlay) {
      // Drop filters before hiding to avoid lingering iOS/WebKit composited layers.
      overlay.style.backdropFilter = "none";
      overlay.style.webkitBackdropFilter = "none";
      overlay.style.background = "transparent";
      overlay.style.display = "none";
    }
    if (nav) {
      nav.style.opacity = "1";
      nav.style.transform = "";
    }
    sessionStorage.setItem("landingAnimationPlayed", "true");
  };

  // Skip the intro (and just show the page) if it already played this session,
  // the markup is missing, or GSAP failed to load. The page is never left stuck
  // behind the overlay.
  if (
    sessionStorage.getItem("landingAnimationPlayed") ||
    !overlay ||
    !welcome ||
    !nav ||
    typeof gsap === "undefined"
  ) {
    reveal();
    return;
  }

  // Keep scroll locked while the intro plays (CSS already does this via
  // html.intro-pending; this is belt-and-braces).
  document.body.style.overflow = "hidden";
  html.style.overflow = "hidden";

  // hide nav while intro runs
  nav.style.opacity = "0";
  nav.style.transform = "translateY(-100%)";

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
    "Բարի գալուստ", // Armenian
    "Welcome", // English - final
  ];

  // Slot-like shuffle: cycles through words quickly, then slows and lands on final word
  function slotShuffle(words, el, onComplete) {
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

  // initial state: welcome sits just below center, hidden until the motion
  // starts. Matches the CSS start state so there's no flicker.
  gsap.set(welcome, { y: 100, opacity: 0 });

  // Animate sequence (built paused; it starts once the page has settled)
  const tl = gsap.timeline({ paused: true, defaults: { ease: "power2.out" } });

  // show the word and kick off the slot-style shuffle as the timeline begins
  tl.set(welcome, { opacity: 1 }, 0);
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
    .to(welcome, { y: 80, duration: 0.7, ease: "power2.in" }, "exit")
    // slide the overlay itself down off-screen (start almost same time)
    .to(
      overlay,
      { y: "100vh", duration: 0.9, ease: "power3.inOut" },
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
    .add(reveal);

  const introMs = tl.duration() * 1000;

  // Start once the page has settled and the loading line (if it showed) has
  // faded. The safety net is armed when the motion starts, so a slow start
  // can't cut the intro short.
  whenPageSettled()
    .then(dismissLoader)
    .catch(() => {})
    .then(() => {
      tl.play();
      setTimeout(reveal, introMs + 1500);
    });

  // Last resort: never leave the overlay stuck if something above stalls.
  setTimeout(reveal, MAX_WAIT_MS + 1000 + introMs + 1500);
}
