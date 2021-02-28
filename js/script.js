$(document).ready(function () {

    let topMenu = $(".header__nav");
    let topMenuPosition = $(topMenu).offset().top; 

    $(window).scroll(function () {
        let windowScroll = $(window).scrollTop();

        if (windowScroll > topMenuPosition) {
            $(topMenu).addClass("fixed-top");
        } else {
            $(topMenu).removeClass("fixed-top");
        };
    });
});

const popup = document.querySelector('.popup');
const popupOpen = document.querySelector('.header__signin');
const popupClose = document.querySelector('.popup__close');
const body = document.querySelector('body');
const wrapperPopup = document.querySelector('.popup__wrapper');

// Открывает попап
popupOpen.addEventListener('click', function(event) {
    event.preventDefault();
    popup.classList.toggle('open');
})

// Закрывает попап
popupClose.addEventListener('click', function(event) {
    event.preventDefault();
    popup.classList.toggle('open');
})

// Закрытие по области
wrapperPopup.addEventListener('click', function(event) {
    event.preventDefault();
    popup.classList.toggle('open');
})

