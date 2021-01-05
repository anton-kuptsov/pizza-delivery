import React from "react";
import { Button } from "../components/Button";
import { useHistory } from "react-router-dom";

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
  const sauce = useSelector(getIngredientNameBySlug(pizza.sauce));
  const cheese = useSelector(getIngredientNameBySlug(pizza.cheese));
  const meat = useSelector(getIngredientNameBySlug(pizza.meat));
  const veggies = useSelector(getIngredientNameBySlug(pizza.veggies));

  const totalCost = totalCostCalc(pizza, ingredients);

  if (Array.isArray(ingredients) && !ingredients.length) {
    history.push("/");
  }

  return (
    <div>
      <div className={style.container}>
        <div className={style.desc}>
          <span className={style.desc__name}>Маргарита</span>
          <div className={style.desc__base}>
            {size} на {pizza.dough === "thin" ? "тонком" : "толстом"} тесте •{" "}
            {sauce} соус {cheese}
            {veggies}
            {meat}
          </div>
          <div className={style.line} />
          <div className={style.price}>{totalCost} руб</div>
        </div>
      </div>
      <div className={style.confirm_container}>
        <div className={style.info_row}>
          <div>Стоимость заказа</div>
          <div>{totalCost} руб</div>
        </div>
        <div className={style.info_row}>
          <div>Доставка</div>
          <div>бесплатно</div>
        </div>
        <div className={style.line} />
        <div className={style.info_row__amount}>
          <div>К оплате</div>
          <div>{totalCost} руб</div>
        </div>
        <div className={style.order_button}>
          <Button>Оплатить {totalCost} руб</Button>
        </div>
      </div>
    </div>
  );
};
