window.addEventListener("load", main);
/** start of program */
function main() {
  addEventListeners();
}

/** declares event like onclick, onmouseleave on specified elements */
function addEventListeners() {
  const aboutbutton = document.getElementById("aboutbutton");
  aboutbutton.onclick = () => scrollToSection("about-page");

  const portfoliobutton = document.getElementById("portfoliobutton");
  portfoliobutton.onclick = () => scrollToSection("portfolio-page");

  const contactbutton = document.getElementById("contactbutton");
  contactbutton.onclick = () => scrollToSection("contact-page");

  const homebutton = document.getElementById("homebutton");
  homebutton.onclick = () => scrollToSection("home-page");

  typeWriter();

  const HomePageText = document.querySelector(".photo-text");
  HomePageText.onmouseover = () => changeImageOnHover(".photo-text");
  HomePageText.onmouseleave = () => changeImageBackOnHover(".photo-text");

  const horizontalScrollPortfolioPage = document.querySelector(
    ".portfolio-photo-div"
  );
  horizontalScrollPortfolioPage.onscroll = handleScroll;

  const horizontalScrollAboutPage = document.querySelector(".about-img-div");
  horizontalScrollAboutPage.onscroll = handleScroll;

  let arrowButtonLeft = document.getElementsByClassName("arrow-button-left");
  for (let i = 0; i < arrowButtonLeft.length; i++) {
    arrowButtonLeft[i].onclick = scrollLeft;
  }

  let arrowButtonRight = document.getElementsByClassName("arrow-button-right");
  for (let i = 0; i < arrowButtonRight.length; i++) {
    arrowButtonRight[i].onclick = scrollRight;
  }
}

function scrollToSection(nextSection) {
  document.getElementById(nextSection).scrollIntoView({ behavior: "smooth" });
}

function changeTextOnHover(changeText) {
  document.getElementById(changeText).classList.add("hidden-photo-style");
}

function changeImageOnHover() {
  const photo = document.getElementById("home-page-photo");
  photo.classList.add("hidden-image-style");
  photo.style.transition = "1s";
}

function changeImageBackOnHover() {
  const photo = document.getElementById("home-page-photo");
  photo.classList.remove("hidden-image-style");
  photo.style.transition = "20s";
}

//Scroll function shows and hides arrows
function handleScroll(e) {
  const offset = 50;
  const left = 0;
  const right = e.target.scrollWidth - e.target.clientWidth;
  const scroll = e.target.scrollLeft;
  const rightArrow = e.target.querySelector(".arrow-button-right");
  const leftArrow = e.target.querySelector(".arrow-button-left");

  if (scroll > left + offset) {
    leftArrow.classList.add("hidden-arrow-style");
  } else {
    leftArrow.classList.remove("hidden-arrow-style");
  }

  if (scroll === left) {
    rightArrow.classList.add("hidden-arrow-style");
  }
  if (scroll === right) {
    rightArrow.classList.remove("hidden-arrow-style");
  } else if (scroll > offset) {
    rightArrow.classList.add("hidden-arrow-style");
  } else {
    rightArrow.classList.remove("hidden-arrow-style");
  }
}

//makes arrow onclick scroll left or right
function scrollLeft(e) {
  let container = e.target.closest(".scroll-container");
  container.scrollLeft -= container.clientWidth;
}

function scrollRight(e) {
  let container = e.target.closest(".scroll-container");
  container.scrollLeft += container.clientWidth;
}

var i = 0;
var text = `Elin Falk,
 front end-devloper`;
var speed = 100;

console.log(text);

function typeWriter() {
  if (i < text.length) {
    document.querySelector(".photo-text").innerHTML += text.charAt(i);
    i++;

    setTimeout(typeWriter, speed);
  }
}
