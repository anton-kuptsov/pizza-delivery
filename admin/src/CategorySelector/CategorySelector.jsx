import React, { forwardRef } from "react";

export const CategorySelector = forwardRef(
  ({ all = false, items, ...props }, ref) => {
    return (
      <select ref={ref} {...props}>
        {all && <option value="all">Все</option>}
        {items.map(item => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    );
  }
);
