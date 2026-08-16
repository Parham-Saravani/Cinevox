import { apiRequest } from "./services/apiRequest";
import createCards from "./render/cardRenderer";
const fetchDataAndCreateCards = async (endpoint , elementClassName) => {
  const data = await apiRequest(endpoint);
  createCards(elementClassName, data);
};

export default fetchDataAndCreateCards;
