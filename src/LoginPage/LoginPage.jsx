import React from "react";

export const LoginPage = () => {
  return (
    <div>
      <form>
        <fieldset>
          <legend>Login</legend>
          <label>
            Email:
            <input type="email" placeholder="email@" />
          </label>
          <label>
            Password:
            <input type="password" placeholder="password" />
          </label>
        </fieldset>
      </form>
    </div>
  );
};
