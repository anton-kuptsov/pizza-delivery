import {
  PIZZA_OPTIONS,
  INITIAL_PIZZA_PRICE,
  INITIAL_PIZZA_CONFIG
} from "./configData";

export const totalCostCalc = (pizzaConfig = INITIAL_PIZZA_CONFIG) => {
  const optionsArr = Object.entries(pizzaConfig)
    .map(item =>
      item[1].map(el => PIZZA_OPTIONS[item[0]].filter(a => a.value === el))
    )
    .flat(2);

  const result = optionsArr.reduce(
    (total, item) => total + item.additionalPrice,
    INITIAL_PIZZA_PRICE
  );

  return result;
};
