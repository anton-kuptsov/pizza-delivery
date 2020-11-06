import Selector from "components/Selector";

export default function CheckboxGroup({
  type,
  data,
  currState,
  currPrice,
  updPrice,
  onChange
}) {
  const handleChange = (e, price) => {
    onChange(e);
    const result = e.target.checked ? currPrice + price : currPrice - price;
    updPrice(result);
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
          checked={currState.indexOf(item.variant) !== -1}
          onChange={e => handleChange(e, item.additionalPrice)}
        />
      ))}
    </div>
  );
}
