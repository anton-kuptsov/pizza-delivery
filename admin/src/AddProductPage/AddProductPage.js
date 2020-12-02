import React from "react";
import { useForm } from "react-hook-form";

export const AddProductPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(data => {
    console.log(data);
  });
  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <legend>Add toppings</legend>
        <div>
          <label htmlFor="name">Name:</label>
          <input ref={register} id="name" type="text" name="name" />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select ref={register} id="category" name="category">
            <option>Cheese</option>
            <option>Veggies</option>
            <option>Meat</option>
          </select>
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input ref={register} id="price" type="tel" name="price" />
        </div>
        <div>
          <label htmlFor="slug">Slug:</label>
          <input ref={register} id="slug" type="text" name="slug" />
        </div>
        <div>
          <label htmlFor="picture">Picture:</label>
          <input ref={register} id="picture" type="file" name="picture" />
        </div>
        <button style={{ margin: "1rem" }}>Add topping</button>
      </fieldset>
    </form>
  );
};
