import Selector from "components/Selector";

export default function RadioGroup({
  type = "radio",
  data,
  currState,
  currPrice,
  updPrice,
  onChange
}) {
  const handleChange = (e, price) => {
    onChange(e);
    if (type === "radio") {
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
          checked={currState === item.variant ? true : false}
          onChange={e => handleChange(e, item.price && item.price())}
        />
      ))}
    </div>
  );
}
