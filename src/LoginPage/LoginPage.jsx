import React from "react";
import { useForm } from "react-hook-form";

export const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {};
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>Login</legend>
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