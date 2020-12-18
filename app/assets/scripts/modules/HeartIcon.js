const HeartIcon = () => {
  const hearts = document.querySelectorAll(".icon__heart");

  function toggleClass(e) {
    e.preventDefault(); // avoid page's change when clicking on the icon
    this.classList.toggle("icon__heart--is-active");
  }

  hearts.forEach((el) => {
    el.addEventListener("click", toggleClass);
  });
};

export default HeartIcon;
