export const SIZE = [
  {
    id: 1,
    type: "radio",
    variant: "Стандарт (30см)",
    value: 30,
    additionalPrice: 0
  },
  {
    id: 2,
    type: "radio",
    variant: "Большая (35см)",
    value: 35,
    additionalPrice: 50
  }
];

export const DOUGH = [
  {
    id: 3,
    type: "radio",
    variant: "Тонкое",
    value: "thin",
    additionalPrice: 0
  },
  {
    id: 4,
    type: "radio",
    variant: "Пышное",
    value: "thick",
    additionalPrice: 0
  }
];

export const SAUCE = [
  {
    id: 5,
    type: "radio",
    variant: "Томатный",
    value: "tomato",
    additionalPrice: 0
  },
  {
    id: 6,
    type: "radio",
    variant: "Белый",
    value: "white",
    additionalPrice: 5
  },
  {
    id: 7,
    type: "radio",
    variant: "Острый",
    value: "hot",
    additionalPrice: 10
  }
];

export const CHEESE = [
  {
    id: 8,
    type: "checkbox",
    variant: "Моцарелла",
    value: "mozzarella",
    additionalPrice: 29
  },
  {
    id: 9,
    type: "checkbox",
    variant: "Чеддер",
    value: "cheddar",
    additionalPrice: 29
  },
  {
    id: 10,
    type: "checkbox",
    variant: "Дор блю",
    value: "dorblu",
    additionalPrice: 29
  }
];

export const VEGGIES = [
  {
    id: 11,
    type: "checkbox",
    variant: "Томаты",
    value: "tomato",
    additionalPrice: 29
  },
  {
    id: 12,
    type: "checkbox",
    variant: "Грибы",
    value: "mushrooms",
    additionalPrice: 29
  },
  {
    id: 13,
    type: "checkbox",
    variant: "Перец",
    value: "pepper",
    additionalPrice: 29
  }
];

export const MEAT = [
  {
    id: 14,
    type: "checkbox",
    variant: "Бекон",
    value: "bacon",
    additionalPrice: 29
  },
  {
    id: 15,
    type: "checkbox",
    variant: "Пепперони",
    value: "pepperoni",
    additionalPrice: 29
  },
  {
    id: 16,
    type: "checkbox",
    variant: "Ветчина",
    value: "ham",
    additionalPrice: 29
  }
];

export const INITIAL_PIZZA_CONFIG = {
  SIZE: SIZE[0].variant,
  DOUGH: DOUGH[0].variant,
  SAUCE: SAUCE[0].variant,
  CHEESE: [],
  VEGGIES: [],
  MEAT: []
};

export const INITIAL_PIZZA_PRICE = 200;
