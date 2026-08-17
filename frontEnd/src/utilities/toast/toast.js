const toast = document.querySelector(".toast");
const toastMessage = document.querySelector(".toast-message");
const toastHandler = (message, status) => {
  toast.classList.remove("toast-hide");
  changeToastStatus(status);
  changeToastMessage(message);
  hideToast();
};

const changeToastStatus = (status) => {
  if (status === "success") {
    toast.classList.remove("toast-fail");
    toast.classList.add("toast-success");
  } else {
    toast.classList.remove("toast-success");
    toast.classList.add("toast-fail");
  }
};
const changeToastMessage = (message) => {
  toastMessage.textContent = message;
};
const hideToast = () => {
  setTimeout(() => {
    toast.classList.add("toast-hide");
  }, 3000);
};
export default toastHandler;
