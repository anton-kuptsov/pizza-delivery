import { HOST } from "configData";
import React from "react";

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
      {pizza.cheese.map((item, i) => {
        const itemImage = getImagePath(cheese, item);
        return (
          <div key={item + i} style={{ position: "absolute", top: 0, left: 0 }}>
            <img src={HOST + "/" + itemImage} alt={item} />
          </div>
        );
      })}

      {pizza.veggies.map((item, i) => {
        const itemImage = getImagePath(veggies, item);
        return (
          <div
            key={item + i}
            style={{ position: "absolute", top: "24px", left: "24px" }}
          >
            <img src={HOST + "/" + itemImage} alt={item} />
          </div>
        );
      })}

      {pizza.meat.map((item, i) => {
        const itemImage = getImagePath(meat, item);
        return (
          <div
            key={item + i}
            style={{ position: "absolute", top: "24px", left: "24px" }}
          >
            <img src={HOST + "/" + itemImage} alt={item} />
          </div>
        );
      })}
    </div>
  );
};
