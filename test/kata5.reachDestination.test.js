const { reachDestination } = require("../src");

describe("reachDestination", () => {
  xtest("returns string with estimated time of arrival", (distance, speed) => {
    expect(reachDestination(44, 10)).toEqual("I should be there in 4.5 hours");
  });
});
