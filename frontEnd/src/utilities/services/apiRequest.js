const baseUrl = "http://localhost:64235";
const apiRequest = async (addr, param = null, method = "GET", body = null) => {
  const options = {
    method: `${method}`,
    headers: {
      "content-type": "application/json",
    },
  };
  if (body) {
    options.body = JSON.stringify(body);
  }
  const data = await fetch(`${baseUrl}${addr}/${param ? param : ""}`, options);
  return data.json();
};

export { apiRequest };