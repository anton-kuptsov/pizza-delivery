import React from "react";

export const ToppingsPreview = ({ toppings, ingredients }) => {
  return (
    <>
      {toppings.map((item, i) => {
        const itemImage = getImagePath(ingredients, item);
        return (
          <div key={item + i} style={{ position: "absolute", top: 0, left: 0 }}>
            <img src={HOST + "/" + itemImage} alt={item} />
          </div>
        );
      })}
    </>
  );
};
