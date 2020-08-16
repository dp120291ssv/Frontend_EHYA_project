$(document).ready(function() {
    var mySwiper = new Swiper('.feedbacks-slider', {
        autoplay: {
            delay: 3000,
        },

        pagination: {
            el: '.swiper-pagination',
        },
    })

    $(".swiper-container").hover(function() {
        (this).swiper.autoplay.stop();
    }, function() {
        (this).swiper.autoplay.start();
    });
})