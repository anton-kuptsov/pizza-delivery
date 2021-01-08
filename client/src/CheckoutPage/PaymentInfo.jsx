import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { postOrder } from "../api";
import { Loading } from "../components/Loading";
import { AddressInfo } from "./AddressInfo";
import { checkPaymentSystem, normalizeCCNumber } from "./utils";
import style from "../styles/PaymentInfo.module.scss";

export const PaymentInfo = ({
  id,
  fullPizzaDesc,
  setError,
  setSuccess,
  setDisable
}) => {
  const [isLoading, setLoading] = useState(false);

  const { register, handleSubmit, setValue, getValues, watch } = useForm();
  const [cardSystem, setCardSystem] = React.useState(null);

  const setCardNumber = id => {
    const result = normalizeCCNumber(getValues(id));
    setValue(id, result);
    setCardSystem(checkPaymentSystem(result));
  };

  const onSubmit = handleSubmit(async data => {
    try {
      setLoading(true);
      const result = await postOrder(fullPizzaDesc, data);
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

  useEffect(() => {
    const allValues = Object.values(watch());
    const result = allValues.findIndex(item => item === "");
    result === -1 ? setDisable(false) : setDisable(true);
  }, [watch, setDisable]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <form onSubmit={onSubmit} id={id}>
        <AddressInfo register={register} />

        <fieldset className={style.container}>
          <legend>Данные оплаты</legend>

          <div>
            <input
              ref={register({ required: "Required field" })}
              id="card_number"
              name="card_number"
              placeholder="Номер карты"
              onChange={e => {
                setCardNumber(e.target.id);
              }}
              className={style[cardSystem]}
            />
          </div>
          <div className={style.card_details}>
            <input
              ref={register({ required: "Required field" })}
              id="cc_expire"
              name="cc_expire"
              placeholder="MM/YYYY"
              maxLength="7"
              size="5"
            />
            <input
              ref={register({ required: "Required field" })}
              id="cc_cvv"
              name="cc_cvv"
              placeholder="CVV"
              maxLength="3"
              size="3"
            />
          </div>
          <div>
            <input
              ref={register({ required: "Required field" })}
              id="name"
              name="name"
              placeholder="Имя, как на карте"
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
};
