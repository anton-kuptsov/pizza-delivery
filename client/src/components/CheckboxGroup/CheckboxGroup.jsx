import React from "react";
import { PIZZA_OPTIONS } from "../../configData";

export const CheckboxGroup = React.forwardRef(({ name }, ref) => {
  const options = PIZZA_OPTIONS[name.toUpperCase()];
  return (
    <div>
      {Object.keys(options).map(key => (
        <label key={options[key].id}>
          <input ref={ref} type="checkbox" name={name} value={key} />
          {options[key].value}
        </label>
      ))}
    </div>
  );
});
