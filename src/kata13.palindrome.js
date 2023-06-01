// Palindrome Check: Write a function that takes a string as input and returns true if the string is a palindrome (reads the same forwards and backwards), and false otherwise.
const palindrome = (string) => {
  const simpleString = string.toLowerCase().match(/[a-z0-9]/g);
  return simpleString.join("") === simpleString.reverse().join("");
};

module.exports = palindrome;
