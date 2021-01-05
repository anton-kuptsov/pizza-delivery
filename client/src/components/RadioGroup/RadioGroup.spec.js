import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { RadioGroup } from "./RadioGroup";

describe("RadioGroup", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <RadioGroup
        items={[
          {
            id: "1",
            name: "Стандарт (30см)",
            category: "size",
            slug: "standart"
          }
        ]}
      />
    );
    expect(getByText("Стандарт (30см)")).toBeInTheDocument();
  });
});
