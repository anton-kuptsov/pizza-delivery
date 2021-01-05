import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "state/auth/reducer";
import { ingredientsReducer } from "state/ingredients/reducer";
import { pizzaReducer } from "state/pizza/reducer";

export const store = createStore(
  combineReducers({
    ingredients: ingredientsReducer,
    pizza: pizzaReducer,
    auth: authReducer
  }),
  applyMiddleware(thunk)
);
