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
var composition = document.querySelectorAll('.composition');
const compositionMenu = document.querySelectorAll('.composition__menu');
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
const sliderItem = document.querySelectorAll('.slider__item');

/*
//Точки
const setActiveMenuItem = itemEq => {
    $('.sidebar__circle').eq(itemEq).addClass('sidebar__circle--active')
    .siblings().removeClass('sidebar__circle--active')
}*/

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
    for (var i = 0; i < sliderItem.length; i++) {
        compositionMenu[i].classList.add('composition__menu--active');
        composition[i].classList.add('composition__menu--active');
    }

}

function menuRemove() {
    for (var i = 0; i < sliderItem.length; i++) {
        compositionMenu[i].classList.remove('composition__menu--active');
        composition[i].classList.remove('composition__menu--active');
    }

}

for (var i = 0; i < sliderItem.length; i++) {
    composition[i].addEventListener('mouseover', function () {
        menuOpen();
        console.log('работает');
    })
}

for (var i = 0; i < sliderItem.length; i++) {
    composition[i].addEventListener('mouseout', function () {
        menuRemove();
        console.log('мышь ушла');
    });
}

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
                accordeonSwith[i].classList.add('hidden');
            }
            this.classList.remove('hidden');
            this.parentNode.classList.add('activ');
        } else {
            for (var i = 0; i < accordeonSwith.length; i++) {
                accordeonSwith[i].parentNode.classList.remove('activ');
                accordeonSwith[i].classList.remove('hidden');
            }
        }
    })
}

//Отзывы

var reviewsList = document.querySelector('.reviews__list');
reviewsList.addEventListener('click', function (e) {
    target = e.target;
    if (target.className === 'review__btn') {
        reviewsOverlay.style.display = "flex";
    }
})

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

/*
var screen = 0,
    contentWrap = $('.content-wrap'),
    section = $('.section'),
    inscroll = false,
    sidebarElem = $('.sidebar__circle');
$(document).ready(function () {

    $('body').on('mousewheel', function (event) {
        var activeSection = section.filter('.is-activ');
        if (!inscroll) {
            inscroll = true;
            if (event.originalEvent.deltaY > 0) {
                if (activeSection.next().length) {
                    screen++;
                    console.log(screen);
                    sidebarElem.eq(screen).addClass('sidebar__circle--active');
                    sidebarElem.eq(screen - 1).removeClass('sidebar__circle--active');
                }
            } else {
                if (activeSection.prev().length) {
                    screen--;
                    console.log(screen);
                    sidebarElem.eq(screen).addClass('sidebar__circle--active');
                    sidebarElem.eq(screen + 1).removeClass('sidebar__circle--active');
                }
            }
        }
        
        const position = (-screen * 100) + '%';
        console.log(position);
        contentWrap.css('top', position);
        setTimeout(function () {
            inscroll = false;
        }, 1300);
        section.eq(screen).addClass('is-activ').siblings().removeClass('is-activ');
        //setActiveMenuItem();  
    });

    //Навигация
    $('[data-scroll-to]').on('click', e => {
        e.preventDefault();
        const target = $(e.currentTarget).attr('data-scroll-to');
        const position = (-target * 100) + '%';
        contentWrap.css('top', position);
        section.eq(target).addClass('is-activ').siblings().removeClass('is-activ');
        console.log(target);       
    })  
});*/

const section = $('.section');
const display = $('.content-wrap');
let inscroll = false;
const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

const sidebarElem = itemEq => {
    $('.sidebar__item').eq(itemEq).addClass('active')
        .siblings().removeClass('active');
}

const navigation = sectionEq => {
    const position = `${-sectionEq * 100}%`

    if (inscroll) return;
    inscroll = true;

    section.eq(sectionEq).addClass('is-activ')
        .siblings().removeClass('is-activ');

    display.css('top', position);

    sidebarElem(sectionEq);

    setTimeout(() => {
        inscroll = false;

    }, 1300);
}

const scrollToSection = direction => {
    const activeSection = section.filter('.is-activ');
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    if (direction === 'up' && nextSection.length) {
        navigation(nextSection.index());
    }

    if (direction === 'down' && prevSection.length) {
        navigation(prevSection.index());
    }
}

$(document).on('wheel', e => {
    const deltaY = e.originalEvent.deltaY;
    if (deltaY > 0) {
        scrollToSection('up');
    }

    if (deltaY < 0) {
        scrollToSection('down');
    }

    touchmove: e => preventDefault();
})

$('[data-scroll-to]').on('click', e => {

    e.preventDefault();
    const target = $(e.currentTarget).attr('data-scroll-to');
    navigation(target);
})

if (isMobile) {
    $(document).swipe({
        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
            scrollToSection(direction);
        }
    });
}

//AJAX

//console.log('in common.js');
//console.log($);

$('#form').on('submit', submitForm);

function submitForm (ev) {
    //console.log('in SubmitForm');
    ev.preventDefault();

    var form = $(ev.target),
        data = form.serialize();
        url = form.attr('action');
        type = form.attr('method');

    var request = $.ajax({
        type: type,
        url: url,
        dataType: 'JSON',
        data: data
    });

   /* request.done(function(msg) {
        const status = msg.status
        if (status === true) {
            form.append('верно');
        } else{
            form.append('ошибка');
        } 
    })

    request.fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });*/

};


