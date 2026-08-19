const addLoadingState = (element) => {
  element.replaceChildren();
  element.disabled = true;
  element.classList.add("flex", "justify-center" , 'items-center');
  element.insertAdjacentHTML(
    "beforeend",
    `
    <div class="loader w-4 h-4 rounded-full animate-loader aspect-square bg-cta-primary"></div>

    `,
  );
};

export default addLoadingState;
