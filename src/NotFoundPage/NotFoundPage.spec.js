import { render } from "@testing-library/react";
import { NotFoundPage } from "./NotFoundPage";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

describe("renders correctly", () => {
  it("404 message", () => {
    const { getByText } = render(<NotFoundPage />);
    expect(getByText("404 Page Not Found")).toBeInTheDocument();
  });
  it("redirect to 404 page", () => {
    const history = createMemoryHistory();
    history.push("/route-not-exist");
    const { getByText } = render(
      <Router history={history}>
        <NotFoundPage />
      </Router>
    );
    expect(history.location.pathname).toEqual("/route-not-exist");
    expect(getByText("404 Page Not Found")).toBeInTheDocument();
  });
});
