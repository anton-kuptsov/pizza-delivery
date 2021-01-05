export const ingredientsRequest = () => ({
  type: "ingredients/request"
});

export const ingredientsSuccess = payload => ({
  type: "ingredients/success",
  payload
});

export const ingredientsError = error => ({
  type: "ingredients/error",
  error
});
