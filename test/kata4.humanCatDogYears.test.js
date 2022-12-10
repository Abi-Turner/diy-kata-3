const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  it("when passed a human age it returns an array showing human cat and dog age", () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
  });
  it("returns array with human, dog and cat age equivilant", () => {
    expect(humanCatDogYears(20)).toEqual([20, 96, 114]);
  });
  it("returns array with human, dog and cat age", () => {
    expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
  });
});

// Look Ma, no handlebars!!!
