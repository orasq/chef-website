const LoginDropdown = () => {
  const loginIcon = document.querySelector(".header__login");
  const loginDropdown = document.querySelector(".login-dropdown");

  function openDropdown() {
    loginDropdown.classList.add("login-dropdown--is-displayed");
    setTimeout(() => {
      loginDropdown.classList.add("login-dropdown--is-visible");
    }, 125);
  }

  function closeDropdown() {
    loginDropdown.classList.remove("login-dropdown--is-visible");
    setTimeout(() => {
      loginDropdown.classList.remove("login-dropdown--is-displayed");
    }, 125);
  }

  loginIcon.addEventListener("mouseenter", openDropdown);
  loginIcon.addEventListener("mouseleave", closeDropdown);
};

export default LoginDropdown;
