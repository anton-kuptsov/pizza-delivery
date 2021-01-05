import React from "react";
import { HOST } from "../configData";
import { ToppingsPreview } from "./ToppingsPreview";
import style from "../styles/PizzaPreview.module.scss";

export const PizzaPreview = ({ pizza, dough, size, veggies, meat, cheese }) => {
  const getImagePath = (array, item) => {
    return array.filter(i => i.slug === item)[0]?.image;
  };

  const sizeImage = getImagePath(size, pizza.size);
  const doughImage = getImagePath(dough, pizza.dough);

  return (
    <div className={style.container}>
      <div>
        <img src={HOST + "/" + sizeImage} alt="plate" />
      </div>
      <div className={style.dough}>
        <img
          src={HOST + "/" + doughImage}
          alt="dough"
          style={pizza.size !== "standart" ? { transform: "scale(1.05)" } : {}}
        />
      </div>
      <ToppingsPreview toppings={pizza.cheese} ingredients={cheese} />
      <ToppingsPreview toppings={pizza.veggies} ingredients={veggies} />
      <ToppingsPreview toppings={pizza.meat} ingredients={meat} />
    </div>
  );
};
