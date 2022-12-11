const { joinNames } = require("../src");

describe("joinNames", () => {
  const users = [
    {
      name: "Bart",
    },
    {
      name: "Lisa",
    },
    {
      name: "Maggie",
    },
  ];
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames(users)).toBe("Bart, Lisa & Maggie");
  });
});
