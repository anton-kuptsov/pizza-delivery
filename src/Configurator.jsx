import React, { useState } from "react";
import { SelectorsGroup } from "./components/SelectorGroups";
import { Button } from "./components/Button";
import { Checkout } from "./Checkout";
import * as _data from "./consts";

export default function Configurator() {
  const { INITIAL_PIZZA_CONFIG, INITIAL_PIZZA_PRICE, ...data } = _data;

  const [pizza, setPizza] = useState(INITIAL_PIZZA_CONFIG);
  const [pizzaPrice, setPizzaPrice] = useState(INITIAL_PIZZA_PRICE);
  const [additionalPrice, setAdditionalPrice] = useState(0);
  const [isCheckout, setCheckout] = useState(false);

  const totalOrder = pizzaPrice + additionalPrice;

  const handleChangeRadio = (e, key) => {
    const newState = pizza;
    newState[key] = e.target.name;
    setPizza(prevState => ({ ...prevState, newState }));
    console.log(e.target.type);
  };

  const handleSelectCheckbox = (e, key) => {
    const value = e.target.name;
    const newState = pizza;

    newState[key].indexOf(value) === -1
      ? newState[key].push(value)
      : (newState[key] = newState[key].filter(item => item !== value));

    setPizza(prevState => ({ ...prevState, newState }));
    console.log(e.target.type);
  };
  const handleCheckout = e => {
    e.preventDefault();
    setCheckout(true);
  };

  return isCheckout ? (
    <Checkout pizza={pizza} totalOrder={totalOrder} />
  ) : (
    <div className={"container"}>
      <form onSubmit={handleCheckout}>
        <fieldset>
          <legend>Pizza Configurator</legend>
          <div>
            {/* {Object.keys(data).map(item => (
              <SelectorsGroup
                key={item}
                data={data[item]}
                onChange={e => handleChangeRadio(e, item.toLowerCase())}
                currState={pizza.size}
                currPrice={pizzaPrice}
                updPrice={setPizzaPrice}
              />
            ))} */}

            <SelectorsGroup
              data={data.SIZE}
              onChange={e => handleChangeRadio(e, "size")}
              currState={pizza.size}
              currPrice={pizzaPrice}
              updPrice={setPizzaPrice}
            />
            <SelectorsGroup
              data={data.DOUGH}
              onChange={e => handleChangeRadio(e, "dough")}
              currState={pizza.dough}
              currPrice={pizzaPrice}
              updPrice={setPizzaPrice}
            />
            <SelectorsGroup
              data={data.SAUCE}
              onChange={e => handleChangeRadio(e, "sauce")}
              currState={pizza.sauce}
              currPrice={pizzaPrice}
              updPrice={setPizzaPrice}
            />
            <SelectorsGroup
              type="checkbox"
              data={data.CHEESE}
              onChange={e => handleSelectCheckbox(e, "cheese")}
              currState={pizza.cheese}
              currPrice={additionalPrice}
              updPrice={setAdditionalPrice}
            />
            <SelectorsGroup
              type="checkbox"
              data={data.VEGGIES}
              onChange={e => handleSelectCheckbox(e, "veggies")}
              currState={pizza.veggies}
              currPrice={additionalPrice}
              updPrice={setAdditionalPrice}
            />
            <SelectorsGroup
              type="checkbox"
              data={data.MEAT}
              onChange={e => handleSelectCheckbox(e, "meat")}
              currState={pizza.meat}
              currPrice={additionalPrice}
              updPrice={setAdditionalPrice}
            />

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
