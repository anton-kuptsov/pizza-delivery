import React from "react";

export const RadioGroup = React.forwardRef(({ items }, ref) => {
  return (
    <div>
      {items.map(({ id, category, slug, name }) => (
        <label key={id}>
          <input ref={ref} type="radio" name={category} value={slug} />
          {name}
        </label>
      ))}
    </div>
  );
});
