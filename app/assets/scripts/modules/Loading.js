import { gsap } from "gsap";

const Loading = () => {
  // const loadingScreen = document.querySelector(".loading");
  const body = document.querySelector("body");

  let tl = gsap.timeline({ defaults: { ease: "power4.out" } });

  const hideLoadingScreen = () => {
    // gsap animation
    tl.to(".loading__wrap", {
      duration: 0.5,
      y: -200,
      opacity: 0,
    })
      .to(".loading__front-bg", {
        duration: 0.4,
        yPercent: -100,
      })
      .to(
        ".loading__back-bg",
        {
          duration: 0.4,
          yPercent: -100,
          onComplete: removeClass,
        },
        "=-0.2"
      );
  };

  // removing class after animation is complete
  const removeClass = () => {
    body.classList.remove("is-loading");
  };

  window.addEventListener("load", hideLoadingScreen);
};

export default Loading;
