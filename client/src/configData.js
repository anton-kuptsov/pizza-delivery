export const INITIAL_PIZZA_CONFIG = {
  size: "standart",
  dough: "thin",
  sauce: "tomato",
  cheese: [],
  veggies: [],
  meat: []
};

export const INITIAL_PIZZA_PRICE = 200;

let HOST = process.env.REACT_APP_HOST_LOCAL;
if (process.env.NODE_ENV === "production") {
  HOST = process.env.REACT_APP_HOST;
}
export { HOST };
