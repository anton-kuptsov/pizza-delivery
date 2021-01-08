import React from "react";
import style from "../styles/AddressInfo.module.scss";

export const AddressInfo = ({ register, onChange }) => {
  return (
    <fieldset className={style.container}>
      <legend>Адрес доставки</legend>
      <div className={style.address}>
        <input
          ref={register({ required: "Required field" })}
          id="address"
          name="address"
          placeholder="Введите адрес"
          onChange={onChange}
        />
      </div>
      <div className={style.address_details}>
        <div className={style.section}>
          <label htmlFor="entr">подъезд </label>
          <input
            ref={register}
            type="tel"
            id="entr"
            name="entrance"
            onChange={onChange}
          />
        </div>
        <div className={style.section}>
          <label htmlFor="entr">этаж</label>
          <input
            ref={register}
            type="tel"
            id="lvl"
            name="level"
            onChange={onChange}
          />
        </div>
        <div className={style.section}>
          <label htmlFor="entr">квартира</label>
          <input
            ref={register}
            type="tel"
            id="apt"
            name="apartment"
            onChange={onChange}
          />
        </div>
      </div>
    </fieldset>
  );
};
