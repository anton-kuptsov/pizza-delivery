import React, { useState } from "react";

import {
  INITIAL_PIZZA,
  INITIAL_PRICE,
  SIZE,
  DOUGH,
  SAUCE,
  CHEESE,
  VEGGIES,
  MEAT
} from "./const";
import { RadioGroup, CheckboxGroup } from "components/SelectorGroups";

export default function Configurator() {
  const [pizza, setPizza] = useState(INITIAL_PIZZA);
  const [pizzaPrice, setPizzaPrice] = useState(INITIAL_PRICE);
  const [additionalPrice, setAdditionalPrice] = useState(0);

  const orderTotal = pizzaPrice + additionalPrice;

  const handleChange = (e, key) => {
    const newState = pizza;
    newState[key] = e.target.name;
    setPizza(prevState => ({ ...prevState, newState }));
  };

  const handleSelect = (e, key) => {
    const value = e.target.name;
    const newState = pizza;

    newState[key].indexOf(value) === -1
      ? newState[key].push(value)
      : (newState[key] = newState[key].filter(item => item !== value));

    setPizza(prevState => ({ ...prevState, newState }));
  };

  return (
    <div>
      Pizaa Configurator
      <RadioGroup
        data={SIZE}
        onChange={e => handleChange(e, "size")}
        currState={pizza.size}
        currPrice={pizzaPrice}
        updPrice={setPizzaPrice}
      />
      <RadioGroup
        data={DOUGH}
        onChange={e => handleChange(e, "dough")}
        currState={pizza.dough}
        currPrice={pizzaPrice}
        updPrice={setPizzaPrice}
      />
      <RadioGroup
        data={SAUCE}
        onChange={e => handleChange(e, "sauce")}
        currState={pizza.sauce}
        currPrice={pizzaPrice}
        updPrice={setPizzaPrice}
      />
      <CheckboxGroup
        type="checkbox"
        data={CHEESE}
        onChange={e => handleSelect(e, "cheese")}
        currState={pizza.cheese}
        currPrice={additionalPrice}
        updPrice={setAdditionalPrice}
      />
      <CheckboxGroup
        type="checkbox"
        data={VEGGIES}
        onChange={e => handleSelect(e, "veggies")}
        currState={pizza.veggies}
        currPrice={additionalPrice}
        updPrice={setAdditionalPrice}
      />
      <CheckboxGroup
        type="checkbox"
        data={MEAT}
        onChange={e => handleSelect(e, "meat")}
        currState={pizza.meat}
        currPrice={additionalPrice}
        updPrice={setAdditionalPrice}
      />
      <div style={{ marginTop: "1rem" }}>
        Dough: {pizza.size}, {pizza.dough}
      </div>
      <div>{`Sauce: ${pizza.sauce}`}</div>
      <div>{`Cheese: ${pizza.cheese}`}</div>
      <div>{`Veggies: ${pizza.veggies}`}</div>
      <div>{`Meat: ${pizza.meat}`}</div>
      <div>{`Price: ${orderTotal} RUB`}</div>
    </div>
  );
}
