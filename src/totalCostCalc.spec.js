// import { render, fireEvent } from "@testing-library/react";
import { totalCostCalc } from "./totalCostCalc";

describe("calc total cost", () => {
  it("total minimal cost", () => {
    expect(
      totalCostCalc({
        SIZE: ["Стандарт (30см)"],
        DOUGH: ["Тонкое"],
        SAUCE: ["Томатный"]
      })
    ).toEqual(200);
  });
});
