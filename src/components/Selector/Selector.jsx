import React from "react";

const Selector = React.forwardRef(function Selector(
  {
    id = "id",
    text = "Text",
    checked = false,
    value = "",
    name = "",
    type = "radio",
    ...props
  },
  ref
) {
  return (
    <span>
      <label htmlFor={id}>
        <input
          ref={ref}
          {...props}
          type={type}
          id={id}
          name={name}
          value={value}
          checked={checked}
        />
        {text}
      </label>
    </span>
  );
});
export default Selector;
