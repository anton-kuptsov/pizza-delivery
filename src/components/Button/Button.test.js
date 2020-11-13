import { render } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("renders correctly", () => {
    const text = "Test";
    const className = "test-class";
    const { container, getByText } = render(
      <Button className={className}>{text}</Button>
    );
    expect(container.getElementsByTagName("button")).toBeTruthy();
    expect(container.getElementsByClassName(className)).toBeTruthy();
    expect(getByText(text)).toBeInTheDocument();
  });
});
