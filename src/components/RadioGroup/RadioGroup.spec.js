import { render, fireEvent } from "@testing-library/react";
import RadioGroup from "./RadioGroup";

describe("RadioGroup", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <RadioGroup
        groupName="SIZE"
        options={[
          {
            id: 1,
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
        <RadioGroup
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
  });
});
