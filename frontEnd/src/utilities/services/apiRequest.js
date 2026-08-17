const baseUrl = "http://localhost:64235";
const apiRequest = async (addr, param = null, method = "GET", body = null) => {
  console.log(`${baseUrl}${addr}`);

  const data = await fetch(`${baseUrl}${addr}/${param ? param : ""}`, {
    method: `${method}`,
    headers: {
      "content-type": "application/json",
    },
    if(body) {
      body: JSON.stringify(body);
    },
  });
  return data.json();
};

export { apiRequest };
