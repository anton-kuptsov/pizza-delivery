import Selector from "./Selector";

export default function SelectorsGroup({
  data = [],
  currConfig,
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
    if (type !== "radio") {
      updAdditionalPrice(prevState =>
        e.target.checked ? prevState + price : prevState - price
      );
    }
  };

  return (
    <div>
      {data.map(({ type, id, variant, value, additionalPrice }) => (
        <Selector
          type={type}
          key={id}
          id={value + "-" + id}
          name={variant}
          text={variant}
          value={value}
          checked={isChecked(type, variant)}
          onChange={e => handleChange(e, type, additionalPrice)}
        />
      ))}
    </div>
  );
}
