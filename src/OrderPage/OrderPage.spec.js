import { render } from "@testing-library/react";
import { OrderPage } from "./OrderPage";

describe("OrderPage", () => {
  it("renders correctly", () => {
    const { container } = render(<OrderPage />);
    expect(container).toHaveTextContent("Payment Info");
  });
});
