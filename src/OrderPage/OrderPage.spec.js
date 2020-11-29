import { act, fireEvent, render } from "@testing-library/react";
import { OrderPage } from "./OrderPage";

describe("OrderPage", () => {
  it("renders correctly", () => {
    const { container, getByText } = render(<OrderPage />);
    expect(container).toHaveTextContent("Payment Info");
    expect(getByText("First name:")).toBeInTheDocument();
    expect(getByText("Last name:")).toBeInTheDocument();
    expect(getByText("Email:")).toBeInTheDocument();
    expect(getByText("Credit Card:")).toBeInTheDocument();
    expect(getByText("Expire date:")).toBeInTheDocument();
    expect(getByText("CVV")).toBeInTheDocument();
    expect(getByText("Buy")).toBeInTheDocument();
  });

  it("on submit form ", async () => {
    const formSubmit = jest.fn();
    const { getByText, getByLabelText } = render(
      <OrderPage formSubmit={formSubmit} />
    );
    fireEvent.input(getByLabelText("First name:"), {
      target: { value: "John" }
    });
    fireEvent.input(getByLabelText("Last name:"), { target: { value: "Doe" } });
    fireEvent.input(getByLabelText("Email:"), {
      target: { value: "email@mail.com" }
    });
    fireEvent.input(getByLabelText("Credit Card:"), {
      target: { value: "1234123412341234" }
    });
    fireEvent.input(getByLabelText("Expire date:"), {
      target: { value: "01/25" }
    });
    fireEvent.input(getByLabelText("CVV"), { target: { value: "000" } });

    await act(async () => {
      fireEvent.click(getByText("Buy"));
    });
    expect(formSubmit).toBeCalledWith({
      first_name: "John",
      last_name: "Doe",
      email: "email@mail.com",
      cc_number: "1234 1234 1234 1234",
      cc_expire: "01/25",
      cc_cvv: "000"
    });
  });

  describe("normalizes credit card number", () => {
    it("groups by 4 digits", () => {
      const { getByLabelText } = render(<OrderPage />);
      fireEvent.input(getByLabelText("Credit Card:"), {
        target: { value: "1324000012340000" }
      });
      expect(getByLabelText("Credit Card:")).toHaveValue("1324 0000 1234 0000");
    });

    it("contains only 16 digits", () => {
      const { getByLabelText } = render(<OrderPage />);
      fireEvent.input(getByLabelText("Credit Card:"), {
        target: { value: "1324000012340000123456789" }
      });
      expect(getByLabelText("Credit Card:")).toHaveValue("1324 0000 1234 0000");
    });
    it("contains only numbers", () => {
      const { getByLabelText } = render(<OrderPage />);
      fireEvent.input(getByLabelText("Credit Card:"), {
        target: { value: "Asd132400001234as-++$@d0000" }
      });
      expect(getByLabelText("Credit Card:")).toHaveValue("1324 0000 1234 0000");
    });
  });
});
