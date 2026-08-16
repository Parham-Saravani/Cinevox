import createSlider from "../../components/slider.js";
createSlider(".cast-slider", {
  direction: "horizontal",
  grabCursor: true,
  slidesPerView: 5,
  breakpoints: {
    450: {
      slidesPerView: 6,
    },
    520: {
      slidesPerView: 7,
    },
    600: {
      slidesPerView: 8,
      spaceBetween: 20,
    },
    700: {
      slidesPerView: 12,
    },
    1024: {
      slidesPerView: 9,
      spaceBetween: 40,
    },
    1100: {
      slidesPerView: 11,
    },
    1280: {
      slidesPerView: 'auto',
    },
  },
});
createSlider(".seasons-slider", {
  direction: "horizontal",
  grabCursor: true,
  slidesPerView: 5,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
    1280: {
      slidesPerView: "auto",
    },
  },
});
createSlider(".similar-series-slider", {
  direction: "horizontal",
  grabCursor: true,
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
    1280: {
      slidesPerView: "auto",
    },
  },
});
