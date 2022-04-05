function portfolioSlider() {
    var swiper = new Swiper('.portfolio .swiper-container', {
        slidesPerView: "auto",
        spaceBetween: 40,
        navigation: {
            nextEl: '.portfolio .swiper-button-next',
            prevEl: '.portfolio .swiper-button-prev',
        },
    })
}

function eventsSlider() {
    var swiper = new Swiper('.events .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.events .swiper-button-next',
            prevEl: '.events .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            850: {
                slidesPerView: 2,
            },
        }
    })
}

function slider() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ' .swiper-button-next',
            prevEl: ' .swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 30
            },
        }
    })
}

$(document).ready(function() {

    if (window.innerWidth < 992) {
        portfolioSlider()
        eventsSlider()
    }

})