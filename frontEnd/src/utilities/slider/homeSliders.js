import createSlider from "../../components/slider.js";


createSlider(".trending-slider", {
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
createSlider(".release-slider", {
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
createSlider(".popular-slider", {
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
createSlider(".recommended-slider", {
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
