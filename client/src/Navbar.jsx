import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setLoggedOut } from "state/auth/actions";
import { getAuth } from "state/auth/selectors";

export const Navbar = () => {
  const dispatch = useDispatch();
  const auth = useSelector(getAuth);
  const handleLogOut = () => {
    dispatch(setLoggedOut());
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "1rem"
      }}
    >
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/orders-list">Orders List</Link>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {auth ? (
          <>
            <div>{auth}</div>
            <div style={{ marginLeft: "1rem" }}>
              <button onClick={handleLogOut}>LogOut</button>
            </div>
          </>
        ) : (
          <>
            <div>
              <Link to="/login">Login</Link>
            </div>
            <div style={{ marginLeft: "1rem" }}>
              <Link to="/signup">Sign up</Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};
