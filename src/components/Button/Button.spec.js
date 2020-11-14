import { render } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("renders correctly", () => {
    const { container, getByText } = render(
      <Button className="test-class">Test</Button>
    );
    expect(container.getElementsByTagName("button")).toBeTruthy();
    expect(container.getElementsByClassName("test-class")).toBeTruthy();
    expect(getByText("Test")).toBeInTheDocument();
  });
});
