import Selector from "./Selector";

export default function SelectorsGroup({
  data = [],
  currConfig,
  updPizzaPrice,
  additionalPrice,
  updAdditionalPrice,
  onChange
}) {
  const isChecked = (type, variant) => {
    let result = false;
    result =
      type === "radio"
        ? currConfig === variant && true
        : currConfig.indexOf(variant) !== -1 && true;
    return result;
  };

  const handleChange = (e, type, price) => {
    onChange(e);
    if (type === "radio") {
      price && updPizzaPrice(price);
    } else {
      const result = e.target.checked
        ? additionalPrice + price
        : additionalPrice - price;
      updAdditionalPrice(result);
    }
  };

  return (
    <div>
      {data.map(({ type, id, variant, value, price, additionalPrice }) => (
        <Selector
          type={type}
          key={id}
          id={value + "-" + id}
          name={variant}
          text={variant}
          value={value}
          checked={isChecked(type, variant)}
          onChange={e =>
            handleChange(
              e,
              type,
              price ? price(additionalPrice) : additionalPrice
            )
          }
        />
      ))}
    </div>
  );
}
