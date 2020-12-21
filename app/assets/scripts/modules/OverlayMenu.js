const OverlayMenu = () => {
  const burgerIcon = document.querySelector(".header__burger-icon");
  const closeBtn = document.querySelector(".overlay-menu__close-icon");
  const menu = document.querySelector(".overlay-menu");
  let menuIsOpen = false;

  function openMenu() {
    document.body.classList.add("menu--is-open");
    menu.classList.add("overlay-menu--is-open");
    menuIsOpen = true;
  }

  function closeMenu() {
    document.body.classList.remove("menu--is-open");
    menu.classList.remove("overlay-menu--is-open");
    menuIsOpen = false;
  }

  // open menu
  burgerIcon.addEventListener("click", openMenu);

  // close menu (click + esc)
  closeBtn.addEventListener("click", closeMenu);

  window.addEventListener("keydown", (e) => {
    if (menuIsOpen && e.key === "Escape") {
      closeMenu();
    }
  });
};

export default OverlayMenu;
