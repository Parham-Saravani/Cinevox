import Card from "../../components/cards/card.js";
const createCards = (itemClass, data , isSlider = false) => {
  const container = document.querySelector(itemClass);  
  data.forEach((item) => {
    const { title, slug, type, genres, poster } = item;
    container.insertAdjacentHTML(
      "afterbegin",
      Card(title, slug, type, genres, poster , isSlider),
    );
  });
};
export default createCards;
