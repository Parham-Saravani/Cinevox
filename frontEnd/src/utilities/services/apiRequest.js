const baseUrl = "http://localhost:64235";
const apiRequest = async (addr , param = null , method = "GET", body = null ) => {
  const data = await fetch(`${baseUrl}${addr}/${param !== null ? param : ''}`, {
    method: `${method}`,
    headers: {
      "content-type": "application/json",
    },
    ...(method !== "GET" && JSON.stringify(body)),
  });
  return data.json();
};

export { apiRequest };