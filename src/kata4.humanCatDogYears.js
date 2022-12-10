const humanCatDogYears = (number) => {
  let catYears = (number - 2) * 4 + 24;
  let dogYears = (number - 2) * 5 + 24;
  if (number === 1) {
    return [1, 15, 15];
  }
  if (number === 2) {
    return [2, 24, 24];
  }
  return [number, catYears, dogYears];
};

module.exports = humanCatDogYears;
