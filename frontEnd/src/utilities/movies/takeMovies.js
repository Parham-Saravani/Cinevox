import { apiRequest } from "../services/apiRequest";
const fetchData = async () => {
  const data = await apiRequest("/api/movies");
  console.log(data);
};

window.addEventListener("load", fetchData);
export default fetchData;
