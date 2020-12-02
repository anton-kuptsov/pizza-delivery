import {
  SIZE,
  DOUGH,
  SAUCE,
  CHEESE,
  VEGGIES,
  MEAT,
  INITIAL_PIZZA_PRICE
} from "./configData";

export const totalCostCalc = ({
  size,
  dough,
  sauce,
  cheese,
  veggies,
  meat
}) => {
  const sizePrice = SIZE[size].additionalPrice;
  const doughPrice = DOUGH[dough].additionalPrice;
  const saucePrice = SAUCE[sauce].additionalPrice;

  const cheesePrice = cheese.reduce(
    (total, item) => total + CHEESE[item].additionalPrice,
    0
  );
  const veggiesPrice = veggies.reduce(
    (total, item) => total + VEGGIES[item].additionalPrice,
    0
  );
  const meatPrice = meat.reduce(
    (total, item) => total + MEAT[item].additionalPrice,
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
