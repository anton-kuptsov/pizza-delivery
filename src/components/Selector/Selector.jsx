export default function Selector({
  id = "id",
  text = "Text",
  checked = false,
  value = "",
  name = "",
  type = "radio",
  ...props
}) {
  return (
    <span>
      <label htmlFor={id}>
        <input
          {...props}
          type={type}
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
