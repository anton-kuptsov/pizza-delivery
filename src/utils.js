import * as data from "./configData";

export const baseCostCalc = pizzaConfig => {
  let totalBaseCost = data.INITIAL_PIZZA_PRICE;
  const arrayCheckedOptions = [];

  const addCheckedOptions = (value, arr) =>
    arrayCheckedOptions.push(arr.filter(item => item.variant === value)[0]);

  Object.keys(pizzaConfig).forEach(
    key =>
      typeof pizzaConfig[key] === "string" &&
      addCheckedOptions(pizzaConfig[key], data[key])
  );

  const arrayWithPrices = arrayCheckedOptions.map(item => item.additionalPrice);
  arrayWithPrices.forEach(item => (totalBaseCost += item));

  return totalBaseCost;
};
