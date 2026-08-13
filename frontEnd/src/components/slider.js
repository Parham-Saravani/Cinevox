import Swiper from "swiper";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
const createSlider = (element, options) => {
  const heroSwiper = new Swiper(element, {
    modules: [Pagination, Autoplay, EffectFade],
    ...options,
  });
};

export default createSlider;