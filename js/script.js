const menu = document.querySelector("#menu");
const hamburger = document.querySelector(".menu-btn");

menu.style.backgroundImage = "url(../image/Overlay.jpg)";

function openMenu() {
  menu.style.display = "block";
  hamburger.style.display = "none";
}

function closeMenu() {
  menu.style.display = "none";
  hamburger.style.display = "block";
}
