import { render } from "@testing-library/react";
import { SignupPage } from "./SignupPage";

describe("Signup Page", () => {
  it("renders correctly", () => {
    const { container } = render(<SignupPage />);
    expect(container).toHaveTextContent("Sign up");
  });
});
