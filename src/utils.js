import * as data from "./configData";

export const calcOptionalPrice = pizzaConfig => {
  let totalOptionalPrice = data.INITIAL_PIZZA_PRICE;
  const tempArray = [];

  const addCheckedOptions = (value, arr) =>
    tempArray.push(arr.filter(item => item.variant === value)[0]);

  Object.keys(pizzaConfig).forEach(
    key =>
      typeof pizzaConfig[key] === "string" &&
      addCheckedOptions(pizzaConfig[key], data[key])
  );

  const arrayWithPrices = tempArray.map(item => item.additionalPrice);
  arrayWithPrices.forEach(item => (totalOptionalPrice += item));

  return totalOptionalPrice;
};
