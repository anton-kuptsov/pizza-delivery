import React, { useState } from "react";

import {
  INITIAL_PIZZA,
  SIZE,
  THICKNESS,
  SAUCE,
  CHEESE
  //VEGGIES, MEAT
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
    const value = e.target.value;
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
        data={CHEESE}
        onChange={e => handleSelect(e, "cheese")}
        currentState={pizza.cheese}
      />
      {/* 
      <div>
        <Checkbox text="Моцарелла" checked={false} />
        <Checkbox text="Чеддер" checked={false} />
        <Checkbox text="ДорБлю" checked={false} />
      </div>
      <div>
        <Checkbox text="Помидор" checked={false} />
        <Checkbox text="Грибы" checked={false} />
        <Checkbox text="Перец" checked={false} />
      </div>
      <div>
        <Checkbox text="Бекон" checked={false} />
        <Checkbox text="Пепперони" checked={false} />
        <Checkbox text="Ветчина" checked={false} />
      </div> */}
      <div>{`Config: ${pizza.size}, ${pizza.thickness}, ${pizza.sauce}`}</div>
      {/* <div>Price: {pizzaPrice} RUB</div> */}
    </div>
  );
}
