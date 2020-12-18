const OverlayMenu = () => {
  const burgerIcon = document.querySelector(".header__burger-icon");
  const closeBtn = document.querySelector(".overlay-menu__close-icon");
  const menu = document.querySelector(".overlay-menu");

  function openMenu() {
    document.body.classList.add("menu--is-open");
    menu.classList.add("overlay-menu--is-open");
    console.log(menu);
  }

  function closeMenu() {
    document.body.classList.remove("menu--is-open");
    menu.classList.remove("overlay-menu--is-open");
  }

  burgerIcon.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
};

export default OverlayMenu;
