import React, { useState } from "react";

import {
  INITIAL_PIZZA,
  SIZE,
  THICKNESS,
  SAUCE,
  CHEESE,
  VEGGIES,
  MEAT
} from "./const";
import { RadioGroup, CheckboxGroup } from "components/SelectorGroups";

export default function Configurator() {
  const [pizza, setPizza] = useState(INITIAL_PIZZA);

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
      Configurator
      <RadioGroup
        data={SIZE}
        onChange={e => handleChange(e, "size")}
        currentState={pizza.size}
      />
      <RadioGroup
        data={THICKNESS}
        onChange={e => handleChange(e, "thickness")}
        currentState={pizza.thickness}
      />
      <RadioGroup
        data={SAUCE}
        onChange={e => handleChange(e, "sauce")}
        currentState={pizza.sauce}
      />
      <CheckboxGroup
        type="checkbox"
        data={CHEESE}
        onChange={e => handleSelect(e, "cheese")}
        currentState={pizza.cheese}
      />
      <CheckboxGroup
        type="checkbox"
        data={VEGGIES}
        onChange={e => handleSelect(e, "veggies")}
        currentState={pizza.veggies}
      />
      <CheckboxGroup
        type="checkbox"
        data={MEAT}
        onChange={e => handleSelect(e, "meat")}
        currentState={pizza.meat}
      />
      {/* 
 
      <div>
        <Checkbox text="Бекон" checked={false} />
        <Checkbox text="Пепперони" checked={false} />
        <Checkbox text="Ветчина" checked={false} />
      </div> */}
      <div>{`Base: ${pizza.size}, ${pizza.thickness}, ${pizza.sauce}`}</div>
      <div>{`Cheese: ${pizza.cheese}`}</div>
      <div>{`Veggies: ${pizza.veggies}`}</div>
      <div>{`Meat: ${pizza.meat}`}</div>
      {/* <div>Price: {pizzaPrice} RUB</div> */}
    </div>
  );
}
