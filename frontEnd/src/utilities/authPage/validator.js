const validator = (value, alert, condition) => {
  if (condition(value)) {
    showAlert("hide", alert);
    return true;
  } else {
    showAlert("show", alert);
    return false;
  }
};
const emailValidator = (email, emailAlertEl) => {
  const emailRegex = /[a-zA-Z1-9]+@[a-zA-Z]+\.[a-zA-Z]+/;
  if (emailRegex.test(email)) {
    showAlert("hide", emailAlertEl);
    return true;
  } else {
    showAlert("show", emailAlertEl);
    return false;
  }
};
const confirmPasswordValidator = ( confirmPassword, password, confirmPasswordAlertEl ) => {
  if (confirmPassword === password) {
    showAlert("hide", confirmPasswordAlertEl);
    return true;
  } else {
    showAlert("show", confirmPasswordAlertEl);
    return false;
  }
};

const showAlert = (status, alert) => {
  if (status === "show") {
    alert.classList.remove("hidden");
  } else {
    alert.classList.add("hidden");
  }
};
export { validator, emailValidator, confirmPasswordValidator };
