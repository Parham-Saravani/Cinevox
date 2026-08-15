import Card from "../../components/cards/card.js";
const createElements = (elementClassName, data) => {
  const container = document.querySelector(elementClassName);
  data.forEach((item) => {
    console.log(item);
    const { title, slug, type, genres, poster } = item;
  });
};
export default createElements