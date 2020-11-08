import React, { useState } from "react";
import { SelectorsGroup } from "./components/SelectorGroups";
import { Button } from "./components/Button";
import { Checkout } from "./Checkout";
import * as _config from "./configData";
import { totalCostCalc } from "./utils";

export default function Configurator() {
  const { INITIAL_PIZZA_CONFIG, INITIAL_PIZZA_PRICE, ...ingridients } = _config;

  const [pizza, setPizza] = useState(INITIAL_PIZZA_CONFIG);
  const [isCheckout, setCheckout] = useState(false);

  const totalCost = totalCostCalc(pizza);

  const handleCheckout = e => {
    e.preventDefault();
    setCheckout(true);
  };

  const handleChangePizza = (e, key) => {
    const value = e.target.name;
    if (e.target.type === "radio") {
      setPizza(prevState => ({ ...prevState, [key]: value }));
    } else {
      const isNotExist = pizza[key].indexOf(value) === -1;
      isNotExist
        ? setPizza(prevState => ({
            ...prevState,
            [key]: [...prevState[key], value]
          }))
        : setPizza(prevState => ({
            ...prevState,
            [key]: prevState[key].filter(item => item !== value)
          }));
    }
  };

  return isCheckout ? (
    <Checkout pizza={pizza} totalCost={totalCost} />
  ) : (
    <div className={"container"}>
      <form onSubmit={handleCheckout}>
        <fieldset>
          <legend>Pizza Configurator</legend>
          <div>
            {Object.keys(ingridients).map(item => (
              <SelectorsGroup
                key={item}
                data={ingridients[item]}
                onChange={e => handleChangePizza(e, item)}
                currConfig={pizza[item]}
              />
            ))}
            <div className="container">
              <Button className="checkout-button">
                Checkout {totalCost} RUB
              </Button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
