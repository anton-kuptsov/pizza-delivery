export const pizzaReducer = (state = [], action) => {
  switch (action.type) {
    case "set_pizza": {
      return action.payload;
    }
    default:
      return state;
  }
};
