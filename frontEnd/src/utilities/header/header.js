import checkAuthCookie from "../cookie/checkCookie";
const authBtn = document.querySelector(".auth-btn");
const profileBtn = document.querySelector(".profile-content");

const checkAuth = () => {
  const isLogin = checkAuthCookie();
  if (isLogin) {
    authBtn.classList.add("hidden");
    profileBtn.classList.remove("hidden");
  } else {
    authBtn.classList.remove("hidden");
    profileBtn.classList.add("hidden");
  }
};

window.addEventListener("DOMContentLoaded", checkAuth);
