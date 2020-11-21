import React from "react";
import { Button } from "../components/Button";
import { INITIAL_PIZZA_CONFIG, INITIAL_PIZZA_PRICE } from "../configData";

export const CheckoutPage = ({
  pizza = INITIAL_PIZZA_CONFIG,
  totalCost = INITIAL_PIZZA_PRICE
}) => {
  const { SIZE, DOUGH, SAUCE, CHEESE, VEGGIES, MEAT } = pizza;
  return (
    <div className="container">
      <div>
        <span className="order-item-name">Size: </span>
        <span>{SIZE}</span>
      </div>
      <div>
        <span className="order-item-name">Dough: </span>
        <span>{DOUGH}</span>
      </div>
      <div>
        <span className="order-item-name">Sauce: </span>
        <span>{SAUCE}</span>
      </div>
      <div>
        <span className="order-item-name">Cheese: </span>
        <span>{CHEESE.join(", ")}</span>
      </div>
      <div>
        <span className="order-item-name">Veggies: </span>
        <span>{VEGGIES.join(", ")}</span>
      </div>
      <div>
        <span className="order-item-name">Meat: </span>
        <span>{MEAT.join(", ")}</span>
      </div>
      <div>
        <span className="order-item-name">Total cost: </span>
        <span>{totalCost} RUB</span>
      </div>
      <div className="container">
        <Button className="order-button">Order</Button>
      </div>
    </div>
  );
};
