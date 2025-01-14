//hamburger menu na mobiloch
export function initializeHamburgerMenu(hamburger, menu) {
  if (hamburger && menu) {
    hamburger.onclick = function() {
      menu.classList.toggle("responsive");
    };
  }
}