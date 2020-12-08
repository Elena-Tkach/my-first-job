
const swiper = new Swiper(`.js-swiper`, {

    slidesPerView: 1,
    spaceBetween: 8,

    pagination: {
        el: `.js-pagination`,
        type: `bullets`,
        clickable: true,
    },


    loop: true,
    navigation: {
        nextEl: `.js-btnNext`,
        prevEl: `.js-btnPrev`,
    },

    breakpoints: {
        1024: {
            slidesPerView: 2,
        },

        1200: {
            slidesPerView: 3,
            spaceBetween: 8,

        }

    }
})