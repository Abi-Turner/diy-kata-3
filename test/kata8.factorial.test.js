const { factorial } = require("../src");

describe("factorial", () => {
  test("returns the correct factorial value", () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(5)).toBe(120);
    expect(factorial(10)).toBe(3628800);
  });
});
