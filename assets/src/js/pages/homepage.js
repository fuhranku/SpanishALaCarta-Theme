import '../../sass/pages/homepage.scss';
// import Swiper JS
import Swiper from 'swiper';
// core version + navigation, pagination modules:
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination]);

new Swiper('.testimonials-slider',({
    slidesPerView: 1,
    centeredSlides: true,
    // Optional parameters
    dynamicBullets: true,
    loop: true,
    spaceBetween: 30,
    watchSlidesVisibility: true,
    width: 300,
    pagination: {
        el: '.testimonials-pagination',
        bulletClass: "testimonials-bullet"
    },
    navigation: {
        disabledClass: "testimonials-control-disabled",
        nextEl: '.testimonials-button-next',
        prevEl: '.testimonials-button-prev',
    },
    observeParents: true,
    observer: true,
      // Responsive breakpoints
  breakpoints: {
        // when window width is >= 320px
        1440: {
            width: 900,
            spaceBetween: 190,
        },
        768:{
            width: 600,
            spaceBetween: 30,
        },
        991:{
            width: 600,
            spaceBetween: 120,
        }
    }
}));
