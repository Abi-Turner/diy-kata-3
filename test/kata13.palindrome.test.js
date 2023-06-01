const { palindrome } = require("../src");

describe("palindrome", () => {
  test("returns true for palindromic strings", () => {
    expect(palindrome("racecar")).toBe(true);
    expect(palindrome("level")).toBe(true);
    expect(palindrome("deed")).toBe(true);
  });

  test("returns false for non-palindromic strings", () => {
    expect(palindrome("hello")).toBe(false);
    expect(palindrome("world")).toBe(false);
    expect(palindrome("openai")).toBe(false);
  });
});
