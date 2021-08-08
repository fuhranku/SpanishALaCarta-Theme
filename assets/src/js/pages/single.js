import '../../sass/pages/single.scss';
import '../../sass/pages/blog.scss';

// import Swiper JS
import Swiper from 'swiper';
// core version + navigation, pagination modules:
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination]);

new Swiper('.related-posts .inner-container',({
    slidesPerView: 'auto',
    // Optional parameters
    spaceBetween: 30,
    navigation: {
        disabledClass: "categories-control-disabled",
        nextEl: '.categories-button-next',
        prevEl: '.categories-button-prev',
    }
}));