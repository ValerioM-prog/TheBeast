const menuBtn = document.querySelector('.burgerMenu');
const menuBtn2 = document.querySelector('.burgerMenu-2');
const menuUnderlay = document.querySelector('.menuUnderlay');
const productMenu = document.querySelector('.mainMenu');

let menuOpen = true;

menuBtn.addEventListener('click', handleMenu);
menuBtn2.addEventListener('click', handleMenu);


function handleMenu() {
    if (!menuOpen) {
        menuBtn.classList.remove('open');
        menuBtn2.classList.remove('open');
        productMenu.classList.remove('open');
        menuUnderlay.classList.remove('open');
        menuOpen = true;
    } else {
        menuBtn.classList.add('open');
        menuBtn2.classList.add('open');
        productMenu.classList.add('open');
        menuUnderlay.classList.add('open');
        menuOpen = false;
    }
}