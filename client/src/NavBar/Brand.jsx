import React from "react";
import logo from "./logo.svg";
import style from "../styles/Brand.module.scss";
import { NavLink } from "react-router-dom";

export const Brand = () => {
  return (
    <NavLink to="/">
      <div className={style.container}>
        <div className={style.logo}>
          <img src={logo} alt="АртемПицца" />
        </div>
        <div className={style.name}>
          <span>артём</span>
          <span>пицца</span>
        </div>
      </div>
    </NavLink>
  );
};
