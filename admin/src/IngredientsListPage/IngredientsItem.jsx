import React from "react";
import { useHistory } from "react-router-dom";
import { HOST } from "../config";

export const IngredientsItem = ({ deleteItem, item }) => {
  const history = useHistory();
  const { name, price, thumbnail, id, slug, category } = item;

  const handleEdit = () => {
    history.push(`/edit-ingredient/${id}`);
  };

  return (
    <div>
      <fieldset style={{ width: "fit-content", margin: "1rem" }}>
        <legend>{name}</legend>
        <div style={itemStyle}>
          <div style={{ display: "flex" }}>
            <div style={{ marginLeft: "0.5rem" }}>
              <img
                src={HOST + "/" + thumbnail}
                alt={category}
                style={{ maxWidth: "4rem", padding: "0.5rem" }}
              />
            </div>
            <div>
              <div>ID: {id}</div>
              <div>Цена: {price} руб.</div>
              <div>Код: {slug}</div>
            </div>
          </div>
          <div>
            <button style={{ margin: "0.5rem" }} onClick={handleEdit}>
              Редактировать
            </button>
            <button style={{ margin: "0.5rem" }} onClick={() => deleteItem(id)}>
              Удалить
            </button>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

const itemStyle = {
  justifyContent: "space-between",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};
