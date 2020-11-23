import { render, fireEvent } from "@testing-library/react";
import { CheckoutPage } from "./Checkout";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { INITIAL_PIZZA_CONFIG } from "../configData";

describe("Checkout", () => {
  it("renders correctly", () => {
    const history = createMemoryHistory();
    const { container, getByText } = render(
      <Router history={history}>
        <CheckoutPage
          _usePizzaHook={() => ({
            setPizza: () => {}
          })}
        />
      </Router>
    );

    expect(container.getElementsByTagName("div")).toBeTruthy();
    expect(container.getElementsByClassName("container")).toBeTruthy();
    expect(getByText("Size:")).toBeInTheDocument();
    expect(getByText("Стандарт (30см)")).toBeInTheDocument();
    expect(getByText("Dough:")).toBeInTheDocument();
    expect(getByText("Тонкое")).toBeInTheDocument();
    expect(getByText("Sauce:")).toBeInTheDocument();
    expect(getByText("Томатный")).toBeInTheDocument();
    expect(getByText("Cheese:")).toBeInTheDocument();
    expect(getByText("Veggies:")).toBeInTheDocument();
    expect(getByText("Meat:")).toBeInTheDocument();
    expect(getByText("Total cost:")).toBeInTheDocument();
    fireEvent.click(getByText("Order"));
    expect(history.location.pathname).toEqual("/order");
  });
});
