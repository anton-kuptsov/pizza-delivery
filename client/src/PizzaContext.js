import { createContext, useState, useContext } from "react";
import { INITIAL_PIZZA_CONFIG } from "./configData";

const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzaConfig, setPizzaConfig] = useState({ INITIAL_PIZZA_CONFIG });
  return (
    <PizzaContext.Provider value={{ pizzaConfig, setPizzaConfig }}>
      {children}
    </PizzaContext.Provider>
  );
};

export const usePizza = () => useContext(PizzaContext);
