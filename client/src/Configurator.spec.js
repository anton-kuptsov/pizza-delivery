import React from "react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { render, fireEvent, act, wait, waitFor } from "@testing-library/react";
import Configurator from "./Configurator";
import { Provider } from "react-redux";
import { ingredientsReducer } from "state/ingredients/reducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { pizzaReducer } from "state/pizza/reducer";
import { authReducer } from "state/auth/reducer";
import thunk from "redux-thunk";
import { getIngredients } from "./api";

jest.mock("./api", () => ({
  getIngredients: jest.fn()
}));

const getControlledPromise = () => {
  let resolve, reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { resolve, reject, promise };
};

const store = createStore(
  combineReducers({
    ingredients: ingredientsReducer,
    pizza: pizzaReducer,
    auth: authReducer
  }),
  applyMiddleware(thunk)
);

describe("Configurator", () => {
  describe("renders correctly", () => {
    it("on loading", () => {
      const { container } = render(
        <Provider store={store}>
          <Configurator />
        </Provider>
      );
      expect(container).toHaveTextContent("Loading");
    });
  });

  describe("with fetched ingridients", () => {
    it("minimal cost with default options", async () => {
      const { promise, resolve } = getControlledPromise();
      getIngredients.mockImplementation(() => promise);
      resolve(ingridientsData);
      const { getByText } = render(
        <Provider store={store}>
          <Configurator />
        </Provider>
      );
      await waitFor(() => {
        expect(getByText("Checkout 200 RUB")).toBeInTheDocument();
      });
    });

    it("with additional options checked", async () => {
      const history = createMemoryHistory();
      const { promise, resolve } = getControlledPromise();
      getIngredients.mockImplementation(() => promise);
      resolve(ingridientsData);
      const { getByText } = render(
        <Provider store={store}>
          <Router history={history}>
            <Configurator />
          </Router>
        </Provider>
      );

      await waitFor(() => {
        expect(getByText("Checkout 200 RUB")).toBeInTheDocument();
      });
      fireEvent.click(getByText("Большая (35см)"));
      fireEvent.click(getByText("Бекон"));
      await act(async () => {
        fireEvent.click(getByText("Checkout 279 RUB"));
      });
      expect(store.getState()).toEqual({
        auth: false,
        ingredients: { data: ingridientsData, error: null, pending: false },
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
      const { promise, resolve } = getControlledPromise();
      getIngredients.mockImplementation(() => promise);
      resolve(ingridientsData);
      const { getByText } = render(
        <Router history={history}>
          <Provider store={store}>
            <Configurator />
          </Provider>
        </Router>
      );
      await waitFor(() => {
        expect(getByText("Checkout 200 RUB")).toBeInTheDocument();
      });
      await act(async () => {
        fireEvent.click(getByText("Checkout 200 RUB"));
      });
      expect(history.location.pathname).toEqual("/checkout");
    });
  });
});

const ingridientsData = [
  {
    category: "size",
    id: "hX0-HEYo",
    name: "Стандарт (30см)",
    price: 0,
    slug: "standart"
  },
  {
    category: "size",
    id: "7CdL-mnQ",
    name: "Большая (35см)",
    price: 50,
    slug: "big"
  },
  { id: "8dL-mnQ", name: "Бекон", slug: "beacon", price: 29, category: "meat" },
  { id: "9dL-mnQ", name: "Ветчина", slug: "ham", price: 29, category: "meat" },
  {
    id: "10dL-mnQ",
    name: "Пепперони",
    slug: "pepperoni",
    price: 29,
    category: "meat"
  },
  {
    id: "1dL-mnQ",
    name: "Моцарелла",
    slug: "mocarella",
    price: 29,
    category: "cheese"
  },
  {
    id: "2dL-mnQ",
    name: "Чеддер",
    slug: "cheddar",
    price: 29,
    category: "cheese"
  },
  {
    id: "3dL-mnQ",
    name: "ДорБлю",
    slug: "dorblue",
    price: 29,
    category: "cheese"
  },
  {
    id: "oKS9NeQ6",
    name: "Томатный",
    slug: "tomato",
    price: 0,
    category: "sauce"
  },
  { id: "L2II-OVm", name: "Белый", slug: "white", price: 5, category: "sauce" },
  { id: "E8bm-sTK", name: "Острый", slug: "hot", price: 10, category: "sauce" },
  { id: "TVhtinML", name: "Тонкое", slug: "thin", price: 0, category: "dough" },
  { id: "DAALLYiR", name: "Пышное", slug: "lush", price: 0, category: "dough" },
  {
    id: "4dL-mnQ",
    name: "Томаты",
    slug: "tomatos",
    price: 29,
    category: "veggies"
  },
  {
    id: "5dL-mnQ",
    name: "Грибы",
    slug: "mushrooms",
    price: 29,
    category: "veggies"
  },
  {
    id: "6dL-mnQ",
    name: "Перец",
    slug: "pepper",
    price: 29,
    category: "veggies"
  }
];
