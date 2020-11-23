import { render, fireEvent } from "@testing-library/react";
import OptionsGroup from "./RadioGroup";

describe("OptionsGroup", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <OptionsGroup
        groupName="SIZE"
        options={[
          {
            id: 1,
            type: "radio",
            value: "Стандарт (30см)",
            name: "size"
          }
        ]}
      />
    );
    expect(getByText("Стандарт (30см)")).toBeInTheDocument();
  });

  describe("on change", () => {
    it("passes pizza radio option", () => {
      const setPizzaConfig = jest.fn();
      const { getByText } = render(
        <OptionsGroup
          groupName="SIZE"
          options={[
            {
              id: 1,
              type: "radio",
              value: "Стандарт (30см)",
              name: "size"
            },
            {
              id: 2,
              type: "radio",
              value: "Большая (35см)",
              name: "size",
              additionalPrice: 50
            }
          ]}
          setPizzaConfig={setPizzaConfig}
        />
      );

      fireEvent.click(getByText("Большая (35см)"));
      expect(setPizzaConfig).toBeCalledWith({
        type: "SET_SIZE",
        payload: ["Большая (35см)"]
      });
    });

    it("passes pizza checkbox option", () => {
      const setPizzaConfig = jest.fn();
      const { getByText } = render(
        <OptionsGroup
          groupName="MEAT"
          options={[
            {
              id: 14,
              type: "checkbox",
              value: "Бекон",
              name: "meat",
              additionalPrice: 29
            },
            {
              id: 15,
              type: "checkbox",
              value: "Пепперони",
              name: "meat",
              additionalPrice: 29
            },
            {
              id: 16,
              type: "checkbox",
              value: "Ветчина",
              name: "meat",
              additionalPrice: 29
            }
          ]}
          setPizzaConfig={setPizzaConfig}
        />
      );

      fireEvent.click(getByText("Бекон"));
      fireEvent.click(getByText("Пепперони"));
      fireEvent.click(getByText("Ветчина"));

      expect(setPizzaConfig).toBeCalledWith({
        type: "SET_MEAT",
        payload: ["Бекон", "Пепперони", "Ветчина"]
      });
    });
  });
});
