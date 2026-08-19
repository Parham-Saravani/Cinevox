import AuthLoginContent from "../../components/auth/login.js";
import AuthSignupContent from "../../components/auth/signup.js";
import signupOperation from "./signup.js";
import loginOperation from "./login.js";

const items = document.querySelectorAll(".auth-header-item");
const contentContainer = document.querySelector(".auth-content");
const authForm = document.querySelector(".auth-form");
const authHeaderHandler = (event) => {
  const { target } = event;
  const status = checkIsItemAlreadyActive(target);
  if (status) return;
  addActiveClass(target);
  changeContentHandler(target.dataset.status);
};
const checkIsItemAlreadyActive = (target) => {
  if (target.classList.contains("auth-header-active")) {
    return true;
  }
};
const addActiveClass = (target) => {
  document
    .querySelector(".auth-header-active")
    .classList.remove("auth-header-active");
  target.classList.add("auth-header-active");
};
const changeContentHandler = (status) => {
  switch (status) {
    case "login":
      changeContent(AuthLoginContent());
      loginOperation();
      document.title = "Login | Cinevo";
      break;
    case "signup":
      changeContent(AuthSignupContent());
      signupOperation();
      document.title = "Signup | Cinevo";
      break;
  }
};
const changeContent = (content) => {
  contentContainer.innerHTML = "";
  contentContainer.insertAdjacentHTML("afterbegin", content);
};
items.forEach((item) => {
  item.addEventListener("click", authHeaderHandler);
});
export default changeContentHandler;