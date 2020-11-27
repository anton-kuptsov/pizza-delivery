import React from "react";

export const SignupPage = () => {
  return (
    <div>
      <form>
        <fieldset>
          <legend>Sign up</legend>
          <label htmlFor="name">
            Name:
            <input type="text" id="name" placeholder="name" />
          </label>
          <br />
          <label htmlFor="email">
            Email:
            <input type="email" id="email" placeholder="email@" />
          </label>
          <br />
          <label htmlFor="password">
            Password:
            <input type="password" id="password" placeholder="password" />
          </label>
          <label htmlFor="password-dbl">
            Repeat Password:
            <input type="password" id="password-dbl" placeholder="password" />
          </label>
        </fieldset>
      </form>
    </div>
  );
};
