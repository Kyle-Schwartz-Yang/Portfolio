
import * as flsFunction from "./modules/functions.js";
// Импортируем все функции из файла по указаному пути.
flsFunction.isWebp();

//$ Если нужен swiper
import Swiper, { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, EffectCoverflow, Autoplay]);

const swiper = new Swiper('.gallery', {

  direction: 'horizontal',
  loop: true,
  centeredSlides: true,
  grabCursor: false,
  speed: 800,
  autoplay: { delay: 3000, },

  effect: "coverflow",
  breakpoints: {
    1200: {
      slidesPerView: 2,


    },


    500: {
      // slidesPerView: 1.5,

    },



  },

  coverflowEffect: {
    rotate: 70,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',  //по умолч'.swiper-button-next'
    prevEl: '.swiper-button-prev',  //по умлч'.swiper-button-prev',
  },
});



const swiperwho = new Swiper('.skills__box ', {

  direction: 'horizontal',
  loop: true,

  centeredSlides: true,
  grabCursor: false,
  speed: 800,
  // autoplay: { delay: 100, },
  slidesPerGroup: 2,
  slidesPerView: 6,

  spaceBetween: 60,
  freeMode: true,

  navigation: {
    nextEl: '.swiper-button-next',  //по умолч'.swiper-button-next'
    prevEl: '.swiper-button-prev',  //по умлч'.swiper-button-prev',
  },
});
