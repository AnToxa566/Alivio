/* ====== WOW ====== */

new WOW().init();


/* ====== NAVIGATION BURGER ====== */

const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');
const navWrapper = document.querySelector('.header__nav-wrapper');

const body = document.querySelector('body');

burger.addEventListener('click', event => {
    event.preventDefault();

    burger.classList.toggle('header__burger--active');
    nav.classList.toggle('header__nav--active');
    navWrapper.classList.toggle('header__nav-wrapper--active');

    body.classList.toggle('lock');
    body.classList.toggle('blackout');
})