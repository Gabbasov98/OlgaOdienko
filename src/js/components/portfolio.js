$(document).ready(function() {
    $(".portfolio-page__tab-more").click(function() {
        $(this).toggleClass("portfolio-page__tab-more--active")
        $(this).parents(".tabs").find(".tab--hidden").toggleClass("tab--show")
    })
})