import changeDurationFormat from "./timeFormatter.js";
import seasonHandler from "./renderSeasons.js";
import createCasts from "./renderCasts.js";
import setLoaderToTrailer from "./trailerLoader.js";

const elements = {
  bannerEl: document.querySelector(".page-banner"),
  posterEl: document.querySelector(".page-poster"),
  titleEl: document.querySelector(".page-title"),
  descriptionEl: document.querySelector(".page-description"),
  overviewEl: document.querySelector(".page-overview"),
  releaseEl: document.querySelector(".page-release"),
  genresEl: document.querySelector(".page-genres"),
  ratingEl: document.querySelector(".page-rating"),
  directoreEl: document.querySelector(".page-directore"),
};

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
  removeLoaderFromBanner();
  elements.posterEl.setAttribute("src", `public${poster}`);
  elements.posterEl.setAttribute("alt", `${title} poster`);
  removeLoaderFromPoster(poster);
  elements.titleEl.textContent = title;
  elements.descriptionEl.textContent = bannerDescription;
  elements.overviewEl.textContent = overview;
  setLoaderToTrailer(trailer);
  setScreenshots(screenshots, title);
  setLoaderToScreenShots();
  createCasts(cast);
  setLoaderToCasts();
  elements.releaseEl.textContent = releaseYear;
  changeDurationFormat(duration, type);
  createGenres(genres);
  elements.ratingEl.textContent = `${rating} / 10`;
  elements.directoreEl.textContent = director;

  if (type === "series") {
    seasonHandler(seasons);
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

const removeLoaderFromPoster = (poster) => {
  elements.posterEl.addEventListener("load", () => {
    elements.posterEl.parentElement.classList.remove(
      "bg-gray-900",
      "animate-pulse",
    );
    elements.posterEl.classList.add("animate-fadeIn");
    elements.posterEl.classList.remove("hidden");
  });
};
const removeLoaderFromBanner = () => {
  elements.bannerEl.addEventListener("load", () => {
    elements.bannerEl.classList.remove("hidden");
  });
};
export default changePageContent;
