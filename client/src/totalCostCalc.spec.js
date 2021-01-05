import { totalCostCalc } from "./totalCostCalc";

describe("calc total cost", () => {
  it("total minimal cost", () => {
    expect(
      totalCostCalc(
        {
          size: "standart",
          dough: "thin",
          sauce: "tomato",
          cheese: [],
          veggies: [],
          meat: []
        },
        [
          { slug: "standart", price: 50 },
          { slug: "thin", price: 0 },
          { slug: "tomato", price: 0 }
        ]
      )
    ).toEqual(250);
  });
});
