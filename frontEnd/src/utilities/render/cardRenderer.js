import Card from "../../components/cards/card.js";
const createCards = (itemClass, data) => {
  const container = document.querySelector(itemClass);
  console.log(container);
  
  data.forEach((item) => {
    const { title, slug, type, genres, poster } = item;
    container.insertAdjacentHTML(
      "afterbegin",
      Card(title, slug, type, genres, poster),
    );
  });
};
export default createCards;
