import { gsap } from "gsap";

const OverlayMenu = () => {
  const overlayMenu = document.querySelector(".overlay-menu");
  const burgerIcon = document.querySelector(".header__burger-icon");
  const closeBtn = document.querySelector(".overlay-menu__close-icon");
  let menuIsOpen = false;
  let boxshadowSize;

  // media query to adjust box shadow size
  const largeScreen = window.matchMedia("(min-width: 1200px)");
  largeScreen.matches ? (boxshadowSize = 20) : (boxshadowSize = 12);

  const openMenu = () => {
    document.body.classList.add("menu--is-open");
    overlayMenu.classList.add("overlay-menu--is-open");
    tl.timeScale(1).play();
    menuIsOpen = true;
  };

  const closeMenu = () => {
    tl.timeScale(3).reverse();
    document.body.classList.remove("menu--is-open");
    menuIsOpen = false;
  };

  const removeMenuClass = () => {
    // results in "display: none", to avoid problems when rezising viewport
    overlayMenu.classList.remove("overlay-menu--is-open");
  };

  // gsap animation

  let tl = gsap.timeline({
    duration: 0.5,
    paused: true,
    onReverseComplete: removeMenuClass,
  });

  tl.to(".overlay-menu", {
    x: 0,
    ease: "power4.out",
  })
    .to(".overlay-menu", {
      boxShadow: "0 0 0 " + boxshadowSize + "px #fff inset",
      ease: "back.out(1.7)",
    })
    .from(
      ".overlay-menu__item",
      {
        y: 10,
        opacity: 0,
        stagger: 0.1,
      },
      "=-0.3"
    )
    .from(
      ".overlay-menu__sidebar",
      {
        y: 20,
        opacity: 0,
      },
      "=-0.4"
    )
    .from(".overlay-menu__close-icon", {
      duration: 0.8,
      opacity: 0,
      scale: 0.5,
      ease: "elastic.out(1.2, 0.3)",
    });

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
