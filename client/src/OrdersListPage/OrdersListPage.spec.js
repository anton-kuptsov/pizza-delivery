import { render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { authReducer } from "state/auth/reducer";
import { getOrders } from "../api";
import { OrderListPage } from "./OrdersListPage";

jest.mock("../api", () => ({
  getOrders: jest.fn()
}));

const store = createStore(
  combineReducers({
    auth: authReducer
  })
);

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
    const { getByText } = render(
      <Provider store={store}>
        <OrderListPage />
      </Provider>
    );
    expect(getByText("Loading...")).toBeInTheDocument();
  });

  it("renders correctly", async () => {
    const { getByText } = render(
      <Provider store={store}>
        <OrderListPage />
      </Provider>
    );
    await waitFor(() => {
      expect(getByText("LogIn, please!")).toBeInTheDocument();
    });
  });
});
