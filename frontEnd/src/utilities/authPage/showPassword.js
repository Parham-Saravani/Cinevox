const form = document.querySelector(".auth-form");
const slashEye = `<svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="eye-slash"><rect width="256" height="256" fill="none"></rect><line x1="48" x2="208" y1="40.001" y2="216.001" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M154.9071 157.599a40.00028 40.00028 0 0 1-53.8142-59.19562M73.99446 68.59479C33.22519 89.24034 16 128.00122 16 128.00122s32 71.99219 112 71.99219a118.0238 118.0238 0 0 0 53.99756-12.59461M208.60953 169.10059C230.41132 149.57342 240 128.00122 240 128.00122S208 55.99341 128 55.99341a125.31923 125.31923 0 0 0-20.68221 1.68414M135.52737 88.709a40.02411 40.02411 0 0 1 32.29785 35.52874"></path></svg>`;
const eye = `<svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="eye"><rect width="256" height="256" fill="none"></rect><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M128,55.99219C48,55.99219,16,128,16,128s32,71.99219,112,71.99219S240,128,240,128,208,55.99219,128,55.99219Z"></path><circle cx="128" cy="128.001" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></circle></svg>`
const showPassword = (event) => {
  const showPasswordBtn = event.target.closest(".show-password");
  if (showPasswordBtn) {
    event.preventDefault();
    if (showPasswordBtn.previousElementSibling.type === "text") {
      showPasswordBtn.innerHTML = eye;
      showPasswordBtn.previousElementSibling.setAttribute("type", "password");
    } else {
      showPasswordBtn.innerHTML = slashEye;
      showPasswordBtn.previousElementSibling.setAttribute("type", "text");
    }
  }
};

form.addEventListener("click", showPassword);
