import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedIn, setLoggedOut } from "state/auth/actions";
import { getAuth } from "state/auth/selectors";

export const LoginPage = () => {
  const auth = useSelector(getAuth);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    dispatch(setLoggedIn(data.email));
  };

  const handleLogOut = () => {
    dispatch(setLoggedOut());
  };

  if (auth) {
    return (
      <div>
        <div>Hello, {auth}</div>
        <button onClick={handleLogOut}>LogOut</button>
      </div>
    );
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>Login form</legend>
          <label htmlFor="email">
            Email:
            <input
              ref={register}
              type="email"
              id="email"
              name="email"
              placeholder="email@"
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              ref={register}
              type="password"
              id="password"
              name="password"
              placeholder="password"
            />
          </label>
          <div>
            <button>Login</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
