import { apiRequest } from "../services/apiRequest.js";
import renderBanners from "./renderHeroBanner.js";
const fetchHomeData = async () => {
  try {
    const data = await Promise.all([apiRequest("/api/banners")]);
    console.log(data[0]);
    
    renderBanners(data[0]);
  } catch (error) {
    console.log(error);
    
  }
};

window.addEventListener("load", fetchHomeData);
