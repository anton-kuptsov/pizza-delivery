import OptionInput from "./OptionInput";

export default function SelectorsGroup({ data = [], currConfig, onChange }) {
  const isChecked = (type, value) => {
    let result = false;
    result =
      type === "radio"
        ? currConfig === value && true
        : currConfig.indexOf(value) !== -1 && true;
    return result;
  };

  return (
    <div>
      {data.map(({ type, id, value, name }) => (
        <OptionInput
          type={type}
          key={id}
          id={name + "-" + id}
          name={name}
          text={value}
          value={value}
          checked={isChecked(type, value)}
          onChange={onChange}
        />
      ))}
    </div>
  );
}
