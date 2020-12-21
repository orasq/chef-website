/* loading CSS in Javascript to automatically inject new css
in browser's memory without having to refresh the browser.
Development performance and practical benefits */
import "../styles/styles.css";

/* lazy loading for images.
Add "lazyload" class to <img> tags, and change 'srcset' to 'data-srcset'*/
import "lazysizes";

// Function import
import HeartIcon from "./modules/HeartIcon";
HeartIcon();

import OverlayMenu from "./modules/OverlayMenu";
OverlayMenu();

import ScrollReveal from "./modules/ScrollReveal";
ScrollReveal();

/* allows webpack's hot modules replacements */
if (module.hot) {
  module.hot.accept();
}
