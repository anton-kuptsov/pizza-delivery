import { PIZZA_OPTIONS, INITIAL_PIZZA_PRICE } from "./configData";

export const totalCostCalc = pizzaConfig => {
  const optionsArr = Object.entries(pizzaConfig)
    .map(item =>
      Array.isArray(item[1])
        ? item[1].map(el => PIZZA_OPTIONS[item[0]].filter(a => a.value === el))
        : PIZZA_OPTIONS[item[0]].filter(a => a.value === item[1])
    )
    .flat(2);

  const result = optionsArr.reduce(
    (total, item) => total + item.additionalPrice,
    INITIAL_PIZZA_PRICE
  );

  return result;
};
