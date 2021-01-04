import React from "react";
import { HOST } from "configData";
import { ToppingsPreview } from "./ToppingPreview";

export const PizzaPreview = ({ pizza, dough, size, veggies, meat, cheese }) => {
  const getImagePath = (array, item) => {
    return array.filter(i => i.slug === item)[0].image;
  };

  const sizeImage = getImagePath(size, pizza.size);
  const doughImage = getImagePath(dough, pizza.dough);

  return (
    <div className={""} style={{ position: "relative" }}>
      <div>
        <img src={HOST + "/" + sizeImage} alt="plate" />
      </div>
      <div style={{ position: "absolute", top: "0" }}>
        <img src={HOST + "/" + doughImage} alt="dough" />
      </div>
      <ToppingsPreview topppings={pizza.cheese} ingredients={cheese} />
      <ToppingsPreview topppings={pizza.veggies} ingredients={veggies} />
      <ToppingsPreview topppings={pizza.meat} ingredients={meat} />
    </div>
  );
};
