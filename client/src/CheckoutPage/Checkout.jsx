import React from "react";
import { Button } from "../components/Button";
import { Link, useHistory } from "react-router-dom";

import { totalCostCalc } from "../totalCostCalc";

import { useSelector } from "react-redux";
import { getPizza } from "../state/pizza/selectors";
import {
  getIngredients,
  getIngredientNameBySlug
} from "../state/ingredients/selectors";
import style from "../styles/Checkout.module.scss";

export const CheckoutPage = () => {
  const history = useHistory();
  const pizza = useSelector(getPizza);

  const ingredients = useSelector(getIngredients);

  const size = useSelector(getIngredientNameBySlug(pizza.size));
  const dough = useSelector(getIngredientNameBySlug(pizza.dough));
  const sauce = useSelector(getIngredientNameBySlug(pizza.sauce));
  const cheese = useSelector(getIngredientNameBySlug(pizza.cheese));
  const meat = useSelector(getIngredientNameBySlug(pizza.meat));
  const veggies = useSelector(getIngredientNameBySlug(pizza.veggies));

  const totalCost = totalCostCalc(pizza, ingredients);

  if (Array.isArray(ingredients) && !ingredients.length) {
    history.push("/");
  }

  return (
    <div className={style.container}>
      <div className={style.desc}>
        <span className="order-item-name">Size: </span>
        <span>{size}</span>
      </div>
      <div>
        <span className="order-item-name">Dough: </span>
        <span>{dough}</span>
      </div>
      <div>
        <span className="order-item-name">Sauce: </span>
        <span>{sauce}</span>
      </div>
      <div>
        <span className="order-item-name">Cheese: </span>
        <span>{cheese}</span>
      </div>
      <div>
        <span className="order-item-name">Veggies: </span>
        <span>{veggies}</span>
      </div>
      <div>
        <span className="order-item-name">Meat: </span>
        <span>{meat}</span>
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
