import Radio from "components/Radio";

export default function RadioGroup({ sizes, currentState, onChange }) {
  return (
    <div>
      {sizes.map(item => (
        <Radio
          key={item.id}
          id={item.variant + item.id}
          name={item.variant}
          text={item.variant}
          value={item.value}
          checked={currentState === item.variant ? true : false}
          onChange={onChange}
        />
      ))}
    </div>
  );
}
