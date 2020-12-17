import React from "react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { render, fireEvent, act } from "@testing-library/react";
import Configurator from "./Configurator";

describe("Configurator", () => {
  it("renders correctly", () => {
    const { container } = render(
      <Configurator
        _usePizzaHook={() => ({
          setPizzaConfig: () => {}
        })}
      />
    );
    expect(container).toHaveTextContent("Pizza Configurator");
  });

  describe("with default options", () => {
    it("minimal cost", () => {
      const { getByText } = render(
        <Configurator
          _usePizzaHook={() => ({
            setPizzaConfig: () => {}
          })}
        />
      );
      expect(getByText("Checkout 200 RUB")).toBeInTheDocument();
    });
  });

  describe("with additional option checked", () => {
    it("add options", async () => {
      const mockSetPizzaConfig = jest.fn();
      const history = createMemoryHistory();
      const { getByText } = render(
        <Router history={history}>
          <Configurator
            _usePizzaHook={() => ({
              setPizzaConfig: mockSetPizzaConfig
            })}
          />
        </Router>
      );
      fireEvent.click(getByText("Большая (35см)"));
      fireEvent.click(getByText("Бекон"));
      await act(async () => {
        fireEvent.click(getByText("Checkout 279 RUB"));
      });

      expect(mockSetPizzaConfig).toBeCalledWith({
        size: "big",
        dough: "thin",
        sauce: "tomato",
        cheese: [],
        veggies: [],
        meat: ["beacon"]
      });
    });
  });

  describe("on pizza submit", () => {
    it("navigates to checkout", async () => {
      const mockSetPizzaConfig = jest.fn();
      const history = createMemoryHistory();
      const { getByText } = render(
        <Router history={history}>
          <Configurator
            _usePizzaHook={() => ({
              setPizzaConfig: mockSetPizzaConfig
            })}
          />
        </Router>
      );
      await act(async () => {
        fireEvent.click(getByText("Checkout 200 RUB"));
      });
      expect(history.location.pathname).toEqual("/checkout");
    });
  });
});
