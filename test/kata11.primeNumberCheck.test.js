const { primeNumberCheck } = require("../src");

describe("primeNumberCheck", () => {
  test("returns true for prime numbers", () => {
    expect(primeNumberCheck(5)).toBe(true);
    expect(primeNumberCheck(11)).toBe(true);
    expect(primeNumberCheck(13)).toBe(true);
  });

  test("returns false for non-prime numbers", () => {
    expect(primeNumberCheck(10)).toBe(false);
    expect(primeNumberCheck(15)).toBe(false);
    expect(primeNumberCheck(20)).toBe(false);
  });
});
