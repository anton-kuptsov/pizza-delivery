import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setLoggedOut } from "../state/auth/actions";
import { getAuth } from "../state/auth/selectors";
import { Brand } from "./Brand";
import style from "../styles/Navbar.module.scss";
import Arrow from "./arrow.svg";
import Close from "./close.svg";

export const Navbar = ({ backBtn = false, closeBtn = false, title = "" }) => {
  const dispatch = useDispatch();
  const auth = useSelector(getAuth);
  const handleLogOut = () => {
    dispatch(setLoggedOut());
  };

  if (closeBtn) {
    return (
      <header className={style.container + " " + style.closeBtn}>
        <nav>
          <NavLink to="/">
            <img src={Close} alt="back" />
          </NavLink>
        </nav>
      </header>
    );
  }

  if (backBtn) {
    return (
      <header className={style.container + " " + style.backBtn}>
        <nav>
          <NavLink to="/">
            <img src={Arrow} alt="back" />
          </NavLink>
          <div className={style.title}>{title}</div>
        </nav>
      </header>
    );
  }

  return (
    <header className={style.container}>
      <Brand />
      <nav>
        <div style={{ display: "flex", alignItems: "center" }}>
          {auth ? (
            <>
              <div>{auth}</div>
              <div>
                <NavLink to="/orders-list">Список заказов</NavLink>
              </div>
              <div style={{ marginLeft: "1rem" }}>
                <button onClick={handleLogOut}>Выйти</button>
              </div>
            </>
          ) : (
            <>
              <div>
                <NavLink to="/login">Войти</NavLink>
              </div>
              <div style={{ marginLeft: "1rem" }}>
                <NavLink to="/signup">Регистрация</NavLink>
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};
