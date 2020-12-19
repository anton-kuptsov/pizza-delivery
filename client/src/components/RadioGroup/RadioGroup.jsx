import React from "react";
import { PIZZA_OPTIONS } from "../../configData";

export const RadioGroup = React.forwardRef(({ name, items }, ref) => {
  const options = PIZZA_OPTIONS[name.toUpperCase()];
  return (
    <div>
      {Object.keys(options).map(key => (
        <label key={options[key].id}>
          <input ref={ref} type="radio" name={name} value={key} />
          {options[key].value}
        </label>
      ))}
    </div>
  );
});
