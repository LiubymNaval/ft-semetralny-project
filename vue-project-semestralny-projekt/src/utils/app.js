//hamburger menu na mobiloch
export function initializeHamburgerMenu(hamburger, menu) {
  if (hamburger && menu) {
    hamburger.onclick = function() {
      menu.classList.toggle("responsive");
    };
  }
}
//alert
//hamburger.onclick = function() {myNav()};
// const nameInput = document.getElementById('meno');
// const emailInput = document.getElementById('email');
// const messageInput = document.getElementById('sprava');
// const submitButton = document.getElementById('odoslat');
// submitButton.addEventListener('click', function() {
//   if (nameInput.value !== '' && emailInput.value !== '' && messageInput.value !== '') {
//     alert('Dakujeme, vaše údaje boli spracované. Určite sa s vami skontaktujeme e-mailom');
//   } else {
//     alert('Prosím, vyplňte všetky polia pred odoslaním');
//   }
// });