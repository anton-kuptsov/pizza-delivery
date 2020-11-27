import React from "react";
import { RadioGroup } from "./components/RadioGroup";
import { CheckboxGroup } from "./components/CheckboxGroup";
import { Button } from "./components/Button";
import {
  PIZZA_OPTIONS,
  INITIAL_PIZZA_PRICE,
  INITIAL_PIZZA_CONFIG
} from "./configData";
import { totalCostCalc } from "./totalCostCalc";

import { useHistory } from "react-router-dom";
import { usePizza } from "./PizzaContext";
import { useForm } from "react-hook-form";

export default function Configurator({ _usePizzaHook = usePizza }) {
  const { setPizzaConfig, totalCost = INITIAL_PIZZA_PRICE } = _usePizzaHook();
  const history = useHistory();

  const { register, handleSubmit, watch } = useForm({
    defaultValues: INITIAL_PIZZA_CONFIG
  });

  const values = watch();
  const price = totalCostCalc(values);
  console.log("watch", price);
  const handleCheckout = data => {
    // e.preventDefault();

    setPizzaConfig(data);
    // history.push("/checkout");
  };

  return (
    <div className={"container"}>
      <form onSubmit={handleSubmit(handleCheckout)}>
        <fieldset>
          <legend>Pizza Configurator</legend>
          <div>
            <RadioGroup
              ref={register}
              name="SIZE"
              options={PIZZA_OPTIONS["SIZE"]}
            />
            <RadioGroup
              ref={register}
              name="DOUGH"
              options={PIZZA_OPTIONS["DOUGH"]}
            />
            <RadioGroup
              ref={register}
              name="SAUCE"
              options={PIZZA_OPTIONS["SAUCE"]}
            />
            <CheckboxGroup
              ref={register}
              name="CHEESE"
              options={PIZZA_OPTIONS["CHEESE"]}
            />
            <CheckboxGroup
              ref={register}
              name="VEGGIES"
              options={PIZZA_OPTIONS["VEGGIES"]}
            />
            <CheckboxGroup
              ref={register}
              name="MEAT"
              options={PIZZA_OPTIONS["MEAT"]}
            />
          </div>
        </fieldset>
        <div className="container">
          <Button className="checkout-button">Checkout {totalCost} RUB</Button>
        </div>
      </form>
    </div>
  );
}
