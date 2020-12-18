import { createStore, combineReducers } from "redux";
import { ingredientsReducer } from "state/ingredients/reducer";
import { pizzaReducer } from "state/pizza/reducer";

export const store = createStore(
  combineReducers({
    ingredients: ingredientsReducer,
    pizza: pizzaReducer
  })
);
