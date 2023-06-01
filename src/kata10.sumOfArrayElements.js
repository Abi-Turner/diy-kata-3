// Sum of Array Elements: Write a function that takes an array of numbers as input and returns the sum of all the elements in the array.

const sumArrayElements = (arr) => {
  const sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return sum;
};

module.exports = sumArrayElements;
