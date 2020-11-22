import React from "react";

export const SignupPage = () => {
  return (
    <div>
      <form>
        <fieldset>
          <legend>Sign up</legend>
          <label for="name">
            Name:
            <input type="text" id="name" placeholder="name" />
          </label>
          <br />
          <label for="email">
            Email:
            <input type="email" id="email" placeholder="email@" />
          </label>
          <br />
          <label for="password">
            Password:
            <input type="password" id="password" placeholder="password" />
          </label>
          <label for="password-dbl">
            Repeat Password:
            <input type="password" id="password-dbl" placeholder="password" />
          </label>
        </fieldset>
      </form>
    </div>
  );
};
