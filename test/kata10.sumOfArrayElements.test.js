const { sumArrayElements } = require("../src");

describe("sumArrayElements", () => {
  test("returns the correct sum of array elements", () => {
    expect(sumArrayElements([1, 2, 3, 4, 5])).toBe(15);
    expect(sumArrayElements([10, -5, 7, 3])).toBe(15);
  });
});
