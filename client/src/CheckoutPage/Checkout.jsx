import React from "react";
import { Button } from "../components/Button";
import { Link, useHistory } from "react-router-dom";

import { totalCostCalc } from "../totalCostCalc";

import { useSelector } from "react-redux";
import { getPizza } from "state/pizza/selectors";
import { getIngredients } from "state/ingredients/selectors";

export const CheckoutPage = () => {
  const history = useHistory();
  const pizza = useSelector(getPizza);
  const ingredients = useSelector(getIngredients);

  const { size, dough, sauce, cheese, veggies, meat } = pizza;

  if (ingredients === null) {
    history.push("/");
  }

  const getInrgedientName = value =>
    ingredients.find(i => i.slug === value)?.name;

  const totalCost = totalCostCalc(pizza, ingredients);

  return (
    <div className="container">
      <div>
        <span className="order-item-name">Size: </span>
        <span>{getInrgedientName(size)}</span>
      </div>
      <div>
        <span className="order-item-name">Dough: </span>
        <span>{getInrgedientName(dough)}</span>
      </div>
      <div>
        <span className="order-item-name">Sauce: </span>
        <span>{getInrgedientName(sauce)}</span>
      </div>
      <div>
        <span className="order-item-name">Cheese: </span>
        <span>{cheese.map(item => getInrgedientName(item)).join(", ")}</span>
      </div>
      <div>
        <span className="order-item-name">Veggies: </span>
        <span>{veggies.map(item => getInrgedientName(item)).join(", ")}</span>
      </div>
      <div>
        <span className="order-item-name">Meat: </span>
        <span>{meat.map(item => getInrgedientName(item)).join(", ")}</span>
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
