import React from "react";
import { HOST } from "../configData";
import style from "../styles/PizzaPreview.module.scss";

export const ToppingsPreview = ({ toppings, ingredients }) => {
  const getImagePath = (array, item) => {
    return array.filter(i => i.slug === item)[0]?.image;
  };

  return (
    <>
      {toppings.map((item, i) => {
        const itemImage = getImagePath(ingredients, item);
        return (
          <div key={item + i} className={style.toppings}>
            <img src={HOST + "/" + itemImage} alt={item} />
          </div>
        );
      })}
    </>
  );
};
