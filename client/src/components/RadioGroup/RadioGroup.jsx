import React, { Fragment } from "react";
import style from "styles/RadioGroup.module.scss";

export const RadioGroup = React.forwardRef(({ items }, ref) => {
  return (
    <div className={style.wrapper}>
      {items.map(({ id, category, slug, name }) => (
        <Fragment key={id}>
          <input ref={ref} id={id} type="radio" name={category} value={slug} />
          <label htmlFor={id}>{name}</label>
        </Fragment>
      ))}
    </div>
  );
});
