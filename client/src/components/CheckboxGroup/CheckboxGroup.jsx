import React from "react";
import style from "styles/CheckboxGroup.module.scss";
import { HOST } from "../../configData";

export const CheckboxGroup = React.forwardRef(({ items, selected }, ref) => {
  const isChecked = value => {
    return selected.includes(value);
  };

  return (
    <>
      {items.map(({ id, image, price, category, slug, name }) => (
        <div
          className={
            (isChecked(slug) ? style.selected + " " : "") + style.wrapper
          }
          key={id}
        >
          <label htmlFor={id}>
            <div className={style.image}>
              <img
                src={HOST + "/" + image}
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
                />
              </div>
            </div>
          </label>
        </div>
      ))}
    </>
  );
});
