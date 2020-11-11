const SIZE = [
  {
    id: 1,
    type: "radio",
    value: "Стандарт (30см)",
    name: "SIZE",
    additionalPrice: 0
  },
  {
    id: 2,
    type: "radio",
    value: "Большая (35см)",
    name: "SIZE",
    additionalPrice: 50
  }
];

const DOUGH = [
  {
    id: 3,
    type: "radio",
    value: "Тонкое",
    name: "dough",
    additionalPrice: 0
  },
  {
    id: 4,
    type: "radio",
    value: "Пышное",
    name: "dough",
    additionalPrice: 0
  }
];

const SAUCE = [
  {
    id: 5,
    type: "radio",
    value: "Томатный",
    name: "sauce",
    additionalPrice: 0
  },
  {
    id: 6,
    type: "radio",
    value: "Белый",
    name: "sauce",
    additionalPrice: 5
  },
  {
    id: 7,
    type: "radio",
    value: "Острый",
    name: "sauce",
    additionalPrice: 10
  }
];

const CHEESE = [
  {
    id: 8,
    type: "checkbox",
    value: "Моцарелла",
    name: "cheese",
    additionalPrice: 29
  },
  {
    id: 9,
    type: "checkbox",
    value: "Чеддер",
    name: "cheese",
    additionalPrice: 29
  },
  {
    id: 10,
    type: "checkbox",
    value: "Дор блю",
    name: "cheese",
    additionalPrice: 29
  }
];

const VEGGIES = [
  {
    id: 11,
    type: "checkbox",
    value: "Томаты",
    name: "veggies",
    additionalPrice: 29
  },
  {
    id: 12,
    type: "checkbox",
    value: "Грибы",
    name: "veggies",
    additionalPrice: 29
  },
  {
    id: 13,
    type: "checkbox",
    value: "Перец",
    name: "veggies",
    additionalPrice: 29
  }
];

const MEAT = [
  {
    id: 14,
    type: "checkbox",
    value: "Бекон",
    name: "meat",
    additionalPrice: 29
  },
  {
    id: 15,
    type: "checkbox",
    value: "Пепперони",
    name: "meat",
    additionalPrice: 29
  },
  {
    id: 16,
    type: "checkbox",
    value: "Ветчина",
    name: "meat",
    additionalPrice: 29
  }
];

export const INITIAL_PIZZA_CONFIG = {
  SIZE: [SIZE[0].value],
  DOUGH: [DOUGH[0].value],
  SAUCE: [SAUCE[0].value],
  CHEESE: [],
  VEGGIES: [],
  MEAT: []
};

export const INITIAL_PIZZA_PRICE = 200;
export const PIZZA_OPTIONS = { SIZE, DOUGH, SAUCE, CHEESE, VEGGIES, MEAT };