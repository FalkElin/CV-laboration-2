window.addEventListener("load", main);
/** start of program */
function main() {
  addEventListeners();
}

/** declares events like onclick, onmouseleave on specified elements */
function addEventListeners() {
  let aboutButton2 = document.getElementsByClassName("aboutbutton2");
  for (let i = 0; i < aboutButton2.length; i++) {
    aboutButton2[i].onclick = () =>
      scrollToSection("hidden-scroll-div-about-page");
  }

  let aboutButton = document.getElementsByClassName("aboutbutton");
  for (let i = 0; i < aboutButton.length; i++) {
    aboutButton[i].onclick = () => scrollToSection("about-page");
  }

  let portfolioButton2 = document.getElementsByClassName("portfoliobutton2");
  for (let i = 0; i < portfolioButton2.length; i++) {
    portfolioButton2[i].onclick = () =>
      scrollToSection("hidden-scroll-div-portfolio-page");
  }

  let portfolioButton = document.getElementsByClassName("portfoliobutton");
  for (let i = 0; i < portfolioButton.length; i++) {
    portfolioButton[i].onclick = () => scrollToSection("portfolio-page");
  }

  let contactButton2 = document.getElementsByClassName("contactbutton2");
  for (let i = 0; i < contactButton2.length; i++) {
    contactButton2[i].onclick = () =>
      scrollToSection("hidden-scroll-div-contact-page");
  }

  let contactButton = document.getElementsByClassName("contactbutton");
  for (let i = 0; i < contactButton.length; i++) {
    contactButton[i].onclick = () => scrollToSection("contact-page");
  }

  let homebutton = document.getElementsByClassName("homebutton");
  for (let i = 0; i < homebutton.length; i++) {
    homebutton[i].onclick = () => scrollToSection("home-page");
  }

  let logo = document.getElementsByClassName("logoscroll");
  for (let i = 0; i < logo.length; i++) {
    logo[i].onclick = () => scrollToSection("home-page");
  }

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
  const offset = 0;
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

  if (scroll > offset) {
    rightArrow.classList.add("hidden-arrow-style");
  }
  if (scroll === right) {
    rightArrow.classList.remove("hidden-arrow-style");
  }
  if (scroll === left) {
    rightArrow.classList.remove("hidden-arrow-style");
  }
}

function showArrow(e) {}

//makes arrow onclick scroll left or right
function scrollLeft(e) {
  let container = e.target.closest(".scroll-container");
  container.scrollLeft -= container.clientWidth;
}

function scrollRight(e) {
  let container = e.target.closest(".scroll-container");
  container.scrollLeft += container.clientWidth;
}

let i = 0;
let text = `front end-devloper`;
let speed = 100;

console.log(text);

function typeWriter() {
  if (i < text.length) {
    document.querySelector(".h2").innerHTML += text.charAt(i);
    i++;

    setTimeout(typeWriter, speed);
  }
}
