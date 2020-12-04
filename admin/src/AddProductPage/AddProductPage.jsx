import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { postIngridient } from "../api";

export const AddProductPage = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(true);
  const [data, setData] = useState(null);

  const onSubmit = handleSubmit(async data => {
    try {
      setLoaded(false);
      const formData = new FormData();
      formData.append("image", data.image[0]);
      formData.append("name", data.name);
      formData.append("slug", data.slug);
      formData.append("price", data.price);
      formData.append("category", data.category);
      const result = await postIngridient(formData);
      setData(result);
      setLoaded(true);
      setError(null);
      reset();
    } catch (error) {
      setError(error);
      setLoaded(true);
    }
  });

  return (
    <div>
      {error ? (
        <div style={{ color: "red", margin: "auto", width: "400px" }}>
          ERROR: {error?.message}
        </div>
      ) : (
        data?.status && (
          <div style={{ margin: "1rem auto", width: "400px", color: "green" }}>
            Ingridient added success!
          </div>
        )
      )}
      <form onSubmit={onSubmit}>
        <fieldset style={{ width: "400px", margin: "auto" }}>
          <legend>Add new topping</legend>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              ref={register({ required: "Name is required" })}
              id="name"
              type="text"
              name="name"
            />
            {errors?.name && (
              <p style={{ color: "red", fontSize: "0.75rem" }}>
                {errors.name?.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="category">Category:</label>
            <select ref={register} id="category" name="category">
              <option>Cheese</option>
              <option>Sauce</option>
              <option>Veggies</option>
              <option>Meat</option>
            </select>
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input
              ref={register({
                required: "Price is required"
              })}
              id="price"
              type="tel"
              name="price"
            />
          </div>
          {errors?.price && (
            <p style={{ color: "red", fontSize: "0.75rem" }}>
              {errors.price?.message}
            </p>
          )}
          <div>
            <label htmlFor="slug">Slug:</label>
            <input
              ref={register({ required: "Slug is required" })}
              id="slug"
              type="text"
              name="slug"
            />
          </div>
          {errors?.slug && (
            <p style={{ color: "red", fontSize: "0.75rem" }}>
              {errors.slug?.message}
            </p>
          )}
          <div>
            <label htmlFor="image">Picture:</label>
            <input
              ref={register({ required: "Image is required" })}
              id="image"
              type="file"
              name="image"
            />
          </div>
          {errors?.image && (
            <p style={{ color: "red", fontSize: "0.75rem" }}>
              {errors.image?.message}
            </p>
          )}
          <button disabled={isLoaded ? false : true} style={{ margin: "1rem" }}>
            {!isLoaded ? "Loading..." : "Add topping"}
          </button>
        </fieldset>
      </form>
    </div>
  );
};
