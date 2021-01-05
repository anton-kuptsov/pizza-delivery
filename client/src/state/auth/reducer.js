export const authReducer = (state = false, action) => {
  switch (action.type) {
    case "auth/login": {
      return (state = action.name);
    }
    case "auth/logout": {
      return (state = false);
    }
    default:
      return state;
  }
};
