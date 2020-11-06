import React, { useState } from "react";
// import Radio from "components/Radio";
// import Checkbox from "components/Checkbox";

import { PizzaSizeGroup } from "components/SelectorGroups";

const SIZES = [
  {
    variant: "standart",
    size: 30,
    additionalPrice: 0
  },
  {
    variant: "big",
    size: 35,
    additionalPrice: 50
  }
];

export default function Configurator() {
  const [pizzaSize, setPizzaSize] = useState(SIZES[0].size);
  const [pizzaPrice, setPizzaPrice] = useState(200);

  const handleChange = e => {
    setPizzaSize(Number(e.target.value));
  };

  return (
    <div>
      Configurator
      <PizzaSizeGroup
        sizes={SIZES}
        onChange={handleChange}
        pizzaSize={pizzaSize}
      />
      {/* <div>
        <Radio
          id="standart"
          text={size[0].standart + "cm"}
          value={size[0].standart}
          checked={pizzaSize === size[0].standart ? true : false}
          onChange={e => handleChange(e)}
        />
        <Radio
          id="big"
          text={size[1].big + "cm"}
          value={size[1].big}
          checked={pizzaSize === size[1].big ? true : false}
          onChange={e => handleChange(e)}
        />
      </div> */}
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
      <div> Config: {pizzaSize}</div>
      <div>Price: {pizzaPrice} RUB</div>
    </div>
  );
}
