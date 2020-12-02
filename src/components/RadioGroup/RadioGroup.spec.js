import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { RadioGroup } from "./RadioGroup";

describe("RadioGroup", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <RadioGroup
        name="size"
        
      />
    );
    expect(getByText("Стандарт (30см)")).toBeInTheDocument();
  });

});
