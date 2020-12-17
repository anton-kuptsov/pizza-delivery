const HOST = "http://localhost:3001";

export const getOrders = () => {
  const URL = `${HOST}/orders`;
  const result = fetch(URL).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Error! Something went wrong.");
    }
  });
  return result;
};

export const postOrder = data => {
  const URL = `${HOST}/orders`;
  const result = fetch(URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Error! Something went wrong.");
    }
  });
  return result;
};
