import { render } from "@testing-library/react";
import { NotFoundPage } from "./NotFoundPage";

describe("NotFoundPage", () => {
  it("renders correctly", () => {
    const { getByText } = render(<NotFoundPage />);
    expect(getByText("404 Page Not Found")).toBeInTheDocument();
  });
});
