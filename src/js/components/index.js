// function portfolioSlider() {
//     var swiper = new Swiper('.portfolio__slider .swiper-container', {
//         slidesPerView: "auto",
//         spaceBetween: 40,
//         navigation: {
//             nextEl: '.portfolio__slider .swiper-button-next',
//             prevEl: '.portfolio__slider .swiper-button-prev',
//         },
//     })
// }
let portfolioSlidersArray = []

function portfolioSliders() {
    $(".portfolio__slider").each(function(index, el) {
        $(el).attr("data-slider-id", `${index}`)
        portfolioSlidersArray[index] = new Swiper(`.portfolio__slider[data-slider-id="${index}"] .swiper-container`, {
            slidesPerView: "auto",
            spaceBetween: 40,
            navigation: {
                nextEl: `.portfolio__slider[data-slider-id="${index}"] .swiper-button-next`,
                prevEl: `.portfolio__slider[data-slider-id="${index}"] .swiper-button-prev`,
            }
        })
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



$(document).ready(function() {

    if (window.innerWidth < 992) {
        portfolioSliders()
        eventsSlider()
    }

})