import { render, fireEvent } from "@testing-library/react";
import CheckboxGroup from "./CheckboxGroup";

describe("CheckboxGroup", () => {
  // it("renders correctly", () => {
  //   const { getByText } = render(
  //     <CheckboxGroup
  //       groupName="SIZE"
  //       options={[
  //         {
  //           id: 1,
  //           value: "Стандарт (30см)",
  //           name: "size"
  //         }
  //       ]}
  //     />
  //   );
  //   expect(getByText("Стандарт (30см)")).toBeInTheDocument();
  // });

  describe("on change", () => {
    // it("passes pizza checkbox option", () => {
    //   const setPizzaConfig = jest.fn();
    // const { getByText } = render(
    //   <CheckboxGroup
    //     groupName="MEAT"
    //     options={[
    //       {
    //         id: 14,
    //         type: "checkbox",
    //         value: "Бекон",
    //         name: "meat",
    //         additionalPrice: 29
    //       },
    //       {
    //         id: 15,
    //         type: "checkbox",
    //         value: "Пепперони",
    //         name: "meat",
    //         additionalPrice: 29
    //       },
    //       {
    //         id: 16,
    //         type: "checkbox",
    //         value: "Ветчина",
    //         name: "meat",
    //         additionalPrice: 29
    //       }
    //     ]}
    //     setPizzaConfig={setPizzaConfig}
    //   />
    // );
    // fireEvent.click(getByText("Бекон"));
    // fireEvent.click(getByText("Пепперони"));
    // fireEvent.click(getByText("Ветчина"));
    // expect(setPizzaConfig).toBeCalledWith({
    //   type: "SET_MEAT",
    //   payload: ["Бекон", "Пепперони", "Ветчина"]
    // });
    // });
  });
});
