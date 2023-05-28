/* ====== WOW ====== */

new WOW().init();


/* ====== NAVIGATION BURGER ====== */

const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');

burger.addEventListener('click', event => {
    event.preventDefault();

    burger.classList.toggle('header__burger--active');
    nav.classList.toggle('header__nav--active');
})