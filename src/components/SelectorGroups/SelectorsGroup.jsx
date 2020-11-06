import Selector from "components/Selector";

export default function SelectorsGroup({
  type = "radio",
  data,
  currState,
  currPrice,
  updPrice,
  onChange
}) {
  const isRadio = type === "radio";

  const isChecked = variant =>
    isRadio
      ? currState === variant
        ? true
        : false
      : currState.indexOf(variant) !== -1;

  const handleChange = (e, price) => {
    onChange(e);
    if (isRadio) {
      price && updPrice(price);
    } else {
      const result = e.target.checked ? currPrice + price : currPrice - price;
      updPrice(result);
    }
  };

  return (
    <div>
      {data.map(item => (
        <Selector
          type={type}
          key={item.id}
          id={item.variant + item.id}
          name={item.variant}
          text={item.variant}
          value={item.value}
          checked={isChecked(item.variant)}
          onChange={e =>
            handleChange(
              e,
              isRadio ? item.price && item.price() : item.additionalPrice
            )
          }
        />
      ))}
    </div>
  );
}
