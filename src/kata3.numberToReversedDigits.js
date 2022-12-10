//const numberToReversedDigits = (number) => {
//    const numberToReverse = number;
//    const arrayValues = Array.from(numberToReverse);
//   return arrayValues.reverse();

  // code to put the number passed into an array of digits and reverse them//
// };

//I need to make make the number into an array.
// I then need to reverse the array. 

const numberToReversedDigits = (numbers) => {
  function numbersToString(numbers) {
        return numbers.toString().split(",");
    };
  const reverseString = (numbersToString) =>
    numbersToString.map(word.split("").reverse().join(""));
};

module.exports = numberToReversedDigits;