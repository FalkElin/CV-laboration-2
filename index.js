window.addEventListener("load", main);
/** start of program */
function main() {
  addEventListeners();
}

/** declares event like onclick, onmouseleave on specified elements */
function addEventListeners() {
  const aboutbutton = document.getElementById("aboutbutton");
  aboutbutton.onclick = scrollToSecondPage;

  const HomePageText = document.getElementById("home-page-text");
  HomePageText.onmouseover = changeTextOnHover;
  HomePageText.onmouseleave = changeTextBack;

  const Title = document.getElementById("title");
  Title.onmouseover = changeTitle;
  Title.onmouseleave = changeTitleBack;

  const Title2 = document.getElementById("title2");
  Title2.onmouseover = changeTitle2;
  Title2.onmouseleave = changeTitleBack2;

  const text2 = document.getElementById("home-page-second-text");
  text2.onmouseover = changeSecondTextOnHover;
  text2.onmouseleave = changeSecondTextBack;
}

function scrollToSecondPage() {
  document.getElementById("about-page").scrollIntoView({ behavior: "smooth" });
}

function changeTextOnHover() {
  const element = document.getElementById("home-page-text");
  element.classList.add("hidden-photo-style");
  element.style.transition = "all 1s";
  const photo = document.getElementById("home-page-photo");
  photo.classList.add("hidden-image-style");
  photo.style.transition = "2s";
}

function changeTextBack() {
  const element = document.getElementById("home-page-text");
  element.classList.remove("hidden-photo-style");
}

function changeSecondTextOnHover() {
  const element = document.getElementById("home-page-second-text");
  element.classList.add("hidden-photo-style");
  element.style.transition = "all 2s";
}

function changeSecondTextBack() {
  const element = document.getElementById("home-page-second-text");
  element.classList.remove("hidden-photo-style");
}

function changeTitle() {
  const element = document.getElementById("title");
  element.classList.add("hidden-title-style");
  element.style.transition = "all 2s";
}

function changeTitleBack() {
  const element = document.getElementById("title");
  element.classList.remove("hidden-title-style");
}

function changeTitle2() {
  const element = document.getElementById("title2");
  element.classList.add("hidden-title2-style");
  element.style.transition = "all 2s";
}

function changeTitleBack2() {
  const element2 = document.getElementById("title2");
  element2.classList.remove("hidden-title2-style");
}
