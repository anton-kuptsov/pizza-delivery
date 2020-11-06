import React, { useState } from "react";
// import Radio from "components/Radio";
// import Checkbox from "components/Checkbox";
import { SIZES, THICKNESS, SAUCE, CHEESE, VEGGIES, MEAT } from "./const";
import { RadioGroup } from "components/SelectorGroups";

export default function Configurator() {
  const [pizza, setPizza] = useState({
    size: SIZES[0].variant,
    thickness: THICKNESS[0].variant,
    sauce: SAUCE[0].variant
  });

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
        <Radio text="Томатный" checked={false} />
        <Radio text="Белый" checked={false} />
        <Radio text="Острый" checked={false} />
      </div>
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
