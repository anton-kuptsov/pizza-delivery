import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
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
  describe("on LogIn event", () => {
    it("redirects to root page", async () => {
      const history = createMemoryHistory();
      const { getByText, getByLabelText } = render(
        <Provider store={store}>
          <Router history={history}>
            <LoginPage />
          </Router>
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
        expect(history.location.pathname).toEqual("/");
      });
    });
  });
});
