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

  const formData = new FormData();
  formData.append("image", data.image[0]);
  formData.append("name", data.name);
  formData.append("slug", data.slug);
  formData.append("price", data.price);
  formData.append("category", data.category);

  const result = fetch(URL, {
    method: "POST",
    body: formData
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
