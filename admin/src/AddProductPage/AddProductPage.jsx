import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { postIngredient } from "../api";

export const AddProductPage = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const onSubmit = handleSubmit(async data => {
    try {
      setLoading(true);
      const result = await postIngredient(data);
      setData(result);
      setLoading(false);
      setError(null);
      reset();
    } catch (error) {
      setError(error);
      setLoading(false);
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
            Ingredient added success!
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
          <button disabled={isLoading} style={{ margin: "1rem" }}>
            {isLoading ? "Loading..." : "Add topping"}
          </button>
        </fieldset>
      </form>
    </div>
  );
};
