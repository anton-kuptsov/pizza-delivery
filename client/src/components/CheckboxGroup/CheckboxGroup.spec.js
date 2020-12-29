import { render } from "@testing-library/react";
import { CheckboxGroup } from "./CheckboxGroup";

describe("CheckboxGroup", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <CheckboxGroup
        items={[
          {
            id: "1",
            name: "Моцарелла",
            category: "cheese",
            slug: "mocarella"
          }
        ]}
        selected={[]}
      />
    );
    expect(getByText("Моцарелла")).toBeInTheDocument();
  });
});
