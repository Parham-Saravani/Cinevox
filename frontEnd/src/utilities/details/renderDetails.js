const pause = `M8 5a2 2 0 0 0-2 2v10a2 2 0 1 0 4 0V7a2 2 0 0 0-2-2zm8 0a2 2 0 0 0-2 2v10a2 2 0 1 0 4 0V7a2 2 0 0 0-2-2z`;
const play = `M15.0733 5.20654C13.3412 4.21896 11.9958 3.45183 10.9031 2.95418C9.80638 2.45466 8.85435 2.17257 7.92862 2.26865C6.45941 2.42116 5.1219 3.18242 4.25027 4.36721C3.69972 5.11557 3.47048 6.07608 3.36002 7.26521C3.24999 8.44959 3.25 9.98465 3.25 11.9588V12.0411C3.24999 14.0153 3.24999 15.5504 3.36002 16.7347C3.47048 17.9239 3.69972 18.8844 4.25027 19.6327C5.1219 20.8175 6.45941 21.5788 7.92862 21.7313C8.85435 21.8274 9.80638 21.5453 10.9031 21.0458C11.9958 20.5481 13.3412 19.781 15.0732 18.7934L15.1435 18.7533C16.8755 17.7658 18.2209 16.9987 19.2038 16.3129C20.1894 15.6252 20.916 14.9503 21.297 14.1052C21.901 12.7654 21.901 11.2346 21.297 9.89473C20.916 9.04969 20.1894 8.37477 19.2038 7.68703C18.2209 7.00126 16.8755 6.23412 15.1435 5.24661L15.0733 5.20654Z`;
const elements = {
  bannerEl: document.querySelector(".page-banner"),
  posterEl: document.querySelector(".page-poster"),
  titleEl: document.querySelector(".page-title"),
  descriptionEl: document.querySelector(".page-description"),
  overviewEl: document.querySelector(".page-overview"),
  castEl: document.querySelector(".page-cast"),
  releaseEl: document.querySelector(".page-release"),
  durationEl: document.querySelector(".page-duration"),
  genresEl: document.querySelector(".page-genres"),
  ratingEl: document.querySelector(".page-rating"),
  directoreEl: document.querySelector(".page-directore"),
  trailerEl: document.querySelector(".page-trailer"),
};

let isTrailerPlaying = false;

const changePageContent = (
  title,
  banner,
  bannerDescription,
  cast,
  director,
  duration,
  genres,
  overview,
  poster,
  rating,
  releaseYear,
  screenshots,
  trailer,
  type,
  seasons,
) => {
  elements.bannerEl.setAttribute("src", `public${banner}`);
  elements.bannerEl.setAttribute("alt", `${title} banner`);
  elements.posterEl.setAttribute("src", `public${poster}`);
  elements.posterEl.setAttribute("alt", `${title} poster`);
  elements.titleEl.textContent = title;
  elements.descriptionEl.textContent = bannerDescription;
  elements.overviewEl.textContent = overview;
  elements.trailerEl.setAttribute("src", `public/videos/${trailer}`);
  setLoaderToTrailer();
  setScreenshots(screenshots, title);
  setLoaderToScreenShots();
  createCasts(cast);
  setLoaderToCasts();
  elements.releaseEl.textContent = releaseYear;
  changeDurationFormat(duration);
  createGenres(genres);
  elements.ratingEl.textContent = `${rating} / 10`;
  elements.directoreEl.textContent = director;

  if (seasons) {
    seasonHandler(seasons);
  }
};

const createCasts = (cast) => {
  cast.forEach((item) => {
    elements.castEl.insertAdjacentHTML(
      "afterbegin",
      `
        <div class="swiper-slide w-18! mr-1.5!">
            <div class="w-fit flex flex-col items-center">
                <img class="size-14 rounded-full object-cover bg-gray-900 animate-pulse cast-images" src="${item.image}" alt="">
                <h4 class="text-text-primary text-[10px] mt-1.5 w-17 text-center">${item.title}</h4>
            </div>
        </div>
        `,
    );
  });
};
const changeDurationFormat = (time) => {
  if (time % 60 === 0) {
    console.log(time);
    console.log(time / 60);
    elements.durationEl.textContent = `${time / 60}h`;
  } else {
    const hour = Math.floor(time / 60);
    const minute = time - hour * 60;
    elements.durationEl.textContent = `${hour}h${minute}m`;
  }
};
const createGenres = (genres) => {
  genres.forEach((genre) => {
    elements.genresEl.insertAdjacentHTML(
      "afterbegin",
      `
        <span>${genre}</span>
      `,
    );
  });
};
const setScreenshots = (screenshots) => {
  document.querySelectorAll(".page-screenshot").forEach((item, index) => {
    item.setAttribute("src", `${screenshots[index]}`);
  });
};

const setLoaderToCasts = () => {
  document.querySelectorAll(".cast-images").forEach((item) => {
    item.addEventListener("load", () => {
      item.classList.remove("bg-gray-900");
      item.classList.remove("animate-pulse");
    });
    item.addEventListener("error", () => {
      item.setAttribute("src", "public/profile/default.webp");
    });
  });
};
const setLoaderToTrailer = () => {
  elements.trailerEl.className += " bg-gray-900 animate-pulse";
  elements.trailerEl.addEventListener("loadeddata", () => {
    elements.trailerEl.classList.remove("bg-gray-900");
    elements.trailerEl.classList.remove("animate-pulse");
    document
      .querySelector(".play-trailer-btn")
      .addEventListener("click", (event) => {
        if (!isTrailerPlaying) {
          isTrailerPlaying = true;
          event.currentTarget.firstElementChild.firstElementChild.setAttribute(
            "d",
            pause,
          );
          elements.trailerEl.play();
        } else {
          isTrailerPlaying = false;
          event.currentTarget.firstElementChild.firstElementChild.setAttribute(
            "d",
            play,
          );
          elements.trailerEl.pause();
        }
      });
  });
};
const setLoaderToScreenShots = () => {
  document.querySelectorAll(".page-screenshot").forEach((item) => {
    item.addEventListener("load", () => {
      item.classList.remove("opacity-0");
      item.parentElement.classList.remove("bg-gray-900");
      item.parentElement.classList.remove("animate-pulse");
    });
    item.addEventListener("error", () => {
      item.classList.remove("opacity-0");
      item.setAttribute("src", "public/Images/Banners/GameOfThrones.jpg");
    });
  });
};

//? sesason
const seasonHandler = (seasons) => {
  const elements = {
    seasonContainer: document.querySelector(".page-seasons"),
    episodesContainer: document.querySelector(".episodes-container"),
  };
  elements.seasonContainer.innerHTML = "";
  seasons.forEach((season, index) => {
    elements.seasonContainer.insertAdjacentHTML(
      "beforeend",
      `
      <div class="swiper-slide w-fit! mr-2!">
          <button class="hover:border-cta-primary/50 hover:bg-cta-primary/50 transition-colors duration-300 cursor-pointer border-2 text-sm border-input-border rounded-xl px-3 py-1 text-text-primary ${!index ? "active-season" : ""}" data-season="${season.title}">${season.title}</button>
      </div>
      `,
    );
  });

  elements.episodesContainer.innerHTML = "";
  seasons[0].episodes.forEach((episode, index) => {
    elements.episodesContainer.insertAdjacentHTML(
      "beforeend",
      `
      <div class="hover:border-input-border-focus transition-colors duration-300 flex justify-between items-center border border-input-border w-full rounded-xl px-3 py-3">
          <div class="text-xs">
              <h5 class="text-text-primary line-clamp-1 mr-4">${index + 1}. ${episode.title}</h5>
              <p class="mt-1 text-text-secondary/70">${episode.releaseDate}</p>
          </div>
          <span class="text-text-primary bg-input-border/50 rounded-full px-1.5 py-1.5 inline-flex cursor-pointer hover:text-text-secondary transition-colors duration-300 hover:border-text-secondary">
              <svg class="size-4" viewBox="0 0 24 24" id="play">
                  <path fill="currentColor" d="M15.0733 5.20654C13.3412 4.21896 11.9958 3.45183 10.9031 2.95418C9.80638 2.45466 8.85435 2.17257 7.92862 2.26865C6.45941 2.42116 5.1219 3.18242 4.25027 4.36721C3.69972 5.11557 3.47048 6.07608 3.36002 7.26521C3.24999 8.44959 3.25 9.98465 3.25 11.9588V12.0411C3.24999 14.0153 3.24999 15.5504 3.36002 16.7347C3.47048 17.9239 3.69972 18.8844 4.25027 19.6327C5.1219 20.8175 6.45941 21.5788 7.92862 21.7313C8.85435 21.8274 9.80638 21.5453 10.9031 21.0458C11.9958 20.5481 13.3412 19.781 15.0732 18.7934L15.1435 18.7533C16.8755 17.7658 18.2209 16.9987 19.2038 16.3129C20.1894 15.6252 20.916 14.9503 21.297 14.1052C21.901 12.7654 21.901 11.2346 21.297 9.89473C20.916 9.04969 20.1894 8.37477 19.2038 7.68703C18.2209 7.00126 16.8755 6.23412 15.1435 5.24661L15.0733 5.20654Z">
                  </path>
              </svg>
          </span>
      </div>
      `,
    );
  });
};
export default changePageContent;
