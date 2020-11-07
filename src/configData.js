export const INITIAL_PIZZA_PRICE = 200;

export const SIZE = [
  {
    id: 1,
    type: "radio",
    variant: "30 cm",
    value: 30,
    additionalPrice: 0,
    price: function(add) {
      return INITIAL_PIZZA_PRICE + add;
    }
  },
  {
    id: 2,
    type: "radio",
    variant: "35 cm",
    value: 35,
    additionalPrice: 50,
    price: function(add) {
      return INITIAL_PIZZA_PRICE + add;
    }
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
    additionalPrice: 0
  },
  {
    id: 7,
    type: "radio",
    variant: "Острый",
    value: "hot",
    additionalPrice: 0
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
  size: SIZE[0].variant,
  dough: DOUGH[0].variant,
  sauce: SAUCE[0].variant,
  cheese: [],
  veggies: [],
  meat: []
};
