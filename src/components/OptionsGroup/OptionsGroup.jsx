import React from "react";
import { PIZZA_OPTIONS, INITIAL_PIZZA_CONFIG } from "../../configData";

export default function OptionsGroup({ options, groupName, setPizzaConfig }) {
  const optionsRef = React.useRef([]);

  const onChange = (type, arr) => {
    const selected = arr.filter(item => optionsRef.current[item.id].checked);
    setPizzaConfig({ type: type, payload: selected.map(item => item.value) });
  };

  return (
    <div
      onChange={() => onChange("SET_" + groupName, PIZZA_OPTIONS[groupName])}
    >
      {options.map(({ type, id, value, name }) => (
        <label key={id}>
          <input
            ref={e => (optionsRef.current[id] = e)}
            type={type}
            name={name}
            value={value}
            defaultChecked={
              value ===
              INITIAL_PIZZA_CONFIG[groupName].filter(item => item === value)[0]
                ? true
                : false
            }
          />
          {value}
        </label>
      ))}
    </div>
  );
}