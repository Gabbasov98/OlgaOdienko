certificatesSlidersArray = []

function certificatesSliders() {
    $(".certificate-slider").each(function(index, el) {
        $(el).attr("data-slider-id", `${index}`)
        certificatesSlidersArray[index] = new Swiper(`.certificate-slider[data-slider-id="${index}"] .swiper-container`, {
            slidesPerView: 1,
            spaceBetween: 30,
            // loop: true,
            navigation: {
                nextEl: `.certificate-slider[data-slider-id="${index}"] .swiper-button-next`,
                prevEl: `.certificate-slider[data-slider-id="${index}"] .swiper-button-prev`,
            },
            breakpoints: {
                // 320: {
                //     slidesPerView: 1.1,
                // },
            }
        })
    })
}


$(document).ready(function() {
    certificatesSliders()

    $(".about-certificate .tab").click(function() {
        certificatesSliders()
    })
})