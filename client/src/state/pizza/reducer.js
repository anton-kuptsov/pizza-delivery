import { INITIAL_PIZZA_CONFIG } from "../../configData";
export const pizzaReducer = (state = INITIAL_PIZZA_CONFIG, action) => {
  switch (action.type) {
    case "pizza/set_pizza": {
      return action.payload;
    }
    default:
      return state;
  }
};
