import { render, fireEvent } from "@testing-library/react";
import { CheckoutPage } from "./Checkout";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { ingredientsReducer } from "state/ingredients/reducer";
import { pizzaReducer } from "state/pizza/reducer";

const store = createStore(
  combineReducers({
    ingredients: ingredientsReducer,
    pizza: pizzaReducer
  })
);
describe("Checkout", () => {
  it("renders correctly", () => {
    const history = createMemoryHistory();
    const { container, getByText } = render(
      <Router history={history}>
        <Provider store={store}>
          <CheckoutPage />
        </Provider>
      </Router>
    );
    expect(container.getElementsByTagName("div")).toBeTruthy();
    expect(container.getElementsByClassName("container")).toBeTruthy();
    expect(getByText("Size:")).toBeInTheDocument();
    expect(getByText("Dough:")).toBeInTheDocument();
    expect(getByText("Sauce:")).toBeInTheDocument();
    expect(getByText("Cheese:")).toBeInTheDocument();
    expect(getByText("Veggies:")).toBeInTheDocument();
    expect(getByText("Meat:")).toBeInTheDocument();
    expect(getByText("Total cost:")).toBeInTheDocument();
  });

  it("navigates to order page", () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <Provider store={store}>
          <CheckoutPage />
        </Provider>
      </Router>
    );

    fireEvent.click(getByText("Order"));
    expect(history.location.pathname).toEqual("/order");
  });
});
