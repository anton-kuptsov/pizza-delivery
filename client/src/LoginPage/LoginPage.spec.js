import { act, fireEvent, render } from "@testing-library/react";
import { LoginPage } from "./LoginPage";

describe("Login Page", () => {
  it("renders correctly", () => {
    const { container } = render(<LoginPage />);
    expect(container).toHaveTextContent("Login form");
    expect(container).toHaveTextContent("Email:");
    expect(container).toHaveTextContent("Password:");
    expect(container).toHaveTextContent("Login");
  });
  describe("on submit form", () => {
    it("submit login data", async () => {
      const formSubmit = jest.fn();
      const { getByText, getByLabelText } = render(
        <LoginPage formSubmit={formSubmit} />
      );

      fireEvent.input(getByLabelText("Email:"), {
        target: { value: "email@mail.com" }
      });
      fireEvent.input(getByLabelText("Password:"), {
        target: { value: "pass" }
      });

      await act(async () => {
        fireEvent.click(getByText("Login"));
      });
      expect(formSubmit).toBeCalledWith({
        email: "email@mail.com",
        password: "pass"
      });
    });
  });
});
