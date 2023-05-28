const numberToReversedDigits = (number) => {
  const numberToString = String(number).split("").reverse().map(Number);
  return numberToString;
};
module.exports = numberToReversedDigits;
