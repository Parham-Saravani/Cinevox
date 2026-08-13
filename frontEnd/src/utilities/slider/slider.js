import Swiper from "swiper";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const heroSwiper = new Swiper(".hero-slider", {
  modules: [Pagination, Autoplay, EffectFade],
  direction: "horizontal",
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 1000,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
