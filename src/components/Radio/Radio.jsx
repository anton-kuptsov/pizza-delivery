import "./radio.module.css";

export default function Radio({
  id = "id",
  text = "Text",
  checked = false,
  value = "",
  name = "",
  ...props
}) {
  return (
    <span>
      <label htmlFor={id}>
        <input
          {...props}
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
        />
        {text}
      </label>
    </span>
  );
}
