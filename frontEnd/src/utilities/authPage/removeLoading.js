const removeLoading = (element, value) => {
  element.disabled = false;
  element.classList.remove("flex", "items-center", "justify-center");
  element.textContent = value;
};

export default removeLoading;
