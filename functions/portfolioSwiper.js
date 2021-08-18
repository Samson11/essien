import { Swiper} from 'swiper'

let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    navigation: {
        hideOnClick: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    mousewheel: true,
    keyboard: true,
})

let swiperTestimonial = new Swiper('.testimonial__container', {
    grabCursor: true,
    loop: true,
    spaceBetween: 48,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
    breakpoints: {
        568: {
            slidesPerView: 2
        }
    },
    mousewheel: true,
    keyboard: true,
})