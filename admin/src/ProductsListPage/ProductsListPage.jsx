import React, { useState } from "react";
import { useMutation, useQuery, useQueryCache } from "react-query";
import { deleteIngredient, getIngredients, editIngredient } from "../api";
import { EditIngredient } from "./EditIngredientPage";

export const ProductsList = () => {
  const [editItem, setEditItem] = useState(null);
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
  const [updateItem] = useMutation(editIngredient, {
    onSuccess: () => {
      cache.invalidateQueries("ingredients");
    }
  });

  return (
    <div>
      {editItem ? (
        <EditIngredient
          item={editItem}
          updateItem={updateItem}
          setEditItem={setEditItem}
        />
      ) : (
        <fieldset style={{ width: "fit-content", margin: "auto" }}>
          <legend>s List</legend>
          {isError && <span>{error?.message}</span>}
          {isLoading && <span>Loading ...</span>}
          {isSuccess &&
            data.map((item, i) => (
              <div key={item.name + i} style={itemStyle}>
                <span>{item.name}</span>
                <span>
                  <button
                    style={{ margin: "0.5rem" }}
                    onClick={() => setEditItem(item)}
                  >
                    Edit
                  </button>
                  <button
                    style={{ margin: "0.5rem" }}
                    onClick={() => deleteItem(item.slug)}
                  >
                    X
                  </button>
                </span>
              </div>
            ))}
        </fieldset>
      )}
    </div>
  );
};

const itemStyle = {
  justifyContent: "space-between",
  display: "flex",
  alignItems: "center"
};
