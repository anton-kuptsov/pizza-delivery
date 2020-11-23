import React, { createContext, useReducer, useContext } from "react";
import { reducer } from "./reducers";
import { INITIAL_PIZZA_CONFIG } from "./configData";
import { totalCostCalc } from "./totalCostCalc";

const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzaConfig, setPizzaConfig] = useReducer(
    reducer,
    INITIAL_PIZZA_CONFIG
  );
  const totalCost = totalCostCalc(pizzaConfig);

  return (
    <PizzaContext.Provider value={{ pizzaConfig, setPizzaConfig, totalCost }}>
      {children}
    </PizzaContext.Provider>
  );
};

export const usePizza = () => useContext(PizzaContext);
