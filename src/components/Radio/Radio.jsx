import "./radio.module.css";

export default function Radio({
  id = "id",
  text = "Text",
  checked = false,
  value = "",
  name = ""
}) {
  return (
    <span>
      <label for={id}>
        <input
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
