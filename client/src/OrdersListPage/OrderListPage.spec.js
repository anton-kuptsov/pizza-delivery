import { render, waitFor } from "@testing-library/react";
import { getOrders } from "../api";
import { OrderListPage } from "./OrderListPage";

jest.mock("../api", () => ({
  getOrders: jest.fn()
}));

const getControlledPromise = () => {
  let resolve, reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { resolve, reject, promise };
};

describe("Order List Page", () => {
  it("renders correctly", async () => {
    const { promise, resolve } = getControlledPromise();
    getOrders.mockImplementation(() => promise);
    resolve([
      {
        name: "John Doe",
        ingredients: ["Большая (35см),Тонкое,Острый|ДорБлю|Перец|Ветчина"],
        address: "email@email.com",
        card_number: "1321 4465 4679 8798"
      }
    ]);
    const { getByText } = render(<OrderListPage />);
    expect(getByText("Loading...")).toBeInTheDocument();
    await waitFor(() => {
      expect(getByText("John Doe")).toBeInTheDocument();
    });
  });
});
