const menuBtn = document.querySelector('.burgerMenu');
const menuBtn2 = document.querySelector('.burgerMenu-2');
const menuUnderlay = document.querySelector('.menuUnderlay');
const productMenu = document.querySelector('.mainMenu');
let openSubMenuZ = document.querySelectorAll('.open-submenu');
let closeSubMenuZ = document.querySelectorAll('.close-submenu');
let subMenuZ = document.querySelectorAll('nav.submenu');

let menuOpen = true;
let subMenuOpen = false;

menuBtn.addEventListener('click', handleMenu);
menuBtn2.addEventListener('click', handleMenu);


if (subMenuOpen === false) {
    for (let i = 0; i < closeSubMenuZ.length; i++) {
        closeSubMenuZ[i].removeEventListener('click', () => {
            subMenuZ[i].classList.toggle('open');
        });
        openSubMenuZ[i].addEventListener('click', () => {
            subMenuZ[i].classList.toggle('open');
        });
    }
    subMenuOpen = true;
} else {
    for (let i = 0; i < closeSubMenuZ.length; i++) {
        openSubMenuZ[i].removeEventListener('click', () => {
            subMenuZ[i].classList.toggle('open');
        });
        closeSubMenuZ[i].addEventListener('click', () => {
            subMenuZ[i].classList.toggle('open');
        });
    }
    subMenuOpen = false;
}

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