const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    const numbers = 12345;
    expect(numberToReversedDigits(numbers)).toEqual([5, 4, 3, 2, 1]);
  });
});