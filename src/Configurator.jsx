import React from "react";
import { RadioGroup } from "./components/RadioGroup";
import { CheckboxGroup } from "./components/CheckboxGroup";
import { Button } from "./components/Button";
import { PIZZA_OPTIONS, INITIAL_PIZZA_PRICE } from "./configData";

import { useHistory } from "react-router-dom";
import * as ROUTES from "./Routes";
import { usePizza } from "./PizzaContext";

export default function Configurator({ _usePizzaHook = usePizza }) {
  const { setPizzaConfig, totalCost = INITIAL_PIZZA_PRICE } = _usePizzaHook();
  const history = useHistory();

  const handleCheckout = e => {
    e.preventDefault();
    history.push(ROUTES.CHECKOUT);
  };

  return (
    <div className={"container"}>
      <form onSubmit={handleCheckout}>
        <fieldset>
          <legend>Pizza Configurator</legend>
          <div>
            <RadioGroup
              groupName={"SIZE"}
              options={PIZZA_OPTIONS["SIZE"]}
              setPizzaConfig={setPizzaConfig}
            />
            <RadioGroup
              groupName={"DOUGH"}
              options={PIZZA_OPTIONS["DOUGH"]}
              setPizzaConfig={setPizzaConfig}
            />
            <RadioGroup
              groupName={"SAUCE"}
              options={PIZZA_OPTIONS["SAUCE"]}
              setPizzaConfig={setPizzaConfig}
            />
            <CheckboxGroup
              groupName={"CHEESE"}
              options={PIZZA_OPTIONS["CHEESE"]}
              setPizzaConfig={setPizzaConfig}
            />
            <CheckboxGroup
              groupName={"VEGGIES"}
              options={PIZZA_OPTIONS["VEGGIES"]}
              setPizzaConfig={setPizzaConfig}
            />
            <CheckboxGroup
              groupName={"MEAT"}
              options={PIZZA_OPTIONS["MEAT"]}
              setPizzaConfig={setPizzaConfig}
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
