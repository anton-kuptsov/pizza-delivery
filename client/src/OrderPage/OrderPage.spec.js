import React from "react";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { OrderPage } from "./OrderPage";
import { postOrder } from "../api";
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

jest.mock("../api", () => ({
  postOrder: jest.fn()
}));

const getControlledPromise = () => {
  let resolve, reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { resolve, reject, promise };
};

describe("OrderPage", () => {
  it("renders correctly", () => {
    const { container, getByText } = render(
      <Provider store={store}>
        <OrderPage />
      </Provider>
    );
    expect(container).toHaveTextContent("Payment Info");
    expect(getByText("First name:")).toBeInTheDocument();
    expect(getByText("Last name:")).toBeInTheDocument();
    expect(getByText("Email:")).toBeInTheDocument();
    expect(getByText("Credit Card:")).toBeInTheDocument();
    expect(getByText("Expire date:")).toBeInTheDocument();
    expect(getByText("CVV")).toBeInTheDocument();
    expect(getByText("Buy")).toBeInTheDocument();
  });

  describe("while loading", () => {
    it("shows loading screen", async () => {
      postOrder.mockImplementation(() => getControlledPromise().promise);
      const { getByText, getByLabelText } = render(
        <Provider store={store}>
          <OrderPage />
        </Provider>
      );
      fireEvent.input(getByLabelText("First name:"), {
        target: { value: "John" }
      });
      fireEvent.input(getByLabelText("Last name:"), {
        target: { value: "Doe" }
      });
      fireEvent.input(getByLabelText("Email:"), {
        target: { value: "email@mail.com" }
      });
      fireEvent.input(getByLabelText("Credit Card:"), {
        target: { value: "1234123412341234" }
      });
      fireEvent.input(getByLabelText("Expire date:"), {
        target: { value: "01/25" }
      });
      fireEvent.input(getByLabelText("CVV"), { target: { value: "000" } });
      await act(async () => {
        fireEvent.click(getByText("Buy"));
      });
      expect(getByText("Loading...")).toBeInTheDocument();
    });
  });

  describe("on submit form", () => {
    it("submits payment info", async () => {
      const { promise, resolve } = getControlledPromise();
      postOrder.mockImplementation(() => promise);
      resolve({
        status: true
      });
      const { getByText, getByLabelText } = render(
        <Provider store={store}>
          <OrderPage />
        </Provider>
      );
      fireEvent.input(getByLabelText("First name:"), {
        target: { value: "John" }
      });
      fireEvent.input(getByLabelText("Last name:"), {
        target: { value: "Doe" }
      });
      fireEvent.input(getByLabelText("Email:"), {
        target: { value: "email@mail.com" }
      });
      fireEvent.input(getByLabelText("Credit Card:"), {
        target: { value: "1234123412341234" }
      });
      fireEvent.input(getByLabelText("Expire date:"), {
        target: { value: "01/25" }
      });
      fireEvent.input(getByLabelText("CVV"), { target: { value: "000" } });
      await act(async () => {
        fireEvent.click(getByText("Buy"));
      });
      await waitFor(() => {
        expect(getByText("Your order accepted!")).toBeInTheDocument();
      });
    });
  });

  describe("create credit card number normalization", () => {
    it("groups by 4 digits", () => {
      const { getByLabelText } = render(
        <Provider store={store}>
          <OrderPage />
        </Provider>
      );
      fireEvent.input(getByLabelText("Credit Card:"), {
        target: { value: "1324000012340000" }
      });
      expect(getByLabelText("Credit Card:")).toHaveValue("1324 0000 1234 0000");
    });

    it("limits to 16 digits", () => {
      const { getByLabelText } = render(
        <Provider store={store}>
          <OrderPage />
        </Provider>
      );
      fireEvent.input(getByLabelText("Credit Card:"), {
        target: { value: "1324000012340000123456789" }
      });
      expect(getByLabelText("Credit Card:")).toHaveValue("1324 0000 1234 0000");
    });
    it("allows numbers only", () => {
      const { getByLabelText } = render(
        <Provider store={store}>
          <OrderPage />
        </Provider>
      );
      fireEvent.input(getByLabelText("Credit Card:"), {
        target: { value: "Asd132400001234as-++$@d0000" }
      });
      expect(getByLabelText("Credit Card:")).toHaveValue("1324 0000 1234 0000");
    });
  });
});
