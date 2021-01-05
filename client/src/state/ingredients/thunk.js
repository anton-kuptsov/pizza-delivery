import { getIngredients } from "../../api";
import {
  ingredientsError,
  ingredientsSuccess,
  ingredientsRequest
} from "./actions";

export const fetchIngredients = () => async dispatch => {
  dispatch(ingredientsRequest());
  try {
    const data = await getIngredients();
    const dataWithCorrectTypes = data.map(item => ({
      ...item,
      price: Number(item.price)
    }));
    dispatch(ingredientsSuccess(dataWithCorrectTypes));
  } catch (error) {
    dispatch(ingredientsError(error));
  }
};
