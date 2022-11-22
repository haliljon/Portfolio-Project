const menu = document.querySelector('#menu');
const hamburger = document.querySelector('.menu-btn');

menu.style.backgroundColor = '#ffffff';

function openMenu() {
  menu.style.display = 'block';
  hamburger.style.display = 'none';
}

function closeMenu() {
  menu.style.display = 'none';
  hamburger.style.display = 'block';
}

document.querySelector('.menu-btn').addEventListener(openMenu());
document.querySelector('#close-btn').addEventListener(closeMenu());
