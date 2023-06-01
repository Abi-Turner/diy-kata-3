// Factorial: Write a function that calculates and returns the factorial of a given non-negative integer.
const factorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return factorial(n - 1) * n;
};

module.exports = factorial;
