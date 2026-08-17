const baseUrl = "http://localhost:64235";
const apiRequest = async (addr, param = null, method = "GET") => {
  console.log(`${baseUrl}${addr}`);

  const data = await fetch(`${baseUrl}${addr}/${param ? param : ""}`, {
    method: `${method}`,
    headers: {
      "content-type": "application/json",
    },
  });
  return data.json();
};

export { apiRequest };
