const form = document.querySelector(".auth-form");

const showPassword = (event) => {
  event.preventDefault();
  const showPasswordBtn = event.target.closest(".show-password");
  if (showPasswordBtn) {
    if (showPasswordBtn.previousElementSibling.type === "text") {
      showPasswordBtn.previousElementSibling.setAttribute("type", "password");
    } else {
      showPasswordBtn.previousElementSibling.setAttribute("type", "text");
    }
  }
};

form.addEventListener("click", showPassword);
