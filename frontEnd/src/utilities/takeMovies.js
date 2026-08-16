import { apiRequest } from "./services/apiRequest";
import createCards from "./render/cardRenderer";
const fetchDataAndCreateCards = async (elementClassName) => {
  const data = await apiRequest("/api/movies");
  createCards(elementClassName, data);
};

window.addEventListener("load", fetchDataAndCreateCards);
export default fetchDataAndCreateCards;
