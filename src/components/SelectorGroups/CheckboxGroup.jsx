import Checkbox from "components/Checkbox";

export default function CheckboxGroup({ data, currentState, onChange }) {
  return (
    <div>
      {data.map(item => (
        <Checkbox
          key={item.id}
          id={item.variant + item.id}
          name={item.variant}
          text={item.variant}
          value={item.value}
          checked={currentState.indexOf(item.value) !== -1}
          onChange={onChange}
        />
      ))}
    </div>
  );
}
