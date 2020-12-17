import { render } from "@testing-library/react";
import { CheckboxGroup } from "./CheckboxGroup";

describe("CheckboxGroup", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <CheckboxGroup
      name="cheese"
      />
    );
    expect(getByText("Моцарелла")).toBeInTheDocument();
  });
});