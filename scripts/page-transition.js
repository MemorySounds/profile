(() => {
  const PENDING_KEY = "tileTransitionPending";
  const PRELOAD_CLASS = "tile-transition-pending";
  const OVERLAY_ID = "tile-transition-overlay";
  const EXIT_DURATION = 0.45;
  const EXIT_STAGGER = 0.06;
  const EXIT_FALLBACK_MS = 1400;

  let isNavigating = false;

  const prefersReducedMotion =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // The overlay + tiles are rendered statically in each page's HTML so they can
  // paint already-covering on the first frame; just grab that element.
  function getOverlay() {
    return document.getElementById(OVERLAY_ID);
  }

  function removePreloadClass() {
    document.documentElement.classList.remove(PRELOAD_CLASS);
  }

  function navigateWithTiles(url) {
    if (!url || isNavigating) return;

    isNavigating = true;

    let hasNavigated = false;
    const goTo = () => {
      if (hasNavigated) return;
      hasNavigated = true;
      window.location.href = url;
    };

    if (prefersReducedMotion || typeof window.gsap === "undefined") {
      // Degrade gracefully: skip tile transition if animation engine is unavailable.
      goTo();
      return;
    }

    const overlay = getOverlay();
    const tiles = overlay
      ? overlay.querySelectorAll(".tile-transition-tile")
      : [];
    if (!overlay || tiles.length === 0) {
      goTo();
      return;
    }

    overlay.style.display = "flex";
    window.gsap.set(tiles, { yPercent: 100 });
    try {
      sessionStorage.setItem(PENDING_KEY, "1");
    } catch (_) {
      // Ignore storage failures and continue.
    }

    const fallbackNav = window.setTimeout(goTo, EXIT_FALLBACK_MS);
    requestAnimationFrame(() => {
      window.gsap.to(tiles, {
        yPercent: 0,
        duration: EXIT_DURATION,
        ease: "power3.inOut",
        stagger: EXIT_STAGGER,
        onComplete: () => {
          window.clearTimeout(fallbackNav);
          goTo();
        },
      });
    });
  }

  function runEntryTransition() {
    const isPending = (() => {
      try {
        return sessionStorage.getItem(PENDING_KEY) === "1";
      } catch (_) {
        return false;
      }
    })();

    if (!isPending) {
      removePreloadClass();
      return;
    }

    try {
      sessionStorage.removeItem(PENDING_KEY);
    } catch (_) {
      // Ignore storage failures and continue.
    }

    const overlay = getOverlay();
    if (!overlay) {
      removePreloadClass();
      return;
    }
    const tiles = overlay.querySelectorAll(".tile-transition-tile");

    overlay.style.display = "flex";

    if (prefersReducedMotion || typeof window.gsap === "undefined") {
      removePreloadClass();
      overlay.style.display = "none";
      return;
    }

    window.gsap.set(tiles, { yPercent: 0 });
    requestAnimationFrame(() => {
      removePreloadClass();
      window.gsap.to(tiles, {
        yPercent: -100,
        duration: 0.55,
        ease: "power3.inOut",
        stagger: 0.05,
        onComplete: () => {
          overlay.style.display = "none";
          window.gsap.set(tiles, { yPercent: 100 });
        },
      });
    });
  }

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[data-page-transition]");
    if (!link) return;
    if (event.defaultPrevented) return;
    if (link.target && link.target !== "_self") return;
    if (link.hasAttribute("download")) return;

    event.preventDefault();
    navigateWithTiles(link.href);
  });

  window.navigateWithTiles = navigateWithTiles;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", runEntryTransition, {
      once: true,
    });
  } else {
    runEntryTransition();
  }

  // Safety fallback so pages are never left hidden.
  setTimeout(removePreloadClass, 1200);
})();
