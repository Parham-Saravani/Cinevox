import Card from "../../components/cards/card.js";
const createCards = (itemClass, data, isSlider = false) => {
  const container = document.querySelector(itemClass);
  container.innerHTML = "";
  data.forEach((item) => {
    const { title, slug, type, genres, poster } = item;
    container.insertAdjacentHTML(
      "afterbegin",
      Card(title, slug, type, genres, poster, isSlider),
    );
  });
  document.querySelectorAll(".card-image").forEach((item) => {
    item.addEventListener("load", () => {
      item.classList.remove("animate-pulse", "bg-gray-900");
      item.classList.add("animate-fadeIn");
      item.nextElementSibling.classList.remove("hidden");
    });
  });
};
export default createCards;
