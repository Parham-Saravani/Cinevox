const checkAuthCookie = (name) => {
  return document.cookie.includes("auth-token");
};
export default checkAuthCookie;