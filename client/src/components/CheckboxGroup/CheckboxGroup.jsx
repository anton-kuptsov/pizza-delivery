import React, { useState } from "react";
import style from "styles/CheckboxGroup.module.scss";
import { HOST } from "../../configData";

export const CheckboxGroup = React.forwardRef(({ items, selected }, ref) => {
  const [isFocus, setFocus] = useState(false);

  const isChecked = value => {
    return selected.includes(value);
  };

  const isFocused = value => {
    return isFocus === value;
  };

  return (
    <>
      {items.map(({ id, thumbnail, price, category, slug, name }) => (
        <div
          className={
            (isChecked(slug) ? style.selected + " " : "") +
            (isFocused(slug) ? style.focused + " " : "") +
            style.wrapper
          }
          key={id}
        >
          <label htmlFor={id}>
            <div className={style.image}>
              <img
                src={HOST + "/" + thumbnail}
                alt={name}
                className={isChecked(slug) ? style.checked : ""}
              />
            </div>

            <div className={style.data}>
              <div
                className={isChecked(slug) ? style.name__checked : style.name}
              >
                {name}
              </div>
              <div className={style.price}>
                <div>{price} ₽</div>
                <input
                  ref={ref}
                  id={id}
                  type="checkbox"
                  name={category}
                  value={slug}
                  onFocus={() => setFocus(slug)}
                  onBlur={() => setFocus(null)}
                />
              </div>
            </div>
          </label>
        </div>
      ))}
    </>
  );
});
