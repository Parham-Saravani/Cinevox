import { validator , emailValidator, confirmPasswordValidator } from "./validator";
import { apiRequest } from "../services/apiRequest.js"
import addLoadingState from "./loadingState.js";
import showOperationStatus from "./showStatus.js";
import createCookie from "../cookie/setCookie.js";

const setClickEvent = () => {
  const signupBtn = document.querySelector(".signup-btn");
  signupBtn.addEventListener("click", signupHandler);
};
const signupHandler = async (event) => {
  const { username, email, password, confirmPassword, usernameAlertEl, emailAlertEl, passwordAlertEl, confirmPasswordAlertEl, } = takeAllValues();
  let isValid = false;
  const isUsernameValid = validator( username, usernameAlertEl, (value) => value.length >= 4, );
  const isEmailValid = emailValidator(email, emailAlertEl );
  const isPasswordValid = validator( password, passwordAlertEl, (value) => value.length >= 8, );
  const isPasswordSame = confirmPasswordValidator( confirmPassword, password, confirmPasswordAlertEl);
  isValid = isUsernameValid && isEmailValid && isPasswordValid && isPasswordSame;
  if(isValid){
    addLoadingState(event.currentTarget)
    const data = await apiRequest("/api/user",null , 'POST', {username , email , password})    
    if(data.message === 'USER_CREATED'){
      createCookie('auth-token', data.token, true)
    }
    showOperationStatus(event.target , data.message)
  }
};

const takeAllValues = () => {
  const elements = {
    usernameEl: document.querySelector(".signup-username"),
    emailEl: document.querySelector(".signup-email"),
    passwordEl: document.querySelector(".signup-password"),
    confirmPasswordEl: document.querySelector(".signup-configm-password"),
    usernameAlertEl: document.querySelector(".username-alert"),
    emailAlertEl: document.querySelector(".email-alert"),
    passwordAlertEl: document.querySelector(".password-alert"),
    confirmPasswordAlertEl: document.querySelector(".confirm-password-alert"),
  };
  const username = elements.usernameEl.value.trim();
  const email = elements.emailEl.value.trim();
  const password = elements.passwordEl.value.trim();
  const confirmPassword = elements.confirmPasswordEl.value.trim();

  return {
    username,
    email,
    password,
    confirmPassword,
    usernameAlertEl: elements.usernameAlertEl,
    emailAlertEl: elements.emailAlertEl,
    passwordAlertEl: elements.passwordAlertEl,
    confirmPasswordAlertEl: elements.confirmPasswordAlertEl,
  };
};

export default setClickEvent;
