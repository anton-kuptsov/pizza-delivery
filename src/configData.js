export const SIZE = [
  {
    id: 1,
    type: "radio",
    variant: "Стандарт (30см)",
    name: "Standart30",
    additionalPrice: 0
  },
  {
    id: 2,
    type: "radio",
    variant: "Большая (35см)",
    name: "Big35",
    additionalPrice: 50
  }
];

export const DOUGH = [
  {
    id: 3,
    type: "radio",
    variant: "Тонкое",
    name: "thin",
    additionalPrice: 0
  },
  {
    id: 4,
    type: "radio",
    variant: "Пышное",
    name: "thick",
    additionalPrice: 0
  }
];

export const SAUCE = [
  {
    id: 5,
    type: "radio",
    variant: "Томатный",
    name: "tomato",
    additionalPrice: 0
  },
  {
    id: 6,
    type: "radio",
    variant: "Белый",
    name: "white",
    additionalPrice: 5
  },
  {
    id: 7,
    type: "radio",
    variant: "Острый",
    name: "hot",
    additionalPrice: 10
  }
];

export const CHEESE = [
  {
    id: 8,
    type: "checkbox",
    variant: "Моцарелла",
    name: "mozzarella",
    additionalPrice: 29
  },
  {
    id: 9,
    type: "checkbox",
    variant: "Чеддер",
    name: "cheddar",
    additionalPrice: 29
  },
  {
    id: 10,
    type: "checkbox",
    variant: "Дор блю",
    name: "dorblu",
    additionalPrice: 29
  }
];

export const VEGGIES = [
  {
    id: 11,
    type: "checkbox",
    variant: "Томаты",
    name: "tomato",
    additionalPrice: 29
  },
  {
    id: 12,
    type: "checkbox",
    variant: "Грибы",
    name: "mushrooms",
    additionalPrice: 29
  },
  {
    id: 13,
    type: "checkbox",
    variant: "Перец",
    name: "pepper",
    additionalPrice: 29
  }
];

export const MEAT = [
  {
    id: 14,
    type: "checkbox",
    variant: "Бекон",
    name: "bacon",
    additionalPrice: 29
  },
  {
    id: 15,
    type: "checkbox",
    variant: "Пепперони",
    name: "pepperoni",
    additionalPrice: 29
  },
  {
    id: 16,
    type: "checkbox",
    variant: "Ветчина",
    name: "ham",
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
