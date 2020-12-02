import React from "react";
import { useForm } from "react-hook-form";

export const OrderPage = ({ formSubmit = () => {} }) => {
  const { register, handleSubmit, setValue, getValues } = useForm();
  const [ccSystem, setCCSystem] = React.useState("");

  const checkPaymentSystem = value => {
    const number = value.substr(0, 1);
    setCCSystem(number === "4" ? "Visa" : number === "5" ? "Master" : "");
  };

  const normalizeCCNumber = () => {
    const result =
      getValues("cc_number")
        .replace(/\s/g, "")
        .match(/\d{1,4}/g)
        ?.join(" ")
        .substr(0, 19) || "";
    setValue("cc_number", result);
    checkPaymentSystem(result);
  };

  const onSubmit = data => {
    formSubmit(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>Payment Info</legend>
          <div>
            <label htmlFor="first_name">
              First name:
              <input
                ref={register}
                id="first_name"
                name="first_name"
                placeholder="John"
              />
            </label>
          </div>
          <div>
            <label htmlFor="last_name">
              Last name:
              <input
                ref={register}
                id="last_name"
                name="last_name"
                placeholder="Doe"
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Email:
              <input
                ref={register}
                id="email"
                name="email"
                placeholder="john_doe@email.com"
              />
            </label>
          </div>
          <div>
            <label htmlFor="cc_number">
              Credit Card:
              <input
                ref={register}
                id="cc_number"
                name="cc_number"
                placeholder="1234 0000 0000 0000"
                onChange={() => {
                  normalizeCCNumber();
                }}
              />
              <span>{ccSystem}</span>
            </label>
          </div>
          <div>
            <label htmlFor="cc_expire">
              Expire date:
              <input
                ref={register}
                id="cc_expire"
                name="cc_expire"
                placeholder="12/25"
                maxLength="5"
                size="3"
              />
            </label>
            <label htmlFor="cc_cvv">
              CVV
              <input
                ref={register}
                id="cc_cvv"
                name="cc_cvv"
                placeholder="000"
                maxLength="3"
                size="3"
              />
            </label>
          </div>
          <div>
            <button>Buy</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
