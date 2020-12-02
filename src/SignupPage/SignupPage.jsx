import React from "react";
import { useForm } from "react-hook-form";

export const SignupPage = ({ formSubmit }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    formSubmit(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>Sign up</legend>
          <label htmlFor="name">
            Name:
            <input
              ref={register}
              type="text"
              name="name"
              id="name"
              placeholder="name"
            />
          </label>
          <br />
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
          <br />
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
          <label htmlFor="passwordDbl">
            Repeat Password:
            <input
              ref={register}
              type="password"
              id="passwordDbl"
              name="passwordDbl"
              placeholder="password"
            />
          </label>
          <div>
            <button>Register</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
