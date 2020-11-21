import React from "react";

export const SignupPage = () => {
  return (
    <div>
      <form>
        <fieldset>
          <legend>Sign up</legend>
          <label>
            Name:
            <input type="text" placeholder="name" />
          </label>
          <br />
          <label>
            Email:
            <input type="email" placeholder="email@" />
          </label>
          <br />
          <label>
            Password:
            <input type="password" placeholder="password" />
          </label>
          <label>
            Repeat Password:
            <input type="password" placeholder="password" />
          </label>
        </fieldset>
      </form>
    </div>
  );
};
