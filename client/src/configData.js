const SIZE = [
  {
    id: 1,
    value: "Стандарт (30см)",
    name: "size",
    additionalPrice: 0
  },
  {
    id: 2,
    value: "Большая (35см)",
    name: "size",
    additionalPrice: 50
  }
];

const DOUGH = [
  {
    id: 3,
    value: "Тонкое",
    name: "dough",
    additionalPrice: 0
  },
  {
    id: 4,
    value: "Пышное",
    name: "dough",
    additionalPrice: 0
  }
];

const SAUCE = [
  {
    id: 5,
    value: "Томатный",
    name: "sauce",
    additionalPrice: 0
  },
  {
    id: 6,
    value: "Белый",
    name: "sauce",
    additionalPrice: 5
  },
  {
    id: 7,
    value: "Острый",
    name: "sauce",
    additionalPrice: 10
  }
];

const CHEESE = [
  {
    id: 8,
    value: "Моцарелла",
    name: "cheese",
    additionalPrice: 29
  },
  {
    id: 9,
    value: "Чеддер",
    name: "cheese",
    additionalPrice: 29
  },
  {
    id: 10,
    value: "Дор блю",
    name: "cheese",
    additionalPrice: 29
  }
];

const VEGGIES = [
  {
    id: 11,
    value: "Томаты",
    name: "veggies",
    additionalPrice: 29
  },
  {
    id: 12,
    value: "Грибы",
    name: "veggies",
    additionalPrice: 29
  },
  {
    id: 13,
    value: "Перец",
    name: "veggies",
    additionalPrice: 29
  }
];

const MEAT = [
  {
    id: 14,
    value: "Бекон",
    name: "meat",
    additionalPrice: 29
  },
  {
    id: 15,
    value: "Пепперони",
    name: "meat",
    additionalPrice: 29
  },
  {
    id: 16,
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
