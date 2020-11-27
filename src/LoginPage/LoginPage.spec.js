import { render } from "@testing-library/react";
import { LoginPage } from "./LoginPage";

describe("Login Page", () => {
  it("renders correctly", () => {
    const { container } = render(<LoginPage />);
    expect(container).toHaveTextContent("Login");
  });
});
