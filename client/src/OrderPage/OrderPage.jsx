import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { usePizza } from "../PizzaContext";
import { INITIAL_PIZZA_CONFIG } from "../configData";
import { SIZE, DOUGH, SAUCE, CHEESE, VEGGIES, MEAT } from "../configData";
import { postOrder } from "api";

export const OrderPage = () => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(null);
  const [isSuccess, setSuccess] = useState(false);

  const { pizzaConfig = INITIAL_PIZZA_CONFIG } = usePizza() ?? {};
  const { size, dough, sauce, cheese, veggies, meat } = pizzaConfig;

  const pizzaOrder = `${SIZE[size].value},${DOUGH[dough].value},${
    SAUCE[sauce].value
  }|${cheese.map(item => CHEESE[item].value)}|${veggies.map(
    item => VEGGIES[item].value
  )}|${meat.map(item => MEAT[item].value)}`;

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

  const onSubmit = handleSubmit(async data => {
    const order = {
      ingredients: [pizzaOrder],
      address: data.email,
      name: data.first_name + " " + data.last_name,
      card_number: data.cc_number
    };
    try {
      setLoading(true);
      const result = await postOrder(order);
      if (result.status) {
        setSuccess(true);
      }
      setError(null);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isSuccess) {
    return <div>Your order accepted!</div>;
  }

  return (
    <div>
      {isError && <div>{isError.message}</div>}
      <form onSubmit={onSubmit}>
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
