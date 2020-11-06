import Selector from "components/Selector";

export default function RadioGroup({ type, data, currentState, onChange }) {
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
          checked={currentState === item.variant ? true : false}
          onChange={onChange}
        />
      ))}
    </div>
  );
}
