import createSlider from "../../components/slider.js";

createSlider(".hero-slider", {
  direction: "horizontal",
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});