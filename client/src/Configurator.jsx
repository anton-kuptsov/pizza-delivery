import React from "react";
import { RadioGroup } from "./components/RadioGroup";
import { CheckboxGroup } from "./components/CheckboxGroup";
import { Button } from "./components/Button";
import { INITIAL_PIZZA_CONFIG } from "./configData";
import { totalCostCalc } from "./totalCostCalc";

import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setPizza } from "state/pizza/actions";
import { getIngredients } from "api";

export default function Configurator() {
  const history = useHistory();
  const dispatch = useDispatch();

  // const test = async () => {
  //   return await getIngredients();
  // };
  // console.log(test());

  const { register, handleSubmit, watch } = useForm({
    defaultValues: INITIAL_PIZZA_CONFIG
  });
  const totalCost = totalCostCalc(watch());

  const handleCheckout = data => {
    dispatch(setPizza(data));
    history.push("/checkout");
  };

  return (
    <div className={"container"}>
      <form onSubmit={handleSubmit(handleCheckout)}>
        <fieldset>
          <legend>Pizza Configurator</legend>
          <div>
            <RadioGroup ref={register} name="size" />
            <RadioGroup ref={register} name="dough" />
            <RadioGroup ref={register} name="sauce" />
            <CheckboxGroup ref={register} name="cheese" />
            <CheckboxGroup ref={register} name="veggies" />
            <CheckboxGroup ref={register} name="meat" />
          </div>
        </fieldset>
        <div className="container">
          <Button className="checkout-button">Checkout {totalCost} RUB</Button>
        </div>
      </form>
    </div>
  );
}
