import React from "react";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import { usePizza } from "../PizzaContext";
import { SIZE, DOUGH, SAUCE, CHEESE, VEGGIES, MEAT } from "../configData";
import { totalCostCalc } from "../totalCostCalc";
import { INITIAL_PIZZA_CONFIG } from "../configData";

export const CheckoutPage = () => {
  //initial data for test
  const { pizzaConfig = INITIAL_PIZZA_CONFIG } = usePizza() ?? {};

  const totalCost = totalCostCalc(pizzaConfig);

  const { size, dough, sauce, cheese, veggies, meat } = pizzaConfig;

  return (
    <div className="container">
      <div>
        <span className="order-item-name">Size: </span>
        <span>{SIZE[size].value}</span>
      </div>
      <div>
        <span className="order-item-name">Dough: </span>
        <span>{DOUGH[dough].value}</span>
      </div>
      <div>
        <span className="order-item-name">Sauce: </span>
        <span>{SAUCE[sauce].value}</span>
      </div>
      <div>
        <span className="order-item-name">Cheese: </span>
        <span>{cheese.map(item => CHEESE[item].value).join(", ")}</span>
      </div>
      <div>
        <span className="order-item-name">Veggies: </span>
        <span>{veggies.map(item => VEGGIES[item].value).join(", ")}</span>
      </div>
      <div>
        <span className="order-item-name">Meat: </span>
        <span>{meat.map(item => MEAT[item].value).join(", ")}</span>
      </div>
      <div>
        <span className="order-item-name">Total cost: </span>
        <span>{totalCost} RUB</span>
      </div>
      <div className="container">
        <Link to="/order">
          <Button className="order-button">Order</Button>
        </Link>
      </div>
    </div>
  );
};
