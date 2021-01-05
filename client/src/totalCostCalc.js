import { INITIAL_PIZZA_PRICE } from "./configData";

export const totalCostCalc = (pizzaConfig, ingredientsData) => {
  const {
    size,
    dough,
    sauce,
    cheese = [],
    veggies = [],
    meat = []
  } = pizzaConfig;

  const getIngredientPrice = value =>
    ingredientsData.find(i => i.slug === value)?.price;

  const sizePrice = getIngredientPrice(size);
  const doughPrice = getIngredientPrice(dough);
  const saucePrice = getIngredientPrice(sauce);
  const cheesePrice = cheese.reduce(
    (total, item) => total + getIngredientPrice(item),
    0
  );
  const veggiesPrice = veggies.reduce(
    (total, item) => total + getIngredientPrice(item),
    0
  );
  const meatPrice = meat.reduce(
    (total, item) => total + getIngredientPrice(item),
    0
  );

  const result =
    INITIAL_PIZZA_PRICE +
    sizePrice +
    doughPrice +
    saucePrice +
    cheesePrice +
    veggiesPrice +
    meatPrice;

  return result;
};
