let btn = document.querySelector('.menu-btn');
let nav = document.querySelector('.navbar');

btn.addEventListener('click', () => {
    nav.classList.toggle('show');
    btn.classList.toggle('rotate');
});