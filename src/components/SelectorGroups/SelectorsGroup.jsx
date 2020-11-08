import Selector from "./Selector";

export default function SelectorsGroup({ data = [], currConfig, onChange }) {
  const isChecked = (type, variant) => {
    let result = false;
    result =
      type === "radio"
        ? currConfig === variant && true
        : currConfig.indexOf(variant) !== -1 && true;
    return result;
  };

  return (
    <div>
      {data.map(({ type, id, variant, value }) => (
        <Selector
          type={type}
          key={id}
          id={value + "-" + id}
          name={variant}
          text={variant}
          value={value}
          checked={isChecked(type, variant)}
          onChange={onChange}
        />
      ))}
    </div>
  );
}
