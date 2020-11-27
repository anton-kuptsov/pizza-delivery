export const SIZE = {
  standart: {
    id: 1,
    value: "Стандарт (30см)",
    additionalPrice: 0
  },
  big: {
    id: 2,
    value: "Большая (35см)",
    additionalPrice: 50
  }
};

export const DOUGH = {
  thin: {
    id: 3,
    value: "Тонкое",
    additionalPrice: 0
  },
  lush: {
    id: 4,
    value: "Пышное",
    additionalPrice: 0
  }
};

export const SAUCE = {
  tomato: {
    id: 5,
    value: "Томатный",
    additionalPrice: 0
  },
  white: {
    id: 6,
    value: "Белый",
    additionalPrice: 5
  },
  hot: {
    id: 7,
    value: "Острый",
    additionalPrice: 10
  }
};

export const CHEESE = {
  mocarella: {
    id: 8,
    value: "Моцарелла",
    additionalPrice: 29
  },
  chedder: {
    id: 9,
    value: "Чеддер",
    additionalPrice: 29
  },
  dorblue: {
    id: 10,
    value: "Дор блю",
    additionalPrice: 29
  }
};

export const VEGGIES = {
  tomatos: {
    id: 11,
    value: "Томаты",
    additionalPrice: 29
  },
  mushrooms: {
    id: 12,
    value: "Грибы",
    additionalPrice: 29
  },
  pepper: {
    id: 13,
    value: "Перец",
    additionalPrice: 29
  }
};

export const MEAT = {
  beacon: {
    id: 14,
    value: "Бекон",
    additionalPrice: 29
  },
  pepperoni: {
    id: 15,
    value: "Пепперони",
    additionalPrice: 29
  },
  ham: {
    id: 16,
    value: "Ветчина",
    additionalPrice: 29
  }
};

export const INITIAL_PIZZA_CONFIG = {
  size: "standart",
  dough: "thin",
  sauce: "tomato",
  cheese: [],
  veggies: [],
  meat: []
};

export const INITIAL_PIZZA_PRICE = 200;
export const PIZZA_OPTIONS = { SIZE, DOUGH, SAUCE, CHEESE, VEGGIES, MEAT };
