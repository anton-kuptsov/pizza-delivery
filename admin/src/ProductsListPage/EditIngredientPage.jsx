import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const EditIngredient = ({ item, updateItem, setEditItem }) => {
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const { name, price, slug, category } = item;
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name,
      price,
      slug,
      category
    }
  });

  const onSubmit = handleSubmit(async data => {
    try {
      setLoading(true);
      const result = await updateItem({ item: data.slug, data: data });
      if (result.status) {
        setEditItem(null);
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  });

  if (isLoading) {
    return (
      <div style={{ margin: "1rem auto", width: "400px" }}>Loading ...</div>
    );
  }

  return (
    <div>
      {error && (
        <div style={{ color: "red", margin: "auto", width: "400px" }}>
          ERROR: {error?.message}
        </div>
      )}

      <form onSubmit={onSubmit}>
        <fieldset style={{ width: "fit-content", margin: "1rem auto" }}>
          <legend>Edit ingredient "{item.name}"</legend>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              ref={register({ required: "Name is required" })}
              id="name"
              type="text"
              name="name"
              size={8}
            />
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="tel"
              ref={register({ required: "Required field" })}
              name="price"
              size={1}
            />
          </div>
          <div>
            <label htmlFor="slug">Slug:</label>
            <input
              type="text"
              ref={register({ required: "Required field" })}
              name="slug"
              size={8}
            />
          </div>
          <div>
            <div>
              <label htmlFor="category">Category:</label>
              <select
                ref={register({ required: "Required field" })}
                id="category"
                name="category"
              >
                <option>Cheese</option>
                <option>Sauce</option>
                <option>Veggies</option>
                <option>Meat</option>
              </select>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              margin: "0.5rem auto"
            }}
          >
            <div>
              <label htmlFor="image">Picture:</label>
              <input
                ref={register({ required: "Image is required" })}
                id="image"
                type="file"
                name="image"
              />
            </div>
            <button>Apply</button>
            <button>Close</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
