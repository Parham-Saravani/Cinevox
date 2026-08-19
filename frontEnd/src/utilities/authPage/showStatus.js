import toastHandler from "../toast/toast.js";
import removeLoading from "./removeLoading.js";
const showOperationStatus = (target, message) => {
  if (message === "USER_CREATED" || message === "LOGIN_SUCCESSFUL") {
    location.replace("/");
  } else if (message === "USERNAME_TAKEN") {
    toastHandler("Username taken!", "fail");
    removeLoading(target, "Sign Up");
  } else if (message === "EMAIL_USED") {
    toastHandler("Email is Already exist!", "fail");
    removeLoading(target, "Sign Up");
  } else if (message === "WRONG_CREDENTIALS") {
    toastHandler("The Email or Password you entered is incorrect!", "fail");
    removeLoading(target, "Sign Up");
  } else if (message === "INVALID-DATA") {
    toastHandler("Please Enter valid Credentials!", "fail");
    removeLoading(target, "Sign Up");
  } else if (message === "ALREADY_LOGIN") {
    toastHandler("You are already logged in on another device.", "fail");
    removeLoading(target, "Sign Up");
  } else {
    toastHandler("Something goes wrong, Please try again.", "fail");
    removeLoading(target, "Sign Up");
  }
};

export default showOperationStatus;
