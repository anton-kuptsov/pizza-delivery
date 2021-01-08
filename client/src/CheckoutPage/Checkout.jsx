import React, { useState } from "react";
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
import { PaymentInfo } from "./PaymentInfo";
import { Navbar } from "../NavBar";
import { OrderSuccess } from "./OrderResult";
import { OrderError } from "./OrderResult";

export const CheckoutPage = () => {
  const [isError, setError] = useState(true);
  const [isSuccess, setSuccess] = useState(false);
  const [isDisable, setDisable] = useState(true);
  const history = useHistory();
  const pizza = useSelector(getPizza);
  const formId = "payment_form";

  const ingredients = useSelector(getIngredients);

  const pizzaSize = useSelector(getIngredientNameBySlug(pizza.size));
  const pizzaSauce = useSelector(getIngredientNameBySlug(pizza.sauce));
  const pizzaCheese = useSelector(getIngredientNameBySlug(pizza.cheese));
  const pizzaMeat = useSelector(getIngredientNameBySlug(pizza.meat));
  const pizzaVeggies = useSelector(getIngredientNameBySlug(pizza.veggies));

  const fullPizzaDesc =
    pizzaSize +
    " на " +
    (pizza.dough === "thin" ? "тонком" : "толстом") +
    " тесте • " +
    pizzaSauce +
    " соус " +
    pizzaCheese?.join("") +
    pizzaVeggies?.join("") +
    pizzaMeat?.join("");

  const totalCost = totalCostCalc(pizza, ingredients);

  if (Array.isArray(ingredients) && !ingredients.length) {
    history.push("/");
  }

  if (isSuccess) {
    return <OrderSuccess pizza={fullPizzaDesc} />;
  }
  if (isError) {
    return <OrderError setError={setError} />;
  }

  return (
    <div className={style.wrapper}>
      <Navbar backBtn title="Оформление заказа" />
      <div className={style.container}>
        <div className={style.desc}>
          <span className={style.desc__name}>Маргарита</span>
          <div className={style.desc__base}>{fullPizzaDesc}</div>
          <div className={style.line} />
          <div className={style.price}>{totalCost} руб</div>
        </div>
        <PaymentInfo
          id={formId}
          fullPizzaDesc={fullPizzaDesc}
          setDisable={setDisable}
          setSuccess={setSuccess}
          setError={setError}
        />
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
          <Button form={formId} type="submit" disabled={isDisable}>
            Оплатить {totalCost} руб
          </Button>
        </div>
      </div>
    </div>
  );
};
