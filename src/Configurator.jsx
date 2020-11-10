import React, { useState } from "react";
import { SelectorsGroup } from "./components/SelectorGroups";
import { Button } from "./components/Button";
import { Checkout } from "./Checkout";
import { PIZZA_OPTIONS, INITIAL_PIZZA_CONFIG } from "./configData";
import { totalCostCalc } from "./utils";

export default function Configurator() {
  const [pizza, setPizza] = useState(INITIAL_PIZZA_CONFIG);
  const [isCheckout, setCheckout] = useState(false);

  const totalCost = totalCostCalc(pizza);

  const handleCheckout = e => {
    e.preventDefault();
    setCheckout(true);
  };

  const handleChangePizza = (e, key) => {
    const value = e.target.value;
    if (e.target.type === "radio") {
      setPizza(prevState => ({ ...prevState, [key]: value }));
    } else {
      const isExist = pizza[key].indexOf(value) !== -1;
      isExist
        ? setPizza(prevState => ({
            ...prevState,
            [key]: prevState[key].filter(item => item !== value)
          }))
        : setPizza(prevState => ({
            ...prevState,
            [key]: [...prevState[key], value]
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
            {Object.keys(PIZZA_OPTIONS).map(item => (
              <SelectorsGroup
                key={item}
                data={PIZZA_OPTIONS[item]}
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
