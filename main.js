// Import SASS File
import "./style.scss";
// JavaScript for dropdown menu functionality
document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".has-dropdown");

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  });
});

const searchBox = document.querySelector(".searchBox");
const searchInput = document.querySelector(".searchInput");

const searchButton = document.querySelector(".searchButton");
const crossButton = document.querySelector(".crossButton");

const navbar = document.querySelector(".navbar");
const gamingSection = document.querySelector(".gaming-section");
const body = document.querySelector("body");

searchButton.addEventListener("click", function () {
  navbar.style.display = "none";
  searchInput.style.display = "block";
  searchInput.style.width = "600px";
  searchInput.focus();
  searchBox.style.transform = "translate(-50%, 50%)";
  searchInput.style.transition = "1.4s";
  searchInput.style.background = "#DE4E10";
  searchInput.style.borderRadius = "40px";
  searchButton.style.display = "none";
  crossButton.style.display = "block";

  if (window.matchMedia("(max-width: 576px)").matches) {
    // navbar.style.background = "red";
    searchInput.style.width = "300px";
    // gamingSection.style.marginTop = "100px";
    searchBox.style.transform = "translate(0%, -100%)";
    searchBox.style.position = "absolute";
    searchBox.style.left = "180px";
    // searchBox.style.right = "0";
    crossButton.style.position = "absolute";
    crossButton.style.left = "305px";
    crossButton.style.top = "5px";
    searchButton.style.position = "absolute";
    searchButton.style.position = "absolute";
    searchButton.style.left = "-10px";
    searchButton.style.top = "100px";

    gamingSection.style.position = "absolute";
    gamingSection.style.top = "220px";
    gamingSection.style.right = "50px";
  } else {
    gamingSection.style.position = "absolute";
    gamingSection.style.top = "100px";
    gamingSection.style.right = "820px";

    // searchBox.style.transform = "translate(-50%, 50%)";
  }
});

crossButton.addEventListener("click", function () {
  searchInput.style.width = "0px";
  searchInput.style.display = "none";
  searchInput.value = "";

  searchButton.style.display = "block";
  navbar.style.display = "block";
  crossButton.style.display = "none";

  if (window.matchMedia("(max-width: 576px)").matches) {
    gamingSection.style.position = "absolute";
    gamingSection.style.top = "220px";
    gamingSection.style.right = "50px";
  } else {
    gamingSection.style.position = "absolute";
    gamingSection.style.top = "100px";
    gamingSection.style.right = "820px";
  }
});
