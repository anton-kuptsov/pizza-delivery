import * as data from "./configData";

export const totalCostCalc = pizzaConfig => {
  let totalBaseCost = data.INITIAL_PIZZA_PRICE;
  const checkedOptions = [];

  const addCheckedOptions = (options, dataArr) =>
    typeof options === "string"
      ? checkedOptions.push(dataArr.filter(item => item.variant === options)[0])
      : options.forEach(el =>
          checkedOptions.push(dataArr.filter(item => item.variant === el)[0])
        );

  Object.keys(pizzaConfig).forEach(key =>
    addCheckedOptions(pizzaConfig[key], data[key])
  );

  const arrayWithPrices = checkedOptions.map(item => item.additionalPrice);
  arrayWithPrices.forEach(item => (totalBaseCost += item));

  return totalBaseCost;
};
