/* loading CSS in Javascript to automatically inject new css
in browser's memory without having to refresh the browser.
Development performance and practical benefits */
import "../styles/styles.css";

/* lazy loading for images.
Add "lazyload" class to <img> tags, change 'src' to 'data-src' and 'srcset' to 'data-srcset'*/
import "lazysizes";

// Function import
import ImgLazyLoad from "./modules/ImgLazyLoad";
ImgLazyLoad();

import HeartIcon from "./modules/HeartIcon";
HeartIcon();

import OverlayMenu from "./modules/OverlayMenu";
OverlayMenu();

import ScrollReveal from "./modules/ScrollReveal";
ScrollReveal();

import LoginDropdown from "./modules/LoginDropdown";
LoginDropdown();

import Loading from "./modules/Loading";
Loading();

/* allows webpack's hot modules replacements */
if (module.hot) {
  module.hot.accept();
}
