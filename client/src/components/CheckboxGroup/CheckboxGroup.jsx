import React from "react";

export const CheckboxGroup = React.forwardRef(({ items }, ref) => {
  return (
    <div>
      {items.map(({ id, category, slug, name }) => (
        <label key={id}>
          <input ref={ref} type="checkbox" name={category} value={slug} />
          {name}
        </label>
      ))}
    </div>
  );
});
