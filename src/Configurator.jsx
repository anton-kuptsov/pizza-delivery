import React, { useState } from "react";

import {
  INITIAL_PIZZA,
  SIZES,
  THICKNESS,
  SAUCE
  //  CHEESE, VEGGIES, MEAT
} from "./const";
import { RadioGroup } from "components/SelectorGroups";

export default function Configurator() {
  const [pizza, setPizza] = useState(INITIAL_PIZZA);

  // const [pizzaPrice, setPizzaPrice] = useState(200);

  const handleChange = e => {
    setPizza(prevState => ({ ...prevState, size: e.target.name }));
  };
  const handleChangeThick = e => {
    setPizza(prevState => ({ ...prevState, thickness: e.target.name }));
  };
  const handleChangeSauce = e => {
    setPizza(prevState => ({ ...prevState, sauce: e.target.name }));
  };

  return (
    <div>
      Configurator
      <RadioGroup
        sizes={SIZES}
        onChange={handleChange}
        currentState={pizza.size}
      />
      <RadioGroup
        sizes={THICKNESS}
        onChange={handleChangeThick}
        currentState={pizza.thickness}
      />
      <RadioGroup
        sizes={SAUCE}
        onChange={handleChangeSauce}
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
