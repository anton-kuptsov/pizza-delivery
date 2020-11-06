import React, { useState } from "react";

import {
  INITIAL_PIZZA,
  SIZE,
  THICKNESS,
  SAUCE
  //  CHEESE, VEGGIES, MEAT
} from "./const";
import { RadioGroup } from "components/SelectorGroups";

export default function Configurator() {
  const [pizza, setPizza] = useState(INITIAL_PIZZA);

  const handleSelect = (e, key) => {
    const newState = pizza;
    newState[key] = e.target.name;
    setPizza(prevState => ({ ...prevState, newState }));
  };

  return (
    <div>
      Configurator
      <RadioGroup
        sizes={SIZE}
        onChange={e => handleSelect(e, "size")}
        currentState={pizza.size}
      />
      <RadioGroup
        sizes={THICKNESS}
        onChange={e => handleSelect(e, "thickness")}
        currentState={pizza.thickness}
      />
      <RadioGroup
        sizes={SAUCE}
        onChange={e => handleSelect(e, "sauce")}
        currentState={pizza.sauce}
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
