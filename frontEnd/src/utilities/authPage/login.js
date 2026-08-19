import { validator , emailValidator } from "./validator";
import { apiRequest } from "../services/apiRequest.js"
import addLoadingState from "./loadingState.js";
import showOperationStatus from "./showStatus.js";
import createCookie from "../cookie/setCookie.js";

const setClickEvent = () => {
  const loginBtn = document.querySelector(".login-btn");
  loginBtn.addEventListener("click", loginHandler);
};

const loginHandler = async (event) => { 
  event.preventDefault()
  const { email, password, remembermeEl, emailAlertEl, passwordAlertEl } = takeValues();
  let isValid = false;
  const isEmailValid = emailValidator(email , emailAlertEl)
  const isPasswordValid = validator(password , passwordAlertEl , value => value.length >= 8)
  isValid = isEmailValid && isPasswordValid;
  if(isValid){
    addLoadingState(event.target)
    const data = await apiRequest('/api/user/login', null , 'POST', {email , password})  
    console.log(data);
    
    showOperationStatus(event.target , data.message)
    if(data.message === 'LOGIN_SUCCESSFUL' && remembermeEl.checked){
      createCookie('auth-token', data.token, true)
    }else if(data.message === 'LOGIN_SUCCESSFUL'){
      createCookie('auth-token', data.token ,false)
    }
  }
};

const takeValues = () => {
  const elements = {
    emailEl: document.querySelector(".login-email"),
    passwordEl: document.querySelector(".login-password"),
    remembermeEl: document.querySelector("#remember-checkbox"),
    emailAlertEl: document.querySelector(".email-alert"),
    passwordAlertEl: document.querySelector(".password-alert"),
  };
  const email = elements.emailEl.value.trim();
  const password = elements.passwordEl.value.trim();
  return { email, password, remembermeEl: elements.remembermeEl, emailAlertEl: elements.emailAlertEl, passwordAlertEl: elements.passwordAlertEl, };
};
export default setClickEvent;
window.addEventListener('load' , setClickEvent)