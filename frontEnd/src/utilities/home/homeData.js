import { apiRequest } from "../services/apiRequest.js";
import renderBanners from "./renderHeroBanner.js";
import createCards from "../render/cardRenderer.js";
import clearLoaders from "./clearLoaders.js";
const fetchHomeData = async () => {
  try {
    const data = await Promise.all([
      apiRequest("/api/banners"),
      apiRequest("/api/discover/trending"),
      apiRequest("/api/discover/newRelease"),
      apiRequest("/api/discover/popular"),
      apiRequest("/api/discover/recommend"),
    ]);
    
    renderBanners(data[0]);
    handlerSliders(".trending-container", data[1], true);
    handlerSliders(".release-container", data[2], true);
    handlerSliders(".popular-container", data[3], true);
    handlerSliders(".recommended-container", data[4], true);

  } catch (error) {
    console.log(error);
  }
};
const handlerSliders = (container, data) => {
  clearLoaders(container);
  createCards(container, data, true);
};
window.addEventListener("load", fetchHomeData);
