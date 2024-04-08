window.addEventListener("scroll", () => {
  const mainNav = document.querySelector(".main-header__navbar");
  mainNav.classList.toggle("active", window.scrollY > 0);
});

const scrollExplore = document.querySelector(".scroll-explore-before");

const newImageSrc = "./assets/header/scroll-explore-after.svg";

const originalImageSrc = scrollExplore.getAttribute("src");

scrollExplore.addEventListener("mouseover", function () {
  scrollExplore.setAttribute("src", newImageSrc);
});

scrollExplore.addEventListener("mouseout", function () {
  scrollExplore.setAttribute("src", originalImageSrc);
});
