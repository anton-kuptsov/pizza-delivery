import Radio from "components/Radio";

export default function GroupSize({ sizes, pizzaSize, onChange }) {
  return (
    <div>
      {sizes.map(item => (
        <Radio
          key={item.variant + item.size}
          id={item.variant}
          name={item.variant}
          text={item.size + "cm"}
          value={item.size}
          checked={pizzaSize === item.size ? true : false}
          onChange={onChange}
        />
      ))}
    </div>
  );
}
