import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { ingredientsReducer } from "state/ingredients/reducer";
import { pizzaReducer } from "state/pizza/reducer";

export const store = createStore(
  combineReducers({
    ingredients: ingredientsReducer,
    pizza: pizzaReducer
  }),
  applyMiddleware(thunk)
);
