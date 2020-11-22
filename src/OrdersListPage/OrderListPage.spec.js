import { render } from "@testing-library/react";
import { OrderListPage } from "./OrderListPage";

describe("Order List Page", () => {
  it("renders correctly", () => {
    const { container } = render(<OrderListPage />);
    expect(container).toHaveTextContent("Order #");
  });
});
