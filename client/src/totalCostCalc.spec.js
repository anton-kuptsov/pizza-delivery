import { totalCostCalc } from "./totalCostCalc";

describe("calc total cost", () => {
  it("total minimal cost", () => {
    expect(
      totalCostCalc({
        size: 'standart',
        dough: 'thin',
        sauce: 'tomato',
        cheese: [],
        veggies: [],
        meat:[]
      })
    ).toEqual(200);
  });
});
