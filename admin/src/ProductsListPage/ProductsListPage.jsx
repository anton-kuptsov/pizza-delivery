import React, { useState } from "react";
import { useMutation, useQuery, useQueryCache } from "react-query";
import { deleteIngridient, getIngridients, editIngridient } from "../api";
import { EditIngridient } from "./EditIngridientPage";

export const ProductsList = () => {
  const [editItem, setEditItem] = useState(null);
  const cache = useQueryCache();
  const { isError, isLoading, isSuccess, error, data } = useQuery(
    "ingridients",
    getIngridients
  );
  const [deleteItem] = useMutation(deleteIngridient, {
    onSuccess: () => {
      cache.invalidateQueries("ingridients");
    }
  });
  const [updateItem] = useMutation(editIngridient, {
    onSuccess: () => {
      cache.invalidateQueries("ingridients");
    }
  });

  return (
    <div>
      {editItem ? (
        <EditIngridient
          item={editItem}
          updateItem={updateItem}
          setEditItem={setEditItem}
        />
      ) : (
        <fieldset style={{ width: "fit-content", margin: "auto" }}>
          <legend>Ingridients List</legend>
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
