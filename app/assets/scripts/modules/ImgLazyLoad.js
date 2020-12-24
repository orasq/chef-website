const ImgLazyLoad = () => {
  const images = document.querySelectorAll("img");

  const addClassToImages = () => {
    images.forEach((img) => {
      img.classList.add("lazyload");
    });
  };
  addClassToImages();
};

export default ImgLazyLoad;
