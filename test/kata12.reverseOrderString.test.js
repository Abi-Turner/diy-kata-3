const { reverseString } = require("../src");

describe("reverseString", () => {
  test("returns the reversed string", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("world")).toBe("dlrow");
    expect(reverseString("OpenAI")).toBe("IAnepO");
  });
});
