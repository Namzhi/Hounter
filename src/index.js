import './styles/main.scss'
import './styles/recommended.scss'
import './styles/tour.scss'
import './styles/review.scss'
import './styles/tips.scss'
import './styles/subscribe.scss'
import './styles/footer.scss'

import 'normalize.css'
// import 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css'
// import Swiper JS
import Swiper from 'swiper'
// import Swiper styles
import 'swiper/css'
// import 'swiper/css/navigation'
import 'swiper/css/pagination'
// import 'swiper/css';
import {Navigation, Pagination, Thumbs, Scrollbar, EffectCoverflow} from 'swiper/modules'

// Swiper.use([Navigation, Pagination, Scrollbar, EffectCoverflow])
Swiper.use([Navigation, Pagination, Thumbs])
const swiper = new Swiper('.carousel', {
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination--asd',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },

  spaceBetween: 16,
  slidesPerView: 'auto',
})
// swiper.on('reachEnd', function () {
//   console.log('reach to End')
// })
const swiperF = new Swiper('.recommended-carousel', {
  loop: true,

  spaceBetween: 40,
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.recommended-swiper.swiper-button-next',
    prevEl: '.recommended-swiper.swiper-button-prev',
  },
})

const tourCarouselMini = document.querySelector('.tour-carousel-mini__container')
const tourCarousel = document.querySelector('.tour-carousel__container')

let swiperK = new Swiper('.tour-carousel', {
  loop: true,
  spaceBetween: -60,
  slidesPerView: 2.3,
  // slideToClickedSlide: true,
  centeredSlides: true,
  initialSlide: 1,
  navigation: {
    nextEl: '.tour-carousel__button.swiper-button-next',
    prevEl: '.tour-carousel__button.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  thumbs: {
    swiper: {
      loop: true,
      // speed: 5000,
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
//!!!!!!!!!!!!!!!!!!
// tourCarouselMini.addEventListener('click', () => {
//   tourCarousel.classList.remove('tour-carousel__container--invisible')
// })
// const tourCarouselButton = document.querySelector('.tour-carousel__button--exit')
// tourCarouselButton.addEventListener('click', () => {
//   tourCarousel.classList.add('tour-carousel__container--invisible')
// })
//!!!!!!!!!!!!!!!!!!
const swiperReview = new Swiper('.review-carousel', {
  loop: true,
  spaceBetween: 56,
  slidesPerView: 'auto',
  centeredSlides: true,
  initialSlide: 3,
  pagination: {
    el: '.review-carousel__swiper-pagination',
  },

  // navigation: {
  //   nextEl: '.revieswiper.swiper-button-next',
  //   prevEl: '.recommended-swiper.swiper-button-prev',
  // },
})
