import React from "react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
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
    it("additional cost", () => {
      const mockSetPizzaConfig = jest.fn();
      const { getByText } = render(
        <Configurator
          _usePizzaHook={() => ({
            setPizzaConfig: mockSetPizzaConfig
          })}
        />
      );
      fireEvent.click(getByText("Большая (35см)"));
      expect(mockSetPizzaConfig).toBeCalledWith({
        type: "SET_SIZE",
        payload: ["Большая (35см)"]
      });

      fireEvent.click(getByText("Бекон"));
      expect(mockSetPizzaConfig).toBeCalledWith({
        type: "SET_MEAT",
        payload: ["Бекон"]
      });
    });
  });

  describe("on pizza submit", () => {
    it("navigates to checkout", () => {
      const history = createMemoryHistory();
      const { getByText } = render(
        <Router history={history}>
          <Configurator
            _usePizzaHook={() => ({
              setPizzaConfig: () => {}
            })}
          />
        </Router>
      );
      fireEvent.click(getByText("Checkout 200 RUB"));
      expect(history.location.pathname).toEqual("/checkout");
    });
  });
});
