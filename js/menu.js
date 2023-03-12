(function () {
  const menu = document.querySelector(".nav__link");
  const openButton = document.querySelector(".nav__menu");
  const closeMenu = document.querySelector(".nav__close");

  openButton.addEventListener("click", () => {
    menu.classList.add("nav__link--show");
  });

  closeMenu.addEventListener("click", () => {
    menu.classList.remove("nav__link--show");
  });
})();

const menu = document.querySelector(".nav__link");
const menuLinks = document.querySelectorAll('.nav__link a[href^="#"]');

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", function () {
    menu.classList.remove("nav__link--show");
  });
});

// arrow-arriba
