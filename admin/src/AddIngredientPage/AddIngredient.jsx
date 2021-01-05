import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { postIngredient } from "../api";
import { CategorySelector } from "../CategorySelector";
import { categories } from "../config";

export const AddIngredient = () => {
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
            Ингредиент добавлен успешно!
          </div>
        )
      )}
      <form onSubmit={onSubmit}>
        <fieldset style={{ width: "fit-content", margin: "1rem auto" }}>
          <legend>Добавить ингредиент</legend>
          <div>
            <label htmlFor="name">Наименование:</label>
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
            <label htmlFor="category">Категория:</label>
            <CategorySelector
              ref={register({ required: "Required field" })}
              id="category"
              name="category"
              items={categories}
            />
          </div>
          <div>
            <label htmlFor="price">Цена:</label>
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
            <label htmlFor="slug">Код:</label>
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

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              margin: "0.5rem auto"
            }}
          >
            <div>
              <label htmlFor="thumbnail">Превью:</label>
              <input
                ref={register({ required: "Required field" })}
                id="thumbnail"
                type="file"
                name="thumbnail"
              />
            </div>
            <div>
              <label htmlFor="image">Картинка:</label>
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
            <button
              disabled={isLoading}
              style={{ marginTop: "1rem", height: "3rem" }}
            >
              {isLoading ? "Загрузка..." : "Добавить"}
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
