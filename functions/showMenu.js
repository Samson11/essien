const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

if(navToggle) {
    navToggle.addEventListener('click', showMenu);
}

if(navClose) {
    navClose.addEventListener('click', hideMenu);
}

function showMenu() {
    navMenu.classList.add('show-menu')
}

function hideMenu() {
    navMenu.classList.remove('show-menu')
}

// Remove Mobile Menu
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))