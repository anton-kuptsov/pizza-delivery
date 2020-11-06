import React, { useState } from "react";
// import Radio from "components/Radio";
// import Checkbox from "components/Checkbox";
import { SIZES, THICKNESS } from "./const";
import { PizzaSizeGroup } from "components/SelectorGroups";

export default function Configurator() {
  const [pizza, setPizza] = useState({
    size: SIZES[0].value
  });

  // const [pizzaPrice, setPizzaPrice] = useState(200);

  const handleChange = e => {
    setPizza({ variant: e.target.name, size: Number(e.target.value) });
  };

  return (
    <div>
      Configurator
      <PizzaSizeGroup sizes={SIZES} onChange={handleChange} pizza={pizza} />
      {/* <div>
        <Radio text="Пышное" checked={false} />
        <Radio text="Тонкое" checked={false} />
      </div>
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
      <div> Config: {pizza.variant}</div>
      {/* <div>Price: {pizzaPrice} RUB</div> */}
    </div>
  );
}
