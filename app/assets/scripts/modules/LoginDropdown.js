const LoginDropdown = () => {
  const headerLogin = document.querySelector(".header__login");
  const loginDropdown = document.querySelector(".login-dropdown");

  function openDropdown() {
    // display block
    loginDropdown.classList.add("login-dropdown--is-displayed");
    // opacity 1
    setTimeout(() => {
      loginDropdown.classList.add("login-dropdown--is-visible");
    }, 125);
    // add event listener for click on the document to close dropdown
    document.addEventListener("click", checkClickOutside);
  }

  function closeDropdown() {
    // remove dropdown classes
    loginDropdown.classList.remove("login-dropdown--is-visible");
    setTimeout(() => {
      loginDropdown.classList.remove("login-dropdown--is-displayed");
    }, 125);
    // remove event listener on the document
    document.removeEventListener("click", checkClickOutside);
  }

  /* when icon is clicked, the mouseleave event listener is removed
  in order to keep the dropdown in its opened state */
  function removeMouseLeave() {
    headerLogin.removeEventListener("mouseleave", closeDropdown);
  }

  function addMouseLeave() {
    headerLogin.addEventListener("mouseleave", closeDropdown);
    closeDropdown();
  }

  // check if clicked element is login's icon or not
  // if not, close the dropdown
  function checkClickOutside(e) {
    if (e.target !== headerLogin && !headerLogin.contains(e.target)) {
      addMouseLeave();
    }
  }

  // on hover
  headerLogin.addEventListener("mouseenter", openDropdown);
  headerLogin.addEventListener("mouseleave", closeDropdown);

  // on click
  headerLogin.addEventListener("click", removeMouseLeave);
};

export default LoginDropdown;
