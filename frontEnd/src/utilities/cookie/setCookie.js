const createCookie = (name, value, isExpiresNeed = false) => {  
  const date = new Date();
  date.setDate(date.getDate() + 7);
  document.cookie = `${name}=${value};path=/;expires=${isExpiresNeed ? date : ""}`;
};
export default createCookie;
