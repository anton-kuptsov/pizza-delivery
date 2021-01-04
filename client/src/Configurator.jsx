import React, { useEffect } from "react";
import { RadioGroup } from "./components/RadioGroup";
import { CheckboxGroup } from "./components/CheckboxGroup";
import { Button } from "./components/Button";
import { INITIAL_PIZZA_CONFIG } from "./configData";
import { totalCostCalc } from "./totalCostCalc";

import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setPizza } from "state/pizza/actions";
import {
  getIngredientsByCategory,
  getIsError,
  getIsLoading
} from "state/ingredients/selectors";
import { fetchIngredients } from "state/ingredients/thunk";
import style from "./styles/Configurator.module.scss";
import { PizzaPreview } from "./PizzaPreview";

export default function Configurator() {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const isError = useSelector(getIsError);

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  const size = useSelector(getIngredientsByCategory("size"));
  const dough = useSelector(getIngredientsByCategory("dough"));
  const sauce = useSelector(getIngredientsByCategory("sauce"));
  const cheese = useSelector(getIngredientsByCategory("cheese"));
  const meat = useSelector(getIngredientsByCategory("meat"));
  const veggies = useSelector(getIngredientsByCategory("veggies"));

  const { register, handleSubmit, watch } = useForm({
    defaultValues: INITIAL_PIZZA_CONFIG
  });

  const totalCost = totalCostCalc(watch(), [
    ...size,
    ...dough,
    ...sauce,
    ...cheese,
    ...meat,
    ...veggies
  ]);

  const handleCheckout = data => {
    dispatch(setPizza(data));
    history.push("/checkout");
  };

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>{isError}</div>;
  }

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit(handleCheckout)}>
        <fieldset style={{ border: "none" }}>
          <div className={style._preview}>
            <PizzaPreview
              pizza={watch()}
              size={size}
              dough={dough}
              cheese={cheese}
              meat={meat}
              veggies={veggies}
            />

            <div className={style._base}>
              <div className={style.wrapper}>
                <span>Размер</span>
                <div>
                  <RadioGroup ref={register} items={size} />
                </div>
              </div>
              <div className={style.wrapper}>
                <span>Тесто</span>
                <div>
                  <RadioGroup ref={register} items={dough} />
                </div>
              </div>
            </div>
            <div className={style._sauge}>
              <div className={style.wrapper}>
                <span></span>
                <div>
                  <RadioGroup ref={register} items={sauce} />
                </div>
              </div>
            </div>
            <div className={style._toppings}>
              <CheckboxGroup
                ref={register}
                items={cheese}
                selected={watch().cheese}
              />
            </div>
            <div className={style._toppings}>
              <CheckboxGroup
                ref={register}
                items={veggies}
                selected={watch().veggies}
              />
            </div>
            <div className={style._toppings}>
              <CheckboxGroup
                ref={register}
                items={meat}
                selected={watch().meat}
              />
            </div>
          </div>
        </fieldset>
        <div className={style.footer}>
          <Button type="submit" className={style.btn__checkout}>
            Заказать за {totalCost} руб
          </Button>
        </div>
      </form>
    </div>
  );
}
