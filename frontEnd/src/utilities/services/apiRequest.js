const baseUrl = "http://localhost:64235";
const apiRequest = async (addr, method = "GET", body = null) => {
  const data = await fetch(`${baseUrl}${addr}`, {
    method: `${method}`,
    headers: {
      "content-type": "application/json",
    },
    ...(method !== "GET" && JSON.stringify(body)),
  });
  return data.json();
};

export { apiRequest };