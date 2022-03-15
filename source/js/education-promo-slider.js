import Swiper, { Navigation, Pagination, Autoplay } from "swiper";

const swiper = new Swiper(".education-promo__slider", {
  loop: true,
  modules: [Navigation, Pagination, Autoplay],

  pagination: {
    el: ".promo-swiper-pagination",
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
