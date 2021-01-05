import React from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryCache } from "react-query";
import { useHistory, useParams } from "react-router-dom";
import { editIngredient, getIngredient } from "../api";
import { CategorySelector } from "../CategorySelector";
import { categories } from "../config";

export const EditIngredientPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const cache = useQueryCache();

  const { isError, isLoading, error, data } = useQuery(
    ["ingredientsItem", id],
    getIngredient
  );

  const [updateItem] = useMutation(editIngredient, {
    onSuccess: () => {
      cache.invalidateQueries("ingredientsItem");
    }
  });

  const { register, handleSubmit } = useForm({});

  const onSubmit = handleSubmit(async data => {
    try {
      const result = await updateItem({ id, data });
      if (result.status) {
        history.push("/");
      }
    } catch (error) {
      return error;
    }
  });

  if (isLoading) {
    return (
      <div style={{ margin: "1rem auto", width: "400px" }}>Loading ...</div>
    );
  }

  if (isError) {
    return (
      <div style={{ color: "red", margin: "auto", width: "400px" }}>
        ERROR: {error?.message}
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <fieldset style={{ width: "fit-content", margin: "1rem auto" }}>
          <legend>Редактирование ингридиента "{data.name}"</legend>
          <div>
            <label htmlFor="name">Наименование:</label>
            <input
              ref={register({ required: "Name is required" })}
              id="name"
              type="text"
              name="name"
              size={8}
              defaultValue={data.name}
            />
          </div>
          <div>
            <label htmlFor="price">Цена:</label>
            <input
              type="tel"
              ref={register({ required: "Required field" })}
              name="price"
              size={1}
              defaultValue={data.price}
            />
          </div>
          <div>
            <label htmlFor="slug">Код:</label>
            <input
              type="text"
              ref={register({ required: "Required field" })}
              name="slug"
              size={8}
              defaultValue={data.slug}
            />
          </div>
          <div>
            <div>
              <label htmlFor="category">Категория:</label>
              <CategorySelector
                ref={register({ required: "Required field" })}
                id="category"
                name="category"
                items={categories}
                defaultValue={data.category}
              />
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
              <label htmlFor="image">Картинка:</label>
              <input
                ref={register({ required: "Required field" })}
                id="image"
                type="file"
                name="image"
              />
            </div>
            <button>Сохранить</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
