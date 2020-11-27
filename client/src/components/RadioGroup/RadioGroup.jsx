import React from "react";

export const RadioGroup = React.forwardRef(({ options, name }, ref) => {
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
