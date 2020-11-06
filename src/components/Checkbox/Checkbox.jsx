import "./checkbox.module.css";

export default function Radio({
  id = "id",
  text = "Text",
  checked = false,
  value = "",
  name = ""
}) {
  return (
    <span>
      <label htmlFor={id}>
        <input
          type="checkbox"
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
