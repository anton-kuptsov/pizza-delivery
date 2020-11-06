import Radio from "components/Radio";

export default function GroupSize({ sizes, pizza, onChange }) {
  return (
    <div>
      {sizes.map(item => (
        <Radio
          key={item.id}
          id={item.variant + item.id}
          name={item.variant}
          text={item.variant}
          value={item.value}
          checked={pizza.size === item.value ? true : false}
          onChange={onChange}
        />
      ))}
      {console.log(sizes, pizza.size)}
    </div>
  );
}
