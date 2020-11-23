import React from "react";
import { OptionsGroup } from "./components/OptionsGroup";
import { RadioGroup } from "./components/RadioGroup";
import { Button } from "./components/Button";
import { PIZZA_OPTIONS } from "./configData";

import { useHistory } from "react-router-dom";
import * as ROUTES from "./Routes";
import { usePizza } from "PizzaContext";

export default function Configurator() {
  const { setPizzaConfig, totalCost } = usePizza();
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
            {console.log(PIZZA_OPTIONS)}
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
            {/* {Object.keys(PIZZA_OPTIONS).map(item => (
              <OptionsGroup
                key={item}
                groupName={item}
                options={PIZZA_OPTIONS[item]}
                setPizzaConfig={setPizzaConfig}
              />
            ))} */}
          </div>
        </fieldset>
        <div className="container">
          <Button className="checkout-button">Checkout {totalCost} RUB</Button>
        </div>
      </form>
    </div>
  );
}
