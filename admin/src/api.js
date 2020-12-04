const HOST = "http://localhost:3001";

export const getIngridients = () => {
  const URL = `${HOST}/ingredients`;
  const result = fetch(URL).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Error! Something went wrong.");
    }
  });
  return result;
};

export const postIngridient = data => {
  const URL = `${HOST}/ingredients`;

  const result = fetch(URL, {
    method: "POST",
    body: data
  }).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Error! Something went wrong.");
    }
  });
  return result;
};

export const deleteIngridient = item => {
  const URL = `${HOST}/ingredients/${item}`;

  const result = fetch(URL, {
    method: "DELETE"
  }).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Error! Something went wrong.");
    }
  });
  return result;
};

export const editIngridient = ({ item, data }) => {
  const URL = `${HOST}/ingredients/${item}`;

  const result = fetch(URL, {
    method: "PUT",
    body: data
  }).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Error! Something went wrong.");
    }
  });
  return result;
};

export const getIngridient = (key, item) => {
  const URL = `${HOST}/ingredients/${item}`;
  const result = fetch(URL).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Error! Something went wrong.");
    }
  });
  return result;
};
