import React from "react";
import { RadioGroup } from "./components/RadioGroup";
import { CheckboxGroup } from "./components/CheckboxGroup";
import { Button } from "./components/Button";
import { PIZZA_OPTIONS, INITIAL_PIZZA_CONFIG } from "./configData";
import { totalCostCalc } from "./totalCostCalc";

import { useHistory } from "react-router-dom";
import { usePizza } from "./PizzaContext";
import { useForm } from "react-hook-form";

export default function Configurator({ _usePizzaHook = usePizza }) {
  const { setPizzaConfig } = _usePizzaHook();
  const history = useHistory();

  const { register, handleSubmit, watch } = useForm({
    defaultValues: INITIAL_PIZZA_CONFIG
  });

  const values = watch();
  const totalCost = totalCostCalc(values);
  const handleCheckout = data => {
    // e.preventDefault();
    setPizzaConfig(data);
    history.push("/checkout");
  };

  return (
    <div className={"container"}>
      <form onSubmit={handleSubmit(handleCheckout)}>
        <fieldset>
          <legend>Pizza Configurator</legend>
          <div>
            <RadioGroup
              ref={register}
              name="size"
              options={PIZZA_OPTIONS["SIZE"]}
            />
            <RadioGroup
              ref={register}
              name="dough"
              options={PIZZA_OPTIONS["DOUGH"]}
            />
            <RadioGroup
              ref={register}
              name="sauce"
              options={PIZZA_OPTIONS["SAUCE"]}
            />
            <CheckboxGroup
              ref={register}
              name="cheese"
              options={PIZZA_OPTIONS["CHEESE"]}
            />
            <CheckboxGroup
              ref={register}
              name="veggies"
              options={PIZZA_OPTIONS["VEGGIES"]}
            />
            <CheckboxGroup
              ref={register}
              name="meat"
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
