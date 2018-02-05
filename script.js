/*let menu = (function(options) {
    let button = document.querySelector(options.button);
    let menu = document.querySelector(options.menu);
    let body = document.querySelector('body');

    let toggleMenu = function(e) {
        button.classList.toggle('button__container--active');
        menu.classList.toggle('overlay--open');
        body.classList.toggle('body-active-menu');
    }

    let addListeners = function() {
        button.addEventListener('click', toggleMenu);
    }

    return {
        init: addListeners
    };
})*/

const openMenu = document.querySelector("#openMenu");
const overlay = document.querySelector('.overlay');
const closebtn = document.querySelector('.overlay-close');
const wrapper = document.querySelector('.wrapper');
const hamburgerMenuLink = document.querySelector('.hamburger-menu-link');

openMenu.addEventListener('click', function() {
overlay.classList.add('active');
wrapper.classList.add('locked');
hamburgerMenuLink.add('hamburger-menu-link--clear');
})

closebtn.addEventListener('click', function() {
overlay.classList.remove('active');
})
