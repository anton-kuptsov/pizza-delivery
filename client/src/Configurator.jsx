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
  getIsLoading
} from "state/ingredients/selectors";
import { fetchIngredients } from "state/ingredients/thunk";

export default function Configurator() {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

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

  return (
    <div className={"container"}>
      <form onSubmit={handleSubmit(handleCheckout)}>
        <fieldset>
          <legend>Pizza Configurator</legend>
          <div>
            <RadioGroup ref={register} items={size} />
            <RadioGroup ref={register} items={dough} />
            <RadioGroup ref={register} items={sauce} />
            <CheckboxGroup ref={register} name="cheese" items={cheese} />
            <CheckboxGroup ref={register} name="veggies" items={veggies} />
            <CheckboxGroup ref={register} name="meat" items={meat} />
          </div>
        </fieldset>
        <div className="container">
          <Button className="checkout-button">Checkout {totalCost} RUB</Button>
        </div>
      </form>
    </div>
  );
}
