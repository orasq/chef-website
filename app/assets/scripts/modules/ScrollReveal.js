import { throttle, debounce } from "lodash";

const ScrollReveal = () => {
  const itemsToAnimate = document.querySelectorAll("[data-scroll-reveal]");
  let windowHeight = window.innerHeight;

  // initially hide elements
  const hideOnLoad = () => {
    itemsToAnimate.forEach((el) => {
      // hide element
      el.classList.add("scroll-reveal");
      // to check if function need to be called or not
      el.isRevealed = false;
      // get last element, to stop event listener if every items has been revealed
      itemsToAnimate[itemsToAnimate.length - 1].isLastItem = true;
    });
  };
  hideOnLoad();

  const calcCaller = () => {
    itemsToAnimate.forEach((el) => {
      // if element has not already been revealed
      if (!el.isRevealed) {
        calculateScroll(el);
      }
    });
  };

  const calculateScroll = (el) => {
    // calculate, only if element is close of the bottom of the screen
    if (window.scrollY + windowHeight > el.offsetTop) {
      let elementVerticalPosition = el.getBoundingClientRect().top;
      // calculate at which percentage of the window's height the element currently is
      let scrollPosition = (elementVerticalPosition / windowHeight) * 100;
      // if element is at more than 85% of the window's height, reveal it
      if (scrollPosition < 85) {
        el.isRevealed = true;
        el.classList.add("scroll-reveal--is-visible");
        // if last item, remove event listener
        if (el.isLastItem) {
          window.removeEventListener("scroll", scrollThrottle);
        }
      }
    }
  };

  // use throttle to reduce number of time the function is called
  const scrollThrottle = throttle(calcCaller, 200);
  window.addEventListener("scroll", scrollThrottle);

  // use debounce to run function only when action is finished
  const resizeDebounce = debounce(() => {
    windowHeight = window.innerHeight;
  }, 400);
  // recalculate window's height if window is being resized
  window.addEventListener("resize", resizeDebounce);
};

export default ScrollReveal;
