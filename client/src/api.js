import { HOST } from "./configData";

export const getIngredients = () => {
  const URL = `${HOST}/ingredients`;
  const result = fetch(URL).then(res => res.json());
  return result;
};

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
