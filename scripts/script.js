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
const compositionClose = document.querySelector('.composition__menu-link-close');
const accordeonList = document.querySelector('.menu-accordeon__list');
var menuAccordeon = document.querySelectorAll('.menu-accordeon__item');
var accordeonSwith = document.querySelectorAll('.menu-accordeon__swith');
var teamAccordeon = document.querySelectorAll('.team-accordeon__title');
var moreBtn = document.querySelectorAll('.review__button');
const reviewsOverlay = document.querySelector('.reviews__overlay')
var reviewsOverlayTitle = document.querySelector('.reviews__overlay-title');
var reviewsOverlayContent = document.querySelector('.reviews__overlay-content');
var reviewName = document.querySelectorAll('.review__name');
var reviewText = document.querySelectorAll('.review__text');
const reviewsOverlayClose = document.querySelector('.reviews__overlay-close');
var slidePrew = document.querySelector('.slider__control-link--left');

//Полноэкранное меню

function toogleMenu() {
    overlay.classList.toggle('active');
    wrapper.classList.toggle('locked');
    hamburgerMenuLink.classList.toggle('hamburger-menu-link--clear');
}


openMenu.addEventListener('click', function (event) {
    event.preventDefault();
    toogleMenu();
})

closebtn.addEventListener('click', function (event) {
    event.preventDefault();
    toogleMenu();
})

linkList.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.className === 'overlay-menu__link') {
        toogleMenu();
    }
})

//DropDawn Состав

function menuOpen() {
    compositionMenu.classList.add('composition__menu--active');
    composition.classList.add('composition__menu--active');
}

function menuRemove() {
    compositionMenu.classList.remove('composition__menu--active');
    composition.classList.remove('composition__menu--active');
}

composition.addEventListener('mouseover', function () {
    menuOpen();
    console.log('работает');
})

composition.addEventListener('mouseout', function () {
    menuRemove();
    console.log('мышь ушла');
})


compositionMenuList.addEventListener('click', function (event) {
    event.preventDefault();
    if (event.target.className === 'composition__menu-link');
    menuRemove();

})
compositionClose.addEventListener('click', function (event) {
    event.preventDefault();
    menuRemove();
})

//Горизонтальный аккордеон

for (var i = 0; i < teamAccordeon.length; i++) {
    teamAccordeon[i].addEventListener('click', function (event) {
        event.preventDefault();
        if (!(this.parentNode.classList.contains('is-activ'))) {
            for (var i = 0; i < teamAccordeon.length; i++) {
                teamAccordeon[i].parentNode.classList.remove('is-activ');
            }
            this.parentNode.classList.add('is-activ');
        } else {
            for (var i = 0; i < teamAccordeon.length; i++) {
                teamAccordeon[i].parentNode.classList.remove('is-activ');
            }
        }
    })
}

// Вертикальный аккордеон

function verticalAccordeon() {
    menuAccordeon.classList.toggle('activ');
}

for (var i = 0; i < accordeonSwith.length; i++) {
    accordeonSwith[i].addEventListener('click', function (event) {
        event.preventDefault();
        if (!(this.parentNode.classList.contains('activ'))) {
            for (var i = 0; i < accordeonSwith.length; i++) {
                accordeonSwith[i].parentNode.classList.remove('activ');
            }
            this.parentNode.classList.add('activ');
        } else {
            for (var i = 0; i < accordeonSwith.length; i++) {
                accordeonSwith[i].parentNode.classList.remove('activ');
            }
        }
    })
}

//Отзывы

for (var i = 0; i < moreBtn.length; i++) {
    moreBtn[i].addEventListener('click', function () {
        reviewsOverlay.style.display = "flex";

    })
}

reviewsOverlayClose.addEventListener('click', function (event) {
    event.preventDefault();
    reviewsOverlay.style.display = "none";
})

/*
for(var i=0; i<sliderControlLink.length; i++) {
    sliderControlLink[i].addEventListener('click', function(event){
        event.preventDefault();
    })
}
*/

//Карусель

$(document).ready(function () {
    const burgerCarusel = $(".slider__list").owlCarousel({
        items: 1,
        nav: true,
        navContainer: $('.slider__control'),
        navText: ["", ""],
    });
    $('.slider__control-link--right').on('click', function (e) {
        e.preventDefault();
        burgerCarusel.trigger('next.owl.carousel');
    })
    $('.slider__control-link--left').on('click', function (e) {
        e.preventDefault();
        burgerCarusel.trigger('prev.owl.carousel');
    })
});

//OPS
var
    screen = 0,
    contentWrap = $('.content-wrap'),
    section = $('.section'),
    inscroll = false;
$('.section:first-child').addClass('active');

$(document).ready(function () {
    $('body').on('mousewheel', function (event) {
        var activeSection = section.filter('.active');
        if (!inscroll) {
            inscroll = true;
            if (event.originalEvent.deltaY > 0) {
                screen++;
                console.log(screen);
            } else {
                screen--;
                console.log(screen);
            }
        }

        var
        position = (-screen * 100) + '%';
        console.log(position);
        contentWrap.css('top', position);
        setTimeout(function () {
            inscroll = false;
        }, 1300);
    });
});


