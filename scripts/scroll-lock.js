let _locked = false;
let _savedScrollY = 0;
let _useFixed = false;
let _allowSelector = null;

function _preventBodyTouch(e) {
  if (_allowSelector && e.target.closest(_allowSelector)) return;
  e.preventDefault();
}

export function lockScroll({ useFixed = false, allowSelector = null } = {}) {
  if (_locked) return;
  _locked = true;
  _useFixed = useFixed;
  _allowSelector = allowSelector;
  _savedScrollY = window.scrollY || window.pageYOffset;

  if (_useFixed) {
    document.body.style.position = "fixed";
    document.body.style.top = `-${_savedScrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.documentElement.style.width = "100%";
  } else {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  }

  document.addEventListener("touchmove", _preventBodyTouch, { passive: false });
  document.documentElement.classList.add("scroll-locked");
  document.body.classList.add("scroll-locked");
}

export function unlockScroll() {
  if (!_locked) return;
  document.removeEventListener("touchmove", _preventBodyTouch, {
    passive: false,
  });

  if (_useFixed) {
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.documentElement.style.width = "";
    window.scrollTo(0, _savedScrollY);
  } else {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }

  document.documentElement.classList.remove("scroll-locked");
  document.body.classList.remove("scroll-locked");

  _locked = false;
  _useFixed = false;
  _allowSelector = null;
  _savedScrollY = 0;
}

export function isScrollLocked() {
  return _locked;
}
