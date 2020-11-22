import React from "react";

export const LoginPage = () => {
  return (
    <div>
      <form>
        <fieldset>
          <legend>Login</legend>
          <label for="email">
            Email:
            <input type="email" id="email" placeholder="email@" />
          </label>
          <label for="password">
            Password:
            <input type="password" id="password" placeholder="password" />
          </label>
        </fieldset>
      </form>
    </div>
  );
};
