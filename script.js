/*let menu = (function(class) {
    let button = document.querySelector(class.button);
    let menu = document.querySelector(class.menu);
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
})({
    button:'#toggle',
    menu: '#menu'
})*/


const openMenu = document.querySelector("#openMenu");
const overlay = document.querySelector('.overlay');
const closebtn = document.querySelector('.overlay-close');
const wrapper = document.querySelector('.wrapper');
const hamburgerMenuLink = document.querySelector('.hamburger-menu-link');
const linkList = document.querySelector('.overlay-menu__list');
const composition = document.querySelector('.composition');
const compositionMenu = document.querySelector('.composition__menu');
const compositionMenuList = document.querySelector('.composition__menu-list');

function toogleMenu() {
    
    overlay.classList.toggle('active');
    wrapper.classList.toggle('locked');
    hamburgerMenuLink.classList.toggle('hamburger-menu-link--clear');
}

function compMenu() {    
    compositionMenu.classList.add('composition__menu--active');
    composition.classList.add('composition__menu--active');
}

function menuRemove() {
    compositionMenu.classList.remove('composition__menu--active');
    composition.classList.remove('composition__menu--active');
}

composition.addEventListener('mouseover', function() {
    compMenu();
    console.log('работает');
})

composition.addEventListener('mouseout', function() {
    menuRemove();
    console.log('мышь ушла');
})

openMenu.addEventListener('click', function(event) {
    event.preventDefault();
    toogleMenu();
})

closebtn.addEventListener('click', function(event) {
    event.preventDefault();
    toogleMenu();
})

linkList.addEventListener('click', function(e){
    e.preventDefault();
    if(e.target.className === 'overlay-menu__link'){
        toogleMenu();
    }
})

compositionMenuList.addEventListener('click', function(event){
    event.preventDefault();
    
})