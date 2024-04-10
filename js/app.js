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

const panigationLeft = document.querySelector(".panigation_left");
const panigationRight = document.querySelector(".panigation_right");
const infoCards = document.querySelector(".portfolio-section-info-cards");

panigationRight.onclick = function () {
  infoCards.scrollLeft += 165;
  updatePanigationOpacity();
};

panigationLeft.onclick = function () {
  infoCards.scrollLeft -= 165;
  updatePanigationOpacity();
};

infoCards.addEventListener("scroll", function () {
  updatePanigationOpacity();
});

function updatePanigationOpacity() {
  const maxScrollLeft = infoCards.scrollWidth - infoCards.offsetWidth;
  if (infoCards.scrollLeft === 0) {
    panigationLeft.style.opacity = "0.3";
  } else {
    panigationLeft.style.opacity = "1";
  }
  if (infoCards.scrollLeft >= maxScrollLeft) {
    panigationRight.style.opacity = "0.3";
  } else {
    panigationRight.style.opacity = "1";
  }
}
