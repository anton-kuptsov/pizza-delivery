import { createContext, useReducer, useContext } from "react";
import { reducer } from "./reducers";
import { INITIAL_PIZZA_CONFIG } from "./configData";

const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzaConfig, setPizzaConfig] = useReducer(
    reducer,
    INITIAL_PIZZA_CONFIG
  );
  return (
    <PizzaContext.Provider value={{ pizzaConfig, setPizzaConfig }}>
      {children}
    </PizzaContext.Provider>
  );
};

export const usePizza = () => useContext(PizzaContext);
