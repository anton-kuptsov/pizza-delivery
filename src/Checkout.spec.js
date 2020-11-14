import { render } from "@testing-library/react";
import { Checkout } from "./Checkout";

describe("Checkout", () => {
  it("renders correctly", () => {
    const { container, getByText } = render(<Checkout />);

    expect(container.getElementsByTagName("div")).toBeTruthy();
    expect(container.getElementsByClassName("container")).toBeTruthy();
    expect(getByText("Size:")).toBeInTheDocument();
    expect(getByText("Стандарт (30см)")).toBeInTheDocument();
    expect(getByText("Dough:")).toBeInTheDocument();
    expect(getByText("Тонкое")).toBeInTheDocument();
    expect(getByText("Sauce:")).toBeInTheDocument();
    expect(getByText("Томатный")).toBeInTheDocument();
    expect(getByText("Cheese:")).toBeInTheDocument();
    expect(getByText("Veggies:")).toBeInTheDocument();
    expect(getByText("Meat:")).toBeInTheDocument();
    expect(getByText("200 RUB")).toBeInTheDocument();
  });
});
