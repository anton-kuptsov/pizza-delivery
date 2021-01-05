import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setLoggedOut } from "../state/auth/actions";
import { getAuth } from "../state/auth/selectors";
import { Brand } from "./Brand";
import style from "../styles/Navbar.module.scss";

export const Navbar = () => {
  const dispatch = useDispatch();
  const auth = useSelector(getAuth);
  const handleLogOut = () => {
    dispatch(setLoggedOut());
  };

  return (
    <header className={style.container}>
      <Brand />
      <nav>
        <div style={{ display: "flex", alignItems: "center" }}>
          {auth ? (
            <>
              <div>{auth}</div>
              <div>
                <Link to="/orders-list">Список заказов</Link>
              </div>
              <div style={{ marginLeft: "1rem" }}>
                <button onClick={handleLogOut}>Выйти</button>
              </div>
            </>
          ) : (
            <>
              <div>
                <Link to="/login">Войти</Link>
              </div>
              <div style={{ marginLeft: "1rem" }}>
                <Link to="/signup">Регистрация</Link>
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};
