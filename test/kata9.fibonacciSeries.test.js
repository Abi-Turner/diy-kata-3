const { fibonacci } = require("../src");

describe("fibonacci", () => {
  test("returns the correct Fibonacci series", () => {
    expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3, 5]);
    expect(fibonacci(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21]);
  });
});
