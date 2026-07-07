(function () {
    new Swiper('.equipment__gallery', {
        loop: true,
        navigation: {
            prevEl: '.equipment__gallery-btn--prev',
            nextEl: '.equipment__gallery-btn--next',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1025: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
        },
    });
})();