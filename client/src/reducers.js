export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SIZE":
      return { ...state, SIZE: action.payload };
    case "SET_DOUGH":
      return { ...state, DOUGH: action.payload };
    case "SET_SAUCE":
      return { ...state, SAUCE: action.payload };
    case "SET_CHEESE":
      return { ...state, CHEESE: action.payload };
    case "SET_VEGGIES":
      return { ...state, VEGGIES: action.payload };
    case "SET_MEAT":
      return { ...state, MEAT: action.payload };
    default:
      return state;
  }
};
