import changeDurationFormat from "../details/timeFormatter.js";
import createSlider from "../../components/slider.js";

const renderBanners = (data) => {
  const container = document.querySelector(".hero-banner");
  if (data.length) {
    container.innerHTML = "";
    data.forEach((item) => {
      container.insertAdjacentHTML(
        "beforeend",
        `
            <div class="swiper-slide relative">
            <img class=" w-full object-cover h-full" src="public${item.banner}" loading="lazy">
            <div class="absolute bg-linear-90 from-black/70 via-black/60 to-transparent w-full top-0 right-0 h-full">
              <div class="container mx-auto">
                <div class="top-0 bottom-0 my-auto absolute h-fit z-1">
                  <h1 class="text-white text-6xl font-bold max-md:text-4xl">${item.title}</h1>
                  <p class="mt-2 text-text-secondary w-140 max-sm:w-100 max-md:text-[13px] max-md:line-clamp-3">${item.bannerDescription}</p>
                  <div class="mt-5 flex">
                    <button class="flex max-md:gap-1 gap-2 items-center justify-center bg-cta-primary hover:bg-cta-hover text-text-primary font-semibold w-45 max-md:w-fit text-sm max-md:text-[10px] max-md:px-3 py-3 max-md:py-0 transition-colors duration-300 cursor-pointer rounded-xl" data-slug=${item.slug}>
                      <svg class="size-6 max-md:size-4" viewBox="0 0 24 24" id="play">
                        <path fill="currentColor"
                          d="M15.0733 5.20654C13.3412 4.21896 11.9958 3.45183 10.9031 2.95418C9.80638 2.45466 8.85435 2.17257 7.92862 2.26865C6.45941 2.42116 5.1219 3.18242 4.25027 4.36721C3.69972 5.11557 3.47048 6.07608 3.36002 7.26521C3.24999 8.44959 3.25 9.98465 3.25 11.9588V12.0411C3.24999 14.0153 3.24999 15.5504 3.36002 16.7347C3.47048 17.9239 3.69972 18.8844 4.25027 19.6327C5.1219 20.8175 6.45941 21.5788 7.92862 21.7313C8.85435 21.8274 9.80638 21.5453 10.9031 21.0458C11.9958 20.5481 13.3412 19.781 15.0732 18.7934L15.1435 18.7533C16.8755 17.7658 18.2209 16.9987 19.2038 16.3129C20.1894 15.6252 20.916 14.9503 21.297 14.1052C21.901 12.7654 21.901 11.2346 21.297 9.89473C20.916 9.04969 20.1894 8.37477 19.2038 7.68703C18.2209 7.00126 16.8755 6.23412 15.1435 5.24661L15.0733 5.20654Z">
                        </path>
                      </svg>
                      Watch Now</button>
                    <button class="flex items-center justify-center text-text-secondary border-input-border hover:bg-input-border/50 transition-colors duration-300 ml-4 rounded-xl w-45 max-md:w-fit max-md:px-3 py-3 text-sm max-md:text-[10px] border-2  cursor-pointer">
                      <svg class="size-6 max-md:size-4" viewBox="0 0 24 24" id="plus">
                        <path fill="currentColor"
                          d="M12 5a1 1 0 0 0-1 1v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6a1 1 0 0 0-1-1Z">
                        </path>
                      </svg>
                      Add To Watchlist</button>
                  </div>
                  <div class="mt-4 flex items-center text-sm max-md:text-xs">
                    <p class="relative mx-4 flex gap-1 items-center text-text-secondary banner-data">
                      <svg class="size-4" viewBox="0 0 24 24" id="star">
                        <g transform="translate(2 2.5)">
                          <path
                            d="M10.9788315,0.622701964 L13.2088343,5.0937337 C13.3696541,5.41898806 13.6833886,5.64532516 14.0473153,5.698638 L19.0425214,6.42627649 C19.3361902,6.46746623 19.6010526,6.62197034 19.7785029,6.8556019 C19.9559533,7.08923346 20.0313617,7.38273074 19.9880426,7.671152 C19.9534763,7.91020966 19.8407724,8.13174403 19.6669222,8.30235648 L16.0453978,11.809048 C15.7801525,12.0569606 15.6594885,12.4193205 15.7242774,12.7733882 L16.6162785,17.7090566 C16.7147938,18.2995122 16.3208523,18.8609116 15.7242774,18.9802323 C15.4801297,19.0185775 15.229908,18.9786152 15.0106765,18.8662648 L10.550671,16.5430816 C10.2203789,16.3761286 9.82840179,16.3761286 9.4981097,16.5430816 L5.03810421,18.8662648 C4.48873261,19.1584416 3.80239017,18.9584302 3.50386232,18.4191616 C3.39074686,18.2033073 3.35014981,17.9577724 3.38790218,17.7178233 L4.27990327,12.7821549 C4.34469215,12.4280873 4.22402814,12.0657274 3.95878288,11.8178148 L0.337258419,8.31112321 C0.124797095,8.10519293 0.00518811324,7.82415733 0.00518811324,7.53088433 C0.00518811324,7.23761134 0.124797095,6.95657574 0.337258419,6.75064546 C0.508415451,6.57648914 0.7350439,6.46512211 0.97949921,6.43504322 L5.97470536,5.70740472 C6.33863203,5.65409189 6.65236657,5.42775479 6.81318639,5.10250043 L8.96290904,0.622701964 C9.15090319,0.24057682 9.54799821,0.000936542622 9.97979029,0.00903094105 L10.1135905,0.00903094105 C10.489336,0.0558783885 10.8151899,0.286989836 10.9788315,0.622701964 Z"
                            fill="yellow"></path>
                          <path
                            d="M10.0065503,16.4115807 C9.81118897,16.4103023 9.62747134,16.4746291 9.45365767,16.5622959 L5.00773517,18.8797981 C4.47450301,19.1484697 3.7974056,18.9325826 3.50386232,18.4191616 C3.39024338,18.2066302 3.34956803,17.9636968 3.38790218,17.72659 L4.27990327,12.7996884 C4.33980187,12.4433294 4.22008857,12.0805563 3.95878288,11.8265815 L0.328338408,8.31988994 C-0.109446136,7.88870587 -0.109446136,7.19059625 0.328338408,6.75941219 C0.499576039,6.59022427 0.721593581,6.47958644 0.961659188,6.44380995 L5.97470536,5.70740472 C6.36101524,5.65133519 6.63712459,5.43773896 6.81318639,5.10250043 L8.99095422,0.571355753 C9.15691252,0.202753827 9.71488681,-0.0519721233 10.0154703,0.00903094105 C10.0065503,0.307099724 10.0065503,16.2099459 10.0065503,16.4115807 Z"
                            fill="yellow"></path>
                        </g>
                      </svg>
                      ${item.rating}/10
                    </p>
                    <p class="relative mx-4 text-text-secondary banner-data">${item.releaseYear}</p>
                    <p class="relative mx-4 text-text-secondary banner-data">${item.genres.map((item) => `<span>${item}</span>`)}</p>
                    <p class="relative mx-4 text-text-secondary banner-data">${changeDurationFormat(item.duration)}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-lazy-preloader"></div>
          </div>
            `,
      );
    });
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
  }
};

export default renderBanners;
