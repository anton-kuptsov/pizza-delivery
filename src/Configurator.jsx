import React, { useState } from "react";
import { SelectorsGroup } from "./components/SelectorGroups";
import { Button } from "./components/Button";
import { Checkout } from "./Checkout";
import * as _config from "./configData";

export default function Configurator() {
  const { INITIAL_PIZZA_CONFIG, INITIAL_PIZZA_PRICE, ...ingridients } = _config;

  const [pizza, setPizza] = useState(INITIAL_PIZZA_CONFIG);
  const [pizzaPrice, setPizzaPrice] = useState(INITIAL_PIZZA_PRICE);
  const [additionalPrice, setAdditionalPrice] = useState(0);
  const [isCheckout, setCheckout] = useState(false);

  const totalOrder = pizzaPrice + additionalPrice;

  const handleCheckout = e => {
    e.preventDefault();
    setCheckout(true);
  };

  const handleChangePizza = (e, key) => {
    const newState = Object.assign({}, pizza);

    if (e.target.type === "radio") {
      newState[key] = e.target.name;
      setPizza(newState);
    } else {
      const value = e.target.name;
      newState[key].indexOf(value) === -1
        ? newState[key].push(value)
        : (newState[key] = newState[key].filter(item => item !== value));
      setPizza(newState);
    }
  };

  return isCheckout ? (
    <Checkout pizza={pizza} totalOrder={totalOrder} />
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
                pizzaPrice={pizzaPrice}
                updPizzaPrice={setPizzaPrice}
                additionalPrice={additionalPrice}
                updAdditionalPrice={setAdditionalPrice}
              />
            ))}

            <div className="container">
              <Button className="checkout-button">
                Checkout {totalOrder} RUB
              </Button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
