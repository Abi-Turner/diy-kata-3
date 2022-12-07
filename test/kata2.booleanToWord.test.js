const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("returns 'Yes' when booleanToWord is true", () => {
    expect(booleanToWord(true)).toBe("Yes");
  });
  test("returns 'No' when booleanToWord is false", () => {
    expect(booleanToWord(false)).toBe("No");
  });
});
