const elements = {
  seasonContainer: document.querySelector(".page-seasons"),
  episodesContainer: document.querySelector(".episodes-container"),
};
const seasonHandler = (seasons) => {
  const elements = {
    seasonContainer: document.querySelector(".page-seasons"),
    episodesContainer: document.querySelector(".episodes-container"),
  };

  elements.seasonContainer.innerHTML = "";
  //! create Seasons Navigators
  seasons.forEach((season, index) => {
    elements.seasonContainer.insertAdjacentHTML(
      "beforeend",
      `
      <div class="swiper-slide w-fit! mr-2!">
          <button class="hover:border-cta-primary/50 hover:bg-cta-primary/50 transition-colors duration-300 cursor-pointer border-2 text-sm border-input-border rounded-xl px-3 py-1 text-text-primary season-item ${index ? "" : "active-season"}" data-season="season-${index + 1}">${season.title}</button>
      </div>
      `,
    );
  });

  elements.episodesContainer.innerHTML = "";
  //! create episodes container for each Season
  seasons.forEach((season, index) => {
    elements.episodesContainer.insertAdjacentHTML(
      "beforeend",
      `
          <div class="animate-fadeIn grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-2 season-${index + 1} ${index ? "hidden" : "active-season-container"}"></div>

      `,
    );
  });

  //! create episodes
  seasons.forEach((season, index) => {
    const currentSeasonContainer = document.querySelector(
      `.season-${index + 1}`,
    );
    season.episodes.forEach((episode) => {
      currentSeasonContainer.insertAdjacentHTML(
        "beforeend",
        `
        <div class="hover:border-input-border-focus transition-colors duration-300 flex justify-between items-center border border-input-border w-full rounded-xl px-3 py-3">
          <div class="text-xs">
              <h5 class="text-text-primary line-clamp-1 mr-4">${episode.title}</h5>
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
  });
};

//! change active season NavigatorBtn and show clicked season Episodes
const changeActiveSeason = (event) => {
  const seasonBtn = event.target.closest(".season-item");
  if (seasonBtn) {
    if (seasonBtn.classList.contains("active-season")) return;
    document.querySelector(".active-season").classList.remove("active-season");
    const {
      target: {
        dataset: { season },
      },
    } = event;
    seasonBtn.classList.add("active-season");
    showActiveSeasonEpisodes(season);
  }
};

//! show current active episodes
const showActiveSeasonEpisodes = (season) => {
  const activeSeason = document.querySelector(".active-season-container");
  activeSeason.classList.remove("active-season-container", "animate-fadeIn");
  activeSeason.classList.add("animate-fadeOut");
  setTimeout(() => {
    activeSeason.classList.replace("animate-fadeOut", "hidden");
    const containerToBeActive = document.querySelector(`.${season}`);
    containerToBeActive.classList.remove("hidden");
      containerToBeActive.classList.add("animate-fadeIn");
      containerToBeActive.classList.add("active-season-container");
  }, 300);
};
elements.seasonContainer?.addEventListener("click", changeActiveSeason);
export default seasonHandler;
