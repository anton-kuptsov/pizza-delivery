import React from "react";
import { PIZZA_OPTIONS } from "../../configData";
import { usePizza } from "../../PizzaContext";

export const RadioGroup = ({ options, groupName, setPizzaConfig }) => {
  const { pizzaConfig } = usePizza();
  const optionsRef = React.useRef([]);

  const onChange = (actionType, arr) => {
    const selected = arr.filter(item => optionsRef.current[item.id].checked);
    setPizzaConfig({
      type: actionType,
      payload: selected.map(item => item.value)
    });
  };

  return (
    <div
      onChange={() => onChange("SET_" + groupName, PIZZA_OPTIONS[groupName])}
    >
      {options.map(({ id, value, name }) => (
        <label key={id}>
          <input
            ref={e => (optionsRef.current[id] = e)}
            type="radio"
            name={name}
            value={value}
            defaultChecked={
              value === pizzaConfig[groupName].filter(item => item === value)[0]
                ? true
                : false
            }
          />
          {value}
        </label>
      ))}
    </div>
  );
};
