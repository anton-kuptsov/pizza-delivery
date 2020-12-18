import React from "react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { render, fireEvent, act, waitFor } from "@testing-library/react";
import Configurator from "./Configurator";
import { Provider } from "react-redux";
import { ingredientsReducer } from "state/ingredients/reducer";
import { combineReducers, createStore } from "redux";
import { pizzaReducer } from "state/pizza/reducer";

const store = createStore(
  combineReducers({
    ingredients: ingredientsReducer,
    pizza: pizzaReducer
  })
);

describe("Configurator", () => {
  it("renders correctly", () => {
    const { container } = render(
      <Provider store={store}>
        <Configurator />
      </Provider>
    );
    expect(container).toHaveTextContent("Pizza Configurator");
  });

  describe("with default options", () => {
    it("minimal cost", () => {
      const { getByText } = render(
        <Provider store={store}>
          <Configurator />
        </Provider>
      );
      expect(getByText("Checkout 200 RUB")).toBeInTheDocument();
    });
  });

  describe("with additional option checked", () => {
    it("add options", async () => {
      const history = createMemoryHistory();
      const { getByText } = render(
        <Router history={history}>
          <Provider store={store}>
            <Configurator />
          </Provider>
        </Router>
      );
      fireEvent.click(getByText("Большая (35см)"));
      fireEvent.click(getByText("Бекон"));
      await act(async () => {
        fireEvent.click(getByText("Checkout 279 RUB"));
      });
      expect(store.getState()).toEqual({
        ingredients: [],
        pizza: {
          size: "big",
          dough: "thin",
          sauce: "tomato",
          cheese: [],
          veggies: [],
          meat: ["beacon"]
        }
      });
    });
  });

  describe("on pizza submit", () => {
    it("navigates to checkout", async () => {
      const history = createMemoryHistory();
      const { getByText } = render(
        <Router history={history}>
          <Provider store={store}>
            <Configurator />
          </Provider>
        </Router>
      );
      await act(async () => {
        fireEvent.click(getByText("Checkout 200 RUB"));
      });
      expect(history.location.pathname).toEqual("/checkout");
    });
  });
});
