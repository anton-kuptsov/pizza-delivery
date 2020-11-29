import { act, fireEvent, getByText, render } from "@testing-library/react";
import { SignupPage } from "./SignupPage";

describe("Signup Page", () => {
  it("renders correctly", async () => {
    const { container } = render(<SignupPage />);
    expect(container).toHaveTextContent("Sign up");
    expect(container).toHaveTextContent("Name:");
    expect(container).toHaveTextContent("Email:");
    expect(container).toHaveTextContent("Password:");
    expect(container).toHaveTextContent("Repeat Password:");
    expect(container).toHaveTextContent("Register");
  });

  it("submit form", async () => {
    const formSubmit = jest.fn();
    const { getByText, getByLabelText } = render(
      <SignupPage formSubmit={formSubmit} />
    );
    fireEvent.input(getByLabelText("Name:"), { target: { value: "John" } });
    fireEvent.input(getByLabelText("Email:"), {
      target: { value: "email@mail.com" }
    });
    fireEvent.input(getByLabelText("Password:"), {
      target: { value: "pass" }
    });
    fireEvent.input(getByLabelText("Repeat Password:"), {
      target: { value: "pass" }
    });

    await act(async () => {
      fireEvent.click(getByText("Register"));
    });
    expect(formSubmit).toBeCalledWith({
      email: "email@mail.com",
      name: "John",
      password: "pass",
      passwordDbl: "pass"
    });
  });
});
