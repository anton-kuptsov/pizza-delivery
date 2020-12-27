import React, { useState } from "react";
import { useMutation, useQuery, useQueryCache } from "react-query";
import { deleteIngredient, getIngredients } from "../api";
import { CategorySelector } from "../CategorySelector";
import { categories } from "../config";
import { IngredientsItem } from "./IngredientsItem";

export const IngredientsList = () => {
  const [sortBy, setSortBy] = useState("all");
  const cache = useQueryCache();
  const { isError, isLoading, isSuccess, error, data } = useQuery(
    "ingredients",
    getIngredients
  );

  const [deleteItem] = useMutation(deleteIngredient, {
    onSuccess: () => {
      cache.invalidateQueries("ingredients");
    }
  });

  if (isError) {
    return <span>{error?.message}</span>;
  }

  if (isLoading) {
    return <span>Loading ...</span>;
  }

  return (
    <div>
      <div style={{ marginTop: "2rem" }}>
        <label htmlFor="categorySelector">Выбрать категорию:</label>
        <CategorySelector
          id="categorySelector"
          name="categorySelector"
          value={sortBy}
          items={categories}
          onChange={e => setSortBy(e.target.value)}
          style={{ cursor: "pointer" }}
          all
        />
      </div>
      <div style={{ display: "flex", margin: "1rem", flexFlow: "wrap" }}>
        {isSuccess &&
          data
            .filter(item =>
              sortBy !== "all" ? item.category === sortBy : item
            )
            .map((item, i) => (
              <IngredientsItem
                key={item.name + i}
                item={item}
                deleteItem={deleteItem}
              />
            ))}
      </div>
    </div>
  );
};
