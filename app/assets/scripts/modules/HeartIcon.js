const HeartIcon = () => {
  const hearts = document.querySelectorAll(".icon__heart");

  function toggleClass() {
    console.log("works !");
    this.classList.toggle("icon__heart--is-active");
  }

  hearts.forEach((el) => {
    el.addEventListener("click", toggleClass);
  });
};

export default HeartIcon;
