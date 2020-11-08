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
      {data.map(({ type, id, variant, name }) => (
        <Selector
          type={type}
          key={id}
          id={name + "-" + id}
          name={name}
          text={variant}
          value={variant}
          checked={isChecked(type, variant)}
          onChange={onChange}
        />
      ))}
    </div>
  );
}
