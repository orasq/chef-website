const ImgLazyLoad = () => {
  const images = document.querySelectorAll("img");

  const addClassToImages = () => {
    console.log("run");
    images.forEach((img) => {
      img.classList.add("lazyload");
    });
  };
  addClassToImages();
};

export default ImgLazyLoad;
