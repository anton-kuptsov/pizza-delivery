import { Navbar } from "NavBar/Navbar";
import React from "react";
import style from "../styles/OrderResult.module.scss";
import Success from "./success.svg";
import Tractor from "./tractor.svg";

export const OrderSuccess = ({ pizza }) => {
  return (
    <>
      <Navbar closeBtn />
      <div className={style.container}>
        <div>
          <img src={Success} alt="" />
        </div>
        <div className={style.title}>Спасибо за заказ!</div>
        <div className={style.subtitle}>
          Ваш заказ успешно оплачен, пицца будет у Вас уже в течение часа
        </div>
        <div className={style.details}>
          <div>
            <span>Заказ 100500</span>
            <span className={style.time}>
              21 октября 2020, 13:40 • В работе
            </span>
          </div>
          <div className={style.pizza}>Маргарита</div>
          <div className={style.pizza_config}>{pizza}</div>
          <div className={style.line} />
          <div className={style.status}>
            <div className={style.amount}>600 руб • оплата MC *2345</div>
            <div className={style.tractor}>
              <img src={Tractor} alt="tractor" />
              Доставляется
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
