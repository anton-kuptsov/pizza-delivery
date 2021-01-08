export const checkPaymentSystem = value => {
  const number = value.substr(0, 1);
  switch (number) {
    case "4": {
      return "visa";
    }
    case "5": {
      return "mastercard";
    }
    case "6": {
      return "discover";
    }
    case "3": {
      return "amex";
    }
    default: {
      return null;
    }
  }
};

export const normalizeCCNumber = value => {
  return (
    value
      .replace(/\s/g, "")
      .match(/\d{1,4}/g)
      ?.join(" ")
      .substr(0, 19) || ""
  );
};
