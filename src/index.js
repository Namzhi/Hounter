import Swiper from 'swiper'

import './styles/mixins.scss'
import 'swiper/css'
import 'swiper/css/pagination'

import {Navigation, Pagination, Thumbs} from 'swiper/modules'

Swiper.use([Navigation, Pagination, Thumbs])
// slider for intro block
const swiperIntro = new Swiper('.carousel', {
  loop: true,
  spaceBetween: 16,
  slidesPerView: 'auto',
})
// slider for the recommended block
const swiperRecommended = new Swiper('.recommended-carousel', {
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    576: {
      spaceBetween: 40,
      slidesPerView: 'auto',
    },
  },
  spaceBetween: 40,
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.recommended-swiper.swiper-button-next',
    prevEl: '.recommended-swiper.swiper-button-prev',
  },
  centeredSlides: true,
})

const tourCarouselMini = document.querySelector('.tour-carousel-mini__container')
const tourCarousel = document.querySelector('.tour-carousel__container')
// slider for the tour block
let swiperTourCarousel = new Swiper('.tour-carousel', {
  loop: true,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2.3,
      spaceBetween: -60,
    },
  },

  centeredSlides: true,
  initialSlide: 1,
  navigation: {
    nextEl: '.tour-carousel__button.swiper-button-next',
    prevEl: '.tour-carousel__button.swiper-button-prev',
  },
  pagination: {
    el: '.tour-carousel__pagination',
  },
  thumbs: {
    swiper: {
      loop: true,
      el: '.tour-carousel-mini',
      slidesPerView: 'auto',
      spaceBetween: 8,
    },
  },
  zoom: {
    maxRatio: 3,
    minRatio: 1,
  },
})
// eventListeners for making visible and hidden slider for the tour block
tourCarouselMini.addEventListener('click', () => {
  tourCarousel.classList.remove('tour-carousel__container--invisible')
})
const tourCarouselButton = document.querySelector('.tour-carousel__button--exit')
tourCarouselButton.addEventListener('click', () => {
  tourCarousel.classList.add('tour-carousel__container--invisible')
})
// slider for the review block
const swiperReview = new Swiper('.review-carousel', {
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 640px

    768: {
      slidesPerView: 'auto',
      spaceBetween: 56,
    },
  },

  centeredSlides: true,
  initialSlide: 3,
  pagination: {
    el: '.review-carousel__swiper-pagination',
  },
})
