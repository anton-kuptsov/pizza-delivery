import React from "react";

export const CheckboxGroup = React.forwardRef(({ options, name }, ref) => {
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
