import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { authReducer } from "state/auth/reducer";
import { LoginPage } from "./LoginPage";

const store = createStore(
  combineReducers({
    auth: authReducer
  })
);

describe("Login Page", () => {
  it("renders correctly", () => {
    const { container } = render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
    expect(container).toHaveTextContent("Login form");
    expect(container).toHaveTextContent("Email:");
    expect(container).toHaveTextContent("Password:");
    expect(container).toHaveTextContent("Login");
  });
  describe("on auth events", () => {
    it("on login", async () => {
      const { getByText, getByLabelText } = render(
        <Provider store={store}>
          <LoginPage />
        </Provider>
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

      await waitFor(() => {
        expect(getByText("Hello, email@mail.com")).toBeInTheDocument();
      });
    });
  });
  it("on logout", async () => {
    const { getByText, getByLabelText } = render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );

    await act(async () => {
      fireEvent.click(getByText("LogOut"));
    });

    await waitFor(() => {
      expect(getByLabelText("Email:")).toBeInTheDocument();
    });
  });
});
