// Reverse a String: Write a function that takes a string as input and returns a new string with the characters in reverse order.
const reverseString = (string) => {
  const reverse = string.split("").reverse().join("");
  return reverse;
};

module.exports = reverseString;
