export const ingredientsReducer = (state = [], action) => {
  switch (action.type) {
    case "set_ingredients": {
      return action.payload;
    }
    default:
      return state;
  }
};
