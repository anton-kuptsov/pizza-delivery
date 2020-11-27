import React from "react";
import { RadioGroup } from "./components/RadioGroup";
import { CheckboxGroup } from "./components/CheckboxGroup";
import { Button } from "./components/Button";
import { INITIAL_PIZZA_CONFIG } from "./configData";
import { totalCostCalc } from "./totalCostCalc";

import { useHistory } from "react-router-dom";
import { usePizza } from "./PizzaContext";
import { useForm } from "react-hook-form";

export default function Configurator() {
  const { setPizzaConfig } = usePizza();
  const history = useHistory();

  const { register, handleSubmit, watch } = useForm({
    defaultValues: INITIAL_PIZZA_CONFIG
  });
  const totalCost = totalCostCalc(watch());

  const handleCheckout = data => {
    setPizzaConfig(data);
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
